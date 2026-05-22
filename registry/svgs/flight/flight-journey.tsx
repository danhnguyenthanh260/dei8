'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

import { FlightVisualPanel } from './flight-visual-panel'
import { CloudWisps } from './cloud-wisps'
import { FlightState, computeFlightState } from './flight-utils'
import type { FlightNode } from './flight-visual-panel'

export type { FlightNode }

interface FlightJourneySectionProps {
  nodes: FlightNode[]
  ariaLabel?: string
}

export function FlightJourneySection({ nodes, ariaLabel = 'Animated flight journey' }: FlightJourneySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInView, setIsInView] = useState(true)
  const sectionRef = useRef<HTMLElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)
  const progressRef = useRef(0)
  const rafRef = useRef<number>(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [flightState, setFlightState] = useState<FlightState>({
    x: 70, y: 540, angle: -50, bankScale: 1, scale: 1,
    isReversing: false, viewMode: 'right', bank: 0,
  })
  const [nodePositions, setNodePositions] = useState<{ x: number; y: number }[]>([])
  const [isStationary, setIsStationary] = useState(true)
  const [activeCloudNode, setActiveCloudNode] = useState(0)
  const activeCloudNodeRef = useRef(0)

  useEffect(() => {
    if (isPaused || !isInView) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
      return
    }
    const interval = activeIndex === 0 || activeIndex === nodes.length - 1 ? 6500 : 5000
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length)
    }, interval)
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [isPaused, isInView, activeIndex, nodes.length])

  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry?.isIntersecting ?? true),
      { rootMargin: '100px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleNodeSelect = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index)
  }

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    setIsStationary(false)
    const totalLength = path.getTotalLength()
    const startProgress = progressRef.current
    const targetProgress = nodes[activeIndex]?.progress ?? 0
    const dir = targetProgress >= startProgress ? 1 : -1

    const isUTurnAction =
      (startProgress === 0 && dir === 1) ||
      (startProgress === 1 && dir === -1) ||
      (activeIndex === 0 && dir === -1)

    let start: number | null = null
    const duration = isUTurnAction
      ? 3500
      : Math.abs(targetProgress - startProgress) < 0.35
        ? 1200
        : 2200

    function cruise(timestamp: number) {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      let t = Math.min(elapsed / duration, 1)
      t = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

      const cp = startProgress + (targetProgress - startProgress) * t
      progressRef.current = cp

      let nearNode = activeIndex
      for (let i = 0; i < nodes.length; i++) {
        if (Math.abs(cp - (nodes[i]?.progress ?? 0)) < 0.11) { nearNode = i; break }
      }
      if (nearNode !== activeCloudNodeRef.current) {
        activeCloudNodeRef.current = nearNode
        setActiveCloudNode(nearNode)
      }

      const pt = path.getPointAtLength(cp * totalLength)
      const d = 0.004
      const p1 = path.getPointAtLength(Math.max(0, Math.min(1, cp - d)) * totalLength)
      const p2 = path.getPointAtLength(Math.max(0, Math.min(1, cp + d)) * totalLength)
      let angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI)

      const pMid = 0.5
      const hScale = Math.abs(targetProgress - startProgress)
      const hRange = 0.22
      const isShort = hScale < 0.35
      const pCurve = isShort ? 1 : Math.max(0, 1 - Math.pow((t - pMid) / hRange, 2))
      let bank = Math.sin(t * Math.PI) * dir * -28 * (isShort ? 0.35 : 1)

      if (activeIndex === 0 && cp <= 0.22) {
        const rawBlend = (0.22 - cp) / 0.22
        const smoothBlend = rawBlend < 0.5 ? 4 * rawBlend * rawBlend * rawBlend : 1 - Math.pow(-2 * rawBlend + 2, 3) / 2
        angle = angle + (0 - angle) * smoothBlend
        bank = bank * (1 - smoothBlend)
      }

      setFlightState(computeFlightState({ dir, startProgress, activeIndex, cp, t, pt, angle, bank, pCurve, isShort }))

      if (t < 1) {
        rafRef.current = requestAnimationFrame(cruise)
      } else {
        setIsStationary(true)
      }
    }
    rafRef.current = requestAnimationFrame(cruise)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [activeIndex, nodes])

  const handlePathRef = useCallback((node: SVGPathElement | null) => {
    if (!node) return
    pathRef.current = node
    const totalLength = node.getTotalLength()
    setNodePositions(
      nodes.map((n) => {
        const pt = node.getPointAtLength(n.progress * totalLength)
        return { x: pt.x, y: pt.y }
      })
    )
  }, [nodes])

  const activeNode = nodes[activeIndex] ?? nodes[0]!

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col justify-between overflow-hidden select-none"
      style={{ minHeight: 640, background: '#000', contain: 'layout style' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={ariaLabel}
    >
      {/* Desktop background images */}
      <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
        {nodes.map((node, i) => (
          <div
            key={`bg-${node.id}`}
            className="absolute inset-0"
            style={{ opacity: i === activeIndex ? 1 : 0, transition: 'opacity 1000ms' }}
          >
            <img
              src={node.image}
              alt={node.imageAlt}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)' }} />
      </div>

      {/* Cloud wisps layer */}
      <CloudWisps activeIndex={activeIndex} />

      {/* Flight visual panel */}
      <FlightVisualPanel
        activeIndex={activeIndex}
        flightState={flightState}
        isStationary={isStationary}
        nodePositions={nodePositions}
        handleNodeSelect={handleNodeSelect}
        handlePathRef={handlePathRef}
        activeCloudNode={activeCloudNode}
        nodes={nodes}
      />

      {/* Desktop content zone */}
      <div
        className="relative z-20 hidden lg:flex items-center px-8 xl:px-16 w-full mx-auto pointer-events-none"
        style={{ minHeight: 640, maxWidth: 1440 }}
      >
        <div style={{ width: 'clamp(360px, 34vw, 520px)' }} className="shrink-0" />

        <div className="flex-1 pointer-events-auto py-20 px-8 xl:px-12" style={{ maxWidth: 480 }}>
          <div className="mb-5 h-0.5 w-10 rounded-full" style={{ background: '#EAA800', boxShadow: '0 0 8px rgba(234,168,0,0.4)' }} />
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em]" style={{ color: '#EAA800' }} aria-live="polite">
            {activeNode.eyebrow}
          </p>
          <h2
            className="font-serif font-medium text-white"
            style={{ fontSize: 30, lineHeight: 1.13, letterSpacing: '-0.02em', minHeight: 100 }}
          >
            {activeNode.headline}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-300" style={{ minHeight: 72, opacity: 0.9 }}>
            {activeNode.body}
          </p>
          <div className="mt-8">
            <a
              href={activeNode.ctaHref}
              className="group inline-flex items-center justify-center gap-1.5 rounded-lg px-7 py-3 text-sm font-medium transition-all duration-300"
              style={{ background: '#EAA800', color: '#000' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#C88C00' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#EAA800' }}
            >
              <span>{activeNode.ctaLabel}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile content zone */}
      <div
        className="relative z-30 flex items-center pointer-events-none px-5 sm:px-8 lg:hidden"
        style={{ minHeight: 640 }}
      >
        <div className="w-full">
          <div className="pointer-events-auto py-14" style={{ maxWidth: 520 }}>
            <div className="mb-5 h-0.5 w-10 rounded-full" style={{ background: '#EAA800', boxShadow: '0 0 8px rgba(234,168,0,0.4)' }} />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em]" style={{ color: '#EAA800' }} aria-live="polite">
              {activeNode.eyebrow}
            </p>
            <h2
              className="font-serif font-medium text-white"
              style={{ fontSize: 30, lineHeight: 1.13, letterSpacing: '-0.02em', minHeight: 100 }}
            >
              {activeNode.headline}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-300" style={{ minHeight: 72, opacity: 0.9 }}>
              {activeNode.body}
            </p>
            <div className="mt-8">
              <a
                href={activeNode.ctaHref}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg px-7 py-3 text-sm font-medium"
                style={{ background: '#EAA800', color: '#000' }}
              >
                <span>{activeNode.ctaLabel}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile node nav */}
      <div className="relative z-30 lg:hidden px-5 pb-8 -mt-8 pointer-events-auto">
        <div className="flex overflow-x-auto gap-3 snap-x" style={{ scrollbarWidth: 'none' }}>
          {nodes.map((node, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={`m-${node.id}`}
                onClick={() => handleNodeSelect(i)}
                className="snap-start shrink-0 inline-flex items-center gap-3 rounded-2xl border px-5 py-2.5 text-sm font-medium transition-all"
                style={{
                  borderColor: isActive ? '#EAA800' : 'rgba(255,255,255,0.1)',
                  background: isActive ? 'rgba(234,168,0,0.15)' : 'rgba(10,10,10,0.6)',
                  color: isActive ? '#EAA800' : '#A3A3A3',
                }}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="opacity-60 font-serif font-medium">{i + 1}.</span>
                <span>{node.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

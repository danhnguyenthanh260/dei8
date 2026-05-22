import React from 'react'

import { CLOUD_SHAPES } from './flight-clouds-extra'

interface FlightCloudsProps {
  activeIndex: number
  activeCloudNode: number
  nodePositions: { x: number; y: number }[]
  hoveredCloudIndex: number | null
  nodes: { id: string }[]
}

interface CloudSubElement {
  dx: number
  dy: number
  scale: number
  rotate?: number
  opacity: number
  isMain?: boolean
  strokeWidthMul?: number
}

const NODE_CLOUD_LAYOUTS: Record<number, CloudSubElement[]> = {
  1: [
    { dx: -160, dy: 25, scale: 1.25, rotate: -6, opacity: 0.15 },
    { dx: -100, dy: 15, scale: 1.0, rotate: -2, opacity: 0.35 },
    { dx: -50, dy: 5, scale: 0.8, rotate: 2, opacity: 0.6 },
    { dx: -20, dy: -35, scale: 0.55, rotate: -3, opacity: 0.45 },
    { dx: -45, dy: -20, scale: 0.95, rotate: -5, opacity: 0.15 },
    { dx: 102, dy: 6, scale: 0.6, rotate: 3, opacity: 0.58 },
    { dx: 0, dy: 0, scale: 1.1, rotate: -1, opacity: 0.98, isMain: true },
  ],
  2: [
    { dx: -175, dy: 18, scale: 1.2, rotate: -4, opacity: 0.13 },
    { dx: -115, dy: 10, scale: 0.95, rotate: -1, opacity: 0.32 },
    { dx: -60, dy: 2, scale: 0.75, rotate: 3, opacity: 0.65 },
    { dx: 15, dy: -32, scale: 0.5, rotate: 2, opacity: 0.5 },
    { dx: -35, dy: -18, scale: 0.9, rotate: -4, opacity: 0.16 },
    { dx: 94, dy: 4, scale: 0.56, rotate: -2, opacity: 0.6 },
    { dx: 0, dy: 0, scale: 1.15, rotate: 1, opacity: 0.98, isMain: true },
  ],
  3: [
    { dx: -55, dy: 12, scale: 1.25, rotate: -4, opacity: 0.15 },
    { dx: 55, dy: -12, scale: 1.18, rotate: 4, opacity: 0.12 },
    { dx: -65, dy: -15, scale: 0.55, rotate: -2, opacity: 0.35 },
    { dx: 65, dy: 20, scale: 0.5, rotate: 3, opacity: 0.28 },
    { dx: 0, dy: 0, scale: 1.05, rotate: 0, opacity: 0.98, isMain: true },
  ],
  4: [
    { dx: 30, dy: -10, scale: 0.55, rotate: 3, opacity: 0.35 },
    { dx: 65, dy: 10, scale: 0.45, rotate: -4, opacity: 0.2 },
    { dx: 0, dy: 0, scale: 0.72, rotate: 2, opacity: 0.95, isMain: true },
  ],
}

interface GoldDust {
  dx: number
  dy: number
  r: number
  opacity: number
  delay: string
}

const GOLD_DUST_LAYOUTS: Record<number, GoldDust[]> = {
  1: [
    { dx: -120, dy: 10, r: 1.2, opacity: 0.6, delay: '0.5s' },
    { dx: -80, dy: 25, r: 1.5, opacity: 0.8, delay: '1.2s' },
    { dx: -40, dy: -15, r: 1.0, opacity: 0.5, delay: '0.2s' },
    { dx: 30, dy: 15, r: 1.8, opacity: 0.7, delay: '1.8s' },
    { dx: 70, dy: -5, r: 1.2, opacity: 0.6, delay: '0.9s' },
    { dx: -150, dy: -5, r: 1.5, opacity: 0.7, delay: '2.3s' },
    { dx: -210, dy: 15, r: 1.0, opacity: 0.4, delay: '1.5s' },
  ],
  2: [
    { dx: -140, dy: 5, r: 1.5, opacity: 0.7, delay: '0.8s' },
    { dx: -90, dy: 20, r: 1.2, opacity: 0.6, delay: '1.5s' },
    { dx: -50, dy: -10, r: 1.8, opacity: 0.8, delay: '0.3s' },
    { dx: 40, dy: 22, r: 1.0, opacity: 0.5, delay: '2.1s' },
    { dx: 85, dy: -8, r: 1.5, opacity: 0.7, delay: '1.1s' },
    { dx: -180, dy: 10, r: 1.2, opacity: 0.5, delay: '2.6s' },
  ],
  3: [
    { dx: -40, dy: 5, r: 1.2, opacity: 0.6, delay: '0.2s' },
    { dx: 40, dy: -5, r: 1.5, opacity: 0.7, delay: '0.9s' },
    { dx: -70, dy: -15, r: 1.0, opacity: 0.5, delay: '1.4s' },
    { dx: 70, dy: 15, r: 1.2, opacity: 0.6, delay: '2.0s' },
  ],
  4: [
    { dx: 25, dy: -5, r: 1.2, opacity: 0.5, delay: '0.4s' },
    { dx: 50, dy: 5, r: 1.0, opacity: 0.4, delay: '1.2s' },
  ],
}

export function FlightClouds({
  activeIndex,
  activeCloudNode,
  nodePositions,
  hoveredCloudIndex,
  nodes,
}: FlightCloudsProps): React.JSX.Element {
  return (
    <>
      {nodes.map((node, i) => {
        if (i === 0) return null
        const np = nodePositions[i]
        if (!np) return null

        const isPassed = i < activeIndex || i < activeCloudNode
        const isActive = i === activeIndex || i === activeCloudNode
        const isHovered = hoveredCloudIndex === i
        const isDispersed = isPassed || isActive

        const seedX = ((i * 17) % 20) - 10
        const seedY = ((i * 23) % 12) - 6
        const scaleSeed = 0.92 + ((i * 7) % 4) * 0.04

        const baseTransform = `translate(${np.x - 65 + seedX}px, ${np.y - 25 + seedY}px) scale(${scaleSeed})`
        const strokeColor = isHovered ? '#FFF7D6' : 'rgba(234, 168, 0, 0.65)'
        const strokeWidthVal = isHovered ? 2.0 : 1.4
        const filterVal = isHovered ? 'url(#cloudGlowHover)' : 'none'
        const fillGradientId = `cloud-fill-${node.id}`
        const shape = CLOUD_SHAPES[i] ?? CLOUD_SHAPES[1]!

        return (
          <g
            key={`fog-cloud-${node.id}`}
            className="pointer-events-none"
            style={{
              transform: baseTransform,
              transition: 'transform 1400ms cubic-bezier(0.25,1,0.5,1)',
            }}
          >
            <defs>
              <radialGradient id={fillGradientId} cx="35%" cy="30%" r="65%">
                {isHovered ? (
                  <>
                    <stop offset="0%" stopColor="#FFFBE6" stopOpacity="0.48" />
                    <stop offset="25%" stopColor="#EAA800" stopOpacity="0.25" />
                    <stop offset="65%" stopColor="#0B0B0C" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#020203" stopOpacity="1" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#FFF8D6" stopOpacity="0.32" />
                    <stop offset="35%" stopColor="#EAA800" stopOpacity="0.14" />
                    <stop offset="75%" stopColor="#0B0B0C" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#020203" stopOpacity="1" />
                  </>
                )}
              </radialGradient>
            </defs>

            <g className={!isDispersed ? 'dei8-drift-gentle' : ''}>
              {NODE_CLOUD_LAYOUTS[i]?.map((elem, idx) => {
                const finalTranslateX = isDispersed ? elem.dx * 2.8 : elem.dx
                const finalTranslateY = isDispersed ? elem.dy * 2.8 : elem.dy
                const finalScale = isDispersed ? elem.scale * 0.15 : elem.scale
                const finalRotate = isDispersed ? (elem.rotate ?? 0) * 2.5 : (elem.rotate ?? 0)
                const finalOpacity = isDispersed ? 0 : elem.opacity

                const subStyle = {
                  transform: `translate(${finalTranslateX}px, ${finalTranslateY}px) scale(${finalScale}) rotate(${finalRotate}deg)`,
                  opacity: finalOpacity,
                  transition: 'all 1400ms cubic-bezier(0.25,1,0.5,1)',
                }

                if (elem.isMain) {
                  return (
                    <g key={`main-${idx}`} style={subStyle}>
                      <path d={shape.main} fill={`url(#${fillGradientId})`} stroke={strokeColor} strokeWidth={strokeWidthVal * 1.25} filter={filterVal} />
                      <path d={shape.inner1} fill="none" stroke={isHovered ? 'rgba(255,255,255,0.25)' : 'rgba(234,168,0,0.35)'} strokeWidth="0.85" />
                      <path d={shape.inner2} fill="none" stroke={isHovered ? 'rgba(255,255,255,0.18)' : 'rgba(234,168,0,0.25)'} strokeWidth="0.75" />
                      <path d={shape.inner3} fill="none" stroke={isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(234,168,0,0.2)'} strokeWidth="0.65" />
                    </g>
                  )
                }

                return (
                  <g key={`sub-${idx}`} style={subStyle}>
                    <path d={shape.main} fill={`url(#${fillGradientId})`} stroke={strokeColor} strokeWidth={strokeWidthVal * (elem.strokeWidthMul ?? 0.65)} />
                    <path d={shape.inner1} fill="none" stroke={isHovered ? 'rgba(255,255,255,0.18)' : 'rgba(234,168,0,0.22)'} strokeWidth="0.65" />
                    <path d={shape.inner2} fill="none" stroke={isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(234,168,0,0.15)'} strokeWidth="0.55" />
                    <path d={shape.inner3} fill="none" stroke={isHovered ? 'rgba(255,255,255,0.08)' : 'rgba(234,168,0,0.1)'} strokeWidth="0.45" />
                  </g>
                )
              })}

              {!isDispersed &&
                GOLD_DUST_LAYOUTS[i]?.map((dust, idx) => {
                  const starClass = idx % 3 === 0 ? 'dei8-star-1' : idx % 3 === 1 ? 'dei8-star-2' : 'dei8-star-3'
                  return (
                    <circle
                      key={`dust-${idx}`}
                      cx={dust.dx}
                      cy={dust.dy}
                      r={dust.r}
                      fill="#FFF8D6"
                      className={starClass}
                      style={{ opacity: dust.opacity, animationDelay: dust.delay }}
                    />
                  )
                })}
            </g>
          </g>
        )
      })}
    </>
  )
}

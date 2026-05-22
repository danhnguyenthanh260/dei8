'use client'

import { useState } from 'react'

import { AircraftImage } from './aircraft-image'
import { FlightSkyDecor } from './flight-sky-decor'
import { FlightClouds } from './flight-clouds'
import { FlightBirds } from './flight-birds'
import { FlightPlants } from './flight-plants'
import { FlightSvgDefs } from './flight-svg-defs'
import {
  PANEL_W,
  PANEL_H,
  PATH_D,
  FLIGHT_LAYOUTS,
  ROTATION_CONFIG,
} from './flight-constants'

export interface FlightNode {
  id: string
  label: string
  eyebrow: string
  headline: string
  body: string
  keyword: string
  image: string
  imageAlt: string
  ctaLabel: string
  ctaHref: string
  progress: number
}

interface FlightState {
  x: number
  y: number
  angle: number
  bankScale: number
  scale: number
  isReversing?: boolean
  viewMode?: 'right' | 'quarter-right' | 'headon' | 'quarter-left' | 'transleft' | 'transright' | 'left'
  bank?: number
}

interface FlightVisualPanelProps {
  activeIndex: number
  flightState: FlightState
  isStationary: boolean
  nodePositions: { x: number; y: number }[]
  handleNodeSelect: (index: number) => void
  handlePathRef: (node: SVGPathElement | null) => void
  activeCloudNode: number
  nodes: FlightNode[]
}

export function FlightVisualPanel({
  activeIndex,
  flightState,
  isStationary,
  nodePositions,
  handleNodeSelect,
  handlePathRef,
  activeCloudNode,
  nodes,
}: FlightVisualPanelProps) {
  const [hoveredCloudIndex, setHoveredCloudIndex] = useState<number | null>(null)

  const renderAircraftLayer = (isNightMode: boolean) => (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none ${isNightMode ? 'dei8-aircraft-night' : ''}`}
      style={{
        left: `${(flightState.x / PANEL_W) * 100}%`,
        top: `${(flightState.y / PANEL_H) * 100}%`,
      }}
    >
      <div className={isStationary ? 'dei8-float' : ''}>
        {(() => {
          const cfg = ROTATION_CONFIG[flightState.viewMode ?? 'right']
          const rot =
            flightState.angle * cfg.angleMul +
            cfg.offset +
            (flightState.bank ?? 0) * cfg.angleMul * 0.45

          return (
            <div
              style={{
                transform: `rotate(${rot}deg) scale(${flightState.scale}) scaleY(${flightState.bankScale})`,
                transformOrigin: 'center center',
                transition: 'transform 90ms linear',
                willChange: 'transform',
              }}
            >
              <AircraftImage viewMode={flightState.viewMode ?? 'right'} />
            </div>
          )
        })()}
      </div>
    </div>
  )

  return (
    <div
      className="absolute left-0 top-0 bottom-0 z-10 hidden lg:block pointer-events-none"
      style={{ width: 'clamp(360px, 34vw, 520px)' }}
      data-testid="flight-panel"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dei8DriftGentle {
          0% { transform: translate(0, 0); }
          50% { transform: translate(4px, -2px); }
          100% { transform: translate(0, 0); }
        }
        .dei8-drift-gentle { animation: dei8DriftGentle 8s ease-in-out infinite; }

        @keyframes dei8Float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .dei8-float { animation: dei8Float 4s ease-in-out infinite; }

        @keyframes dei8RouteFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -60; }
        }
        .dei8-route-flow {
          animation: dei8RouteFlow 2.5s linear infinite;
          stroke-dasharray: 6 10;
        }

        @keyframes dei8PingSlow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .dei8-ping-slow { animation: dei8PingSlow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite; }

        .dei8-aircraft-night path[fill*="fuselage"],
        .dei8-aircraft-night path[fill*="Wing"],
        .dei8-aircraft-night path[fill*="wing"],
        .dei8-aircraft-night path[fill*="engine"] {
          filter: brightness(0.35) contrast(1.6) saturate(0.8);
        }
        .dei8-aircraft-night line[stroke*="rgba(31,41,55"] {
          stroke: #FFFBE6 !important;
          stroke-width: 1.8px !important;
          filter: drop-shadow(0 0 5px #EAA800);
        }
        .dei8-aircraft-night path[fill*="cockpit"] {
          filter: brightness(0.8) sepia(0.8) hue-rotate(-20deg) saturate(2.5);
        }
        .dei8-aircraft-night circle[fill="#10B981"] {
          filter: drop-shadow(0 0 4px #10B981) brightness(1.6) saturate(1.5);
        }
        .dei8-aircraft-night circle[fill="#EF4444"] {
          filter: drop-shadow(0 0 4px #EF4444) brightness(1.6) saturate(1.5);
        }
      ` }} />

      <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 86% 0, 62% 100%, 0 100%)' }}>
        {/* Night sky */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(28deg, #050507 0%, #0F0F15 45%, #181822 75%, #222232 100%)' }} />

        {/* Day sky overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(28deg, #C88C00 0%, #EAA800 35%, #FFF7D6 75%, #FFFDF0 100%)',
            clipPath: activeIndex === 4 ? 'circle(150% at 20% 85%)' : 'circle(0% at 20% 85%)',
            opacity: activeIndex === 4 ? 0.96 : 0,
            willChange: 'clip-path, opacity',
            transitionProperty: 'all',
            transitionDuration: activeIndex === 4 ? '4500ms' : '1500ms',
            transitionDelay: activeIndex === 4 ? '0s' : '1500ms',
            transitionTimingFunction: 'ease-in-out',
          }}
        />

        {/* Crescent moon */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '9%', left: '71%', width: '45px', height: '45px',
            borderRadius: '50%',
            boxShadow: '12px 12px 0 0 #FEFBE8',
            transform: activeIndex !== 4 ? 'translateX(0) rotate(-15deg)' : 'translateX(100px) translateY(20px) rotate(-30deg)',
            opacity: activeIndex !== 4 ? 1 : 0,
            filter: 'drop-shadow(0 0 15px rgba(254, 251, 232, 0.5))',
            willChange: 'transform, opacity',
            transitionProperty: 'all',
            transitionDuration: activeIndex !== 4 ? '3000ms' : '2000ms',
            transitionDelay: activeIndex !== 4 ? '1500ms' : '0s',
            transitionTimingFunction: 'ease-out',
          }}
        />
      </div>

      <div className="relative w-full h-full">
        <svg
          viewBox={`0 0 ${PANEL_W} ${PANEL_H}`}
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <FlightSvgDefs flightX={flightState.x} />
          <FlightSkyDecor activeIndex={activeIndex} />

          {/* Stylized Sun — appears at node 4 */}
          <g
            className="pointer-events-none"
            style={{
              transform: activeIndex === 4 ? 'scale(1)' : 'scale(0)',
              transformOrigin: '70px 540px',
              opacity: activeIndex === 4 ? 0.95 : 0,
              transitionProperty: 'all',
              transitionDuration: activeIndex === 4 ? '4500ms' : '800ms',
              transitionDelay: '0s',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            <circle cx="70" cy="540" r="60" fill="url(#sunGlowGrad)" />
            <circle cx="70" cy="540" r="26" fill="#EAA800" stroke="#FFFBE6" strokeWidth="1.2" />
          </g>

          {/* Diagonal border glow */}
          <line x1="360" y1="0" x2="259" y2="620" stroke="url(#borderGlow)" strokeWidth="1.5" opacity="0.8" />

          {/* Destination marker */}
          <g style={{ opacity: activeIndex === 4 ? 0 : 0.6, transition: 'opacity 1000ms ease-in-out' }}>
            <circle cx="320" cy="95" r="14" fill="none" stroke="#EAA800" strokeWidth="0.5" opacity="0.3" />
            <circle cx="320" cy="95" r="5" fill="none" stroke="#EAA800" strokeWidth="1.2" />
            <circle cx="320" cy="95" r="1.5" fill="#EAA800" />
          </g>

          {/* Base dotted route */}
          <path ref={handlePathRef} d={PATH_D} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="6 10" strokeLinecap="round" />

          {/* Active glowing route */}
          <path d={PATH_D} fill="none" stroke="url(#activeTrailGrad)" strokeWidth="3.2" filter="url(#routeGlow)" clipPath="url(#activeRouteClip)" strokeLinecap="round" />

          {/* Particle vapor trail */}
          <path d={PATH_D} fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" clipPath="url(#activeRouteClip)" strokeLinecap="round" className="dei8-route-flow" />

          {/* Radar beacons */}
          {nodes.map((node, i) => {
            if (i === 4 && activeIndex === 4) return null
            const isActive = i === activeIndex
            const np = nodePositions[i]
            if (!np) return null
            return (
              <g key={`beacon-${node.id}`} opacity={isActive ? 1 : 0.65}>
                {isActive && (
                  <circle cx={np.x} cy={np.y} r="9" fill="none" stroke="#EAA800" strokeWidth="0.5" className="dei8-ping-slow" style={{ transformOrigin: `${np.x}px ${np.y}px` }} />
                )}
                <circle cx={np.x} cy={np.y} r={isActive ? 3 : 2} fill={isActive ? '#FFF' : '#EAA800'} stroke={isActive ? '#EAA800' : 'none'} strokeWidth={isActive ? 0.8 : 0} />
              </g>
            )
          })}

          <FlightClouds
            activeIndex={activeIndex}
            activeCloudNode={activeCloudNode}
            nodePositions={nodePositions}
            hoveredCloudIndex={hoveredCloudIndex}
            nodes={nodes}
          />

          <FlightBirds activeIndex={activeIndex} />
          <FlightPlants activeIndex={activeIndex} />
        </svg>

        {/* Info cards */}
        {nodes.map((node, i) => {
          const isActive = i === activeIndex
          const isPassed = i < activeIndex
          const layout = FLIGHT_LAYOUTS[i]
          const np = nodePositions[i]
          if (!layout || !np) return null

          const lp = (layout.cardX / PANEL_W) * 100
          const tp = (layout.cardY / PANEL_H) * 100
          const nlp = (np.x / PANEL_W) * 100
          const ntp = (np.y / PANEL_H) * 100

          const isRevealed =
            i === activeIndex ||
            hoveredCloudIndex === i ||
            (activeCloudNode === i && !isStationary)

          return (
            <div key={`card-${node.id}`}>
              <div
                className={`absolute pointer-events-auto select-none z-20 ${isRevealed ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}
                style={{
                  left: `${lp}%`, top: `${tp}%`,
                  transition: 'opacity 700ms ease-out, transform 700ms ease-out',
                }}
              >
                <div
                  className="rounded-xl p-3 flex flex-col -translate-x-1/2 -translate-y-[112%]"
                  style={{
                    minWidth: 150,
                    background: 'rgba(10,10,10,0.95)',
                    border: '1px solid rgba(234,168,0,0.3)',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.8), 0 2px 8px rgba(234,168,0,0.15)',
                    transformOrigin: 'bottom center',
                  }}
                >
                  <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#EAA800', fontWeight: 700 }}>
                    {node.eyebrow}
                  </span>
                  <span className="text-sm font-extrabold text-white mt-1">{node.label}</span>
                  <span className="text-[11px] font-medium mt-1" style={{ color: '#D4D4D4' }}>{node.keyword}</span>
                </div>
              </div>

              <button
                onClick={() => handleNodeSelect(i)}
                onMouseEnter={() => setHoveredCloudIndex(i)}
                onMouseLeave={() => setHoveredCloudIndex(null)}
                className="absolute group flex items-center justify-center -translate-x-1/2 -translate-y-1/2 focus:outline-none rounded-full z-30 pointer-events-auto"
                style={{ left: `${nlp}%`, top: `${ntp}%`, width: 48, height: 48 }}
                aria-current={isActive ? 'step' : undefined}
                aria-label={node.label}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: isActive ? '#EAA800' : isPassed ? '#C88C00' : 'rgba(255,255,255,0.2)',
                    backgroundColor: isActive ? '#EAA800' : isPassed ? 'rgba(234,168,0,0.1)' : '#0A0A0A',
                    transform: isActive ? 'scale(1.25)' : 'scale(1)',
                    boxShadow: isActive ? '0 0 12px rgba(234,168,0,0.9)' : isPassed ? '0 0 6px rgba(234,168,0,0.4)' : 'none',
                  }}
                />
              </button>
            </div>
          )
        })}

        {/* Night aircraft layer */}
        <div className="absolute inset-0 z-40 pointer-events-none">{renderAircraftLayer(true)}</div>

        {/* Day aircraft layer (clipped by sun radiance) */}
        <div
          className="absolute inset-0 z-40 pointer-events-none"
          style={{
            clipPath: activeIndex === 4 ? 'circle(150% at 20% 85%)' : 'circle(0% at 20% 85%)',
            transitionProperty: 'clip-path',
            transitionDuration: activeIndex === 4 ? '4500ms' : '1500ms',
            transitionDelay: activeIndex === 4 ? '0s' : '1500ms',
            transitionTimingFunction: 'ease-in-out',
            willChange: 'clip-path',
          }}
        >
          {renderAircraftLayer(false)}
        </div>
      </div>
    </div>
  )
}

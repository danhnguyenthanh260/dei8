import React from 'react'

import { CLOUD_SHAPES } from './flight-clouds-extra'

interface FlightBirdsProps {
  activeIndex: number
}

interface BirdConfig {
  id: number
  y: number
  scale: number
  opacity: number
  speed: number
  delay: number
  flapDuration: number
}

const BIRDS: BirdConfig[] = [
  { id: 1, y: 95, scale: 0.8, opacity: 0.75, speed: 10.5, delay: 0.5, flapDuration: 1.1 },
  { id: 2, y: 82, scale: 0.62, opacity: 0.55, speed: 13.0, delay: 2.8, flapDuration: 1.4 },
  { id: 3, y: 110, scale: 0.88, opacity: 0.8, speed: 9.2, delay: 0, flapDuration: 1.0 },
  { id: 4, y: 88, scale: 0.68, opacity: 0.68, speed: 11.5, delay: 4.8, flapDuration: 1.2 },
  { id: 5, y: 105, scale: 0.55, opacity: 0.48, speed: 14.5, delay: 6.5, flapDuration: 1.5 },
  { id: 6, y: 90, scale: 0.72, opacity: 0.7, speed: 11.0, delay: 8.5, flapDuration: 1.25 },
]

export function FlightBirds({ activeIndex }: FlightBirdsProps): React.JSX.Element {
  const isDayMode = activeIndex === 4

  return (
    <g className="pointer-events-none select-none">
      <defs>
        <radialGradient id="dayCloudGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#FFFDF0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FFFDF0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g
        style={{
          opacity: isDayMode ? 0.88 : 0,
          transition: `opacity ${isDayMode ? '4500ms' : '1000ms'} ease-in-out`,
          transitionDelay: isDayMode ? '1500ms' : '0ms',
        }}
      >
        {CLOUD_SHAPES[1] && (
          <g className="dei8-drift-gentle" style={{ transform: 'translate(210px, 110px) scale(0.85) rotate(2deg)', animationDelay: '-1.5s' }}>
            <path d={CLOUD_SHAPES[1].main} fill="url(#dayCloudGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" />
            <path d={CLOUD_SHAPES[1].inner1} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
            <path d={CLOUD_SHAPES[1].inner2} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />
          </g>
        )}
        {CLOUD_SHAPES[3] && (
          <g className="dei8-drift-gentle" style={{ transform: 'translate(70px, 260px) scale(1.15) rotate(-3deg)', animationDelay: '-4.2s' }}>
            <path d={CLOUD_SHAPES[3].main} fill="url(#dayCloudGrad)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.85" />
            <path d={CLOUD_SHAPES[3].inner1} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" />
            <path d={CLOUD_SHAPES[3].inner2} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
          </g>
        )}
      </g>

      <g
        style={{
          opacity: isDayMode ? 1 : 0,
          transition: `opacity ${isDayMode ? '3000ms' : '800ms'} ease-in-out`,
          transitionDelay: isDayMode ? '3500ms' : '0ms',
        }}
      >
        {BIRDS.map((b) => (
          <g key={b.id} className={`dei8-bird-path-${b.id}`}>
            <path
              d="M -10,-3 Q -5,-8 0,-1 Q 5,-8 10,-3 Q 4,1 0,3 Q -4,1 -10,-3 Z"
              fill="rgba(45, 38, 25, 0.72)"
              className={`dei8-bird-flap-${b.id}`}
              style={{ transform: `scale(${b.scale})`, transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          </g>
        ))}
      </g>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dei8BirdFlap {
          0%, 100% { transform: scaleY(1.0); }
          50% { transform: scaleY(0.76); }
        }
        ${BIRDS.map((b) => `
          @keyframes dei8BirdFlight-${b.id} {
            0%   { transform: translate3d(-50px, ${b.y}px, 0) scale(1.0); opacity: 0; }
            15%  { transform: translate3d(0px, ${b.y}px, 0) scale(0.95); opacity: ${b.opacity}; }
            85%  { transform: translate3d(225px, ${b.y - 4}px, 0) scale(0.55); opacity: ${b.opacity * 0.4}; }
            100% { transform: translate3d(275px, ${b.y - 6}px, 0) scale(0.42); opacity: 0; }
          }
          .dei8-bird-path-${b.id} { animation: dei8BirdFlight-${b.id} ${b.speed}s linear infinite ${b.delay}s; }
          .dei8-bird-flap-${b.id} { animation: dei8BirdFlap ${b.flapDuration}s ease-in-out infinite; }
        `).join('')}
      ` }} />
    </g>
  )
}

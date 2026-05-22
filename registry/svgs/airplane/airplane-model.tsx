import * as React from 'react'
import { useId } from 'react'

export type AirplaneView = 'side' | 'side-reverse' | 'quarter-left' | 'quarter-right' | 'headon' | 'trans-left'

interface AirplaneModelProps extends React.SVGProps<SVGSVGElement> {
  view: AirplaneView
  idPrefix?: string
}

/**
 * Master Airplane Geometry Model
 * 
 * Angle system:
 * - side: full side profile, nose points right.
 * - side-reverse: mirrored side profile, nose points left.
 * - quarter-left: same aircraft in 3/4 view, nose points left, approx 35-40° yaw.
 * - quarter-right: mirrored 3/4 view, nose points right, same yaw magnitude.
 * - headon: frontal view of the same aircraft.
 * - trans-left: dynamic transitional/banking variant based on the same geometry.
 */
export function AirplaneModel({ view, idPrefix: explicitIdPrefix, className, ...props }: AirplaneModelProps) {
  const reactId = useId()
  const idPrefix = explicitIdPrefix || reactId.replace(/:/g, '')

  const gradIds = {
    fuselage: `${idPrefix}-fuselageGrad`,
    nearWing: `${idPrefix}-nearWingGrad`,
    farWing: `${idPrefix}-farWingGrad`,
    engine: `${idPrefix}-engineGrad`,
    cockpit: `${idPrefix}-cockpitGrad`,
  }

  const defs = (
    <defs>
      <linearGradient id={gradIds.fuselage} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#F9FAFB" />
        <stop offset="80%" stopColor="#D1D5DB" />
        <stop offset="100%" stopColor="#9CA3AF" />
      </linearGradient>
      <linearGradient id={gradIds.nearWing} x1="0%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#F3F4F6" />
        <stop offset="50%" stopColor="#C8CCD0" />
        <stop offset="100%" stopColor="#9CA3AF" />
      </linearGradient>
      <linearGradient id={gradIds.farWing} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D1D5DB" />
        <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id={gradIds.engine} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#9CA3AF" />
        <stop offset="100%" stopColor="#4B5563" />
      </linearGradient>
      <linearGradient id={gradIds.cockpit} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
    </defs>
  )

  const renderSide = () => (
    <g transform="translate(-4, 3)">
      <path d="M 115 30 L 98 14 L 90 15 L 102 30 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
      <path
        d="M 170 38 C 168 33, 158 30, 145 30 L 35 31 C 26 31, 20 34, 18 38 C 20 42, 26 44, 35 44 L 145 43 C 158 43, 168 41, 170 38 Z"
        fill={`url(#${gradIds.fuselage})`}
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="0.5"
      />
      <path d="M 25 42 C 35 44, 55 44, 85 44 L 145 43 C 155 43, 165 42, 168 40" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" />
      <line x1="55" y1="33" x2="140" y2="33" stroke="rgba(31,41,55,0.7)" strokeWidth="1.2" strokeDasharray="2 3" strokeLinecap="round" />
      <path d="M 30 38 L 155 37 L 154.5 38.2 L 30.5 39.2 Z" fill="#EAA800" opacity="0.95" />
      <path d="M 152 32.2 C 157 32.2, 162 33.5, 163 36 C 161 37.5, 154 37, 149 36 Z" fill={`url(#${gradIds.cockpit})`} stroke="rgba(255,255,255,0.4)" strokeWidth="0.3" />
      <path d="M 30 31 L 18 12 L 13 14 L 24 31 Z" fill={`url(#${gradIds.fuselage})`} stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" />
      <path d="M 28 44 L 16 52 L 13 51 L 23 43 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
      <path d="M 115 44 L 80 70 L 65 68 L 95 44 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
      <g>
        <path d="M 82 54 L 78 55 L 82 56 Z" fill="#374151" />
        <path d="M 82 53 C 82 50, 99 50, 99 55 C 99 60, 82 60, 82 55 Z" fill={`url(#${gradIds.engine})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
        <ellipse cx="98" cy="55" rx="1.2" ry="3.2" fill="#111827" />
        <polygon points="98,55 96.5,54.2 96.5,55.8" fill="#EAA800" />
      </g>
      <g>
        <circle cx="80" cy="70" r="1.8" fill="#10B981" />
        <circle cx="80" cy="70" r="4.5" fill="#10B981" opacity="0.35" className="animate-pulse" />
      </g>
    </g>
  )

  const renderSideReverse = () => (
    <g transform="translate(90, 40) scale(-1, 1) translate(-90, -40)">
      {renderSide()}
    </g>
  )

  const renderQuarterLeft = () => (
    <g transform="translate(0, 5)">
      <path d="M 105 28 C 105 26, 115 26, 115 29 C 115 32, 105 32, 105 28 Z" fill={`url(#${gradIds.engine})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
      <path d="M 85 30 L 115 12 L 125 12 L 95 32 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
      <path d="M 140 32 L 155 18 L 160 20 L 145 38 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3"/>
      <path d="M 135 30 L 145 10 L 152 10 L 142 30 Z" fill={`url(#${gradIds.fuselage})`} stroke="rgba(255,255,255,0.35)" strokeWidth="0.4"/>
      <g>
        <circle cx="150" cy="12" r="1.5" fill="#EF4444" />
        <circle cx="150" cy="12" r="4.0" fill="#EF4444" opacity="0.4" className="animate-pulse" />
      </g>
      <path 
        d="M 145 30 L 40 28 C 22 28, 14 30, 12 36 C 14 42, 22 44, 40 44 L 145 42 C 155 42, 160 40, 162 36 C 160 32, 155 30, 145 30 Z" 
        fill={`url(#${gradIds.fuselage})`} 
        stroke="rgba(255,255,255,0.55)" 
        strokeWidth="0.5"
      />
      <path d="M 140 38 L 35 38 C 25 38, 15 39, 14 40 C 15 41, 25 40, 35 40 L 140 40" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" />
      <line x1="45" y1="33" x2="135" y2="33" stroke="rgba(31,41,55,0.7)" strokeWidth="1.2" strokeDasharray="1.5 2.5" strokeLinecap="round" />
      <path d="M 30 36 L 145 36 L 144 37.5 L 30 37.5 Z" fill="#EAA800" opacity="0.95" />
      <path d="M 35 30 C 25 30, 18 31, 16 34 L 20 36 C 24 33, 30 32, 40 31 Z" fill={`url(#${gradIds.cockpit})`} stroke="rgba(255,255,255,0.4)" strokeWidth="0.3"/>
      <path d="M 135 41 L 145 55 L 152 53 L 142 42 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3"/>
      <path d="M 75 42 L 105 75 L 120 73 L 95 42 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4"/>
      <g>
        <path d="M 92 61 C 92 58, 110 57, 110 62 C 110 67, 92 68, 92 61 Z" fill={`url(#${gradIds.engine})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
        <ellipse cx="94" cy="62" rx="1.5" ry="3.5" fill="#111827" />
        <polygon points="94,62 92.5,61.2 92.5,62.8" fill="#EAA800" />
      </g>
      <g>
        <circle cx="106" cy="74" r="1.8" fill="#10B981" />
        <circle cx="106" cy="74" r="4.5" fill="#10B981" opacity="0.35" className="animate-pulse" />
      </g>
    </g>
  )

  const renderQuarterRight = () => (
    <g transform="translate(90, 40) scale(-1, 1) translate(-90, -40)">
      {renderQuarterLeft()}
    </g>
  )

  const renderHeadOn = () => (
    <g transform="translate(0, 10)">
      <path d="M 88 5 L 90 0 L 92 0 L 92 20 L 88 20 Z" fill={`url(#${gradIds.fuselage})`} stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" />
      <g>
        <circle cx="90" cy="2" r="1" fill="#EF4444" />
        <circle cx="90" cy="2" r="3" fill="#EF4444" opacity="0.4" className="animate-pulse" />
      </g>
      <path d="M 60 20 L 90 22 L 120 20 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
      <g>
        <ellipse cx="60" cy="38" rx="6" ry="6" fill="#374151" />
        <circle cx="60" cy="38" r="4" fill="#111827" />
      </g>
      <g>
        <ellipse cx="120" cy="38" rx="6" ry="6" fill="#374151" />
        <circle cx="120" cy="38" r="4" fill="#111827" />
      </g>
      <path d="M 20 28 L 90 32 L 160 28 L 155 33 L 90 36 L 25 33 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
      <g>
        <circle cx="20" cy="30" r="1.5" fill="#EF4444" />
        <circle cx="20" cy="30" r="4" fill="#EF4444" opacity="0.4" className="animate-pulse" />
      </g>
      <g>
        <circle cx="160" cy="30" r="1.5" fill="#10B981" />
        <circle cx="160" cy="30" r="4" fill="#10B981" opacity="0.4" className="animate-pulse" />
      </g>
      <ellipse cx="90" cy="28" rx="16" ry="16" fill={`url(#${gradIds.fuselage})`} stroke="rgba(255,255,255,0.55)" strokeWidth="0.5" />
      <path d="M 78 24 C 85 20, 95 20, 102 24 C 100 26, 80 26, 78 24 Z" fill={`url(#${gradIds.cockpit})`} stroke="rgba(255,255,255,0.4)" strokeWidth="0.3" />
      <ellipse cx="90" cy="34" rx="4" ry="2" fill="rgba(0,0,0,0.05)" />
    </g>
  )

  const renderTransLeft = () => (
    <g transform="rotate(-15, 90, 40) translate(0, 5)">
      {renderQuarterLeft()}
    </g>
  )

  // Omit explicitIdPrefix from standard SVG props 
  return (
    <svg
      viewBox="0 0 180 80"
      aria-hidden="true"
      className={className ?? 'w-21 h-10 overflow-visible'}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(234,168,0,0.38))', ...props.style }}
      {...props}
    >
      {defs}
      {view === 'side' && renderSide()}
      {view === 'side-reverse' && renderSideReverse()}
      {view === 'quarter-left' && renderQuarterLeft()}
      {view === 'quarter-right' && renderQuarterRight()}
      {view === 'headon' && renderHeadOn()}
      {view === 'trans-left' && renderTransLeft()}
    </svg>
  )
}

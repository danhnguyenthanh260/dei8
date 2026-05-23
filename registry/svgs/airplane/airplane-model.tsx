import * as React from 'react'
import { useId } from 'react'

export type AirplaneView =
  // Base Ring
  | 'front' | 'front-right' | 'right' | 'rear-right' | 'rear' | 'rear-left' | 'left' | 'front-left'
  // Top Ring
  | 'top-front' | 'top-front-right' | 'top-right' | 'top-rear-right' | 'top-rear' | 'top-rear-left' | 'top-left' | 'top-front-left'
  // Motion
  | 'bank-left' | 'bank-right' | 'climb-left' | 'climb-right' | 'descent-left' | 'descent-right'
  // Legacy Aliases
  | 'side' | 'side-reverse' | 'quarter-left' | 'quarter-right' | 'headon' | 'trans-left'

interface AirplaneModelProps extends React.SVGProps<SVGSVGElement> {
  view: AirplaneView
  idPrefix?: string
}

/**
 * Master Airplane Geometry Model - 360° View Atlas
 * 
 * Object-fixed lighting: The light source mirrors with the aircraft to preserve exact symmetry and identity.
 * 
 * Angle system:
 * - front: Head-on view.
 * - front-right: Quarter view, nose pointing right.
 * - right: Full side profile, nose pointing right.
 * - rear-right: Rear quarter view, tail dominant, nose pointing right.
 * - rear: Direct rear view, tail facing viewer.
 * 
 * Mirrored views (exact geometry flip across X=90):
 * - left = mirror(right)
 * - front-left = mirror(front-right)
 * - rear-left = mirror(rear-right)
 * 
 * Legacy mappings:
 * - side -> right
 * - side-reverse -> left
 * - headon -> front
 * - quarter-right -> front-right
 * - quarter-left -> front-left
 * - trans-left -> bank-left
 */
export function AirplaneModel({ view, idPrefix: explicitIdPrefix, className, ...props }: AirplaneModelProps) {
  const reactId = useId()
  const idPrefix = explicitIdPrefix || reactId.replace(/:/g, '')

  const semanticMap: Record<string, AirplaneView> = {
    'side': 'right',
    'side-reverse': 'left',
    'headon': 'front',
    'quarter-right': 'front-right',
    'quarter-left': 'front-left',
    'trans-left': 'bank-left',
  }

  const activeView = semanticMap[view] || view

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

  const Mirror = ({ children }: { children: React.ReactNode }) => (
    // Flip across X=90 (Center of viewBox "0 0 180 80")
    <g transform="translate(180, 0) scale(-1, 1)">{children}</g>
  )

  const renderFront = () => (
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

  const renderRight = () => (
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

  const renderFrontRight = () => (
    <g transform="translate(0, 5)">
      <path d="M 75 28 C 75 26, 65 26, 65 29 C 65 32, 75 32, 75 28 Z" fill={`url(#${gradIds.engine})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
      <path d="M 95 30 L 65 12 L 55 12 L 85 32 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
      <path d="M 40 32 L 25 18 L 20 20 L 35 38 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3"/>
      <path d="M 45 30 L 35 10 L 28 10 L 38 30 Z" fill={`url(#${gradIds.fuselage})`} stroke="rgba(255,255,255,0.35)" strokeWidth="0.4"/>
      <g>
        <circle cx="30" cy="12" r="1.5" fill="#EF4444" />
        <circle cx="30" cy="12" r="4.0" fill="#EF4444" opacity="0.4" className="animate-pulse" />
      </g>
      <path 
        d="M 35 30 L 140 28 C 158 28, 166 30, 168 36 C 166 42, 158 44, 140 44 L 35 42 C 25 42, 20 40, 18 36 C 20 32, 25 30, 35 30 Z" 
        fill={`url(#${gradIds.fuselage})`} 
        stroke="rgba(255,255,255,0.55)" 
        strokeWidth="0.5"
      />
      <path d="M 40 38 L 145 38 C 155 38, 165 39, 166 40 C 165 41, 155 40, 145 40 L 40 40" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" />
      <line x1="135" y1="33" x2="45" y2="33" stroke="rgba(31,41,55,0.7)" strokeWidth="1.2" strokeDasharray="1.5 2.5" strokeLinecap="round" />
      <path d="M 150 36 L 35 36 L 36 37.5 L 150 37.5 Z" fill="#EAA800" opacity="0.95" />
      <path d="M 145 30 C 155 30, 162 31, 164 34 L 160 36 C 156 33, 150 32, 140 31 Z" fill={`url(#${gradIds.cockpit})`} stroke="rgba(255,255,255,0.4)" strokeWidth="0.3"/>
      <path d="M 45 41 L 35 55 L 28 53 L 38 42 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3"/>
      <path d="M 105 42 L 75 75 L 60 73 L 85 42 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4"/>
      <g>
        <path d="M 88 61 C 88 58, 70 57, 70 62 C 70 67, 88 68, 88 61 Z" fill={`url(#${gradIds.engine})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
        <ellipse cx="86" cy="62" rx="1.5" ry="3.5" fill="#111827" />
        <polygon points="86,62 87.5,61.2 87.5,62.8" fill="#EAA800" />
      </g>
      <g>
        <circle cx="74" cy="74" r="1.8" fill="#10B981" />
        <circle cx="74" cy="74" r="4.5" fill="#10B981" opacity="0.35" className="animate-pulse" />
      </g>
    </g>
  )

  const renderRearRight = () => (
    <g transform="translate(0, 5)">
      <path d="M 125 31 C 125 29, 115 29, 115 32 C 115 35, 125 35, 125 31 Z" fill={`url(#${gradIds.engine})`} stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
      <path d="M 105 32 L 135 18 L 145 18 L 115 34 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
      <path d="M 25 32 L 40 18 L 45 20 L 30 38 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3"/>
      <path 
        d="M 20 32 L 130 30 C 145 30, 150 32, 150 36 C 150 40, 145 42, 130 42 L 20 40 C 10 40, 6 38, 5 36 C 6 34, 10 32, 20 32 Z" 
        fill={`url(#${gradIds.fuselage})`} 
        stroke="rgba(255,255,255,0.55)" 
        strokeWidth="0.5"
      />
      <path d="M 30 32 L 20 5 L 12 5 L 22 32 Z" fill={`url(#${gradIds.fuselage})`} stroke="rgba(255,255,255,0.35)" strokeWidth="0.4"/>
      <g>
        <circle cx="16" cy="8" r="1.5" fill="#EF4444" />
        <circle cx="16" cy="8" r="4.0" fill="#EF4444" opacity="0.4" className="animate-pulse" />
      </g>
      <path d="M 25 38 L 120 38 C 130 38, 140 39, 140 40 C 140 41, 130 40, 120 40 L 25 40" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" />
      <path d="M 125 37 L 20 37 L 20 38.5 L 125 38.5 Z" fill="#EAA800" opacity="0.95" />
      <path d="M 25 41 L 15 55 L 8 53 L 18 42 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3"/>
      <path d="M 85 42 L 55 75 L 40 73 L 65 42 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4"/>
      <g>
        <path d="M 68 61 C 68 58, 50 57, 50 62 C 50 67, 68 68, 68 61 Z" fill={`url(#${gradIds.engine})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
        <ellipse cx="66" cy="62" rx="1.5" ry="3.5" fill="#111827" />
        <polygon points="66,62 67.5,61.2 67.5,62.8" fill="#EAA800" />
      </g>
    </g>
  )

  const renderRear = () => (
    <g transform="translate(0, 10)">
      <path d="M 60 20 L 90 18 L 120 20 Z" fill={`url(#${gradIds.farWing})`} stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
      <path d="M 20 28 L 90 26 L 160 28 L 155 33 L 90 30 L 25 33 Z" fill={`url(#${gradIds.nearWing})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
      <g>
        <circle cx="20" cy="30" r="1.5" fill="#10B981" />
        <circle cx="20" cy="30" r="4" fill="#10B981" opacity="0.4" className="animate-pulse" />
      </g>
      <g>
        <circle cx="160" cy="30" r="1.5" fill="#EF4444" />
        <circle cx="160" cy="30" r="4" fill="#EF4444" opacity="0.4" className="animate-pulse" />
      </g>
      <ellipse cx="90" cy="28" rx="16" ry="16" fill={`url(#${gradIds.fuselage})`} stroke="rgba(255,255,255,0.55)" strokeWidth="0.5" />
      <ellipse cx="90" cy="28" rx="8" ry="8" fill="rgba(0,0,0,0.1)" />
      <path d="M 88 28 L 90 -5 L 92 -5 L 92 28 L 88 28 Z" fill={`url(#${gradIds.fuselage})`} stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" />
      <g>
        <circle cx="90" cy="-2" r="1" fill="#EF4444" />
        <circle cx="90" cy="-2" r="3" fill="#EF4444" opacity="0.4" className="animate-pulse" />
      </g>
    </g>
  )

  const renderTopPlaceholder = (label: string) => (
    <g transform="translate(90, 40)">
      <text x="0" y="0" textAnchor="middle" fill="#9CA3AF" fontSize="10">{label}</text>
    </g>
  )

  const renderBankLeft = () => (
    <g transform="rotate(-15, 90, 40) translate(0, 5)">
      {<Mirror>{renderFrontRight()}</Mirror>}
    </g>
  )

  const renderBankRight = () => (
    <g transform="rotate(15, 90, 40) translate(0, 5)">
      {renderFrontRight()}
    </g>
  )

  return (
    <svg
      viewBox="0 0 180 80"
      aria-hidden="true"
      className={className ?? 'w-21 h-10 overflow-visible'}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(234,168,0,0.38))', ...props.style }}
      {...props}
    >
      {defs}
      {/* 8-View Level Ring */}
      {activeView === 'front' && renderFront()}
      {activeView === 'front-right' && renderFrontRight()}
      {activeView === 'right' && renderRight()}
      {activeView === 'rear-right' && renderRearRight()}
      {activeView === 'rear' && renderRear()}
      {activeView === 'rear-left' && <Mirror>{renderRearRight()}</Mirror>}
      {activeView === 'left' && <Mirror>{renderRight()}</Mirror>}
      {activeView === 'front-left' && <Mirror>{renderFrontRight()}</Mirror>}

      {/* Motion */}
      {activeView === 'bank-left' && renderBankLeft()}
      {activeView === 'bank-right' && renderBankRight()}

      {/* Top 3D Ring */}
      {activeView.startsWith('top-') && renderTopPlaceholder(activeView)}
      {activeView.startsWith('climb-') && renderTopPlaceholder(activeView)}
      {activeView.startsWith('descent-') && renderTopPlaceholder(activeView)}
    </svg>
  )
}

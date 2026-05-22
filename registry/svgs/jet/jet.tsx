'use client'

import { useState } from 'react'

import { JetDefs } from './jet-defs'
import { JetClouds } from './jet-clouds'
import {
  type FlyState,
  getPlaneStyle,
  getContrailStyle,
  getMistStyle,
  getCloudForegroundStyle,
  getSpeedLinesStyle,
  getShockwaveStyle,
} from './jet-styles'

interface CargoJetProps {
  className?: string
}

export function CargoJet({ className }: CargoJetProps) {
  const [flyState, setFlyState] = useState<FlyState>('idle')

  const handleLaunch = (): void => {
    if (flyState !== 'idle') return
    setFlyState('launching')
    setTimeout(() => {
      setFlyState('away')
      setTimeout(() => {
        setFlyState('prepare-return')
        setTimeout(() => {
          setFlyState('returning')
          setTimeout(() => setFlyState('idle'), 1900)
        }, 80)
      }, 1400)
    }, 280)
  }

  return (
    <svg
      viewBox="0 0 220 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'w-44 h-24 overflow-visible cursor-pointer select-none'}
      aria-hidden="true"
      onClick={handleLaunch}
    >
      <JetDefs />

      {/* Sky dome */}
      <path d="M 0 120 A 110 110 0 0 1 220 120 Z" fill="url(#jet-sky-fade)" />

      {/* Star field */}
      <g opacity="0.72">
        <circle cx="22"  cy="15" r="0.50" fill="#E2E8F0" className="jet-star-twinkle-8"  />
        <circle cx="30"  cy="25" r="0.38" fill="#CBD5E1" className="jet-star-twinkle-14" />
        <circle cx="12"  cy="40" r="0.32" fill="#E2E8F0" className="jet-star-twinkle-17" />
        <circle cx="45"  cy="18" r="0.28" fill="#FFFFFF" />
        <circle cx="18"  cy="28" r="0.22" fill="#CBD5E1" />
        <circle cx="105" cy="8"  r="0.45" fill="#F1F5F9" className="jet-star-twinkle-15" />
        <circle cx="115" cy="12" r="0.55" fill="#FFFBEB" className="jet-star-twinkle-10" />
        <circle cx="140" cy="20" r="0.38" fill="#FFFFFF" className="jet-star-twinkle-13" />
        <circle cx="98"  cy="18" r="0.25" fill="#E2E8F0" />
        <circle cx="132" cy="9"  r="0.20" fill="#CBD5E1" />
        <circle cx="160" cy="35" r="0.45" fill="#E2E8F0" className="jet-star-twinkle-16" />
        <circle cx="170" cy="18" r="0.50" fill="#F1F5F9" className="jet-star-twinkle-9"  />
        <circle cx="185" cy="14" r="0.38" fill="#FFFFFF" className="jet-star-twinkle-12" />
        <circle cx="195" cy="28" r="0.32" fill="#E2E8F0" className="jet-star-twinkle-11" />
        <circle cx="205" cy="18" r="0.22" fill="#CBD5E1" />
        <circle cx="178" cy="32" r="0.20" fill="#FFFFFF" />
      </g>

      {/* Pleiades constellation */}
      <g>
        <path d="M 56 22 L 62 25 L 70 30 L 82 28 L 84 24" stroke="#EAA800" strokeWidth="0.15" strokeOpacity="0.15" fill="none" />
        <path d="M 62 25 L 58 32 L 72 36 L 70 30"         stroke="#EAA800" strokeWidth="0.15" strokeOpacity="0.15" fill="none" />
        <path d="M 58 32 L 56 22"                         stroke="#EAA800" strokeWidth="0.15" strokeOpacity="0.1"  fill="none" />
        <circle cx="70" cy="30" r="1.3" fill="#FFFBEB" className="jet-star-twinkle-1" style={{ filter: 'drop-shadow(0 0 2px rgba(234,168,0,0.8))' }} />
        <circle cx="82" cy="28" r="0.9" fill="#FFFBEB" className="jet-star-twinkle-2" style={{ filter: 'drop-shadow(0 0 1.5px rgba(234,168,0,0.7))' }} />
        <circle cx="84" cy="24" r="0.7" fill="#FFFFFF"  className="jet-star-twinkle-3" />
        <circle cx="72" cy="36" r="1.0" fill="#FFFBEB" className="jet-star-twinkle-4" style={{ filter: 'drop-shadow(0 0 1.5px rgba(234,168,0,0.7))' }} />
        <circle cx="58" cy="32" r="1.0" fill="#FFFBEB" className="jet-star-twinkle-5" style={{ filter: 'drop-shadow(0 0 1.5px rgba(234,168,0,0.7))' }} />
        <circle cx="62" cy="25" r="0.8" fill="#FFFFFF"  className="jet-star-twinkle-6" />
        <circle cx="56" cy="22" r="0.7" fill="#FFFFFF"  className="jet-star-twinkle-7" />
      </g>

      <JetClouds flyState={flyState} />

      {/* Horizon mist */}
      <g>
        <path d="M -30 95 C 40 92, 120 90, 180 94 C 220 96, 250 100, 260 105 L 260 120 L -30 120 Z" fill="url(#jet-mist-fade)" />
        <path d="M -30 95 C 40 92, 120 90, 180 94 C 220 96, 250 100, 260 105 L 260 120 L -30 120 Z" fill="url(#jet-mist-shimmer)" style={getMistStyle(flyState)} />
      </g>

      {/* Speed lines */}
      <g style={getSpeedLinesStyle(flyState)}>
        <path d="M 102 82 C 76 87, 44 90, 6 93"  stroke="url(#jet-speedline-gold)"   strokeWidth="2.0" strokeLinecap="round" fill="none" className="jet-speed-line-fast" />
        <path d="M 114 46 C 88 50, 58 53, 16 57"  stroke="url(#jet-speedline-gold)"   strokeWidth="1.5" strokeLinecap="round" fill="none" className="jet-speed-line"      />
        <path d="M 92 65 C 66 68, 36 71, 2 74"    stroke="url(#jet-speedline-silver)" strokeWidth="1.0" strokeLinecap="round" fill="none" className="jet-speed-line"      />
        <path d="M 95 95 C 70 99, 40 103, 0 107"  stroke="url(#jet-speedline-silver)" strokeWidth="0.8" strokeLinecap="round" fill="none" className="jet-speed-line-fast" />
        <path d="M 120 34 C 94 38, 64 40, 22 44"  stroke="url(#jet-speedline-silver)" strokeWidth="0.6" strokeLinecap="round" fill="none" className="jet-speed-line"      />
      </g>

      {/* Shockwave */}
      <circle cx="125" cy="58" r="8" fill="none" stroke="#EAA800" strokeWidth="1.5" strokeOpacity="0.7" style={getShockwaveStyle(flyState)} />

      {/* Contrails */}
      <g style={getContrailStyle(flyState)}>
        <path d="M 112 46 C 90 52, 65 56, 15 60"  stroke="url(#jet-contrail)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 85 72 C 60 76, 35 78, 5 80"    stroke="url(#jet-contrail)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 100 85 C 75 92, 50 95, 10 98"  stroke="url(#jet-contrail)" strokeWidth="2"   strokeLinecap="round" fill="none" strokeDasharray="4 4" />
      </g>

      {/* Jet geometry */}
      <g style={getPlaneStyle(flyState)}>
        <path d="M 90 62 L 82 56 L 85 55 L 93 60 Z" fill="#52525B" />
        <path d="M 128 52 L 110 34 L 114 32 L 118 48 Z" fill="url(#jet-wing-far)" />
        <path d="M 110 34 L 108 30 L 111 32 Z" fill="#EAA800" />
        <path d="M 122 42 L 112 46 L 113 48 L 123 44 Z" fill="url(#jet-engine)" stroke="#3F3F46" strokeWidth="0.2" />
        <ellipse cx="122" cy="43" rx="1.2" ry="2.5" transform="rotate(-15 122 43)" fill="#141414" stroke="#EAA800" strokeWidth="0.4" />
        <path d="M 85 72 C 110 50, 140 40, 165 44 C 140 48, 110 60, 85 72 Z" fill="url(#jet-fuselage-upper)" stroke="#71717A" strokeWidth="0.3" />
        <path d="M 85 72 C 110 60, 140 48, 165 44 C 145 56, 115 76, 85 72 Z" fill="url(#jet-fuselage-lower)" stroke="#0F172A" strokeWidth="0.3" />
        <path d="M 95 66 L 80 42 C 81 40, 83 40, 84 40 L 102 63 Z" fill="url(#jet-gold-brand)" />
        <path d="M 92 70 L 82 78 L 85 80 L 95 68 Z" fill="#71717A" />
        <path d="M 122 60 L 92 94 L 97 96 L 108 68 Z" fill="url(#jet-wing)" stroke="#52525B" strokeWidth="0.4" />
        <path d="M 92 94 L 88 90 L 93 92 Z" fill="#EAA800" />
        <path d="M 108 76 L 106 80 Z" fill="#71717A" stroke="#52525B" strokeWidth="0.25" />
        <path d="M 112 78 L 100 84 C 99 85, 99 86, 100 87 L 112 83 Z" fill="url(#jet-engine)" stroke="#3F3F46" strokeWidth="0.25" />
        <ellipse cx="112" cy="80.5" rx="2" ry="4" transform="rotate(-15 112 80.5)" fill="#141414" stroke="#EAA800" strokeWidth="0.5" />
        <path d="M 160 43.5 C 161 43.3, 163 43.3, 164 43.6 C 163 44.1, 161 44.3, 160 44 Z" fill="#141414" />
        <path d="M 110 59.8 C 125 54.5, 142 49, 155 45.3" stroke="url(#jet-gold-brand)" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="116" cy="57.5" r="0.4" fill="#27272A" />
        <circle cx="120" cy="56"   r="0.4" fill="#27272A" />
        <circle cx="124" cy="54.5" r="0.4" fill="#27272A" />
        <circle cx="128" cy="53"   r="0.4" fill="#27272A" />
        <circle cx="132" cy="51.5" r="0.4" fill="#27272A" />
        <circle cx="136" cy="50"   r="0.4" fill="#27272A" />
        <circle cx="140" cy="48.5" r="0.4" fill="#27272A" />
        <circle cx="144" cy="47"   r="0.4" fill="#27272A" />
      </g>

      {/* Foreground cloud */}
      <g className="pointer-events-none" style={getCloudForegroundStyle(flyState)}>
        <path
          d="M15,30 Q28,10 52,14 Q68,0 88,10 Q105,4 116,20 Q124,14 130,26 Q138,32 132,42 L20,42 Q8,40 15,30 Z"
          fill="url(#jet-cloud-pearl)"
          stroke="url(#jet-gold-brand)"
          strokeWidth="0.8"
          strokeOpacity="0.75"
        />
        <path
          d="M15,30 Q28,10 52,14 Q68,0 88,10 Q105,4 116,20 Q124,14 130,26 Q138,32 132,42 L20,42 Q8,40 15,30 Z"
          fill="url(#jet-cloud-depth)"
          opacity="0.85"
        />
        <ellipse cx="88" cy="8" rx="20" ry="10" fill="url(#jet-cloud-highlight)" />
        <path d="M32,24 Q48,15 68,20 Q78,12 94,22" fill="none" stroke="url(#jet-gold-brand)" strokeWidth="0.5" strokeOpacity="0.3" />
        <path d="M24,30 Q42,22 62,26 Q76,18 86,27" fill="none" stroke="url(#jet-gold-brand)" strokeWidth="0.4" strokeOpacity="0.2" />
      </g>
    </svg>
  )
}

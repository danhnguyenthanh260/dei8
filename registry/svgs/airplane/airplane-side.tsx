interface AirplaneSideProps {
  className?: string
}

export function AirplaneSide({ className }: AirplaneSideProps) {
  return (
    <svg
      viewBox="0 0 180 80"
      aria-hidden="true"
      className={className ?? 'w-21 h-10 overflow-visible'}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(234,168,0,0.38))' }}
    >
      <defs>
        <linearGradient id="fuselageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F9FAFB" />
          <stop offset="80%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="nearWingGrad" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="50%" stopColor="#C8CCD0" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="farWingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="engineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
        <linearGradient id="cockpitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      <g transform="translate(-4, 3)">
        <path d="M 115 30 L 98 14 L 90 15 L 102 30 Z" fill="url(#farWingGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
        <path
          d="M 170 38 C 168 33, 158 30, 145 30 L 35 31 C 26 31, 20 34, 18 38 C 20 42, 26 44, 35 44 L 145 43 C 158 43, 168 41, 170 38 Z"
          fill="url(#fuselageGrad)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.5"
        />
        <path d="M 25 42 C 35 44, 55 44, 85 44 L 145 43 C 155 43, 165 42, 168 40" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" />
        <line x1="55" y1="33" x2="140" y2="33" stroke="rgba(31,41,55,0.7)" strokeWidth="1.2" strokeDasharray="2 3" strokeLinecap="round" />
        <path d="M 30 38 L 155 37 L 154.5 38.2 L 30.5 39.2 Z" fill="#EAA800" opacity="0.95" />
        <path d="M 152 32.2 C 157 32.2, 162 33.5, 163 36 C 161 37.5, 154 37, 149 36 Z" fill="url(#cockpitGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.3" />
        <path d="M 30 31 L 18 12 L 13 14 L 24 31 Z" fill="url(#fuselageGrad)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" />
        <path d="M 28 44 L 16 52 L 13 51 L 23 43 Z" fill="url(#farWingGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
        <path d="M 115 44 L 80 70 L 65 68 L 95 44 Z" fill="url(#nearWingGrad)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
        <g>
          <path d="M 82 54 L 78 55 L 82 56 Z" fill="#374151" />
          <path d="M 82 53 C 82 50, 99 50, 99 55 C 99 60, 82 60, 82 55 Z" fill="url(#engineGrad)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
          <ellipse cx="98" cy="55" rx="1.2" ry="3.2" fill="#111827" />
          <polygon points="98,55 96.5,54.2 96.5,55.8" fill="#EAA800" />
        </g>
        <g>
          <circle cx="80" cy="70" r="1.8" fill="#10B981" />
          <circle cx="80" cy="70" r="4.5" fill="#10B981" opacity="0.35" className="animate-pulse" />
        </g>
      </g>
    </svg>
  )
}

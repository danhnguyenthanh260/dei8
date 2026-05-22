interface AirplaneTransLeftProps {
  className?: string
}

export function AirplaneTransLeft({ className }: AirplaneTransLeftProps) {
  return (
    <svg
      viewBox="0 0 180 80"
      aria-hidden="true"
      className={className ?? 'w-21 h-10 overflow-visible'}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(234,168,0,0.38))' }}
    >
      <defs>
        <linearGradient id="fuselageGradTransLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F9FAFB" />
          <stop offset="80%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="nearWingGradTransLeft" x1="100%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="50%" stopColor="#C8CCD0" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="farWingGradTransLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="engineGradTransLeft" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
        <linearGradient id="cockpitGradTransLeft" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      <g transform="translate(0, 2)">
        <path d="M 98 28 L 115 5 L 122 8 L 108 30 Z" fill="url(#farWingGradTransLeft)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
        <path
          d="M 15 42 C 17 37, 28 32, 45 31 L 150 32 C 158 32, 163 35, 165 39 C 163 43, 158 45, 150 45 L 45 44 C 28 44, 17 45, 15 42 Z"
          fill="url(#fuselageGradTransLeft)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.5"
        />
        <line x1="120" y1="36" x2="45" y2="35" stroke="rgba(31,41,55,0.6)" strokeWidth="1.0" strokeDasharray="2 3" strokeLinecap="round" />
        <path d="M 148 39 L 28 38 L 28.5 39.2 L 147.5 40.2 Z" fill="#EAA800" opacity="0.95" />
        <path d="M 26 34.5 C 21 34.5, 16 35.8, 15 38.3 C 17 39.8, 24 39.3, 29 38.3 Z" fill="url(#cockpitGradTransLeft)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.3" />
        <path d="M 145 32 L 158 10 L 163 12 L 151 32 Z" fill="url(#fuselageGradTransLeft)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" />
        <path d="M 148 45 L 160 55 L 163 54 L 153 44 Z" fill="url(#farWingGradTransLeft)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
        <path d="M 68 44 L 88 74 L 75 72 L 58 44 Z" fill="url(#nearWingGradTransLeft)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
        <g>
          <path d="M 72 56 L 68 57 L 72 58 Z" fill="#374151" />
          <path d="M 72 55 C 72 52, 85 52, 85 57 C 85 62, 72 62, 72 57 Z" fill="url(#engineGradTransLeft)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
          <ellipse cx="84" cy="57" rx="1.0" ry="2.8" fill="#111827" />
          <polygon points="84,57 82.5,56.2 82.5,57.8" fill="#EAA800" />
        </g>
        <g>
          <circle cx="88" cy="74" r="1.8" fill="#10B981" />
          <circle cx="88" cy="74" r="4.5" fill="#10B981" opacity="0.35" className="animate-pulse" />
        </g>
      </g>
    </svg>
  )
}

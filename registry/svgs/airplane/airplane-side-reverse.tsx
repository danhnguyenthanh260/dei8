interface AirplaneSideReverseProps {
  className?: string
}

export function AirplaneSideReverse({ className }: AirplaneSideReverseProps) {
  return (
    <svg
      viewBox="0 0 180 80"
      aria-hidden="true"
      className={className ?? 'w-21 h-10 overflow-visible'}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(234,168,0,0.38))' }}
    >
      <defs>
        <linearGradient id="fuselageGradRev" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F9FAFB" />
          <stop offset="80%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="nearWingGradRev" x1="100%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="50%" stopColor="#C8CCD0" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="farWingGradRev" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="engineGradRev" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
        <linearGradient id="cockpitGradRev" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      <g transform="translate(4, 3)">
        <path d="M 65 30 L 82 14 L 90 15 L 78 30 Z" fill="url(#farWingGradRev)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
        <path
          d="M 10 38 C 12 33, 22 30, 35 30 L 145 31 C 154 31, 160 34, 162 38 C 160 42, 154 44, 145 44 L 35 43 C 22 43, 12 41, 10 38 Z"
          fill="url(#fuselageGradRev)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.5"
        />
        <path d="M 155 42 C 145 44, 125 44, 95 44 L 35 43 C 25 43, 15 42, 12 40" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" />
        <line x1="125" y1="33" x2="40" y2="33" stroke="rgba(31,41,55,0.7)" strokeWidth="1.2" strokeDasharray="2 3" strokeLinecap="round" />
        <path d="M 150 38 L 25 37 L 25.5 38.2 L 149.5 39.2 Z" fill="#EAA800" opacity="0.95" />
        <path d="M 28 32.2 C 23 32.2, 18 33.5, 17 36 C 19 37.5, 26 37, 31 36 Z" fill="url(#cockpitGradRev)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.3" />
        <path d="M 150 31 L 162 12 L 167 14 L 156 31 Z" fill="url(#fuselageGradRev)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" />
        <path d="M 152 44 L 164 52 L 167 51 L 157 43 Z" fill="url(#farWingGradRev)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
        <path d="M 65 44 L 100 70 L 115 68 L 85 44 Z" fill="url(#nearWingGradRev)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
        <g>
          <path d="M 98 54 L 102 55 L 98 56 Z" fill="#374151" />
          <path d="M 98 53 C 98 50, 81 50, 81 55 C 81 60, 98 60, 98 55 Z" fill="url(#engineGradRev)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
          <ellipse cx="82" cy="55" rx="1.2" ry="3.2" fill="#111827" />
          <polygon points="82,55 83.5,54.2 83.5,55.8" fill="#EAA800" />
        </g>
        <g>
          <circle cx="100" cy="70" r="1.8" fill="#EF4444" />
          <circle cx="100" cy="70" r="4.5" fill="#EF4444" opacity="0.45" className="animate-pulse" />
        </g>
      </g>
    </svg>
  )
}

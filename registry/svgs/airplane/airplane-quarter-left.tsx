interface AirplaneQuarterLeftProps {
  className?: string
}

export function AirplaneQuarterLeft({ className }: AirplaneQuarterLeftProps) {
  return (
    <svg
      viewBox="0 0 180 80"
      aria-hidden="true"
      className={className ?? 'w-21 h-10 overflow-visible'}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(234,168,0,0.38))' }}
    >
      <defs>
        <linearGradient id="fuselageGradQL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#E5E7EB" />
          <stop offset="85%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="wingGradQLLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="50%" stopColor="#C8CCD0" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        <linearGradient id="wingGradQLRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
        <linearGradient id="cockpitGradQL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="engineGradQL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>

      <path d="M 40 35 L 20 10 L 16 12 L 32 38 Z" fill="url(#fuselageGradQL)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
      <path d="M 95 42 L 145 62 L 138 66 L 88 44 Z" fill="url(#wingGradQLRight)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" opacity="0.75" />
      <g opacity="0.8">
        <path d="M 122 52 C 122 49, 112 49, 112 53 C 112 57, 122 57, 122 52 Z" fill="url(#engineGradQL)" />
        <ellipse cx="113" cy="53" rx="1.0" ry="2.2" fill="#111827" stroke="#EAA800" strokeWidth="0.4" />
      </g>
      <path d="M 85 38 L 30 15 L 35 10 L 90 35 Z" fill="url(#wingGradQLLeft)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" />
      <g>
        <path d="M 60 25 C 60 22, 50 22, 50 25 C 50 28, 60 28, 60 25 Z" fill="url(#engineGradQL)" />
        <ellipse cx="59" cy="25" rx="1.2" ry="2.8" fill="#111827" stroke="#EAA800" strokeWidth="0.5" />
      </g>
      <ellipse cx="90" cy="40" rx="22" ry="18" fill="url(#fuselageGradQL)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.5" />
      <path d="M 105 32 C 102 28, 94 28, 90 31 C 91 35, 103 35, 105 32 Z" fill="url(#cockpitGradQL)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.3" />
      <path d="M 112 40 C 112 36, 105 32, 100 32 L 100 48 C 105 48, 112 44, 112 40 Z" fill="url(#fuselageGradQL)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.3" />
      <path d="M 112 40 C 108 40, 88 41, 68 42 L 68 43 C 88 42, 108 41, 112 40 Z" fill="#EAA800" opacity="0.9" />
      <g>
        <circle cx="30" cy="15" r="1.8" fill="#EF4444" />
        <circle cx="30" cy="15" r="4.5" fill="#EF4444" opacity="0.35" className="animate-pulse" />
      </g>
    </svg>
  )
}

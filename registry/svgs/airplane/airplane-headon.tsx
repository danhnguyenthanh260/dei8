interface AirplaneHeadonProps {
  className?: string
}

export function AirplaneHeadon({ className }: AirplaneHeadonProps) {
  return (
    <svg
      viewBox="0 0 180 80"
      aria-hidden="true"
      className={className ?? 'w-21 h-10 overflow-visible'}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(234,168,0,0.38))' }}
    >
      <defs>
        <linearGradient id="fuselageGradHead" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="wingGradHeadLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        <linearGradient id="wingGradHeadRight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="cockpitGradHead" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="engineGradHead" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>

      <g transform="translate(0, 2)">
        <path d="M 90 25 L 86 3 L 94 3 L 90 25 Z" fill="url(#fuselageGradHead)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
        <path d="M 102 38 L 160 12 L 152 8 L 98 34 Z" fill="url(#wingGradHeadRight)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.4" />
        <g>
          <path d="M 122 25 C 122 22, 132 18, 132 22 C 132 26, 122 29, 122 25 Z" fill="url(#engineGradHead)" />
          <ellipse cx="123" cy="25" rx="1.8" ry="3.5" fill="#111827" stroke="#EAA800" strokeWidth="0.5" />
        </g>
        <path d="M 78 38 L 20 68 L 28 72 L 82 42 Z" fill="url(#wingGradHeadLeft)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" />
        <g>
          <path d="M 48 50 C 48 46, 58 42, 58 46 C 58 50, 48 54, 48 50 Z" fill="url(#engineGradHead)" />
          <ellipse cx="57" cy="48" rx="2.2" ry="4" fill="#111827" stroke="#EAA800" strokeWidth="0.6" />
        </g>
        <ellipse cx="90" cy="38" rx="18" ry="14" fill="url(#fuselageGradHead)" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5" />
        <path d="M 80 32 C 84 28, 96 28, 100 32 C 98 36, 82 36, 80 32 Z" fill="url(#cockpitGradHead)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.3" />
        <path d="M 84 39 C 86 38, 94 38, 96 39 C 94 41, 86 41, 84 39 Z" fill="#EAA800" />
        <g>
          <circle cx="20" cy="68" r="1.8" fill="#10B981" />
          <circle cx="20" cy="68" r="4.5" fill="#10B981" opacity="0.35" className="animate-pulse" />
        </g>
      </g>
    </svg>
  )
}

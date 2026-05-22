interface AirplaneQuarterRightProps {
  className?: string
}

export function AirplaneQuarterRight({ className }: AirplaneQuarterRightProps) {
  return (
    <svg
      viewBox="0 0 180 80"
      aria-hidden="true"
      className={className ?? 'w-21 h-10 overflow-visible'}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(234,168,0,0.38))' }}
    >
      <defs>
        <linearGradient id="fuselageGradQR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#E5E7EB" />
          <stop offset="85%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="wingGradQRRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="50%" stopColor="#C8CCD0" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        <linearGradient id="wingGradQRLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
        <linearGradient id="cockpitGradQR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="engineGradQR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>

      <path d="M 140 35 L 160 10 L 164 12 L 148 38 Z" fill="url(#fuselageGradQR)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" />
      <path d="M 85 42 L 35 62 L 42 66 L 92 44 Z" fill="url(#wingGradQRLeft)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" opacity="0.75" />
      <g opacity="0.8">
        <path d="M 58 52 C 58 49, 68 49, 68 53 C 68 57, 58 57, 58 52 Z" fill="url(#engineGradQR)" />
        <ellipse cx="67" cy="53" rx="1.0" ry="2.2" fill="#111827" stroke="#EAA800" strokeWidth="0.4" />
      </g>
      <path d="M 95 38 L 150 15 L 145 10 L 90 35 Z" fill="url(#wingGradQRRight)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" />
      <g>
        <path d="M 120 25 C 120 22, 130 22, 130 25 C 130 28, 120 28, 120 25 Z" fill="url(#engineGradQR)" />
        <ellipse cx="121" cy="25" rx="1.2" ry="2.8" fill="#111827" stroke="#EAA800" strokeWidth="0.5" />
      </g>
      <ellipse cx="90" cy="40" rx="22" ry="18" fill="url(#fuselageGradQR)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.5" />
      <path d="M 75 32 C 78 28, 86 28, 90 31 C 89 35, 77 35, 75 32 Z" fill="url(#cockpitGradQR)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.3" />
      <path d="M 68 40 C 68 36, 75 32, 80 32 L 80 48 C 75 48, 68 44, 68 40 Z" fill="url(#fuselageGradQR)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.3" />
      <path d="M 68 40 C 72 40, 92 41, 112 42 L 112 43 C 92 42, 72 41, 68 40 Z" fill="#EAA800" opacity="0.9" />
      <g>
        <circle cx="150" cy="15" r="1.8" fill="#EF4444" />
        <circle cx="150" cy="15" r="4.5" fill="#EF4444" opacity="0.35" className="animate-pulse" />
      </g>
    </svg>
  )
}

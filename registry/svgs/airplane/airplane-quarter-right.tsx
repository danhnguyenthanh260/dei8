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
        <linearGradient id="fuseGradRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F3F4F6" />
          <stop offset="80%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
        <linearGradient id="wingGradRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        <linearGradient id="engineGradRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
        <linearGradient id="glassGradRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      <g transform="translate(90, 40) scale(-0.85, 0.85) rotate(6) translate(-90, -40)">
        {/* Far Engine */}
        <rect x="95" y="16" width="14" height="8" rx="4" fill="url(#engineGradRight)" />
        <ellipse cx="95" cy="20" rx="2" ry="4" fill="#111827" />

        {/* Far Wing */}
        <path d="M 85 30 L 120 5 L 130 5 L 105 32 Z" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5"/>

        {/* Far Horizontal Stabilizer */}
        <path d="M 135 32 L 155 18 L 160 20 L 140 38 Z" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5"/>

        {/* Vertical Stabilizer */}
        <path d="M 125 30 L 140 2 L 152 2 L 142 30 Z" fill="url(#fuseGradRight)" stroke="#9CA3AF" strokeWidth="0.5"/>
        <g>
          <circle cx="146" cy="2" r="1.5" fill="#EF4444" />
          <circle cx="146" cy="2" r="4.0" fill="#EF4444" opacity="0.4" className="animate-pulse" />
        </g>

        {/* Fuselage */}
        <path d="M 142 30 L 45 26 C 22 26, 14 30, 12 38 C 10 46, 20 52, 40 52 L 142 48 C 155 48, 155 30, 142 30 Z" fill="url(#fuseGradRight)" stroke="#9CA3AF" strokeWidth="0.5"/>

        {/* Yellow Line */}
        <path d="M 140 40 L 35 40 C 25 40, 15 42, 14 44 C 15 45, 25 43, 35 42 L 140 42 Z" fill="#EAA800" opacity="0.9" />

        {/* Cockpit */}
        <path d="M 40 26 C 25 26, 16 30, 14 36 L 20 38 C 24 33, 32 30, 42 29 Z" fill="url(#glassGradRight)" stroke="#0284C7" strokeWidth="0.5"/>

        {/* Near Horizontal Stabilizer */}
        <path d="M 135 45 L 152 65 L 160 63 L 142 48 Z" fill="url(#wingGradRight)" stroke="#9CA3AF" strokeWidth="0.5"/>

        {/* Near Wing */}
        <path d="M 75 48 L 108 80 L 120 78 L 95 48 Z" fill="url(#wingGradRight)" stroke="#9CA3AF" strokeWidth="0.5"/>

        {/* Near Engine */}
        <rect x="82" y="60" width="18" height="10" rx="5" fill="url(#engineGradRight)" stroke="#6B7280" strokeWidth="0.5"/>
        <ellipse cx="82" cy="65" rx="2.5" ry="5" fill="#111827" />
      </g>
    </svg>
  )
}

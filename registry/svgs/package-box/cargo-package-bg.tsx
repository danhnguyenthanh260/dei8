export function CargoPackageBg() {
  return (
    <>
      {/* Ambient floor shadow */}
      <ellipse cx="85" cy="82" rx="100" ry="28" fill="url(#floor-ambient-glow)" />

      {/* Floor perspective grid */}
      <g stroke="#D4CEC4" strokeWidth="0.35" fill="none" opacity="0.4" strokeLinecap="round">
        <line x1="-10" y1="55" x2="102" y2="120" />
        <line x1="20" y1="40" x2="158" y2="120" />
        <line x1="50" y1="25" x2="214" y2="120" />
        <line x1="90" y1="15" x2="230" y2="96" />
        <line x1="230" y1="55" x2="118" y2="120" />
        <line x1="200" y1="40" x2="62" y2="120" />
        <line x1="170" y1="25" x2="6" y2="120" />
        <line x1="130" y1="15" x2="-10" y2="96" />
      </g>

      {/* Motion lines */}
      <g opacity="0.8">
        <path
          d="M 125 45 C 145 40, 175 42, 195 38 C 205 36, 212 34, 215 32"
          stroke="url(#motion-glow)"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 128 64 C 152 64, 180 70, 202 68 C 210 67, 215 65, 218 64"
          stroke="url(#motion-dark)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 120 85 C 145 88, 170 82, 190 85 C 200 87, 208 90, 212 92"
          stroke="url(#motion-glow)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
          fill="none"
        />
      </g>

      {/* Background Box 3 (far right) shadows */}
      <path d="M 132 56 L 152 67 L 172 56 L 152 45 Z" fill="#141414" opacity="0.18" filter="url(#shadow-blur-soft)" />
      <path d="M 125 54 L 145 65 L 165 54 L 145 43 Z" fill="#141414" opacity="0.4" filter="url(#shadow-blur-hard)" />

      {/* Background Box 3 (far right) */}
      <g filter="url(#depth-blur-far)" opacity={0.65}>
        <path d="M 125 32 L 145 43 L 165 32 L 145 21 Z" fill="#C8B484" stroke="#B49C68" strokeWidth="1" strokeLinejoin="round" />
        <path d="M 145 43 L 165 32 L 165 54 L 145 65 Z" fill="#9E7040" stroke="#8A5E30" strokeWidth="1" strokeLinejoin="round" />
        <path d="M 125 32 L 145 43 L 145 65 L 125 54 Z" fill="#B88A5A" stroke="#A4794B" strokeWidth="1" strokeLinejoin="round" />
        <path d="M 133 28 L 153 39 L 157 37 L 137 26 Z" fill="#3A2214" />
        <path d="M 153 39 L 153 61 L 157 59 L 157 37 Z" fill="#3A2214" />
      </g>

      {/* Background left stack shadows */}
      <path d="M 21 65 L 46 79 L 71 65 L 46 51 Z" fill="#141414" opacity="0.22" filter="url(#shadow-blur-soft)" />
      <path d="M 15 61 L 40 75 L 65 61 L 40 47 Z" fill="#141414" opacity="0.45" filter="url(#shadow-blur-hard)" />

      {/* Background stacked boxes (left) */}
      <g filter="url(#depth-blur-medium)">
        <path d="M 15 35 L 40 49 L 65 35 L 40 21 Z" fill="#C8B484" stroke="#B49C68" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 40 49 L 65 35 L 65 61 L 40 75 Z" fill="#9E7040" stroke="#8A5E30" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 15 35 L 40 49 L 40 75 L 15 61 Z" fill="#B88A5A" stroke="#A4794B" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 25.5 29.5 L 50.5 43.5 L 53.5 41.5 L 28.5 27.5 Z" fill="#3A2214" />
        <path d="M 50.5 43.5 L 50.5 69.5 L 53.5 67.5 L 53.5 41.5 Z" fill="#3A2214" />
        <path d="M 11 32 L 36 46 L 61 32 L 36 18 Z" fill="#141414" opacity="0.32" />
        <path d="M 11 8 L 36 22 L 61 8 L 36 -6 Z" fill="#D2BE8F" stroke="#BDAB7D" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 36 22 L 61 8 L 61 32 L 36 46 Z" fill="#A87948" stroke="#946738" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 11 8 L 36 22 L 36 46 L 11 32 Z" fill="#C59664" stroke="#B08354" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 21.5 2.5 L 46.5 16.5 L 49.5 14.5 L 24.5 0.5 Z" fill="#3A2214" />
        <path d="M 46.5 16.5 L 46.5 40.5 L 49.5 38.5 L 49.5 14.5 Z" fill="#3A2214" />
      </g>

      {/* Box 4 (middle right) shadows */}
      <path d="M 132 87 L 160 103 L 187 87 L 160 71 Z" fill="#141414" opacity="0.18" filter="url(#shadow-blur-soft)" />
      <path d="M 123 82 L 151 98 L 178 82 L 151 66 Z" fill="#141414" opacity="0.45" filter="url(#shadow-blur-hard)" />

      {/* Box 4 (middle right) */}
      <g>
        <path d="M 123 54 L 151 70 L 178 54 L 151 38 Z" fill="#C8B484" stroke="#B49C68" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 151 70 L 178 54 L 178 82 L 151 98 Z" fill="#9E7040" stroke="#8A5E30" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 123 54 L 151 70 L 151 98 L 123 82 Z" fill="#E0C282" stroke="#CDB070" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M 136 47.5 L 165 64.5 L 168 62.5 L 139 45.5 Z" fill="#3A2214" />
        <path d="M 165 64.5 L 165 92.5 L 168 90.5 L 168 62.5 Z" fill="#3A2214" />
      </g>

      {/* Box 5 contact shadow on Box 4 */}
      <path d="M 135 54 L 151 63 L 167 54 L 151 45 Z" fill="#141414" opacity="0.32" />

      {/* Box 5 (stacked on Box 4) */}
      <g>
        <path d="M 135 38 L 151 47 L 167 38 L 151 29 Z" fill="#D2BE8F" stroke="#BDAB7D" strokeWidth="1" strokeLinejoin="round" />
        <path d="M 151 47 L 167 38 L 167 54 L 151 63 Z" fill="#A87948" stroke="#946738" strokeWidth="1" strokeLinejoin="round" />
        <path d="M 135 38 L 151 47 L 151 63 L 135 54 Z" fill="#E8D09E" stroke="#D5BD8D" strokeWidth="1" strokeLinejoin="round" />
        <path d="M 142 33.5 L 158 42.5 L 160 41.5 L 144 32.5 Z" fill="#3A2214" />
        <path d="M 158 42.5 L 158 58.5 L 160 57.5 L 160 41.5 Z" fill="#3A2214" />
      </g>
    </>
  )
}

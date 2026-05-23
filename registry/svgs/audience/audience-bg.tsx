import React from 'react'

export function AudienceSymmetricalBackground(): React.JSX.Element {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden md:block overflow-visible">
      <svg
        viewBox="0 0 896 634"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {/* Gold funnel lane — left side, curves upward */}
        <path
          d="M -1000 -100 C -500 -100, -250 265, 0 265 L 412 265 L 412 0 C 448 0, 484 12, 484 32 L 484 317 L 412 317 L 0 337 C -250 337, -500 750, -1000 750 Z"
          fill="#EAA800"
        />

        {/* Dark funnel lane — right side, curves downward */}
        <path
          d="M 1896 -100 C 1396 -100, 1146 297, 896 297 L 484 297 L 484 317 L 412 317 L 412 602 C 412 622, 448 634, 484 634 L 484 369 L 896 369 C 1146 369, 1396 750, 1896 750 Z"
          fill="#141414"
        />
      </svg>
    </div>
  )
}

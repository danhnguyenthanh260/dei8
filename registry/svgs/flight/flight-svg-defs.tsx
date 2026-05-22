import { PANEL_H } from './flight-constants'

interface FlightSvgDefsProps {
  flightX: number
}

export function FlightSvgDefs({ flightX }: FlightSvgDefsProps) {
  return (
    <defs>
      <filter id="routeGlow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="cloudGlowHover" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComponentTransfer in="blur" result="glow">
          <feFuncA type="linear" slope="0.65" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <clipPath id="activeRouteClip">
        <rect x="0" y="0" height={PANEL_H} style={{ width: `${Math.max(0, flightX)}px` }} />
      </clipPath>
      <linearGradient id="borderGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EAA800" stopOpacity="0" />
        <stop offset="25%" stopColor="#EAA800" stopOpacity="0.45" />
        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="75%" stopColor="#EAA800" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="activeTrailGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EAA800" stopOpacity="0.05" />
        <stop offset="70%" stopColor="#EAA800" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
      </linearGradient>
      <radialGradient id="skyRadiance" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#EAA800" stopOpacity="0.5" />
        <stop offset="35%" stopColor="#FFE066" stopOpacity="0.25" />
        <stop offset="75%" stopColor="#EAA800" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="sunGlowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFBE6" stopOpacity="0.85" />
        <stop offset="35%" stopColor="#FFF7D6" stopOpacity="0.45" />
        <stop offset="70%" stopColor="#EAA800" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </radialGradient>
      <clipPath id="panelDiagClip">
        <polygon points="0,0 361,0 260,620 0,620" />
      </clipPath>
      <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#000000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.75" />
      </linearGradient>
    </defs>
  )
}

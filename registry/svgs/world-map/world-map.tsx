'use client'

import { WORLD_MAP_PATH } from './world-map-path'

// ── Projection ──────────────────────────────────────────────────────────────
// Fitted from 10 country centroids (DE, EG, VN, ID, JP, KR, MX, AU, BR, ZA).
// Residuals within ±3 SVG units.
//   x = 1.9173 * lon + 334.47
//   y = -2.0520 * lat + 217.67
// Use this to convert real-world coordinates to SVG map positions.
export function latLonToXY(lat: number, lon: number): { x: number; y: number } {
  return {
    x: Math.round(1.9173 * lon + 334.47),
    y: Math.round(-2.052 * lat + 217.67),
  }
}

// ── Types ────────────────────────────────────────────────────────────────────
export interface MapLocation {
  id: string
  name: string
  x: number
  y: number
  labelOffsetX?: number
  labelOffsetY?: number
  labelAnchor?: 'start' | 'end' | 'middle'
}

export interface MapRoute {
  id?: string
  from: string
  to: string
  cpX?: number
  cpY?: number
  duration?: string
}

export interface WorldMapStat {
  value: string
  label: string
}

export interface WorldMapSectionProps {
  eyebrow?: string
  headline?: string
  body?: string
  stats?: WorldMapStat[]
  locations?: MapLocation[]
  routes?: MapRoute[]
}

// ── Defaults ─────────────────────────────────────────────────────────────────
const DEFAULT_LOCATIONS: MapLocation[] = [
  { id: 'tyo', name: 'TOKYO',     ...latLonToXY(35.7, 139.7), labelOffsetX: 8,  labelOffsetY: 6,  labelAnchor: 'start' },
  { id: 'lon', name: 'LONDON',    ...latLonToXY(51.5, -0.1),  labelOffsetX: -8, labelOffsetY: -6, labelAnchor: 'end' },
  { id: 'nyc', name: 'NEW YORK',  ...latLonToXY(40.7, -74.0), labelOffsetX: -8, labelOffsetY: -6, labelAnchor: 'end' },
  { id: 'dxb', name: 'DUBAI',     ...latLonToXY(25.2, 55.3),  labelOffsetX: 8,  labelOffsetY: 6,  labelAnchor: 'start' },
  { id: 'syd', name: 'SYDNEY',    ...latLonToXY(-33.9, 151.2),...{}, labelOffsetX: 8, labelOffsetY: 6, labelAnchor: 'start' },
  { id: 'gru', name: 'SÃO PAULO', ...latLonToXY(-23.5, -46.6), labelOffsetX: 8, labelOffsetY: 6,  labelAnchor: 'start' },
]

function midCP(
  locs: MapLocation[],
  fromId: string,
  toId: string,
  arcLift = 0.35
): { cpX: number; cpY: number } {
  const from = locs.find((l) => l.id === fromId)
  const to = locs.find((l) => l.id === toId)
  if (!from || !to) return { cpX: 0, cpY: 0 }
  return {
    cpX: (from.x + to.x) / 2,
    cpY: (from.y + to.y) / 2 - Math.abs(to.x - from.x) * arcLift,
  }
}

const DEFAULT_ROUTES: MapRoute[] = [
  { id: 'lon-nyc', from: 'lon', to: 'nyc', duration: '9s' },
  { id: 'tyo-dxb', from: 'tyo', to: 'dxb', duration: '7s' },
  { id: 'nyc-gru', from: 'nyc', to: 'gru', duration: '5s' },
  { id: 'tyo-syd', from: 'tyo', to: 'syd', duration: '6s' },
]

const DEFAULT_STATS: WorldMapStat[] = [
  { value: '200+', label: 'Countries' },
  { value: '24/7', label: 'Operations' },
  { value: '99.9%', label: 'On-time' },
]

// ── Component ─────────────────────────────────────────────────────────────────
export function WorldMapSection({
  eyebrow = 'Global Network',
  headline = 'Worldwide shipping coverage',
  body = 'Real-time routes connecting major logistics hubs across every continent. Configure your own locations and lanes.',
  stats = DEFAULT_STATS,
  locations = DEFAULT_LOCATIONS,
  routes = DEFAULT_ROUTES,
}: WorldMapSectionProps) {
  const resolvedRoutes = routes.map((r, i) => {
    const cp =
      r.cpX !== undefined && r.cpY !== undefined
        ? { cpX: r.cpX, cpY: r.cpY }
        : midCP(locations, r.from, r.to)
    return { ...r, id: r.id ?? `route-${i}`, duration: r.duration ?? '8s', ...cp }
  })

  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{ minHeight: 800, background: '#0A0A0A', borderTop: '1px solid #141414' }}
    >
      {/* Background map */}
      <div
        className="absolute inset-y-0 right-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
        style={{ width: 'calc(100% - clamp(260px, 25vw, 380px))' }}
      >
        <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, #0a0a0a 100%)' }} />

        <div className="w-full h-full flex items-center justify-center origin-center transition-transform duration-1000"
          style={{ scale: '1', transform: 'translateY(4px)' }}
        >
          <svg
            viewBox="-5 -5 710 730"
            className="w-full h-full opacity-90"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="wm-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
              </filter>
              <filter id="wm-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <radialGradient id="wm-pulse" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="25%"  stopColor="#EAA800" stopOpacity="0.95" />
                <stop offset="60%"  stopColor="#EAA800" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g transform="translate(-20, 115)">
              {/* World map fill */}
              <g fill="#121212" stroke="#212121" strokeWidth="0.3" filter="url(#wm-shadow)" className="opacity-95">
                <path d={WORLD_MAP_PATH} />
              </g>

              {/* Routes */}
              {resolvedRoutes.map((route) => {
                const from = locations.find((l) => l.id === route.from)
                const to   = locations.find((l) => l.id === route.to)
                if (!from || !to) return null

                const pathData = `M ${from.x} ${from.y} Q ${route.cpX} ${route.cpY} ${to.x} ${to.y} Q ${route.cpX} ${route.cpY} ${from.x} ${from.y}`
                const halfDur = parseFloat(route.duration!) / 2

                return (
                  <g key={route.id}>
                    {/* Static fiber-optic line */}
                    <path d={`M ${from.x} ${from.y} Q ${route.cpX} ${route.cpY} ${to.x} ${to.y}`} fill="none" stroke="#EAA800" strokeWidth="0.5" opacity="0.15" />

                    {/* Animated streak */}
                    <path
                      d={`M ${from.x} ${from.y} Q ${route.cpX} ${route.cpY} ${to.x} ${to.y}`}
                      fill="none" stroke="#EAA800" strokeWidth="0.8" strokeDasharray="4 20" opacity="0.25"
                      style={{ animation: 'wmStreak 8s linear infinite' }}
                    />

                    {/* Glowing droplet */}
                    <g>
                      <circle r="5.5" fill="url(#wm-pulse)" filter="url(#wm-glow)" />
                      <animateMotion dur={route.duration} repeatCount="indefinite" path={pathData} rotate="auto" />
                    </g>

                    {/* Burst at origin */}
                    <circle cx={from.x} cy={from.y} r="4" fill="none" stroke="#EAA800" strokeWidth="0.6" opacity="0">
                      <animate attributeName="r"            values="4;22;22"     keyTimes="0;0.2;1" dur={route.duration} begin="0s" repeatCount="indefinite" />
                      <animate attributeName="opacity"      values="0.9;0;0"     keyTimes="0;0.2;1" dur={route.duration} begin="0s" repeatCount="indefinite" />
                      <animate attributeName="stroke-width" values="0.6;0.2;0.2" keyTimes="0;0.2;1" dur={route.duration} begin="0s" repeatCount="indefinite" />
                    </circle>

                    {/* Burst at destination */}
                    <circle cx={to.x} cy={to.y} r="4" fill="none" stroke="#EAA800" strokeWidth="0.6" opacity="0">
                      <animate attributeName="r"            values="4;22;22"     keyTimes="0;0.2;1" dur={route.duration} begin={`${halfDur}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity"      values="0.9;0;0"     keyTimes="0;0.2;1" dur={route.duration} begin={`${halfDur}s`} repeatCount="indefinite" />
                      <animate attributeName="stroke-width" values="0.6;0.2;0.2" keyTimes="0;0.2;1" dur={route.duration} begin={`${halfDur}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                )
              })}

              {/* Location markers */}
              {locations.map((loc) => (
                <g key={loc.id} transform={`translate(${loc.x}, ${loc.y})`} className="cursor-pointer pointer-events-auto">
                  <circle cx="0" cy="0" r="4.8" fill="none" stroke="#EAA800" strokeWidth="0.85" opacity="0.45" />
                  <circle cx="0" cy="0" r="2.4" fill="#EAA800" />
                  <text
                    x={loc.labelOffsetX ?? 8}
                    y={loc.labelOffsetY ?? 6}
                    fontSize="7"
                    fill="#F4F4F5"
                    fontWeight="700"
                    letterSpacing="0.18em"
                    textAnchor={loc.labelAnchor ?? 'start'}
                    className="pointer-events-none select-none"
                    style={{ filter: 'drop-shadow(0 1.5px 2.5px rgba(0,0,0,0.98))' }}
                  >
                    {loc.name}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* Content panel */}
      <div
        className="relative z-20 w-full lg:absolute lg:inset-y-0 lg:left-0 pointer-events-none flex items-center lg:items-stretch wm-panel"
        style={{ width: 'clamp(360px, 34vw, 520px)' }}
      >
        <div
          className="w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0 backdrop-blur-md sm:p-4 lg:pl-2 lg:pr-6 lg:py-16 xl:pl-5 xl:pr-8 shadow-2xl rounded-3xl lg:rounded-none lg:flex lg:flex-col lg:justify-center pointer-events-auto transition-all duration-500 relative"
          style={{ background: 'rgba(20,20,20,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="relative z-10 w-full text-left" style={{ maxWidth: 320 }}>
            <div className="mb-6 h-px w-16 rounded-full" style={{ background: 'linear-gradient(to right, #EAA800, transparent)' }} />

            <p className="text-xs font-bold uppercase tracking-[0.24em] mb-4" style={{ color: '#EAA800' }}>
              {eyebrow}
            </p>

            <h2 className="font-serif font-medium text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
              {headline}
            </h2>

            <p className="text-sm leading-relaxed mb-8" style={{ color: '#A3A3A3', opacity: 0.9 }}>
              {body}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-1 flex-col rounded-xl px-3 py-2.5"
                  style={{ minWidth: 75, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="font-serif font-medium text-xl" style={{ color: '#EAA800' }}>{s.value}</span>
                  <span className="text-[9px] uppercase tracking-wider font-medium" style={{ color: '#525252' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slanted border line */}
        <svg className="absolute inset-y-0 left-0 h-full pointer-events-none z-30 hidden lg:block" style={{ width: '100%' }} preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="wm-border" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#EAA800" stopOpacity="0" />
              <stop offset="25%"  stopColor="#EAA800" stopOpacity="0.45" />
              <stop offset="50%"  stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="75%"  stopColor="#EAA800" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="61.67" y1="0" x2="85.72" y2="100" stroke="url(#wm-border)" strokeWidth="0.75" opacity="0.8" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          .wm-panel > div:first-child {
            clip-path: polygon(0 0, 61.67% 0, 85.72% 100%, 0 100%);
            border: none;
            border-radius: 0;
          }
        }
        @keyframes wmStreak {
          from { stroke-dashoffset: 240; }
          to   { stroke-dashoffset: 0; }
        }
      ` }} />
    </section>
  )
}

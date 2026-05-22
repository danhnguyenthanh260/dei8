interface FlightPlantsProps {
  activeIndex: number
}

interface PlantTuftProps {
  x: number
  y: number
  scale: number
  scaleX?: number
  scaleY?: number
  rotation?: number
  delay: string
  isDayMode: boolean
  isBack?: boolean
}

function GrassTuft({ x, y, scale, scaleX = 1, scaleY = 1, rotation = 0, delay, isDayMode }: PlantTuftProps) {
  const svgTransform = `translate(${x}, ${y}) rotate(${rotation}) scale(${scale * scaleX}, ${scale * scaleY})`
  const numericDelay = parseInt(delay.replace('ms', ''))

  return (
    <g transform={svgTransform}>
      <g
        style={{
          transform: isDayMode ? 'scaleY(1) translateY(0)' : 'scaleY(0) translateY(15px)',
          opacity: isDayMode ? 1 : 0,
          transformOrigin: '0px 0px',
          transitionDuration: isDayMode ? '2000ms' : '600ms',
          transitionDelay: isDayMode ? `${1000 + numericDelay}ms` : `${800 + numericDelay / 4}ms`,
          transitionTimingFunction: isDayMode ? 'cubic-bezier(0.2, 0.9, 0.3, 1.05)' : 'ease-out',
          transitionProperty: 'all',
        }}
      >
        <g
          style={{
            transformOrigin: '0px 0px',
            animation: isDayMode
              ? `dei8GrassWind ${2.5 + (Math.abs(x) % 2.5)}s ease-in-out infinite alternate ${Math.abs(x) % 1.8}s`
              : 'none',
          }}
        >
          <path
            d="M -4,0 Q -15,-20 -25,-30 Q -10,-15 -2,0 M -2,0 Q -10,-35 -16,-50 Q -5,-25 1,0 M 0,0 Q 2,-40 6,-60 Q 5,-25 3,0 M 2,0 Q 15,-30 22,-45 Q 10,-20 5,0 M 4,0 Q 18,-15 28,-25 Q 12,-10 6,0"
            fill="#044E2E"
          />
          <path
            d="M -3,0 Q -12,-20 -18,-35 Q -6,-15 -1,0 M -1,0 Q -5,-30 -8,-45 Q -2,-25 1,0 M 0,0 Q 4,-30 10,-45 Q 4,-20 2,0 M 2,0 Q 12,-18 20,-30 Q 10,-15 4,0"
            fill="url(#grassMidGrad)"
          />
          <path
            d="M -2,0 Q -8,-15 -12,-22 Q -5,-10 0,0 M 0,0 Q -2,-22 -4,-32 Q 2,-15 1,0 M 1,0 Q 6,-18 10,-28 Q 5,-12 2,0 M 2,0 Q 10,-12 14,-18 Q 8,-8 3,0"
            fill="url(#grassFrontGrad)"
          />
        </g>
      </g>
    </g>
  )
}

const BACK_GRASS: Omit<PlantTuftProps, 'isDayMode'>[] = [
  { x: 5, y: 550, scale: 0.45, rotation: -12, delay: '800ms' },
  { x: 22, y: 553, scale: 0.55, scaleY: 1.5, rotation: -5, delay: '900ms' },
  { x: 40, y: 556, scale: 0.48, scaleX: 1.3, rotation: 0, delay: '850ms' },
  { x: 62, y: 562, scale: 0.6, scaleY: 1.6, rotation: 8, delay: '1000ms' },
  { x: 85, y: 568, scale: 0.5, rotation: 12, delay: '1050ms' },
  { x: 110, y: 576, scale: 0.58, scaleX: 1.5, scaleY: 0.8, rotation: 8, delay: '1100ms' },
  { x: 135, y: 588, scale: 0.65, scaleY: 1.4, rotation: 18, delay: '1200ms' },
  { x: 165, y: 605, scale: 0.6, rotation: 20, delay: '1300ms' },
  { x: 195, y: 620, scale: 0.75, scaleY: 1.4, rotation: 25, delay: '1400ms' },
  { x: 230, y: 635, scale: 0.7, scaleX: 1.3, rotation: 28, delay: '1500ms' },
]

const FRONT_GRASS: Omit<PlantTuftProps, 'isDayMode'>[] = [
  { x: 8, y: 585, scale: 0.6, rotation: 5, delay: '1100ms' },
  { x: 35, y: 590, scale: 0.65, scaleY: 1.2, rotation: 2, delay: '1200ms' },
  { x: 68, y: 595, scale: 0.7, scaleX: 1.4, rotation: 10, delay: '1300ms' },
  { x: 98, y: 605, scale: 0.75, rotation: 15, delay: '1400ms' },
  { x: 135, y: 622, scale: 0.8, scaleY: 1.3, rotation: 18, delay: '1500ms' },
  { x: 175, y: 640, scale: 0.85, scaleX: 1.5, rotation: 22, delay: '1600ms' },
  { x: -5, y: 605, scale: 0.8, scaleX: 1.6, scaleY: 0.8, rotation: -15, delay: '1300ms' },
  { x: 28, y: 610, scale: 0.85, rotation: -5, delay: '1400ms' },
  { x: 72, y: 622, scale: 0.95, scaleY: 1.4, rotation: 5, delay: '1500ms' },
  { x: 115, y: 635, scale: 1.05, rotation: 12, delay: '1600ms' },
  { x: 160, y: 640, scale: 1.15, scaleX: 1.2, rotation: 15, delay: '1700ms' },
  { x: 205, y: 640, scale: 1.25, rotation: 25, delay: '1800ms' },
  { x: -15, y: 640, scale: 1.2, scaleY: 1.4, rotation: -18, delay: '1500ms' },
  { x: 38, y: 640, scale: 1.3, scaleX: 1.5, scaleY: 0.9, rotation: -8, delay: '1600ms' },
  { x: 92, y: 640, scale: 1.4, rotation: 0, delay: '1700ms' },
  { x: 145, y: 640, scale: 1.5, scaleY: 1.3, rotation: 10, delay: '1800ms' },
  { x: 200, y: 640, scale: 1.6, scaleX: 1.4, rotation: 18, delay: '1900ms' },
  { x: 260, y: 640, scale: 1.7, scaleY: 1.2, rotation: 28, delay: '2000ms' },
]

function WindTrails({ isDayMode }: { isDayMode: boolean }) {
  return (
    <g style={{ opacity: isDayMode ? 1 : 0, transition: 'opacity 3s ease-in-out', pointerEvents: 'none' }}>
      <path d="M -20,620 Q 50,600 120,625 T 260,630" stroke="url(#windGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round"
        style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: isDayMode ? 'dei8WindTrail 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.5s' : 'none' }} />
      <path d="M 10,560 Q 80,540 160,565 T 320,550" stroke="url(#windGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round"
        style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: isDayMode ? 'dei8WindTrail 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 2.2s' : 'none' }} />
      <path d="M 50,520 Q 100,500 150,515 T 250,505" stroke="url(#windGrad)" strokeWidth="1" fill="none" strokeLinecap="round"
        style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: isDayMode ? 'dei8WindTrail 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.0s' : 'none' }} />
    </g>
  )
}

export function FlightPlants({ activeIndex }: FlightPlantsProps) {
  const isDayMode = activeIndex === 4

  return (
    <g className="pointer-events-none select-none" clipPath="url(#panelDiagClip)">
      <defs>
        <style>{`
          @keyframes dei8GrassWind {
            0% { transform: rotate(-2.5deg) skewX(-2.5deg); }
            100% { transform: rotate(7deg) skewX(5deg); }
          }
          @keyframes dei8WindTrail {
            0% { stroke-dashoffset: 500; opacity: 0; }
            20% { opacity: 0.8; }
            70% { opacity: 0.8; }
            100% { stroke-dashoffset: -500; opacity: 0; }
          }
        `}</style>
        <linearGradient id="windGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hillGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#044E2E" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="grassMidGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="grassFrontGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>

      <g>
        {BACK_GRASS.map((pt, idx) => (
          <GrassTuft key={`back-${idx}`} {...pt} isDayMode={isDayMode} />
        ))}
      </g>

      <path
        d="M 0,530 Q 80,540 260,620 L 0,620 Z"
        fill="url(#hillGrad)"
        style={{
          opacity: isDayMode ? 1 : 0,
          transform: isDayMode ? 'translateY(0)' : 'translateY(30px)',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: isDayMode ? '2000ms' : '1000ms',
          transitionDelay: isDayMode ? '200ms' : '1500ms',
        }}
      />

      <WindTrails isDayMode={isDayMode} />

      <g>
        {FRONT_GRASS.map((pt, idx) => (
          <GrassTuft key={`front-${idx}`} {...pt} isDayMode={isDayMode} />
        ))}
      </g>
    </g>
  )
}

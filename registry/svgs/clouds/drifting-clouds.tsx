import { CLOUD_SHAPES } from './cloud-shapes'

interface CloudLayerConfig {
  shapeKey: 1 | 2 | 3 | 4
  /** CSS translate + scale + rotate applied via style.transform */
  transform: string
  animationDelay: string
  opacity?: number
  strokeOpacity: number
  strokeWidth: number
  showInner2?: boolean
  showInner3?: boolean
}

const LAYERS: CloudLayerConfig[] = [
  { shapeKey: 1, transform: 'translate(-120px, 0px)   scale(1.35) rotate(-6deg)', animationDelay: '-2s',   opacity: 0.6,  strokeOpacity: 0.16, strokeWidth: 0.5, showInner2: false },
  { shapeKey: 2, transform: 'translate(-50px,  18px)  scale(1.15) rotate(4deg)',  animationDelay: '-0.5s', strokeOpacity: 0.35, strokeWidth: 0.8, showInner2: true  },
  { shapeKey: 3, transform: 'translate(-130px, 60px)  scale(1.20) rotate(8deg)',  animationDelay: '-4s',   opacity: 0.65, strokeOpacity: 0.20, strokeWidth: 0.6, showInner2: false },
  { shapeKey: 3, transform: 'translate(-55px,  80px)  scale(1.05) rotate(-3deg)', animationDelay: '-2.5s', strokeOpacity: 0.30, strokeWidth: 0.85, showInner2: true  },
  { shapeKey: 1, transform: 'translate(-140px, 140px) scale(1.40) rotate(-5deg)', animationDelay: '-6s',   opacity: 0.6,  strokeOpacity: 0.18, strokeWidth: 0.55, showInner2: false },
  { shapeKey: 1, transform: 'translate(-60px,  160px) scale(1.25) rotate(6deg)',  animationDelay: '-4.8s', strokeOpacity: 0.28, strokeWidth: 0.75, showInner2: false },
]

interface DriftingCloudsProps {
  /** Tailwind / CSS class on the root <g> */
  className?: string
  /** Overall opacity of the whole cloud group */
  opacity?: number
  /** Accent color for cloud strokes (default: gold #EAA800) */
  accentColor?: string
  /** Base fill color inside clouds */
  fillColor?: string
}

export function DriftingClouds({
  className,
  opacity = 1,
  accentColor = '#EAA800',
  fillColor = '#0B0B0C',
}: DriftingCloudsProps) {
  const gradId = 'dei8-cloud-fill'

  return (
    <g className={className} style={{ opacity }}>
      <defs>
        <style>{`
          @keyframes dei8CloudDrift {
            0%,  100% { transform: var(--dei8-cloud-base-transform); }
            50%        { transform: var(--dei8-cloud-drift-transform); }
          }
        `}</style>

        <radialGradient id={gradId} cx="35%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#FFF8D6"  stopOpacity="0.25" />
          <stop offset="35%"  stopColor={accentColor} stopOpacity="0.10" />
          <stop offset="75%"  stopColor={fillColor} stopOpacity="0.90" />
          <stop offset="100%" stopColor={fillColor} stopOpacity="1" />
        </radialGradient>
      </defs>

      {LAYERS.map((layer, i) => {
        const shape = CLOUD_SHAPES[layer.shapeKey]
        const driftX = i % 2 === 0 ? 8 : -6
        const driftY = i % 3 === 0 ? -2 : 1

        return (
          <g
            key={i}
            style={{
              /* CSS custom properties carry the base + drift transforms into the keyframe */
              ['--dei8-cloud-base-transform' as string]: layer.transform,
              ['--dei8-cloud-drift-transform' as string]: layer.transform
                .replace(/translate\(([^)]+)\)/, (_, coords) => {
                  const [x, y] = coords.split(',').map((v: string) => parseFloat(v))
                  return `translate(${(x ?? 0) + driftX}px, ${(y ?? 0) + driftY}px)`
                }),
              transform: layer.transform,
              opacity: layer.opacity ?? 1,
              animation: `dei8CloudDrift ${14 + i * 3}s ease-in-out infinite`,
              animationDelay: layer.animationDelay,
              willChange: 'transform',
            }}
          >
            <path
              d={shape.main}
              fill={`url(#${gradId})`}
              stroke={`rgba(${hexToRgb(accentColor)}, ${layer.strokeOpacity})`}
              strokeWidth={layer.strokeWidth}
            />
            <path
              d={shape.inner1}
              fill="none"
              stroke={`rgba(${hexToRgb(accentColor)}, ${layer.strokeOpacity * 0.5})`}
              strokeWidth={layer.strokeWidth * 0.7}
            />
            {layer.showInner2 && (
              <path
                d={shape.inner2}
                fill="none"
                stroke={`rgba(${hexToRgb(accentColor)}, ${layer.strokeOpacity * 0.35})`}
                strokeWidth={layer.strokeWidth * 0.6}
              />
            )}
          </g>
        )
      })}
    </g>
  )
}

function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.slice(0, 2), 16)
  const g = parseInt(clean.slice(2, 4), 16)
  const b = parseInt(clean.slice(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

interface BirdConfig {
  id: number
  y: number
  scale: number
  opacity: number
  speed: number
  delay: number
  flapDuration: number
}

const BIRDS: BirdConfig[] = [
  { id: 1, y: 95,  scale: 0.80, opacity: 0.75, speed: 10.5, delay: 0.5, flapDuration: 1.1  },
  { id: 2, y: 82,  scale: 0.62, opacity: 0.55, speed: 13.0, delay: 2.8, flapDuration: 1.4  },
  { id: 3, y: 110, scale: 0.88, opacity: 0.80, speed: 9.2,  delay: 0,   flapDuration: 1.0  },
  { id: 4, y: 88,  scale: 0.68, opacity: 0.68, speed: 11.5, delay: 4.8, flapDuration: 1.2  },
  { id: 5, y: 105, scale: 0.55, opacity: 0.48, speed: 14.5, delay: 6.5, flapDuration: 1.5  },
  { id: 6, y: 90,  scale: 0.72, opacity: 0.70, speed: 11.0, delay: 8.5, flapDuration: 1.25 },
]

interface BirdsProps {
  /** Color of the bird silhouettes */
  color?: string
  /** SVG viewBox width — used to compute exit position */
  width?: number
}

export function Birds({ color = 'rgba(45, 38, 25, 0.72)', width = 300 }: BirdsProps) {
  return (
    <g className="pointer-events-none select-none">
      {BIRDS.map((b) => (
        <g key={b.id} className={`dei8-bird-path-${b.id}`}>
          <path
            d="M -10,-3 Q -5,-8 0,-1 Q 5,-8 10,-3 Q 4,1 0,3 Q -4,1 -10,-3 Z"
            fill={color}
            className={`dei8-bird-flap-${b.id}`}
            style={{
              transform: `scale(${b.scale})`,
              transformBox: 'fill-box',
              transformOrigin: 'center',
            }}
          />
        </g>
      ))}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes dei8BirdFlap {
              0%, 100% { transform: scaleY(1.0); }
              50%       { transform: scaleY(0.76); }
            }
            ${BIRDS.map(
              (b) => `
              @keyframes dei8BirdFlight-${b.id} {
                0%   { transform: translate3d(-50px, ${b.y}px, 0) scale(1.0);          opacity: 0; }
                15%  { transform: translate3d(0px, ${b.y}px, 0) scale(0.95);           opacity: ${b.opacity}; }
                85%  { transform: translate3d(${width + 50}px, ${b.y - 4}px, 0) scale(0.55); opacity: ${b.opacity * 0.4}; }
                100% { transform: translate3d(${width + 100}px, ${b.y - 6}px, 0) scale(0.42); opacity: 0; }
              }
              .dei8-bird-path-${b.id} {
                animation: dei8BirdFlight-${b.id} ${b.speed}s linear infinite;
                animation-delay: ${b.delay}s;
              }
              .dei8-bird-flap-${b.id} {
                animation: dei8BirdFlap ${b.flapDuration}s ease-in-out infinite;
              }
            `,
            ).join('\n')}
          `,
        }}
      />
    </g>
  )
}

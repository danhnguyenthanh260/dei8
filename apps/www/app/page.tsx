import Link from 'next/link'

const COMPONENTS = [
  {
    slug: 'airplane',
    type: 'SVG',
    name: 'Airplane',
    description: '6 angle variants — headon, quarter, reverse, transparent',
    files: ['airplane-side.tsx', 'airplane-headon.tsx', '+ 4 more'],
  },
  {
    slug: 'package-box',
    type: 'SVG · Animated',
    name: 'Package Box',
    description: 'Shipping box with butterfly-flap open animation. Click to open.',
    files: ['cargo-package.tsx', 'cargo-package-bg.tsx'],
  },
  {
    slug: 'jet',
    type: 'SVG · Animated',
    name: 'Jet',
    description: '4-phase launch animation with starfield, clouds, contrails. Click to launch.',
    files: ['jet.tsx', 'jet-defs.tsx', 'jet-clouds.tsx', 'jet-styles.ts'],
  },
  {
    slug: 'birds',
    type: 'SVG · Animated',
    name: 'Birds',
    description: '6 birds with individual flight paths and flap cycles.',
    files: ['birds.tsx'],
  },
  {
    slug: 'clouds',
    type: 'SVG · Animated',
    name: 'Clouds',
    description: '4 cloud shapes + multi-layer drifting animation. Themeable colors.',
    files: ['cloud-shapes.ts', 'drifting-clouds.tsx'],
  },
  {
    slug: 'flight',
    type: 'Section · Animated',
    name: 'Flight Journey',
    description: 'Full hero section — aircraft on flight path, day/night sky, fog clouds, constellation, birds, sun rise, grass.',
    files: ['flight-journey.tsx', '+ 17 files'],
  },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
        UI Library
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white mb-4">dei8</h1>
      <p className="text-[var(--muted)] text-base leading-relaxed mb-14 max-w-lg">
        Animated SVG components. Copy the source into your project — no package to install, no
        version to track.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {COMPONENTS.map((c) => (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            className="group border border-[var(--border)] rounded-xl p-5 hover:border-[#333] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--muted)]">
                {c.type}
              </p>
              <span className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors text-xs">
                →
              </span>
            </div>
            <h2 className="text-base font-medium text-white mb-1">{c.name}</h2>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">{c.description}</p>
            <div className="flex flex-wrap gap-1">
              {c.files.map((f) => (
                <span
                  key={f}
                  className="text-[10px] font-mono bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] px-2 py-0.5 rounded"
                >
                  {f}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

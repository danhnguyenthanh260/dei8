import { SourceViewer } from '@/components/source-viewer'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'
import { getBySlug } from '@/lib/registry'
import { WorldMapPreview } from './world-map-preview'

const meta = getBySlug('world-map')!

// world-map-path.ts is 100KB of raw SVG data — link to GitHub instead of rendering inline
const SOURCE_FILES = ['svgs/world-map/world-map.tsx']

export default function WorldMapPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type={meta.type}
        name={meta.name}
        description={meta.description}
        files={meta.files}
      />

      {/* Preview */}
      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Preview</h2>
        <p className="text-xs text-[var(--muted)] mb-4">
          Live animated map — glowing droplets travel each route in a continuous loop.
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border)]">
          <WorldMapPreview />
        </div>
      </section>

      {/* Install */}
      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Install</h2>
        <CodeBlock code={`npx @dei8withnpm/dei8 add world-map`} />
      </section>

      {/* Usage */}
      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Usage</h2>
        <p className="text-xs text-[var(--muted)] mb-4">
          Use <code className="text-[var(--accent)]">latLonToXY</code> to convert real-world
          coordinates into SVG map positions.
        </p>
        <CodeBlock code={`import { WorldMapSection, latLonToXY } from '@/components/world-map'

<WorldMapSection
  eyebrow="Global Network"
  headline="Worldwide shipping coverage"
  body="Your description here."
  stats={[
    { value: '200+', label: 'Countries' },
    { value: '24/7',  label: 'Operations' },
  ]}
  locations={[
    { id: 'hcm', name: 'HO CHI MINH', ...latLonToXY(10.8, 106.7) },
    { id: 'tyo', name: 'TOKYO',       ...latLonToXY(35.7, 139.7) },
    { id: 'lax', name: 'LOS ANGELES', ...latLonToXY(34.1, -118.2), labelAnchor: 'middle', labelOffsetY: 16 },
  ]}
  routes={[
    { from: 'hcm', to: 'tyo', duration: '7s' },
    { from: 'hcm', to: 'lax', duration: '13s' },
  ]}
/>`} />
      </section>

      {/* latLonToXY helper */}
      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">
          <code className="text-[var(--accent)]">latLonToXY(lat, lon)</code>
        </h2>
        <p className="text-xs text-[var(--muted)] mb-4">
          Converts geographic coordinates to SVG map positions. Fitted from 10 country centroids — residuals within ±3 SVG units.
        </p>
        <CodeBlock code={`import { latLonToXY } from '@/components/world-map'

latLonToXY(10.8,  106.7)  // Ho Chi Minh → { x: 539, y: 195 }
latLonToXY(35.7,  139.7)  // Tokyo       → { x: 602, y: 144 }
latLonToXY(51.5,  -0.1)   // London      → { x: 334, y: 112 }
latLonToXY(40.7,  -74.0)  // New York    → { x: 192, y: 134 }
latLonToXY(-33.9, 151.2)  // Sydney      → { x: 624, y: 287 }

// Projection formula (linear fit from calibration script):
//   x = 1.9173 × lon + 334.47
//   y = −2.052  × lat + 217.67`} />
      </section>

      {/* Props tables */}
      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Props</h2>

        <p className="text-xs text-[var(--muted)] mb-2 font-mono">WorldMapSectionProps</p>
        <PropsTable rows={[
          ['eyebrow',   'string',           'Panel category label. Default: "Global Network"'],
          ['headline',  'string',           'Panel main heading'],
          ['body',      'string',           'Panel description paragraph'],
          ['stats',     'WorldMapStat[]',   'Stat chips below the body. Default: 200+ / 24/7 / 99.9%'],
          ['locations', 'MapLocation[]',    'City markers. Default: Tokyo, London, New York, Dubai, Sydney, São Paulo'],
          ['routes',    'MapRoute[]',       'Animated routes between location ids. Default: 4 sample routes'],
        ]} />

        <p className="text-xs text-[var(--muted)] mt-6 mb-2 font-mono">MapLocation</p>
        <PropsTable rows={[
          ['id',            'string',                   'Unique key, referenced in routes'],
          ['name',          'string',                   'City label rendered on map'],
          ['x',             'number',                   'SVG x coordinate — use latLonToXY()'],
          ['y',             'number',                   'SVG y coordinate — use latLonToXY()'],
          ['labelOffsetX',  'number?',                  'Label x offset from marker. Default: 8'],
          ['labelOffsetY',  'number?',                  'Label y offset from marker. Default: 6'],
          ['labelAnchor',   '"start"|"end"|"middle"?',  'SVG text-anchor. Default: "start"'],
        ]} />

        <p className="text-xs text-[var(--muted)] mt-6 mb-2 font-mono">MapRoute</p>
        <PropsTable rows={[
          ['from',      'string',   'Origin location id'],
          ['to',        'string',   'Destination location id'],
          ['cpX',       'number?',  'Arc control point x. Auto-computed if omitted'],
          ['cpY',       'number?',  'Arc control point y. Auto-computed if omitted'],
          ['duration',  'string?',  'Animation cycle duration. Default: "8s"'],
        ]} />
      </section>

      {/* Source */}
      <section>
        <h2 className="text-sm font-medium text-white mb-1">Source</h2>
        <p className="text-xs text-[var(--muted)] mb-4">
          <code className="text-[var(--accent)]">world-map-path.ts</code> is ~100 KB of raw SVG
          path data —{' '}
          <a
            href="https://github.com/danhnguyenthanh260/dei8/blob/master/registry/svgs/world-map/world-map-path.ts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)] hover:text-white underline underline-offset-2 transition-colors"
          >
            view on GitHub ↗
          </a>
        </p>
        <div className="flex flex-col gap-3">
          {SOURCE_FILES.map((f) => (
            <SourceViewer key={f} file={f} />
          ))}
        </div>
      </section>
    </div>
  )
}

// ── Shared props table ─────────────────────────────────────────────────────
function PropsTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="border border-[var(--border)] rounded-xl overflow-hidden text-xs font-mono">
      <div className="grid grid-cols-3 px-4 py-2 bg-[var(--surface)] text-[var(--muted)] border-b border-[var(--border)]">
        <span>Prop</span><span>Type</span><span>Description</span>
      </div>
      {rows.map(([prop, type, desc]) => (
        <div key={prop} className="grid grid-cols-3 px-4 py-2.5 border-b border-[var(--border)] last:border-0 text-[var(--text)]">
          <span className="text-[var(--accent)]">{prop}</span>
          <span className="text-[var(--muted)]">{type}</span>
          <span className="text-[var(--muted)]">{desc}</span>
        </div>
      ))}
    </div>
  )
}

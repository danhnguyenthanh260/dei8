import { SourceViewer } from '@/components/source-viewer'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'
import { FlightPreview } from './flight-preview'

const FILES = [
  'svgs/flight/flight-journey.tsx',
  'svgs/flight/flight-visual-panel.tsx',
  'svgs/flight/flight-clouds.tsx',
  'svgs/flight/flight-clouds-extra.tsx',
  'svgs/flight/flight-birds.tsx',
  'svgs/flight/flight-plants.tsx',
  'svgs/flight/flight-sky-decor.tsx',
  'svgs/flight/flight-svg-defs.tsx',
  'svgs/flight/cloud-wisps.tsx',
  'svgs/flight/aircraft-image.tsx',
  'svgs/flight/flight-constants.ts',
  'svgs/flight/flight-utils.ts',
  'svgs/airplane/airplane-side.tsx',
  'svgs/airplane/airplane-side-reverse.tsx',
  'svgs/airplane/airplane-headon.tsx',
  'svgs/airplane/airplane-trans-left.tsx',
  'svgs/airplane/airplane-quarter-right.tsx',
  'svgs/airplane/airplane-quarter-left.tsx',
]

export default function FlightPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="Section · Animated"
        name="Flight Journey"
        description="Full-width hero section with animated flight path. Aircraft flies between 5 interactive nodes — day/night sky transition, fog clouds, Gemini constellation, birds, sun rise, and swaying grass. Pass your own nodes as props."
        files={['flight-journey.tsx', '+ 17 supporting files']}
      />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Preview</h2>
        <p className="text-xs text-[var(--muted)] mb-4">
          Click any node dot or use the tab strip below. Hover over fog clouds to reveal labels.
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border)]">
          <FlightPreview />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Install</h2>
        <CodeBlock code={`npx @dei8withnpm/dei8 add flight-journey`} />
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Usage</h2>
        <p className="text-xs text-[var(--muted)] mb-4">
          Copy all 18 files into the same folder. Import <code className="text-[var(--accent)]">FlightJourneySection</code> and pass your own <code className="text-[var(--accent)]">nodes</code>.
        </p>
        <CodeBlock code={`import { FlightJourneySection } from '@/components/flight-journey'

const nodes = [
  {
    id: 'step-1',
    label: 'Pickup',
    eyebrow: 'Step 1',
    headline: 'Package collected',
    body: 'Driver arrives and scans the parcel.',
    keyword: 'Origin scan',
    image: '/images/step1.jpg',  // optional background
    imageAlt: 'Pickup',
    ctaLabel: 'Track',
    ctaHref: '/track',
    progress: 0,       // 0–1 position on flight path
  },
  // ... 4 more nodes (progress: 0.25, 0.5, 0.75, 1)
]

<FlightJourneySection nodes={nodes} />`} />
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">FlightNode props</h2>
        <div className="border border-[var(--border)] rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 px-4 py-2 bg-[var(--surface)] text-[var(--muted)] border-b border-[var(--border)]">
            <span>Prop</span><span>Type</span><span>Description</span>
          </div>
          {[
            ['id',        'string',  'Unique key'],
            ['label',     'string',  'Mobile tab label'],
            ['eyebrow',   'string',  'Small label above headline'],
            ['headline',  'string',  'Main hero heading'],
            ['body',      'string',  'Description paragraph'],
            ['keyword',   'string',  'Badge shown on hover card'],
            ['image',     'string',  'Background image URL (optional)'],
            ['imageAlt',  'string',  'Alt text for background image'],
            ['ctaLabel',  'string',  'CTA button text'],
            ['ctaHref',   'string',  'CTA button href'],
            ['progress',  'number',  '0–1 position on flight path'],
          ].map(([p, t, d]) => (
            <div key={p} className="grid grid-cols-3 px-4 py-2.5 border-b border-[var(--border)] last:border-0 text-[var(--text)]">
              <span className="text-[var(--accent)]">{p}</span>
              <span className="text-[var(--muted)]">{t}</span>
              <span className="text-[var(--muted)]">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Animation layers</h2>
        <div className="border border-[var(--border)] rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-2 px-4 py-2 bg-[var(--surface)] text-[var(--muted)] border-b border-[var(--border)]">
            <span>Layer</span><span>Active when</span>
          </div>
          {[
            ['Stars + Gemini constellation',  'Nodes 1–4 (night)'],
            ['Fog clouds (interactive)',       'Always — disperses on approach'],
            ['Crescent moon',                 'Nodes 1–4 (slides out at node 5)'],
            ['Day sky gradient',              'Node 5 only — expands from sun'],
            ['Ukiyo-e sun',                   'Node 5 only'],
            ['Cirrus clouds',                 'Node 5 only'],
            ['Grass hills + wind trails',     'Node 5 only'],
            ['Bird flock',                    'Node 5 — fades in after clouds'],
          ].map(([layer, when]) => (
            <div key={layer} className="grid grid-cols-2 px-4 py-2.5 border-b border-[var(--border)] last:border-0 text-[var(--text)]">
              <span>{layer}</span><span className="text-[var(--muted)]">{when}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Files — copy all 18</h2>
        <div className="flex flex-col gap-3">
          {FILES.map((f) => (
            <SourceViewer key={f} file={f} />
          ))}
        </div>
      </section>
    </div>
  )
}

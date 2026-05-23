import { SourceViewer } from '@/components/source-viewer'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'
import { ComponentMetaSection } from '@/components/component-meta-section'
import { getBySlug } from '@/lib/registry'
import { AudienceSection } from '@registry/svgs/audience/audience-section'

const meta = getBySlug('audience')!

const FILES = [
  'svgs/audience/audience-section.tsx',
  'svgs/audience/audience-bg.tsx',
  'svgs/jet/jet.tsx',
  'svgs/jet/jet-defs.tsx',
  'svgs/jet/jet-clouds.tsx',
  'svgs/jet/jet-styles.ts',
  'svgs/package-box/cargo-package.tsx',
  'svgs/package-box/cargo-package-bg.tsx',
]

export default function AudiencePage() {
  return (
    <div>
      {/* Full-width live preview */}
      <AudienceSection />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-(--muted) mb-6">
          Click the jet to launch · Click the package to open
        </p>

        <PageHeader
          type="Section · Animated"
          name="Audience Section"
          description="Full-width audience spotlight section with an animated Jet and Package flanking the heading, and 4 symmetrical corner-badge cards. Pass your own cards with optional background images."
          files={['audience-section.tsx', 'audience-bg.tsx', '+ 6 supporting files']}
        />

        <ComponentMetaSection meta={meta} />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Install</h2>
        <CodeBlock code={`npx @dei8withnpm/dei8 add audience-section`} />
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Usage</h2>
        <p className="text-xs text-(--muted) mb-4">
          Copy all 8 files into the same folder. Import{' '}
          <code className="text-(--accent)">AudienceSection</code> and optionally pass your own cards.
        </p>
        <CodeBlock
          code={`import { AudienceSection } from '@/components/audience-section'

// Default — uses built-in placeholder cards
<AudienceSection />

// Custom cards with optional background images
<AudienceSection
  eyebrow="Who we serve"
  title="Built for teams who ship —"
  accentTitle="from solo founders to enterprises"
  description="One component, infinite configurations."
  cards={[
    {
      id: 'card-1',
      badgeText: 'SCALE',
      title: '500k+ deliveries',
      tagline: 'Processed last quarter',
      imageSrc: '/images/card-bg.jpg',
      imageAlt: 'Warehouse',
    },
    // ... 3 more cards
  ]}
/>`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">AudienceCard props</h2>
        <div className="border border-(--border) rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 px-4 py-2 bg-(--surface) text-(--muted) border-b border-(--border)">
            <span>Prop</span><span>Type</span><span>Description</span>
          </div>
          {[
            ['id',         'string',          'Unique key'],
            ['badgeText',  'string',          'Uppercase label in corner badge'],
            ['title',      'string',          'Main stat or headline'],
            ['tagline',    'string',          'Supporting line below title'],
            ['imageSrc',   'string?',         'Optional card background image'],
            ['imageAlt',   'string?',         'Alt text for background image'],
          ].map(([p, t, d]) => (
            <div key={p} className="grid grid-cols-3 px-4 py-2.5 border-b border-(--border) last:border-0 text-(--text)">
              <span className="text-(--accent)">{p}</span>
              <span className="text-(--muted)">{t}</span>
              <span className="text-(--muted)">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">AudienceSection props</h2>
        <div className="border border-(--border) rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 px-4 py-2 bg-(--surface) text-(--muted) border-b border-(--border)">
            <span>Prop</span><span>Type</span><span>Description</span>
          </div>
          {[
            ['eyebrow',      'string?', 'Small label above heading'],
            ['title',        'string?', 'Plain portion of the h2'],
            ['accentTitle',  'string?', 'Gold-underlined portion of the h2'],
            ['description',  'string?', 'Subtext below heading'],
            ['cards',        'AudienceCard[]?', 'Array of 4 cards (default data used if omitted)'],
          ].map(([p, t, d]) => (
            <div key={p} className="grid grid-cols-3 px-4 py-2.5 border-b border-(--border) last:border-0 text-(--text)">
              <span className="text-(--accent)">{p}</span>
              <span className="text-(--muted)">{t}</span>
              <span className="text-(--muted)">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Files — copy all 8</h2>
        <div className="flex flex-col gap-3">
          {FILES.map((f) => (
            <SourceViewer key={f} file={f} />
          ))}
        </div>
      </section>
      </div>
    </div>
  )
}

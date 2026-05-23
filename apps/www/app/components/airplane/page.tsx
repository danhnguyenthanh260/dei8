import { AirplaneSide } from '@registry/svgs/airplane/airplane-side'
import { AirplaneSideReverse } from '@registry/svgs/airplane/airplane-side-reverse'
import { AirplaneHeadon } from '@registry/svgs/airplane/airplane-headon'
import { AirplaneQuarterLeft } from '@registry/svgs/airplane/airplane-quarter-left'
import { AirplaneQuarterRight } from '@registry/svgs/airplane/airplane-quarter-right'
import { AirplaneTransLeft } from '@registry/svgs/airplane/airplane-trans-left'
import { AirplaneModel, AirplaneView } from '@registry/svgs/airplane/airplane-model'
import { PreviewFrame } from '@/components/preview-frame'
import { SourceViewer } from '@/components/source-viewer'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'
import { ComponentMetaSection } from '@/components/component-meta-section'
import { getBySlug } from '@/lib/registry'

const meta = getBySlug('airplane')!

const LEGACY_VARIANTS = [
  { label: 'airplane-side',          el: <AirplaneSide className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-side-reverse',  el: <AirplaneSideReverse className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-headon',        el: <AirplaneHeadon className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-quarter-left',  el: <AirplaneQuarterLeft className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-quarter-right', el: <AirplaneQuarterRight className="w-36 h-16 overflow-visible" /> },
  { label: 'airplane-trans-left',    el: <AirplaneTransLeft className="w-36 h-16 overflow-visible" /> },
]

const LEVEL_RING_VIEWS: AirplaneView[] = [
  'front', 'front-right', 'right', 'rear-right', 'rear', 'rear-left', 'left', 'front-left'
]

const TOP_RING_VIEWS: AirplaneView[] = [
  'top-front', 'top-front-right', 'top-right', 'top-rear-right', 'top-rear', 'top-rear-left', 'top-left', 'top-front-left'
]

const MOTION_VIEWS: AirplaneView[] = [
  'bank-left', 'bank-right', 'climb-left', 'climb-right', 'descent-left', 'descent-right'
]

const FILES = [
  'svgs/airplane/airplane-side.tsx',
  'svgs/airplane/airplane-side-reverse.tsx',
  'svgs/airplane/airplane-headon.tsx',
  'svgs/airplane/airplane-quarter-left.tsx',
  'svgs/airplane/airplane-quarter-right.tsx',
  'svgs/airplane/airplane-trans-left.tsx',
]

export default function AirplanePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG"
        name="Airplane"
        description="360° View Atlas — a unified mathematical 3D geometry rendered in discrete SVG angles."
        files={FILES.map((f) => f.split('/').pop()!)}
      />

      <ComponentMetaSection meta={meta} />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Legacy Wrappers (Backward Compatible)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {LEGACY_VARIANTS.map((v) => (
            <PreviewFrame key={v.label} label={v.label}>{v.el}</PreviewFrame>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">360° Level Ring</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {LEVEL_RING_VIEWS.map((view) => (
            <PreviewFrame key={view} label={view}>
              <AirplaneModel view={view} className="w-36 h-16 overflow-visible" />
            </PreviewFrame>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Top 3D Ring (Phase 2 Stub)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TOP_RING_VIEWS.map((view) => (
            <PreviewFrame key={view} label={view}>
              <AirplaneModel view={view} className="w-36 h-16 overflow-visible" />
            </PreviewFrame>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Motion Variants</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {MOTION_VIEWS.map((view) => (
            <PreviewFrame key={view} label={view}>
              <AirplaneModel view={view} className="w-36 h-16 overflow-visible" />
            </PreviewFrame>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Usage</h2>
        <p className="text-xs text-[#9CA3AF] mb-4">
          Copy the file you need (see below) into your project, then import it.
        </p>
        <CodeBlock code={`import { AirplaneSide } from '@/components/airplane-side'

<AirplaneSide />

// Custom size via className
<AirplaneSide className="w-40 h-20 overflow-visible" />`} />
      </section>

      <section className="mb-4">
        <h2 className="text-sm font-medium text-white mb-4">Files — copy what you need</h2>
        <div className="flex flex-col gap-3">
          {FILES.map((f) => (
            <SourceViewer key={f} file={f} />
          ))}
        </div>
      </section>
    </div>
  )
}

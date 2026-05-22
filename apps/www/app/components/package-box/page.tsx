import { CargoPackage } from '@registry/svgs/package-box/cargo-package'
import { PreviewFrame } from '@/components/preview-frame'
import { SourceViewer } from '@/components/source-viewer'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'
import { ComponentMetaSection } from '@/components/component-meta-section'
import { getBySlug } from '@/lib/registry'

const meta = getBySlug('package-box')!

const FILES = [
  'svgs/package-box/cargo-package.tsx',
  'svgs/package-box/cargo-package-bg.tsx',
]

export default function PackageBoxPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG · Animated"
        name="Package Box"
        description="3D isometric kraft cardboard box. Click to trigger the butterfly-flap open animation — tape cut, flap rotation, light beam. Click again to close."
        files={FILES.map((f) => f.split('/').pop()!)}
      />

      <ComponentMetaSection meta={meta} />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Preview</h2>
        <p className="text-xs text-(--muted) mb-4">Click the box to open / close.</p>
        <PreviewFrame>
          <CargoPackage className="w-64 h-36 overflow-visible cursor-pointer select-none" />
        </PreviewFrame>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-2">Usage</h2>
        <p className="text-xs text-(--muted) mb-4">
          Copy both files below — <code className="font-mono text-(--accent)">cargo-package.tsx</code> imports{' '}
          <code className="font-mono text-(--accent)">cargo-package-bg.tsx</code> directly.
        </p>
        <CodeBlock code={`import { CargoPackage } from '@/components/cargo-package'

<CargoPackage />

// Custom size
<CargoPackage className="w-48 h-28 overflow-visible cursor-pointer select-none" />`} />
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Files — copy both</h2>
        <div className="flex flex-col gap-3">
          {FILES.map((f) => (
            <SourceViewer key={f} file={f} />
          ))}
        </div>
      </section>
    </div>
  )
}

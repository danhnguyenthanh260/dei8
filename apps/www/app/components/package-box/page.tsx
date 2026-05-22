import { CargoPackage } from '@registry/svgs/package-box/cargo-package'
import { PreviewFrame } from '@/components/preview-frame'
import { CodeBlock } from '@/components/code-block'
import { PageHeader } from '@/components/page-header'

export default function PackageBoxPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        type="SVG · Animated"
        name="Package Box"
        description="3D isometric kraft cardboard box. Click to trigger the butterfly-flap open animation — tape cut effect, flap rotation, inner light beam. Click again to close."
        files={['cargo-package.tsx', 'cargo-package-bg.tsx']}
      />

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Preview</h2>
        <p className="text-xs text-[var(--muted)] mb-3">Click the box to open / close.</p>
        <PreviewFrame>
          <CargoPackage className="w-64 h-36 overflow-visible cursor-pointer select-none" />
        </PreviewFrame>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium text-white mb-4">Usage</h2>
        <CodeBlock code={`// Copy both files into your project:
// cargo-package.tsx
// cargo-package-bg.tsx  (imported by cargo-package)

import { CargoPackage } from '@/components/cargo-package'

<CargoPackage />

// Custom size
<CargoPackage className="w-48 h-28 overflow-visible cursor-pointer select-none" />`} />
      </section>

      <section>
        <h2 className="text-sm font-medium text-white mb-4">Props</h2>
        <div className="border border-[var(--border)] rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 px-4 py-2 bg-[var(--surface)] text-[var(--muted)] border-b border-[var(--border)]">
            <span>Prop</span><span>Type</span><span>Default</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3 text-[var(--text)]">
            <span>className</span><span className="text-[var(--muted)]">string?</span><span className="text-[var(--muted)]">'w-44 h-24 overflow-visible cursor-pointer select-none'</span>
          </div>
        </div>
      </section>
    </div>
  )
}

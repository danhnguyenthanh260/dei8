const categories = [
  {
    slug: "airplane",
    type: "SVG",
    name: "Airplane",
    description: "6 angle variants — headon, quarter, reverse, transparent",
  },
  {
    slug: "package-box",
    type: "SVG · Animated",
    name: "Package Box",
    description: "Shipping box with butterfly-flap open animation",
  },
  {
    slug: "jet",
    type: "SVG · Animated",
    name: "Jet",
    description: "Jet with layered cloud trail effects",
  },
  {
    slug: "birds",
    type: "SVG · Animated",
    name: "Birds",
    description: "Animated birds flock",
  },
  {
    slug: "clouds",
    type: "SVG · Animated",
    name: "Clouds",
    description: "Multi-layer parallax cloud animations",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-500 mb-4">
          UI Library
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-white mb-6">
          dei8
        </h1>
        <p className="text-neutral-400 text-lg leading-relaxed mb-16 max-w-xl">
          Animated SVG components and UI sections. Copy-paste into your project.
          No install, no lock-in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              className="border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-2">
                {cat.type}
              </p>
              <h2 className="text-lg font-medium text-white mb-1">{cat.name}</h2>
              <p className="text-sm text-neutral-500">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

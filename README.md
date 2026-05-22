# dei8

A visual building-block library for React — animated SVG components and full-width UI sections you can drop into any project.

No package to install. No version to track. Copy the source, own the code.

---

## What can you build?

| Goal | Components to use |
|------|-------------------|
| Travel or airline landing page | Flight Journey · Airplane · World Map · Birds |
| Logistics or shipping homepage | World Map · Package Box · Airplane · Jet |
| Real estate or hospitality site | Italian House · Birds · Clouds |
| Premium / private aviation brand | Jet · Airplane · World Map |
| E-commerce order & delivery flow | Package Box · World Map · Airplane |

---

## Components

### Visual primitives

Drop into any layout as illustrations.

| Component | Description | Best for |
|-----------|-------------|----------|
| **Airplane** | 6-angle SVG — side, head-on, quarter, transparent | Travel hero, logistics UI, airline brand |
| **Italian House** | 3D-style Mediterranean house with hover float | Real estate, hospitality, vacation rental |
| **Birds** | 6 animated birds with individual flight paths | Nature brand, peaceful hero, sky backgrounds |
| **Clouds** | 4 cloud shapes with layered parallax drift | Sky backgrounds, weather apps, dreamy sections |
| **Jet** | Night-sky jet with 4-phase launch animation | Premium travel, feature launch, private aviation |
| **Package Box** | 3D box with butterfly-flap open animation | Order confirmation, delivery success, unboxing |

### Full sections

Drop-in hero sections with content props.

| Component | Description | Best for |
|-----------|-------------|----------|
| **Flight Journey** | Aircraft flight path with interactive nodes, day/night sky | Airline page, travel booking, journey timeline |
| **World Map** | Animated globe with glowing routes, city markers, stats | Global reach, shipping network, SaaS coverage |

---

## Usage

Browse and copy at the docs site, or install via CLI:

```bash
npx @dei8withnpm/dei8 add flight-journey
npx @dei8withnpm/dei8 add world-map
npx @dei8withnpm/dei8 add italian-house
npx @dei8withnpm/dei8 list   # see all available components
```

Or copy manually — each folder in `/registry` is self-contained.

---

## Stack

- React 19 + TypeScript
- Tailwind CSS v4
- Next.js 16 (docs site only)

---

## Registry structure

```
registry/
  svgs/
    airplane/          ← 6-angle static SVG variants
    birds/             ← animated bird flock
    clouds/            ← layered drifting clouds
    jet/               ← night-sky jet with launch animation
    package-box/       ← 3D shipping box with open animation
    house/             ← Italian house 3D illustration
    flight/            ← Flight Journey section (18 files)
    world-map/         ← World Map section
```

---

## For AI agents

See [COMPONENT_INDEX.md](./COMPONENT_INDEX.md) for a structured reference optimized for AI-assisted code generation — includes purpose, use cases, import paths, and example JSX for every component.

---

## Contributing

PRs welcome. Keep components self-contained with minimal external dependencies.

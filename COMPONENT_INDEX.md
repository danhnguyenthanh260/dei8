# Component Index

AI-agent-friendly reference for the dei8 visual component library.
Use this file to understand what each component does, when to use it, and how to import it.

---

## Quick lookup by use case

| I want to build... | Use these components |
|--------------------|----------------------|
| Travel landing page | `FlightJourneySection`, `AirplaneSide`, `WorldMapSection`, `Birds` |
| Airline or aviation brand | `FlightJourneySection`, `CargoJet`, `AirplaneHeadon` |
| Logistics or shipping page | `WorldMapSection`, `CargoPackage`, `AirplaneSide` |
| Real estate homepage | `ItalianHouse3D`, `Birds`, `DriftingClouds` |
| E-commerce order confirmation | `CargoPackage`, `WorldMapSection` |
| Sky or background decoration | `DriftingClouds`, `Birds` |
| Ambient hero accent | `CargoJet`, `DriftingClouds`, `Birds` |

---

## Components

---

### Airplane

**Type:** SVG (static)
**Category:** Visual primitive

**Purpose:**
Premium airplane illustration in 6 viewing angles. Metallic gradients, gold brand stripe, cockpit glass highlight, and navigation beacon.

**Best used in:**
- Travel hero sections
- Flight booking UI
- Shipping or logistics dashboards
- Airline brand pages
- Delivery confirmation screens

**Variants:**

| Export | Angle |
|--------|-------|
| `AirplaneSide` | Side profile |
| `AirplaneSideReverse` | Side profile (flipped) |
| `AirplaneHeadon` | Head-on / front view |
| `AirplaneQuarterLeft` | 3/4 left |
| `AirplaneQuarterRight` | 3/4 right |
| `AirplaneTransLeft` | Transparent body, left |

**Import:**
```tsx
import { AirplaneSide } from '@/components/airplane-side'
import { AirplaneQuarterRight } from '@/components/airplane-quarter-right'
```

**Example:**
```tsx
<AirplaneSide className="w-40 h-20 overflow-visible" />
<AirplaneQuarterRight className="w-36 h-16 overflow-visible" />
```

**Visual tone:** professional · fast · global · premium · trustworthy

**Pairs well with:** Flight Journey · World Map

---

### Package Box

**Type:** SVG · Animated (interactive)
**Category:** Visual primitive

**Purpose:**
3D isometric kraft cardboard box with a satisfying butterfly-flap open animation. Tape cuts, flaps rotate open, inner light glows. Click to open, click again to close.

**Best used in:**
- Order confirmation pages
- Delivery success screens
- Unboxing product reveals
- Checkout celebration moments
- E-commerce onboarding flows

**Import:**
```tsx
import { CargoPackage } from '@/components/cargo-package'
```

**Required files:** `cargo-package.tsx`, `cargo-package-bg.tsx` (same folder)

**Example:**
```tsx
<CargoPackage className="w-64 h-36 overflow-visible cursor-pointer select-none" />
```

**Visual tone:** friendly · celebratory · delightful · satisfying

**Pairs well with:** World Map · Jet

---

### Jet

**Type:** SVG · Animated (interactive)
**Category:** Visual primitive

**Purpose:**
Night-sky jet with a dramatic 4-phase launch animation — idle float, engine spool-up, fly-out with shockwave, teleport, glide return through clouds. Stars and cloud layers complete the scene.

**Best used in:**
- Private aviation landing pages
- Premium travel hero sections
- Feature launch moments
- Product reveal animations
- SaaS "speed" or "reach" marketing

**Animation phases:**

| State | Description |
|-------|-------------|
| `idle` | Continuous float + cloud drift |
| `launching` | 280ms — engine nudge + shockwave |
| `away` | 1400ms — fly-out, clouds scatter |
| `prepare-return` | 80ms — teleport (invisible) |
| `returning` | 1900ms — glide in from behind cloud |

**Import:**
```tsx
import { CargoJet } from '@/components/jet/jet'
```

**Required files:** `jet.tsx`, `jet-defs.tsx`, `jet-clouds.tsx`, `jet-styles.ts` (same folder)

**Example:**
```tsx
<CargoJet className="w-72 h-40 overflow-visible cursor-pointer select-none" />
```

**Visual tone:** dramatic · premium · cinematic · speed · excitement

**Pairs well with:** Airplane · Flight Journey · Clouds

---

### Birds

**Type:** SVG · Animated
**Category:** Visual primitive

**Purpose:**
Six graceful bird silhouettes with individual randomized flight paths and wing-flap cycles. Renders as a `<g>` element inside any `<svg>`. Themeable color.

**Best used in:**
- Nature or outdoor brand heroes
- Ambient sky backgrounds
- Travel and outdoors sections
- Real estate page headers
- Wellness or spa sites

**Import:**
```tsx
import { Birds } from '@/components/birds'
```

**Example:**
```tsx
// Dark background (default):
<svg viewBox="0 0 300 160" className="w-full">
  <Birds width={300} />
</svg>

// Light background:
<svg viewBox="0 0 300 160" className="w-full">
  <Birds color="rgba(30, 20, 10, 0.6)" width={300} />
</svg>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `rgba(180,160,120,0.6)` | Bird silhouette color |
| `width` | `number` | `300` | Match to SVG viewBox width for correct exit calculation |

**Visual tone:** peaceful · natural · organic · free · calming

**Pairs well with:** Clouds · Flight Journey

---

### Clouds

**Type:** SVG · Animated
**Category:** Visual primitive

**Purpose:**
Four distinct cloud path shapes — elongated, puffy, mountain-peak, wispy — with layered parallax drifting animation. Fully themeable accent and fill colors for light, dark, and branded backgrounds.

**Best used in:**
- Sky background layers
- Weather app UI
- Travel landing pages
- Dreamy or soft hero sections
- Ambient section decoration

**Import:**
```tsx
import { DriftingClouds } from '@/components/drifting-clouds'
// Or just the path data:
import { CLOUD_SHAPES } from '@/components/cloud-shapes'
```

**Required files:** `drifting-clouds.tsx`, `cloud-shapes.ts` (same folder)

**Example:**
```tsx
// Default (dark/gold):
<svg viewBox="0 0 300 200" className="w-full">
  <DriftingClouds />
</svg>

// Themed (light/indigo):
<svg viewBox="0 0 300 200" className="w-full">
  <DriftingClouds accentColor="#6366F1" fillColor="#E0E7FF" />
</svg>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accentColor` | `string` | `#EAA800` | Cloud outline/glow color |
| `fillColor` | `string` | `#1a1a2e` | Cloud fill color |

**Visual tone:** dreamy · soft · airy · natural · ambient

**Pairs well with:** Birds · Jet · Flight Journey

---

### Flight Journey

**Type:** Section · Animated (interactive)
**Category:** Full section

**Purpose:**
A complete full-width hero section. An aircraft follows a curved path through 5 interactive nodes, with day-to-night sky transition, fog clouds, constellation, birds, sunrise, and ground vegetation. The flagship visual experience in the library.

**Best used in:**
- Airline or travel service landing pages
- Travel booking hero sections
- Journey or step-by-step timeline sections
- Multi-step product demos
- Logistics company hero pages

**Import:**
```tsx
import { FlightJourneySection } from '@/components/flight-journey'
```

**Required files:** 18 files — install via CLI:
```bash
npx @dei8withnpm/dei8 add flight-journey
```

**Example:**
```tsx
const nodes = [
  {
    id: 'step-1',
    label: 'Pickup',
    eyebrow: 'Step 1',
    headline: 'Package collected',
    body: 'Driver arrives and scans the parcel.',
    keyword: 'Origin scan',
    ctaLabel: 'Track',
    ctaHref: '/track',
    progress: 0,        // 0–1 position on path
  },
  // ... 4 more nodes at progress: 0.25, 0.5, 0.75, 1
]

<FlightJourneySection nodes={nodes} />
```

**FlightNode props:**

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique key |
| `label` | `string` | Mobile tab label |
| `eyebrow` | `string` | Small label above headline |
| `headline` | `string` | Main hero heading |
| `body` | `string` | Description paragraph |
| `keyword` | `string` | Badge shown on hover card |
| `image` | `string?` | Optional background image URL |
| `ctaLabel` | `string` | CTA button text |
| `ctaHref` | `string` | CTA button href |
| `progress` | `number` | 0–1 position on flight path |

**Visual tone:** epic · cinematic · journey · aspirational · dynamic

**Pairs well with:** Airplane · Birds · Clouds · World Map

---

### World Map

**Type:** Section · Animated
**Category:** Full section

**Purpose:**
Animated world map with glowing flight routes, configurable city markers, and a stats panel. Supports real lat/lon coordinates via the `latLonToXY()` helper.

**Best used in:**
- Global reach or "We serve worldwide" sections
- International shipping network visualization
- SaaS coverage or availability maps
- Airline route maps
- Logistics company overviews

**Import:**
```tsx
import { WorldMapSection, latLonToXY } from '@/components/world-map'
```

**Required files:** `world-map.tsx`, `world-map-path.ts`

**Example:**
```tsx
<WorldMapSection
  eyebrow="Global Network"
  headline="Delivered everywhere"
  body="We connect businesses to customers in 200+ countries."
  stats={[
    { value: '200+', label: 'Countries' },
    { value: '24/7', label: 'Operations' },
  ]}
  locations={[
    { id: 'hcm', name: 'HO CHI MINH', ...latLonToXY(10.8, 106.7) },
    { id: 'tyo', name: 'TOKYO',       ...latLonToXY(35.7, 139.7) },
    { id: 'lax', name: 'LOS ANGELES', ...latLonToXY(34.1, -118.2) },
  ]}
  routes={[
    { from: 'hcm', to: 'tyo', duration: '7s' },
    { from: 'hcm', to: 'lax', duration: '13s' },
  ]}
/>
```

**`latLonToXY(lat, lon)` helper:**
```tsx
latLonToXY(10.8, 106.7)   // → { x: 539, y: 195 }  Ho Chi Minh
latLonToXY(35.7, 139.7)   // → { x: 602, y: 144 }  Tokyo
latLonToXY(51.5, -0.1)    // → { x: 334, y: 112 }  London
latLonToXY(40.7, -74.0)   // → { x: 192, y: 134 }  New York
```

**Visual tone:** global · trustworthy · professional · data-driven · connected

**Pairs well with:** Airplane · Flight Journey · Package Box

---

### Italian House

**Type:** SVG · Animated (hover)
**Category:** Visual primitive

**Purpose:**
A warm two-floor Italian house with terracotta roof tiles, creamy stucco walls, green shutters, wooden door, and flower pots in the window sills. Storybook Mediterranean charm. Hover for a gentle float animation.

**Best used in:**
- Real estate hero sections
- Travel or hospitality landing pages
- Vacation rental platforms
- Property listing illustrations
- Cozy lifestyle or home brand pages

**Import:**
```tsx
import { ItalianHouse3D } from '@/components/italian-house-3d'
```

**Example:**
```tsx
<ItalianHouse3D />

// Custom size with animation:
<ItalianHouse3D width={480} height={360} variant="detailed" animated />
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string?` | — | Additional CSS classes |
| `width` | `number \| string` | `480` | SVG width |
| `height` | `number \| string` | `360` | SVG height |
| `variant` | `"simple" \| "detailed"` | `"detailed"` | Detail level |
| `animated` | `boolean` | `false` | Enable hover float |

**Visual tone:** cozy · warm · Mediterranean · charming · residential

**Pairs well with:** Birds · Clouds

---

## Recipes

### Travel or airline landing page
```tsx
import { FlightJourneySection } from '@/components/flight-journey'
import { WorldMapSection, latLonToXY } from '@/components/world-map'

// Hero: FlightJourneySection with route nodes
// Below: WorldMapSection showing service routes
```

### Logistics or shipping homepage
```tsx
import { WorldMapSection, latLonToXY } from '@/components/world-map'
import { CargoPackage } from '@/components/cargo-package'
import { AirplaneSide } from '@/components/airplane-side'

// Hero: WorldMapSection with shipping routes
// Feature card: CargoPackage for delivery confirmation visual
// Inline: AirplaneSide for air freight service callout
```

### Real estate or hospitality site
```tsx
import { ItalianHouse3D } from '@/components/italian-house-3d'
import { Birds } from '@/components/birds'
import { DriftingClouds } from '@/components/drifting-clouds'

// Hero illustration: ItalianHouse3D animated
// Sky layer: DriftingClouds + Birds inside an SVG
```

### E-commerce order confirmation
```tsx
import { CargoPackage } from '@/components/cargo-package'

// Show after order placed — let user click to "open" the box
<CargoPackage className="w-64 h-36 overflow-visible cursor-pointer" />
```

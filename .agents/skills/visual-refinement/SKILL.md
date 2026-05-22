---
name: visual-refinement
description: Improve any visual artifact — SVG illustration, UI section, hero, card, dashboard, icon scene, 3D-style asset, empty state, or banner. Follows a structured workflow: visual read → problem diagnosis → priority ranking → intervention plan → implementation → QA scorecard. Use when the visual looks flat, generic, unpolished, or doesn't match its intended feel. Do NOT trigger for pure logic bugs, API design, or non-visual tasks.
---

# Skill: Visual Refinement & Implementation QA

## Purpose

Use this skill when improving any visual artifact, including:

- SVG illustrations
- React/HTML/CSS visual components
- UI sections
- Homepage hero visuals
- Dashboard screens
- Product cards
- Landing page sections
- Icon scenes
- Architectural or 3D-style illustrations
- Decorative UI assets
- Empty states
- Banners
- Complex visual widgets

This skill prevents the common AI failure mode:

> The implementation becomes cleaner or more detailed, but the final visual still does not feel better.

The main goal is not to add more elements or refactor code first.

The main goal is to improve the visual read, composition, hierarchy, material/style consistency, and final user perception.

---

## Screenshot Tool

This skill uses a Playwright screenshot script to observe real rendered output.

**Before starting work:**
```bash
# Terminal 1 — keep running
npm run dev

# Terminal 2 — take screenshot
npm run screenshot /components/<slug>
# or with --fullpage, --selector, --wait flags
```

The script prints the absolute path of the saved PNG to stdout.
Read that file with the Read tool to see the actual rendered visual.

**Screenshot flags:**
- `--fullpage` — capture entire scrollable page
- `--selector ".some-class"` — crop to a specific element
- `--wait 2000` — wait extra ms for animations to settle (default: 1200)
- `--port 3001` — if dev server is on a different port

**When to take screenshots:**
1. Before any changes — to establish the baseline visual
2. After each P0/P1 fix — to verify the change improved the visual
3. After final implementation — for the QA scorecard

Do not skip screenshots. The scorecard is filled based on what you actually see, not what the code implies.

---

## Core Rule

**Do not start with code.**

Always follow this order:

1. Take baseline screenshot
2. Visual read
3. Problem diagnosis
4. Priority ranking
5. Visual intervention plan
6. Implementation
7. Take post-implementation screenshot
8. Visual QA scorecard
9. Final report

Engineering cleanup is secondary unless it directly supports visual quality.

---

# 1. Visual Read Phase

Before editing anything, inspect the current screenshot, preview, or component output.

Answer these questions first:

- What does the visual read as at first glance?
- What is the intended visual goal?
- Does the current output match that goal?
- What are the first 3 elements the eye notices?
- What feels unfinished, generic, flat, noisy, inconsistent, or placeholder-like?
- What is the single biggest blocker preventing the visual from reaching the intended quality?

## Required Output Format

```md
## Visual Read

Intended goal:
...

Current first-glance read:
...

Dominant visual elements:
1.
2.
3.

Main mismatch:
...

Biggest blocker:
...
```

Do not proceed to implementation until this visual read is written.

---

# 2. Visual Problem Diagnosis

Diagnose the visual using the following categories. Not every category applies to every component, but check all that are relevant.

## 2.1 Composition

Check:

- Is the layout balanced?
- Is the main subject clear?
- Is the visual center intentional?
- Is there too much empty space or too much clutter?
- Are important elements too small, too large, or misplaced?
- Does the visual feel like a complete scene or just separate objects placed together?

Common failures: object pasted onto background · flat facade · weak silhouette · too much symmetry · no foreground/midground/background · no clear focal point · visual elements compete with each other

## 2.2 Depth & Spatial Logic

Check:

- Does the image/component have believable depth?
- Are perspective, scale, shadow, and overlap consistent?
- Do background elements recede properly?
- Are foreground elements visually stronger than distant ones?
- Does the ground/background support the subject?

Common failures: fake 3D box · inconsistent perspective · background looks like placeholder rectangles · shadows do not match object positions · elements float without grounding

## 2.3 Visual Hierarchy

Check:

- What should the user notice first? What should be secondary?
- Are accent elements overpowered? Are decorative elements distracting?
- Is contrast used intentionally?
- Does the component still work at small size?

Common failures: details compete with main subject · CTA/content gets lost · decoration dominates · everything has equal contrast · thumbnail readability is poor

## 2.4 Style Consistency

Check:

- Are all parts using the same visual language?
- Do shapes, colors, line weights, shadows, and details belong to the same world?
- Is there style drift (one part modern, another vintage; one realistic, another cartoonish)?

Common failures: mixed cartoon/realistic/flat/3D styles · inconsistent line thickness · inconsistent shadow softness · inconsistent color temperature · asset-pack feeling

## 2.5 Material / Surface Quality

Use for visuals involving physical objects, architecture, products, scenes, or 3D-like assets.

Check:

- Does each material read correctly?
- Are surfaces too clean, too flat, or too plastic?
- Are highlights and shadows believable?
- Is texture subtle and controlled?

Common materials: wood · metal · glass · stone · fabric · paper · plastic · plaster · concrete · tile · water · vegetation

Common failures: material indicated only by color · no edge shadow · no wear, grain, or surface variation · texture looks random/noisy · pattern too mechanical · surface lacks thickness

## 2.6 Background & Context

Check:

- Does the background support the main subject?
- Is there enough context to understand the scene?
- Is the background too empty, too busy, or placeholder-like?
- Does it create atmosphere or just fill space?

Common failures: large flat rectangles · generic gradient only · background competes with foreground · no environmental storytelling · no sense of place · no depth cues

## 2.7 Interaction / Motion

Use for animated or interactive UI.

Check:

- Does the motion support the concept?
- Is hover/floating subtle or distracting?
- Does animation preserve layout stability?
- Does motion communicate depth or just decorate?

Common failures: movement feels random · hover animation too strong · animation fights the visual style · layout shifts · motion hides visual flaws instead of improving them

---

# 3. Priority Ranking

After diagnosis, rank issues by visual impact.

## P0 — Structure Problems (fix first)

- Wrong composition
- Weak visual read
- Incorrect perspective
- Unclear main subject
- Major layout imbalance
- Visual does not match intended concept

Do not solve P0 problems by adding small details.

## P1 — Depth / Hierarchy Problems (fix next)

- Flat planes
- Poor foreground/midground/background separation
- Bad scale relationships
- Weak shadows
- No grounding
- Important elements competing

## P2 — Style / Material Problems

- Materials do not read correctly
- Style drift
- Repeated patterns too uniform
- Surfaces too clean or generic
- Details do not support the intended aesthetic

## P3 — Detail / Decoration Problems (fix last)

- Small props
- Micro-textures
- Decorative flourishes
- Secondary icons
- Extra scene elements
- Small highlights

Only add details after composition and hierarchy work.

## Required Output Format

```md
## Priority Ranking

P0:
- ...

P1:
- ...

P2:
- ...

P3:
- ...
```

Do not implement before this priority list is complete.

---

# 4. Visual Intervention Plan

Create a concrete plan before writing code.

For each planned change, explain:

- what visual problem it solves
- where it applies
- how it improves the first-glance read
- what risk it introduces
- how to keep it controlled

## Required Output Format

```md
## Visual Intervention Plan

### Change 1: [Name]
Problem solved:
Area affected:
Implementation approach:
Visual risk:
Control rule:

### Change 2: [Name]
...
```

---

# 5. Implementation Rules

Only implement after the visual plan is complete.

## 5.1 Preserve Existing API

For components, preserve public API unless the user explicitly approves breaking changes.

Check: props · exports · file path · imports · className behavior · width/height behavior · variants · animation options · accessibility labels

Do not silently break existing usage.

## 5.2 Make Repeated Visual Systems Data-Driven

If the component has repeated visual elements, use helper functions and data arrays.

Examples: cards · icons · windows · tiles · particles · texture marks · grid cells · chart bars · stars · plants · stones · shadows · background objects · decorative patterns

```tsx
const items = [
  { id: '...', x: 0, y: 0 },
]

function renderItem(item: ItemSpec) {
  return (...)
}
```

Do not over-abstract if the visual is unique and one-off.

## 5.3 Deterministic Rendering

Do not use unstable randomness inside render.

**Forbidden inside render or visual generation:**

```tsx
Math.random()
Date.now()
performance.now()
crypto.randomUUID()
```

Use deterministic arrays or static values instead:

```tsx
const textureMarks = [
  { x: 12, y: 30, r: 1.2, opacity: 0.14 },
  { x: 42, y: 66, r: 0.8, opacity: 0.1 },
]
```

This is critical for: React hydration · SSR · screenshot comparison · tests · consistent design review

## 5.4 SVG ID Safety

For SVG components, avoid global ID collisions when multiple instances render on the same page.

**Bad:**
```tsx
id="gradient"
fill="url(#gradient)"
```

**Good:**
```tsx
import { useId } from 'react'

const rawId = useId()
const uid = `v-${rawId.replace(/:/g, '')}`

<linearGradient id={`${uid}-grad`} />
<path fill={`url(#${uid}-grad)`} />
```

Apply to: gradients · masks · clipPaths · filters · patterns

## 5.5 Controlled Irregularity

For natural, organic, or physical scenes, avoid overly perfect repetition.

Use controlled variation: slight size differences · slight position offsets · subtle opacity changes · perspective compression · muted color variation · non-uniform spacing

The goal: **irregular enough to feel natural, controlled enough to feel designed.**

## 5.6 Small-Size Readability

Before finalizing, check:

- Does the main silhouette remain readable?
- Are details too tiny?
- Does texture turn into noise?
- Is contrast still clear?
- Are thin strokes disappearing?
- Are important shapes merging?

## 5.7 Accessibility & Semantics

For decorative SVG: keep appropriate `role`, `aria-label`, or `aria-hidden`.
For UI components: preserve semantic structure, avoid color-only meaning, check contrast if text is involved.

---

# 6. Visual QA Scorecard

After implementation:
1. Run `npm run screenshot /components/<slug>` (or the relevant route)
2. Read the output PNG with the Read tool
3. Score based on what you actually see in the screenshot — not what you infer from code



| Category | Score | Notes |
|---|---:|---|
| First-glance read matches goal | /5 | |
| Composition | /5 | |
| Visual hierarchy | /5 | |
| Depth / spatial logic | /5 | |
| Style consistency | /5 | |
| Material / surface quality | /5 | |
| Background / context | /5 | |
| Detail control | /5 | |
| Small-size readability | /5 | |
| Code maintainability | /5 | |
| Deterministic rendering | /5 | |
| API compatibility | /5 | |
| Accessibility / semantics | /5 | |

## Pass Criteria

The refinement passes only if:

- A before screenshot and an after screenshot were both taken and read
- The after screenshot visibly looks better than the before screenshot
- No applicable category is below 3
- No major P0 problem remains
- Build/typecheck passes
- No unstable render randomness exists
- Component API remains compatible unless approved otherwise

**Claiming success without screenshots is not allowed.**

---

# 7. Required Final Report

```md
# Visual Refinement Report

## Original Goal

## Initial Visual Read

## Main Problems Found

## Changes Made

## Why These Changes Improve the Visual

## Code Structure Changes

## Deterministic Rendering Notes

## API Compatibility

## Remaining Visual Risks

## Verification

- Baseline screenshot taken and read:
- Post-implementation screenshot taken and read:
- Before/after visual improvement is visible:
- Build:
- Typecheck:
- Small-size checked (in screenshot):
- Multiple instance SVG ID collision checked:
- Accessibility checked:

## Visual QA Scorecard

| Category | Score | Notes |
|---|---:|---|
| First-glance read matches goal | /5 | |
| Composition | /5 | |
| Visual hierarchy | /5 | |
| Depth / spatial logic | /5 | |
| Style consistency | /5 | |
| Material / surface quality | /5 | |
| Background / context | /5 | |
| Detail control | /5 | |
| Small-size readability | /5 | |
| Code maintainability | /5 | |
| Deterministic rendering | /5 | |
| API compatibility | /5 | |
| Accessibility / semantics | /5 | |
```

Do not claim success only because the code builds. The final screenshot/preview must visibly improve.

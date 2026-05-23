import * as React from 'react'

export interface ItalianHouse3DProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  width?: number | string
  height?: number | string
  variant?: 'simple' | 'detailed'
  animated?: boolean
}

// ----------------------------------------------------------------------
// DETERMINISTIC DATA ARRAYS
// ----------------------------------------------------------------------

function generateCobblestones() {
  const stones = []
  const stoneColors = [
    '#D4C4AB', '#C7B59A', '#B8A68B', '#D0BF9F', '#BEAD92', 
    '#CDBBA3', '#A99B87', '#C4B49C'
  ]
  
  // Mathematical Vanishing Point of the house's right wall
  const VPx = 285;
  const VPy = 155;
  const X_front_left = 186;
  const Width_front = 1500; // Wide enough to fill the right canvas as a piazza

  function project(u: number, v: number) {
    const y = VPy + 205 / (v * 0.12 + 1);
    const t = (y - VPy) / 205;
    const x = VPx + (X_front_left + u * Width_front - VPx) * t;
    return { x, y, scale: t };
  }

  const numRows = 40;
  const baseCols = 25;

  // Loop from back (40) to front (0) so foreground is drawn last and overlaps correctly
  for (let r = numRows; r >= 0; r--) {
    const rowSeed = r * 23;
    const depthMulti = 0.7 + (rowSeed % 60) / 100; // 0.7 to 1.3
    const v = r;
    const vNext = r + 0.85 * depthMulti; // organic row height
    
    let u = (r % 2 === 0) ? 0 : 0.02;
    let c = 0;
    
    while (u < 1.3) {
      const seed = r * 13 + c * 7;
      
      // variable width per stone (break the grid)
      const wMulti = 0.4 + ((seed * 17) % 120) / 100; // 0.4 to 1.6
      const stoneWidth = (1 / baseCols) * wMulti;
      const uNext = u + stoneWidth * 0.85; // leave 0.15 gap for vertical mortar
      
      // Organic jitter for corners
      const jU1 = ((seed % 5) - 2) * 0.002;
      const jV1 = (((seed*3) % 5) - 2) * 0.08;
      const jU2 = (((seed*7) % 5) - 2) * 0.002;
      const jV2 = (((seed*11) % 5) - 2) * 0.08;

      const p1 = project(u + jU1, v + jV1);
      const p2 = project(uNext + jU2, v + jV2);
      const p3 = project(uNext + jU1, vNext + jV1);
      const p4 = project(u + jU2, vNext + jV2);

      // Cull stones completely offscreen to the right
      if (p1.x > 600 && p4.x > 600) {
        u += stoneWidth;
        c++;
        continue;
      }
      // Cull stones completely hidden behind the front wall
      if (p2.x < 150) {
        u += stoneWidth;
        c++;
        continue;
      }

      // distant stones fade aggressively to reduce visual noise
      const opacity = p1.scale < 0.6 ? 0.2 + p1.scale * 1.3 : 1; 

      // Cracks in foreground stones
      let crack = null;
      if (p1.scale > 0.6 && (seed % 10) > 7) {
        const cx1 = p1.x + (p4.x - p1.x) * 0.3;
        const cy1 = p1.y + (p4.y - p1.y) * 0.3;
        const cx2 = p2.x + (p3.x - p2.x) * 0.7;
        const cy2 = p2.y + (p3.y - p2.y) * 0.7;
        crack = `M ${cx1} ${cy1} Q ${(cx1+cx2)/2} ${cy1 - 15 * p1.scale} ${cx2} ${cy2}`;
      }

      stones.push({
        id: `cb_${r}_${c}`,
        d: `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z`,
        fill: stoneColors[seed % stoneColors.length],
        scale: p1.scale,
        opacity,
        crack
      })

      u += stoneWidth;
      c++;
    }
  }
  return stones
}

const cobblestones = generateCobblestones()

const plasterPatches = [
  { id: 'p1', d: 'M 90 250 Q 95 235 110 245 T 100 265 Z', color: '#D4A373', opacity: 0.25 },
  { id: 'p2', d: 'M 180 140 Q 165 130 185 120 T 195 145 Z', color: '#FFF1C7', opacity: 0.4 },
  { id: 'p3', d: 'M 240 220 Q 235 205 255 210 T 250 235 Z', color: '#B9784D', opacity: 0.35 },
  { id: 'p4', d: 'M 230 260 Q 225 250 245 255 T 235 270 Z', color: '#A96F45', opacity: 0.3 },
]

const wallStains = [
  { id: 'ws1', d: 'M 95 160 L 125 162 L 120 210 Q 110 200 95 210 Z', opacity: 0.15 },
  { id: 'ws2', d: 'M 160 195 L 200 200 L 195 245 Q 180 235 165 245 Z', opacity: 0.12 },
  { id: 'ws3', d: 'M 230 165 L 245 170 L 242 220 Q 235 210 230 215 Z', opacity: 0.2 },
  { id: 'ws4', d: 'M 80 270 L 220 290 L 220 275 Q 150 250 80 260 Z', opacity: 0.1 },
  { id: 'ws5', d: 'M 220 290 L 260 207 L 260 190 Q 240 220 220 270 Z', opacity: 0.15 },
]

const stuccoCracks = [
  { id: 'cr1', d: 'M 100 160 Q 95 180 98 200 T 85 240 M 98 200 Q 105 210 110 220' },
  { id: 'cr2', d: 'M 195 185 Q 190 205 198 220' },
  { id: 'cr3', d: 'M 235 170 Q 230 195 240 215 T 255 240 M 240 215 Q 230 225 225 240' },
]

const stoneBaseBlocks = [
  'M 80 270 L 100 273 L 100 278 L 80 275 Z',
  'M 102 273 L 130 277 L 130 282 L 102 278 Z',
  'M 132 277 L 160 281 L 160 287 L 132 282 Z',
  'M 162 281 L 190 285 L 190 292 L 162 287 Z',
  'M 192 285 L 218 289 L 218 296 L 192 292 Z',
  'M 220 290 L 230 269 L 235 271 L 225 293 Z',
  'M 232 265 L 242 244 L 247 246 L 237 267 Z',
  'M 244 240 L 254 219 L 259 221 L 249 242 Z',
]

const balconyScrolls = [
  'M 162 188 C 164 185, 168 185, 170 188 C 172 191, 168 193, 166 193',
  'M 172 189 C 174 186, 178 186, 180 189 C 182 192, 178 194, 176 194',
  'M 182 190 C 184 187, 188 187, 190 190 C 192 193, 188 195, 186 195',
  'M 192 191 C 194 188, 198 188, 200 191 C 202 194, 198 196, 196 196',
]


function generateRoofRow(id: string, startX: number, startY: number, dx: number, dy: number, count: number, scaleY: number = 1) {
  const paths = []
  for (let i = 0; i < count; i++) {
    const jx = (i % 3 === 0) ? 0.4 : (i % 2 === 0) ? -0.3 : 0;
    const jy = (i % 4 === 0) ? 0.5 : (i % 5 === 0) ? -0.4 : 0;
    const x = startX + i * dx + jx;
    const y = startY + i * dy + jy;
    paths.push(`M ${x} ${y} C ${x+1} ${y - 3*scaleY}, ${x+4} ${y - 3*scaleY}, ${x+5} ${y} L ${x+4} ${y + 4*scaleY} C ${x+3} ${y + 1*scaleY}, ${x+1} ${y + 1*scaleY}, ${x} ${y + 4*scaleY} Z`)
  }
  return { id, d: paths.join(' ') }
}

const roofTileRows = [
  generateRoofRow('tr_f4', 115, 80, 5.5, 0.35, 13, 1),
  generateRoofRow('tr_f3', 100, 88, 5.5, 0.35, 18, 1),
  generateRoofRow('tr_f2', 85, 97, 5.5, 0.35, 24, 1),
  generateRoofRow('tr_f1', 70, 106, 5.5, 0.35, 30, 1),
]

const frontWindows = [
  {
    id: 'fw1',
    hole: 'M 95 116 L 125 118 L 125 163 L 95 160 Z',
    glass: 'M 97 118 L 123 120 L 123 161 L 97 158 Z',
    frame: 'M 91 114 L 129 116 L 129 166 L 91 163 Z',
    sill: 'M 88 163 L 132 166 L 132 170 L 88 167 Z',
    shutterL: 'M 70 115 L 91 116 L 91 163 L 70 161 Z',
    shutterR: 'M 129 118 L 150 119 L 150 167 L 129 165 Z',
    slatsL: Array.from({length: 12}).map((_, i) => `M 72 ${120 + i*3.5} L 89 ${121 + i*3.5}`),
    slatsR: Array.from({length: 12}).map((_, i) => `M 131 ${123 + i*3.5} L 148 ${124 + i*3.5}`),
  },
  {
    id: 'fw2',
    hole: 'M 165 121 L 195 123 L 195 186 L 165 183 Z',
    glass: 'M 167 123 L 193 125 L 193 184 L 167 181 Z',
    frame: 'M 161 119 L 199 121 L 199 187 L 161 182 Z',
    sill: '', 
    shutterL: 'M 139 118 L 161 119 L 161 182 L 139 180 Z',
    shutterR: 'M 199 122 L 221 123 L 221 189 L 199 187 Z',
    slatsL: Array.from({length: 16}).map((_, i) => `M 141 ${123 + i*3.6} L 159 ${124 + i*3.6}`),
    slatsR: Array.from({length: 16}).map((_, i) => `M 201 ${126 + i*3.6} L 219 ${127 + i*3.6}`),
  }
]

const sideWindows = [
  {
    id: 'sw1',
    hole: 'M 230 135 L 243 141 L 243 170 L 230 165 Z',
    glass: 'M 232 137 L 241 142 L 241 168 L 232 163 Z',
    frame: 'M 228 133 L 245 142 L 245 172 L 228 167 Z',
    sill: 'M 226 167 L 247 172 L 247 175 L 226 170 Z',
    shutterL: 'M 218 128 L 228 133 L 228 167 L 218 162 Z',
    shutterR: 'M 245 142 L 255 146 L 255 175 L 245 172 Z',
    slatsL: Array.from({length: 9}).map((_, i) => `M 220 ${133 + i*3.5} L 226 ${136 + i*3.5}`),
    slatsR: Array.from({length: 9}).map((_, i) => `M 247 ${146 + i*3.5} L 253 ${148.5 + i*3.5}`),
  }
]

const vinesData = [
  {
    id: 'v1',
    path: 'M 85 270 Q 82 230 88 190 T 95 140 Q 100 130 115 125',
    leaves: [
      { cx: 86, cy: 260, rx: 3, ry: 1.5, angle: 30 },
      { cx: 84, cy: 250, rx: 2, ry: 1.5, angle: -20 },
      { cx: 88, cy: 240, rx: 3, ry: 2, angle: 45 },
      { cx: 85, cy: 220, rx: 2.5, ry: 1.5, angle: -15 },
      { cx: 89, cy: 200, rx: 3, ry: 2, angle: 60 },
      { cx: 86, cy: 180, rx: 2, ry: 1.5, angle: -40 },
      { cx: 91, cy: 160, rx: 2.5, ry: 2, angle: 25 },
      { cx: 88, cy: 145, rx: 2, ry: 1.5, angle: -10 },
      { cx: 95, cy: 135, rx: 2.5, ry: 2, angle: 15 },
      { cx: 105, cy: 128, rx: 3, ry: 1.5, angle: -30 },
      { cx: 110, cy: 125, rx: 2, ry: 1.5, angle: 50 },
    ],
  },
]

// ----------------------------------------------------------------------
// RENDER HELPERS
// ----------------------------------------------------------------------

function renderCobblestone(spec: any) {
  return (
    <g key={spec.id} opacity={spec.opacity ?? 1}>
      {/* Stone bottom edge shadow to give thickness */}
      <path d={spec.d} fill="#8A7B68" transform={`translate(0, ${1.5 * spec.scale})`} />
      {/* Stone top face with stroke for rounded corners */}
      <path d={spec.d} fill={spec.fill} stroke={spec.fill} strokeWidth={2 * spec.scale} strokeLinejoin="round" />
      {/* Subtle worn crack for foreground stones */}
      {spec.crack && <path d={spec.crack} stroke="#A49581" strokeWidth={0.8 * spec.scale} fill="none" opacity="0.6" />}
    </g>
  )
}

function renderPlasterPatch(spec: any) {
  return <path key={spec.id} d={spec.d} fill={spec.color} opacity={spec.opacity} />
}

function renderCrack(spec: any) {
  return <path key={spec.id} d={spec.d} fill="none" stroke="#5C4533" strokeWidth="0.5" opacity="0.8" />
}

function renderWallStain(spec: any) {
  return <path key={spec.id} d={spec.d} fill="#8F5E3D" opacity={spec.opacity} />
}

function renderRoofTileRow(spec: any, idPrefix: string) {
  return (
    <g key={spec.id}>
      <path d={spec.d} fill="#944527" transform="translate(0, 1)" />
      <path d={spec.d} fill={`url(#${idPrefix}-roofGrad)`} stroke="#B0502A" strokeWidth="0.5" />
    </g>
  )
}

function renderWindow(spec: any, idPrefix: string, showDetails: boolean) {
  return (
    <g id={`${idPrefix}-window-${spec.id}`} key={spec.id}>
      
      {/* Outer Frame Back layer for depth */}
      <path d={spec.frame} fill="#A2623B" transform="translate(0, 1.5)" />
      {/* Outer Thick Frame */}
      <path d={spec.frame} fill={`url(#${idPrefix}-frameGrad)`} stroke="#B9784D" strokeWidth="0.5" />
      
      {/* Stone Sill */}
      {spec.sill && (
        <g>
          {/* Sill Shadow */}
          <path d={spec.sill} fill="#8A7B68" transform="translate(0, 1.5)" />
          <path d={spec.sill} fill="#D4C4AB" stroke="#A99B87" strokeWidth="0.5" />
        </g>
      )}
      
      {/* Recessed Depth Hole */}
      <path d={spec.hole} fill="#1D1510" />
      
      {/* Inner Shadow / Inset rim around the hole */}
      <path d={spec.hole} fill="none" stroke="#000000" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      
      {/* Glass */}
      <path d={spec.glass} fill={`url(#${idPrefix}-glassGrad)`} />
      
      {/* Glass Reflection */}
      <path d={spec.glass} fill={`url(#${idPrefix}-reflectionGrad)`} opacity="0.8" />
      
      {/* Shutter Back Drop Shadow */}
      <path d={spec.shutterL} fill="#3A2A1E" opacity="0.3" transform="translate(2, 2)" />
      <path d={spec.shutterR} fill="#3A2A1E" opacity="0.3" transform="translate(2, 2)" />

      {/* Shutter Thickness (Side Edge) */}
      <path d={spec.shutterL} fill="#1F2F20" transform="translate(1, 0)" />
      <path d={spec.shutterR} fill="#1F2F20" transform="translate(-1, 0)" />
      
      {/* Main Shutters */}
      <path d={spec.shutterL} fill={`url(#${idPrefix}-shutterGrad)`} />
      <path d={spec.shutterR} fill={`url(#${idPrefix}-shutterGrad)`} />
      
      {showDetails && (
        <g>
          {/* Slat Shadows (Darker, shifted down) */}
          <g stroke="#1F2F20" strokeWidth="1.5" strokeLinecap="round" transform="translate(0, 1)">
            {spec.slatsL.map((d: string, i: number) => <path key={`sl-sh-${i}`} d={d} />)}
            {spec.slatsR.map((d: string, i: number) => <path key={`sr-sh-${i}`} d={d} />)}
          </g>
          {/* Slat Highlights/Main */}
          <g stroke="#5B8460" strokeWidth="1.2" strokeLinecap="round">
            {spec.slatsL.map((d: string, i: number) => <path key={`sl-${i}`} d={d} />)}
            {spec.slatsR.map((d: string, i: number) => <path key={`sr-${i}`} d={d} />)}
          </g>
        </g>
      )}
    </g>
  )
}

function renderVine(spec: any, idPrefix: string, showDetails: boolean, animated: boolean) {
  if (!showDetails) return null
  return (
    <g id={`${idPrefix}-vine-${spec.id}`} key={spec.id}>
      <path d={spec.path} fill="none" stroke="#3A5333" strokeWidth="1.5" />
      {spec.leaves.map((l: any, i: number) => (
        <ellipse 
          key={`l-${i}`} 
          cx={l.cx} 
          cy={l.cy} 
          rx={l.rx} 
          ry={l.ry} 
          fill="#55745A" 
          transform={`rotate(${l.angle} ${l.cx} ${l.cy})`} 
          className={animated && i % 3 === 0 ? 'animate-pulse' : ''} 
        />
      ))}
    </g>
  )
}

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------

export function ItalianHouse3D(props: ItalianHouse3DProps) {
  const { className, width = 480, height = 360, variant = 'detailed', animated = false, ...rest } = props
  const baseId = React.useId()
  const idPrefix = `italian-house-${baseId.replace(/:/g, '')}`
  const showDetails = variant === 'detailed'

  return (
    <svg
      viewBox="-40 -40 560 440"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'w-full h-auto'}
      role="img"
      aria-label="A Tuscan Italian villa street-corner scene with terracotta roof and cobblestone alley"
      {...rest}
    >
      <defs>
        <linearGradient id={`${idPrefix}-skyGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F3D7A0" />
          <stop offset="60%" stopColor="#F7E6BF" />
          <stop offset="100%" stopColor="#FFF1C7" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-hazeGrad`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D2BA96" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D2BA96" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-distWallGrad`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C2A888" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C2A888" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id={`${idPrefix}-alleyWallGrad`} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#B39E84" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B39E84" stopOpacity="0.0" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-horizonFog`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8A790" stopOpacity="0" />
          <stop offset="45%" stopColor="#B8A790" stopOpacity="0.75" />
          <stop offset="55%" stopColor="#B8A790" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#B8A790" stopOpacity="0" />
        </linearGradient>

        {showDetails && (
          <filter id={`${idPrefix}-stuccoNoise`} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="8" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 0.85 0 0 0  0 0.65 0 0 0  0 0 0 0.08 0" in="noise" result="coloredNoise" />
            <feBlend mode="multiply" in="SourceGraphic" in2="coloredNoise" />
          </filter>
        )}

        <linearGradient id={`${idPrefix}-frontWallGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EEDC9A" />
          <stop offset="100%" stopColor="#C98F5A" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-sideWallGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A96F45" />
          <stop offset="100%" stopColor="#6B452D" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-roofGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D16B3F" />
          <stop offset="100%" stopColor="#A03E21" />
        </linearGradient>
        
        <linearGradient id={`${idPrefix}-frameGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E8C0" />
          <stop offset="100%" stopColor="#D5C28C" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-shutterGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A6C4A" />
          <stop offset="100%" stopColor="#2A422B" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-doorGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B3F24" />
          <stop offset="100%" stopColor="#3E2418" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-glassGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E2A38" />
          <stop offset="100%" stopColor="#0B131A" />
        </linearGradient>

        <linearGradient id={`${idPrefix}-reflectionGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* -------------------------------------------------- */}
      {/* 1. ATMOSPHERE & BACKGROUND VILLAGE                   */}
      {/* -------------------------------------------------- */}
      <g id={`${idPrefix}-background-scene`}>
        {/* Sky */}
        <rect x="-100" y="-100" width="680" height="270" fill={`url(#${idPrefix}-skyGrad)`} opacity="0.6" />
        
        {/* Soft Distant Rolling Hills */}
        <path d="M -100 170 Q -30 140 40 155 T 160 170 Z" fill={`url(#${idPrefix}-distWallGrad)`} />
        <path d="M 60 170 Q 120 150 170 160 T 260 170 Z" fill={`url(#${idPrefix}-distWallGrad)`} opacity="0.8" />
        
        {/* Soft atmospheric right wall (closes the alley vanishing point) */}
        <path d="M 600 170 L 290 170 L 290 135 Q 450 115 600 95 Z" fill={`url(#${idPrefix}-alleyWallGrad)`} />
      </g>

      {/* -------------------------------------------------- */}
      {/* 2. ALLEY & GROUND PLANE                            */}
      {/* -------------------------------------------------- */}
      <g id={`${idPrefix}-ground-and-road`}>
        {/* Solid base mortar color - warm sandy tone */}
        <path d="M -100 170 L 580 170 L 580 460 L -100 460 Z" fill="#A89885" />

        {/* Dirt area on the left of the house */}
        <path d="M -100 170 L 295 170 L 150 460 L -100 460 Z" fill="#8C7A66" opacity="0.6" />
        
        {/* Low stone curb on the right edge */}
        <path d="M 580 460 L 330 170 L 325 170 L 570 460 Z" fill="#8F8171" opacity="0.7" />

        {/* Generated Cobblestones over the road base */}
        {showDetails && cobblestones.map(renderCobblestone)}
        
        {/* Horizon Softening Fog (Renders BEFORE house) */}
        <rect x="-100" y="155" width="680" height="30" fill={`url(#${idPrefix}-horizonFog)`} />
        
        {/* Distant warm haze to soften the vanishing point naturally */}
        <rect x="230" y="140" width="200" height="80" fill={`url(#${idPrefix}-hazeGrad)`} opacity="0.95" />
      </g>

      <g id={`${idPrefix}-house-shadow`}>
        {/* House grounding: Contact shadow immediately under base and side wall */}
        <path d="M 0 260 L 220 290 L 220 305 L 0 270 Z" fill="#6A5A4A" opacity="0.6" />
        <path d="M 220 290 L 260 207 L 275 207 L 220 305 Z" fill="#6A5A4A" opacity="0.6" />
        
        {/* Softer cast shadow extending into the alley */}
        <path d="M 220 290 L 260 207 L 310 207 L 260 305 Z" fill="#4A3A2A" opacity="0.25" />
      </g>

      {/* -------------------------------------------------- */}
      {/* 3. HOUSE MASS & STUCCO TEXTURES                    */}
      {/* -------------------------------------------------- */}
      <g id={`${idPrefix}-house-structure`}>
        {/* Front Wall */}
        <path d="M 80 100 L 220 110 L 220 290 L 80 270 Z" fill={`url(#${idPrefix}-frontWallGrad)`} filter={showDetails ? `url(#${idPrefix}-stuccoNoise)` : undefined} />
        
        {/* Side Wall (Receding into alley) */}
        <path d="M 220 110 L 260 138 L 260 207 L 220 290 Z" fill={`url(#${idPrefix}-sideWallGrad)`} filter={showDetails ? `url(#${idPrefix}-stuccoNoise)` : undefined} />

        {/* Deterministic Stucco Aging */}
        {showDetails && plasterPatches.map(renderPlasterPatch)}
        {showDetails && wallStains.map(renderWallStain)}
        {showDetails && stuccoCracks.map(renderCrack)}

        {/* Stone Base / Plinth */}
        {showDetails && (
          <g fill="#A99A83" stroke="#6F665C" strokeWidth="0.5">
            {stoneBaseBlocks.map((d, i) => <path key={`sb-${i}`} d={d} />)}
          </g>
        )}
        {!showDetails && (
          <g fill="#A99A83">
            <path d="M 80 270 L 220 290 L 220 298 L 80 278 Z" />
            <path d="M 220 290 L 260 207 L 260 212 L 220 298 Z" />
          </g>
        )}
      </g>

      {/* -------------------------------------------------- */}
      {/* 4. LAYERED ROOF CONSTRUCTION                       */}
      {/* -------------------------------------------------- */}
      <g id={`${idPrefix}-roof-system`}>
        {/* Deep Eave Cast Shadow on Wall */}
        <path d="M 68 102 L 220 110 L 220 128 L 78 114 Z" fill="#2A1A10" opacity="0.6" />
        <path d="M 220 110 L 268 138 L 260 155 L 220 128 Z" fill="#1A0D08" opacity="0.6" />

        {/* Base Roof Planes */}
        <path d="M 70 105 L 90 90 L 120 70 Z" fill="#A03E21" />
        <path d="M 70 105 L 120 70 L 190 75 L 230 115 Z" fill={`url(#${idPrefix}-roofGrad)`} />
        <path d="M 230 115 L 190 75 L 235 105 L 265 140 Z" fill="#A03E21" />
        
        {/* Clean Side Roof Textures */}
        <g stroke="#8B361C" strokeWidth="0.8" opacity="0.5">
          <path d="M 215 97 L 250 119" />
          <path d="M 205 85 L 240 107" />
        </g>
        
        {/* Layered Terracotta Rows (Front only, softer contrast) */}
        {showDetails && roofTileRows.map(row => renderRoofTileRow(row, idPrefix))}

        {/* Clean Ridge Lines (Dashed to imply tiles without noise) */}
        {showDetails && (
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 5">
            <path d="M 120 71 L 190 76 L 235 106 M 120 71 L 70 106" stroke="#944527" strokeWidth="2.5" transform="translate(0, 1)" />
            <path d="M 120 70 L 190 75 L 235 105 M 120 70 L 70 105" stroke="#C25E35" strokeWidth="2.5" />
          </g>
        )}
        
        {/* Thick Stucco/Mortar Fascia at the eaves */}
        <path d="M 64 106 L 238 115 L 238 118 L 64 109 Z" fill="#D4BE9A" />
        <path d="M 64 109 L 238 118 L 236 120 L 66 111 Z" fill="#B29B78" />
        
        {/* Side Fascia */}
        <path d="M 238 115 L 274 137 L 274 140 L 238 118 Z" fill="#B5936E" />
        <path d="M 238 118 L 274 140 L 272 142 L 236 120 Z" fill="#8C6C4C" />
      </g>

      {/* -------------------------------------------------- */}
      {/* 5. ARCHITECTURAL DETAILS (WINDOWS, DOOR, BALCONY)  */}
      {/* -------------------------------------------------- */}
      <g id={`${idPrefix}-architectural-details`}>
        {frontWindows.map(w => renderWindow(w, idPrefix, showDetails))}
        {sideWindows.map(w => renderWindow(w, idPrefix, showDetails))}

        {/* Wrought Iron Balcony */}
        <g id={`${idPrefix}-balcony`}>
          {/* Shadow cast on wall under slab */}
          <path d="M 160 195 L 200 200 L 200 215 L 160 210 Z" fill="#4A3121" opacity="0.6" />
          {/* Thin slab */}
          <path d="M 165 184 L 205 188 L 200 192 L 160 188 Z" fill="#C1B39A" stroke="#8B8174" strokeWidth="0.5" />
          
          <g stroke="#1D1D1D" strokeWidth="1.5" fill="none">
            {/* Top rail */}
            <path d="M 165 174 L 160 183 L 200 187 L 205 178" />
            {/* Base rail */}
            <path d="M 160 188 L 200 192" />
            {/* Main vertical posts */}
            <path d="M 162 183 L 162 188" />
            <path d="M 181 185 L 181 190" />
            <path d="M 198 187 L 198 192" />
          </g>
          {showDetails && (
            <g stroke="#1D1D1D" strokeWidth="0.8" fill="none">
              {/* Iron scrollwork / curves */}
              {balconyScrolls.map((d, i) => <path key={`bs-${i}`} d={d} />)}
            </g>
          )}
        </g>

        {/* Main Arch Door */}
        <g id={`${idPrefix}-main-door`}>
          {/* Inset Shadow */}
          <path d="M 130 240 L 130 277 L 135 277 L 135 240 Q 150 220 165 243 L 170 243 Q 150 215 130 240 Z" fill="#2A1A10" opacity="0.8" />
          {/* Wooden Door Plane */}
          <path d="M 133 241 L 133 277 L 167 282 L 167 244 Q 150 220 133 241 Z" fill={`url(#${idPrefix}-doorGrad)`} />
          {/* Stone Threshold / Frame */}
          <path d="M 125 240 L 125 276 L 130 277 L 130 240 Q 150 215 170 243 L 170 282 L 175 283 L 175 243 Q 150 205 125 240 Z" fill="#C1B39A" />
          {/* Threshold step */}
          <path d="M 130 277 L 170 282 L 172 285 L 132 280 Z" fill="#A99A83" />
          {showDetails && (
            <g>
              <path d="M 138 245 L 138 275" stroke="#2A1A10" strokeWidth="0.8" opacity="0.7" />
              <path d="M 148 240 L 148 277" stroke="#2A1A10" strokeWidth="0.8" opacity="0.7" />
              <path d="M 158 238 L 158 279" stroke="#2A1A10" strokeWidth="0.8" opacity="0.7" />
              <circle cx="160" cy="260" r="1.5" fill="#1D1D1D" />
            </g>
          )}
        </g>

        {/* Warm Street Lamp */}
        <g id={`${idPrefix}-wall-lamp`}>
          {/* Arm */}
          <path d="M 112 225 L 113 230" stroke="#1D1D1D" strokeWidth="1" />
          <path d="M 109 220 L 116 220 L 114 225 L 111 225 Z" fill="#2A2A2A" />
          {/* Warm Glow */}
          <circle cx="112.5" cy="225" r="12" fill="#F6DFA5" opacity="0.3" />
          <circle cx="112.5" cy="225" r="5" fill="#FFF1C7" opacity="0.6" />
          <circle cx="112.5" cy="225" r="2" fill="#FFFFFF" />
        </g>
      </g>

      {/* -------------------------------------------------- */}
      {/* 6. VINES & ORGANIC SCENE ATMOSPHERE                */}
      {/* -------------------------------------------------- */}
      <g id={`${idPrefix}-organic-details`}>
        {vinesData.map(v => renderVine(v, idPrefix, showDetails, animated))}
      </g>

      <g id={`${idPrefix}-final-atmosphere`}>
        {/* Soft edge vignette to draw eye to the center */}
        <path d="M -100 460 L 100 460 L -100 260 Z" fill="#3E2B20" opacity="0.2" />
        <path d="M 580 460 L 380 460 L 580 260 Z" fill="#3E2B20" opacity="0.15" />
      </g>
    </svg>
  )
}
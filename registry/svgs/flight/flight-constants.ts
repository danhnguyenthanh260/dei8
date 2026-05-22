export const PANEL_W = 420
export const PANEL_H = 620
export const PATH_D = 'M 70 540 C 110 450, 145 370, 195 300 C 245 230, 270 185, 320 95'

export const FLIGHT_LAYOUTS = [
  { cardX: 180, cardY: 570 },
  { cardX: 220, cardY: 430 },
  { cardX: 105, cardY: 305 },
  { cardX: 120, cardY: 225 },
  { cardX: 190, cardY: 85 },
]

export type ViewMode =
  | 'right'
  | 'quarter-right'
  | 'headon'
  | 'quarter-left'
  | 'transleft'
  | 'transright'
  | 'left'

export const ROTATION_CONFIG: Record<ViewMode, { offset: number; angleMul: number }> = {
  right: { offset: 0, angleMul: 1 },
  'quarter-right': { offset: 0, angleMul: 0.7 },
  headon: { offset: 0, angleMul: 0.2 },
  'quarter-left': { offset: 0, angleMul: 0.7 },
  transleft: { offset: 0, angleMul: 1 },
  transright: { offset: 0, angleMul: 1 },
  left: { offset: 0, angleMul: 1 },
}

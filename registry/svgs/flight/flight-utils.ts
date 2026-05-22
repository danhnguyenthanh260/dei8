export interface FlightState {
  x: number
  y: number
  angle: number
  bankScale: number
  scale: number
  isReversing?: boolean
  viewMode?:
    | 'right'
    | 'quarter-right'
    | 'headon'
    | 'quarter-left'
    | 'transleft'
    | 'transright'
    | 'left'
  bank?: number
}

interface ComputeParams {
  dir: number
  startProgress: number
  activeIndex: number
  cp: number
  t: number
  pt: { x: number; y: number }
  angle: number
  bank: number
  pCurve: number
  isShort: boolean
}

export function computeFlightState(params: ComputeParams): FlightState {
  let viewMode: FlightState['viewMode'] = 'right'
  const { dir, startProgress, activeIndex, cp, t, pt, angle, bank, pCurve, isShort } = params

  if (dir === -1) {
    if (startProgress === 1) {
      if (cp >= 0.68) {
        const t_turn = (1.0 - cp) / 0.32
        if (t_turn <= 0.08) viewMode = 'right'
        else if (t_turn <= 0.18) viewMode = 'quarter-right'
        else if (t_turn <= 0.32) viewMode = 'headon'
        else if (t_turn <= 0.46) viewMode = 'quarter-left'
        else if (t_turn <= 0.6) viewMode = 'transleft'
        else viewMode = 'left'
      } else {
        viewMode = 'left'
      }
    } else if (activeIndex === 0) {
      if (cp <= 0.22) {
        const t_turn = (0.22 - cp) / 0.22
        if (t_turn <= 0.3) viewMode = 'left'
        else if (t_turn <= 0.5) viewMode = 'quarter-left'
        else if (t_turn <= 0.7) viewMode = 'headon'
        else if (t_turn <= 0.85) viewMode = 'quarter-right'
        else viewMode = 'right'
      } else {
        viewMode = 'left'
      }
    } else {
      viewMode = 'left'
    }
  } else {
    if (startProgress === 0) {
      if (cp <= 0.22) {
        const t_turn = cp / 0.22
        if (t_turn <= 0.08) viewMode = 'left'
        else if (t_turn <= 0.18) viewMode = 'quarter-left'
        else if (t_turn <= 0.32) viewMode = 'headon'
        else if (t_turn <= 0.46) viewMode = 'quarter-right'
        else if (t_turn <= 0.6) viewMode = 'transright'
        else viewMode = 'right'
      } else {
        viewMode = 'right'
      }
    } else {
      viewMode = 'right'
    }
  }

  return {
    x: pt.x,
    y: pt.y - pCurve * (isShort ? 14 : 32),
    angle,
    bankScale: 1 - Math.abs(bank) * 0.0068,
    scale: 1 + Math.sin(t * Math.PI) * 0.16 * (isShort ? 0.4 : 1),
    isReversing: dir === -1,
    viewMode,
    bank,
  }
}

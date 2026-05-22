import React from 'react'

interface CloudShape {
  main: string
  inner1: string
  inner2: string
  inner3: string
}

export const CLOUD_SHAPES: Record<number, CloudShape> = {
  1: {
    main: 'M10,28 Q25,12 48,15 Q62,2 85,10 Q100,5 112,18 Q125,14 130,24 Q140,28 135,38 Q128,45 115,42 L15,42 Q5,40 10,28 Z',
    inner1: 'M25,22 Q40,14 60,18 Q72,10 88,18',
    inner2: 'M18,28 Q36,20 54,24 Q68,18 78,25',
    inner3: 'M40,32 Q58,28 74,31',
  },
  2: {
    main: 'M15,30 Q28,10 52,14 Q68,0 88,10 Q105,4 116,20 Q124,14 130,26 Q138,32 132,42 L20,42 Q8,40 15,30 Z',
    inner1: 'M32,24 Q48,15 68,20 Q78,12 94,22',
    inner2: 'M24,30 Q42,22 62,26 Q76,18 86,27',
    inner3: 'M50,33 Q66,29 80,32',
  },
  3: {
    main: 'M12,28 Q28,8 55,10 Q70,-4 92,6 Q108,-1 118,16 Q128,12 134,24 Q142,28 136,38 L18,38 Q6,36 12,28 Z',
    inner1: 'M28,20 Q44,11 64,16 Q76,8 90,20',
    inner2: 'M20,27 Q38,18 58,22 Q72,14 82,23',
    inner3: 'M42,31 Q60,27 76,30',
  },
  4: {
    main: 'M8,26 Q24,14 44,16 Q58,4 78,8 Q92,1 106,12 Q116,8 124,18 Q132,22 128,32 L12,32 Q4,30 8,26 Z',
    inner1: 'M22,18 Q38,10 54,13 Q68,6 82,14',
    inner2: 'M16,24 Q32,16 48,20 Q62,12 72,19',
    inner3: 'M36,26 Q52,22 68,25',
  },
}

interface FlightCloudsExtraProps {
  activeIndex: number
}

export function FlightCloudsExtra({ activeIndex }: FlightCloudsExtraProps): React.JSX.Element {
  return (
    <g
      className="pointer-events-none"
      style={{
        opacity: activeIndex === 1 || activeIndex === 2 ? 0.95 : 0,
        transition: 'opacity 1500ms ease-in-out',
      }}
    >
      <defs>
        <radialGradient id="cloudExtraGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFF8D6" stopOpacity="0.25" />
          <stop offset="35%" stopColor="#EAA800" stopOpacity="0.10" />
          <stop offset="75%" stopColor="#0B0B0C" stopOpacity="0.90" />
          <stop offset="100%" stopColor="#020203" stopOpacity="1" />
        </radialGradient>
      </defs>

      {[
        { tx: -220, ty: 170, s: 1.5, r: -8, delay: '-3.5s', op: 0.25 },
        { tx: -120, ty: 185, s: 1.35, r: -6, delay: '-2s', op: 0.6 },
        { tx: -50, ty: 215, s: 1.15, r: 4, delay: '-0.5s', op: 1 },
        { tx: -240, ty: 260, s: 1.4, r: 10, delay: '-5.2s', op: 0.2 },
        { tx: -130, ty: 275, s: 1.2, r: 8, delay: '-4s', op: 0.65 },
        { tx: -55, ty: 305, s: 1.05, r: -3, delay: '-2.5s', op: 1 },
        { tx: -260, ty: 350, s: 1.6, r: -6, delay: '-7.2s', op: 0.25 },
        { tx: -140, ty: 365, s: 1.4, r: -5, delay: '-6s', op: 0.6 },
        { tx: -60, ty: 395, s: 1.25, r: 6, delay: '-4.8s', op: 1 },
      ].map((cfg, i) => {
        const shape = CLOUD_SHAPES[(i % 4) + 1]!
        const sw = i % 3 === 0 ? 0.4 : i % 3 === 1 ? 0.5 : 0.75
        const stroke = i % 3 === 0 ? 'rgba(234,168,0,0.08)' : i % 3 === 1 ? 'rgba(234,168,0,0.18)' : 'rgba(234,168,0,0.35)'

        return (
          <g
            key={i}
            className="dei8-drift-gentle"
            style={{
              transform: `translate(${cfg.tx}px, ${cfg.ty}px) scale(${cfg.s}) rotate(${cfg.r}deg)`,
              animationDelay: cfg.delay,
              willChange: 'transform',
              opacity: cfg.op,
            }}
          >
            <path d={shape.main} fill="url(#cloudExtraGrad)" stroke={stroke} strokeWidth={sw} />
            <path d={shape.inner1} fill="none" stroke={stroke.replace(/[\d.]+\)$/, '0.5)')} strokeWidth={sw * 0.8} />
          </g>
        )
      })}
    </g>
  )
}

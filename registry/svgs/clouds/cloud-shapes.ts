export interface CloudShape {
  main: string
  inner1: string
  inner2: string
  inner3: string
}

/** 4 reusable SVG cloud path shapes at natural scale (~130×45 viewBox units). */
export const CLOUD_SHAPES: Record<1 | 2 | 3 | 4, CloudShape> = {
  1: {
    // Elongated horizontal — low-profile, breezy
    main:   'M10,28 Q25,12 48,15 Q62,2 85,10 Q100,5 112,18 Q125,14 130,24 Q140,28 135,38 Q128,45 115,42 L15,42 Q5,40 10,28 Z',
    inner1: 'M25,22 Q40,14 60,18 Q72,10 88,18',
    inner2: 'M18,28 Q36,20 54,24 Q68,18 78,25',
    inner3: 'M40,32 Q58,28 74,31',
  },
  2: {
    // Dramatic puff tower — tallest, most voluminous
    main:   'M15,30 Q28,10 52,14 Q68,0 88,10 Q105,4 116,20 Q124,14 130,26 Q138,32 132,42 L20,42 Q8,40 15,30 Z',
    inner1: 'M32,24 Q48,15 68,20 Q78,12 94,22',
    inner2: 'M24,30 Q42,22 62,26 Q76,18 86,27',
    inner3: 'M50,33 Q66,29 80,32',
  },
  3: {
    // Mountain peak — steep, Fuji-like silhouette
    main:   'M12,28 Q28,8 55,10 Q70,-4 92,6 Q108,-1 118,16 Q128,12 134,24 Q142,28 136,38 L18,38 Q6,36 12,28 Z',
    inner1: 'M28,20 Q44,11 64,16 Q76,8 90,20',
    inner2: 'M20,27 Q38,18 58,22 Q72,14 82,23',
    inner3: 'M42,31 Q60,27 76,30',
  },
  4: {
    // Thin wispy drift — flat, translucent, wind-blown
    main:   'M8,26 Q24,14 44,16 Q58,4 78,8 Q92,1 106,12 Q116,8 124,18 Q132,22 128,32 L12,32 Q4,30 8,26 Z',
    inner1: 'M22,18 Q38,10 54,13 Q68,6 82,14',
    inner2: 'M16,24 Q32,16 48,20 Q62,12 72,19',
    inner3: 'M36,26 Q52,22 68,25',
  },
}

import {
  type FlyState,
  getCirrusStyle,
  getHighAltoAStyle,
  getHighAltoBStyle,
  getMainCumulusLStyle,
  getMainCumulusRStyle,
  getFarCumulusStyle,
} from './jet-styles'

const FLAT = 'M5,22 C15,12 36,7 60,9 C78,4 100,7 120,16 C132,12 142,19 140,25 L5,25 Q-2,23 5,22 Z'
const TALL = 'M15,30 Q28,10 52,14 Q68,0 88,10 Q105,4 116,20 Q124,14 130,26 Q138,32 132,42 L20,42 Q8,40 15,30 Z'
const MED  = 'M10,28 Q22,10 46,13 Q62,2 80,9 Q96,4 108,18 Q116,13 122,24 Q130,30 124,40 L14,40 Q3,38 10,28 Z'
const FAR_FLAT = 'M8,26 C20,18 42,14 66,16 C84,12 104,15 120,22 C132,18 140,25 138,32 L10,32 Q2,30 8,26 Z'

function CloudFull({ path, highlight }: { path: string; highlight: { cx: number; cy: number; rx: number; ry: number } }) {
  return (
    <>
      <path d={path} fill="url(#jet-cloud-pearl)" stroke="url(#jet-gold-brand)" strokeWidth="0.85" strokeOpacity="0.75" />
      <path d={path} fill="url(#jet-cloud-depth)" opacity="0.88" />
      <path d={path} fill="url(#jet-cloud-sunlit)" />
      <ellipse cx={highlight.cx} cy={highlight.cy} rx={highlight.rx} ry={highlight.ry} fill="url(#jet-cloud-highlight)" />
    </>
  )
}

interface JetCloudsProps {
  flyState: FlyState
}

export function JetClouds({ flyState }: JetCloudsProps) {
  return (
    <>
      {/* Layer 0: Cirrus wisps */}
      <g style={getCirrusStyle(flyState)}>
        <path d="M 8 52 C 46 49, 86 48, 136 50 C 163 51, 192 49, 216 51" stroke="url(#jet-cirrus)" strokeWidth="0.45" strokeLinecap="round" fill="none" />
        <path d="M 0 58 C 38 55, 78 54, 120 56 C 150 57, 177 55, 214 57" stroke="url(#jet-cirrus)" strokeWidth="0.30" strokeLinecap="round" fill="none" />
        <path d="M 24 46 C 60 44, 98 43, 144 45" stroke="url(#jet-cirrus)" strokeWidth="0.22" strokeLinecap="round" fill="none" />
      </g>

      {/* Layer 1A: High Altocumulus left */}
      <g style={getHighAltoAStyle(flyState)}>
        <g transform="translate(18,56) scale(0.42) skewX(-4)">
          <path d={FLAT} fill="url(#jet-cloud-pearl)" stroke="url(#jet-gold-brand)" strokeWidth="0.5" strokeOpacity="0.42" />
          <path d={FLAT} fill="url(#jet-cloud-depth)" opacity="0.52" />
          <path d={FLAT} fill="url(#jet-cloud-sunlit)" />
          <ellipse cx="60" cy="8" rx="28" ry="7" fill="url(#jet-cloud-highlight)" />
        </g>
      </g>

      {/* Layer 1B: High Altocumulus right */}
      <g style={getHighAltoBStyle(flyState)}>
        <g transform="translate(150,59) scale(0.31) skewX(3)">
          <path d={FLAT} fill="url(#jet-cloud-pearl)" stroke="url(#jet-gold-brand)" strokeWidth="0.5" strokeOpacity="0.30" />
          <path d={FLAT} fill="url(#jet-cloud-depth)" opacity="0.40" />
        </g>
      </g>

      {/* Layer 2: Main Cumulus Left */}
      <g style={getMainCumulusLStyle(flyState)}>
        <g transform="translate(-12,66) scale(1.08) skewX(-5)">
          <CloudFull path={TALL} highlight={{ cx: 88, cy: 6, rx: 22, ry: 11 }} />
          <ellipse cx="52" cy="12" rx="14" ry="7" fill="url(#jet-cloud-highlight)" opacity="0.52" />
          <path d="M30,22 Q48,12 70,18 Q82,8 98,20" fill="none" stroke="url(#jet-gold-brand)" strokeWidth="0.6" strokeOpacity="0.36" />
          <path d="M22,29 Q40,20 62,24 Q78,16 88,25" fill="none" stroke="url(#jet-gold-brand)" strokeWidth="0.5" strokeOpacity="0.20" />
        </g>
      </g>

      {/* Layer 3: Main Cumulus Right */}
      <g style={getMainCumulusRStyle(flyState)}>
        <g transform="translate(116,69) scale(0.80) skewX(3)">
          <CloudFull path={MED} highlight={{ cx: 80, cy: 7, rx: 18, ry: 9 }} />
          <path d="M28,22 Q44,14 64,18 Q76,10 90,20" fill="none" stroke="url(#jet-gold-brand)" strokeWidth="0.5" strokeOpacity="0.28" />
        </g>
      </g>

      {/* Layer 4: Far Cumulus */}
      <g style={getFarCumulusStyle(flyState)}>
        <g transform="translate(40,75) scale(0.54) skewX(-2)">
          <path d={FAR_FLAT} fill="url(#jet-cloud-pearl)" stroke="url(#jet-gold-brand)" strokeWidth="0.55" strokeOpacity="0.48" />
          <path d={FAR_FLAT} fill="url(#jet-cloud-depth)" opacity="0.52" />
          <path d={FAR_FLAT} fill="url(#jet-cloud-sunlit)" />
          <ellipse cx="66" cy="14" rx="16" ry="6" fill="url(#jet-cloud-highlight)" />
        </g>
      </g>
    </>
  )
}

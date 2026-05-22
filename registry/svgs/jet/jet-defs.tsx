export function JetDefs() {
  return (
    <defs>
      <style>{`
        @keyframes floatPlane {
          0%, 100% { transform: translate3d(0px, 0px, 0); }
          50% { transform: translate3d(0px, -3px, 0); }
        }
        @keyframes cloudDriftBack {
          0%, 100% { transform: translate3d(0px, 0px, 0) scaleY(1); }
          50% { transform: translate3d(6px, -0.8px, 0) scaleY(1.01); }
        }
        @keyframes cloudDriftMid {
          0%, 100% { transform: translate3d(0px, 0px, 0) scaleY(1); }
          50% { transform: translate3d(-9px, 0.8px, 0) scaleY(0.99); }
        }
        @keyframes cloudDriftFront {
          0%, 100% { transform: translate3d(0px, 0px, 0); }
          50% { transform: translate3d(8px, -1.5px, 0); }
        }
        @keyframes mistDrift {
          0%, 100% { transform: translate3d(0px, 0px, 0); opacity: 0.35; }
          50% { transform: translate3d(-4px, 0.6px, 0); opacity: 0.48; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes speedSlide {
          to { stroke-dashoffset: -24; }
        }
        @keyframes shockwaveExpand {
          0%   { transform: scale(1);   opacity: 0.65; }
          100% { transform: scale(9);   opacity: 0;    }
        }
        @keyframes cirrusDrift {
          0%, 100% { transform: translate3d(0px,  0px, 0); }
          50%       { transform: translate3d(5px, -1px, 0); }
        }
        @keyframes foregroundCloudFloat {
          0%, 100% { transform: translate3d(135px, 18px, 0) scale(1); }
          50%       { transform: translate3d(135px, 15px, 0) scale(1); }
        }
        .jet-star-twinkle-1  { animation: twinkle 3s   ease-in-out infinite;        transform-origin: 70px  30px; }
        .jet-star-twinkle-2  { animation: twinkle 4s   ease-in-out infinite 0.7s;   transform-origin: 82px  28px; }
        .jet-star-twinkle-3  { animation: twinkle 2.5s ease-in-out infinite 1.2s;   transform-origin: 84px  24px; }
        .jet-star-twinkle-4  { animation: twinkle 3.5s ease-in-out infinite 0.3s;   transform-origin: 72px  36px; }
        .jet-star-twinkle-5  { animation: twinkle 4.5s ease-in-out infinite 1.8s;   transform-origin: 58px  32px; }
        .jet-star-twinkle-6  { animation: twinkle 3s   ease-in-out infinite 0.9s;   transform-origin: 62px  25px; }
        .jet-star-twinkle-7  { animation: twinkle 5s   ease-in-out infinite 2.2s;   transform-origin: 56px  22px; }
        .jet-star-twinkle-8  { animation: twinkle 2.8s ease-in-out infinite 0.4s;   transform-origin: 22px  15px; }
        .jet-star-twinkle-9  { animation: twinkle 3.8s ease-in-out infinite 1.5s;   transform-origin: 170px 18px; }
        .jet-star-twinkle-10 { animation: twinkle 4.2s ease-in-out infinite 0.8s;   transform-origin: 115px 12px; }
        .jet-star-twinkle-11 { animation: twinkle 5.2s ease-in-out infinite 2.5s;   transform-origin: 195px 28px; }
        .jet-star-twinkle-12 { animation: twinkle 3.2s ease-in-out infinite 1.8s;   transform-origin: 185px 14px; }
        .jet-star-twinkle-13 { animation: twinkle 4.6s ease-in-out infinite 0.2s;   transform-origin: 140px 20px; }
        .jet-star-twinkle-14 { animation: twinkle 2.6s ease-in-out infinite 3.1s;   transform-origin: 30px  25px; }
        .jet-star-twinkle-15 { animation: twinkle 5.8s ease-in-out infinite 1.1s;   transform-origin: 105px  8px; }
        .jet-star-twinkle-16 { animation: twinkle 3.4s ease-in-out infinite 2.0s;   transform-origin: 160px 35px; }
        .jet-star-twinkle-17 { animation: twinkle 4.8s ease-in-out infinite 0.6s;   transform-origin: 12px  40px; }
        .jet-speed-line      { stroke-dasharray: 7 17; animation: speedSlide 0.48s linear infinite; }
        .jet-speed-line-fast { stroke-dasharray: 5 12; animation: speedSlide 0.32s linear infinite; }
      `}</style>

      <radialGradient id="jet-sky-fade" cx="50%" cy="100%" r="100%">
        <stop offset="0%"  stopColor="#040A15" stopOpacity="1" />
        <stop offset="30%" stopColor="#070E1C" stopOpacity="0.97" />
        <stop offset="58%" stopColor="#0C1528" stopOpacity="0.88" />
        <stop offset="78%" stopColor="#162038" stopOpacity="0.58" />
        <stop offset="92%" stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="jet-cloud-pearl" cx="50%" cy="20%" r="80%">
        <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="45%"  stopColor="#F8FAFC" stopOpacity="0.85" />
        <stop offset="75%"  stopColor="#E2E8F0" stopOpacity="0.55" />
        <stop offset="90%"  stopColor="#CBD5E1" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="jet-cloud-depth" x1="0" y1="0" x2="0" y2="1">
        <stop offset="55%"  stopColor="#7090AA" stopOpacity="0" />
        <stop offset="85%"  stopColor="#5A7A98" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#3D6080" stopOpacity="0.45" />
      </linearGradient>
      <radialGradient id="jet-cloud-highlight" cx="50%" cy="25%" r="55%">
        <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.92" />
        <stop offset="55%"  stopColor="#FFFFFF" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="jet-cloud-sunlit" cx="68%" cy="18%" r="55%">
        <stop offset="0%"   stopColor="#FEF3C7" stopOpacity="0.58" />
        <stop offset="50%"  stopColor="#FDE68A" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="jet-cirrus" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="22%"  stopColor="#E2E8F0" stopOpacity="0.38" />
        <stop offset="55%"  stopColor="#F1F5F9" stopOpacity="0.44" />
        <stop offset="82%"  stopColor="#E2E8F0" stopOpacity="0.24" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="jet-speedline-gold" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%"   stopColor="#EAA800" stopOpacity="0" />
        <stop offset="35%"  stopColor="#EAA800" stopOpacity="0.42" />
        <stop offset="72%"  stopColor="#EAA800" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="jet-speedline-silver" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%"   stopColor="#C8D4E0" stopOpacity="0" />
        <stop offset="35%"  stopColor="#C8D4E0" stopOpacity="0.26" />
        <stop offset="72%"  stopColor="#C8D4E0" stopOpacity="0.11" />
        <stop offset="100%" stopColor="#C8D4E0" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="jet-mist-fade" x1="0" y1="90" x2="0" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="50%"  stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="85%"  stopColor="#FFFFFF" stopOpacity="0.98" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="jet-mist-shimmer" x1="0" y1="90" x2="0" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#EAA800" stopOpacity="0" />
        <stop offset="50%"  stopColor="#EAA800" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="jet-fuselage-upper" x1="85" y1="72" x2="165" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#A1A1AA" />
        <stop offset="45%"  stopColor="#E4E4E7" />
        <stop offset="85%"  stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
      <linearGradient id="jet-fuselage-lower" x1="85" y1="72" x2="165" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#1E3A8A" />
        <stop offset="60%"  stopColor="#0F172A" />
        <stop offset="100%" stopColor="#1E293B" />
      </linearGradient>
      <linearGradient id="jet-wing" x1="122" y1="60" x2="92" y2="94" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#F4F4F5" />
        <stop offset="50%"  stopColor="#A1A1AA" />
        <stop offset="100%" stopColor="#52525B" />
      </linearGradient>
      <linearGradient id="jet-wing-far" x1="128" y1="52" x2="110" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#E4E4E7" />
        <stop offset="60%"  stopColor="#71717A" />
        <stop offset="100%" stopColor="#3F3F46" />
      </linearGradient>
      <linearGradient id="jet-gold-brand" x1="80" y1="40" x2="102" y2="66" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#EAA800" />
        <stop offset="100%" stopColor="#C88C00" />
      </linearGradient>
      <linearGradient id="jet-contrail" x1="5" y1="80" x2="112" y2="46" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#EAA800" stopOpacity="0" />
        <stop offset="65%"  stopColor="#EAA800" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0.75" />
      </linearGradient>
      <linearGradient id="jet-engine" x1="112" y1="78" x2="100" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#27272A" />
        <stop offset="40%"  stopColor="#71717A" />
        <stop offset="70%"  stopColor="#E4E4E7" />
        <stop offset="100%" stopColor="#3F3F46" />
      </linearGradient>
    </defs>
  )
}

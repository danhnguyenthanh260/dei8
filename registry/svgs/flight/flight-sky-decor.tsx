interface FlightSkyDecorProps {
  activeIndex: number
}

export function FlightSkyDecor({ activeIndex }: FlightSkyDecorProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes starTwinkle {
              0%, 100% { opacity: 0.12; }
              50% { opacity: 0.95; }
            }
            .dei8-star-1 { animation: starTwinkle 4.5s ease-in-out infinite; }
            .dei8-star-2 { animation: starTwinkle 3s ease-in-out infinite; }
            .dei8-star-3 { animation: starTwinkle 1.8s ease-in-out infinite; }
            .dei8-star-twinkle-slow { animation: starTwinkle 4.5s ease-in-out infinite; }
            .dei8-star-twinkle-mid  { animation: starTwinkle 3s ease-in-out infinite; }
            .dei8-star-twinkle-fast { animation: starTwinkle 1.8s ease-in-out infinite; }
            @keyframes driftCirrus1 {
              0% { transform: translate3d(-15px, 0, 0); }
              50% { transform: translate3d(20px, 0, 0); }
              100% { transform: translate3d(-15px, 0, 0); }
            }
            @keyframes driftCirrus2 {
              0% { transform: translate3d(25px, 0, 0); }
              50% { transform: translate3d(-20px, 0, 0); }
              100% { transform: translate3d(25px, 0, 0); }
            }
            @keyframes driftCirrus3 {
              0% { transform: translate3d(-30px, 0, 0); }
              50% { transform: translate3d(15px, 0, 0); }
              100% { transform: translate3d(-30px, 0, 0); }
            }
            .dei8-cirrus-1 { animation: driftCirrus1 55s ease-in-out infinite; }
            .dei8-cirrus-2 { animation: driftCirrus2 68s ease-in-out infinite; }
            .dei8-cirrus-3 { animation: driftCirrus3 45s ease-in-out infinite; }
          `,
        }}
      />

      {/* Stars + Gemini constellation (fades out in day mode) */}
      <g
        className="pointer-events-none"
        style={{
          opacity: activeIndex === 4 ? 0 : 0.95,
          transition: 'opacity 2500ms ease-in-out',
        }}
      >
        <path
          d="M 65 45 L 95 40 M 65 45 L 55 95 L 45 145 L 35 185 M 55 95 L 35 100 M 95 40 L 90 90 L 80 140 L 75 180 M 90 90 L 110 95 M 35 185 L 75 180"
          fill="none"
          stroke="rgba(234, 168, 0, 0.28)"
          strokeWidth="0.75"
          strokeDasharray="2 3"
        />
        <g className="dei8-star-twinkle-fast" style={{ transformOrigin: '65px 45px' }}>
          <circle cx="65" cy="45" r="2.2" fill="#FFF" />
          <circle cx="65" cy="45" r="5.5" fill="none" stroke="#FFF" strokeWidth="0.4" opacity="0.65" />
        </g>
        <g className="dei8-star-twinkle-slow" style={{ transformOrigin: '95px 40px' }}>
          <circle cx="95" cy="40" r="2.6" fill="#EAA800" />
          <circle cx="95" cy="40" r="6.5" fill="none" stroke="#EAA800" strokeWidth="0.4" opacity="0.65" />
        </g>
        <circle cx="55" cy="95" r="1.4" fill="#FFF" className="dei8-star-twinkle-mid" style={{ animationDelay: '0.4s' }} />
        <circle cx="90" cy="90" r="1.4" fill="#EAA800" className="dei8-star-twinkle-slow" style={{ animationDelay: '1.2s' }} />
        <circle cx="45" cy="145" r="1.2" fill="#FFF" className="dei8-star-twinkle-fast" style={{ animationDelay: '1.6s' }} />
        <circle cx="35" cy="185" r="1.5" fill="#EAA800" className="dei8-star-twinkle-mid" style={{ animationDelay: '2.0s' }} />
        <circle cx="80" cy="140" r="1.3" fill="#FFF" className="dei8-star-twinkle-slow" style={{ animationDelay: '2.4s' }} />
        <circle cx="75" cy="180" r="1.6" fill="#EAA800" className="dei8-star-twinkle-mid" style={{ animationDelay: '0.5s' }} />
        <circle cx="35" cy="100" r="1.0" fill="#FFF" className="dei8-star-twinkle-fast" style={{ animationDelay: '1.0s' }} />
        <circle cx="110" cy="95" r="1.0" fill="#FFF" className="dei8-star-twinkle-slow" style={{ animationDelay: '2.2s' }} />
        <circle cx="35" cy="20" r="0.9" fill="#FFF" className="dei8-star-twinkle-mid" style={{ animationDelay: '0.3s' }} />
        <circle cx="130" cy="25" r="1.2" fill="#EAA800" className="dei8-star-twinkle-slow" style={{ animationDelay: '1.5s' }} />
        <circle cx="180" cy="30" r="0.8" fill="#FFF" className="dei8-star-twinkle-fast" style={{ animationDelay: '0.6s' }} />
        <circle cx="230" cy="45" r="1.4" fill="#EAA800" className="dei8-star-twinkle-mid" style={{ animationDelay: '2.1s' }} />
        <circle cx="140" cy="70" r="1.1" fill="#FFF" className="dei8-star-twinkle-fast" style={{ animationDelay: '1.3s' }} />
        <circle cx="190" cy="80" r="1.3" fill="#EAA800" className="dei8-star-twinkle-slow" style={{ animationDelay: '0.9s' }} />
        <circle cx="240" cy="105" r="1.0" fill="#FFF" className="dei8-star-twinkle-mid" style={{ animationDelay: '2.7s' }} />
        <circle cx="135" cy="120" r="1.2" fill="#FFF" className="dei8-star-twinkle-slow" style={{ animationDelay: '1.7s' }} />
        <circle cx="215" cy="135" r="1.4" fill="#EAA800" className="dei8-star-twinkle-mid" style={{ animationDelay: '2.3s' }} />
        <circle cx="145" cy="180" r="0.9" fill="#FFF" className="dei8-star-twinkle-fast" style={{ animationDelay: '0.2s' }} />
        <circle cx="205" cy="190" r="1.3" fill="#FFF" className="dei8-star-twinkle-slow" style={{ animationDelay: '1.4s' }} />
        <circle cx="245" cy="210" r="1.1" fill="#EAA800" className="dei8-star-twinkle-mid" style={{ animationDelay: '2.9s' }} />
      </g>

      {/* Pleiades background */}
      <g opacity="0.28" fill="none">
        <path d="M 150 220 L 165 235 L 200 250 M 185 205 L 215 220 L 235 240 M 150 220 L 185 205 L 165 235 M 215 220 L 200 250" stroke="rgba(234,168,0,0.12)" strokeWidth="0.5" />
        <circle cx="150" cy="220" r="1.5" fill="#EAA800" className="dei8-star-1" />
        <circle cx="165" cy="235" r="1.2" fill="#EAA800" className="dei8-star-2" />
        <circle cx="185" cy="205" r="2.0" fill="#FFF" className="dei8-star-3" />
        <circle cx="200" cy="250" r="1.5" fill="#EAA800" className="dei8-star-1" />
        <circle cx="215" cy="220" r="1.5" fill="#EAA800" className="dei8-star-2" />
        <circle cx="235" cy="240" r="1.2" fill="#EAA800" className="dei8-star-3" />
      </g>

      {/* Upper Pleiades cluster near node 4 */}
      <g
        fill="none"
        style={{
          opacity: activeIndex === 4 ? 0.95 : 0.25,
          transition: 'opacity 2000ms ease-out, transform 2000ms ease-out',
        }}
      >
        <path d="M 280 75 L 300 120 L 350 110 L 360 60 L 330 40 L 280 75 M 320 95 L 330 40 M 320 95 L 300 120" stroke="rgba(234,168,0,0.18)" strokeWidth="0.5" />
        <circle cx="280" cy="75" r="1.5" fill="#FFF" className="dei8-star-1" />
        <circle cx="300" cy="120" r="2.0" fill="#EAA800" className="dei8-star-2" />
        <circle cx="350" cy="110" r="1.8" fill="#FFF" className="dei8-star-3" />
        <circle cx="360" cy="60" r="2.5" fill="#EAA800" className="dei8-star-1" />
        <circle cx="330" cy="40" r="1.5" fill="#FFF" className="dei8-star-2" />
        <circle cx="320" cy="95" r="1.5" fill="#FFF" className="dei8-star-3" />
        {activeIndex === 4 && (
          <>
            <circle cx="360" cy="60" r="6" fill="none" stroke="#EAA800" strokeWidth="0.5" className="dei8-ping-slow" style={{ transformOrigin: '360px 60px' }} />
            <circle cx="300" cy="120" r="5" fill="none" stroke="#EAA800" strokeWidth="0.5" className="dei8-ping-slow" style={{ transformOrigin: '300px 120px' }} />
          </>
        )}
      </g>

      {/* Sky radiance at node 4 */}
      <circle
        cx="320" cy="95" r="85"
        fill="url(#skyRadiance)"
        className="pointer-events-none"
        style={{
          opacity: activeIndex === 4 ? 1 : 0,
          transform: activeIndex === 4 ? 'scale(1.05)' : 'scale(0.9)',
          transformOrigin: '320px 95px',
          transition: 'opacity 2500ms ease-out, transform 2500ms ease-out',
        }}
      />

      {/* Washi cloud wisps near node 4 */}
      <g
        className="pointer-events-none"
        style={{
          opacity: activeIndex === 4 ? 0.9 : 0.35,
          transform: activeIndex === 4 ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 2500ms ease-out, transform 2500ms ease-out',
        }}
      >
        <ellipse cx="320" cy="95" rx="90" ry="40" fill="url(#skyRadiance)" filter="url(#routeGlow)" opacity="0.85" />
        <path d="M 230 115 C 250 110, 260 100, 275 105 C 290 110, 310 105, 325 90 C 340 75, 370 70, 390 85" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="4 6" />
        <path d="M 260 85 C 280 80, 290 75, 305 80 C 320 85, 340 80, 355 65" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.0" />
      </g>

      {/* Day-mode cirrus clouds */}
      <g
        className="pointer-events-none"
        style={{
          opacity: activeIndex === 4 ? 0.9 : 0,
          transition: 'opacity 4500ms ease-in-out',
        }}
      >
        <g className="dei8-cirrus-1">
          <path d="M -40 30 Q 30 25 100 32 T 240 30 T 320 28 Q 240 33 100 28 Z" fill="#FFFFFF" opacity="0.38" />
        </g>
        <g className="dei8-cirrus-2">
          <path d="M 60 70 Q 140 64 220 74 T 340 70 T 400 68 Q 290 76 180 68 Z" fill="#FFFFFF" opacity="0.55" />
        </g>
        <g className="dei8-cirrus-3">
          <path d="M -10 115 Q 90 108 190 120 T 350 112 T 450 115 Q 310 122 150 112 Z" fill="#FFFFFF" opacity="0.68" />
        </g>
      </g>
    </>
  )
}

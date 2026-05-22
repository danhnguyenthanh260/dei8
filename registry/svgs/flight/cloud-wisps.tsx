interface CloudWispsProps {
  activeIndex: number
}

const CLOUD_LAYERS = [
  { minNode: 0, top: '82%', height: '110px', width: '380px', left: '4%', baseOpacity: 0.65,
    gradient: 'radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 45%, rgba(234,168,0,0.05) 70%, transparent 100%)',
    animClass: 'dei8-wisp-right' },
  { minNode: 1, top: '65%', height: '120px', width: '420px', left: '10%', baseOpacity: 0.7,
    gradient: 'radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 45%, rgba(234,168,0,0.05) 70%, transparent 100%)',
    animClass: 'dei8-wisp-left' },
  { minNode: 2, top: '46%', height: '130px', width: '460px', left: '6%', baseOpacity: 0.75,
    gradient: 'radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 45%, rgba(234,168,0,0.05) 70%, transparent 100%)',
    animClass: 'dei8-wisp-right' },
  { minNode: 3, top: '32%', height: '140px', width: '490px', left: '12%', baseOpacity: 0.8,
    gradient: 'radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 45%, rgba(234,168,0,0.05) 70%, transparent 100%)',
    animClass: 'dei8-wisp-left' },
  { minNode: 4, top: '12%', height: '160px', width: '540px', left: '8%', baseOpacity: 0.85,
    gradient: 'radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.18) 45%, rgba(234,168,0,0.08) 70%, transparent 100%)',
    animClass: 'dei8-wisp-right' },
]

export function CloudWisps({ activeIndex }: CloudWispsProps) {
  const visibleLayers = CLOUD_LAYERS.filter((layer) => activeIndex >= layer.minNode)

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dei8WispRight { 0% { transform: translate3d(-30px,0,0); } 100% { transform: translate3d(70px,0,0); } }
        @keyframes dei8WispLeft  { 0% { transform: translate3d(70px,0,0); }  100% { transform: translate3d(-30px,0,0); } }
        .dei8-wisp-right { animation: dei8WispRight var(--wisp-dur,20s) ease-in-out infinite alternate; }
        .dei8-wisp-left  { animation: dei8WispLeft  var(--wisp-dur,24s) ease-in-out infinite alternate; }
      ` }} />
      {visibleLayers.map((layer, index) => {
        const isActive = activeIndex === layer.minNode
        const baseOpacity = Math.min(0.9, layer.baseOpacity * (0.7 + (activeIndex - layer.minNode) * 0.12))
        const opacity = isActive ? 0.02 : baseOpacity
        const transform = isActive ? 'translate3d(-240px, 0, 0)' : 'translate3d(0, 0, 0)'
        const dur = [20, 24, 28, 32, 36][index] ?? 24

        return (
          <div
            key={index}
            className="absolute"
            style={{
              top: layer.top, left: layer.left, width: layer.width, height: layer.height,
              transform, opacity, willChange: 'transform, opacity',
              transition: 'transform 1600ms cubic-bezier(0.25,1,0.5,1), opacity 1600ms cubic-bezier(0.25,1,0.5,1)',
            }}
          >
            <div
              className={`w-full h-full rounded-full blur-[18px] mix-blend-screen ${layer.animClass}`}
              style={{ background: layer.gradient, ['--wisp-dur' as string]: `${dur}s` }}
            />
          </div>
        )
      })}
    </div>
  )
}

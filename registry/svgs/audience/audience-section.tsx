'use client'

import React from 'react'

import { CargoJet } from '../jet/jet'
import { CargoPackage } from '../package-box/cargo-package'
import { AudienceSymmetricalBackground } from './audience-bg'

export interface AudienceCard {
  id: string
  badgeText: string
  title: string
  tagline: string
  /** Optional background image URL */
  imageSrc?: string
  imageAlt?: string
}

export interface AudienceSectionProps {
  eyebrow?: string
  /** Plain portion of the heading */
  title?: string
  /** Gold-accented portion of the heading (underlined) */
  accentTitle?: string
  description?: string
  cards?: AudienceCard[]
}

const DEFAULT_CARDS: AudienceCard[] = [
  {
    id: 'warehouses',
    badgeText: 'KHO HÀNG',
    title: '5 kho chính chủ toàn cầu',
    tagline: 'Nhật · Hàn · Mỹ · Indo · Việt',
    imageAlt: 'Hệ thống 5 kho hàng chính chủ toàn cầu',
  },
  {
    id: 'experience',
    badgeText: 'KINH NGHIỆM',
    title: '4 năm kinh nghiệm',
    tagline: 'Vận hành & thông quan tối ưu',
    imageAlt: '4 năm kinh nghiệm vận hành logistics quốc tế',
  },
  {
    id: 'customers',
    badgeText: 'KHÁCH HÀNG',
    title: '2500 khách hàng',
    tagline: 'Chủ shop & doanh nghiệp tin dùng',
    imageAlt: 'Hơn 2500 đối tác và khách hàng tin tưởng',
  },
  {
    id: 'markets',
    badgeText: 'THỊ TRƯỜNG',
    title: '4 thị trường quốc tế',
    tagline: 'Nhật · Hàn · Indonesia · Hoa Kỳ',
    imageAlt: 'Mở rộng giao thương tại 4 thị trường quốc tế',
  },
]

/** Decorative SVG pattern used as card background when no imageSrc is provided */
const CARD_BG_PATTERNS = [
  <svg key="0" viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="cg0" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#EAA800" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="200" height="200" fill="url(#cg0)" />
    <path d="M0,160 Q50,80 100,120 Q150,160 200,80 L200,200 L0,200 Z" fill="#EAA800" fillOpacity="0.06" />
  </svg>,
  <svg key="1" viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="cg1" cx="70%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#EAA800" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="200" height="200" fill="url(#cg1)" />
    <path d="M200,40 Q150,120 100,80 Q50,40 0,120 L0,0 L200,0 Z" fill="#EAA800" fillOpacity="0.06" />
  </svg>,
  <svg key="2" viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="cg2" cx="30%" cy="70%" r="70%">
        <stop offset="0%" stopColor="#EAA800" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="200" height="200" fill="url(#cg2)" />
    <path d="M0,40 Q50,120 100,80 Q150,40 200,120 L200,200 L0,200 Z" fill="#EAA800" fillOpacity="0.06" />
  </svg>,
  <svg key="3" viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="cg3" cx="70%" cy="70%" r="70%">
        <stop offset="0%" stopColor="#EAA800" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#EAA800" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="200" height="200" fill="url(#cg3)" />
    <path d="M200,160 Q150,80 100,120 Q50,160 0,80 L0,0 L200,0 Z" fill="#EAA800" fillOpacity="0.06" />
  </svg>,
]

export function AudienceSection({
  eyebrow = 'Audience spotlight',
  title = 'Đồng hành cùng hàng ngàn khách hàng —',
  accentTitle = 'chủ shop, chủ doanh nghiệp vừa và nhỏ',
  description = 'Từ nhu cầu cá nhân nhỏ lẻ đến chuỗi cung ứng doanh nghiệp phức tạp.',
  cards = DEFAULT_CARDS,
}: AudienceSectionProps): React.JSX.Element {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 pb-20 md:pb-28">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#EAA800]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#EAA800]">{eyebrow}</p>

          <div className="relative mt-3 flex w-full max-w-3xl items-center justify-center gap-2 sm:gap-4 md:max-w-5xl md:gap-6 lg:max-w-6xl lg:gap-8 xl:max-w-7xl xl:gap-10">
            <CargoJet className="hidden h-16 w-28 shrink-0 select-none md:block md:h-20 md:w-36 lg:h-24 lg:w-44 overflow-visible cursor-pointer" />

            <h2 className="w-full text-xl font-normal leading-[1.13] tracking-tight text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl">
              {title}{' '}
              <span className="relative inline-block font-normal text-[#EAA800]">
                {accentTitle}
                <span className="absolute bottom-1 left-0 h-0.5 w-full bg-[#EAA800]/20" />
              </span>
            </h2>

            <CargoPackage className="hidden h-16 w-28 shrink-0 select-none md:block md:h-20 md:w-36 lg:h-24 lg:w-44 overflow-visible cursor-pointer" />
          </div>

          <p className="mt-3 max-w-2xl text-sm text-neutral-500">{description}</p>
        </div>

        {/* ── 4-card grid ────────────────────────────────────────────── */}
        <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8 md:pb-8 relative">
          <AudienceSymmetricalBackground />

          {cards.map((card, index) => {
            const isEven = index % 2 === 0
            const isTopRow = index < 2

            return (
              <article
                key={card.id}
                className={`group relative z-10 h-[250px] md:h-[285px] w-full overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-950 shadow-sm transition-all duration-500 hover:border-[#EAA800]/30 hover:shadow-md ${
                  !isEven ? 'md:translate-y-8' : ''
                }`}
              >
                {/* Background — image if provided, else decorative SVG pattern */}
                <div className="absolute inset-0 h-full w-full overflow-hidden z-0">
                  {card.imageSrc ? (
                    <img
                      src={card.imageSrc}
                      alt={card.imageAlt ?? ''}
                      className="w-full h-full object-cover opacity-65 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
                    />
                  ) : (
                    <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                      {CARD_BG_PATTERNS[index % 4]}
                    </div>
                  )}
                </div>

                {/* Ambient vignette */}
                <div className="absolute inset-0 z-10 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors duration-500 pointer-events-none" />

                {/* ── Corner badge — 4 variants by position ── */}
                {isTopRow ? (
                  isEven ? (
                    // Card 1: Top-Left
                    <div className="absolute top-0 left-0 z-20 flex h-[212px] w-[212px] md:h-[270px] md:w-[270px] items-start justify-start rounded-br-full bg-[#EAA800] p-6 md:p-10 text-neutral-950 border-r border-b border-[#EAA800]/20 shadow-md transition-all duration-500">
                      <div className="flex flex-col text-left select-none">
                        <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-950/15 leading-none">
                          {`0${index + 1}`}
                        </span>
                        <span className="mt-4 md:mt-6 text-[9px] md:text-[10px] font-extrabold tracking-widest text-neutral-800 uppercase leading-none">
                          {card.badgeText}
                        </span>
                        <h3 className="mt-2 text-base md:text-lg font-bold tracking-tight text-neutral-950 leading-snug max-w-[80%]">
                          {card.title}
                        </h3>
                        <span className="mt-1.5 text-[9px] md:text-[10px] font-semibold text-neutral-800 tracking-wide opacity-80 leading-none max-w-[85%]">
                          {card.tagline}
                        </span>
                      </div>
                    </div>
                  ) : (
                    // Card 2: Top-Right
                    <div className="absolute top-0 right-0 z-20 flex h-[212px] w-[212px] md:h-[270px] md:w-[270px] items-start justify-end rounded-bl-full bg-neutral-950 p-6 md:p-10 text-[#EAA800] border-l border-b border-neutral-800/80 shadow-md transition-all duration-500">
                      <div className="flex flex-col text-right select-none">
                        <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-white/10 leading-none">
                          {`0${index + 1}`}
                        </span>
                        <span className="mt-4 md:mt-6 text-[9px] md:text-[10px] font-extrabold tracking-widest text-[#EAA800] uppercase leading-none">
                          {card.badgeText}
                        </span>
                        <h3 className="mt-2 text-base md:text-lg font-bold tracking-tight text-white leading-snug max-w-[80%] ml-auto">
                          {card.title}
                        </h3>
                        <span className="mt-1.5 text-[9px] md:text-[10px] font-semibold text-neutral-400 tracking-wide opacity-80 leading-none max-w-[85%] ml-auto">
                          {card.tagline}
                        </span>
                      </div>
                    </div>
                  )
                ) : isEven ? (
                  // Card 3: Bottom-Left
                  <div className="absolute bottom-0 left-0 z-20 flex h-[212px] w-[212px] md:h-[270px] md:w-[270px] items-end justify-start rounded-tr-full bg-[#EAA800] p-6 md:p-10 text-neutral-950 border-r border-t border-[#EAA800]/20 shadow-md transition-all duration-500">
                    <div className="flex flex-col text-left select-none mt-auto">
                      <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-950/15 leading-none">
                        {`0${index + 1}`}
                      </span>
                      <span className="mt-4 md:mt-6 text-[9px] md:text-[10px] font-extrabold tracking-widest text-neutral-800 uppercase leading-none">
                        {card.badgeText}
                      </span>
                      <h3 className="mt-2 text-base md:text-lg font-bold tracking-tight text-neutral-950 leading-snug max-w-[80%]">
                        {card.title}
                      </h3>
                      <span className="mt-1.5 text-[9px] md:text-[10px] font-semibold text-neutral-800 tracking-wide opacity-80 leading-none max-w-[85%]">
                        {card.tagline}
                      </span>
                    </div>
                  </div>
                ) : (
                  // Card 4: Bottom-Right
                  <div className="absolute bottom-0 right-0 z-20 flex h-[212px] w-[212px] md:h-[270px] md:w-[270px] items-end justify-end rounded-tl-full bg-neutral-950 p-6 md:p-10 text-[#EAA800] border-l border-t border-neutral-800/80 shadow-md transition-all duration-500">
                    <div className="flex flex-col text-right select-none mt-auto">
                      <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-white/10 leading-none">
                        {`0${index + 1}`}
                      </span>
                      <span className="mt-4 md:mt-6 text-[9px] md:text-[10px] font-extrabold tracking-widest text-[#EAA800] uppercase leading-none">
                        {card.badgeText}
                      </span>
                      <h3 className="mt-2 text-base md:text-lg font-bold tracking-tight text-white leading-snug max-w-[80%] ml-auto">
                        {card.title}
                      </h3>
                      <span className="mt-1.5 text-[9px] md:text-[10px] font-semibold text-neutral-400 tracking-wide opacity-80 leading-none max-w-[85%] ml-auto">
                        {card.tagline}
                      </span>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

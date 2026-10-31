import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

export function TagCard({
  number,
  title,
  text,
  className = '',
  aosDelay = 0,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return;
    const containerHeight = containerRef.current.offsetHeight || 1350;
    const cardTop = cardRef.current.offsetTop;
    // Activate when the scroll-drawn line passes the card's top + 50px
    if (latest * containerHeight >= cardTop + 50) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 shadow-xl ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_15px_35px_rgba(255,42,42,0.35)] scale-105'
          : 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100'
      } ${className}`}
    >
      {/* Hanging Tag Hole */}
      <div className="relative pt-2 flex justify-center">
        <div
          className={`w-4 h-4 rounded-full border-2 transition-colors duration-700 ${
            isActive ? 'bg-red-800 border-white/40' : 'bg-gray-200 border-gray-300'
          }`}
        />
      </div>

      {/* Inner Panel */}
      <div
        className={`mt-4 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <div>
          <span
            className={`text-4xl md:text-5xl font-black font-serif italic select-none ${
              isActive ? 'text-white/40' : 'text-gray-300'
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black tracking-tight mt-2 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>

        <p
          className={`text-sm leading-relaxed mt-4 ${
            isActive ? 'text-red-50' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const cardConfig = [
    {
      className: 'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ];

  const desktopPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200';

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 space-y-4 mb-12 md:mb-0"
        >
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-red-50 border border-red-200 text-[#ff2a2a]">
              {skillsContent.badge}
            </span>
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight">
              {skillsContent.heading}
            </h2>
            {/* Hand-drawn Arrow SVG */}
            <svg
              className="w-8 h-8 text-[#ff2a2a] stroke-current fill-none absolute -bottom-6 right-4 pointer-events-none"
              viewBox="0 0 20 20"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-2">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Animated Curved Line SVG (hidden on mobile) */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopPath}
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 1. Faint Guide Path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* 3. Real Dashed Path Revealed by Mask */}
          <path
            d={desktopPath}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Animated Line SVG (md:hidden) */}
        <svg
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="8"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 1. Faint Guide Path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 6"
          />

          {/* 3. Real Dashed Path Revealed by Mask */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Tag Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardConfig[index]?.className || ''}
              aosType={cardConfig[index]?.aosType || 'fade-up'}
              aosDelay={cardConfig[index]?.aosDelay || 0}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* Handwritten End Note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none">
            {skillsContent.endText} 🚀
          </div>
        )}
      </div>
    </section>
  );
}

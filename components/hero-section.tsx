"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const memoryFragments = [
    { text: 'I don’t know.', className: 'left-[12%] top-[28%]', delay: 2.25, duration: 5.8 },
    { text: 'Strong.', className: 'right-[16%] top-[36%]', delay: 2.9, duration: 4.8 },
    { text: 'Just to stay.', className: 'left-[18%] bottom-[28%]', delay: 3.55, duration: 5.2 },
    { text: 'there is still someone in here.', className: 'right-[10%] bottom-[22%]', delay: 4.15, duration: 5.6 },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="opening-void" aria-hidden="true" />
      <div className="opening-haze" aria-hidden="true" />
      <div className="opening-density" aria-hidden="true" />

      <div className="opening-fragments" aria-hidden="true">
        {memoryFragments.map((fragment) => (
          <motion.span
            key={fragment.text}
            initial={{ opacity: 0, y: 10, filter: 'blur(1.8px)' }}
            animate={{
              opacity: [0, 0.16, 0.34, 0.18, 0],
              y: [10, 2, -1, -5, -8],
              x: [0, -1, 1, -0.5, 0.5],
              filter: ['blur(1.8px)', 'blur(0.7px)', 'blur(0.28px)', 'blur(0.55px)', 'blur(1.2px)'],
            }}
            transition={{
              duration: fragment.duration,
              delay: fragment.delay,
              ease: 'easeInOut',
              times: [0, 0.24, 0.48, 0.72, 1],
            }}
            className={`opening-fragment ${fragment.className}`}
          >
            {fragment.text}
          </motion.span>
        ))}
      </div>

      <motion.svg
        className="opening-thread"
        viewBox="0 0 120 1000"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.18, 0.34, 0.26] }}
        transition={{ duration: 6.2, delay: 3.2, ease: 'easeInOut' }}
        aria-hidden="true"
        focusable="false"
      >
        <motion.path
          d="M60.4 0 C59.2 82 61.4 148 60 226 C58.8 318 61.2 401 60.2 492 C59.4 610 61.1 742 60.1 1000"
          pathLength="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5.6, delay: 3.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="opening-thread-path"
        />
        <path
          d="M60.4 0 C59.2 82 61.4 148 60 226 C58.8 318 61.2 401 60.2 492 C59.4 610 61.1 742 60.1 1000"
          pathLength="1000"
          className="opening-thread-travel"
        />
        <path
          d="M60.15 0 C59 82 61.6 148 59.85 226 C58.9 318 61.4 401 60.05 492 C59.2 610 61.35 742 59.95 1000"
          pathLength="1000"
          className="opening-thread-travel opening-thread-travel-late"
        />
        <motion.path
          d="M60.3 124 C60.1 138 60.7 149 60.4 164 M59.9 426 C59.6 441 60.3 454 60 469 M60.5 714 C60.2 729 60.9 744 60.4 759"
          pathLength="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.2, 0.05] }}
          transition={{ duration: 5.8, delay: 4.1, ease: 'easeInOut' }}
          className="opening-thread-glint"
        />
      </motion.svg>
      
      <motion.div
        style={{ opacity, y, scale }}
        className="hero-text-region relative z-10 text-center max-w-4xl"
      >
        {/* Author credit - whispered */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.6, delay: 6.35 }}
          className="text-exclusion font-sans text-xs tracking-[0.4em] uppercase text-silver/50 mb-12"
        >
          E. Blackwood
        </motion.p>
        
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(1.4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 3.4, delay: 5.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-exclusion title-exclusion font-serif font-light text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory/90 tracking-tight leading-[0.9]"
        >
          <span className="block">If This Is</span>
          <span className="block mt-2 text-moonlight/70 italic">Living</span>
        </motion.h1>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 8.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-transparent via-silver/30 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

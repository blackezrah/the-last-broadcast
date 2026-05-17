"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface PoemLineProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'default' | 'large' | 'whisper' | 'isolated' | 'compressed' | 'impact'
  treatment?: 'haunted' | 'ghost' | 'knife' | 'confession' | 'submerged' | 'ember'
}

export function PoemLine({ children, className = '', delay = 0, variant = 'default', treatment }: PoemLineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  const baseStyles = {
    default: 'font-serif text-xl sm:text-2xl md:text-3xl font-light text-ivory/80 leading-relaxed',
    large: 'font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory/90 leading-tight',
    whisper: 'font-sans text-sm sm:text-base tracking-wide text-silver/80 font-extralight',
    isolated: 'font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-moonlight/80 leading-none italic',
    compressed: 'font-serif text-lg sm:text-xl text-ivory/75 font-light leading-snug',
    impact: 'font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory tracking-tight leading-none',
  }

  const treatmentStyles = {
    haunted: 'haunted-line',
    ghost: 'ghost-text',
    knife: 'knife-line',
    confession: 'fading-confession',
    submerged: 'submerged-text',
    ember: 'ember-text',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{
        duration: treatment ? 1.8 : 1.2,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`text-exclusion ${baseStyles[variant]} ${treatment ? treatmentStyles[treatment] : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface PoemSectionProps {
  children: ReactNode
  className?: string
  spacing?: 'normal' | 'tight' | 'wide' | 'vast'
}

export function PoemSection({ children, className = '', spacing = 'normal' }: PoemSectionProps) {
  const spacingStyles = {
    tight: 'py-8 sm:py-12',
    normal: 'py-16 sm:py-24 md:py-32',
    wide: 'py-24 sm:py-40 md:py-56',
    vast: 'py-32 sm:py-48 md:py-72',
  }

  return (
    <section className={`${spacingStyles[spacing]} ${className}`}>
      {children}
    </section>
  )
}

interface PoemStanzaProps {
  children: ReactNode
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function PoemStanza({ children, className = '', align = 'left' }: PoemStanzaProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`relative z-10 max-w-3xl space-y-4 sm:space-y-6 ${alignStyles[align]} ${className}`}>
      {children}
    </div>
  )
}

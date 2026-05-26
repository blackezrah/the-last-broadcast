"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from "motion/react"

const EXTINGUISH_SCROLL_Y = 64
const RESET_SCROLL_Y = 10
const MOBILE_EXTINGUISH_DELAY_MS = 2600
const EXTINGUISH_DURATION_MS = 2900
type FlameState = 'lit' | 'extinguishing' | 'extinguished'

const smokeWisps = [
  { xMid: '-14px', xEnd: '-56px', xFar: '-68px', delay: '40ms', width: '24px', height: '82px', opacity: '0.26', rotate: '-18deg', rotateMid: '6deg' },
  { xMid: '18px', xEnd: '52px', xFar: '64px', delay: '120ms', width: '34px', height: '104px', opacity: '0.22', rotate: '12deg', rotateMid: '-4deg' },
  { xMid: '-28px', xEnd: '-78px', xFar: '-96px', delay: '260ms', width: '46px', height: '128px', opacity: '0.18', rotate: '-8deg', rotateMid: '3deg' },
  { xMid: '32px', xEnd: '92px', xFar: '112px', delay: '390ms', width: '28px', height: '112px', opacity: '0.19', rotate: '21deg', rotateMid: '-7deg' },
  { xMid: '-10px', xEnd: '-34px', xFar: '-42px', delay: '560ms', width: '58px', height: '136px', opacity: '0.14', rotate: '-2deg', rotateMid: '1deg' },
  { xMid: '14px', xEnd: '68px', xFar: '82px', delay: '740ms', width: '42px', height: '126px', opacity: '0.13', rotate: '16deg', rotateMid: '-6deg' },
  { xMid: '-38px', xEnd: '-106px', xFar: '-130px', delay: '940ms', width: '36px', height: '118px', opacity: '0.11', rotate: '-24deg', rotateMid: '8deg' },
  { xMid: '36px', xEnd: '112px', xFar: '136px', delay: '1160ms', width: '52px', height: '148px', opacity: '0.1', rotate: '26deg', rotateMid: '-9deg' },
]

export function CandleFlame() {
  const [flameState, setFlameState] = useState<FlameState>('lit')
  const [hasScrolled, setHasScrolled] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const clearExtinguishTimeout = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    const triggerExtinguish = () => {
      setFlameState((current) => {
        if (current !== 'lit') return current

        clearExtinguishTimeout()
        timeoutRef.current = window.setTimeout(() => {
          setFlameState('extinguished')
          timeoutRef.current = null
        }, EXTINGUISH_DURATION_MS)

        return 'extinguishing'
      })
    }

    let mobileDelay: ReturnType<typeof setTimeout> | null = null

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 16)

      if (mobileQuery.matches) return

      const scrollY = window.scrollY

      setFlameState((current) => {
        if (scrollY < RESET_SCROLL_Y) {
          clearExtinguishTimeout()
          return 'lit'
        }

        return current
      })

      if (scrollY > EXTINGUISH_SCROLL_Y) triggerExtinguish()
    }

    const scheduleMobileExtinguish = () => {
      if (mobileDelay) {
        window.clearTimeout(mobileDelay)
        mobileDelay = null
      }

      if (!mobileQuery.matches || reducedMotionQuery.matches) return

      setFlameState('lit')
      mobileDelay = window.setTimeout(triggerExtinguish, MOBILE_EXTINGUISH_DELAY_MS)
    }

    scheduleMobileExtinguish()
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    mobileQuery.addEventListener('change', scheduleMobileExtinguish)
    reducedMotionQuery.addEventListener('change', scheduleMobileExtinguish)

    return () => {
      if (mobileDelay) window.clearTimeout(mobileDelay)
      clearExtinguishTimeout()
      window.removeEventListener('scroll', handleScroll)
      mobileQuery.removeEventListener('change', scheduleMobileExtinguish)
      reducedMotionQuery.removeEventListener('change', scheduleMobileExtinguish)
    }
  }, [])

  return (
    <>
      <svg className="smoke-filter-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="candle-smoke-distortion" x="-70%" y="-70%" width="240%" height="260%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.017 0.052"
            numOctaves="4"
            seed="17"
            result="smokeNoise"
          />
          <feDisplacementMap in="SourceGraphic" in2="smokeNoise" scale="28" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
        <filter id="mobile-title-smoke-distortion" x="-45%" y="-70%" width="190%" height="240%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011 0.032"
            numOctaves="5"
            seed="31"
            result="titleNoise"
          />
          <feDisplacementMap in="SourceGraphic" in2="titleNoise" scale="18" xChannelSelector="R" yChannelSelector="B" />
          <feGaussianBlur stdDeviation="0.65" />
        </filter>
      </svg>

      <div className="candle-flame-shell" data-state={flameState} aria-hidden="true">
        <div className="candle-flame-glow" />
        <div className="candle-flame" />
        <div className="smoke-trail">
          {smokeWisps.map((wisp, index) => (
            <span
              key={`smoke-${index}`}
              className="smoke-wisp"
              style={{
                '--smoke-x-mid': wisp.xMid,
                '--smoke-x-end': wisp.xEnd,
                '--smoke-x-far': wisp.xFar,
                '--smoke-delay': wisp.delay,
                '--smoke-width': wisp.width,
                '--smoke-height': wisp.height,
                '--smoke-opacity': wisp.opacity,
                '--smoke-rotate': wisp.rotate,
                '--smoke-rotate-mid': wisp.rotateMid,
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="mobile-smoke-title" aria-hidden="true">
          <span className="mobile-title-smoke mobile-title-smoke-a" />
          <span className="mobile-title-smoke mobile-title-smoke-b" />
          <span className="mobile-title-smoke mobile-title-smoke-c" />
          <span className="mobile-title-line">The Last</span>
          <span className="mobile-title-line">Broadcast</span>
        </div>
      </div>

      <motion.div
        className="mobile-scroll-cue"
        aria-hidden="true"
        initial={false}
        animate={
          flameState !== 'lit' && !hasScrolled && !prefersReducedMotion
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 6, filter: "blur(4px)" }
        }
        transition={{ duration: 1.2, delay: flameState === 'extinguishing' ? 2.4 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        <span />
      </motion.div>
    </>
  )
}

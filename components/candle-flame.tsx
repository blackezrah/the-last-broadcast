"use client"

import { useEffect, useRef, useState } from 'react'

const EXTINGUISH_SCROLL_Y = 64
const RESET_SCROLL_Y = 10
const MOBILE_EXTINGUISH_DELAY_MS = 1850
const EXTINGUISH_DURATION_MS = 2900
type FlameState = 'lit' | 'extinguishing' | 'extinguished'

const smokeWisps = [
  { xMid: '18px', xEnd: '54px', delay: '80ms', width: '30px', height: '68px', opacity: '0.19' },
  { xMid: '26px', xEnd: '76px', delay: '180ms', width: '24px', height: '58px', opacity: '0.15' },
  { xMid: '34px', xEnd: '90px', delay: '300ms', width: '38px', height: '76px', opacity: '0.17' },
  { xMid: '22px', xEnd: '62px', delay: '430ms', width: '22px', height: '64px', opacity: '0.13' },
  { xMid: '30px', xEnd: '82px', delay: '540ms', width: '28px', height: '72px', opacity: '0.12' },
  { xMid: '16px', xEnd: '48px', delay: '660ms', width: '34px', height: '82px', opacity: '0.11' },
]

export function CandleFlame() {
  const [flameState, setFlameState] = useState<FlameState>('lit')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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
              '--smoke-delay': wisp.delay,
              '--smoke-width': wisp.width,
              '--smoke-height': wisp.height,
              '--smoke-opacity': wisp.opacity,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="mobile-smoke-title" aria-hidden="true">
        <span>The Last</span>
        <span>Broadcast</span>
      </div>
    </div>
  )
}

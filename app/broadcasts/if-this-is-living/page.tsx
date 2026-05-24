import { SmoothScroll } from '@/components/smooth-scroll'
import { AtmosphericEffects } from '@/components/atmospheric-effects'
import { HeroSection } from '@/components/hero-section'
import { PoemContent } from '@/components/poem-content'
import { Threadline } from '@/components/threadline'
import { EngagementRail } from '@/components/engagement-rail'
import { BroadcastNav } from '@/components/broadcast-nav'

export default function Page() {
  return (
    <SmoothScroll>
      <main className="editorial-page relative min-h-screen bg-background">
        {/* Atmospheric effects layer */}
        <AtmosphericEffects />
        <Threadline />
        <EngagementRail />
        <BroadcastNav />

        {/* Content */}
        <div className="editorial-content">
          <HeroSection />
          <PoemContent />
        </div>
      </main>
    </SmoothScroll>
  )
}

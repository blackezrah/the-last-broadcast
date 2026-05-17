import { SmoothScroll } from '@/components/smooth-scroll'
import { AtmosphericEffects } from '@/components/atmospheric-effects'
import { Threadline } from '@/components/threadline'
import { EngagementRail } from '@/components/engagement-rail'
import { HeavyLikeHeavenContent } from '@/components/heavy-like-heaven-content'

export default function Page() {
  return (
    <SmoothScroll>
      <main className="editorial-page cathedral-page relative min-h-screen bg-background">
        <AtmosphericEffects />
        <Threadline />
        <EngagementRail />

        <div className="editorial-content">
          <HeavyLikeHeavenContent />
        </div>
      </main>
    </SmoothScroll>
  )
}

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SmoothScroll } from '@/components/smooth-scroll'
import { AtmosphericEffects } from '@/components/atmospheric-effects'
import { Threadline } from '@/components/threadline'
import { EngagementRail } from '@/components/engagement-rail'
import { HalfLifeOfYouContent } from '@/components/half-life-of-you-content'
import { BroadcastNav } from '@/components/broadcast-nav'

export default function Page() {
  const poemSource = readFileSync(
    join(process.cwd(), 'content/broadcasts/the-half-life-of-you.txt'),
    'utf8',
  )

  return (
    <SmoothScroll>
      <main className="editorial-page relative min-h-screen bg-background">
        <AtmosphericEffects />
        <Threadline />
        <EngagementRail broadcast="the-half-life-of-you" />
        <BroadcastNav />

        <div className="editorial-content">
          <HalfLifeOfYouContent poemSource={poemSource} />
        </div>
      </main>
    </SmoothScroll>
  )
}

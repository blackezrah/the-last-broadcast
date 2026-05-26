import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SmoothScroll } from '@/components/smooth-scroll'
import { AtmosphericEffects } from '@/components/atmospheric-effects'
import { Threadline } from '@/components/threadline'
import { EngagementRail } from '@/components/engagement-rail'
import { BroadcastNav } from '@/components/broadcast-nav'
import { HalfLifeOfYouContent } from '@/components/half-life-of-you-content'

export default function Page() {
  const poemSource = readFileSync(
    join(process.cwd(), 'content/broadcasts/the-trespass.txt'),
    'utf8',
  )

  return (
    <SmoothScroll>
      <main className="editorial-page relative min-h-screen bg-background">
        <AtmosphericEffects />
        <Threadline />
        <EngagementRail broadcast="the-trespass" />
        <BroadcastNav />

        <div className="editorial-content">
          <HalfLifeOfYouContent
            poemSource={poemSource}
            title="THE TRESPASS"
            label="BROADCAST 004"
          />
        </div>
      </main>
    </SmoothScroll>
  )
}

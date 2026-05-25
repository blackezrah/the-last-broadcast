import { SmoothScroll } from '@/components/smooth-scroll'
import { AtmosphericEffects } from '@/components/atmospheric-effects'
import { Threadline } from '@/components/threadline'
import { EngagementRail } from '@/components/engagement-rail'
import { BroadcastNav } from '@/components/broadcast-nav'
import { HalfLifeOfYouContent } from '@/components/half-life-of-you-content'

const poemSource = `The river wore the moon
 like a wound that wouldn’t close.
 Silver trembling on black glass
 beneath the dying snow.
And I—
I stood barefoot in the freezing reeds
 with your name inside my mouth
 like a prayer gone wrong.

The trees bent low that night.
Their empty arms creaking slowly
 in the December wind
 like they were mourning something buried
 beneath the waterline.

Don’t sing to me of heaven.
 I have heard what sleeps below.

In the black water—
 something beautiful is drowning.

Something ancient
 pulling at the bottom of the world.

And every time the dark wind calls,
 I hear you breathing through the walls.

Stay with me.
 Inside the cold.
 Inside this ruined lullaby.

The lake was never empty.
It kept our shadows
 underneath the ice—
 preserved like broken saints
 inside a frozen mausoleum.

I remember your pale hands.
 Your wet hair.
 Your voice unraveling softly
 through the storm.

You looked like death
 made holy by moonlight.

And God—
 the silence afterward.

Snow falling through dead power lines.
 The whole world blue and numb.

 The distant sound of cracking ice
 echoing through the woods
 like a heart finally giving out.

If I close my eyes now,
 I can still feel the water climbing.

Cold around my ankles.
Cold around my throat.
Cold inside my ribs
 where your memory still lives
 like a drowned thing
 refusing to decay.

So bury me beside the river
 where the black trees sway.
Where the winter keeps its secrets
 and the light cannot remain.

Because every love I ever touched
 turned ghost-white in my hands.

And every road I’ve followed home
 just leads me back again—

to the black water.
To your voice beneath the ice.
To the beautiful ruin
 singing my name
 through the dark.`

export default function Page() {
  return (
    <SmoothScroll>
      <main className="editorial-page black-water-page relative min-h-screen bg-background">
        <AtmosphericEffects />
        <Threadline />
        <EngagementRail broadcast="black-water-lullaby" />
        <BroadcastNav />

        <div className="editorial-content">
          <HalfLifeOfYouContent
            poemSource={poemSource}
            title="BLACK WATER LULLABY"
            label="BROADCAST 006"
          />
        </div>
      </main>
    </SmoothScroll>
  )
}

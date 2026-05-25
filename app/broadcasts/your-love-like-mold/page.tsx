import { SmoothScroll } from '@/components/smooth-scroll'
import { AtmosphericEffects } from '@/components/atmospheric-effects'
import { Threadline } from '@/components/threadline'
import { EngagementRail } from '@/components/engagement-rail'
import { BroadcastNav } from '@/components/broadcast-nav'
import { HalfLifeOfYouContent } from '@/components/half-life-of-you-content'

const poemSource = `Cold hands in my bed again
 like a ghost that never learned
 how to die.
I wake up choking
 on somebody else’s need
 wrapped around my waist
 like barbed wire disguised as mercy.
You whisper love
 like a threat.
Like something holy
 dragged screaming through broken glass.

⸻

There are cameras in the walls again.
 Tiny blinking eyes
 watching me decay
 inside this mausoleum you call home.
Every doorway feels infected.
 Every silence grows teeth.
 Every room still echoes
 with strangers fucking
 while I sit upstairs
 trying not to disappear.
But God forbid
 someone parks outside too long.
God forbid
 I belong to myself.

⸻

You say
 you’re hurting.
So am I.
But I don’t crawl into sleeping bodies
 to make loneliness quieter.
I don’t chain people to guilt
 and call it tenderness.
I don’t carve my suffering
 into somebody else’s ribs
 then ask why they bleed differently now.

⸻

I hear your voice through the walls—
please don’t leave me
 please don’t hate me
 please talk to me
 please save me
Over and over
 until the words lose skin
 and become static.
White noise.
 Rotting halos.
 A broken fucking prayer
 caught in the teeth of the ceiling fan.

⸻

You built this whole cathedral
 out of pity and surveillance.
Lit candles with gasoline.
Turned every kindness
 into debt.
Every favor
 into gravity.
Every moment of weakness
 into another reason
 I should stay.

⸻

And I stayed.
God, I stayed.
Long enough to forget
 what safety feels like.
Long enough to start apologizing
 for locking doors.
Long enough to wonder
 if maybe my anger
 really was cruelty.
But anger is what happens
 when fear learns
 how to scream.

⸻

Now every night
 feels like nails under skin.
Like insects inside the wiring.
Like a dead voice whispering
 through rusted speakers
 while the house breathes around me
 slow and wet
 like something alive.
And you—
standing there
 with sad eyes
 and blood on your hands
 asking me why I’m distant now.

⸻

You say
 you love me.
But it feels like black water
 rising beneath the floorboards.
Like something starving
 scratching softly at the walls
 until the whole house forgets how to sleep.
It drips from the ceiling at midnight.
 Heavy. Sick. Sweet.
Turns every quiet moment
 into a room waiting to collapse.
And whatever this thing is
 that keeps wearing your face—
it was never love.

⸻

I am not your rehab.
Not your reward.
Not your emotional support corpse
 dragged room to room
 to keep your darkness company.
I was a person
 before your loneliness
 turned me into a mirror.
And every time you looked at me
 you only saw
 something to consume.

⸻

So let the house keep its hunger.
Let it breathe dust through the vents
 and hum softly to itself at night.
Let the floorboards warp around old footsteps.
 Let the walls keep memorizing voices
 long after the mouths are gone.
This place was already decaying
 before either of us admitted it.
You can feel it under the paint.
 In the soft give of the floor.
 In the way every locked room
 seems to breathe heavier
 when I stop answering.
And maybe that’s the real horror of it—
how easy it became
 to mistake survival
 for living.
How quietly a person can vanish
 inside something
 that keeps insisting
 it loves them.
So if one day
 all that’s left of me here
 is an impression in the mattress
 and a few strands caught in the drain—
don’t make a shrine
 out of the space I left behind.
Don’t dress the wreckage
 in softer words.
Some disappearances
 are not tragedies.
Some are the body
 finally choosing air
 over the thing
 that kept calling itself home.`

export default function Page() {
  return (
    <SmoothScroll>
      <main className="editorial-page mold-page relative min-h-screen bg-background">
        <AtmosphericEffects />
        <Threadline />
        <EngagementRail broadcast="your-love-like-mold" />
        <BroadcastNav />

        <div className="editorial-content">
          <HalfLifeOfYouContent
            poemSource={poemSource}
            title="YOUR LOVE, LIKE MOLD"
            label="BROADCAST 005"
          />
        </div>
      </main>
    </SmoothScroll>
  )
}

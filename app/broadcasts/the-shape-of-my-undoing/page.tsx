import { SmoothScroll } from '@/components/smooth-scroll'
import { AtmosphericEffects } from '@/components/atmospheric-effects'
import { Threadline } from '@/components/threadline'
import { EngagementRail } from '@/components/engagement-rail'
import { BroadcastNav } from '@/components/broadcast-nav'
import { HalfLifeOfYouContent } from '@/components/half-life-of-you-content'

const poemSource = `I have carried grief like iron in my throat,
a rusted hymn I never learned to sing,
while every hour came dressed in funeral smoke
and left its ashes underneath my skin.

No star has ever found me where I kneel.
No mercy ever learned my given name.
The night moves close with teeth behind its veil,
and every prayer returns to me in shame.

I am not broken cleanly.
I am not split by light.
I am the slow disaster
that rehearses itself at night.

Something inside me keeps circling low,
a carrion thought with its wings spread wide,
dragging its shadow through the rooms below
where all my softer selves have died.

I hear them sometimes—
not voices,
not ghosts,
but the last small motions
of what I miss most.

The child I buried without a grave.
The hope I starved so I could behave.
The trembling thing I taught to be brave.
The part of me no one tried to save.

There is a grief that does not weep.
It stands in corners, tall and thin.
It watches while the others sleep
and counts the locks beneath your skin.

It knows the shape of every door
I almost opened, then withdrew.
It knows what mercy sounded like
before it learned to sound untrue.

And I—
I have become intimate
with endings.

Not the dramatic kind.
Not lightning.
Not ruin loud enough
to earn a witness.

No.

I mean the quiet executions:
a name no longer said with care,
a hand removed before the fall,
a room gone cold though someone’s there.

The slow divorce between the breath
and every reason breath remains.
The private trial.
The sentence kept.
The body trained to smile through pain.

I have been abandoned
in ways maps cannot explain,
left where even echoes
refused to say my name.

There are places inside me
where no language goes,
where dread hangs low
and nothing grows.

Not flowers.
Not forgiveness.
Not sleep.
Only a pressure
vast and deep.

Only a silence
dressed in gray.
Only the hours
gnawing away.

I know what it means
to become your own warning,
to wake with the taste
of a ruined morning,
to hold back the scream
because nobody came,
to burn without fire
and still take the blame.

Rage lives in me like a buried bell,
mute from the dirt,
but shaking still.
It does not roar.
It does not swell.
It waits beneath the frozen hill.

And when it rings,
it rings in red,
through every word
I never said.

Through every insult
I swallowed whole.
Through every wound
they called control.

Through every time
I made myself small
so someone else
could tower tall.

I am tired of being
the altar and knife,
the wound and witness,
the debt and price.

Tired of carrying
everyone’s weather,
while I come apart
thread by thread,
feather by feather.

There is no clean name
for this kind of ache.
It has no ceremony,
no formal wake.

It is a dark animal
under the floor,
scratching softly,
then scratching more.

It is the hallway
that lengthens behind you.
It is the mirror
that will not define you.
It is the mouth
of the world opening wide,
then closing again
with you still inside.

And loneliness—
My loneliness
is not empty air.

It has weight.
It has hunger.
It has hands in your hair.

It sits at the table.
It drinks from your glass.
It teaches the future
to look like the past.

It climbs into bed
with its ash-colored grin
and whispers,
You are still here.
Begin again.

But begin as what?
As whom?
As bone-white flame
in a sealed-off tomb?

As a shadow
with pulse?
As a mouth
without sound?
As a body still standing
because it forgot how to fall down?

I do not know.

That is the terror.

Not death.
Not loss.
Not the blade
or the frost.

It is not knowing
which version of me
will crawl from the wreckage
and what it will be.

Will it have my eyes?
Will it know my face?
Will it mistake survival
for grace?

Will it remember
how tenderness felt,
before every kindness
unfastened and knelt?

Will it forgive me
for staying too long
inside the wrong silence,
inside the wrong song?

I have loved things
that sharpened in my hands.
I have trusted the tide
and awakened on sand.

I have mistaken
a cage for a crown,
then thanked the lock
for holding me down.

Now every promise
arrives with a bruise.
Every doorway
demands I choose.

Every soft word
hides a cost.
Every map
leads back to lost.

Still, somewhere beneath
this bitter sky,
beneath the grief
that will not die,
beneath the panic,
beneath the shame,
beneath the smoke
that learned my name,

there is something
not gentle,
not healed,
not bright—

but alive
in the marrow
of absolute night.

It does not sing.
It does not plead.
It does not flower.
It does not bleed.

It waits like thunder
behind clenched teeth,
a buried verdict
underneath.

And maybe that is all
I get to keep:
not peace,
not faith,
not dreamless sleep,

but the brutal proof
that I remain
after the terror,
after the rain,

after the hands
that let me go,
after the dark
that dragged me low,

after the names
I cannot say,
after the selves
I gave away.

So let the night
come dressed in knives.
Let sorrow swarm
where daylight dies.

Let fear lean close
with its breath like stone.
Let chaos crown me
on its throne.

I have already met
the worst in me.
I have held its face.
I have watched it breathe.

And still I stand—
not clean,
not free,
but carved from what
was meant to bury me.

Only the darkness knows
what I became
when no one came
to call my name.

Only the darkness saw
the final thread,
the quiet war,
the living dead.

Only the darkness heard
what I could not speak,
when rage went blind
and mercy went weak.

Only the darkness stayed
when others withdrew.
Only the darkness knows
what I survived becoming true.

And if tomorrow finds me
strange,
severe,
unknown—

do not ask
where the old me went.

He did not leave.

He was overthrown.`

export default function Page() {
  return (
    <SmoothScroll>
      <main className="editorial-page relative min-h-screen bg-background">
        <AtmosphericEffects />
        <Threadline />
        <EngagementRail broadcast="the-shape-of-my-undoing" />
        <BroadcastNav />

        <div className="editorial-content">
          <HalfLifeOfYouContent
            poemSource={poemSource}
            title="THE SHAPE OF MY UNDOING"
            label="BROADCAST 008"
          />
        </div>
      </main>
    </SmoothScroll>
  )
}

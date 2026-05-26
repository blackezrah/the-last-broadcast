import { SmoothScroll } from '@/components/smooth-scroll'
import { AtmosphericEffects } from '@/components/atmospheric-effects'
import { Threadline } from '@/components/threadline'
import { EngagementRail } from '@/components/engagement-rail'
import { BroadcastNav } from '@/components/broadcast-nav'
import { HalfLifeOfYouContent } from '@/components/half-life-of-you-content'

const poemSource = `It started as a pressure
behind the waking eye,
a weight without a surface
that would not tell me why.

Not grief with open fingers,
not sorrow with a sound,
but something low and mineral
that dragged me underground.

I learned the taste of silence
from a mouth full of lead,
from all the unsaid sentences
that nested in my head.

They hatched into insects
with lacquered little wings,
and fed on every tender thought
until it stopped becoming things.

My chest became a factory
where mercy went to rust,
where every moving part inside
was packed with powdered dust.

The gears kept grinding softly,
though no worker pulled a chain,
turning love to residue
and oxygen to pain.

I walked through days like quarantine,
sealed in human skin,
smiling with the discipline
of something sick within.

No one saw the damage
underneath my practiced face,
the careful architecture
of a mind erased in place.

I kept my terror folded
like a letter never sent,
creased along the edges
where the worst of me was bent.

My rage did not come screaming,
or split the air in two;
it learned to live in pressure
from all that I’d been through.

But anger does not perish
when denied its proper name;
it concentrates in silence
and teaches blood to blame.

It turns the tongue to phosphorus,
the heartbeat into code,
the body to a warning sign
beside an empty road.

And loneliness—
not absence,
not the cliché of alone—
but a continent of static
where the living voice is stone.

It is being untranslated
by the people standing near,
while your soul pounds on the surface
of a language no one hears.

It is laughing when required,
nodding when expected,
while some inner district
goes dark and undetected.

It is watching yourself disappear
in increments of gray,
not all at once, not mercifully,
but molecule by day.

Fear came dressed in arithmetic,
with numbers for a face,
adding every possible ending
to the math of every place.

It made a chart of consequence.
It made a graph of breath.
It turned each harmless gesture
into forecasts edged with death.

I doubted even morning.
I questioned every floor.
I heard each gentle sentence
mean less than it meant before.

So I became a tripwire,
strung tight and overdrawn,
counting every tiny shift
from midnight into dawn.

Every nerve was overfunded.
Every instinct overpaid.
Every small uncertainty
became a debt I never made.

The absence settled slowly,
without ceremony or proof,
not as something leaving,
but as gravity withdrew.

It did not break me loudly.
It privatized the fall.
It taught me how to vanish
while appearing there for all.

I became a canceled signal,
a station without range,
broadcasting through distortion
that nobody could change.

I became a broken instrument,
tuned to frequencies of strain,
measuring the pressure
of a system built from pain.

Do not call this weakness.
That diagnosis fails.
This is what the spirit does
when every exit scales.

It mutates under pressure.
It adapts beneath disgrace.
It builds a second nervous system
in a contaminated place.

Something in me calcified
around the oldest scream,
hardening the wound-site
into structure, mass, and scheme.

Another part learned function
with the poison in the line,
turning every broken circuit
into evidence of design.

And still, beneath that discipline,
beneath the ironed tone,
there lived a feral frequency
that answered mine alone.

It did not offer comfort.
It did not promise peace.
It only held the ugliness
and refused to grant release.

It knew the private inventory:
the panic, filed and stacked,
the tenderness gone absent,
the self I could not get back.

It knew the brutal ledger
of what I had to pay,
how much of me was spent
so the rest could make the day.

It knew each toxic miracle
I used to stay intact,
each compromise with horror,
every counterfeit contract.

There are forms of devastation
that never learn to show;
they move beneath the posture
where the polished people go.

They do not ask for witness.
They do not seek applause.
They make a law of suffering
and suffer by its laws.

So let the gentle liars
call endurance something clean.
Let them decorate survival
with meanings they have never seen.

I know the actual texture.
I know the private cost.
I know what must be amputated
before a soul is lost.

I know the taste of carrying
a scream that cannot bloom,
a compressed and starving weather
with no permission to consume.

I know how chaos settles
inside a human frame,
when the mouth keeps speaking softly
while the fractures do the same.

I know the ache of staying
when departure has no road,
of dragging one more hour
through a life that overloads.

But something still remains here,
not holy or restored,
not innocent or gentle,
not asking to be adored.

Something grim and carbon-born
has learned to stay composed,
and it speaks in low voltage:

Only the darkness knows.`

export default function Page() {
  return (
    <SmoothScroll>
      <main className="editorial-page relative min-h-screen bg-background">
        <AtmosphericEffects />
        <Threadline />
        <EngagementRail broadcast="only-the-darkness-knows" />
        <BroadcastNav />

        <div className="editorial-content">
          <HalfLifeOfYouContent
            poemSource={poemSource}
            title="ONLY THE DARKNESS KNOWS"
            label="BROADCAST 007"
          />
        </div>
      </main>
    </SmoothScroll>
  )
}

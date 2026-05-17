"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PoemLine, PoemSection, PoemStanza } from './poem-elements'

export function PoemContent() {
  return (
    <div className="px-6 sm:px-8 md:px-16 lg:px-24">
      {/* Movement I: The Breathing */}
      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">
            There are nights
          </PoemLine>
          <PoemLine variant="large" delay={0.1}>
            I feel it breathing again.
          </PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza align="left" className="ml-8 sm:ml-16 md:ml-24">
          <PoemLine variant="whisper">Not the memory.</PoemLine>
          <PoemLine variant="whisper" delay={0.1}>Not exactly.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine>Something older.</PoemLine>
          <PoemLine delay={0.1}>Something buried before language.</PoemLine>
          <PoemLine delay={0.2}>Something that found a room inside me</PoemLine>
          <PoemLine delay={0.3}>and never moved out.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement II: The Mask */}
      <IsolatedLine treatment="confession">
        I tell myself I&apos;m fine.
      </IsolatedLine>

      <PoemSection spacing="normal">
        <PoemStanza align="right">
          <PoemLine variant="compressed">I say it so often</PoemLine>
          <PoemLine variant="compressed" delay={0.1}>even my reflection looks tired of hearing it.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">But trauma is not a ghost</PoemLine>
          <PoemLine variant="large" delay={0.1}>that leaves when morning comes.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine>It stays.</PoemLine>
          <PoemLine delay={0.15}>It learns the shape of your mouth.</PoemLine>
          <PoemLine delay={0.3}>It wears your voice when you speak.</PoemLine>
          <PoemLine delay={0.45}>It sits beside you in the dark</PoemLine>
          <PoemLine delay={0.5}>like it was invited.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement III: The Question */}
      <PoemSection spacing="vast">
        <PoemStanza align="center">
          <PoemLine variant="whisper">And maybe that is what scares me most.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine variant="impact" treatment="haunted">
        How much of me<br />is not me at all.
      </IsolatedLine>

      <PoemSection spacing="wide">
        <PoemStanza align="left" className="space-y-8 sm:space-y-12">
          <div>
            <PoemLine variant="compressed">Just fear</PoemLine>
            <PoemLine variant="compressed" delay={0.1}>dressed up as instinct.</PoemLine>
          </div>
          <div>
            <PoemLine variant="compressed">Just pain</PoemLine>
            <PoemLine variant="compressed" delay={0.1}>taught to stand upright.</PoemLine>
          </div>
          <div>
            <PoemLine variant="compressed">Just a nervous system</PoemLine>
            <PoemLine variant="compressed" delay={0.1}>mistaken for a personality.</PoemLine>
          </div>
        </PoemStanza>
      </PoemSection>

      {/* Movement IV: Survival Mechanisms */}
      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine>I am calm</PoemLine>
          <PoemLine delay={0.1}>because panic became useless.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza align="right">
          <PoemLine>I am careful</PoemLine>
          <PoemLine delay={0.1}>because safety was never free.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">I am strong</PoemLine>
          <PoemLine variant="large" delay={0.1}>because nobody came</PoemLine>
          <PoemLine delay={0.2}>when I was anything else.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement V: Strong */}
      <IsolatedLine variant="impact" treatment="knife">
        Strong.
      </IsolatedLine>

      <PoemSection spacing="normal">
        <PoemStanza align="left">
          <PoemLine variant="whisper">People love that word.</PoemLine>
          <PoemLine variant="whisper" delay={0.1}>They say it like a blessing.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">But strength is just what they call you</PoemLine>
          <PoemLine variant="large" delay={0.1}>when your suffering has become convenient.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-2">
          <PoemLine variant="compressed">When you can still answer the phone.</PoemLine>
          <PoemLine variant="compressed" delay={0.05}>Still make sense.</PoemLine>
          <PoemLine variant="compressed" delay={0.1}>Still carry the room.</PoemLine>
          <PoemLine variant="compressed" delay={0.15}>Still smile with blood in your mouth</PoemLine>
          <PoemLine variant="compressed" delay={0.2}>and call it discipline.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement VI: The Drowning */}
      <PoemSection spacing="wide">
        <PoemStanza>
          <PoemLine>I learned young</PoemLine>
          <PoemLine delay={0.1}>that nobody runs toward the strong one drowning.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza align="right">
          <PoemLine variant="whisper">They only throw more weight</PoemLine>
          <PoemLine variant="whisper" delay={0.1}>and say,</PoemLine>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine treatment="knife">
        &ldquo;You&apos;ve got this.&rdquo;
      </IsolatedLine>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">And I did.</PoemLine>
          <PoemLine variant="whisper" delay={0.2}>God help me,</PoemLine>
          <PoemLine variant="large" delay={0.3}>I did.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement VII: The Carrying */}
      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine>I carried it.</PoemLine>
          <PoemLine delay={0.1}>All of it.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-1">
          <PoemLine variant="compressed">The silence.</PoemLine>
          <PoemLine variant="compressed" delay={0.05}>The fear.</PoemLine>
          <PoemLine variant="compressed" delay={0.1}>The things I never had words for.</PoemLine>
          <PoemLine variant="compressed" delay={0.15}>The years that kept asking more of me</PoemLine>
          <PoemLine variant="compressed" delay={0.2}>than any heart should have survived.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">And somewhere in the middle of all that surviving,</PoemLine>
          <PoemLine variant="large" delay={0.1}>something soft in me went missing.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine variant="whisper" treatment="ghost">
        I don&apos;t know when.
      </IsolatedLine>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine>That&apos;s the worst part.</PoemLine>
          <PoemLine delay={0.1}>I didn&apos;t hear it leave.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine>I only noticed one day</PoemLine>
          <PoemLine delay={0.1}>that the world had gone quiet</PoemLine>
          <PoemLine delay={0.2}>in a way it never came back from.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement VIII: The Wonder */}
      <PoemSection spacing="vast">
        <PoemStanza align="center">
          <PoemLine variant="large">Sometimes I wonder</PoemLine>
          <PoemLine variant="large" delay={0.1}>who I might have been</PoemLine>
          <PoemLine delay={0.2}>if I had been held</PoemLine>
          <PoemLine delay={0.3}>before I learned how to disappear.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-8 sm:space-y-12">
          <PoemLine variant="whisper">Would I have been gentle?</PoemLine>
          <PoemLine variant="whisper" delay={0.1}>Would I have slept through the night?</PoemLine>
          <PoemLine variant="whisper" delay={0.2}>Would I know how to be loved</PoemLine>
          <PoemLine variant="whisper" delay={0.25}>without flinching first?</PoemLine>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine treatment="ghost">
        I don&apos;t know.
      </IsolatedLine>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine>I don&apos;t know where the wound ends anymore.</PoemLine>
          <PoemLine delay={0.1}>I don&apos;t know which parts of me are real</PoemLine>
          <PoemLine delay={0.2}>and which parts are just armor</PoemLine>
          <PoemLine delay={0.3}>that got lonely enough</PoemLine>
          <PoemLine delay={0.4}>to call itself skin.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement IX: The Child */}
      <PoemSection spacing="vast">
        <PoemStanza align="center">
          <PoemLine variant="large">There is a child inside me</PoemLine>
          <PoemLine variant="large" delay={0.1}>still standing in the hallway.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-1">
          <PoemLine variant="compressed">Still waiting.</PoemLine>
          <PoemLine variant="compressed" delay={0.1}>Still listening for footsteps</PoemLine>
          <PoemLine variant="compressed" delay={0.2}>that never learned his name.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="right">
          <PoemLine>And I hate that he is still there.</PoemLine>
          <PoemLine delay={0.1}>I hate that he still hopes.</PoemLine>
          <PoemLine variant="whisper" delay={0.2}>After everything.</PoemLine>
          <PoemLine variant="whisper" delay={0.3}>After all this time.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine variant="impact" treatment="submerged">
        I should be stone by now.
      </IsolatedLine>

      <PoemSection spacing="normal">
        <PoemStanza align="center">
          <PoemLine variant="whisper">Maybe I am.</PoemLine>
          <PoemLine delay={0.1}>Maybe this is what stone feels like</PoemLine>
          <PoemLine delay={0.2}>before it admits</PoemLine>
          <PoemLine delay={0.3}>it was once something living.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement X: The Hollowing */}
      <PoemSection spacing="wide">
        <PoemStanza>
          <PoemLine variant="large">Because the years do something to you.</PoemLine>
          <PoemLine delay={0.1}>They hollow you carefully.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-6 sm:space-y-8">
          <div>
            <PoemLine variant="compressed">They teach you how to become useful</PoemLine>
            <PoemLine variant="compressed" delay={0.1}>instead of understood.</PoemLine>
          </div>
          <div>
            <PoemLine variant="compressed">They teach you how to be needed</PoemLine>
            <PoemLine variant="compressed" delay={0.1}>without ever being rescued.</PoemLine>
          </div>
          <div>
            <PoemLine variant="compressed">They teach you that if you bleed quietly enough,</PoemLine>
            <PoemLine variant="compressed" delay={0.1}>people will call it grace.</PoemLine>
          </div>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine treatment="confession">
        So I became graceful.
      </IsolatedLine>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-2">
          <PoemLine>I became reliable.</PoemLine>
          <PoemLine delay={0.1}>I became the one who could take it.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-1">
          <PoemLine variant="compressed">The one who could hold the line.</PoemLine>
          <PoemLine variant="compressed" delay={0.05}>Hold the room.</PoemLine>
          <PoemLine variant="compressed" delay={0.1}>Hold the grief.</PoemLine>
          <PoemLine variant="compressed" delay={0.15}>Hold the door open</PoemLine>
          <PoemLine variant="compressed" delay={0.2}>for everyone leaving.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">And no one asked</PoemLine>
          <PoemLine variant="large" delay={0.1}>what it cost me</PoemLine>
          <PoemLine delay={0.2}>to keep standing there.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza align="right">
          <PoemLine variant="whisper">No one saw</PoemLine>
          <PoemLine variant="whisper" delay={0.1}>the house inside me burning</PoemLine>
          <PoemLine variant="whisper" delay={0.2}>because I kept the windows clean.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement XI: The Emptiness */}
      <PoemSection spacing="vast">
        <PoemStanza align="center">
          <PoemLine variant="large">There are nights</PoemLine>
          <PoemLine variant="large" delay={0.1}>I sit in the dark</PoemLine>
          <PoemLine variant="large" delay={0.2}>and feel nothing.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine variant="whisper">Not peace.</PoemLine>
          <PoemLine delay={0.1}>Nothing like peace.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-4">
          <div>
            <PoemLine variant="compressed">Just the silence</PoemLine>
            <PoemLine variant="compressed" delay={0.1}>after too much screaming.</PoemLine>
          </div>
          <div>
            <PoemLine variant="compressed">Just the ash</PoemLine>
            <PoemLine variant="compressed" delay={0.1}>after the fire forgets</PoemLine>
            <PoemLine variant="compressed" delay={0.2}>what it was trying to save.</PoemLine>
          </div>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">And somehow</PoemLine>
          <PoemLine variant="large" delay={0.1}>that emptiness scares me</PoemLine>
          <PoemLine delay={0.2}>more than the pain ever did.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine>Pain still wanted something.</PoemLine>
          <PoemLine delay={0.1}>Pain still reached.</PoemLine>
          <PoemLine delay={0.2}>Pain still believed</PoemLine>
          <PoemLine delay={0.3}>someone might hear it.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine variant="impact" treatment="submerged">
        But this?
      </IsolatedLine>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-4">
          <PoemLine variant="compressed">This is colder.</PoemLine>
          <PoemLine variant="compressed" delay={0.1}>This is the dark becoming familiar.</PoemLine>
          <PoemLine variant="compressed" delay={0.2}>This is the heart</PoemLine>
          <PoemLine variant="compressed" delay={0.3}>learning not to knock anymore.</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Movement XII: The Hope */}
      <PoemSection spacing="vast">
        <PoemStanza align="center">
          <PoemLine variant="large">And still,</PoemLine>
          <PoemLine variant="whisper" delay={0.1}>some ruined little part of me</PoemLine>
          <PoemLine variant="large" delay={0.2}>keeps listening.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine>Still waiting for someone</PoemLine>
          <PoemLine delay={0.1}>to notice the light under the door.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine>Still hoping someone</PoemLine>
          <PoemLine delay={0.1}>will step into all this blackness</PoemLine>
          <PoemLine delay={0.2}>without needing me</PoemLine>
          <PoemLine delay={0.3}>to make it beautiful first.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-6 sm:space-y-8">
          <PoemLine variant="whisper">Not to fix me.</PoemLine>
          <PoemLine variant="whisper" delay={0.1}>Not to praise me.</PoemLine>
          <PoemLine variant="whisper" delay={0.2}>Not to tell me I&apos;m strong.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine variant="impact" treatment="haunted">
        Just to stay.
      </IsolatedLine>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine>Just to see the wreckage</PoemLine>
          <PoemLine delay={0.1}>and not turn it into a lesson.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine>Just to hear the quiet breaking</PoemLine>
          <PoemLine delay={0.1}>behind my ribs</PoemLine>
          <PoemLine delay={0.2}>and understand</PoemLine>
        </PoemStanza>
      </PoemSection>

      <IsolatedLine variant="large" treatment="ember">
        there is still someone in here.
      </IsolatedLine>

      {/* Movement XIII: The End */}
      <PoemSection spacing="vast">
        <PoemStanza align="center" className="space-y-8 sm:space-y-12">
          <PoemLine variant="whisper">There is still someone in here.</PoemLine>
          <PoemLine variant="whisper" delay={0.3}>I think.</PoemLine>
          <PoemLine variant="whisper" delay={0.6}>I hope.</PoemLine>
          <PoemLine variant="whisper" delay={0.9} treatment="ghost">I don&apos;t know.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine>And maybe that is the part</PoemLine>
          <PoemLine delay={0.1}>that hurts the most.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza className="space-y-4">
          <PoemLine variant="compressed">Not that I broke.</PoemLine>
          <PoemLine variant="compressed" delay={0.1}>Not that I was left.</PoemLine>
          <PoemLine variant="compressed" delay={0.2}>Not even that I learned</PoemLine>
          <PoemLine variant="compressed" delay={0.3}>how to live without expecting rescue.</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="wide">
        <PoemStanza align="center">
          <PoemLine variant="large">But that after all these years</PoemLine>
          <PoemLine variant="large" delay={0.1}>of becoming hard enough</PoemLine>
          <PoemLine delay={0.2}>to survive this world,</PoemLine>
        </PoemStanza>
      </PoemSection>

      <PoemSection spacing="normal">
        <PoemStanza>
          <PoemLine>I still wake up</PoemLine>
          <PoemLine delay={0.1}>somewhere inside the dark</PoemLine>
          <PoemLine delay={0.2}>wondering</PoemLine>
        </PoemStanza>
      </PoemSection>

      {/* Final Line - Maximum Impact */}
      <FinalSection />
    </div>
  )
}

function IsolatedLine({
  children,
  variant = 'isolated',
  treatment,
}: {
  children: React.ReactNode
  variant?: 'isolated' | 'impact' | 'whisper' | 'large'
  treatment?: 'haunted' | 'ghost' | 'knife' | 'confession' | 'submerged' | 'ember'
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const isKnife = treatment === 'knife'
  const isFragile = treatment === 'ghost' || treatment === 'submerged'
  const isHaunted = treatment === 'haunted' || treatment === 'ember'

  const opacity = useTransform(
    scrollYProgress,
    isKnife ? [0, 0.28, 1] : [0, 0.38, 0.72, 1],
    isKnife ? [0, 1, 1] : [0, 0.82, 1, isFragile ? 0.84 : 0.9]
  )
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [isKnife ? 0.98 : 0.96, 1, 1])
  const driftY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isKnife ? [6, 0, 0] : [isFragile ? 28 : 18, 0, isFragile ? -14 : -6]
  )
  const driftX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isKnife ? [0, 0, 0] : [isFragile ? -10 : -4, 0, isFragile ? 8 : 3]
  )

  const variantStyles = {
    isolated: 'font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-moonlight leading-none italic',
    impact: 'font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory tracking-tight leading-none',
    whisper: 'font-sans text-lg sm:text-xl tracking-wide text-silver/80 font-extralight',
    large: 'font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-tight',
  }

  const treatmentStyles = {
    haunted: 'haunted-line',
    ghost: 'ghost-text',
    knife: 'knife-line',
    confession: 'fading-confession',
    submerged: 'submerged-text',
    ember: 'ember-text',
  }

  const sectionStyles = {
    haunted: 'emotional-field haunted-field min-h-[72vh] sm:min-h-[82vh]',
    ghost: 'emotional-field fragile-field min-h-[78vh] sm:min-h-[88vh]',
    knife: 'emotional-field knife-field min-h-[46vh] sm:min-h-[56vh]',
    confession: 'emotional-field confession-field min-h-[66vh] sm:min-h-[76vh]',
    submerged: 'emotional-field fragile-field submerged-field min-h-[78vh] sm:min-h-[90vh]',
    ember: 'emotional-field ember-field min-h-[86vh] sm:min-h-[96vh]',
  }

  return (
    <section
      ref={ref}
      className={`relative flex items-center justify-center px-6 ${treatment ? sectionStyles[treatment] : 'min-h-[50vh] sm:min-h-[60vh]'}`}
    >
      {treatment && treatment !== 'knife' && <div className="emotional-haze" aria-hidden="true" />}
      <motion.p
        style={{ 
          opacity, 
          scale,
          y: driftY,
          x: driftX,
        }}
        className={`text-exclusion emotional-text relative z-10 ${variantStyles[variant]} ${treatment ? treatmentStyles[treatment] : ''} ${isFragile || isHaunted ? 'text-left' : 'text-center'} max-w-4xl text-balance`}
      >
        {children}
      </motion.p>
    </section>
  )
}

function FinalSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6])

  return (
    <section
      ref={ref}
      className="min-h-[100vh] flex flex-col items-center justify-center px-6 relative"
    >
      {/* Ambient glow for final section */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.15 0.02 220 / 0.3), transparent)',
        }}
        aria-hidden="true"
      />
      
      <motion.div style={{ opacity }} className="text-center relative z-10">
        <p className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-moonlight leading-tight italic mb-8">
          if this is living,
        </p>
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-silver/80 font-light">
          why does it feel
        </p>
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-silver/80 font-light">
          so much like being buried alive?
        </p>
      </motion.div>

      {/* Empty space for contemplation */}
      <div className="h-[30vh]" />

      {/* Minimal footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-12 text-center"
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-silver/30">
          E. Blackwood
        </p>
      </motion.footer>
    </section>
  )
}

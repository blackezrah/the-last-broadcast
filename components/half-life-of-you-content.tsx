"use client"

import { PoemLine, PoemSection, PoemStanza } from './poem-elements'

function getSectionSpacing(index: number, stanza: string): 'normal' | 'wide' | 'vast' {
  const lineCount = stanza.split('\n').length
  const lower = stanza.toLowerCase()

  if (
    index === 0 ||
    lower.includes('“why so sad, my love?”') ||
    lower.includes('then without warning') ||
    lower.includes('not as memory') ||
    lower.includes('as impact') ||
    lower.includes('and maybe that’s the half-life of you')
  ) {
    return 'vast'
  }

  if (lineCount <= 2 || lower.includes('stay.')) {
    return 'wide'
  }

  return 'normal'
}

function getAlignment(index: number): 'left' | 'center' | 'right' {
  if (index % 7 === 0) return 'center'
  if (index % 5 === 0) return 'right'
  return 'left'
}

function getVariant(stanza: string): 'default' | 'large' | 'whisper' | 'compressed' | 'impact' {
  const normalized = stanza.toLowerCase()

  if (
    normalized.includes('“why so sad, my love?”') ||
    normalized.includes('not as memory') ||
    normalized.includes('as impact') ||
    normalized.includes('and maybe that’s the half-life of you')
  ) {
    return 'impact'
  }

  if (stanza.length < 28) return 'large'
  if (stanza.length > 150) return 'compressed'

  return 'default'
}

export function HalfLifeOfYouContent({
  poemSource,
  title = 'THE HALF-LIFE OF YOU',
  label = 'BROADCAST 003',
}: {
  poemSource: string
  title?: string
  label?: string
}) {
  const stanzas = poemSource.replace(/\r\n/g, '\n').split(/\n{2,}/)

  return (
    <div className="px-6 sm:px-8 md:px-16 lg:px-24">
      <PoemSection spacing="vast">
        <PoemStanza align="center" className="max-w-5xl">
          <PoemLine variant="whisper" className="uppercase tracking-[0.45em] not-italic">
            E. BLACKWOOD
          </PoemLine>
          <PoemLine variant="impact" treatment="haunted" delay={0.2}>
            {title}
          </PoemLine>
          <PoemLine variant="whisper" className="uppercase tracking-[0.42em] text-silver/45" delay={0.35}>
            {label}
          </PoemLine>
        </PoemStanza>
      </PoemSection>

      {stanzas.map((stanza, stanzaIndex) => {
        const lines = stanza.split('\n')
        const variant = getVariant(stanza)
        const isImpact = variant === 'impact'

        return (
          <PoemSection
            key={`${stanzaIndex}-${stanza.slice(0, 24)}`}
            spacing={getSectionSpacing(stanzaIndex, stanza)}
          >
            <PoemStanza align={getAlignment(stanzaIndex)}>
              {lines.map((line, lineIndex) => (
                <PoemLine
                  key={`${stanzaIndex}-${lineIndex}-${line}`}
                  variant={variant}
                  treatment={isImpact ? 'haunted' : undefined}
                  delay={Math.min(lineIndex * 0.08, 0.32)}
                  className="half-life-source-line"
                >
                  {line}
                </PoemLine>
              ))}
            </PoemStanza>
          </PoemSection>
        )
      })}

      <div className="h-[120vh]" aria-hidden="true" />
    </div>
  )
}

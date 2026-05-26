import type { CSSProperties } from 'react'

const ambientLineGroups = [
  {
    title: 'If This Is Living',
    lines: [
      'There are nights I feel it breathing again.',
      'Something buried before language.',
      'I tell myself I’m fine.',
      'But trauma is not a ghost',
      'I am calm because panic became useless.',
      'Still smile with blood in your mouth',
      'something soft in me went missing.',
      'there is still someone in here.',
    ],
  },
  {
    title: 'Heavy Like Heaven',
    lines: [
      'They told me suffering would make me stronger.',
      'Nobody talks about the slow extinction of softness.',
      'I used to believe heaven was somewhere above me.',
      'Inside music that hurts for reasons you cannot explain.',
      'But heaven was never light to me.',
      'Heaven felt enormous.',
      'beautiful things end while we are still loving them.',
      'That boy feels so far away now.',
    ],
  },
  {
    title: 'The Half-Life of You',
    lines: [
      'This is what it costs',
      'to watch someone die',
      'The room’s always wrong afterward.',
      'Like the walls remember something they weren’t supposed to witness.',
      'And somewhere inside the silence I hear it again—',
      '“Why so sad, my love?”',
      'Not as memory.',
      'As impact.',
    ],
  },
  {
    title: 'The Trespass',
    lines: [
      'There are rooms inside a person',
      'that are not meant to be entered.',
      'Something under the skin goes white.',
      'The air has fingerprints.',
      'The ceiling becomes a witness',
      'Some doors do not have locks',
      'A trespass.',
      'A breach in the last room.',
    ],
  },
  {
    title: 'Your Love, Like Mold',
    lines: [
      'Cold hands in my bed again',
      'Every doorway feels infected.',
      'Every silence grows teeth.',
      'White noise.',
      'Rotting halos.',
      'You built this whole cathedral out of pity and surveillance.',
      'I was a person before your loneliness turned me into a mirror.',
      'Some disappearances are not tragedies.',
    ],
  },
  {
    title: 'Black Water Lullaby',
    lines: [
      'The river wore the moon',
      'like a wound that wouldn’t close.',
      'Silver trembling on black glass',
      'In the black water—',
      'something beautiful is drowning.',
      'You looked like death made holy by moonlight.',
      'Cold inside my ribs',
      'To the beautiful ruin singing my name through the dark.',
    ],
  },
  {
    title: 'The Shape of My Undoing',
    lines: [
      'I have carried grief like iron in my throat,',
      'I am the slow disaster',
      'that rehearses itself at night.',
      'The part of me no one tried to save.',
      'There is a grief that does not weep.',
      'I have become intimate with endings.',
      'Rage lives in me like a buried bell,',
      'He was overthrown.',
    ],
  },
]

const slotCount = 28

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return value - Math.floor(value)
}

const ambientSlots = Array.from({ length: slotCount }, (_, index) => {
  const group = ambientLineGroups[index % ambientLineGroups.length]
  const lineIndex =
    index < ambientLineGroups.length
      ? 0
      : Math.floor(pseudoRandom(index + 61) * group.lines.length)
  const source = {
    title: group.title,
    line: group.lines[lineIndex].trim(),
  }
  const top = 8 + pseudoRandom(index + 1) * 84
  const left = 4 + pseudoRandom(index + 7) * 86
  const duration = 10 + pseudoRandom(index + 13) * 12
  const delay = -pseudoRandom(index + 19) * duration
  const opacity = 0.038 + pseudoRandom(index + 29) * 0.088
  const drift = 14 + pseudoRandom(index + 37) * 34
  const width = 14 + pseudoRandom(index + 43) * 24

  return {
    ...source,
    style: {
      '--line-top': `${top}%`,
      '--line-left': `${left}%`,
      '--line-duration': `${duration}s`,
      '--line-delay': `${delay}s`,
      '--line-opacity': opacity.toFixed(3),
      '--line-drift': `${drift}px`,
      '--line-width': `${width}rem`,
    } as CSSProperties,
  }
})

export function AmbientPoemLines() {
  return (
    <div className="ambientPoemLines" aria-hidden="true">
      {ambientSlots.map((slot, index) => (
        <span
          key={`${slot.title}-${index}-${slot.line}`}
          className="ambientPoemLine"
          data-broadcast={slot.title}
          style={slot.style}
        >
          {slot.line}
        </span>
      ))}
    </div>
  )
}

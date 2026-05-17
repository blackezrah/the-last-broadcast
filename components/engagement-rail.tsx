"use client"

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Flag, Heart, MessageCircle, Send } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const seededBaseline = {
  heart: 230000,
  comments: 6846,
  reaction: 39600,
  share: 28400,
}

const startingLabels = {
  heart: '230K',
  comments: '6,846',
  reaction: '39.6K',
  share: '28.4K',
}

const storageKeys = {
  increments: 'poem-engagement-real-increments-v2',
  actions: 'poem-engagement-actions-v2',
  comments: 'poem-engagement-comments-v2',
}

type EngagementKey = keyof typeof seededBaseline
type RealIncrements = Record<EngagementKey, number>
type BrowserActions = Partial<Record<'heart' | 'reaction' | 'share', boolean>>

interface LocalComment {
  id: string
  name?: string
  profileIcon?: string
  text: string
  createdAt: string
}

const ambientCommentTexts = [
  'damn',
  'yeah. this one.',
  'i didn’t expect that to hit me like that',
  '@maria wait read this',
  'this is a lot',
  'had to close the app for a sec ngl',
  'oof. the strong one part.',
  '🖤',
  'i hate that i get it',
  'not me reading this in my car like 😐',
  'This is painfully familiar.',
  'I’m not sure I liked being seen this clearly.',
  '@eli this reminded me of what you said',
  'the ending got me',
  'that ‘useful instead of understood’ line is… yeah.',
  '🥲',
  'I need a minute.',
  'this made me feel weirdly quiet',
  'I don’t usually read stuff like this but damn',
  '@ash no pressure but i think you’d feel this',
  'too close',
  'I’m 37 and still trying to explain this to people.',
  'the way this didn’t over-explain it is what got me',
  'this hurt',
  '🕯️',
  'Been there. Still there some days.',
  'I wish this didn’t make sense.',
  '@logan read the last few lines',
  'the silence part. yeah.',
  'this is why i hate being called strong',
  'ok that was heavier than expected',
  'my chest feels weird after reading this',
  'I’m 54. Still waiting for certain things to stop echoing.',
  'no bc this is exactly it',
  'not me pretending i’m fine while reading this',
  '@zoe this made me think of you',
  'I don’t have anything clever to say. This just hurt.',
  'the hallway image got me',
  '🫥',
  'I felt this more than I wanted to.',
  'some lines felt almost too personal',
  'This is the kind of thing I’d save and never tell anyone I saved.',
  '@james this is hard to read but read it',
  'the ‘someone still in here’ part…',
  'i’m gonna go stare at a wall now',
  'That was rough.',
  'this feels like 3am',
  'I don’t know why I’m crying but okay',
  '🥀',
  'whoever wrote this knows.',
]

const ambientNames = [
  'sam',
  'maria',
  'eli',
  'ash',
  'logan',
  'zoe',
  'james',
  'nora',
  'drew',
  'maya',
  'lena',
  'chris',
]

const ambientStartTime = new Date('2026-05-14T07:43:00-04:00').getTime()
const ambientEndTime = new Date('2026-05-17T07:47:00-04:00').getTime()
const ambientWeights = ambientCommentTexts.map((_, index) => {
  if (index === 0) return 0
  return 38 + ((index * 37) % 79)
})
const ambientTotalWeight = ambientWeights.reduce((total, gap) => total + gap, 0)
const ambientDuration = ambientEndTime - ambientStartTime

const ambientComments: LocalComment[] = ambientCommentTexts
  .map((text, index) => {
    const name = ambientNames[index % ambientNames.length]
    const elapsedWeight = ambientWeights
      .slice(0, index + 1)
      .reduce((total, gap) => total + gap, 0)

    return {
      id: `ambient-${index}`,
      name,
      profileIcon: name.slice(0, 2).toUpperCase(),
      text,
      createdAt: new Date(
        ambientStartTime + Math.round((elapsedWeight / ambientTotalWeight) * ambientDuration)
      ).toISOString(),
    }
  })
  .reverse()

const emptyIncrements: RealIncrements = {
  heart: 0,
  comments: 0,
  reaction: 0,
  share: 0,
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const value = window.localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : fallback
  } catch {
    return fallback
  }
}

function formatCount(key: EngagementKey, total: number, realIncrement: number) {
  if (realIncrement === 0) return startingLabels[key]
  return total.toLocaleString('en-US')
}

export function EngagementRail() {
  const [mounted, setMounted] = useState(false)
  const [increments, setIncrements] = useState<RealIncrements>(emptyIncrements)
  const [actions, setActions] = useState<BrowserActions>({})
  const [comments, setComments] = useState<LocalComment[]>([])
  const [commentOpen, setCommentOpen] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [shareCopied, setShareCopied] = useState(false)

  useEffect(() => {
    setIncrements(readJson<RealIncrements>(storageKeys.increments, emptyIncrements))
    setActions(readJson<BrowserActions>(storageKeys.actions, {}))
    setComments(readJson<LocalComment[]>(storageKeys.comments, []))
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    window.localStorage.setItem(storageKeys.increments, JSON.stringify(increments))
  }, [increments, mounted])

  useEffect(() => {
    if (!mounted) return
    window.localStorage.setItem(storageKeys.actions, JSON.stringify(actions))
  }, [actions, mounted])

  useEffect(() => {
    if (!mounted) return
    window.localStorage.setItem(storageKeys.comments, JSON.stringify(comments))
  }, [comments, mounted])

  const totals = useMemo(
    () => ({
      heart: seededBaseline.heart + increments.heart,
      comments: seededBaseline.comments + increments.comments,
      reaction: seededBaseline.reaction + increments.reaction,
      share: seededBaseline.share + increments.share,
    }),
    [increments]
  )

  function incrementOnce(key: 'heart' | 'reaction' | 'share') {
    if (actions[key]) return
    setActions((current) => ({ ...current, [key]: true }))
    setIncrements((current) => ({ ...current, [key]: current[key] + 1 }))
  }

  function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = commentText.trim()
    if (!text) return

    setComments((current) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        text,
        createdAt: new Date().toISOString(),
      },
      ...current,
    ])
    setIncrements((current) => ({ ...current, comments: current.comments + 1 }))
    setCommentText('')
  }

  async function handleShare() {
    const shareData = {
      title: 'If This Is Living',
      text: 'A cinematic editorial poem by E. Blackwood.',
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setShareCopied(true)
        window.setTimeout(() => setShareCopied(false), 1800)
      }
      incrementOnce('share')
    } catch {
      // User-cancelled native share should not count as engagement.
    }
  }

  const items = [
    {
      key: 'heart' as const,
      label: 'Heart',
      icon: Heart,
      active: actions.heart,
      value: formatCount('heart', totals.heart, increments.heart),
      onClick: () => incrementOnce('heart'),
    },
    {
      key: 'comments' as const,
      label: 'Comments',
      icon: MessageCircle,
      active: commentOpen,
      value: formatCount('comments', totals.comments, increments.comments),
      onClick: () => setCommentOpen(true),
    },
    {
      key: 'reaction' as const,
      label: 'Report reaction',
      icon: Flag,
      active: actions.reaction,
      value: formatCount('reaction', totals.reaction, increments.reaction),
      onClick: () => incrementOnce('reaction'),
    },
    {
      key: 'share' as const,
      label: shareCopied ? 'Copied' : 'Share',
      icon: Send,
      active: actions.share,
      value: formatCount('share', totals.share, increments.share),
      onClick: handleShare,
    },
  ]

  return (
    <>
      <aside
        className="engagement-rail"
        aria-label="Editorial engagement"
      >
        {items.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.key}
              type="button"
              className="engagement-button"
              data-active={item.active ? 'true' : 'false'}
              onClick={item.onClick}
              aria-label={`${item.label}: ${item.value}`}
              aria-pressed={item.active ? 'true' : 'false'}
            >
              <Icon className="engagement-icon" aria-hidden="true" />
              <span className="engagement-count">{item.value}</span>
            </button>
          )
        })}
      </aside>

      <Dialog open={commentOpen} onOpenChange={setCommentOpen}>
        <DialogContent className="comments-dialog border-white/10 bg-[#07070a]/95 text-silver shadow-2xl shadow-black/60 backdrop-blur-xl sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-light text-ivory/88">
              Comments
            </DialogTitle>
            <DialogDescription className="font-sans text-sm text-silver/55">
              Leave a quiet note in the dark.
            </DialogDescription>
          </DialogHeader>

          <form className="comments-form" onSubmit={submitComment}>
            <textarea
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
              placeholder="Add a comment..."
              className="comments-textarea"
              rows={4}
            />
            <button type="submit" className="comments-submit">
              <Send className="size-4" aria-hidden="true" />
              Submit
            </button>
          </form>

          <div
            className="comments-list"
            aria-live="polite"
            data-lenis-prevent
            onWheelCapture={(event) => event.stopPropagation()}
            onTouchMoveCapture={(event) => event.stopPropagation()}
          >
            {(comments.length > 0 ? comments : ambientComments).map((comment) => (
              <article key={comment.id} className="comment-item">
                <div className="comment-meta">
                  <span className="comment-avatar" aria-hidden="true">
                    {comment.profileIcon ?? 'EB'}
                  </span>
                  <div>
                    <p className="comment-name">{comment.name ?? 'E. Blackwood Reader'}</p>
                    <time dateTime={comment.createdAt}>
                      {new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      }).format(new Date(comment.createdAt))}
                    </time>
                  </div>
                </div>
                <p className="comment-text">{comment.text}</p>
              </article>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

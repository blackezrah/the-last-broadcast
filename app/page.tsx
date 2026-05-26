import Link from "next/link"

export default function TheLastBroadcastHomepage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#f3f3f0] selection:bg-white/10">
      {/* Atmospheric Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.22)_0_0.7px,transparent_0.9px),radial-gradient(circle_at_72%_46%,rgba(255,255,255,0.16)_0_0.6px,transparent_0.85px),radial-gradient(circle_at_41%_78%,rgba(255,255,255,0.12)_0_0.5px,transparent_0.75px)] [background-size:38px_38px,54px_54px,29px_29px]" />
      </div>

      {/* Spider Silk Thread */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-px -translate-x-1/2 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/20 to-white/0 blur-[0.4px] animate-pulse" />
      </div>

      {/* Navigation */}
      <header className="relative z-20 flex items-center justify-between px-8 py-8 md:px-16">
        <div className="tracking-[0.35em] text-[11px] uppercase text-white/40">
          The Last Broadcast
        </div>

        <nav className="flex items-center gap-8 text-sm text-white/35">
          <a href="#broadcasts" className="transition hover:text-white/70">
            Broadcasts
          </a>
          <a href="#about" className="transition hover:text-white/70">
            About
          </a>
          <a href="#archive" className="transition hover:text-white/70">
            Archive
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[90vh] flex-col justify-center px-8 pb-24 pt-10 md:px-24">
        <div className="max-w-5xl">
          <div className="mb-8 text-[10px] uppercase tracking-[0.4em] text-white/30">
            Signals from the Quiet Parts of Being Human
          </div>

          <h1 className="max-w-6xl font-serif text-[4rem] leading-[0.9] tracking-[-0.04em] text-white md:text-[8rem]">
            The Last
            <br />
            Broadcast
          </h1>

          <div className="mt-12 max-w-lg space-y-6 text-[1.05rem] leading-relaxed text-white/50 md:text-[1.2rem]">
            <p>
              A cinematic archive of emotional wreckage, midnight thoughts,
              memory fragments, and the quiet architecture of survival.
            </p>

            <p className="italic text-white/30">
              Some things are easier to transmit through darkness.
            </p>
          </div>
        </div>

        {/* Floating Fragments */}
        <div className="pointer-events-none absolute left-[43%] top-[24%] text-white/10 blur-[0.2px]">
          “I tell myself I’m fine.”
        </div>

        <div className="pointer-events-none absolute right-[16%] top-[38%] text-white/10 blur-[0.2px]">
          “Only the dark knows.”
        </div>

        <div className="pointer-events-none absolute bottom-[14%] left-[28%] text-white/10 blur-[0.2px]">
          “there is still someone in here.”
        </div>
      </section>

      {/* Featured Broadcast */}
      <section
        id="broadcasts"
        className="relative z-10 border-t border-white/10 px-8 py-24 md:px-24"
      >
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.4em] text-white/30">
              Latest Transmission
            </div>

            <h2 className="font-serif text-4xl text-white md:text-6xl">
              If This Is Living
            </h2>
          </div>

          <div className="hidden text-sm text-white/25 md:block">
            BROADCAST 001
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-[620px] space-y-8 text-lg leading-relaxed text-white/55">
            <p>
              There are nights I feel it breathing again. Not the memory.
              Something older. Something buried before language.
            </p>

            <p>
              A long-form cinematic editorial piece exploring trauma,
              emotional exhaustion, survival, loneliness, and the unbearable
              weight of becoming “the strong one.”
            </p>

            <Link href="/broadcasts/if-this-is-living" className="group mt-10 flex items-center gap-4 text-sm uppercase tracking-[0.35em] text-white/60 transition hover:text-white">
  Enter Broadcast
  <span className="transition-transform group-hover:translate-x-1">→</span>
</Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-sm">
            <div className="mb-8 text-[10px] uppercase tracking-[0.35em] text-white/25">
              Reader Echoes
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-white/45">
              <p>“this felt way too personal 🖤”</p>
              <p>“I had to put my phone down for a minute.”</p>
              <p>“the strong one part… yeah. that one got me”</p>
              <p>“I’m 42 and this put words to something I’ve carried since I was a kid.”</p>
              <p>“@maria read this when you’re alone later”</p>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section
        id="archive"
        className="relative z-10 border-t border-white/10 px-8 py-24 md:px-24"
      >
        <div className="mb-14 text-[10px] uppercase tracking-[0.4em] text-white/30">
          Archive
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10">
          {[
            { title: "If This Is Living", href: "/broadcasts/if-this-is-living" },
            { title: "Heavy Like Heaven", href: "/broadcasts/heavy-like-heaven" },
            { title: "The Half-Life of You", href: "/broadcasts/the-half-life-of-you" },
            { title: "The Trespass", href: "/broadcasts/the-trespass" },
            { title: "Your Love, Like Mold", href: "/broadcasts/your-love-like-mold" },
            { title: "Black Water Lullaby", href: "/broadcasts/black-water-lullaby" },
            { title: "Only the Dark Knows" },
            { title: "The Shape of My Undoing", href: "/broadcasts/the-shape-of-my-undoing" },
            { title: "Darkness, Familiar" },
          ].map((item, index) => {
            const content = (
              <>
                <div>
                  <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-white/20">
                    BROADCAST {String(index + 1).padStart(3, "0")}
                  </div>

                  <div className="font-serif text-2xl text-white/85 md:text-4xl">
                    {item.title}
                  </div>
                </div>

                <div className="text-white/20 transition group-hover:text-white/60">
                  →
                </div>
              </>
            )

            return item.href ? (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between bg-[#070707] px-8 py-8 transition hover:bg-white/[0.03]"
              >
                {content}
              </Link>
            ) : (
              <div
                key={item.title}
                className="group flex items-center justify-between bg-[#070707] px-8 py-8 transition hover:bg-white/[0.03]"
              >
                {content}
              </div>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="relative z-10 border-t border-white/10 px-8 py-20 md:px-24"
      >
        <div className="max-w-3xl space-y-8 text-white/40">
          <div className="text-[10px] uppercase tracking-[0.35em] text-white/25">
            About
          </div>

          <p className="text-lg leading-relaxed">
            The Last Broadcast is a digital editorial archive dedicated to the
            emotional interior of being human — the quiet things, the haunted
            things, the pieces people carry without language.
          </p>

          <div className="pt-10 text-sm text-white/20">
            Some signals are meant to find you late at night.
          </div>
        </div>
      </footer>
    </main>
  )
}

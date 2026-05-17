export function Threadline() {
  return (
    <div className="threadline-layer" aria-hidden="true">
      <svg
        className="threadline-svg"
        viewBox="0 0 120 1000"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <filter id="thread-soften" x="-60%" y="-10%" width="220%" height="120%">
            <feGaussianBlur stdDeviation="0.45" result="soft" />
            <feMerge>
              <feMergeNode in="soft" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="thread-glint" x="-80%" y="-20%" width="260%" height="140%">
            <feGaussianBlur stdDeviation="0.2" />
          </filter>
        </defs>

        <path
          className="threadline-thread threadline-thread-soft"
          d="M60.7 0 C58.9 86 62.2 151 59.5 224 C57.8 306 62.8 370 60.2 444 C58.4 519 61.7 594 59.8 668 C57.9 748 62.4 827 60.4 1000"
          pathLength="1000"
          filter="url(#thread-soften)"
        />
        <path
          className="threadline-thread threadline-thread-core"
          d="M60.2 0 C59.1 92 61.6 162 60.1 231 C58.7 312 62.0 384 59.7 461 C58.8 548 61.5 632 60.0 707 C58.6 798 61.9 884 60.6 1000"
          pathLength="1000"
        />
        <path
          className="threadline-thread threadline-thread-highlight"
          d="M60.45 0 C59.4 92 61.2 162 59.95 231 C59.0 312 61.7 384 60.0 461 C59.0 548 61.25 632 60.15 707 C58.95 798 61.55 884 60.35 1000"
          pathLength="1000"
        />
        <path
          className="threadline-thread threadline-shimmer-travel"
          d="M60.45 0 C59.4 92 61.2 162 59.95 231 C59.0 312 61.7 384 60.0 461 C59.0 548 61.25 632 60.15 707 C58.95 798 61.55 884 60.35 1000"
          pathLength="1000"
          filter="url(#thread-glint)"
        />
        <path
          className="threadline-thread threadline-shimmer-travel threadline-shimmer-travel-late"
          d="M60.1 0 C59.0 92 61.4 162 60.0 231 C58.9 312 61.9 384 59.85 461 C58.9 548 61.4 632 59.95 707 C58.7 798 61.75 884 60.25 1000"
          pathLength="1000"
          filter="url(#thread-glint)"
        />
        <path
          className="threadline-glints"
          d="M60.4 76 C60.1 92 60.8 103 60.4 119 M59.8 296 C59.4 313 60.2 326 59.9 341 M60.5 528 C60.2 542 60.9 556 60.5 570 M59.9 786 C59.6 803 60.4 817 60.0 831"
          pathLength="240"
          filter="url(#thread-glint)"
        />
        <g className="threadline-dot-glints" filter="url(#thread-glint)">
          <circle className="threadline-dot threadline-dot-1" cx="60.35" cy="118" r="0.72" />
          <circle className="threadline-dot threadline-dot-2" cx="59.75" cy="284" r="0.56" />
          <circle className="threadline-dot threadline-dot-3" cx="60.25" cy="437" r="0.68" />
          <circle className="threadline-dot threadline-dot-4" cx="59.95" cy="612" r="0.52" />
          <circle className="threadline-dot threadline-dot-5" cx="60.45" cy="771" r="0.64" />
          <circle className="threadline-dot threadline-dot-6" cx="60.15" cy="904" r="0.5" />
        </g>
      </svg>
    </div>
  )
}

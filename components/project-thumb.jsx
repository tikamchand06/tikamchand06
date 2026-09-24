const compositions = [
  { shapes: "orbit", rotate: -8 },
  { shapes: "stack", rotate: 6 },
  { shapes: "arc", rotate: -4 },
  { shapes: "grid", rotate: 8 },
  { shapes: "wave", rotate: -6 },
]

export function ProjectThumb({ index, className }) {
  const hue = (index % 5) + 1
  const { shapes, rotate } = compositions[index % compositions.length]
  const from = `var(--hue-${hue}-from)`
  const to = `var(--hue-${hue}-to)`
  const id = `thumb-${index}`

  return (
    <div
      className={className}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden
    >
      <svg
        viewBox="0 0 320 180"
        className="size-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <g transform={`rotate(${rotate} 160 90)`} fill={`url(#${id}-fade)`}>
          {shapes === "orbit" ? (
            <>
              <circle cx="120" cy="90" r="62" fillOpacity="0.5" />
              <circle cx="205" cy="70" r="34" />
              <rect
                x="150"
                y="112"
                width="120"
                height="16"
                rx="8"
                fillOpacity="0.7"
              />
            </>
          ) : null}

          {shapes === "stack" ? (
            <>
              <rect x="48" y="36" width="170" height="30" rx="15" />
              <rect
                x="48"
                y="78"
                width="224"
                height="30"
                rx="15"
                fillOpacity="0.5"
              />
              <rect
                x="48"
                y="120"
                width="128"
                height="30"
                rx="15"
                fillOpacity="0.75"
              />
            </>
          ) : null}

          {shapes === "arc" ? (
            <>
              <path d="M40 150a120 120 0 0 1 240 0Z" fillOpacity="0.45" />
              <circle cx="160" cy="62" r="30" />
            </>
          ) : null}

          {shapes === "grid" ? (
            <>
              {[0, 1, 2, 3].map((column) =>
                [0, 1].map((row) => (
                  <rect
                    key={`${column}-${row}`}
                    x={52 + column * 58}
                    y={44 + row * 58}
                    width="44"
                    height="44"
                    rx="14"
                    fillOpacity={0.35 + ((column + row) % 3) * 0.22}
                  />
                ))
              )}
            </>
          ) : null}

          {shapes === "wave" ? (
            <>
              <path
                d="M20 118c40-46 80 30 120-16s80 30 160-24"
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.55"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <circle cx="238" cy="58" r="26" />
            </>
          ) : null}
        </g>
      </svg>
    </div>
  )
}

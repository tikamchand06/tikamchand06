"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog } from "@base-ui/react/dialog"
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function ProjectScreenshots({
  name,
  screenshots,
  limit = 4,
  gridClassName = "grid-cols-4 gap-2",
  thumbClassName = "aspect-[4/3] rounded-xs",
  sizes = "96px",
}) {
  const [active, setActive] = React.useState(null)
  const count = screenshots.length
  const previews = screenshots.slice(0, limit)
  const extra = count - previews.length

  const step = React.useCallback(
    (delta) => setActive((index) => (index + delta + count) % count),
    [count]
  )

  function onKeyDown(event) {
    if (event.key === "ArrowRight") step(1)
    if (event.key === "ArrowLeft") step(-1)
  }

  return (
    <Dialog.Root
      open={active !== null}
      onOpenChange={(open) => !open && setActive(null)}
    >
      <ul className={cn("relative z-10 grid", gridClassName)}>
        {previews.map((src, index) => {
          const isLast = index === previews.length - 1 && extra > 0

          return (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "relative block w-full overflow-hidden border border-border bg-muted transition-transform duration-[var(--motion-fast)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary",
                  thumbClassName
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  unoptimized
                  sizes={sizes}
                  className="object-cover object-top"
                />
                {isLast ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/55 text-[13px] font-semibold text-white">
                    +{extra}
                  </span>
                ) : null}
                <span className="sr-only">
                  Open {name} screenshot {index + 1} of {count}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          onKeyDown={onKeyDown}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-150 outline-none data-ending-style:opacity-0 data-starting-style:opacity-0 md:p-10"
        >
          <Dialog.Title className="sr-only">{name} screenshots</Dialog.Title>

          {active !== null ? (
            <div className="relative h-[70vh] w-full max-w-5xl">
              <Image
                src={screenshots[active]}
                alt={`${name} screenshot ${active + 1} of ${count}`}
                fill
                unoptimized
                sizes="100vw"
                className="rounded-md object-contain"
              />
            </div>
          ) : null}

          <div className="flex items-center gap-4 text-white">
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={count < 2}
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 disabled:opacity-40"
            >
              <ChevronLeft aria-hidden className="size-5" />
              <span className="sr-only">Previous screenshot</span>
            </button>
            <p className="meta min-w-16 text-center">
              {active !== null ? active + 1 : 0} / {count}
            </p>
            <button
              type="button"
              onClick={() => step(1)}
              disabled={count < 2}
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 disabled:opacity-40"
            >
              <ChevronRight aria-hidden className="size-5" />
              <span className="sr-only">Next screenshot</span>
            </button>
          </div>

          <Dialog.Close className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
            <XIcon aria-hidden className="size-5" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

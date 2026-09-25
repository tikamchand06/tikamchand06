import Image from "next/image"

import { DeveloperIcon } from "@/components/developer-icon"

const badges = [
  { label: "React", className: "-left-6 top-10", delay: "0s" },
  { label: "Next.js", className: "-right-4 top-1/3", delay: "1.2s" },
  {
    label: "Browser Extensions",
    className: "-left-2 bottom-12",
    delay: "2.4s",
  },
  { label: "AWS", className: "left-1/3 -bottom-4", delay: "0.6s" },
]

export function HeroPortrait({ src, alt }) {
  return (
    <div className="relative mx-auto size-56 md:size-[360px]">
      <div
        aria-hidden
        className="absolute -inset-8 animate-pulse-soft rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--hue-1-from), var(--hue-2-from) 60%, transparent 75%)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 animate-spin-slow rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, var(--hue-1-from), var(--hue-2-from), transparent 55%, var(--hue-1-from))",
        }}
      />

      <div
        aria-hidden
        className="absolute -inset-5 animate-spin-reverse rounded-full border border-dashed border-border"
      />

      <div className="absolute inset-[6px] overflow-hidden rounded-full bg-background p-1.5">
        <Image
          src={src}
          alt={alt}
          width={460}
          height={460}
          priority
          className="size-full rounded-full object-cover"
        />
      </div>

      <div
        aria-hidden
        className="absolute -right-2 bottom-6 flex size-16 items-center justify-center rounded-full border border-border bg-card shadow-2 md:-right-8 md:bottom-16 md:size-24"
      >
        <DeveloperIcon className="size-12 md:size-20" />
      </div>

      {badges.map((badge) => (
        <span
          key={badge.label}
          aria-hidden
          className={`absolute hidden animate-float rounded-full border border-border bg-card/90 px-3.5 py-1.5 text-[13px] font-semibold shadow-2 backdrop-blur md:inline-flex ${badge.className}`}
          style={{ animationDelay: badge.delay }}
        >
          {badge.label}
        </span>
      ))}
    </div>
  )
}

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { HeroPortrait } from "@/components/hero-portrait"
import { ProjectGrid } from "@/components/project-grid"
import { about, featuredProjects, profile, stack } from "@/lib/content"

const hiddenOnHome = new Set(["shadcn/ui", "Material UI"])

const marquee = [...new Set(stack.flatMap((group) => group.items))]
  .filter((item) => !hiddenOnHome.has(item))
  .slice(0, 14)

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="aurora pointer-events-none absolute -inset-x-40 -top-40 h-[520px]"
        />

        <div className="shell relative grid items-center gap-12 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-[1fr_auto]">
          <div>
            {profile.available ? (
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[14px] font-semibold shadow-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Available for new work
              </p>
            ) : null}

            <h1 className="display mt-8 max-w-4xl text-title text-balance md:text-display">
              I build <span className="text-gradient">software</span> for the
              web
            </h1>

            <p className="mt-8 max-w-xl text-lead text-pretty text-muted-foreground">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/my-work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform duration-[var(--motion-fast)] hover:-translate-y-0.5"
              >
                See my work
                <ArrowRight aria-hidden className="size-4" />
              </Link>
              <Link
                href="/contact-me"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold transition-colors duration-[var(--motion-fast)] hover:bg-muted"
              >
                Get in touch
              </Link>
            </div>

            <ul className="mt-14 flex flex-wrap gap-2">
              {marquee.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-[13px] font-semibold text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-first lg:order-none lg:pr-6">
            <HeroPortrait src={profile.photo} alt={profile.name} />
          </div>
        </div>
      </section>

      <section className="shell py-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="meta text-muted-foreground">Selected work</p>
            <h2 className="display mt-3 text-heading">Recent projects</h2>
          </div>

          <Link
            href="/my-work"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-transform duration-[var(--motion-fast)] hover:translate-x-0.5"
          >
            All projects
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </div>

        <div className="mt-10">
          <ProjectGrid projects={featuredProjects} label="Featured projects" />
        </div>
      </section>

      <section className="shell py-20">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-8 shadow-2 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <p className="meta text-muted-foreground">About</p>
            <p className="mt-5 max-w-2xl text-lead text-pretty">{about[0]}</p>
          </div>

          <Link
            href="/about-me"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors duration-[var(--motion-fast)] hover:bg-muted"
          >
            More about me
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

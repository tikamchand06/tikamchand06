import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { ProjectGrid } from "@/components/project-grid"
import {
  about,
  education,
  experience,
  featuredProjects,
  profile,
  projects,
  stack,
} from "@/lib/content"

// First full-time role began Jul 2016
const careerStart = 2016

const aboutStats = [
  {
    label: "Experience",
    value: `${new Date().getFullYear() - careerStart}+ years`,
  },
  { label: "At UXArmy", value: "Since 2017" },
  { label: "Shipped", value: `${projects.length} projects` },
]

export const metadata = {
  title: "About Me",
  description: "Who I am and what I build with.",
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="aurora pointer-events-none absolute -inset-x-40 -top-48 h-[440px] opacity-70"
        />

        <div className="shell relative pt-16 pb-16 md:pt-20">
          <p className="meta text-muted-foreground">About Me</p>
          <h1 className="display mt-4 max-w-3xl text-title text-balance">
            {profile.role} building{" "}
            <span className="text-gradient">for the web</span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={460}
              height={460}
              priority
              className="aspect-square w-full max-w-[280px] rounded-2xl object-cover shadow-glow"
            />

            <div className="space-y-6">
              <p className="text-lead text-pretty">{about[0]}</p>
              {about.slice(1).map((paragraph) => (
                <p key={paragraph} className="text-body text-muted-foreground">
                  {paragraph}
                </p>
              ))}

              <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="meta text-muted-foreground">{stat.label}</dt>
                    <dd className="display mt-1 text-subhead">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-12">
        <p className="meta text-muted-foreground">Experience</p>
        <h2 className="display mt-3 text-heading">Where I've worked</h2>

        <ol className="mt-10 space-y-6">
          {experience.map((job) => (
            <li
              key={job.company}
              className="rounded-xl border border-border bg-card p-6 shadow-2 md:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="display text-subhead">
                  {job.role}{" "}
                  <span className="text-muted-foreground">
                    at {job.company}
                  </span>
                </h3>
                <p className="meta text-muted-foreground">{job.period}</p>
              </div>

              <ul className="mt-5 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-body text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-dashed border-border p-6 md:px-8">
            <h3 className="display text-subhead">
              {education.degree}{" "}
              <span className="text-muted-foreground">
                at {education.school}
              </span>
            </h3>
            <p className="meta text-muted-foreground">{education.period}</p>
          </li>
        </ol>
      </section>

      <section className="shell py-12">
        <p className="meta text-muted-foreground">Stack</p>
        <h2 className="display mt-3 text-heading">What I build with</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group, index) => (
            <div
              key={group.group}
              className="rounded-xl border border-border bg-card p-6 shadow-2"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="size-3 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, var(--hue-${(index % 5) + 1}-from), var(--hue-${(index % 5) + 1}-to))`,
                  }}
                />
                <h3 className="display text-subhead">{group.group}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-muted px-3 py-1 text-[13px] font-semibold text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-12">
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
    </>
  )
}

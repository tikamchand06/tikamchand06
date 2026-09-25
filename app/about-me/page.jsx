import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, GraduationCap } from "lucide-react"

import { ProjectGrid } from "@/components/project-grid"
import { cn } from "@/lib/utils"
import {
  about,
  education,
  experience,
  featuredProjects,
  profile,
  projects,
  stack,
} from "@/lib/content"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata, personSchema } from "@/lib/seo"

// First full-time role began Jul 2016
const careerStart = 2016

const aboutStats = [
  {
    label: "Experience",
    value: `${new Date().getFullYear() - careerStart}+ years`,
  },
  { label: "At UXArmy", value: "Since 2017" },
  { label: "Shipped", value: `${projects.length}+ projects` },
]

export const metadata = pageMetadata({
  title: "About Me",
  description: `${profile.name}: software engineer in Jaipur, India, with 10+ years building web apps and browser extensions.`,
  path: "/about-me",
})

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@type": "ProfilePage",
          url: `${profile.url}/about-me`,
          mainEntity: { "@id": personSchema["@id"] },
        }}
      />
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

          <div className="mt-12 grid items-start gap-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-14 lg:gap-20">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={460}
              height={460}
              priority
              className="aspect-[4/5] w-full max-w-[320px] rounded-2xl object-cover shadow-glow ring-1 ring-border ring-offset-4 ring-offset-background md:sticky md:top-28"
            />

            <div className="max-w-2xl space-y-6">
              <p className="text-lead text-pretty">{about[0]}</p>
              {about.slice(1).map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-body leading-relaxed text-pretty text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}

              <dl className="grid grid-cols-3 gap-3 pt-2">
                {aboutStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    style={{ animationDelay: `${index * 90}ms` }}
                    className="group animate-in cursor-default rounded-lg border border-border bg-card/70 p-4 shadow-2 transition-all duration-[var(--motion-normal)] fill-mode-both fade-in slide-in-from-bottom-3 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lift"
                  >
                    <dt className="meta text-muted-foreground">{stat.label}</dt>
                    <dd className="display mt-1.5 text-lg transition-colors duration-[var(--motion-fast)] group-hover:text-primary sm:text-subhead">
                      {stat.value}
                    </dd>
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

        <ol className="relative mt-10 space-y-6 before:absolute before:top-4 before:bottom-4 before:left-[7px] before:w-px before:bg-border md:pl-10 md:before:left-[15px]">
          {experience.map((job) => (
            <li
              key={job.company}
              className="relative rounded-xl border border-border bg-card p-6 shadow-2 transition-all duration-[var(--motion-normal)] hover:border-primary/30 hover:shadow-lift md:p-8"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute top-8 -left-[31px] hidden size-3 rounded-full ring-4 ring-background md:block",
                  job.period.includes("Present") ? "bg-primary" : "bg-border"
                )}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="display text-subhead">
                  {job.role}{" "}
                  <span className="text-muted-foreground">
                    at {job.company}
                  </span>
                </h3>
                <p className="meta flex items-center gap-2 text-muted-foreground">
                  {job.period.includes("Present") ? (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                      Current
                    </span>
                  ) : null}
                  {job.period}
                </p>
              </div>

              <ul className="mt-5 max-w-3xl space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-body leading-relaxed text-muted-foreground"
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

          <li className="relative flex flex-wrap items-center justify-between gap-2 rounded-xl border border-dashed border-border p-6 md:px-8">
            <span
              aria-hidden
              className="absolute top-1/2 -left-[31px] hidden size-3 -translate-y-1/2 rounded-full bg-border ring-4 ring-background md:block"
            />
            <div className="flex items-start gap-3">
              <GraduationCap
                aria-hidden
                className="mt-1 size-5 shrink-0 text-muted-foreground"
              />
              <h3 className="display text-subhead">
                {education.degree}{" "}
                <span className="text-muted-foreground">
                  at {education.school}
                </span>
              </h3>
            </div>
            <p className="meta text-muted-foreground">{education.period}</p>
          </li>
        </ol>
      </section>

      <section className="shell py-12">
        <p className="meta text-muted-foreground">Stack</p>
        <h2 className="display mt-3 text-heading">What I build with</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {stack.map((group, index) => (
            <div
              key={group.group}
              className={cn(
                "rounded-xl border border-border bg-card p-6 shadow-2 transition-all duration-[var(--motion-normal)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift",
                index === 0
                  ? "sm:col-span-2 lg:col-span-7"
                  : index === 1
                    ? "lg:col-span-5"
                    : "lg:col-span-4"
              )}
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
                    className="cursor-default rounded-full border border-border bg-card/70 px-3 py-1 text-[13px] font-semibold text-muted-foreground transition-all duration-[var(--motion-fast)] hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
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

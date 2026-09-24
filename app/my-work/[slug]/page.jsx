import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

import { ProjectLogo } from "@/components/project-logo"
import { ProjectScreenshots } from "@/components/project-screenshots"
import { ProjectThumb } from "@/components/project-thumb"
import { getProject, projects } from "@/lib/content"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.description || `${project.title}, ${project.client}`,
    openGraph: project.thumbnail ? { images: [project.thumbnail] } : undefined,
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.indexOf(project)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="aurora pointer-events-none absolute -inset-x-40 -top-48 h-[440px] opacity-70"
        />

        <div className="shell relative pt-12 pb-12 md:pt-16">
          <Link
            href="/my-work"
            className="meta inline-flex items-center gap-2 text-muted-foreground transition-colors duration-[var(--motion-fast)] hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="size-4" />
            All projects
          </Link>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
            <ProjectLogo project={project} size={88} className="rounded-2xl" />

            <div>
              <p className="meta text-muted-foreground">
                {project.client} — {project.year}
              </p>
              <h1 className="display mt-3 text-title text-balance">
                {project.title}
              </h1>
            </div>
          </div>

          {project.description ? (
            <p className="mt-8 max-w-2xl text-lead text-pretty text-muted-foreground">
              {project.description}
            </p>
          ) : null}

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-[13px] font-semibold text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform duration-[var(--motion-fast)] hover:-translate-y-0.5"
          >
            Visit project
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section className="shell py-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted shadow-2">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              unoptimized
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <>
              <ProjectThumb index={index} className="size-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ProjectLogo
                  project={project}
                  size={140}
                  className="rounded-3xl border-white/60"
                />
              </div>
            </>
          )}
        </div>
      </section>

      {project.screenshots?.length ? (
        <section className="shell py-12">
          <p className="meta text-muted-foreground">Screenshots</p>
          <h2 className="display mt-3 text-heading">A closer look</h2>

          <div className="mt-10">
            <ProjectScreenshots
              name={project.title}
              screenshots={project.screenshots}
              limit={project.screenshots.length}
              gridClassName="grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              thumbClassName="aspect-[16/10] rounded-xl shadow-2"
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        </section>
      ) : null}

      <nav
        aria-label="More projects"
        className="shell grid gap-4 py-12 sm:grid-cols-2"
      >
        {[
          { project: previous, label: "Previous", Icon: ArrowLeft },
          { project: next, label: "Next", Icon: ArrowRight },
        ].map(({ project: item, label, Icon }) => (
          <Link
            key={label}
            href={`/my-work/${item.slug}`}
            className="lift group flex min-w-0 items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-2 last:sm:flex-row-reverse last:sm:text-right"
          >
            <Icon
              aria-hidden
              className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            />
            <ProjectLogo project={item} size={44} />
            <span className="min-w-0">
              <span className="meta block text-muted-foreground">
                {label} project
              </span>
              <span className="display mt-1 block truncate text-subhead">
                {item.title}
              </span>
            </span>
          </Link>
        ))}
      </nav>
    </>
  )
}

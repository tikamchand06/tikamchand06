import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProjectLogo } from "@/components/project-logo"
import { ProjectScreenshots } from "@/components/project-screenshots"
import { ProjectThumb } from "@/components/project-thumb"

export function ProjectCard({ project, index }) {
  return (
    <li className="lift group relative overflow-hidden rounded-lg border border-border bg-card shadow-2 hover:border-transparent">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            unoptimized
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-[var(--motion-slow)] group-hover:scale-[1.04]"
          />
        ) : (
          <>
            <ProjectThumb index={index} className="size-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ProjectLogo
                project={project}
                size={88}
                className="rounded-lg border-white/60 transition-transform duration-[var(--motion-slow)] group-hover:scale-[1.06]"
              />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {project.image ? <ProjectLogo project={project} size={40} /> : null}
            <h3 className="display text-subhead">
              <Link
                href={`/my-work/${project.slug}`}
                className="transition-colors duration-[var(--motion-fast)] group-hover:text-primary after:absolute after:inset-0"
              >
                {project.title}
              </Link>
            </h3>
          </div>
          <ArrowRight
            aria-hidden
            className="size-5 shrink-0 text-muted-foreground transition-all duration-[var(--motion-fast)] group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>

        <p className="meta text-muted-foreground">
          {project.client} — {project.year}
        </p>

        {project.description ? (
          <p className="line-clamp-2 text-body text-pretty text-muted-foreground">
            {project.description}
          </p>
        ) : null}

        {project.screenshots?.length ? (
          <ProjectScreenshots
            name={project.title}
            screenshots={project.screenshots}
          />
        ) : null}

        <ul className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-[13px] font-semibold text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

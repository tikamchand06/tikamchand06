import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { BrowserIcons } from "@/components/browser-icons"
import { ProjectLogo } from "@/components/project-logo"
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
        {project.description ? (
          <div className="absolute inset-0 flex flex-col gap-4 bg-card/90 p-6 opacity-0 backdrop-blur-md transition-opacity duration-[var(--motion-normal)] group-focus-within:opacity-100 group-hover:opacity-100">
            <p className="line-clamp-4 text-body text-pretty text-foreground">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
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
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div className="flex min-w-0 items-center gap-3">
          <ProjectLogo project={project} size={44} />
          <div className="min-w-0">
            <h3 className="display truncate text-lg">
              <Link
                href={`/my-work/${project.slug}`}
                className="transition-colors duration-[var(--motion-fast)] group-hover:text-primary after:absolute after:inset-0"
              >
                {project.title}
              </Link>
            </h3>
            <p className="meta truncate text-muted-foreground">
              {project.client} — {project.year}
            </p>
          </div>
        </div>
        {project.browsers?.length ? (
          <BrowserIcons browsers={project.browsers} />
        ) : (
          <ArrowRight
            aria-hidden
            className="size-5 shrink-0 text-muted-foreground transition-all duration-[var(--motion-fast)] group-hover:translate-x-0.5 group-hover:text-primary"
          />
        )}
      </div>
    </li>
  )
}

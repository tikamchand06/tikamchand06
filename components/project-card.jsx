import Image from "next/image"
import { Globe } from "lucide-react"

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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 opacity-0 backdrop-blur-md transition-opacity duration-[var(--motion-normal)] group-focus-within:opacity-100 group-hover:opacity-100"
          />
        ) : null}
        {project.description ? (
          <div className="pointer-events-none absolute inset-2 z-10 flex flex-col gap-3 rounded-md border border-border bg-card p-4 opacity-0 shadow-2 transition-opacity duration-[var(--motion-normal)] group-focus-within:opacity-100 group-hover:opacity-100">
            <p className="text-[15px] font-medium leading-relaxed text-pretty text-foreground">
              {project.description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {project.client ? (
              <p className="text-xs text-muted-foreground">
                Built for{" "}
                {project.clientUrl ? (
                  <a
                    href={project.clientUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto font-semibold text-foreground hover:text-primary hover:underline"
                  >
                    {project.client}
                  </a>
                ) : (
                  <span className="font-semibold text-foreground">
                    {project.client}
                  </span>
                )}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div className="flex min-w-0 items-center gap-3">
          <ProjectLogo project={project} size={44} />
          <div className="min-w-0">
            <h3 className="display truncate text-lg">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-[var(--motion-fast)] group-hover:text-primary after:absolute after:inset-0"
              >
                {project.title}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </h3>
            <p className="meta truncate text-muted-foreground">
              {project.category} — {project.year}
            </p>
          </div>
        </div>
        {project.browsers?.length ? (
          <BrowserIcons browsers={project.browsers} />
        ) : (
          <Globe
            aria-label="Website"
            className="size-6 shrink-0 text-muted-foreground"
          />
        )}
      </div>
    </li>
  )
}

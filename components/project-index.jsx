import { ArrowUpRight } from "lucide-react"

export function ProjectIndex({ projects, label, startIndex = 0 }) {
  return (
    <ol aria-label={label} className="border-t border-border">
      {projects.map((project, index) => (
        <li
          key={project.title}
          className="group relative border-b border-border"
        >
          <div className="grid items-baseline gap-x-8 gap-y-3 py-7 md:grid-cols-[3rem_1fr_auto] md:py-9">
            <span className="meta text-muted-foreground">
              {String(startIndex + index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="display text-heading leading-none">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-[var(--motion-fast)] group-hover:text-accent after:absolute after:inset-0"
                >
                  {project.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h3>
              <p className="meta mt-3 text-muted-foreground">
                {project.category} — {project.year}
              </p>
            </div>

            <div className="flex items-center gap-6 md:justify-end">
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {project.tags.map((tag) => (
                  <li key={tag} className="meta text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
              <ArrowUpRight
                aria-hidden
                className="hidden size-5 shrink-0 text-muted-foreground transition-all duration-[var(--motion-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent md:block"
              />
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

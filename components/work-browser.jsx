"use client"

import * as React from "react"

import { ProjectGrid } from "@/components/project-grid"
import { cn } from "@/lib/utils"

export function WorkBrowser({ projects }) {
  const [active, setActive] = React.useState(null)

  const tags = React.useMemo(() => {
    const all = projects.flatMap((project) => project.tags)

    return [...new Set(all)].sort((a, b) => a.localeCompare(b))
  }, [projects])

  const visible = active
    ? projects.filter((project) => project.tags.includes(active))
    : projects

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterChip isActive={!active} onClick={() => setActive(null)}>
          All
        </FilterChip>

        {tags.map((tag) => (
          <FilterChip
            key={tag}
            isActive={active === tag}
            onClick={() => setActive(active === tag ? null : tag)}
          >
            {tag}
          </FilterChip>
        ))}
      </div>

      <p aria-live="polite" className="meta mt-8 text-muted-foreground">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active ? ` — ${active}` : ""}
      </p>

      <div className="mt-6">
        <ProjectGrid projects={visible} label="Projects" />
      </div>
    </div>
  )
}

function FilterChip({ isActive, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-[14px] font-semibold transition-all duration-[var(--motion-fast)]",
        isActive
          ? "border-transparent bg-primary text-primary-foreground shadow-glow"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}

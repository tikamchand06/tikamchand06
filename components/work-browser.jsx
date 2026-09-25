"use client"

import * as React from "react"

import { ProjectGrid } from "@/components/project-grid"
import { cn } from "@/lib/utils"

export function WorkBrowser({ projects }) {
  const [active, setActive] = React.useState(null)

  const tags = React.useMemo(() => {
    const counts = new Map()
    for (const tag of projects.flatMap((project) => project.tags)) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }

    // Most-used tags first so the common filters are visible without scrolling
    return [...counts.keys()].sort(
      (a, b) => counts.get(b) - counts.get(a) || a.localeCompare(b)
    )
  }, [projects])

  const visible = active
    ? projects.filter((project) => project.tags.includes(active))
    : projects

  return (
    <div>
      <div className="-mx-5 flex [scrollbar-width:none] gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
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
        <ProjectGrid
          projects={visible}
          label="Projects"
          activeTag={active}
          onTagClick={(tag) => setActive(active === tag ? null : tag)}
        />
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
        "shrink-0 rounded-full border px-4 py-2.5 text-[14px] font-semibold whitespace-nowrap transition-all duration-[var(--motion-fast)]",
        isActive
          ? "border-transparent bg-primary text-primary-foreground shadow-glow"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}

"use client"

import * as React from "react"
import { X } from "lucide-react"

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
    return [...counts.entries()]
      .sort(([a, x], [b, y]) => y - x || a.localeCompare(b))
      .map(([tag, count]) => ({ tag, count }))
  }, [projects])

  const visible = active
    ? projects.filter((project) => project.tags.includes(active))
    : projects

  return (
    <div>
      <div className="-mx-5 flex [scrollbar-width:none] gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
        <FilterChip
          isActive={!active}
          count={projects.length}
          onClick={() => setActive(null)}
        >
          All
        </FilterChip>

        {tags.map(({ tag, count }) => (
          <FilterChip
            key={tag}
            isActive={active === tag}
            count={count}
            onClick={() => setActive(active === tag ? null : tag)}
          >
            {tag}
          </FilterChip>
        ))}
      </div>

      <div className="mt-8 flex min-h-11 flex-wrap items-center gap-3">
        <p aria-live="polite" className="meta text-muted-foreground">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
          {active ? ` — ${active}` : ""}
        </p>
        {active ? (
          <button
            type="button"
            onClick={() => setActive(null)}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-[14px] font-semibold text-primary transition-colors duration-[var(--motion-fast)] hover:bg-primary/5"
          >
            <X aria-hidden className="size-4" />
            Clear filter
          </button>
        ) : null}
      </div>

      <div
        key={active ?? "all"}
        className="mt-4 animate-in duration-[var(--motion-slow)] fade-in slide-in-from-bottom-2"
      >
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

function FilterChip({ isActive, count, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={cn(
        "group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[14px] font-semibold whitespace-nowrap transition-all duration-[var(--motion-fast)]",
        isActive
          ? "border-transparent bg-primary text-primary-foreground shadow-glow"
          : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-2"
      )}
    >
      {children}
      <span
        className={cn(
          "rounded-full px-1.5 text-[12px] leading-5 tabular-nums",
          isActive
            ? "bg-white/20 text-primary-foreground"
            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
        )}
      >
        {count}
      </span>
    </button>
  )
}

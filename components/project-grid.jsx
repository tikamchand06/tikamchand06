import { ProjectCard } from "@/components/project-card"

export function ProjectGrid({ projects, label, activeTag, onTagClick }) {
  return (
    <ul aria-label={label} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
          activeTag={activeTag}
          onTagClick={onTagClick}
        />
      ))}
    </ul>
  )
}

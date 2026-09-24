import { profile, projects } from "@/lib/content"

const routes = [
  { path: "", priority: 1 },
  { path: "/my-work", priority: 0.8 },
  { path: "/about-me", priority: 0.8 },
  { path: "/contact-me", priority: 0.5 },
]

export default function sitemap() {
  const lastModified = new Date()

  const projectRoutes = projects.map((project) => ({
    path: `/my-work/${project.slug}`,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes].map(({ path, priority }) => ({
    url: `${profile.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }))
}

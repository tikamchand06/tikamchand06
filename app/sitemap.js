import { profile } from "@/lib/content"

// Bump when a page's content changes
const lastModified = new Date("2026-09-26")

const routes = [
  { path: "", priority: 1 },
  { path: "/my-work", priority: 0.8 },
  { path: "/about-me", priority: 0.8 },
  { path: "/contact-me", priority: 0.5 },
]

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${profile.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }))
}

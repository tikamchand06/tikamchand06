import { profile } from "@/lib/content"

const routes = [
  { path: "", priority: 1 },
  { path: "/my-work", priority: 0.8 },
  { path: "/about-me", priority: 0.8 },
  { path: "/contact-me", priority: 0.5 },
]

export default function sitemap() {
  const lastModified = new Date()

  return routes.map(({ path, priority }) => ({
    url: `${profile.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }))
}

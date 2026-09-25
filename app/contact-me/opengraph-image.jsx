import { profile } from "@/lib/content"
import { ogSize, renderOgImage } from "@/lib/og-image"

export const alt = `Contact Me — ${profile.name}`
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage({
    title: "Contact Me",
    subtitle: profile.name,
    tagline: "Available for web apps, SaaS products and browser extensions.",
  })
}

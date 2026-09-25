import { profile } from "@/lib/content"
import { ogSize, renderOgImage } from "@/lib/og-image"

export const alt = `My Work — ${profile.name}`
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage({
    title: "My Work",
    subtitle: profile.name,
    tagline:
      "Products, web apps and browser extensions I've built and shipped.",
  })
}

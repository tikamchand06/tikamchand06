import { profile } from "@/lib/content"
import { ogSize, renderOgImage } from "@/lib/og-image"

export const alt = `About Me — ${profile.name}`
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage({
    title: "About Me",
    subtitle: profile.name,
    tagline:
      "10+ years building web apps and browser extensions, based in Jaipur, India.",
  })
}

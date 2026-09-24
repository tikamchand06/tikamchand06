import { siFacebook, siGithub, siLeetcode, siX, siYoutube } from "simple-icons"
import { Briefcase, Globe } from "lucide-react"

const brandIcons = {
  github: siGithub,
  x: siX,
  leetcode: siLeetcode,
  youtube: siYoutube,
  facebook: siFacebook,
}

const fallbackIcons = {
  linkedin: Briefcase,
}

export function SocialIcon({ name, className }) {
  const brand = brandIcons[name]

  if (brand) {
    return (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
      >
        <path d={brand.path} />
      </svg>
    )
  }

  const Icon = fallbackIcons[name] ?? Globe

  return <Icon aria-hidden className={className} />
}

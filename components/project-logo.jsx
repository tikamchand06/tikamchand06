import Image from "next/image"

import { cn } from "@/lib/utils"

function initials(name) {
  const words = name.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) ?? [name]
  const letters =
    words.length > 1 ? words.slice(0, 2).map((word) => word[0]) : [...name]
  return letters.slice(0, 2).join("").toUpperCase()
}

export function ProjectLogo({ project, size = 40, className }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-xs border border-border bg-white shadow-2",
        className
      )}
      style={{ width: size, height: size }}
    >
      {project.icon ? (
        <Image
          src={project.icon}
          alt=""
          width={size}
          height={size}
          unoptimized
          className="size-[78%] object-contain"
        />
      ) : (
        <span
          className="display text-gradient"
          style={{ fontSize: size * 0.38 }}
        >
          {initials(project.title)}
        </span>
      )}
    </span>
  )
}

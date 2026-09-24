"use client"

import * as React from "react"

import animationData from "@/public/icons/developer.json"

export function DeveloperIcon({ className }) {
  const ref = React.useRef(null)

  React.useEffect(() => {
    let animation
    let cancelled = false

    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled) return
      animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      })
    })

    return () => {
      cancelled = true
      animation?.destroy()
    }
  }, [])

  return <div ref={ref} className={className} aria-hidden />
}

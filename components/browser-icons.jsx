import {
  siBrave,
  siFirefoxbrowser,
  siGooglechrome,
  siOpera,
} from "simple-icons"

const browserIcons = {
  chrome: siGooglechrome,
  firefox: siFirefoxbrowser,
  opera: siOpera,
  brave: siBrave,
}

export function BrowserIcons({ browsers }) {
  const icons = browsers
    .map((name) => [name, browserIcons[name]])
    .filter(([, icon]) => icon)

  return (
    <ul className="flex shrink-0 items-center gap-1.5">
      {icons.map(([name, icon]) => (
        <li key={name}>
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill={`#${icon.hex}`}
            className="size-6"
          >
            <title>{icon.title}</title>
            <path d={icon.path} />
          </svg>
        </li>
      ))}
    </ul>
  )
}

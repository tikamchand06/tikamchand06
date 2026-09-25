"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialIcon } from "@/components/social-icon"
import { cn } from "@/lib/utils"
import { profile } from "@/lib/content"

const links = [
  { href: "/my-work", label: "My Work" },
  { href: "/about-me", label: "About Me" },
  { href: "/contact-me", label: "Contact Me" },
]

const isCurrent = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`)

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="shell flex h-18 items-center justify-between gap-1 py-4 sm:gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span
            aria-hidden
            className="flex size-9 shrink-0 items-center justify-center rounded-sm text-[14px] font-extrabold text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--hue-1-from), var(--hue-2-from))",
            }}
          >
            {profile.initials}
          </span>
          <span className="display truncate text-[16px] min-[400px]:text-[18px] min-[430px]:text-[20px] sm:text-subhead">
            {profile.name}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-0 sm:gap-3">
          <nav
            aria-label="Main"
            className="hidden items-center gap-1 rounded-md bg-muted p-1 lg:flex"
          >
            {links.map((link) => {
              const isActive = isCurrent(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-sm px-4 py-2 text-[15px] font-semibold transition-colors duration-[var(--motion-fast)]",
                    isActive
                      ? "bg-background text-foreground shadow-2"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <ul className="hidden items-center gap-1 xl:flex">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-9 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-[var(--motion-fast)] hover:bg-muted hover:text-foreground"
                >
                  <SocialIcon name={social.icon} className="size-4" />
                  <span className="sr-only">
                    {social.label} (opens in a new tab)
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-11 rounded-sm lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right" className="p-6">
              <SheetTitle className="meta text-muted-foreground">
                Menu
              </SheetTitle>
              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-2">
                {links.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        aria-current={
                          isCurrent(pathname, link.href) ? "page" : undefined
                        }
                        className={cn(
                          "display rounded-md px-4 py-4 text-subhead transition-colors duration-[var(--motion-fast)]",
                          isCurrent(pathname, link.href)
                            ? "bg-secondary text-secondary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        {link.label}
                      </Link>
                    }
                  />
                ))}
              </nav>
              <ul className="mt-8 flex flex-wrap gap-2">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-11 items-center justify-center rounded-sm border border-border"
                    >
                      <SocialIcon name={social.icon} className="size-5" />
                      <span className="sr-only">
                        {social.label} (opens in a new tab)
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

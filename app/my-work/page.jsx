import { WorkBrowser } from "@/components/work-browser"
import { projects } from "@/lib/content"

export const metadata = {
  title: "My Work",
  description: "Projects I have designed and built.",
}

export default function WorkPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -inset-x-40 -top-48 h-[440px] opacity-70"
      />

      <div className="shell relative pt-16 pb-8 md:pt-20 md:pb-20">
        <p className="meta text-muted-foreground">My Work</p>
        <h1 className="display mt-4 text-title">
          My <span className="text-gradient">work</span>
        </h1>
        <p className="mt-6 max-w-xl text-lead text-pretty text-muted-foreground">
          Projects I have designed and built, filtered by the tech behind them.
        </p>

        <div className="mt-12">
          <WorkBrowser projects={projects} />
        </div>
      </div>
    </section>
  )
}

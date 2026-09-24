import { projects as projectData } from "@/lib/projects"

export const profile = {
  name: "Tikam Chand Meghwanshi",
  initials: "TC",
  photo: "/tikam.jpg",
  role: "Software Engineer",
  location: "Jaipur, Rajasthan, India",
  available: true,
  headline: ["I build", "software", "for the web"],
  tagline:
    "Software engineer with 10+ years of experience, based in Jaipur, India. I build SaaS web apps and browser extensions, mostly with React and Next.js.",
  email: "tikamchand06@gmail.com",
  url: "https://tcmhack.in",
  socials: [
    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/tikamchand06",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/tikamchand06",
    },
    { label: "X", icon: "x", href: "https://x.com/tikamchand06" },
    {
      label: "LeetCode",
      icon: "leetcode",
      href: "https://leetcode.com/tikamchand06",
    },
    {
      label: "YouTube",
      icon: "youtube",
      href: "https://www.youtube.com/channel/UCg9Ifg6sJciT0MjuDS2vNsA",
    },
    {
      label: "Facebook",
      icon: "facebook",
      href: "https://facebook.com/tikamchand06",
    },
    { label: "Website", icon: "web", href: "https://www.tcmhack.com" },
  ],
}

export const about = [
  "I'm a software engineer from Jaipur, Rajasthan, with 10+ years of experience building scalable web applications and browser extensions. Since 2017 I've been at UXArmy, building the remote user research platform used by product teams.",
  "At UXArmy I built the Chrome extension that records research sessions, created the Tree Testing and Card Sorting tools from scratch, and led the move of our Unmoderated Testing product from PHP Yii to React. I also helped migrate backend services from Express to NestJS.",
  "Outside of work I run TCMHACK, where I publish small products and browser extensions like Social Media Downloader, Reelferry and Bookmarks Management, plus web development tutorials.",
]

export const experience = [
  {
    role: "Software Engineer",
    company: "UXArmy",
    period: "Aug 2017 — Present",
    points: [
      "Built a Chrome extension that records remote UX research sessions (audio, webcam, screen, clicks and hovers) and uploads them automatically, replacing a third-party tool.",
      "Built UXToolkit, the Tree Testing and Card Sorting tools, from scratch; they became core offerings of the platform.",
      "Led the migration of Unmoderated Testing from PHP Yii to React, and merged UXToolkit into it.",
      "Contributed to moving backend services from Node.js (Express) to NestJS.",
    ],
  },
  {
    role: "Assistant Development Manager",
    company: "Capellasoft Solutions",
    period: "Jul 2016 — Jul 2017",
    points: [
      "Built new features and optimized user interfaces for the company's web application.",
      "Handled testing, bug fixes and SEO work with Google Analytics and Webmaster Tools.",
    ],
  },
]

export const education = {
  degree: "B.Tech in Information Technology",
  school: "Arya College of Engineering & IT, Jaipur",
  period: "2012 — 2016",
}

export const stack = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Ant Design",
      "Material UI",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "PHP",
      "MongoDB",
      "MySQL",
      "Apache",
    ],
  },
  {
    group: "Tooling",
    items: [
      "GitHub",
      "Webpack",
      "Jira",
      "Postman",
      "AI Integrations (Claude, ChatGPT)",
      "Browser Extensions (Chromium & Firefox)",
    ],
  },
  {
    group: "Cloud",
    items: ["AWS", "GCP", "Vercel", "Supabase", "Docker", "Firebase"],
  },
]

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

export const projects = projectData.map((project) => ({
  ...project,
  slug: project.slug || slugify(project.name),
  title: project.name,
  href: project.url,
  client: project.category,
  image: project.thumbnail || undefined,
}))

export const getProject = (slug) =>
  projects.find((project) => project.slug === slug)

export const featuredProjects = projects.slice(0, 3)

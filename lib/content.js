import { projects as projectData } from "@/lib/projects"

export const profile = {
  initials: "TC",
  available: true,
  photo: "/tikam.jpg",
  role: "Software Engineer",
  name: "Tikam Chand Meghwanshi",
  location: "Jaipur, Rajasthan, India",
  headline: ["I build", "software", "for the web"],
  tagline:
    "Software engineer with 10+ years of experience, based in Jaipur, India. I build SaaS web apps and browser extensions, mostly with React and Next.js.",
  phone: "+91 9571447122",
  url: "https://tcmhack.in",
  email: "tikamchand06@gmail.com",
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
  "I'm a software engineer from Jaipur, Rajasthan, with 10+ years of experience building web applications and browser extensions that scale. Since 2017 I've been at UXArmy, working on the remote user research platform product teams use to test with real people.",
  "At UXArmy I built the Chrome extension that records research sessions, created the Tree Testing and Card Sorting tools from scratch, and led the rebuild of our Unmoderated Testing product from PHP Yii to React. I also helped move our backend services from Express to NestJS.",
  "Outside of work I run TCMHACK, where I ship small products and browser extensions such as Reelferry, Social Media Downloader and Bookmarks Management, and write web development tutorials.",
]

export const experience = [
  {
    role: "Software Engineer",
    company: "UXArmy",
    period: "Aug 2017 — Present",
    points: [
      "Built the Chrome extension that records remote research sessions (audio, webcam, screen, clicks and hovers) and uploads them automatically, replacing a third-party tool.",
      "Built UXToolkit, our Tree Testing and Card Sorting tools, from scratch; both became core parts of the platform.",
      "Led the rebuild of Unmoderated Testing from PHP Yii to React, then merged UXToolkit into it as one product.",
      "Helped migrate backend services from Node.js (Express) to NestJS.",
    ],
  },
  {
    role: "Assistant Development Manager",
    company: "Capellasoft Solutions",
    period: "Jul 2016 — Jul 2017",
    points: [
      "Built new features and improved the user interface of the company's web application.",
      "Handled testing and bug fixes, plus SEO using Google Analytics and Webmaster Tools.",
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
    group: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Ant Design",
      "Material UI",
      "Vite",
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
      "Stripe",
    ],
  },
  {
    group: "Browser Extensions",
    items: ["Manifest V3", "Chrome Extension APIs", "Firefox WebExtensions"],
  },
  {
    group: "Tooling",
    items: ["Git", "GitHub", "Webpack", "Docker", "Jira", "Postman"],
  },
  {
    group: "Cloud",
    items: ["AWS", "GCP", "Vercel", "Supabase", "Firebase"],
  },
]

export const projects = projectData.map((project) => ({
  ...project,
  title: project.name,
  href: project.url,
  image: project.thumbnail || undefined,
}))

export const featuredProjects = projects.slice(0, 3)

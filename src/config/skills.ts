export type SkillGroupKey =
  | "frontend"
  | "backend"
  | "mobile"
  | "ia"
  | "databases"
  | "tools"
  | "cms"

export interface SkillGroup {
  key: SkillGroupKey
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Astro",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    key: "backend",
    skills: [
      "PHP",
      "Laravel",
      "Livewire",
      "Filament",
      "CodeIgniter",
      "Node.js",
      "Express",
      "REST APIs",
    ],
  },
  {
    key: "mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    key: "ia",
    skills: [
      "Claude Code",
      "Codex",
      "ChatGPT",
      "OpenAI API",
      "Agentes IA",
      "Automatizaciones",
      "MCP",
    ],
  },
  {
    key: "databases",
    skills: ["MySQL", "Firebase"],
  },
  {
    key: "tools",
    skills: ["Git", "Docker", "AWS", "Google Apps Script"],
  },
  {
    key: "cms",
    skills: ["WordPress", "Tiendanube"],
  },
]

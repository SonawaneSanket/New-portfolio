import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "𝙏𝙎" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Framer Motion", icon: "✦" },
      { name: "GSAP", icon: "🎬" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "NestJS", icon: "🦅" },
      { name: "Node.js", icon: "🟢" },
      { name: "REST APIs", icon: "🔗" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "WebSockets", icon: "⚡" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "WordPress", icon: "🔵" },
      { name: "Stripe", icon: "💳" },
      { name: "Vite", icon: "⚡" },
      { name: "Figma", icon: "🖌️" },
      { name: "Vercel", icon: "▲" },
    ],
  },
];

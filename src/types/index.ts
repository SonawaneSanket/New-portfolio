export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "react" | "nextjs" | "wordpress" | "html" | "landing-page";
  date: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  outcomes: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

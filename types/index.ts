export interface Profile {
  nameFirstLine: string;
  nameSecondLine: string;
  title: string;
  tagline: string;
  summary: string;
  summary2: string;
  avatarUrl: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface ContactLink {
  title: string;
  label: string;
  href: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  employmentType?: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
  featured?: boolean;
}

export interface Technology {
  name: string;
  category: TechnologyCategory;
}

export type TechnologyCategory =
  | "language"
  | "backend"
  | "frontend"
  | "database"
  | "cloud"
  | "devops"
  | "tool";

export interface Skill {
  name: string;
  level: number;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

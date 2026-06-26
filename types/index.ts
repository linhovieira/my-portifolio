export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  avatarUrl: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
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

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
}

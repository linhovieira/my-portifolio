import {
  siSpringboot,
  siPostgresql,
  siRedis,
  siDocker,
  siAngular,
  siReact,
  siTypescript,
  siJavascript,
  siRabbitmq,
  siGitlab,
  siOpenjdk,
  siJsonwebtokens,
  siDotnet,
} from "simple-icons";

export interface TechIconData {
  path: string;
  hex: string;
  title: string;
  fromSimpleIcons: true;
}

export interface TechLucideData {
  lucideIcon: string;
  hex: string;
  fromSimpleIcons: false;
}

export type TechIcon = TechIconData | TechLucideData;

export const techIconMap: Record<string, TechIcon> = {
  Java: { path: siOpenjdk.path, hex: "ED8B00", title: "Java", fromSimpleIcons: true },
  "Spring Boot": { path: siSpringboot.path, hex: siSpringboot.hex, title: siSpringboot.title, fromSimpleIcons: true },
  "REST API": { lucideIcon: "Globe", hex: "0EA5E9", fromSimpleIcons: false },
  PostgreSQL: { path: siPostgresql.path, hex: siPostgresql.hex, title: siPostgresql.title, fromSimpleIcons: true },
  "SQL Server": { lucideIcon: "Database", hex: "CC2927", fromSimpleIcons: false },
  Redis: { path: siRedis.path, hex: siRedis.hex, title: siRedis.title, fromSimpleIcons: true },
  Docker: { path: siDocker.path, hex: siDocker.hex, title: siDocker.title, fromSimpleIcons: true },
  Angular: { path: siAngular.path, hex: "DD0031", title: siAngular.title, fromSimpleIcons: true },
  React: { path: siReact.path, hex: siReact.hex, title: siReact.title, fromSimpleIcons: true },
  TypeScript: { path: siTypescript.path, hex: siTypescript.hex, title: siTypescript.title, fromSimpleIcons: true },
  JavaScript: { path: siJavascript.path, hex: siJavascript.hex, title: siJavascript.title, fromSimpleIcons: true },
  RabbitMQ: { path: siRabbitmq.path, hex: siRabbitmq.hex, title: siRabbitmq.title, fromSimpleIcons: true },
  "GitLab CI/CD": { path: siGitlab.path, hex: siGitlab.hex, title: siGitlab.title, fromSimpleIcons: true },
  "JWT / OAuth2": { path: siJsonwebtokens.path, hex: "7C3AED", title: "JWT / OAuth2", fromSimpleIcons: true },
  "C# (.NET)": { path: siDotnet.path, hex: siDotnet.hex, title: siDotnet.title, fromSimpleIcons: true },
  AWS: { lucideIcon: "Cloud", hex: "FF9900", fromSimpleIcons: false },
  "ECS / Fargate": { lucideIcon: "Container", hex: "FF9900", fromSimpleIcons: false },
  "Aurora PostgreSQL": { path: siPostgresql.path, hex: "FF9900", title: "Aurora PostgreSQL", fromSimpleIcons: true },
  JasperReports: { lucideIcon: "FileBarChart", hex: "1C7C3A", fromSimpleIcons: false },
};

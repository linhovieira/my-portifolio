import type {
  Profile,
  Stat,
  ContactLink,
  Experience,
  Project,
  Technology,
  Education,
  Language,
} from "@/types";

export const profile: Profile = {
  name: "Paulo Ricardo da Silva Vieira",
  title: "Software Engineer | Backend Specialist | Cloud & System Integration",
  tagline:
    "Transforma requisitos complexos em soluções escaláveis, seguras e de alto desempenho.",
  summary:
    "Desenvolvedor de Software com mais de 8 anos de experiência construindo aplicações corporativas de missão crítica. Especialista em desenvolvimento backend com Java e ecossistema Spring, integrações bancárias e corporativas, desenvolvendo microserviços e soluções cloud escaláveis na AWS.",
  avatarUrl: "/images/profile.png",
};

export const stats: Stat[] = [
  { value: "8+", label: "Anos de experiência em TI" },
  { value: "30+", label: "Projetos de software" },
  { value: "15+", label: "Tecnologias" },
  { value: "100%", label: "Foco em qualidade, entrega e resultados" },
];

export const contact: ContactLink[] = [
  {
    label: "71 99144-2645",
    href: "tel:+5571991442645",
    icon: "Phone",
  },
  {
    label: "linho_017@hotmail.com",
    href: "mailto:linho_017@hotmail.com",
    icon: "Mail",
  },
  {
    label: "GitHub",
    href: "https://github.com/linhosev", // TODO: confirmar URL correta
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/paulo-vieira-s230385", // TODO: confirmar URL correta
    icon: "Linkedin",
  },
  {
    label: "Salvador, Bahia - Brasil",
    href: "#",
    icon: "MapPin",
  },
];

export const experiences: Experience[] = [
  {
    company: "CREFITO 7",
    role: "Desenvolvedor Java",
    period: "2023 — Atual",
    description:
      "Criação e desenvolvimento de plataforma e CDF, integrações bancárias (Banco do Brasil, PIX, CICoB) com GOB/RR, arquitetura em AWS e modernização de sistemas corporativos.",
    technologies: ["Java", "Spring Boot", "AWS", "PIX", "PostgreSQL", "Docker"],
    current: true,
  },
  {
    company: "CREFITO 7",
    role: "Desenvolvedor Java",
    period: "2021 — 2023",
    description:
      "Desenvolvimento de módulos no ERP, integração com API COFITTO, relatórios com JasperReports, envio de SMS/WhatsApp, melhoria de processos e automação.",
    technologies: [
      "Java",
      "Spring Boot",
      "JasperReports",
      "REST API",
      "PostgreSQL",
    ],
    current: false,
  },
  {
    company: "CREFITO 7",
    role: "Programador",
    period: "2020 — 2021",
    description:
      "Suporte e desenvolvimento de módulos de registro, fiscalização, processos e financeiros. Participação na criação do novo Portal do Profissional.",
    technologies: ["Java", "Angular", "PostgreSQL", "REST API"],
    current: false,
  },
  {
    company: "Link3 Tecnologia",
    role: "Programador",
    period: "2018 — 2019",
    description:
      "Desenvolvimento no ERP da empresa na gestão de Tributos e Transportes, participação no projeto de inovação do sistema.",
    technologies: ["Java", "SQL Server", "REST API"],
    current: false,
  },
  {
    company: "GES-IT Consultoria",
    role: "Programador",
    period: "2017 — 2018",
    description:
      "Migração e integração de bases entre sistemas, importação, exportação e mídias de transformação.",
    technologies: ["Java", "SQL Server", "ETL"],
    current: false,
  },
];

export const projects: Project[] = [
  {
    title: "e-CIF — Central Digital de Fiscalização",
    description:
      "Plataforma digital de fiscalização com integração ao GOV.BR, autenticação OAuth2, emissão de documentos e gestão de processos regulatórios.",
    technologies: [
      "Spring Boot",
      "Angular",
      "Oracle",
      "JWT",
      "OAuth2",
      "REST API",
    ],
    icon: "ShieldCheck",
    featured: true,
  },
  {
    title: "Integração Banco do Brasil",
    description:
      "Módulo de integração bancária com emissão, baixa e atualização de boletos, conciliação financeira e integração via PIX.",
    technologies: ["Spring Boot", "REST API", "PIX", "Java"],
    icon: "Landmark",
    featured: true,
  },
  {
    title: "Infraestrutura AWS",
    description:
      "Arquitetura cloud com ECS/Fargate, balanceamento de carga com ALB/Nginx/ACM, banco de dados Aurora PostgreSQL, cache com ElastiCache Redis e monitoramento via CloudWatch.",
    technologies: [
      "AWS ECS",
      "Fargate",
      "Aurora PostgreSQL",
      "ElastiCache",
      "CloudWatch",
      "Docker",
    ],
    icon: "Cloud",
    featured: true,
  },
  {
    title: "Controle de Ponto Online",
    description:
      "Sistema completo de controle de ponto com frontend em React, backend em Spring Boot e C# .NET, banco SQL Server e containerização com Docker.",
    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "C# (.NET)",
      "SQL Server",
      "Docker",
    ],
    icon: "Clock",
    featured: false,
  },
];

export const technologies: Technology[] = [
  { name: "Java", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "C# (.NET)", category: "language" },
  { name: "Spring Boot", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "RabbitMQ", category: "backend" },
  { name: "JWT / OAuth2", category: "backend" },
  { name: "Angular", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "PostgreSQL", category: "database" },
  { name: "SQL Server", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Oracle", category: "database" },
  { name: "AWS", category: "cloud" },
  { name: "ECS / Fargate", category: "cloud" },
  { name: "Aurora PostgreSQL", category: "cloud" },
  { name: "Docker", category: "devops" },
  { name: "GitLab CI/CD", category: "devops" },
  { name: "JasperReports", category: "tool" },
];

export const education: Education[] = [
  {
    institution: "Estácio Sé",
    degree: "Pós-graduação — Desenvolvimento de Tecnologias Digitais",
    period: "2021 — 2022",
  },
  {
    institution: "Estácio Sé",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2018 — 2020",
  },
];

export const languages: Language[] = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
];

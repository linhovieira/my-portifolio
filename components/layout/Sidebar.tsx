import Image from "next/image";
import {
  Layers,
  BarChart2,
  Languages,
  GraduationCap,
  Award,
  type LucideProps,
} from "lucide-react";
import { profile, skills, education, languages } from "@/lib/data";
import { TechChip } from "@/components/ui/TechChip";

const stackTechs = [
  "Java",
  "Spring Boot",
  "REST API",
  "PostgreSQL",
  "SQL Server",
  "Redis",
  "Docker",
  "Angular",
  "React",
  "TypeScript",
  "JavaScript",
  "RabbitMQ",
  "GitLab CI/CD",
  "JWT / OAuth2",
];

export function Sidebar() {
  return (
    <aside
      aria-label="Informações complementares"
      className="
        w-full lg:w-72 xl:w-80 shrink-0
        bg-linear-to-b from-[#0f172a] to-[#1a2744]
        text-white
        lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto
        flex flex-col
        scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10
      "
    >
      <div className="flex flex-col gap-7 p-7 lg:p-8 pb-12">

        {/* Avatar */}
        <div className="flex justify-center pt-3">
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-white/20 shadow-xl">
            <Image
              src={profile.avatarUrl}
              alt="Foto de Paulo Ricardo da Silva Vieira"
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
        </div>

        <Divider />

        {/* Stack Principal */}
        <SidebarBlock title="Stack Principal" Icon={Layers}>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            {stackTechs.map((name) => (
              <TechChip key={name} name={name} variant="grid" />
            ))}
          </div>
        </SidebarBlock>

        <Divider />

        {/* Habilidades */}
        <SidebarBlock title="Habilidades" Icon={BarChart2}>
          <ul className="flex flex-col gap-3.5" role="list">
            {skills.map((skill) => (
              <li key={skill.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[11px] text-slate-300 leading-none">
                    {skill.name}
                  </span>
                </div>
                <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-action rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.name}
                  />
                </div>
              </li>
            ))}
          </ul>
        </SidebarBlock>

        <Divider />

        {/* Idiomas */}
        <SidebarBlock title="Idiomas" Icon={Languages}>
          <ul className="flex flex-col gap-3.5" role="list">
            {languages.map((lang) => (
              <li key={lang.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[11px] text-slate-300">{lang.name}</span>
                  <span className="text-[10px] text-slate-500">{lang.level}</span>
                </div>
                <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${lang.percentage}%` }}
                    role="progressbar"
                    aria-valuenow={lang.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${lang.name}: ${lang.level}`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </SidebarBlock>

        <Divider />

        {/* Formação */}
        <SidebarBlock title="Formação" Icon={GraduationCap}>
          <ul className="flex flex-col gap-4" role="list">
            {education.map((edu) => (
              <li key={edu.degree}>
                <p className="text-[11px] font-semibold text-white leading-snug">
                  {edu.degree}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">{edu.institution}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{edu.period}</p>
              </li>
            ))}
          </ul>
        </SidebarBlock>

        <Divider />

        {/* Certificações */}
        <SidebarBlock title="Certificações e Cursos" Icon={Award}>
          <ul className="flex flex-col gap-2" role="list">
            {[
              "Java, Spring Boot, Angular",
              "School of Net - Java EE, Spring, Angular",
              "SENAI - Lógica de Programação",
              "Soliseon - Java, CK, SQL, HTML5",
            ].map((cert) => (
              <li
                key={cert}
                className="text-[10px] text-slate-400 leading-snug pl-2 border-l border-white/10"
              >
                {cert}
              </li>
            ))}
          </ul>
        </SidebarBlock>

      </div>
    </aside>
  );
}

function Divider() {
  return <hr className="border-white/10" aria-hidden="true" />;
}

function SidebarBlock({
  title,
  Icon,
  children,
}: {
  title: string;
  Icon: React.FC<LucideProps>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Icon size={12} className="text-accent shrink-0" aria-hidden="true" />
        <h2 className="text-[10px] font-display font-bold uppercase tracking-[0.15em] text-slate-400">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

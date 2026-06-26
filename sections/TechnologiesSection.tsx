import { technologies } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { SkillChip } from "@/components/ui/SkillChip";
import type { TechnologyCategory } from "@/types";

const categoryLabels: Record<TechnologyCategory, string> = {
  language: "Linguagens",
  backend: "Backend",
  frontend: "Frontend",
  database: "Banco de Dados",
  cloud: "Cloud",
  devops: "DevOps",
  tool: "Ferramentas",
};

const categoryOrder: TechnologyCategory[] = [
  "language",
  "backend",
  "frontend",
  "database",
  "cloud",
  "devops",
  "tool",
];

export function TechnologiesSection() {
  return (
    <Section id="tecnologias" title="Tecnologias">
      <div className="flex flex-col gap-6">
        {categoryOrder.map((category) => {
          const techs = technologies.filter((t) => t.category === category);
          if (techs.length === 0) return null;
          return (
            <div key={category}>
              <p className="text-xs font-medium text-text-muted uppercase tracking-widest mb-2.5">
                {categoryLabels[category]}
              </p>
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label={categoryLabels[category]}
              >
                {techs.map((tech) => (
                  <div key={tech.name} role="listitem">
                    <SkillChip label={tech.name} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

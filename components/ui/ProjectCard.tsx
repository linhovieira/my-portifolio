import {
  ShieldCheck,
  Landmark,
  Cloud,
  Clock,
  type LucideProps,
} from "lucide-react";
import { Code2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SkillChip } from "@/components/ui/SkillChip";
import type { Project } from "@/types";

const iconMap: Record<string, React.FC<LucideProps>> = {
  ShieldCheck,
  Landmark,
  Cloud,
  Clock,
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon] ?? Cloud;

  return (
    <Card hover className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-action/10 text-action shrink-0">
            <Icon size={18} aria-hidden="true" />
          </div>
          <h3 className="text-sm font-display font-semibold text-primary leading-snug">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${project.title} no GitHub`}
              className="text-text-muted hover:text-primary transition-colors duration-150 p-1"
            >
              <Code2 size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${project.title} online`}
              className="text-text-muted hover:text-primary transition-colors duration-150 p-1"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-text-muted leading-relaxed text-justify">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto" role="list" aria-label="Tecnologias do projeto">
        {project.technologies.map((tech) => (
          <div key={tech} role="listitem">
            <SkillChip label={tech} />
          </div>
        ))}
      </div>
    </Card>
  );
}

import { Badge } from "@/components/ui/Badge";
import { SkillChip } from "@/components/ui/SkillChip";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div
          className={`
            w-2.5 h-2.5 rounded-full shrink-0 mt-1.5
            ${experience.current ? "bg-action" : "bg-border"}
            ring-4 ring-bg
          `}
          aria-hidden="true"
        />
        {!isLast && (
          <div className="w-px flex-1 mt-1 bg-border" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-2 pb-8 ${isLast ? "" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-display font-semibold text-primary">
            {experience.role}
          </h3>
          {experience.current && (
            <Badge variant="default">Atual</Badge>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <span className="font-medium text-text">{experience.company}</span>
          <span aria-hidden="true">·</span>
          <time>{experience.period}</time>
        </div>
        <p className="text-sm text-text-muted leading-relaxed mt-1">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1" role="list" aria-label="Tecnologias utilizadas">
          {experience.technologies.map((tech) => (
            <div key={tech} role="listitem">
              <SkillChip label={tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { SkillChip } from "@/components/ui/SkillChip";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-5">
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`
            w-2.5 h-2.5 rounded-full shrink-0 mt-4.5
            ${experience.current ? "bg-action ring-4 ring-action/20" : "bg-border"}
          `}
          aria-hidden="true"
        />
        {!isLast && (
          <div className="w-px flex-1 mt-1 bg-border" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 pb-8 min-w-0">
        <time className="text-[11px] text-text-muted font-medium tracking-wide">
          {experience.period}
        </time>

        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-display font-bold text-primary">
            {experience.role}
          </h3>
          {experience.employmentType && (
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                experience.employmentType === "Estágio"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-action/10 text-action"
              }`}
            >
              {experience.employmentType}
            </span>
          )}
          {experience.current && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
              Atual
            </span>
          )}
        </div>

        <p className="text-xs font-semibold text-text-muted">{experience.company}</p>

        <p className="text-sm text-text-muted leading-relaxed mt-0.5 text-justify">
          {experience.description}
        </p>

        <div
          className="flex flex-wrap gap-1.5 mt-1"
          role="list"
          aria-label="Tecnologias utilizadas"
        >
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

import { experiences } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function ExperienceSection() {
  return (
    <Section id="experiencia" title="Trajetória Profissional">
      <ol aria-label="Experiências profissionais">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.period}`}>
            <TimelineItem
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}

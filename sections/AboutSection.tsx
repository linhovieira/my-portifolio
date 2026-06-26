import { profile } from "@/lib/data";
import { Section } from "@/components/layout/Section";

export function AboutSection() {
  return (
    <Section id="sobre" title="Sobre">
      <p className="text-base text-text-muted leading-relaxed w-full text-justify mb-2">
        {profile.summary}
      </p>
       <p className="text-base text-text-muted leading-relaxed w-full text-justify">
          {profile.summary2}
       </p>
    </Section>
  );
}

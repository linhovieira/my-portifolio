import { profile } from "@/lib/data";
import { Section } from "@/components/layout/Section";

export function AboutSection() {
  return (
    <Section id="sobre" title="Sobre">
      <p className="text-base text-text-muted leading-relaxed max-w-2xl">
        {profile.summary}
      </p>
    </Section>
  );
}

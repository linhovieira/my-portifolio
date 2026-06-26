import { contact } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { SocialLink } from "@/components/ui/SocialLink";

export function ContactSection() {
  return (
    <Section id="contato" title="Contato">
      <ul className="flex flex-col gap-4" role="list">
        {contact
          .filter((item) => item.href !== "#")
          .map((item) => (
            <li key={item.label}>
              <SocialLink contact={item} />
            </li>
          ))}
      </ul>
    </Section>
  );
}

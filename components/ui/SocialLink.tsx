import {
  Phone,
  Mail,
  Code2,
  Briefcase,
  MapPin,
  type LucideProps,
} from "lucide-react";
import type { ContactLink } from "@/types";

const iconMap: Record<string, React.FC<LucideProps>> = {
  Phone,
  Mail,
  Github: Code2,
  Linkedin: Briefcase,
  MapPin,
};

type SocialLinkVariant = "dark" | "light";

interface SocialLinkProps {
  contact: ContactLink;
  variant?: SocialLinkVariant;
}

const variantClasses: Record<
  SocialLinkVariant,
  { text: string; icon: string; hover: string }
> = {
  dark: {
    text: "text-slate-300",
    icon: "text-slate-400 group-hover:text-accent",
    hover: "group-hover:text-white",
  },
  light: {
    text: "text-text-muted",
    icon: "text-text-muted group-hover:text-action",
    hover: "group-hover:text-primary",
  },
};

export function SocialLink({ contact, variant = "light" }: SocialLinkProps) {
  const Icon = iconMap[contact.icon];
  const isStatic = contact.href === "#";
  const styles = variantClasses[variant];

  const content = (
    <span
      className={`flex items-center gap-2.5 text-sm ${styles.text} ${styles.hover} transition-colors duration-150`}
    >
      {Icon && (
        <Icon
          size={14}
          className={`shrink-0 ${styles.icon} transition-colors duration-150`}
          aria-hidden="true"
        />
      )}
      <span className="truncate">{contact.label}</span>
    </span>
  );

  if (isStatic) {
    return <div className="group">{content}</div>;
  }

  return (
    <a
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group"
      aria-label={contact.label}
    >
      {content}
    </a>
  );
}

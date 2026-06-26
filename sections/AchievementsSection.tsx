import {
  Zap,
  Cloud,
  Globe,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";
import { achievements } from "@/lib/data";
import { Section } from "@/components/layout/Section";

const iconMap: Record<string, React.FC<LucideProps>> = {
  Zap,
  Cloud,
  Globe,
  ShieldCheck,
};

const achievementColors = [
  { bg: "bg-blue-50", border: "border-blue-100", icon: "text-blue-500" },
  { bg: "bg-sky-50", border: "border-sky-100", icon: "text-sky-500" },
  { bg: "bg-violet-50", border: "border-violet-100", icon: "text-violet-500" },
  { bg: "bg-emerald-50", border: "border-emerald-100", icon: "text-emerald-500" },
];

export function AchievementsSection() {
  return (
    <Section id="conquistas" title="Principais Conquistas">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.icon] ?? Cloud;
          const colors = achievementColors[index % achievementColors.length];
          return (
            <div
              key={achievement.title}
              className={`flex items-start gap-3 p-4 rounded-xl border ${colors.border} ${colors.bg}`}
            >
              <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-white shadow-sm shrink-0 ${colors.icon}`}>
                <Icon size={16} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-display font-semibold text-primary leading-snug">
                  {achievement.title}
                </p>
                <p className="text-xs text-text-muted mt-0.5 leading-snug">
                  {achievement.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

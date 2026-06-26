import {
  Globe,
  Database,
  Cloud,
  FileBarChart,
  type LucideProps,
} from "lucide-react";
import { techIconMap } from "@/lib/techIcons";

const lucideIconMap: Record<string, React.FC<LucideProps>> = {
  Globe,
  Database,
  Cloud,
  FileBarChart,
  Container: Cloud,
};

interface TechChipProps {
  name: string;
  variant?: "dark" | "light" | "grid";
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return { r, g, b };
}

export function TechChip({ name, variant = "dark" }: TechChipProps) {
  const iconData = techIconMap[name];

  const hexColor = iconData ? `#${iconData.hex}` : "#64748b";
  const { r, g, b } = hexToRgb(iconData?.hex ?? "64748b");

  const isGrid = variant === "grid";

  const chipStyle = isGrid
    ? {
        backgroundColor: "rgba(255,255,255,0.07)",
        borderColor: "rgba(255,255,255,0.12)",
        color: "#e2e8f0",
      }
    : variant === "dark"
    ? {
        backgroundColor: `rgba(${r},${g},${b},0.18)`,
        borderColor: `rgba(${r},${g},${b},0.35)`,
        color: `#${iconData?.hex ?? "94a3b8"}`,
      }
    : {
        backgroundColor: `rgba(${r},${g},${b},0.10)`,
        borderColor: `rgba(${r},${g},${b},0.25)`,
        color: `rgb(${Math.max(0, r - 40)},${Math.max(0, g - 40)},${Math.max(0, b - 40)})`,
      };

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border"
      style={chipStyle}
    >
      {iconData ? (
        iconData.fromSimpleIcons ? (
          <svg
            role="img"
            viewBox="0 0 24 24"
            width={13}
            height={13}
            fill={hexColor}
            aria-label={iconData.title}
            className="shrink-0"
          >
            <path d={iconData.path} />
          </svg>
        ) : (
          (() => {
            const LucideIcon = lucideIconMap[iconData.lucideIcon];
            return LucideIcon ? (
              <LucideIcon size={13} color={hexColor} aria-hidden="true" className="shrink-0" />
            ) : null;
          })()
        )
      ) : null}
      {name}
    </span>
  );
}

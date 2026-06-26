import { type HTMLAttributes } from "react";

interface SkillChipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
}

export function SkillChip({ label, className = "", ...props }: SkillChipProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        "bg-border/60 text-text-muted border border-border",
        "transition-colors duration-150 hover:border-action/40 hover:text-primary",
        className,
      ].join(" ")}
      {...props}
    >
      {label}
    </span>
  );
}

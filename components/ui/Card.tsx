import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({
  hover = false,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "bg-surface rounded-2xl border border-border shadow-sm p-6",
        hover &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

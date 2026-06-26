import { type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  title?: string;
}

export function Section({
  id,
  title,
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={["py-12 scroll-mt-8", className].join(" ")}
      {...props}
    >
      {title && (
        <h2 className="text-xl font-display font-bold text-primary mb-8 tracking-tight">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

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
      className={["py-10 scroll-mt-8", className].join(" ")}
      {...props}
    >
      {title && (
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 rounded-full bg-action shrink-0" aria-hidden="true" />
          <h2 className="text-base font-display font-black text-primary uppercase tracking-[0.08em]">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
}

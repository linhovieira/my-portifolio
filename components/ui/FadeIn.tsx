"use client";

import { useInView } from "@/hooks/useInView";
import type { HTMLAttributes } from "react";

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export function FadeIn({ children, delay = 0, className = "", ...props }: FadeInProps) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-500 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className,
      ].join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

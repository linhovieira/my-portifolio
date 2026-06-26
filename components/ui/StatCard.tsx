import type { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <span className="text-3xl font-display font-bold text-action tabular-nums">
        {stat.value}
      </span>
      <span className="mt-1 text-xs text-text-muted leading-snug max-w-[80px]">
        {stat.label}
      </span>
    </div>
  );
}

import { FIFA_KEYS, overallRating, type Stats } from "@/data/types";
import { statTextClass } from "@/lib/stat-grade";
import { cn } from "@/lib/utils";

export function PlayerRatings({ stats }: { stats: Stats }) {
  const ovr = overallRating(stats);
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-surface p-4">
      <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-fg">
        <span className="font-display text-xs uppercase tracking-wide opacity-80">OVR</span>
        <span className="font-display text-4xl font-semibold tabular-nums leading-none">{ovr}</span>
      </div>
      <ul className="grid flex-1 grid-cols-2 gap-x-4 gap-y-1.5 content-center">
        {FIFA_KEYS.map((stat) => (
          <li key={stat.key} className="flex items-center justify-between gap-2">
            <span className="font-display text-xs uppercase tracking-wide text-muted">{stat.label}</span>
            <span className={cn("font-display text-lg font-semibold tabular-nums leading-none", statTextClass(stats[stat.key]))}>
              {stats[stat.key]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

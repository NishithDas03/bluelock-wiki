import { STAT_GROUPS, type Stats } from "@/data/types";
import { statFillClass, statTextClass } from "@/lib/stat-grade";
import { cn } from "@/lib/utils";

export function StatBars({ stats }: { stats: Stats }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {STAT_GROUPS.map((group) => (
        <section key={group.label} className="rounded-xl border border-border bg-surface p-4">
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-muted">{group.label}</h3>
          <ul className="mt-3 space-y-3">
            {group.keys.map((stat) => {
              const value = stats[stat.key];
              return (
                <li key={stat.key}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted">{stat.label}</span>
                    <span className={cn("tabular-nums", statTextClass(value))}>{value}</span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-surface-2">
                    <div className={cn("h-full", statFillClass(value))} style={{ width: `${value}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

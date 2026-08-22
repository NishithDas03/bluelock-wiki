import { overallRating, type Stats } from "@/data/types";
import { cn } from "@/lib/utils";

export function OverallBadge({
  stats,
  size = "md",
}: {
  stats: Stats;
  size?: "sm" | "md" | "lg";
}) {
  const ovr = overallRating(stats);
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-md bg-primary text-primary-fg",
        size === "sm" && "size-10",
        size === "md" && "size-14",
        size === "lg" && "size-20",
      )}
    >
      <span className="font-display leading-none tracking-wide text-[10px] uppercase opacity-80">OVR</span>
      <span
        className={cn(
          "font-display font-semibold tabular-nums leading-none",
          size === "sm" && "text-lg",
          size === "md" && "text-2xl",
          size === "lg" && "text-4xl",
        )}
      >
        {ovr}
      </span>
    </div>
  );
}

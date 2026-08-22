import { cn } from "@/lib/utils";

export function statFillClass(n: number) {
  if (n >= 90) return "bg-primary";
  if (n >= 80) return "bg-tone-mint";
  if (n >= 70) return "bg-fg/55";
  return "bg-muted";
}

export function statTextClass(n: number) {
  if (n >= 90) return "text-primary";
  if (n >= 80) return "text-tone-mint";
  if (n >= 70) return "text-fg";
  return "text-muted";
}

export function statBar(n: number, className?: string) {
  return cn("h-full", statFillClass(n), className);
}

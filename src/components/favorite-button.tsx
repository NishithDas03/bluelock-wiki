import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export function FavoriteButton({ slug, className }: { slug: string; className?: string }) {
  const slugs = useFavorites((s) => s.slugs);
  const toggle = useFavorites((s) => s.toggle);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const active = hydrated && slugs.includes(slug);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? "Remove bookmark" : "Bookmark player"}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggle(slug);
      }}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface/80 text-muted backdrop-blur-sm transition-[color,background-color,transform] duration-150 ease-out hover:text-fg active:scale-[0.96]",
        active && "border-primary/40 text-primary",
        className,
      )}
    >
      <Bookmark className={cn("size-4", active && "fill-primary")} />
    </button>
  );
}

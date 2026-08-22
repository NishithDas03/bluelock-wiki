import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { PlayerDossier } from "@/components/player-dossier";
import { getCharacter } from "@/data/catalog";
import { useInspect } from "@/lib/inspect";

export function PlayerInspect() {
  const slug = useInspect((s) => s.slug);
  const open = useInspect((s) => s.open);
  const close = useInspect((s) => s.close);
  const character = slug ? getCharacter(slug) : undefined;
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [slug, close]);

  if (!slug) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-bg" role="dialog" aria-modal="true" aria-label="Player dossier">
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
        <p className="font-display text-sm uppercase tracking-[0.18em] text-muted">
          {character ? character.name : "Dossier"}
        </p>
        <button
          type="button"
          onClick={close}
          className="inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          aria-label="Close dossier"
        >
          <X className="size-5" />
        </button>
      </div>
      <div
        ref={scroller}
        className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6"
        onClick={(event) => {
          const target = event.target as HTMLElement | null;
          if (target?.closest("a")) close();
        }}
      >
        {character ? (
          <div className="mx-auto w-full max-w-6xl">
            <PlayerDossier
              key={character.slug}
              character={character}
              onSelectPlayer={(next) => open(next)}
            />
          </div>
        ) : (
          <p className="text-sm text-muted">That player is not in the archive.</p>
        )}
      </div>
    </div>
  );
}

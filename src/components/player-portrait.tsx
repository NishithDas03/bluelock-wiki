import type { Character } from "@/data/types";
import { TONE_VAR } from "@/data/catalog";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

export function PlayerPortrait({
  character,
  className,
  sizes = "portrait",
}: {
  character: Character;
  className?: string;
  sizes?: "portrait" | "cover";
}) {
  if (character.portrait) {
    return (
      <img
        src={asset(`/portraits/${character.portrait}`)}
        alt={character.name}
        className={cn(
          "h-full w-full object-cover",
          sizes === "portrait" ? "object-top" : "object-center",
          className,
        )}
      />
    );
  }

  const initial = character.familyName.slice(0, 1);
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center bg-surface-2",
        className,
      )}
      style={{
        background: `linear-gradient(160deg, color-mix(in oklab, ${TONE_VAR[character.tone]} 22%, #10141a) 0%, #10141a 70%)`,
      }}
    >
      <span
        className="font-display text-6xl font-semibold uppercase tracking-tight text-fg/80"
        style={{ color: TONE_VAR[character.tone] }}
      >
        {character.number ?? initial}
      </span>
    </div>
  );
}

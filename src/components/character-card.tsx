import { FavoriteButton } from "@/components/favorite-button";
import { OverallBadge } from "@/components/overall-badge";
import { PlayerPortrait } from "@/components/player-portrait";
import { Badge } from "@/components/ui/badge";
import { TONE_VAR, getTeam } from "@/data/catalog";
import type { Character } from "@/data/types";
import { useInspect } from "@/lib/inspect";

export function CharacterCard({ character }: { character: Character }) {
  const team = getTeam(character.team);
  const open = useInspect((s) => s.open);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-[border-color] duration-200 ease-out hover:border-border-strong">
      <button
        type="button"
        onClick={() => open(character.slug)}
        className="flex flex-1 flex-col text-left"
        aria-haspopup="dialog"
        aria-label={`Open ${character.name} dossier`}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
          <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <PlayerPortrait character={character} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <Badge variant="outline" className="border-border bg-bg/60 backdrop-blur-sm">
              {character.position}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3">
            <OverallBadge stats={character.stats} size="sm" />
          </div>
          {character.number != null && (
            <span
              className="absolute bottom-3 left-3 font-display text-5xl font-semibold leading-none tracking-tight"
              style={{ color: TONE_VAR[character.tone] }}
            >
              {String(character.number).padStart(2, "0")}
            </span>
          )}
          <span className="absolute inset-x-0 bottom-0 flex h-12 items-end justify-center bg-gradient-to-t from-bg to-transparent pb-2 font-display text-xs uppercase tracking-[0.16em] text-fg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Open dossier
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-1 p-4">
          <p className="font-display text-xl font-semibold uppercase leading-tight tracking-wide text-fg">
            {character.name}
          </p>
          <p className="text-xs text-muted">
            {character.nickname}
            {team ? ` · ${team.name}` : ""}
          </p>
        </div>
      </button>
      <FavoriteButton slug={character.slug} className="absolute right-3 top-3 z-10" />
    </article>
  );
}

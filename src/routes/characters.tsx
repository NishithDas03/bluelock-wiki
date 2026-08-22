import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CharacterCard } from "@/components/character-card";
import { Input } from "@/components/ui/input";
import { characters, getTeam, overallRating } from "@/data/catalog";
import { FIFA_KEYS, type Position } from "@/data/types";
import { useFavorites } from "@/lib/favorites";
import { useInspect } from "@/lib/inspect";
import { statTextClass } from "@/lib/stat-grade";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/characters")({ component: CharactersPage });

const POSITIONS: Array<Position | "ALL"> = ["ALL", "FW", "MF", "DF", "GK", "STAFF"];

function CharactersPage() {
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState<Position | "ALL">("ALL");
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [sort, setSort] = useState<"ovr" | "name" | "number">("ovr");
  const [view, setView] = useState<"grid" | "sheet">("grid");
  const slugs = useFavorites((s) => s.slugs);
  const openInspect = useInspect((s) => s.open);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = characters.filter((c) => {
      if (position !== "ALL" && c.position !== position) return false;
      if (bookmarkedOnly && !slugs.includes(c.slug)) return false;
      if (!q) return true;
      return [c.name, c.japanese, c.nickname, c.role, c.origin, c.playStyle, ...(c.specialities ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
    return [...filtered].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "number") return (a.number ?? 99) - (b.number ?? 99);
      return overallRating(b.stats) - overallRating(a.stats);
    });
  }, [query, position, bookmarkedOnly, slugs, sort]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Archive</p>
      <h1 className="mt-1 font-display text-3xl font-semibold uppercase">Players</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Tap a card for the full dossier. Filter by position or open the ratings table.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name…"
          className="sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-1.5">
          {POSITIONS.map((pos) => (
            <button
              key={pos}
              type="button"
              onClick={() => setPosition(pos)}
              className={cn(
                "h-11 rounded-md px-3 text-xs font-medium uppercase tracking-wide transition-colors",
                position === pos
                  ? "bg-primary text-primary-fg"
                  : "border border-border bg-surface text-muted hover:text-fg",
              )}
            >
              {pos === "ALL" ? "All" : pos}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setBookmarkedOnly((v) => !v)}
            className={cn(
              "h-11 rounded-md px-3 text-xs font-medium uppercase tracking-wide transition-colors",
              bookmarkedOnly ? "bg-fg text-bg" : "border border-border bg-surface text-muted hover:text-fg",
            )}
          >
            Bookmarks
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <p className="text-xs text-subtle tabular-nums">{list.length} in view</p>
        <div className="flex gap-1.5">
          {(
            [
              ["ovr", "OVR"],
              ["name", "Name"],
              ["number", "No."],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSort(key)}
              className={cn(
                "h-9 rounded-md px-3 text-xs uppercase tracking-wide",
                sort === key ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="ml-auto flex gap-1.5">
          {(
            [
              ["grid", "Grid"],
              ["sheet", "Sheet"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setView(key)}
              className={cn(
                "h-9 rounded-md px-3 text-xs uppercase tracking-wide",
                view === key ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-center text-sm text-muted">No players match those filters.</p>
      ) : view === "grid" ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((character) => (
            <CharacterCard key={character.slug} character={character} />
          ))}
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[44rem] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-subtle">
                <th className="px-4 py-3 font-medium">Player</th>
                <th className="px-3 py-3 font-medium">Pos</th>
                <th className="px-3 py-3 font-medium">OVR</th>
                {FIFA_KEYS.map((stat) => (
                  <th key={stat.key} className="px-3 py-3 font-medium">
                    {stat.label}
                  </th>
                ))}
                <th className="px-4 py-3 font-medium">Bid</th>
              </tr>
            </thead>
            <tbody>
              {list.map((character) => {
                const team = getTeam(character.team);
                const ovr = overallRating(character.stats);
                return (
                  <tr
                    key={character.slug}
                    className="cursor-pointer border-b border-border last:border-0 hover:bg-surface-2"
                    onClick={() => openInspect(character.slug)}
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-fg">{character.name}</p>
                      <p className="text-xs text-subtle">{team?.name ?? character.team}</p>
                    </td>
                    <td className="px-3 py-3 text-muted">{character.position}</td>
                    <td className={cn("px-3 py-3 font-medium tabular-nums", statTextClass(ovr))}>{ovr}</td>
                    {FIFA_KEYS.map((stat) => {
                      const value = character.stats[stat.key];
                      return (
                        <td key={stat.key} className={cn("px-3 py-3 tabular-nums", statTextClass(value))}>
                          {value}
                        </td>
                      );
                    })}
                    <td className="px-4 py-3 text-xs text-muted">{character.bid}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

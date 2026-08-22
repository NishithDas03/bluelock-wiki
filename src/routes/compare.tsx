import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { OverallBadge } from "@/components/overall-badge";
import { PlayerPortrait } from "@/components/player-portrait";
import { StatRadar } from "@/components/stat-radar";
import { characters, getCharacter, overallRating } from "@/data/catalog";
import { STAT_GROUPS, STAT_KEYS, type Character } from "@/data/types";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  a: z.string().optional(),
  b: z.string().optional(),
});

export const Route = createFileRoute("/compare")({
  validateSearch: searchSchema,
  component: ComparePage,
});

function ComparePage() {
  const { a, b } = Route.useSearch();
  const navigate = Route.useNavigate();
  const left = a ? getCharacter(a) : undefined;
  const right = b ? getCharacter(b) : undefined;

  const setSlot = (slot: "a" | "b", slug: string) => {
    void navigate({
      search: (prev) => ({ ...prev, [slot]: slug || undefined }),
      replace: true,
    });
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Lab</p>
      <h1 className="mt-1 font-display text-3xl font-semibold uppercase">Compare</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Full sheets, side by side. Ratings are archive estimates, not official JFU numbers.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Picker value={a ?? ""} onChange={(slug) => setSlot("a", slug)} label="Player A" />
        <Picker value={b ?? ""} onChange={(slug) => setSlot("b", slug)} label="Player B" />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <PortraitSlot character={left} empty="Choose player A" />
        <PortraitSlot character={right} empty="Choose player B" />
      </div>

      {left ? (
        <div className="mt-8 rounded-xl border border-border bg-surface p-4">
          <StatRadar character={left} compare={right} />
        </div>
      ) : (
        <p className="mt-12 text-center text-sm text-muted">Pick at least one player to see a radar.</p>
      )}

      {left && right && (
        <>
          <table className="mt-8 w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-subtle">
                <th className="py-3 font-medium">Core</th>
                <th className="py-3 font-medium">{left.givenName}</th>
                <th className="py-3 font-medium">{right.givenName}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 text-muted">Overall</td>
                <td className="py-3 font-medium tabular-nums text-primary">{overallRating(left.stats)}</td>
                <td className="py-3 font-medium tabular-nums text-primary">{overallRating(right.stats)}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-muted">NEL G / A</td>
                <td className="py-3 tabular-nums">{nelLine(left)}</td>
                <td className="py-3 tabular-nums">{nelLine(right)}</td>
              </tr>
              {STAT_KEYS.map((stat) => {
                const av = left.stats[stat.key];
                const bv = right.stats[stat.key];
                return (
                  <tr key={stat.key} className="border-b border-border">
                    <td className="py-3 text-muted">{stat.label}</td>
                    <td className={cn("py-3 tabular-nums", av >= bv ? "text-primary" : "text-fg")}>{av}</td>
                    <td className={cn("py-3 tabular-nums", bv >= av ? "text-primary" : "text-fg")}>{bv}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {STAT_GROUPS.map((group) => (
            <table key={group.label} className="mt-8 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-subtle">
                  <th className="py-3 font-medium">{group.label}</th>
                  <th className="py-3 font-medium">{left.givenName}</th>
                  <th className="py-3 font-medium">{right.givenName}</th>
                </tr>
              </thead>
              <tbody>
                {group.keys.map((stat) => {
                  const av = left.stats[stat.key];
                  const bv = right.stats[stat.key];
                  return (
                    <tr key={stat.key} className="border-b border-border">
                      <td className="py-3 text-muted">{stat.label}</td>
                      <td className={cn("py-3 tabular-nums", av >= bv ? "text-primary" : "text-fg")}>{av}</td>
                      <td className={cn("py-3 tabular-nums", bv >= av ? "text-primary" : "text-fg")}>{bv}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ))}
        </>
      )}
    </main>
  );
}

function nelLine(character: Character) {
  const nel = character.season?.find((row) => row.competition.toLowerCase().includes("neo"));
  if (!nel) return "—";
  return `${nel.goals} / ${nel.assists}`;
}

function Picker({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (slug: string) => void;
  label: string;
}) {
  const sorted = [...characters].sort((a, b) => overallRating(b.stats) - overallRating(a.stats));
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.16em] text-subtle">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg"
      >
        <option value="">Select…</option>
        {sorted.map((c) => (
          <option key={c.slug} value={c.slug}>
            {overallRating(c.stats)} · {c.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function PortraitSlot({
  character,
  empty,
}: {
  character: ReturnType<typeof getCharacter>;
  empty: string;
}) {
  if (!character) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-border text-sm text-subtle">
        {empty}
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden rounded-xl border border-border">
      <div className="aspect-[4/3]">
        <PlayerPortrait character={character} sizes="cover" />
      </div>
      <div className="absolute right-3 top-3">
        <OverallBadge stats={character.stats} size="sm" />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg to-transparent p-4">
        <p className="font-display text-xl uppercase">{character.name}</p>
        <p className="text-xs text-muted">
          {character.position} · {character.height} · {character.foot}
        </p>
      </div>
    </div>
  );
}

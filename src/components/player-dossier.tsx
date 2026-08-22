import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FavoriteButton } from "@/components/favorite-button";
import { OverallBadge } from "@/components/overall-badge";
import { PlayerPortrait } from "@/components/player-portrait";
import { PlayerRatings } from "@/components/player-ratings";
import { StatBars } from "@/components/stat-bars";
import { StatRadar } from "@/components/stat-radar";
import { Badge } from "@/components/ui/badge";
import { TONE_VAR, getCharacter, getTeam, getWeapon, overallRating } from "@/data/catalog";
import { POSITION_LABEL, STAT_KEYS, type Character } from "@/data/types";
import { statFillClass, statTextClass } from "@/lib/stat-grade";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "stats", label: "Stats" },
  { id: "story", label: "Story" },
  { id: "kit", label: "Weapons" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function PlayerDossier({
  character,
  onSelectPlayer,
}: {
  character: Character;
  onSelectPlayer?: (slug: string) => void;
}) {
  const [tab, setTab] = useState<TabId>("overview");
  const team = getTeam(character.team);
  const weaponList = character.weapons.map(getWeapon).filter(Boolean);
  const ovr = overallRating(character.stats);
  const season = character.season ?? [];
  const timeline = character.timeline ?? [];
  const specialities = character.specialities ?? [];
  const nel = season.find((row) => row.competition.toLowerCase().includes("neo"));

  const facts: { label: string; value: string }[] = [
    { label: "Position", value: POSITION_LABEL[character.position] },
    { label: "Age", value: character.age },
    { label: "Born", value: character.birthday },
    { label: "Height", value: character.height },
    { label: "Weight", value: character.weight },
    { label: "Blood", value: character.bloodType },
    { label: "Foot", value: character.foot },
    { label: "School", value: character.highSchool },
    { label: "Origin", value: character.origin },
    { label: "Likes", value: character.likes },
    { label: "Voice", value: character.voice ?? "—" },
    { label: "Rank", value: character.rankLabel },
    { label: "Bid", value: character.bid },
    { label: "Japanese", value: character.japanese },
    { label: "Numbers", value: character.jerseyHistory },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 border-b border-border pb-3">
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={cn(
              "h-11 rounded-md px-4 text-xs font-medium uppercase tracking-wide transition-colors",
              tab === item.id ? "bg-primary text-primary-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr]">
          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="relative aspect-[3/4]">
                <PlayerPortrait character={character} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                {character.number != null && (
                  <span
                    className="absolute bottom-4 left-4 font-display text-6xl font-semibold leading-none"
                    style={{ color: TONE_VAR[character.tone] }}
                  >
                    {String(character.number).padStart(2, "0")}
                  </span>
                )}
                <div className="absolute bottom-4 right-4">
                  <OverallBadge stats={character.stats} size="md" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Badge>{character.role}</Badge>
              <FavoriteButton slug={character.slug} />
            </div>
            <div className="mt-4">
              <PlayerRatings stats={character.stats} />
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              {facts.map((row) => (
                <Row key={row.label} label={row.label} value={row.value} />
              ))}
            </dl>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">{character.nickname}</p>
            <h1 className="mt-1 font-display text-4xl font-semibold uppercase leading-none">{character.name}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{character.bio}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {team ? (
                <Link
                  to="/teams/$slug"
                  params={{ slug: team.slug }}
                  className="rounded-md border border-border bg-surface px-3 py-2 text-xs uppercase tracking-wide text-fg hover:border-border-strong"
                >
                  {team.name}
                </Link>
              ) : null}
              {character.formerTeams.map((slug) => {
                const former = getTeam(slug);
                if (!former) return null;
                return (
                  <Link
                    key={slug}
                    to="/teams/$slug"
                    params={{ slug }}
                    className="rounded-md border border-border px-3 py-2 text-xs uppercase tracking-wide text-muted hover:text-fg"
                  >
                    {former.name}
                  </Link>
                );
              })}
            </div>

            {nel ? (
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { k: "NEL apps", v: nel.apps },
                  { k: "Goals", v: nel.goals },
                  { k: "Assists", v: nel.assists },
                  { k: "OVR", v: String(ovr) },
                ].map((item) => (
                  <div key={item.k} className="rounded-lg border border-border bg-surface px-3 py-3">
                    <p className="font-display text-xs uppercase tracking-[0.16em] text-subtle">{item.k}</p>
                    <p className="mt-1 font-display text-2xl font-semibold tabular-nums leading-none">{item.v}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <blockquote className="mt-8 border-l-2 border-primary pl-4 text-sm italic text-fg">
              {character.quote}
            </blockquote>

            <h2 className="mt-10 font-display text-xl uppercase">Play style</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{character.playStyle}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ChipList title="Strengths" items={character.strengths} />
              <ChipList title="Weaknesses" items={character.weaknesses} />
            </div>
            {specialities.length > 0 && (
              <div className="mt-4">
                <ChipList title="Specialities" items={specialities} />
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/compare"
                search={{ a: character.slug }}
                className="inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
              >
                Compare
              </Link>
            </div>
          </div>
        </div>
      )}

      {tab === "stats" && (
        <div className="mt-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_14rem]">
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl uppercase">Radar</h2>
                <p className="font-display text-sm uppercase tracking-wide text-muted">{ovr} overall</p>
              </div>
              <StatRadar character={character} />
            </div>
            <div>
              <h2 className="font-display text-xl uppercase">Core</h2>
              <ul className="mt-4 space-y-3">
                {STAT_KEYS.map((stat) => {
                  const value = character.stats[stat.key];
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
            </div>
          </div>

          <section className="mt-10">
            <h2 className="font-display text-xl uppercase">Full sheet</h2>
            <p className="mt-2 text-xs text-subtle">Archive ratings, not official JFU numbers. 90+ elite · 80+ high.</p>
            <div className="mt-5">
              <StatBars stats={character.stats} />
            </div>
          </section>

          {season.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-xl uppercase">Competition log</h2>
              <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[28rem] text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-subtle">
                      <th className="px-4 py-3 font-medium">Competition</th>
                      <th className="px-4 py-3 font-medium">Apps</th>
                      <th className="px-4 py-3 font-medium">G</th>
                      <th className="px-4 py-3 font-medium">A</th>
                    </tr>
                  </thead>
                  <tbody>
                    {season.map((row) => (
                      <tr key={row.competition} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 text-fg">{row.competition}</td>
                        <td className="px-4 py-3 tabular-nums">{row.apps}</td>
                        <td className="px-4 py-3 tabular-nums text-primary">{row.goals}</td>
                        <td className="px-4 py-3 tabular-nums">{row.assists}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      )}

      {tab === "story" && (
        <div className="mt-8 max-w-3xl">
          {timeline.length > 0 && (
            <section>
              <h2 className="font-display text-xl uppercase">Timeline</h2>
              <ol className="mt-4 space-y-0">
                {timeline.map((event) => (
                  <li
                    key={event.when}
                    className="grid grid-cols-[7rem_1fr] gap-4 border-l border-border py-3 pl-4 sm:grid-cols-[9rem_1fr]"
                  >
                    <p className="font-display text-xs uppercase tracking-[0.14em] text-primary">{event.when}</p>
                    <p className="text-sm text-muted">{event.event}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
          <h2 className="mt-10 font-display text-xl uppercase">Story</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{character.story}</p>
          {character.record.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-xl uppercase">Record</h2>
              <dl className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface">
                {character.record.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 px-4 py-3 text-sm">
                    <dt className="text-muted">{row.label}</dt>
                    <dd className="text-right text-fg">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      )}

      {tab === "kit" && (
        <div className="mt-8">
          {character.abilities.length > 0 && (
            <section>
              <h2 className="font-display text-xl uppercase">Abilities</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {character.abilities.map((ability) => (
                  <div key={ability.name} className="rounded-lg border border-border bg-surface p-4">
                    <p className="font-display text-lg uppercase">{ability.name}</p>
                    <p className="mt-2 text-sm text-muted">{ability.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {weaponList.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-xl uppercase">Weapons</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {weaponList.map((weapon) =>
                  weapon ? (
                    <Link
                      key={weapon.slug}
                      to="/weapons/$slug"
                      params={{ slug: weapon.slug }}
                      className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong"
                    >
                      <p className="text-xs uppercase tracking-[0.16em] text-subtle">{weapon.kind}</p>
                      <p className="mt-1 font-display text-lg uppercase">{weapon.name}</p>
                      <p className="mt-2 text-sm text-muted">{weapon.summary}</p>
                    </Link>
                  ) : null,
                )}
              </div>
            </section>
          )}
          {character.related.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-xl uppercase">Linked</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {character.related.map((slug) => {
                  const other = getCharacter(slug);
                  if (!other) return null;
                  const rating = overallRating(other.stats);
                  if (onSelectPlayer) {
                    return (
                      <button
                        key={slug}
                        type="button"
                        onClick={() => onSelectPlayer(slug)}
                        className="rounded-md border border-border bg-surface px-3 py-2 text-sm hover:border-border-strong"
                      >
                        {other.name}
                        <span className="ml-2 tabular-nums text-subtle">{rating}</span>
                      </button>
                    );
                  }
                  return (
                    <Link
                      key={slug}
                      to="/characters/$slug"
                      params={{ slug }}
                      className="rounded-md border border-border bg-surface px-3 py-2 text-sm hover:border-border-strong"
                    >
                      {other.name}
                      <span className="ml-2 tabular-nums text-subtle">{rating}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="shrink-0 text-subtle">{label}</dt>
      <dd className="text-right text-fg">{value}</dd>
    </div>
  );
}

function ChipList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-sm uppercase tracking-[0.16em] text-muted">{title}</h3>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs text-fg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

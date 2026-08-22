import { arcs } from "./arcs";
import { characters as rawCharacters } from "./characters";
import { applyDossier } from "./dossier";
import { teams } from "./teams";
import type { Character, Tone } from "./types";
import { overallRating } from "./types";
import { weapons } from "./weapons";

export const characters: Character[] = rawCharacters.map(applyDossier);

export { arcs, teams, weapons, overallRating };

export function getCharacter(slug: string) {
  return characters.find((c) => c.slug === slug);
}

export function getTeam(slug: string) {
  return teams.find((t) => t.slug === slug);
}

export function getArc(slug: string) {
  return arcs.find((a) => a.slug === slug);
}

export function getWeapon(slug: string) {
  return weapons.find((w) => w.slug === slug);
}

export function teamRoster(teamSlug: string) {
  return characters.filter((c) => c.team === teamSlug || c.formerTeams.includes(teamSlug));
}

export function currentRoster(teamSlug: string) {
  return characters.filter((c) => c.team === teamSlug);
}

export function featuredCharacters() {
  return characters.filter((c) => c.featured);
}

export function weaponUsers(slug: string) {
  const weapon = getWeapon(slug);
  if (!weapon) return [];
  return weapon.users
    .map((s) => getCharacter(s))
    .filter((c): c is Character => Boolean(c));
}

export type SearchHit = {
  href: string;
  title: string;
  subtitle: string;
  group: "Players" | "Teams" | "Arcs" | "Weapons";
};

export function searchCatalog(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  const hits: SearchHit[] = [];

  for (const c of characters) {
    const hay = [
      c.name,
      c.japanese,
      c.nickname,
      c.role,
      c.position,
      c.bio,
      c.origin,
      c.playStyle,
      c.likes,
      c.voice,
      ...(c.specialities ?? []),
    ]
      .join(" ")
      .toLowerCase();
    if (!q || hay.includes(q)) {
      hits.push({
        href: `/characters/${c.slug}`,
        title: c.name,
        subtitle: `${c.position} · ${overallRating(c.stats)} OVR · ${c.nickname}`,
        group: "Players",
      });
    }
  }
  for (const t of teams) {
    const hay = [t.name, t.japanese, t.country, t.summary].join(" ").toLowerCase();
    if (!q || hay.includes(q)) {
      hits.push({
        href: `/teams/${t.slug}`,
        title: t.name,
        subtitle: t.country,
        group: "Teams",
      });
    }
  }
  for (const a of arcs) {
    const hay = [a.name, a.summary, a.period].join(" ").toLowerCase();
    if (!q || hay.includes(q)) {
      hits.push({
        href: `/arcs/${a.slug}`,
        title: a.name,
        subtitle: a.period,
        group: "Arcs",
      });
    }
  }
  for (const w of weapons) {
    const hay = [w.name, w.kind, w.summary].join(" ").toLowerCase();
    if (!q || hay.includes(q)) {
      hits.push({
        href: `/weapons/${w.slug}`,
        title: w.name,
        subtitle: w.kind,
        group: "Weapons",
      });
    }
  }
  return hits;
}

export const TONE_VAR: Record<Tone, string> = {
  teal: "var(--color-tone-teal)",
  crimson: "var(--color-tone-crimson)",
  silver: "var(--color-tone-silver)",
  rose: "var(--color-tone-rose)",
  violet: "var(--color-tone-violet)",
  orange: "var(--color-tone-orange)",
  pink: "var(--color-tone-pink)",
  wine: "var(--color-tone-wine)",
  mint: "var(--color-tone-mint)",
  gold: "var(--color-tone-gold)",
  ink: "var(--color-tone-ink)",
  sky: "var(--color-tone-sky)",
};

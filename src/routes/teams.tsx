import { createFileRoute, Link } from "@tanstack/react-router";
import { currentRoster, teams, TONE_VAR } from "@/data/catalog";

export const Route = createFileRoute("/teams")({ component: TeamsPage });

function TeamsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Clubs & strata</p>
      <h1 className="mt-1 font-display text-3xl font-semibold uppercase">Teams</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Blue Lock’s letter teams, the Eleven, Japan U-20, and the five Neo Egoist League clubs.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {teams.map((team) => {
          const n = currentRoster(team.slug).length;
          return (
            <Link
              key={team.slug}
              to="/teams/$slug"
              params={{ slug: team.slug }}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{team.country}</p>
              <h2
                className="mt-2 font-display text-2xl uppercase"
                style={{ color: TONE_VAR[team.tone] }}
              >
                {team.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{team.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-subtle tabular-nums">
                {n} in current squad
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

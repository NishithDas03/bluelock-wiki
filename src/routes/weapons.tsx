import { createFileRoute, Link } from "@tanstack/react-router";
import { weapons } from "@/data/catalog";

export const Route = createFileRoute("/weapons")({ component: WeaponsPage });

function WeaponsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Arsenal</p>
      <h1 className="mt-1 font-display text-3xl font-semibold uppercase">Weapons</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        The shots, states, and ways of seeing that decide Blue Lock matches.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {weapons.map((weapon) => (
          <Link
            key={weapon.slug}
            to="/weapons/$slug"
            params={{ slug: weapon.slug }}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{weapon.kind}</p>
            <h2 className="mt-2 font-display text-2xl uppercase">{weapon.name}</h2>
            <p className="mt-3 text-sm text-muted">{weapon.summary}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-subtle">
              {weapon.users.length} known users
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

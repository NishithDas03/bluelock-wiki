import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CharacterCard } from "@/components/character-card";
import { currentRoster, getTeam, teamRoster } from "@/data/catalog";

export const Route = createFileRoute("/teams/$slug")({
  loader: ({ params }) => {
    const team = getTeam(params.slug);
    if (!team) throw notFound();
    return { team };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.team.name ?? "Team"} · Blue Lock Wiki` }],
  }),
  component: TeamPage,
});

function TeamPage() {
  const { team } = Route.useLoaderData();
  const current = currentRoster(team.slug);
  const all = teamRoster(team.slug);
  const former = all.filter((c) => c.team !== team.slug);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">{team.country}</p>
      <h1 className="mt-1 font-display text-4xl font-semibold uppercase">{team.name}</h1>
      <p className="mt-1 text-sm text-muted">{team.japanese}</p>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">{team.summary}</p>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <Fact label="Master" value={team.master} />
        <Fact label="Colors" value={team.colors} />
        <Fact label="Philosophy" value={team.philosophy} />
      </dl>

      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">{team.story}</p>

      {current.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl uppercase">Squad</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {current.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
        </section>
      )}

      {former.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl uppercase">Linked alumni</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {former.map((c) => (
              <Link
                key={c.slug}
                to="/characters/$slug"
                params={{ slug: c.slug }}
                className="rounded-md border border-border bg-surface px-3 py-2 text-sm hover:border-border-strong"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <dt className="text-[11px] uppercase tracking-[0.16em] text-subtle">{label}</dt>
      <dd className="mt-2 text-sm text-fg">{value}</dd>
    </div>
  );
}

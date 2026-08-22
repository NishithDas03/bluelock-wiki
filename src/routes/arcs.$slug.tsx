import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CharacterCard } from "@/components/character-card";
import { getArc, getCharacter, getTeam } from "@/data/catalog";

export const Route = createFileRoute("/arcs/$slug")({
  loader: ({ params }) => {
    const arc = getArc(params.slug);
    if (!arc) throw notFound();
    return { arc };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.arc.name ?? "Arc"} · Blue Lock Wiki` }],
  }),
  component: ArcPage,
});

function ArcPage() {
  const { arc } = Route.useLoaderData();
  const people = arc.keyCharacters.map(getCharacter).filter(Boolean);
  const sides = arc.keyTeams.map(getTeam).filter(Boolean);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">
        Selection {String(arc.order).padStart(2, "0")}
      </p>
      <h1 className="mt-1 font-display text-4xl font-semibold uppercase">{arc.name}</h1>
      <p className="mt-2 text-sm text-muted">{arc.period}</p>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{arc.summary}</p>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{arc.story}</p>

      {sides.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl uppercase">Teams</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {sides.map((team) =>
              team ? (
                <Link
                  key={team.slug}
                  to="/teams/$slug"
                  params={{ slug: team.slug }}
                  className="rounded-md border border-border bg-surface px-3 py-2 text-sm hover:border-border-strong"
                >
                  {team.name}
                </Link>
              ) : null,
            )}
          </div>
        </section>
      )}

      {people.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl uppercase">Key players</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {people.map((c) => (c ? <CharacterCard key={c.slug} character={c} /> : null))}
          </div>
        </section>
      )}
    </main>
  );
}

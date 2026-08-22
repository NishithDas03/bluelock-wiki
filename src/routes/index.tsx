import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Swords, Users } from "lucide-react";
import { CharacterCard } from "@/components/character-card";
import { Button } from "@/components/ui/button";
import { arcs, featuredCharacters, teams, weapons } from "@/data/catalog";
import { asset } from "@/lib/asset";
import { useSearchUi } from "@/lib/favorites";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const setSearchOpen = useSearchUi((s) => s.setOpen);
  const featured = featuredCharacters();

  return (
    <main>
      <section className="relative isolate min-h-[28rem] overflow-hidden border-b border-border lg:min-h-[30rem]">
        <img
          src={asset("/hero/pitch.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/30" />
        <div className="relative mx-auto flex min-h-[28rem] w-full max-w-6xl flex-col justify-end px-4 py-10 sm:px-6 lg:min-h-[30rem] lg:py-12">
          <p className="rise-in font-display text-sm uppercase tracking-[0.28em] text-primary">
            The Egoist Archive
          </p>
          <h1 className="rise-in rise-in-1 mt-3 max-w-3xl font-display text-4xl font-semibold uppercase leading-[0.92] tracking-wide text-fg">
            Blue Lock
            <span className="block text-muted">Wiki</span>
          </h1>
          <p className="rise-in rise-in-2 mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Players, weapons, clubs, and the selections that built Japan’s next number nine.
            Spoilers through the Neo Egoist League live in every page.
          </p>
          <div className="rise-in rise-in-3 mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/characters">Browse players</Link>
            </Button>
            <Button variant="secondary" onClick={() => setSearchOpen(true)}>
              Search the archive
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 px-4 py-10 sm:grid-cols-4 sm:px-6">
        {[
          { n: "37", l: "Profiles" },
          { n: "10", l: "Teams" },
          { n: "5", l: "Selections" },
          { n: "18", l: "Weapons" },
        ].map((item) => (
          <div key={item.l} className="rounded-lg border border-border bg-surface px-4 py-5">
            <p className="font-display text-3xl font-semibold tabular-nums text-fg">{item.n}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{item.l}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Featured</p>
            <h2 className="mt-1 font-display text-2xl font-semibold uppercase">Egoists</h2>
          </div>
          <Link
            to="/characters"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
          >
            All players <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featured.slice(0, 8).map((character) => (
            <CharacterCard key={character.slug} character={character} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Story</p>
            <h2 className="mt-1 font-display text-2xl font-semibold uppercase">Selections</h2>
            <ul className="mt-6 divide-y divide-border">
              {arcs.map((arc) => (
                <li key={arc.slug}>
                  <Link
                    to="/arcs/$slug"
                    params={{ slug: arc.slug }}
                    className="flex items-start justify-between gap-4 py-4 transition-colors hover:text-primary"
                  >
                    <span>
                      <span className="font-display text-lg uppercase tracking-wide text-fg">
                        {String(arc.order).padStart(2, "0")} · {arc.name}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{arc.summary}</span>
                    </span>
                    <ArrowRight className="mt-1 size-4 shrink-0 text-subtle" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="/teams"
              className="flex flex-1 flex-col justify-between rounded-xl border border-border bg-bg p-6 transition-colors hover:border-border-strong"
            >
              <Users className="size-5 text-primary" />
              <div className="mt-8">
                <h3 className="font-display text-2xl uppercase">Teams</h3>
                <p className="mt-2 text-sm text-muted">
                  From Team Z’s leftovers to Bastard München’s laboratory. {teams.length} clubs and strata.
                </p>
              </div>
            </Link>
            <Link
              to="/weapons"
              className="flex flex-1 flex-col justify-between rounded-xl border border-border bg-bg p-6 transition-colors hover:border-border-strong"
            >
              <Swords className="size-5 text-primary" />
              <div className="mt-8">
                <h3 className="font-display text-2xl uppercase">Weapons</h3>
                <p className="mt-2 text-sm text-muted">
                  Direct Shot, Meta Vision, Kaiser Impact, and the rest of the {weapons.length}-entry arsenal.
                </p>
              </div>
            </Link>
            <Link
              to="/compare"
              className="flex flex-1 flex-col justify-between rounded-xl border border-border bg-bg p-6 transition-colors hover:border-border-strong"
            >
              <div className="mt-0">
                <h3 className="font-display text-2xl uppercase">Compare</h3>
                <p className="mt-2 text-sm text-muted">
                  Overlay two egoists. See who actually owns the box.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

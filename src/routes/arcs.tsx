import { createFileRoute, Link } from "@tanstack/react-router";
import { arcs } from "@/data/catalog";

export const Route = createFileRoute("/arcs")({ component: ArcsPage });

function ArcsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Story</p>
      <h1 className="mt-1 font-display text-3xl font-semibold uppercase">Arcs</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Five selections. One project. From Building 5 to the Neo Egoist League.
      </p>
      <ol className="mt-8 space-y-3">
        {arcs.map((arc) => (
          <li key={arc.slug}>
            <Link
              to="/arcs/$slug"
              params={{ slug: arc.slug }}
              className="block rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">
                Selection {String(arc.order).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-2xl uppercase">{arc.name}</h2>
              <p className="mt-1 text-xs text-subtle">{arc.period}</p>
              <p className="mt-3 text-sm text-muted">{arc.summary}</p>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PlayerDossier } from "@/components/player-dossier";
import { getCharacter } from "@/data/catalog";

export const Route = createFileRoute("/characters/$slug")({
  loader: ({ params }) => {
    const character = getCharacter(params.slug);
    if (!character) throw notFound();
    return { character };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.character.name ?? "Player"} · Blue Lock Wiki` }],
  }),
  component: CharacterPage,
});

function CharacterPage() {
  const { character } = Route.useLoaderData();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <Link
        to="/characters"
        className="inline-flex h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        All players
      </Link>
      <div className="mt-6">
        <PlayerDossier character={character} />
      </div>
    </main>
  );
}

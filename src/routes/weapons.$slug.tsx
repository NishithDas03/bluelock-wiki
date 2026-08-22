import { createFileRoute, notFound } from "@tanstack/react-router";
import { CharacterCard } from "@/components/character-card";
import { getWeapon, weaponUsers } from "@/data/catalog";

export const Route = createFileRoute("/weapons/$slug")({
  loader: ({ params }) => {
    const weapon = getWeapon(params.slug);
    if (!weapon) throw notFound();
    return { weapon };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.weapon.name ?? "Weapon"} · Blue Lock Wiki` }],
  }),
  component: WeaponPage,
});

function WeaponPage() {
  const { weapon } = Route.useLoaderData();
  const users = weaponUsers(weapon.slug);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">{weapon.kind}</p>
      <h1 className="mt-1 font-display text-4xl font-semibold uppercase">{weapon.name}</h1>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">{weapon.summary}</p>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">{weapon.detail}</p>

      {users.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl uppercase">Users</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {users.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

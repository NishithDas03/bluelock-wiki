import { Link } from "@tanstack/react-router";

export function NotFoundComponent() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-sm tracking-[0.25em] text-primary">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold uppercase text-fg">
        Offside
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        That page is not in the archive. The ranking list does not wait.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-fg transition-transform duration-150 ease-out active:scale-[0.96]"
      >
        Return to the facility
      </Link>
    </main>
  );
}

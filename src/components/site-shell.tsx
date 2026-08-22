import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { useState, type ReactNode } from "react";
import { PlayerInspect } from "@/components/player-inspect";
import { SearchCommand } from "@/components/search-command";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useSearchUi } from "@/lib/favorites";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/characters", label: "Players" },
  { to: "/teams", label: "Teams" },
  { to: "/arcs", label: "Arcs" },
  { to: "/weapons", label: "Weapons" },
  { to: "/compare", label: "Compare" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const setSearchOpen = useSearchUi((s) => s.setOpen);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-fg">
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
                <path
                  fill="currentColor"
                  d="M8 10.5V8a4 4 0 0 1 8 0v2.5h-2V8.2a2 2 0 0 0-4 0V10.5H8z"
                />
                <rect x="6.5" y="10" width="11" height="8.5" rx="1.8" fill="currentColor" />
                <circle cx="12" cy="14.2" r="1.2" fill="var(--color-primary-fg)" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-fg">
              Blue Lock
              <span className="ml-1.5 text-muted">Wiki</span>
            </span>
          </Link>

          <nav className="ml-6 hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors duration-150",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="hidden min-w-44 justify-start gap-2 text-muted sm:inline-flex"
            >
              <Search className="size-4" />
              Search
              <kbd className="ml-auto rounded-sm border border-border px-1.5 font-mono text-[10px] text-subtle">
                ⌘K
              </kbd>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="sm:hidden"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="size-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent>
          <SheetTitle className="font-display text-xl uppercase tracking-wide">Menu</SheetTitle>
          <nav className="mt-8 flex flex-col gap-1">
            {NAV.map((item) => (
              <SheetClose asChild key={item.to}>
                <Link
                  to={item.to}
                  className="rounded-md px-3 py-3 text-base text-fg hover:bg-surface-2"
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <SearchCommand />
      <PlayerInspect />

      <div className="flex-1">{children}</div>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-display text-sm uppercase tracking-[0.18em] text-muted">
            The Egoist Archive
          </p>
          <p className="text-xs text-subtle">
            Fan wiki covering Blue Lock through the Neo Egoist League. Spoilers live here.
          </p>
        </div>
      </footer>
    </div>
  );
}

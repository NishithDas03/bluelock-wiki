import { Command } from "cmdk";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { searchCatalog, type SearchHit } from "@/data/catalog";
import { useSearchUi } from "@/lib/favorites";
import { useInspect } from "@/lib/inspect";

const GROUPS: SearchHit["group"][] = ["Players", "Teams", "Arcs", "Weapons"];

export function SearchCommand() {
  const open = useSearchUi((s) => s.open);
  const setOpen = useSearchUi((s) => s.setOpen);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(!open);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const hits = useMemo(() => searchCatalog(query), [query]);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    const player = href.match(/^\/characters\/([^/]+)$/);
    if (player) {
      useInspect.getState().open(player[1]);
      return;
    }
    router.navigate({ to: href });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]">
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-bg/70"
        onClick={() => setOpen(false)}
      />
      <Command
        label="Search the archive"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
      >
        <Command.Input
          autoFocus
          value={query}
          onValueChange={setQuery}
          placeholder="Search players, teams, arcs, weapons…"
          className="h-12 w-full border-b border-border bg-transparent px-4 text-sm text-fg outline-none placeholder:text-subtle"
        />
        <Command.List className="max-h-[min(24rem,50vh)] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
            Nothing in the archive matches that.
          </Command.Empty>
          {GROUPS.map((group) => {
            const items = hits.filter((hit) => hit.group === group).slice(0, 8);
            if (!items.length) return null;
            return (
              <Command.Group
                key={group}
                heading={group}
                className="mb-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-display [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.16em] [&_[cmdk-group-heading]]:text-subtle"
              >
                {items.map((hit) => (
                  <Command.Item
                    key={hit.href}
                    value={`${group} ${hit.title} ${hit.subtitle}`}
                    onSelect={() => go(hit.href)}
                    className="flex cursor-pointer flex-col rounded-md px-3 py-2 data-[selected=true]:bg-surface-2"
                  >
                    <span className="text-sm text-fg">{hit.title}</span>
                    <span className="text-xs text-muted">{hit.subtitle}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            );
          })}
        </Command.List>
        <p className="border-t border-border px-4 py-2 text-[11px] text-subtle">
          Type a name or weapon. Enter to open.
        </p>
      </Command>
    </div>
  );
}

import type { Stats } from "./types";

type Core = Pick<
  Stats,
  "speed" | "shooting" | "dribbling" | "passing" | "defense" | "physical" | "iq" | "ego"
>;

function clamp(n: number) {
  return Math.max(20, Math.min(99, Math.round(n)));
}

/** Fill a complete sheet from the eight radar ratings, with optional overrides. */
export function sheet(core: Core, extra: Partial<Stats> = {}): Stats {
  return {
    ...core,
    acceleration: clamp(core.speed + 1),
    topSpeed: clamp(core.speed - 1),
    finishing: clamp(core.shooting + 1),
    shotPower: clamp(core.shooting - 1),
    volleys: clamp(core.shooting - 4),
    positioning: clamp((core.iq + core.shooting) / 2),
    shortPassing: clamp(core.passing + 1),
    vision: clamp((core.passing + core.iq) / 2),
    crossing: clamp(core.passing - 10),
    ballControl: clamp(core.dribbling + 1),
    agility: clamp((core.dribbling + core.speed) / 2),
    firstTouch: clamp(core.dribbling - 2),
    marking: clamp(core.defense + 1),
    interceptions: clamp((core.defense + core.iq) / 2),
    tackling: clamp(core.defense - 3),
    strength: clamp(core.physical + 1),
    stamina: clamp(core.physical - 2),
    jumping: clamp(core.physical - 4),
    flexibility: clamp((core.physical + core.speed) / 2 - 8),
    composure: clamp((core.iq + core.ego) / 2),
    aggression: clamp(core.ego - 6),
    workRate: clamp((core.physical + core.ego) / 2),
    flow: clamp(core.ego - 8),
    ...extra,
  };
}

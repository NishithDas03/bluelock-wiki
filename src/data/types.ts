export type Position = "FW" | "MF" | "DF" | "GK" | "STAFF";

export type Tone =
  | "teal"
  | "crimson"
  | "silver"
  | "rose"
  | "violet"
  | "orange"
  | "pink"
  | "wine"
  | "mint"
  | "gold"
  | "ink"
  | "sky";

export interface Stats {
  speed: number;
  shooting: number;
  dribbling: number;
  passing: number;
  defense: number;
  physical: number;
  iq: number;
  ego: number;
  acceleration: number;
  topSpeed: number;
  finishing: number;
  shotPower: number;
  volleys: number;
  positioning: number;
  shortPassing: number;
  vision: number;
  crossing: number;
  ballControl: number;
  agility: number;
  firstTouch: number;
  marking: number;
  interceptions: number;
  tackling: number;
  strength: number;
  stamina: number;
  jumping: number;
  flexibility: number;
  composure: number;
  aggression: number;
  workRate: number;
  flow: number;
}

export interface Ability {
  name: string;
  detail: string;
}

export interface RecordRow {
  label: string;
  value: string;
}

export interface SeasonLine {
  competition: string;
  apps: string;
  goals: string;
  assists: string;
}

export interface TimelineEvent {
  when: string;
  event: string;
}

export interface Character {
  slug: string;
  name: string;
  familyName: string;
  givenName: string;
  japanese: string;
  nickname: string;
  position: Position;
  number: number | null;
  age: string;
  birthday: string;
  height: string;
  weight: string;
  bloodType: string;
  foot: string;
  highSchool: string;
  origin: string;
  likes: string;
  voice?: string;
  team: string;
  formerTeams: string[];
  jerseyHistory: string;
  rankLabel: string;
  bid: string;
  playStyle: string;
  strengths: string[];
  weaknesses: string[];
  specialities?: string[];
  abilities: Ability[];
  record: RecordRow[];
  season?: SeasonLine[];
  timeline?: TimelineEvent[];
  weapons: string[];
  related: string[];
  bio: string;
  story: string;
  quote: string;
  stats: Stats;
  tone: Tone;
  featured?: boolean;
  portrait?: string;
  role: string;
}

export interface Team {
  slug: string;
  name: string;
  japanese: string;
  country: string;
  master: string;
  colors: string;
  philosophy: string;
  summary: string;
  story: string;
  tone: Tone;
}

export interface Arc {
  slug: string;
  name: string;
  order: number;
  period: string;
  summary: string;
  story: string;
  keyCharacters: string[];
  keyTeams: string[];
}

export interface Weapon {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  detail: string;
  users: string[];
}

export const STAT_KEYS: { key: keyof Stats; label: string }[] = [
  { key: "speed", label: "Speed" },
  { key: "shooting", label: "Shooting" },
  { key: "dribbling", label: "Dribble" },
  { key: "passing", label: "Passing" },
  { key: "defense", label: "Defense" },
  { key: "physical", label: "Physical" },
  { key: "iq", label: "Football IQ" },
  { key: "ego", label: "Ego" },
];

export const FIFA_KEYS: { key: keyof Stats; label: string }[] = [
  { key: "speed", label: "PAC" },
  { key: "shooting", label: "SHO" },
  { key: "passing", label: "PAS" },
  { key: "dribbling", label: "DRI" },
  { key: "defense", label: "DEF" },
  { key: "physical", label: "PHY" },
];

export const STAT_GROUPS: { label: string; keys: { key: keyof Stats; label: string }[] }[] = [
  {
    label: "Pace",
    keys: [
      { key: "acceleration", label: "Acceleration" },
      { key: "topSpeed", label: "Top speed" },
    ],
  },
  {
    label: "Shooting",
    keys: [
      { key: "finishing", label: "Finishing" },
      { key: "shotPower", label: "Shot power" },
      { key: "volleys", label: "Volleys" },
      { key: "positioning", label: "Positioning" },
    ],
  },
  {
    label: "Passing",
    keys: [
      { key: "shortPassing", label: "Short passing" },
      { key: "vision", label: "Vision" },
      { key: "crossing", label: "Crossing" },
    ],
  },
  {
    label: "Dribble",
    keys: [
      { key: "ballControl", label: "Ball control" },
      { key: "agility", label: "Agility" },
      { key: "firstTouch", label: "First touch" },
    ],
  },
  {
    label: "Defense",
    keys: [
      { key: "marking", label: "Marking" },
      { key: "interceptions", label: "Interceptions" },
      { key: "tackling", label: "Tackling" },
    ],
  },
  {
    label: "Physical",
    keys: [
      { key: "strength", label: "Strength" },
      { key: "stamina", label: "Stamina" },
      { key: "jumping", label: "Jumping" },
      { key: "flexibility", label: "Flexibility" },
    ],
  },
  {
    label: "Mental",
    keys: [
      { key: "composure", label: "Composure" },
      { key: "aggression", label: "Aggression" },
      { key: "workRate", label: "Work rate" },
      { key: "flow", label: "Flow" },
    ],
  },
];

export const POSITION_LABEL: Record<Position, string> = {
  FW: "Forward",
  MF: "Midfielder",
  DF: "Defender",
  GK: "Goalkeeper",
  STAFF: "Staff",
};

export function overallRating(stats: Stats): number {
  const sum = STAT_KEYS.reduce((total, stat) => total + stats[stat.key], 0);
  return Math.round(sum / STAT_KEYS.length);
}

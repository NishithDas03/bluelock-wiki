import type { SeasonLine, TimelineEvent } from "./types";

export type Dossier = {
  voice: string;
  specialities: string[];
  season: SeasonLine[];
  timeline: TimelineEvent[];
};

export const dossiers: Record<string, Dossier> = {
  isagi: {
    voice: "Kazuki Ura",
    specialities: ["Raumdeuter", "Direct volley", "Playmaker", "Engine"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "4", assists: "4" },
      { competition: "U-20 match", apps: "1", goals: "1", assists: "0" },
    ],
    timeline: [
      { when: "Entry", event: "Ranked near the bottom of 300. Ichinan High leftover." },
      { when: "First Selection", event: "Direct Shot born. Team Z survives as the story of Building 5." },
      { when: "Second Selection", event: "Forced chemistry with Bachira, Nagi, Barou." },
      { when: "U-20", event: "Winning volley. Blue Lock’s wager lives." },
      { when: "NEL · PXG", event: "Two-Gun Volley. Tied #1 at ¥240M with Rin." },
    ],
  },
  bachira: {
    voice: "Tasuku Kaito",
    specialities: ["Dribbler", "Acrobat", "Playmaker"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "5", assists: "2" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Childhood", event: "Invented the Monster so he would not play alone." },
      { when: "First Selection", event: "Team Z’s heartbeat. Found Isagi." },
      { when: "Second Selection", event: "Left Isagi to test the Monster solo." },
      { when: "NEL", event: "Ginga × Monster at Barcha. ¥120M. 5 goals." },
    ],
  },
  kunigami: {
    voice: "Yuki Ono",
    specialities: ["Power shot", "Target man", "Aerial threat"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "2", assists: "1" },
      { competition: "First Selection", apps: "4", goals: "—", assists: "—" },
    ],
    timeline: [
      { when: "Team Z", event: "Honest lefty. The hero of Building 5." },
      { when: "Second Selection", event: "Eliminated by Shido. Hero dies." },
      { when: "Wild Card", event: "Body rebuilt. Smile stripped." },
      { when: "NEL", event: "Bastard #50. 2 goals, 1 assist. Still a weapon." },
    ],
  },
  chigiri: {
    voice: "Soma Saito",
    specialities: ["Speedster", "Crosser", "Engine"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "3", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Pre-Lock", event: "Torn ACL. Almost retired the panther." },
      { when: "First Selection", event: "Gambles the other knee. 50 m in 5.77 s." },
      { when: "U-20", event: "Outside threat for the Eleven." },
      { when: "NEL", event: "Godspeed at Manshine. 3 goals. Top-23." },
    ],
  },
  nagi: {
    voice: "Nobunaga Shimazaki",
    specialities: ["Acrobat", "Poacher", "Strength"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "1", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "1", assists: "0" },
    ],
    timeline: [
      { when: "Pre-Lock", event: "Zero club minutes. Reo’s treasure." },
      { when: "First Selection", event: "Team V dismantles rooms with trap-volleys." },
      { when: "U-20", event: "Bicycle goal against Japan." },
      { when: "NEL", event: "Genius dims, then flickers. Bid falls. Eliminated." },
    ],
  },
  reo: {
    voice: "Yuma Uchida",
    specialities: ["Playmaker", "Engine", "Tactician"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "1", assists: "2" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Origin", event: "Mikage heir. Buys a genius named Nagi." },
      { when: "First Selection", event: "Team V architect." },
      { when: "Second Selection", event: "Breakup. The treasure walks." },
      { when: "NEL", event: "Copies Meta Vision. Scores. Bid still slips." },
    ],
  },
  rin: {
    voice: "Koki Uchiyama",
    specialities: ["Complete forward", "Dribbler", "Clinical"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "7", assists: "2" },
      { competition: "U-20 match", apps: "1", goals: "—", assists: "—" },
    ],
    timeline: [
      { when: "Entry", event: "Blue Lock #1 on day one." },
      { when: "U-20", event: "Captains the Eleven. Family civil war with Sae." },
      { when: "NEL · Ubers", event: "Destroyer Flow. League-high 7 goals (tied)." },
      { when: "NEL · Bastard", event: "Tied #1 at ¥240M. Re Al watching." },
    ],
  },
  sae: {
    voice: "Takahiro Sakurai",
    specialities: ["Playmaker", "Dribbler", "Vision"],
    season: [{ competition: "U-20 match", apps: "1", goals: "0", assists: "—" }],
    timeline: [
      { when: "Youth", event: "Leaves Japan. Promises Rin a World Cup." },
      { when: "Spain", event: "Becomes a midfielder. Japan has no striker." },
      { when: "U-20", event: "Returns as #10. Partners Shido. Still waiting." },
    ],
  },
  barou: {
    voice: "Junichi Suwabe",
    specialities: ["Poacher", "Strength", "Clinical"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "7", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "1", assists: "0" },
    ],
    timeline: [
      { when: "First Selection", event: "Team X monarch. Dethroned by Isagi." },
      { when: "Second Selection", event: "Learns a king who cannot adapt is a man." },
      { when: "U-20", event: "Predator Eye goal." },
      { when: "NEL", event: "Ubers #10. 7 goals. ¥150M." },
    ],
  },
  shido: {
    voice: "Yuichi Nakamura",
    specialities: ["Acrobat", "Poacher", "Strength"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "4", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "—", assists: "—" },
    ],
    timeline: [
      { when: "Isolation", event: "Locked up for being too dangerous." },
      { when: "U-20", event: "Released as Sae’s striker." },
      { when: "Second Selection", event: "Ends Kunigami’s first life." },
      { when: "NEL", event: "PXG chaos. 4 goals. ¥160M." },
    ],
  },
  kaiser: {
    voice: "Yuichiro Umehara",
    specialities: ["Clinical", "Power shot", "Complete forward"],
    season: [{ competition: "Neo Egoist League", apps: "4", goals: "4", assists: "1" }],
    timeline: [
      { when: "Bastard", event: "New Gen XI emperor. Ness as mage." },
      { when: "NEL · Barcha", event: "Kaiser Impact answers Bachira." },
      { when: "NEL", event: "Civil war with Isagi. Formula cracks." },
      { when: "NEL · PXG", event: "Evolves beyond the throne. Re Al ¥400M interest." },
    ],
  },
  ness: {
    voice: "Shoya Chiba",
    specialities: ["Playmaker", "Crosser"],
    season: [{ competition: "Neo Egoist League", apps: "4", goals: "0", assists: "3" }],
    timeline: [
      { when: "Youth", event: "Wanted magic. Found Kaiser." },
      { when: "NEL", event: "Perfect assist machine. ¥50M → ¥130M." },
      { when: "Crack", event: "Emperor’s formula dies. Mage has to choose." },
    ],
  },
  lorenzo: {
    voice: "—",
    specialities: ["Tackler", "Strength", "Engine"],
    season: [{ competition: "Neo Egoist League", apps: "4", goals: "0", assists: "0" }],
    timeline: [
      { when: "Street", event: "Grew up with nothing. Hunger as a weapon." },
      { when: "Snuffy", event: "Pulled into Ubers’ church." },
      { when: "NEL", event: "Man-marks Kaiser and Isagi. Ace eater." },
    ],
  },
  aiku: {
    voice: "Shinichiro Kamio",
    specialities: ["Tactician", "Aerial threat", "Leader"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "0", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Youth", event: "Converted striker. Japan U-20 captain." },
      { when: "U-20", event: "Almost buries Blue Lock." },
      { when: "NEL", event: "Walks into Ubers. Meta Vision from the back." },
    ],
  },
  yukimiya: {
    voice: "Takuya Eguchi",
    specialities: ["Dribbler", "Sniper", "FK specialist"],
    season: [
      { competition: "Neo Egoist League", apps: "3", goals: "1", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Diagnosis", event: "Vision is on a clock. Every match might be last." },
      { when: "U-20", event: "Blue Lock Eleven regular." },
      { when: "NEL", event: "Gyro Shot vs the German box. 1 goal." },
    ],
  },
  hiori: {
    voice: "Shun Horie",
    specialities: ["Playmaker", "Tactician"],
    season: [{ competition: "Neo Egoist League", apps: "2", goals: "0", assists: "1" }],
    timeline: [
      { when: "Kyoto", event: "Raised by football-obsessed parents. Did not want the game." },
      { when: "Early Lock", event: "High-IQ bench. Would not shoot." },
      { when: "NEL", event: "Awakens as Isagi’s composer. 1 assist. Top-23." },
    ],
  },
  gagamaru: {
    voice: "Shugo Nakamura",
    specialities: ["GK · Reflexes", "Acrobat", "Strength"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "0", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Team Z", event: "Chaotic forward. Jungle body." },
      { when: "Conversion", event: "Ego puts him in goal. A monster appears." },
      { when: "U-20", event: "Starting keeper for the Eleven." },
      { when: "NEL", event: "Bastard #99. Dives at Impacts." },
    ],
  },
  karasu: {
    voice: "Makoto Furukawa",
    specialities: ["Tackler", "Tactician", "Engine"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "0", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Osaka", event: "Youth team with Hiori. The assassin of habits." },
      { when: "Third Selection", event: "Brain trust with Otoya." },
      { when: "U-20", event: "Blue Lock midfield." },
      { when: "NEL", event: "PXG adult in the room. Top-23." },
    ],
  },
  otoya: {
    voice: "Kengo Kawanishi",
    specialities: ["Poacher", "Speedster"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "2", assists: "1" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Aichi", event: "Ninja lineage. Looks asleep." },
      { when: "Third Selection", event: "Karasu’s blade." },
      { when: "NEL", event: "PXG shadow runner. 2 goals, 1 assist." },
    ],
  },
  niko: {
    voice: "Natsuki Hanae",
    specialities: ["Tactician", "Playmaker"],
    season: [{ competition: "Neo Egoist League", apps: "4", goals: "0", assists: "1" }],
    timeline: [
      { when: "Team Y", event: "Six-back thesis almost kills Team Z." },
      { when: "Loss", event: "Isagi beats the read. Niko takes it as data." },
      { when: "NEL", event: "Ubers centre-back. Assist for Barou. Top-23." },
    ],
  },
  aryu: {
    voice: "Katsuyuki Konishi",
    specialities: ["Aerial threat", "Tackler"],
    season: [
      { competition: "Neo Egoist League", apps: "4", goals: "0", assists: "0" },
      { competition: "U-20 match", apps: "1", goals: "0", assists: "0" },
    ],
    timeline: [
      { when: "Team V", event: "Beautiful wall next to Tokimitsu." },
      { when: "U-20", event: "Eleven starter." },
      { when: "NEL", event: "PXG fashion centre-back. Lowest bid rise still enough." },
    ],
  },
  tokimitsu: {
    voice: "Shoki Lin",
    specialities: ["Engine", "Strength"],
    season: [{ competition: "Neo Egoist League", apps: "4", goals: "0", assists: "0" }],
    timeline: [
      { when: "Second Selection", event: "Apologizes while bodying everyone." },
      { when: "NEL", event: "PXG press tool. Bid falls. Eliminated." },
    ],
  },
  kurona: {
    voice: "Chiaki Kobayashi",
    specialities: ["Engine", "Dribbler"],
    season: [{ competition: "Neo Egoist League", apps: "4", goals: "0", assists: "1" }],
    timeline: [
      { when: "NEL", event: "Bastard support striker. Pass. Run. Return." },
      { when: "Link", event: "Assist for Isagi. Top-23." },
    ],
  },
  raichi: {
    voice: "Yoshitsugu Matsuoka",
    specialities: ["Tackler", "Engine"],
    season: [{ competition: "Neo Egoist League", apps: "3", goals: "0", assists: "0" }],
    timeline: [
      { when: "Team Z", event: "Loudest dog in Building 5." },
      { when: "NEL", event: "Bastard press. Top-23 by sheer violence." },
    ],
  },
  charles: {
    voice: "—",
    specialities: ["Playmaker", "Flair"],
    season: [{ competition: "Neo Egoist League", apps: "3", goals: "0", assists: "4" }],
    timeline: [
      { when: "PXG academy", event: "Child genius. Loki’s toybox." },
      { when: "NEL", event: "4 assists for Rin and Shido because it looked fun." },
    ],
  },
  sendou: {
    voice: "KENN",
    specialities: ["Poacher", "Clinical"],
    season: [
      { competition: "Neo Egoist League", apps: "3", goals: "1", assists: "1" },
      { competition: "U-20 match", apps: "1", goals: "—", assists: "—" },
    ],
    timeline: [
      { when: "U-20", event: "Japan’s official ace. The country believed in him." },
      { when: "Loss", event: "Blue Lock wins. Pride stays." },
      { when: "NEL", event: "Ubers second striker. 1 goal, 1 assist for Barou." },
    ],
  },
  nanase: {
    voice: "—",
    specialities: ["Engine", "Playmaker"],
    season: [{ competition: "Neo Egoist League", apps: "2", goals: "0", assists: "0" }],
    timeline: [
      { when: "Third Selection", event: "Paired with Isagi. Makes the extra run." },
      { when: "NEL", event: "PXG support. Top-23 as a ladder who started climbing." },
    ],
  },
  ego: {
    voice: "Hiroshi Kamiya",
    specialities: ["Theory"],
    season: [],
    timeline: [
      { when: "Pitch", event: "Sells the JFU a steel cube and a heresy." },
      { when: "U-20 wager", event: "Wins the program’s life." },
      { when: "NEL", event: "Rents Europe. Still wants one World Cup boot." },
    ],
  },
  anri: {
    voice: "Eri Yukimura",
    specialities: [],
    season: [],
    timeline: [
      { when: "JFU", event: "Stakes her career on Ego’s madness." },
      { when: "Selections", event: "Translates the cube to suits." },
    ],
  },
  noa: {
    voice: "—",
    specialities: ["Complete forward", "Clinical", "Tactician"],
    season: [{ competition: "Neo Egoist League", apps: "1", goals: "1", assists: "0" }],
    timeline: [
      { when: "World", event: "Current No. 1. Football as pure logic." },
      { when: "NEL", event: "Master of Bastard. Scores when the equation asks." },
    ],
  },
  igarashi: {
    voice: "Aoi Ichikawa",
    specialities: ["Malicia"],
    season: [{ competition: "Neo Egoist League", apps: "1", goals: "0", assists: "0" }],
    timeline: [
      { when: "Entry", event: "Lowest rank. No weapon except not quitting." },
      { when: "Team Z", event: "#13. Dive-blocks Nagi. Survives on spirit." },
      { when: "Second Selection", event: "Malicia flopping helps Shido." },
      { when: "NEL", event: "Bastard side-back. Rank 36. ¥3M Kamakura offer. Out." },
    ],
  },
  zantetsu: {
    voice: "Kazuyuki Okitsu",
    specialities: ["Speedster", "Acceleration"],
    season: [{ competition: "Neo Egoist League", apps: "3", goals: "0", assists: "0" }],
    timeline: [
      { when: "Team V", event: "#10. Fake glasses. Explosive first step." },
      { when: "Second Selection", event: "Survives as the honored run." },
      { when: "NEL", event: "PXG right wing. Rank 19. Japan U-20." },
    ],
  },
  kiyora: {
    voice: "—",
    specialities: ["Lefty", "Playmaker"],
    season: [{ competition: "Neo Egoist League", apps: "1", goals: "0", assists: "1" }],
    timeline: [
      { when: "Fukuoka", event: "165 cm. Sharpen the blade." },
      { when: "NEL · PXG", event: "One match. Assist for Kaiser. Only one-game Top-23." },
    ],
  },
  loki: {
    voice: "—",
    specialities: ["Speedster", "Complete forward"],
    season: [{ competition: "World stage", apps: "—", goals: "—", assists: "—" }],
    timeline: [
      { when: "World", event: "New Gen XI. The fastest idea on grass." },
      { when: "NEL", event: "PXG master. Coaches fireworks from inside the blast." },
    ],
  },
  snuffy: {
    voice: "—",
    specialities: ["Complete midfielder", "Leader", "Engine"],
    season: [{ competition: "World stage", apps: "—", goals: "—", assists: "—" }],
    timeline: [
      { when: "World", event: "No. 2. Total football as a family business." },
      { when: "NEL", event: "Tries to teach Barou that a king can also be a teammate." },
    ],
  },
  lavinho: {
    voice: "—",
    specialities: ["Dribbler", "Flair"],
    season: [{ competition: "Neo Egoist League", apps: "2", goals: "1", assists: "2" }],
    timeline: [
      { when: "Street", event: "Malicia as joy. Football as dance." },
      { when: "NEL", event: "Barcha master. 1 goal, 2 assists. Teaches Bachira Ginga." },
    ],
  },
  chris: {
    voice: "—",
    specialities: ["Aesthetic", "Engine"],
    season: [{ competition: "Neo Egoist League", apps: "2", goals: "0", assists: "1" }],
    timeline: [
      { when: "Brand", event: "England’s body-and-camera religion." },
      { when: "NEL", event: "Rebuilds Chigiri’s acceleration. Assist for Reo." },
    ],
  },
};

export function applyDossier<T extends { slug: string }>(
  character: T,
): T & { voice: string; specialities: string[]; season: SeasonLine[]; timeline: TimelineEvent[] } {
  const extra = dossiers[character.slug];
  return {
    ...character,
    voice: extra?.voice ?? "—",
    specialities: extra?.specialities ?? [],
    season: extra?.season ?? [],
    timeline: extra?.timeline ?? [],
  };
}

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { STAT_KEYS, type Character } from "@/data/types";

export function StatRadar({
  character,
  compare,
}: {
  character: Character;
  compare?: Character;
}) {
  const data = STAT_KEYS.map((stat) => ({
    stat: stat.label,
    a: character.stats[stat.key],
    b: compare ? compare.stats[stat.key] : undefined,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="72%">
          <PolarGrid stroke="color-mix(in oklab, var(--color-fg) 14%, transparent)" />
          <PolarAngleAxis
            dataKey="stat"
            tick={{ fill: "var(--color-muted)", fontSize: 11 }}
          />
          <PolarRadiusAxis
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name={character.givenName}
            dataKey="a"
            stroke="var(--color-primary)"
            fill="var(--color-primary)"
            fillOpacity={0.22}
            strokeWidth={2}
          />
          {compare ? (
            <Radar
              name={compare.givenName}
              dataKey="b"
              stroke="var(--color-tone-crimson)"
              fill="var(--color-tone-crimson)"
              fillOpacity={0.12}
              strokeWidth={2}
            />
          ) : null}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

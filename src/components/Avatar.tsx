// Deterministic avatar: initials on gradient background seeded from name.
// Used across community/testimonial UI to give Kahsya a "people-first" feel.

const gradients = [
  "from-blue-400 to-blue-600",
  "from-orange-400 to-orange-600",
  "from-purple-400 to-purple-600",
  "from-pink-400 to-pink-600",
  "from-green-400 to-green-600",
  "from-cyan-400 to-cyan-600",
  "from-indigo-400 to-indigo-600",
  "from-rose-400 to-rose-600",
];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Avatar({
  name,
  size = 40,
  ring = false,
}: {
  name: string;
  size?: number;
  ring?: boolean;
}) {
  const grad = gradients[hash(name) % gradients.length];
  const fontSize = Math.round(size * 0.38);
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-br ${grad} text-white font-black tracking-tight flex-shrink-0 ${
        ring ? "ring-[3px] ring-white" : ""
      }`}
      style={{ width: size, height: size, fontSize }}
      aria-label={name}
    >
      {initials(name)}
    </div>
  );
}

export function AvatarStack({
  names,
  size = 36,
  max = 5,
}: {
  names: string[];
  size?: number;
  max?: number;
}) {
  const visible = names.slice(0, max);
  return (
    <div className="flex -space-x-2">
      {visible.map((n) => (
        <Avatar key={n} name={n} size={size} ring />
      ))}
    </div>
  );
}

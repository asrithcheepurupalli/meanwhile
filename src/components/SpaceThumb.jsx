/**
 * A deterministic little floor-plan thumbnail derived from a listing id.
 * every space gets its own plan, drawn not photographed. On-theme + zero assets.
 */
export default function SpaceThumb({ seed = "", tone = "var(--color-signal)", lit = true }) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 9973;
  const r = (n) => {
    h = (h * 1103515245 + 12345) % 2147483648;
    return (h / 2147483648) * n;
  };
  const vx = 40 + r(60); // vertical divider x
  const hy = 30 + r(40); // horizontal divider y
  const litRoom = Math.floor(r(4));

  const rooms = [
    { x: 8, y: 8, w: vx - 8, h: hy - 8 },
    { x: vx, y: 8, w: 184 - vx, h: hy - 8 },
    { x: 8, y: hy, w: vx + 30 - 8, h: 112 - hy },
    { x: vx + 30, y: hy, w: 184 - (vx + 30), h: 112 - hy },
  ];

  return (
    <svg viewBox="0 0 192 120" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="192" height="120" fill="var(--color-paper-dim)" />
      {/* grid */}
      <g stroke="var(--color-ink)" strokeWidth="0.5" opacity="0.06">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={"v" + i} x1={i * 16} y1="0" x2={i * 16} y2="120" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={"h" + i} x1="0" y1={i * 16} x2="192" y2={i * 16} />
        ))}
      </g>
      {/* lit room */}
      {lit && rooms[litRoom] && (
        <rect
          x={rooms[litRoom].x}
          y={rooms[litRoom].y}
          width={rooms[litRoom].w}
          height={rooms[litRoom].h}
          fill={tone}
          opacity="0.85"
        />
      )}
      {/* walls */}
      <g fill="none" stroke="var(--color-ink)" strokeWidth="1.4">
        <rect x="8" y="8" width="176" height="104" />
        <line x1={vx} y1="8" x2={vx} y2="112" />
        <line x1="8" y1={hy} x2="184" y2={hy} />
      </g>
      {/* door swing */}
      <path
        d={`M ${20} 112 A 14 14 0 0 1 ${34} 98`}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

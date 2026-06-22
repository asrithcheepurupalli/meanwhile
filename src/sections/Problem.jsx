import { useReveal } from "../lib/useReveal";

const OWNER = [
  "Lost rental income",
  "Maintenance costs",
  "Reduced property activity",
  "Wasted commercial potential",
  "Pressure to drop the asking rent",
];
const BUSINESS = [
  "High upfront commitments",
  "Large security deposits",
  "Long-term lease lock-ins",
  "Premium locations out of reach",
  "No way to test demand",
];

export default function Problem() {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="reveal-up mb-4 flex items-center gap-4">
          <span className="label text-[var(--color-signal)]">The problem</span>
          <span className="h-px w-12 bg-paper-line" />
          <span className="label text-ink/45">Two parties, one broken middle</span>
        </div>
        <h2 className="reveal-up display max-w-[20ch] text-[10vw] leading-[0.95] md:text-[4.5rem]">
          A vacant property is a{" "}
          <span className="serif-italic text-[var(--color-signal)]">
            standoff
          </span>{" "}
          nobody wins.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line md:grid-cols-2">
          <Ledger
            tag="For property owners"
            stat="3 months"
            statLabel="average vacancy"
            note="Zero return, full expenses."
            items={OWNER}
          />
          <Ledger
            tag="For small businesses"
            stat="6 to 9×"
            statLabel="rent up front"
            note="Before a single sale is made."
            items={BUSINESS}
            flip
          />
        </div>
      </div>
    </section>
  );
}

function Ledger({ tag, stat, statLabel, note, items, flip }) {
  return (
    <div className="reveal-up bg-paper p-8 md:p-12">
      <span className="label text-ink/45">{tag}</span>
      <div className="mt-8 flex items-end gap-4">
        <span className="display text-[14vw] leading-[0.85] md:text-[6rem]">
          {stat}
        </span>
        <span className="mb-3 max-w-[10ch] font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-ink/45">
          {statLabel}
        </span>
      </div>
      <p className="mt-3 serif-italic text-xl text-ink/60">{note}</p>

      <ul className="mt-10 flex flex-col">
        {items.map((it, i) => (
          <li
            key={it}
            className="group flex items-center justify-between border-t border-paper-line py-4"
          >
            <span className="text-ink/80">{it}</span>
            <span className="font-mono text-xs text-[var(--color-signal-deep)]">
              − cost
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

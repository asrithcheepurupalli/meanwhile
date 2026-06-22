import { useReveal } from "../lib/useReveal";

const OWNER = [
  ["Revenue during vacancy", "Earn while you keep searching for the ideal tenant."],
  ["Visibility", "An occupied, lit space attracts inquiries a dark one never will."],
  ["Active upkeep", "Regular use slows the quiet deterioration of an empty unit."],
  ["Verified occupants", "KYC + business screening before anyone gets a key."],
  ["Total flexibility", "Keep hunting for the full-rent lease. Nothing is locked."],
];
const BUSINESS = [
  ["Lower entry cost", "Premium locations without the crushing upfront commitment."],
  ["Market validation", "Test a high-footfall address before you bet the company on it."],
  ["Reduced risk", "Short notice periods keep your financial exposure small."],
  ["Growth room", "Operate where your budget said you couldn't, yet."],
  ["Upgrade path", "Convert to a full lease the moment you're ready."],
];

export default function Benefits() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative bg-paper-dim py-28 md:py-40"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-paper), var(--color-paper-dim) 14%)",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="reveal-up mb-4 flex items-center gap-4">
          <span className="label text-[var(--color-signal)]">Win-win</span>
          <span className="h-px w-12 bg-paper-line" />
          <span className="label text-ink/45">Both sides of the door</span>
        </div>
        <h2 className="reveal-up display max-w-[20ch] text-[9vw] leading-[0.96] md:text-[4rem]">
          The rare deal where{" "}
          <span className="serif-italic text-[var(--color-signal)]">
            nobody compromises.
          </span>
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Column tag="For owners" items={OWNER} accent="var(--color-brass)" />
          <Column tag="For businesses" items={BUSINESS} accent="var(--color-signal)" />
        </div>
      </div>
    </section>
  );
}

function Column({ tag, items, accent }) {
  return (
    <div className="reveal-up">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2.5 w-2.5" style={{ background: accent }} />
        <span className="label text-ink/55">{tag}</span>
      </div>
      <div className="flex flex-col border-t border-paper-line">
        {items.map(([t, d], i) => (
          <div
            key={t}
            className="group grid grid-cols-[auto_1fr] gap-5 border-b border-paper-line py-5 transition-colors hover:bg-paper md:py-6"
          >
            <span className="font-mono text-xs text-ink/35">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="display text-2xl md:text-3xl">{t}</h3>
              <p className="mt-1.5 max-w-[46ch] text-ink/60">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

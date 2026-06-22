import { Link } from "react-router-dom";
import { listings, inr, inrShort } from "../data/listings";
import { useReveal } from "../lib/useReveal";

const MONTHS = [
  { m: "Jan", v: 0, vac: true },
  { m: "Feb", v: 0, vac: true },
  { m: "Mar", v: 92, semi: true },
  { m: "Apr", v: 92, semi: true },
  { m: "May", v: 92, semi: true },
  { m: "Jun", v: 185, full: true },
];

const INQUIRIES = [
  { who: "Ma773, D2C eyewear", space: "Glass corner unit, 100ft Road", when: "2h ago", status: "New" },
  { who: "Studio Forma, design agency", space: "Studio office, G-Block", when: "5h ago", status: "Verified" },
  { who: "Pour Over Co., café", space: "Café-ready unit, Park Street", when: "1d ago", status: "Reviewing" },
  { who: "Lumen Skin, clinic", space: "Clinic-grade suite, 5th Block", when: "2d ago", status: "New" },
];

export default function Dashboard() {
  const ref = useReveal({ stagger: 70 });
  const owned = listings.slice(0, 4);
  const recovered = owned.reduce((s, l) => s + l.semiRent * 2, 0);

  return (
    <div className="min-h-screen bg-paper pt-32 blueprint-grid">
      <div ref={ref} className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-paper-line pb-8">
          <div>
            <span className="label text-[var(--color-signal)]">Owner dashboard</span>
            <h1 className="display mt-3 text-[11vw] leading-[0.9] md:text-[4.5rem]">
              Vacancy, working for you
            </h1>
          </div>
          <Link to="/browse" className="signal-btn" data-cursor="List">
            + List a space
          </Link>
        </div>

        {/* top stats */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line md:grid-cols-4">
          <Stat label="Recovered during vacancy" big={inrShort(recovered)} foot="last 2 months · was ₹0" tint="var(--color-signal)" />
          <Stat label="Active occupancies" big="3" foot="of 4 listed spaces" />
          <Stat label="Open inquiries" big="11" foot="4 verified, awaiting you" tint="var(--color-brass)" />
          <Stat label="Avg. fill time" big="9 days" foot="list → occupied" />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* revenue chart */}
          <div className="reveal-up rounded-sm border border-paper-line bg-paper p-7 md:p-8">
            <div className="flex items-center justify-between">
              <span className="label text-ink/45">Revenue per month · Unit 04</span>
              <span className="font-mono text-xs text-ink/40">₹ thousands</span>
            </div>
            <div className="mt-10 flex items-end gap-3 md:gap-5">
              {MONTHS.map((mo) => {
                const max = 185;
                const px = mo.v === 0 ? 6 : Math.round((mo.v / max) * 200);
                const color = mo.full
                  ? "var(--color-brass)"
                  : mo.semi
                  ? "var(--color-signal)"
                  : "var(--color-paper-line)";
                return (
                  <div key={mo.m} className="flex flex-1 flex-col items-center justify-end gap-3">
                    <div
                      className="dash-bar w-full rounded-t-[2px]"
                      style={{ height: `${px}px`, background: color, "--target": `${px}px` }}
                    />
                    <span className="font-mono text-[0.65rem] text-ink/45">{mo.m}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap gap-5 border-t border-paper-line pt-5">
              <Legend c="var(--color-paper-line)" t="Vacant: ₹0" />
              <Legend c="var(--color-signal)" t="Meanwhile occupancy" />
              <Legend c="var(--color-brass)" t="Converted to full lease" />
            </div>
            <style>{`
              .dash-bar{animation:grow 1s var(--ease-made) both;}
              @keyframes grow{from{height:0 !important;}to{height:var(--target);}}
              @media (prefers-reduced-motion: reduce){.dash-bar{animation:none;}}
            `}</style>
          </div>

          {/* inquiries */}
          <div className="reveal-up rounded-sm border border-paper-line bg-paper p-7 md:p-8">
            <div className="flex items-center justify-between">
              <span className="label text-ink/45">Recent inquiries</span>
              <span className="font-mono text-xs text-[var(--color-signal-deep)]">4 new</span>
            </div>
            <div className="mt-5 flex flex-col">
              {INQUIRIES.map((i) => (
                <div
                  key={i.who}
                  className="flex items-center justify-between gap-3 border-t border-paper-line py-4"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-ink/85">{i.who}</p>
                    <p className="truncate text-xs text-ink/45">{i.space}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <span
                      className={`rounded-full px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] ${
                        i.status === "New"
                          ? "bg-[var(--color-signal)] text-white"
                          : i.status === "Verified"
                          ? "bg-[var(--color-brass)] text-white"
                          : "border border-paper-line text-ink/50"
                      }`}
                    >
                      {i.status}
                    </span>
                    <span className="font-mono text-[0.6rem] text-ink/35">{i.when}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* listings table */}
        <div className="reveal-up mt-8 overflow-hidden rounded-sm border border-paper-line bg-paper">
          <div className="flex items-center justify-between border-b border-paper-line px-7 py-5">
            <span className="label text-ink/45">Your listings</span>
            <span className="font-mono text-xs text-ink/40">{owned.length} spaces</span>
          </div>
          <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 border-b border-paper-line px-7 py-3 md:grid">
            {["Space", "Meanwhile rate", "Vacant", "Status", ""].map((h) => (
              <span key={h} className="label text-ink/35">{h}</span>
            ))}
          </div>
          {owned.map((l, idx) => {
            const status = idx === 1 ? "Vacant" : idx === 3 ? "Converting" : "Occupied";
            return (
              <Link
                key={l.id}
                to={`/space/${l.id}`}
                data-cursor="Open"
                className="grid grid-cols-2 items-center gap-4 border-b border-paper-line px-7 py-5 transition-colors last:border-0 hover:bg-paper-dim md:grid-cols-[2fr_1fr_1fr_1fr_auto]"
              >
                <div>
                  <p className="display text-xl leading-tight">{l.title}</p>
                  <p className="text-xs text-ink/45">{l.area}</p>
                </div>
                <span className="hidden font-mono text-sm md:block">{inr(l.semiRent)}</span>
                <span className="hidden font-mono text-sm text-ink/55 md:block">{l.vacantDays}d</span>
                <span className="flex items-center gap-2 justify-self-end md:justify-self-start">
                  <span
                    className="h-2 w-2"
                    style={{
                      background:
                        status === "Occupied"
                          ? "var(--color-signal)"
                          : status === "Converting"
                          ? "var(--color-brass)"
                          : "var(--color-paper-line)",
                    }}
                  />
                  <span className="font-mono text-xs text-ink/60">{status}</span>
                </span>
                <span className="hidden text-ink/30 md:block">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, big, foot, tint }) {
  return (
    <div className="reveal-up bg-paper p-7">
      <span className="label text-ink/45">{label}</span>
      <p className="display mt-4 text-[10vw] leading-none md:text-[3.2rem]" style={{ color: tint || "var(--color-ink)" }}>
        {big}
      </p>
      <p className="mt-3 font-mono text-xs text-ink/40">{foot}</p>
    </div>
  );
}

function Legend({ c, t }) {
  return (
    <span className="flex items-center gap-2 font-mono text-xs text-ink/55">
      <span className="h-2.5 w-2.5" style={{ background: c }} />
      {t}
    </span>
  );
}

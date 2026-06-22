import { useState } from "react";
import { useReveal } from "../lib/useReveal";

const STATES = [
  {
    key: "vacant",
    label: "Vacant",
    revenue: "₹0",
    sub: "/ month",
    headline: "The space is empty.",
    body: "No tenant, no income, but the costs keep coming. Maintenance, taxes, the slow decay of a room nobody walks into. The default outcome of waiting for the perfect lease.",
    tint: "var(--color-ink)",
    fill: 0,
  },
  {
    key: "occupied",
    label: "Occupied",
    revenue: "₹1,85,000",
    sub: "/ month · locked 9 years",
    headline: "The space is leased.",
    body: "Full rent, full commitment. Wonderful, once it happens. But it can take months or years to find, and the business that could have grown here never could have afforded the door.",
    tint: "var(--color-brass)",
    fill: 1,
  },
  {
    key: "semi",
    label: "Meanwhile",
    revenue: "₹92,000",
    sub: "/ month · flexible · notice 30d",
    headline: "The space is alive.",
    body: "Occupied today, flexible tomorrow. The owner earns from day one and keeps hunting for the long-term tenant. A growing business gets a premium address at half the rent. Everyone wins in the in-between.",
    tint: "var(--color-signal)",
    fill: 0.55,
  },
];

export default function ThirdOption() {
  const [active, setActive] = useState(2);
  const ref = useReveal();
  const s = STATES[active];

  return (
    <section
      ref={ref}
      className="relative bg-paper-dim py-28 md:py-40"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-paper), var(--color-paper-dim) 18%)",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="reveal-up mb-4 flex items-center gap-4">
          <span className="label text-[var(--color-signal)]">The third option</span>
          <span className="h-px w-12 bg-paper-line" />
          <span className="label text-ink/45">Conditional occupancy</span>
        </div>
        <h2 className="reveal-up display max-w-[18ch] text-[10vw] leading-[0.95] md:text-[4.5rem]">
          Leasing has always offered{" "}
          <span className="text-ink/40">only two answers.</span> We added a third.
        </h2>

        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* the switch */}
          <div className="reveal-up flex flex-col gap-7">
            <div className="inline-flex rounded-full border border-paper-line bg-paper p-1.5">
              {STATES.map((st, i) => (
                <button
                  key={st.key}
                  onClick={() => setActive(i)}
                  data-cursor="Switch"
                  className={`relative rounded-full px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-500 md:px-7 ${
                    active === i
                      ? "text-paper"
                      : "text-ink/55 hover:text-ink"
                  }`}
                  style={
                    active === i
                      ? { background: st.tint }
                      : undefined
                  }
                >
                  {st.label}
                  {st.key === "semi" && active !== i && (
                    <span className="ml-2 inline-block h-1.5 w-1.5 -translate-y-0.5 bg-[var(--color-signal)]" />
                  )}
                </button>
              ))}
            </div>

            {/* the room visual */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-paper-line bg-paper blueprint-grid">
              {/* light fill */}
              <div
                className="absolute inset-x-0 bottom-0 transition-all duration-[900ms]"
                style={{
                  height: `${s.fill * 100}%`,
                  background: `linear-gradient(to top, ${s.tint}, transparent)`,
                  opacity: 0.22,
                  transitionTimingFunction: "var(--ease-made)",
                }}
              />
              {/* window grid */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-3 p-6 md:p-10">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-[2px] border transition-all duration-700"
                    style={{
                      borderColor: "var(--color-paper-line)",
                      background:
                        i / 6 < s.fill ? s.tint : "transparent",
                      opacity: i / 6 < s.fill ? 0.85 : 1,
                      transitionDelay: `${i * 60}ms`,
                      transitionTimingFunction: "var(--ease-made)",
                    }}
                  />
                ))}
              </div>
              <span className="absolute bottom-4 left-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
                Unit 04 · status
              </span>
            </div>
          </div>

          {/* the readout */}
          <div className="reveal-up flex flex-col justify-between rounded-sm border border-paper-line bg-paper p-8 md:p-12">
            <div>
              <div className="flex items-end gap-3">
                <span
                  className="display text-[14vw] leading-none transition-colors duration-500 md:text-[6rem]"
                  style={{ color: s.tint }}
                >
                  {s.revenue}
                </span>
              </div>
              <span className="label mt-2 block text-ink/45">{s.sub}</span>
            </div>

            <div className="mt-10">
              <h3 className="display text-3xl md:text-4xl">{s.headline}</h3>
              <p className="mt-4 max-w-[44ch] text-lg text-ink/65">{s.body}</p>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-paper-line pt-6">
              <span
                className="h-2.5 w-2.5 transition-colors duration-500"
                style={{ background: s.tint }}
              />
              <span className="label text-ink/50">
                {active === 2
                  ? "Recommended: the Meanwhile model"
                  : "Tap a state to compare"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

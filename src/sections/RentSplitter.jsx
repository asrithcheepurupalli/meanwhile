import { useState } from "react";
import { useReveal } from "../lib/useReveal";
import { inr } from "../data/listings";

/**
 * Interactive proof. Drag the semi-rate; both ledgers update live. The owner's
 * "vs vacant" gain and the business's "vs full lease" saving always both stay
 * green. That's the whole pitch, made tactile.
 */
export default function RentSplitter() {
  const ref = useReveal();
  const fullRent = 60000;
  const [pct, setPct] = useState(50);
  const semi = Math.round((fullRent * pct) / 100 / 500) * 500;

  const ownerGain = semi; // vs ₹0 while vacant
  const bizSaving = fullRent - semi; // vs paying full

  return (
    <section ref={ref} className="relative bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="reveal-up mb-4 flex items-center gap-4">
          <span className="label text-[var(--color-signal)]">Run the numbers</span>
          <span className="h-px w-12 bg-paper-line" />
          <span className="label text-ink/45">A real corner shop · ₹60,000/mo asking</span>
        </div>
        <h2 className="reveal-up display max-w-[18ch] text-[9vw] leading-[0.96] md:text-[4rem]">
          Move the rate. Watch{" "}
          <span className="serif-italic text-[var(--color-signal)]">both sides</span>{" "}
          come out ahead.
        </h2>

        <div className="reveal-up mt-16 rounded-sm border border-paper-line bg-paper-dim p-6 md:p-12">
          {/* the split bar */}
          <div className="mb-3 flex items-end justify-between">
            <span className="label text-ink/50">Meanwhile rate</span>
            <span className="display text-4xl md:text-6xl">
              {inr(semi)}
              <span className="ml-2 font-mono text-base text-ink/45">/mo</span>
            </span>
          </div>

          <div className="relative h-16 overflow-hidden rounded-sm border border-paper-line bg-paper">
            <div
              className="absolute inset-y-0 left-0 flex items-center justify-end pr-4 transition-[width] duration-200"
              style={{
                width: `${pct}%`,
                background:
                  "linear-gradient(90deg, var(--color-signal-deep), var(--color-signal))",
                transitionTimingFunction: "var(--ease-made)",
              }}
            >
              <span className="font-mono text-xs text-white/90">{pct}% of full</span>
            </div>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-ink/40">
              full rent {inr(fullRent)}
            </span>
          </div>

          <input
            type="range"
            min="25"
            max="80"
            step="1"
            value={pct}
            onChange={(e) => setPct(Number(e.target.value))}
            data-cursor="Drag"
            className="semi-range mt-5 w-full"
            aria-label="Set semi rate as a percentage of full rent"
          />

          {/* outcomes */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line md:grid-cols-3">
            <Outcome
              tag="Owner earns"
              big={inr(ownerGain)}
              sub="per month, during vacancy"
              foot="vs ₹0 sitting empty"
              good
            />
            <Outcome
              tag="Business saves"
              big={inr(bizSaving)}
              sub="every single month"
              foot="vs committing to full rent"
              good
            />
            <Outcome
              tag="Over 3 months"
              big={inr(ownerGain * 3)}
              sub="recovered by the owner"
              foot="that would've been zero"
              tint="var(--color-brass)"
            />
          </div>

          <p className="mt-8 max-w-[58ch] serif-italic text-lg text-ink/55">
            Three months later, the startup has grown enough to take the full lease,
            and the owner never lost a rupee waiting. The vacancy paid for itself.
          </p>
        </div>
      </div>

      <style>{`
        .semi-range{-webkit-appearance:none;appearance:none;height:2px;background:var(--color-paper-line);outline:none;cursor:none;}
        .semi-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:26px;height:26px;border-radius:2px;background:var(--color-ink);border:3px solid var(--color-signal);cursor:none;transition:transform .2s var(--ease-made);}
        .semi-range::-webkit-slider-thumb:hover{transform:scale(1.12);}
        .semi-range::-moz-range-thumb{width:26px;height:26px;border-radius:2px;background:var(--color-ink);border:3px solid var(--color-signal);cursor:none;}
      `}</style>
    </section>
  );
}

function Outcome({ tag, big, sub, foot, good, tint }) {
  const color = tint || (good ? "var(--color-signal)" : "var(--color-ink)");
  return (
    <div className="bg-paper p-7 md:p-8">
      <span className="label text-ink/45">{tag}</span>
      <div
        className="display mt-4 text-[10vw] leading-none md:text-[3.4rem]"
        style={{ color }}
      >
        {big}
      </div>
      <p className="mt-3 text-sm text-ink/65">{sub}</p>
      <p className="mt-1 font-mono text-xs text-ink/40">{foot}</p>
    </div>
  );
}

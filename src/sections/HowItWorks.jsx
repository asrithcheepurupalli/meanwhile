import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  {
    n: "01",
    role: "Owner",
    title: "List the vacant space",
    body: "Set your monthly rent, your temporary occupancy rate, notice period and house rules. The unit goes live to verified businesses in minutes.",
    fields: ["Monthly rent", "Meanwhile rate", "Notice period", "Deposit", "Facilities"],
    tint: "var(--color-brass)",
  },
  {
    n: "02",
    role: "Business",
    title: "Apply, verify, move in",
    body: "A startup, retailer or studio finds the space, completes verification, reviews the occupancy terms and pays online. Keys in hand — at a fraction of full rent.",
    fields: ["Discover", "Verify (KYC)", "Review terms", "Pay online", "Occupy"],
    tint: "var(--color-signal)",
  },
  {
    n: "03",
    role: "Both",
    title: "Transition, on fair terms",
    body: "When a long-term tenant appears, the occupant gets the agreed notice — or converts to the full lease if they're ready. Flexibility is written into the contract, not left to chance.",
    fields: ["Notice served", "Smooth vacate", "— or —", "Convert to full lease"],
    tint: "var(--color-blue)",
  },
];

export default function HowItWorks() {
  const root = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".hiw-panel");
      const distance = () => track.current.scrollWidth - window.innerWidth;

      gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // progress line
      gsap.to(".hiw-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: true,
        },
      });
      void panels;
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      data-nav-dark
      className="relative h-[100svh] overflow-hidden bg-ink text-paper blueprint-grid-ink"
    >
      {/* header overlay */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 w-full px-6 pt-28 md:px-10">
        <div className="flex items-center gap-4">
          <span className="label text-[var(--color-signal)]">How it works</span>
          <span className="h-px w-12 bg-ink-line" />
          <span className="label text-grey">Scroll →</span>
        </div>
        <div className="mt-5 h-px w-full bg-ink-line">
          <div className="hiw-progress h-full w-full origin-left scale-x-0 bg-[var(--color-signal)]" />
        </div>
      </div>

      <div
        ref={track}
        className="flex h-full w-max items-center pl-6 md:pl-10"
      >
        {/* intro panel */}
        <div className="hiw-panel flex h-full w-[86vw] shrink-0 flex-col justify-center pr-[8vw] md:w-[60vw]">
          <h2 className="display text-[12vw] leading-[0.9] md:text-[7rem]">
            Three moves.<br />
            <span className="serif-italic text-grey-dim">Everyone wins.</span>
          </h2>
          <p className="mt-6 max-w-[40ch] text-lg text-grey-dim">
            From a dark unit to a living business in a single, transparent flow —
            then back to flexible when the time comes.
          </p>
        </div>

        {STEPS.map((s) => (
          <Panel key={s.n} step={s} />
        ))}

        {/* closing panel */}
        <div className="hiw-panel flex h-full w-[80vw] shrink-0 flex-col justify-center px-[6vw] md:w-[44vw]">
          <span className="hiw-rise label text-[var(--color-signal)]">Result</span>
          <h3 className="hiw-rise display mt-4 text-[9vw] leading-[0.95] md:text-5xl">
            A vacancy problem becomes a{" "}
            <span className="text-[var(--color-signal)]">business opportunity.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

function Panel({ step }) {
  return (
    <div className="hiw-panel flex h-full w-[88vw] shrink-0 items-center pr-[6vw] md:w-[52vw]">
      <div className="w-full">
        <div className="hiw-rise flex items-center gap-4">
          <span
            className="display text-[20vw] leading-none md:text-[12rem]"
            style={{ color: step.tint }}
          >
            {step.n}
          </span>
          <span className="label rounded-full border border-ink-line px-4 py-2 text-grey-dim">
            {step.role}
          </span>
        </div>
        <h3 className="hiw-rise display mt-6 text-[8vw] leading-[1] md:text-5xl">
          {step.title}
        </h3>
        <p className="hiw-rise mt-5 max-w-[42ch] text-lg text-grey-dim">
          {step.body}
        </p>
        <div className="hiw-rise mt-8 flex flex-wrap gap-2">
          {step.fields.map((f) => (
            <span
              key={f}
              className="rounded-sm border border-ink-line bg-ink-soft px-3.5 py-2 font-mono text-xs text-paper/80"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const ITEMS = [
  "Startups",
  "Pop-up stores",
  "D2C brands",
  "Boutiques",
  "Agencies",
  "Salons",
  "Clinics",
  "Cafés",
  "Creators",
  "Freelancers",
  "Consultants",
  "Service providers",
];

/** A double-rendered infinite ticker of who occupies the in-between. */
export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center gap-10">
          <span className="display text-3xl text-paper/90 md:text-5xl">{t}</span>
          <span className="h-2 w-2 shrink-0 rotate-45 bg-[var(--color-signal)]" />
        </span>
      ))}
    </div>
  );
  return (
    <section
      data-nav-dark
      className="overflow-hidden border-y border-ink-line bg-ink py-7 md:py-9"
      aria-label="Who Meanwhile is for"
    >
      <div className="marquee-track flex w-max">
        {row}
        {row}
      </div>
      <style>{`
        .marquee-track{animation:marq 38s linear infinite;}
        .marquee-track:hover{animation-play-state:paused;}
        @keyframes marq{to{transform:translateX(-50%);}}
        @media (prefers-reduced-motion: reduce){.marquee-track{animation:none;}}
      `}</style>
    </section>
  );
}

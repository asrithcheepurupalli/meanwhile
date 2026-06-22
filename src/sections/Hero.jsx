import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useMagnetic } from "../lib/useMagnetic";

/**
 * The opening act. A vacant floor-plan draws itself; rooms light one by one as
 * the kinetic headline rises from behind masks. Light fills the empty.
 */
export default function Hero() {
  const root = useRef(null);
  const plan = useRef(null);
  const cta = useMagnetic(0.3);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // kinetic headline
      gsap.to(".hero-line .line-inner", {
        y: 0,
        duration: reduce ? 0 : 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: reduce ? 0 : 2.0,
      });
      gsap.to(".hero-fade", {
        opacity: 1,
        y: 0,
        duration: reduce ? 0 : 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: reduce ? 0 : 2.5,
      });

      if (reduce) {
        gsap.set(".plan-room", { opacity: 0.9 });
        return;
      }

      // floor-plan walls draw (dash offset set inline → free, no DrawSVG plugin)
      gsap.to(".plan-wall", {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
        delay: 2.1,
      });
      // rooms light up in sequence
      gsap.to(".plan-room", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.18,
        ease: "power2.out",
        delay: 2.6,
      });

      // gentle parallax drift of the plan on scroll
      gsap.to(plan.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] overflow-hidden bg-paper pt-28 blueprint-grid"
    >
      {/* floor-plan field, right side */}
      <div
        ref={plan}
        className="pointer-events-none absolute right-[-6%] top-1/2 hidden w-[52%] max-w-[820px] -translate-y-1/2 lg:block"
        aria-hidden
      >
        <FloorPlan />
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col justify-center px-6 pb-24 pt-[12vh] md:px-10">
        <div className="hero-fade mb-8 flex items-center gap-4 opacity-0" style={{ transform: "translateY(12px)" }}>
          <span className="label text-[var(--color-signal)]">A new category</span>
          <span className="h-px w-12 bg-paper-line" />
          <span className="label text-ink/55">Commercial vacancy monetization</span>
        </div>

        <h1 className="display text-ink">
          <span className="hero-line line-mask text-[16vw] leading-[0.86] md:text-[11.5vw] lg:text-[9.5rem]">
            <span className="line-inner">Fill empty</span>
          </span>
          <span className="hero-line line-mask text-[16vw] leading-[0.86] md:text-[11.5vw] lg:text-[9.5rem]">
            <span className="line-inner">
              spaces<span className="text-[var(--color-signal)]">.</span>
            </span>
          </span>
          <span className="hero-line line-mask mt-2 block text-[8vw] leading-[0.95] text-ink/45 md:text-[5vw] lg:text-[4rem]">
            <span className="line-inner serif-italic">Fuel growing businesses.</span>
          </span>
        </h1>

        <div
          className="hero-fade mt-10 max-w-[46ch] text-lg text-ink/70 opacity-0 md:text-xl"
          style={{ transform: "translateY(12px)" }}
        >
          Millions of square feet sit dark while businesses can't afford the door.
          Meanwhile is the marketplace for the in-between: temporary commercial
          occupancy at a fraction of the rent.
        </div>

        <div
          className="hero-fade mt-10 flex flex-wrap items-center gap-4 opacity-0"
          style={{ transform: "translateY(12px)" }}
        >
          <Link ref={cta} to="/browse" data-cursor="Browse" className="signal-btn">
            Browse vacant spaces →
          </Link>
          <a href="#how" className="ghost-btn border-ink/25 text-ink hover:bg-ink hover:text-paper" data-cursor="See how">
            How it works
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="hero-fade absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-0 md:flex">
        <span className="label text-ink/40">Scroll</span>
        <span className="scroll-dot h-8 w-px bg-ink/30" />
      </div>
      <style>{`
        .scroll-dot{transform-origin:top;animation:cue 1.8s var(--ease-made) infinite;}
        @keyframes cue{0%,100%{transform:scaleY(.3);opacity:.3}50%{transform:scaleY(1);opacity:.8}}
      `}</style>
    </section>
  );
}

function FloorPlan() {
  // simple architectural plan; walls drawn via dash, rooms fade/light in
  const wall = {
    fill: "none",
    stroke: "var(--color-ink)",
    strokeWidth: 1.5,
    strokeDasharray: 1200,
    strokeDashoffset: 1200,
  };
  return (
    <svg viewBox="0 0 600 520" className="w-full">
      {/* lit rooms (behind walls) */}
      <g>
        <rect className="plan-room" x="40" y="40" width="240" height="200" fill="var(--color-signal)" opacity="0" />
        <rect className="plan-room" x="300" y="40" width="260" height="120" fill="var(--color-brass)" opacity="0" />
        <rect className="plan-room" x="300" y="180" width="260" height="120" fill="var(--color-blue)" opacity="0" />
        <rect className="plan-room" x="40" y="260" width="160" height="220" fill="var(--color-signal)" opacity="0" />
        <rect className="plan-room" x="220" y="320" width="340" height="160" fill="var(--color-brass)" opacity="0" />
      </g>
      <g style={{ mixBlendMode: "multiply" }} opacity="0.16">
        <rect x="40" y="40" width="240" height="200" fill="var(--color-ink)" className="plan-room" opacity="0" />
      </g>
      {/* walls */}
      <rect className="plan-wall" x="40" y="40" width="520" height="440" style={wall} />
      <line className="plan-wall" x1="300" y1="40" x2="300" y2="480" style={wall} />
      <line className="plan-wall" x1="300" y1="160" x2="560" y2="160" style={wall} />
      <line className="plan-wall" x1="300" y1="300" x2="560" y2="300" style={wall} />
      <line className="plan-wall" x1="40" y1="260" x2="300" y2="260" style={wall} />
      <line className="plan-wall" x1="200" y1="260" x2="200" y2="480" style={wall} />
      {/* door swing */}
      <path className="plan-wall" d="M120 480 A40 40 0 0 1 160 440" style={{ ...wall, strokeDasharray: 300, strokeDashoffset: 300 }} />
      {/* dimension ticks */}
      <text x="300" y="28" textAnchor="middle" fontFamily="Space Mono" fontSize="11" fill="var(--color-ink)" opacity="0.5">12.0 m</text>
      <text x="24" y="265" textAnchor="middle" fontFamily="Space Mono" fontSize="11" fill="var(--color-ink)" opacity="0.5" transform="rotate(-90 24 265)">9.4 m</text>
    </svg>
  );
}

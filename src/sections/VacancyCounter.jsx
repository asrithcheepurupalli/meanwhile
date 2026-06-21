import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * A full-bleed ink band: the square footage sitting vacant "right now", ticking
 * upward relentlessly. The number never stops — that's the point.
 */
export default function VacancyCounter() {
  const root = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const base = 12480500;
    let current = base;
    let interval;
    let fired = false;

    const render = () => {
      if (numRef.current)
        numRef.current.textContent = current.toLocaleString("en-IN");
    };

    const start = () => {
      if (fired) return;
      fired = true;
      // count-up from below, then keep ticking forever
      const obj = { v: reduce ? base : base - 240000 };
      gsap.to(obj, {
        v: base,
        duration: reduce ? 0 : 2.2,
        ease: "power2.out",
        onUpdate: () => {
          current = Math.floor(obj.v);
          render();
        },
        onComplete: () => {
          if (reduce) return;
          interval = setInterval(() => {
            current += Math.floor(Math.random() * 7) + 2;
            render();
          }, 220);
        },
      });
    };

    const io = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && start(),
      { threshold: 0.4 }
    );
    if (root.current) io.observe(root.current);

    return () => {
      io.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={root}
      data-nav-dark
      className="relative overflow-hidden bg-ink py-28 text-paper blueprint-grid-ink md:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]" />
          </span>
          <span className="label text-grey-dim">
            Live · estimated commercial vacancy, India
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-mono text-[13vw] leading-none tracking-tighter text-paper md:text-[9rem]">
            <span ref={numRef}>{(12480500).toLocaleString("en-IN")}</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="display text-3xl text-[var(--color-signal)] md:text-5xl">
              sq ft
            </span>
            <span className="serif-italic text-2xl text-grey-dim md:text-3xl">
              earning nothing, this second.
            </span>
          </div>
        </div>

        <p className="mt-12 max-w-[52ch] text-lg text-grey-dim md:text-xl">
          Every vacant unit still costs its owner — maintenance, taxes, opportunity.
          The meter runs whether anyone's inside or not.{" "}
          <span className="text-paper">Meanwhile turns the meter the other way.</span>
        </p>
      </div>
    </section>
  );
}

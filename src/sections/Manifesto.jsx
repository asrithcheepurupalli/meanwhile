import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT =
  "Not a property portal. Not a co-working desk. Not a broker. Meanwhile is an entirely new category —";
const PUNCH = "commercial vacancy monetization.";

export default function Manifesto() {
  const root = useRef(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mf-word",
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      data-nav-dark
      className="relative overflow-hidden bg-ink py-32 text-paper blueprint-grid-ink md:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <span className="label mb-12 block text-[var(--color-signal)]">
          Competitive advantage
        </span>
        <h2 className="display text-[7vw] leading-[1.12] tracking-tight md:text-[3.6rem]">
          {TEXT.split(" ").map((w, i) => (
            <span key={i} className="mf-word inline-block">
              {w}&nbsp;
            </span>
          ))}
          <span className="mf-word serif-italic inline-block text-[var(--color-signal)]">
            {PUNCH}
          </span>
        </h2>
      </div>
    </section>
  );
}

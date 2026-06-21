import { useEffect, useRef, useState } from "react";
import Wordmark from "./Wordmark";

/**
 * One-time concrete curtain on first load. A vacant floor-plan outline draws,
 * the signal pixel lights, the wordmark settles, then the curtain lifts.
 * Skipped entirely under reduced-motion.
 */
export default function Intro() {
  const [gone, setGone] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    document.documentElement.classList.add("lenis-stopped");
    const t1 = setTimeout(() => {
      root.current?.classList.add("lift");
      document.documentElement.classList.remove("lenis-stopped");
    }, 1900);
    const t2 = setTimeout(() => setGone(true), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={root}
      className="intro fixed inset-0 z-[300] flex flex-col items-center justify-center bg-paper"
    >
      <svg
        viewBox="0 0 120 90"
        className="mb-8 h-24 w-32"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1"
      >
        <rect className="draw" x="6" y="6" width="108" height="78" />
        <line className="draw d2" x1="60" y1="6" x2="60" y2="84" />
        <line className="draw d3" x1="6" y1="48" x2="60" y2="48" />
        <rect className="lit" x="72" y="18" width="30" height="22" />
      </svg>
      <div className="intro-mark">
        <Wordmark className="!text-[2rem]" />
      </div>
      <style>{`
        .intro{transition:transform 1s var(--ease-made);}
        .intro.lift{transform:translateY(-101%);}
        .intro .draw{stroke-dasharray:400;stroke-dashoffset:400;animation:draw 1.1s var(--ease-made) forwards;}
        .intro .d2{animation-delay:.45s;}
        .intro .d3{animation-delay:.7s;}
        .intro .lit{fill:var(--color-signal);opacity:0;transform-box:fill-box;transform-origin:center;animation:lit .6s var(--ease-made) 1.1s forwards;}
        .intro .intro-mark{opacity:0;animation:fade .8s var(--ease-made) 1.25s forwards;}
        @keyframes draw{to{stroke-dashoffset:0;}}
        @keyframes lit{0%{opacity:0;transform:scale(.4);}100%{opacity:1;transform:scale(1);}}
        @keyframes fade{to{opacity:1;}}
      `}</style>
    </div>
  );
}

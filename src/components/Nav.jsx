import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Wordmark from "./Wordmark";
import { useMagnetic } from "../lib/useMagnetic";

const LINKS = [
  { label: "How it works", to: "/#how" },
  { label: "Browse spaces", to: "/browse" },
  { label: "For owners", to: "/dashboard" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const cta = useMagnetic(0.25);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // flip light-over-dark when a [data-nav-dark] band crosses the nav line
  useEffect(() => {
    const bands = Array.from(document.querySelectorAll("[data-nav-dark]"));
    const check = () => {
      const y = 38;
      const over = bands.some((b) => {
        const r = b.getBoundingClientRect();
        return r.top <= y && r.bottom >= y;
      });
      setDark(over);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [loc.pathname]);

  // close menu on route change; lock scroll while open
  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const handleAnchor = (e, to) => {
    if (!to.startsWith("/#")) return;
    if (loc.pathname === "/") {
      e.preventDefault();
      setOpen(false);
      const id = to.slice(2);
      const el = document.getElementById(id);
      if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
      else el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // bar tone: when the menu is open the bar sits over the dark overlay
  const barDark = dark || open;
  const tone = barDark ? "text-paper" : "text-ink";
  const backdrop =
    scrolled && !open
      ? barDark
        ? "bg-ink/70 backdrop-blur-md border-b border-ink-line"
        : "bg-paper/70 backdrop-blur-md border-b border-paper-line"
      : "border-b border-transparent";

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[160] w-full transition-colors duration-500 ${tone} ${backdrop}`}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
            scrolled ? "py-4" : "py-6"
          }`}
        >
          <Link
            to="/"
            data-cursor="Home"
            className="shrink-0"
            onClick={() => setOpen(false)}
          >
            <Wordmark onDark={barDark} />
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => handleAnchor(e, l.to)}
                className="label opacity-70 transition-opacity hover:opacity-100"
              >
                {l.label}
              </Link>
            ))}
            <Link
              ref={cta}
              to="/browse"
              data-cursor="Enter"
              className="signal-btn !px-5 !py-3"
            >
              List a space
            </Link>
          </nav>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="relative z-[60] flex h-6 w-7 flex-col justify-center gap-[5px] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`block h-[2px] w-full origin-center bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full origin-center bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[150] flex flex-col bg-ink text-paper blueprint-grid-ink transition-[opacity,transform] duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-made)" }}
      >
        <nav className="mt-auto flex flex-col px-6 pb-6">
          {LINKS.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={(e) => handleAnchor(e, l.to)}
              className="display border-b border-ink-line py-5 text-[12vw] leading-none transition-colors hover:text-[var(--color-signal)]"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(12px)",
                transition: "opacity .6s var(--ease-made), transform .6s var(--ease-made), color .3s",
                transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 pb-10">
          <Link
            to="/browse"
            onClick={() => setOpen(false)}
            className="signal-btn w-full justify-center !py-4"
          >
            List a space →
          </Link>
          <p className="label mt-6 text-grey">
            Meanwhile: the marketplace for the in-between
          </p>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import Wordmark from "./Wordmark";

// One-click, pre-written email to the studio, for anyone who wants this built.
const BUILD_MAIL =
  "mailto:thebrain@made-by-ac.com?subject=" +
  encodeURIComponent("Meanwhile: build this with us") +
  "&body=" +
  encodeURIComponent(
    "Hi made. team,\n\nI saw Meanwhile and I'd love to talk about building something like it (or working together).\n\nWhat I have in mind:\n\n\nThanks,\n"
  );
const BUILD_WA =
  "https://wa.me/919390852636?text=" +
  encodeURIComponent(
    "Hi made. by ac — I saw Meanwhile and I'd love to build something like it with you."
  );

/**
 * Footer drawn as an architectural title block: the spec cartouche from the
 * corner of a real blueprint. Every cell is a field. The "2% nobody asks for".
 */
export default function Footer() {
  const cell =
    "border-ink-line border-t border-l p-4 md:p-5 flex flex-col gap-1.5";
  return (
    <footer
      data-nav-dark
      className="bg-ink text-paper blueprint-grid-ink"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <h2 className="display max-w-[14ch] text-[2.75rem] md:text-[4.5rem]">
            Fill the empty.{" "}
            <span className="serif-italic text-[var(--color-signal)]">
              Fuel the growing.
            </span>
          </h2>
          <Link to="/browse" data-cursor="Enter" className="signal-btn">
            Find a space →
          </Link>
        </div>

        {/* title block */}
        <div className="border-ink-line border-b border-r">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className={cell}>
              <span className="label text-grey">Project</span>
              <Wordmark onDark className="!text-[1.1rem]" />
            </div>
            <div className={cell}>
              <span className="label text-grey">Drawing</span>
              <span className="font-mono text-sm">Commercial Vacancy /</span>
              <span className="font-mono text-sm">Monetization Rev. 04</span>
            </div>
            <div className={cell}>
              <span className="label text-grey">Scale</span>
              <span className="font-mono text-sm">₹0 → ₹30k / 1:1</span>
            </div>
            <div className={cell}>
              <span className="label text-grey">Status</span>
              <span className="inline-flex items-center gap-2 font-mono text-sm">
                <span className="h-2 w-2 bg-[var(--color-signal)]" /> Occupied
              </span>
            </div>

            <div className={cell}>
              <span className="label text-grey">Platform</span>
              <Link to="/browse" className="text-sm hover:text-[var(--color-signal)]">Browse spaces</Link>
              <Link to="/dashboard" className="text-sm hover:text-[var(--color-signal)]">Owner dashboard</Link>
              <Link to="/#how" className="text-sm hover:text-[var(--color-signal)]">How it works</Link>
            </div>
            <div className={cell}>
              <span className="label text-grey">Company</span>
              <span className="text-sm text-grey-dim">About</span>
              <span className="text-sm text-grey-dim">Careers</span>
              <span className="text-sm text-grey-dim">Press</span>
            </div>
            <div className={cell}>
              <span className="label text-grey">Legal</span>
              <span className="text-sm text-grey-dim">Occupancy terms</span>
              <a href="/privacy" className="text-sm text-grey-dim hover:text-grey transition-colors">Privacy</a>
              <a href="/terms" className="text-sm text-grey-dim hover:text-grey transition-colors">Terms of use</a>
              <span className="text-sm text-grey-dim">Trust &amp; safety</span>
            </div>
            <div className={cell}>
              <span className="label text-grey">Drawn by</span>
              <a
                href="https://made-by-ac.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="Visit"
                className="font-display text-lg italic hover:text-[var(--color-signal)]"
              >
                made<span className="text-[var(--color-signal)]">.</span> by ac
              </a>
              <a
                href={BUILD_MAIL}
                data-cursor="Email"
                className="text-sm text-[var(--color-signal)] hover:underline"
              >
                Build this with us →
              </a>
              <a
                href={BUILD_WA}
                target="_blank"
                rel="noreferrer"
                data-cursor="Chat"
                className="text-sm text-grey hover:text-[var(--color-signal)]"
              >
                or WhatsApp us →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="label text-grey">
            © {`2026`} Meanwhile. A new category: commercial vacancy monetization
          </p>
          <p className="label text-grey">Concept demo · not a live marketplace</p>
        </div>
      </div>
    </footer>
  );
}

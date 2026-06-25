import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { listings, inr, inrShort } from "../data/listings";
import SpaceThumb from "../components/SpaceThumb";
import { useReveal } from "../lib/useReveal";

const TYPES = ["All", "Retail", "Office", "F&B", "Pop-up", "Services"];

export default function Browse() {
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("semi");
  const ref = useReveal({ stagger: 60 });

  const rows = useMemo(() => {
    let r = listings.filter((l) => type === "All" || l.type === type);
    r = [...r].sort((a, b) =>
      sort === "semi"
        ? a.semiRent - b.semiRent
        : sort === "saving"
        ? b.fullRent - b.semiRent - (a.fullRent - a.semiRent)
        : b.vacantDays - a.vacantDays
    );
    return r;
  }, [type, sort]);

  return (
    <div className="min-h-[100svh] bg-paper pt-32 blueprint-grid">
      <div ref={ref} className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-paper-line pb-8">
          <div>
            <span className="label text-[var(--color-signal)]">The index</span>
            <h1 className="display mt-3 text-[12vw] leading-[0.9] md:text-[5rem]">
              Spaces in the in-between
            </h1>
          </div>
          <p className="max-w-[34ch] text-ink/60">
            {rows.length} verified vacant units, available right now at temporary
            occupancy rates. Drawn, not staged.
          </p>
        </div>

        {/* controls */}
        <div className="sticky top-0 z-20 -mx-6 mt-6 flex flex-wrap items-center justify-between gap-4 bg-paper/85 px-6 py-4 backdrop-blur md:mx-0 md:rounded-sm md:px-0">
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                data-cursor="Filter"
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
                  type === t
                    ? "border-ink bg-ink text-paper"
                    : "border-paper-line text-ink/55 hover:border-ink/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="label text-ink/40">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-sm border border-paper-line bg-paper px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink"
            >
              <option value="semi">Lowest meanwhile rate</option>
              <option value="saving">Biggest saving</option>
              <option value="vacant">Longest vacant</option>
            </select>
          </div>
        </div>

        {/* grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((l) => {
            const off = Math.round(
              ((l.fullRent - l.semiRent) / l.fullRent) * 100
            );
            return (
              <Link
                key={l.id}
                to={`/space/${l.id}`}
                data-cursor="View"
                className="reveal-up group flex flex-col overflow-hidden rounded-sm border border-paper-line bg-paper transition-all duration-500 hover:border-ink/40 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-paper-line">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
                    <SpaceThumb seed={l.id} tone={l.tone} />
                  </div>
                  <span className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-ink/90 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-paper">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-signal)]" />
                    {l.vacantDays}d vacant
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-[var(--color-signal)] px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white">
                    −{off}%
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="label text-ink/40">{l.type}</span>
                    <span className="font-mono text-xs text-ink/40">
                      {l.sqft.toLocaleString("en-IN")} ft²
                    </span>
                  </div>
                  <h3 className="display mt-2 text-2xl leading-tight">{l.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{l.area}</p>

                  <div className="mt-auto flex items-end justify-between pt-6">
                    <div>
                      <span className="display text-3xl text-[var(--color-signal-deep)]">
                        {inrShort(l.semiRent)}
                      </span>
                      <span className="font-mono text-xs text-ink/40">/mo meanwhile</span>
                    </div>
                    <span className="font-mono text-xs text-ink/35 line-through">
                      {inr(l.fullRent)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

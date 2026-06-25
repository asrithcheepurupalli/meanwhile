import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getListing, listings, inr, inrShort } from "../data/listings";
import SpaceThumb from "../components/SpaceThumb";
import { useMagnetic } from "../lib/useMagnetic";

export default function Listing() {
  const { id } = useParams();
  const l = getListing(id);
  const [applied, setApplied] = useState(false);
  const apply = useMagnetic(0.25);

  if (!l) {
    return (
      <div className="flex min-h-[100svh] flex-col items-center justify-center bg-paper">
        <p className="display text-3xl">Space not found.</p>
        <Link to="/browse" className="signal-btn mt-6">
          Back to the index
        </Link>
      </div>
    );
  }

  const off = Math.round(((l.fullRent - l.semiRent) / l.fullRent) * 100);
  const others = listings.filter((x) => x.id !== l.id).slice(0, 3);

  const spec = [
    ["Type", l.type],
    ["Floor", l.floor],
    ["Area", `${l.sqft.toLocaleString("en-IN")} ft²`],
    ["Footfall", l.footfall],
    ["Notice period", `${l.notice} days`],
    ["Vacant for", `${l.vacantDays} days`],
  ];

  return (
    <div className="min-h-[100svh] bg-paper pt-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* breadcrumb */}
        <Link
          to="/browse"
          data-cursor="Back"
          className="label inline-flex items-center gap-2 text-ink/50 transition-colors hover:text-ink"
        >
          ← The index
        </Link>

        {/* title row */}
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6 border-b border-paper-line pb-10">
          <div>
            <span className="label text-[var(--color-signal)]">
              {l.type} · {l.area}
            </span>
            <h1 className="display mt-3 max-w-[18ch] text-[11vw] leading-[0.92] md:text-[5rem]">
              {l.title}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-paper-line px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-signal)]" />
              {l.vacantDays}d vacant
            </span>
            <span className="rounded-full bg-[var(--color-signal)] px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-white">
              −{off}% meanwhile
            </span>
          </div>
        </div>

        {/* main grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          {/* left: plan + detail */}
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-paper-line">
              <SpaceThumb seed={l.id} tone={l.tone} />
              <span className="absolute bottom-4 left-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
                Plan view · drawn to 1:100
              </span>
            </div>

            {/* mini gallery (more drawn views) */}
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[l.id + "-a", l.id + "-b", l.id + "-c"].map((s) => (
                <div
                  key={s}
                  className="aspect-[16/11] overflow-hidden rounded-sm border border-paper-line"
                >
                  <SpaceThumb seed={s} tone={l.tone} />
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[60ch] text-xl leading-relaxed text-ink/75">
              {l.blurb}
            </p>

            {/* spec sheet */}
            <div className="mt-10">
              <span className="label text-ink/45">Specification</span>
              <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line md:grid-cols-3">
                {spec.map(([k, v]) => (
                  <div key={k} className="bg-paper p-5">
                    <span className="label text-ink/40">{k}</span>
                    <p className="display mt-2 text-2xl">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* facilities */}
            <div className="mt-10">
              <span className="label text-ink/45">Facilities</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {l.facilities.map((f) => (
                  <span
                    key={f}
                    className="rounded-sm border border-paper-line bg-paper-dim px-4 py-2.5 font-mono text-xs text-ink/70"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* right: sticky pricing / apply */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-sm border border-paper-line bg-paper-dim p-7 md:p-8">
              <span className="label text-ink/45">Temporary occupancy</span>
              <div className="mt-3 flex items-end gap-2">
                <span className="display text-[14vw] leading-none text-[var(--color-signal-deep)] md:text-[4.5rem]">
                  {inrShort(l.semiRent)}
                </span>
                <span className="mb-2 font-mono text-sm text-ink/45">/month</span>
              </div>
              <p className="mt-1 font-mono text-xs text-ink/40">
                full rent{" "}
                <span className="line-through">{inr(l.fullRent)}</span> · you save{" "}
                <span className="text-[var(--color-signal-deep)]">
                  {inr(l.fullRent - l.semiRent)}/mo
                </span>
              </p>

              <div className="mt-7 flex flex-col gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line">
                {[
                  ["Meanwhile rent", inr(l.semiRent) + " /mo"],
                  ["Security deposit", inr(l.deposit)],
                  ["Notice period", l.notice + " days"],
                  ["Platform fee", inr(Math.round(l.semiRent * 0.04))],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between bg-paper px-4 py-3.5"
                  >
                    <span className="text-sm text-ink/60">{k}</span>
                    <span className="font-mono text-sm">{v}</span>
                  </div>
                ))}
              </div>

              {!applied ? (
                <button
                  ref={apply}
                  onClick={() => setApplied(true)}
                  data-cursor="Apply"
                  className="signal-btn mt-6 w-full justify-center !py-4"
                >
                  Apply to occupy →
                </button>
              ) : (
                <div className="mt-6 rounded-sm border border-[var(--color-signal)] bg-[var(--color-signal)]/8 p-5 text-center">
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-signal)] text-white">
                    ✓
                  </div>
                  <p className="display text-xl">Application sent</p>
                  <p className="mt-1 text-sm text-ink/55">
                    The owner reviews verified applicants within 48 hours. (Demo:
                    nothing was really submitted.)
                  </p>
                </div>
              )}

              <button className="ghost-btn mt-3 w-full justify-center border-ink/20 text-ink hover:bg-ink hover:text-paper" data-cursor="Chat">
                Message the owner
              </button>

              <p className="mt-5 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brass)]" />
                Verified owner · KYC complete
              </p>
            </div>
          </div>
        </div>

        {/* more spaces */}
        <div className="mt-28 border-t border-paper-line pt-12">
          <span className="label text-ink/45">More in the in-between</span>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.id}
                to={`/space/${o.id}`}
                data-cursor="View"
                className="group flex flex-col overflow-hidden rounded-sm border border-paper-line bg-paper transition-all duration-500 hover:border-ink/40"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-paper-line">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <SpaceThumb seed={o.id} tone={o.tone} />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="display text-lg leading-tight">{o.title}</p>
                    <p className="text-xs text-ink/50">{o.area}</p>
                  </div>
                  <span className="display text-xl text-[var(--color-signal-deep)]">
                    {inrShort(o.semiRent)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

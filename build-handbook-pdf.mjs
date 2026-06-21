import { readFileSync, writeFileSync } from "node:fs";
import { marked } from "marked";

// 1. markdown -> html body
const md = readFileSync(new URL("./HANDBOOK.md", import.meta.url), "utf8");
const body = marked.parse(md, { mangle: false, headerIds: true });

// 2. branded HTML shell (Meanwhile design language)
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Hanken+Grotesk:wght@300..700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#f1ede6; --paper-dim:#e7e1d7; --line:#d4ccbd;
    --ink:#0c0d0f; --ink-soft:#15161a; --grey:#7d786f;
    --signal:#ff5a1f; --brass:#b08a4f; --blue:#2f6df0;
    --display:"Fraunces",serif; --sans:"Hanken Grotesk",sans-serif;
    --mono:"Space Mono",ui-monospace,"Menlo","DejaVu Sans Mono",monospace;
  }
  *{box-sizing:border-box;}
  @page{ size:A4; margin:18mm 16mm 20mm 16mm; }
  @page:first{ margin:0; }
  html,body{margin:0;padding:0;}
  body{ font-family:var(--sans); color:var(--ink); background:#fff;
    font-size:10.5pt; line-height:1.62; -webkit-font-smoothing:antialiased; }

  /* ---------- cover ---------- */
  .cover{ position:relative; height:297mm; width:210mm; background:var(--paper);
    page-break-after:always; overflow:hidden; padding:24mm; display:flex;
    flex-direction:column; justify-content:space-between;
    background-image:linear-gradient(to right,rgba(12,13,15,.05) 1px,transparent 1px),
      linear-gradient(to bottom,rgba(12,13,15,.05) 1px,transparent 1px);
    background-size:14mm 14mm; }
  .cover .mark{ font-family:var(--display); font-size:20pt; font-weight:600; }
  .cover .mark i{font-style:italic;}
  .cover .sq{display:inline-block;width:.42em;height:.42em;background:var(--signal);margin-left:.18em;vertical-align:baseline;}
  .cover .eyebrow{ font-family:var(--mono); text-transform:uppercase; letter-spacing:.28em;
    font-size:8pt; color:var(--signal); }
  .cover h1{ font-family:var(--display); font-weight:400; font-size:58pt; line-height:.92;
    letter-spacing:-.02em; margin:0; }
  .cover h1 em{font-style:italic;color:var(--signal);}
  .cover .sub{ font-family:var(--display); font-style:italic; font-size:20pt; color:var(--grey); margin-top:8mm; }
  .cover .plan{ position:absolute; right:-20mm; top:11mm; width:104mm; opacity:.85; }
  .cover .meta{ display:flex; gap:0; border:1px solid var(--ink); border-bottom:none; }
  .cover .meta div{ flex:1; border-bottom:1px solid var(--ink); border-right:1px solid var(--ink); padding:5mm; }
  .cover .meta div:last-child{border-right:none;}
  .cover .meta .k{ font-family:var(--mono); text-transform:uppercase; letter-spacing:.2em; font-size:7pt; color:var(--grey); }
  .cover .meta .v{ font-family:var(--mono); font-size:9pt; margin-top:2mm; }
  .cover .meta .v b{color:var(--signal);}
  .cover .meta .v .r{font-family:var(--sans);} /* ₹ glyph: Space Mono lacks it */

  /* ---------- content ---------- */
  .content{ max-width:170mm; }
  h1,h2,h3{ font-family:var(--display); font-weight:400; letter-spacing:-.015em; line-height:1.08; }
  h1{ font-size:26pt; margin:0 0 4mm; }
  h2{ font-size:18pt; margin:11mm 0 3mm; padding-top:5mm; border-top:1.5px solid var(--ink);
    page-break-after:avoid; }
  h2:first-of-type{border-top:none;padding-top:0;margin-top:0;}
  h3{ font-size:12.5pt; margin:6mm 0 2mm; page-break-after:avoid; }
  h3 strong{font-weight:400;}
  p{margin:0 0 3mm;}
  a{color:var(--ink);text-decoration:none;border-bottom:1px solid var(--line);}
  strong{font-weight:600;}
  em{font-family:var(--display);font-style:italic;}
  ul,ol{margin:0 0 4mm;padding-left:6mm;}
  li{margin:0 0 1.5mm;}
  li::marker{color:var(--signal);}
  hr{ border:none; border-top:1px solid var(--line); margin:9mm 0; }
  blockquote{ margin:4mm 0; padding:4mm 6mm; background:var(--paper);
    border-left:2px solid var(--signal); border-radius:0 2px 2px 0; page-break-inside:avoid; }
  blockquote p:last-child{margin-bottom:0;}
  blockquote h3{margin-top:1mm;}
  code{ font-family:var(--mono); font-size:8.5pt; background:var(--paper-dim);
    padding:.5mm 1.5mm; border-radius:2px; }
  pre{ font-family:var(--mono); font-size:8pt; line-height:1.5; background:var(--ink);
    color:var(--paper); padding:5mm; border-radius:3px; overflow:auto; page-break-inside:avoid; margin:0 0 4mm; }
  pre code{background:none;color:inherit;padding:0;}
  table{ width:100%; border-collapse:collapse; margin:3mm 0 5mm; font-size:9pt; page-break-inside:avoid; }
  th,td{ border:1px solid var(--line); padding:2.5mm 3mm; text-align:left; vertical-align:top; }
  th{ font-family:var(--mono); text-transform:uppercase; letter-spacing:.1em; font-size:7.5pt;
    background:var(--paper); }
  /* the first H1 + intro blockquote + TOC live on their own opening page */
  .content > h1:first-child{ font-size:30pt; }
  .toc-break{page-break-after:always;}
</style></head>
<body>
  <section class="cover">
    <div>
      <div class="mark"><i>Mean</i>while<span class="sq"></span></div>
    </div>
    <svg class="plan" viewBox="0 0 600 520" fill="none" stroke="#0c0d0f" stroke-width="2">
      <rect x="40" y="40" width="240" height="200" fill="#ff5a1f"/>
      <rect x="300" y="40" width="260" height="120" fill="#b08a4f"/>
      <rect x="300" y="180" width="260" height="120" fill="#2f6df0"/>
      <rect x="40" y="260" width="160" height="220" fill="#ff5a1f"/>
      <rect x="220" y="320" width="340" height="160" fill="#b08a4f"/>
      <rect x="40" y="40" width="520" height="440"/>
      <line x1="300" y1="40" x2="300" y2="480"/>
      <line x1="300" y1="160" x2="560" y2="160"/>
      <line x1="300" y1="300" x2="560" y2="300"/>
      <line x1="40" y1="260" x2="300" y2="260"/>
      <line x1="200" y1="260" x2="200" y2="480"/>
    </svg>
    <div>
      <div class="eyebrow">Project Handbook · Commercial Vacancy Monetization</div>
      <h1>Half&nbsp;rent.<br><em>Full&nbsp;opportunity.</em></h1>
      <div class="sub">Meanwhile — the marketplace for the in-between.</div>
    </div>
    <div class="meta">
      <div><div class="k">Project</div><div class="v"><i>Mean</i>while (fmr. SemiRent)</div></div>
      <div><div class="k">Drawing</div><div class="v">Handbook Rev. 04</div></div>
      <div><div class="k">Scale</div><div class="v"><span class="r">₹</span>0 → <span class="r">₹</span>30k / 1:1</div></div>
      <div><div class="k">Drawn by</div><div class="v"><b>made. by ac</b></div></div>
    </div>
  </section>
  <section class="content">
    ${body}
  </section>
</body></html>`;

writeFileSync(new URL("./handbook.print.html", import.meta.url), html);
console.log("✓ wrote handbook.print.html");

/**
 * Meanwhile wordmark. "Mean" in Fraunces italic, "while" upright, with the
 * signature signal square, the lit pixel of an occupied space.
 */
export default function Wordmark({ className = "", onDark = false }) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.04em] font-display text-[1.35rem] font-medium tracking-tight ${
        onDark ? "text-paper" : "text-ink"
      } ${className}`}
    >
      <span className="italic">Mean</span>
      <span>while</span>
      <span
        className="ml-[0.14em] inline-block h-[0.42em] w-[0.42em] translate-y-[-0.02em] bg-[var(--color-signal)]"
        aria-hidden
      />
    </span>
  );
}

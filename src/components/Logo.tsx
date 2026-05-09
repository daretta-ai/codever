import { cn } from "./ui/cn";

type Variant = "full" | "abbrev";

export function Logo({
  variant = "full",
  size = 18,
  invert = false,
  className,
}: {
  variant?: Variant;
  size?: number;
  invert?: boolean;
  className?: string;
}) {
  const word = variant === "full" ? "CODEVER" : "C";
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-[0.28em] whitespace-nowrap leading-none",
        invert ? "text-ink-000" : "text-paper",
        className,
      )}
      style={{ fontSize: size }}
      aria-label={variant === "full" ? "Codever" : "Codever — abbreviated"}
    >
      <span
        aria-hidden="true"
        className={cn(
          "font-bracket text-[1.1em] font-normal",
          invert ? "text-indigo" : "text-paper-2",
        )}
      >
        &lt;
      </span>
      <span className="font-mark font-normal tracking-[0.06em]">{word}</span>
      <span
        aria-hidden="true"
        className={cn(
          "font-bracket text-[1.1em] font-normal",
          invert ? "text-indigo" : "text-paper-2",
        )}
      >
        &gt;
      </span>
    </span>
  );
}

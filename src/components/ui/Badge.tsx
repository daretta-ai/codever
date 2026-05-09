import type { ReactNode } from "react";
import { cn } from "./cn";

type Tone = "default" | "live" | "indigo" | "solid";

const toneClasses: Record<Tone, { wrap: string; dot: string }> = {
  default: {
    wrap: "border-line-12 text-paper-3",
    dot: "bg-paper-4",
  },
  live: {
    wrap: "border-[rgb(212_232_86_/_0.32)] text-paper",
    dot: "bg-signal shadow-[0_0_0_4px_var(--color-signal-soft)]",
  },
  indigo: {
    wrap: "border-[rgb(107_90_168_/_0.45)] bg-indigo-veil text-paper",
    dot: "bg-indigo-bright",
  },
  solid: {
    wrap: "border-transparent bg-paper text-ink-000",
    dot: "bg-ink-000/40",
  },
};

export function Badge({
  children,
  tone = "default",
  showDot = true,
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  showDot?: boolean;
  className?: string;
}) {
  const t = toneClasses[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-[5px] font-mono text-[11px] uppercase tracking-[0.06em]",
        t.wrap,
        className,
      )}
    >
      {showDot && (
        <span className={cn("inline-block h-1.5 w-1.5 rounded-full", t.dot)} />
      )}
      {children}
    </span>
  );
}

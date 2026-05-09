import type { ReactNode } from "react";
import { cn } from "./cn";

/* Section block — editorial cadence (144 / 96 / 64 px). */
export function Section({
  children,
  className,
  noBorder = false,
  pad = "default",
}: {
  children: ReactNode;
  className?: string;
  noBorder?: boolean;
  pad?: "default" | "tight" | "none";
}) {
  return (
    <section
      className={cn(
        pad === "default" && "py-36 max-md:py-24 max-sm:py-16",
        pad === "tight" && "py-24 max-md:py-16 max-sm:py-12",
        pad === "none" && "py-0",
        !noBorder && "border-b border-line-08 last-of-type:border-b-0",
        className,
      )}
    >
      {children}
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "./cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1240px] px-8 max-sm:px-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

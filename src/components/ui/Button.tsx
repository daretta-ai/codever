import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "./cn";

type Variant = "primary" | "indigo" | "ghost" | "mono";

const base =
  "group inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm border border-transparent font-sans text-[14px] font-medium leading-none tracking-[-0.005em] no-underline cursor-pointer transition-[background,border-color,color,transform] duration-150 ease-(--ease-exit)";
const padded = "px-[22px] py-[14px]";

const variantClasses: Record<Variant, string> = {
  primary: cn(padded, "bg-paper text-ink-000 hover:bg-white hover:-translate-y-px"),
  indigo: cn(
    padded,
    "bg-indigo text-paper hover:bg-indigo-bright hover:-translate-y-px",
  ),
  ghost: cn(
    padded,
    "bg-transparent text-paper border-line-20 hover:border-paper hover:-translate-y-px",
  ),
  mono:
    "bg-transparent text-paper-3 px-0 py-2 rounded-none border-b border-line-20 font-mono text-[12px] tracking-[0.04em] uppercase hover:text-paper hover:border-b-signal",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "children" | "className">) {
  return (
    <button
      {...rest}
      className={cn(base, variantClasses[variant], className)}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  className,
  href,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link
      {...rest}
      href={href}
      className={cn(base, variantClasses[variant], className)}
    >
      {children}
    </Link>
  );
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-[3px]">
      →
    </span>
  );
}

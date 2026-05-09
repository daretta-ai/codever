import type { ComponentProps, ReactNode } from "react";
import { cn } from "./cn";

const labelCls =
  "flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-paper-4";
const controlCls =
  "w-full rounded-sm border border-line-12 bg-ink-100 px-3.5 py-3 font-sans text-[15px] normal-case tracking-[-0.005em] text-paper outline-none transition-colors duration-150 placeholder:text-paper-5 focus:border-indigo-bright";

export function FieldInput({
  label,
  className,
  ...rest
}: { label: ReactNode; className?: string } & ComponentProps<"input">) {
  return (
    <label className={cn(labelCls, className)}>
      {label}
      <input {...rest} className={controlCls} />
    </label>
  );
}

export function FieldTextarea({
  label,
  className,
  ...rest
}: { label: ReactNode; className?: string } & ComponentProps<"textarea">) {
  return (
    <label className={cn(labelCls, className)}>
      {label}
      <textarea
        rows={3}
        {...rest}
        className={cn(controlCls, "min-h-24 resize-y")}
      />
    </label>
  );
}

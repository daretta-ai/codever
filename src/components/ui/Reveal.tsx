"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

type Tag = "div" | "section" | "h1" | "h2" | "p" | "span";

const SECTION_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

/**
 * Reveal — viewport-triggered fade-up. One-shot, 400ms.
 * Used sparingly: hero, section heads, manifesto. Per the motion spec
 * (§08), animare ogni elemento al reveal è vietato — Reveal must be a
 * deliberate decision, not a default wrapper.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
  once?: boolean;
}) {
  const Component = motion[as] as React.ComponentType<HTMLMotionProps<Tag>>;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.4, ease: SECTION_EASE, delay }}
    >
      {children}
    </Component>
  );
}

/**
 * RevealOnMount — same easing/duration but fires on mount, not on
 * viewport entry. Used for hero h1 (above the fold).
 */
export function RevealOnMount({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
}) {
  const Component = motion[as] as React.ComponentType<HTMLMotionProps<Tag>>;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: SECTION_EASE, delay }}
    >
      {children}
    </Component>
  );
}

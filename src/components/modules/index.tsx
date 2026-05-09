import { Logo } from "../Logo";
import {
  Arrow,
  Badge,
  FieldInput,
  FieldTextarea,
  LinkButton,
  Reveal,
  cn,
} from "../ui";

/* ── 10.02 Page header ─────────────────────────────────── */
export function PageHeader({
  index,
  section,
  title,
  emphasis,
  lead,
}: {
  index: string;
  section: string;
  title: string;
  emphasis: string;
  lead: string;
}) {
  return (
    <Reveal
      as="div"
      className="page-header-bg grid grid-cols-[200px_1fr] items-end gap-12 rounded-xl border border-line-08 px-12 py-14 max-md:grid-cols-1 max-md:gap-6 max-md:p-8"
    >
      <div className="w-40 border-t border-line-20 pt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-paper-4">
        <span className="mr-2 text-signal">{index}</span>
        {section}
      </div>
      <div>
        <h1 className="m-0 mb-4 max-w-[18ch] font-sans text-[clamp(40px,5vw,72px)] font-normal leading-[1.02] tracking-[-0.035em] text-paper">
          {title} <em className="font-light italic text-paper-3">{emphasis}</em>
        </h1>
        <p className="m-0 max-w-[56ch] text-lg leading-[1.5] text-paper-3">
          {lead}
        </p>
      </div>
    </Reveal>
  );
}

/* ── 10.03 Triplet — cadence statement ─────────────────── */
type TripletLine = { tag: string; head: string; emph: string };
export function Triplet({ lines }: { lines: TripletLine[] }) {
  return (
    <div className="grid grid-cols-3 border-y border-line-20 py-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:py-8">
      {lines.map((l, i) => (
        <div
          key={l.tag}
          className={cn(
            "border-l border-line-08 px-8",
            i === 0 && "border-l-0 pl-0",
            "max-sm:border-l-0 max-sm:px-0 max-sm:py-6 max-sm:border-t max-sm:border-line-08",
            i === 0 && "max-sm:border-t-0 max-sm:pt-0",
          )}
        >
          <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.06em] text-paper-4 before:mr-2.5 before:inline-block before:h-px before:w-[18px] before:bg-signal before:align-middle before:content-['']">
            {l.tag}
          </div>
          <h3 className="m-0 max-w-[18ch] font-sans text-[28px] font-normal leading-[1.18] tracking-[-0.02em] text-paper">
            {l.head} <em className="font-light italic text-paper-3">{l.emph}</em>
          </h3>
        </div>
      ))}
    </div>
  );
}

/* ── 10.04 Argument list ───────────────────────────────── */
export function ArgList({
  items,
}: {
  items: { id: string; head: string; body: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-08">
      {items.map((it, i) => (
        <div
          key={it.id}
          className={cn(
            "grid grid-cols-[80px_1fr_280px] items-start gap-8 px-8 py-7 max-md:grid-cols-[60px_1fr] max-md:gap-x-6",
            i > 0 && "border-t border-line-08",
          )}
        >
          <div className="font-mono text-xs tracking-[0.04em] text-signal">
            {it.id}
          </div>
          <h4 className="m-0 max-w-[30ch] font-sans text-[22px] font-medium leading-[1.25] tracking-[-0.015em] text-paper">
            {it.head}
          </h4>
          <p className="m-0 text-sm leading-[1.55] text-paper-3 max-md:col-start-2">
            {it.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── 10.05 Operational domains ─────────────────────────── */
export function Domains({
  items,
}: {
  items: { tag: string; title: string }[];
}) {
  return (
    <div className="grid grid-cols-4 gap-px overflow-hidden rounded-xl border border-line-08 bg-line-08 max-md:grid-cols-2 max-sm:grid-cols-1">
      {items.map((d) => (
        <div
          key={d.tag}
          className="group flex min-h-[220px] flex-col justify-between bg-ink-050 p-7 transition-colors duration-200 hover:bg-ink-100"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-paper-4">
            {d.tag}
          </div>
          <h4 className="m-0 mt-6 max-w-[16ch] font-sans text-xl font-medium leading-[1.25] tracking-[-0.015em] text-paper">
            {d.title}
          </h4>
          <div className="mt-6 flex items-center gap-2 font-mono text-xs text-paper-3">
            <span
              aria-hidden="true"
              className="block h-px w-6 bg-paper-4 transition-[width,background] duration-200 group-hover:w-9 group-hover:bg-signal"
            />
            Read intervention
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── 10.06 Intervention framework ─────────────────────── */
export function Framework({
  steps,
}: {
  steps: { num: string; label: string; head: string; body: string }[];
}) {
  return (
    <div className="relative grid grid-cols-4 overflow-hidden rounded-xl border border-line-08 max-md:grid-cols-2 max-sm:grid-cols-1">
      {steps.map((st, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div
            key={st.num}
            className={cn(
              "relative flex min-h-[220px] flex-col gap-4 bg-ink-050 px-7 py-8",
              !isLast && "border-r border-line-08",
              "max-md:nth-[2]:border-r-0 max-md:nth-[-n+2]:border-b max-md:border-line-08",
              "max-sm:border-r-0 max-sm:border-b max-sm:border-line-08 max-sm:last:border-b-0",
            )}
          >
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.06em] text-paper-4">
              <b className="font-medium text-signal">{st.num}</b>
              <span>{st.label}</span>
            </div>
            <h4 className="m-0 font-sans text-2xl font-medium tracking-[-0.02em] text-paper">
              {st.head}
            </h4>
            <p className="m-0 max-w-[28ch] text-sm leading-[1.55] text-paper-3">
              {st.body}
            </p>
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute top-1/2 -right-2.5 z-[2] flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-line-12 bg-ink-000 font-mono text-sm text-paper-3 max-md:hidden"
              >
                →
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── 10.07 Capability list ─────────────────────────────── */
export function CapList({
  items,
}: {
  items: { id: string; head: string; body: string }[];
}) {
  return (
    <div className="border-t border-line-20">
      {items.map((c) => (
        <div
          key={c.id}
          className="grid grid-cols-[80px_280px_1fr_60px] items-baseline gap-8 border-b border-line-08 py-7 transition-[padding,background] duration-200 hover:bg-ink-050 hover:px-4 max-md:grid-cols-[60px_1fr]"
        >
          <div className="font-mono text-xs tracking-[0.04em] text-paper-4">
            {c.id}
          </div>
          <h4 className="m-0 font-sans text-[26px] font-medium tracking-[-0.02em] text-paper">
            {c.head}
          </h4>
          <p className="m-0 max-w-[50ch] text-sm leading-[1.55] text-paper-3 max-md:col-start-2">
            {c.body}
          </p>
          <div
            aria-hidden="true"
            className="text-right font-mono text-xs text-paper-4 max-md:hidden"
          >
            →
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── 10.08 Decision process ────────────────────────────── */
export function DecisionProcess({
  steps,
  activeIndex = 0,
}: {
  steps: { num: string; head: string; body: string }[];
  activeIndex?: number;
}) {
  return (
    <div className="relative grid grid-cols-5 gap-4 pt-10 max-md:grid-cols-2 max-md:gap-8 before:absolute before:top-6 before:right-6 before:left-6 before:h-px before:bg-line-12 before:content-[''] max-md:before:hidden">
      {steps.map((st, i) => {
        const active = i === activeIndex;
        return (
          <div key={st.num} className="relative">
            <div
              className={cn(
                "absolute -top-10 left-0 z-[1] flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs",
                active
                  ? "border border-signal bg-signal text-ink-000 shadow-[0_0_0_6px_var(--color-signal-soft)]"
                  : "border border-line-20 bg-ink-000 text-paper-3",
              )}
            >
              {st.num}
            </div>
            <h4 className="m-0 mt-3 mb-1.5 font-sans text-lg font-medium tracking-[-0.015em] text-paper">
              {st.head}
            </h4>
            <p className="m-0 text-[13px] leading-[1.5] text-paper-3">
              {st.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* ── 10.09 Manifesto pull ──────────────────────────────── */
export function Manifesto({
  mark = "[ master message ]",
  pre,
  italic,
  highlight,
  attrib,
}: {
  mark?: string;
  pre: string;
  italic: string;
  highlight: string;
  attrib: string;
}) {
  return (
    <Reveal
      as="div"
      className="manifesto-bg relative overflow-hidden rounded-xl border border-line-08 px-16 py-24 max-md:px-8 max-md:py-16 max-sm:px-6 max-sm:py-12"
    >
      <span className="absolute top-6 right-8 font-mono text-[11px] uppercase tracking-[0.08em] text-paper-4">
        {mark}
      </span>
      <blockquote className="m-0 max-w-[22ch] font-sans text-[clamp(40px,5vw,72px)] font-light leading-[1.02] tracking-[-0.035em] text-paper">
        {pre}
        <br />
        <span className="italic text-paper-3">
          {italic}{" "}
          <b className="marked font-normal not-italic text-paper">{highlight}</b>
        </span>
      </blockquote>
      <div className="mt-8 flex items-center gap-[18px] font-mono text-xs uppercase tracking-[0.06em] text-paper-4 before:block before:h-px before:w-7 before:bg-signal before:content-['']">
        {attrib}
      </div>
    </Reveal>
  );
}

/* ── 10.10 Group lockup ────────────────────────────────── */
export function GroupLockup({
  variant = "default",
}: {
  variant?: "default" | "large";
}) {
  const isLarge = variant === "large";
  return (
    <div
      className={cn(
        "grid grid-cols-[1.4fr_1fr] items-center gap-12 rounded-xl border border-line-08 bg-ink-050 max-md:grid-cols-1",
        isLarge ? "px-20 py-24 max-md:p-14 max-sm:p-8" : "p-14 max-sm:p-8",
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center gap-8 text-paper",
          isLarge ? "text-[clamp(48px,7vw,88px)]" : "text-[40px]",
        )}
      >
        <Logo size={isLarge ? 64 : 40} />
        <span aria-hidden="true" className="font-mono text-xl text-paper-4">
          ×
        </span>
        <span className="font-sans font-light italic tracking-[0.04em]">
          Mirror
        </span>
      </div>
      <div>
        <h4 className="m-0 mb-3 font-sans text-[22px] font-medium tracking-[-0.015em] text-paper">
          Part of a broader structure.
        </h4>
        <p className="m-0 mb-4 max-w-[36ch] text-sm leading-[1.55] text-paper-3">
          Codever è parte del gruppo Mirror — un sistema integrato che combina
          esecuzione tecnica, design e strategia.
        </p>
        <div className="flex flex-col gap-2 border-t border-line-08 pt-4 font-mono text-xs text-paper">
          <span className="before:mr-1 before:text-signal before:content-['+']">
            {" "}
            Architecture
          </span>
          <span className="before:mr-1 before:text-signal before:content-['+']">
            {" "}
            Design
          </span>
          <span className="before:mr-1 before:text-signal before:content-['+']">
            {" "}
            Strategy
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── 10.11 Team card ───────────────────────────────────── */
export function TeamCard({
  label,
  title,
  body,
  stats,
}: {
  label: string;
  title: string;
  body: string;
  stats: { value: string; unit?: string; key: string }[];
}) {
  return (
    <div className="grid grid-cols-[1.3fr_1fr] gap-6 max-md:grid-cols-1">
      <div className="flex flex-col gap-4 rounded-xl border border-line-08 bg-ink-050 p-14 max-sm:p-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-4">
          {label}
        </span>
        <h3 className="m-0 font-sans text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-paper">
          {title}
        </h3>
        <p className="m-0 max-w-[44ch] text-[15px] leading-[1.6] text-paper-3">
          {body}
        </p>
      </div>
      <div className="grid grid-rows-3 gap-px overflow-hidden rounded-xl border border-line-08 bg-line-08">
        {stats.map((st) => (
          <div
            key={st.key}
            className="flex min-h-[100px] flex-col justify-between bg-ink-050 px-7 py-6"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-paper-3">
              {st.key}
            </div>
            <div className="font-sans text-[36px] font-normal tracking-[-0.025em] text-paper">
              {st.value}
              {st.unit && (
                <em className="ml-0.5 font-mono text-[22px] font-normal not-italic text-paper-4">
                  {st.unit}
                </em>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 10.12 Contact module ──────────────────────────────── */
export function ContactModule() {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-line-08 max-md:grid-cols-1">
      <div className="flex flex-col gap-6 border-r border-line-08 bg-ink-050 p-14 max-md:border-r-0 max-md:border-b max-sm:p-8">
        <h3 className="m-0 max-w-[14ch] font-sans text-[40px] font-normal leading-[1.05] tracking-[-0.03em] text-paper">
          Discuss <em className="font-light italic text-paper-3">your system.</em>
        </h3>
        <p className="m-0 max-w-[40ch] text-[15px] leading-[1.55] text-paper-3">
          We work on systems where reliability and control matter. Partiamo dal
          contesto, non dall&rsquo;implementazione.
        </p>
        <ul className="m-0 mt-4 flex list-none flex-col gap-3 border-t border-line-08 p-0 pt-5 font-mono text-[13px] text-paper-3">
          <li className="before:mr-1 before:text-signal before:content-['+']">
            {" "}
            complex systems
          </li>
          <li className="before:mr-1 before:text-signal before:content-['+']">
            {" "}
            new or existing platforms
          </li>
          <li className="before:mr-1 before:text-signal before:content-['+']">
            {" "}
            critical environments
          </li>
        </ul>
      </div>
      <form
        action="mailto:hello@codever.it"
        method="post"
        encType="text/plain"
        className="flex flex-col gap-4 bg-ink-050 p-14 max-sm:p-8"
      >
        <span className="border-b border-line-08 pb-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-paper-4">
          Form · qualification
        </span>
        <FieldInput
          label="Name"
          name="name"
          required
          placeholder="Your full name"
        />
        <FieldInput
          label="Company"
          name="company"
          required
          placeholder="Where the system lives"
        />
        <FieldTextarea
          label="The system"
          name="system"
          rows={3}
          required
          placeholder="What does it do, where does it strain, what can't break?"
        />
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="group inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-sm border border-transparent bg-paper px-[22px] py-[14px] font-sans text-[14px] font-medium leading-none tracking-[-0.005em] text-ink-000 transition-[background,transform] duration-150 ease-(--ease-exit) hover:-translate-y-px hover:bg-white"
          >
            Send <Arrow />
          </button>
          <Badge>Reply within 48h</Badge>
        </div>
      </form>
    </div>
  );
}

/* ── 10.13 CTA banner ──────────────────────────────────── */
export function CTABanner({
  title = "Built for systems that",
  emphasis = "can't afford to break.",
  primaryHref = "/contact",
  primaryLabel = "Discuss your system",
  secondaryHref = "/systems",
  secondaryLabel = "See how we intervene",
}: {
  title?: string;
  emphasis?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <Reveal
      as="div"
      className="cta-banner-bg relative grid grid-cols-[1.5fr_auto] items-center gap-12 overflow-hidden rounded-xl border border-line-08 px-16 py-24 max-md:grid-cols-1 max-md:px-10 max-md:py-16 max-sm:px-6 max-sm:py-12 before:absolute before:inset-0 before:cta-grid before:content-['']"
    >
      <h3 className="relative z-[1] m-0 max-w-[18ch] font-sans text-[clamp(32px,4vw,56px)] font-normal leading-[1.04] tracking-[-0.03em] text-paper">
        {title} <em className="font-light italic text-paper-3">{emphasis}</em>
      </h3>
      <div className="relative z-[1] flex flex-col gap-3">
        <LinkButton href={primaryHref} variant="primary">
          {primaryLabel} <Arrow />
        </LinkButton>
        <LinkButton href={secondaryHref} variant="mono">
          {secondaryLabel}
        </LinkButton>
      </div>
    </Reveal>
  );
}

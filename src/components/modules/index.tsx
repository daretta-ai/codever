import Link from "next/link";
import { Logo } from "../Logo";
import s from "./modules.module.css";

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
    <div className={s.pageHeader}>
      <div className={s.crumbs}>
        <span>{index}</span>
        {section}
      </div>
      <div>
        <h1>
          {title} <em>{emphasis}</em>
        </h1>
        <p>{lead}</p>
      </div>
    </div>
  );
}

/* ── 10.03 Triplet ─────────────────────────────────────── */
type TripletLine = { tag: string; head: string; emph: string };
export function Triplet({ lines }: { lines: TripletLine[] }) {
  return (
    <div className={s.triplet}>
      {lines.map((l) => (
        <div key={l.tag} className={s.line}>
          <div className={s.nm}>{l.tag}</div>
          <h3>
            {l.head} <em>{l.emph}</em>
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
    <div className={s.arglist}>
      {items.map((it) => (
        <div key={it.id} className={s.arg}>
          <div className={s.nu}>{it.id}</div>
          <h4>{it.head}</h4>
          <p>{it.body}</p>
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
    <div className={s.domains}>
      {items.map((d) => (
        <div key={d.tag} className={s.domain}>
          <div className={s.tag}>{d.tag}</div>
          <h4>{d.title}</h4>
          <div className={s.arrow}>Read intervention</div>
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
    <div className={s.framework}>
      {steps.map((st) => (
        <div key={st.num} className={s.fwStep}>
          <div className={s.nu}>
            <b>{st.num}</b>
            <span>{st.label}</span>
          </div>
          <h4>{st.head}</h4>
          <p>{st.body}</p>
        </div>
      ))}
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
    <div className={s.caplist}>
      {items.map((c) => (
        <div key={c.id} className={s.cap}>
          <div className={s.nu}>{c.id}</div>
          <h4>{c.head}</h4>
          <p>{c.body}</p>
          <div className={s.more} aria-hidden="true">→</div>
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
    <div className={s.process}>
      {steps.map((st, i) => (
        <div
          key={st.num}
          className={
            i === activeIndex ? `${s.processStep} ${s.active}` : s.processStep
          }
        >
          <div className={s.marker}>{st.num}</div>
          <h4>{st.head}</h4>
          <p>{st.body}</p>
        </div>
      ))}
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
    <div className={s.manifesto}>
      <span className={s.quoteMark}>{mark}</span>
      <blockquote>
        {pre}
        <br />
        <span className={s.em}>
          {italic} <b>{highlight}</b>
        </span>
      </blockquote>
      <div className={s.attrib}>{attrib}</div>
    </div>
  );
}

/* ── 10.10 Group lockup ────────────────────────────────── */
export function GroupLockup({
  variant = "default",
}: {
  variant?: "default" | "large";
}) {
  const className =
    variant === "large" ? `${s.grouplock} ${s.large}` : s.grouplock;
  return (
    <div className={className}>
      <div className={s.lock}>
        <Logo size={variant === "large" ? 64 : 40} />
        <span className={s.x} aria-hidden="true">×</span>
        <span className={s.mirror}>Mirror</span>
      </div>
      <div>
        <h4>Part of a broader structure.</h4>
        <p>
          Codever è parte del gruppo Mirror — un sistema integrato che combina
          esecuzione tecnica, design e strategia.
        </p>
        <div className={s.stack}>
          <span>Architecture</span>
          <span>Design</span>
          <span>Strategy</span>
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
    <div className={s.teamcard}>
      <div className={s.panel}>
        <span className={s.label}>{label}</span>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className={s.stats}>
        {stats.map((st) => (
          <div key={st.key} className={s.stat}>
            <div className={s.k}>{st.key}</div>
            <div className={s.v}>
              {st.value}
              {st.unit && <em>{st.unit}</em>}
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
    <div className={s.contactmod}>
      <div className={s.left}>
        <h3>
          Discuss <em>your system.</em>
        </h3>
        <p>
          We work on systems where reliability and control matter. Partiamo dal
          contesto, non dall&rsquo;implementazione.
        </p>
        <ul>
          <li>complex systems</li>
          <li>new or existing platforms</li>
          <li>critical environments</li>
        </ul>
      </div>
      <form
        className={s.right}
        action="mailto:hello@codever.it"
        method="post"
        encType="text/plain"
      >
        <span className={s.hint}>Form · qualification</span>
        <label className="field">
          Name
          <input name="name" required placeholder="Your full name" />
        </label>
        <label className="field">
          Company
          <input name="company" required placeholder="Where the system lives" />
        </label>
        <label className="field">
          The system
          <textarea
            name="system"
            rows={3}
            required
            placeholder="What does it do, where does it strain, what can't break?"
          />
        </label>
        <div className={s.actions}>
          <button type="submit" className="btn btn-primary">
            Send <span className="arrow">→</span>
          </button>
          <span className="badge">
            <span className="dot" /> Reply within 48h
          </span>
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
    <div className={s.ctabanner}>
      <h3>
        {title} <em>{emphasis}</em>
      </h3>
      <div className={s.actions}>
        <Link href={primaryHref} className="btn btn-primary">
          {primaryLabel} <span className="arrow">→</span>
        </Link>
        <Link href={secondaryHref} className="btn btn-mono">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}

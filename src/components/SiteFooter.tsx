import Link from "next/link";
import { Logo } from "./Logo";
import { Badge, Container } from "./ui";

const cols = [
  {
    title: "Sitemap",
    links: [
      { href: "/", label: "Home" },
      { href: "/systems", label: "Systems" },
      { href: "/approach", label: "Approach" },
      { href: "/about", label: "About" },
      { href: "/structure", label: "Structure" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Group",
    links: [
      { href: "/structure", label: "Mirror" },
      { href: "/systems", label: "Architecture" },
      { href: "/structure", label: "Design" },
      { href: "/structure", label: "Strategy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:hello@codever.it", label: "hello@codever.it" },
      { href: "https://www.linkedin.com/", label: "LinkedIn" },
      { href: "/contact", label: "Press kit" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-[1] pt-24 pb-16">
      <Container>
        <div className="rounded-xl border border-line-08 bg-ink-050 p-14 max-md:p-10 max-sm:p-7">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 border-b border-line-08 pb-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8">
            <div className="flex flex-col items-start gap-5">
              <Logo size={28} />
              <p className="m-0 max-w-[32ch] text-sm leading-[1.55] text-paper-3">
                Technical partner for complex systems. Control, clarity,
                reliability, long-term evolution.
              </p>
              <Badge tone="live">Accepting selected briefs</Badge>
            </div>
            {cols.map((c) => (
              <div key={c.title}>
                <h5 className="m-0 mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-paper-4">
                  {c.title}
                </h5>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-paper-2 transition-colors duration-150 hover:text-paper"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-6 pt-6 font-mono text-xs text-paper-4 max-sm:flex-col max-sm:items-start">
            <span>© {new Date().getFullYear()} Codever — part of Mirror group</span>
            <div className="flex gap-6">
              <span>Privacy</span>
              <span>Cookie</span>
              <span>v1.0</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

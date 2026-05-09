"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Container, cn } from "./ui";

const links = [
  { href: "/", label: "Home" },
  { href: "/systems", label: "Systems" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/structure", label: "Structure" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line-08 topbar-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 max-md:h-auto max-md:flex-wrap max-md:py-3.5">
          <Link href="/" aria-label="Codever — home" className="inline-flex items-center">
            <Logo size={17} />
          </Link>
          <nav aria-label="Primary">
            <ul className="m-0 flex list-none items-center gap-7 p-0 max-md:order-3 max-md:w-full max-md:flex-wrap max-md:gap-4">
              {links.map((l) => {
                const isActive =
                  l.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        "relative block py-1.5 font-mono text-xs uppercase tracking-[0.06em] transition-colors duration-150 hover:text-paper",
                        isActive
                          ? "text-paper after:absolute after:inset-x-0 after:-bottom-[2px] after:h-px after:bg-signal after:content-['']"
                          : "text-paper-3",
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-sm bg-paper px-4 py-2.5 font-sans text-[13px] font-medium text-ink-000 transition-[background,transform] duration-150 ease-(--ease-exit) hover:-translate-y-px hover:bg-white"
          >
            Discuss your system <span aria-hidden="true" className="max-sm:hidden">→</span>
          </Link>
        </div>
      </Container>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import styles from "./SiteNav.module.css";

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
    <header className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Codever — home">
          <Logo size={17} />
        </Link>
        <nav aria-label="Primary">
          <ul className={styles.links}>
            {links.map((l) => {
              const isActive =
                l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={isActive ? styles.active : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link href="/contact" className={styles.cta}>
          Discuss your system <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}

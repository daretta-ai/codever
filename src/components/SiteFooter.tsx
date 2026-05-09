import Link from "next/link";
import { Logo } from "./Logo";
import styles from "./SiteFooter.module.css";

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
    <footer className={styles.wrap}>
      <div className="container">
        <div className={styles.frame}>
          <div className={styles.top}>
            <div className={styles.brandBlock}>
              <Logo size={28} />
              <p>
                Technical partner for complex systems. Control, clarity,
                reliability, long-term evolution.
              </p>
              <span className="badge live">
                <span className="dot" />Accepting selected briefs
              </span>
            </div>
            {cols.map((c) => (
              <div key={c.title} className={styles.col}>
                <h5>{c.title}</h5>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            <span>© {new Date().getFullYear()} Codever — part of Mirror group</span>
            <div className={styles.right}>
              <span>Privacy</span>
              <span>Cookie</span>
              <span>v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type PanelItem = {
  num: string;
  title: string;
  desc: string;
};
type PanelDef = {
  key: string;
  label: string;
  eyebrow: string;
  heading: React.ReactNode;
  intro: string;
  items: PanelItem[];
};

const PANELS: PanelDef[] = [
  {
    key: "services",
    label: "Servizi",
    eyebrow: "01 — Servizi",
    heading: (
      <>
        Sistemi software <em>solidi</em>, evoluti senza fragilità.
      </>
    ),
    intro:
      "Architetture, sviluppo e modernizzazione di piattaforme che devono restare sotto controllo nel tempo.",
    items: [
      { num: "01", title: "Sviluppo Laravel", desc: "Backend e API performanti su PHP/Laravel." },
      { num: "02", title: "Architetture su misura", desc: "Disegno di sistemi che durano." },
      { num: "03", title: "Integrazione AI", desc: "AI integrata con governo e controllo." },
      { num: "04", title: "Modernizzazione legacy", desc: "Evoluzione senza rotture." },
      { num: "05", title: "Performance & dati", desc: "Throughput, query, integrità." },
      { num: "06", title: "Team augmentation", desc: "Guida tecnica al tuo team." },
    ],
  },
  {
    key: "approach",
    label: "Approccio",
    eyebrow: "02 — Approccio",
    heading: (
      <>
        Guida tecnica, <em>non body rental</em>.
      </>
    ),
    intro:
      "Il modo in cui interveniamo: prendere posizione, motivare le scelte, restare responsabili nel tempo.",
    items: [
      { num: "01", title: "Metodo", desc: "Le fasi di un intervento Codever." },
      { num: "02", title: "Principi tecnici", desc: "Cosa difendiamo nel codice." },
      { num: "03", title: "AI consapevole", desc: "Come usiamo l'AI senza perdere governo." },
      { num: "04", title: "Manifesto", desc: "Cosa siamo — e cosa non siamo." },
    ],
  },
  {
    key: "cases",
    label: "Casi",
    eyebrow: "03 — Casi",
    heading: (
      <>
        Sistemi reali, <em>in produzione</em>.
      </>
    ),
    intro:
      "Una selezione di interventi su piattaforme dove fermarsi non era un'opzione.",
    items: [
      { num: "01", title: "Fintech · scala 10×", desc: "Backend rifondato in produzione." },
      { num: "02", title: "SaaS B2B · AI", desc: "Pipeline AI con audit completo." },
      { num: "03", title: "Editoria digitale", desc: "Migrazione senza downtime." },
      { num: "04", title: "Logistica", desc: "Integrazione di 7 sistemi terzi." },
    ],
  },
  {
    key: "about",
    label: "Studio",
    eyebrow: "04 — Studio",
    heading: (
      <>
        Una squadra <em>piccola e tecnica</em>, a Firenze.
      </>
    ),
    intro:
      "Codever è uno studio specializzato. Pochi progetti, scelti, seguiti dall'inizio alla fine.",
    items: [
      { num: "01", title: "Chi siamo", desc: "Il team e il contesto." },
      { num: "02", title: "Lavoriamo con noi", desc: "Posizioni aperte." },
      { num: "03", title: "Note tecniche", desc: "Articoli e write-up." },
      { num: "04", title: "Contatti", desc: "Come iniziare un dialogo." },
    ],
  },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [lang, setLang] = useState<"it" | "en">("it");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<Record<string, boolean>>({});

  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t?.closest?.(".site-nav")) setOpenKey(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const enterPanel = (key: string) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    openTimer.current = window.setTimeout(() => setOpenKey(key), 60);
  };
  const leavePanel = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    closeTimer.current = window.setTimeout(() => setOpenKey(null), 180);
  };
  const toggleMobile = (key: string) =>
    setOpenMobile((s) => ({ ...s, [key]: !s[key] }));

  return (
    <>
      <div className={`nav-wrap${scrolled ? " is-scrolled" : ""}`}>
        <nav className="site-nav" aria-label="Primary">
          <a className="brand" href="#">
            <span className="br">&lt;</span>
            <span className="word">CODEVER</span>
            <span className="br">&gt;</span>
          </a>

          <ul className="nav-list" id="navList">
            <li data-key="home">
              <a href="#" className="is-active">
                Home
              </a>
            </li>
            {PANELS.map((p) => {
              const isOpen = openKey === p.key;
              return (
                <li
                  key={p.key}
                  data-key={p.key}
                  className={isOpen ? "is-open" : ""}
                  onMouseEnter={() => enterPanel(p.key)}
                  onMouseLeave={leavePanel}
                >
                  <button
                    className="nav-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`np-${p.key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenKey((k) => (k === p.key ? null : p.key));
                    }}
                    onFocus={() => setOpenKey(p.key)}
                  >
                    {p.label}
                  </button>
                  <div
                    className={`nav-panel${isOpen ? " is-open" : ""}`}
                    id={`np-${p.key}`}
                    role="region"
                  >
                    <div className="nav-panel-inner">
                      <div className="nav-panel-lead">
                        <div className="pn-eyebrow">{p.eyebrow}</div>
                        <h4>{p.heading}</h4>
                        <p>{p.intro}</p>
                      </div>
                      <div className="nav-panel-grid">
                        {p.items.map((it) => (
                          <a key={it.num} href="#">
                            <span className="pi-num">{it.num}</span>
                            <span className="pi-body">
                              <strong>{it.title}</strong>
                              <span>{it.desc}</span>
                            </span>
                            <span className="pi-arrow">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div
            className={`lang${lang === "en" ? " is-en" : " is-it"}`}
            role="group"
            aria-label="Lingua"
          >
            <button
              type="button"
              data-lang="it"
              aria-pressed={lang === "it"}
              onClick={() => setLang("it")}
            >
              IT
            </button>
            <button
              type="button"
              data-lang="en"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          <a className="cta-link compact" href="#contact">
            <span className="label">Discuss your system</span>
            <span className="arrow">→</span>
          </a>

          <button
            className="burger"
            type="button"
            aria-label="Apri menu"
            aria-expanded={menuOpen}
            aria-controls="mobileDrawer"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
          </button>
        </nav>
      </div>

      <aside
        className="mobile-drawer"
        id="mobileDrawer"
        aria-hidden={!menuOpen}
      >
        <ul className="md-list">
          <li>
            <a className="md-row" href="#">
              <span>
                <span className="num">00 /</span> &nbsp; Home
              </span>
              <span className="num">↗</span>
            </a>
          </li>
          {PANELS.map((p, idx) => {
            const isOpen = !!openMobile[p.key];
            return (
              <li key={p.key} className={isOpen ? "is-open" : ""}>
                <button
                  className="md-row"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleMobile(p.key)}
                >
                  <span>
                    <span className="num">{String(idx + 1).padStart(2, "0")} /</span>
                    &nbsp; {p.label}
                  </span>
                  <span className="chev"></span>
                </button>
                <div className="md-sub">
                  <div>
                    {p.items.map((it) => (
                      <a key={it.num} href="#">
                        {it.title}
                        <span>{it.num}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="md-foot">
          <div
            className={`lang${lang === "en" ? " is-en" : " is-it"}`}
            role="group"
            aria-label="Lingua"
          >
            <button
              type="button"
              data-lang="it"
              aria-pressed={lang === "it"}
              onClick={() => setLang("it")}
            >
              Italiano
            </button>
            <button
              type="button"
              data-lang="en"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              English
            </button>
          </div>
          <a className="cta-link" href="#contact">
            <span className="label">Discuss your system</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </aside>
    </>
  );
}

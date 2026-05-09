export function Hero() {
  return (
    <header className="hero" data-screen-label="Home / Hero">
      <div className="container">
        <div className="eyebrow">
          Codever · Technical partner for complex systems
        </div>
        <h1>
          Built for systems <em>that can&apos;t afford to break.</em>
        </h1>
        <p className="lede">
          We guide the evolution of complex digital systems, integrating AI to
          enable new capabilities while keeping systems stable, understandable,
          and under control.
        </p>
        <p className="sub">
          We focus on making systems evolve without introducing unnecessary
          complexity.
        </p>
        <div className="actions">
          <a className="cta-link" href="#systems">
            <span className="label">See how we intervene</span>
            <span className="arrow">→</span>
          </a>
          <a className="cta-link mute" href="#contact">
            <span className="label">Discuss your system</span>
            <span className="arrow">→</span>
          </a>
        </div>
        <div className="hero-status">
          <span className="pill">
            <span className="dot"></span>Accepting selected briefs
          </span>
          <span>Engineering-led · Backend &amp; architecture</span>
        </div>
      </div>
    </header>
  );
}

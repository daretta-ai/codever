export function CtaBanner() {
  return (
    <section id="contact" className="block" data-screen-label="Home / CTA">
      <div className="container">
        <div className="ctabanner">
          <h3>
            Built for systems that <em>can&apos;t afford to break.</em>
          </h3>
          <div className="actions">
            <a className="cta-link" href="#">
              <span className="label">Discuss your system</span>
              <span className="arrow">→</span>
            </a>
            <a className="cta-link mute" href="#">
              <span className="label">See how we intervene</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

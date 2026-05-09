const DOMAINS = [
  { tag: "D · 01", title: "Systems under performance pressure" },
  { tag: "D · 02", title: "Platforms with complex integrations" },
  { tag: "D · 03", title: "Systems evolving with AI capabilities" },
  { tag: "D · 04", title: "Legacy systems requiring controlled evolution" },
];

export function OperationalDomains() {
  return (
    <section
      id="systems"
      className="block section-rule"
      data-screen-label="Home / Operational domains"
    >
      <div className="container">
        <div className="block-head">
          <div>
            <div className="num">03 / Operational domains</div>
            <h2>Where we intervene.</h2>
          </div>
          <p>
            Four contexts where reliability, control, and long-term evolution
            are non-negotiable.
          </p>
        </div>
        <div className="domains">
          {DOMAINS.map((d) => (
            <a className="domain" href="#" key={d.tag}>
              <div className="tag">{d.tag}</div>
              <h4>{d.title}</h4>
              <div className="arrow">Read intervention</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

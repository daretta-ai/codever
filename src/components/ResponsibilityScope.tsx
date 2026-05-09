const ARGS = [
  {
    nu: "A · 01",
    title:
      "We take responsibility for architectural decisions, not just implementation.",
    body:
      "Every choice is motivated and owned. We document why it works today and why it will keep working tomorrow.",
  },
  {
    nu: "A · 02",
    title: "We validate requirements before building.",
    body:
      "Unnecessary complexity is removed before code is written. Every decision is aligned with the system as a whole.",
  },
  {
    nu: "A · 03",
    title:
      "We don't implement by default. We implement what makes sense for the system.",
    body:
      "Knowing when not to build is part of technical responsibility — often the highest-value decision in the room.",
  },
];

export function ResponsibilityScope() {
  return (
    <section
      className="block section-rule"
      data-screen-label="Home / Responsibility scope"
    >
      <div className="container">
        <div className="block-head">
          <div>
            <div className="num">02 / Responsibility scope</div>
            <h2>
              We take responsibility{" "}
              <em>for architectural decisions.</em>
            </h2>
          </div>
          <p>
            Not just implementation. We validate before building, remove
            unnecessary complexity, and align every decision with the system as
            a whole.
          </p>
        </div>
        <div className="arglist">
          {ARGS.map((a) => (
            <div className="arg" key={a.nu}>
              <div className="nu">{a.nu}</div>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

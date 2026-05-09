import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.meta}>
          <span>HOME</span>
          <span className={styles.sep} />
          <span>TECHNICAL PARTNER · COMPLEX SYSTEMS</span>
          <span className={styles.sep} />
          <span>EST. 2026</span>
        </div>
        <h1 className={styles.h1}>
          Built for systems that{" "}
          <span className={styles.marked}>can&rsquo;t&nbsp;afford</span> to break.
        </h1>
        <div className={styles.sub}>
          <div>
            <span className={styles.label}>Who we are</span>
            <p>
              We guide the evolution of complex digital systems, integrating AI to
              enable new capabilities while keeping systems stable, understandable,
              and under control.
            </p>
          </div>
          <div>
            <span className={styles.label}>How we work</span>
            <p>
              We focus on making systems evolve without introducing unnecessary
              complexity. Architectural decisions, not just implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

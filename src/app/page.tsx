import { Hero } from "@/components/Hero";
import {
  Triplet,
  ArgList,
  Domains,
  CTABanner,
  Manifesto,
} from "@/components/modules";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* System context */}
      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="block-index">
              <span className="num">01</span> SYSTEM CONTEXT
            </div>
            <div className="block-title">
              <h2>
                Systems grow. <em>Complexity follows.</em>
              </h2>
              <p>
                Performance degrades. Integrations become fragile. Data flows
                lose consistency. AI becomes a requirement — and a risk if not
                properly understood or controlled.
              </p>
            </div>
          </div>

          <Triplet
            lines={[
              {
                tag: "01 / Growth",
                head: "Systems grow.",
                emph: "Complexity follows.",
              },
              {
                tag: "02 / Drift",
                head: "Performance degrades.",
                emph: "Integrations become fragile.",
              },
              {
                tag: "03 / Risk",
                head: "Data flows lose consistency.",
                emph: "AI becomes a risk.",
              },
            ]}
          />
        </div>
      </section>

      {/* Manifesto pull */}
      <section className="block">
        <div className="container">
          <Manifesto
            pre="Without control,"
            italic="innovation creates"
            highlight="fragility."
            attrib="CODEVER · DESIGN PRINCIPLE 01"
          />
        </div>
      </section>

      {/* Responsibility scope */}
      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="block-index">
              <span className="num">02</span> RESPONSIBILITY SCOPE
            </div>
            <div className="block-title">
              <h2>
                We take responsibility for{" "}
                <em>architectural decisions, not just implementation.</em>
              </h2>
              <p>
                We validate requirements before building, removing unnecessary
                complexity and aligning every decision with the system as a
                whole. We don&rsquo;t implement by default — we implement what
                makes sense for the system.
              </p>
            </div>
          </div>

          <ArgList
            items={[
              {
                id: "A · 01",
                head: "We take responsibility for architectural decisions, not just implementation.",
                body: "Ogni scelta è motivata e rivendicata: documentiamo perché funziona oggi e perché continuerà a funzionare domani.",
              },
              {
                id: "A · 02",
                head: "We validate requirements before building.",
                body: "Rimuoviamo complessità non necessaria e allineiamo ogni decisione al sistema nel suo insieme — prima di scrivere codice.",
              },
              {
                id: "A · 03",
                head: "We don't implement by default. We implement what makes sense for the system.",
                body: "Sapere quando non costruire è parte della responsabilità tecnica. È spesso la decisione di maggior valore.",
              },
            ]}
          />
        </div>
      </section>

      {/* Operational domains */}
      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="block-index">
              <span className="num">03</span> OPERATIONAL DOMAINS
            </div>
            <div className="block-title">
              <h2>
                Where we intervene. <em>Four domains, one discipline.</em>
              </h2>
              <p>
                Sistemi sotto pressione di performance, piattaforme con
                integrazioni complesse, sistemi che evolvono con capacità AI,
                legacy che richiede evoluzione controllata.
              </p>
            </div>
          </div>

          <Domains
            items={[
              { tag: "D · 01", title: "Systems under performance pressure" },
              { tag: "D · 02", title: "Platforms with complex integrations" },
              { tag: "D · 03", title: "Systems evolving with AI capabilities" },
              {
                tag: "D · 04",
                title: "Legacy systems requiring controlled evolution",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="block">
        <div className="container">
          <CTABanner />
        </div>
      </section>
    </>
  );
}

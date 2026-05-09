import type { Metadata } from "next";
import {
  PageHeader,
  DecisionProcess,
  Manifesto,
  CTABanner,
} from "@/components/modules";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How we make technical decisions. Clarity over complexity, validation before implementation, controlled innovation, manageable evolution.",
};

export default function ApproachPage() {
  return (
    <>
      <section className="block" style={{ paddingTop: 96 }}>
        <div className="container">
          <PageHeader
            index="03"
            section="APPROACH"
            title="How we make"
            emphasis="technical decisions."
            lead="Clarity first. Systems must remain understandable. We prioritize clarity, control, and long-term sustainability — anche quando ciò significa dire di no."
          />
        </div>
      </section>

      {/* Design principles */}
      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="block-index">
              <span className="num">01</span> DESIGN PRINCIPLES
            </div>
            <div className="block-title">
              <h2>
                Four principles. <em>Non-negotiable.</em>
              </h2>
              <p>
                Clarity over complexity. Validation before implementation.
                Controlled innovation. Manageable evolution. I principi sono
                lenti decisionali, non slogan.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            className="pillars"
          >
            <Pillar
              num="P · 01"
              head="Clarity over complexity"
              body="Un sistema che non si capisce non si governa. La leggibilità è una proprietà architetturale."
            />
            <Pillar
              num="P · 02"
              head="Validation before implementation"
              body="Verifichiamo il problema prima di toccare il codice. Spesso la soluzione è non costruire."
            />
            <Pillar
              num="P · 03"
              head="Controlled innovation"
              body="L'innovazione (AI inclusa) è una decisione di sistema. Senza controllo, è solo rumore."
            />
            <Pillar
              num="P · 04"
              head="Manageable evolution"
              body="Ogni scelta è pensata per restare governabile a 12–24 mesi. Non per il momento."
            />
          </div>
        </div>
      </section>

      {/* Decision process */}
      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="block-index">
              <span className="num">02</span> DECISION PROCESS
            </div>
            <div className="block-title">
              <h2>
                Understand → Validate → Design → Implement →{" "}
                <em>Evolve.</em>
              </h2>
              <p>
                Cinque passi, una sequenza. Nessuno è opzionale: ogni decisione
                tecnica passa per tutti — anche quando il calendario suggerisce
                il contrario.
              </p>
            </div>
          </div>

          <DecisionProcess
            activeIndex={0}
            steps={[
              {
                num: "01",
                head: "Understand",
                body: "Sistema, vincoli e attori. Niente assunzioni implicite.",
              },
              {
                num: "02",
                head: "Validate",
                body: "Verifica del problema reale prima di toccare l'implementazione.",
              },
              {
                num: "03",
                head: "Design",
                body: "Architettura motivata. Trade-off espliciti, non nascosti.",
              },
              {
                num: "04",
                head: "Implement",
                body: "Esecuzione disciplinata, con responsabilità tecnica continua.",
              },
              {
                num: "05",
                head: "Evolve",
                body: "Il sistema continua a vivere. Lo progettiamo perché possa farlo.",
              },
            ]}
          />
        </div>
      </section>

      {/* Manifesto pull */}
      <section className="block">
        <div className="container">
          <Manifesto
            mark="[ trade-offs ]"
            pre="We prioritize"
            italic="clarity, control, and long-term"
            highlight="sustainability."
            attrib="CODEVER · DECISION MODEL"
          />
        </div>
      </section>

      <section className="block">
        <div className="container">
          <CTABanner />
        </div>
      </section>
    </>
  );
}

function Pillar({
  num,
  head,
  body,
}: {
  num: string;
  head: string;
  body: string;
}) {
  return (
    <div
      style={{
        padding: "24px 0",
        borderTop: "1px solid var(--line-20)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--f-mono)",
          fontSize: 11,
          color: "var(--signal)",
          letterSpacing: "0.06em",
        }}
      >
        {num}
      </div>
      <h4
        style={{
          fontFamily: "var(--f-sans)",
          fontWeight: 500,
          fontSize: 18,
          lineHeight: 1.3,
          margin: "8px 0 12px",
          letterSpacing: "-0.01em",
        }}
      >
        {head}
      </h4>
      <p
        style={{
          color: "var(--paper-3)",
          fontSize: 14,
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}

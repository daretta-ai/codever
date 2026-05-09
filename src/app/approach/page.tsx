import type { Metadata } from "next";
import {
  PageHeader,
  DecisionProcess,
  Manifesto,
  CTABanner,
} from "@/components/modules";
import { BlockHeader, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How we make technical decisions. Clarity over complexity, validation before implementation, controlled innovation, manageable evolution.",
};

const pillars = [
  {
    num: "P · 01",
    head: "Clarity over complexity",
    body: "Un sistema che non si capisce non si governa. La leggibilità è una proprietà architetturale.",
  },
  {
    num: "P · 02",
    head: "Validation before implementation",
    body: "Verifichiamo il problema prima di toccare il codice. Spesso la soluzione è non costruire.",
  },
  {
    num: "P · 03",
    head: "Controlled innovation",
    body: "L'innovazione (AI inclusa) è una decisione di sistema. Senza controllo, è solo rumore.",
  },
  {
    num: "P · 04",
    head: "Manageable evolution",
    body: "Ogni scelta è pensata per restare governabile a 12–24 mesi. Non per il momento.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <Section pad="tight" noBorder>
        <Container>
          <PageHeader
            index="03"
            section="APPROACH"
            title="How we make"
            emphasis="technical decisions."
            lead="Clarity first. Systems must remain understandable. We prioritize clarity, control, and long-term sustainability — anche quando ciò significa dire di no."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="01"
            label="DESIGN PRINCIPLES"
            title="Four principles."
            emphasis="Non-negotiable."
            lead="Clarity over complexity. Validation before implementation. Controlled innovation. Manageable evolution. I principi sono lenti decisionali, non slogan."
          />
          <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="border-t border-line-20 py-6"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-signal">
                  {p.num}
                </div>
                <h4 className="mt-2 mb-3 font-sans text-lg font-medium leading-[1.3] tracking-[-0.01em] text-paper">
                  {p.head}
                </h4>
                <p className="m-0 text-sm leading-[1.55] text-paper-3">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="02"
            label="DECISION PROCESS"
            title="Understand → Validate → Design → Implement →"
            emphasis="Evolve."
            lead="Cinque passi, una sequenza. Nessuno è opzionale: ogni decisione tecnica passa per tutti — anche quando il calendario suggerisce il contrario."
          />
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
        </Container>
      </Section>

      <Section>
        <Container>
          <Manifesto
            mark="[ trade-offs ]"
            pre="We prioritize"
            italic="clarity, control, and long-term"
            highlight="sustainability."
            attrib="CODEVER · DECISION MODEL"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner />
        </Container>
      </Section>
    </>
  );
}

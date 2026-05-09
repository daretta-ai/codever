import type { Metadata } from "next";
import {
  PageHeader,
  Framework,
  CapList,
  CTABanner,
} from "@/components/modules";
import { BlockHeader, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "How we work on complex systems — from technical audit to architectural evolution. Refactoring, performance, integrations, AI, controlled growth.",
};

export default function SystemsPage() {
  return (
    <>
      <Section pad="tight" noBorder>
        <Container>
          <PageHeader
            index="02"
            section="SYSTEMS"
            title="How we work on"
            emphasis="complex systems."
            lead="Da audit tecnico a evoluzione architetturale — Codever interviene su sistemi sotto pressione di performance, integrazioni complesse, capacità AI da abilitare e legacy da far evolvere senza rotture."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="01"
            label="ENTRY POINTS"
            title="We start from understanding."
            emphasis="Not from implementation."
            lead="Audit tecnico, mappatura dei flussi, replica del sistema. Ogni intervento parte dalla stessa cadenza: Context → Problem → Intervention → Result."
          />
          <Framework
            steps={[
              {
                num: "01",
                label: "CONTEXT",
                head: "Context",
                body: "Sistema, vincoli, dipendenze, persone. Non si decide nel vuoto.",
              },
              {
                num: "02",
                label: "PROBLEM",
                head: "Problem",
                body: "Definizione netta del problema da risolvere — separato da sintomi e desiderata.",
              },
              {
                num: "03",
                label: "INTERVENTION",
                head: "Intervention",
                body: "Decisione architetturale assunta, motivata, e i suoi trade-off espliciti.",
              },
              {
                num: "04",
                label: "RESULT",
                head: "Result",
                body: "Effetti misurabili, conseguenze a 12–24 mesi, condizioni di evoluzione futura.",
              },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="02"
            label="WHAT WE DO"
            title="Five capabilities."
            emphasis="One discipline."
            lead="Ci occupiamo di architettura, non di feature. Ogni capability è un tipo di intervento — non un servizio impacchettato."
          />
          <CapList
            items={[
              {
                id: "C · 01",
                head: "Refactoring systems",
                body: "Riprogettazione mirata di componenti critici senza rompere ciò che funziona.",
              },
              {
                id: "C · 02",
                head: "Performance optimization",
                body: "Lavoriamo dove latenza, throughput e affidabilità sono variabili di sistema, non KPI cosmetici.",
              },
              {
                id: "C · 03",
                head: "Integrations",
                body: "Far comunicare sistemi senza creare nuovi silos. Integrazione prima di aggiunta.",
              },
              {
                id: "C · 04",
                head: "AI systems",
                body: "L'AI come componente architetturale governato — non un layer applicato all'esistente.",
              },
              {
                id: "C · 05",
                head: "New capabilities",
                body: "Quando un sistema deve fare qualcosa di nuovo, lo progettiamo perché resti comprensibile.",
              },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            title="Operating model:"
            emphasis="ownership of technical decisions."
          />
        </Container>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import {
  PageHeader,
  TeamCard,
  GroupLockup,
  CTABanner,
} from "@/components/modules";
import { BlockHeader, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built for long-term system responsibility. Team of engineers focused on backend and architecture. Tech leaders guide each project.",
};

export default function AboutPage() {
  return (
    <>
      <Section pad="tight" noBorder>
        <Container>
          <PageHeader
            index="04"
            section="ABOUT"
            title="Built for long-term"
            emphasis="system responsibility."
            lead="Team of engineers focused on backend and architecture. Tech leaders guide each project. We work on high-load, critical systems where clients rely on us for reliability and continuity."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="01"
            label="TEAM"
            title="Engineering-led."
            emphasis="Tech-leader per project."
            lead="Operatività centrata su backend e architettura. Lavoriamo dove gli errori hanno costi reali e la continuità è una promessa, non una metrica."
          />
          <TeamCard
            label="TEAM · ENGINEERING-LED"
            title="Built for long-term system responsibility."
            body="Team di ingegneri focalizzati su backend e architettura. Tech leader guidano ciascun progetto. Lavoriamo su sistemi critici ad alto carico — i clienti contano su di noi per affidabilità e continuità."
            stats={[
              { key: "Tech leaders / project", value: "1", unit: ":1" },
              { key: "Engineering focus", value: "100", unit: "%" },
              { key: "Avg. relationship length", value: "4+", unit: "yr" },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="02"
            label="EXTENDED STRUCTURE"
            title="Codever è parte del gruppo Mirror."
            emphasis="Architecture, design, strategy — un sistema integrato."
            lead="Quando l'intervento richiede più di sola architettura tecnica, attiviamo il gruppo. Stesso standard di responsabilità, competenze adiacenti."
          />
          <GroupLockup />
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

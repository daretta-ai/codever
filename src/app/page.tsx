import { Hero } from "@/components/Hero";
import {
  Triplet,
  ArgList,
  Domains,
  CTABanner,
  Manifesto,
} from "@/components/modules";
import { BlockHeader, Container, Section } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* System context */}
      <Section>
        <Container>
          <BlockHeader
            index="01"
            label="SYSTEM CONTEXT"
            title="Systems grow."
            emphasis="Complexity follows."
            lead="Performance degrades. Integrations become fragile. Data flows lose consistency. AI becomes a requirement — and a risk if not properly understood or controlled."
          />
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
        </Container>
      </Section>

      <Section>
        <Container>
          <Manifesto
            pre="Without control,"
            italic="innovation creates"
            highlight="fragility."
            attrib="CODEVER · DESIGN PRINCIPLE 01"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="02"
            label="RESPONSIBILITY SCOPE"
            title="We take responsibility for"
            emphasis="architectural decisions, not just implementation."
            lead="We validate requirements before building, removing unnecessary complexity and aligning every decision with the system as a whole. We don't implement by default — we implement what makes sense for the system."
          />
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
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="03"
            label="OPERATIONAL DOMAINS"
            title="Where we intervene."
            emphasis="Four domains, one discipline."
            lead="Sistemi sotto pressione di performance, piattaforme con integrazioni complesse, sistemi che evolvono con capacità AI, legacy che richiede evoluzione controllata."
          />
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

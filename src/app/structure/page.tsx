import type { Metadata } from "next";
import { PageHeader, GroupLockup, CTABanner } from "@/components/modules";
import { BlockHeader, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Structure",
  description:
    "Part of a broader structure. Codever + Mirror — architecture, design, strategy operating as one integrated system.",
};

export default function StructurePage() {
  return (
    <>
      <Section pad="tight" noBorder>
        <Container>
          <PageHeader
            index="05"
            section="STRUCTURE"
            title="Part of a broader"
            emphasis="structure."
            lead="Codever + Mirror — combinando architettura, design e strategia. Operiamo come un sistema integrato, non come una somma di fornitori."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <BlockHeader
            index="01"
            label="GROUP"
            title="Codever × Mirror."
            emphasis="Operating as one integrated system."
            lead="Architecture · Design · Strategy. Tre dimensioni di intervento, una stessa cadenza decisionale."
          />
          <GroupLockup variant="large" />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            title="When the system needs more than"
            emphasis="architecture alone."
          />
        </Container>
      </Section>
    </>
  );
}

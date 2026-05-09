import type { Metadata } from "next";
import { PageHeader, ContactModule } from "@/components/modules";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss your system. We work on systems where reliability and control matter — complex systems, new or existing platforms, critical environments.",
};

export default function ContactPage() {
  return (
    <>
      <Section pad="tight" noBorder>
        <Container>
          <PageHeader
            index="06"
            section="CONTACT"
            title="Discuss"
            emphasis="your system."
            lead="We work on systems where reliability and control matter. Partiamo dal contesto e dall'architettura — non dall'implementazione."
          />
        </Container>
      </Section>

      <Section pad="none">
        <Container>
          <div className="pb-36 max-md:pb-24 max-sm:pb-16">
            <ContactModule />
          </div>
        </Container>
      </Section>
    </>
  );
}

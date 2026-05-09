import type { Metadata } from "next";
import { PageHeader, ContactModule } from "@/components/modules";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss your system. We work on systems where reliability and control matter — complex systems, new or existing platforms, critical environments.",
};

export default function ContactPage() {
  return (
    <>
      <section className="block" style={{ paddingTop: 96 }}>
        <div className="container">
          <PageHeader
            index="06"
            section="CONTACT"
            title="Discuss"
            emphasis="your system."
            lead="We work on systems where reliability and control matter. Partiamo dal contesto e dall&rsquo;architettura — non dall'implementazione."
          />
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="container">
          <ContactModule />
        </div>
      </section>
    </>
  );
}

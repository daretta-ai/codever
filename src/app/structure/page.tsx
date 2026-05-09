import type { Metadata } from "next";
import { PageHeader, GroupLockup, CTABanner } from "@/components/modules";

export const metadata: Metadata = {
  title: "Structure",
  description:
    "Part of a broader structure. Codever + Mirror — architecture, design, strategy operating as one integrated system.",
};

export default function StructurePage() {
  return (
    <>
      <section className="block" style={{ paddingTop: 96 }}>
        <div className="container">
          <PageHeader
            index="05"
            section="STRUCTURE"
            title="Part of a broader"
            emphasis="structure."
            lead="Codever + Mirror — combinando architettura, design e strategia. Operiamo come un sistema integrato, non come una somma di fornitori."
          />
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="block-index">
              <span className="num">01</span> GROUP
            </div>
            <div className="block-title">
              <h2>
                Codever × Mirror. <em>Operating as one integrated system.</em>
              </h2>
              <p>
                Architecture · Design · Strategy. Tre dimensioni di intervento,
                una stessa cadenza decisionale.
              </p>
            </div>
          </div>

          <GroupLockup variant="large" />
        </div>
      </section>

      <section className="block">
        <div className="container">
          <CTABanner
            title="When the system needs more than"
            emphasis="architecture alone."
          />
        </div>
      </section>
    </>
  );
}

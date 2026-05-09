import type { Metadata } from "next";
import {
  PageHeader,
  TeamCard,
  GroupLockup,
  CTABanner,
} from "@/components/modules";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built for long-term system responsibility. Team of engineers focused on backend and architecture. Tech leaders guide each project.",
};

export default function AboutPage() {
  return (
    <>
      <section className="block" style={{ paddingTop: 96 }}>
        <div className="container">
          <PageHeader
            index="04"
            section="ABOUT"
            title="Built for long-term"
            emphasis="system responsibility."
            lead="Team of engineers focused on backend and architecture. Tech leaders guide each project. We work on high-load, critical systems where clients rely on us for reliability and continuity."
          />
        </div>
      </section>

      {/* Team card */}
      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="block-index">
              <span className="num">01</span> TEAM
            </div>
            <div className="block-title">
              <h2>
                Engineering-led. <em>Tech-leader per project.</em>
              </h2>
              <p>
                Operatività centrata su backend e architettura. Lavoriamo dove
                gli errori hanno costi reali e la continuità è una promessa, non
                una metrica.
              </p>
            </div>
          </div>

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
        </div>
      </section>

      {/* Extended structure */}
      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="block-index">
              <span className="num">02</span> EXTENDED STRUCTURE
            </div>
            <div className="block-title">
              <h2>
                Codever è parte del gruppo Mirror.{" "}
                <em>Architecture, design, strategy — un sistema integrato.</em>
              </h2>
              <p>
                Quando l&rsquo;intervento richiede più di sola architettura
                tecnica, attiviamo il gruppo. Stesso standard di responsabilità,
                competenze adiacenti.
              </p>
            </div>
          </div>

          <GroupLockup />
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

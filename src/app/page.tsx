import { Shader } from "@/components/Shader";
import { BracketCursor } from "@/components/BracketCursor";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { SystemContext } from "@/components/SystemContext";
import { ResponsibilityScope } from "@/components/ResponsibilityScope";
import { OperationalDomains } from "@/components/OperationalDomains";
import { CtaBanner } from "@/components/CtaBanner";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Shader />
      <BracketCursor />
      <div className="page" data-screen-label="01 Home">
        <SiteNav />
        <Hero />
        <SystemContext />
        <ResponsibilityScope />
        <OperationalDomains />
        <CtaBanner />
        <SiteFooter />
      </div>
    </>
  );
}

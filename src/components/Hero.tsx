import { Container, RevealOnMount } from "./ui";

export function Hero() {
  return (
    <section className="relative border-b border-line-08 pt-40 pb-24 max-md:pt-24 max-md:pb-16 max-sm:pt-16 max-sm:pb-12">
      <Container>
        <RevealOnMount
          as="div"
          className="mb-14 flex flex-wrap items-center gap-6 font-mono text-xs text-paper-4"
        >
          <span>HOME</span>
          <span aria-hidden="true" className="inline-block h-px w-8 bg-line-20" />
          <span>TECHNICAL PARTNER · COMPLEX SYSTEMS</span>
          <span aria-hidden="true" className="inline-block h-px w-8 bg-line-20" />
          <span>EST. 2026</span>
        </RevealOnMount>
        <RevealOnMount
          as="h1"
          delay={0.1}
          className="m-0 mb-8 max-w-[18ch] font-sans text-[clamp(64px,10vw,168px)] max-sm:text-[clamp(44px,12vw,72px)] font-normal leading-[0.96] tracking-[-0.045em] text-paper"
        >
          Built for systems that{" "}
          <span className="marked text-paper">can&rsquo;t&nbsp;afford</span> to break.
        </RevealOnMount>
        <RevealOnMount
          as="div"
          delay={0.2}
          className="mt-16 grid grid-cols-2 gap-12 border-t border-line-08 pt-8 max-md:grid-cols-1 max-md:gap-8"
        >
          <div>
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.06em] text-paper-4">
              Who we are
            </span>
            <p className="m-0 max-w-[48ch] text-[17px] leading-[1.55] text-paper-3">
              We guide the evolution of complex digital systems, integrating AI
              to enable new capabilities while keeping systems stable,
              understandable, and under control.
            </p>
          </div>
          <div>
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.06em] text-paper-4">
              How we work
            </span>
            <p className="m-0 max-w-[48ch] text-[17px] leading-[1.55] text-paper-3">
              We focus on making systems evolve without introducing unnecessary
              complexity. Architectural decisions, not just implementation.
            </p>
          </div>
        </RevealOnMount>
      </Container>
    </section>
  );
}

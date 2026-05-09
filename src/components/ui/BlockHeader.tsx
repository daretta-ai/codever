import { Reveal } from "./Reveal";

export function BlockHeader({
  index,
  label,
  title,
  emphasis,
  lead,
}: {
  index: string;
  label: string;
  title: string;
  emphasis?: string;
  lead?: string;
}) {
  return (
    <Reveal as="div" className="mb-22 grid grid-cols-[200px_1fr] items-start gap-12 max-md:grid-cols-1 max-md:mb-14 max-sm:mb-10">
      <div className="w-40 border-t border-line-20 pt-2 font-mono text-xs font-medium uppercase tracking-[0.04em] text-paper-4">
        <span className="mr-2.5 text-signal">{index}</span>
        {label}
      </div>
      <div>
        <h2 className="m-0 mb-4 font-sans text-[clamp(44px,5vw,72px)] max-sm:text-[clamp(32px,8vw,44px)] font-medium leading-[1.04] tracking-[-0.025em] text-paper">
          {title}{" "}
          {emphasis && (
            <em className="font-light not-italic text-paper-3">{emphasis}</em>
          )}
        </h2>
        {lead && (
          <p className="m-0 max-w-[56ch] text-[17px] leading-[1.55] text-paper-3">
            {lead}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function SectionHeading({ eyebrow, title, description, centered = false, id }) {
  return (
    <div className={centered ? "mx-auto mb-8 max-w-3xl text-center" : "mb-8 max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-teal-ink">{eyebrow}</p>}
      <h2 id={id} className="text-[28px] font-bold leading-[1.18] tracking-[-0.03em] text-brand-navy sm:text-4xl lg:text-[42px]">{title}</h2>
      {description && <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">{description}</p>}
    </div>
  );
}

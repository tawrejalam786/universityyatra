import { Plus } from "lucide-react";

/** Native details preserve keyboard access and work before hydration. */
export default function FAQAccordion({ items }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
      {items.map((item, index) => (
        <details key={item.id || `${index}-${item.question}`} className="group py-1">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 rounded-lg py-4 text-left text-base font-semibold leading-6 text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal-ink [&::-webkit-details-marker]:hidden">
            {item.question}<Plus aria-hidden="true" size={20} className="shrink-0 text-brand-teal-ink transition-transform group-open:rotate-45 motion-reduce:transition-none" />
          </summary>
          <div className="space-y-3 pb-5 pr-1 text-[15px] leading-7 text-slate-600 sm:pr-10">{(Array.isArray(item.answer) ? item.answer : [item.answer]).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>
        </details>
      ))}
    </div>
  );
}

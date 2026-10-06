import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/** Copy and CTA labels must come from the captured source page. */
export default function BreadcrumbHero({ title, description, eyebrow, image, imageAlt, cta, breadcrumbLabel, children }) {
  return (
    <section className="w-full overflow-hidden border-b border-slate-200 bg-[#edf6f5] pb-10 pt-28 sm:pb-14 sm:pt-32">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-5 lg:px-6">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-3 text-xs leading-6 text-slate-600"><Link href="/" className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-brand-navy">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{breadcrumbLabel || title}</span></nav>
        <div className={image ? "grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12" : "mx-auto max-w-4xl text-center"}>
          <ScrollReveal direction="left" className="min-w-0">
            {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-teal-ink">{eyebrow}</p>}
            <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-0.035em] text-brand-navy sm:text-5xl lg:text-[58px]">{title}</h1>
            {description && <p className="mt-5 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p>}
            {cta && <Link href={cta.href} className="mt-6 inline-flex max-w-full items-center justify-center gap-3 rounded-xl bg-brand-navy px-5 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal-ink">{cta.label}<ArrowUpRight size={18} aria-hidden="true" className="shrink-0" /></Link>}
            {children}
          </ScrollReveal>
          {image && <ScrollReveal direction="right" className="min-w-0"><div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-[0_16px_50px_-25px_#00387050]"><Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 580px, 100vw" className="object-cover" /></div></ScrollReveal>}
        </div>
      </div>
    </section>
  );
}

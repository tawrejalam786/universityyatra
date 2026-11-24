import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Bookmark, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import franceGuidesContent from "@/data/france-guides.json";
import { GUIDE_DETAILS_DATABASE } from "@/data/france-guides";



export default function GuideDetail({ guide, slug }) {
  const fullGuide = franceGuidesContent[slug];


  const allGuides = Object.entries(GUIDE_DETAILS_DATABASE).map(([guideSlug, guideData]) => ({ ...guideData, slug: guideSlug }));
  const whatsappUrl = `https://wa.me/919217368750?text=${encodeURIComponent(`Hi University Yatra, I need guidance on ${guide.title}.`)}`;
  const guideSections = [];
  for (const paragraph of (fullGuide?.paragraphs || []).filter((item) => item !== fullGuide?.title)) {
    const isHeading = /^\d+(?:\.\d+)*[.)]?\s/.test(paragraph) ||
      /^(Introduction|Final Considerations|Choosing the Right Course|Planning recommendation:|Start Planning Your Career|Plan Your Studies in France)/i.test(paragraph);
    if (isHeading || guideSections.length === 0) {
      guideSections.push({ heading: isHeading ? paragraph : null, paragraphs: isHeading ? [] : [paragraph] });
    } else {
      guideSections[guideSections.length - 1].paragraphs.push(paragraph);
    }
  }

  return (
    <>
      <Navbar active="Destinations" />
      <main className="min-h-screen w-full overflow-x-hidden bg-[#F8FAFC]">
        <section className="relative isolate w-full overflow-hidden bg-[#0C337B] text-white lg:min-h-[530px]">
          <div className="pointer-events-none absolute inset-0 -z-20"><Image src={guide.heroImage} alt={guide.title} fill priority sizes="100vw" className="object-cover object-center" /></div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[#061F40]/65" />
          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-4 pb-10 pt-[112px] text-center sm:px-6 sm:pb-14 sm:pt-[130px] lg:min-h-[530px] lg:justify-center lg:px-8 lg:py-16">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-white/85 sm:text-[12px]"><Link href="/" className="hover:text-white">Home</Link><span>/</span><Link href="/study-in-france" className="hover:text-white">Study in France</Link><span>/</span><span className="font-bold text-white">{guide.shortTitle}</span></div>
            <h1 className="mx-auto max-w-[1000px] text-balance text-[30px] font-extrabold leading-[1.09] tracking-[-0.04em] text-white drop-shadow-lg sm:text-[46px] lg:text-[60px]">{guide.title}</h1>
            <div className="mb-3 mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-1.5 shadow-sm"><Bookmark size={14} className="shrink-0 text-[#1765F5]" /><span className="text-center font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0C337B] sm:text-[11px]">{guide.vol} • {guide.badge}</span></div>
            <p className="max-w-[760px] text-[14px] leading-relaxed text-white/90 sm:text-[16px]">{guide.tagline}</p>
            <div className="mt-4 flex max-w-[700px] flex-wrap items-center justify-center gap-2">{guide.pillColors.map((pill) => <span key={pill.label} className="rounded-full px-3 py-1.5 text-center text-[10px] font-extrabold uppercase shadow-sm" style={{ backgroundColor: pill.bg, color: pill.text }}>{pill.label}</span>)}</div>
            <div className="mt-5 flex w-full max-w-[510px] flex-wrap justify-center gap-2 sm:mt-7 sm:gap-4"><a href="#contact-advisory" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full bg-[#1765F5] px-4 py-2.5 text-[12px] font-bold text-white transition hover:bg-[#397EF7] sm:text-[14px]">Book a Free Consultation <ArrowRight size={16} /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full border border-white/60 bg-white px-4 py-2.5 text-[12px] font-bold text-[#0C337B] transition hover:bg-[#EAF2FF] sm:text-[14px]"><MessageCircle size={16} /> Chat on WhatsApp</a></div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="min-w-0 space-y-6 lg:col-span-2">
              <div className="rounded-3xl border border-[#A2C1FB]/40 bg-[#EBF3FE] p-5 shadow-sm sm:p-8"><div className="flex items-center gap-2 text-[#1765F5]"><Compass size={18} /><span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">Executive Summary</span></div><h2 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">Navigating {guide.shortTitle}</h2><p className="mt-3 text-[14px] leading-[1.8] text-[#526B8C] sm:text-[15px]">{guide.overview}</p></div>
              {guideSections.map((section, index) => <article key={`${guide.id}-${index}`} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md sm:p-8">{section.heading && <div className="flex items-start gap-3 sm:gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5] sm:h-11 sm:w-11"><BookOpen size={21} /></span><h2 className="min-w-0 text-[19px] font-extrabold leading-[1.3] tracking-tight text-[#0C337B] sm:text-[22px]">{section.heading}</h2></div>}<div className={`${section.heading ? "mt-5 border-t border-slate-100 pt-5" : ""} space-y-3`}>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="text-[13px] leading-[1.8] text-[#526B8C] sm:text-[14px]">{paragraph}</p>)}</div></article>)}
            </div>
            <aside className="min-w-0 space-y-6">
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-[#E8F0FE] p-6 shadow-sm sm:p-7"><span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">1-on-1 Student Guidance</span><h3 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">Plan Your France Journey With an Expert</h3><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#1EB956]"><MessageCircle size={16} /> Chat on WhatsApp</a></div>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between gap-2"><h3 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">Other France Guides</h3><span className="font-mono text-[10px] text-[#1765F5]">Series</span></div><div className="mt-4 space-y-2.5">{allGuides.filter((item) => item.slug !== slug).map((item) => <Link key={item.id} href={`/study-in-france/${item.slug}`} className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]"><span className="min-w-0"><span className="block">{item.title}</span><span className="mt-1 block text-[11px] font-medium text-[#64748B]">{item.badge}</span></span><span className="shrink-0 font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">{item.vol} →</span></Link>)}</div></div>
            </aside>
          </div>
        </section>
      </main>
      <UniversityFooter />
    </>
  );
}

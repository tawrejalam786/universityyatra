import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bookmark, CheckCircle2, Home, Compass, HelpCircle, BookOpen, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import { UK_BOOK_GUIDES } from "@/data/uk-guides";

function PointText({ text }) {
  const idx = text.indexOf(": ");
  if (idx > 0 && idx <= 60) {
    return (
      <>
        <strong className="font-bold text-[#0C337B]">{text.slice(0, idx + 1)}</strong>{" "}
        {text.slice(idx + 2)}
      </>
    );
  }
  return <>{text}</>;
}

function PointsList({ points }) {
  return (
    <ul className="space-y-3">
      {points.map((text, n) => (
        <li key={n} className="flex items-start gap-2.5 text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">
          <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#1765F5]" />
          <span className="min-w-0"><PointText text={text} /></span>
        </li>
      ))}
    </ul>
  );
}

export default function GuideDetail({ guideData, guide }) {

  const whatsappUrl = `https://wa.me/919217368750?text=${encodeURIComponent(`Hi University Yatra, I need guidance on ${guideData.title}.`)}`;

  return (
    <>
      <Navbar active="Destinations" />
      <main className="min-h-screen w-full overflow-x-hidden bg-[#F8FAFC]">
        {/* PHOTO HERO */}
        <section className="relative isolate w-full overflow-hidden bg-[#0C337B] text-white lg:min-h-[530px]">
          <div className="pointer-events-none absolute inset-0 -z-20"><Image src={guideData.heroImage} alt={guideData.title} fill priority sizes="100vw" className="object-cover object-center" /></div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[#061F40]/60" />
          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-4 pb-10 pt-[112px] text-center sm:px-6 sm:pb-14 sm:pt-[130px] lg:min-h-[530px] lg:justify-center lg:px-8 lg:py-16">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-white/85 sm:text-[12px]"><Link href="/" className="hover:text-white">Home</Link><span>/</span><Link href="/study-in-uk" className="hover:text-white">Study in UK</Link><span>/</span><span className="font-bold text-white">{guideData.shortTitle}</span></div>
            <h1 className="mx-auto max-w-[1000px] text-balance text-[30px] font-extrabold leading-[1.09] tracking-[-0.04em] text-white drop-shadow-lg sm:text-[46px] lg:text-[60px]">{guideData.title}</h1>
            <div className="mb-3 mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-1.5 shadow-sm"><Bookmark size={14} className="shrink-0 text-[#1765F5]" /><span className="text-center font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0C337B] sm:text-[11px]">{guideData.vol} • {guideData.badge}</span></div>
            <div className="mt-2 flex max-w-[700px] flex-wrap items-center justify-center gap-2">{guideData.pillColors.map((pill) => <span key={pill.label} className="rounded-full px-3 py-1.5 text-center text-[10px] font-extrabold uppercase shadow-sm" style={{ backgroundColor: pill.bg, color: pill.text }}>{pill.label}</span>)}</div>
            <div className="mt-5 flex w-full max-w-[510px] flex-wrap justify-center gap-2 sm:mt-7 sm:gap-4"><a href="#contact-advisory" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full bg-[#1765F5] px-4 py-2.5 text-[12px] font-bold text-white transition hover:bg-[#0C337B] sm:text-[14px]">Book a Free Consultation <ArrowRight size={16} /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full border border-white/60 bg-white px-4 py-2.5 text-[12px] font-bold text-[#0C337B] transition hover:bg-[#EAF2FF] sm:text-[14px]"><MessageCircle size={16} /> Chat on WhatsApp</a></div>
          </div>
        </section>

        {/* INTRODUCTION + CHAPTERS + SIDE GUIDES */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="min-w-0 space-y-6 lg:col-span-2">
              {/* Executive Summary + metrics */}
              <div className="rounded-3xl border border-[#A2C1FB]/40 bg-[#EBF3FE] p-5 shadow-sm sm:p-8">
                <div className="flex items-center gap-2 text-[#1765F5]"><Compass size={18} /><span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">Executive Summary</span></div>
                <h2 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">Navigating {guideData.shortTitle}</h2>
                <p className="mt-3 text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">{guideData.overview}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {guideData.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl border border-[#D6E5FA] bg-white p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">{m.label}</div>
                      <div className="mt-1 text-[14px] font-extrabold leading-snug text-[#0C337B]">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapters */}
              {guideData.chapters.map((chapter, index) => {
                const Icon = chapter.icon || BookOpen;
                return (
                  <article key={`${guideData.id}-${index}`} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md sm:p-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5] sm:h-11 sm:w-11"><Icon size={21} /></span>
                      <h2 className="min-w-0 text-[19px] font-extrabold leading-[1.3] tracking-tight text-[#0C337B] sm:text-[22px]">{chapter.title}</h2>
                    </div>
                    <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
                      {chapter.image && (
                        <div className="relative aspect-[3/2] w-full max-w-[560px] overflow-hidden rounded-2xl">
                          <Image src={chapter.image.src} alt={chapter.image.alt} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
                        </div>
                      )}
                      {chapter.desc && <p className="text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">{chapter.desc}</p>}
                      <PointsList points={chapter.points} />
                      {chapter.link && (
                        <p className="text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">
                          <strong className="font-bold text-[#0C337B]">{chapter.link.prefix}</strong>{" "}
                          <a href={chapter.link.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1765F5] underline hover:text-[#0C337B]">{chapter.link.label}</a>
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}

              {/* FAQs */}
              {guideData.faqs?.length > 0 && (
                <article className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5] sm:h-11 sm:w-11"><HelpCircle size={21} /></span>
                    <h2 className="min-w-0 text-[19px] font-extrabold leading-[1.3] tracking-tight text-[#0C337B] sm:text-[22px]">Frequently Asked Questions</h2>
                  </div>
                  <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
                    {guideData.faqs.map((f, n) => (
                      <div key={n} className="rounded-2xl border border-[#E9F0F9] bg-[#F8FAFF] p-4">
                        <h3 className="text-[15px] font-extrabold leading-[1.4] text-[#0C337B]">{f.q}</h3>
                        <p className="mt-1.5 text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </article>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="min-w-0 space-y-6">
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-[#E8F0FE] p-6 shadow-sm sm:p-7">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">1-on-1 Student Guidance</span>
              <h3 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">Plan Your UK Journey With an Expert</h3>
              <div className="mt-5 flex flex-col gap-2.5"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#1EB956]"><MessageCircle size={16} /> Chat on WhatsApp</a>
              {/* <button disabled className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-300 px-5 py-3 text-[13px] font-bold text-gray-500 cursor-not-allowed opacity-60">Book Free Consultation <ArrowRight size={15} /></button> */}
              </div></div>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between gap-2"><h3 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">Other UK Guides</h3><span className="font-mono text-[10px] text-[#1765F5]">Series</span></div><div className="mt-4 space-y-2.5">{UK_BOOK_GUIDES.filter((item) => item.slug !== guide).map((item) => <Link key={item.id} href={`/study-in-uk/${item.slug}`} className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]"><span className="min-w-0"><span className="block">{item.title}</span><span className="mt-1 block text-[11px] font-medium text-[#64748B]">{item.badge}</span></span><span className="shrink-0 font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">{item.vol} →</span></Link>)}</div></div>
            </aside>
          </div>
        </section>
      </main>
      <UniversityFooter />
    </>
  );
}

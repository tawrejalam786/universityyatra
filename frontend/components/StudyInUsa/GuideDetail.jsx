import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Compass,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import GlobalEducationCTA from "@/components/StudyInUsa/GlobalEducationCTA";
import { BOOK_GUIDES } from "@/components/StudyInUsa/bookGuidesData";


export default function GuideDetail({ guideData, guideSlug }) {
  return (
    <>
      {/* 01. GLOBAL NAVBAR (Matching Home & Study Abroad) */}
      <Navbar active="Destinations" />

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* =====================================================================
            02. HERO SECTION (Tailored Photographic Background + Home Floating Pills)
        ====================================================================== */}
       
<section className="relative isolate w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] lg:min-h-[600px]">

  {/* BACKGROUND PHOTOGRAPH */}
  <div className="pointer-events-none absolute inset-0 -z-20">
    <Image
      src={guideData.heroImage}
      alt={guideData.title}
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
  </div>

  {/* OPTIONAL LIGHT OVERLAY */}
  {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/20 via-transparent to-black/10" /> */}

  {/* HERO CONTENT WRAPPER */}
  <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-3 pb-8 pt-[112px] text-center min-[390px]:px-4 sm:px-6 sm:pb-12 sm:pt-[135px] lg:min-h-[600px] lg:justify-center lg:px-8 lg:pb-16 lg:pt-[100px]">

    {/* BREADCRUMBS */}
    <div className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#526B8C] sm:mb-5 sm:text-[12px]">

      <Link
        href="/"
        className="transition-colors hover:text-[#1765F5]"
      >
        Home
      </Link>

      <span>/</span>

      <Link
        href="/study-in-usa"
        className="transition-colors hover:text-[#1765F5]"
      >
        Study in USA
      </Link>

      <span>/</span>

      <span className="font-bold text-[#0C337B]">
        {guideData.shortTitle}
      </span>

    </div>

    {/* MAIN HEADING */}
    <h1 className="relative z-10 mx-auto max-w-[1100px] text-balance text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white [-webkit-text-fill-color:#FFFFFF] [-webkit-text-stroke:1px_#0C337B] [paint-order:stroke_fill] [text-shadow:0_3px_12px_rgba(12,51,123,0.25)] min-[390px]:text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px]">
      {guideData.title}
    </h1>

    {/* VOLUME BADGE */}
    <div className="relative z-10 mb-3 mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1765F5]/25 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-4">

      <Bookmark
        size={13}
        className="shrink-0 text-[#1765F5]"
      />

      <span className="text-center font-mono text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#1765F5] min-[390px]:text-[10px] sm:text-[11px] sm:tracking-widest">
        {guideData.vol} • {guideData.badge}
      </span>

    </div>

    {/* COLORED CHARACTERISTIC PILLS */}
    <div className="relative z-10 mb-2 mt-2 flex max-w-[580px] flex-wrap items-center justify-center gap-2 sm:mb-4 sm:mt-4 sm:gap-3">

      {guideData.pillColors.map((pill, pIdx) => (
        <span
          key={pIdx}
          style={{
            backgroundColor: pill.bg,
            color: pill.text,
          }}
          className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] shadow-sm min-[390px]:px-3.5 min-[390px]:text-[10px] sm:text-[11px]"
        >
          {pill.label}
        </span>
      ))}

    </div>

    {/* CTA BUTTONS - SAME ROW ON MOBILE */}
    <div className="relative z-10 mt-5 flex w-full flex-nowrap items-center justify-center gap-2 px-1 sm:mt-8 sm:gap-6 sm:px-0">

      {/* FREE CONSULTATION */}
      <a
        href="#contact-advisory"
        className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#1765F5] bg-[#1765F5] px-1.5 py-3 text-[9px] font-bold text-white shadow-[0_8px_22px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] hover:shadow-[0_16px_40px_rgba(12,51,123,0.4)] min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]"
      >
        <span>Book a Free Consultation</span>

        <ArrowRight
          size={14}
          strokeWidth={2.4}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]"
        />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919217368750?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20studying%20in%20USA."
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#25D366] bg-white px-1.5 py-3 text-[9px] font-bold text-[#0C337B] shadow-[0_8px_20px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]"
      >

        <svg
          aria-hidden="true"
          className="h-[14px] w-[14px] shrink-0 fill-[#25D366] transition-colors group-hover:fill-white sm:h-5 sm:w-5"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
        </svg>

        <span>Chat On Whatsapp</span>
      </a>

    </div>

  </div>
</section>


        {/* =====================================================================
            03. DETAILED EDITORIAL CHAPTERS (Clean, Deep, Structured Knowledge)
        ====================================================================== */}
        <section className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content Chapters (2 Columns) */}
            <div className="space-y-8 lg:col-span-2">
              {/* Introduction Overview Banner */}
              <div className="rounded-3xl border border-[#A2C1FB]/40 bg-gradient-to-br from-[#EBF3FE] to-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-[#1765F5]">
                  <Compass size={18} />
                  <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">
                    Executive Summary
                  </span>
                </div>
                <h3 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">
                  Navigating {guideData.shortTitle}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#526B8C] sm:text-[15px]">
                  {guideData.overview}
                </p>
              </div>

              {/* Detailed Chapters */}
              {guideData.chapters.map((chap, cIdx) => {
                const IconC = chap.icon;
                return (
                  <div
                    key={cIdx}
                    className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5]">
                        <IconC size={22} strokeWidth={2.2} />
                      </div>
                      <div>
                        <h2 className="text-[19px] font-extrabold tracking-tight text-[#0C337B] sm:text-[22px]">
                          {chap.title}
                        </h2>
                        {chap.desc && (
                          <p className="mt-1 text-[13px] text-[#64748B] sm:text-[14px]">
                            {chap.desc}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Optional chapter image: add image: { src, alt } to a chapter */}
                    {chap.image && (
                      <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                        <Image
                          src={chap.image.src}
                          alt={chap.image.alt || chap.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          className="object-cover"
                        />
                      </div>
                    )}

                    <ul className="mt-5 space-y-3.5 border-t border-slate-100 pt-5">
                      {chap.points.map((pt, pIdx) => {
                        const isObj = typeof pt === "object";
                        const colonIdx = isObj ? -1 : pt.indexOf(":");
                        const hasPrefix = isObj || (colonIdx > 0 && colonIdx < 50);
                        const prefix = isObj ? pt.title : hasPrefix ? pt.substring(0, colonIdx) : null;
                        const content = isObj ? " " + pt.text : hasPrefix ? pt.substring(colonIdx + 1) : pt;

                        return (
                          <li key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#1765F5]" />
                            <span className="text-[14px] leading-relaxed text-[#425A70] sm:text-[15px]">
                              {hasPrefix ? (
                                <>
                                  <strong className="font-bold text-[#0C337B]">{prefix}:</strong>
                                  {content}
                                </>
                              ) : (
                                pt
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}

              {/* FAQs Accordion Block */}
              {guideData.faqs && guideData.faqs.length > 0 && (
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-[#1765F5]">
                    <HelpCircle size={18} />
                    <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">
                      Frequently Asked Questions
                    </span>
                  </div>
                  <h3 className="mt-2 text-[20px] font-extrabold text-[#0C337B]">
                    Common Queries About {guideData.shortTitle}
                  </h3>

                  <div className="mt-6 space-y-4">
                    {guideData.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5">
                        <h4 className="text-[15px] font-bold text-[#0C337B]">
                          {faq.q}
                        </h4>
                        <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C] sm:text-[14px]">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar (1 Column) */}
            <div className="space-y-6">
              {/* Free Counselling Advisory Card */}
              <div id="contact-advisory" className="rounded-3xl border border-[#1765F5]/30 bg-gradient-to-br from-[#E8F0FE] to-white p-6 sm:p-7 shadow-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">
                  1-on-1 Student Guidance
                </span>
                <h3 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">
                  Plan Your USA Journey With an Expert
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C]">
                  Get personalized university shortlisting, funding advice, visa assistance, and pre-departure accommodation tips from University Yatra counsellors.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href="https://wa.me/919217368750?text=Hi%20University%20Yatra%2C%20I%20need%20guidance%20on%20studying%20in%20USA."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#1eb956]"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#0C337B]"
                  >
                    <span>Book Free Consultation</span>
                  </Link>
                </div>
              </div>

              {/* The Other 4 Guides in Series (Book Switcher) */}
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">
                    Other USA Guides
                  </h4>
                  <span className="font-mono text-[10px] text-[#1765F5]">Series</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {BOOK_GUIDES.filter((b) => b.slug !== guideSlug).map((b) => (
                    <Link
                      key={b.id}
                      href={`/study-in-usa/${b.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]"
                    >
                      <div className="flex flex-col">
                        <span>{b.title}</span>
                        <span className="text-[11px] font-medium text-[#64748B]">
                          {b.badge}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">
                        {b.vol} →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. GLOBAL CALL TO ACTION */}
        <GlobalEducationCTA />
      </main>

      {/* 05. GLOBAL FOOTER */}
      <UniversityFooter />
    </>
  );
}
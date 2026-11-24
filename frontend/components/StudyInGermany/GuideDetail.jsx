import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bookmark, CheckCircle2, Compass, MessageCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import { GERMANY_GUIDES } from "@/data/germany-guides";

function GermanyInlineText({ text = "" }) {
  const parts = text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("***") && part.endsWith("***")) return <strong key={index} className="font-bold text-[#0C337B]"><em>{part.slice(3, -3)}</em></strong>;
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={index} className="font-bold text-[#0C337B]">{part.slice(2, -2)}</strong>;
        if (part.startsWith("*") && part.endsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function GermanyDocumentContent({ blocks = [] }) {
  return (
    <div className="min-w-0 space-y-3.5">
      {blocks.map(([type, value], index) => {
        if (type === "h1" || type === "h2" || type === "h3") {
          return <h3 key={index} className="pt-3 text-[16px] font-extrabold leading-[1.45] text-[#0C337B] sm:text-[18px]"><GermanyInlineText text={value} /></h3>;
        }
        if (type === "ul") {
          return <ul key={index} className="space-y-3 pl-1">{value.map((line, j) => (
            <li key={j} className="flex items-start gap-3"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#1765F5]" /><p className="min-w-0 break-words text-[13px] leading-[1.75] text-[#425A70] sm:text-[14px]"><GermanyInlineText text={line} /></p></li>
          ))}</ul>;
        }
        if (type === "table") {
          return <div key={index} className="my-5 w-full min-w-0 overflow-x-auto rounded-2xl border border-[#E2E8F0]">
            <table className="w-full min-w-[420px] border-collapse text-left text-[12px] leading-[1.6] sm:text-[13px]">
              <thead className="bg-[#E8F0FE] text-[#0C337B]"><tr>{value[0].map((cell, j) => <th key={j} scope="col" className="border-b border-[#E2E8F0] px-3 py-3 font-extrabold sm:px-4"><GermanyInlineText text={cell} /></th>)}</tr></thead>
              <tbody>{value.slice(1).map((row, ri) => <tr key={ri} className="border-b border-[#E2E8F0] last:border-0 even:bg-[#F8FAFC]">{row.map((cell, ci) => <td key={ci} className="break-words px-3 py-3 align-top text-[#425A70] sm:px-4"><GermanyInlineText text={cell} /></td>)}</tr>)}</tbody>
            </table>
          </div>;
        }
        return <p key={index} className="break-words text-[13px] leading-[1.85] text-[#425A70] sm:text-[15px]"><GermanyInlineText text={value} /></p>;
      })}
    </div>
  );
}

export default function GuideDetail({ guide, slug }) {

  const { intro, chapters } = guide;

  const otherGuides = Object.values(GERMANY_GUIDES).filter(
    (item) => item.slug !== slug
  );

  const whatsappUrl = `https://wa.me/919217368750?text=${encodeURIComponent("Hi University Yatra, I would like guidance on studying in Germany.")}`;

  return (
    <>
      <Navbar active="Destinations" />

      <main className="min-h-screen w-full overflow-x-clip bg-[#F8FAFC]">

        {/* =====================================
            01. USA-STYLE IMAGE HERO
        ===================================== */}

        <section className="relative isolate w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] lg:min-h-[600px]">

          {/* BACKGROUND IMAGE */}
          <div className="pointer-events-none absolute inset-0 -z-20">
            <Image
              src={guide.heroImage}
              alt={guide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* LIGHT IMAGE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-white/25" />

          {/* HERO CONTENT */}
          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-3 pb-8 pt-[112px] text-center min-[390px]:px-4 sm:px-6 sm:pb-12 sm:pt-[135px] lg:min-h-[600px] lg:justify-center lg:px-8 lg:pb-16 lg:pt-[100px]">

            {/* BREADCRUMBS */}
            <nav
              aria-label="Breadcrumb"
              className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#526B8C] sm:mb-5 sm:text-[12px]"
            >
              <Link
                href="/"
                className="transition-colors hover:text-[#1765F5]"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href="/study-in-germany"
                className="transition-colors hover:text-[#1765F5]"
              >
                Study in Germany
              </Link>

              <span>/</span>

              <span className="font-bold text-[#0C337B]">
                {guide.shortTitle}
              </span>
            </nav>

            {/* OUTLINED HEADING */}
            <h1 className="relative z-10 mx-auto max-w-[1100px] break-words text-balance text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white [-webkit-text-fill-color:#FFFFFF] [-webkit-text-stroke:1px_#0C337B] [paint-order:stroke_fill] [text-shadow:0_3px_12px_rgba(12,51,123,0.25)] min-[390px]:text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px]">
              {guide.title}
            </h1>

            {/* VOLUME BADGE */}
            <div className="relative z-10 mb-3 mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1765F5]/25 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-4">
              <Bookmark
                size={13}
                className="shrink-0 text-[#1765F5]"
              />

              <span className="text-center font-mono text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#1765F5] min-[390px]:text-[10px] sm:text-[11px] sm:tracking-widest">
                {guide.vol} • {guide.badge}
              </span>
            </div>

            {/* GERMANY TAGLINE */}
            <p className="relative z-10 mx-auto max-w-[720px] text-[12px] font-semibold leading-[1.6] text-[#0C337B] sm:text-[14px]">
              {guide.tagline}
            </p>

            {/* COLORED PILLS */}
            <div className="relative z-10 mb-2 mt-3 flex max-w-[580px] flex-wrap items-center justify-center gap-2 sm:mb-4 sm:mt-4 sm:gap-3">

              {guide.pillColors.map((pill, index) => (
                <span
                  key={index}
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

            {/* CTA BUTTONS */}
            <div className="relative z-10 mt-5 flex w-full flex-nowrap items-center justify-center gap-2 px-1 sm:mt-8 sm:gap-6 sm:px-0">

              <a
                href="#contact-advisory"
                className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#1765F5] bg-[#1765F5] px-1.5 py-3 text-[9px] font-bold text-white shadow-[0_8px_22px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]"
              >
                <span>Book a Free Consultation</span>

                <ArrowRight
                  size={14}
                  strokeWidth={2.4}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]"
                />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#25D366] bg-white px-1.5 py-3 text-[9px] font-bold text-[#0C337B] shadow-[0_8px_20px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]"
              >
                <MessageCircle
                  size={15}
                  className="shrink-0 text-[#25D366] transition-colors group-hover:text-white sm:size-[18px]"
                />

                <span>Chat On Whatsapp</span>
              </a>

            </div>
          </div>
        </section>

        {/* =====================================
            02. USA-STYLE CONTENT LAYOUT
        ===================================== */}

        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">

            {/* LEFT CONTENT AREA */}
            <div className="min-w-0 space-y-6 lg:col-span-2 lg:space-y-8">

              {/* EXECUTIVE SUMMARY */}
              {intro.length > 0 && (
                <div className="min-w-0 rounded-3xl border border-[#A2C1FB]/40 bg-gradient-to-br from-[#EBF3FE] to-white p-5 shadow-sm sm:p-8">

                  <div className="flex items-center gap-2 text-[#1765F5]">
                    <Compass size={18} />

                    <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">
                      Executive Summary
                    </span>
                  </div>

                  <h2 className="mt-2 mb-4 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">
                    {guide.introTitle}
                  </h2>

                  <GermanyDocumentContent blocks={intro} />
                </div>
              )}

              {/* GERMANY DETAILED CHAPTER CARDS */}
              {chapters.map((chapter, index) => {
                const icons = [BookOpen, Compass, CheckCircle2];
                const ChapterIcon = icons[index % icons.length];

                return (
                  <article
                    key={index}
                    className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#A2C1FB] hover:shadow-md sm:p-8"
                  >
                    {/* CHAPTER HEADER */}
                    <div className="flex items-start gap-3 sm:gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5]">
                        <ChapterIcon
                          size={22}
                          strokeWidth={2.2}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="break-words text-[19px] font-extrabold tracking-tight text-[#0C337B] sm:text-[22px]">
                          {chapter.title}
                        </h2>
                      </div>
                    </div>

                    {/* WORD DOCUMENT CONTENT */}
                    <div className="mt-5 border-t border-slate-100 pt-5">
                      <GermanyDocumentContent blocks={chapter.blocks} />
                    </div>
                  </article>
                );
              })}

            </div>

            {/* =====================================
                03. USA-STYLE RIGHT SIDEBAR
            ===================================== */}

            <aside className="min-w-0 space-y-6">

              {/* COUNSELLING CARD */}
              <div
                id="contact-advisory"
                className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-gradient-to-br from-[#E8F0FE] to-white p-5 shadow-sm sm:p-7"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">
                  1-on-1 Student Guidance
                </span>

                <h2 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">
                  Plan Your Germany Journey With an Expert
                </h2>

                <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C]">
                  Speak with our Germany study experts
                </p>

                <div className="mt-5 flex flex-col gap-2.5">

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#1eb956]"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </a>

                  {/* <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-300 px-5 py-3 text-[13px] font-bold text-gray-500 cursor-not-allowed opacity-60"
                  >
                    Book Free Consultation
                  </button> */}

                </div>
              </div>

              {/* OTHER GERMANY GUIDES */}
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">

                <div className="flex items-center justify-between gap-2">

                  <h2 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">
                    Other Germany Guides
                  </h2>

                  <span className="font-mono text-[10px] text-[#1765F5]">
                    Series
                  </span>

                </div>

                <div className="mt-4 space-y-2.5">

                  {otherGuides.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/study-in-germany/${item.slug}`}
                      className="group flex min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]"
                    >
                      <div className="min-w-0 flex-1">

                        <span className="block break-words">
                          {item.title}
                        </span>

                        <span className="mt-1 block break-words text-[11px] font-medium text-[#64748B]">
                          {item.badge}
                        </span>

                      </div>

                      <span className="shrink-0 font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">
                        {item.vol} →
                      </span>
                    </Link>
                  ))}

                </div>
              </div>

            </aside>
          </div>
        </section>

      </main>

      <UniversityFooter />
    </>
  );
}

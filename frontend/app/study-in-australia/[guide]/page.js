import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, CheckCircle2, Compass, MessageCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

/* All five Australia guides */
const AUSTRALIA_GUIDES = {
  "study-in-australia": {
    id: "01",
    vol: "VOL. I",
    slug: "study-in-australia",
    title: "Study in Australia",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Bachelor's, master's, and Australian admission intakes",
    heroImage: "/images/universities/charles-sturt-university.webp",
    pillColors: [{"label": "BACHELOR'S","bg": "#D7F77D","text": "#0C337B"},{"label": "MASTER'S","bg": "#B5E9F2","text": "#0C337B"},{"label": "MAIN INTAKES","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Study in Australia

Australia offers university degrees and practical college programs for international students. Whether you're planning a bachelor's degree after Class 12 or a master's degree after graduation, understanding how Australian education works can help you narrow down the right options.

## Universities and Programs

Australian universities offer undergraduate and postgraduate education with a combination of classroom learning, research, and practical projects.

- **Bachelor's Degrees:** Most programs take three to four years. Some programs include internships or placements.
- **Master's Degrees:** These commonly take one to two years. Options range from taught programs to research-focused degrees.

Check the specific program to understand its duration, curriculum, and entry criteria.

## Main Intakes

- **February Intake:** Main entry point with the broadest selection of programs
- **July Intake:** Available for most programs

Application deadlines vary by university and program, so check the official program page before applying.

## Choosing the Right Path

Match your current qualification and career goals with the right program. Check academic eligibility, program structure, and application requirements before shortlisting institutions.`,
  },
  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    slug: "cost-of-studying",
    title: "Cost of Studying in Australia",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Tuition, living costs, and financial planning",
    heroImage: "/images/universities/la-trobe-university.webp",
    pillColors: [{"label": "UNDERGRADUATE","bg": "#D7F77D","text": "#0C337B"},{"label": "POSTGRADUATE","bg": "#B5E9F2","text": "#0C337B"},{"label": "LIVING COSTS","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Cost of Studying in Australia

Your total budget needs to cover your course, mandatory fees, health insurance, visa expenses, and living costs.

## Tuition Fees

- **Bachelor's Programs:** AUD 20,000 – 45,000 per year
- **Master's Programs:** AUD 22,000 – 50,000 per year

Professional programs and certain high-demand courses may cost more.

## Living Costs

Budget approximately AUD 1,800 – 2,500 per month for:
- Accommodation
- Food and groceries
- Transportation
- Utilities and internet
- Personal expenses

## Additional Costs

- Student visa fees
- Overseas Student Health Cover (OSHC)
- Books and supplies
- Application fees and deposits

Plan your finances so you can meet your study and living costs before departure.`,
  },
  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    slug: "living-and-culture",
    title: "Cost of Living & Culture in Australia",
    shortTitle: "Living & Culture",
    badge: "Living Costs & Student Life",
    tagline: "Accommodation, food, transport, and life in Australia",
    heroImage: "/images/universities/griffith-university.webp",
    pillColors: [{"label": "ACCOMMODATION","bg": "#D7F77D","text": "#0C337B"},{"label": "DAILY LIFE","bg": "#B5E9F2","text": "#0C337B"},{"label": "CULTURE","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Cost of Living & Culture in Australia

Your monthly budget depends on your city, accommodation type, and lifestyle choices.

## Accommodation Options

- **On-Campus Residence:** AUD 600 – 1,200 per month
- **Off-Campus Shared:** AUD 700 – 1,400 per month
- **Private Rentals:** AUD 900 – 1,800 per month

Compare the full cost including utilities and transport before choosing.

## Daily Life

- **Food & Groceries:** Cook at home to manage expenses
- **Transportation:** Student concession cards available in major cities
- **Social Life:** Student discounts widely available

## Australian Culture

- English-speaking environment
- Friendly and welcoming communities
- Vibrant student culture in Sydney, Melbourne, Brisbane, and Perth
- Outdoor lifestyle and diverse cultural heritage

Plan for both monthly spending and arrival costs when budgeting.`,
  },
  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    title: "Scholarships in Australia for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "Scholarships & Funding Opportunities",
    tagline: "Merit-based awards and financial support",
    heroImage: "/images/universities/university-of-newcastle.webp",
    pillColors: [{"label": "MERIT-BASED","bg": "#D7F77D","text": "#0C337B"},{"label": "UNIVERSITY AWARDS","bg": "#B5E9F2","text": "#0C337B"},{"label": "RESEARCH FUNDING","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Scholarships in Australia for Indian Students

Australian scholarships reward academic excellence, leadership, and research potential.

## Types of Scholarships

- **Undergraduate:** Merit-based and institution-specific awards
- **Master's:** University and program-specific funding
- **PhD:** Research scholarships and fellowships

## How to Apply

1. Check university scholarship pages
2. Review eligibility criteria
3. Prepare required documents
4. Submit applications before deadlines

## Tips

- Apply early as scholarships are competitive
- Maintain strong academic records
- Highlight relevant achievements and leadership experience
- Check multiple funding sources

Scholarships can significantly reduce your education costs, so explore all available options.`,
  },
  "post-study-work-visa": {
    id: "05",
    vol: "VOL. V",
    slug: "post-study-work-visa",
    title: "Post-Study Work Visa in Australia",
    shortTitle: "Work Pathways",
    badge: "Temporary Graduate Visa",
    tagline: "Stay and work in Australia after graduation",
    heroImage: "/images/universities/edith-cowan-university.webp",
    pillColors: [{"label": "DURATION","bg": "#D7F77D","text": "#0C337B"},{"label": "ELIGIBILITY","bg": "#B5E9F2","text": "#0C337B"},{"label": "BENEFITS","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Post-Study Work Visa in Australia

Australia's Temporary Graduate visa (subclass 485) allows eligible international graduates to remain and work in Australia after completing their studies.

## Duration

- **Bachelor's & Master's graduates:** 2-4 years depending on qualification and study location
- **PhD graduates:** Up to 4 years

## Eligibility

- Must have completed a recognized qualification in Australia
- Must apply within 6 months of graduation
- Must have been on a valid student visa
- Must meet English language requirements

## Benefits

- Full-time work permission
- Opportunity to gain Australian work experience
- Potential pathway to longer-term residency
- Can include family members

## Application Process

1. Check your eligibility
2. Gather required documents
3. Apply through Australian immigration
4. Await processing

The Temporary Graduate visa provides a valuable opportunity to gain international work experience after completing your degree in Australia.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(AUSTRALIA_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = AUSTRALIA_GUIDES[slug];

  if (!guide) {
    return {
      title: "Page Not Found - University Yatra",
    };
  }

  return {
    title: `${guide.title} | University Yatra`,
    description: guide.tagline,
    openGraph: {
      title: guide.title,
      description: guide.tagline,
      type: "article",
    },
  };
}


/* ============================================
   AUSTRALIA MARKDOWN PARSER
   Original content remains unchanged
============================================ */

function parseAustraliaMarkdown(markdown = "") {
  const intro = [];
  const chapters = [];
  let current = intro;

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trimEnd();

    if (/^# /.test(line)) continue;

    if (/^## /.test(line)) {
      const chapter = {
        title: line.slice(3).trim(),
        lines: [],
      };

      chapters.push(chapter);
      current = chapter.lines;
      continue;
    }

    if (line.trim()) {
      current.push(line);
    }
  }

  return { intro, chapters };
}

/* ============================================
   INLINE MARKDOWN TEXT FORMATTING
============================================ */

function AustraliaInlineText({ text = "" }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-bold text-[#0C337B]">
              {part.slice(2, -2)}
            </strong>
          );
        }

        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

/* ============================================
   MARKDOWN CONTENT RENDERER
============================================ */

function AustraliaMarkdownContent({ lines = [] }) {
  return (
    <div className="space-y-3.5">
      {lines.map((rawLine, index) => {
        const line = rawLine.trim();

        if (line.startsWith("### ")) {
          return (
            <h3 key={index} className="pt-3 text-[16px] font-extrabold leading-[1.45] text-[#0C337B] sm:text-[18px]">
              <AustraliaInlineText text={line.slice(4)} />
            </h3>
          );
        }

        const nested = rawLine.match(/^\s{2,}-\s+(.+)$/);

        if (nested) {
          return (
            <div key={index} className="ml-5 flex items-start gap-2.5 sm:ml-7">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1765F5]" />
              <p className="min-w-0 break-words text-[13px] leading-[1.75] text-[#425A70] sm:text-[14px]">
                <AustraliaInlineText text={nested[1]} />
              </p>
            </div>
          );
        }

        const unordered = line.match(/^-\s+(.+)$/);

        if (unordered) {
          return (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#1765F5]" />

              <p className="min-w-0 break-words text-[13px] leading-[1.75] text-[#425A70] sm:text-[14px]">
                <AustraliaInlineText text={unordered[1]} />
              </p>
            </div>
          );
        }

        const ordered = line.match(/^(\d+)\.\s+(.+)$/);

        if (ordered) {
          return (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] text-[11px] font-extrabold text-[#1765F5]">
                {ordered[1]}
              </span>

              <p className="min-w-0 break-words text-[13px] leading-[1.75] text-[#425A70] sm:text-[14px]">
                <AustraliaInlineText text={ordered[2]} />
              </p>
            </div>
          );
        }

        return (
          <p key={index} className="break-words text-[13px] leading-[1.85] text-[#425A70] sm:text-[15px]">
            <AustraliaInlineText text={line} />
          </p>
        );
      })}
    </div>
  );
}

/* ============================================
   AUSTRALIA GUIDE DETAIL PAGE
   USA-STYLE DESIGN
============================================ */

export default async function AustraliaGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = AUSTRALIA_GUIDES[slug];

  if (!guide) {
    notFound();
  }

  const { intro, chapters } = parseAustraliaMarkdown(guide.markdown);

  const otherGuides = Object.values(AUSTRALIA_GUIDES).filter(
    (item) => item.slug !== slug
  );

  const whatsappUrl = `https://wa.me/919286844550?text=${encodeURIComponent("Hi University Yatra, I would like guidance on studying in Australia.")}`;

  return (
    <>
      <Navbar active="Destinations" />

      <main className="min-h-screen w-full overflow-x-clip bg-[#F8FAFC]">

        {/* =====================================
            01. USA-STYLE IMAGE HERO
        ===================================== */}

        <section className="relative isolate w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] lg:min-h-[600px]">

          {/* HERO BACKGROUND IMAGE */}
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

          {/* LIGHT OVERLAY */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-white/25" />

          {/* HERO CONTENT */}
          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-3 pb-8 pt-[112px] text-center min-[390px]:px-4 sm:px-6 sm:pb-12 sm:pt-[135px] lg:min-h-[600px] lg:justify-center lg:px-8 lg:pb-16 lg:pt-[100px]">

            {/* BREADCRUMB */}
            <nav aria-label="Breadcrumb" className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#526B8C] sm:mb-5 sm:text-[12px]">

              <Link href="/" className="transition-colors hover:text-[#1765F5]">
                Home
              </Link>

              <span>/</span>

              <Link href="/study-in-australia" className="transition-colors hover:text-[#1765F5]">
                Study in Australia
              </Link>

              <span>/</span>

              <span className="font-bold text-[#0C337B]">
                {guide.shortTitle}
              </span>
            </nav>

            {/* OUTLINED MAIN HEADING */}
            <h1 className="relative z-10 mx-auto max-w-[1100px] break-words text-balance text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white [-webkit-text-fill-color:#FFFFFF] [-webkit-text-stroke:1px_#0C337B] [paint-order:stroke_fill] [text-shadow:0_3px_12px_rgba(12,51,123,0.25)] min-[390px]:text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px]">
              {guide.title}
            </h1>

            {/* VOLUME BADGE */}
            <div className="relative z-10 mb-3 mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1765F5]/25 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-4">
              <Bookmark size={13} className="shrink-0 text-[#1765F5]" />

              <span className="text-center font-mono text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#1765F5] min-[390px]:text-[10px] sm:text-[11px] sm:tracking-widest">
                {guide.vol} • {guide.badge}
              </span>
            </div>

            {/* AUSTRALIA TAGLINE */}
            <p className="relative z-10 mx-auto max-w-[720px] text-[12px] font-semibold leading-[1.6] text-[#0C337B] sm:text-[14px]">
              {guide.tagline}
            </p>

            {/* COLORFUL PILLS */}
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

              {/* FREE CONSULTATION */}
              <a href="#contact-advisory" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#1765F5] bg-[#1765F5] px-1.5 py-3 text-[9px] font-bold text-white shadow-[0_8px_22px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]">

                <span>Book a Free Consultation</span>

                <ArrowRight size={14} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]" />
              </a>

              {/* WHATSAPP */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#25D366] bg-white px-1.5 py-3 text-[9px] font-bold text-[#0C337B] shadow-[0_8px_20px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]">

                <MessageCircle size={15} className="shrink-0 text-[#25D366] transition-colors group-hover:text-white sm:size-[18px]" />

                <span>Chat On Whatsapp</span>
              </a>

            </div>

          </div>
        </section>

        {/* =====================================
            02. USA-STYLE TWO COLUMN CONTENT
        ===================================== */}

        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">

            {/* MAIN CONTENT AREA */}
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

                  <h2 className="mb-4 mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">
                    Navigating {guide.shortTitle}
                  </h2>

                  <AustraliaMarkdownContent lines={intro} />
                </div>
              )}

              {/* ORIGINAL AUSTRALIA CHAPTERS */}
              {chapters.map((chapter, index) => {
                const chapterIcons = [BookOpen, Compass, CheckCircle2];
                const ChapterIcon = chapterIcons[index % chapterIcons.length];

                return (
                  <article key={index} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#A2C1FB] hover:shadow-md sm:p-8">

                    {/* CHAPTER HEADER */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5]">
                        <ChapterIcon size={22} strokeWidth={2.2} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="break-words text-[19px] font-extrabold tracking-tight text-[#0C337B] sm:text-[22px]">
                          {chapter.title}
                        </h2>
                      </div>
                    </div>

                    {/* ORIGINAL MARKDOWN CONTENT */}
                    <div className="mt-5 border-t border-slate-100 pt-5">
                      <AustraliaMarkdownContent lines={chapter.lines} />
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
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-gradient-to-br from-[#E8F0FE] to-white p-5 shadow-sm sm:p-7">

                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">
                  1-on-1 Student Guidance
                </span>

                <h2 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">
                  Plan Your Australia Journey With an Expert
                </h2>

                <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C]">
                  Speak with our Australia study experts
                </p>

                <div className="mt-5 flex flex-col gap-2.5">

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#1eb956]">

                    <MessageCircle size={16} />

                    Chat on WhatsApp
                  </a>

                  <Link href="/counselling" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#0C337B]">
                    Book Free Consultation
                  </Link>

                </div>
              </div>

              {/* OTHER AUSTRALIA GUIDES */}
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">

                <div className="flex items-center justify-between gap-2">

                  <h2 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">
                    Other Australia Guides
                  </h2>

                  <span className="font-mono text-[10px] text-[#1765F5]">
                    Series
                  </span>

                </div>

                <div className="mt-4 space-y-2.5">

                  {otherGuides.map((item) => (
                    <Link key={item.slug} href={`/study-in-australia/${item.slug}`} className="group flex min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]">

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


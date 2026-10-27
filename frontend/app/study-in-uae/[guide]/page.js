import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, CheckCircle2, Compass, MessageCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

/* All five UAE guides */
const UAE_GUIDES = {
  "study-in-uae": {
    id: "01",
    vol: "VOL. I",
    slug: "study-in-uae",
    title: "Study in the UAE",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Bachelor's, master's, and UAE admission intakes",
    heroImage: "/images/universities/uae/university-of-dubai.webp",
    pillColors: [{"label": "BACHELOR'S","bg": "#D7F77D","text": "#0C337B"},{"label": "MASTER'S","bg": "#B5E9F2","text": "#0C337B"},{"label": "MAIN INTAKES","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Study in the UAE

The UAE offers a diverse higher education landscape with international universities, branch campuses, and local institutions. Whether you are planning a bachelor's degree after Class 12 or a master's degree after graduation, understanding how UAE education works can help you choose the right path.

## Universities and Programs

UAE universities include branch campuses of international institutions alongside strong local universities across Dubai, Abu Dhabi, and Sharjah.

- **Bachelor's Degrees:** Most programs take three to four years. Many institutions offer American-style credit-based curricula.
- **Master's Degrees:** These commonly take one to two years. Options range from taught programs to research-focused degrees.

Check the specific program to understand its duration, curriculum, and entry criteria.

## Main Intakes

- **September Intake:** Main entry point with the broadest selection of programs
- **January Intake:** Available for selected programs

Application deadlines vary by university and program, so check the official program page before applying.

## Choosing the Right Path

Match your current qualification and career goals with the right program. Check academic eligibility, program structure, and application requirements before shortlisting institutions.`,
  },
  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    slug: "cost-of-studying",
    title: "Cost of Studying in the UAE",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Tuition, living costs, and financial planning",
    heroImage: "/images/universities/uae/american-university-dubai.webp",
    pillColors: [{"label": "UNDERGRADUATE","bg": "#D7F77D","text": "#0C337B"},{"label": "POSTGRADUATE","bg": "#B5E9F2","text": "#0C337B"},{"label": "LIVING COSTS","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Cost of Studying in the UAE

Your total budget needs to cover tuition fees, mandatory university fees, health insurance, visa expenses, and living costs.

## Tuition Fees

- **Bachelor's Programs:** AED 40,000 – 100,000 per year
- **Master's Programs:** AED 50,000 – 120,000 per year

Private and international branch campus fees vary widely by institution and program.

## Living Costs

Budget approximately AED 3,000 – 5,000 per month for:
- Accommodation
- Food and groceries
- Transportation
- Utilities and internet
- Personal expenses

Dubai and Abu Dhabi tend to have higher living costs than Sharjah.

## Additional Costs

- Student visa fees
- Health insurance
- Books and supplies
- Application fees and deposits

Plan your finances so you can meet your study and living costs before departure.`,
  },
  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    slug: "living-and-culture",
    title: "Cost of Living & Culture in the UAE",
    shortTitle: "Living & Culture",
    badge: "Living Costs & Student Life",
    tagline: "Accommodation, food, transport, and life in the UAE",
    heroImage: "/images/universities/uae/khalifa-university.webp",
    pillColors: [{"label": "ACCOMMODATION","bg": "#D7F77D","text": "#0C337B"},{"label": "DAILY LIFE","bg": "#B5E9F2","text": "#0C337B"},{"label": "CULTURE","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Cost of Living & Culture in the UAE

Your monthly budget depends on your emirate, accommodation type, and lifestyle choices.

## Accommodation Options

- **On-Campus Residence:** AED 1,500 – 3,000 per month
- **Off-Campus Shared:** AED 2,000 – 4,000 per month
- **Private Rentals:** AED 3,000 – 6,000 per month

Sharjah generally offers more affordable accommodation than Dubai or Abu Dhabi.

## Daily Life

- **Food & Groceries:** Wide range from budget supermarkets to premium options
- **Transportation:** Metro and bus networks in Dubai and Abu Dhabi
- **Social Life:** Vibrant multicultural student communities

## UAE Culture

- Multicultural and cosmopolitan environment
- English widely spoken
- Diverse international student communities
- Modern infrastructure and amenities

Plan for both monthly spending and arrival costs when budgeting.`,
  },
  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    title: "Scholarships in the UAE for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "Scholarships & Funding Opportunities",
    tagline: "Merit-based awards and financial support",
    heroImage: "/images/universities/uae/uae-university.webp",
    pillColors: [{"label": "MERIT-BASED","bg": "#D7F77D","text": "#0C337B"},{"label": "UNIVERSITY AWARDS","bg": "#B5E9F2","text": "#0C337B"},{"label": "PARTIAL FUNDING","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Scholarships in the UAE for Indian Students

UAE universities offer merit-based scholarships and fee waivers for high-achieving international students.

## Types of Scholarships

- **Undergraduate:** Merit-based awards and partial tuition waivers
- **Master's:** University and program-specific funding
- **Research:** Funding for research-oriented programs

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
    title: "Post-Study Work Visa in the UAE",
    shortTitle: "Work Pathways",
    badge: "Employment Visa & Career Pathways",
    tagline: "Work and career opportunities after graduation in the UAE",
    heroImage: "/images/universities/uae/zayed-university.webp",
    pillColors: [{"label": "EMPLOYMENT VISA","bg": "#D7F77D","text": "#0C337B"},{"label": "ELIGIBILITY","bg": "#B5E9F2","text": "#0C337B"},{"label": "BENEFITS","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Post-Study Work Visa in the UAE

The UAE allows international graduates to stay and work through employer-sponsored employment visas and the UAE Golden Visa for exceptional talent.

## Employment Visa

Once you secure a job offer from a UAE employer, you can obtain an employment visa sponsored by that employer.

- **Duration:** Tied to employment contract (typically 2 years, renewable)
- **Requirements:** Valid job offer, attested degree certificate, medical fitness

## UAE Golden Visa

Outstanding graduates from UAE universities may qualify for the 10-year Golden Visa.

- **Eligibility:** Graduating with at least 3.75 GPA from an accredited UAE university
- **Benefits:** 10-year residence, ability to sponsor family

## Career Opportunities

The UAE offers strong demand in:
- Finance and banking
- Technology and IT
- Healthcare
- Engineering and construction
- Hospitality and tourism

## Application Process

1. Secure a job offer from a UAE employer
2. Employer processes the work permit
3. Complete medical testing and visa stamping
4. Receive your Emirates ID

The UAE's growing economy and international business environment provide excellent opportunities for graduates.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(UAE_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = UAE_GUIDES[slug];

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
   UAE MARKDOWN PARSER
   Preserves original content
============================================ */

function parseUaeMarkdown(markdown = "") {
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

    if (line.trim()) current.push(line);
  }

  return { intro, chapters };
}

/* ============================================
   INLINE MARKDOWN TEXT
============================================ */

function UaeInlineText({ text = "" }) {
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

function UaeMarkdownContent({ lines = [] }) {
  return (
    <div className="space-y-3.5">
      {lines.map((rawLine, index) => {
        const line = rawLine.trim();

        if (line.startsWith("### ")) {
          return (
            <h3 key={index} className="pt-3 text-[16px] font-extrabold leading-[1.45] text-[#0C337B] sm:text-[18px]">
              <UaeInlineText text={line.slice(4)} />
            </h3>
          );
        }

        const nested = rawLine.match(/^\s{2,}-\s+(.+)$/);

        if (nested) {
          return (
            <div key={index} className="ml-5 flex items-start gap-2.5 sm:ml-7">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1765F5]" />
              <p className="min-w-0 break-words text-[13px] leading-[1.75] text-[#425A70] sm:text-[14px]">
                <UaeInlineText text={nested[1]} />
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
                <UaeInlineText text={unordered[1]} />
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
                <UaeInlineText text={ordered[2]} />
              </p>
            </div>
          );
        }

        return (
          <p key={index} className="break-words text-[13px] leading-[1.85] text-[#425A70] sm:text-[15px]">
            <UaeInlineText text={line} />
          </p>
        );
      })}
    </div>
  );
}

/* ============================================
   UAE GUIDE DETAIL PAGE
   USA-STYLE DESIGN
============================================ */

export default async function UaeGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = UAE_GUIDES[slug];

  if (!guide) notFound();

  const { intro, chapters } = parseUaeMarkdown(guide.markdown);

  const otherGuides = Object.values(UAE_GUIDES).filter(
    (item) => item.slug !== slug
  );

  const whatsappUrl = `https://wa.me/919286844550?text=${encodeURIComponent("Hi University Yatra, I would like guidance on studying in the UAE.")}`;

  return (
    <>
      <Navbar active="Destinations" />

      <main className="min-h-screen w-full overflow-x-clip bg-[#F8FAFC]">

        {/* =====================================
            01. USA-STYLE IMAGE HERO
        ===================================== */}

        <section className="relative isolate w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] lg:min-h-[600px]">

          {/* HERO IMAGE */}
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

              <Link href="/study-in-uae" className="transition-colors hover:text-[#1765F5]">
                Study in UAE
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
              <Bookmark size={13} className="shrink-0 text-[#1765F5]" />
              <span className="text-center font-mono text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#1765F5] min-[390px]:text-[10px] sm:text-[11px] sm:tracking-widest">
                {guide.vol} • {guide.badge}
              </span>
            </div>

            {/* UAE TAGLINE */}
            <p className="relative z-10 mx-auto max-w-[720px] text-[12px] font-semibold leading-[1.6] text-[#0C337B] sm:text-[14px]">
              {guide.tagline}
            </p>

            {/* COLORED PILLS */}
            <div className="relative z-10 mb-2 mt-3 flex max-w-[580px] flex-wrap items-center justify-center gap-2 sm:mb-4 sm:mt-4 sm:gap-3">
              {guide.pillColors.map((pill, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: pill.bg, color: pill.text }}
                  className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] shadow-sm min-[390px]:px-3.5 min-[390px]:text-[10px] sm:text-[11px]"
                >
                  {pill.label}
                </span>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="relative z-10 mt-5 flex w-full flex-nowrap items-center justify-center gap-2 px-1 sm:mt-8 sm:gap-6 sm:px-0">

              <a href="#contact-advisory" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#1765F5] bg-[#1765F5] px-1.5 py-3 text-[9px] font-bold text-white shadow-[0_8px_22px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]">
                <span>Book a Free Consultation</span>
                <ArrowRight size={14} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]" />
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#25D366] bg-white px-1.5 py-3 text-[9px] font-bold text-[#0C337B] shadow-[0_8px_20px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]">
                <MessageCircle size={15} className="shrink-0 text-[#25D366] transition-colors group-hover:text-white sm:size-[18px]" />
                <span>Chat On Whatsapp</span>
              </a>

            </div>
          </div>
        </section>

        {/* =====================================
            02. USA-STYLE CONTENT SECTION
        ===================================== */}

        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">

            {/* MAIN CONTENT */}
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

                  <UaeMarkdownContent lines={intro} />
                </div>
              )}

              {/* CHAPTER CARDS */}
              {chapters.map((chapter, index) => {
                const chapterIcons = [BookOpen, Compass, CheckCircle2];
                const ChapterIcon = chapterIcons[index % chapterIcons.length];

                return (
                  <article key={index} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#A2C1FB] hover:shadow-md sm:p-8">

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

                    <div className="mt-5 border-t border-slate-100 pt-5">
                      <UaeMarkdownContent lines={chapter.lines} />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* =====================================
                03. RIGHT SIDEBAR
            ===================================== */}

            <aside className="min-w-0 space-y-6">

              {/* FREE COUNSELLING */}
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-gradient-to-br from-[#E8F0FE] to-white p-5 shadow-sm sm:p-7">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">
                  1-on-1 Student Guidance
                </span>

                <h2 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">
                  Plan Your UAE Journey With an Expert
                </h2>

                <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C]">
                  Speak with our UAE study experts
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

              {/* OTHER UAE GUIDES */}
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">
                    Other UAE Guides
                  </h2>

                  <span className="font-mono text-[10px] text-[#1765F5]">
                    Series
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  {otherGuides.map((item) => (
                    <Link key={item.slug} href={`/study-in-uae/${item.slug}`} className="group flex min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]">
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


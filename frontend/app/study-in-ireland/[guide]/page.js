import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, MessageCircle, BookOpen, Compass, GraduationCap, Calendar, Home, Wallet, Award, CheckCircle2, Clock, Globe2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

/*
  FILE LOCATION (IMPORTANT):
  app/study-in-ireland/[guide]/page.jsx

  Folder name MUST be [guide] because generateStaticParams returns { guide: slug }
  and the code reads params.guide.
*/

/* Unknown slugs -> 404 */
export const dynamicParams = false;

/* All five Ireland guides */
const IRELAND_GUIDES = {
  "study-in-ireland": {
    id: "01",
    vol: "VOL. I",
    slug: "study-in-ireland",
    title: "Study in Ireland",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Bachelor's, master's, and Irish admission intakes",
    heroImage: "/images/universities/ireland/trinity-college-dublin.webp",
    pillColors: [
      { label: "BACHELOR'S", bg: "#D7F77D", text: "#0C337B" },
      { label: "MASTER'S", bg: "#B5E9F2", text: "#0C337B" },
      { label: "MAIN INTAKES", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Study in Ireland

Ireland offers university degrees and practical college programs for international students. Whether you're planning a bachelor's degree after Class 12 or a master's degree after graduation, understanding how Irish education works can help you narrow down the right options.

## Universities and Programs

Irish universities offer undergraduate and postgraduate education with a combination of classroom learning, research, and practical projects.

- **Bachelor's Degrees:** Most programs take three to four years. Some programs include internships or placements.
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
    title: "Cost of Studying in Ireland",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Tuition, living costs, and financial planning",
    heroImage: "/images/universities/ireland/university-college-dublin.webp",
    pillColors: [
      { label: "UNDERGRADUATE", bg: "#D7F77D", text: "#0C337B" },
      { label: "POSTGRADUATE", bg: "#B5E9F2", text: "#0C337B" },
      { label: "LIVING COSTS", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Cost of Studying in Ireland

Your total budget needs to cover your course, mandatory fees, health insurance, visa expenses, and living costs.

## Tuition Fees

- **Bachelor's Programs:** EUR 10,000 – 25,000 per year
- **Master's Programs:** EUR 10,000 – 30,000 per year

Professional programs and certain high-demand courses may cost more.

## Living Costs

Budget approximately EUR 1,000 – 1,500 per month for:

- Accommodation
- Food and groceries
- Transportation
- Utilities and internet
- Personal expenses

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
    title: "Cost of Living & Culture in Ireland",
    shortTitle: "Living & Culture",
    badge: "Living Costs & Student Life",
    tagline: "Accommodation, food, transport, and life in Ireland",
    heroImage: "/images/universities/ireland/university-college-cork.webp",
    pillColors: [
      { label: "ACCOMMODATION", bg: "#D7F77D", text: "#0C337B" },
      { label: "DAILY LIFE", bg: "#B5E9F2", text: "#0C337B" },
      { label: "CULTURE", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Cost of Living & Culture in Ireland

Your monthly budget depends on your city, accommodation type, and lifestyle choices.

## Accommodation Options

- **On-Campus Residence:** EUR 400 – 800 per month
- **Off-Campus Shared:** EUR 500 – 1,000 per month
- **Private Rentals:** EUR 600 – 1,200 per month

Compare the full cost including utilities and transport before choosing.

## Daily Life

- **Food & Groceries:** Cook at home to manage expenses
- **Transportation:** Student passes available in major cities
- **Social Life:** Student discounts widely available

## Irish Culture

- English-speaking environment
- Friendly and welcoming communities
- Vibrant student culture in Dublin, Cork, and Galway
- Rich cultural heritage and festivals

Plan for both monthly spending and arrival costs when budgeting.`,
  },

  scholarships: {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    title: "Scholarships in Ireland for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "Scholarships & Funding Opportunities",
    tagline: "Merit-based awards and financial support",
    heroImage: "/images/universities/ireland/nui-galway.webp",
    pillColors: [
      { label: "MERIT-BASED", bg: "#D7F77D", text: "#0C337B" },
      { label: "UNIVERSITY AWARDS", bg: "#B5E9F2", text: "#0C337B" },
      { label: "RESEARCH FUNDING", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Scholarships in Ireland for Indian Students

Irish scholarships reward academic excellence, leadership, and research potential.

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
    title: "Post-Study Work Visa in Ireland",
    shortTitle: "Work Pathways",
    badge: "Third Level Graduate Scheme",
    tagline: "Stay and work in Ireland after graduation",
    heroImage: "/images/universities/ireland/dublin-city-university.webp",
    pillColors: [
      { label: "DURATION", bg: "#D7F77D", text: "#0C337B" },
      { label: "ELIGIBILITY", bg: "#B5E9F2", text: "#0C337B" },
      { label: "BENEFITS", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Post-Study Work Visa in Ireland

Ireland's Third Level Graduate Scheme allows eligible international graduates to remain and work in Ireland after completing their studies.

## Duration

- **Bachelor's & Master's graduates:** Up to 2 years
- **PhD graduates:** Up to 2 years

## Eligibility

- Must have completed a recognized qualification
- Must apply within 6 months of graduation
- Must have been on a valid student visa

## Benefits

- Full-time work permission
- Opportunity to gain Irish work experience
- Potential pathway to longer-term residency
- No job offer required at application

## Application Process

1. Check your eligibility
2. Gather required documents
3. Apply through Irish immigration
4. Await processing

The Third Level Graduate Scheme provides a valuable opportunity to gain international work experience after completing your degree in Ireland.`,
  },
};

/* ==========================================
   SIMPLE MARKDOWN -> HTML
   Supports: # ## ### headings, - lists, 1. lists,
   **bold**, paragraphs. The first H1 is skipped
   because the hero already shows the title.
========================================== */

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdown(md) {
  const lines = md.split("\n");
  const out = [];
  let listType = null; // "ul" | "ol" | null
  let skippedH1 = false;

  const closeList = () => {
    if (listType) {
      out.push(`</${listType}>`);
      listType = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.trim() === "") {
      closeList();
      continue;
    }

    if (line.startsWith("# ")) {
      closeList();
      if (!skippedH1) {
        skippedH1 = true;
        continue;
      }
      out.push(`<h1>${inline(line.slice(2))}</h1>`);
      continue;
    }

    if (line.startsWith("## ")) {
      closeList();
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith("### ")) {
      closeList();
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith("- ")) {
      if (listType !== "ul") {
        closeList();
        out.push("<ul>");
        listType = "ul";
      }
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      if (listType !== "ol") {
        closeList();
        out.push("<ol>");
        listType = "ol";
      }
      out.push(`<li>${inline(orderedMatch[1])}</li>`);
      continue;
    }

    closeList();
    out.push(`<p>${inline(line)}</p>`);
  }

  closeList();
  return out.join("");
}

/* ==========================================
   STATIC PARAMS + METADATA
========================================== */

export async function generateStaticParams() {
  return Object.keys(IRELAND_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = IRELAND_GUIDES[slug];

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

/* ==========================================
   USA DESIGN LAYOUT - IRELAND CONTENT UNCHANGED
   Reuses the exact Ireland markdown for all five guides.
========================================== */

const GUIDE_SECTION_ICONS = {
  "study-in-ireland": [GraduationCap, Calendar, BookOpen],
  "cost-of-studying": [Wallet, Home, BookOpen],
  "living-and-culture": [Home, Wallet, Globe2],
  scholarships: [Award, CheckCircle2, BookOpen],
  "post-study-work-visa": [Clock, CheckCircle2, BookOpen, BookOpen],
};

// Keep the markdown source untouched: split it only for USA-style chapter cards.
function parseIrelandChapters(markdown) {
  const introduction = [];
  const chapters = [];
  let currentLines = introduction;

  for (const line of markdown.split(/\r?\n/)) {
    if (line.startsWith("## ")) {
      const chapter = { title: line.slice(3), lines: [] };
      chapters.push(chapter);
      currentLines = chapter.lines;
      continue;
    }
    currentLines.push(line);
  }

  return {
    introductionHtml: renderMarkdown(introduction.join("\n")),
    chapters: chapters.map(({ title, lines }) => ({ title, html: renderMarkdown(lines.join("\n")) })),
  };
}

// Format lists, bold text, and paragraphs as editorial cards without altering wording.
const ARTICLE_PROSE_CLASSES = "min-w-0 break-words text-[14px] leading-[1.8] text-[#425A70] sm:text-[15px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5 [&_li]:pl-1 [&_li]:leading-[1.75] [&_li::marker]:font-bold [&_li::marker]:text-[#1765F5] [&_strong]:font-bold [&_strong]:text-[#0C337B] [&_h3]:mb-3 [&_h3]:mt-5 [&_h3]:text-[18px] [&_h3]:font-extrabold [&_h3]:text-[#0C337B]";

export default async function IrelandGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = IRELAND_GUIDES[slug];

  if (!guide) notFound();

  const { introductionHtml, chapters } = parseIrelandChapters(guide.markdown);
  const otherGuides = Object.values(IRELAND_GUIDES).filter((item) => item.slug !== slug);
  const chapterIcons = GUIDE_SECTION_ICONS[slug] || [];
  const whatsappHref = "https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20studying%20in%20Ireland.";

  return (
    <>
      <Navbar active="Destinations" />

      <main className="min-h-screen w-full overflow-x-clip bg-[#F8FAFC]">
        {/* USA-STYLE CAMPUS IMAGE HERO */}
        <section className="relative isolate w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] lg:min-h-[600px]">
          <div className="pointer-events-none absolute inset-0 -z-20">
            <Image src={guide.heroImage} alt={guide.title} fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-white/25" />

          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-3 pb-9 pt-[112px] text-center min-[390px]:px-4 sm:px-6 sm:pb-12 sm:pt-[135px] lg:min-h-[600px] lg:justify-center lg:px-8 lg:pb-16 lg:pt-[100px]">
            <nav aria-label="Breadcrumb" className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#526B8C] sm:mb-5 sm:text-[12px]">
              <Link href="/" className="transition-colors hover:text-[#1765F5]">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/study-in-ireland" className="transition-colors hover:text-[#1765F5]">Study in Ireland</Link>
              <span aria-hidden="true">/</span>
              <span className="font-bold text-[#0C337B]">{guide.shortTitle}</span>
            </nav>

            <h1 className="relative z-10 mx-auto max-w-[1100px] break-words text-balance text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white [-webkit-text-fill-color:#FFFFFF] [-webkit-text-stroke:1px_#0C337B] [paint-order:stroke_fill] [text-shadow:0_3px_12px_rgba(12,51,123,0.25)] min-[390px]:text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px]">
              {guide.title}
            </h1>

            <div className="relative z-10 mb-3 mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1765F5]/25 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-4">
              <Bookmark size={13} className="shrink-0 text-[#1765F5]" />
              <span className="text-center font-mono text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#1765F5] min-[390px]:text-[10px] sm:text-[11px] sm:tracking-widest">{guide.vol} • {guide.badge}</span>
            </div>

            <p className="relative z-10 mx-auto mb-1 max-w-[730px] text-[12px] font-semibold leading-[1.6] text-[#0C337B] sm:text-[14px]">{guide.tagline}</p>

            <div className="relative z-10 mb-2 mt-2 flex max-w-[670px] flex-wrap items-center justify-center gap-2 sm:mb-4 sm:mt-4 sm:gap-3">
              {guide.pillColors.map((pill, index) => (
                <span key={`${pill.label}-${index}`} style={{ backgroundColor: pill.bg, color: pill.text }} className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] shadow-sm min-[390px]:px-3.5 min-[390px]:text-[10px] sm:text-[11px]">
                  {pill.label}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-5 flex w-full flex-nowrap items-center justify-center gap-2 px-1 sm:mt-8 sm:gap-6 sm:px-0">
              <a href="#contact-advisory" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#1765F5] bg-[#1765F5] px-1.5 py-3 text-[9px] font-bold text-white shadow-[0_8px_22px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]">
                <span>Book a Free Consultation</span>
                <ArrowRight size={14} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]" />
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#25D366] bg-white px-1.5 py-3 text-[9px] font-bold text-[#0C337B] shadow-[0_8px_20px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]">
                <MessageCircle size={16} className="shrink-0 text-[#25D366] group-hover:text-white" />
                <span>Chat On Whatsapp</span>
              </a>
            </div>
          </div>
        </section>

        {/* USA-STYLE TWO COLUMN EDITORIAL LAYOUT */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-12">
            <div className="min-w-0 space-y-6 lg:col-span-2 lg:space-y-8">
              {/* Introduction: Original Ireland markdown, unchanged */}
              {introductionHtml && (
                <div className="min-w-0 rounded-3xl border border-[#A2C1FB]/40 bg-gradient-to-br from-[#EBF3FE] to-white p-5 shadow-sm sm:p-8">
                  <div className="flex items-center gap-2 text-[#1765F5]">
                    <Compass size={18} />
                    <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">Executive Summary</span>
                  </div>
                  <h2 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">Navigating {guide.shortTitle}</h2>
                  <div className={`${ARTICLE_PROSE_CLASSES} mt-3`} dangerouslySetInnerHTML={{ __html: introductionHtml }} />
                </div>
              )}

              {/* Every original ## Ireland heading becomes a USA-style chapter card */}
              {chapters.map((chapter, index) => {
                const ChapterIcon = chapterIcons[index] || BookOpen;
                return (
                  <article key={`${chapter.title}-${index}`} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md sm:p-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5]">
                        <ChapterIcon size={22} strokeWidth={2.2} />
                      </span>
                      <h2 className="min-w-0 break-words pt-1 text-[19px] font-extrabold tracking-tight text-[#0C337B] sm:text-[22px]">{chapter.title}</h2>
                    </div>
                    <div className="mt-5 border-t border-slate-100 pt-5">
                      <div className={ARTICLE_PROSE_CLASSES} dangerouslySetInnerHTML={{ __html: chapter.html }} />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* USA-STYLE RIGHT SIDEBAR */}
            <aside className="min-w-0 space-y-6">
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-gradient-to-br from-[#E8F0FE] to-white p-5 shadow-sm sm:p-7">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">1-on-1 Student Guidance</span>
                <h2 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">Need Personalized Guidance?</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C]">Speak with our Ireland study experts</p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#1eb956]">
                    <MessageCircle size={15} /> Chat on WhatsApp
                  </a>
                  <Link href="/counselling" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#0C337B]">Book Free Counselling</Link>
                </div>
              </div>

              <div className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">Other Ireland Guides</h2>
                  <span className="font-mono text-[10px] text-[#1765F5]">Series</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {otherGuides.map((item) => (
                    <Link key={item.slug} href={`/study-in-ireland/${item.slug}`} className="group flex min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]">
                      <span className="min-w-0 flex-1">
                        <span className="block break-words">{item.title}</span>
                        <span className="mt-1 block break-words text-[11px] font-medium text-[#64748B]">{item.badge}</span>
                      </span>
                      <span className="shrink-0 font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">{item.vol} →</span>
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

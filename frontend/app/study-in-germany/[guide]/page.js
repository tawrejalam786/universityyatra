import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, CheckCircle2, Compass, MessageCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

/* All five Germany guides with placeholder content */
const GERMANY_GUIDES = {
  "study-in-germany": {
    id: "01",
    vol: "VOL. I",
    slug: "study-in-germany",
    title: "Study in Germany",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Bachelor's, master's, PhD programs and German admission intakes",
    heroImage: "/images/universities/germany/tu-munich.webp",
    pillColors: [{"label": "BACHELOR'S","bg": "#D7F77D","text": "#0C337B"},{"label": "MASTER'S","bg": "#B5E9F2","text": "#0C337B"},{"label": "MAIN INTAKES","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Study in Germany

Germany offers world-class education with a strong focus on engineering, technology, and research. Whether you're planning a bachelor's degree after Class 12 or a master's degree after graduation, understanding how German education works can help you narrow down the right options.

## Why Study in Germany?

Germany is renowned for its engineering excellence, research opportunities, and tuition-free or low-cost public universities. The country combines academic rigor with practical industry connections, creating excellent opportunities for international students.

### Universities: Bachelor's, Master's and Doctoral Degrees

German universities offer undergraduate and postgraduate education, with many institutions specializing in technical and engineering fields.

- **Bachelor's Degrees**: Most programs take three years. Many programs are taught in German, though English-taught programs are increasingly available. Engineering, computer science, and business programs are particularly strong.
- **Master's Degrees**: These commonly take two years. Options range from a Master of Science (MSc) or Master of Engineering (MEng) to business, humanities, and other specialized fields.
- **Doctoral Degrees**: PhD programs focus on advanced research and usually take three to five years to complete. Germany invests heavily in research and development.

## Cost of Education

Most public universities charge no tuition fees or only semester contributions of EUR 300-500. Private universities may charge EUR 10,000-20,000 per year. Living expenses typically range from EUR 850-1,200 per month depending on the city.

## Main Intakes

German universities typically have two main admission periods:
- **Winter Semester (October)**: The main intake with the broadest selection of programs
- **Summer Semester (April)**: Available for selected programs and institutions

Application deadlines vary by university and program. Check specific program requirements well in advance.`,
  },
  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    slug: "cost-of-studying",
    title: "Cost of Studying in Germany",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Tuition, semester fees, living expenses and financial planning",
    heroImage: "/images/universities/germany/heidelberg-university.webp",
    pillColors: [{"label": "PUBLIC UNIVERSITIES","bg": "#D7F77D","text": "#0C337B"},{"label": "LIVING EXPENSES","bg": "#B5E9F2","text": "#0C337B"},{"label": "HEALTH INSURANCE","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Cost of Studying in Germany

Germany offers one of the most affordable education systems for international students, with most public universities charging no tuition fees. Your main expenses will be living costs, health insurance, and semester contributions.

## Tuition Fees

### Public Universities
Most public universities in Germany charge **no tuition fees** or only nominal semester contributions of **EUR 300-500 per semester** (approximately ₹25,000-42,000). This semester fee typically covers administrative costs and often includes a semester ticket for public transportation.

### Private Universities
Private universities charge tuition ranging from **EUR 10,000-20,000 per year** (approximately ₹8.5-17 lakh).

*INR conversions use an illustrative exchange rate of EUR 1 = ₹85. Your actual rupee cost will depend on the exchange rate when you transfer funds.*

## Living Expenses

Your monthly living costs typically range from **EUR 850-1,200** (approximately ₹72,000-1.02 lakh), depending on your city and lifestyle:

- **Accommodation**: EUR 250-600/month
  - Student dormitory: EUR 250-400/month
  - Shared apartment (WG): EUR 350-600/month
  - Private apartment: EUR 500-800/month

- **Food and Groceries**: EUR 200-300/month
- **Health Insurance**: EUR 110/month (mandatory)
- **Transportation**: EUR 30-100/month (often covered by semester ticket)
- **Books and Supplies**: EUR 20-50/month
- **Personal Expenses**: EUR 100-200/month

Cities like Munich, Frankfurt, and Hamburg are more expensive, while Leipzig, Dresden, and smaller university towns offer lower living costs.

## Mandatory Health Insurance

All students must have health insurance, costing approximately **EUR 110 per month** for students under 30 years old.

## Blocked Account Requirement

For student visa applications, you must show proof of funds through a blocked account ("Sperrkonto") with approximately **EUR 11,208 per year** (updated regularly). This money is then released monthly for your living expenses.`,
  },
  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    slug: "living-and-culture",
    title: "Cost of Living & Culture in Germany",
    shortTitle: "Living & Culture",
    badge: "Living Costs & Student Life",
    tagline: "Accommodation, transport, culture and life in Germany",
    heroImage: "/images/universities/germany/lmu-munich.webp",
    pillColors: [{"label": "CITY CHOICE","bg": "#D7F77D","text": "#0C337B"},{"label": "DAILY ESSENTIALS","bg": "#B5E9F2","text": "#0C337B"},{"label": "GERMAN CULTURE","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Cost of Living & Culture in Germany

Living in Germany combines efficient infrastructure, cultural diversity, and excellent quality of life. Your expenses and experience will vary significantly based on your city choice and lifestyle.

## Cost of Living by City

### Expensive Cities
Munich, Frankfurt, Stuttgart, and Hamburg have higher living costs, particularly for accommodation. Monthly expenses can range from EUR 1,000-1,400.

### Affordable Cities
Leipzig, Dresden, Jena, and smaller university towns offer lower costs, with monthly expenses around EUR 800-1,000.

## Accommodation Options

### Student Dormitories (Studentenwohnheim)
The most affordable option (EUR 250-400/month), but limited availability. Apply early through Studentenwerk.

### Shared Apartments (Wohngemeinschaft/WG)
Popular among students. You rent a private room and share kitchen and bathroom. Typically EUR 350-600/month.

### Private Apartments
More expensive (EUR 500-800/month) but offer complete independence.

## Transportation

Most universities include a semester ticket in their fees, providing free or heavily discounted public transport. Germany's public transportation is efficient, punctual, and extensive.

Many students also use bicycles as primary transport, especially in smaller cities.

## German Culture and Student Life

### Language
While many master's programs are taught in English, learning basic German significantly improves daily life and integration. German language courses are often available at universities.

### Punctuality
Germans value punctuality. Arriving on time for classes, meetings, and appointments is expected and appreciated.

### Student Life
Universities have various student organizations (Fachschaft), clubs, and international student groups. Germany offers rich cultural experiences, from museums and theaters to festivals and outdoor activities.

### Work-Life Balance
German culture emphasizes work-life balance. Students are encouraged to maintain healthy study schedules and enjoy recreational activities.

## Food and Dining

### Mensa (University Cafeteria)
Offers subsidized meals for students (EUR 2-5 per meal). A great way to save money on food.

### Groceries
Supermarkets like Aldi, Lidl, Rewe, and Edeka offer affordable groceries. Asian supermarkets are available in larger cities for international ingredients.

## Weather and Clothing

Winters can be cold with temperatures below freezing. Budget for warm clothing including a good winter coat, boots, and gloves. Summers are mild and pleasant.`,
  },
  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    title: "Scholarships in Germany for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "DAAD & University Funding",
    tagline: "DAAD scholarships, university funding and financial support",
    heroImage: "/images/universities/germany/rwth-aachen.webp",
    pillColors: [{"label": "DAAD","bg": "#D7F77D","text": "#0C337B"},{"label": "UNIVERSITY FUNDING","bg": "#B5E9F2","text": "#0C337B"},{"label": "RESEARCH GRANTS","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Scholarships in Germany for Indian Students

Germany offers numerous scholarship opportunities for international students, primarily through DAAD (German Academic Exchange Service) and university-specific programs.

## DAAD Scholarships

The German Academic Exchange Service (DAAD) is the largest funding organization for international students in Germany.

### Master's Programs
- **EPOS (Development-Related Postgraduate Courses)**: For students from developing countries pursuing master's degrees in development-related fields
- **DAAD Helmut Schmidt Programme**: Public Policy and Good Governance master's programs
- **Funding**: Typically covers tuition (if applicable), monthly allowance (EUR 861-1,200), health insurance, and travel costs

### PhD Programs
- **Research Grants for Doctoral Candidates**: For PhD students with excellent academic records
- **Funding Duration**: Usually 1-3 years
- **Monthly Stipend**: Approximately EUR 1,200

### Application Requirements
- Excellent academic record
- Clear research proposal or study plan
- Language proficiency (German or English depending on program)
- Proof of admission or conditional offer from German university

## University-Specific Scholarships

Many German universities offer their own scholarships for international students:

### Examples:
- **TU Munich**: International students can apply for various merit-based scholarships
- **Heidelberg University**: Offers scholarships through various foundations
- **RWTH Aachen**: Provides funding for excellent international students

## Research Foundations

Several German foundations offer funding:
- **Heinrich Böll Foundation**: For students committed to ecology and sustainability
- **Konrad Adenauer Foundation**: For politically interested students
- **Friedrich Ebert Foundation**: Supports social democratic values

## Application Tips

1. **Start Early**: Many scholarship applications open 12-18 months before program start
2. **Strong Motivation Letter**: Clearly explain your goals, qualifications, and why you deserve funding
3. **Academic Excellence**: Most scholarships require strong academic records
4. **Research Proposal**: For PhD scholarships, a well-developed research proposal is crucial
5. **Language Skills**: Demonstrate proficiency in the language of instruction

## Resources

- **DAAD Portal**: daad.de/scholarships
- **My DAAD**: Account system for applications
- **Scholarship Database**: Searchable database of available funding opportunities`,
  },
  "post-study-work-visa": {
    id: "05",
    vol: "VOL. V",
    slug: "post-study-work-visa",
    title: "Post-Study Work Visa in Germany",
    shortTitle: "Work Permit & PR",
    badge: "Job Seeker Visa & PR Pathways",
    tagline: "18-month job seeker visa, EU Blue Card and permanent residence",
    heroImage: "/images/universities/germany/humboldt-berlin.webp",
    pillColors: [{"label": "JOB SEEKER VISA","bg": "#D7F77D","text": "#0C337B"},{"label": "EU BLUE CARD","bg": "#B5E9F2","text": "#0C337B"},{"label": "PR PATHWAY","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Post-Study Work Visa in Germany

Germany offers attractive post-study work opportunities for international graduates, with clear pathways to permanent residence and EU-wide work authorization.

## 18-Month Job Seeker Visa

After completing your degree in Germany, you can apply for an **18-month job seeker visa** (Aufenthaltserlaubnis zur Arbeitsplatzsuche).

### Key Features:
- **Duration**: Up to 18 months
- **Purpose**: Find employment matching your qualifications
- **Work Allowed**: You can work part-time or take up internships while searching
- **Requirement**: Proof of sufficient funds to support yourself

### Application Process:
Apply at your local Ausländerbehörde (foreigners' office) before your student visa expires. You'll need:
- Valid passport
- Proof of completed degree
- Proof of health insurance
- Proof of financial means (approximately EUR 1,027/month)

## EU Blue Card

Once you secure a job matching your qualifications with a minimum salary threshold, you can apply for the **EU Blue Card**.

### Requirements:
- **Minimum Salary**: Approximately EUR 58,400 per year (2024, updated annually)
- **Lower Threshold**: EUR 45,552 for shortage occupations (IT, engineering, healthcare, etc.)
- **Qualification**: Recognized university degree

### Benefits:
- Work and reside in Germany
- After 33 months (or 21 months with German B1 language skills), eligible for permanent residence
- Family reunification rights
- Travel within EU

## Permanent Residence (Niederlassungserlaubnis)

You can apply for permanent residence after:
- **21 months** with EU Blue Card and German language skills (B1 level)
- **33 months** with EU Blue Card and basic German (A1 level)
- **4 years** of regular employment with sufficient German skills

### Requirements:
- Secure job or proof of financial stability
- Adequate German language skills (typically B1)
- Integration into German society
- Adequate living space
- Mandatory social security contributions

## Citizenship Pathway

After **6-8 years** of legal residence (can be reduced to 6 years with special integration achievements), you may apply for German citizenship.

Germany now allows dual citizenship, so you don't have to give up your Indian passport.

## Work During Studies

While studying, you can work:
- **120 full days** or **240 half days** per year
- Unlimited hours for student jobs at university
- This work experience can help you secure post-study employment

## Tips for Success

1. **Start Networking Early**: Build connections during your studies
2. **Learn German**: Even if your program is in English, German skills significantly improve job prospects
3. **Internships**: Complete internships during studies to gain local work experience
4. **Join Professional Networks**: LinkedIn, XING (German professional network)
5. **Career Services**: Use your university's career center for job search support

## Resources

- **Make it in Germany**: work-in-germany.de (official German government portal)
- **BAMF**: Federal Office for Migration and Refugees
- **Arbeitsagentur**: German Employment Agency`,
  },
};

export async function generateStaticParams() {
  return Object.keys(GERMANY_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = GERMANY_GUIDES[slug];

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
   MARKDOWN CONTENT PARSER
   Preserves original Germany content
============================================ */

function parseGermanyMarkdown(markdown = "") {
  const intro = [];
  const chapters = [];
  let current = intro;

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trimEnd();

    if (/^# /.test(line)) {
      continue;
    }

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
   INLINE MARKDOWN FORMATTING
============================================ */

function GermanyInlineText({ text = "" }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong
              key={index}
              className="font-bold text-[#0C337B]"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }

        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={index}>
              {part.slice(1, -1)}
            </em>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

/* ============================================
   CONTENT RENDERER
   Supports paragraphs, headings and lists
============================================ */

function GermanyMarkdownContent({ lines = [] }) {
  return (
    <div className="space-y-3.5">
      {lines.map((rawLine, index) => {
        const line = rawLine.trim();

        if (line.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="pt-3 text-[16px] font-extrabold leading-[1.45] text-[#0C337B] sm:text-[18px]"
            >
              <GermanyInlineText text={line.slice(4)} />
            </h3>
          );
        }

        const unordered = line.match(/^-\s+(.+)$/);
        const nested = rawLine.match(/^\s{2,}-\s+(.+)$/);

        if (nested) {
          return (
            <div
              key={index}
              className="ml-5 flex items-start gap-2.5 sm:ml-7"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1765F5]" />
              <p className="min-w-0 break-words text-[13px] leading-[1.75] text-[#425A70] sm:text-[14px]">
                <GermanyInlineText text={nested[1]} />
              </p>
            </div>
          );
        }

        if (unordered) {
          return (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={17}
                className="mt-1 shrink-0 text-[#1765F5]"
              />

              <p className="min-w-0 break-words text-[13px] leading-[1.75] text-[#425A70] sm:text-[14px]">
                <GermanyInlineText text={unordered[1]} />
              </p>
            </div>
          );
        }

        const ordered = line.match(/^(\d+)\.\s+(.+)$/);

        if (ordered) {
          return (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] text-[11px] font-extrabold text-[#1765F5]">
                {ordered[1]}
              </span>

              <p className="min-w-0 break-words text-[13px] leading-[1.75] text-[#425A70] sm:text-[14px]">
                <GermanyInlineText text={ordered[2]} />
              </p>
            </div>
          );
        }

        return (
          <p
            key={index}
            className="break-words text-[13px] leading-[1.85] text-[#425A70] sm:text-[15px]"
          >
            <GermanyInlineText text={line} />
          </p>
        );
      })}
    </div>
  );
}

/* ============================================
   GERMANY GUIDE DETAIL PAGE
   USA-STYLE DESIGN
============================================ */

export default async function GermanyGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = GERMANY_GUIDES[slug];

  if (!guide) {
    notFound();
  }

  const { intro, chapters } = parseGermanyMarkdown(guide.markdown);

  const otherGuides = Object.values(GERMANY_GUIDES).filter(
    (item) => item.slug !== slug
  );

  const whatsappUrl = `https://wa.me/919286844550?text=${encodeURIComponent("Hi University Yatra, I would like guidance on studying in Germany.")}`;

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
                    Navigating {guide.shortTitle}
                  </h2>

                  <GermanyMarkdownContent lines={intro} />
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

                    {/* ORIGINAL MARKDOWN CONTENT */}
                    <div className="mt-5 border-t border-slate-100 pt-5">
                      <GermanyMarkdownContent lines={chapter.lines} />
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

                  <Link
                    href="/counselling"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#0C337B]"
                  >
                    Book Free Consultation
                  </Link>

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


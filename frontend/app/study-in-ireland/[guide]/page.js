import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, CheckCircle2, Compass, MessageCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

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
    pillColors: [{"label": "BACHELOR'S","bg": "#D7F77D","text": "#0C337B"},{"label": "MASTER'S","bg": "#B5E9F2","text": "#0C337B"},{"label": "MAIN INTAKES","bg": "#FFD4E6","text": "#0C337B"}],
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
    pillColors: [{"label": "UNDERGRADUATE","bg": "#D7F77D","text": "#0C337B"},{"label": "POSTGRADUATE","bg": "#B5E9F2","text": "#0C337B"},{"label": "LIVING COSTS","bg": "#FFD4E6","text": "#0C337B"}],
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
    pillColors: [{"label": "ACCOMMODATION","bg": "#D7F77D","text": "#0C337B"},{"label": "DAILY LIFE","bg": "#B5E9F2","text": "#0C337B"},{"label": "CULTURE","bg": "#FFD4E6","text": "#0C337B"}],
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
  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    title: "Scholarships in Ireland for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "Scholarships & Funding Opportunities",
    tagline: "Merit-based awards and financial support",
    heroImage: "/images/universities/ireland/nui-galway.webp",
    pillColors: [{"label": "MERIT-BASED","bg": "#D7F77D","text": "#0C337B"},{"label": "UNIVERSITY AWARDS","bg": "#B5E9F2","text": "#0C337B"},{"label": "RESEARCH FUNDING","bg": "#FFD4E6","text": "#0C337B"}],
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
    pillColors: [{"label": "DURATION","bg": "#D7F77D","text": "#0C337B"},{"label": "ELIGIBILITY","bg": "#B5E9F2","text": "#0C337B"},{"label": "BENEFITS","bg": "#FFD4E6","text": "#0C337B"}],
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

export async function generateStaticParams() {
  return Object.keys(IRELAND_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const slug = params.guide;
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

export default function IrelandGuidePage({ params }) {
  const slug = params.guide;
  const guide = IRELAND_GUIDES[slug];

  if (!guide) {
    notFound();
  }

  const allGuidesList = Object.values(IRELAND_GUIDES);

  return (
    <>
      <Navbar active="Destinations" />

      <main className="relative w-full overflow-hidden bg-white">
        {/* HERO */}
        <section className="relative isolate flex min-h-[420px] w-full flex-col overflow-hidden bg-gradient-to-br from-[#0C337B] via-[#1765F5] to-[#0C337B] sm:min-h-[480px] lg:min-h-[520px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1765F5_0%,transparent_60%)] opacity-60"
          />

          <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1 flex-col px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
            <div className="flex flex-1 flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <BookOpen size={14} className="text-white" />
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  {guide.badge}
                </span>
              </div>

              <h1 className="max-w-[860px] text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[50px] lg:text-[56px]">
                {guide.title}
              </h1>

              <p className="mt-4 max-w-[680px] text-[14px] leading-[1.65] text-white/85 sm:text-[16px]">
                {guide.tagline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {guide.pillColors.map((pill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] sm:text-[11px]"
                    style={{
                      backgroundColor: pill.bg,
                      color: pill.text,
                    }}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-8 bg-gradient-to-b from-transparent to-white"
          />
        </section>

        {/* CONTENT */}
        <article className="relative w-full bg-white py-10 sm:py-12 lg:py-16">
          <div className="mx-auto w-full max-w-[820px] px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg prose-slate max-w-none prose-headings:font-extrabold prose-headings:tracking-[-0.02em] prose-h1:text-[28px] prose-h1:sm:text-[36px] prose-h2:text-[24px] prose-h2:sm:text-[30px] prose-h3:text-[20px] prose-h3:sm:text-[24px] prose-p:text-[15px] prose-p:leading-[1.7] prose-p:text-[#475569] prose-a:text-[#1765F5] prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-strong:text-[#0C337B] prose-ul:text-[15px] prose-ul:text-[#475569] prose-ol:text-[15px] prose-ol:text-[#475569]"
              dangerouslySetInnerHTML={{
                __html: guide.markdown
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1>${line.substring(2)}</h1>`;
                    }
                    if (line.startsWith("## ")) {
                      return `<h2>${line.substring(3)}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3>${line.substring(4)}</h3>`;
                    }
                    if (line.startsWith("- **") || line.startsWith("- ")) {
                      return `<li>${line.substring(2)}</li>`;
                    }
                    if (line.trim() === "") {
                      return "<br/>";
                    }
                    return `<p>${line}</p>`;
                  })
                  .join(""),
              }}
            />

            <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1765F5]">
                  <MessageCircle size={22} className="text-white" />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0C337B]">
                    Need Personalized Guidance?
                  </h3>
                  <p className="mt-0.5 text-[13px] text-[#64748B]">
                    Speak with our Ireland study experts
                  </p>
                </div>
              </div>
              <Link
                href="/counselling"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#0C337B] sm:shrink-0"
              >
                Book Free Counselling
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </article>

        {/* OTHER GUIDES */}
        <section className="relative w-full bg-[#F8FAFC] py-12 sm:py-14 lg:py-16">
          <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-[#0C337B] sm:text-[34px]">
                Explore More Ireland Guides
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {allGuidesList
                .filter((g) => g.slug !== slug)
                .map((otherGuide) => (
                  <Link
                    key={otherGuide.slug}
                    href={`/study-in-ireland/${otherGuide.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#EDF5FF] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1765F5]">
                      <Bookmark size={11} />
                      {otherGuide.vol}
                    </span>

                    <h3 className="text-[18px] font-bold leading-[1.3] text-[#0C337B]">
                      {otherGuide.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-[1.6] text-[#64748B]">
                      {otherGuide.tagline}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#1765F5]">
                      Read Guide
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <UniversityFooter />
    </>
  );
}

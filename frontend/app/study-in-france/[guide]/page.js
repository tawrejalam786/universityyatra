import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, CheckCircle2, Compass, MessageCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

/* All five France guides */
const FRANCE_GUIDES = {
  "study-in-france": {
    id: "01",
    vol: "VOL. I",
    slug: "study-in-france",
    title: "Study in France",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Licence, master's, doctorat and French admission intakes",
    heroImage: "/images/universities/france/sorbonne-university.webp",
    pillColors: [{"label": "LMD FRAMEWORK","bg": "#D7F77D","text": "#0C337B"},{"label": "GRANDES ÉCOLES","bg": "#B5E9F2","text": "#0C337B"},{"label": "MAIN INTAKES","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Study in France - Education Pathways

France offers a structured and recognised education system that combines academic rigour with cultural richness.`,
  },
  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    slug: "cost-of-studying",
    summary: "Your budget depends on your qualification, program, and institution. Public universities in France offer relatively affordable tuition.\n\n- Bachelor's: €2,902/year at public universities\n- Master's: €3,950/year at public universities\n- Living costs: Vary by city and lifestyle\n\nPlan for tuition, accommodation, and living expenses before applying.",
    title: "Cost of Studying in France",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Tuition, mandatory fees, living costs and financial planning",
    heroImage: "/images/universities/france/universite-paris-saclay.webp",
    pillColors: [{"label": "BACHELOR'S AVERAGE","bg": "#D7F77D","text": "#0C337B"},{"label": "MASTER'S AVERAGE","bg": "#B5E9F2","text": "#0C337B"},{"label": "PUBLIC UNIVERSITY","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Cost of Studying in France - Tuition & Budget

Planning to study in France requires understanding tuition fees, living expenses, and available financial support.`,
  },
  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    slug: "living-and-culture",
    summary: "Your living costs depend on your city, accommodation, and lifestyle. France offers student-friendly cities with rich cultural heritage.\n\n- Biggest variable: Accommodation\n- Plan for: Food, transport, utilities, CAF housing aid\n- Culture: Art, cuisine, history, and regional diversity",
    title: "Cost of Living in France & Culture",
    shortTitle: "Living & Culture",
    badge: "Living Costs & Student Life",
    tagline: "Accommodation, food, transport, and French culture",
    heroImage: "/images/universities/france/sciences-po.webp",
    pillColors: [{"label": "ACCOMMODATION","bg": "#D7F77D","text": "#0C337B"},{"label": "DAILY ESSENTIALS","bg": "#B5E9F2","text": "#0C337B"},{"label": "FRENCH CULTURE","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Cost of Living in France & Culture

Living in France offers a unique blend of affordability, culture, and academic excellence.`,
  },
  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    summary: "French scholarships reward academic excellence, research potential, and specific fields of study.\n\n- Eiffel Excellence: Master's and PhD scholarships\n- Campus France: Government and university funding\n- Erasmus+: European mobility programs",
    title: "Scholarships in France for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "Scholarships & Financial Aid",
    tagline: "Eiffel Excellence, Campus France, and university funding",
    heroImage: "/images/universities/france/universite-psl.webp",
    pillColors: [{"label": "EIFFEL PROGRAMME","bg": "#D7F77D","text": "#0C337B"},{"label": "CAMPUS FRANCE","bg": "#B5E9F2","text": "#0C337B"},{"label": "ERASMUS+","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Scholarships in France for Indian Students

France offers various scholarship opportunities for international students pursuing higher education.`,
  },
  "post-study-work-visa": {
    id: "05",
    vol: "VOL. V",
    slug: "post-study-work-visa",
    summary: "France offers post-study work opportunities for eligible international graduates.\n\n- Master's graduates: 12 months post-study work permit (APS)\n- Student work: 964 hours/year during studies\n- Residence pathways: Talent Passport, APS permit",
    title: "Post-Study Work Visa in France",
    shortTitle: "PGWP & Work Pathways",
    badge: "Post-Study Work Opportunities",
    tagline: "APS permit, work rights, and residence pathways",
    heroImage: "/images/universities/france/ens-lyon.webp",
    pillColors: [{"label": "12 MONTHS APS","bg": "#D7F77D","text": "#0C337B"},{"label": "964 HOURS/YEAR","bg": "#B5E9F2","text": "#0C337B"},{"label": "TALENT PASSPORT","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Post-Study Work Visa in France

International graduates in France can access post-study work opportunities through various permit options.`,
  },
};

export async function generateMetadata({ params }) {
  const slug = params.guide;
  const guide = FRANCE_GUIDES[slug];

  if (!guide) {
    return {
      title: "Guide Not Found - University Yatra",
    };
  }

  return {
    title: `${guide.title} | University Yatra`,
    description: guide.summary || guide.tagline,
    openGraph: {
      title: guide.title,
      description: guide.tagline,
      type: "article",
    },
  };
}

export default function FranceGuidePage({ params }) {
  const slug = params.guide;
  const guide = FRANCE_GUIDES[slug];

  if (!guide) {
    notFound();
  }

  const allGuides = Object.values(FRANCE_GUIDES);
  const currentIndex = allGuides.findIndex((g) => g.slug === slug);
  const prevGuide = currentIndex > 0 ? allGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex < allGuides.length - 1 ? allGuides[currentIndex + 1] : null;

  return (
    <>
      <Navbar active="Destinations" />

      <main className="relative min-h-screen w-full overflow-hidden bg-white">

        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0C337B] via-[#1047AC] to-[#1765F5] py-12 sm:py-14 lg:py-16">

          <div className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-32 h-[350px] w-[350px] rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <Link
                href="/study-in-france"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-white/80 transition-colors hover:text-white"
              >
                <ArrowRight size={16} className="rotate-180" />
                Back to Study in France
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">

              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    <BookOpen size={13} />
                    {guide.vol}
                  </span>

                  <span className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {guide.badge}
                  </span>
                </div>

                <h1 className="mb-4 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[40px] lg:text-[48px]">
                  {guide.title}
                </h1>

                <p className="max-w-[650px] text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
                  {guide.tagline}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {guide.pillColors.map((pill, i) => (
                    <span
                      key={i}
                      className="rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide"
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

              <div className="relative h-[280px] overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-sm lg:h-[320px]">
                <Image
                  src={guide.heroImage}
                  alt={guide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="relative w-full py-12 sm:py-14 lg:py-16">

          <div className="mx-auto w-full max-w-[820px] px-4 sm:px-6 lg:px-8">

            {guide.summary && (
              <div className="mb-10 rounded-2xl border border-[#E0E8F0] bg-[#F8FAFC] p-6 sm:p-8">
                <div className="mb-3 flex items-center gap-2 text-[#1765F5]">
                  <Compass size={20} />
                  <span className="text-[12px] font-bold uppercase tracking-wider">
                    Quick Overview
                  </span>
                </div>
                <p className="whitespace-pre-line text-[14px] leading-relaxed text-[#526477]">
                  {guide.summary}
                </p>
              </div>
            )}

            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#0C337B] prose-p:text-[#526477] prose-a:text-[#1765F5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0C337B]">
              <div dangerouslySetInnerHTML={{ __html: guide.markdown }} />
            </article>

          </div>
        </section>

        {/* NAVIGATION SECTION */}
        <section className="relative w-full border-t border-[#E0E8F0] bg-[#F8FAFC] py-10 sm:py-12">

          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

            <div className="grid gap-6 sm:grid-cols-2">

              {prevGuide && (
                <Link
                  href={`/study-in-france/${prevGuide.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-[#D0E0F0] bg-white p-5 transition-all hover:border-[#1765F5] hover:shadow-lg"
                >
                  <ArrowRight size={20} className="shrink-0 rotate-180 text-[#1765F5]" />
                  <div>
                    <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#7890A3]">
                      Previous Guide
                    </div>
                    <div className="font-bold text-[#0C337B] group-hover:text-[#1765F5]">
                      {prevGuide.shortTitle}
                    </div>
                  </div>
                </Link>
              )}

              {nextGuide && (
                <Link
                  href={`/study-in-france/${nextGuide.slug}`}
                  className="group flex items-center justify-end gap-4 rounded-xl border border-[#D0E0F0] bg-white p-5 text-right transition-all hover:border-[#1765F5] hover:shadow-lg sm:col-start-2"
                >
                  <div>
                    <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#7890A3]">
                      Next Guide
                    </div>
                    <div className="font-bold text-[#0C337B] group-hover:text-[#1765F5]">
                      {nextGuide.shortTitle}
                    </div>
                  </div>
                  <ArrowRight size={20} className="shrink-0 text-[#1765F5]" />
                </Link>
              )}

            </div>

            <div className="mt-8 text-center">
              <Link
                href="/study-in-france"
                className="inline-flex items-center gap-2 rounded-full bg-[#1765F5] px-6 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#0C337B]"
              >
                <ArrowRight size={16} className="rotate-180" />
                View All France Guides
              </Link>
            </div>

          </div>
        </section>

      </main>

      <UniversityFooter />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(FRANCE_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Bookmark,
  MessageCircle,
  GraduationCap,
  Calendar,
  DollarSign,
  FileText,
  Globe2,
  Award,
  CheckCircle2,
  Briefcase,
  Clock,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import franceGuidesContent from "@/data/france-guides.json";

const GUIDE_DETAILS_DATABASE = {
  "study-in-france": {
    id: "01",
    vol: "VOL. I",
    title: "Study in France",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Licence, Master's, Doctorat and French Academic Intakes",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#0A1E3F",
    pillColors: [
      { label: "LMD FRAMEWORK", bg: "#D7F77D", text: "#063B72" },
      { label: "GRANDES ÉCOLES", bg: "#B5E9F2", text: "#063B72" },
      { label: "MAIN INTAKES", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "France follows the European Licence-Master-Doctorat (LMD) framework, offering structured pathways from undergraduate to doctoral studies. The system includes traditional universities alongside specialised Grandes Écoles.",
    metrics: [
      { label: "Licence (Bachelor's)", value: "Typically 3 Years" },
      { label: "Master's Degree", value: "Usually 2 Years" },
      { label: "Main Intakes", value: "September & January" },
      { label: "Academic System", value: "LMD Framework" },
    ],
    chapters: [
      {
        icon: GraduationCap,
        title: "Understanding the French Education System",
        desc: "France's higher education combines universities, Grandes Écoles, and specialised institutions.",
        points: [
          "Licence (Bachelor's): 3-year undergraduate programs (180 ECTS credits) covering foundational knowledge in chosen fields.",
          "Master's: 2-year postgraduate programs (120 ECTS credits) offering specialisation and advanced study.",
          "Doctorat (PhD): Research-focused doctoral programs typically lasting 3 years, requiring original research contribution.",
          "Grandes Écoles: Selective institutions offering specialised education in engineering, business, and public administration.",
        ],
      },
      {
        icon: Calendar,
        title: "Academic Intakes in France",
        desc: "French universities typically follow September and January intakes.",
        points: [
          "September/October: Main intake with widest program availability across universities.",
          "January/February: Limited availability for selected programs, particularly in business schools.",
          "Application deadlines vary by institution and program type.",
        ],
      },
    ],
    faqs: [],
  },

  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    title: "Cost of Studying in France",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Public University Fees, Living Costs & Financial Planning",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#4A101D",
    pillColors: [
      { label: "BACHELOR'S €2,902", bg: "#D7F77D", text: "#063B72" },
      { label: "MASTER'S €3,950", bg: "#B5E9F2", text: "#063B72" },
      { label: "PUBLIC UNIVERSITIES", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "France offers relatively affordable public university education. For 2026–27, public universities charge €2,902 yearly for Bachelor's and €3,950 for Master's programs for international students.",
    metrics: [
      { label: "Bachelor's (Licence)", value: "€2,902 / year" },
      { label: "Master's", value: "€3,950 / year" },
      { label: "Doctorate (PhD)", value: "€398 / year" },
      { label: "Living Costs", value: "€750–€1,600 / month" },
    ],
    chapters: [
      {
        icon: DollarSign,
        title: "Tuition Fees in France",
        points: [
          "Public Universities: €2,902/year for Bachelor's, €3,950/year for Master's, €398/year for PhD programs.",
          "Private Institutions: Fees vary significantly, ranging from €5,000 to €30,000+ annually depending on institution and program.",
          "Business Schools: MBA and specialized programs can cost €20,000 to €100,000+ for complete programs.",
          "Engineering Schools: Grandes Écoles may charge different fee structures based on institution type.",
        ],
      },
      {
        icon: FileText,
        title: "Additional Academic Expenses",
        points: [
          "CVEC: €105 annual Student and Campus Life Contribution for 2026–27.",
          "Campus France Fee: ₹20,000 processing fee from August 2026.",
          "Student Visa: €50 for Études en France applicants, €99 standard fee.",
          "Health Insurance: Required for international students in France.",
        ],
      },
    ],
    faqs: [],
  },

  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    title: "Cost of Living in France & Culture",
    shortTitle: "Living & Culture",
    badge: "Student Life & Monthly Expenses",
    tagline: "Accommodation, Food, Transport & French Student Culture",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#165548",
    pillColors: [
      { label: "PARIS €1,100–€2,000", bg: "#D7F77D", text: "#063B72" },
      { label: "OTHER CITIES €700–€1,500", bg: "#B5E9F2", text: "#063B72" },
      { label: "CAF HOUSING AID", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "Living costs in France vary significantly by city. Paris requires higher budgets (€1,100–€2,000/month), while other cities like Lyon, Toulouse, and Lille offer more affordable options (€700–€1,500/month).",
    metrics: [
      { label: "Paris Monthly Cost", value: "€1,100–€2,000" },
      { label: "Other Cities", value: "€700–€1,500" },
      { label: "Biggest Expense", value: "Accommodation" },
      { label: "Student Meals", value: "€1 at CROUS canteens" },
    ],
    chapters: [
      {
        icon: Globe2,
        title: "Monthly Living Expenses",
        points: [
          "Accommodation: €300–€750 outside Paris, €600–€1,100 in Paris (CROUS residences more affordable).",
          "Food: €200–€350/month. CROUS restaurants offer €1 meals for eligible students.",
          "Transport: €10–€90/month depending on city. Student transport passes available.",
          "Utilities: €60–€140/month for electricity, water, heating, and internet.",
        ],
      },
      {
        icon: Compass,
        title: "French Student Culture",
        points: [
          "Art & Culture: France offers rich cultural heritage with museums, galleries, and historical sites. Many offer student discounts.",
          "Food Culture: French cuisine is central to daily life. Bakeries, markets, and restaurants are part of the cultural experience.",
          "Campus Life: Student associations (BDE), clubs, sports activities, and cultural events create vibrant campus communities.",
          "Regional Diversity: Each French region offers distinct culture, cuisine, and lifestyle experiences.",
        ],
      },
    ],
    faqs: [],
  },

  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    title: "Scholarships in France for Indian Students",
    shortTitle: "Scholarships & Aid",
    badge: "Funding, Grants & Financial Aid",
    tagline: "Eiffel Excellence, Charpak, Erasmus+ & University Scholarships",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#1A2645",
    pillColors: [
      { label: "EIFFEL SCHOLARSHIP", bg: "#D7F77D", text: "#063B72" },
      { label: "CHARPAK PROGRAM", bg: "#B5E9F2", text: "#063B72" },
      { label: "ERASMUS+ FUNDING", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "France offers various scholarships for international students through government programs, university funding, and European initiatives. Major opportunities include Eiffel Excellence, Charpak scholarships, and Erasmus+ programs.",
    metrics: [
      { label: "Eiffel Master's", value: "€1,200 / month" },
      { label: "Charpak Master's", value: "€860 / month" },
      { label: "Eiffel PhD", value: "€2,000 / month" },
      { label: "University Funding", value: "Varies by Institution" },
    ],
    chapters: [
      {
        icon: Award,
        title: "Major Scholarship Programs",
        points: [
          "Eiffel Excellence Scholarship: €1,200/month for Master's, €2,000/month for PhD. Includes travel, insurance, and cultural activities.",
          "Charpak Master's Scholarship: €860/month for Indian students, plus visa fee exemption, social security, and accommodation assistance.",
          "Erasmus Mundus: European Union funding for joint master's programs involving French universities.",
          "University Scholarships: Émile Boutmy (Sciences Po), HEC Foundation, Paris-Saclay International scholarships available.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "How to Apply for Scholarships",
        points: [
          "Research eligibility requirements for each scholarship program early.",
          "Eiffel applications submitted by French institutions on behalf of candidates.",
          "Charpak applications through Campus France India with specific deadlines.",
          "University scholarships may require separate applications or automatic consideration during admission.",
          "Prepare strong academic transcripts, motivation letters, and recommendation letters.",
        ],
      },
    ],
    faqs: [],
  },

  "post-study-work-visa": {
    id: "05",
    vol: "VOL. V",
    title: "Post-Study Work Visa in France",
    shortTitle: "Post-Study Visa",
    badge: "APS Permit & Work Opportunities",
    tagline: "12-Month APS Permit, Work Rights & Career Pathways",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#1E2530",
    pillColors: [
      { label: "12-MONTH APS", bg: "#D7F77D", text: "#063B72" },
      { label: "MASTER'S GRADUATES", bg: "#B5E9F2", text: "#063B72" },
      { label: "964 HOURS/YEAR", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "France offers post-study work opportunities through the APS (Autorisation Provisoire de Séjour) permit. Eligible Master's graduates can receive 12 months to search for employment or develop business projects related to their studies.",
    metrics: [
      { label: "APS Duration", value: "12 Months" },
      { label: "Student Work", value: "964 Hours / Year" },
      { label: "Salary Threshold", value: "€2,800.53 / month" },
      { label: "Extension Option", value: "Indian Graduates +12 Months" },
    ],
    chapters: [
      {
        icon: Briefcase,
        title: "Post-Study Work Options",
        points: [
          "APS Permit: 12-month residence permit for job search or business creation for Master's graduates.",
          "India-France Agreement: Qualifying Indian graduates may receive up to 24 months (12+12) under bilateral arrangement.",
          "Work Requirements: Employment must relate to academic training and meet €2,800.53 gross monthly salary threshold.",
          "Application: Apply before student permit expires; Indian graduates can also apply within 4 years of graduation.",
        ],
      },
      {
        icon: Clock,
        title: "Transition to Long-Term Work",
        points: [
          "Salarié Permit: Standard work permit for qualifying employment meeting salary and job requirements.",
          "Talent Passport: For highly qualified professionals with €39,582+ annual salary (2026 threshold).",
          "EU Blue Card: For highly skilled workers with €59,373+ annual salary and relevant qualifications.",
          "Business Creation: APS permits support preparation of business projects related to academic field.",
        ],
      },
    ],
    faqs: [],
  },
};

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = GUIDE_DETAILS_DATABASE[slug];

  if (!guide) {
    return { title: "Guide Not Found - University Yatra" };
  }

  return {
    title: `${guide.title} | Complete Guide - University Yatra`,
    description: guide.tagline,
    openGraph: {
      title: guide.title,
      description: guide.tagline,
      type: "article",
    },
  };
}

export default async function FranceGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = GUIDE_DETAILS_DATABASE[slug];
  const fullGuide = franceGuidesContent[slug];

  if (!guide) {
    notFound();
  }

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

export async function generateStaticParams() {
  return Object.keys(GUIDE_DETAILS_DATABASE).map((slug) => ({
    guide: slug,
  }));
}

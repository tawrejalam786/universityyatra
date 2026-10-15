
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Wallet,
  Coins,
  Globe2,
  Plane,
  MapPin,
  BookOpen,
  BriefcaseBusiness,
  TrendingUp,
  FileCheck2,
  FileText,
  Stamp,
  Check,
  BadgeCheck,
} from "lucide-react";

/* =========================================
   01 - COUNTRY ILLUSTRATION
========================================= */

function CountryIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[125px] w-full max-w-[240px]">
      <div className="absolute left-1/2 top-1/2 grid h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20">
        <Globe2 size={68} strokeWidth={1.3} className="text-white" />
      </div>

      <span className="absolute left-[8%] top-[8%] grid h-11 w-11 -rotate-12 place-items-center rounded-[14px] bg-white text-[#3768D9]">
        <Plane size={23} />
      </span>

      <span className="absolute right-[6%] top-[5%] grid h-10 w-10 rotate-12 place-items-center rounded-[14px] bg-[#D9F77B] text-[#063B72]">
        <BookOpen size={21} />
      </span>

      <span className="absolute bottom-[1%] right-[16%] grid h-11 w-11 -rotate-6 place-items-center rounded-[14px] bg-white text-[#3768D9]">
        <MapPin size={24} />
      </span>
    </div>
  );
}

/* =========================================
   02 - FUNDING ILLUSTRATION
========================================= */

function FundingIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[125px] w-full max-w-[240px] sm:h-[140px]">
      <div className="absolute left-[3%] top-[12%] flex w-[145px] -rotate-6 flex-col gap-2 rounded-[17px] bg-white p-3 shadow-[0_6px_0_rgba(6,59,114,0.1)] sm:w-[165px]">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#DFF5EF] text-[#087E65]">
            <GraduationCap size={19} />
          </span>

          <span className="text-[11px] font-extrabold text-[#063B72]">
            Scholarship
          </span>
        </div>

        <div className="h-2 w-[85%] rounded-full bg-[#E7EDF4]" />
        <div className="h-2 w-[60%] rounded-full bg-[#E7EDF4]" />

        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#087E65]">
          <Check size={12} />
          Eligible options
        </div>
      </div>

      <div className="absolute right-[1%] top-[5%] grid h-[60px] w-[60px] rotate-12 place-items-center rounded-[18px] bg-[#063B72] text-white">
        <Wallet size={30} strokeWidth={1.8} />
      </div>

      <div className="absolute bottom-[2%] right-[16%] grid h-[57px] w-[57px] -rotate-12 place-items-center rounded-full bg-[#FFF1C7] text-[#063B72] shadow-[0_5px_0_rgba(6,59,114,0.1)]">
        <Coins size={30} strokeWidth={1.8} />
      </div>
    </div>
  );
}

/* =========================================
   03 - VISA ILLUSTRATION
========================================= */

function VisaIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[125px] w-full max-w-[240px]">
      <div className="absolute left-[5%] top-[7%] w-[140px] rotate-[-9deg] rounded-[16px] bg-white p-3 shadow-[0_6px_0_rgba(6,59,114,0.1)]">
        <div className="mb-3 flex items-center justify-between">
          <FileText size={23} className="text-[#063B72]" />
          <BadgeCheck size={21} className="text-[#0C9253]" />
        </div>

        <div className="mb-2 h-2 w-full rounded-full bg-[#E7EDF4]" />
        <div className="mb-2 h-2 w-[75%] rounded-full bg-[#E7EDF4]" />
        <div className="h-2 w-[55%] rounded-full bg-[#E7EDF4]" />
      </div>

      <div className="absolute right-[7%] top-[2%] grid h-[100px] w-[72px] rotate-12 place-items-center rounded-[12px] border-2 border-white/50 bg-[#063B72] text-white">
        <div className="flex flex-col items-center gap-1.5">
          <Globe2 size={28} strokeWidth={1.4} />

          <span className="text-[9px] font-extrabold tracking-[0.1em]">
            PASSPORT
          </span>

          <Plane size={19} />
        </div>
      </div>

      <span className="absolute bottom-[2%] right-[5%] grid h-10 w-10 place-items-center rounded-full bg-[#FFD36E] text-[#063B72]">
        <FileCheck2 size={22} />
      </span>

      <span className="absolute bottom-[2%] left-[8%] grid h-10 w-10 place-items-center rounded-[12px] bg-white text-[#F47B59]">
        <Stamp size={22} />
      </span>
    </div>
  );
}

/* =========================================
   04 - CAREER ILLUSTRATION
========================================= */

function CareerIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[125px] w-full max-w-[230px]">
      <div className="absolute left-[10%] top-[10%] grid h-[85px] w-[85px] -rotate-8 place-items-center rounded-[23px] bg-white text-[#8E4AB2]">
        <BriefcaseBusiness size={45} strokeWidth={1.5} />
      </div>

      <div className="absolute right-[7%] top-[22%] grid h-[70px] w-[70px] rotate-12 place-items-center rounded-[21px] bg-[#DDF67C] text-[#063B72]">
        <TrendingUp size={36} strokeWidth={1.7} />
      </div>

      <span className="absolute bottom-[1%] left-[26%] rounded-full bg-[#063B72] px-3 py-1.5 text-[10px] font-extrabold text-white">
        NEXT STEP ↗
      </span>
    </div>
  );
}

/* =========================================
   SERVICES DATA
========================================= */

const services = [
  {
    id: "01",
    label: "COUNTRY & COURSE SELECTION",
    title: "Find the Right Country. Choose the Right Course.",
    description:
      "With so many destinations, universities and programmes, choosing the right fit can feel overwhelming. Explore options that match your academic background, interests, budget and career goals.",
    href: "/universities",
    background: "#003973",
    Illustration: CountryIllustration,
    large: true,
  },
  {
    id: "02",
    label: "SCHOLARSHIPS & EDUCATION LOANS",
    title: "Make Your Study Abroad Plans Affordable.",
    description:
      "Tuition and living costs add up. Discover scholarships and education loans that suit your profile and help make your study plans more realistic.",
    href: "/funding",
    background: "#18B8B5",
    Illustration: FundingIllustration,
    large: false,
  },
  {
    id: "03",
    label: "ADMISSIONS & VISA PROCESS",
    title: "Applications, Documents & Visa Support.",
    description:
      "From university applications and SOPs to supporting documents and visa formalities, get guidance to prepare your application and avoid common mistakes.",
    href: "/admissions",
    background: "#0C9253",
    Illustration: VisaIllustration,
    large: false,
  },
  {
    id: "04",
    label: "POST-STUDY WORK OPPORTUNITIES",
    title: "Your Degree Is Just the Beginning.",
    description:
      "Explore job-market opportunities, post-study work rules and the skills employers value. Plan your education around your long-term career goals.",
    href: "/career-guidance",
    background: "#FF967A",
    Illustration: CareerIllustration,
    large: true,
  },
];

/* =========================================
   SERVICE CARD COMPONENT
========================================= */

function ServiceCard({ service }) {
  const Illustration = service.Illustration;
  const large = service.large;

  return (
    <article style={{ backgroundColor: service.background }} className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] p-5 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${large ? "lg:p-7" : "lg:p-6"}`}>

      {/* CARD NUMBER */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-extrabold tracking-[0.12em] text-white/90">
          {service.id} / 04
        </span>

        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
          <ArrowUpRight size={18} />
        </span>
      </div>

      {/* CARD LAYOUT */}
      <div className={`flex flex-1 gap-3 ${large ? "flex-col lg:flex-row lg:items-center lg:gap-7" : "flex-col"}`}>

        {/* SMALL CARDS - ICONS AT TOP */}
        {!large && (
          <div className="w-full shrink-0 pt-2">
            <Illustration />
          </div>
        )}

        {/* CARD CONTENT */}
        <div className={`flex min-w-0 flex-1 flex-col justify-center ${large ? "lg:max-w-[65%]" : ""}`}>

          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/90 sm:text-[11px]">
            {service.label}
          </p>

          <h3 className={`font-extrabold leading-[1.15] tracking-[-0.035em] ${large ? "text-[23px] sm:text-[26px] lg:text-[30px]" : "text-[21px] sm:text-[23px]"}`}>
            {service.title}
          </h3>

          <p className="mt-2 text-[12px] leading-[1.6] text-white/95 sm:text-[13px]">
            {service.description}
          </p>

          <Link href={service.href} className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[12px] font-bold text-[#063B72] transition-all duration-300 group-hover:gap-3">
            Explore Now
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* LARGE CARDS - ICONS AT RIGHT ON DESKTOP */}
        {large && (
          <div className="w-full shrink-0 lg:w-[32%]">
            <Illustration />
          </div>
        )}

      </div>
    </article>
  );
}

/* =========================================
   MAIN SECTION
========================================= */

export default function NextChapter() {
  return (
    <section aria-labelledby="next-chapter-title" className="w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="mb-6 flex flex-col gap-2 lg:mb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#18B8B5]">
              SUPPORT AT EVERY STEP
            </p>

            <h2 id="next-chapter-title" className="max-w-[800px] text-[29px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#063B72] sm:text-[37px] lg:text-[43px]">
              Your Next Chapter,{" "}
              <span className="text-[#18B8B5]">
                Made Simpler.
              </span>
            </h2>
          </div>

          <p className="max-w-[380px] text-[13px] leading-[1.6] text-[#516477] sm:text-[14px]">
            From choosing the right course to funding, applications,
            and your future career — find support at every step.
          </p>
        </div>

        {/* RESPONSIVE BENTO GRID */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">

          {/* 01 - COUNTRY & COURSE SELECTION - LARGE */}
          <div className="sm:col-span-2">
            <ServiceCard service={services[0]} />
          </div>

          {/* 02 - SCHOLARSHIPS & EDUCATION LOANS - SMALL */}
          <div className="sm:col-span-1">
            <ServiceCard service={services[1]} />
          </div>

          {/* 03 - ADMISSIONS & VISA PROCESS - SMALL */}
          <div className="sm:col-span-1">
            <ServiceCard service={services[2]} />
          </div>

          {/* 04 - POST-STUDY WORK OPPORTUNITIES - LARGE */}
          <div className="sm:col-span-2">
            <ServiceCard service={services[3]} />
          </div>

        </div>
      </div>
    </section>
  );
}

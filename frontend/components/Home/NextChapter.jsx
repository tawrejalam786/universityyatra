
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
   ILLUSTRATIONS
========================================= */

function CountryIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[85px] w-[165px] xl:h-[95px] xl:w-[180px]">
      <div className="absolute left-1/2 top-1/2 grid h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 xl:h-[84px] xl:w-[84px]">
        <Globe2 size={53} strokeWidth={1.3} className="text-white" />
      </div>

      <span className="absolute left-0 top-1 grid h-8 w-8 -rotate-12 place-items-center rounded-xl bg-white text-[#3768D9]">
        <Plane size={18} />
      </span>

      <span className="absolute right-0 top-0 grid h-8 w-8 rotate-12 place-items-center rounded-xl bg-[#D9F77B] text-[#063B72]">
        <BookOpen size={18} />
      </span>

      <span className="absolute bottom-0 right-4 grid h-8 w-8 -rotate-6 place-items-center rounded-xl bg-white text-[#3768D9]">
        <MapPin size={18} />
      </span>
    </div>
  );
}

function FundingIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[90px] w-[180px]">
      <div className="absolute left-1 top-2 flex w-[120px] -rotate-6 flex-col gap-1.5 rounded-xl bg-white p-2 shadow-[0_4px_0_rgba(6,59,114,0.1)]">
        <div className="flex items-center gap-1.5">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[#DFF5EF] text-[#087E65]">
            <GraduationCap size={15} />
          </span>
          <span className="text-[9px] font-extrabold text-[#063B72]">
            Scholarship
          </span>
        </div>

        <div className="h-1.5 w-[85%] rounded-full bg-[#E7EDF4]" />
        <div className="h-1.5 w-[60%] rounded-full bg-[#E7EDF4]" />

        <div className="flex items-center gap-1 text-[8px] font-bold text-[#087E65]">
          <Check size={10} />
          Eligible options
        </div>
      </div>

      <span className="absolute right-0 top-1 grid h-11 w-11 rotate-12 place-items-center rounded-xl bg-[#063B72] text-white">
        <Wallet size={23} />
      </span>

      <span className="absolute bottom-0 right-4 grid h-10 w-10 -rotate-12 place-items-center rounded-full bg-[#FFF1C7] text-[#063B72]">
        <Coins size={21} />
      </span>
    </div>
  );
}

function VisaIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[90px] w-[180px]">
      <div className="absolute left-1 top-2 w-[108px] rotate-[-8deg] rounded-xl bg-white p-2 shadow-[0_4px_0_rgba(6,59,114,0.1)]">
        <div className="mb-2 flex items-center justify-between">
          <FileText size={17} className="text-[#063B72]" />
          <BadgeCheck size={17} className="text-[#0C9253]" />
        </div>

        <div className="mb-1.5 h-1.5 w-full rounded-full bg-[#E7EDF4]" />
        <div className="mb-1.5 h-1.5 w-[75%] rounded-full bg-[#E7EDF4]" />
        <div className="h-1.5 w-[55%] rounded-full bg-[#E7EDF4]" />
      </div>

      <div className="absolute right-3 top-0 grid h-[72px] w-[53px] rotate-12 place-items-center rounded-lg border border-white/50 bg-[#063B72] text-white">
        <div className="flex flex-col items-center gap-1">
          <Globe2 size={20} />
          <span className="text-[7px] font-extrabold">PASSPORT</span>
          <Plane size={15} />
        </div>
      </div>

      <span className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full bg-[#FFD36E] text-[#063B72]">
        <FileCheck2 size={17} />
      </span>

      <span className="absolute bottom-0 left-2 grid h-8 w-8 place-items-center rounded-lg bg-white text-[#F47B59]">
        <Stamp size={17} />
      </span>
    </div>
  );
}

function CareerIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[85px] w-[165px] xl:h-[95px] xl:w-[180px]">
      <div className="absolute left-2 top-1 grid h-[65px] w-[65px] -rotate-6 place-items-center rounded-[17px] bg-white text-[#8E4AB2]">
        <BriefcaseBusiness size={35} strokeWidth={1.5} />
      </div>

      <div className="absolute right-2 top-3 grid h-[56px] w-[56px] rotate-12 place-items-center rounded-[16px] bg-[#DDF67C] text-[#063B72]">
        <TrendingUp size={29} />
      </div>

      <span className="absolute bottom-0 left-[27%] rounded-full bg-[#063B72] px-2.5 py-1 text-[8px] font-extrabold text-white">
        NEXT STEP ↗
      </span>
    </div>
  );
}

/* =========================================
   SERVICE CONTENT
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
    background: "#FF967A",
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
    background: "#18B8B5",
    Illustration: CareerIllustration,
    large: true,
  },
];

/* =========================================
   RESPONSIVE SERVICE CARD
========================================= */

function ServiceCard({ service }) {
  const Illustration = service.Illustration;
  const large = service.large;

  return (
    <article style={{ backgroundColor: service.background }} className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[19px] p-4 text-white lg:p-[18px]">

      {/* TOP ROW */}
      <div className="flex shrink-0 items-center justify-between">
        <span className="text-[10px] font-extrabold tracking-[0.1em] text-white/90">
          {service.id} / 04
        </span>

        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
          <ArrowUpRight size={15} />
        </span>
      </div>

      {/* MAIN LAYOUT */}
      <div className={`flex min-h-0 flex-1 gap-2 ${large ? "flex-col lg:flex-row lg:items-center lg:justify-between" : "flex-col lg:justify-center"}`}>

        {/* SMALL CARD ILLUSTRATION */}
        {!large && (
          <div className="shrink-0 py-1 lg:py-0">
            <Illustration />
          </div>
        )}

        {/* TEXT */}
        <div className={`flex min-w-0 flex-col justify-center ${large ? "lg:max-w-[69%]" : ""}`}>

          <p className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.08em] text-white/90">
            {service.label}
          </p>

          <h3 className={`font-extrabold leading-[1.13] tracking-[-0.025em] ${large ? "text-[20px] lg:text-[21px] xl:text-[23px]" : "text-[18px] lg:text-[19px] xl:text-[20px]"}`}>
            {service.title}
          </h3>

          <p className="mt-1.5 text-[11px] leading-[1.45] text-white/95 lg:text-[11px] xl:text-[12px]">
            {service.description}
          </p>

        </div>

        {/* LARGE CARD ILLUSTRATION */}
        {large && (
          <div className="shrink-0 lg:w-[28%]">
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
    <section aria-labelledby="next-chapter-title" className="relative w-full overflow-hidden bg-white py-6 lg:py-5">

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-6">

        {/* HEADER */}
        <div className="mb-4 flex flex-col gap-2 lg:mb-4 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#18B8B5]">
              SUPPORT AT EVERY STEP
            </p>

            <h2 id="next-chapter-title" className="text-[25px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#063B72] sm:text-[30px] lg:text-[34px]">
              Your Next Chapter,{" "}
              <span className="text-[#18B8B5]">
                Made Simpler.
              </span>
            </h2>
          </div>

          <p className="max-w-[320px] text-[11px] leading-[1.45] text-[#516477] lg:text-[12px]">
            From choosing the right course to funding, applications,
            and your future career — find support at every step.
          </p>

        </div>

        {/* VIEWPORT-ADAPTIVE GRID */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:h-[min(650px,calc(100svh-195px))] lg:min-h-[470px] lg:grid-rows-2">

          {/* 01 - LARGE */}
          <div className="min-w-0 sm:col-span-2">
            <ServiceCard service={services[0]} />
          </div>

          {/* 02 - SMALL */}
          <div className="min-w-0 sm:col-span-1">
            <ServiceCard service={services[1]} />
          </div>

          {/* 03 - SMALL */}
          <div className="min-w-0 sm:col-span-1">
            <ServiceCard service={services[2]} />
          </div>

          {/* 04 - LARGE */}
          <div className="min-w-0 sm:col-span-2">
            <ServiceCard service={services[3]} />
          </div>

        </div>

      </div>
    </section>
  );
}

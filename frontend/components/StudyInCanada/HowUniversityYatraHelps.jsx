"use client";

import Image from "next/image";

const helpItems = [
  {
    number: "01",
    title: "Providing one-on-one personalised counselling",
    image: "/images/study-canada/customer-support.png",
    accent: "#0F8B83",
    soft: "#EAF8F7",
  },
  {
    number: "02",
    title: "Comparing multiple Canadian courses and universities",
    image: "/images/study-canada/canadian-flag.png",
    accent: "#2563EB",
    soft: "#EEF4FF",
  },
  {
    number: "03",
    title: "Explaining tuition fees, living costs, and intakes",
    image: "/images/study-canada/gold-coins.png",
    accent: "#14B8A6",
    soft: "#EAFBF8",
  },
  {
    number: "04",
    title: "Guiding through admission and documentation",
    image: "/images/study-canada/education-graduation.webp",
    accent: "#F59E0B",
    soft: "#FFF7E8",
  },
  {
    number: "05",
    title: "Supporting student application for Canada",
    image: "/images/study-canada/documentation-approval.webp",
    accent: "#EC4899",
    soft: "#FFF0F6",
  },
];

export default function HowUniversityYatraHelps() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-11 sm:py-14 md:py-16 lg:py-[68px]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-[280px] w-[280px] rounded-full bg-[#18B8B5]/[0.06] blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#063B72]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-5 lg:px-6">

        {/* HEADING */}
        <div className="mb-8 text-center md:mb-10 lg:mb-12">
          <h2 className="text-[29px] font-bold leading-[1.12] tracking-[-0.035em] text-[#063B72] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            How <span className="text-[#18B8B5]">University Yatra™</span> Helps You
          </h2>

          <div className="mx-auto mt-4 flex w-fit items-center gap-1.5">
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]/70" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]/40" />
            <span className="h-[4px] w-20 rounded-full bg-[#063B72]" />
          </div>
        </div>

        {/* MOBILE SWIPE CARDS */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
          {helpItems.map((item) => (
            <HelpCard key={item.number} item={item} mobile />
          ))}
        </div>

        {/* DESKTOP / TABLET GRID */}
        <div className="hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {helpItems.map((item) => (
            <HelpCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HelpCard({ item, mobile = false }) {
  return (
    <article className={`${mobile ? "w-[82vw] max-w-[320px] shrink-0 snap-start" : "w-full"} group relative overflow-hidden rounded-[24px] border border-[#E2E8EF] bg-white p-5 shadow-[0_12px_32px_rgba(6,59,114,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(6,59,114,0.12)]`}>
      
      {/* TOP ACCENT */}
      <div className="absolute left-0 right-0 top-0 h-[4px]" style={{ backgroundColor: item.accent }} />

      {/* NUMBER */}
      <div className="mb-3 flex justify-end">
        <span className="flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[10px] font-bold" style={{ backgroundColor: item.soft, color: item.accent }}>
          {item.number}
        </span>
      </div>

      {/* 3D ICON */}
      <div className="mx-auto flex h-[128px] w-[128px] items-center justify-center overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_12px_30px_rgba(6,59,114,0.08)] sm:h-[135px] sm:w-[135px] lg:h-[125px] lg:w-[125px]">
        <Image src={item.image} alt={item.title} width={520} height={520} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
      </div>

      {/* TITLE */}
      <div className="mt-5 text-center">
        <h3 className="text-[16px] font-bold leading-[1.45] text-[#063B72] sm:text-[17px] lg:text-[16px] xl:text-[17px]">
          {item.title}
        </h3>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="mx-auto mt-5 h-[4px] w-12 rounded-full transition-all duration-300 group-hover:w-16" style={{ backgroundColor: item.accent }} />
    </article>
  );
}
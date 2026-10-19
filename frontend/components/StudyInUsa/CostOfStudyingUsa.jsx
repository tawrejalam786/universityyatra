
"use client";

import {
  Award,
  BookOpen,
  CircleDollarSign,
  GraduationCap,
  House,
  WalletCards,
} from "lucide-react";

/* =========================================
   USA COST DATA - CONTENT UNCHANGED
========================================= */

const tuitionFees = [
  {
    title: "PG Diploma, Diploma & Certificate Program",
    price: "USD —",
    icon: Award,
  },
  {
    title: "Bachelor’s",
    price: "USD —",
    icon: GraduationCap,
  },
  {
    title: "Master’s",
    price: "USD —",
    icon: BookOpen,
  },
];

const livingExpenses = [
  {
    title: "Average",
    price: "USD —",
    icon: WalletCards,
  },
];

const accommodationCosts = [
  {
    title: "On-Campus",
    price: "USD —",
    icon: House,
  },
  {
    title: "Off-Campus",
    price: "USD —",
    icon: House,
  },
  {
    title: "Rentals / Homestays",
    price: "USD —",
    icon: House,
  },
];

/* =========================================
   EUROPE REFERENCE CARD THEMES
========================================= */

const cardThemes = {
  purple: {
    cardClass: "bg-[#7254D8] text-white",
    iconClass: "bg-[#5D43C1] text-white",
    dotClass: "bg-[#5D43C1]",
  },
  pink: {
    cardClass: "bg-[#E72D82] text-white",
    iconClass: "bg-[#C91E6C] text-white",
    dotClass: "bg-[#C91E6C]",
  },
  yellow: {
    cardClass: "bg-[#FFC52E] text-[#263238]",
    iconClass: "bg-[#E3A900] text-[#263238]",
    dotClass: "bg-[#E3A900]",
  },
};

/* =========================================
   MAIN SECTION
========================================= */

export default function CostOfStudyingUSA() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20">

      {/* AMBIENT BACKGROUND GLOWS */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[10%] -z-10 h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-[#1765F5]/[0.035] blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[180px] top-[20%] -z-10 h-[450px] w-[450px] rounded-full bg-[#5D93F8]/[0.03] blur-[110px]" />

      {/* RIGHT SIDE OUTLINE */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[230px] top-[34%] -z-10 h-[420px] w-[420px] rounded-full border border-[#A2C1FB]/30 sm:-right-[200px] sm:h-[480px] sm:w-[480px]" />

      {/* LEFT SIDE OUTLINE */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[240px] top-[45%] -z-10 h-[400px] w-[400px] rounded-full border border-[#A2C1FB]/30 sm:-left-[210px] sm:h-[460px] sm:w-[460px]" />

      {/* LEFT DOT PATTERN */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-2 top-[42%] -z-10 hidden h-[120px] w-[145px] opacity-25 md:block" style={{ backgroundImage: "radial-gradient(circle, #A2C1FB 1.5px, transparent 1.5px)", backgroundSize: "23px 23px" }} />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-[760px] text-center">

          <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#0C337B] sm:text-[40px] md:text-[48px]">
            Cost Of Studying{" "}
            <span className="text-[#1765F5]">in USA</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[14px] leading-[1.75] text-[#526B8C] sm:text-[15px] md:text-[16px]">
            The cost of studying in the USA for international students depends on several factors, including the university, program of study, location, and available scholarships or financial aid. Living expenses such as accommodation, transportation, utilities, and personal expenses also contribute to the overall cost of studying in the United States.
          </p>

        </div>

        {/* STACKED CARDS */}
        <div className="mx-auto max-w-[900px]">
          <div className="relative flex flex-col items-center">

            {/* PURPLE CARD */}
            <CostStackCard
              title="Tuition Fees"
              subtitle="Average per annum"
              color="purple"
              rotate="-rotate-2"
              icon={CircleDollarSign}
              items={tuitionFees}
            />

            {/* PINK CARD */}
            <CostStackCard
              title="Living Expenses"
              subtitle="Annual"
              color="pink"
              rotate="rotate-1"
              icon={WalletCards}
              items={livingExpenses}
            />

            {/* YELLOW CARD */}
            <CostStackCard
              title="Accommodation Costs"
              subtitle="Annual"
              color="yellow"
              rotate="-rotate-1"
              icon={House}
              items={accommodationCosts}
            />

          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================================
   STACKED CARD
========================================= */

function CostStackCard({
  title,
  subtitle,
  color,
  rotate,
  icon: Icon,
  items,
}) {
  const theme = cardThemes[color];

  const spacingClass =
    color === "pink" || color === "yellow"
      ? "-mt-3 sm:-mt-5"
      : "";

  return (
    <div className={`group relative w-[96%] rounded-[22px] px-5 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-500 hover:z-30 hover:-translate-y-2 hover:rotate-0 sm:w-[92%] sm:rounded-[26px] sm:px-7 sm:py-6 lg:w-[86%] lg:px-9 lg:py-7 ${theme.cardClass} ${rotate} ${spacingClass}`}>

      {/* FLOATING ICON */}
      <div className={`absolute -right-4 top-5 flex h-10 w-10 items-center justify-center rounded-full shadow-lg sm:-right-5 sm:h-12 sm:w-12 ${theme.iconClass}`}>
        <Icon size={19} strokeWidth={2} />
      </div>

      {/* CARD HEADER */}
      <div className="relative z-10 pr-10">

        <p className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-80 sm:text-[11px]">
          {subtitle}
        </p>

        <h3 className="mt-1 text-[21px] font-extrabold leading-tight sm:text-[25px] md:text-[28px]">
          {title}
        </h3>

      </div>

      {/* CARD ITEMS */}
      <div className="relative z-10 mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">

        {items.map((item) => (
          <CostItem
            key={item.title}
            title={item.title}
            price={item.price}
            icon={item.icon}
            darkText={color === "yellow"}
          />
        ))}

      </div>

      {/* DECORATIVE DOT */}
      <span className={`absolute -left-2 bottom-4 h-2 w-2 rounded-full sm:-left-3 ${theme.dotClass}`} />

    </div>
  );
}

/* =========================================
   COST ITEM
========================================= */

function CostItem({
  title,
  price,
  icon: Icon,
  darkText = false,
}) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-[13px] bg-black/[0.10] px-3 py-3 backdrop-blur-sm">

      {/* ICON */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/20">
        <Icon size={17} className={darkText ? "text-[#263238]" : "text-white"} strokeWidth={2} />
      </div>

      {/* TEXT */}
      <div className="min-w-0">

        <p className={`text-[11px] font-semibold leading-tight sm:text-[12px] ${darkText ? "text-[#263238]" : "text-white"}`}>
          {title}
        </p>

        <p className={`mt-1 text-[12px] font-extrabold leading-tight sm:text-[13px] ${darkText ? "text-[#263238]" : "text-white"}`}>
          {price}
        </p>

      </div>

    </div>
  );
}

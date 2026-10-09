
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
   Ireland COST DATA - CONTENT UNCHANGED
========================================= */

const tuitionFees = [
  {
    title: "PG Diploma, Diploma & Certificate Program",
    price: "€ —",
    icon: Award,
  },
  {
    title: "Bachelor’s",
    price: "€10,000 – €20,000",
    icon: GraduationCap,
  },
  {
    title: "Master’s",
    price: "€12,000 – €25,000",
    icon: BookOpen,
  },
];

const livingExpenses = [
  {
    title: "Average",
    price: "€10,000 – €20,000",
    icon: WalletCards,
  },
];

const accommodationCosts = [
  {
    title: "On-Campus",
    price: "€6,000 – €12,000",
    icon: House,
  },
  {
    title: "Off-Campus",
    price: "€7,000 – €18,000",
    icon: House,
  },
  {
    title: "Rentals / Homestays",
    price: "€8,000 – €18,000",
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

export default function CostOfStudyingIreland() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#031126] py-14 sm:py-16 lg:py-20">

      {/* DARK NAVY BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_10%,#09254B_0%,#06182F_42%,#020B1C_100%)]" />

      {/* TOP LEFT BLUE GLOW */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[110px] -top-[150px] -z-10 h-[280px] w-[280px] rounded-full bg-[#0864C0]/20 blur-[75px]" />

      {/* TOP RIGHT BLUE GLOW */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[180px] -top-[170px] -z-10 h-[450px] w-[450px] rounded-full bg-[#07458C]/15 blur-[110px]" />

      {/* RIGHT SIDE OUTLINE */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[230px] top-[34%] -z-10 h-[420px] w-[420px] rounded-full border border-[#0967C5]/35 sm:-right-[200px] sm:h-[480px] sm:w-[480px]" />

      {/* LEFT SIDE OUTLINE */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[240px] top-[45%] -z-10 h-[400px] w-[400px] rounded-full border border-[#0967C5]/35 sm:-left-[210px] sm:h-[460px] sm:w-[460px]" />

      {/* LEFT DOT PATTERN */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-2 top-[42%] -z-10 hidden h-[120px] w-[145px] opacity-45 md:block" style={{ backgroundImage: "radial-gradient(circle, #1376CF 1.5px, transparent 1.5px)", backgroundSize: "23px 23px" }} />

      {/* CENTER BLUE GLOW */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#0B3770]/15 blur-[120px]" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-[760px] text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#18B8B5]/30 bg-[#18B8B5]/10 px-4 py-2">
            <CircleDollarSign size={15} className="text-[#18B8B5]" strokeWidth={2} />

            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#53D8D2]">
              Study Cost
            </span>
          </div>

          <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-[40px] md:text-[48px]">
            Cost Of Studying{" "}
            <span className="text-[#18B8B5]">in Ireland</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[14px] leading-[1.75] text-[#A9BAC8] sm:text-[15px] md:text-[16px]">
           The cost of studying varies based on program, city, and university. Below is an approximate breakdown to help plan your study budget.
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

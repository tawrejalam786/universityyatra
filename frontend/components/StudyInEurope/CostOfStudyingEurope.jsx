"use client";

import { Award, BookOpen, CircleDollarSign, GraduationCap, House, WalletCards } from "lucide-react";

const tuitionFees = [
  {
    title: "PG Diploma, Diploma & Certificate Program",
    price: "CAD 15,000 – 20,000",
    icon: Award,
  },
  {
    title: "Bachelor’s",
    price: "CAD 15,000 – 30,000",
    icon: GraduationCap,
  },
  {
    title: "Master’s",
    price: "CAD 17,000 – 35,000",
    icon: BookOpen,
  },
];

const livingExpenses = [
  {
    title: "Average",
    price: "CAD 15,000 – 25,000",
    icon: WalletCards,
  },
];

const accommodationCosts = [
  {
    title: "On-Campus",
    price: "CAD 6,000 – 12,000",
    icon: House,
  },
  {
    title: "Off-Campus",
    price: "CAD 7,000 – 18,000",
    icon: House,
  },
  {
    title: "Rentals / Homestays",
    price: "CAD 8,000 – 14,000",
    icon: House,
  },
];

export default function CostOfStudyingCanada() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F7FB] py-11 sm:py-14 md:py-16 lg:py-[68px]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-[280px] w-[280px] rounded-full bg-[#18B8B5]/[0.07] blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#063B72]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 px-4 sm:px-5 md:gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:px-6">

        {/* LEFT CONTENT */}
        <div className="max-w-[560px] lg:sticky lg:top-24">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#18B8B5]/20 bg-[#18B8B5]/10 px-3.5 py-2">
            <CircleDollarSign size={15} className="text-[#18B8B5]" strokeWidth={2.2} />

            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F8F8C]">
              Study Cost
            </span>
          </div>

          <h2 className="max-w-[530px] text-[31px] font-bold leading-[1.08] tracking-[-0.035em] text-[#063B72] sm:text-[36px] md:text-[42px] lg:text-[47px]">
            Cost Of Studying <span className="text-[#18B8B5]">in Canada</span>
          </h2>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-[4px] w-2 rounded-full bg-[#18B8B5]" />
            <span className="h-[4px] w-2 rounded-full bg-[#18B8B5]/70" />
            <span className="h-[4px] w-2 rounded-full bg-[#18B8B5]/40" />
            <span className="h-[4px] w-20 rounded-full bg-[#063B72]" />
          </div>

          <p className="mt-6 text-[14px] leading-[1.75] text-[#526477] sm:text-[15px] md:text-[16px]">
            The cost of studying in Canada for international students depends on several factors, including the institution, program of study, location, and available funding opportunities. Additionally, living expenses such as rent, utilities, and recreational activities play a significant role in the overall cost.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full space-y-5">

          {/* TUITION FEES */}
          <CostGroup title="Tuition Fees" subtitle="Average per annum" icon={CircleDollarSign}>
            {tuitionFees.map((item) => (
              <CostCard key={item.title} item={item} />
            ))}
          </CostGroup>

          {/* LIVING EXPENSES */}
          <CostGroup title="Living Expenses" subtitle="Annual" icon={WalletCards}>
            {livingExpenses.map((item) => (
              <CostCard key={item.title} item={item} />
            ))}
          </CostGroup>

          {/* ACCOMMODATION */}
          <CostGroup title="Accommodation Costs" subtitle="Annual" icon={House}>
            {accommodationCosts.map((item) => (
              <CostCard key={item.title} item={item} />
            ))}
          </CostGroup>
        </div>
      </div>
    </section>
  );
}

function CostGroup({ title, subtitle, icon: Icon, children }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#DDE7EF] bg-white shadow-[0_10px_32px_rgba(6,59,114,0.06)]">

      {/* GROUP HEADER */}
      <div className="flex items-center justify-between gap-4 border-b border-[#E8EEF3] bg-[#FBFDFE] px-4 py-4 sm:px-5 md:px-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A98A7]">
            {title}
          </p>

          <h3 className="mt-1 text-[18px] font-bold text-[#063B72] sm:text-[20px]">
            {subtitle}
          </h3>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#18B8B5]/10 text-[#18B8B5]">
          <Icon size={21} strokeWidth={2.1} />
        </div>
      </div>

      {/* ITEMS */}
      <div className="divide-y divide-[#EDF2F5]">
        {children}
      </div>
    </div>
  );
}

function CostCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative px-4 py-4 transition-colors duration-300 hover:bg-[#F8FCFC] sm:px-5 md:px-6">
      <div className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full bg-[#18B8B5] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <div className="flex min-w-0 items-center gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#F0F8F8] text-[#18B8B5]">
            <Icon size={19} strokeWidth={2} />
          </div>

          <p className="text-[14px] font-semibold leading-[1.45] text-[#40556A] sm:text-[15px]">
            {item.title}
          </p>
        </div>

        <p className="pl-[54px] text-[15px] font-bold leading-[1.4] text-[#063B72] sm:shrink-0 sm:pl-0 sm:text-right sm:text-[16px] md:text-[17px]">
          {item.price}
        </p>
      </div>
    </div>
  );
}
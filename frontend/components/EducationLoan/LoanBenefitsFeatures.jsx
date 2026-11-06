"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  BookOpenCheck,
  ShieldCheck,
  Receipt,
  Banknote,
  FileCheck2,
  Building2,
  CreditCard,
  Percent,
  LockKeyhole,
  Clock3,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

/* ==========================================
   BRAND COLOR FAMILY  (main brand: #1765F5)
   Each tab gets a shade close to the brand blue:
   c = main accent, t = light tint, d = dark text shade
   ========================================== */

const NAVY = "#0C337B";

const TABS = [
  {
    id: "01",
    key: "benefits",
    title: "Loan Benefits",
    short: "Loan Benefits",
    eyebrow: "LOAN BENEFITS",
    icon: Wallet,
    color: { c: "#1765F5", t: "#EAF2FF", b: "#CFE0FF" }, // brand blue
    sections: [
      {
        title: "Easy EMIs",
        icon: Banknote,
        description: "Repay your loan through pocket-friendly EMIs.",
      },
      {
        title: "Processing & Approval",
        icon: FileCheck2,
        points: [
          "Transparent process without any hidden fees.",
          "Minimal documents required for loan processing.",
          "Funds are credited directly to an institution's account based on the fee structure.",
        ],
      },
      {
        title: "Range of Institutions",
        icon: Building2,
        wide: true,
        description:
          "Coverage for over 2100 universities across 35+ countries. 950 courses covered, including:",
        chips: [
          "Executive Management Courses (Working Executives)",
          "MS",
          "MBA",
          "MBBS/MD – Only India Colleges",
        ],
      },
    ],
  },
  {
    id: "02",
    key: "details",
    title: "Loan Details",
    short: "Loan Details",
    eyebrow: "LOAN DETAILS",
    icon: BookOpenCheck,
    color: { c: "#5B5FEF", t: "#EEEFFF", b: "#D6D8FF" }, // indigo-blue
    sections: [
      {
        title: "Amount and Tenure",
        icon: CreditCard,
        points: [
          "We cover full education costs with no limit if collateral is provided. Unsecured loans are available up to ₹45 lakh.",
          "Flexible tenure up to 14 years including moratorium.",
        ],
      },
      {
        title: "Interest Rate",
        icon: Percent,
        points: [
          "The rate of interest will be the floating rate linked to HDFC Credila's Benchmark Lending Rate (CBLR).",
          "Interest will be computed at a simple interest rate.",
          "The floating interest rate will be (HDFC Credila's CBLR + spread) % per annum.",
          "A spread is determined based on the case's risk profile, which depends on the student's academic background, employability of the chosen course, co-borrower's financial strength, loan repayment ability, credit history, collateral, branch network serviceability, and underwriting and servicing costs.",
        ],
      },
    ],
  },
  {
    id: "03",
    key: "collateral",
    title: "Collateral & Moratorium",
    short: "Collateral & Moratorium",
    eyebrow: "COLLATERAL & MORATORIUM",
    icon: ShieldCheck,
    color: { c: "#0A93D8", t: "#E6F6FF", b: "#C4E8FB" }, // sky blue
    sections: [
      {
        title: "Collateral Options",
        icon: LockKeyhole,
        points: [
          "Fixed deposits with HDFC Bank or HDFC Ltd on immovable assets like house, flat, bungalow, shop.",
          "You can use your fixed deposits, insurance policies, select mutual funds, or NSC/KVP as collateral for a loan.",
        ],
      },
      {
        title: "Moratorium",
        icon: Clock3,
        points: [
          "It refers to the course period plus one year or six months after securing a job, whichever comes first; as specified by the bank (as in the Schedule Cum Key Fact sheet).",
          "The Principal Moratorium covers only repaying the loan's principal amount, while the interest moratorium covers both the principal and interest payments.",
        ],
      },
    ],
  },
  {
    id: "04",
    key: "fees",
    title: "Fees and Charges",
    short: "Fees & Charges",
    eyebrow: "FEES & CHARGES",
    icon: Receipt,
    color: { c: "#0E8FA8", t: "#E5F7FA", b: "#C2EAF1" }, // cyan-blue
    intro: "The HDFC Education Loan for Foreign Education Rates & Fees are as follows:",
    fees: [
      { label: "Pre-payment charges", value: "NIL" },
      { label: "No Objection Certificate (NOC)", value: "NIL" },
      {
        label: "Delayed Payment Charges *",
        value: "@ 2 % per month of instalment ( MI/PMII) + applicable taxes thereon",
      },
      {
        label: "Cheque or ACH mandate or Direct Debit swapping charges *",
        value: "Up to ₹500/- per swap instance plus applicable taxes thereon",
      },
    ],
  },
];

/* ==========================================
   SMALL COMPONENTS
   (all colors come from CSS vars --c / --t / --b
    set on the right panel, so they follow the active tab)
   ========================================== */

function CheckList({ points }) {
  return (
    <ul className="space-y-1.5">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle2
            size={14}
            strokeWidth={2}
            className="mt-[3px] shrink-0 text-[var(--c)]"
          />
          <span className="text-[11.5px] leading-[1.6] text-[#526B8C] sm:text-[12px]">
            {point}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SectionCard({ section }) {
  const Icon = section.icon;

  return (
    <div
      className={`rounded-2xl border border-[var(--b)] bg-white/85 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--c)] hover:shadow-md sm:p-4 ${
        section.wide ? "md:col-span-2" : ""
      }`}
    >
      <div className="mb-2.5 flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--t)] text-[var(--c)]">
          <Icon size={17} />
        </div>
        <h4
          className="text-[13px] font-extrabold leading-tight sm:text-[14px]"
          style={{ color: NAVY }}
        >
          {section.title}
        </h4>
      </div>

      {section.description && (
        <p className="text-[11.5px] leading-[1.6] text-[#526B8C] sm:text-[12px]">
          {section.description}
        </p>
      )}

      {section.chips && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {section.chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--b)] bg-[var(--t)] px-2.5 py-1.5 text-[10.5px] font-semibold sm:text-[11px]"
              style={{ color: NAVY }}
            >
              <CheckCircle2 size={12} className="shrink-0 text-[var(--c)]" />
              {chip}
            </span>
          ))}
        </div>
      )}

      {section.points && <CheckList points={section.points} />}
    </div>
  );
}

function FeesGrid({ tab }) {
  return (
    <div>
      <p className="mb-3 text-[11.5px] leading-[1.6] text-[#526B8C] sm:text-[12px]">
        {tab.intro}
      </p>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {tab.fees.map((fee) => (
          <div
            key={fee.label}
            className="rounded-2xl border border-[var(--b)] bg-white/85 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--c)] hover:shadow-md"
          >
            <div className="mb-1.5 flex items-start gap-2">
              <CheckCircle2
                size={15}
                className="mt-[2px] shrink-0 text-[var(--c)]"
              />
              <h4
                className="text-[12px] font-extrabold leading-snug sm:text-[13px]"
                style={{ color: NAVY }}
              >
                {fee.label}
              </h4>
            </div>
            <p
              className={`pl-[23px] text-[11.5px] leading-[1.6] sm:text-[12px] ${
                fee.value === "NIL"
                  ? "font-extrabold text-[var(--c)]"
                  : "font-medium text-[#526B8C]"
              }`}
            >
              {fee.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CtaCard({ onBookCounselling, className = "" }) {
  return (
    <div
      className={`rounded-2xl p-4 text-white sm:p-5 ${className}`}
      style={{ background: `linear-gradient(135deg, ${NAVY}, #1765F5)` }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-[16px] font-extrabold leading-tight">
            Need Help With Your Education Loan?
          </h3>
          <p className="mt-1 text-[12px] text-white/75">
            Get expert guidance for your future.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onBookCounselling?.()}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-[12px] font-bold transition-all hover:bg-[#EAF2FF] hover:text-[#1765F5] sm:text-[13px]"
          style={{ color: NAVY }}
        >
          Book Free Consultation
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
   ========================================== */

export default function LoanBenefitsFeatures({ onBookCounselling }) {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const ActiveIcon = activeTab.icon;

  const panelVars = {
    "--c": activeTab.color.c,
    "--t": activeTab.color.t,
    "--b": activeTab.color.b,
    background: `linear-gradient(135deg, #FFFFFF 0%, ${activeTab.color.t} 100%)`,
    borderColor: activeTab.color.b,
  };

  return (
    <section
      id="loan-benefits-features"
      className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#1765F5]/5 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#0C337B]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-center sm:mb-6"
        >
          <span className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-[#1765F5]/20 bg-[#EAF2FF] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1765F5] sm:px-4 sm:text-[11px] sm:tracking-[0.16em]">
            <GraduationCap size={15} />
            EDUCATION LOAN BENEFITS &amp; FEATURES
          </span>

          <h2
            className="mx-auto max-w-[800px] text-[24px] font-extrabold leading-[1.2] tracking-[-0.035em] sm:text-[32px] lg:text-[36px]"
            style={{ color: NAVY }}
          >
            Understand What Your{" "}
            <span className="text-[#1765F5]">Education Loan Offers.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[760px] text-[12.5px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
            Explore available loan benefits, repayment options, processing
            terms, eligible institutions, covered courses, collateral
            requirements and applicable fees before choosing a financing
            option.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid items-stretch gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6">
          {/* TABS: 2x2 on mobile, vertical list on desktop */}
          <div className="flex flex-col gap-2.5">
            <div
              role="tablist"
              aria-label="Loan Benefits and Features"
              className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:gap-2.5"
            >
              {TABS.map((tab, index) => {
                const TabIcon = tab.icon;
                const isActive = activeTab.id === tab.id;
                const { c, t, b } = tab.color;

                return (
                  <motion.button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab)}
                    onMouseEnter={() => setActiveTab(tab)}
                    onFocus={() => setActiveTab(tab)}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative flex min-h-[52px] w-full items-center gap-2 overflow-hidden rounded-xl border p-2.5 text-left transition-all duration-300 sm:gap-3 sm:p-3 lg:min-h-[70px] lg:gap-3.5 lg:rounded-2xl lg:p-4"
                    style={{
                      borderColor: isActive ? c : "#E2E8F0",
                      background: isActive
                        ? `linear-gradient(90deg, ${t}, #FFFFFF)`
                        : "#FFFFFF",
                      boxShadow: isActive
                        ? `0 8px 22px ${c}1F`
                        : "none",
                    }}
                  >
                    {/* Active bar */}
                    <span
                      className="absolute bottom-0 left-0 top-0 w-[4px] rounded-r-full transition-all duration-300"
                      style={{ background: isActive ? c : "transparent" }}
                    />

                    {/* Icon */}
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 lg:h-11 lg:w-11 lg:rounded-xl"
                      style={{
                        background: isActive ? c : t,
                        color: isActive ? "#FFFFFF" : c,
                        boxShadow: isActive ? `0 6px 14px ${c}33` : "none",
                      }}
                    >
                      <TabIcon size={17} strokeWidth={2} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <span
                        className="mb-0.5 hidden text-[10px] font-bold uppercase tracking-[0.14em] lg:block"
                        style={{ color: isActive ? c : "#94A3B8" }}
                      >
                        PART {tab.id}
                      </span>
                      <h3
                        className="text-[11.5px] font-bold leading-[1.25] sm:text-[13px] lg:text-[15px]"
                        style={{ color: isActive ? NAVY : "#334155" }}
                      >
                        <span className="lg:hidden">{tab.short}</span>
                        <span className="hidden lg:inline">{tab.title}</span>
                      </h3>
                    </div>

                    {/* Arrow (desktop only) */}
                    <div
                      className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 lg:flex"
                      style={{
                        background: isActive ? `${c}1A` : "transparent",
                        color: isActive ? c : "#94A3B8",
                      }}
                    >
                      <ArrowRight
                        size={18}
                        className={`transition-transform duration-300 ${
                          isActive
                            ? "translate-x-0.5"
                            : "group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA – desktop (left column) */}
            <CtaCard
              onBookCounselling={onBookCounselling}
              className="mt-1 hidden lg:block"
            />
          </div>

          {/* RIGHT PANEL */}
          <div
            id="loan-features-panel"
            role="tabpanel"
            className="relative flex flex-col overflow-hidden rounded-[22px] border p-4 shadow-[0_15px_50px_rgba(12,51,123,0.06)] transition-colors duration-300 sm:p-6 lg:h-[clamp(430px,62vh,520px)] lg:rounded-[28px]"
            style={panelVars}
          >
            {/* Decorative */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[var(--b)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[var(--c)] opacity-[0.07] blur-2xl"
            />

            {/* Big number */}
            <div className="pointer-events-none absolute right-5 top-1 select-none text-[72px] font-black leading-none tracking-[-0.06em] text-[var(--c)] opacity-[0.07] sm:right-8 sm:text-[96px]">
              {activeTab.id}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="relative z-10 flex min-h-0 flex-1 flex-col"
              >
                {/* Header */}
                <div className="mb-3 flex shrink-0 flex-col gap-2.5">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--b)] bg-white/85 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--c)] sm:text-[11px]">
                    <ActiveIcon size={14} />
                    {activeTab.eyebrow}
                  </div>

                  <h3
                    className="text-[21px] font-extrabold leading-tight tracking-[-0.03em] sm:text-[26px]"
                    style={{ color: NAVY }}
                  >
                    {activeTab.title}
                  </h3>
                </div>

                {/* Content: scrolls inside panel on desktop so height stays fixed */}
                <div className="min-h-0 flex-1 lg:overflow-y-auto lg:pr-1 lg:[scrollbar-width:thin]">
                  {activeTab.fees ? (
                    <FeesGrid tab={activeTab} />
                  ) : (
                    <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                      {activeTab.sections.map((section) => (
                        <SectionCard key={section.title} section={section} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA – mobile (below content) */}
          <CtaCard
            onBookCounselling={onBookCounselling}
            className="lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}

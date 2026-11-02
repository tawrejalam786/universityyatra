
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  ArrowUpRight,
} from "lucide-react";

// ==========================================
// LOAN BENEFITS & FEATURES CONTENT
// ==========================================

const tabs = [
  {
    id: "benefits",
    number: "01",
    title: "Loan Benefits",
    icon: Wallet,
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
        description: "Coverage for over 2100 universities across 35+ countries. 950 courses covered, including:",
        points: [
          "Executive Management Courses (Working Executives)",
          "MS",
          "MBA",
          "MBBS/MD – Only India Colleges",
        ],
      },
    ],
  },
  {
    id: "details",
    number: "02",
    title: "Loan Details",
    icon: BookOpenCheck,
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
    id: "collateral",
    number: "03",
    title: "Collateral & Moratorium",
    icon: ShieldCheck,
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
    id: "fees",
    number: "04",
    title: "Fees and Charges",
    icon: Receipt,
    heading: "Fees & Charges",
    description: "The HDFC Education Loan for Foreign Education Rates & Fees are as follows:",
    fees: [
      {
        label: "Pre-payment charges",
        value: "NIL",
      },
      {
        label: "No Objection Certificate (NOC)",
        value: "NIL",
      },
      {
        label: "Delayed Payment Charges *",
        value: "@ 2 % per month of instalment ( MI/PMII)+ applicable taxes thereon",
      },
      {
        label: "Cheque or ACH mandate or Direct Debit swapping charges*",
        value: "Up to ₹500/- per swap instance plus applicable taxes thereon",
      },
    ],
  },
];

// ==========================================
// CHECK LIST COMPONENT
// ==========================================

function CheckList({ points }) {
  return (
    <ul className="space-y-2.5">
      {points.map((point, index) => (
        <li key={index} className="flex min-w-0 items-start gap-2.5">
          <CheckCircle2 size={16} strokeWidth={1.9} className="mt-[3px] shrink-0 text-[#1765F5]" />
          <span className="min-w-0 break-words text-[12px] leading-[1.65] text-[#627694] sm:text-[13px]">{point}</span>
        </li>
      ))}
    </ul>
  );
}

// ==========================================
// FEATURE CARD COMPONENT
// ==========================================

function FeatureCard({ section, compact = false }) {
  const Icon = section.icon;

  return (
    <div className="min-w-0 rounded-[14px] border border-[#E0EAF9] bg-[#F8FAFF] p-4 sm:p-5">
      <div className="mb-3 flex min-w-0 items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#E7F0FF] text-[#1765F5]">
          <Icon size={19} strokeWidth={1.8} />
        </div>

        <h4 className="min-w-0 text-[15px] font-extrabold leading-[1.3] tracking-[-0.02em] text-[#0C337B] sm:text-[16px]">
          {section.title}
        </h4>
      </div>

      {section.description && (
        <p className="break-words text-[12px] leading-[1.7] text-[#627694] sm:text-[13px]">
          {section.description}
        </p>
      )}

      {section.points && (
        <div className={section.description ? "mt-3" : ""}>
          {compact ? (
            <ul className="flex flex-wrap gap-2">
              {section.points.map((point, index) => (
                <li key={index} className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-[#DCE8FC] bg-white px-3 py-2 text-[11px] font-semibold leading-[1.5] text-[#0C337B]">
                  <CheckCircle2 size={14} className="shrink-0 text-[#1765F5]" />
                  <span className="min-w-0 break-words">{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <CheckList points={section.points} />
          )}
        </div>
      )}
    </div>
  );
}

// ==========================================
// LOAN BENEFITS CONTENT
// ==========================================

function BenefitsContent({ tab }) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-2">
      <FeatureCard section={tab.sections[0]} />
      <FeatureCard section={tab.sections[1]} />

      <div className="min-w-0 md:col-span-2">
        <FeatureCard section={tab.sections[2]} compact />
      </div>
    </div>
  );
}

// ==========================================
// LOAN DETAILS & COLLATERAL CONTENT
// ==========================================

function StandardContent({ tab }) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3">
      {tab.sections.map((section) => (
        <FeatureCard key={section.title} section={section} />
      ))}
    </div>
  );
}

// ==========================================
// FEES CONTENT
// ==========================================

function FeesContent({ tab }) {
  return (
    <div className="min-w-0">
      <p className="mb-4 text-[12px] leading-[1.7] text-[#627694] sm:text-[13px]">
        {tab.description}
      </p>

      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        {tab.fees.map((item) => (
          <div key={item.label} className="min-w-0 rounded-[13px] border border-[#E0EAF9] bg-[#F8FAFF] p-4">
            <div className="mb-2 flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-[2px] shrink-0 text-[#1765F5]" />

              <h4 className="min-w-0 break-words text-[12px] font-extrabold leading-[1.5] text-[#0C337B] sm:text-[13px]">
                {item.label}
              </h4>
            </div>

            <p className="break-words pl-6 text-[12px] font-medium leading-[1.65] text-[#627694] sm:text-[13px]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function LoanBenefitsFeatures() {
  const [activeTab, setActiveTab] = useState("benefits");
  const reduceMotion = useReducedMotion();

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const renderContent = () => {
    if (activeTab === "benefits") {
      return <BenefitsContent tab={currentTab} />;
    }

    if (activeTab === "fees") {
      return <FeesContent tab={currentTab} />;
    }

    return <StandardContent tab={currentTab} />;
  };

  return (
    <section id="loan-benefits-features" aria-labelledby="loan-benefits-heading" className="relative isolate w-full overflow-hidden bg-[#F4F7FD] py-8 sm:py-10 lg:py-12">
      {/* MAIN CONTAINER */}

      <div className="relative z-10 mx-auto w-full max-w-[1340px] min-w-0 px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mb-6"
        >
          <h2 id="loan-benefits-heading" className="text-center text-[27px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#0C337B] sm:text-[34px] lg:text-[39px]">
            Loan Benefits{" "}
            <span className="text-[#1765F5]">
              &amp; Features
            </span>
          </h2>
        </motion.div>

        {/* CATEGORY TABS */}

        <div role="tablist" aria-label="Loan Benefits and Features" className="mb-4 grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab.id === tab.id;

            return (
              <button
                key={tab.id}
                id={`loan-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="loan-features-panel"
                onClick={() => setActiveTab(tab.id)}
                className={`group flex min-h-[53px] min-w-0 items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5] sm:px-4 ${isActive ? "border-[#0C337B] bg-[#0C337B] text-white shadow-[0_7px_18px_rgba(12,51,123,0.12)]" : "border-[#D9E6FA] bg-white text-[#0C337B] hover:border-[#1765F5]/50"}`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isActive ? "bg-[#1765F5] text-white" : "bg-[#EAF2FF] text-[#1765F5]"}`}>
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <span className={`block text-[9px] font-extrabold ${isActive ? "text-[#A2C1FB]" : "text-[#1765F5]"}`}>
                    {tab.number} / 04
                  </span>

                  <span className="block text-[11px] font-extrabold leading-[1.35] sm:text-[12px]">
                    {tab.title}
                  </span>
                </div>

                <ArrowUpRight size={15} className="hidden shrink-0 lg:block" />
              </button>
            );
          })}
        </div>

        {/* ========================================== */}
        {/* FULL WIDTH CONTENT PANEL */}
        {/* BLUE PASSPORT PANEL REMOVED */}
        {/* ========================================== */}

        <div className="w-full min-w-0 overflow-hidden rounded-[18px] border border-[#DFE8F7] bg-white p-4 shadow-[0_8px_25px_rgba(12,51,123,0.04)] sm:p-5 lg:rounded-[20px] lg:p-6">
          {/* CONTENT HEADER */}

          <div className="mb-4 flex min-w-0 items-center gap-3 border-b border-[#E5ECF8] pb-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1765F5]">
              <GraduationCap size={20} strokeWidth={1.8} />
            </div>

            <h3 className="min-w-0 text-[19px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#0C337B] sm:text-[22px]">
              {currentTab.heading || currentTab.title}
            </h3>
          </div>

          {/* DYNAMIC CONTENT */}

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentTab.id}
              id="loan-features-panel"
              role="tabpanel"
              aria-labelledby={`loan-tab-${currentTab.id}`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
              className="w-full min-w-0"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

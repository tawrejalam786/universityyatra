"use client";

import { useState } from "react";
import { GraduationCap, Briefcase, Calendar, DollarSign, Languages, Target } from "lucide-react";

export default function ProfileReview() {
  const [activeTab, setActiveTab] = useState("academics");

  const categories = [
    {
      id: "academics",
      label: "Academics",
      icon: GraduationCap,
      title: "Academic background",
      desc: "We review your grades, qualifications and subjects to understand which courses and admission requirements align with your academic record.",
      highlight: "A strong application starts with a realistic academic match.",
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      title: "Work & practical experience",
      desc: "Your professional background, internships, and relevant work experience help us identify programmes that value your real-world skills.",
      highlight: "Experience can strengthen your profile and open new pathways.",
    },
    {
      id: "gaps",
      label: "Study gaps",
      icon: Calendar,
      title: "Study gaps & career breaks",
      desc: "We address any gaps in your education or career timeline and help position them honestly within your application narrative.",
      highlight: "Gaps don't disqualify you — context and planning matter.",
    },
    {
      id: "budget",
      label: "Budget",
      icon: DollarSign,
      title: "Financial feasibility",
      desc: "Understanding your budget helps us recommend destinations and programmes where costs align with your financial capacity and scholarship options.",
      highlight: "Affordability should guide your shortlist from the start.",
    },
    {
      id: "language",
      label: "Language",
      icon: Languages,
      title: "Language proficiency",
      desc: "We assess your English language skills and recommend test preparation or alternative pathways if needed to meet admission standards.",
      highlight: "Language readiness is essential for academic success abroad.",
    },
    {
      id: "goals",
      label: "Goals",
      icon: Target,
      title: "Career & migration goals",
      desc: "Your long-term career plans and immigration preferences help shape which countries and courses offer the best post-study opportunities.",
      highlight: "Think beyond admission — plan for what comes after.",
    },
  ];

  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            PERSONALISED PROFILE REVIEW
          </p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[36px] lg:text-[42px]">
            One assessment.{" "}
            <span className="text-[#1765F5]">Your complete picture.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[750px] text-[15px] leading-[1.7] text-[#526B8C] sm:text-[16px]">
            Every student has a different starting point. We evaluate six important factors to identify what fits, what needs improvement and which pathways are worth exploring.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`inline-flex items-center gap-2 rounded-xl border-2 px-5 py-3 text-[13px] font-bold transition-all sm:text-[14px] ${
                  activeTab === category.id
                    ? "border-[#1765F5] bg-[#1765F5] text-white shadow-lg shadow-[#1765F5]/25"
                    : "border-[#D9E5FA] bg-white text-[#526B8C] hover:border-[#1765F5] hover:text-[#1765F5]"
                }`}
              >
                <Icon size={18} strokeWidth={2.5} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content card */}
        {activeCategory && (
          <div className="mx-auto max-w-[900px] rounded-3xl border border-[#D9E5FA] bg-white p-8 shadow-xl sm:p-10 lg:p-12">
            
            {/* Category icon & badge */}
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1765F5] to-[#0C337B] text-white shadow-lg">
              <activeCategory.icon size={32} strokeWidth={2} />
            </div>

            {/* Label */}
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1765F5]">
              WHAT WE LOOK AT
            </p>

            {/* Title */}
            <h3 className="text-[24px] font-extrabold leading-[1.2] text-[#0C337B] sm:text-[28px]">
              {activeCategory.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-[15px] leading-[1.8] text-[#526B8C] sm:text-[16px]">
              {activeCategory.desc}
            </p>

            {/* Highlight box */}
            <div className="mt-6 rounded-xl border-l-4 border-[#2DD4BF] bg-[#E6F9F0] p-5">
              <p className="text-[14px] font-semibold italic leading-[1.6] text-[#0C337B] sm:text-[15px]">
                {activeCategory.highlight}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, GitCompareArrows, Globe2, BrainCircuit } from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Study Without Putting Life on Hold",
    description:
      "Earn your Bachelor’s or Master’s degree through flexible online learning while continuing your job, business, or personal commitments.",
    icon: GraduationCap,
    accent: "#063B72",
    soft: "#EAF1F8",
  },
  {
    number: "02",
    title: "Compare Before You Commit",
    description:
      "Explore programs from multiple Indian and international universities in one place. Compare courses, specializations, learning formats, and other key factors before making your choice.",
    icon: GitCompareArrows,
    accent: "#18B8B5",
    soft: "#E8F8F7",
  },
  {
    number: "03",
    title: "Explore WES-Friendly Options",
    description:
      "For students planning international education or career opportunities, explore universities that may be suitable for credential evaluation.",
    icon: Globe2,
    accent: "#0E7490",
    soft: "#EAF7FA",
  },
  {
    number: "04",
    title: "Specialization That Keeps You Relevant",
    description:
      "Explore in-demand specializations across areas like Business Analytics, Finance, Management, Artificial Intelligence, and more to align your education with evolving career opportunities.",
    icon: BrainCircuit,
    accent: "#7C3AED",
    soft: "#F3EEFF",
  },
];

export default function WhatItGetsYou() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5 lg:px-6">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }} className="mb-9 text-center md:mb-12">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#063B72] sm:text-[33px] md:text-[38px] lg:text-[42px]">
            What It <span className="text-[#18B8B5]">Get’s You</span>
          </h2>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <div className="relative hidden md:block">
          <div className="absolute bottom-4 left-1/2 top-4 w-[4px] -translate-x-1/2 rounded-full bg-[#E8EEF4]" />

          <div className="space-y-7 lg:space-y-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div key={item.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="relative grid min-h-[125px] grid-cols-[1fr_105px_1fr] items-center">
                  {/* LEFT SIDE */}
                  <div className={isLeft ? "pr-5 lg:pr-8" : ""}>
                    {isLeft && (
                      <div className="ml-auto max-w-[430px]">
                        <BenefitCard item={item} Icon={Icon} side="left" />
                      </div>
                    )}
                  </div>

                  {/* CENTER */}
                  <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="relative flex h-[92px] w-[58px] flex-col items-center justify-center rounded-[22px] text-white shadow-[0_10px_30px_rgba(6,59,114,0.15)]" style={{ backgroundColor: item.accent }}>
                      <span className="text-[11px] font-medium opacity-75">STEP</span>
                      <span className="mt-0.5 text-[20px] font-bold leading-none">{item.number}</span>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className={!isLeft ? "pl-5 lg:pl-8" : ""}>
                    {!isLeft && (
                      <div className="mr-auto max-w-[430px]">
                        <BenefitCard item={item} Icon={Icon} side="right" />
                      </div>
                    )}
                  </div>

                  {/* Connector */}
                  <span className={isLeft ? "absolute left-[calc(50%-53px)] top-1/2 h-px w-[55px] -translate-y-1/2" : "absolute right-[calc(50%-53px)] top-1/2 h-px w-[55px] -translate-y-1/2"} style={{ backgroundColor: `${item.accent}55` }} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative md:hidden">
          <div className="absolute bottom-4 left-[23px] top-4 w-[3px] rounded-full bg-[#E8EEF4]" />

          <div className="space-y-5">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.number} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.04 }} className="relative flex items-start gap-4">
                  <div className="relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[16px] text-[15px] font-bold text-white shadow-[0_6px_18px_rgba(6,59,114,0.15)]" style={{ backgroundColor: item.accent }}>
                    {item.number}
                  </div>

                  <div className="min-w-0 flex-1 rounded-[18px] border border-[#E7EDF3] bg-white p-4 shadow-[0_8px_24px_rgba(6,59,114,0.06)]">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px]" style={{ backgroundColor: item.soft, color: item.accent }}>
                        <Icon size={18} strokeWidth={2} />
                      </div>

                      <h3 className="text-[17px] font-bold leading-[1.25] text-[#063B72]">{item.title}</h3>
                    </div>

                    <p className="text-[13px] leading-[1.6] text-[#526477] sm:text-[14px]">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ item, Icon, side }) {
  return (
    <div className="group relative rounded-[20px] border border-[#E5EBF1] bg-white p-5 shadow-[0_8px_28px_rgba(6,59,114,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_34px_rgba(6,59,114,0.10)]">
      <div className={side === "left" ? "flex flex-row-reverse items-start gap-4 text-right" : "flex items-start gap-4 text-left"}>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px]" style={{ backgroundColor: item.soft, color: item.accent }}>
          <Icon size={21} strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[18px] font-bold leading-[1.25] text-[#063B72] lg:text-[19px]">{item.title}</h3>
          <p className="mt-2 text-[13px] leading-[1.6] text-[#526477] lg:text-[14px]">{item.description}</p>
        </div>
      </div>

      <div className={side === "left" ? "absolute right-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-r border-t border-[#E5EBF1] bg-white" : "absolute left-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-b border-l border-[#E5EBF1] bg-white"} />
    </div>
  );
}
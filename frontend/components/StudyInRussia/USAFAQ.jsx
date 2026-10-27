
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

/* =========================================
   USA FAQ DATA
========================================= */


const faqs = [
  {
    question: "How much does it cost to study in Russia?",
    answer:
      "Tuition fees in Russia vary depending on the university, course, and degree level. Students should also budget for accommodation, food, health insurance, transportation, visa fees, and other living expenses. Costs may be higher in cities like Moscow and St. Petersburg.",
  },
  {
    question: "What are the eligibility requirements to study in Russia?",
    answer:
      "Eligibility requirements depend on the university and program. Students generally need relevant academic qualifications, a valid passport, and required application documents. Some programs may also require entrance examinations or proof of Russian or English language proficiency.",
  },
  {
    question: "Which intakes are available at Russian universities?",
    answer:
      "September is the main intake at Russian universities, offering the widest range of programs. Some universities also offer a February intake for selected courses. Application deadlines and availability vary by institution.",
  },
  {
    question: "Can international students work in Russia after graduation?",
    answer:
      "International graduates may explore employment opportunities in Russia after completing their studies. Work authorization and residence requirements depend on the graduate's immigration status, qualifications, and applicable regulations. Employer sponsorship may be required for certain employment routes.",
  },
  {
    question: "Can Indian students get scholarships to study in Russia?",
    answer:
      "Yes. Indian students can explore Russian government scholarships and university-specific funding opportunities. Scholarships may cover tuition fees or provide additional financial support, depending on the program. Eligibility is generally based on academic qualifications, application requirements, and scholarship criteria.",
  },
];


/* =========================================
   MAIN FAQ COMPONENT
========================================= */

export default function USAFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const toggleFAQ = (index) => {
    setActiveIndex((previous) => (previous === index ? -1 : index));
  };

  return (
    <section id="usa-faq" className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">

      {/* SUBTLE BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-12 h-[280px] w-[280px] rounded-full bg-[#1765F5]/[0.05] blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-0 h-[280px] w-[280px] rounded-full bg-[#0C337B]/[0.03] blur-[90px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-start gap-5 px-3.5 sm:px-5 lg:px-6 md:gap-7 lg:grid-cols-[0.85fr_1.35fr] lg:gap-10">

        {/* LEFT: HEADING */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="lg:sticky lg:top-24">

          {/* MAIN HEADING */}
          <h2 className="max-w-[450px] text-[26px] font-extrabold leading-[1.15] tracking-[-0.045em] text-[#0C337B] sm:text-[32px] md:text-[36px] lg:text-[40px]">
            Frequently Asked <span className="text-[#1765F5]">Questions</span>
          </h2>

          {/* ACCENT */}
          <div className="mt-3 flex items-center gap-1.5">
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]/60" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]/30" />
            <span className="h-[3.5px] w-12 rounded-full bg-[#0C337B]" />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-3 max-w-[380px] text-[13px] leading-[1.7] text-[#526477] sm:text-[14px]">
            Find answers to common questions about studying in the USA, from tuition fees and university admissions to intakes, work opportunities, and scholarships.
          </p>

          {/* DECORATIVE COUNTER */}
          <div className="mt-4 hidden items-center gap-2.5 lg:flex">
            <span className="text-[30px] font-extrabold leading-none tracking-[-0.04em] text-[#0C337B]">
              05
            </span>
            <span className="max-w-[100px] text-[10px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-[#7890A3]">
              Common Questions Answered
            </span>
          </div>

        </motion.div>

        {/* RIGHT: FAQ ACCORDION */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.08 }} className="min-w-0 space-y-2.5">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const answerId = `usa-faq-answer-${index}`;
            const questionId = `usa-faq-question-${index}`;

            return (
              <motion.article key={faq.question} layout={!reduceMotion} initial={false} className={`relative overflow-hidden rounded-[15px] border bg-white transition-[border-color,box-shadow] duration-300 sm:rounded-[18px] ${isOpen ? "border-[#1765F5] shadow-[0_10px_28px_rgba(23,101,245,0.1)]" : "border-[#E0E8F0] shadow-[0_3px_12px_rgba(12,51,123,0.03)] hover:border-[#A2C1FB]"}`}>

                {/* ACTIVE LEFT ACCENT */}
                {isOpen && (
                  <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#1765F5]" />
                )}

                {/* QUESTION BUTTON */}
                <button id={questionId} type="button" onClick={() => toggleFAQ(index)} aria-expanded={isOpen} aria-controls={answerId} className="flex w-full items-center gap-2.5 px-3.5 py-3 text-left sm:gap-3.5 sm:px-4 sm:py-3.5 md:px-5">

                  {/* QUESTION NUMBER */}
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] text-[11px] font-extrabold transition-colors duration-300 sm:h-9 sm:w-9 sm:text-[12px] ${isOpen ? "bg-[#E8F0FE] text-[#1765F5]" : "bg-[#F1F5F9] text-[#8191A3]"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* QUESTION */}
                  <h3 className="min-w-0 flex-1 text-[13px] font-bold leading-[1.45] text-[#0C337B] sm:text-[14px] md:text-[15px]">
                    {faq.question}
                  </h3>

                  {/* PLUS / MINUS */}
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-8 sm:w-8 ${isOpen ? "bg-[#1765F5] text-white" : "bg-[#F1F5F9] text-[#0C337B]"}`}>
                    {isOpen ? <Minus size={15} strokeWidth={2.3} /> : <Plus size={15} strokeWidth={2.3} />}
                  </span>

                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="answer" id={answerId} role="region" aria-labelledby={questionId} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ height: { duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: reduceMotion ? 0 : 0.2 } }} className="overflow-hidden">

                      <div className="border-t border-[#EDF1F5] px-3.5 pb-3.5 pt-3 sm:ml-[62px] sm:mr-4 sm:px-0 md:ml-[70px]">
                        <p className="text-[12px] leading-[1.7] text-[#526477] sm:text-[13px]">
                          {faq.answer}
                        </p>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.article>
            );
          })}

          {/* OPTIONAL SUPPORT FOOTER */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-1 pt-4">
            <p className="text-[12px] font-medium text-[#64748B] sm:text-[13px]">
              Still have questions about studying in the USA?
            </p>

            <a href="#contact" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0C8F8B] transition-colors hover:text-[#063B72] sm:text-[13px]">
              Get Free Counselling
              <ArrowUpRight size={15} />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

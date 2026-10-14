
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";

/* =========================================
   USA FAQ DATA
========================================= */

const faqs = [
  {
    question: "How much does it cost to study in the USA?",
    answer:
      "Tuition depends on the university, course, and degree level. Students should also budget for accommodation, food, health insurance, transport, and other living expenses.",
  },
  {
    question: "What are the eligibility requirements to study in the USA?",
    answer:
      "Requirements vary by university and program. Students generally need relevant academic qualifications, English-language proficiency where required, and any additional test scores or documents specified by the institution.",
  },
  {
    question: "Which intakes are available at US universities?",
    answer:
      "The main intakes are Fall (August–September) and Spring (January). Some universities also offer Summer intake, depending on the course.",
  },
  {
    question: "Can international students work in the USA after graduation?",
    answer:
      "Eligible F-1 students may apply for up to 12 months of Optional Practical Training (OPT). Qualifying STEM graduates may be eligible for a further 24-month extension.",
  },
  {
    question: "Can Indian students get scholarships to study in the USA?",
    answer:
      "Yes. Scholarships and financial aid may be available through universities, departments, and external organisations. Eligibility depends on the student's academic profile, financial circumstances, and the specific award.",
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
    <section id="usa-faq" className="relative w-full overflow-hidden bg-[#F7FAFC] py-10 sm:py-10 md:py-16 lg:py-8">

      {/* SUBTLE BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-12 h-[280px] w-[280px] rounded-full bg-[#18B8B5]/[0.06] blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-0 h-[280px] w-[280px] rounded-full bg-[#063B72]/[0.05] blur-[90px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-start gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-[0.85fr_1.35fr] lg:gap-14">

        {/* LEFT: HEADING */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="lg:sticky lg:top-28">

          {/* EYEBROW */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D7EBEB] bg-white px-3 py-2">
            <HelpCircle size={15} className="text-[#18B8B5]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0C8F8B] sm:text-[11px]">
              GOT QUESTIONS?
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="max-w-[450px] text-[32px] font-extrabold leading-[1.13] tracking-[-0.045em] text-[#063B72] sm:text-[38px] md:text-[43px] lg:text-[48px]">
            Frequently Asked <span className="text-[#18B8B5]">Questions</span>
          </h2>

          {/* ACCENT */}
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[5px] w-[5px] rounded-full bg-[#18B8B5]" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#18B8B5]/60" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#18B8B5]/30" />
            <span className="h-[4px] w-14 rounded-full bg-[#063B72]" />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-[380px] text-[14px] leading-[1.8] text-[#526477] sm:text-[15px]">
            Find answers to common questions about studying in the USA, from tuition fees and university admissions to intakes, work opportunities, and scholarships.
          </p>

          {/* DECORATIVE COUNTER */}
          <div className="mt-7 hidden items-center gap-3 lg:flex">
            <span className="text-[36px] font-extrabold leading-none tracking-[-0.04em] text-[#063B72]">
              05
            </span>
            <span className="max-w-[100px] text-[11px] font-semibold uppercase leading-[1.5] tracking-[0.08em] text-[#7890A3]">
              Common Questions Answered
            </span>
          </div>

        </motion.div>

        {/* RIGHT: FAQ ACCORDION */}
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.08 }} className="min-w-0 space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const answerId = `usa-faq-answer-${index}`;
            const questionId = `usa-faq-question-${index}`;

            return (
              <motion.article key={faq.question} layout={!reduceMotion} initial={false} className={`relative overflow-hidden rounded-[17px] border bg-white transition-[border-color,box-shadow] duration-300 sm:rounded-[20px] ${isOpen ? "border-[#18B8B5] shadow-[0_12px_35px_rgba(6,59,114,0.09)]" : "border-[#E0E8F0] shadow-[0_4px_15px_rgba(6,59,114,0.035)] hover:border-[#B8D8DC]"}`}>

                {/* ACTIVE LEFT ACCENT */}
                {isOpen && (
                  <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#18B8B5]" />
                )}

                {/* QUESTION BUTTON */}
                <button id={questionId} type="button" onClick={() => toggleFAQ(index)} aria-expanded={isOpen} aria-controls={answerId} className="flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-5 md:px-6">

                  {/* QUESTION NUMBER */}
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] text-[12px] font-extrabold transition-colors duration-300 sm:h-10 sm:w-10 sm:text-[13px] ${isOpen ? "bg-[#E7F8F6] text-[#0A928E]" : "bg-[#F1F5F9] text-[#8191A3]"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* QUESTION */}
                  <h3 className="min-w-0 flex-1 text-[13px] font-bold leading-[1.5] text-[#063B72] sm:text-[15px] md:text-[16px]">
                    {faq.question}
                  </h3>

                  {/* PLUS / MINUS */}
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-9 sm:w-9 ${isOpen ? "bg-[#18B8B5] text-white" : "bg-[#F1F5F9] text-[#063B72]"}`}>
                    {isOpen ? <Minus size={17} strokeWidth={2.3} /> : <Plus size={17} strokeWidth={2.3} />}
                  </span>

                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="answer" id={answerId} role="region" aria-labelledby={questionId} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ height: { duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: reduceMotion ? 0 : 0.2 } }} className="overflow-hidden">

                      <div className="border-t border-[#EDF1F5] px-4 pb-5 pt-4 sm:ml-[76px] sm:mr-5 sm:px-0 md:ml-[84px]">
                        <p className="text-[13px] leading-[1.8] text-[#526477] sm:text-[14px]">
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

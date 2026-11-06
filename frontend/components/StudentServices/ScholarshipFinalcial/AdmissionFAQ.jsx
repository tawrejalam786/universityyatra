"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";


const faqs = [
  {
    question: "What types of scholarships are available for studying abroad?",
    answer:
      "Students can explore merit-based, need-based, university-specific, government-funded and external scholarships depending on their eligibility.",
  },
  {
    question: "Can international students apply for scholarships?",
    answer:
      "Yes, many universities, governments and organisations offer scholarships to international students, subject to specific eligibility criteria.",
  },
  {
    question: "What factors determine scholarship eligibility?",
    answer:
      "Eligibility may depend on academic performance, financial background, nationality, chosen course, destination and university-specific requirements.",
  },
  {
    question: "Can I apply for multiple scholarships at the same time?",
    answer:
      "Yes, students can apply for multiple scholarships if they meet individual eligibility criteria and comply with their respective application conditions.",
  },
  {
    question: "When should I start applying for scholarships?",
    answer:
      "Ideally, begin researching scholarships 6–12 months before your intended intake to allow sufficient time for applications and documentation.",
  },
];


function FAQItem({ faq, index, isOpen, onToggle }) {
  const panelId = `counselling-faq-panel-${index}`;

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[#1765F5]/40 bg-gradient-to-br from-[#F0F6FF] to-white shadow-[0_8px_24px_rgba(23,101,245,0.10)]"
          : "border-[#E0EFFE] bg-white hover:border-[#C8DBFF]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center gap-3 px-4 py-2.5 text-left sm:px-5"
      >
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-extrabold transition-colors duration-300 ${
            isOpen ? "bg-[#1765F5] text-white" : "bg-[#EDF5FF] text-[#1765F5]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex-1 text-[13px] font-bold leading-[1.4] text-[#0C337B]">
          {faq.question}
        </span>

        <Plus
          size={18}
          className={`shrink-0 text-[#1765F5] transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-3.5 pl-[56px] pr-5 text-[12px] leading-[1.7] text-[#526B8C] sm:pl-[60px] sm:text-[13px]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CounsellingFAQ() {
  // one answer open at a time; first one open by default
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      aria-labelledby="counselling-faq-title"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFF] py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6">
          {/* LEFT - HEADING PANEL */}
          <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-6 text-white sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-[#5B9BFF]/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />

            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] backdrop-blur">
                <HelpCircle size={13} />
                Good to know
              </div>

              <h2
                id="counselling-faq-title"
                className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[30px]"
              >
                Frequently asked{" "}
                <span className="text-[#9CC5FF]">questions.</span>
              </h2>

              <p className="mt-3 max-w-[340px] text-[13px] leading-[1.7] text-white/75">
                Clear answers to the questions students and parents ask us most
                often.
              </p>
            </div>

            <div className="relative rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="mb-1 flex items-center gap-2 text-[14px] font-bold">
                <MessageCircle size={16} />
                Still have a question?
              </div>
              <p className="text-[12px] leading-[1.6] text-white/70">
                Talk to our team and get answers specific to your profile.
              </p>
              <Link
                href="/contact"
                className="group mt-3 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] font-bold text-[#0C337B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EDF5FF]"
              >
                Get in touch
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT - ACCORDION */}
          <div className="flex flex-col justify-center gap-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
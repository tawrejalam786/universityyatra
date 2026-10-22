"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to get a response?",
    answer:
      "We respond to all inquiries within 24 hours on business days. Urgent queries are prioritized and often get a reply within a few hours.",
  },
  {
    question: "Is the counselling service free?",
    answer:
      "Yes, our initial consultation and profile evaluation are completely free. We only charge for specific services like application processing, which we discuss upfront.",
  },
  {
    question: "Which countries do you provide guidance for?",
    answer:
      "USA, UK, Canada, Australia, Europe, UAE, Singapore, Ireland, New Zealand and many more. Our counsellors specialize in different regions to give you expert advice.",
  },
  {
    question: "Can you help with visa applications?",
    answer:
      "Absolutely. We help with document preparation, application review, interview preparation and post-visa support across multiple countries.",
  },
  {
    question: "Do you offer scholarship guidance?",
    answer:
      "Yes, we help you find and apply for merit-based, need-based and country-specific scholarships, grants and financial aid to make education more affordable.",
  },
  {
    question: "How do I book a counselling session?",
    answer:
      "Fill out the contact form, send us a WhatsApp message, or email us. We'll schedule a convenient time for your one-on-one session with our experts.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[#1765F5]/40 bg-gradient-to-br from-[#F0F6FF] to-white shadow-[0_8px_24px_rgba(23,101,245,0.10)]"
          : "border-[#E4ECF7] bg-white hover:border-[#C8DBFF]"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-4 py-3 text-left sm:px-5"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[12px] font-extrabold transition-colors duration-300 ${
            isOpen ? "bg-[#1765F5] text-white" : "bg-[#EDF5FF] text-[#1765F5]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex-1 text-[13px] font-bold leading-[1.4] text-[#0C337B] sm:text-[14px]">
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
            <p className="px-4 pb-4 pl-[60px] pr-5 text-[12px] leading-[1.7] text-[#526B8C] sm:pl-[68px] sm:text-[13px]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactFAQ() {
  // only one answer open at a time; first one open by default
  const [openIndex, setOpenIndex] = useState(0);

  const scrollToForm = () => {
    document
      .getElementById("contact-form-title")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="contact-faq-title"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F8FAFF] py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6">
          {/* LEFT - HEADING PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-6 text-white sm:p-8"
          >
            <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-[#5B9BFF]/30 blur-3xl" />
            <div
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
                Common Questions
              </div>

              <h2
                id="contact-faq-title"
                className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[30px]"
              >
                Frequently Asked{" "}
                <span className="text-[#9CC5FF]">Questions</span>
              </h2>

              <p className="mt-3 max-w-[340px] text-[13px] leading-[1.7] text-white/75">
                Quick answers to common questions. Can't find what you need?
                Reach out to us directly.
              </p>
            </div>

            <div className="relative rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="mb-1 flex items-center gap-2 text-[14px] font-bold">
                <MessageCircle size={16} />
                Still have questions?
              </div>
              <p className="text-[12px] leading-[1.6] text-white/70">
                Our team will get back to you as soon as possible.
              </p>
              <button
                onClick={scrollToForm}
                className="group mt-3 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] font-bold text-[#0C337B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EDF5FF]"
              >
                Contact Us Now
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT - ACCORDION */}
          <div className="flex flex-col justify-center gap-2.5">
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
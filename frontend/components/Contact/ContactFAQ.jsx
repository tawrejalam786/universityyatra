"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to get a response?",
    answer:
      "We respond to all inquiries within 24 hours during business days. Urgent queries are prioritized and often get responses within a few hours. Our team works Monday to Saturday from 9 AM to 7 PM IST.",
  },
  {
    question: "Is the counselling service free?",
    answer:
      "Yes, our initial consultation and profile evaluation are completely free. We provide transparent guidance and only charge for specific services like application processing, which we discuss upfront.",
  },
  {
    question: "Which countries do you provide guidance for?",
    answer:
      "We provide comprehensive guidance for studying in USA, UK, Canada, Australia, Europe, UAE, Singapore, Ireland, New Zealand, and many more countries. Our counsellors specialize in different regions to provide you expert advice.",
  },
  {
    question: "Can you help with visa applications?",
    answer:
      "Absolutely! We provide complete visa assistance including document preparation, application review, interview preparation, and post-visa support. Our team has extensive experience with visa processes across multiple countries.",
  },
  {
    question: "Do you offer scholarship guidance?",
    answer:
      "Yes, we help you identify and apply for scholarships, grants, and financial aid opportunities. We guide you through merit-based, need-based, and country-specific scholarship programs to make education more affordable.",
  },
  {
    question: "How do I book a counselling session?",
    answer:
      "You can book a session by filling out the contact form above, calling us directly, or sending us a WhatsApp message. We'll schedule a convenient time for your one-on-one counselling session with our experts.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-[20px] border-2 border-[#E4ECF7] bg-white transition-all duration-300 hover:border-[#C8DBFF]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
        aria-expanded={isOpen}
      >
        <span className="text-[14px] font-bold leading-[1.5] text-[#0C337B] sm:text-[15px]">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`mt-0.5 shrink-0 text-[#1765F5] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#E4ECF7] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <p className="text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactFAQ() {
  return (
    <section
      aria-labelledby="contact-faq-title"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            <HelpCircle size={16} />
            Common Questions
          </div>

          <h2
            id="contact-faq-title"
            className="text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[42px]"
          >
            Frequently Asked{" "}
            <span className="text-[#1765F5]">Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-[1.8] text-[#66758B] sm:text-[15px]">
            Quick answers to common questions. Can't find what you're looking for? Feel free to contact us directly.
          </p>
        </motion.div>

        {/* FAQ ITEMS */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* STILL HAVE QUESTIONS CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 rounded-[24px] border border-[#DFEAFB] bg-gradient-to-br from-[#F0F6FF] to-[#FAFCFF] p-8 text-center"
        >
          <h3 className="text-[20px] font-bold text-[#0C337B] sm:text-[22px]">
            Still Have Questions?
          </h3>
          <p className="mx-auto mt-2 max-w-[520px] text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
            Our team is here to help! Reach out and we'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              const form = document.getElementById("contact-form-title");
              form?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1765F5] px-6 py-3 text-[14px] font-bold text-white shadow-[0_6px_20px_rgba(23,101,245,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C337B] hover:shadow-[0_10px_24px_rgba(12,51,123,0.25)]"
          >
            Contact Us Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

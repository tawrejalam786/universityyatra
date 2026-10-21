"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, BookOpen, MessageSquare, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  "Study Abroad Counselling",
  "University Selection",
  "Application Support",
  "Visa Guidance",
  "Scholarship Information",
  "Career Counselling",
  "Test Preparation",
  "Document Review",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      aria-labelledby="contact-form-title"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* LEFT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#1765F5]" />
                Get In Touch
              </div>

              <h2
                id="contact-form-title"
                className="text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[42px]"
              >
                Let's Start Your{" "}
                <span className="text-[#1765F5]">Education Journey</span>
              </h2>

              <p className="mt-4 max-w-[580px] text-[13px] leading-[1.8] text-[#66758B] sm:text-[15px]">
                Fill out the form below and our expert counsellors will get in touch with you within 24 hours.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-[13px] font-bold text-[#0C337B]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#66758B]"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border-2 border-[#E4ECF7] bg-white py-3.5 pl-12 pr-4 text-[14px] text-[#0C337B] placeholder:text-[#A0B3C8] transition-all duration-200 focus:border-[#1765F5] focus:outline-none focus:ring-2 focus:ring-[#1765F5]/20"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-bold text-[#0C337B]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#66758B]"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border-2 border-[#E4ECF7] bg-white py-3.5 pl-12 pr-4 text-[14px] text-[#0C337B] placeholder:text-[#A0B3C8] transition-all duration-200 focus:border-[#1765F5] focus:outline-none focus:ring-2 focus:ring-[#1765F5]/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-[13px] font-bold text-[#0C337B]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#66758B]"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border-2 border-[#E4ECF7] bg-white py-3.5 pl-12 pr-4 text-[14px] text-[#0C337B] placeholder:text-[#A0B3C8] transition-all duration-200 focus:border-[#1765F5] focus:outline-none focus:ring-2 focus:ring-[#1765F5]/20"
                    />
                  </div>
                  {/* We Don't Spam Badge */}
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#E6F9F0] px-3 py-1.5">
                    <svg
                      className="h-4 w-4 text-[#25D366]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-[11px] font-semibold text-[#0D8558]">
                      We don't spam
                    </span>
                  </div>
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="mb-2 block text-[13px] font-bold text-[#0C337B]">
                  What are you interested in? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#66758B]"
                  />
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border-2 border-[#E4ECF7] bg-white py-3.5 pl-12 pr-4 text-[14px] text-[#0C337B] transition-all duration-200 focus:border-[#1765F5] focus:outline-none focus:ring-2 focus:ring-[#1765F5]/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-[13px] font-bold text-[#0C337B]">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-4 text-[#66758B]"
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your education goals..."
                    className="w-full resize-none rounded-xl border-2 border-[#E4ECF7] bg-white py-3.5 pl-12 pr-4 text-[14px] text-[#0C337B] placeholder:text-[#A0B3C8] transition-all duration-200 focus:border-[#1765F5] focus:outline-none focus:ring-2 focus:ring-[#1765F5]/20"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group relative w-full overflow-hidden rounded-xl bg-[#1765F5] px-6 py-4 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C337B] hover:shadow-[0_12px_32px_rgba(12,51,123,0.3)] disabled:translate-y-0 disabled:opacity-70 disabled:hover:bg-[#1765F5] sm:text-[16px]"
              >
                {submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 size={20} />
                    Message Sent Successfully!
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>

          {/* RIGHT - INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Why Choose Us Box */}
            <div className="rounded-[24px] border border-[#DFEAFB] bg-gradient-to-br from-[#F0F6FF] to-[#FAFCFF] p-6 sm:p-8">
              <h3 className="mb-4 text-[18px] font-bold text-[#0C337B] sm:text-[20px]">
                Why Choose University Yatra?
              </h3>
              <ul className="space-y-3">
                {[
                  "Expert guidance from certified counsellors",
                  "Free profile evaluation & course matching",
                  "End-to-end admission support",
                  "Visa assistance & documentation help",
                  "Pre-departure & post-landing support",
                  "Transparent, no hidden charges",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#1765F5]" />
                    <span className="text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Response Time */}
            <div className="rounded-[24px] border-2 border-[#1765F5]/20 bg-white p-6 sm:p-8">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF5FF] text-[#1765F5]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0C337B]">
                Quick Response Time
              </h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
                We respond to all inquiries within 24 hours. Urgent queries are prioritized and addressed even faster.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

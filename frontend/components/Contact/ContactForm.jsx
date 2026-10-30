"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, BookOpen, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react";

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

const highlights = [
  "Expert guidance from certified counsellors",
  "Free profile evaluation & course matching",
  "End-to-end admission & visa support",
  "Transparent, no hidden charges",
];

const inputClass =
  "w-full rounded-lg border border-[#E4ECF7] bg-white py-2.5 pl-10 pr-3 text-[13px] text-[#0C337B] placeholder:text-[#A0B3C8] transition-all duration-200 focus:border-[#1765F5] focus:outline-none focus:ring-2 focus:ring-[#1765F5]/20";
const labelClass = "mb-1 block text-[12px] font-bold text-[#0C337B]";
const iconClass = "absolute left-3 top-1/2 -translate-y-1/2 text-[#66758B]";

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

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      aria-labelledby="contact-form-title"
      className="relative w-full overflow-hidden bg-white py-6 sm:py-8"
    >
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.8fr] lg:gap-10">
          {/* LEFT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4">
              <div className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
                <span className="h-[6px] w-[6px] rounded-full bg-[#1765F5]" />
                Get In Touch
              </div>

              <h2
                id="contact-form-title"
                className="text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-[#0C337B] sm:text-[26px] lg:text-[30px]"
              >
                Let's Start Your{" "}
                <span className="text-[#1765F5]">Education Journey</span>
              </h2>

              <p className="mt-2 max-w-[520px] text-[12px] leading-[1.6] text-[#66758B] sm:text-[13px]">
                Fill out the form and our counsellors will contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User size={16} className={iconClass} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className={iconClass} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <label htmlFor="phone" className="block text-[12px] font-bold text-[#0C337B]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#0D8558]">
                      <ShieldCheck size={12} className="text-[#25D366]" />
                      We don't spam
                    </span>
                  </div>
                  <div className="relative">
                    <Phone size={16} className={iconClass} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className={labelClass}>
                  What are you interested in? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen size={16} className={iconClass} />
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none`}
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
                <label htmlFor="message" className={labelClass}>
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3 text-[#66758B]" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Tell us about your education goals..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group relative w-full overflow-hidden rounded-lg bg-[#1765F5] px-5 py-3 text-[14px] font-bold text-white shadow-[0_6px_18px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] disabled:translate-y-0 disabled:opacity-70 disabled:hover:bg-[#1765F5]"
              >
                {submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 size={18} />
                    Message Sent Successfully!
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
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
            className="flex h-full flex-col gap-4"
          >
            <div className="rounded-2xl border border-[#DFEAFB] bg-gradient-to-br from-[#F0F6FF] to-[#FAFCFF] p-5">
              <h3 className="mb-3 text-[16px] font-bold text-[#0C337B]">
                Why Choose University Yatra?
              </h3>
              <ul className="space-y-2.5">
                {highlights.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#1765F5]" />
                    <span className="text-[12px] leading-[1.6] text-[#526B8C] sm:text-[13px]">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

                      {/* CONTACT COUNSELLING IMAGE */}
          <div className="relative min-h-[200px] w-full flex-1 overflow-hidden rounded-2xl bg-[#F0F6FF]">
            <Image
              src="/images/contact/contact-counselling.webp"
              alt="University Yatra Education Counselling"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover object-center"
            />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

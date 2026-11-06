"use client";

import { useState } from "react";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/googleSheets";

const badges = ["100% free", "Personalised advice", "No pressure"];

const steps = [
  {
    title: "Share your details",
    text: "Tell us your destination and basic contact info. Takes under a minute.",
  },
  {
    title: "Free profile review",
    text: "A counsellor looks at your profile and what suits it best.",
  },
  {
    title: "Get a clear plan",
    text: "Receive personalised next steps, with no pressure to commit.",
  },
];

const inputClass =
  "w-full rounded-lg border border-[#E0EFFE] bg-white px-3.5 py-2.5 text-[13px] text-[#0C337B] placeholder:text-[#A0B3C8] transition-all focus:border-[#1765F5] focus:outline-none focus:ring-2 focus:ring-[#1765F5]/20";
const labelClass = "mb-1 block text-[12px] font-semibold text-[#0C337B]";

export default function evaluationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Submit to Google Sheets
      const result = await submitToGoogleSheets({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.service,
        message: formData.message,
      }, 'career-counselling');

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ fullName: "", phone: "", email: "", service: "", message: "" });
        }, 5000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Phone number validation - only allow digits, max 10
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: digitsOnly.slice(0, 10),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <section
      id="evaluation"
      className="relative overflow-hidden bg-gradient-to-br from-[#0C337B] via-[#0A2B5E] to-[#061B3B] py-8 sm:py-10"
    >
      {/* Background pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(23,101,245,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.3),transparent_50%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* LEFT */}
          <div className="text-white">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
              Your future, your way
            </p>

            <h2 className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[30px] lg:text-[34px]">
              Make your next move with{" "}
              <span className="text-[#1765F5]">clarity and confidence.</span>
            </h2>

            <p className="mt-3 max-w-[520px] text-[13px] leading-[1.7] text-white/80 sm:text-[14px]">
              Before investing time and money in your study abroad journey,
              understand what actually suits your profile. Start with a free
              consultation.
            </p>

            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] font-semibold backdrop-blur"
                >
                  <CheckCircle2 size={14} className="text-[#1765F5]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* How it works */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur sm:p-5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
                How it works
              </p>

              <ol className="relative space-y-3.5">
                {/* connecting line */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-2 left-[13px] top-2 w-px bg-gradient-to-b from-[#1765F5]/60 to-[#1765F5]/10"
                />
                {steps.map((step, index) => (
                  <li key={step.title} className="relative flex items-start gap-3">
                    <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1765F5] text-[12px] font-extrabold text-[#0C337B]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[13px] font-bold leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] leading-[1.55] text-white/70">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="rounded-3xl border border-white/10 bg-white p-5 shadow-2xl sm:p-6">
            <h3 className="text-[18px] font-bold text-[#0C337B] sm:text-[20px]">
              Request a free evaluation
            </h3>
            <p className="mb-4 mt-1 text-[12px] text-[#526B8C] sm:text-[13px]">
              Tell us a little about yourself to get started.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label htmlFor="phone" className="block text-[12px] font-semibold text-[#0C337B]">
                    Phone number
                  </label>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#059669]">
                    <Shield size={12} className="text-[#25D366]" />
                    We don't spam
                  </span>
                </div>
                <div className="flex items-center rounded-lg border border-[#E0EFFE] bg-white transition-all focus-within:border-[#1765F5] focus-within:ring-2 focus-within:ring-[#1765F5]/20">
                  <span className="border-r border-[#E0EFFE] px-3 py-2.5 text-[13px] font-semibold text-[#0C337B]">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full bg-transparent px-3 py-2.5 text-[13px] text-[#0C337B] placeholder:text-[#A0B3C8] outline-none"
                    placeholder="10-digit number"
                  />
                </div>
              </div>

              {/* Email + Service side by side */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select service</option>
                    <option value="Career Counselling">Career Counselling</option>
                    <option value="Study Abroad">Study Abroad</option>
                    <option value="University Selection">University Selection</option>
                    <option value="Visa Guidance">Visa Guidance</option>
                    <option value="Test Preparation">Test Preparation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Your message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={inputClass}
                  placeholder="Tell us about your goals..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#1765F5] px-5 py-3 text-[14px] font-bold text-white shadow-lg shadow-[#1765F5]/30 transition-all hover:bg-[#0C337B] hover:shadow-xl disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Request Submitted Successfully!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Request My Free Consultation</span>
                    <ArrowRight
                      size={18}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-2 text-[12px] text-red-600">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <p className="text-center text-[11px] leading-[1.5] text-green-600">
                  Thank you! Our counsellor will contact you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
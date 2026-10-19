"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessagesSquare,
  ClipboardCheck,
  Coins,
  GraduationCap,
  FileText,
  FileCheck2,
  PlaneTakeoff,
  MapPin,
  CheckCircle2,
  Clock,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe2,
  Star,
  Award,
} from "lucide-react";

/* =====================================================================
   COMPREHENSIVE 8-STEP DATA (MATCHING IMAGE 1 & IMAGE 2)
===================================================================== */
const JOURNEY_STEPS = [
  {
    step: "01",
    shortLabel: "Counselling",
    title: "Personalised Counselling",
    phase: "PHASE 01 • STAGE 1",
    tagline: "One-on-one expert guidance to understand your academic goals, preferences and profile.",
    icon: MessagesSquare,
    image: "/images/guidance/counselling.png",
    fallbackImage: "/images/how-we-help/personalised-counselling.png",
    cardBadge: "1-on-1 Mentorship",
    cardBadgeSub: "Tailored to your career aspirations",
    deliverables: [
      "In-depth academic background & career goals mapping",
      "Course & country matching based on your budget",
      "Parent counselling & financial roadmap alignment",
      "Shortlisting top study abroad destinations",
      "Timeline & intake strategy planning",
    ],
    metricHeader: "Session Duration",
    metricValue: "45 – 60 Mins",
    metricSub: "Free 1-on-1 strategy call",
    benchmarks: [
      { label: "US / Canada", value: "Fall & Spring" },
      { label: "UK / Europe", value: "Sep & Jan" },
      { label: "Australia / NZ", value: "Feb & Jul" },
      { label: "Ireland", value: "Autumn intake" },
    ],
    tipTitle: "Profile Discovery",
    tipDesc: "Share your academic transcripts and career interests for a 100% custom roadmap.",
    ctaLabel: "Book Free Counselling",
  },
  {
    step: "02",
    shortLabel: "Assessment",
    title: "Profile & Eligibility Assessment",
    phase: "PHASE 01 • STAGE 2",
    tagline: "We analyse your academic background, test scores, strengths and high-potential opportunities.",
    icon: ClipboardCheck,
    image: "/images/how-we-help/eligibility-format.png",
    fallbackImage: "/images/how-we-help/university-comparison.png",
    cardBadge: "Algorithmic Shortlisting",
    cardBadgeSub: "Dream, Reach & Safe universities",
    deliverables: [
      "GPA conversion & international credential evaluation",
      "Standardized test evaluation (GRE / GMAT / SAT)",
      "English proficiency gap analysis (IELTS / TOEFL / PTE)",
      "Categorized shortlisting: Dream, Reach & Safe schools",
      "Scholarship eligibility pre-assessment",
    ],
    metricHeader: "Evaluation Time",
    metricValue: "24 – 48 Hours",
    metricSub: "Comprehensive profile report",
    benchmarks: [
      { label: "GPA Minima", value: "2.75 – 3.8 / 4.0" },
      { label: "IELTS Target", value: "6.5 – 7.5 Band" },
      { label: "GRE Target", value: "310 – 325+" },
      { label: "Backlog Limits", value: "Country-specific" },
    ],
    tipTitle: "Holistic Review",
    tipDesc: "Extracurriculars, publications, and projects often outweigh pure test scores.",
    ctaLabel: "Get Free Assessment",
  },
  {
    step: "03",
    shortLabel: "Costs",
    title: "Tuition Fees, Living Costs & Intakes",
    phase: "PHASE 01 • STAGE 3",
    tagline: "Get a crystal-clear breakdown of tuition fees, monthly living costs, and funding options.",
    icon: Coins,
    image: "/images/guidance/scholarship.png",
    fallbackImage: "/images/how-we-help/university-comparison.png",
    cardBadge: "Financial Clarity",
    cardBadgeSub: "Zero hidden charges or surprises",
    deliverables: [
      "Annual tuition fee estimates by degree & university tier",
      "Living expenses breakdown (on-campus dorms vs off-campus)",
      "Mandatory health insurance & campus fee estimates",
      "Education loan guidance with collateral & non-collateral partners",
      "Part-time job regulations (up to 20 hrs/week)",
    ],
    metricHeader: "Budget Planning",
    metricValue: "$18k – $55k",
    metricSub: "Annual estimated total range",
    benchmarks: [
      { label: "USA Annual", value: "$30k – $55k" },
      { label: "UK Annual", value: "£18k – £35k" },
      { label: "Canada Annual", value: "CAD 25k – 45k" },
      { label: "Europe Annual", value: "€10k – €25k" },
    ],
    tipTitle: "Financial Planning",
    tipDesc: "Explore non-collateral education loan options with fast-track pre-visa sanction letters.",
    ctaLabel: "Plan My Education Budget",
  },
  {
    step: "04",
    shortLabel: "Admissions",
    title: "Admission & Application Guidance",
    phase: "PHASE 01 • STAGE 4",
    tagline: "We help you select the right programs and submit error-free university applications with confidence.",
    icon: GraduationCap,
    image: "/images/guidance/application.png",
    fallbackImage: "/images/how-we-help/admission-guidance.png",
    cardBadge: "Direct University Tie-ups",
    cardBadgeSub: "Fast-track application processing",
    deliverables: [
      "Application fee waiver support where available",
      "Portal account management & deadline tracking",
      "Transcript verification and syllabus mapping",
      "Direct follow-up with international admissions officers",
      "Offer letter review & acceptance guidance",
    ],
    metricHeader: "Offer Turnaround",
    metricValue: "1 – 4 Weeks",
    metricSub: "Direct partner university speed",
    benchmarks: [
      { label: "Early Action", value: "Nov 1 – Nov 15" },
      { label: "Regular Deadline", value: "Jan 1 – Feb 15" },
      { label: "Rolling Admissions", value: "Ongoing" },
      { label: "Offer Acceptance", value: "Deposit deadline" },
    ],
    tipTitle: "Early Bird Advantage",
    tipDesc: "Applying before priority deadlines increases admission and scholarship rates by 40%.",
    ctaLabel: "Start University Application",
  },
  {
    step: "05",
    shortLabel: "SOP/LOR",
    title: "SOP, LOR & Documentation",
    phase: "PHASE 02 • STAGE 5",
    tagline: "Craft compelling Statements of Purpose, recommendation letters and portfolio documents in perfect shape.",
    icon: FileText,
    image: "/images/how-we-help/documentation-application.png",
    fallbackImage: "/images/guidance/application.png",
    cardBadge: "Editorial Precision",
    cardBadgeSub: "Zero plagiarism, high storytelling impact",
    deliverables: [
      "Personalized SOP brainstorming & storyboarding sessions",
      "Multi-round professional proofreading & editorial polish",
      "Letter of Recommendation (LOR) structure & professor guidelines",
      "Academic CV & Resume tailoring to international formats",
      "Portfolio formatting for Design, Architecture & Tech",
    ],
    metricHeader: "Review Cycles",
    metricValue: "3 – 5 Rounds",
    metricSub: "Until 100% polished & ready",
    benchmarks: [
      { label: "SOP Length", value: "800 – 1200 words" },
      { label: "LOR Count", value: "2 – 3 Letters" },
      { label: "Resume Format", value: "1 – 2 Pages Max" },
      { label: "Plagiarism", value: "Strict 0% Tolerance" },
    ],
    tipTitle: "Unique Voice",
    tipDesc: "We help you highlight obstacles overcome, leadership initiatives, and future vision.",
    ctaLabel: "Review My SOP / Essay",
  },
  {
    step: "06",
    shortLabel: "Visa",
    title: "Visa Application Guidance",
    phase: "PHASE 02 • STAGE 6",
    tagline: "Navigate the visa process with confidence. We help you prepare, apply and track your visa — step by step.",
    icon: FileCheck2,
    image: "/images/study-canada/visa-guidance.png",
    fallbackImage: "/images/how-we-help/documentation-application.png",
    cardBadge: "Official Embassy Guidance",
    cardBadgeSub: "100% authentic and up-to-date process",
    deliverables: [
      "Country-specific visa requirements & documentation checklist",
      "Financial proof & funding documentation verification",
      "Embassy appointment scheduling & DS-160 / CAS support",
      "Rigorous 1-on-1 mock interview preparation sessions",
      "Real-time visa tracking & status updates",
    ],
    metricHeader: "Processing Timeline",
    metricValue: "2 – 8 Weeks",
    metricSub: "Typical embassy turnaround",
    benchmarks: [
      { label: "🇺🇸 USA (F-1)", value: "2–5 weeks" },
      { label: "🇬🇧 UK (Student)", value: "3–6 weeks" },
      { label: "🇨🇦 Canada (SDS)", value: "2–8 weeks" },
      { label: "🇦🇺 Australia (500)", value: "3–8 weeks" },
    ],
    tipTitle: "Mock Interviews",
    tipDesc: "Our ex-visa officers prepare you for tricky intent-to-return and funding questions.",
    ctaLabel: "Book 1-on-1 Visa Mock",
  },
  {
    step: "07",
    shortLabel: "Pre-Departure",
    title: "Pre-Departure Support",
    phase: "PHASE 02 • STAGE 7",
    tagline: "Get ready with flight bookings, student housing, foreign exchange, health insurance and essential packing checklists.",
    icon: PlaneTakeoff,
    image: "/images/guidance/departure.png",
    fallbackImage: "/images/study-canada/pre-departure.png",
    cardBadge: "Pre-Departure Briefing",
    cardBadgeSub: "Zero anxiety before boarding your flight",
    deliverables: [
      "Off-campus student accommodation booking assistance",
      "Student discounted flight bookings & extra baggage allowances",
      "Forex cards, international student bank accounts & SIM cards",
      "Vaccination & medical health insurance compliance",
      "Comprehensive packing checklist (utensils, adaptors, winter wear)",
    ],
    metricHeader: "Briefing Window",
    metricValue: "3 – 4 Weeks",
    metricSub: "Prior to campus orientation",
    benchmarks: [
      { label: "Forex Cards", value: "Zero markup rates" },
      { label: "Student SIM", value: "Active upon landing" },
      { label: "Dorm Check-in", value: "Orientation week" },
      { label: "Luggage Perks", value: "Up to 3 bags allowed" },
    ],
    tipTitle: "Travel Preparation",
    tipDesc: "Connect with seniors and roommates traveling on the same flight via our WhatsApp student groups.",
    ctaLabel: "Join Pre-Departure Group",
  },
  {
    step: "08",
    shortLabel: "Landing",
    title: "Campus Landing & Settlement",
    phase: "PHASE 02 • STAGE 8",
    tagline: "We stay connected even after you land, assisting with airport pickup, campus orientation and settling in smoothly.",
    icon: MapPin,
    image: "/images/study-canada/landing.png",
    fallbackImage: "/images/guidance/departure.png",
    cardBadge: "On-Ground Settlement",
    cardBadgeSub: "Warm welcome to your new university life",
    deliverables: [
      "Airport pickup coordination with university Indian Student Associations",
      "Temporary accommodation check-in & apartment lease signing",
      "Local bank account opening & SSN/SIN guidance",
      "Campus orientation tour & academic advisor meeting",
      "Alumni networking & local emergency support network",
    ],
    metricHeader: "Ongoing Care",
    metricValue: "First 90 Days",
    metricSub: "Dedicated on-ground community",
    benchmarks: [
      { label: "Airport Pickup", value: "Coordinated volunteer" },
      { label: "Bank Account", value: "Day 1 – 3 assistance" },
      { label: "SSN / SIN", value: "Campus job support" },
      { label: "Alumni Circles", value: "50,000+ members" },
    ],
    tipTitle: "Smooth Transition",
    tipDesc: "Our regional alumni chapters are always available if you ever need academic or local advice.",
    ctaLabel: "Connect with Campus Seniors",
  },
];

/* =====================================================================
   TRUST FOOTER METRICS (FROM IMAGE 1 & IMAGE 2)
===================================================================== */
const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Guidance",
    sub: "Trusted by 50,000+ students worldwide",
  },
  {
    icon: Users,
    title: "Expert Counsellors",
    sub: "Guidance from experienced professionals",
  },
  {
    icon: Globe2,
    title: "Global University Network",
    sub: "Top universities across 8+ countries",
  },
  {
    icon: Star,
    title: "Proven Success",
    sub: "High visa success & placement rates",
  },
];

export default function HowUniversityYatraHelps() {
  // Default to Stage 06: Visa (matching Image 1)
  const [activeStepIdx, setActiveStepIdx] = useState(5);
  const currentStep = JOURNEY_STEPS[activeStepIdx];
  const StepIcon = currentStep.icon;

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-[#1765F5]/[0.035] blur-[160px]"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        {/* =============================================================
            1. SECTION HEADER (Clean corporate branding matching Image 1)
        ============================================================= */}
        <div className="relative mb-10 text-center sm:mb-14">
          {/* Top subtle badge */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#1765F5]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1765F5] sm:text-[12px]">
              YOUR STUDY ABROAD JOURNEY
            </span>
            <span className="h-px w-8 bg-[#1765F5]/40" />
          </div>

          {/* Main Title - Two tone with exact line break from Image 1 & 2 */}
          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0C337B] sm:text-[44px] md:text-[52px]">
            How University Yatra<span className="text-[0.45em] font-bold align-top">™</span>
            <br />
            <span className="text-[#1765F5]">Helps You</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-3.5 max-w-2xl text-[13px] leading-relaxed text-[#526B8C] sm:text-[15px]">
            From the first conversation to your first day on campus — we're with you at every step of your study abroad journey. Making it simpler, smarter and stress-free.
          </p>

          {/* Right Accents (Cursive "Your Dreams Our Mission" from Image 2 + Trust Laurel from Image 1) */}
          <div className="pointer-events-none absolute right-0 top-0 hidden lg:flex flex-col items-end">
            {/* Handwritten cursive script from Image 2 */}
            <div
              className="text-[#1765F5] text-[24px] font-semibold -rotate-6 select-none opacity-90 drop-shadow-xs"
              style={{ fontFamily: "'Caveat', 'Segoe Script', 'Brush Script MT', cursive" }}
            >
              Your Dreams
              <br />
              <span className="ml-3">Our Mission</span>
            </div>

            {/* Laurel 5-star trust badge from Image 1 */}
            <div className="mt-3 flex flex-col items-end opacity-90">
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#526B8C]">
                <Award size={14} className="text-[#1765F5]" />
                <span>Trusted by 50,000+ Students</span>
              </div>
              <div className="flex items-center gap-0.5 text-[#F59E0B] mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =============================================================
            2. INTERACTIVE 8-STEP TIMELINE TRACK (Image 1 Style)
        ============================================================= */}
        <div className="relative mx-auto mb-10 w-full max-w-[1240px]">
          {/* Connecting track line with subtle glow */}
          <div
            aria-hidden="true"
            className="absolute left-[6%] right-[6%] top-5 h-[3px] bg-[#E2EBF6] -z-10 rounded-full"
          >
            {/* Active Progress Fill Line */}
            <motion.div
              className="h-full bg-gradient-to-r from-[#1765F5] to-[#5D93F8] shadow-[0_0_12px_rgba(23,101,245,0.5)]"
              initial={false}
              animate={{
                width: `${(activeStepIdx / (JOURNEY_STEPS.length - 1)) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* 8 Step Nodes */}
          <div className="grid grid-cols-8 gap-1 sm:gap-2">
            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStepIdx === idx;
              const isPast = idx < activeStepIdx;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIdx(idx)}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  {/* Circular Node with glowing active state */}
                  <motion.div
                    animate={
                      isActive
                        ? {
                            scale: 1.15,
                            backgroundColor: "#1765F5",
                            color: "#FFFFFF",
                            boxShadow: "0 0 0 6px rgba(23,101,245,0.18), 0 8px 24px rgba(23,101,245,0.45)",
                          }
                        : isPast
                        ? {
                            scale: 1,
                            backgroundColor: "#E8F0FE",
                            color: "#1765F5",
                            boxShadow: "0 2px 8px rgba(12,51,123,0.06)",
                          }
                        : {
                            scale: 1,
                            backgroundColor: "#FFFFFF",
                            color: "#526B8C",
                            boxShadow: "0 2px 8px rgba(12,51,123,0.06)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="
                      flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
                      rounded-full border-2 border-white
                      font-mono text-[12px] sm:text-[13px] font-extrabold
                      cursor-pointer transition-colors
                    "
                  >
                    {step.step}
                  </motion.div>

                  {/* Label below node */}
                  <span
                    className={`
                      mt-2 block text-[10px] sm:text-[11.5px] md:text-[12px] font-bold tracking-tight whitespace-nowrap
                      transition-colors
                      ${
                        isActive
                          ? "text-[#1765F5] font-extrabold"
                          : "text-[#526B8C] group-hover:text-[#0C337B]"
                      }
                    `}
                  >
                    {step.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =============================================================
            3. ACTIVE SHOWCASE BENTO CARD (Exact Image 1 Layout)
        ============================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              relative mx-auto w-full max-w-[1240px]
              rounded-3xl border border-[#D9E6F6]
              bg-white
              p-5 sm:p-7 md:p-8
              shadow-[0_20px_50px_rgba(12,51,123,0.08)]
            "
          >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center">
              
              {/* =======================================================
                  LEFT COLUMN: Visual Feature Card with Themed Art (3.5 cols)
              ======================================================= */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative h-[250px] sm:h-[270px] w-full rounded-2xl overflow-hidden border border-[#D9E6F6] bg-gradient-to-br from-[#EAF4FA] via-[#F4F9FF] to-[#E2EBF6] shadow-sm flex items-center justify-center p-4">
                  {/* Subtle decorative architectural grid lines */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1765F5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Main Themed Graphic Image */}
                  <div className="relative h-[180px] w-[180px] transition-transform duration-500 hover:scale-105">
                    <Image
                      src={currentStep.image}
                      alt={currentStep.title}
                      fill
                      className="object-contain drop-shadow-[0_12px_24px_rgba(12,51,123,0.18)]"
                      onError={(e) => {
                        e.currentTarget.src = currentStep.fallbackImage;
                      }}
                    />
                  </div>

                  {/* Bottom Frosted Pill matching Image 1 */}
                  <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/80 bg-white/95 p-2.5 shadow-sm backdrop-blur-md flex items-center gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1765F5]/10 text-[#1765F5]">
                      <ShieldCheck size={16} />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-[11px] font-extrabold text-[#0C337B] leading-tight truncate">
                        {currentStep.cardBadge}
                      </span>
                      <span className="text-[9.5px] font-medium text-[#64748B] leading-tight mt-0.5 truncate">
                        {currentStep.cardBadgeSub}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* =======================================================
                  CENTER COLUMN: Phase Badge, Title & Key Deliverables (5 cols)
              ======================================================= */}
              <div className="lg:col-span-5 flex flex-col justify-center px-1 sm:px-2">
                {/* Phase Pill */}
                <div className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-[#E8F0FE] px-3 py-1 font-mono text-[10px] font-extrabold tracking-wider uppercase text-[#1765F5]">
                    {currentStep.phase}
                  </span>
                </div>

                {/* Stage Title */}
                <div className="mt-2.5 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5]">
                    <StepIcon size={20} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h3 className="text-[20px] sm:text-[23px] font-extrabold tracking-tight text-[#0C337B] leading-snug">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                {/* Tagline */}
                <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C]">
                  {currentStep.tagline}
                </p>

                {/* Key Deliverables Heading */}
                <div className="mt-4 border-t border-slate-100 pt-3.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0C337B]">
                    Key Deliverables
                  </span>
                  
                  {/* Checklist with Green Checkmarks (from Image 1) */}
                  <ul className="mt-2.5 space-y-2">
                    {currentStep.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#10B981]" />
                        <span className="text-[12px] sm:text-[12.5px] leading-snug text-[#425A70]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* =======================================================
                  RIGHT COLUMN: Metric Benchmark, Tip & Action Buttons (3.5 cols)
              ======================================================= */}
              <div className="lg:col-span-3 flex flex-col justify-between space-y-3.5">
                
                {/* Benchmark / Metric Card (Image 1 style) */}
                <div className="rounded-2xl border border-[#D9E6F6] bg-[#F8FAFC] p-4">
                  <div className="flex items-center gap-1.5 text-[#526B8C]">
                    <Clock size={14} className="text-[#1765F5]" />
                    <span className="text-[10.5px] font-bold uppercase tracking-wider">
                      {currentStep.metricHeader}
                    </span>
                  </div>

                  {/* Big Stat Value */}
                  <div className="mt-2">
                    <span className="text-[24px] font-black tracking-tight text-[#0C337B]">
                      {currentStep.metricValue}
                    </span>
                    <p className="text-[10px] text-[#64748B]">
                      {currentStep.metricSub}
                    </p>
                  </div>

                  {/* Flag / Sub-benchmarks List */}
                  <div className="mt-3 space-y-1.5 border-t border-slate-200/60 pt-2.5">
                    {currentStep.benchmarks.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center justify-between text-[11px]">
                        <span className="font-medium text-[#425A70]">{b.label}</span>
                        <span className="font-bold text-[#0C337B]">{b.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expert Support / Tip Card (Image 1 style) */}
                <div className="rounded-2xl border border-amber-200/70 bg-amber-50/50 p-3.5 flex items-start gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <Lightbulb size={15} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-extrabold text-[#78350F]">
                      {currentStep.tipTitle}
                    </span>
                    <p className="mt-0.5 text-[10.5px] leading-tight text-[#92400E]">
                      {currentStep.tipDesc}
                    </p>
                  </div>
                </div>

                {/* Action Buttons (Image 1 style) */}
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href="https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20studying%20abroad."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-full border border-[#1765F5]
                      bg-[#1765F5]
                      px-5 py-3
                      text-[12.5px] font-bold text-white
                      shadow-[0_8px_20px_rgba(23,101,245,0.28)]
                      transition-all hover:bg-[#0C337B] hover:shadow-[0_12px_28px_rgba(12,51,123,0.38)]
                    "
                  >
                    <span>{currentStep.ctaLabel}</span>
                    <ArrowRight size={14} />
                  </a>

                  <Link
                    href="/career-counseling-admission-guidance"
                    className="
                      inline-flex items-center justify-center gap-1.5
                      rounded-full border border-slate-200
                      bg-white
                      px-4 py-2
                      text-[11.5px] font-bold text-[#526B8C]
                      transition-colors hover:border-[#1765F5] hover:text-[#1765F5]
                    "
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>


        {/* =============================================================
            5. BOTTOM TRUST INDICATORS BAR (Common to Both Images)
        ============================================================= */}
        <div className="mt-12 w-full rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-xs">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:divide-x md:divide-slate-100">
            {TRUST_POINTS.map((item, idx) => {
              const TIcon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 px-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#1765F5]">
                    <TIcon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block text-[12px] font-extrabold text-[#0C337B] leading-tight">
                      {item.title}
                    </span>
                    <span className="block text-[10px] text-[#64748B] leading-tight mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

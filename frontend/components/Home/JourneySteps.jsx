"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  FileText,
  Globe,
  GraduationCap,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

/**
 * "Everything You Need to Begin Your Global Education Journey"
 *
 * Photo: pass `image="/images/journey-student.jpg"` – portrait, about 4:5
 * (e.g. 1000 × 1250 px), a smiling student with friends behind. Until then a
 * navy placeholder is shown.
 *
 * Steps: tap / click a step (or its number) to open it. On laptop and desktop
 * every description stays visible; on mobile only the open step is expanded.
 */

const STEPS = [
  {
    icon: UserCheck,
    title: "Understanding Your Eligibility",
    text: "We evaluate your academic profile, background, and preferences to help you identify universities and countries where you meet all admission requirements.",
    tile: "bg-brand-navy/10 text-brand-navy",
  },
  {
    icon: Globe,
    title: "Country & Program Selection",
    text: "Get expert guidance to choose the right country, course and university based on your goals, budget and career plans.",
    tile: "bg-brand-teal/15 text-brand-teal-ink",
  },
  {
    icon: FileText,
    title: "Document Preparation & SOP Review",
    text: "We help you prepare and review essential documents, including your SOP, LORs and academic records, to make your application stand out.",
    tile: "bg-brand-navy/10 text-brand-navy",
  },
  {
    icon: ShieldCheck,
    title: "Application Filing & Tracking",
    text: "We handle your applications, keep you updated on timelines and track your progress until you receive your offer letter and visa.",
    tile: "bg-brand-teal/15 text-brand-teal-ink",
  },
];

export default function JourneySteps({
  image = null,
  stat = {
    value: "1000+",
    label: "Students Guided",
    text: "To their dream universities worldwide",
  },
}) {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="journey-title"
      className="relative isolate overflow-hidden bg-white py-12 sm:py-16 lg:py-10"
    >
      {/* Soft background glows */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 -z-10 size-80 rounded-full bg-brand-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 -z-10 size-96 rounded-full bg-tint-sky-deep/60 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-x-16 lg:px-8 xl:gap-x-20">
        {/* ---------- Heading + intro ---------- */}
        <header className="lg:col-start-2 lg:row-start-1">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-teal-ink">
            <span aria-hidden="true" className="h-px w-10 bg-brand-teal" />
            Your global education journey
          </p>

          <h2
            id="journey-title"
            className="mt-4 text-balance text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-brand-navy-dark sm:text-5xl lg:text-[2rem]"
          >
            Everything You Need to{" "}
            <span className="text-brand-teal-ink">Begin Your Global Education Journey</span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We provide clear, step-by-step guidance to help you understand every
            requirement of the study-abroad process..
          </p>
        </header>

        {/* ---------- Photo + floating cards ---------- */}
        <div className="relative lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
          {/* Shapes behind the photo */}
          <span
            aria-hidden="true"
            className="absolute -right-3 top-8 -z-10 h-3/4 w-3/4 rounded-[45%_55%_40%_60%] bg-linear-to-br from-brand-teal/40 to-tint-sky-deep sm:-right-6"
          />
          <span
            aria-hidden="true"
            className="absolute -left-3 bottom-1/4 -z-10 h-1/3 w-1/4 rounded-[55%_45%_60%_40%] bg-brand-teal/20 sm:-left-6"
          />

          <div className="relative mb-0 sm:mb-16 lg:mb-20">
            {/* Photo in an organic frame */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-tl-[3.5rem] rounded-tr-[1.75rem] rounded-br-[4rem] rounded-bl-[1.5rem] bg-brand-navy shadow-[0_30px_60px_-24px_rgba(0,40,90,0.55)] sm:rounded-tl-[5rem] sm:rounded-tr-[2.5rem] sm:rounded-br-[6rem] sm:rounded-bl-[2rem] lg:max-w-none">
              {image ? (
                <Image
                  src={image}
                  alt="A smiling student holding a laptop, with friends seated behind her"
                  fill
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 32rem, 92vw"
                  className="object-cover"
                />
              ) : (
                <div className="grid size-full place-items-center bg-linear-to-br from-brand-navy to-[#0a4a99] text-white/30">
                  <GraduationCap
                    aria-hidden="true"
                    className="size-28 sm:size-36"
                    strokeWidth={1}
                  />
                </div>
              )}

              {/* Handwritten note */}
              <div className="absolute left-3 top-3 z-10 rounded-3xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:left-5 sm:top-5 sm:px-6 sm:py-4">
                <p className="-rotate-6 font-script text-2xl font-semibold leading-[1.05] text-brand-navy-dark sm:text-4xl">
                  Learn
                  <br />
                  <span className="ml-3 sm:ml-5">Explore</span>
                  <br />
                  <span className="ml-1 sm:ml-2">Grow</span>
                </p>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 80 12"
                  fill="none"
                  className="mt-1 h-2.5 w-20 text-brand-teal sm:w-24"
                >
                  <path
                    d="M2 9C22 2 52 2 78 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Support card: overlaps the photo (in-flow on mobile) */}
            <div className="relative z-10 mx-3 -mt-12 rounded-2xl bg-white p-5 shadow-[0_24px_50px_-20px_rgba(0,40,90,0.45)] ring-1 ring-brand-navy/5 sm:absolute sm:-bottom-8 sm:left-0 sm:mx-0 sm:mt-0 sm:w-[19rem] lg:-bottom-6 lg:w-80">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-teal/15 text-brand-teal-ink">
                  <GraduationCap aria-hidden="true" className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-bold leading-snug text-brand-navy-dark">
                  Dedicated Support at Every Stage
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Whether it&apos;s your first consultation or your final visa, our team
                stays connected with you throughout the journey.
              </p>
              <Link
                href="/counselling"
                className="group mt-3 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
              >
                Start Learning
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </Link>
            </div>

            {/* Stat card */}
            <div className="relative z-10 mx-3 mt-3 flex items-center gap-4 rounded-2xl bg-tint-sky p-4 ring-1 ring-brand-navy/5 sm:absolute sm:-bottom-14 sm:right-0 sm:mx-0 sm:mt-0 sm:w-60 lg:-bottom-16">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-brand-navy shadow-sm">
                <Globe aria-hidden="true" className="size-6" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-2xl font-extrabold leading-none text-brand-navy-dark">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-brand-navy">{stat.label}</p>
                <p className="mt-0.5 text-xs leading-snug text-slate-600">{stat.text}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Steps ---------- */}
        <div className="lg:col-start-2 lg:row-start-2">
          <ul className="space-y-3">
            {STEPS.map(({ icon: Icon, title, text, tile }, i) => {
              const on = i === active;
              return (
                <li
                  key={title}
                  className={`relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-2xl border p-4 transition-all duration-300 motion-reduce:transition-none sm:gap-x-5 sm:p-5 ${
                    on
                      ? "border-brand-teal/60 bg-white shadow-[0_20px_44px_-22px_rgba(0,56,112,0.5)]"
                      : "border-brand-navy/10 bg-white/70 hover:border-brand-navy/25 hover:bg-white"
                  }`}
                >
                  <span
                    className={`grid size-12 place-items-center rounded-full sm:size-14 ${tile}`}
                  >
                    <Icon aria-hidden="true" className="size-6 sm:size-7" strokeWidth={1.75} />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-snug text-brand-navy-dark sm:text-lg">
                      {/* Stretched button: the whole row is the click target */}
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-expanded={on}
                        aria-controls={`journey-step-${i}`}
                        className="text-left after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                      >
                        {title}
                      </button>
                    </h3>

                    <div
                      id={`journey-step-${i}`}
                      className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none lg:grid-rows-[1fr] ${
                        on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
                      </div>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`grid size-9 place-items-center rounded-full border transition-colors ${
                      on
                        ? "border-brand-navy bg-brand-navy text-white"
                        : "border-brand-navy/20 text-brand-navy"
                    }`}
                  >
                    <ArrowRight className="size-4" />
                  </span>
                </li>
              );
            })}
          </ul>

          {/* 01 – 04 step numbers */}
          <div role="group" aria-label="Choose a step" className="mt-5 flex items-center gap-2">
            {STEPS.map((step, i) => {
              const on = i === active;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Step ${i + 1}: ${step.title}`}
                  aria-current={on ? "step" : undefined}
                  className={`relative min-h-11 min-w-11 px-2 text-sm font-semibold tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-brand-teal ${
                    on ? "text-brand-navy" : "text-slate-500 hover:text-brand-navy"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2 bottom-1.5 h-0.5 rounded-full transition-colors ${
                      on ? "bg-brand-teal" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { MapPin, BookOpen, TrendingUp, Clipboard, ArrowRight } from "lucide-react";

export default function WhatYouGet() {
  const benefits = [
    {
      number: "01",
      icon: MapPin,
      title: "Suitable study destinations",
      desc: "Countries that make sense for your profile and preferences.",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Relevant course direction",
      desc: "Programmes matched to your background and career goals.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Realistic admission outlook",
      desc: "An honest view of feasibility and possible improvements.",
    },
    {
      number: "04",
      icon: Clipboard,
      title: "Preparation roadmap",
      desc: "Documentation, timelines and sensible next steps.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFF] to-white py-16 sm:py-20 lg:py-24">
      
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#1765F5]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#1765F5]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            WHAT YOU WILL GET
          </p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[36px] lg:text-[42px]">
            Leave with direction,{" "}
            <span className="text-[#1765F5]">not confusion.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[750px] text-[15px] leading-[1.7] text-[#526B8C] sm:text-[16px]">
            Your free counselling session is designed to give you practical clarity — not a generic list of universities.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-[#D9E5FA] bg-white p-8 shadow-md transition-all hover:border-[#1765F5] hover:shadow-2xl"
              >
                {/* Gradient glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#1765F5]/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                />

                <div className="relative">
                  {/* Number badge */}
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#E0EFFE] px-3 py-1 text-[12px] font-bold text-[#1765F5]">
                    {benefit.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1765F5] to-[#0C337B] text-white shadow-lg">
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-bold leading-[1.3] text-[#0C337B] sm:text-[20px]">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#526B8C] sm:text-[15px]">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#assessment"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1765F5] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#1765F5]/25 transition-all hover:bg-[#0C337B] hover:shadow-xl"
          >
            <span>Start Free Assessment</span>
            <ArrowRight size={20} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

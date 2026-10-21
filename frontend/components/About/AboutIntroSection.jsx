
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, GraduationCap } from "lucide-react";

const features = [
  {
    title: "Profile-First Guidance",
    description: "Academic background, budget and career goals come first.",
    Icon: GraduationCap,
  },
  {
    title: "Transparent Process",
    description: "Clear eligibility, requirements, risks and timelines.",
    Icon: ShieldCheck,
  },
];

export default function AboutIntroSection() {
  return (
    <section aria-labelledby="about-intro-title" className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 px-4 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:gap-10 lg:gap-14 lg:px-8">

        {/* LEFT - SINGLE COLLAGE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[550px]"
        >
          <Image
            src="/images/about/about-collage.webp"
            alt="University Yatra students exploring education opportunities, collaborating and studying online"
            width={1536}
            height={1024}
            sizes="(max-width: 767px) 100vw, 45vw"
            className="block h-auto w-full object-contain"
            priority={false}
          />
        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0"
        >
          {/* EYEBROW */}
          <div className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#1765F5]" />
            About University Yatra™
          </div>

          {/* HEADING */}
          <h2 id="about-intro-title" className="max-w-[600px] text-[29px] font-extrabold leading-[1.16] tracking-[-0.035em] text-[#0C337B] sm:text-[35px] md:text-[33px] lg:text-[43px]">
            Committed To Excellence In{" "}
            <span className="text-[#1765F5]">
              Providing Online Education
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-[580px] text-[14px] leading-[1.85] text-[#53647C] sm:text-[15px]">
            Honest, profile-based study abroad guidance — focused on clarity, career outcomes, and fraud-free decisions.
          </p>

          <p className="mt-3 max-w-[580px] text-[14px] leading-[1.85] text-[#53647C] sm:text-[15px]">
            University Yatra™ is an education and guidance platform operating under Future Yatra Private Limited. We help students and families make informed decisions about studying abroad through honest counselling, profile-based strategy, and transparent processes — without false promises or misleading advice.
          </p>

          {/* FEATURE POINTS */}
          <div className="mt-7 grid grid-cols-1 gap-5 border-t border-[#E4ECF7] pt-6 sm:grid-cols-2 sm:gap-4">
            {features.map(({ title, description, Icon }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D6E5FF] bg-[#EDF5FF] text-[#1765F5]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold leading-[1.4] text-[#0C337B]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-[1.65] text-[#65758D]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/contact-us/" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1765F5] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_7px_18px_rgba(23,101,245,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] hover:shadow-[0_10px_24px_rgba(12,51,123,0.2)]">
              Free Career Counselling
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

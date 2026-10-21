"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Profile-based country and course selection",
  "University shortlisting and application support",
  "Document preparation and SOP guidance",
  "Visa process support and interview preparation",
  "Pre-departure guidance and orientation",
  "Post-landing support and career guidance",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhatWeDoSection() {
  return (
    <section
      aria-labelledby="what-we-do-title"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_0.95fr] md:gap-12 lg:gap-16">
          {/* LEFT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-w-0"
          >
            {/* EYEBROW */}
            <div className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#1765F5]" />
              What We Do
            </div>

            {/* HEADING */}
            <h2
              id="what-we-do-title"
              className="max-w-[540px] text-[29px] font-extrabold leading-[1.16] tracking-[-0.035em] text-[#0C337B] sm:text-[35px] lg:text-[40px]"
            >
              Comprehensive{" "}
              <span className="text-[#1765F5]">Study Abroad</span>{" "}
              Support
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[560px] text-[14px] leading-[1.85] text-[#53647C] sm:text-[15px]">
              From profile evaluation to post-landing support, we guide you through every step of your study abroad journey with honesty and expertise.
            </p>

            {/* SERVICE LIST */}
            <div className="mt-7 space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF5FF] text-[#1765F5]">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                  </div>
                  <p className="text-[14px] font-medium leading-[1.65] text-[#0C337B] sm:text-[15px]">
                    {service}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-[#DFEAFB] bg-[#EDF5FF]">
              <Image
                src="/images/about/what-we-do.webp"
                alt="Students receiving study abroad guidance and counselling"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* FLOATING 3D ICON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 h-[120px] w-[120px] rounded-full border-4 border-white bg-[#EDF5FF] shadow-[0_12px_32px_rgba(12,51,123,0.12)] sm:-bottom-8 sm:-right-8 sm:h-[140px] sm:w-[140px]"
            >
              <div className="relative h-full w-full p-4">
                <Image
                  src="/images/about/icons/guidance-support-3d.webp"
                  alt="Support icon"
                  fill
                  sizes="140px"
                  className="object-contain p-4"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

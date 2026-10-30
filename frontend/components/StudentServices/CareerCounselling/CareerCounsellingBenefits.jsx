
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, UserRoundCheck, Target, Globe2, FileCheck2, ShieldCheck, GraduationCap, Sparkles } from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "100% Free & No Obligation",
    description: "Counselling & profile assessment is completely free, no pressure to enroll.",
    icon: BadgeCheck,
    bg: "#EAF3FF",
    iconBg: "#D4E6FF",
    iconColor: "#1765F5",
    border: "#C2DAFC",
  },
  {
    number: "02",
    title: "Profile-Based Guidance",
    description: "Advice is given after analysing academics, experience, gaps, and goals.",
    icon: UserRoundCheck,
    bg: "#F1EAFE",
    iconBg: "#E4D5FF",
    iconColor: "#6550C8",
    border: "#E0D0F8",
  },
  {
    number: "03",
    title: "Career-First Approach",
    description: "We focus on long-term career outcomes, not just short-term admissions.",
    icon: Target,
    bg: "#E9F8F2",
    iconBg: "#CEF0DF",
    iconColor: "#168365",
    border: "#C8EADB",
  },
  {
    number: "04",
    title: "Country & Course Clarity",
    description: "Understand which countries and courses realistically suit your profile.",
    icon: Globe2,
    bg: "#FFF1E8",
    iconBg: "#FFDFC9",
    iconColor: "#BE6739",
    border: "#F5D9C7",
  },
  {
    number: "05",
    title: "PR-Oriented Planning",
    description: "Where relevant, we explain how study choices may align with long-term pathways.",
    icon: FileCheck2,
    bg: "#E6F6FC",
    iconBg: "#CCEAF7",
    iconColor: "#1679A1",
    border: "#C4E4F0",
  },
  {
    number: "06",
    title: "Honest & Transparent Advice",
    description: "No false promises, no guaranteed claims, no misleading guidance.",
    icon: ShieldCheck,
    bg: "#FFF7DD",
    iconBg: "#F9E9B6",
    iconColor: "#A67B14",
    border: "#F1E3B6",
  },
];

const desktopPositions = [
  "left-[2%] top-[10px]",
  "right-[2%] top-[10px]",
  "left-[2%] top-[166px]",
  "right-[2%] top-[166px]",
  "left-[2%] top-[322px]",
  "right-[2%] top-[322px]",
];

function DesktopCard({ item, index, reducedMotion }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={reducedMotion ? undefined : { y: -5 }}
      className={`absolute z-20 flex h-[132px] w-[32%] max-w-[380px] min-w-0 items-center rounded-[20px] border p-5 shadow-[0_8px_22px_rgba(12,51,123,0.055)] transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(12,51,123,0.11)] ${desktopPositions[index]}`}
      style={{ backgroundColor: item.bg, borderColor: item.border }}
    >
      <div className="flex w-full min-w-0 items-start gap-3">
        <div className="flex h-[49px] w-[49px] shrink-0 items-center justify-center rounded-[15px]" style={{ backgroundColor: item.iconBg }}>
          <Icon size={25} strokeWidth={1.9} color={item.iconColor} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-bold leading-[1.3] text-[#0C337B]">{item.title}</h3>
            <span className="shrink-0 text-[11px] font-bold text-[#0C337B]/40">{item.number}</span>
          </div>

          <p className="mt-1 text-[12px] leading-[1.55] text-[#405A83]">{item.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

function MobileTimelineCard({ item, index, reducedMotion }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: 0.04 }}
      className="relative min-w-0 pl-[51px] sm:pl-[64px]"
    >
      {/* Timeline node */}
      <div className="absolute left-[5px] top-[21px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border-[3px] border-white bg-[#1765F5] text-[10px] font-bold text-white shadow-[0_2px_10px_rgba(23,101,245,0.22)] sm:left-[11px]">
        {item.number}
      </div>

      {/* Horizontal connection */}
      <div className="absolute left-[35px] top-[36px] h-px w-[16px] bg-[#B5CDF8] sm:left-[41px] sm:w-[23px]" />

      {/* Benefit card */}
      <div className="relative min-h-[116px] overflow-hidden rounded-[18px] border p-[14px] shadow-[0_5px_18px_rgba(12,51,123,0.045)] sm:p-5" style={{ backgroundColor: item.bg, borderColor: item.border }}>
        <div className="absolute right-[-10px] top-[-21px] h-[82px] w-[82px] rounded-full opacity-35" style={{ backgroundColor: item.iconBg }} />

        <div className="relative flex items-start gap-3">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] sm:h-[48px] sm:w-[48px]" style={{ backgroundColor: item.iconBg }}>
            <Icon size={22} strokeWidth={1.9} color={item.iconColor} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-[14px] font-bold leading-[1.35] text-[#0C337B] sm:text-[16px]">{item.title}</h3>
            <p className="mt-[5px] text-[12px] leading-[1.55] text-[#405A83] sm:text-[13px]">{item.description}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CenterHub({ reducedMotion, mobile = false }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={mobile ? "relative mx-auto flex h-[150px] w-[150px] items-center justify-center" : "absolute left-1/2 top-1/2 z-10 flex h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"}
    >
      <div className="absolute inset-0 rounded-full bg-[#E1ECFF]" />

      <motion.div
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[8px] rounded-full border-2 border-dashed border-[#1765F5]/30"
      />

      <div className={mobile ? "relative flex h-[124px] w-[124px] flex-col items-center justify-center rounded-full border-[5px] border-white bg-[#1765F5] text-white shadow-[0_15px_35px_rgba(23,101,245,0.2)]" : "relative flex h-[175px] w-[175px] flex-col items-center justify-center rounded-full border-[6px] border-white bg-[#1765F5] text-white shadow-[0_20px_45px_rgba(23,101,245,0.24)]"}>
        <GraduationCap size={mobile ? 27 : 35} strokeWidth={1.8} />

        <span className={mobile ? "mt-1.5 text-center text-[15px] font-extrabold leading-[1.1]" : "mt-2 text-center text-[18px] font-extrabold leading-[1.1]"}>
          University
          <br />
          Yatra
        </span>

        {!mobile && <span className="mt-2 text-[9px] font-medium tracking-[0.12em] text-white/80">YOUR FUTURE</span>}
      </div>

      <div className={mobile ? "absolute right-[1px] top-[16px] flex h-[29px] w-[29px] items-center justify-center rounded-[10px] bg-white shadow-md" : "absolute right-[5px] top-[25px] flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-md"}>
        <Sparkles size={mobile ? 16 : 19} color="#1765F5" />
      </div>
    </motion.div>
  );
}

function DesktopConnectors() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1340 470" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <g fill="none" stroke="#93B7F5" strokeWidth="2" strokeDasharray="5 7" opacity="0.8">
        <path d="M670 235 C530 235 590 76 400 76" />
        <path d="M670 235 C810 235 750 76 940 76" />
        <path d="M670 235 C550 235 540 232 400 232" />
        <path d="M670 235 C790 235 800 232 940 232" />
        <path d="M670 235 C530 235 590 388 400 388" />
        <path d="M670 235 C810 235 750 388 940 388" />
      </g>
      {[[400,76],[940,76],[400,232],[940,232],[400,388],[940,388]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#1765F5" opacity="0.75" />
      ))}
    </svg>
  );
}

export default function CareerCounsellingBenefits() {
  const reducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="career-benefits-heading" className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8 xl:px-5">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="mb-7 text-center lg:mb-9">
          <span className="mb-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#1765F5]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#1765F5]" />
            Our Counselling Advantages
          </span>

          <h2 id="career-benefits-heading" className="text-[26px] font-extrabold leading-[1.18] tracking-[-0.035em] text-[#0C337B] sm:text-[34px] lg:text-[39px]">
            How Career <span className="text-[#1765F5]">Counselling Helps</span>
          </h2>
        </motion.div>

        {/* Desktop */}
        <div className="relative hidden h-[470px] w-full lg:block">
          <DesktopConnectors />
          <CenterHub reducedMotion={reducedMotion} />

          {benefits.map((item, index) => (
            <DesktopCard key={item.number} item={item} index={index} reducedMotion={reducedMotion} />
          ))}
        </div>

        {/* Mobile + Tablet Timeline */}
        <div className="relative mx-auto w-full max-w-[670px] lg:hidden">
          <div className="mb-5 flex flex-col items-center">
            <CenterHub reducedMotion={reducedMotion} mobile />
            <div className="mt-[-2px] h-7 w-px bg-[#B5CDF8]" />
          </div>

          <div className="relative flex flex-col gap-3.5 pb-1">
            <div className="absolute bottom-[45px] left-[19px] top-0 w-[2px] bg-gradient-to-b from-[#1765F5] via-[#A2C1FB] to-[#DBE7FF] sm:left-[25px]" />

            {benefits.map((item, index) => (
              <MobileTimelineCard key={item.number} item={item} index={index} reducedMotion={reducedMotion} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

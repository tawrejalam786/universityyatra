
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ==========================================
   SERVICES DATA
========================================== */

const services = [
  {
    id: "01",
    label: "DISCOVER",
    title: "Country & Course Selection",
    description:
      "You know where you want to go. Or maybe you just know you want to go somewhere.",
    image: "/images/home/university-selectoon.png",
    href: "/study-abroad",
    background: "#2459C5",
    textColor: "#FFFFFF",
    descriptionColor: "#E8F0FE",
    imageAlt: "Globe, airplane and education icons",
    size: "large",
  },
  {
    id: "02",
    label: "FUND",
    title: "Scholarships & Education Loans",
    description:
      "Studying abroad is exciting. Figuring out the finances? Not so much.",
    image: "/images/home/scholarship-loan.png",
    href: "/scholarships",
    background: "#A7BDE8",
    textColor: "#0C337B",
    descriptionColor: "#1047AC",
    imageAlt: "Scholarship certificate, graduation cap and coins",
    size: "small",
  },
  {
    id: "03",
    label: "APPLY",
    title: "Admissions & Visa Process",
    description:
      "Your dream university is shortlisted. Now comes the paperwork.",
    image: "/images/home/admission-visa.png",
    href: "/admissions",
    background: "#6E94D8",
    textColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
    imageAlt: "Passport, visa and admission documents",
    size: "small",
  },
  {
    id: "04",
    label: "BUILD YOUR CAREER",
    title: "Post-Study Work Opportunities",
    description:
      "Your degree is the beginning. What comes after it?",
    image: "/images/home/post-study-work.png",
    href: "/post-study-work",
    background: "#244779",
    textColor: "#FFFFFF",
    descriptionColor: "#E8F0FE",
    imageAlt: "Briefcase, career growth chart and profile card",
    size: "large",
  },
];

/* ==========================================
   REUSABLE SERVICE CARD
========================================== */

function ServiceCard({ item, index }) {
  const isLarge = item.size === "large";

  return (
    <article
      style={{
        backgroundColor: item.background,
        color: item.textColor,
      }}
      className="group relative isolate flex h-full min-h-[225px] min-w-0 flex-col overflow-hidden rounded-[18px] p-4 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(12,51,123,0.14)] sm:min-h-[235px] sm:rounded-[20px] sm:p-[18px] lg:min-h-[245px]"
    >

      {/* BACKGROUND DECORATION */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-14 -z-10 h-40 w-40 rounded-full bg-white/[0.06]" />

      {/* TOP LABEL */}
      <div className="relative z-20 flex items-start justify-between gap-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-90 sm:text-[10px]">
          {item.label}
        </p>

        {/* EXPLORE LINK */}
        <Link
          href={item.href}
          aria-label={`Explore ${item.title}`}
          className="relative z-30 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/20 bg-white/15 transition-all duration-300 hover:rotate-45 hover:bg-white/25 sm:h-8 sm:w-8"
        >
          <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </div>

      {/* LARGE BENTO CARD */}
      {isLarge ? (
        <div className="relative flex min-h-0 flex-1 items-center justify-between gap-2">

          {/* LEFT TEXT */}
          <div className="relative z-10 w-[56%] min-w-0 py-2 sm:w-[55%]">

            <h3 className="max-w-[320px] text-[18px] font-extrabold leading-[1.16] tracking-[-0.03em] sm:text-[20px] lg:text-[23px]">
              {item.title}
            </h3>

            <p
              style={{ color: item.descriptionColor }}
              className="mt-2 max-w-[320px] text-[11px] leading-[1.55] sm:text-[12px]"
            >
              {item.description}
            </p>

          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="pointer-events-none relative h-[130px] w-[44%] shrink-0 sm:h-[155px] sm:w-[45%] lg:h-[170px]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              priority={index === 0}
              sizes="(max-width: 639px) 42vw, (max-width: 1023px) 32vw, 260px"
              className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      ) : (

        /* SMALL BENTO CARD */
        <div className="relative flex min-h-0 flex-1 flex-col">

          {/* TOP ILLUSTRATION */}
          <div className="pointer-events-none relative mx-auto h-[95px] w-full max-w-[175px] sm:h-[110px] lg:h-[120px]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 639px) 80vw, (max-width: 1023px) 30vw, 200px"
              className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* BOTTOM TEXT */}
          <div className="relative z-10 mt-auto">

            <h3 className="text-[17px] font-extrabold leading-[1.17] tracking-[-0.025em] sm:text-[18px] lg:text-[19px]">
              {item.title}
            </h3>

            <p
              style={{ color: item.descriptionColor }}
              className="mt-1.5 text-[11px] leading-[1.5] sm:text-[12px]"
            >
              {item.description}
            </p>

          </div>
        </div>
      )}

    </article>
  );
}

/* ==========================================
   MAIN SECTION
========================================== */

export default function NextChapter() {
  return (
    <section
      aria-labelledby="next-chapter-title"
      className="w-full overflow-hidden bg-[#E3F0FC] py-8 sm:py-9 lg:py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-5 lg:px-6">

        {/* SECTION HEADER */}
        <div className="mb-5 text-center sm:mb-6 lg:mb-7">

          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
            SUPPORT AT EVERY STEP
          </p>

          <h2
            id="next-chapter-title"
            className="mx-auto max-w-[760px] text-balance text-[25px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#1765F5] sm:text-[30px] lg:text-[34px]"
          >
            Big Dreams.{" "}
            <span className="text-[#0C337B]">
              A Lot to Figure Out.
            </span>
          </h2>

        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3.5">

          {/* 01 - LARGE */}
          <div className="min-w-0 sm:col-span-2">
            <ServiceCard item={services[0]} index={0} />
          </div>

          {/* 02 - SMALL */}
          <div className="min-w-0 sm:col-span-1">
            <ServiceCard item={services[1]} index={1} />
          </div>

          {/* 03 - SMALL */}
          <div className="min-w-0 sm:col-span-1">
            <ServiceCard item={services[2]} index={2} />
          </div>

          {/* 04 - LARGE */}
          <div className="min-w-0 sm:col-span-2">
            <ServiceCard item={services[3]} index={3} />
          </div>

        </div>

      </div>
    </section>
  );
}


import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    label: "DISCOVER",
    // category: "COUNTRY & COURSE SELECTION",
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
    // category: "SCHOLARSHIPS & EDUCATION LOANS",
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
    // category: "ADMISSIONS & VISA",
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
    // category: "POST-STUDY OPPORTUNITIES",
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

function ServiceCard({ item, index }) {
  const isLarge = item.size === "large";

  return (
    <article
      style={{
        backgroundColor: item.background,
        color: item.textColor,
      }}
      className="group relative isolate flex h-full min-h-[235px] min-w-0 flex-col overflow-hidden rounded-[20px] p-4 sm:min-h-[270px] sm:rounded-[24px] sm:p-5 lg:min-h-[290px] lg:p-6"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-14 -z-10 h-48 w-48 rounded-full bg-white/[0.06]"
      />

      {/* Top row */}
      <div className="relative z-20 flex items-start justify-between gap-3">
        <div className="min-w-0">
          {/* <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] sm:text-[11px]">
            {item.id} / 04
          </p> */}

          <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.1em] opacity-85 sm:mt-2 sm:text-[10px]">
            {item.label}
          </p>
        </div>

        {/* <Link
          href={item.href}
          aria-label={`Explore ${item.title}`}
          className="relative z-30 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current/20 bg-white/15 transition-all duration-300 hover:rotate-45 hover:bg-white/25 sm:h-9 sm:w-9"
        >
          <ArrowUpRight size={18} strokeWidth={2} />
        </Link> */}
      </div>

      {/* LARGE BENTO CARDS */}
      {isLarge ? (
        <div className="relative flex min-h-0 flex-1 items-center justify-between gap-2">
          {/* Text */}
          <div className="relative z-10 w-[55%] min-w-0 py-3 sm:w-[53%]">
            <p className="mb-2 text-[9px] font-bold uppercase leading-[1.4] tracking-[0.08em] opacity-85 sm:text-[10px]">
              {item.category}
            </p>

            <h3 className="max-w-[350px] text-[19px] font-extrabold leading-[1.13] tracking-[-0.035em] sm:text-[23px] lg:text-[clamp(23px,2vw,31px)]">
              {item.title}
            </h3>

            <p
              style={{ color: item.descriptionColor }}
              className="mt-3 max-w-[360px] text-[11px] leading-[1.6] sm:text-[12px] lg:text-[13px]"
            >
              {item.description}
            </p>
          </div>

          {/* Illustration */}
          <div className="pointer-events-none relative h-[145px] w-[45%] shrink-0 sm:h-[190px] sm:w-[47%] lg:h-[225px]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 639px) 42vw, (max-width: 1023px) 32vw, 330px"
              className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
              priority={index === 0}
            />
          </div>
        </div>
      ) : (
        /* SMALL BENTO CARDS */
        <div className="relative flex min-h-0 flex-1 flex-col">
          {/* Illustration on top */}
          <div className="pointer-events-none relative mx-auto h-[105px] w-full max-w-[220px] sm:h-[125px] lg:h-[145px]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 639px) 85vw, (max-width: 1023px) 30vw, 230px"
              className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text below */}
          <div className="relative z-10 mt-auto">
            <p className="mb-1.5 text-[9px] font-bold uppercase leading-[1.4] tracking-[0.08em] opacity-85 sm:text-[10px]">
              {item.category}
            </p>

            <h3 className="text-[18px] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[20px] lg:text-[23px]">
              {item.title}
            </h3>

            <p
              style={{ color: item.descriptionColor }}
              className="mt-2 text-[11px] leading-[1.55] sm:text-[12px]"
            >
              {item.description}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

export default function NextChapter() {
  return (
    <section
      aria-labelledby="next-chapter-title"
      className="w-full overflow-hidden bg-[#E3F0FC] py-9 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-6 flex flex-col gap-3 lg:mb-7 lg:flex-row lg:items-end lg:justify-between lg:gap-8">

          <div className="min-w-0">
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#1765F5] sm:text-[11px]">
              SUPPORT AT EVERY STEP
            </p>

            <h2
              id="next-chapter-title"
              className="max-w-[790px] text-balance text-[28px] font-extrabold leading-[1.1] tracking-[-0.045em] text-[#1765F5] sm:text-[35px] lg:text-[43px]"
            >
              Big Dreams.{" "}
              <span className="text-[#0C337B]">
                A Lot to Figure Out.
              </span>
            </h2>
          </div>

        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">

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

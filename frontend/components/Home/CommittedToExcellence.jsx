import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Globe,
  GraduationCap,
  MessagesSquare,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

/**
 * "Committed to Excellence in Foreign Education Guidance"
 *
 * Photo: pass `image="/images/counselling.jpg"` (counsellor + student, 4:3,
 * about 1200 × 900 px). Until then a navy placeholder panel is shown.
 */

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Expert Counselors",
    text: "Guidance from experienced education professionals.",
    tile: "bg-brand-navy/10 text-brand-navy",
  },
  {
    icon: CalendarDays,
    title: "Up-to-Date Information",
    text: "Latest updates on courses, universities & visa policies.",
    tile: "bg-brand-teal/15 text-brand-teal-ink",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Trusted",
    text: "Only genuine & reliable partners.",
    tile: "bg-brand-navy/10 text-brand-navy",
  },
  {
    icon: Users,
    title: "Personalized Support",
    text: "Tailored guidance for your unique goals.",
    tile: "bg-brand-teal/15 text-brand-teal-ink",
  },
  {
    icon: Globe,
    title: "End-to-End Application Support",
    text: "From counselling to visa, we're with you at every step.",
    tile: "bg-brand-navy/10 text-brand-navy",
  },
];

export default function CommittedToExcellence() {
  return (
    <section
      aria-labelledby="excellence-title"
      className="relative isolate overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-18"
    >
      {/* Faint dotted "world map" texture + soft corner glow */}
      <div
        aria-hidden="true"
        className="absolute -left-10 top-0 -z-10 h-[28rem] w-[85%] bg-[radial-gradient(circle,var(--color-brand-navy)_1.2px,transparent_1.2px)] bg-size-[14px_14px] opacity-[0.07] [mask-image:radial-gradient(ellipse_at_40%_40%,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 -z-10 size-72 rounded-full bg-tint-sky-deep/70 blur-2xl sm:size-96"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Top: copy + photo ---------- */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-teal/15 px-4 py-2 text-sm font-semibold text-brand-teal-ink">
              <GraduationCap aria-hidden="true" className="size-5" />
              Your Global Education Partner
            </p>

            <h2
              id="excellence-title"
              className="mt-5 text-balance text-[2rem] font-extrabold leading-[1.12] tracking-tight text-brand-navy-dark sm:text-5xl lg:text-[2.6rem] xl:text-[3rem]"
            >
              Committed to Excellence in{" "}
              <span className="text-brand-teal-ink">Foreign Education Guidance</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We help students turn their study abroad dreams into reality through
              transparent counselling, expert mentoring, and end-to-end application
              support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link
                href="/counselling"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-navy pl-7 pr-2.5 text-base font-semibold text-white shadow-[0_14px_30px_-10px_rgba(0,56,112,0.6)] transition-colors hover:bg-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
              >
                Start Your Journey
                <span className="grid size-9 place-items-center rounded-full bg-brand-teal text-brand-navy-dark">
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                  />
                </span>
              </Link>

              <Link
                href="/services"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-full text-base font-semibold text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
              >
                Explore Our Services
                <span className="grid size-9 place-items-center rounded-full border-2 border-brand-navy/70 transition-colors group-hover:bg-brand-navy group-hover:text-white">
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Photo with organic shapes behind it */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <span
              aria-hidden="true"
              className="absolute -left-3 top-[18%] -z-10 h-[62%] w-[34%] rounded-[45%_55%_60%_40%] bg-linear-to-b from-brand-teal/60 to-tint-sky-deep sm:-left-6"
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 bottom-[-6%] -z-10 h-[70%] w-[30%] rounded-[55%_45%_40%_60%] bg-linear-to-t from-tint-sky-deep to-brand-teal/50 sm:-right-6"
            />
            <span
              aria-hidden="true"
              className="absolute left-[38%] -top-4 -z-10 h-1/4 w-[34%] rounded-t-full bg-brand-navy/15"
            />

            <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-bl-2xl rounded-tr-2xl bg-brand-navy shadow-[0_30px_60px_-20px_rgba(0,40,90,0.5)] sm:rounded-tl-[3.5rem] sm:rounded-br-[3.5rem]">
               <Image
                  src="/images/counselling.webp"
                  alt="A counsellor guiding a student through study abroad options"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 36rem, 92vw"
                  className="object-cover"
                />
            </div>

            {/* Paper plane + dashed flight path (tablet and up) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-8 hidden text-brand-navy sm:block lg:-right-4"
            >
              <svg viewBox="0 0 110 150" fill="none" className="h-36 w-28">
                <path
                  d="M8 14C70 4 104 50 88 138"
                  stroke="var(--color-brand-teal)"
                  strokeWidth="2"
                  strokeDasharray="5 6"
                  strokeLinecap="round"
                />
              </svg>
              <Plane className="absolute left-0 top-0 size-9 fill-current" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* ---------- Features ---------- */}
        <ul className="mt-14 grid gap-7 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5 lg:gap-0">
          {FEATURES.map(({ icon: Icon, title, text, tile }) => (
            <li
              key={title}
              className="flex items-start gap-4 lg:flex-col lg:gap-5 lg:border-l lg:border-brand-navy/10 lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <span
                className={`grid size-14 shrink-0 place-items-center rounded-full lg:size-16 ${tile}`}
              >
                <Icon aria-hidden="true" className="size-7 lg:size-8" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-lg font-bold leading-snug text-brand-navy-dark lg:text-[1.1rem]">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

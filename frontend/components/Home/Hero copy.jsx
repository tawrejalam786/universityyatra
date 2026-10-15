import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  GraduationCap,
  Landmark,
  MapPin,
  MessagesSquare,
  Search,
} from "lucide-react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const TRUST_POINTS = [
  { icon: Landmark, label: "Top Universities" },
  { icon: MessagesSquare, label: "Expert Counselling" },
  { icon: BadgeCheck, label: "End-to-End Support" },
];

/**
 * Drop your own images into /public/images:
 *  - hero-campus.jpg   → wide campus photo (used as the blurred backdrop)
 *  - hero-student.png  → transparent-background cut-out of the student
 */
export default function Hero({
  backgroundImage = "/images/hero-campus.jpg",
  studentImage = "/images/hero-student.png",
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy-dark text-white">
      {/* Backdrop photo + brand-navy wash (stronger on the text side) */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-brand-navy-dark via-brand-navy/90 to-brand-navy/35"
      />

     

      {/* Student cut-out + handwritten note (desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 inset-y-0 mx-auto hidden max-w-7xl lg:block"
      >
        <div className="absolute bottom-0 right-4 h-[92%] w-[42%]">
          <Image
            src={studentImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 0px"
            className="object-contain object-bottom"
          />
        </div>

        <div className="absolute right-6 top-[30%] w-44 text-center xl:right-10">
          <p className="-rotate-12 font-script text-3xl leading-[1.05] text-white drop-shadow-[0_2px_6px_rgba(0,20,45,0.6)]">
            Your Global Education Partner
          </p>
          <svg
            viewBox="0 0 60 60"
            fill="none"
            className="ml-auto mr-6 mt-1 h-14 w-14 text-white drop-shadow-[0_2px_6px_rgba(0,20,45,0.6)]"
          >
            <path
              d="M46 4c6 14-2 30-24 38"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="m30 34-8 8 11 4"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Copy + search */}
      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 pb-16 pt-36 lg:min-h-[700px]">
        <div className="w-full max-w-[44rem]">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Your Dreams
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-teal" />
            Our Guidance
          </p>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Studying Abroad Made Simple & {" "}
            <span className="text-brand-teal">Stress-Free</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Explore top universities, discover the best courses, and get expert
            advice — all in one place. Your global education journey starts here.
          </p>

          {/* Search bar — works without JS (plain GET form) */}
          {/* <form
            action="/universities"
            method="get"
            role="search"
            className="mt-9 flex flex-col gap-2 rounded-3xl bg-white p-2 text-brand-navy shadow-[0_22px_55px_rgba(0,15,35,0.4)] md:flex-row md:items-center md:rounded-full"
          >
            <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-brand-teal">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-navy/10">
                <GraduationCap aria-hidden="true" className="size-5" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-sm font-semibold">What do you want to study?</span>
                <input
                  type="text"
                  name="q"
                  placeholder="e.g. MBA, Engineering, Data Science"
                  className="w-full bg-transparent text-xs text-slate-600 placeholder:text-slate-500 focus:outline-none"
                />
              </span>
            </label>

            <span aria-hidden="true" className="hidden h-10 w-px bg-slate-200 md:block" />

            <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-brand-teal md:w-48 md:flex-none">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-navy/10">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="whitespace-nowrap text-sm font-semibold">Preferred Country</span>
                <select
                  name="country"
                  defaultValue=""
                  className="w-full bg-transparent text-xs text-slate-600 focus:outline-none"
                >
                  <option value="">Select country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            <button
              type="submit"
              className="flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-teal px-8 text-base font-bold text-brand-navy-dark transition-colors hover:bg-brand-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              <Search aria-hidden="true" className="size-5" />
              Search
            </button>
          </form> */}

          <div className="mt-3 grid grid-cols-1 lg:grid-cols-2">
            <Link
              href="/counselling"
              className="flex w-xs mb-3 h-12 items-center justify-center rounded-full bg-brand-teal font-bold text-brand-navy-dark"
            >
              Book a Free Consultation
            </Link>

            <Link
              href="/counselling"
              className="flex h-12 items-center w-xs justify-center rounded-full bg-green-500 font-bold text-brand-navy-dark"
            >
             <FontAwesomeIcon className="w-7 mr-2 text-white" icon={faWhatsapp} /> Chat on Whatsapp
            </Link>
          </div>

          {/* Trust points */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 sm:border-r sm:border-white/25 sm:pr-6 sm:last:border-r-0 sm:last:pr-0"
              >
                <Icon aria-hidden="true" className="size-5 text-brand-teal" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

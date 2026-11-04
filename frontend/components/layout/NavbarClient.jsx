"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  BookOpen,
  Wallet,
  ClipboardCheck,
  Plane,
} from "lucide-react";

/* ==========================================
   NAVIGATION ITEMS
========================================== */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  // { label: "Study India", href: "/study-in-india" },
  {
    label: "Study In India",
    href: "#",
    children: [
      { label: "Online Degree Programs", href: "/study-in-india" },
      // { label: "Regular Degree Programs", href: "/regular-degree",},
    ],
  },

  {
    label: "Study Abroad",
    href: "#",
    // Desktop par mega menu dikhta hai, mobile par yehi children accordion mein dikhte hain.
    children: [
      { label: "Study in Canada", href: "/study-in-canada" },
      { label: "Study in the USA", href: "/study-in-usa" },
      // { label: "Study in Europe", href: "/study-in-europe" },
      { label: "Study in UK", href: "/study-in-uk" },
      { label: "Study in Ireland", href: "/study-in-ireland" },
      { label: "Study in Germany", href: "/study-in-germany" },
      { label: "Study in UAE", href: "/study-in-uae" },
      { label: "Study in Russia", href: "/study-in-russia" },
      { label: "Study in Australia", href: "/study-in-australia" },
      // { label: "Study in New Zealand", href: "/study-in-new-zealand" },
      // { label: "Study in New Singapore", href: "/study-in-new-singapore",},
      // { label: "Study in New Japan", href: "/study-in-new-japan",},
      // { label: "Mbbs Abroad", href: "/mbbs-abroad" },
      // { label: "PhD Programs Abroad", href: "/phd-programs-abroad",},
    ],
  },

  {
    label: "Student Services",
    href: "#",
    children: [
      {
        label: "Free Career Counselling & Profile Assessment",
        href: "/career-counselling",
      },
      // {
      //   label: "Admission & Application Support",
      //   href: "/test-preparation",
      // },
      // {
      //   label: "Test Prep & Language Training",
      //   href: "/test-prep-language-training",
      // },
      // {
      //   label: "SOP, LOR and Documentation Support",
      //   href: "/sop-lor-and-documentation-support",
      // },
      // {
      //   label: "Travel & Forex Assistance",
      //   href: "/travel-forex-assistance",
      // },
      // {
      //   label: "Refer a Friend",
      //   href: "/refer-a-friend",
      // },
    ],
  },

  {
    label: "Loan & Scholarship",
    href: "#",
    children: [
      {
        label: "Education Loan Assistance",
        href: "/education-loan",
      },
    ],
  },

  { label: "About", href: "/about-us" },

  // { label: "Blog", href: "/blog" },
  // { label: "Contact", href: "/contact" },
];

const GROUP_ICONS = {
  guide: BookOpen,
  costs: Wallet,
  admission: ClipboardCheck,
  visa: Plane,
};

/* ==========================================
   FLAG
========================================== */

function Flag({ code, name, className = "" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w80/${code}.png`}
      alt={`${name} flag`}
      width={28}
      height={20}
      loading="lazy"
      className={`rounded-[3px] object-cover shadow-sm ring-1 ring-black/5 ${className}`}
    />
  );
}

/* ==========================================
   STUDY ABROAD MEGA MENU (desktop only)
   countries = server (Navbar.jsx) se aata hai, page.js files se bana hua.
   Parent <li> par "group" class hona chahiye, aur <nav> par "relative".
========================================== */

function StudyAbroadMegaMenu({ countries }) {
  const [activeSlug, setActiveSlug] = useState(countries[0]?.slug);
  const active = countries.find((c) => c.slug === activeSlug) ?? countries[0];
  if (!active) return null;

  const activeHref = `/${active.slug}`;
  const columns = active.columns;

  return (
    <div className="invisible absolute inset-x-0 top-full z-50 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
      <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_45px_rgba(0,25,55,0.2)] ring-1 ring-[#0C337B]/10">
        <div className="grid grid-cols-[210px_1fr_290px]">

          {/* ---------- LEFT: COUNTRY LIST ---------- */}
          <div className="flex flex-col bg-[#EDF5FF]/60 p-3">
            <ul className="flex-1 space-y-1">
              {countries.map((c) => {
                const isActive = c.slug === active.slug;
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/${c.slug}`}
                      onMouseEnter={() => setActiveSlug(c.slug)}
                      onFocus={() => setActiveSlug(c.slug)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-[#1765F5] ${
                        isActive
                          ? "bg-[#E8F0FE] text-[#0C337B]"
                          : "text-slate-700 hover:bg-[#E8F0FE]/70 hover:text-[#1765F5]"
                      }`}
                    >
                      <Flag code={c.code} name={c.name} />
                      <span className="flex-1">{c.name}</span>
                      {isActive && (
                        <ChevronRight
                          aria-hidden="true"
                          className="size-4 text-[#1765F5]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* <Link
              href="/study-abroad"
              className="mt-2 inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-[#1765F5] hover:text-[#1047AC]"
            >
              View All Countries{" "}
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </Link> */}
          </div>

          {/* ---------- MIDDLE: CONTENT COLUMNS ---------- */}
          <div className="p-6">
            <Link
              href={activeHref}
              className="mb-5 flex w-fit items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-[#1765F5]"
            >
              <Flag
                code={active.code}
                name={active.name}
                className="!h-9 !w-[52px]"
              />
              <div>
                <p className="text-lg font-extrabold leading-tight text-[#0C337B]">
                  Study in {active.name}
                </p>
                <p className="text-xs text-slate-500">
                  Your complete guide to studying in {active.name}
                </p>
              </div>
            </Link>

            {columns.length > 0 ? (
              <div
                className="grid gap-5"
                style={{
                  gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
                }}
              >
                {columns.map((col, i) => {
                  const Icon = GROUP_ICONS[col.id] ?? BookOpen;
                  return (
                    <div
                      key={col.id}
                      className={i > 0 ? "border-l border-slate-100 pl-5" : ""}
                    >
                      <p className="mb-3 flex items-center gap-2 text-[13px] font-extrabold text-[#0C337B]">
                        <span className="grid size-7 place-items-center rounded-lg bg-[#E8F0FE] text-[#1765F5]">
                          <Icon aria-hidden="true" className="size-4" />
                        </span>
                        {col.title}
                      </p>

                      <ul className="space-y-1.5">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-md py-1 text-[13px] font-medium text-slate-600 transition-colors hover:text-[#1765F5] focus-visible:outline-2 focus-visible:outline-[#1765F5]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="rounded-2xl bg-[#EDF5FF] p-4 text-sm font-medium text-[#0C337B]">
                Detailed {active.name} guides are coming soon. Meanwhile, explore
                the {active.name} page or talk to our counsellors.
              </p>
            )}
          </div>

          {/* ---------- RIGHT: PROMO CARD ---------- */}
          <div
            className="relative flex items-end overflow-hidden bg-[#0C337B] bg-cover bg-center p-6"
            style={
              active.image
                ? { backgroundImage: `url(${active.image})` }
                : undefined
            }
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C337B] via-[#0C337B]/60 to-[#1765F5]/10" />
            <div className="relative">
              <p className="mb-3 text-lg font-extrabold leading-snug text-white">
                Explore Top Universities in {active.name}
              </p>
              <Link
                href={activeHref}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#0C337B] shadow-md transition-colors hover:bg-[#E8F0FE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Guide <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ==========================================
   NAVBAR (client)
========================================== */

export default function NavbarClient({ active = "Home", countries = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-2 z-50 px-3 min-[390px]:px-4 sm:top-4 sm:px-6">

      {/* FLOATING WHITE PILL NAVBAR (relative => mega menu navbar width tak khulta hai) */}
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-[52px] w-full max-w-7xl items-center justify-between gap-2 rounded-full bg-white pl-3 pr-1.5 shadow-[0_10px_35px_rgba(0,25,55,0.18)] min-[360px]:h-[54px] min-[390px]:h-[56px] min-[390px]:pl-4 sm:h-16 sm:pl-7 sm:pr-2.5"
      >

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765F5]"
        >
          <Image
            src="/images/logo/university-yatra-logo-f.png"
            alt="University Yatra – Making Global Education Easy"
            width={1600}
            height={384}
            priority
            className="h-[25px] w-auto max-w-[165px] object-contain min-[360px]:h-[27px] min-[390px]:h-[30px] sm:h-[40px] sm:max-w-none"
          />
        </Link>

        {/* =====================================
            DESKTOP NAVIGATION LINKS
        ===================================== */}
        <ul className="hidden items-center gap-0.5 xl:flex">

          {NAV_ITEMS.map((item) => {
            const isActive = item.label === active;
            const isMega = item.label === "Study Abroad" && countries.length > 0;

            return (
              <li
                key={item.label}
                // mega menu wale item par "relative" nahi, taaki panel <nav> ke hisaab se position ho
                className={`group ${isMega ? "" : "relative"}`}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center gap-1 rounded-full px-3 py-2 text-[14px] transition-colors hover:text-[#1765F5] focus-visible:outline-2 focus-visible:outline-[#1765F5] ${
                    isActive
                      ? "font-semibold text-brand-navy"
                      : "font-bold text-slate-700"
                  }`}
                >
                  {item.label}

                  {item.children && (
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  )}

                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#1765F5]" />
                  )}
                </Link>

                {/* DESKTOP DROPDOWN / MEGA MENU */}
                {isMega ? (
                  <StudyAbroadMegaMenu countries={countries} />
                ) : (
                  item.children && (
                    <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">

                      <ul className="max-h-[min(70vh,480px)] overflow-y-auto rounded-2xl bg-white p-2 shadow-[0_18px_45px_rgba(0,25,55,0.2)] ring-1 ring-brand-navy/10">

                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#EDF5FF] hover:text-[#0C337B] focus-visible:bg-[#EDF5FF] focus-visible:outline-none"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}

                      </ul>

                    </div>
                  )
                )}
              </li>
            );
          })}

        </ul>

        {/* =====================================
            RIGHT ACTIONS
        ===================================== */}
        <div className="flex shrink-0 items-center gap-2">

          {/* GET FREE COUNSELLING */}
          <Link
            href="/career-counselling"
            className="hidden h-11 items-center rounded-full bg-[#1765F5] px-6 text-sm font-bold text-white shadow-[0_4px_16px_rgba(23,101,245,0.25)] transition-all duration-300 hover:bg-[#1047AC] hover:shadow-[0_6px_20px_rgba(23,101,245,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1765F5] sm:inline-flex"
          >
            Get Free Counselling
          </Link>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 shrink-0 place-items-center rounded-full text-[#0C337B] transition-colors hover:bg-[#EDF5FF] focus-visible:outline-2 focus-visible:outline-[#1765F5] min-[360px]:size-[38px] min-[390px]:size-10 sm:size-11 xl:hidden"
          >
            {open ? (
              <X className="size-5 sm:size-6" />
            ) : (
              <Menu className="size-5 sm:size-6" />
            )}
          </button>

        </div>
      </nav>

      {/* =====================================
          MOBILE / TABLET NAVIGATION PANEL
      ===================================== */}
      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-h-[calc(100dvh-80px)] w-full max-w-7xl overflow-y-auto overscroll-contain rounded-2xl bg-white p-3 shadow-[0_18px_45px_rgba(0,25,55,0.25)] sm:max-h-[calc(100dvh-100px)] sm:rounded-3xl xl:hidden"
        >
          <ul className="flex flex-col">

            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="border-b border-slate-100 last:border-0"
              >

                {item.children ? (
                  <details className="group">

                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 font-medium text-slate-800 [&::-webkit-details-marker]:hidden">
                      {item.label}

                      <ChevronDown
                        aria-hidden="true"
                        className="size-4 transition-transform group-open:rotate-180"
                      />
                    </summary>

                    <ul className="mb-2 ml-3 border-l-2 border-[#A2C1FB] pl-3">

                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-[#EDF5FF] hover:text-[#0C337B]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}

                    </ul>

                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-medium text-slate-800 hover:text-[#1765F5]"
                  >
                    {item.label}
                  </Link>
                )}

              </li>
            ))}

          </ul>

          {/* MOBILE GET FREE COUNSELLING BUTTON */}
          <div className="mt-3 grid gap-2">
            <button
              disabled
              className="flex h-12 items-center justify-center rounded-full bg-gray-300 font-bold text-gray-500 cursor-not-allowed opacity-60 sm:hidden"
            >
              Get Free Counselling
            </button>
          </div>

        </div>
      )}

    </header>
  );
}
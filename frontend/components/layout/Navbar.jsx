
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

/* ==========================================
   NAVIGATION ITEMS
========================================== */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Study in India", href: "/study-in-india" },

  {
    label: "Study Abroad",
    href: "#",
    children: [
      { label: "Study in Canada", href: "/study-in-canada" },
      { label: "Study in the USA", href: "/study-in-usa" },
      { label: "Study in Europe", href: "/study-in-europe" },
      { label: "Study in UK", href: "/study-in-uk" },
      { label: "Study in Ireland", href: "/study-in-ireland" },
      { label: "Study in UAE", href: "/study-in-uae" },
      { label: "Study in Russia", href: "/study-in-russia" },
      { label: "Study in Australia", href: "/study-in-australia" },
      { label: "Study in New Zealand", href: "/study-in-new-zealand" },
      {
        label: "Study in New Singapore",
        href: "/study-in-new-singapore",
      },
      {
        label: "Study in New Japan",
        href: "/study-in-new-japan",
      },
      { label: "Mbbs Abroad", href: "/mbbs-abroad" },
      {
        label: "PhD Programs Abroad",
        href: "/phd-programs-abroad",
      },
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
      {
        label: "Admission & Application Support",
        href: "/test-preparation",
      },
      {
        label: "Test Prep & Language Training",
        href: "/test-prep-language-training",
      },
      {
        label: "SOP, LOR and Documentation Support",
        href: "/sop-lor-and-documentation-support",
      },
      {
        label: "Travel & Forex Assistance",
        href: "/travel-forex-assistance",
      },
      {
        label: "Refer a Friend",
        href: "/refer-a-friend",
      },
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

/* ==========================================
   NAVBAR COMPONENT
========================================== */

export default function Navbar({ active = "Home" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-2 z-50 px-3 min-[390px]:px-4 sm:top-4 sm:px-6">

      {/* FLOATING WHITE PILL NAVBAR */}
      <nav
        aria-label="Main"
        className="mx-auto flex h-[52px] w-full max-w-7xl items-center justify-between gap-2 rounded-full bg-white pl-3 pr-1.5 shadow-[0_10px_35px_rgba(0,25,55,0.18)] min-[360px]:h-[54px] min-[390px]:h-[56px] min-[390px]:pl-4 sm:h-16 sm:pl-7 sm:pr-2.5"
      >

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765F5]"
        >
          <Image
            src="/images/logo/university-yatra-logo,.png"
            alt="University Yatra – Making Global Education Easy"
            width={1600}
            height={384}
            priority
            className="h-[25px] w-auto max-w-[165px] object-contain min-[360px]:h-[27px] min-[390px]:h-[30px] sm:h-[36px] sm:max-w-none"
          />
        </Link>

        {/* =====================================
            DESKTOP NAVIGATION LINKS
        ===================================== */}
        <ul className="hidden items-center gap-0.5 xl:flex">

          {NAV_ITEMS.map((item) => {
            const isActive = item.label === active;

            return (
              <li
                key={item.label}
                className="group relative"
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

                {/* DESKTOP DROPDOWN */}
                {item.children && (
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
            href="/counselling"
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
            <Link
              href="/counselling"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-[#1765F5] font-bold text-white shadow-[0_4px_16px_rgba(23,101,245,0.25)] sm:hidden"
            >
              Get Free Counselling
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}

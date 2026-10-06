"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Study in India", href: "/study-in-india" },
  {
    label: "Study Abroad",
    href: "#",
    children: [
      { label: "Study in Canada", href: "/study-in-canada" },
      { label: "Study in the UK & Ireland", href: "/study-in-uk-ireland" },
      { label: "Study in Europe", href: "/study-in-europe" },
      { label: "Study in the USA", href: "/study-in-usa" },
      {
        label: "Study in Australia & New Zealand",
        href: "/study-in-australia-new-zealand",
      },
      {
        label: "Study in the UAE,Singapore, Russia & Cyprus",
        href: "/study-in-singapore-russia-cyprus",
      },
      { label: "Mbbs Abroad", href: "/mbbs-abroad" },
      { label: "PhD Programs Abroad", href: "/phd-programs-abroad" },
    ],
  },
  {
    label: "Student Services",
    href: "#",
    children: [
      {
        label: "Free Career Counselling & Profile Assessment",
        href: "/career-counseling-admission-guidance",
      },
      { label: "Admission & Application Support", href: "/test-preparation" },
      {
        label: "Test Prep & Language Training",
        href: "/test-prep-language-training",
      },
      {
        label: "SOP, LOR and Documentation Support",
        href: "/sop-lor-and-documentation-support",
      },
      { label: "Travel & Forex Assistance", href: "/travel-forex-assistance" },
      { label: "Refer a Friend", href: "/refer-a-friend" },
    ],
  },
  {
    label: "Loan & Scholarship",
    href: "#",
    children: [{ label: "Education Loan Assistance", href: "/education-loan" }],
  },
  { label: "About Us", href: "/about-us" },
  // { label: "Blog", href: "/blog" },
  // { label: "Contact", href: "/contact" },
];
export default function Navbar({ active = "Home" }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      
      {/* Floating white pill */}
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full bg-white pl-5 pr-2.5 shadow-[0_10px_35px_rgba(0,25,55,0.22)] sm:pl-7"
      >
        {" "}
        {/* Logo */}{" "}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
        >
          {" "}
          <Image
            src="/images/logo/university-yatra-logo.png"
            alt="University Yatra – Making Global Education Easy"
            width={1600}
            height={384}
            priority
            className="h-11 w-auto sm:h-[52px]"
          />{" "}
        </Link>{" "}
        {/* Desktop links */}{" "}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {" "}
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === active;
            return (
              <li key={item.label} className="group relative">
                {" "}
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center gap-1 rounded-full px-3 py-2 text-[15px] transition-colors hover:text-brand-teal-dark focus-visible:outline-2 focus-visible:outline-brand-teal ${isActive ? "font-semibold text-brand-navy" : "font-medium text-slate-700"}`}
                >
                  {" "}
                  {item.label}{" "}
                  {item.children && (
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  )}{" "}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-teal" />
                  )}{" "}
                </Link>{" "}
                {/* Dropdown */}{" "}
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {" "}
                    <ul className="rounded-2xl bg-white p-2 shadow-[0_18px_45px_rgba(0,25,55,0.2)] ring-1 ring-brand-navy/10">
                      {" "}
                      {item.children.map((child) => (
                        <li key={child.label}>
                          {" "}
                          <Link
                            href={child.href}
                            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-teal/10 hover:text-brand-navy focus-visible:bg-brand-teal/10 focus-visible:outline-none"
                          >
                            {" "}
                            {child.label}{" "}
                          </Link>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>
                )}{" "}
              </li>
            );
          })}{" "}
        </ul>{" "}
        {/* Right actions */}{" "}
        <div className="flex items-center gap-2">
          {" "}
          <Link
            href="/counselling"
            className="hidden h-11 items-center rounded-full bg-brand-teal px-6 text-sm font-bold text-brand-navy-dark transition-colors hover:bg-brand-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:inline-flex"
          >
            {" "}
            Get Free Counselling{" "}
          </Link>{" "}
          {/* Mobile toggle */}{" "}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-brand-navy hover:bg-brand-navy/5 focus-visible:outline-2 focus-visible:outline-brand-teal xl:hidden"
          >
            {" "}
            {open ? <X className="size-6" /> : <Menu className="size-6" />}{" "}
          </button>{" "}
        </div>{" "}
      </nav>{" "}
      {/* Mobile panel */}{" "}
      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-7xl rounded-3xl bg-white p-3 shadow-[0_18px_45px_rgba(0,25,55,0.25)] xl:hidden"
        >
          {" "}
          <ul className="flex flex-col">
            {" "}
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="border-b border-slate-100 last:border-0"
              >
                {" "}
                {item.children ? (
                  <details className="group">
                    {" "}
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 font-medium text-slate-800 [&::-webkit-details-marker]:hidden">
                      {" "}
                      {item.label}{" "}
                      <ChevronDown
                        aria-hidden="true"
                        className="size-4 transition-transform group-open:rotate-180"
                      />{" "}
                    </summary>{" "}
                    <ul className="mb-2 ml-3 border-l-2 border-brand-teal/40 pl-3">
                      {" "}
                      {item.children.map((child) => (
                        <li key={child.label}>
                          {" "}
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-brand-navy"
                          >
                            {" "}
                            {child.label}{" "}
                          </Link>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-medium text-slate-800"
                  >
                    {" "}
                    {item.label}{" "}
                  </Link>
                )}{" "}
              </li>
            ))}{" "}
          </ul>{" "}
          <div className="mt-3 grid gap-2">
            {" "}
            <Link
              href="/counselling"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-brand-teal font-bold text-brand-navy-dark sm:hidden"
            >
              {" "}
              Get Free Counselling{" "}
            </Link>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </header>
  );
}

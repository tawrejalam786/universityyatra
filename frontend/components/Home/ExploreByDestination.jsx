"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

/**
 * "Explore by Destination"
 *
 *  - Tablet / desktop: every country card is fully open (3 columns on desktop,
 *    2 on tablet).
 *  - Below 640px: single-column accordion, one country open at a time
 *    (Canada open first). The chevron button toggles; the country name/badge
 *    stays a normal link.
 *
 * LINKS – none are invented. Set `href` on a country / university where you
 * have a real page. Anything without an `href` renders as plain (non-clickable)
 * text so there are no dead "#" links. `showExploreLink: true` adds the muted
 * "Explore universities" row, which uses the country's own `href`.
 *
 * COLOURS – the exact values from your brief live in the 6 CSS variables on the
 * <section>. To use your site's brand colours instead, change them there
 * (e.g. `[--ey-navy:var(--color-brand-navy)]`).
 */

const COUNTRIES = [
  {
    id: "canada",
    code: "CA",
    name: "Canada",
    href: null, // e.g. "/study-abroad/canada"
    universities: [
      { name: "University of Ottawa", href: null },
      { name: "York University", href: null },
      { name: "Wilfrid Laurier University", href: null },
    ],
  },
  {
    id: "united-kingdom",
    code: "UK",
    name: "United Kingdom",
    href: null,
    universities: [
      { name: "University of Edinburgh", href: null },
      { name: "University of Manchester", href: null },
      { name: "University of Birmingham", href: null },
    ],
  },
  {
    id: "australia",
    code: "AU",
    name: "Australia",
    href: null,
    universities: [
      { name: "Charles Sturt University", href: null },
      { name: "La Trobe University", href: null },
      { name: "Deakin University", href: null },
    ],
  },
  {
    id: "united-states",
    code: "US",
    name: "United States",
    href: null,
    universities: [
      { name: "Arizona State University", href: null },
      { name: "University of Illinois at Chicago", href: null },
      { name: "University of South Florida", href: null },
    ],
  },
  {
    id: "switzerland",
    code: "CH",
    name: "Switzerland",
    href: null,
    universities: [
      { name: "ETH Zurich", href: null },
      { name: "EPFL", href: null },
    ],
    showExploreLink: true,
  },
  {
    id: "new-zealand",
    code: "NZ",
    name: "New Zealand",
    href: null,
    universities: [
      { name: "Auckland University of Technology", href: null },
      { name: "Massey University", href: null },
    ],
    showExploreLink: true,
  },
];

const FOCUS =
  "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-(--ey-teal)";

/** Link when there is an href, otherwise plain element (no dead links). */
function MaybeLink({ href, className, children, ...rest }) {
  if (href) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
}

function UniversityRow({ name, href, muted = false }) {
  return (
    <li className="border-t border-(--ey-border) first:border-t-0">
      <MaybeLink
        href={href}
        className={`group/row flex min-h-12 items-center justify-between gap-3 py-3 text-[0.95rem] leading-snug transition-colors duration-200 motion-reduce:transition-none sm:text-base ${
          muted ? "text-slate-500" : "text-(--ey-navy)"
        } ${href ? `hover:text-(--ey-teal-dark) ${FOCUS}` : ""}`}
      >
        <span className="min-w-0">{name}</span>
        <ChevronRight
          aria-hidden="true"
          className="size-5 shrink-0 text-slate-400 transition-colors duration-200 group-hover/row:text-(--ey-teal) motion-reduce:transition-none"
        />
      </MaybeLink>
    </li>
  );
}

function CountryCard({ country, index, open, onToggle }) {
  const teal = index % 2 === 0; // alternate teal / navy as in the reference
  const panelId = `dest-panel-${country.id}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-(--ey-border) bg-white shadow-[0_2px_10px_rgba(32,63,122,0.06)] transition-[border-color,box-shadow] duration-200 hover:border-(--ey-teal) hover:shadow-[0_6px_18px_rgba(32,63,122,0.09)] focus-within:border-(--ey-teal) motion-reduce:transition-none">
      {/* Header: country link + (mobile only) accordion toggle */}
      <div className={`flex items-stretch ${teal ? "bg-(--ey-mint)" : "bg-(--ey-blue)"}`}>
        <MaybeLink
          href={country.href}
          className={`group/head flex min-h-[4.5rem] min-w-0 flex-1 items-center gap-4 px-5 py-3 sm:min-h-24 ${
            country.href ? FOCUS : ""
          }`}
        >
          <span
            aria-hidden="true"
            className={`grid size-12 shrink-0 place-items-center rounded-xl text-lg font-bold text-white sm:size-14 sm:text-xl ${
              teal ? "bg-(--ey-teal)" : "bg-(--ey-navy)"
            }`}
          >
            {country.code}
          </span>
          <h3 className="min-w-0 flex-1 text-lg font-bold text-(--ey-navy) sm:text-xl">
            {country.name}
          </h3>
          <ArrowRight
            aria-hidden="true"
            className="hidden size-5 shrink-0 text-(--ey-teal-dark) transition-transform duration-200 group-hover/head:translate-x-0.5 motion-reduce:transition-none sm:block"
          />
        </MaybeLink>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${country.name} universities`}
          className={`grid w-14 shrink-0 place-items-center text-(--ey-navy) sm:hidden ${FOCUS}`}
        >
          <ChevronDown
            aria-hidden="true"
            className={`size-6 transition-transform duration-200 motion-reduce:transition-none ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* University list – collapsible below sm, always open from sm up */}
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none sm:grid-rows-[1fr] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        {/* invisible = collapsed items can't be tabbed to (mobile only) */}
        <div
          className={`overflow-hidden transition-[visibility] duration-200 motion-reduce:transition-none sm:visible ${
            open ? "visible" : "invisible"
          }`}
        >
          <ul className="px-5 pb-1">
            {country.universities.map((u) => (
              <UniversityRow key={u.name} name={u.name} href={u.href} />
            ))}
            {country.showExploreLink && (
              <UniversityRow name="Explore universities" href={country.href} muted />
            )}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ExploreByDestination({
  countries = COUNTRIES,
  viewAllHref = null, // e.g. "/study-abroad"
}) {
  // One open at a time on mobile; Canada (first item) starts open.
  const [openId, setOpenId] = useState(countries[0]?.id ?? null);

  const buttonClass =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-(--ey-navy) bg-white px-6 text-base font-semibold text-(--ey-navy) transition-colors duration-200 motion-reduce:transition-none";

  return (
    <section
      aria-labelledby="explore-destination-title"
      className="bg-white py-12 [--ey-blue:#eaf3fd] [--ey-border:#e2e8f0] [--ey-mint:#e8f7f4] [--ey-navy:#203f7a] [--ey-teal:#079fa8] [--ey-teal-dark:#066c75] sm:py-16 lg:py-8"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-(--ey-navy) sm:text-[0.8rem]">
            Explore by destination
          </p>
          <h2
            id="explore-destination-title"
            className="mt-4 text-[1.8rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2.5rem] lg:text-[3rem]"
          >
            <span className="block text-(--ey-navy)">Start with a country.</span>
            <span className="block text-(--ey-teal-dark)">Discover your university.</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 sm:text-lg">
            Browse universities by where you want to study.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {countries.map((country, i) => (
            <CountryCard
              key={country.id}
              country={country}
              index={i}
              open={openId === country.id}
              onToggle={() => setOpenId((cur) => (cur === country.id ? null : country.id))}
            />
          ))}
        </div>

        {/* Footer prompt */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="text-base text-slate-500">Looking for another destination?</p>
          {viewAllHref ? (
            <Link
              href={viewAllHref}
              className={`group/all mt-3 hover:bg-(--ey-navy) hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ey-teal) ${buttonClass}`}
            >
              View all destinations
              <ArrowRight
                aria-hidden="true"
                className="size-5 transition-transform duration-200 group-hover/all:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          ) : (
            <span aria-disabled="true" className={`mt-3 ${buttonClass}`}>
              View all destinations
              <ArrowRight aria-hidden="true" className="size-5" />
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

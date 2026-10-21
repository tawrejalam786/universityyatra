
"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import { Globe2 } from "lucide-react";

/* ==========================================
   COUNTRY DATA
========================================== */

const COUNTRIES_TIMEZONES = [
  {
    country: "India",
    city: "New Delhi",
    zone: "Asia/Kolkata",
    locale: "en-IN",
    flag: "in",
    code: "DEL",
  },
  {
    country: "USA",
    city: "New York",
    zone: "America/New_York",
    locale: "en-US",
    flag: "us",
    code: "NYC",
  },
  {
    country: "UK",
    city: "London / Oxford",
    zone: "Europe/London",
    locale: "en-GB",
    flag: "gb",
    code: "LON",
  },
  {
    country: "Canada",
    city: "Toronto",
    zone: "America/Toronto",
    locale: "en-CA",
    flag: "ca",
    code: "TOR",
  },
  {
    country: "Australia",
    city: "Sydney",
    zone: "Australia/Sydney",
    locale: "en-AU",
    flag: "au",
    code: "SYD",
  },
  {
    country: "Germany",
    city: "Berlin",
    zone: "Europe/Berlin",
    locale: "en-DE",
    flag: "de",
    code: "BER",
  },
  {
    country: "Japan",
    city: "Tokyo",
    zone: "Asia/Tokyo",
    locale: "en-JP",
    flag: "jp",
    code: "TYO",
  },
  {
    country: "UAE",
    city: "Dubai",
    zone: "Asia/Dubai",
    locale: "en-AE",
    flag: "ae",
    code: "DXB",
  },
];

/* ==========================================
   LIVE COUNTRY TIME
========================================== */

function formatCountryTime(now, item) {
  if (!now) {
    return {
      time: "--:--",
      period: "--",
      date: "-- --- ----",
      weekday: "Loading...",
      offset: "UTC",
    };
  }

  const timeParts = new Intl.DateTimeFormat("en-US", {
    timeZone: item.zone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(now);

  const getPart = (type) =>
    timeParts.find((part) => part.type === type)?.value || "";

  const date = new Intl.DateTimeFormat("en-GB", {
    timeZone: item.zone,
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(now);

  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: item.zone,
    weekday: "long",
  }).format(now);

  const offsetPart = new Intl.DateTimeFormat("en-US", {
    timeZone: item.zone,
    timeZoneName: "longOffset",
  })
    .formatToParts(now)
    .find((part) => part.type === "timeZoneName");

  const rawOffset = offsetPart?.value || "GMT";

  const offset =
    rawOffset === "GMT"
      ? "UTC+00:00"
      : rawOffset.replace("GMT", "UTC");

  return {
    time: `${getPart("hour")}:${getPart("minute")}`,
    period: getPart("dayPeriod"),
    date,
    weekday,
    offset,
  };
}

/* ==========================================
   COMPACT COUNTRY CLOCK CARD
========================================== */

function CountryClockCard({ item, now }) {
  const clock = formatCountryTime(now, item);

  return (
    <article className="group relative flex h-[120px] w-full flex-col overflow-hidden rounded-[14px] border border-[#3779B9] bg-[#061329] p-[10px] text-white shadow-[inset_0_2px_9px_rgba(77,163,255,0.35),0_6px_18px_rgba(7,37,80,0.16)] transition-all duration-300 hover:border-[#58A8EE] hover:shadow-[inset_0_2px_13px_rgba(77,163,255,0.45),0_12px_24px_rgba(7,37,80,0.23)]">

      {/* Subtle blue lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[14px] bg-[radial-gradient(ellipse_at_0%_0%,rgba(41,106,196,0.25),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(25,94,173,0.10),transparent_55%)]" />

      {/* Country information */}
      <div className="relative z-10 flex min-w-0 items-center justify-between gap-1.5">
        <div className="flex min-w-0 items-center gap-1.5">

          {/* Country flag */}
          <div className="h-[24px] w-[32px] shrink-0 overflow-hidden rounded-[5px] bg-white/10 shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
            <img
              src={`https://flagcdn.com/w160/${item.flag}.png`}
              alt={`${item.country} flag`}
              width="160"
              height="110"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[13px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              {item.country}
            </h3>

            <p className="mt-0.5 truncate text-[9px] font-medium leading-none text-[#A9C9F2]">
              {item.city}
            </p>
          </div>
        </div>

        {/* UTC badge */}
        <div className="flex shrink-0 items-center gap-0.5 rounded-full border border-[#1769AE] bg-[#073A70] px-1.5 py-0.5 shadow-[inset_0_0_12px_rgba(28,135,236,0.16)]">
          <Globe2 size={10} strokeWidth={1.8} className="shrink-0 text-[#55BFFF]" />
          <span className="whitespace-nowrap text-[8px] font-semibold text-[#A7D7FF]">
            {clock.offset}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-2 h-px w-full bg-[#294465]" />

      {/* Time and date */}
      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-between gap-1.5">

        {/* Digital clock */}
        <div className="flex min-w-0 shrink-0 items-baseline gap-0.5">
          <time className="text-[28px] font-extrabold leading-none tracking-[-0.065em] tabular-nums text-white">
            {clock.time}
          </time>

          <span className="text-[10px] font-extrabold leading-none text-[#28A9F4]">
            {clock.period}
          </span>
        </div>

        {/* Date */}
        <div className="flex min-w-0 flex-col items-end">
          <p className="whitespace-nowrap text-[8px] font-semibold leading-[1.3] text-white">
            {clock.date}
          </p>

          <p className="mt-0.5 text-[9px] font-medium leading-[1.2] text-[#A9C9F2]">
            {clock.weekday}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ==========================================
   RESPONSIVE GRID LAYOUT
========================================== */

export function UniversityClocks({
  skylineSrc = "/images/footer/global-skyline.png",
  countries = COUNTRIES_TIMEZONES,
}) {
  const [now, setNow] = useState(null);
  const id = useId();

  useEffect(() => {
    const update = () => setNow(new Date());

    update();

    const timer = setInterval(update, 1000);

    document.addEventListener("visibilitychange", update);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <section aria-labelledby={`${id}-title`} className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F3FAF9] to-[#EBF3FC] py-10 sm:py-12">

      {/* Skyline background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        <Image
          src={skylineSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-85"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F8FAFC]/40 to-[#EBF3FC]/70" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-7 sm:mb-8">
          <h2 id={`${id}-title`} className="text-[24px] font-extrabold leading-tight tracking-[-0.03em] text-[#0C337B] sm:text-[30px] md:text-[34px]">
            Across borders. Across time zones.
          </h2>

          <p className="mt-1.5 text-[13px] font-medium text-[#526B8C] sm:text-[15px]">
            Live local times across the world's premier education hubs.
          </p>
        </div>

        {/* GRID LAYOUT - 2 cards mobile, 3 tablet, 4 desktop */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {countries.map((item, index) => (
            <CountryClockCard key={`${item.zone}-${index}`} item={item} now={now} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   ORIGINAL FOOTER
========================================== */

export default function UniversityFooter({
  siteUrl = "http://localhost:3000/",
  logoSrc = "/images/footer/university-yatra-logo.png",
  skylineSrc = "/images/footer/global-skyline.png",
  phone = "+91 92868 44550",
  email = "info@universityyatra.com",
  whatsappNumber = "919286844550",
  contactHref,
  socialLinks = {
    instagram: "https://www.instagram.com/universityyatra/",
    facebook: "https://www.facebook.com/universityyatra/",
    youtube: "https://www.youtube.com/@universityyatra",
  },
  year = new Date().getFullYear(),
}) {
  const hrefFor = (path) =>
    /^(https?:|mailto:|tel:|#)/i.test(path)
      ? path
      : `${siteUrl.replace(/\/$/, "")}${path}`;

  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent("Hi University Yatra, I would like guidance on my study options.")}`;

  const columns = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: hrefFor("/") },
        { label: "About Us", href: hrefFor("/about-us/") },
        { label: "FAQs", href: hrefFor("/faqs/") },
        { label: "Contact Us", href: contactHref || hrefFor("/contact-us/") },
        { label: "Blog", href: hrefFor("/blog") },
      ],
    },
    {
      title: "Student Services",
      links: [
        { label: "Study in India", href: hrefFor("/study-in-india/") },
        { label: "Study Abroad", href: hrefFor("/study-abroad/") },
        { label: "Student Services", href: hrefFor("/contact-us/") },
        { label: "Loan & Scholarship", href: hrefFor("/loan-and-scholarship-assistance/") },
        { label: "MBBS Abroad", href: hrefFor("/mbbs-abroad/") },
      ],
    },
    {
      title: "Destinations",
      links: [
        { label: "USA", href: hrefFor("/study-in-usa/") },
        { label: "UK & Ireland", href: hrefFor("/study-in-uk-ireland/") },
        { label: "Canada", href: hrefFor("/study-in-canada/") },
        { label: "Europe", href: hrefFor("/study-in-europe/") },
        { label: "Australia", href: hrefFor("/study-in-australia/") },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: email, href: `mailto:${email}` },
        { label: phone, href: `tel:${phone.replace(/[^+\d]/g, "")}` },
        { label: "WhatsApp Chat", href: whatsappHref },
        {
          label: "Instagram",
          href: socialLinks?.instagram || "https://www.instagram.com/universityyatra/",
        },
      ],
    },
  ];

  const policies = [
    {
      label: `© ${year} University Yatra™ · Future Yatra PVT. LTD.`,
      href: "#",
    },
    {
      label: "Privacy Policy",
      href: hrefFor("/privacy-policy/"),
    },
    {
      label: "Terms & Conditions",
      href: hrefFor("/terms-and-conditions/"),
    },
    {
      label: "Cancellation & Refund",
      href: hrefFor("/cancellation-refund-policy/"),
    },
  ];

  const logoNode = (
    <div className="flex flex-col gap-3">
      <a href={hrefFor("/")} aria-label="University Yatra Home" className="inline-block w-fit rounded-xl bg-white px-3.5 py-2 shadow-sm transition hover:bg-white hover:shadow-md">
        <Image
          src="/images/logo/university-yatra-logo.png"
          alt="University Yatra — Making Global Education Easy"
          width={280}
          height={68}
          className="h-8 w-auto object-contain sm:h-9"
          priority
        />
      </a>

      <p className="m-0 max-w-[280px] text-sm leading-relaxed text-[#E8F0FE]/80">
        Guiding students towards global education with support at every step.
      </p>
    </div>
  );

  const middleContent = (
    <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#A2C1FB]/20 bg-white/[0.05] p-4 backdrop-blur-md sm:flex-row sm:items-center sm:px-6 sm:py-4">
      <div className="min-w-0">
        <p className="m-0 text-base font-bold tracking-[-0.01em] text-white">
          Your next chapter starts here.
        </p>
        <p className="m-0 mt-1 text-xs text-[#A2C1FB] sm:text-[13px]">
          Speak with our counselors for personalized admissions, scholarship & visa guidance.
        </p>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-3">
        <a href={contactHref || hrefFor("/contact-us/")} className="inline-flex items-center gap-2 rounded-xl bg-[#1765F5] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#5D93F8] hover:shadow-md">
          <span>Speak with our team</span>
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-[#E8F0FE] transition hover:bg-white/20 hover:text-white">
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
          </svg>
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <UniversityClocks skylineSrc={skylineSrc} />

      <HalftoneWordmarkFooter
        wordmark="university yatra"
        logoNode={logoNode}
        columns={columns}
        middleContent={middleContent}
        policies={policies}
        backToTop={true}
        preset="university"
        palette={{
          background: "#0C337B",
          ink: "#E8F0FE",
          warm: "#1765F5",
        }}
        height="auto"
      />
    </div>
  );
}

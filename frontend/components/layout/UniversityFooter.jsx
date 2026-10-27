
"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";

import { Globe2, ArrowUpRight } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

/* ==========================================
   COUNTRY TIMEZONE DATA
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
   LIVE COUNTRY TIME FORMATTER
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
   LIGHT PREMIUM TIMEZONE CARD
========================================== */

function CountryClockCard({ item, now }) {
  const clock = formatCountryTime(now, item);

  return (
    <article className="group relative flex min-h-[122px] w-full min-w-0 flex-col overflow-hidden rounded-[15px] border border-[#E3EAF4] bg-[#FCFDFF] p-2.5 shadow-[0_4px_16px_rgba(12,51,123,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A2C1FB] hover:bg-white hover:shadow-[0_10px_25px_rgba(12,51,123,0.09)] sm:min-h-[128px] sm:p-3.5">

      {/* SUBTLE BACKGROUND LIGHTING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-12 h-[120px] w-[120px] rounded-full bg-[#EAF2FF]/55 blur-[25px]"
      />

      {/* COUNTRY HEADER */}
      <div className="relative z-10 flex min-w-0 items-start justify-between gap-1.5">

        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">

          {/* COUNTRY FLAG */}
          <div className="h-[23px] w-[31px] shrink-0 overflow-hidden rounded-[5px] border border-[#E3EAF4] bg-white shadow-[0_2px_5px_rgba(12,51,123,0.06)] sm:h-[25px] sm:w-[34px]">
            <img
              src={`https://flagcdn.com/w160/${item.flag}.png`}
              alt={`${item.country} flag`}
              width="160"
              height="110"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* NAME & CITY */}
          <div className="min-w-0">
            <h3 className="truncate text-[11px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0C337B] sm:text-[13px]">
              {item.country}
            </h3>

            <p className="mt-1 truncate text-[8px] font-medium leading-none text-[#7187A4] sm:text-[10px]">
              {item.city}
            </p>
          </div>
        </div>

        {/* UTC OFFSET BADGE */}
        <div className="hidden shrink-0 items-center gap-1 rounded-full border border-[#DFEAF9] bg-[#F0F6FF] px-1.5 py-1 min-[380px]:inline-flex">
          <Globe2
            size={10}
            strokeWidth={1.8}
            className="shrink-0 text-[#1765F5]"
          />

          <span className="whitespace-nowrap text-[8px] font-bold text-[#5577AA]">
            {clock.offset}
          </span>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative z-10 mt-3 h-px w-full bg-[#E6EDF7]" />

      {/* TIME & DATE */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-wrap items-end justify-between gap-x-2 gap-y-1 pt-2.5">

        {/* DIGITAL CLOCK */}
        <div className="flex min-w-0 items-baseline gap-1">
          <time className="text-[22px] font-extrabold leading-none tracking-[-0.06em] tabular-nums text-[#0C337B] min-[380px]:text-[26px] sm:text-[29px]">
            {clock.time}
          </time>

          <span className="text-[9px] font-extrabold text-[#1765F5] sm:text-[10px]">
            {clock.period}
          </span>
        </div>

        {/* LOCAL DATE */}
        <div className="min-w-0 text-right">
          <p className="whitespace-nowrap text-[8px] font-bold leading-[1.3] text-[#315584] sm:text-[9px]">
            {clock.date}
          </p>

          <p className="mt-0.5 text-[8px] font-medium leading-[1.25] text-[#7187A4] sm:text-[9px]">
            {clock.weekday}
          </p>
        </div>

      </div>
    </article>
  );
}

/* ==========================================
   RESPONSIVE LIVE TIMEZONE SECTION
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

    // Update clocks every second
    const timer = setInterval(update, 1000);

    document.addEventListener("visibilitychange", update);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#FCFDFF] via-[#F8FAFE] to-[#F1F6FD] py-10 sm:py-12"
    >

      {/* SKYLINE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden"
      >
        <Image
          src={skylineSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFDFF]/95 via-[#F8FAFE]/85 to-[#F1F6FD]/80" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-7 text-center sm:mb-8">

          <h2
            id={`${id}-title`}
            className="text-balance text-[24px] font-extrabold leading-tight tracking-[-0.03em] text-[#0C337B] sm:text-[30px] md:text-[34px]"
          >
            Across Borders. Across Time Zones.
          </h2>

          <p className="mx-auto mt-2 max-w-[620px] text-[12px] font-medium leading-[1.6] text-[#526B8C] sm:text-[14px]">
            Live local times across the world's premier education hubs.
          </p>

        </div>

        {/* 2 MOBILE / 3 TABLET / 4 DESKTOP */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-3.5">

          {countries.map((item, index) => (
            <CountryClockCard
              key={`${item.zone}-${index}`}
              item={item}
              now={now}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

/* ==========================================
   HORIZONTAL SOCIAL MEDIA ICONS
   FONT AWESOME BRANDS
========================================== */

function SocialMediaLinks({ socialLinks, whatsappHref }) {
  const socials = [
    {
      label: "Instagram",
      href: socialLinks?.instagram,
      icon: faInstagram,
    },
    {
      label: "Facebook",
      href: socialLinks?.facebook,
      icon: faFacebookF,
    },
    {
      label: "LinkedIn",
      href: socialLinks?.linkedin,
      icon: faLinkedinIn,
    },
    {
      label: "YouTube",
      href: socialLinks?.youtube,
      icon: faYoutube,
    },
    {
      label: "X (Twitter)",
      href: socialLinks?.x || socialLinks?.twitter,
      icon: faXTwitter,
    },
    {
      label: "WhatsApp",
      href: socialLinks?.whatsapp || whatsappHref,
      icon: faWhatsapp,
    },
  ].filter((social) => Boolean(social.href));

  if (!socials.length) return null;

  return (
    <div className="flex flex-col gap-3">

      <p className="text-[12px] font-bold text-white">
        Connect With Us
      </p>

      {/* HORIZONTAL SOCIAL ICONS */}
      <div className="flex flex-wrap items-center gap-2">

        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`University Yatra on ${social.label}`}
            title={social.label}
            className="group flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.07] text-[#E8F0FE] transition-all duration-300 hover:-translate-y-1 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}

      </div>
    </div>
  );
}

/* ==========================================
   MAIN UNIVERSITY FOOTER
========================================== */

export default function UniversityFooter({
  siteUrl = "http://localhost:3000/",
  logoSrc = "/images/logo/university-yatra-logo-f.png",
  skylineSrc = "/images/footer/global-skyline.png",
  phone = "+91 92868 44550",
  email = "info@universityyatra.com",
  whatsappNumber = "919286844550",
  contactHref,

  socialLinks = {
    instagram: "https://www.instagram.com/universityyatra/",
    facebook: "https://www.facebook.com/universityyatra/",
    youtube: "https://www.youtube.com/@universityyatra",
    linkedin: "",
    x: "",
  },

  year = new Date().getFullYear(),
}) {

  /* ==========================================
     URL HELPER
  ========================================== */

  const hrefFor = (path) =>
    /^(https?:|mailto:|tel:|#)/i.test(path)
      ? path
      : `${siteUrl.replace(/\/$/, "")}${path}`;

  const whatsappHref = `https://wa.me/${whatsappNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(
    "Hi University Yatra, I would like guidance on my study options."
  )}`;

  /* ==========================================
     FOOTER COLUMNS
  ========================================== */

  const columns = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: hrefFor("/") },
        { label: "About Us", href: hrefFor("/about-us/") },
        { label: "FAQs", href: hrefFor("/faqs/") },
        {
          label: "Contact Us",
          href: contactHref || hrefFor("/contact-us/"),
        },
        { label: "Blog", href: hrefFor("/blog") },
      ],
    },

    {
      title: "Student Services",
      links: [
        {
          label: "Study in India",
          href: hrefFor("/study-in-india/"),
        },
        {
          label: "Study Abroad",
          href: hrefFor("/study-abroad/"),
        },
        {
          label: "Student Services",
          href: hrefFor("/contact-us/"),
        },
        {
          label: "Loan & Scholarship",
          href: hrefFor("/loan-and-scholarship-assistance/"),
        },
        {
          label: "MBBS Abroad",
          href: hrefFor("/mbbs-abroad/"),
        },
      ],
    },

    {
      title: "Destinations",
      links: [
        { label: "USA", href: hrefFor("/study-in-usa/") },
        {
          label: "UK & Ireland",
          href: hrefFor("/study-in-uk-ireland/"),
        },
        {
          label: "Canada",
          href: hrefFor("/study-in-canada/"),
        },
        {
          label: "Europe",
          href: hrefFor("/study-in-europe/"),
        },
        {
          label: "Australia",
          href: hrefFor("/study-in-australia/"),
        },
      ],
    },

    {
      title: "Connect",
      links: [
        {
          label: email,
          href: `mailto:${email}`,
        },

        // Uncomment to display phone:
        // {
        //   label: phone,
        //   href: `tel:${phone.replace(/[^+\d]/g, "")}`,
        // },
      ],
    },
  ];

  /* ==========================================
     POLICY LINKS
  ========================================== */

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

  /* ==========================================
     FOOTER BRANDING + SOCIAL MEDIA
  ========================================== */

  const logoNode = (
    <div className="flex flex-col gap-4">

      {/* FOOTER LOGO */}
      <a
        href={hrefFor("/")}
        aria-label="University Yatra Home"
        className="inline-block w-fit rounded-xl bg-white px-3.5 py-2 shadow-sm transition hover:bg-white hover:shadow-md"
      >
        <Image
          src={logoSrc}
          alt="University Yatra — Making Global Education Easy"
          width={280}
          height={68}
          className="h-8 w-auto object-contain sm:h-9"
          priority
        />
      </a>

      {/* BRAND DESCRIPTION */}
      <p className="m-0 max-w-[280px] text-[13px] leading-relaxed text-[#E8F0FE]/80">
        Guiding students towards global education with support at
        every step.
      </p>

      {/* SOCIAL ICONS */}
      <SocialMediaLinks
        socialLinks={socialLinks}
        whatsappHref={whatsappHref}
      />
    </div>
  );

  /* ==========================================
     MIDDLE CTA CONTENT
  ========================================== */

  const middleContent = (
    <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#A2C1FB]/20 bg-white/[0.05] p-4 backdrop-blur-md sm:flex-row sm:items-center sm:px-6 sm:py-4">

      {/* CTA TEXT */}
      <div className="min-w-0">
        <p className="m-0 text-base font-bold tracking-[-0.01em] text-white">
          Your next chapter starts here.
        </p>

        <p className="m-0 mt-1 text-xs leading-[1.6] text-[#A2C1FB] sm:text-[13px]">
          Speak with our counselors for personalized admissions,
          scholarship & visa guidance.
        </p>
      </div>

      {/* CTA ACTIONS */}
      <div className="flex shrink-0 flex-wrap items-center gap-3">

        {/* CONTACT BUTTON */}
        <a
          href={contactHref || hrefFor("/contact-us/")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#1765F5] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#5D93F8] hover:shadow-md"
        >
          <span>Speak with our team</span>
          <ArrowUpRight size={15} />
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-[#E8F0FE] transition hover:bg-white/20 hover:text-white"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-4 w-4"
          />

          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );

  /* ==========================================
     FINAL FOOTER
  ========================================== */

  return (
    <div className="w-full">

      {/* LIVE COUNTRY CLOCK SECTION */}
      <UniversityClocks skylineSrc={skylineSrc} />

      {/* ORIGINAL HALFTONE FOOTER */}
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

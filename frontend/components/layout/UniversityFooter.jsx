"use client";

import Image from "next/image";
import { useEffect, useId, useState, useRef } from "react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import { ChevronLeft, ChevronRight, Globe, Calendar } from "lucide-react";

const THEMES = {
  // 1. Light Ice Blue / White (Top-left in image)
  iceLight: {
    card: "bg-gradient-to-br from-[#FFFFFF] via-[#F4F9FF] to-[#E5F1FF] border-[#C7DEFA] shadow-[0_12px_30px_rgba(12,51,123,0.08)] hover:border-[#1765F5]/40 hover:shadow-[0_16px_36px_rgba(23,101,245,0.18)]",
    country: "text-[#0C337B]",
    city: "text-[#526B8C]",
    utcPill: "bg-[#E0EFFE] text-[#1765F5] border-[#BAE0FD]",
    time: "text-[#0C337B]",
    period: "text-[#1765F5]",
    calendarIcon: "text-[#526B8C]",
    date: "text-[#0C337B]",
    day: "text-[#526B8C]",
    topLine: "via-[#1765F5]/20",
    flagBg: "bg-slate-100",
  },

  // 2. Vibrant Royal Blue (Top-right in image)
  royalBlue: {
    card: "bg-gradient-to-br from-[#1E69FF] via-[#0F56E9] to-[#0A3EAA] border-white/20 shadow-[0_14px_36px_rgba(15,86,233,0.35)] hover:border-white/40 hover:shadow-[0_20px_48px_rgba(15,86,233,0.5)]",
    country: "text-white",
    city: "text-white/80",
    utcPill: "bg-white/15 text-white border-white/20",
    time: "text-white",
    period: "text-[#93C5FD]",
    calendarIcon: "text-white/70",
    date: "text-white",
    day: "text-white/75",
    topLine: "via-white/30",
    flagBg: "bg-blue-950",
  },

  // 3. Midnight Obsidian Black / Dark Navy (Middle-left in image)
  midnightBlack: {
    card: "bg-gradient-to-br from-[#0B1528] via-[#070E1C] to-[#030712] border-[#1E2E48]/80 shadow-[0_14px_36px_rgba(2,6,23,0.4)] hover:border-[#00D2FF]/40 hover:shadow-[0_20px_48px_rgba(2,6,23,0.6)]",
    country: "text-white",
    city: "text-[#94A3B8]",
    utcPill: "bg-white/[0.08] text-[#38BDF8] border-white/10",
    time: "text-white",
    period: "text-[#00E5FF]",
    calendarIcon: "text-[#94A3B8]",
    date: "text-slate-200",
    day: "text-[#94A3B8]",
    topLine: "via-white/15",
    flagBg: "bg-slate-900",
  },

  // 4. Frosted Sky Blue / Glacier (Middle-right in image)
  glacierSky: {
    card: "bg-gradient-to-br from-[#EBF5FF] via-[#DEEDFE] to-[#CCE3FD] border-[#B2D5F9] shadow-[0_12px_30px_rgba(14,116,144,0.1)] hover:border-[#0284C7]/40 hover:shadow-[0_16px_36px_rgba(2,132,199,0.2)]",
    country: "text-[#0C337B]",
    city: "text-[#476788]",
    utcPill: "bg-[#0284C7]/12 text-[#0284C7] border-[#0284C7]/25",
    time: "text-[#0C337B]",
    period: "text-[#0284C7]",
    calendarIcon: "text-[#476788]",
    date: "text-[#0C337B]",
    day: "text-[#476788]",
    topLine: "via-[#0284C7]/20",
    flagBg: "bg-sky-100",
  },

  // 5. Deep Teal / Emerald (Bottom-left in image)
  deepTeal: {
    card: "bg-gradient-to-br from-[#042F2E] via-[#032322] to-[#011413] border-[#115E59]/70 shadow-[0_14px_36px_rgba(4,47,46,0.35)] hover:border-[#2DD4BF]/40 hover:shadow-[0_20px_48px_rgba(4,47,46,0.55)]",
    country: "text-white",
    city: "text-[#5EEAD4]/80",
    utcPill: "bg-white/10 text-[#2DD4BF] border-white/15",
    time: "text-white",
    period: "text-[#2DD4BF]",
    calendarIcon: "text-[#5EEAD4]/70",
    date: "text-white",
    day: "text-[#5EEAD4]/80",
    topLine: "via-white/20",
    flagBg: "bg-teal-950",
  },

  // 6. Soft Lavender / Purple (Bottom-right in image)
  lavenderPurple: {
    card: "bg-gradient-to-br from-[#F5EEFF] via-[#EADBFF] to-[#D8B9FF] border-[#CFADFF] shadow-[0_12px_30px_rgba(109,40,217,0.12)] hover:border-[#7C3AED]/40 hover:shadow-[0_16px_36px_rgba(124,58,237,0.22)]",
    country: "text-[#2E1065]",
    city: "text-[#6B21A8]",
    utcPill: "bg-[#7C3AED]/12 text-[#6D28D9] border-[#7C3AED]/25",
    time: "text-[#2E1065]",
    period: "text-[#7C3AED]",
    calendarIcon: "text-[#6B21A8]",
    date: "text-[#2E1065]",
    day: "text-[#6B21A8]",
    topLine: "via-[#7C3AED]/25",
    flagBg: "bg-purple-100",
  },
};

const COUNTRIES_TIMEZONES = [
  {
    country: "Canada",
    city: "Toronto",
    zone: "America/Toronto",
    flag: "/images/flags/ca.svg",
    utcOffset: "UTC-04:00",
    theme: "iceLight",
  },
  {
    country: "USA",
    city: "New York",
    zone: "America/New_York",
    flag: "/images/flags/us.svg",
    utcOffset: "UTC-04:00",
    theme: "royalBlue",
  },
  {
    country: "India",
    city: "New Delhi",
    zone: "Asia/Kolkata",
    flag: "/images/flags/in.svg",
    utcOffset: "UTC+05:30",
    theme: "midnightBlack",
  },
  {
    country: "Germany",
    city: "Berlin",
    zone: "Europe/Berlin",
    flag: "/images/flags/de.svg",
    utcOffset: "UTC+02:00",
    theme: "glacierSky",
  },
  {
    country: "Australia",
    city: "Sydney",
    zone: "Australia/Sydney",
    flag: "/images/flags/au.svg",
    utcOffset: "UTC+11:00",
    theme: "deepTeal",
  },
  {
    country: "UK",
    city: "London",
    zone: "Europe/London",
    flag: "/images/flags/gb.svg",
    utcOffset: "UTC+01:00",
    theme: "lavenderPurple",
  },
  {
    country: "Japan",
    city: "Tokyo",
    zone: "Asia/Tokyo",
    flag: "/images/flags/jp.svg",
    utcOffset: "UTC+09:00",
    theme: "iceLight",
  },
  {
    country: "UAE",
    city: "Dubai",
    zone: "Asia/Dubai",
    flag: "/images/flags/ae.svg",
    utcOffset: "UTC+04:00",
    theme: "royalBlue",
  },
];

function getCountryDateTime(now, item) {
  if (!now) {
    return {
      hourMinute: "--:--",
      period: "--",
      formattedDate: "---, -- --- ----",
      dayName: "----",
      utcOffset: item.utcOffset || "UTC",
    };
  }

  const timeOptions = { timeZone: item.zone, hour: "2-digit", minute: "2-digit", hour12: true };
  const tParts = new Intl.DateTimeFormat("en-US", timeOptions).formatToParts(now);
  const hour = tParts.find((p) => p.type === "hour")?.value || "12";
  const minute = tParts.find((p) => p.type === "minute")?.value || "00";
  const period = tParts.find((p) => p.type === "dayPeriod")?.value || "AM";

  const dateOptions = { timeZone: item.zone, weekday: "short", day: "2-digit", month: "short", year: "numeric" };
  const dParts = new Intl.DateTimeFormat("en-US", dateOptions).formatToParts(now);
  const weekday = dParts.find((p) => p.type === "weekday")?.value || "";
  const day = dParts.find((p) => p.type === "day")?.value || "";
  const month = dParts.find((p) => p.type === "month")?.value || "";
  const year = dParts.find((p) => p.type === "year")?.value || "";
  const formattedDate = `${weekday}, ${day} ${month} ${year}`;

  const dayName = new Intl.DateTimeFormat("en-US", { timeZone: item.zone, weekday: "long" }).format(now);

  let utcOffset = item.utcOffset;
  try {
    const tzParts = new Intl.DateTimeFormat("en-US", { timeZone: item.zone, timeZoneName: "shortOffset" }).formatToParts(now);
    const tzName = tzParts.find((p) => p.type === "timeZoneName")?.value;
    if (tzName) {
      const match = tzName.match(/GMT([+-])(\d+)(?::(\d+))?/);
      if (match) {
        const sign = match[1];
        const h = match[2].padStart(2, "0");
        const m = (match[3] || "00").padStart(2, "0");
        utcOffset = `UTC${sign}${h}:${m}`;
      } else if (tzName === "GMT") {
        utcOffset = "UTC+00:00";
      }
    }
  } catch (e) {}

  return {
    hourMinute: `${hour}:${minute}`,
    period,
    formattedDate,
    dayName,
    utcOffset,
  };
}

export function UniversityClocks({
  skylineSrc = "/images/footer/global-skyline.png",
  countries = COUNTRIES_TIMEZONES,
}) {
  const [now, setNow] = useState(null);
  const id = useId();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="relative isolate min-h-[440px] overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F3FAF9] to-[#EBF3FC] py-12 sm:py-16"
      suppressHydrationWarning
    >
      {/* 1. Stretched monuments skyline background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden"
      >
        <Image
          src={skylineSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-85"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F8FAFC]/40 to-[#EBF3FC]/70" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Simple Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#1765F5] mb-1.5">
              GLOBAL PRESENCE
            </span>
            <h2
              id={`${id}-title`}
              className="text-[24px] sm:text-[30px] md:text-[34px] font-extrabold leading-tight tracking-[-0.03em] text-[#0C337B]"
            >
              Across borders. Across time zones.
            </h2>
            <p className="mt-1.5 text-sm sm:text-base font-medium text-[#526B8C]">
              Live local times across the world&apos;s premier education hubs.
            </p>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous time zones"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                canScrollLeft
                  ? "border-[#1765F5]/30 bg-white text-[#1765F5] shadow-sm hover:bg-[#1765F5] hover:text-white"
                  : "border-slate-200 bg-white/50 text-slate-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next time zones"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                canScrollRight
                  ? "border-[#1765F5]/30 bg-white text-[#1765F5] shadow-sm hover:bg-[#1765F5] hover:text-white"
                  : "border-slate-200 bg-white/50 text-slate-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 2. Non-Automated Carousel Track with Exact Reference Widget Design */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {countries.map((item, idx) => {
            const dt = getCountryDateTime(now, item);
            const theme = THEMES[item.theme] || THEMES.midnightBlack;

            return (
              <div
                key={item.country || idx}
                className={`group relative flex flex-col justify-between shrink-0 w-[290px] sm:w-[320px] md:w-[335px] snap-start select-none rounded-[24px] sm:rounded-[26px] border p-5 sm:p-5.5 transition-all duration-300 hover:-translate-y-1 ${theme.card}`}
              >
                {/* Subtle top-inner highlight glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent ${theme.topLine} to-transparent`}
                />

                {/* TOP ROW: Flag + Country/City + UTC Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Flag */}
                    <div className={`relative h-7 w-11 shrink-0 overflow-hidden rounded-[7px] border border-black/10 shadow-sm ${theme.flagBg}`}>
                      <Image
                        src={item.flag}
                        alt={`${item.country} flag`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className={`text-[17px] sm:text-[18px] font-bold leading-none tracking-tight truncate ${theme.country}`}>
                        {item.country}
                      </h3>
                      <p className={`text-[12px] sm:text-[13px] font-medium leading-none mt-1.5 truncate ${theme.city}`}>
                        {item.city}
                      </p>
                    </div>
                  </div>

                  {/* UTC Pill */}
                  <div className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${theme.utcPill}`}>
                    <Globe className="h-3 w-3" />
                    <span>{dt.utcOffset}</span>
                  </div>
                </div>

                {/* BOTTOM ROW: Big Time + AM/PM & Date/Day */}
                <div className="mt-5 flex items-end justify-between gap-3 pt-1">
                  {/* Big Time Display */}
                  <div className="flex items-baseline">
                    <span className={`font-mono text-[36px] sm:text-[42px] font-black leading-none tracking-tight ${theme.time}`}>
                      {dt.hourMinute}
                    </span>
                    <span className={`ml-1.5 text-[14px] sm:text-[16px] font-bold tracking-wider ${theme.period}`}>
                      {dt.period}
                    </span>
                  </div>

                  {/* Calendar Date Block */}
                  <div className="flex items-center gap-2 text-right">
                    <Calendar className={`h-4 w-4 shrink-0 ${theme.calendarIcon}`} />
                    <div className="flex flex-col text-left">
                      <span className={`text-[11px] sm:text-[12px] font-semibold leading-tight ${theme.date}`}>
                        {dt.formattedDate}
                      </span>
                      <span className={`text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5 capitalize ${theme.day}`}>
                        {dt.dayName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function UniversityFooter({
  siteUrl = "https://universityyatra.com",
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
  const hrefFor = (path) => /^(https?:|mailto:|tel:|#)/i.test(path) ? path : `${siteUrl.replace(/\/$/, "")}${path}`;
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
        { label: "Instagram", href: socialLinks?.instagram || "https://www.instagram.com/universityyatra/" },
      ],
    },
  ];

  const policies = [
    { label: `© ${year} University Yatra™ · Future Yatra PVT. LTD.`, href: "#" },
    { label: "Privacy Policy", href: hrefFor("/privacy-policy/") },
    { label: "Terms & Conditions", href: hrefFor("/terms-conditions/") },
    { label: "Cancellation & Refund", href: hrefFor("/cancellation-refund-policy/") },
  ];

  const logoNode = (
    <div className="flex flex-col gap-3">
      <a
        href={hrefFor("/")}
        aria-label="University Yatra Home"
        className="inline-block w-fit rounded-xl bg-white px-3.5 py-2 shadow-sm transition hover:bg-white hover:shadow-md"
      >
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
    <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#A2C1FB]/20 bg-white/[0.05] p-4 sm:flex-row sm:items-center sm:px-6 sm:py-4 backdrop-blur-md">
      <div className="min-w-0">
        <p className="m-0 text-base font-bold text-white tracking-[-0.01em]">Your next chapter starts here.</p>
        <p className="m-0 mt-1 text-xs text-[#A2C1FB] sm:text-[13px]">Speak with our counselors for personalized admissions, scholarship & visa guidance.</p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-3">
        <a
          href={contactHref || hrefFor("/contact-us/")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#1765F5] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#5D93F8] hover:shadow-md"
        >
          <span>Speak with our team</span>
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-[#E8F0FE] transition hover:bg-white/20 hover:text-white"
        >
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
      {/* 1. Global Time Zones 3D Curved Cylinder Stream with Stretched Skyline Monuments Background */}
      <UniversityClocks skylineSrc={skylineSrc} />

      {/* 2. New Halftone Wordmark Footer at the very bottom with University Yatra brand logo and typography */}
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

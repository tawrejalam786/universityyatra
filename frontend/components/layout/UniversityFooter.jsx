"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import TiltedGridHero from "@/components/ui/tilted-grid-hero";

const COUNTRIES_TIMEZONES = [
  {
    country: "India",
    city: "New Delhi",
    zone: "Asia/Kolkata",
    locale: "en-IN",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    landmark: "Taj Mahal & India Gate",
    code: "DEL",
  },
  {
    country: "USA",
    city: "New York",
    zone: "America/New_York",
    locale: "en-US",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80",
    landmark: "Statue of Liberty & Manhattan",
    code: "NYC",
  },
  {
    country: "UK",
    city: "London / Oxford",
    zone: "Europe/London",
    locale: "en-GB",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    landmark: "Big Ben & Westminster",
    code: "LON",
  },
  {
    country: "Canada",
    city: "Toronto",
    zone: "America/Toronto",
    locale: "en-US",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
    landmark: "CN Tower & Toronto Skyline",
    code: "TOR",
  },
  {
    country: "Australia",
    city: "Sydney",
    zone: "Australia/Sydney",
    locale: "en-AU",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    landmark: "Sydney Opera House",
    code: "SYD",
  },
  {
    country: "Germany",
    city: "Berlin",
    zone: "Europe/Berlin",
    locale: "en-GB",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
    landmark: "Brandenburg Gate & Berlin",
    code: "BER",
  },
  {
    country: "Japan",
    city: "Tokyo",
    zone: "Asia/Tokyo",
    locale: "en-GB",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    landmark: "Tokyo Tower & Skyline",
    code: "TYO",
  },
  {
    country: "UAE",
    city: "Dubai",
    zone: "Asia/Dubai",
    locale: "en-GB",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    landmark: "Burj Khalifa & Downtown",
    code: "DXB",
  },
];

function formatCountryTime(now, item) {
  if (!now) {
    return {
      digits: "--:--",
      period: "--",
      date: "Local time",
      zone: item.code,
      offset: "UTC",
      isDay: true,
    };
  }
  const options = { timeZone: item.zone };
  const parts = new Intl.DateTimeFormat("en-US", {
    ...options,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(now);

  const hour = parts.find((p) => p.type === "hour")?.value || "12";
  const minute = parts.find((p) => p.type === "minute")?.value || "00";
  const period = parts.find((p) => p.type === "dayPeriod")?.value || "AM";

  const hour24 = parseInt(
    new Intl.DateTimeFormat("en-US", {
      ...options,
      hour: "numeric",
      hour12: false,
    }).format(now),
    10
  );
  const isDay = hour24 >= 6 && hour24 < 18;

  const zoneName =
    new Intl.DateTimeFormat("en-US", {
      ...options,
      timeZoneName: "short",
    })
      .formatToParts(now)
      .find((p) => p.type === "timeZoneName")?.value || item.code;

  const rawOffset =
    new Intl.DateTimeFormat("en-US", {
      ...options,
      timeZoneName: "shortOffset",
    })
      .formatToParts(now)
      .find((p) => p.type === "timeZoneName")?.value || "";

  const match = rawOffset.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
  const offset = match
    ? `UTC${match[1]}${match[2].padStart(2, "0")}:${match[3] || "00"}`
    : "UTC";

  const dateStr = new Intl.DateTimeFormat("en-GB", {
    ...options,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(now);

  return {
    digits: `${hour}:${minute}`,
    period,
    date: dateStr,
    zone: zoneName,
    offset,
    isDay,
  };
}

// Inline flags render consistently across devices
function CountryFlag({ country }) {
  const star = (cx, cy, radius, points = 7) => {
    const coords = [];
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const r = i % 2 ? radius * 0.42 : radius;
      coords.push(`${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`);
    }
    return coords.join(" ");
  };

  const australiaStars = {
    large: star(7.5, 15, 3, 7),
    small1: star(22.5, 3, 1.6, 7),
    small2: star(18.5, 9, 1.6, 7),
    small3: star(26.5, 8, 1.6, 7),
    small4: star(22.5, 16.5, 1.6, 7),
    tiny: star(24.5, 12, 0.8, 5),
  };

  return (
    <svg viewBox="0 0 30 20" className="h-3.5 w-5 shrink-0 overflow-hidden rounded-sm shadow-sm" aria-hidden="true" suppressHydrationWarning>
      <rect width="30" height="20" fill="white" />
      {country === "Canada" && <><path fill="#D80621" d="M0 0h7v20H0zM23 0h7v20h-7z" /><path fill="#D80621" d="m15 2 1.4 3.5 1.6-.8-.7 4.5 2.8-2 .2 2.1 2 .5-4.5 4 .7 1.6-3-.5.2 3.1h-1.4l.2-3.1-3 .5.7-1.6-4.5-4 2-.5.2-2.1 2.8 2-.7-4.5 1.6.8Z" /></>}
      {country === "India" && <><rect width="30" height="6.667" fill="#FF9933" /><rect y="13.333" width="30" height="6.667" fill="#138808" /><circle cx="15" cy="10" r="2.8" fill="none" stroke="#000080" strokeWidth=".35" />{Array.from({ length: 24 }, (_, i) => <path key={i} d="M15 10v-2.8" transform={`rotate(${i * 15} 15 10)`} stroke="#000080" strokeWidth=".18" />)}</>}
      {country === "Germany" && <><rect width="30" height="6.667" fill="#000" /><rect y="6.667" width="30" height="6.666" fill="#DD0000" /><rect y="13.333" width="30" height="6.667" fill="#FFCE00" /></>}
      {country === "Japan" && <circle cx="15" cy="10" r="6" fill="#BC002D" />}
      {country === "UAE" && <><rect width="30" height="6.667" fill="#00732F" /><rect y="13.333" width="30" height="6.667" fill="#000" /><rect width="7.5" height="20" fill="#FF0000" /></>}
      {country === "Australia" && <><rect width="30" height="20" fill="#012169" /><svg x="0" y="0" width="15" height="10" viewBox="0 0 30 20" overflow="hidden"><path stroke="white" strokeWidth="5" d="m0 0 30 20M30 0 0 20" /><path stroke="#C8102E" strokeWidth="1.6" d="m0 0 30 20M30 0 0 20" /><path stroke="white" strokeWidth="7" d="M15 0v20M0 10h30" /><path stroke="#C8102E" strokeWidth="4" d="M15 0v20M0 10h30" /></svg><polygon points={australiaStars.large} fill="white" suppressHydrationWarning /><polygon points={australiaStars.small1} fill="white" suppressHydrationWarning /><polygon points={australiaStars.small2} fill="white" suppressHydrationWarning /><polygon points={australiaStars.small3} fill="white" suppressHydrationWarning /><polygon points={australiaStars.small4} fill="white" suppressHydrationWarning /><polygon points={australiaStars.tiny} fill="white" suppressHydrationWarning /></>}
      {country === "UK" && <><rect width="30" height="20" fill="#012169" /><path stroke="white" strokeWidth="5" d="m0 0 30 20M30 0 0 20" /><path stroke="#C8102E" strokeWidth="1.6" d="m0 0 30 20M30 0 0 20" /><path stroke="white" strokeWidth="7" d="M15 0v20M0 10h30" /><path stroke="#C8102E" strokeWidth="4" d="M15 0v20M0 10h30" /></>}
      {country === "USA" && <>{Array.from({ length: 7 }, (_, i) => <rect key={i} y={(i * 40) / 13} width="30" height={20 / 13} fill="#B22234" />)}<rect width="13" height={140 / 13} fill="#3C3B6E" />{Array.from({ length: 9 }, (_, row) => Array.from({ length: row % 2 ? 5 : 6 }, (_, col) => <path key={`${row}-${col}`} transform={`translate(${(row % 2 ? 2.15 : 1.1) + col * 2.15},${1.05 + row * 1.08})`} d="M0-.5.15-.16H.5L.22.08.32.45 0 .23-.32.45-.22.08-.5-.16H-.15Z" fill="white" />))}</>}
    </svg>
  );
}

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
    <section
      aria-labelledby={`${id}-title`}
      className="relative isolate min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F3FAF9] to-[#EBF3FC]"
      suppressHydrationWarning
    >
      {/* 1. Stretched monuments skyline background (Taj Mahal, Eiffel Tower, Statue of Liberty, CN Tower, Big Ben) */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F8FAFC]/30 to-[#EBF3FC]/65" />
      </div>

      {/* 2. 3D Curved Cylinder Stream with Country Timezone Cards */}
      <TiltedGridHero
        items={countries}
        speed={4}
        tileHeight={26}
        aspectRatio={16 / 9}
        gap={6}
        axis={56}
        curve={80}
        fade={12}
        interactive={true}
        className="h-[560px] sm:h-[600px] w-full"
        renderCard={(item) => {
          const timeParts = formatCountryTime(now, item);
          return (
            <div className="relative h-full w-full overflow-hidden select-none">
              {/* Pure landmark photograph */}
              <img
                src={item.image}
                alt={`${item.landmark}, ${item.country}`}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Atmospheric depth vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/60" />

              {/* 3D Depth watermark in background */}
              <div className="pointer-events-none absolute -right-1.5 top-5 select-none text-[52px] font-black leading-none tracking-tighter text-white/[0.08]">
                {item.code}
              </div>

              {/* Card foreground contents */}
              <div className="relative z-10 flex h-full flex-col justify-between p-3">
                {/* Top: Flag + Country Name + Day/Night */}
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 rounded-full border border-white/25 bg-black/60 px-2 py-0.5 backdrop-blur-md">
                    <CountryFlag country={item.country} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                      {item.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/15 px-1.5 py-0.5 text-[8.5px] font-semibold text-white/90 backdrop-blur-sm">
                      {timeParts.isDay ? "☀️" : "🌙"}
                    </span>
                  </div>
                </div>

                {/* Center: Live Time HUD */}
                <div className="my-auto rounded-lg border border-white/20 bg-black/55 px-2.5 py-1.5 shadow-inner backdrop-blur-md">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[24px] sm:text-[28px] font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                        {timeParts.digits}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#5D93F8]">
                        {timeParts.period}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[9.5px] font-bold text-[#A2C1FB]">
                        {timeParts.offset}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/15 pt-1 text-[8.5px] text-white/80">
                    <span className="truncate max-w-[120px]">{item.city} • {item.landmark}</span>
                    <span className="font-medium text-[#A2C1FB] shrink-0">{timeParts.date}</span>
                  </div>
                </div>

                {/* Bottom line: Timezone code */}
                <div className="flex items-center justify-between text-[9px] text-white/70">
                  <span className="font-medium">{item.zone}</span>
                  <span className="rounded bg-white/15 px-1.5 py-0.2 font-mono font-bold text-white/90">{item.code}</span>
                </div>
              </div>
            </div>
          );
        }}
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-between py-7 sm:py-9 text-center pointer-events-none">
          <div className="px-5">
            <h2
              id={`${id}-title`}
              className="m-0 text-[26px] font-extrabold leading-tight tracking-[-0.03em] text-[#0C337B] sm:text-[34px] md:text-[38px] drop-shadow-sm"
            >
              Across borders. Across time zones.
            </h2>
            <p className="mb-0 mt-1.5 text-sm font-medium text-[#0C337B]/80 sm:text-base">
              Live local times across the world's premier education hubs.
            </p>
          </div>
        </div>
      </TiltedGridHero>
    </section>
  );
}

export default function UniversityFooter({
  siteUrl = "https://universityyatra.com",
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

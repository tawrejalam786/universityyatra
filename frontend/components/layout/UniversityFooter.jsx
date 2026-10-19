"use client";

import Image from "next/image";
import { useEffect, useId, useState, useRef } from "react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  if (!now) return "--:-- --";
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

  return `${hour}:${minute} ${period}`;
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
      className="relative isolate min-h-[460px] overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F3FAF9] to-[#EBF3FC] py-12 sm:py-16"
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
            <h2
              id={`${id}-title`}
              className="text-[24px] sm:text-[30px] md:text-[34px] font-extrabold leading-tight tracking-[-0.03em] text-[#0C337B]"
            >
              Across borders. Across time zones.
            </h2>
            <p className="mt-1.5 text-sm sm:text-base font-medium text-[#526B8C]">
              Live local times across the world's premier education hubs.
            </p>
          </div>

          {/* Simple Carousel Left / Right Navigation Controls */}
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

        {/* 2. Simple Non-Automated Carousel Track with Exact Card Effect from Prompt */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {countries.map((item, idx) => {
            const timeString = formatCountryTime(now, item);

            return (
              <div
                key={item.country || idx}
                className="group flex flex-col items-center justify-center gap-5 shrink-0 w-[260px] sm:w-[280px] md:w-[295px] snap-start select-none"
              >
                {/* Landmark Image with Monographic Grayscale Hover Effect from Prompt */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-[0_8px_24px_rgba(12,51,123,0.08)] border border-white/60">
                  <img
                    src={item.image}
                    alt={item.country}
                    className="w-full h-full object-cover group-hover:grayscale transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Text: Only Country Name & Live Time */}
                <div className="w-full flex flex-col gap-1.5 items-center justify-center text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0C337B] tracking-tight">
                    {item.country}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#1765F5] font-mono">
                    {timeString}
                  </p>
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

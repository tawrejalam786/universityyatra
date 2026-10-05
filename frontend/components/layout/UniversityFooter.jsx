"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

const UNIVERSITIES = [
  {  city: "Delhi", country: "India", zone: "Asia/Kolkata", locale: "en-IN", href: "https://www.du.ac.in/" },
  {  city: "New York", country: "USA", zone: "America/New_York", locale: "en-US", href: "https://www.columbia.edu/" },
  {  city: "Toronto", country: "Canada", zone: "America/Toronto", locale: "en-US", href: "https://www.utoronto.ca/" },
  {  city: "Oxford", country: "UK", zone: "Europe/London", locale: "en-GB", href: "https://www.ox.ac.uk/" },
  { city: "Berlin", country: "Germany", zone: "Europe/Berlin", locale: "en-GB", href: "https://www.hu-berlin.de/en" },
  {  city: "Sydney", country: "Australia", zone: "Australia/Sydney", locale: "en-AU", href: "https://www.sydney.edu.au/" },
  {  city: "Tokyo", country: "Japan", zone: "Asia/Tokyo", locale: "en-GB", href: "https://www.u-tokyo.ac.jp/en/" },
  {  city: "Dubai", country: "UAE", zone: "Asia/Dubai", locale: "en-GB", href: "https://ud.ac.ae/" },
];

// IANA zones keep the clocks and UTC offsets correct through daylight saving.
function localClock(now, university) {
  if (!now) return { time: "--:--", date: "Local time", zone: university.zone, offset: "" };
  const options = { timeZone: university.zone };
  const zone = new Intl.DateTimeFormat(university.locale, { ...options, timeZoneName: "short" }).formatToParts(now).find(p => p.type === "timeZoneName").value;
  const raw = new Intl.DateTimeFormat("en-US", { ...options, timeZoneName: "shortOffset" }).formatToParts(now).find(p => p.type === "timeZoneName").value;
  const match = raw.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
  const offset = match ? `UTC${match[1]}${match[2].padStart(2, "0")}:${match[3] || "00"}` : "UTC+00:00";
  return {
    time: new Intl.DateTimeFormat("en-US", { ...options, hour: "numeric", minute: "2-digit", hour12: true }).format(now),
    date: new Intl.DateTimeFormat("en-GB", { ...options, day: "numeric", month: "short" }).format(now), zone, offset,
  };
}

// Inline flags render consistently even on systems without emoji fonts.
function CountryFlag({ country }) {
  // Pre-calculate star points to avoid hydration mismatch
  const star = (cx, cy, radius, points = 7) => {
    const coords = [];
    for (let i = 0; i < points * 2; i++) {
      const angle = i * Math.PI / points - Math.PI / 2;
      const r = i % 2 ? radius * 0.42 : radius;
      coords.push(`${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`);
    }
    return coords.join(" ");
  };

  // Pre-calculate all star coordinates
  const australiaStars = {
    large: star(7.5, 15, 3, 7),
    small1: star(22.5, 3, 1.6, 7),
    small2: star(18.5, 9, 1.6, 7),
    small3: star(26.5, 8, 1.6, 7),
    small4: star(22.5, 16.5, 1.6, 7),
    tiny: star(24.5, 12, 0.8, 5)
  };

  return <svg viewBox="0 0 30 20" className="h-5 w-[30px] shrink-0 overflow-hidden rounded-sm" aria-hidden="true" suppressHydrationWarning>
    <rect width="30" height="20" fill="white" />
    {country === "Canada" && <><path fill="#D80621" d="M0 0h7v20H0zM23 0h7v20h-7z" /><path fill="#D80621" d="m15 2 1.4 3.5 1.6-.8-.7 4.5 2.8-2 .2 2.1 2 .5-4.5 4 .7 1.6-3-.5.2 3.1h-1.4l.2-3.1-3 .5.7-1.6-4.5-4 2-.5.2-2.1 2.8 2-.7-4.5 1.6.8Z" /></>}
    {country === "India" && <><rect width="30" height="6.667" fill="#FF9933" /><rect y="13.333" width="30" height="6.667" fill="#138808" /><circle cx="15" cy="10" r="2.8" fill="none" stroke="#000080" strokeWidth=".35" />{Array.from({ length: 24 }, (_, i) => <path key={i} d="M15 10v-2.8" transform={`rotate(${i * 15} 15 10)`} stroke="#000080" strokeWidth=".18" />)}</>}
    {country === "Germany" && <><rect width="30" height="6.667" fill="#000" /><rect y="6.667" width="30" height="6.666" fill="#DD0000" /><rect y="13.333" width="30" height="6.667" fill="#FFCE00" /></>}
    {country === "Japan" && <circle cx="15" cy="10" r="6" fill="#BC002D" />}
    {country === "UAE" && <><rect width="30" height="6.667" fill="#00732F" /><rect y="13.333" width="30" height="6.667" fill="#000" /><rect width="7.5" height="20" fill="#FF0000" /></>}
    {country === "Australia" && <><rect width="30" height="20" fill="#012169" /><svg x="0" y="0" width="15" height="10" viewBox="0 0 30 20" overflow="hidden"><path stroke="white" strokeWidth="5" d="m0 0 30 20M30 0 0 20" /><path stroke="#C8102E" strokeWidth="1.6" d="m0 0 30 20M30 0 0 20" /><path stroke="white" strokeWidth="7" d="M15 0v20M0 10h30" /><path stroke="#C8102E" strokeWidth="4" d="M15 0v20M0 10h30" /></svg><polygon points={australiaStars.large} fill="white" suppressHydrationWarning /><polygon points={australiaStars.small1} fill="white" suppressHydrationWarning /><polygon points={australiaStars.small2} fill="white" suppressHydrationWarning /><polygon points={australiaStars.small3} fill="white" suppressHydrationWarning /><polygon points={australiaStars.small4} fill="white" suppressHydrationWarning /><polygon points={australiaStars.tiny} fill="white" suppressHydrationWarning /></>}
    {country === "UK" && <><rect width="30" height="20" fill="#012169" /><path stroke="white" strokeWidth="5" d="m0 0 30 20M30 0 0 20" /><path stroke="#C8102E" strokeWidth="1.6" d="m0 0 30 20M30 0 0 20" /><path stroke="white" strokeWidth="7" d="M15 0v20M0 10h30" /><path stroke="#C8102E" strokeWidth="4" d="M15 0v20M0 10h30" /></>}
    {country === "USA" && <>{Array.from({ length: 7 }, (_, i) => <rect key={i} y={i * 40 / 13} width="30" height={20 / 13} fill="#B22234" />)}<rect width="13" height={140 / 13} fill="#3C3B6E" />{Array.from({ length: 9 }, (_, row) => Array.from({ length: row % 2 ? 5 : 6 }, (_, col) => <path key={`${row}-${col}`} transform={`translate(${(row % 2 ? 2.15 : 1.1) + col * 2.15},${1.05 + row * 1.08})`} d="M0-.5.15-.16H.5L.22.08.32.45 0 .23-.32.45-.22.08-.5-.16H-.15Z" fill="white" />))}</>}
  </svg>;
}

function UniversityClocks({ skylineSrc }) {
  const [now, setNow] = useState(null);
  const id = useId();
  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = setInterval(update, 30_000);
    document.addEventListener("visibilitychange", update);
    return () => { clearInterval(timer); document.removeEventListener("visibilitychange", update); };
  }, []);

  return (
    <section aria-labelledby={`${id}-title`} className="relative isolate overflow-hidden pb-7 pt-7 sm:pb-8 lg:pt-6" suppressHydrationWarning>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-[380px] select-none sm:top-0 sm:h-[410px]">
        <Image src={skylineSrc} alt="" fill sizes="100vw" className="object-cover object-bottom opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3FAF9] via-[#F3FAF9]/15 to-[#F3FAF9]/50" />
      </div>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 id={`${id}-title`} className="mx-auto m-0 max-w-[24ch] text-[24px] font-bold leading-tight tracking-[-0.025em] sm:max-w-none sm:text-[28px]">Across borders. Across time zones.</h2>
          <p className="mb-0 mt-2 text-sm text-[#003870]/80 sm:text-base">Live local times · Your journey, connected.</p>
        </div>

        <ul aria-label="University local times" className="mt-16 grid list-none grid-cols-2 overflow-hidden rounded-[24px] border-2 border-white/90 bg-white/60 p-2 shadow-[0_10px_28px_-12px_#2EBEB580] backdrop-blur-md sm:mt-28 sm:p-4 lg:mt-36 lg:grid-cols-4 lg:rounded-[28px] lg:px-2 lg:py-4">
          {UNIVERSITIES.map((university, index) => {
            const clock = localClock(now, university);
            const [digits, period] = clock.time.split(/\s+/);
            const countryLabel = university.country;
            return (
              <li key={university.zone} data-time-zone={university.zone} data-time-locale={university.locale}
                className={`min-w-0 border-[#2EBEB5]/30 px-3 py-4 sm:px-5 ${index % 2 === 0 ? "border-r" : ""} ${index < UNIVERSITIES.length - 2 ? "border-b" : ""} ${index % 4 === 3 ? "lg:border-r-0" : "lg:border-r"} ${index < UNIVERSITIES.length - 4 ? "lg:border-b" : "lg:border-b-0"}`}>
                <div className="flex min-h-11 items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-sm"><CountryFlag country={university.country} /></span>
                  <span className="min-w-0 text-[10px] font-bold uppercase leading-4 tracking-wide sm:text-xs lg:text-[13px]">{countryLabel}</span>
                </div>
                <time dateTime={now?.toISOString()} aria-label={`${clock.time}, ${clock.date}, ${university.city}`} className="mt-2 flex flex-wrap items-baseline gap-x-1.5 whitespace-nowrap font-bold tabular-nums">
                  <span data-clock-digits className="text-[32px] leading-[1.15] tracking-[-0.04em] sm:text-[44px] lg:text-[48px]">{digits}</span>
                  <span data-clock-period className="text-sm sm:text-base">{period || "—"}</span>
                </time>
                <p data-clock-zone className="mb-0 mt-1 min-h-5 text-[10px] leading-4 text-[#003870]/85 sm:min-h-0 sm:text-xs">{clock.offset ? `${clock.zone} · ${clock.offset}` : "Local time"}</p>
                <div className="mt-2 border-t border-[#003870]/20 pt-2">
                  <p className="m-0 text-xs leading-5 text-[#003870]/85 sm:text-sm">{university.city}</p>
                  <p data-clock-date className="mb-0 mt-1 text-[10px] text-[#003870]/70 sm:text-xs">{clock.date}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
const GROUPS = [
  {
    title: "Quick Links",
    links: [
      ["Home", "/"],
      ["About Us", "/about-us/"],
      ["FAQs", "/faqs/"],
      ["Contact Us", "/contact-us/"],
    ],
  },
  {
    title: "Student Services",
    links: [
      ["Study in India", "/study-in-india/"],
      ["Study Abroad", "/study-abroad/"],
      ["Student Services", "/contact-us/"],
      ["Loan & Scholarship Assistance", "/loan-and-scholarship-assistance/"],
      ["MBBS Abroad", "/mbbs-abroad/"],
    ],
  },
  {
    title: "Study Destinations",
    links: [
      ["Canada", "/study-in-canada/"],
      ["UK & Ireland", "/study-in-uk-ireland/"],
      ["Europe", "/study-in-europe/"],
      ["USA", "/study-in-usa/"],
    ],
  },
];

const POLICIES = [
  ["Privacy Policy", "/privacy-policy/"],
  ["Terms & Conditions", "/terms-conditions/"],
  ["Cancellation & Refund Policy", "/cancellation-refund-policy/"],
];

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003870]";

function Icon({ name, className = "h-5 w-5" }) {
  const paths = {
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>,
    arrow: <path d="M4 12h16m-7-7 7 7-7 7" />,
    plus: <path d="M12 5v14M5 12h14" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L9 10.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 1.1Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" /></>,
    facebook: <path d="M14 22v-9h3l.5-4H14V6.5c0-1 .3-1.5 1.7-1.5H18V1.4A25 25 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9Z" fill="currentColor" stroke="none" />,
    youtube: <><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" /></>,
    whatsapp: <><path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" /><path d="M8 7.5c-.8.9-.3 3.3 1.8 5.4s4.5 2.6 5.4 1.8l.9-1.1-2.4-1.2-.8.8a8 8 0 0 1-2.9-2.9l.8-.8L9.6 7Z" /></>,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}

function LinkList({ links, hrefFor }) {
  return (
    <ul className="m-0 list-none space-y-0.5 p-0">
      {links.map(([label, path]) => (
        <li key={label}>
          <a href={hrefFor(path)} className={`inline-flex min-h-[44px] items-center rounded-sm py-2 text-[15px] leading-6 text-[#003870]/80 underline-offset-4 hover:text-[#003870] hover:underline ${FOCUS}`}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Mobile-first Next.js / Tailwind footer. No extra icon or carousel packages.
 * Native details accordions work with touch, keyboard and JavaScript disabled.
 * Defaults point to the current website. Use siteUrl="" for local Next.js routes.
 */
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
  facebook: "https://www.facebook.com/YOUR_PAGE/",
  youtube: "https://www.youtube.com/@YOUR_CHANNEL",
},
  linkGroups = GROUPS,
  policyLinks = POLICIES,
  year = new Date().getFullYear(),
}) {
  const hrefFor = (path) => /^(https?:|mailto:|tel:|#)/i.test(path) ? path : `${siteUrl.replace(/\/$/, "")}${path}`;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent("Hi University Yatra, I would like guidance on my study options.")}`;
  const socials = [
    { name: "Instagram", icon: "instagram", href: socialLinks.instagram },
    { name: "Facebook", icon: "facebook", href: socialLinks.facebook },
    { name: "YouTube", icon: "youtube", href: socialLinks.youtube },
    { name: "WhatsApp", icon: "whatsapp", href: whatsappHref },
  ].filter((item) => item.href);

  return (
    <footer aria-label="University Yatra footer" className="overflow-hidden border-t border-[#2EBEB5]/20 bg-[#F3FAF9] text-[#003870]">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 sm:pt-10 lg:px-12">
        <div className="grid gap-7 border-b border-[#2EBEB5]/35 pb-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 lg:pb-6">
          <div className="min-w-0">
            <a href={hrefFor("/")} aria-label="University Yatra home" className={`inline-block max-w-full rounded-md ${FOCUS}`}>
              <Image src={logoSrc} alt="University Yatra — Making Global Education Easy" width={1024} height={246} sizes="(min-width: 768px) 380px, 280px" className="h-auto w-[280px] max-w-full object-contain object-left md:w-[380px]" />
            </a>
            <p className="mb-0 mt-4 max-w-[37ch] text-[15px] leading-7 text-[#003870]/75 sm:text-base">
              Guiding students towards global education with support at every step.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2EBEB5]/25 bg-[#2EBEB5]/[0.06] p-5 md:max-w-[340px] md:rounded-none md:border-0 md:bg-transparent md:p-0">
            <p className="m-0 text-[19px] font-semibold leading-7 tracking-[-0.02em] md:text-[18px]">Your next chapter starts here.</p>
            <a href={contactHref || hrefFor("/contact-us/")} className={`group mt-4 flex min-h-[52px] w-full items-center justify-center gap-4 rounded-xl bg-[#003870] px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#2EBEB5] hover:text-[#003870] motion-reduce:transition-none md:rounded-lg ${FOCUS}`}>
              Speak with our team
              <Icon name="arrow" className="h-5 w-5 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 py-7 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-6 lg:grid-cols-[1fr_1.2fr_1.1fr_1.3fr] lg:gap-10">
          {linkGroups.map((group) => (
            <div key={group.title} className="min-w-0">
              {/* Only the mobile or desktop version is visible at a time. */}
              <details className="group border-b border-[#2EBEB5]/25 md:hidden">
                <summary className={`flex min-h-[58px] cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-base font-semibold [&::-webkit-details-marker]:hidden ${FOCUS}`}>
                  {group.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2EBEB5]/10">
                    <Icon name="plus" className="h-4 w-4 group-open:rotate-45 motion-safe:transition-transform" />
                  </span>
                </summary>
                <nav aria-label={group.title} className="pb-4 pl-1"><LinkList links={group.links} hrefFor={hrefFor} /></nav>
              </details>
              <nav aria-label={group.title} className="hidden md:block">
                <h2 className="mb-3 mt-0 text-[18px] font-bold leading-7 tracking-[-0.02em]">{group.title}</h2>
                <LinkList links={group.links} hrefFor={hrefFor} />
              </nav>
            </div>
          ))}

          <div className="order-first min-w-0 pb-7 md:order-last md:pb-0">
            <h2 className="mb-3 mt-0 text-[18px] font-bold leading-7 tracking-[-0.02em]">Connect With Us</h2>
            <address className="not-italic">
              <a href={`mailto:${email}`} className={`flex min-h-[48px] items-center gap-3 rounded-lg text-[14px] leading-6 text-[#003870]/80 hover:underline sm:text-[15px] ${FOCUS}`}>
                <Icon name="mail" className="h-5 w-5 shrink-0" />
                <span className="min-w-0 break-words [overflow-wrap:anywhere]">{email}</span>
              </a>
              {/* <a href={phoneHref} className={`flex min-h-[44px] items-center gap-3 rounded-lg text-[15px] text-[#003870]/80 hover:underline ${FOCUS}`}>
                <Icon name="phone" className="h-[18px] w-[18px] shrink-0" />{phone}
              </a> */}
            </address>

            <div className="mt-3 grid grid-cols- gap-3 md:hidden">
              {/* <a href={phoneHref} className={`flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#003870]/20 bg-white px-3 py-3 text-sm font-semibold ${FOCUS}`}>
                <Icon name="phone" className="h-4 w-4" />Call us
              </a> */}
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp (opens a new tab)" className={`flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#2EBEB5] px-3 py-3 text-sm font-semibold ${FOCUS}`}>
                <Icon name="whatsapp" className="h-5 w-5" />WhatsApp
              </a>
            </div>

            <nav aria-label="Social media" className={`mt-5 flex-wrap gap-3 ${socials.length === 1 ? "hidden md:flex" : "flex"}`}>
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (opens a new tab)`} className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#2EBEB5]/20 bg-white text-[#003870] transition-colors hover:border-[#003870] hover:bg-[#003870] hover:text-white motion-reduce:transition-none ${FOCUS}`}>
                  <Icon name={social.icon} className="h-[22px] w-[22px]" />
                </a>
              ))}
            </nav>
          </div>
        </div>

      </div>

      <div className="mx-auto max-w-[1344px] border-t border-[#2EBEB5]/40" />
      <UniversityClocks skylineSrc={skylineSrc} />
      <div className="border-t border-[#2EBEB5]/25 bg-white/40">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12">
          <p className="order-last m-0 max-w-[47ch] text-[12px] leading-6 text-[#003870]/75 sm:text-[13px] lg:order-first">
            © {year} University Yatra™. <span className="block sm:inline">A unit of Future Yatra PVT. LTD.</span>
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-0 lg:justify-end">
            {policyLinks.map(([label, path]) => (
              <a key={label} href={hrefFor(path)} className={`inline-flex min-h-[44px] items-center rounded-sm py-2 text-[12px] leading-5 text-[#003870]/85 underline-offset-4 hover:underline sm:text-[13px] ${FOCUS}`}>{label}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

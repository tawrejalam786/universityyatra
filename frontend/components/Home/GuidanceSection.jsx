import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    id: "counselling",
    number: "01",
    title: "Personalized Counselling",
    description: "Choose a course and country with clarity.",
    image: "/images/guidance/counselling.png",
    theme: "navy",
  },
  {
    id: "application",
    number: "02",
    title: "Application Assistance",
    description: "Help with forms, documents and submissions.",
    image: "/images/guidance/application.png",
    theme: "teal",
  },
  {
    id: "scholarship",
    number: "03",
    title: "Scholarship & Financial Guidance",
    description: "Understand your scholarships and funding options.",
    image: "/images/guidance/scholarship.png",
    theme: "teal",
  },
  {
    id: "departure",
    number: "04",
    title: "Pre-Departure Support",
    description: "Get ready for travel and life abroad.",
    image: "/images/guidance/departure.png",
    theme: "navy",
  },
];

// Keep complete class names here so Tailwind can detect both themes.
const THEMES = {
  navy: {
    card: "bg-[#003870] text-white",
    description: "text-white/85",
    badge: "border-white/20 text-white/70",
    arrow: "border-white/25 group-hover:bg-white group-hover:text-[#003870] group-focus-visible:bg-white group-focus-visible:text-[#003870]",
  },
  teal: {
    card: "bg-[#2EBEB5] text-[#003870]",
    description: "text-[#003870]",
    badge: "border-[#003870]/20 text-[#003870]/75",
    arrow: "border-[#003870]/25 group-hover:bg-[#003870] group-hover:text-white group-focus-visible:bg-[#003870] group-focus-visible:text-white",
  },
};

function ArrowRight({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

/**
 * Drop-in Next.js section. All layout and motion use Tailwind utilities.
 * Change primaryHref/loginHref to your existing website routes.
 * serviceHrefs may optionally point each card to its own page.
 * Set showLogin={false} to hide the secondary Login button.
 */
export default function GuidanceSection({
  id = "guidance",
  primaryHref = "/contact",
  loginHref = "/login",
  showLogin = true,
  serviceHrefs = {},
  className = "",
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative isolate overflow-hidden bg-white px-4 py-14 text-[#003870] sm:px-6 sm:py-20 lg:px-10 lg:py-12 ${className}`}
    >
      {/* Brand washes: only navy/teal with white and transparent tints. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_50%,rgba(0,56,112,0.045),transparent_60%),radial-gradient(ellipse_at_100%_100%,rgba(46,190,181,0.065),transparent_60%)]"
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-9 md:gap-12 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,2fr)] xl:gap-10 2xl:gap-14">
        <div className="max-w-[640px] xl:max-w-none">
          <p className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] sm:text-xs">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#2EBEB5]" />
            Your goal. Our guidance.
          </p>

          <h2
            id={`${id}-heading`}
            className="max-w-[19ch] text-[36px] font-bold leading-[1.12] tracking-[-0.045em] sm:text-[46px] xl:max-w-[13ch] xl:text-[46px] 2xl:text-[52px]"
          >
            Your journey starts with the right guidance.
          </h2>

          <p className="mt-5 max-w-[36ch] text-[16px] leading-[1.75] text-[#003870]/80 sm:mt-6 sm:text-[18px] xl:max-w-[29ch]">
            From choosing a course to preparing for departure, get support at every step.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <Link
              href={primaryHref}
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-[#2EBEB5] px-5 py-3.5 text-[13px] font-bold leading-5 text-[#003870] shadow-[0_8px_24px_rgba(46,190,181,0.18)] transition-colors duration-300 hover:bg-[#003870] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003870] motion-reduce:transition-none sm:w-auto sm:text-sm xl:w-full"
            >
              <span>Plan my study abroad journey</span>
              <ArrowRight className="h-5 w-5 shrink-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1" />
            </Link>

            {showLogin && (
              <Link
                href={loginHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-[#003870] px-7 py-3 text-sm font-semibold text-[#003870] transition-colors duration-300 hover:bg-[#003870] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003870] motion-reduce:transition-none"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        <ul className="m-0 grid min-w-0 list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 md:gap-5" aria-label="Study abroad guidance services">
          {SERVICES.map((service) => {
            const theme = THEMES[service.theme];

            return (
              <li key={service.id} className="min-w-0">
                <Link
                  href={serviceHrefs[service.id] || primaryHref}
                  aria-label={`Get help with ${service.title.toLowerCase()}`}
                  className={`group relative grid h-full min-h-[238px] grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center gap-1 overflow-hidden rounded-[24px] p-5 shadow-[0_12px_30px_-16px_rgba(0,56,112,0.35)] transition-shadow duration-300 hover:shadow-[0_20px_36px_-18px_rgba(0,56,112,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003870] motion-safe:transition-[transform,box-shadow] motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:min-h-[268px] sm:p-7 md:p-6 2xl:min-h-[292px] 2xl:p-8 ${theme.card}`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(255,255,255,0.18),transparent_70%)]"
                  />

                  <div className="relative z-10 flex h-full min-w-0 flex-col items-start">
                    <span className={`mb-4 inline-flex h-6 min-w-8 items-center justify-center rounded-full border px-2 text-[10px] font-semibold tracking-wider ${theme.badge}`}>
                      <span className="sr-only">Step </span>{service.number}
                    </span>

                    <h3 className="text-[19px] font-bold leading-[1.18] tracking-[-0.035em] sm:text-[24px] md:text-[21px] lg:text-[24px] xl:text-[22px] 2xl:text-[25px]">
                      {service.title}
                    </h3>

                    <p className={`mb-5 mt-3 max-w-[23ch] text-[13px] leading-[1.6] sm:text-[15px] md:text-[14px] 2xl:text-[16px] ${theme.description}`}>
                      {service.description}
                    </p>

                    <span aria-hidden="true" className={`mt-auto inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 motion-reduce:transition-none ${theme.arrow}`}>
                      <ArrowRight className="h-5 w-5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <div aria-hidden="true" className="pointer-events-none relative z-0 flex min-w-0 items-center justify-center self-center">
                    <Image
                      src={service.image}
                      alt=""
                      width={1254}
                      height={1254}
                      sizes="(min-width: 1536px) 210px, (min-width: 1280px) 180px, (min-width: 1024px) 210px, (min-width: 768px) 160px, (min-width: 640px) 270px, 45vw"
                      className="h-auto w-full select-none drop-shadow-[0_12px_10px_rgba(0,56,112,0.20)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:rotate-3 motion-safe:group-hover:scale-105"
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

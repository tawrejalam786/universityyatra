
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  Ban,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  CreditCard,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

const SECTIONS = [
  {
    id: "no-cancellation",
    title: "No Cancellation",
    paragraphs: [
      "All purchases made on University Yatra are final. Once a course or program has been purchased and payment has been successfully processed, the order cannot be cancelled under any circumstances.",
    ],
  },
  {
    id: "no-refund",
    title: "No Refund Policy",
    paragraphs: [
      "Due to the digital nature of our educational courses and training programs, we maintain a strict no-refund policy.",
      "Once payment is completed and access to the course or program is granted, no refunds, partial refunds, or credits will be issued.",
    ],
  },
  {
    id: "course-access",
    title: "Course Access",
    paragraphs: [
      "After successful payment, users will receive access to the purchased course or program through the University Yatra platform. It is the responsibility of the user to review all course details, eligibility requirements, and program information before completing the purchase.",
    ],
  },
  {
    id: "technical-issues",
    title: "Technical Issues",
    paragraphs: [
      "If you experience any technical issues accessing course content, you may contact our support team. We will make reasonable efforts to resolve the issue.",
      "Please note that technical support does not qualify for cancellation or refund.",
    ],
  },
  {
    id: "user-responsibility",
    title: "User Responsibility",
    intro: "By purchasing a course from University Yatra, you confirm that:",
    bullets: [
      "You have read the course description carefully.",
      "You understand the course format and requirements.",
      "You agree to this No Refund and No Cancellation Policy.",
    ],
  },
  {
    id: "policy-acceptance",
    title: "Policy Acceptance",
    paragraphs: [
      "By completing a purchase on University Yatra, you acknowledge that you have read, understood, and agreed to this Cancellation and Refund Policy.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    intro: "If you have any questions regarding this policy, please contact us:",
    contact: true,
  },
];

function PolicyNavigation({ activeSection, onNavigate }) {
  return (
    <nav aria-label="Cancellation and Refund Policy sections" className="space-y-0.5">
      {SECTIONS.map((section, index) => {
        const active = activeSection === section.id;

        return (
          <a key={section.id} href={`#${section.id}`} onClick={() => onNavigate(section.id)} aria-current={active ? "location" : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[12px] leading-snug transition-colors ${active ? "bg-[#E8F0FE] font-semibold text-[#1765F5]" : "text-[#52627A] hover:bg-[#F5F8FE] hover:text-[#0C337B]"}`}>
            <span className={`w-6 shrink-0 text-[11px] font-bold tabular-nums ${active ? "text-[#1765F5]" : "text-[#98A5B8]"}`}>{String(index + 1).padStart(2, "0")}</span>
            <span className="flex-1">{section.title}</span>
            {active && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1765F5]" />}
          </a>
        );
      })}
    </nav>
  );
}

function PolicySection({ section, index }) {
  const isRestriction = index === 0 || index === 1;

  return (
    <section id={section.id} className="scroll-mt-28 border-b border-[#E6EBF3] py-7 first:pt-0 last:border-b-0 sm:py-8">
      <div className="mb-3 flex items-start gap-3">
        <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[12px] font-extrabold ${isRestriction ? "bg-[#FEF2F2] text-[#B91C1C]" : "bg-[#E8F0FE] text-[#1765F5]"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="pt-1 text-[17px] font-bold leading-[1.4] tracking-[-0.02em] text-[#0C337B] sm:text-[19px]">{section.title}</h2>
      </div>

      <div className="sm:pl-11">
        {section.intro && <p className="mb-3 text-[13px] leading-[1.9] text-[#52627A] sm:text-[14px]">{section.intro}</p>}

        {section.paragraphs?.map((paragraph, i) => (
          <p key={i} className="mb-3 text-[13px] leading-[1.9] text-[#52627A] last:mb-0 sm:text-[14px]">{paragraph}</p>
        ))}

        {section.bullets && (
          <ul className="mt-4 space-y-3">
            {section.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] leading-[1.8] text-[#52627A] sm:text-[14px]">
                <span className="mt-1.5 grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#F0FDF4] text-[#15803D]">
                  <Check size={11} strokeWidth={2.5} />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {section.contact && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href="https://universityyatra.com" target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-3 rounded-xl border border-[#E1EAF9] bg-[#F8FAFF] p-4 transition-colors hover:border-[#A2C1FB]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#E8F0FE] text-[#1765F5]"><Globe2 size={19} /></span>
              <span className="min-w-0">
                <span className="block text-[11px] text-[#7B8BA4]">Website</span>
                <span className="block break-all text-[12px] font-semibold text-[#0C337B]">universityyatra.com</span>
              </span>
            </a>

            <a href="mailto:support@universityyatra.com" className="flex min-w-0 items-center gap-3 rounded-xl border border-[#E1EAF9] bg-[#F8FAFF] p-4 transition-colors hover:border-[#A2C1FB]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#E8F0FE] text-[#1765F5]"><Mail size={19} /></span>
              <span className="min-w-0">
                <span className="block text-[11px] text-[#7B8BA4]">Email</span>
                <span className="block break-all text-[12px] font-semibold text-[#0C337B]">support@universityyatra.com</span>
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default function CancellationRefundPolicy() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const current = [...SECTIONS].reverse().find((section) => {
        const element = document.getElementById(section.id);
        return element && element.getBoundingClientRect().top <= 170;
      });

      setActiveSection(current?.id || SECTIONS[0].id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (id) => {
    setActiveSection(id);
    setMobileNavOpen(false);
  };

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-white">

      {/* HERO */}
      <section className="border-b border-[#E6EBF3] bg-[#F8FAFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8 lg:pb-14 lg:pt-14">

          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-[12px]">
            <Link href="/" className="text-[#64748B] hover:text-[#1765F5]">Home</Link>
            <ArrowRight size={12} className="text-[#9AA9BC]" />
            <span className="font-semibold text-[#1765F5]">Cancellation & Refund Policy</span>
          </nav>

          <div className="max-w-[780px]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D8E6FC] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1765F5]">
              <CreditCard size={14} />
              Payment & Purchase Policy
            </span>

            <h1 className="text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#0C337B] sm:text-[42px] lg:text-[48px]">
              Cancellation <span className="text-[#1765F5]">& Refund</span> Policy
            </h1>

            <p className="mt-4 max-w-[660px] text-[13px] leading-[1.9] text-[#52627A] sm:text-[15px]">
              Thank you for choosing University Yatra for your learning journey. Please read this Cancellation and Refund Policy carefully before purchasing any course or educational program from our platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-[#DCE7FC] bg-white px-3 py-2 text-[12px] font-medium text-[#415574]">
                <CalendarDays size={15} className="text-[#1765F5]" />
                Last Updated: December 10, 2025
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-[#DCFCE7] bg-[#F0FDF4] px-3 py-2 text-[12px] font-medium text-[#15803D]">
                <ShieldCheck size={15} />
                7 Policy Sections
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto grid w-full max-w-[1280px] items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-14">

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-[#E6EBF3] bg-white p-3">
            <div className="mb-3 flex items-center gap-2 border-b border-[#E6EBF3] px-3 pb-3 pt-1">
              <FileText size={17} className="text-[#1765F5]" />
              <h2 className="text-[13px] font-bold text-[#0C337B]">On this page</h2>
            </div>
            <PolicyNavigation activeSection={activeSection} onNavigate={navigateTo} />
          </div>
        </aside>

        {/* POLICY CONTENT */}
        <div className="min-w-0">

          {/* MOBILE NAVIGATION */}
          <div className="mb-7 overflow-hidden rounded-xl border border-[#DCE7FC] lg:hidden">
            <button type="button" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-expanded={mobileNavOpen} aria-controls="mobile-refund-navigation" className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left">
              <span className="flex items-center gap-2 text-[13px] font-semibold text-[#0C337B]">
                <FileText size={17} className="text-[#1765F5]" />
                Jump to a section
              </span>
              <ChevronDown size={18} className={`shrink-0 text-[#1765F5] transition-transform ${mobileNavOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileNavOpen && (
              <div id="mobile-refund-navigation" className="max-h-[320px] overflow-y-auto border-t border-[#E6EBF3] p-2">
                <PolicyNavigation activeSection={activeSection} onNavigate={navigateTo} />
              </div>
            )}
          </div>

          {/* IMPORTANT POLICY SUMMARY */}
          <div className="mb-8 rounded-xl border-l-[3px] border-[#B45309] bg-[#FFFBEB] px-4 py-5 sm:px-6">
            <div className="mb-2 flex items-center gap-2">
              <CircleHelp size={17} className="text-[#B45309]" />
              <h2 className="text-[14px] font-bold text-[#92400E]">Important Information</h2>
            </div>
            <p className="text-[13px] leading-[1.9] text-[#625341] sm:text-[14px]">
              All purchases on University Yatra are final. Please review course details, eligibility requirements, and program information carefully before making a payment.
            </p>
          </div>

          {/* KEY POLICY HIGHLIGHTS */}
          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-4 sm:p-5">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-white text-[#B91C1C]">
                <Ban size={21} />
              </div>
              <h3 className="text-[15px] font-bold text-[#991B1B]">No Cancellation</h3>
              <p className="mt-1.5 text-[12px] leading-[1.8] text-[#7F4444] sm:text-[13px]">
                Once payment is successfully processed, the purchase cannot be cancelled.
              </p>
            </div>

            <div className="rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-4 sm:p-5">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-white text-[#B45309]">
                <LockKeyhole size={21} />
              </div>
              <h3 className="text-[15px] font-bold text-[#92400E]">No Refund</h3>
              <p className="mt-1.5 text-[12px] leading-[1.8] text-[#786044] sm:text-[13px]">
                Once payment and course access are completed, no refunds, partial refunds, or credits will be issued.
              </p>
            </div>
          </div>

          {/* ALL 7 SECTIONS */}
          {SECTIONS.map((section, index) => (
            <PolicySection key={section.id} section={section} index={index} />
          ))}

          {/* SUPPORT CTA */}
          <div className="mt-8 rounded-xl border border-[#DCE7FC] bg-[#F8FAFF] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} className="shrink-0 text-[#15803D]" />
              <div>
                <h3 className="text-[15px] font-bold text-[#0C337B]">Need assistance accessing your course?</h3>
                <p className="mt-1.5 text-[13px] leading-[1.8] text-[#52627A]">
                  If you are experiencing technical difficulties accessing your purchased course or program, our support team can assist you.
                </p>
                <a href="mailto:support@universityyatra.com" className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold text-[#1765F5] hover:text-[#1047AC]">
                  Contact Support <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-[#1765F5] text-white shadow-lg transition-colors hover:bg-[#1047AC] sm:bottom-8 sm:right-8">
          <ArrowUp size={19} />
        </button>
      )}
    </main>
  );
}

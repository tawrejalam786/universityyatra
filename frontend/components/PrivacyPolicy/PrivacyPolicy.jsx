
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  CalendarDays,
  Check,
  ChevronDown,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

const POLICY = [
  {
    id: "definitions",
    title: "Definitions",
    bullets: [
      {
        label: "Personal Information",
        text: "Data that identifies or can be used to identify an individual (for example: name, email address, phone number, postal address).",
      },
      {
        label: "Non-Personal Information",
        text: "Aggregate or anonymous data that does not identify a specific individual (for example: browser type, device model, usage statistics).",
      },
      {
        label: "Service Providers",
        text: "Third-party companies or individuals that provide services on our behalf (for example: hosting, analytics, payment processors).",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    subsections: [
      {
        title: "2.1 Information You Provide",
        intro: "When you interact with forms, contact support, register for services, or communicate with us, we may collect Personal Information such as:",
        bullets: [
          "Full name",
          "Email address",
          "Phone number",
          "Date of birth (where required)",
          "Academic history and documents you submit (transcripts, passports, identity documents)",
          "Payment and billing information (where applicable – note we may use third-party payment processors)",
          "Any other information you choose to provide",
        ],
      },
      {
        title: "2.2 Information Collected Automatically",
        intro: "When you visit the Website, we automatically collect certain Non-Personal Information through cookies and similar technologies, including:",
        bullets: [
          "IP address",
          "Browser type and version",
          "Device type and operating system",
          "Referring website and pages visited",
          "Time and date of access",
          "Usage and performance data",
        ],
      },
      {
        title: "2.3 Cookies and Tracking",
        paragraphs: [
          "We use cookies and similar technologies to remember preferences, analyze usage, and serve relevant information. You may control cookies through your browser settings or use built-in mechanisms to opt out of certain analytics cookies. Disabling cookies may affect functionality on the Website.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    intro: "We use Personal and Non-Personal Information for purposes including, but not limited to:",
    bullets: [
      "Providing and operating the Website and our services",
      "Responding to your inquiries and customer support",
      "Processing applications, registrations, and payments",
      "Assessing eligibility and offering personalized program recommendations",
      "Sending transactional communications, service notices, and updates",
      "Marketing communications, where you have consented or as permitted by law",
      "Improving and personalizing the Website, content, and user experience",
      "Fraud detection, security, and legal compliance",
    ],
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing (where applicable)",
    intro: "When applicable under privacy laws, we process your data on one or more of the following bases:",
    bullets: [
      "Consent, when you opt-in to receive communications",
      "Performance of a contract (e.g., to deliver services you requested)",
      "Legal obligation (e.g., to comply with government or regulatory requirements)",
      "Legitimate interests (e.g., to improve the Website, prevent fraud, or pursue collection)",
    ],
  },
  {
    id: "sharing-and-disclosure",
    title: "Sharing and Disclosure of Information",
    intro: "We may share Personal Information with:",
    bullets: [
      {
        label: "Service Providers",
        text: "Hosting providers, analytics, email delivery systems, payment processors, and other vendors who help deliver services.",
      },
      {
        label: "Academic Partners",
        text: "Universities or educational institutions you apply to, if you request us to share application materials or give consent for submission.",
      },
      {
        label: "Legal Requests",
        text: "Where required by law, subpoena, court order, or government request.",
      },
      {
        label: "Business Transfers",
        text: "In connection with any merger, acquisition, sale of assets, or financing.",
      },
    ],
    paragraphs: [
      "We require service providers to use Personal Information only for the purposes we authorize and to maintain appropriate security measures.",
    ],
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    paragraphs: [
      "Your information may be stored and processed in India or in other countries where our service providers are located. Laws and protections may differ between jurisdictions. By using the Website, you consent to transfer of information to countries outside your home country.",
    ],
  },
  {
    id: "retention-of-data",
    title: "Retention of Data",
    paragraphs: [
      "We retain Personal Information as long as necessary to provide the services, fulfill legal obligations, resolve disputes, and enforce agreements. Specific retention periods vary by data type and purpose; where possible we apply reasonable limits and periodically delete or anonymize information no longer required.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    intro: "Depending on your jurisdiction, you may have rights including:",
    bullets: [
      "Access to the Personal Information we hold about you",
      "Correction of inaccurate or incomplete information",
      "Deletion or restriction of processing in certain circumstances",
      "Objection to certain processing activities",
      "Portability of your data (where applicable)",
      "The right to withdraw consent where processing is based on consent",
    ],
    paragraphs: [
      "To exercise these rights or to request data access, correction, or deletion, contact us at support@universityyatra.com. We may require identity verification before responding to requests. We will respond within the timeframes required by applicable law.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We implement reasonable technical and organizational measures intended to protect Personal Information from unauthorized access, disclosure, alteration, or destruction. However, no internet-based service can be 100% secure. We encourage you to take steps to protect your data (for example, by keeping credentials confidential).",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children’s Privacy",
    paragraphs: [
      "The Website is not directed at children under the age of 13 (or the applicable minimum age in your jurisdiction). We do not knowingly collect Personal Information from children. If you believe we have collected information from a child, please contact us and we will take steps to delete the information.",
    ],
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites and Links",
    paragraphs: [
      "The Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    id: "marketing-communications",
    title: "Marketing Communications",
    paragraphs: [
      "If you opt in to receive marketing communications, we may send information about programs, events, offers, or news. You can unsubscribe from marketing emails using the unsubscribe link in the message or by contacting us at support@universityyatra.com. Even if you unsubscribe, we may still send transactional or service-related communications.",
    ],
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We will post the revised Policy on this page with an updated Effective Date. Your continued use of the Website after such changes constitutes acceptance of the updated Policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    intro: "If you have questions, concerns or requests related to this Privacy Policy, please contact us:",
    contact: true,
  },
  {
    id: "legal-disclaimer",
    title: "Legal Disclaimer",
    paragraphs: [
      "This Policy describes our practices and does not create any contractual or legal rights for users. For legal advice about privacy compliance, please consult a qualified lawyer.",
    ],
  },
];

function PolicyNavigation({ activeSection, onNavigate }) {
  return (
    <nav aria-label="Privacy Policy sections" className="space-y-0.5">
      {POLICY.map((item, index) => {
        const active = activeSection === item.id;

        return (
          <a key={item.id} href={`#${item.id}`} onClick={() => onNavigate(item.id)} aria-current={active ? "location" : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] leading-snug transition-colors ${active ? "bg-[#E8F0FE] font-semibold text-[#1765F5]" : "text-[#52627A] hover:bg-[#F5F8FE] hover:text-[#0C337B]"}`}>
            <span className={`w-6 shrink-0 text-[11px] font-bold tabular-nums ${active ? "text-[#1765F5]" : "text-[#98A5B8]"}`}>{String(index + 1).padStart(2, "0")}</span>
            <span className="flex-1">{item.title}</span>
            {active && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1765F5]" />}
          </a>
        );
      })}
    </nav>
  );
}

function PolicyBullets({ items }) {
  return (
    <ul className="my-4 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-[13px] leading-[1.8] text-[#52627A] sm:text-[14px]">
          <span className="mt-1.5 grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#F0FDF4] text-[#15803D]">
            <Check size={11} strokeWidth={2.5} />
          </span>
          <span>
            {typeof item === "string" ? item : (
              <>
                <strong className="font-semibold text-[#0C337B]">{item.label}:</strong>{" "}
                {item.text}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PolicyText({ data }) {
  return (
    <>
      {data.intro && <p className="mb-3 text-[13px] leading-[1.9] text-[#52627A] sm:text-[14px]">{data.intro}</p>}

      {data.bullets && <PolicyBullets items={data.bullets} />}

      {data.paragraphs?.map((paragraph, index) => (
        <p key={index} className="mb-3 text-[13px] leading-[1.9] text-[#52627A] last:mb-0 sm:text-[14px]">{paragraph}</p>
      ))}
    </>
  );
}

function PolicySection({ item, index }) {
  return (
    <section id={item.id} className="scroll-mt-28 border-b border-[#E6EBF3] py-7 first:pt-0 last:border-b-0 sm:py-8">
      <div className="mb-3 flex items-start gap-3">
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#E8F0FE] text-[12px] font-extrabold text-[#1765F5]">{String(index + 1).padStart(2, "0")}</span>
        <h2 className="pt-1 text-[17px] font-bold leading-[1.4] tracking-[-0.02em] text-[#0C337B] sm:text-[19px]">{item.title}</h2>
      </div>

      <div className="sm:pl-11">
        <PolicyText data={item} />

        {item.subsections?.map((subsection, subIndex) => (
          <div key={subIndex} className="mt-6 first:mt-0">
            <h3 className="mb-3 text-[14px] font-bold text-[#0C337B] sm:text-[16px]">{subsection.title}</h3>
            <PolicyText data={subsection} />
          </div>
        ))}

        {item.contact && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href="mailto:support@universityyatra.com" className="flex min-w-0 items-center gap-3 rounded-xl border border-[#E1EAF9] bg-[#F8FAFF] p-4 transition-colors hover:border-[#A2C1FB]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#E8F0FE] text-[#1765F5]"><Mail size={19} /></span>
              <span className="min-w-0">
                <span className="block text-[11px] text-[#7B8BA4]">Email</span>
                <span className="block break-all text-[12px] font-semibold text-[#0C337B]">support@universityyatra.com</span>
              </span>
            </a>

            <a href="https://universityyatra.com" target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-3 rounded-xl border border-[#E1EAF9] bg-[#F8FAFF] p-4 transition-colors hover:border-[#A2C1FB]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#E8F0FE] text-[#1765F5]"><Globe2 size={19} /></span>
              <span className="min-w-0">
                <span className="block text-[11px] text-[#7B8BA4]">Website</span>
                <span className="block break-all text-[12px] font-semibold text-[#0C337B]">universityyatra.com</span>
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(POLICY[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const current = [...POLICY].reverse().find((item) => {
        const element = document.getElementById(item.id);
        return element && element.getBoundingClientRect().top <= 170;
      });

      setActiveSection(current?.id || POLICY[0].id);
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

          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-[12px]">
            <Link href="/" className="text-[#64748B] hover:text-[#1765F5]">Home</Link>
            <ArrowRight size={12} className="text-[#9AA9BC]" />
            <span className="font-semibold text-[#1765F5]">Privacy Policy</span>
          </nav>

          <div className="max-w-[760px]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D8E6FC] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1765F5]">
              <LockKeyhole size={14} />
              Your Privacy Matters
            </span>

            <h1 className="text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#0C337B] sm:text-[42px] lg:text-[48px]">
              Privacy <span className="text-[#1765F5]">Policy</span>
            </h1>

            <p className="mt-4 max-w-[660px] text-[13px] leading-[1.9] text-[#52627A] sm:text-[15px]">
              Understand how University Yatra collects, uses, shares, and protects your personal information when you use our website and services.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-[#DCE7FC] bg-white px-3 py-2 text-[12px] font-medium text-[#415574]">
                <CalendarDays size={15} className="text-[#1765F5]" />
                Effective: December 10, 2025
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-[#DCFCE7] bg-[#F0FDF4] px-3 py-2 text-[12px] font-medium text-[#15803D]">
                <ShieldCheck size={15} />
                15 Policy Sections
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto grid w-full max-w-[1280px] items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-14">

        {/* DESKTOP NAVIGATION */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-[#E6EBF3] bg-white p-3">
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
            <button type="button" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-expanded={mobileNavOpen} aria-controls="mobile-privacy-navigation" className="flex w-full items-center justify-between px-4 py-3.5 text-left">
              <span className="flex items-center gap-2 text-[13px] font-semibold text-[#0C337B]">
                <FileText size={17} className="text-[#1765F5]" />
                Jump to a section
              </span>
              <ChevronDown size={18} className={`text-[#1765F5] transition-transform ${mobileNavOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileNavOpen && (
              <div id="mobile-privacy-navigation" className="max-h-[320px] overflow-y-auto border-t border-[#E6EBF3] p-2">
                <PolicyNavigation activeSection={activeSection} onNavigate={navigateTo} />
              </div>
            )}
          </div>

          {/* INTRODUCTION */}
          <div className="mb-8 rounded-xl border-l-[3px] border-[#B45309] bg-[#FFFBEB] px-4 py-5 sm:px-6">
            <p className="text-[13px] leading-[1.9] text-[#625341] sm:text-[14px]">
              This Privacy Policy explains how <strong>universityyatra.com</strong> (“we”, “us”, or “our”) collects, uses, discloses, and protects personal information about users (“you” or “user”) of the website located at <strong>universityyatra.com</strong> (the “Website”). By using the Website or providing information to us, you consent to the collection and use of information in accordance with this Policy.
            </p>
          </div>

          {/* ALL 15 SECTIONS */}
          {POLICY.map((item, index) => (
            <PolicySection key={item.id} item={item} index={index} />
          ))}

          {/* CONTACT CTA */}
          <div className="mt-8 rounded-xl border border-[#DCE7FC] bg-[#F8FAFF] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} className="shrink-0 text-[#15803D]" />
              <div>
                <h3 className="text-[15px] font-bold text-[#0C337B]">Have a privacy-related question?</h3>
                <p className="mt-1.5 text-[13px] leading-[1.8] text-[#52627A]">
                  For questions about your personal information or requests regarding your data, please contact our team.
                </p>
                <a href="mailto:support@universityyatra.com" className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold text-[#1765F5] hover:text-[#1047AC]">
                  Contact our team <ArrowRight size={15} />
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

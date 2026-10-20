
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
  Mail,
  Scale,
  ShieldCheck,
} from "lucide-react";

const TERMS = [
  {
    id: "about-us",
    title: "About Us",
    paragraphs: [
      "The Website is operated by the entity running universityyatra.com (“we”, “us”, “our”). We provide information, counselling, and assistance related to overseas education and related services. Specific services, fees, and terms may be further described in separate agreements between you and us.",
    ],
  },
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    paragraphs: [
      "By using the Website or our services you confirm that you are legally capable of entering into binding contracts and that you are at least the minimum age required in your jurisdiction to use the Website and accept these Terms.",
    ],
  },
  {
    id: "services-and-service-agreements",
    title: "Services and Service Agreements",
    paragraphs: [
      "We provide educational counselling, application assistance, visa guidance, scholarship information, pre-departure support, and other related services. Any scope, timelines, fees, and deliverables shall be set out in separate written communications or service agreements. Those separate agreements (if any) form part of these Terms.",
    ],
  },
  {
    id: "user-obligations",
    title: "User Obligations",
    bullets: [
      "You agree to provide accurate, current, and complete information when registering, applying, or interacting with the Website or our services.",
      "You must not impersonate others, provide false information, or submit forged documents.",
      "You are responsible for maintaining the confidentiality of any account credentials and for all activities under your account.",
    ],
  },
  {
    id: "fees-payments-and-refunds",
    title: "Fees, Payments, and Refunds",
    paragraphs: [
      "Fees for our services will be communicated in writing. Payment terms and refund policies are governed by the specific agreement you enter into with us. Unless otherwise stated, fees paid for administrative or processing services may be non-refundable, particularly once services (such as application submission, document verification, or government filing) have been performed. Refunds, if any, will be processed according to the payment method used and applicable laws.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services and Institutions",
    paragraphs: [
      "We may act as an intermediary between you and universities, testing agencies, visa authorities, payment processors, or other third parties. We do not guarantee the decisions, policies, or conduct of third parties. Acceptance of admission, visa approval, scholarships, or employment depends on those third parties and is outside our direct control.",
    ],
  },
  {
    id: "accuracy-of-information",
    title: "Accuracy of Information",
    paragraphs: [
      "We strive to provide accurate, up-to-date information. However, information on the Website (including program details, eligibility criteria, fees, and visa rules) may change frequently. We do not warrant the completeness, accuracy, or timeliness of the information. You should independently verify critical details directly with the relevant institution or authority prior to making decisions.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "All content on the Website (text, graphics, logos, images, videos, and other materials) is the property of universityyatra.com or its licensors, and is protected by copyright, trademark, and other intellectual property laws. You may view and download content for personal, non-commercial use only. Reproduction, modification, distribution, or republication of Website content without prior written permission is prohibited.",
    ],
  },
  {
    id: "prohibited-conduct",
    title: "Prohibited Conduct",
    intro: "When using the Website or services, you must not:",
    bullets: [
      "Use the Website for unlawful or fraudulent purposes;",
      "Upload viruses, malware, or harmful code;",
      "Interfere with or disrupt the Website or servers;",
      "Attempt to gain unauthorized access to accounts or systems;",
      "Collect or harvest personal information of other users without consent;",
      "Use the services in a manner that violates applicable laws or third-party rights.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    paragraphs: [
      "Use of Personal Information is governed by our Privacy Policy available at universityyatra.com. By using the Website, you agree that we may collect and use information as described in the Privacy Policy.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers and No Warranty",
    paragraphs: [
      "The Website and services are provided “as is” and “as available” without warranties of any kind, express or implied. To the fullest extent permitted by law, we disclaim all warranties, including merchantability, fitness for a particular purpose, title, and non-infringement.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, neither we nor our officers, employees, agents, or affiliates shall be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages, or for loss of profits, revenue, data, or business opportunities arising from or related to your use of the Website or services. Our aggregate liability for direct damages will be limited to amounts actually paid by you to us for the specific service giving rise to the claim in the 12 months preceding the event.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    paragraphs: [
      "You agree to indemnify, defend and hold harmless universityyatra.com and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with your breach of these Terms, your violation of any law or the rights of a third party, or your use of the Website.",
    ],
  },
  {
    id: "termination",
    title: "Termination and Suspension",
    paragraphs: [
      "We may suspend or terminate your access to the Website or services at any time and for any reason, including suspected fraudulent activity, violation of these Terms, or requests from law enforcement. Upon termination, any outstanding amounts owed to us remain payable and clauses which by their nature survive termination (for example, Intellectual Property, Limitation of Liability, Indemnity) will continue to apply.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Dispute Resolution",
    paragraphs: [
      "These Terms are governed by the laws of India, without regard to conflict of laws rules. Any dispute arising out of or relating to these Terms or the Website shall be subject to the exclusive jurisdiction of courts located in India. We may, at our discretion, seek injunctive relief in any jurisdiction to prevent actual or threatened infringement of our rights.",
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    paragraphs: [
      "We may modify these Terms at any time by posting the revised Terms on the Website with an updated Effective Date. Continued use of the Website following changes constitutes acceptance of the updated Terms. If changes are material, we will make reasonable efforts to notify you.",
    ],
  },
  {
    id: "notices",
    title: "Notices",
    paragraphs: [
      "We may provide notices by email, posting on the Website, or other reasonable means. For legal notices to us, please use the contact information below.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    intro: "If you have questions about these Terms or wish to contact us for any reason, please reach out:",
    contact: true,
  },
  {
    id: "severability",
    title: "Severability",
    paragraphs: [
      "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.",
    ],
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    paragraphs: [
      "These Terms, together with any applicable service agreement, and our Privacy Policy, constitute the entire agreement between you and us concerning the Website and services and supersede all prior agreements.",
    ],
  },
];

function TermsNavigation({ activeSection, onNavigate }) {
  return (
    <nav aria-label="Terms sections" className="space-y-0.5">
      {TERMS.map((term, index) => {
        const active = activeSection === term.id;

        return (
          <a key={term.id} href={`#${term.id}`} onClick={() => onNavigate(term.id)} aria-current={active ? "location" : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] leading-snug transition-colors ${active ? "bg-[#E8F0FE] font-semibold text-[#1765F5]" : "text-[#52627A] hover:bg-[#F5F8FE] hover:text-[#0C337B]"}`}>
            <span className={`w-6 shrink-0 text-[11px] font-bold tabular-nums ${active ? "text-[#1765F5]" : "text-[#98A5B8]"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">{term.title}</span>
            {active && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1765F5]" />}
          </a>
        );
      })}
    </nav>
  );
}

function TermSection({ term, index }) {
  return (
    <section id={term.id} className="scroll-mt-28 border-b border-[#E6EBF3] py-7 first:pt-0 last:border-b-0 sm:py-8">
      <div className="mb-3 flex items-start gap-3">
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#E8F0FE] text-[12px] font-extrabold text-[#1765F5]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="pt-1 text-[17px] font-bold leading-[1.4] tracking-[-0.02em] text-[#0C337B] sm:text-[19px]">
          {term.title}
        </h2>
      </div>

      <div className="sm:pl-11">
        {term.intro && <p className="mb-3 text-[13px] leading-[1.9] text-[#52627A] sm:text-[14px]">{term.intro}</p>}

        {term.paragraphs?.map((paragraph, i) => (
          <p key={i} className="mb-3 text-[13px] leading-[1.9] text-[#52627A] last:mb-0 sm:text-[14px]">{paragraph}</p>
        ))}

        {term.bullets && (
          <ul className="space-y-3">
            {term.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] leading-[1.8] text-[#52627A] sm:text-[14px]">
                <span className="mt-1.5 grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#F0FDF4] text-[#15803D]">
                  <Check size={11} strokeWidth={2.5} />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {term.contact && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href="mailto:support@universityyatra.com" className="flex min-w-0 items-center gap-3 rounded-xl border border-[#E1EAF9] bg-[#F8FAFF] p-4 hover:border-[#A2C1FB]">
              <Mail size={19} className="shrink-0 text-[#1765F5]" />
              <span className="min-w-0 break-all text-[12px] font-semibold text-[#0C337B]">support@universityyatra.com</span>
            </a>
            <a href="https://universityyatra.com" target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-3 rounded-xl border border-[#E1EAF9] bg-[#F8FAFF] p-4 hover:border-[#A2C1FB]">
              <Globe2 size={19} className="shrink-0 text-[#1765F5]" />
              <span className="min-w-0 break-all text-[12px] font-semibold text-[#0C337B]">universityyatra.com</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(TERMS[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const current = [...TERMS].reverse().find((term) => {
        const element = document.getElementById(term.id);
        return element && element.getBoundingClientRect().top <= 170;
      });

      setActiveSection(current?.id || TERMS[0].id);
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
            <span className="font-semibold text-[#1765F5]">Terms & Conditions</span>
          </nav>

          <div className="max-w-[760px]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D8E6FC] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1765F5]">
              <Scale size={14} />
              Legal Information
            </span>

            <h1 className="text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#0C337B] sm:text-[42px] lg:text-[48px]">
              Terms <span className="text-[#1765F5]">&</span> Conditions
            </h1>

            <p className="mt-4 max-w-[660px] text-[13px] leading-[1.9] text-[#52627A] sm:text-[15px]">
              Please read these Terms carefully before using our website or services. They outline your rights, responsibilities, and the conditions governing your use of University Yatra.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-[#DCE7FC] bg-white px-3 py-2 text-[12px] font-medium text-[#415574]">
                <CalendarDays size={15} className="text-[#1765F5]" />
                Effective: December 10, 2025
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-[#DCFCE7] bg-[#F0FDF4] px-3 py-2 text-[12px] font-medium text-[#15803D]">
                <ShieldCheck size={15} />
                20 Legal Sections
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto grid w-full max-w-[1280px] items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-14">

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-[#E6EBF3] bg-white p-3">
            <div className="mb-3 flex items-center gap-2 border-b border-[#E6EBF3] px-3 pb-3 pt-1">
              <FileText size={17} className="text-[#1765F5]" />
              <h2 className="text-[13px] font-bold text-[#0C337B]">On this page</h2>
            </div>
            <TermsNavigation activeSection={activeSection} onNavigate={navigateTo} />
          </div>
        </aside>

        {/* MAIN TEXT */}
        <div className="min-w-0">
          <div className="mb-7 overflow-hidden rounded-xl border border-[#DCE7FC] lg:hidden">
            <button type="button" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-expanded={mobileNavOpen} aria-controls="mobile-terms-navigation" className="flex w-full items-center justify-between px-4 py-3.5 text-left">
              <span className="flex items-center gap-2 text-[13px] font-semibold text-[#0C337B]">
                <FileText size={17} className="text-[#1765F5]" />
                Jump to a section
              </span>
              <ChevronDown size={18} className={`text-[#1765F5] transition-transform ${mobileNavOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileNavOpen && (
              <div id="mobile-terms-navigation" className="max-h-[320px] overflow-y-auto border-t border-[#E6EBF3] p-2">
                <TermsNavigation activeSection={activeSection} onNavigate={navigateTo} />
              </div>
            )}
          </div>

          <div className="mb-8 rounded-xl border-l-[3px] border-[#B45309] bg-[#FFFBEB] px-4 py-5 sm:px-6">
            <p className="text-[13px] leading-[1.9] text-[#625341] sm:text-[14px]">
              These Terms and Conditions (“Terms”) govern your access to and use of the website <strong>universityyatra.com</strong> (the “Website”) and any services provided by us (“services”). By accessing or using the Website or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website or our services.
            </p>
          </div>

          {TERMS.map((term, index) => (
            <TermSection key={term.id} term={term} index={index} />
          ))}

          <div className="mt-8 rounded-xl border border-[#DCE7FC] bg-[#F8FAFF] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} className="shrink-0 text-[#15803D]" />
              <div>
                <h3 className="text-[15px] font-bold text-[#0C337B]">Have questions about these Terms?</h3>
                <p className="mt-1.5 text-[13px] leading-[1.8] text-[#52627A]">
                  Our team is available to assist with questions about our services and these Terms & Conditions.
                </p>
                <a href="mailto:support@universityyatra.com" className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold text-[#1765F5] hover:text-[#1047AC]">
                  Contact our team <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-[#1765F5] text-white shadow-lg hover:bg-[#1047AC] sm:bottom-8 sm:right-8">
          <ArrowUp size={19} />
        </button>
      )}
    </main>
  );
}

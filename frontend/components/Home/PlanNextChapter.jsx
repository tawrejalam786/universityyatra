"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  FileText,
  GraduationCap,
  Loader2,
} from "lucide-react";

/**
 * "Let's plan your next chapter" – callback request form + photo panel.
 *
 * Photo: portrait, about 4:5 (e.g. 1000 × 1250 px), a student at a desk with
 * a laptop. Pass `image="/images/callback-student.jpg"`. Until then a navy
 * placeholder is shown. The globe, mortarboard and book-stack are drawn in
 * CSS/SVG, so no extra image files are needed for them.
 *
 * `onSubmit(values)` – wire this up to your API route, form service, or CRM.
 * Left unset, the form just shows a success message (useful for preview).
 */

const TRUST_POINTS = [
  { icon: GraduationCap, label: "Courses & universities" },
  { icon: FileText, label: "Applications" },
  { icon: Award, label: "Scholarships & funding" },
];

const FIELD =
  "h-12 w-full rounded-xl border border-brand-navy/15 bg-white px-4 text-base text-brand-navy-dark placeholder:text-slate-400 transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30 motion-reduce:transition-none";
const LABEL = "text-sm font-semibold text-brand-navy-dark";

export default function PlanNextChapter({ image = null, onSubmit }) {
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    question: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error

  const update = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      if (onSubmit) await onSubmit(values);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      aria-labelledby="callback-title"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-teal-ink sm:text-sm">
            Personal guidance. Real conversations.
          </p>
          <h2
            id="callback-title"
            className="mt-3 text-balance text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-brand-navy-dark sm:text-5xl"
          >
            Let&apos;s plan your next chapter.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Tell us where you are in your journey. We&apos;ll help you explore what
            comes next.
          </p>
        </header>

        {/* Form + photo panel */}
        <div className="mt-10 grid overflow-hidden rounded-[28px] border border-brand-navy/10 bg-white shadow-[0_30px_70px_-30px_rgba(0,40,90,0.35)] sm:mt-12 lg:grid-cols-2">
          {/* ---------- Form ---------- */}
          <div className="p-6 sm:p-9 lg:p-10">
            <h3 className="text-2xl font-extrabold tracking-tight text-brand-navy-dark sm:text-[1.75rem]">
              Speak with our team
            </h3>
            <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
              Leave your details to request a callback.
            </p>

            {status === "done" ? (
              <div className="mt-8 rounded-2xl bg-tint-sky p-6 text-center">
                <p className="text-lg font-bold text-brand-navy-dark">Thank you!</p>
                <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
                  We&apos;ve received your details and our team will call you back
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5 sm:mt-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="cb-name" className={LABEL}>
                      Full name
                    </label>
                    <input
                      id="cb-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      value={values.name}
                      onChange={update("name")}
                      className={FIELD}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="cb-age" className={LABEL}>
                      Age <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <input
                      id="cb-age"
                      name="age"
                      type="number"
                      inputMode="numeric"
                      min={10}
                      max={100}
                      placeholder="Your age"
                      value={values.age}
                      onChange={update("age")}
                      className={FIELD}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="cb-email" className={LABEL}>
                      Email address
                    </label>
                    <input
                      id="cb-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={update("email")}
                      className={FIELD}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="cb-phone" className={LABEL}>
                      Phone number
                    </label>
                    <div className="flex items-center gap-2 rounded-xl border border-brand-navy/15 bg-white pl-4 transition-colors focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-brand-teal/30 motion-reduce:transition-none">
                      <span className="shrink-0 text-base text-slate-500">+91</span>
                      <input
                        id="cb-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        placeholder="Phone number"
                        value={values.phone}
                        onChange={update("phone")}
                        className="h-12 w-full bg-transparent pr-4 text-base text-brand-navy-dark placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cb-question" className={LABEL}>
                    Your question <span className="font-normal text-slate-400">(optional)</span>
                  </label>
                  <textarea
                    id="cb-question"
                    name="question"
                    rows={4}
                    placeholder="What would you like to discuss?"
                    value={values.question}
                    onChange={update("question")}
                    className={`${FIELD} h-auto resize-y py-3`}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-navy text-base font-semibold text-white transition-colors hover:bg-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal disabled:opacity-70 sm:w-auto sm:px-9"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 aria-hidden="true" className="size-5 animate-spin motion-reduce:animate-none" />
                        Sending&hellip;
                      </>
                    ) : (
                      <>
                        Request a callback
                        <ArrowRight
                          aria-hidden="true"
                          className="size-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                        />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-500 sm:text-left">
                    Our team will contact you about your enquiry.
                  </p>
                  {status === "error" && (
                    <p role="alert" className="mt-3 text-sm font-medium text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* ---------- Photo panel ---------- */}
          <div className="relative min-h-[20rem] bg-tint-sky-deep sm:min-h-[26rem] lg:min-h-full">
            {image ? (
              <Image
                src={image}
                alt="A student smiling at her desk with a laptop, ready for a consultation call"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="grid size-full place-items-center bg-linear-to-br from-tint-sky-deep to-brand-teal/25 text-brand-navy/25">
                <GraduationCap aria-hidden="true" className="size-28 sm:size-36" strokeWidth={1} />
              </div>
            )}

            {/* Bottom banner + headline (drawn first so the decorations
                below can float on top of it) */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-28 bg-brand-navy sm:h-32"
              style={{
                clipPath: "path('M0 40 C 220 0, 420 90, 1000 20 L1000 200 L0 200 Z')",
              }}
            />
            <p className="absolute bottom-5 left-6 max-w-[16rem] text-xl font-extrabold leading-tight text-white sm:bottom-7 sm:left-8 sm:max-w-xs sm:text-2xl">
              Big plans start with a small conversation.
            </p>

            {/* Mortarboard, floating top-right */}
            <div
              aria-hidden="true"
              className="absolute right-5 top-5 -rotate-[18deg] drop-shadow-[0_10px_18px_rgba(0,40,90,0.35)] sm:right-8 sm:top-8"
            >
              <svg viewBox="0 0 100 80" className="h-14 w-16 sm:h-20 sm:w-24">
                <path d="M50 6 4 28l46 22 46-22Z" fill="#f5efe4" />
                <path d="M22 37v20c0 7 12 13 28 13s28-6 28-13V37L50 50Z" fill="#f5efe4" />
                <path d="M86 30v22" stroke="var(--color-brand-teal)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="86" cy="55" r="4" fill="var(--color-brand-teal)" />
              </svg>
            </div>

            {/* Globe, floating bottom-left, overlapping the banner */}
            <div
              aria-hidden="true"
              className="absolute bottom-16 left-4 drop-shadow-[0_10px_18px_rgba(0,40,90,0.3)] sm:bottom-20 sm:left-8"
            >
              <svg viewBox="0 0 90 100" className="h-16 w-14 sm:h-24 sm:w-20">
                <rect x="40" y="78" width="10" height="14" rx="2" fill="#c9a24a" />
                <ellipse cx="45" cy="92" rx="20" ry="4" fill="#c9a24a" />
                <circle cx="45" cy="45" r="38" fill="#f5efe4" />
                <path
                  d="M18 30c8 6 14 4 20 10s2 10 10 12 12-4 18 2 4 12-2 16"
                  fill="none"
                  stroke="var(--color-brand-teal)"
                  strokeWidth="9"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <circle cx="45" cy="45" r="38" fill="none" stroke="#c9a24a" strokeWidth="2" />
              </svg>
            </div>

            {/* Book stack, above the banner on the right */}
            <div
              aria-hidden="true"
              className="absolute bottom-32 right-4 hidden flex-col items-end gap-1 sm:flex sm:bottom-36 sm:right-6"
            >
              {["DREAM", "STUDY", "GO FURTHER"].map((label) => (
                <span
                  key={label}
                  className="rounded-sm bg-white/95 px-3 py-1 text-[10px] font-bold tracking-wide text-brand-navy shadow-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Trust points */}
        <ul className="mt-10 flex flex-col items-center gap-6 sm:mt-12 sm:flex-row sm:justify-center sm:gap-0">
          {TRUST_POINTS.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={`flex items-center gap-3 text-base font-semibold text-brand-navy-dark sm:px-8 ${
                i > 0 ? "sm:border-l sm:border-brand-navy/15" : ""
              }`}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-tint-sky text-brand-navy">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

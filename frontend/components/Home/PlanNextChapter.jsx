
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  FileText,
  GraduationCap,
  Loader2,
  ShieldCheck,
} from "lucide-react";

const TRUST_POINTS = [
  { icon: GraduationCap, label: "Courses & Universities" },
  { icon: FileText, label: "Application Support" },
  { icon: Award, label: "Scholarships & Funding" },
];

const FIELD = "h-10 w-full rounded-[10px] border border-[#DCE5F1] bg-white px-3 text-[13px] text-[#0C337B] placeholder:text-[#8B9BB0] outline-none transition-colors focus:border-[#1765F5] focus:ring-2 focus:ring-[#1765F5]/10";

const LABEL = "block text-[12px] font-semibold text-[#0C337B]";

export default function PlanNextChapter({ image = null, onSubmit }) {
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    question: "",
  });

  const [status, setStatus] = useState("idle");

  const update = (key) => (e) => {
    setValues((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));

    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.currentTarget.reportValidity()) return;

    if (!onSubmit) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      await onSubmit(values);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      aria-labelledby="callback-title"
      className="w-full bg-[#EDF5FF] py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-5 lg:px-6">

        {/* SECTION HEADING */}
        <header className="mx-auto max-w-[680px] text-center">

          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1765F5] sm:text-[11px]">
            Personal Guidance • Real Conversations
          </p>

          <h2
            id="callback-title"
            className="mt-1.5 text-[25px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[30px] lg:text-[34px]"
          >
            Let&apos;s Plan Your{" "}
            <span className="text-[#1765F5]">
              Next Chapter.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-[560px] text-[12px] leading-[1.6] text-[#526B8C] sm:text-[13px]">
            Tell us where you are in your journey. We&apos;ll help you
            explore what comes next.
          </p>

        </header>

        {/* MAIN FORM + IMAGE CARD */}
        <div className="mt-6 grid overflow-hidden rounded-[20px] border border-[#DCE7F6] bg-white shadow-[0_12px_35px_rgba(12,51,123,0.08)] sm:mt-7 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT FORM */}
          <div className="min-w-0 p-4 sm:p-6 lg:p-7">

            <div>
              <h3 className="text-[19px] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0C337B] sm:text-[22px]">
                Speak With Our Team
              </h3>

              <p className="mt-1 text-[12px] text-[#526B8C]">
                Share your details to request a callback.
              </p>
            </div>

            {status === "done" ? (

              /* SUCCESS STATE */
              <div role="status" className="mt-5 rounded-xl border border-[#BCE7D0] bg-[#EAF8F1] p-5 text-center">
                <ShieldCheck size={30} className="mx-auto text-[#0C9253]" />

                <h4 className="mt-2 text-[17px] font-bold text-[#0C337B]">
                  Thank you!
                </h4>

                <p className="mt-1 text-[12px] leading-[1.6] text-[#526B8C]">
                  Your callback request has been submitted successfully.
                  Our team will contact you about your enquiry.
                </p>
              </div>

            ) : (

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">

                {/* FORM GRID */}
                <div className="grid grid-cols-1 gap-x-3.5 gap-y-3.5 sm:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label htmlFor="cb-name" className={LABEL}>
                      Full Name
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
                      className={`${FIELD} mt-1.5`}
                    />
                  </div>

                  {/* AGE */}
                  <div>
                    <label htmlFor="cb-age" className={LABEL}>
                      Age{" "}
                      <span className="font-normal text-[#8796A9]">
                        (Optional)
                      </span>
                    </label>

                    <input
                      id="cb-age"
                      name="age"
                      type="number"
                      inputMode="numeric"
                      min="10"
                      max="100"
                      placeholder="Your age"
                      value={values.age}
                      onChange={update("age")}
                      className={`${FIELD} mt-1.5`}
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label htmlFor="cb-email" className={LABEL}>
                      Email Address
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
                      className={`${FIELD} mt-1.5`}
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label htmlFor="cb-phone" className={LABEL}>
                      Phone Number
                    </label>

                    <div className="mt-1.5 flex h-10 items-center overflow-hidden rounded-[10px] border border-[#DCE5F1] bg-white transition-colors focus-within:border-[#1765F5] focus-within:ring-2 focus-within:ring-[#1765F5]/10">

                      <span className="border-r border-[#DCE5F1] px-3 text-[12px] font-semibold text-[#0C337B]">
                        +91
                      </span>

                      <input
                        id="cb-phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="10-digit number"
                        value={values.phone}
                        onChange={update("phone")}
                        className="h-full min-w-0 flex-1 bg-transparent px-3 text-[13px] text-[#0C337B] outline-none placeholder:text-[#8B9BB0]"
                      />

                    </div>
                  </div>

                </div>

                {/* PRIVACY INDICATOR */}
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#0C9253]">
                  <ShieldCheck size={13} />
                  We respect your privacy
                </div>

                {/* MESSAGE */}
                <div>
                  <label htmlFor="cb-question" className={LABEL}>
                    Your Question{" "}
                    <span className="font-normal text-[#8796A9]">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="cb-question"
                    name="question"
                    rows={2}
                    placeholder="What would you like to discuss?"
                    value={values.question}
                    onChange={update("question")}
                    className="mt-1.5 block min-h-[70px] w-full resize-y rounded-[10px] border border-[#DCE5F1] bg-white px-3 py-2.5 text-[13px] leading-[1.5] text-[#0C337B] outline-none transition-colors placeholder:text-[#8B9BB0] focus:border-[#1765F5] focus:ring-2 focus:ring-[#1765F5]/10"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#1765F5] px-6 text-[12px] font-bold text-white shadow-[0_5px_16px_rgba(23,101,245,0.18)] transition-all duration-300 hover:bg-[#0C337B] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request a Callback
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-[10px] leading-[1.5] text-[#8796A9]">
                  Our team will contact you regarding your enquiry.
                </p>

                {status === "error" && (
                  <p role="alert" className="text-[12px] font-medium text-red-600">
                    {onSubmit
                      ? "Something went wrong. Please try again."
                      : "The callback form is not connected yet. Please configure the submission handler."}
                  </p>
                )}

              </form>
            )}
          </div>

          {/* RIGHT IMAGE PANEL */}
          <div className="relative min-h-[250px] overflow-hidden bg-[#D9EAFE] sm:min-h-[340px] lg:min-h-[400px]">

            {image ? (
              <Image
                src={image}
                alt="Student planning her educational future"
                fill
                sizes="(min-width: 1100px) 480px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#DCEBFF] to-[#A2C1FB]">
                <GraduationCap
                  size={100}
                  strokeWidth={1}
                  className="text-[#1765F5]/35"
                />
              </div>
            )}

            {/* IMAGE BOTTOM GRADIENT */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-[#0C337B]/95 via-[#0C337B]/65 to-transparent" />

            {/* IMAGE CAPTION */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="mb-2 h-[3px] w-10 rounded-full bg-[#5D93F8]" />

              <h3 className="max-w-[330px] text-[19px] font-extrabold leading-[1.25] tracking-[-0.025em] text-white sm:text-[22px]">
                Big Plans Start With a Small Conversation.
              </h3>

              <p className="mt-2 max-w-[310px] text-[11px] leading-[1.6] text-white/85 sm:text-[12px]">
                Your future deserves the right guidance.
              </p>
            </div>

          </div>

        </div>

        {/* COMPACT TRUST POINTS */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-6 lg:gap-x-9">
          {TRUST_POINTS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1765F5] shadow-sm">
                <Icon size={15} strokeWidth={1.9} />
              </span>

              <span className="text-[11px] font-semibold text-[#0C337B] sm:text-[12px]">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

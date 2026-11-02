import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AdmissionHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EFF6FF] to-[#E0EFFE] py-12 sm:py-16 lg:pt-20 lg:pb-8">

      {/* Background decorative elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#1765F5]/5 blur-3xl" />
        <div className="absolute -left-[5%] bottom-[20%] h-[300px] w-[300px] rounded-full bg-[#1765F5]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-2 mt-3 sm:mb-2">
          <ol className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px]">

            <li>
              <Link href="/" className="text-[#526B8C] transition hover:text-[#1765F5]">
                Home
              </Link>
            </li>

            <li className="text-[#CBD5E1]">/</li>

            <li>
              <Link href="/services" className="text-[#526B8C] transition hover:text-[#1765F5]">
                Student Services
              </Link>
            </li>

            <li className="text-[#CBD5E1]">/</li>

            <li className="font-semibold text-[#0C337B]">
              Admission & Application Support
            </li>

          </ol>
        </nav>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1765F5]/20 bg-white px-4 py-2 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1765F5]">
                Admission & Application Support
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[34px] lg:text-[40px]">
              Your Next Chapter Starts With the{" "}
              <span className="text-[#1765F5]">
                Right Application.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[600px] text-[14px] leading-[1.8] text-[#526B8C] sm:text-[15px]">
              Choosing the right university and course is just the beginning.
              From shortlisting suitable institutions to understanding
              admission requirements and preparing your application,
              University Yatra helps you navigate each step with clarity
              and confidence.
            </p>

            {/* CTA Button */}
            <div className="mt-7 flex flex-wrap items-center gap-4">

              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#1765F5] px-6 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#1765F5]/25 transition-all hover:bg-[#0C337B] hover:shadow-xl">
                <span>Book a Free Consultation</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>

            </div>

            {/* Bottom 3 Points - Original Layout */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">

              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="shrink-0 text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  Right University
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="shrink-0 text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  Right Course
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="shrink-0 text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  Right Strategy
                </span>
              </div>

            </div>

          </div>

          {/* Right Image - Original Layout */}
          <div className="relative lg:block">

            <div className="w-full overflow-hidden rounded-3xl">

              <Image
                src="/images/text-prepration.jpg"
                alt="University Yatra Admission and Application Support"
                width={600}
                height={450}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="block h-auto w-full object-contain"
                priority
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
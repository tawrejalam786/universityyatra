import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
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
                ADMISSION APPLICATION DOCUMENTATION
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[34px] lg:text-[40px]">
              University {" "}
              <span className="text-[#1765F5] mr-2">
                Admissions, Visa & Immigration 
              </span>
               Assistance
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[600px] text-[14px] leading-[1.8] text-[#526B8C] sm:text-[15px]">
              University Yatra provides end-to-end assistance with university applications, admission documentation, offer letters,SOP/LOR, student visa applications and pre-departure formalities. We also guide individuals through international relocation, migration options, permanent residency (PR) pathways and the documentation and processes involved in settling abroad.
            </p>

              {/* CTA Buttons */}
              <div className="mt-7 flex w-full flex-nowrap items-center gap-2.5 sm:w-auto sm:gap-4">
                {/* Primary */}
                <Link
                  href="/contact"
                  className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#1765F5] px-3 py-3 text-[12.5px] font-bold text-white shadow-lg shadow-[#1765F5]/25 transition-all hover:bg-[#0C337B] hover:shadow-xl sm:flex-none sm:px-6 sm:py-3.5 sm:text-[14px]"
                >
                  <span className="sm:hidden">Free Consultation</span>
                  <span className="hidden sm:inline">Book a Free Consultation</span>
                  <ArrowRight size={18} strokeWidth={2.5} className="hidden sm:block" />
                </Link>

                {/* Secondary */}
                <a
                  href="https://wa.me/919217368750?text=Hi%20University%20Yatra%2C%20I%20would%20like%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#1765F5]/25 bg-white px-3 py-[10px] text-[12.5px] font-bold text-[#0C337B] transition-all hover:border-[#25D366] hover:bg-[#F0FFF6] sm:flex-none sm:px-6 sm:py-[12px] sm:text-[14px]"
                >
                  <MessageCircle size={18} strokeWidth={2.4} className="shrink-0 text-[#25D366]" />
                  <span>Chat On WhatsApp</span>
                </a>
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
                src="/images/admission-application.webp"
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
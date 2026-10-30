import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CounsellingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EFF6FF] to-[#E0EFFE] py-16 sm:py-20 lg:py-24">
      
      {/* Background decorative elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#1765F5]/5 blur-3xl" />
        <div className="absolute -left-[5%] bottom-[20%] h-[300px] w-[300px] rounded-full bg-[#1765F5]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
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
            <li className="font-semibold text-[#0C337B]">Career Counselling</li>
          </ol>
        </nav>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1765F5]/20 bg-white px-4 py-2 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1765F5]">
                100% Free Career Counselling & Profile Assessment
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0C337B] sm:text-[42px] lg:text-[52px]">
              Big dreams need the{" "}
              <span className="text-[#1765F5]">right direction.</span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.7] text-[#526B8C] sm:text-[16px]">
              Confused about which course, country or university to choose? Get honest, personalised study abroad guidance built around your academics, budget and long-term career goals.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#assessment"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1765F5] px-6 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#1765F5]/25 transition-all hover:bg-[#0C337B] hover:shadow-xl"
              >
                <span>Get My Free Assessment</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#1765F5] bg-white px-6 py-3.5 text-[14px] font-bold text-[#1765F5] transition-all hover:bg-[#1765F5] hover:text-white"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  No cost, no obligation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  Profile-first advice
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#1765F5]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-[#0C337B]">
                  Parents welcome
                </span>
              </div>
            </div>
          </div>

          {/* Right visual placeholder */}
          
          <div className="relative lg:block">
            <div className="w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/career-counselling.webp"
                alt="University Yatra Career Counselling and Admission Guidance"
                width={600}
                height={450}
                sizes="(max-width: 1024px) 50vw, 600px"
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

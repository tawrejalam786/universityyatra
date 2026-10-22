import { MessageCircle, Users, FileCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Share your profile",
      desc: "Tell us about your education, goals, budget and preferred study destinations.",
    },
    {
      number: "02",
      icon: Users,
      title: "Speak with a counsellor",
      desc: "Discuss your options, questions and any areas that may need extra preparation.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Get a clear next-step plan",
      desc: "Understand practical country, course and preparation options before deciding.",
    },
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            SIMPLE & CLEAR PROCESS
          </p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[36px] lg:text-[42px]">
            Your next step,{" "}
            <span className="text-[#1765F5]">made simple.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.7] text-[#526B8C] sm:text-[16px]">
            From the first conversation to an actionable plan, here's how your free assessment works.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Connecting line - hidden on mobile, visible on larger screens */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-20 hidden h-[calc(100%-160px)] w-1 -translate-x-1/2 bg-gradient-to-b from-[#1765F5] via-[#1765F5] to-[#2DD4BF] lg:block"
          />

          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center gap-6 lg:flex-row ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className="w-full lg:w-[calc(50%-60px)]">
                    <div
                      className={`rounded-2xl border border-[#D9E5FA] bg-gradient-to-br from-white to-[#F8FAFF] p-6 shadow-lg transition-all hover:shadow-xl sm:p-8 ${
                        isEven ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      {/* Step number */}
                      <div
                        className={`mb-4 inline-flex items-center justify-center rounded-lg bg-[#E0EFFE] px-3 py-1.5 text-[13px] font-bold text-[#1765F5] ${
                          isEven ? "lg:ml-auto" : "lg:mr-auto"
                        }`}
                      >
                        Step {step.number}
                      </div>

                      {/* Title */}
                      <h3 className="text-[20px] font-bold text-[#0C337B] sm:text-[22px]">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-[14px] leading-[1.7] text-[#526B8C] sm:text-[15px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center icon - positioned absolutely on desktop */}
                  <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#1765F5] to-[#0C337B] shadow-xl lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden w-[calc(50%-60px)] lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

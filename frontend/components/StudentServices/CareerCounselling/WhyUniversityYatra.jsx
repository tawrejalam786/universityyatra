import { FileSearch, Globe2, Wallet, MessageSquare } from "lucide-react";

export default function WhyUniversityYatra() {
  const reasons = [
    {
      icon: FileSearch,
      title: "It starts with your profile",
      desc: "We understand your academics, experience, study gaps and goals before recommending options.",
    },
    {
      icon: Globe2,
      title: "Country & course clarity",
      desc: "Explore study destinations and courses that genuinely align with your background.",
    },
    {
      icon: Wallet,
      title: "Budget-aware planning",
      desc: "Consider financial feasibility and preparation requirements before making a commitment.",
    },
    {
      icon: MessageSquare,
      title: "Honest, practical advice",
      desc: "Clear expectations, long-term career thinking and no misleading outcome promises.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0C337B] via-[#0A2B5E] to-[#061B3B] py-16 sm:py-20 lg:py-24">
      
      {/* Background pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(23,101,245,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,212,191,0.2),transparent_50%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            WHY UNIVERSITY YATRA
          </p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[42px]">
            Better decisions start with{" "}
            <span className="text-[#1765F5]">better guidance.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.7] text-white/80 sm:text-[16px]">
            We help you understand what is realistic for your profile, so you can plan your education with confidence.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#1765F5]/40 hover:bg-white/10"
              >
                {/* Glow effect */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#1765F5]/20 blur-3xl" />
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#1765F5] text-white shadow-lg transition-transform group-hover:scale-110">
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-bold leading-[1.3] text-white sm:text-[22px]">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[14px] leading-[1.7] text-white/75 sm:text-[15px]">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

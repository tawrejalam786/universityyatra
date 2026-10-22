import { HelpCircle, Users, CalendarX, Briefcase } from "lucide-react";

export default function WhoItsFor() {
  const audiences = [
    {
      icon: HelpCircle,
      title: "Undecided students",
      desc: "Not sure which course or country is right.",
      gradient: "from-[#1765F5] to-[#0C337B]",
    },
    {
      icon: Users,
      title: "Parents & families",
      desc: "Want clarity before a major investment.",
      gradient: "from-[#2DD4BF] to-[#14B8A6]",
    },
    {
      icon: CalendarX,
      title: "Students with gaps",
      desc: "Exploring options with gaps or low scores.",
      gradient: "from-[#F59E0B] to-[#D97706]",
    },
    {
      icon: Briefcase,
      title: "Working professionals",
      desc: "Planning an upskill or career transition.",
      gradient: "from-[#8B5CF6] to-[#7C3AED]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            WHO IT'S FOR
          </p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[36px] lg:text-[42px]">
            Guidance for{" "}
            <span className="text-[#1765F5]">every starting point.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.7] text-[#526B8C] sm:text-[16px]">
            Whether you're just exploring or rethinking your future, a clearer plan can make all the difference.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {audiences.map((audience, idx) => {
            const Icon = audience.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-[#E0EFFE] bg-gradient-to-br from-[#F8FAFF] to-white p-6 shadow-md transition-all hover:border-[#1765F5] hover:shadow-2xl"
              >
                {/* Icon with gradient background */}
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${audience.gradient} text-white shadow-lg transition-transform group-hover:scale-110`}
                >
                  <Icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold leading-[1.3] text-[#0C337B] sm:text-[18px]">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[13px] leading-[1.6] text-[#526B8C] sm:text-[14px]">
                  {audience.desc}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <svg
                    className="h-5 w-5 text-[#1765F5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

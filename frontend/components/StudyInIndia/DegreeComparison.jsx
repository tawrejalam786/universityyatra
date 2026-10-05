"use client";

const comparisonData = [
  {
    feature: "📚 Class Mode",
    online: "Live and recorded LMS classes.",
    regular: "Physical classes on campus.",
  },
  {
    feature: "🕒 Your Schedule",
    online: "Flexible slots, including weekends.",
    regular: "Fixed timetable, limited flexibility.",
  },
  {
    feature: "💼 Study + Work",
    online: "Study while working or interning.",
    regular: "Work around fixed class hours.",
  },
  {
    feature: "🎓 Degree Type",
    online: "Regular degree through online mode.",
    regular: "Regular degree through campus learning.",
  },
  {
    feature: "💸 ROI",
    online: "Lower tuition, fewer extra expenses.",
    regular: "Higher tuition, plus campus costs.",
  },
  {
    feature: "🚀 Career Prep",
    online: "CV, interview and technical preparation.",
    regular: "Placement support varies by university.",
  },
];

export default function DegreeComparison() {
  return (
    <section className="w-full overflow-hidden bg-[#FAFAFC] py-11 sm:py-14 md:py-16 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5 lg:px-6">

        {/* HEADING */}
        <div className="mb-8 text-center md:mb-11">
          <h2 className="text-[29px] font-bold leading-[1.12] tracking-[-0.035em] text-[#063B72] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            Same Degree <span className="text-[#9D174D]">Different ROI</span>
          </h2>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-[26px] border border-[#E7EAF0] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)]">

            {/* TABLE HEADER */}
            <div className="grid grid-cols-[0.9fr_1.2fr_1.2fr]">

              {/* FEATURE HEADER */}
              <div className="flex min-h-[92px] items-center px-6 lg:px-8">
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#9AA5B1]">
                  Feature
                </span>
              </div>

              {/* ONLINE DEGREE HEADER */}
              <div className="flex min-h-[92px] items-center justify-center bg-[#9D174D] px-6 text-center shadow-[0_8px_24px_rgba(157,23,77,0.12)]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
                    Compare
                  </p>

                  <h3 className="mt-1 text-[20px] font-bold text-white lg:text-[22px]">
                    Online Degree
                  </h3>
                </div>
              </div>

              {/* REGULAR DEGREE HEADER */}
              <div className="flex min-h-[92px] items-center justify-center border-l border-[#EDF0F3] px-6 text-center">
                <h3 className="text-[20px] font-bold text-[#34495E] lg:text-[22px]">
                  Regular Degree
                </h3>
              </div>
            </div>

            {/* TABLE ROWS */}
            <div>
              {comparisonData.map((item, index) => (
                <div key={item.feature} className={`grid grid-cols-[0.9fr_1.2fr_1.2fr] ${index !== comparisonData.length - 1 ? "border-b border-[#EDF0F3]" : ""}`}>

                  {/* FEATURE */}
                  <div className="flex min-h-[88px] items-center px-6 lg:px-8">
                    <p className="text-[14px] font-semibold leading-[1.4] text-[#34495E] lg:text-[15px]">
                      {item.feature}
                    </p>
                  </div>

                  {/* ONLINE DEGREE */}
                  <div className="flex min-h-[88px] items-center bg-[#FFF4F8] px-6 lg:px-8">
                    <div className="flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#9D174D]" />

                      <p className="text-[14px] font-medium leading-[1.55] text-[#6F123D] lg:text-[15px]">
                        {item.online}
                      </p>
                    </div>
                  </div>

                  {/* REGULAR DEGREE */}
                  <div className="flex min-h-[88px] items-center border-l border-[#EDF0F3] px-6 lg:px-8">
                    <div className="flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#BBC4CE]" />

                      <p className="text-[14px] leading-[1.55] text-[#657485] lg:text-[15px]">
                        {item.regular}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="space-y-4 md:hidden">
          {comparisonData.map((item) => (
            <article key={item.feature} className="overflow-hidden rounded-[20px] border border-[#E5E9EE] bg-white shadow-[0_8px_28px_rgba(15,23,42,0.06)]">

              {/* FEATURE */}
              <div className="border-b border-[#EDF0F3] bg-[#F8FAFC] px-4 py-3.5">
                <p className="text-[15px] font-bold text-[#063B72]">
                  {item.feature}
                </p>
              </div>

              {/* ONLINE DEGREE */}
              <div className="relative bg-[#9D174D] px-4 py-4">
                <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#F9A8D4]" />

                <div className="pl-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/65">
                    Online Degree
                  </p>

                  <p className="mt-1.5 text-[14px] font-medium leading-[1.55] text-white">
                    {item.online}
                  </p>
                </div>
              </div>

              {/* REGULAR DEGREE */}
              <div className="px-4 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#9AA5B1]">
                  Regular Degree
                </p>

                <p className="mt-1.5 text-[14px] leading-[1.55] text-[#5E6D7D]">
                  {item.regular}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
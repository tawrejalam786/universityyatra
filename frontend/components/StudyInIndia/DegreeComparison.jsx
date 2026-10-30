
"use client";

import {
  BookOpen,
  Clock3,
  BriefcaseBusiness,
  GraduationCap,
  Wallet,
  Rocket,
} from "lucide-react";

const comparisonData = [
  {
    feature: "Class Mode",
    icon: BookOpen,
    online: "Live and recorded LMS classes.",
    regular: "Physical classes on campus.",
  },
  {
    feature: "Your Schedule",
    icon: Clock3,
    online: "Flexible slots, including weekends.",
    regular: "Fixed timetable, limited flexibility.",
  },
  {
    feature: "Study + Work",
    icon: BriefcaseBusiness,
    online: "Study while working or interning.",
    regular: "Work around fixed class hours.",
  },
  {
    feature: "Degree Type",
    icon: GraduationCap,
    online: "Regular degree through online mode.",
    regular: "Regular degree through campus learning.",
  },
  {
    feature: "ROI",
    icon: Wallet,
    online: "Lower tuition, fewer extra expenses.",
    regular: "Higher tuition, plus campus costs.",
  },
  {
    feature: "Career Prep",
    icon: Rocket,
    online: "CV, interview and technical preparation.",
    regular: "Placement support varies by university.",
  },
];

export default function DegreeComparison() {
  return (
    <section className="w-full overflow-hidden bg-[#FAFAFC] py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5 lg:px-6">

        {/* HEADING */}
        <div className="mb-7 text-center md:mb-10">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            Same Degree{" "}
            <span className="text-[#1765F5]">Different ROI</span>
          </h2>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden overflow-hidden rounded-[24px] border border-[#DCE7FA] bg-white shadow-[0_14px_45px_rgba(12,51,123,0.06)] md:block">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-[0.9fr_1.2fr_1.2fr]">

            {/* FEATURE HEADER */}
            <div className="flex min-h-[86px] items-center bg-[#F6F9FF] px-6 lg:px-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#60738E]">
                Feature
              </span>
            </div>

            {/* ONLINE HEADER */}
            <div className="flex min-h-[86px] items-center justify-center bg-[#1765F5] px-5 text-center">
              <h3 className="text-[20px] font-bold text-white lg:text-[22px]">
                Online Degree
              </h3>
            </div>

            {/* REGULAR HEADER */}
            <div className="flex min-h-[86px] items-center justify-center border-l border-white/20 bg-[#0C337B] px-5 text-center">
              <h3 className="text-[20px] font-bold text-white lg:text-[22px]">
                Regular Degree
              </h3>
            </div>
          </div>

          {/* TABLE ROWS */}
          <div>
            {comparisonData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.feature} className={`grid grid-cols-[0.9fr_1.2fr_1.2fr] ${index !== comparisonData.length - 1 ? "border-b border-[#E4ECF8]" : ""}`}>

                  {/* FEATURE */}
                  <div className="flex min-h-[82px] items-center gap-3 bg-white px-5 lg:px-7">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDF4FF] text-[#1765F5]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <p className="text-[14px] font-semibold leading-[1.45] text-[#0C337B] lg:text-[15px]">
                      {item.feature}
                    </p>
                  </div>

                  {/* ONLINE DEGREE */}
                  <div className="flex min-h-[82px] items-center border-l border-[#DCE7FA] bg-[#F1F6FF] px-5 lg:px-7">
                    <p className="text-[14px] font-medium leading-[1.55] text-[#244A8F] lg:text-[15px]">
                      {item.online}
                    </p>
                  </div>

                  {/* REGULAR DEGREE */}
                  <div className="flex min-h-[82px] items-center border-l border-[#DCE7FA] bg-[#EAF0FA] px-5 lg:px-7">
                    <p className="text-[14px] font-medium leading-[1.55] text-[#24446F] lg:text-[15px]">
                      {item.regular}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="space-y-4 md:hidden">
          {comparisonData.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.feature} className="overflow-hidden rounded-[18px] border border-[#DCE7FA] bg-white shadow-[0_6px_22px_rgba(12,51,123,0.05)]">

                {/* FEATURE */}
                <div className="flex items-center gap-3 border-b border-[#E4ECF8] bg-[#F6F9FF] px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#E4EEFF] text-[#1765F5]">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-[15px] font-bold text-[#0C337B]">
                    {item.feature}
                  </h3>
                </div>

                {/* EQUAL COMPARISON COLUMNS */}
                <div className="grid grid-cols-2">

                  {/* ONLINE */}
                  <div className="min-w-0 border-r border-[#DCE7FA] bg-[#F1F6FF]">
                    <div className="flex min-h-[45px] items-center justify-center bg-[#1765F5] px-2 py-3 text-center">
                      <h4 className="text-[12px] font-bold text-white">
                        Online Degree
                      </h4>
                    </div>

                    <div className="px-3 py-4">
                      <p className="break-words text-[12px] font-medium leading-[1.65] text-[#244A8F] sm:text-[13px]">
                        {item.online}
                      </p>
                    </div>
                  </div>

                  {/* REGULAR */}
                  <div className="min-w-0 bg-[#EAF0FA]">
                    <div className="flex min-h-[45px] items-center justify-center bg-[#0C337B] px-2 py-3 text-center">
                      <h4 className="text-[12px] font-bold text-white">
                        Regular Degree
                      </h4>
                    </div>

                    <div className="px-3 py-4">
                      <p className="break-words text-[12px] font-medium leading-[1.65] text-[#24446F] sm:text-[13px]">
                        {item.regular}
                      </p>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

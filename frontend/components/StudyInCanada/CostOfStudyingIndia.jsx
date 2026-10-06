"use client";

import { BookOpen, GraduationCap, Award, IndianRupee } from "lucide-react";

const tuitionFees = [
  {
    title: "Diploma / Certificate Programs",
    price: "INR 50,000 – 2,00,000",
    icon: Award,
  },
  {
    title: "Bachelor’s",
    price: "INR 1,00,000 – 4,00,000",
    icon: GraduationCap,
  },
  {
    title: "Master’s",
    price: "INR 1,50,000 – 6,00,000",
    icon: BookOpen,
  },
];

export default function CostOfStudyingIndia() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F7FB] py-11 sm:py-14 md:py-16 lg:py-[68px]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-[280px] w-[280px] rounded-full bg-[#18B8B5]/[0.07] blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#063B72]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 px-4 sm:px-5 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-6">

        {/* LEFT CONTENT */}
        <div className="max-w-[560px]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#18B8B5]/20 bg-[#18B8B5]/10 px-3.5 py-2">
            <IndianRupee size={15} className="text-[#18B8B5]" strokeWidth={2.2} />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F8F8C]">
              Study Cost
            </span>
          </div>

          <h2 className="max-w-[520px] text-[31px] font-bold leading-[1.08] tracking-[-0.035em] text-[#063B72] sm:text-[36px] md:text-[42px] lg:text-[47px]">
            Cost Of Studying <span className="text-[#18B8B5]">in India</span>
          </h2>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-[4px] w-2 rounded-full bg-[#18B8B5]" />
            <span className="h-[4px] w-2 rounded-full bg-[#18B8B5]/70" />
            <span className="h-[4px] w-2 rounded-full bg-[#18B8B5]/40" />
            <span className="h-[4px] w-20 rounded-full bg-[#063B72]" />
          </div>

          <p className="mt-6 text-[14px] leading-[1.75] text-[#526477] sm:text-[15px] md:text-[16px]">
            India offers an excellent balance between affordability and academic quality. Tuition fees vary depending on the institution type (public or private), program level, and specialization. Students also benefit from low living costs, affordable accommodation options, and access to campus facilities. Overall, India remains one of the most cost-effective destinations for quality higher education with strong academic and professional outcomes.
          </p>
        </div>

        {/* RIGHT PRICING */}
        <div className="w-full">
          <div className="mb-4 flex items-center justify-between gap-4 rounded-[18px] border border-[#DDE7EF] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(6,59,114,0.06)] sm:px-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A98A7]">
                Tuition Fees
              </p>

              <h3 className="mt-1 text-[18px] font-bold text-[#063B72] sm:text-[20px]">
                Average per annum
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#18B8B5]/10 text-[#18B8B5]">
              <IndianRupee size={21} strokeWidth={2.1} />
            </div>
          </div>

          <div className="space-y-3.5">
            {tuitionFees.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="group relative overflow-hidden rounded-[18px] border border-[#DCE6EE] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(6,59,114,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#18B8B5]/50 hover:shadow-[0_12px_30px_rgba(6,59,114,0.09)] sm:px-5 md:px-6">
                  <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#18B8B5]" />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#F0F8F8] text-[#18B8B5]">
                        <Icon size={19} strokeWidth={2} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[14px] font-semibold leading-[1.45] text-[#40556A] sm:text-[15px]">
                          {item.title}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-[15px] font-bold leading-[1.4] text-[#063B72] sm:text-[16px] md:text-[17px]">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

const audiences = [
  { slug: "students-planning-to-study-abroad", title: "Students Planning to Study Abroad", description: "Exploring international universities, courses, and the right academic pathway." },
  { slug: "parents-seeking-clarity", title: "Parents Seeking Clarity", description: "Looking for transparent advice on costs, eligibility, and educational choices." },
  { slug: "working-professionals", title: "Working Professionals", description: "Considering international education for career progression or a change in direction." },
  { slug: "students-navigating-conflicting-advice", title: "Students Navigating Conflicting Advice", description: "Seeking reliable information to make sense of different options and requirements." },
  { slug: "students-with-academic-gaps", title: "Students with Academic Gaps", description: "Exploring suitable pathways after study breaks, backlogs, or a change in career plans." },
];

const cardStyles = [
  "md:col-span-7 bg-[#E8F0FE]",
  "md:col-span-5 bg-[#F7FAFF]",
  "md:col-span-4 bg-white",
  "md:col-span-4 bg-[#F3F7FE]",
  "md:col-span-4 bg-white",
];

export default function WhoWeWorkWith() {
  return (
    <section aria-labelledby="who-we-work-with-title" className="w-full bg-[#FBFCFF] px-4 py-12 text-[#0C337B] sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-7 flex items-end justify-between gap-5 border-b border-[#A2C1FB]/45 pb-5 sm:mb-8">
          <h2 id="who-we-work-with-title" className="m-0 max-w-[620px] text-[26px] font-extrabold leading-[1.13] tracking-[-0.04em] sm:text-[34px]">
            Who We <span className="text-[#1765F5]">Work With</span>
          </h2>
          <span aria-hidden="true" className="mb-1 hidden h-1.5 w-12 shrink-0 rounded-full bg-[#1765F5] sm:block" />
        </div>

        <ul className="grid list-none grid-cols-1 gap-3.5 p-0 md:grid-cols-12 md:gap-4">
          {audiences.map((audience, index) => (
            <li key={audience.slug} className={`group relative isolate flex min-h-[198px] min-w-0 overflow-hidden rounded-[22px] border border-[#DAE7FA] p-5 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#A2C1FB] hover:shadow-[0_14px_32px_-20px_#1047AC55] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[215px] sm:p-6 ${cardStyles[index]} ${index < 2 ? "md:min-h-[238px]" : ""}`}>
              <span aria-hidden="true" className="absolute right-[-34px] bottom-[-54px] -z-10 h-[190px] w-[190px] rounded-full bg-[#D9E7FF]/60 blur-[2px] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none" />
              <div className="relative z-10 flex h-full max-w-[68%] flex-col items-start sm:max-w-[66%]">
                <span aria-hidden="true" className="mb-auto text-[11px] font-bold tracking-[0.16em] text-[#1765F5]">{String(index + 1).padStart(2, "0")}</span>
                <div className="pt-7">
                  <h3 className="m-0 mb-2 text-[16px] font-bold leading-[1.3] tracking-[-0.02em] text-[#0C337B] sm:text-[18px]">{audience.title}</h3>
                  <p className="m-0 max-w-[36ch] text-[12px] leading-[1.55] text-[#526B8C] sm:text-[13px]">{audience.description}</p>
                </div>
              </div>
              <Image src={`/images/who-we-work-with/${audience.slug}.png`} alt="" width={240} height={240} sizes="(max-width: 768px) 150px, 190px" className={`pointer-events-none absolute bottom-[-12px] right-[-10px] z-0 h-[155px] w-[155px] object-contain object-bottom drop-shadow-[0_12px_12px_#1047AC22] transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none sm:h-[185px] sm:w-[185px] ${index === 0 ? "sm:bottom-[-15px] sm:right-[1%] md:h-[210px] md:w-[210px]" : ""}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

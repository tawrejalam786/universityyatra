const steps = [
  {
    "title": "University & Course Selection",
    "description": "We assess your academic background, interests, and goals, then shortlist universities based on eligibility, course structure, tuition fees, and career opportunities."
  },
  {
    "title": "Admissions",
    "description": "We guide you through application planning, university requirements, submission timelines, and follow-ups to keep your admissions journey organised."
  },
  {
    "title": "Test Preparation",
    "description": "Through Academic Yatra, we offer preparation for IELTS, PTE, TOEFL, Duolingo English Test, GRE, GMAT, SAT, and other relevant examinations."
  },
  {
    "title": "Documentation",
    "description": "We help organise academic records, statements of purpose, letters of recommendation, and supporting documents according to university and application requirements."
  },
  {
    "title": "Scholarships & Education Loans",
    "description": "We help students explore suitable scholarships and education financing options, understand eligibility criteria, and prepare for the relevant application processes."
  },
  {
    "title": "Visa Guidance",
    "description": "We guide students through destination-specific visa requirements, document preparation, application procedures, and interview readiness where applicable."
  },
  {
    "title": "Pre-Departure Support",
    "description": "We help students prepare for their transition abroad through practical guidance on travel, accommodation, essential documents, and settling into a new environment."
  }
];


const accents = [
  { bg: "bg-[#1765F5]", text: "text-white", fill: "#1765F5" },
  { bg: "bg-[#5D93F8]", text: "text-white", fill: "#5D93F8" },
  { bg: "bg-[#A2C1FB]", text: "text-[#0C337B]", fill: "#A2C1FB" },
  { bg: "bg-[#1047AC]", text: "text-white", fill: "#1047AC" },
];

export default function WhatWeDo() {
  return (
    <section aria-label="What We Do. How We Do It." className="box-border w-full overflow-x-clip bg-[#E8F0FE] px-4 py-7 text-[#0C337B] sm:px-6 sm:py-9">
      <div className="mx-auto w-full max-w-[900px]">
        <h2 className="mx-auto mb-7 max-w-[580px] text-center text-[22px] font-extrabold leading-[1.12] tracking-[-0.035em] sm:mb-9 sm:text-[28px]">
          What We Do. <span className="text-[#1765F5]">How We Do It.</span>
        </h2>
        <ol className="m-0 grid list-none gap-6 p-0 sm:gap-8">
          {steps.map((step, index) => {
            const reverse = index % 2 === 1;
            const accent = accents[index % accents.length];
            return (
              <li key={step.title} className={`relative mx-auto flex min-h-[94px] w-full max-w-[820px] min-w-0 items-stretch drop-shadow-[0_4px_4px_#0C337B22] sm:min-h-[82px] ${reverse ? "flex-row-reverse" : ""}`}>
                <div className={`relative z-10 flex w-[82px] shrink-0 flex-col items-center justify-center rounded-[17px] sm:w-[155px] sm:rounded-[22px] ${accent.bg} ${accent.text}`}>
                  <span className="text-[25px] font-black leading-none tracking-[-0.06em] sm:text-[30px]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-1 text-[8px] font-bold leading-none sm:text-[9px]">Step {String(index + 1).padStart(2, "0")}</span>
                  <svg aria-hidden="true" className={`absolute bottom-[-15px] h-[22px] w-[29px] ${reverse ? "right-0 -scale-x-100" : "left-0"}`} viewBox="0 0 29 22"><path d="M0 0h29L0 22Z" fill={accent.fill} /></svg>
                </div>
                <div className={`relative flex min-w-0 flex-1 flex-col justify-center rounded-[24px] bg-white py-3 sm:rounded-full sm:py-4 ${reverse ? "pl-4 pr-7 sm:pl-8 sm:pr-[62px]" : "pl-7 pr-4 sm:pl-[62px] sm:pr-8"}`}>
                  <span aria-hidden="true" className={`absolute top-[7px] h-px w-[42%] bg-[#E8F0FE] ${reverse ? "right-7" : "left-7"}`} />
                  <h3 className="m-0 mb-1 text-[11px] font-extrabold uppercase leading-[1.25] text-[#1765F5] sm:text-[12px]">{step.title}</h3>
                  <p className="m-0 text-[10px] leading-[1.4] text-[#0C337B] [overflow-wrap:anywhere] sm:text-[11px] sm:leading-[1.45]">{step.description}</p>
                </div>
                <svg aria-hidden="true" className={`pointer-events-none absolute left-[60px] top-1/2 z-20 h-[47px] w-[57px] -translate-y-1/2 overflow-visible sm:left-[127px] sm:h-[54px] sm:w-[66px] ${reverse ? "!left-auto right-[60px] scale-x-[-1] sm:!right-[127px]" : ""}`} viewBox="0 0 66 54" fill="none">
                  <circle cx="24" cy="27" r="17" stroke="#1047AC" strokeWidth="10" />
                  <circle cx="43" cy="27" r="17" stroke="#FFFFFF" strokeWidth="10" />
                </svg>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

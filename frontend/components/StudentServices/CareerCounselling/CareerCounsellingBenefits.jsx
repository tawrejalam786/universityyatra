const steps = [
  {
    title: "Personalised Profile Assessment",
    description:
      "We evaluate your academic qualifications, interests, strengths and career aspirations to understand your profile and identify suitable educational pathways.",
  },
  {
    title: "Course & University Selection",
    description:
      "We help you identify suitable courses, universities and study destinations based on your academic background, eligibility, career goals, job market and preferences.",
  },
  {
    title: "Financial Planning",
    description:
      "We help you understand education costs, identify relevant scholarship opportunities and explore suitable education loan options to plan your studies within your budget.",
  },
  {
    title: "Admission Planning & Guidance",
    description:
      "We guide you through eligibility requirements, admission & visa procedures and application-related requirements to help you prepare for the entire journey.",
  },
];

// Counting-box colours taken from the reference image:
// orange, red, light blue, green  (label = slightly deeper shade for readable small text)
const accents = [
  { bg: "bg-[#F5A623]", text: "text-white", fill: "#F5A623", label: "#E8920F" },
  { bg: "bg-[#EE5A5A]", text: "text-white", fill: "#EE5A5A", label: "#E04848" },
  { bg: "bg-[#6A9BD1]", text: "text-white", fill: "#6A9BD1", label: "#3F7FC4" },
  { bg: "bg-[#6BCB9B]", text: "text-white", fill: "#6BCB9B", label: "#2FAE75" },
];

export default function AcademicMoveSteps() {
  return (
    <section
      aria-labelledby="academic-move-heading"
      className="box-border w-full overflow-x-clip bg-[#E8F0FE] px-4 py-7 text-[#0C337B] sm:px-6 sm:py-9 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Heading */}
        <div className="mx-auto mb-7 max-w-[760px] text-center sm:mb-9">
          <h1
            id="academic-move-heading"
            className="text-[22px] font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-[28px] lg:text-[32px]"
          >
            Everything You Need to Make{" "}
            <span className="text-[#1765F5]">Your Next Academic Move.</span>
          </h1>

          <p className="mx-auto mt-3 max-w-[680px] text-[12px] leading-[1.65] text-[#0C337B]/80 sm:text-[13px] lg:text-[14px]">
            From understanding your academic profile to exploring courses and
            universities, we bring the guidance you need to make informed
            decisions about your education.
          </p>
        </div>

        {/* Steps */}
        <ol className="m-0 grid list-none gap-6 p-0 sm:gap-7">
          {steps.map((step, index) => {
            const reverse = index % 2 === 1;
            const accent = accents[index % accents.length];

            return (
              <li
                key={step.title}
                className={`relative mx-auto flex min-h-[112px] w-full max-w-[1160px] min-w-0 items-stretch drop-shadow-[0_4px_4px_#0C337B22] sm:min-h-[92px] lg:min-h-[104px] ${
                  reverse ? "flex-row-reverse" : ""
                }`}
              >
                {/* COLOURED PORTION: heading + "What You Get" */}
                <div
                  className={`relative z-10 flex w-[120px] shrink-0 flex-col items-center justify-center rounded-[17px] px-2.5 text-center sm:w-[180px] sm:rounded-[22px] sm:px-4 lg:w-[220px] ${accent.bg} ${accent.text}`}
                >
                  {/* <span className="text-[9px] font-black leading-none tracking-[0.08em] opacity-70 sm:text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span> */}

                  <h3 className="m-0 mt-1 text-[11px] font-extrabold leading-[1.25] sm:text-[13px] lg:text-[15px]">
                    {step.title}
                  </h3>

                  <span className="mt-1.5 text-[8px] font-bold uppercase leading-none tracking-[0.12em] opacity-80 sm:text-[9px] lg:text-[10px]">
                    What You Get
                  </span>

                  <svg
                    aria-hidden="true"
                    className={`absolute bottom-[-15px] h-[22px] w-[29px] ${
                      reverse ? "right-0 -scale-x-100" : "left-0"
                    }`}
                    viewBox="0 0 29 22"
                  >
                    <path d="M0 0h29L0 22Z" fill={accent.fill} />
                  </svg>
                </div>

                {/* WHITE PORTION: main text + "How We Do It" (lower left) */}
                <div
                  className={`relative flex min-w-0 flex-1 flex-col justify-center rounded-[24px] bg-white py-3 text-left sm:rounded-[36px] sm:py-4 lg:py-5 ${
                    reverse
                      ? "pl-4 pr-7 sm:pl-8 sm:pr-[62px] lg:pl-12 lg:pr-[84px]"
                      : "pl-7 pr-4 sm:pl-[62px] sm:pr-8 lg:pl-[84px] lg:pr-12"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute top-[7px] h-px w-[42%] bg-[#E8F0FE] ${
                      reverse ? "right-7" : "left-7"
                    }`}
                  />

                  <p className="m-0 text-[10.5px] leading-[1.45] text-[#0C337B] [overflow-wrap:anywhere] sm:text-[12px] sm:leading-[1.5] lg:text-[14px] lg:leading-[1.55]">
                    {step.description}
                  </p>

                  <span
                    style={{ color: accent.label }}
                    className="mt-1.5 self-start text-[8px] font-extrabold uppercase leading-none tracking-[0.12em] sm:text-[9px] lg:text-[10px]"
                  >
                    How We Do It
                  </span>
                </div>

                {/* Chain link */}
                <svg
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-[98px] top-1/2 z-20 h-[47px] w-[57px] -translate-y-1/2 overflow-visible sm:left-[152px] sm:h-[54px] sm:w-[66px] lg:left-[188px] ${
                    reverse
                      ? "!left-auto right-[98px] scale-x-[-1] sm:!right-[152px] lg:!right-[188px]"
                      : ""
                  }`}
                  viewBox="0 0 66 54"
                  fill="none"
                >
                  <circle cx="24" cy="27" r="17" stroke="#1047AC" strokeWidth="10" />
                  <circle cx="43" cy="27" r="17" stroke="#FFFFFF" strokeWidth="10" />
                </svg>
              </li>
            );
          })}
        </ol>

        {/* Closing line */}
        <p className="mx-auto mt-7 max-w-[760px] text-center text-[13px] font-extrabold leading-[1.5] tracking-[-0.01em] text-[#0C337B] sm:mt-9 sm:text-[15px] lg:text-[17px]">
          Less guesswork. Better-informed decisions.{" "}
          <span className="text-[#1765F5]">
            A clearer direction for your future.
          </span>
        </p>
      </div>
    </section>
  );
}

export default function GuidanceTrust() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0C337B] sm:text-[36px] lg:text-[42px]">
            Guidance you can trust
          </h2>
          <p className="mt-3 text-[15px] font-medium text-[#526B8C] sm:text-[16px]">
            Clear advice. No false promises.
          </p>
        </div>


        {/* Trust Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "100% Free Assessment",
              desc: "No obligation to proceed",
              icon: "💯",
            },
            {
              title: "Profile-Based Guidance",
              desc: "Advice tailored to you",
              icon: "📋",
            },
            {
              title: "Honest Expectations",
              desc: "No admission guarantees",
              icon: "✅",
            },
            {
              title: "Career-First Approach",
              desc: "Think beyond admission",
              icon: "🎯",
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-[#E0EFFE] bg-white p-6 shadow-sm transition-all hover:border-[#1765F5] hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-4 text-[36px]">{pillar.icon}</div>

              {/* Title */}
              <h4 className="text-[17px] font-bold leading-[1.3] text-[#0C337B]">
                {pillar.title}
              </h4>

              {/* Description */}
              <p className="mt-2 text-[13px] font-medium text-[#526B8C]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

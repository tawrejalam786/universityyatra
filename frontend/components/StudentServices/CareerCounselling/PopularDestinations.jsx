import Link from "next/link";

export default function PopularDestinations() {
  const destinations = [
    { flag: "🇨🇦", name: "Canada", href: "/study-in-canada" },
    { flag: "🇬🇧", name: "UK & Ireland", href: "/study-in-uk" },
    { flag: "🇺🇸", name: "USA", href: "/study-in-usa" },
    { flag: "🇦🇺", name: "Australia & NZ", href: "/study-in-australia" },
    { flag: "🇪🇺", name: "Europe", href: "/study-in-europe" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] to-[#EFF6FF] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="mb-8 text-center text-[22px] font-bold text-[#0C337B] sm:text-[26px]">
          Explore popular study destinations
        </h2>

        {/* Destination buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {destinations.map((dest, idx) => (
            <Link
              key={idx}
              href={dest.href}
              className="group inline-flex items-center gap-3 rounded-xl border-2 border-[#D9E5FA] bg-white px-6 py-3.5 text-[14px] font-bold text-[#0C337B] shadow-sm transition-all hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white hover:shadow-lg sm:px-7 sm:py-4 sm:text-[15px]"
            >
              <span className="text-[24px]">{dest.flag}</span>
              <span>{dest.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Globe2, MapPin } from "lucide-react";

export const metadata = { 
  title: "Study Destinations | University Yatra", 
  description: "Discover study destinations and guidance for your international education journey." 
};

export default function DestinationsPage() {
  const destinations = [
    { name: "Study in Australia", href: "/study-in-australia", flag: "🇦🇺" },
    { name: "Study in Canada", href: "/study-in-canada", flag: "🇨🇦" },
    { name: "Study in USA", href: "/study-in-usa", flag: "🇺🇸" },
    { name: "Study in UK", href: "/study-in-uk", flag: "🇬🇧" },
    { name: "Study in Germany", href: "/study-in-germany", flag: "🇩🇪" },
    { name: "Study in Ireland", href: "/study-in-ireland", flag: "🇮🇪" },
    { name: "Study in Russia", href: "/study-in-russia", flag: "🇷🇺" },
    { name: "Study in UAE", href: "/study-in-uae", flag: "🇦🇪" },
    { name: "Study in India", href: "/study-in-india", flag: "🇮🇳" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <Globe2 className="mx-auto h-12 w-12 text-[#1765F5]" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0C337B] sm:text-5xl">
            Study Destinations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#526B8C]">
            Explore top study destinations around the world and find the perfect place for your international education journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <Link
              key={dest.href}
              href={dest.href}
              className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:border-[#1765F5] hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{dest.flag}</span>
                <div>
                  <h2 className="text-lg font-bold text-[#0C337B] group-hover:text-[#1765F5]">
                    {dest.name}
                  </h2>
                  <p className="mt-1 text-sm text-[#64748B]">
                    Learn More →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

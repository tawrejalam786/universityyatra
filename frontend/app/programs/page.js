import Link from "next/link";
import { BookOpen, Briefcase, Code, Heart, Building2, FlaskConical, GraduationCap } from "lucide-react";

export const metadata = { 
  title: "Study Programs | University Yatra", 
  description: "Explore study programs across top universities worldwide." 
};

export default function ProgramsPage() {
  const programs = [
    { name: "Business & Management", icon: Briefcase, count: "200+" },
    { name: "Computer Science & IT", icon: Code, count: "150+" },
    { name: "Engineering", icon: Building2, count: "180+" },
    { name: "Healthcare & Medicine", icon: Heart, count: "100+" },
    { name: "Sciences", icon: FlaskConical, count: "120+" },
    { name: "Arts & Humanities", icon: BookOpen, count: "90+" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <GraduationCap className="mx-auto h-12 w-12 text-[#1765F5]" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0C337B] sm:text-5xl">
            Study Programs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#526B8C]">
            Explore study programs across top universities worldwide and find the perfect fit for your career goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.name}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all hover:border-[#1765F5] hover:shadow-lg"
              >
                <Icon className="h-10 w-10 text-[#1765F5]" />
                <h2 className="mt-4 text-xl font-bold text-[#0C337B]">
                  {program.name}
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-[#1765F5]">
                  {program.count}
                </p>
                <p className="mt-1 text-sm text-[#64748B]">
                  Programs Available
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1765F5] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#075094]"
          >
            Get Personalized Program Guidance
          </Link>
        </div>
      </section>
    </main>
  );
}

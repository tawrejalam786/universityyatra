import Link from "next/link";
import { BookOpen, GraduationCap, Heart, FileText } from "lucide-react";

export const metadata = { 
  title: "Student Services | University Yatra", 
  description: "Comprehensive guidance for international students." 
};

export default function ServicesPage() {
  const services = [
    { 
      name: "Career Counselling", 
      href: "/career-counselling",
      icon: GraduationCap,
      description: "Get personalized guidance for your study abroad journey"
    },
    { 
      name: "Education Loan", 
      href: "/education-loan",
      icon: FileText,
      description: "Access to 30+ trusted banks and lenders for education financing"
    },
    { 
      name: "Admission Application", 
      href: "/addmission-application",
      icon: BookOpen,
      description: "Expert assistance with university applications"
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <Heart className="mx-auto h-12 w-12 text-[#1765F5]" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0C337B] sm:text-5xl">
            Student Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#526B8C]">
            Comprehensive guidance and support services for your international education journey.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all hover:border-[#1765F5] hover:shadow-lg"
              >
                <Icon className="h-10 w-10 text-[#1765F5]" />
                <h2 className="mt-4 text-xl font-bold text-[#0C337B] group-hover:text-[#1765F5]">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-[#1765F5]">
                  Learn More →
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

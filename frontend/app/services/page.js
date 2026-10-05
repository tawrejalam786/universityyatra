import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

export const metadata = {
  title: "Services - University Yatra",
  description: "Our comprehensive services for international students.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar active="Services" />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-brand-navy mb-6">Our Services</h1>
          <p className="text-lg text-slate-600">Services page content coming soon...</p>
        </div>
      </main>
      <UniversityFooter />
    </>
  );
}

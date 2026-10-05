import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

export const metadata = {
  title: "Destinations - University Yatra",
  description: "Discover study destinations - USA, UK, Canada, UAE and more.",
};

export default function DestinationsPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-brand-navy mb-6">Study Destinations</h1>
          <p className="text-lg text-slate-600">Destinations page content coming soon...</p>
        </div>
      </main>
      <UniversityFooter />
    </>
  );
}

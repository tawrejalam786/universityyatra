import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

export const metadata = {
  title: "Programs - University Yatra",
  description: "Explore study programs across top universities worldwide.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar active="Programs" />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-brand-navy mb-6">Study Programs</h1>
          <p className="text-lg text-slate-600">Programs page content coming soon...</p>
        </div>
      </main>
      <UniversityFooter />
    </>
  );
}

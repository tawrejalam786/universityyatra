import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

export const metadata = {
  title: "Contact Us - University Yatra",
  description: "Get in touch with our education consultants.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar active="Contact" />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-brand-navy mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600">Contact page content coming soon...</p>
        </div>
      </main>
      <UniversityFooter />
    </>
  );
}

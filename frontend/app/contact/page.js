import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import ContactHero from '@/components/Contact/ContactHero';

export const metadata = {
  title: "Contact Us | University Yatra",
  description: "Get in touch with University Yatra for guidance on universities, degree programs, study abroad options, admissions, counselling, and student support.",
  keywords: "contact University Yatra, education counselling, university guidance, study abroad counselling, admission support, student counselling, university contact",
  openGraph: {
    title: "Contact University Yatra",
    description: "Connect with University Yatra for university guidance, admissions support, study abroad assistance, and personalised counselling.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar active="Contact" />
      <main>
        <ContactHero />
      </main>
      <UniversityFooter />
    </>
  );
}

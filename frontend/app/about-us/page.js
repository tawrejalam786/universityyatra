import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import AboutHero from '@/components/About/AboutHero';

export const metadata = {
  title: "About Us | University Yatra",
  description: "Learn about University Yatra, our mission, approach, and how we help students explore universities, degree programs, and study opportunities with clear guidance and informed decision-making.",
  keywords: "University Yatra, about University Yatra, education guidance, university counselling, study abroad guidance, online degree guidance, university comparison, student counselling",
  openGraph: {
    title: "About University Yatra",
    description: "Discover University Yatra and how we support students in exploring universities, programs, and study opportunities with reliable guidance.",
    type: "website",
  },
};

export default function StudyInCanadaPage() {
  return (
    <>
      <Navbar active="About" />
      <main>
        <AboutHero />
      </main>
      <UniversityFooter />
    </>
  );
}

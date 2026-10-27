import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInGermanyHero from '@/components/StudyInGermany/StudyInGermanyHero';
import OnlineDegreeSection from "@/components/StudyInGermany/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInGermany/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInGermany/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInGermany/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInGermany/UniversityCarousel";
import CostOfStudyingGermany from "@/components/StudyInGermany/CostOfStudyingGermany";
import Testimonials from "@/components/StudyInGermany/Testimonials";
import GlobalEducationCTA from "@/components/StudyInGermany/GlobalEducationCTA";


export const metadata = {
  title: 'Study in Germany | Top Universities & Admission Guide - University Yatra',
  description: 'Explore tuition-free or low-cost degree programs from top German universities. Complete Bachelor\'s, Master\'s, and PhD programs with strong engineering focus and EU work opportunities.',
  keywords: 'study in germany, german universities, tuition free germany, engineering germany, master in germany, DAAD scholarships, study abroad germany',
  openGraph: {
    title: 'Study in Germany - Engineering Excellence with Affordable Education',
    description: 'Pursue Bachelor\'s and Master\'s programs from recognized German universities. Tuition-free public universities, research opportunities, and EU work permits available.',
    type: 'website',
  },
};

export default function StudyInGermanyPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInGermanyHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        <CostOfStudyingGermany />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}

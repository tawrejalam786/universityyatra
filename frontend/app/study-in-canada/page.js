import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInCanadaHero from '@/components/StudyInCanada/StudyInCanadaHero';
import OnlineDegreeSection from "@/components/StudyInCanada/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInCanada/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInCanada/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInCanada/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInCanada/UniversityCarousel";
import DegreeComparison from "@/components/StudyInCanada/DegreeComparison";
import CostOfStudyingIndia from "@/components/StudyInCanada/CostOfStudyingIndia";
import GlobalEducationCTA from "@/components/StudyInCanada/GlobalEducationCTA";


export const metadata = {
  title: 'Study in Canada | Top Universities & Admission Guide - University Yatra',
  description: 'Explore flexible online and on-campus degree programs from top NAAC A+ accredited Canadian universities. Complete Bachelor\'s, Master\'s, and Diploma programs while you work.',
  keywords: 'study in canada, online degree canada, Canadian universities, distance learning canada, online MBA canada, bachelor degree online Canada',
  openGraph: {
    title: 'Study in Canada - Flexible Learning with Recognized Degrees',
    description: 'Pursue Bachelor\'s and Master\'s programs from recognized Canadian universities. Compare multiple universities, WES-recognized options available.',
    type: 'website',
  },
};

export default function StudyInCanadaPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInCanadaHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        {/* <DegreeComparison /> */}
        <CostOfStudyingIndia />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}

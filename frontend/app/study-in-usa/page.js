import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInUsaHero from '@/components/StudyInUsa/StudyInUsaHero';
import OnlineDegreeSection from "@/components/StudyInUsa/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInUsa/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInUsa/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInUsa/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInUsa/UniversityCarousel";
import DegreeComparison from "@/components/StudyInUsa/DegreeComparison";
import CostOfStudyingUsa from "@/components/StudyInUsa/CostOfStudyingUsa";
import GlobalEducationCTA from "@/components/StudyInUsa/GlobalEducationCTA";


export const metadata = {
  title: "Study in USA | Top Universities & Admission Guide - University Yatra",
  description: "Explore study opportunities in the USA with University Yatra. Compare universities, degree programs, admission requirements, study destinations, and choose the right pathway for your academic goals.",
  keywords: "study in USA, US universities, study abroad USA, bachelors in USA, masters in USA, USA admission guide, study in United States, University Yatra",
  openGraph: {
    title: "Study in USA | Universities, Programs & Admission Guidance",
    description: "Explore universities, degree programs, and study opportunities across the USA with guidance from University Yatra.",
    type: "website",
  },
};

export default function StudyInUsaPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInUsaHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        {/* <DegreeComparison /> */}
        <CostOfStudyingUsa />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}

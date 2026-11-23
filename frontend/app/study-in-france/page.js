import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInFranceHero from '@/components/StudyInFrance/StudyInFranceHero';
import OnlineDegreeSection from "@/components/StudyInFrance/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInFrance/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInFrance/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInFrance/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInFrance/UniversityCarousel";
import DegreeComparison from "@/components/StudyInFrance/DegreeComparison";
import CostOfStudyingIndia from "@/components/StudyInFrance/CostOfStudyingIndia";
import Testimonials from "@/components/StudyInFrance/Testimonials";
import AdmissionGuide from "@/components/StudyInFrance/AdmissionGuide";
import FranceFAQ from "@/components/StudyInFrance/FranceFAQ";
import GlobalEducationCTA from "@/components/common/GlobalEducationCTA";


export const metadata = {
  title: 'Study in France | Top Universities & Admission Guide - University Yatra',
  description: 'Explore France\'s prestigious universities, diverse academic programmes, and rich culture. Complete Bachelor\'s, Master\'s, and PhD programs with LMD framework recognition.',
  keywords: 'study in france, french universities, grandes écoles, study abroad france, master in france, bachelor degree france, french education',
  openGraph: {
    title: 'Study in France - Excellence in Education and Culture',
    description: 'Pursue Bachelor\'s and Master\'s programs from prestigious French universities. LMD framework, research excellence, and European academic exposure.',
    type: 'website',
  },
};

export default function StudyInFrancePage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInFranceHero />

        <OnlineDegreeSection />

        <CoursesSlider />

        <UniversityCarousel />

        <WhatItGetsYou />

        <HowUniversityYatraHelps />

        <AdmissionGuide />

        <FranceFAQ />

        {/* <DegreeComparison /> */}
        {/* <CostOfStudyingIndia />
        <Testimonials /> */}
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}

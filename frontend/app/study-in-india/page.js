import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyIndiaHero from '@/components/StudyInIndia/StudyInIndiaHero';
import OnlineDegreeSection from "@/components/StudyInIndia/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInIndia/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInIndia/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInIndia/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInIndia/UniversityCarousel";
import DegreeComparison from "@/components/StudyInIndia/DegreeComparison";
import CostOfStudyingIndia from "@/components/StudyInIndia/CostOfStudyingIndia";
import Testimonials from "@/components/StudyInCanada/Testimonials";
import GlobalEducationCTA from "@/components/StudyInIndia/GlobalEducationCTA";


export const metadata = {
  title: 'Study in India | Top Universities & Admission Guide - University Yatra',
  description: 'Explore flexible online and on-campus degree programs from top NAAC A+ accredited Indian universities. Complete Bachelor\'s, Master\'s, and Diploma programs while you work.',
  keywords: 'study in india, online degree india, indian universities, distance learning india, online MBA india, bachelor degree online india',
  openGraph: {
    title: 'Study in India - Flexible Learning with Recognized Degrees',
    description: 'Pursue Bachelor\'s and Master\'s programs from recognized Indian universities. Compare multiple universities, WES-recognized options available.',
    type: 'website',
  },
};

export default function StudyInIndiaPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyIndiaHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        <DegreeComparison />
        <CostOfStudyingIndia />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}

import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInUsaHero from '@/components/StudyInUsa/StudyInUsaHero';
import OnlineDegreeSection from "@/components/StudyInUsa/OnlineDegreeSection";
import CoursesSlider from "@/components/StudyInUsa/CoursesSlider";
import UniversityCarousel from "@/components/StudyInUsa/UniversityCarousel";
import WhatItGetsYou from "@/components/StudyInUsa/WhatItGetsYou";
import HowUniversityYatraHelps from "@/components/StudyInUsa/HowUniversityYatraHelps";
import AdmissionGuide from "@/components/StudyInUsa/AdmissionGuide";
import USAFAQ from "@/components/StudyInUsa/USAFAQ";
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
        {/* 01. Hero Section */}
        <StudyInUsaHero />

        {/* 02. Country Guide (5 Cards) */}
        <OnlineDegreeSection />

        {/* 03. Explore Courses (Country Wise) */}
        <CoursesSlider />

        {/* 04. Explore Universities (One View) */}
        <UniversityCarousel />

        {/* 05. Why Study Here? (Interactive Linear Bar) */}
        <WhatItGetsYou />

        {/* 06. How University Yatra Helps You (Horizontal Explain) */}
        <HowUniversityYatraHelps />

        {/* 07. Admission Guide (Video-Led) */}
        <AdmissionGuide />

        {/* 08. Frequently Asked Questions */}
        <USAFAQ />

        {/* 09. Pre-Footer Global CTA */}
        <GlobalEducationCTA />
      </main>

      {/* Footer + Global Time Zones */}
      <UniversityFooter />
    </>
  );
}

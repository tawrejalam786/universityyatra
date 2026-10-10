import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInNewJapanHero from '@/components/StudyInNewJapan/StudyInNewJapanHero';
import OnlineDegreeSection from "@/components/StudyInNewJapan/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInNewJapan/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInNewJapan/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInNewJapan/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInNewJapan/UniversityCarousel";
import CostOfStudyingNewJapan from "@/components/StudyInNewJapan/CostOfStudyingNewJapan";
import Testimonials from "@/components/StudyInNewJapan/Testimonials";
import GlobalEducationCTA from "@/components/StudyInNewJapan/GlobalEducationCTA";


export const metadata = {
  title: "Study in Japan | Top Universities & Admission Guide - University Yatra",

  description:
    "Explore study opportunities in Japan with University Yatra. Compare leading universities including the University of Tokyo, Kyoto University, Osaka University, and Waseda University. Discover undergraduate and postgraduate programs, engineering and technology courses, scholarships, admission requirements, and Japan student visa guidance.",

  keywords:
    "study in Japan, Japan universities, study abroad Japan, top universities in Japan, University of Tokyo, Kyoto University, Osaka University, Waseda University, Tokyo Institute of Science, bachelors in Japan, masters in Japan, MBA in Japan, engineering courses in Japan, computer science in Japan, technology courses in Japan, English taught programs in Japan, Japan admission guide, scholarships in Japan, MEXT scholarship, higher education Japan, Japan student visa, study in Tokyo, courses in Japan, University Yatra",

  openGraph: {
    title:
      "Study in Japan | Universities, Programs & Admission Guidance",

    description:
      "Explore leading Japanese universities, undergraduate and postgraduate programs, engineering and technology courses, MEXT scholarships, and study opportunities with admission guidance from University Yatra.",

    type: "website",
  },
};


export default function StudyInNewJapanPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInNewJapanHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        <CostOfStudyingNewJapan />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}

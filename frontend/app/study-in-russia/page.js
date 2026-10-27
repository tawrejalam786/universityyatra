import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInRussiaHero from '@/components/StudyInRussia/StudyInRussiaHero';
import OnlineDegreeSection from "@/components/StudyInRussia/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInRussia/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInRussia/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInRussia/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInRussia/UniversityCarousel";
import CostOfStudyingRussia from "@/components/StudyInRussia/CostOfStudyingRussia";
import Testimonials from "@/components/StudyInRussia/Testimonials";
import GlobalEducationCTA from "@/components/StudyInRussia/GlobalEducationCTA";
import AdmissionGuide from '@/components/StudyInRussia/AdmissionGuide';
import USAFAQ from '@/components/StudyInRussia/USAFAQ';




export const metadata = {
  title: "Study in Russia | Top Universities & Admission Guide - University Yatra",
  description:
    "Explore study opportunities in Russia with University Yatra. Compare universities in Moscow, Saint Petersburg, Kazan, and other cities, undergraduate and postgraduate programs, MBBS courses, admission requirements, and choose the right pathway for your academic and career goals.",
  keywords:
    "study in Russia, Russia universities, study abroad Russia, study in Moscow, study in Saint Petersburg, bachelors in Russia, masters in Russia, MBBS in Russia, Russia admission guide, top universities in Russia, higher education Russia, Russia student visa, courses in Russia, University Yatra",
  openGraph: {
    title: "Study in Russia | Universities, Programs & Admission Guidance",
    description:
      "Explore universities, MBBS courses, degree programs, and study opportunities across Russia with admission guidance from University Yatra.",
    type: "website",
  },
};




export default function StudyInRussiaPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInRussiaHero />

        <OnlineDegreeSection />

        <CoursesSlider />

        <UniversityCarousel />

        <WhatItGetsYou />

        <HowUniversityYatraHelps />
        

        <AdmissionGuide />

        <USAFAQ />

        {/* <CostOfStudyingRussia /> */}

        {/* <Testimonials /> */}

        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}

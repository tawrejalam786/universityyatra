import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import AboutHero from '@/components/About/AboutHero';
import AboutIntroSection from '@/components/About/AboutIntroSection';
import VisionMissionSection from '@/components/About/VisionMissionSection';
import CoreValuesSection from '@/components/About/CoreValuesSection';
import OurTeam from '@/components/About/OurTeam';
import WhatWeDoSection from '@/components/About/WhatWeDoSection';
import WhoWeWorkWithSection from '@/components/About/WhoWeWorkWithSection';
import UniversityNetworkSection from '@/components/About/UniversityNetworkSection';
import GlobalEducationCTA from '@/components/About/GlobalEducationCTA';

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

export default function AboutUsPage() {
  return (
    <>
      <Navbar active="About" />
      <main>
        <AboutHero />
        <AboutIntroSection />
        <VisionMissionSection />
        <CoreValuesSection />
        <OurTeam />
        <WhatWeDoSection />
        <WhoWeWorkWithSection />
        <UniversityNetworkSection />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}

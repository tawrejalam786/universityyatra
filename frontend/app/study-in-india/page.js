import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyIndiaHeroModern from '@/components/StudyInIndia/StudyIndiaHeroModern';
import BenefitsCardsModern from '@/components/StudyInIndia/BenefitsCardsModern';
import UniversitiesCarouselModern from '@/components/StudyInIndia/UniversitiesCarouselModern';
import ProfessionsGridModern from '@/components/StudyInIndia/ProfessionsGridModern';
import PricingCardsModern from '@/components/StudyInIndia/PricingCardsModern';
import CTAModern from '@/components/StudyInIndia/CTAModern';

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
        <StudyIndiaHeroModern />
        <BenefitsCardsModern />
        <UniversitiesCarouselModern />
        <ProfessionsGridModern />
        <PricingCardsModern />
        <CTAModern />
      </main>
      <UniversityFooter />
    </>
  );
}

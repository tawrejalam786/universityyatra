import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import CounsellingHero from "@/components/StudentServices/CareerCounselling/CounsellingHero";
import GuidanceTrust from "@/components/StudentServices/CareerCounselling/GuidanceTrust";
import WhyUniversityYatra from "@/components/StudentServices/CareerCounselling/WhyUniversityYatra";
import ProfileReview from "@/components/StudentServices/CareerCounselling/ProfileReview";
import HowItWorks from "@/components/StudentServices/CareerCounselling/HowItWorks";
import WhatYouGet from "@/components/StudentServices/CareerCounselling/WhatYouGet";
import WhoItsFor from "@/components/StudentServices/CareerCounselling/WhoItsFor";
import PopularDestinations from "@/components/StudentServices/CareerCounselling/PopularDestinations";
import CounsellingFAQ from "@/components/StudentServices/CareerCounselling/CounsellingFAQ";
import AssessmentForm from "@/components/StudentServices/CareerCounselling/AssessmentForm";
import CareerCounsellingBenefits from "@/components/StudentServices/CareerCounselling/CareerCounsellingBenefits";

export const metadata = {
  title: "Free Career Counselling & Profile Assessment | University Yatra",
  description:
    "Get honest, personalised study abroad guidance built around your academics, budget and long-term career goals. 100% free assessment with no obligation.",
  keywords: [
    "career counselling",
    "profile assessment",
    "study abroad guidance",
    "free consultation",
    "university counselling",
    "course selection",
  ],
};

export default function CareerCounsellingPage() {
  return (
    <main className="w-full">
      <Navbar />
      {/*1 Hero Section */}
      <CounsellingHero />

      {/*2 Guidance Trust Section */}
      <GuidanceTrust />

      {/*2 Career Counselling Benefits Section */}
      <CareerCounsellingBenefits />

      {/*3 Why University Yatra */}
      <WhyUniversityYatra />

      {/*4 Profile Review */}
      <ProfileReview />

      {/* How It Works */}
      <HowItWorks />

      {/* What You Get */}
      <WhatYouGet />

      {/* Who It's For */}
      <WhoItsFor />

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* FAQ Section */}
      <CounsellingFAQ />

      {/* Assessment Form CTA */}
      <AssessmentForm />
      
      <UniversityFooter />
    </main>
  );
}

import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import EducationLoanHero from "@/components/EducationLoan/EducationLoanHero";


export const metadata = {
  title: "Education Loans | University Yatra",
  description:
    "Explore education loans up to ₹1.5 Crore+ with University Yatra. Get guidance from 30+ trusted banks and lenders for studying abroad, loan eligibility, applications, and disbursal support.",
  keywords:
    "education loans, study abroad education loan, overseas education loan, student loans India, education loan eligibility, education loan for abroad studies, university education loan, education loan without collateral, education loan counselling, student financial assistance, University Yatra education loans",
  openGraph: {
    title: "Education Loans for Studying Abroad | University Yatra",
    description:
      "Finance your global education with University Yatra. Explore education loan options up to ₹1.5 Crore+ from 30+ trusted banks and lenders, with expert guidance from eligibility to disbursal.",
    type: "website",
  },
};


export default function EducationLoansPage() {
  return (
    <>
      <Navbar active="EducationLoans" />
      <main>
         <EducationLoanHero />
      </main>
      <UniversityFooter />
    </>
  );
}



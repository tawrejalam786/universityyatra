
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/UniversityFooter";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions";

export const metadata = {
  title: "Terms & Conditions | University Yatra",
  description:
    "Read University Yatra's Terms and Conditions covering counselling services, payments, refunds, privacy, user responsibilities and legal policies.",
  alternates: {
    canonical: "https://universityyatra.com/terms-and-conditions",
  },
};

export default function Page() {
  return <>
            <Navbar active="TermsAndConditions" />
            <main> 
                <TermsAndConditions />
            </main> 
            <Footer />
        </>;
}

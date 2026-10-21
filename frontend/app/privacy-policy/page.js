
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/UniversityFooter";

export const metadata = {
  title: "Privacy Policy | University Yatra",
  description:
    "Read University Yatra's Privacy Policy to understand how we collect, use, store, share and protect personal information.",
  alternates: {
    canonical: "https://universityyatra.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Page() {
  return <>
            <Navbar active="PrivacyPolicy" />
            <main> 
                <PrivacyPolicy />
            </main> 
            <Footer />
        </>;
}

import CancellationRefundPolicy from "@/components/CancellationRefund/CancellationRefundPolicy";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/UniversityFooter";

export const metadata = {
  title: "Cancellation & Refund Policy | University Yatra",
  description:
    "Read University Yatra's Cancellation and Refund Policy for educational courses and programs, including payment terms, cancellations, refunds, course access, and technical support.",
  alternates: {
    canonical: "https://universityyatra.com/cancellation-refund-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Page() {
  return <>
            <Navbar active="CancellationRefund" />
            <main> 
               <CancellationRefundPolicy />
            </main> 
            <Footer />
        </>;
}
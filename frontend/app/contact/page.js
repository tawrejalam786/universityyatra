import SourcePage from "@/components/common/SourcePage";
import { getSourcePage } from "@/lib/sourcePages";

export const metadata = { title: "Contact Us | University Yatra", description: "Let's Get in Touch with University Yatra." };

export default function ContactPage() {
  return <SourcePage slug="contact-us" page={getSourcePage("contact-us")} />;
}

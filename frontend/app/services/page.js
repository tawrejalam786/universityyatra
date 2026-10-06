import SourcePage from "@/components/common/SourcePage";
import { getSourcePage } from "@/lib/sourcePages";

export const metadata = { title: "Student Services | University Yatra", description: "Comprehensive guidance for international students." };

export default function ServicesPage() {
  return <SourcePage slug="study-abroad" page={getSourcePage("study-abroad")} />;
}

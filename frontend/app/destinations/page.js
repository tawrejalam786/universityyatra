import SourcePage from "@/components/common/SourcePage";
import { getSourcePage } from "@/lib/sourcePages";

export const metadata = { title: "Study Destinations | University Yatra", description: "Discover study destinations and guidance for your international education journey." };

export default function DestinationsPage() {
  return <SourcePage slug="study-abroad" page={getSourcePage("study-abroad")} />;
}

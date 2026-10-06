import SourcePage from "@/components/common/SourcePage";
import { getSourcePage } from "@/lib/sourcePages";

export const metadata = { title: "Study Programs | University Yatra", description: "Explore study programs across top universities worldwide." };

export default function ProgramsPage() {
  return <SourcePage slug="study-abroad" page={getSourcePage("study-abroad")} />;
}

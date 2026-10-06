import { notFound } from "next/navigation";
import SourcePage from "@/components/common/SourcePage";
import { getSourcePage, sourcePages } from "@/lib/sourcePages";

export function generateStaticParams() {
  return Object.keys(sourcePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getSourcePage(slug);
  if (!page) return { title: "Page not found | University Yatra" };
  return { title: `${page.title} | University Yatra`, description: page.description, alternates: { canonical: `https://universityyatra.com/${slug}/` }, openGraph: { title: `${page.title} | University Yatra`, description: page.description, type: "website" } };
}

export default async function SourceRoute({ params }) {
  const { slug } = await params;
  const page = getSourcePage(slug);
  if (!page) notFound();
  return <SourcePage slug={slug} page={page} />;
}

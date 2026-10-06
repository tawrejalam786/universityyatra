import Link from "next/link";

export default function NotFound() {
  return <div className="blog-container py-40 text-center"><p className="blog-eyebrow">Guide not found</p><h1 className="mt-4 text-4xl font-bold text-brand-navy">Let’s find another path.</h1><p className="mt-5">This article is not available. Explore the other student guides.</p><Link href="/blog" className="blog-button mt-7">Back to the blog</Link></div>;
}

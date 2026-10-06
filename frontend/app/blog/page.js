import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { posts, siteUrl, articleUrl, jsonLd } from "@/lib/blog";

const title = "Student Guides & Education Blog | University Yatra";
const description = "Explore University Yatra guides to online degrees, learning formats and studying while working. Find clarity for your next education decision.";
export const metadata = { title, description, alternates: { canonical: `${siteUrl}/blog` }, openGraph: { title, description, url: `${siteUrl}/blog`, type: "website", images: [{ url: `${siteUrl}${posts[0].image}`, alt: posts[0].alt }] }, twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}${posts[0].image}`] } };

export default function BlogPage() {
  const featured = posts[0];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "Blog", name: "University Yatra Student Guides", url: `${siteUrl}/blog`, description, blogPost: posts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: articleUrl(post) })) }) }} />
      <section className="border-b border-slate-200 bg-[#edf6f5] pb-12 pt-32 sm:pb-16 sm:pt-36">
        <div className="blog-container">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-slate-600"><Link href="/" className="hover:underline">Home</Link><span className="mx-3" aria-hidden="true">/</span><span aria-current="page">Blog</span></nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div><p className="blog-eyebrow">University Yatra · Student journal</p><h1 className="mt-5 max-w-xl text-[40px] font-bold leading-[1.12] tracking-[-0.04em] text-brand-navy sm:text-6xl">Big decisions.<br /><span className="text-brand-teal-ink">Clearer direction.</span></h1><p className="mt-6 max-w-md text-base leading-8 text-slate-600">Explore learning options, understand your next step, and make space for what comes next.</p><a href="#all-guides" className="blog-button mt-7">Explore the guides <ArrowDown size={17} aria-hidden="true" /></a></div>
            <Link href={`/blog/${featured.slug}`} className="blog-card relative isolate block overflow-hidden rounded-3xl bg-brand-navy text-white">
              <div className="relative aspect-[4/3]"><Image src={featured.image} alt={featured.alt} fill priority sizes="(min-width: 1024px) 580px, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#00274f] via-[#00274f]/20 to-transparent" /></div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-navy">Featured guide</span><h2 className="mt-4 max-w-md text-2xl font-bold leading-tight sm:text-3xl">{featured.title}</h2><span className="mt-4 flex items-center gap-2 text-sm font-semibold">Find your fit <ArrowUpRight size={18} aria-hidden="true" /></span></div>
            </Link>
          </div>
        </div>
      </section>
      <div className="blog-container"><BlogExplorer posts={posts} /><section className="mb-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-brand-teal/20 bg-[#eaf5f3] p-7 sm:p-10 md:flex-row md:items-center"><div><p className="blog-eyebrow">Your next chapter</p><h2 className="mt-3 text-2xl font-bold text-brand-navy">Turn your questions into a plan.</h2><p className="mt-3 text-sm leading-7">Explore your education options with University Yatra.</p></div><a href="https://universityyatra.com/contact-us/" className="blog-button shrink-0">Speak with our team <ArrowUpRight size={18} aria-hidden="true" /></a></section></div>
    </>
  );
}

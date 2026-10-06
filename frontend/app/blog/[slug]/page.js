import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/blog/BlogCard";
import { posts, getPost, siteUrl, articleUrl, readingMinutes, jsonLd } from "@/lib/blog";

export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Guide not found | University Yatra", robots: { index: false, follow: false } };
  const title = `${post.title} | University Yatra`;
  return { title, description: post.description, alternates: { canonical: articleUrl(post) }, openGraph: { title, description: post.description, url: articleUrl(post), type: "article", images: [{ url: `${siteUrl}${post.image}`, alt: post.alt }] }, twitter: { card: "summary_large_image", title, description: post.description, images: [`${siteUrl}${post.image}`] } };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== slug).slice(0, 2);
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "BlogPosting", headline: post.title, description: post.description, image: `${siteUrl}${post.image}`, mainEntityOfPage: articleUrl(post), author: { "@type": "Organization", name: "University Yatra", url: siteUrl }, publisher: { "@type": "Organization", name: "University Yatra", url: siteUrl }, isBasedOn: `${siteUrl}/study-in-india/`, articleSection: post.category }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` }, { "@type": "ListItem", position: 3, name: post.title, item: articleUrl(post) }] }] };
  return (
    <div className="blog-container pb-16 pt-32 sm:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap gap-2 text-xs leading-6 text-slate-600"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{post.title}</span></nav>
      <article>
        <header className="mx-auto max-w-3xl text-center"><p className="blog-eyebrow">{post.category}</p><h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-[-0.035em] text-brand-navy sm:text-5xl lg:text-6xl">{post.title}</h1><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">{post.description}</p><p className="mt-5 text-sm text-slate-500">University Yatra <span className="mx-2" aria-hidden="true">·</span> {readingMinutes(post)} min read</p></header>
        <div className="relative mx-auto my-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl bg-[#edf6f5]"><Image src={post.image} alt={post.alt} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" /></div>
        <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-28"><nav aria-label="On this page"><h2 className="text-sm font-bold text-brand-navy">In this guide</h2><ol className="mt-4 space-y-3">{post.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="flex gap-3 text-sm leading-6 hover:text-brand-teal-ink"><span className="text-brand-teal-ink">0{index + 1}</span>{section.title}</a></li>)}</ol></nav></aside>
          <div className="blog-content min-w-0"><div className="space-y-10">{post.sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2><p>{section.text}</p>{section.bullets && <ul className="mt-5 space-y-2 border-l-2 border-brand-teal pl-6">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}</div><div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7">Adapted from University Yatra’s <Link href="/study-in-india" className="font-semibold text-brand-teal-ink underline underline-offset-4">Study in India guide</Link>. Program formats and availability vary by university.</div><div className="mt-8 rounded-2xl bg-[#eaf5f3] p-7"><h2>Find your next step</h2><p>Connect with our counselling team for guidance on your program options.</p><a href="https://universityyatra.com/contact-us/" className="blog-button mt-5">Speak with our team →</a></div></div>
        </div>
      </article>
      <section className="mt-16 border-t border-slate-200 pt-12" aria-labelledby="related-heading"><div className="mb-7 flex flex-wrap items-center justify-between gap-4"><h2 id="related-heading" className="text-3xl font-bold tracking-tight text-brand-navy">Keep exploring</h2><Link href="/blog" className="text-sm font-bold text-brand-teal-ink">All guides →</Link></div><div className="grid gap-6 sm:grid-cols-2">{related.map((item) => <BlogCard key={item.slug} post={item} />)}</div></section>
    </div>
  );
}

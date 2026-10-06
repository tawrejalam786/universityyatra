import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { readingMinutes } from "@/lib/blog";

export default function BlogCard({ post }) {
  return (
    <article className="blog-card overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <Link href={`/blog/${post.slug}`} className="group block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#eaf4f3]">
          <Image src={post.image} alt={post.alt} fill sizes="(min-width: 1024px) 390px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-teal-ink">{post.category} <span className="mx-2 text-slate-300">/</span> <span className="font-medium normal-case tracking-normal text-slate-500">{readingMinutes(post)} min read</span></p>
          <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-brand-navy group-hover:text-brand-teal-ink">{post.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
          <span className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-brand-navy">Read the guide <ArrowUpRight size={20} aria-hidden="true" /></span>
        </div>
      </Link>
    </article>
  );
}

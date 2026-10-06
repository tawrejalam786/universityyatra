"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import BlogCard from "./BlogCard";

export default function BlogExplorer({ posts }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All guides");
  const categories = ["All guides", ...new Set(posts.map((post) => post.category))];
  const filtered = posts.filter((post) => (category === "All guides" || post.category === category) && `${post.title} ${post.description} ${post.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <section id="all-guides" className="py-14 sm:py-20" aria-labelledby="guides-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="blog-eyebrow">The reading room</p><h2 id="guides-heading" className="mt-3 text-3xl font-bold tracking-tight text-brand-navy">A little clarity. A confident next step.</h2></div>
        <div className="relative w-full shrink-0 sm:w-72"><label htmlFor="blog-search" className="sr-only">Search guides</label><Search size={18} className="absolute left-4 top-4 text-slate-500" aria-hidden="true" /><input id="blog-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides…" className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-brand-teal-ink" /></div>
      </div>
      <div className="my-7 flex flex-wrap gap-2" aria-label="Filter by category">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy ${category === item ? "border-brand-navy bg-brand-navy text-white" : "border-slate-200 bg-white text-slate-600 hover:border-brand-teal"}`}>{item}</button>)}</div>
      <p className="mb-5 text-sm text-slate-500" role="status">{filtered.length} {filtered.length === 1 ? "guide" : "guides"}{query.trim() ? ` matching “${query.trim()}”` : " to explore"}</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      {filtered.length === 0 && <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center"><h3 className="text-xl font-bold text-brand-navy">No guides found</h3><p className="mt-2 text-slate-600">Try another topic or clear your filters.</p><button type="button" onClick={() => { setQuery(""); setCategory("All guides"); }} className="blog-button mt-5">Clear filters</button></div>}
    </section>
  );
}

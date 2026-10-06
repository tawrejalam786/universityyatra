import { posts, articleUrl, siteUrl } from "@/lib/blog";
import { sourcePages } from "@/lib/sourcePages";

export default function sitemap() {
  return ["", "/study-in-india", "/study-in-canada", "/blog", ...Object.keys(sourcePages).map((slug) => `/${slug}`)].map((path) => ({ url: `${siteUrl}${path}` })).concat(posts.map((post) => ({ url: articleUrl(post) })));
}

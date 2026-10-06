import { siteUrl } from "@/lib/blog";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml` };
}

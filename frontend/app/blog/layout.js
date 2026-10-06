import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import "./blog.css";

export default function BlogLayout({ children }) {
  return <><Navbar active="Blog" /><main id="blog-main" className="blog-shell">{children}</main><UniversityFooter contactHref="https://universityyatra.com/contact-us/" socialLinks={{ instagram: "https://www.instagram.com/universityyatra/" }} /></>;
}

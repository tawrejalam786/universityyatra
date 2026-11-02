const siteUrl = "https://universityyatra.com";

export default function sitemap() {
  const pages = [
    "",
    "/about-us",
    "/contact",
    "/career-counselling",
    "/education-loan",
    "/destinations",
    "/programs",
    "/services",
    "/study-in-india",
    "/study-in-canada",
    "/study-in-australia",
    "/study-in-usa",
    "/study-in-uk",
    "/study-in-ireland",
    "/study-in-germany",
    "/study-in-russia",
    "/study-in-uae",
    "/study-in-europe",
    "/study-in-new-zealand",
    "/study-in-new-japan",
    "/study-in-new-singapore",
    "/addmission-application",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cancellation-refund-policy",
  ];

  return pages.map((path) => ({ 
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === "" ? 1 : 0.8,
  }));
}

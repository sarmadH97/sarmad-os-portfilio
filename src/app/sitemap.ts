import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sarmadhussain.dev";
  const routes = [
    "",
    "/projects",
    "/experience",
    "/work-with-founders",
    "/founder-engineering",
    "/recommendations",
  ];

  return routes.map((route) => ({ url: `${baseUrl}${route}` }));
}

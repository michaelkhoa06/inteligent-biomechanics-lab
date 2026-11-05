import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.intelligentbiomechanicslab.net",
  // Preserve historical profile links without maintaining duplicate pages.
  redirects: Object.fromEntries(
    ["anshu", "azam", "chase", "curtis", "josiah", "maharshi", "noelia", "sewa", "ty", "yue", "yusuf"]
      .map((name) => [`/membersALT/${name}1`, `/members/${name}/`]),
  ),
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/membersALT/"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
});

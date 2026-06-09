import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://abelost.com",
  integrations: [sitemap()],
  trailingSlash: "always"
});

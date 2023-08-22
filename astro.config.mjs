import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  // Enable Custom Markdown options, plugins, etc.
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
      // Learn more about this configuration here:
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
    },
  },

  integrations: [tailwind(), vue()],
});

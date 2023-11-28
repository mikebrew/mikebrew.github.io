// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "mikebrew.github.io";
export const SITE_DESCRIPTION = "Personal notes";
export const SITE_URL = "https://mikebrew.github.io";
export const SITE_DEFAULT_OG_IMAGE = "/assets/og-image.png";

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Get Started": [
    "/docs/get-started/introduction",
    "/docs/get-started/installation",
  ],
  Tutorials: ["/docs/tutorials/build-x"],
  Guides: ["/docs/guides/migrate-from-z"],
  Cheatsheets: [
    "/docs/cheatsheets/drupal",
    "/docs/cheatsheets/git",
    "/docs/cheatsheets/markdown",
  ],
};

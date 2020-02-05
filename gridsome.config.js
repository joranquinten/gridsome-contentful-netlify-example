// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const contentful = require("./plugin.confentful");

module.exports = {
  chainWebpack: config => config.mode("development"),
  siteName: "",
  siteDescription: "",
  siteUrl: "",
  icon: {
    favicon: "./src/assets/android-chrome-192x192.png", // 96x96
    touchicon: "./src/assets/android-chrome-512x512.png" // 180x180
  },
  plugins: [contentful],
  templates: {
    ContentfulGallery: "/gallery/:slug",
    ContentfulPost: "/blog/:slug",
    ContentfulPage: "/:slug"
  }
};

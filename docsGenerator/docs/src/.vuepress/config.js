const { description } = require("../../package");
const default_sidebar_config = require("./theme/configs/default_sidebar_config");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "ar.io Docs",
  base: "/docs/",
  dest: "../../docs",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],

    [
      "script",
      {
        src: "https://plausible.io/js/script.js",
        defer: true,
        "data-domain": "ar.io/docs",
      },
    ],
    ["link", { rel: "stylesheet", href: "/assets/css/theme.css" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    searchPlaceholder: "Search",
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    initialOpenGroupIndex: -1,
    //logo path will need to be adjusted for deployment
    logo: "/docs/images/logo-party.gif",
    // nav: nav_config,
    sidebar: {
      // "/docs/cli/": CLI_sidebar_config,
      "/": default_sidebar_config,
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "vuepress-plugin-code-copy",
  ],
};

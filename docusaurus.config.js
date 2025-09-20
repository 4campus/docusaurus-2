// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "4campus",
  // tagline: 'Reach. Connect. Transform.',
  url: "https://4campus.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "4campus",
  projectName: "docusaurus-2",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
    metadata: [
      { name: "og:image", content: "/img/social-preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/img/social-preview.png" },
      { name: "og:title", content: "4Campus" },
      { name: "og:description", content: "Reach, Connect, Transform" },
    ],
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "",
      logo: {
        alt: "4campus",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "Questions?",
          href: "/docs/questions",
          position: "left",
          className: "navbar__item--questions",
        },
        {
          label: "Voices",
          href: "/voices#latest-recordings",
          position: "left",
        },
        {
          label: "Documentary",
          href: "/documentary",
          position: "left",
        },
        {
          href: "https://www.bonfire.com/4campus/",
          label: "Store",
          position: "left",
        },
        {
          label: "About",
          href: "/give",
          position: "left",
          className: "navbar__item--about-desktop",
        },
        {
          label: "About",
          href: "/give",
          position: "left",
          className: "navbar__item--about-mobile",
        },
        {
          label: "Give",
          href: "https://www.paypal.com/donate/?hosted_button_id=53SQPWUPYSYQQ",
          position: "right",
          className: "navbar__item--give-desktop",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Resources",
          items: [
            {
              label: "AncientPaths",
              to: "/docs/AncientPaths",
            },
            {
              label: "My Son Rising",
              to: "/my-son-rising",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Tb478Cud",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Contact",
              href: "mailto:mail.4campus@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} | 4campus.net`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    scripts: [
      {
        src: "https://api.reftagger.com/v2/RefTagger.js",
        async: true,
      },
    ],
  },
};

module.exports = config;

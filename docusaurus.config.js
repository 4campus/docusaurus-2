// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '4campus',
  tagline: 'Reach. Connect. Transform.',
  url: 'https://4campus.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: '4campus',
  projectName: 'docusaurus-2',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'og:image', content: '/img/social-preview.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/img/social-preview.png' },
      { name: 'og:title', content: '4Campus' },
      { name: 'og:description', content: 'Reach, Connect, Transform' }
    ],
    colorMode: {
      defaultMode: 'light',  // Set light mode as default
      disableSwitch: false,  // Allow users to toggle themes
      respectPrefersColorScheme: false,  // Ignore system preferences
    },
    navbar: {
      title: '',
      logo: {
        alt: '4campus',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Guidebook',
          position: 'left',
          label: 'Guidebook',
        },
        {
          type: 'doc',
          docId: 'WAR WITHIN',
          position: 'left',
          label: 'WAR WITHIN',
        },
        {
          to: '/my-son-rising',
          label: 'My Son Rising',
          position: 'left',
        },
        {
          label: 'Donate',
          href: '/give',
          position: 'right',
          className: 'navbar__item--donate',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guidebook',
              to: '/docs/guidebook',
            },
            {
              label: 'WAR WITHIN',
              to: '/docs/WAR WITHIN',
            },
            {
              label: 'My Son Rising',
              to: '/my-son-rising',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/xk6qxyZSkx',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Donate',
              to: '/give/',
            },
            {
              label: 'Contact',
              href: 'mailto:mail.4campus@gmail.com',
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
  },

  // Correctly add the Reftagger script using the `scripts` field
  scripts: [
    {
      src: 'https://api.reftagger.com/v2/RefTagger.js',
      async: true,
    },
    {
      src: 'https://api.reftagger.com/v2/RefTagger.js', // Reference the external script as src
      type: 'text/javascript',
      innerHTML: `
        var refTagger = {
          settings: {
            bibleVersion: 'ESV'
          }
        };

        (function(d, t) {
          var n=d.querySelector('[nonce]');
          refTagger.settings.nonce = n && (n.nonce || n.getAttribute('nonce'));
          var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
          g.src = 'https://api.reftagger.com/v2/RefTagger.js';
          g.nonce = refTagger.settings.nonce;
          s.parentNode.insertBefore(g, s);
        }(document, 'script'));
      `,
    },
  ],
};

module.exports = config;

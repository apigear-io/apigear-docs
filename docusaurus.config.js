// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ApiGear for API driven software integration',
  tagline: 'Open source tooling for API driven code generation based on ObjectAPI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.apigear.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apigear-io', // Usually your GitHub org/user name.
  projectName: 'apigear-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/apigear-io/apigear-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // gtag: {
        //   trackingID: 'G-D2X4N3X4K7',
        //   anonymizeIP: true,
        // },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ApiGear',
        logo: {
          alt: 'ApiGear Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://apigear.io/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            label: 'Slack Discussions',
            href: 'https://join.slack.com/t/apigear/shared_invite/zt-1s28cyfme-ohvlpZd3nUxHN0uRIFeKXw',
            position: 'right',
          },
          {
            label: 'Github Discussions',
            href: 'https://github.com/orgs/apigear-io/discussions',
            position: 'right',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/apigear-io/apigear-docs',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/start/first_steps',
              },
              {
                label: 'Installation',
                to: '/docs/start/install',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack Discussions',
                href: 'https://join.slack.com/t/apigear/shared_invite/zt-1s28cyfme-ohvlpZd3nUxHN0uRIFeKXw',
              },
              {
                label: 'Github Discussions',
                href: 'https://github.com/orgs/apigear-io/discussions',
              },
              {
                label: 'Help',
                href: '/docs/community/help',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.apigear.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/apigear-io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/apigear',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://www.epicgames.com/site/en-US/privacypolicy',
              },
              {
                label: 'Terms of Service',
                href: 'https://www.apigear.io/imprint',
              },
              {
                label: 'Imprint',
                href: 'https://www.apigear.io/imprint',
              },
              {
                label: 'Cookie Policy',
                href: 'https://www.apigear.io/imprint',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ApiGear by Epic Games Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;

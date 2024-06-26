// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The future of API driven workflows',
  tagline: 'Design your APIs and generate your SDKs with ease.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://apigear.io',
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

  // need to add path to template static files
  staticDirectories: 
  [
    'static',
    'template-docs/template-unreal/docs/static',
    'template-docs/template-cpp14/docs/static',
    'template-docs/template-qt6/docs/static'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
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
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-unreal',
        path: 'template-docs/template-unreal/docs/docs',
        routeBasePath: 'template-unreal/docs',
        sidebarPath: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-cpp14',
        path: 'template-docs/template-cpp14/docs/docs',
        routeBasePath: 'template-cpp14/docs',
        sidebarPath: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-qt6',
        path: 'template-docs/template-qt6/docs/docs',
        routeBasePath: 'template-qt6/docs',
        sidebarPath: undefined,
      },
    ],
    [
      require.resolve('docusaurus-lunr-search'),
      {
        highlightResult: true
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ApiGear',
        logo: {
          alt: 'ApiGear Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Topics',
            position: 'left',
            items: [
              {type: 'doc', docId: 'intro', label: 'ApiGear Core'},
              {type: 'doc', docsPluginId: 'template-cpp14', docId: 'intro', label: 'Template C++14'},
              {type: 'doc', docsPluginId: 'template-unreal', docId: 'intro', label: 'Template Unreal Engine'},
              {type: 'doc', docsPluginId: 'template-qt6', docId: 'intro', label: 'Template Qt6'},
            ],
          },
          {
            to: 'blog',
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
                to: 'blog',
                label: 'Blog',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

};

module.exports = config;

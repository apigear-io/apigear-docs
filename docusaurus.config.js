// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ApiGear',
  tagline: 'Generate native SDKs from one API definition — for C++, Qt, Unreal, Python, Rust & Java, with simulation and monitoring built in.',
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

  // Site-wide structured data (JSON-LD) for entity/Knowledge Graph signals.
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ApiGear',
        url: 'https://apigear.io',
        logo: 'https://apigear.io/img/icon.png',
        sameAs: ['https://github.com/apigear-io'],
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ApiGear Documentation',
        url: 'https://apigear.io',
      }),
    },
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },
  themes: ['@docusaurus/theme-mermaid'],

  // need to add path to template static files
  staticDirectories: 
  [
    'static',
    'template-docs/template-unreal/docs/static',
    'template-docs/template-cpp17/docs/static',
    'template-docs/template-cpp14/docs/static',
    'template-docs/template-qt6/docs/static',
    'template-docs/template-python/docs/static',
    'template-docs/template-java/docs/static',
    'template-docs/template-rust/docs/static'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: false,
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: ['plans/**', '**/_*.md', '**/_*.mdx'],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/apigear-io/apigear-docs/edit/main/',
          showLastUpdateTime: false,
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
        editUrl: ({docPath}) =>
          `https://github.com/apigear-io/template-unreal/edit/main/docs/docs/${docPath}`,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-cpp17',
        path: 'template-docs/template-cpp17/docs/docs',
        routeBasePath: 'template-cpp17/docs',
        sidebarPath: undefined,
        editUrl: ({docPath}) =>
          `https://github.com/apigear-io/template-cpp17/edit/main/docs/docs/${docPath}`,
        showLastUpdateTime: false,
      },
     ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-cpp14',
        path: 'template-docs/template-cpp14/docs/docs',
        routeBasePath: 'template-cpp14/docs',
        sidebarPath: undefined,
        editUrl: ({ docPath }) =>
            `https://github.com/apigear-io/template-cpp14/edit/main/docs/docs/${docPath}`,
        showLastUpdateTime: false,
      },
     ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-qt6',
        path: 'template-docs/template-qt6/docs/docs',
        routeBasePath: 'template-qt6/docs',
        sidebarPath: undefined,
        editUrl: ({docPath}) =>
          `https://github.com/apigear-io/template-qtcpp/edit/main/docs/docs/${docPath}`,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-python',
        path: 'template-docs/template-python/docs/docs',
        routeBasePath: 'template-python/docs',
        sidebarPath: undefined,
        editUrl: ({docPath}) =>
          `https://github.com/apigear-io/template-python/edit/main/docs/docs/${docPath}`,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-java',
        path: 'template-docs/template-java/docs/docs',
        routeBasePath: 'template-java/docs',
        sidebarPath: undefined,
        editUrl: ({docPath}) =>
          `https://github.com/apigear-io/template-java/edit/main/docs/docs/${docPath}`,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'template-rust',
        path: 'template-docs/template-rust/docs/docs',
        routeBasePath: 'template-rust/docs',
        sidebarPath: undefined,
        editUrl: ({docPath}) =>
          `https://github.com/apigear-io/template-rust/edit/main/docs/docs/${docPath}`,
        showLastUpdateTime: false,
      },
    ],
    [
      require.resolve('docusaurus-lunr-search'),
      {
        highlightResult: true
      }
    ],
    [
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        content: {
          enableMarkdownFiles: true,
          enableLlmsFullTxt: true,
          includeDocs: true,
          includeBlog: true,
          includePages: false,
          excludeRoutes: ['/__docusaurus/**'],
        },
        siteTitle: 'ApiGear Documentation',
        siteDescription: 'ApiGear generates native SDKs from stateful API definitions. Define interfaces once using ObjectAPI, then generate production-ready code for C++, Qt, Unreal Engine, or Python.',
        depth: 2,
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/docs/advanced/protocols/objectlink/intro', to: '/docs/protocols/objectlink/intro' },
          { from: '/docs/advanced/objectlink/intro',           to: '/docs/protocols/objectlink/intro' },
          { from: '/docs/advanced/maker/tutorial',             to: '/docs/sdk/maker/tutorial' },
          { from: '/docs/advanced/maker/template',             to: '/docs/sdk/maker/template' },
          { from: '/docs/advanced/simulation/intro',           to: '/docs/scripting/intro' },
          { from: '/docs/advanced/simulation/scenario',        to: '/docs/scripting/backends/scenario' },
          { from: '/docs/advanced/simulation/examples',        to: '/docs/scripting/backends/examples' },
          { from: '/docs/advanced/stimulation/intro',          to: '/docs/scripting/intro' },
          { from: '/docs/sdk/python-sdk',                      to: '/template-python/docs/intro' },
          { from: '/docs/sdk/cpp14-sdk',                       to: '/template-cpp14/docs/intro' },
          { from: '/docs/sdk/typescript-sdk',                  to: '/docs/sdk/intro' },
          { from: '/docs/tools/studio/intro',                  to: '/docs/studio/intro' },
          { from: '/docs/tools/studio/project',                to: '/docs/studio/project' },
          { from: '/docs/tools/cli/intro',                     to: '/docs/cli/intro' },
          { from: '/docs/tools/cli/simulate',                  to: '/docs/cli/simulate' },
          { from: '/docs/tools/cli/template',                  to: '/docs/cli/template' },
          { from: '/docs/tools/cli/olink',                     to: '/docs/cli/olink' },
          { from: '/docs/quick-start',                         to: '/docs/guide/quick-start' },
          { from: '/docs/guide/intro',                         to: '/docs/guide/quick-start' },
          { from: '/docs/community/help',                      to: '/help' },

          // --- Reclaim orphaned URLs from the docs restructure (fixes GSC "Not found (404)") ---
          // maker/* and advanced/maker/* -> sdk/maker/*
          { from: '/docs/maker/intro',                         to: '/docs/sdk/maker/intro' },
          { from: '/docs/maker/filters',                       to: '/docs/sdk/maker/filters' },
          { from: '/docs/maker/rules',                         to: '/docs/sdk/maker/rules' },
          { from: '/docs/maker/symbols',                       to: '/docs/sdk/maker/symbols' },
          { from: '/docs/maker/template',                      to: '/docs/sdk/maker/template' },
          { from: '/docs/maker/tutorial',                      to: '/docs/sdk/maker/tutorial' },
          { from: '/docs/advanced/maker/intro',                to: '/docs/sdk/maker/intro' },
          { from: '/docs/advanced/maker/filters',              to: '/docs/sdk/maker/filters' },
          { from: '/docs/advanced/maker/rules',                to: '/docs/sdk/maker/rules' },
          { from: '/docs/advanced/maker/symbols',              to: '/docs/sdk/maker/symbols' },

          // objectlink/* and advanced/(protocols/)objectlink/* -> protocols/objectlink/*
          { from: '/docs/objectlink/cases',                          to: '/docs/protocols/objectlink/cases' },
          { from: '/docs/objectlink/errors',                         to: '/docs/protocols/objectlink/errors' },
          { from: '/docs/objectlink/lifecycle',                      to: '/docs/protocols/objectlink/lifecycle' },
          { from: '/docs/objectlink/methods',                        to: '/docs/protocols/objectlink/methods' },
          { from: '/docs/objectlink/properties',                     to: '/docs/protocols/objectlink/properties' },
          { from: '/docs/objectlink/signals',                        to: '/docs/protocols/objectlink/signals' },
          { from: '/docs/advanced/objectlink/cases',                 to: '/docs/protocols/objectlink/cases' },
          { from: '/docs/advanced/objectlink/errors',                to: '/docs/protocols/objectlink/errors' },
          { from: '/docs/advanced/objectlink/lifecycle',             to: '/docs/protocols/objectlink/lifecycle' },
          { from: '/docs/advanced/objectlink/methods',               to: '/docs/protocols/objectlink/methods' },
          { from: '/docs/advanced/objectlink/properties',            to: '/docs/protocols/objectlink/properties' },
          { from: '/docs/advanced/objectlink/signals',               to: '/docs/protocols/objectlink/signals' },
          { from: '/docs/advanced/protocols/objectlink/cases',       to: '/docs/protocols/objectlink/cases' },
          { from: '/docs/advanced/protocols/objectlink/errors',      to: '/docs/protocols/objectlink/errors' },
          { from: '/docs/advanced/protocols/objectlink/lifecycle',   to: '/docs/protocols/objectlink/lifecycle' },
          { from: '/docs/advanced/protocols/objectlink/methods',     to: '/docs/protocols/objectlink/methods' },
          { from: '/docs/advanced/protocols/objectlink/properties',  to: '/docs/protocols/objectlink/properties' },
          { from: '/docs/advanced/protocols/objectlink/signals',     to: '/docs/protocols/objectlink/signals' },

          // advanced/objectapi/* -> objectapi/* (and mapping pages -> protocols/*)
          { from: '/docs/advanced/objectapi/intro',            to: '/docs/objectapi/intro' },
          { from: '/docs/advanced/objectapi/core',             to: '/docs/objectapi/core' },
          { from: '/docs/advanced/objectapi/advanced',         to: '/docs/objectapi/advanced' },
          { from: '/docs/advanced/objectapi/idl',              to: '/docs/objectapi/idl' },
          { from: '/docs/advanced/objectapi/modules',          to: '/docs/objectapi/modules' },
          { from: '/docs/advanced/objectapi/examples',         to: '/docs/objectapi/examples' },
          { from: '/docs/advanced/objectapi/mapping',          to: '/docs/protocols/mapping' },
          { from: '/docs/advanced/objectapi/mapping_http',     to: '/docs/protocols/http/mapping_http' },
          { from: '/docs/objectapi/mapping',                   to: '/docs/protocols/mapping' },
          { from: '/docs/objectapi/mapping_http',              to: '/docs/protocols/http/mapping_http' },
          { from: '/docs/advanced/protocols/mapping',          to: '/docs/protocols/mapping' },
          { from: '/docs/advanced/protocols/http/mapping_http', to: '/docs/protocols/http/mapping_http' },

          // advanced/monitor/* -> monitor/*
          { from: '/docs/advanced/monitor/intro',              to: '/docs/monitor/intro' },
          { from: '/docs/advanced/monitor/protocol',           to: '/docs/monitor/protocol' },
          { from: '/docs/monitor',                             to: '/docs/monitor/intro' },
          { from: '/docs/monitor/protocols',                   to: '/docs/monitor/protocol' },

          // simulation/* renamed to scripting/backends/* ; stimulation/* -> scripting/clients/*
          { from: '/docs/simulation/intro',                    to: '/docs/scripting/backends/intro' },
          { from: '/docs/simulation/api',                      to: '/docs/scripting/backends/api' },
          { from: '/docs/simulation/examples',                 to: '/docs/scripting/backends/examples' },
          { from: '/docs/simulation/protocols',                to: '/docs/scripting/backends/protocols' },
          { from: '/docs/simulation/scenario',                 to: '/docs/scripting/backends/scenario' },
          { from: '/docs/simulation/solution',                 to: '/docs/scripting/backends/solution' },
          { from: '/docs/advanced/simulation/api',             to: '/docs/scripting/backends/api' },
          { from: '/docs/advanced/simulation/protocols',       to: '/docs/scripting/backends/protocols' },
          { from: '/docs/advanced/simulation/solution',        to: '/docs/scripting/backends/solution' },
          { from: '/docs/stimulation/intro',                   to: '/docs/scripting/clients/intro' },

          // tools/cli/* -> cli/* ; tools/studio/* -> studio/*
          { from: '/docs/tools/cli/generate',                  to: '/docs/cli/generate' },
          { from: '/docs/tools/cli/monitor',                   to: '/docs/cli/monitor' },
          { from: '/docs/tools/cli/project',                   to: '/docs/cli/project' },
          { from: '/docs/tools/studio/quickstart',             to: '/docs/studio/quickstart' },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/icon.png',
      metadata: [
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'ApiGear Documentation' },
        { name: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
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
            type: 'doc',
            docId: 'intro',
            label: 'Docs'
          },
          {
            type: 'dropdown',
            label: 'Templates',
            position: 'left',
            items: [
              {type: 'doc', docsPluginId: 'template-cpp17', docId: 'intro', label: 'Template C++17'},
              {type: 'doc', docsPluginId: 'template-cpp14', docId: 'intro', label: 'Template C++14 (Maintenance)'},
              {type: 'doc', docsPluginId: 'template-unreal', docId: 'intro', label: 'Template Unreal Engine'},
              {type: 'doc', docsPluginId: 'template-qt6', docId: 'intro', label: 'Template Qt6'},
              {type: 'doc', docsPluginId: 'template-python', docId: 'intro', label: 'Template Python'},
              {type: 'doc', docsPluginId: 'template-java', docId: 'intro', label: 'Template Java'},
              {type: 'doc', docsPluginId: 'template-rust', docId: 'intro', label: 'Template Rust'},
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {to: 'blog', label: 'Blog'},
              {to: '/help', label: 'Help & Support'},
              {href: 'https://join.slack.com/t/apigear/shared_invite/zt-3mjx0cl9y-8zWn~ufJnzXCl5aaPjXEfg', label: 'Slack Community'},
            ],
          },
          {
            label: 'GitHub',
            href: 'https://github.com/apigear-io',
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
                to: '/docs',
              },
              {
                label: 'Quick Start',
                to: '/docs/guide/quick-start',
              },
              {
                label: 'Installation',
                to: '/docs/guide/quick-start#1-install-the-code-generator',
              },
              {
                label: 'Guide',
                to: '/docs/guide/quick-start',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'Help & Support',
                to: '/help',
              },
              {
                label: 'Slack Community',
                href: 'https://join.slack.com/t/apigear/shared_invite/zt-3mjx0cl9y-8zWn~ufJnzXCl5aaPjXEfg',
              },
            ],
          },
          {
            title: 'Downloads',
            items: [
              {
                label: 'CLI',
                href: 'https://github.com/apigear-io/cli/releases/latest',
              },
              {
                label: 'Desktop Studio',
                href: 'https://github.com/apigear-io/studio/releases/latest',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/apigear-io',
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
        additionalLanguages: ['java', 'cpp', 'csharp', 'kotlin', 'python', 'rust', 'go', 'ini', 'toml', 'gradle', 'groovy'],
      },
    }),

};

module.exports = config;

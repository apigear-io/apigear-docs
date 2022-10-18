const { description } = require('../../package')

module.exports = {
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ApiGear',
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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'apigear-io/apigear-docs',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Contribute',
    lastUpdated: true,
    docsBranch: 'main',
    nav: [
      {
        text: 'Learn',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Tutorials', link: '/tutorials/' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'ApiGear Studio', link: '/studio/' },
          { text: 'ApiGear CLI', link: '/cli/' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'ObjectAPI', link: '/objectapi/' },
          { text: 'ObjectLink', link: '/objectlink/' },
          { text: 'API Simulation', link: '/simulation/' },
          { text: 'API Monitoring', link: '/monitor/' },
          { text: 'SDK Templates', link: '/sdks/' },
          { text: 'Template Maker', link: '/maker/' },
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'Github', link: 'https://github.com/apigear-io' },
          { text: 'Discussion', link: 'https://github.com/orgs/apigear-io/discussions' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About', link: '/about/' },
          { text: 'ApiGear', link: 'https://apigear.io' }
        ]
      },
    ],
    sidebar: {
      '/studio/': [
        {
          title: 'ApiGear Studio',
          collapsable: false,
          children: ['', 'quickstart', 'project']
        }
      ],
      '/cli/': [
        {
          title: 'ApiGear CLI',
          collapsable: false,
          children: ['', 'generate', 'monitor', 'simulate', 'project', 'template']
        }
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['']
        }
      ],
      '/tutorials/': [
        {
          title: 'Tutorials',
          collapsable: false,
          children: ['', 'counter', 'calculator']
        }
      ],
      '/sdks/': [
        {
          title: 'SDK Templates',
          collapsable: false,
          children: ['', 'cpp14-sdk', 'qtcpp-sdk', 'python-sdk', 'go-sdk', 'typescript-sdk']
        }
      ],
      '/simulation/': [
        {
          title: 'Simulation',
          collapsable: false,
          children: ['', 'scenario', 'protocols', 'studio']
        }
      ],
      '/monitor/': [
        {
          title: 'Monitor',
          collapsable: false,
          children: ['', 'protocols']
        }
      ],
      '/maker/': [
        {
          title: 'Maker',
          collapsable: false,
          children: ['', 'tutorial', 'template', 'filters', 'symbols', 'rules']
        }
      ],
      '/objectapi/': [
        {
          title: 'ObjectAPI',
          collapsable: false,
          children: ['', 'core', 'modules', 'advanced', 'examples', 'idl', 'mapping', 'mapping_http']
        }
      ],
      '/objectlink/': [
        {
          title: 'ObjectLink',
          collapsable: false,
          children: ['', 'cases', 'lifecycle', 'methods', 'properties', 'signals', 'errors']
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-mermaidjs',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-166716652-4'
      }
    ]
  ]
}

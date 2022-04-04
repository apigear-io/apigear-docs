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
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'ObjectAPI',
        link: '/objectapi/'
      },
      {
        text: 'Tutorials',
        link: '/tutorials/'
      },
      {
        text: 'SDK Templates',
        link: '/sdks/'
      },
      {
        text: 'Simulation',
        link: '/simulation/'
      },
      {
        text: 'Monitor',
        link: '/monitor/'
      },
      {
        text: 'Maker',
        link: '/maker/'
      },
      {
        text: 'Mappings',
        link: '/mappings/'
      },
      {
        text: 'ApiGear',
        link: 'https://apigear.io'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'teams', 'projects', 'members', 'cases']
        }
      ],
      '/objectapi/': [
        {
          title: 'ObjectAPI',
          collapsable: false,
          children: ['', 'core', 'modules', 'advanced', 'examples']
        }
      ],
      '/tutorials/': [
        { 
          title: 'Tutorials', 
          collapsable: false, 
          children: ['', 'counter', 'calculator', 'devcycle'] 
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
          children: ['', 'tutorial', 'filters', 'symbols', 'rules']
        }
      ],
      '/mappings/': [
        {
          title: 'Protocol Mapping',
          collapsable: false,
          children: ['', 'http', 'wamp']
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
    'vuepress-plugin-mermaidjs'
  ]
}

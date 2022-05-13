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
        text: 'Learning',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Tutorials', link: '/tutorials/'},    
          { text: 'ObjectAPI Specification', link: '/objectapi/' },
          { text: 'ObjectAPI Mappings', link: '/mappings/' } ,       
          { text: 'ObjectLink Specification', link: '/objectlink/' }
        ]
      },
      { 
        text: 'Tooling', 
        items: [
          { text: 'Desktop Studio', link: '/studio/' },
          { text: 'Simulation', link: '/simulation/' },
          { text: 'Monitoring', link: '/monitor/' },
          { text: 'Maker', link: '/maker/' },
          { text: 'Templates', link: '/sdks/' },
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
          children: ['', 'tutorial', 'filters', 'symbols', 'rules']
        }
      ],
      '/mappings/': [
        {
          title: 'ObjectAPI Mappings',
          collapsable: false,
          children: ['', 'http', 'wamp']
        }
      ],
      '/objectapi/': [
        {
          title: 'ObjectAPI',
          collapsable: false,
          children: ['', 'core', 'modules', 'advanced', 'examples']
        }
      ],
      '/objectlink/': [
        { 
          title: 'ObjectLink', 
          collapsable: false, 
          children: ['', 'lifecycle', 'methods', 'properties', 'signals'] 
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

module.exports = {
  title: 'ApiGear',
  description: "Documentation for ApiGear.io",
  themeConfig: {
    nav: [      
    ],
    sidebar: [
      { 
        title: "Guide",
        path: '/guide/intro',
        collapsable: false,
        children: [
          '/guide/intro',
          '/guide/quickstart',
          '/guide/create',
          '/guide/how-it-works',
          '/guide/why-apigear',
          '/guide/workspace',
          '/guide/faq',
        ]
      }, 
      {
        title: "Reference",
        path: "/reference/idl",
        collapsable: false,
        children: [
          "/reference/idl",
          "/reference/qtcpp-gen",
        ]
      },
      {
        title: "Topics",
        path: "/topics/api-design",
        collapsable: false,
        children: [
          "/topics/api-design",
          "/topics/api-mock",
          "/topics/api-sdk",
        ]
      },
      {
        title: "Tutorials",
        path: "/tutorials/qtquick-plugin",
        collapsable: false,
        children: [
          "/tutorials/qtquick-plugin",
        ]
      }
   ],
  },
}
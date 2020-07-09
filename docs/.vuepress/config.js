module.exports = {
  title: "ApiGear",
  description: "Documentation for ApiGear.io",
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-166716652-4", // UA-00000000-0
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Tutorials", link: "/tutorials/" },
      { text: "UI", link: "/ui/" },
      { text: "Topics", link: "/topics/" },
      { text: "ObjectAPI", link: "/objectapi/" },
      { text: "SDKs", link: "/reference/" },
    ],
    sidebar: [
      {
        title: "Guide",
        path: "/guide/",
        children: [
          "/guide/quickstart",
          "/guide/intro",
          "/guide/why-apigear",
          "/guide/workspace",
          "/guide/create",
          "/guide/faq",
        ],
      },
      {
        title: "Tutorials",
        path: "/tutorials/",
        children: ["/tutorials/collaboration", "/tutorials/design-api", "/tutorials/objectapi-howto"],
      },
      {
        title: "User Interface",
        path: "/ui/",
        children: [],
      },
      {
        title: "Topics",
        path: "/topics/",
        children: ["/topics/api-design", "/topics/api-mock", "/topics/api-sdk"],
      },
      {
        title: "ObjectAPI",
        path: "/objectapi/",
        children: [
          "/objectapi/basics",
          "/objectapi/modules",
          "/objectapi/interfaces",
          "/objectapi/structures",
          "/objectapi/enums",
          "/objectapi/advanced",
          "/objectapi/examples",
        ],
      },
      {
        title: "SDK Reference",
        path: "/reference/",
        children: ["/reference/qtcpp-gen", "/reference/cpp14-gen"],
      },
      {
        title: "Account & Billing",
        path: "/accounts/",
        children: [
          "/accounts/profile",
          "/accounts/teams",
          "/accounts/members",
          "/accounts/team-projects",
          "/accounts/team-activity-log",
        ],
      },
    ],
  },
};

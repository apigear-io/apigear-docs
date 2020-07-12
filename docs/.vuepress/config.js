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
      { text: "ObjectAPI", link: "/objectapi/" },
      { text: "SDKs", link: "/sdk/" },
    ],
    sidebar: [
      {
        title: "Guide",
        path: "/guide/",
        children: ["/guide/quickstart", "/guide/how-it-works", "/guide/why-apigear", "/guide/create", "/guide/faq"],
      },
      {
        title: "Tutorials",
        path: "/tutorials/",
        children: ["/tutorials/counter", "/tutorials/temperature"],
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
        path: "/sdk/",
        children: ["/sdk/qtcpp-gen", "/sdk/cpp14-gen"],
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

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
    nav: [],
    sidebar: [
      {
        title: "Tutorials",
        path: "/tutorials/getting-started",
        collapsable: false,
        children: [
          "/tutorials/getting-started",
          "/tutorials/collaboration",
          "/tutorials/design-api",
          "/tutorials/objectapi-howto",
        ],
      },
      {
        title: "UI Overview",
        path: "/ui/overview",
        collapsable: false,
        children: ["/ui/overview"],
      },
      {
        title: "Topics",
        path: "/topics/api-design",
        collapsable: false,
        children: ["/topics/api-design", "/topics/api-mock", "/topics/api-sdk"],
      },
      {
        title: "Reference",
        path: "/reference/idl",
        collapsable: false,
        children: ["/reference/idl", "/reference/qtcpp-gen", "/reference/cpp14-gen"],
      },
      {
        title: "Accounts & Billing",
        path: "/accounts/profile",
        collapsable: false,
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

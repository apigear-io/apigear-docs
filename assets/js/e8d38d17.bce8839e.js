"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[1799],{13589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(74848),i=t(28453);const r={sidebar_position:2},a="Counter API Demo",c={id:"guide/counter",title:"Counter API Demo",description:"The example we are looking at is a simple coffee counter. Our product will track the daily coffee consumption of a user. For this the user interface requires an API to the backend to count coffees.",source:"@site/docs/guide/counter.md",sourceDirName:"guide",slug:"/guide/counter",permalink:"/docs/guide/counter",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/guide/counter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/guide/intro"},next:{title:"Calculator API Demo",permalink:"/docs/guide/calculator"}},s={},d=[{value:"Using the API",id:"using-the-api",level:2},{value:"Documentation",id:"documentation",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"counter-api-demo",children:"Counter API Demo"}),"\n",(0,o.jsx)(n.p,{children:"The example we are looking at is a simple coffee counter. Our product will track the daily coffee consumption of a user. For this the user interface requires an API to the backend to count coffees."}),"\n",(0,o.jsx)(n.p,{children:"From the frontend perspective we have a button to increase the coffee count and a total score of the coffees we had a day. We assume the backend automatically resets the counter every night."}),"\n",(0,o.jsx)(n.p,{children:"For this we design an API which provides the coffee count for that day as well as an action to record a new coffee consumption. This API module will reside inside a team project."}),"\n",(0,o.jsxs)(n.p,{children:['As an API module resides inside a project, we will create a project named "',(0,o.jsx)(n.em,{children:"daily coffee"}),'" and provide a catchy brief description: "',(0,o.jsx)(n.em,{children:"count the coffee the user consumes per day"}),'". When the project is created we are forwarded to the project page.']}),"\n",(0,o.jsx)(n.p,{children:"A default API module is already created for us. We can delete this, as we do not need it for this project."}),"\n",(0,o.jsxs)(n.p,{children:["We create a new API module called ",(0,o.jsx)(n.code,{children:"demo.daily"})," now."]}),"\n",(0,o.jsx)(n.p,{children:"A project can have more than one API module. Configured code generators to create API SDKs are also attached to a project and the API simulations, which are auto updated with the API changes."}),"\n",(0,o.jsx)(n.p,{children:"Now we enter the API definition into the API editor field and save the content."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'schema: apigear.module/1.0\nname: demo.daily\nversion: "1.0"\n\ninterfaces:\n  - name: Counter\n    properties:\n      - name: count\n        type: int\n    operations:\n      - name: increment\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The API consists of an interface located in the ",(0,o.jsx)(n.code,{children:"demo.daily"})," module. The ",(0,o.jsx)(n.code,{children:"Counter"})," interface itself consist of a property ",(0,o.jsx)(n.code,{children:"count"})," of the type integer. The interface also exposes an operation named ",(0,o.jsx)(n.code,{children:"increment"}),". For more information on the API definition language see the ",(0,o.jsx)(n.a,{href:"/docs/advanced/objectapi/intro",children:"ObjectAPI guide"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"We create a C++14 API for this tutorial. When we open the SDK section, we select the C++14 SDK and press run. After we downloaded the created SDK, we unzip the source code in our terminal and run the project. Detailed information how to run the project will be in the README file of your SDK."}),"\n",(0,o.jsx)(n.h2,{id:"using-the-api",children:"Using the API"}),"\n",(0,o.jsx)(n.p,{children:"The generated code will result in a C++ class with some abstract methods. The API has no functionality yet, and needs to be provided by you. So open the project in your favorite editor and add the implementation."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// counter.h\n\nvoid Counter::increment()\n{\n   // add implementation here\n    count++;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now, you can use the class in your main function."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'// main.cpp\n#include <iostream>\nusing namespace std;\n\n#include "counter.h"\n\nint main(int argc, char**argv) {\n    Counter counter;\n    cout << counter.count();\n    counter.increment();\n    cout << counter.count();\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Which concrete API you will use depends on the code generators you configure. There are code-generators for many languages and technologies available."}),"\n",(0,o.jsx)(n.p,{children:"We can now continue to design the API inside the APIGear's API editor."}),"\n",(0,o.jsx)(n.p,{children:"The editor allows us to save the API at any point and to create a new version if required."}),"\n",(0,o.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,o.jsx)(n.p,{children:"To make the API more descriptive we can add some description."}),"\n",(0,o.jsx)(n.p,{children:"The API language has full support for markdown based descriptions."}),"\n",(0,o.jsx)(n.p,{children:"To write code examples just indent the code snippets"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'schema: apigear.module/1.0\nname: demo.daily\nversion: "1.0"\ndescription: A module to demonstrate an API\n\ninterfaces:\n  - name: Counter\n    description: An interface to increment a coffee counter\n    properties:\n      - name: count\n        type: int\n        description: holds the current count value\n    operations:\n      - name: increment\n        description: increments the count value\n'})}),"\n",(0,o.jsx)(n.p,{children:"After saving the API module, we can see the documentation in the API portal. It is automatically updated, based on the API module content."}),"\n",(0,o.jsx)(n.p,{children:"Now, we have successfully defined an API. The next step will be to use the API. First in a playground like environment, later in a real project."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
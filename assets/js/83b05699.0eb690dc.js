"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[2857],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(i),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return i?a.createElement(h,o(o({ref:t},u),{},{components:i})):a.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4173:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=i(7462),n=(i(7294),i(3905));const r={sidebar_position:1},o="Introduction",l={unversionedId:"guide/intro",id:"guide/intro",title:"Introduction",description:"Development Cycle",source:"@site/docs/guide/intro.md",sourceDirName:"guide",slug:"/guide/intro",permalink:"/docs/guide/intro",draft:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/guide/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Guide",permalink:"/docs/category/guide"},next:{title:"Counter API Demo",permalink:"/docs/guide/counter"}},s={},p=[{value:"Development Cycle",id:"development-cycle",level:2},{value:"Cycle Overview",id:"cycle-overview",level:2},{value:"Define API",id:"define-api",level:2},{value:"Create SDK",id:"create-sdk",level:2},{value:"Apply Changes",id:"apply-changes",level:2},{value:"First run",id:"first-run",level:3},{value:"Updating existing APIs",id:"updating-existing-apis",level:3},{value:"Create application",id:"create-application",level:2},{value:"Gain insights",id:"gain-insights",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("h2",{id:"development-cycle"},"Development Cycle"),(0,n.kt)("p",null,"This is section is about how to use ApiGear to create SDKs with the ObjectAPI."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Feel free to jump directly to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apigear-io/objectapi-demos"},"demos over at github"),". They showcase two different APIs in several languages including applications which use the API modules.")),(0,n.kt)("p",null,"Now, that you know the basics about the ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced/objectapi/intro"},"ObjectAPI")," and how to create SDKs using ApiGear, we provide some demos and hints for real world projects."),(0,n.kt)("p",null,"We will cover starting from scratch as well as updating an existing API, previously created using ApiGear. Our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apigear-io/objectapi-demos"},"demos")," are implemented using the same process as described below."),(0,n.kt)("h2",{id:"cycle-overview"},"Cycle Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Developer Cycle",src:i(2599).Z+"#light",width:"649",height:"402"}),"\n",(0,n.kt)("img",{alt:"Developer Cycle",src:i(6883).Z+"#dark",width:"649",height:"402"})),(0,n.kt)("p",null,"The graphic describes the development cycle using ApiGear."),(0,n.kt)("p",null,"Like every modern development tool ApiGear fully supports an agile development approach. You can start with a minimal API definition and then iteratively add more functionality or change existing details. Theoretically, you could even rewrite the whole API.\nHowever, using the ",(0,n.kt)("em",{parentName:"p"},"API first approach")," will help you design more stable and high quality APIs."),(0,n.kt)("h2",{id:"define-api"},"Define API"),(0,n.kt)("p",null,"As with every ",(0,n.kt)("em",{parentName:"p"},"API first approach")," you start at defining your ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced/objectapi/modules"},"ObjectAPI module"),". This can be done using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/studio/intro"},"ApiGear Studio")," or the ",(0,n.kt)("a",{parentName:"p",href:"/docs/cli/intro"},"ApiGear CLI"),". An API module is a simple document following the ObjectAP specification."),(0,n.kt)("h2",{id:"create-sdk"},"Create SDK"),(0,n.kt)("p",null,"Once you have created one or several API modules you are set to create your first SDK. Therefore you choose one of our expert engineered ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/intro"},"SDK templates")," and a SDK runner for your project."),(0,n.kt)("p",null,"The SDK runner will create a ",(0,n.kt)("em",{parentName:"p"},".zip")," file for you to download."),(0,n.kt)("h2",{id:"apply-changes"},"Apply Changes"),(0,n.kt)("p",null,"The aforementioned SDK ",(0,n.kt)("em",{parentName:"p"},".zip")," file consists of several different files depending on the SDK runner setup and chosen programming language."),(0,n.kt)("p",null,'Assuming you chose the "full package including scaffolding" then you have the following types of files:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The plain API in your preferred language"),(0,n.kt)("li",{parentName:"ol"},"A stub implementation derived from this API with a basic implementation"),(0,n.kt)("li",{parentName:"ol"},"A suite of test files covering the stub implementation"),(0,n.kt)("li",{parentName:"ol"},"Project files to instantaneously build the whole API module and execute the test cases"),(0,n.kt)("li",{parentName:"ol"},"Additional adapters created by ApiGear to provide API analytics insights.")),(0,n.kt)("p",null,"From here on we recommend a ",(0,n.kt)("em",{parentName:"p"},"split strategy")," depending on whether you created the API module for the first time or whether you want to update an existing implementation."),(0,n.kt)("h3",{id:"first-run"},"First run"),(0,n.kt)("p",null,"The easiest way to set your project up for long time API updates is to create an ",(0,n.kt)("em",{parentName:"p"},"ini(tial)")," folder within your project and extract the SDK ",(0,n.kt)("em",{parentName:"p"},"unmodified")," in this folder. Afterwards you just simply copy this ",(0,n.kt)("em",{parentName:"p"},"ini")," folder to a ",(0,n.kt)("em",{parentName:"p"},"sol(ution)")," folder. You should then commit this state as initial version to be able to always rollback."),(0,n.kt)("p",null,"Once this is done you can start replacing the API stub implementation in the ",(0,n.kt)("em",{parentName:"p"},"sol")," folder with your business logic and the same time update the test stubs to cover the real API behavior."),(0,n.kt)("h3",{id:"updating-existing-apis"},"Updating existing APIs"),(0,n.kt)("p",null,"When you have set up your project as described in the ",(0,n.kt)("em",{parentName:"p"},"first run")," using a ",(0,n.kt)("em",{parentName:"p"},"ini")," and ",(0,n.kt)("em",{parentName:"p"},"sol")," folder - or a similar setup - you can now easily apply updates to your API using the following steps."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extract the updated SDK ",(0,n.kt)("em",{parentName:"li"},"unmodified")," into the ",(0,n.kt)("em",{parentName:"li"},"ini")," folder. A diff of your preferred source control tool should only should the auto generated changes based on your API modification"),(0,n.kt)("li",{parentName:"ul"},"use a ",(0,n.kt)("em",{parentName:"li"},"compare and merge")," tool to go over the differences of the updated ",(0,n.kt)("em",{parentName:"li"},"ini")," folder and your existing implementation in the ",(0,n.kt)("em",{parentName:"li"},"sol")," folder"),(0,n.kt)("li",{parentName:"ul"},"only apply the interface changes without overwriting your business logic")),(0,n.kt)("p",null,"This process might sound cumbersome on first sight but is really easy and straight forward to use."),(0,n.kt)("h2",{id:"create-application"},"Create application"),(0,n.kt)("p",null,"Now, that we have our API module in place we can start using it an application.\nDepending on whether it is the same team or a different team implementing the application, they can use the module either with a stub implementation, a simulation adapter or the real business logic. There is no dependency anymore - the API module and the application can be both developed in parallel based on the commonly defined API description."),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apigear-io/objectapi-demos"},"demos")," were developed the same way as described above. Small increments at a time, super fast and with high quality built in. The applications are stored in the ",(0,n.kt)("em",{parentName:"p"},"app(lication)")," folder."),(0,n.kt)("h2",{id:"gain-insights"},"Gain insights"),(0,n.kt)("p",null,"With the upcoming feature ",(0,n.kt)("em",{parentName:"p"},"ApiGear analytics")," you will gain full insight into your customers API usage. Based on this highly valuable feedback you are able to make fully informed decisions on which feature to extend or which could be spared for future efficiency and customer satisfaction."))}d.isMDXComponent=!0},6883:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/devcycle_dark-b481b45da22d2b7a412e1e922bb463c3.svg"},2599:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/devcycle_light-f521e6094e307c5e453639b3e814ba2c.svg"}}]);
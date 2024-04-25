"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[9140],{26811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=n(74848),i=n(28453),r=n(21432),a=n(64214),o=n(37632);const l={},d="Features",c={id:"features/features",title:"Features",description:"This guide explains how to use the generated code, what are the available features and  their benefits.",source:"@site/template-docs/template-qt6/docs/docs/features/features.md",sourceDirName:"features",slug:"/features/",permalink:"/template-qt6/docs/features/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Quick-Start",permalink:"/template-qt6/docs/quickstart/"},next:{title:"API",permalink:"/template-qt6/docs/features/api"}},h={},u=[{value:"Get started",id:"get-started",level:2},{value:"Code generation",id:"code-generation",level:3},{value:"Example API",id:"example-api",level:3},{value:"Features",id:"features-1",level:2},{value:"Core",id:"core",level:3},{value:"Extended",id:"extended",level:3},{value:"Folder structure",id:"folder-structure",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"features",children:"Features"}),"\n",(0,s.jsx)(t.p,{children:"This guide explains how to use the generated code, what are the available features and  their benefits."}),"\n",(0,s.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsxs)(t.p,{children:["This template generates code for ",(0,s.jsx)(t.a,{href:"https://www.qt.io/",children:(0,s.jsx)(t.em,{children:"Qt"})})," projects. In order to successfully compile and use the code, you need to have the ",(0,s.jsx)(t.em,{children:"Qt Engine"})," installed (at least 5.12). Check ",(0,s.jsx)(t.a,{href:"https://www.qt.io/download",children:"the Qt website"})," for your options for open-source or commercial version.\nBasic understanding of ",(0,s.jsx)(t.em,{children:"Qt"})," is required, and depending on your goal the qml or c++ knowledge is also necessary."]}),"\n",(0,s.jsx)(t.h3,{id:"code-generation",children:"Code generation"}),"\n",(0,s.jsxs)(t.p,{children:["Follow the documentation for the ",(0,s.jsx)(t.a,{href:"/docs/start/first_steps",children:"code generation"})," in general and ",(0,s.jsx)(t.a,{href:"/docs/cli/generate",children:"CLI"})," or the ",(0,s.jsx)(t.a,{href:"/docs/studio/intro",children:"Studio"})," tools.\nOr try first the ",(0,s.jsx)(t.a,{href:"/template-qt6/docs/quickstart/",children:"quick start guide"})," which shows how to prepare api and generate code out of it."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For questions regarding this template please go to our ",(0,s.jsx)(t.a,{href:"https://github.com/orgs/apigear-io/discussions",children:"discussions page"}),". For feature requests or bug reports please use the ",(0,s.jsx)(t.a,{href:"https://github.com/apigear-io/template-qtcpp/issues",children:"issue tracker"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"example-api",children:"Example API"}),"\n",(0,s.jsxs)(t.p,{children:["The following code snippet contains the ",(0,s.jsx)(t.em,{children:"API"})," which is used throughout this guide to demonstrate the generated code and its usage in ",(0,s.jsx)(t.em,{children:"Qt"}),"."]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Hello World API (click to expand)"}),(0,s.jsx)(r.A,{language:"yaml",showLineNumbers:!0,children:a.A})]}),"\n",(0,s.jsx)(t.h2,{id:"features-1",children:"Features"}),"\n",(0,s.jsx)(t.h3,{id:"core",children:"Core"}),"\n",(0,s.jsxs)(t.p,{children:["Features generate a view model for the ",(0,s.jsx)(t.code,{children:"api"}),". This can be used to implement a working ",(0,s.jsx)(t.em,{children:"C++"})," and ",(0,s.jsx)(t.em,{children:"qml"})," service and directly use it in your UI project."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/template-qt6/docs/features/api",children:"api"})," - generates compilable abstract base interface and a basic implementation for data types"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/template-qt6/docs/features/stubs",children:"stubs"})," - adds a basic stubs for the ",(0,s.jsx)(t.code,{children:"api"}),", you'll get classes that can actually be instantiated"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/template-qt6/docs/features/qmlplugin",children:"qmlplugin"})," - generates plugin which can be used to add the qml types"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"extended",children:"Extended"}),"\n",(0,s.jsxs)(t.p,{children:["Features can be used in combination with ",(0,s.jsx)(t.code,{children:"api"})," and add more functionality on top, like the simulation"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/template-qt6/docs/features/olink",children:"olink"})," - provides a client and server adapters for each interface, that can be connected to any of the other technology templates with support for ",(0,s.jsx)(t.a,{href:"/docs/advanced/objectlink/intro",children:"ObjectLink"}),". Use this feature to connect with ApiGear simulation tools."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/template-qt6/docs/features/monitor",children:"monitor"})," - generates a middleware layer which logs all API events to the ",(0,s.jsx)(t.a,{href:"/docs/cli/intro",children:"CLI"})," or the ",(0,s.jsx)(t.a,{href:"/docs/studio/intro",children:"Studio"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/template-qt6/docs/features/mqtt",children:"MQTT"})," experimental - provides minimal working adapters for MQTT client and service side for each interfaces. Check also MQTT in other technology templates that supports it."]}),"\n",(0,s.jsxs)(t.li,{children:["examples feature - generates:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"olinkserver"})," example with ",(0,s.jsx)(t.code,{children:"main.cpp"})," that shows your services in olink server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"olinkclient"})," example with ",(0,s.jsx)(t.code,{children:"main.cpp"})," that shows your interfaces as olink client."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"qml"})," example with a ",(0,s.jsx)(t.code,{children:"main.cpp"})," and ",(0,s.jsx)(t.code,{children:"qmlmain.qml"}),". The qml uses your interfaces. The main cpp sets olink client factory as a backend for the qml and sets up the olink server with your services (normally you'd have separate app for server)'."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.A,{caption:"Features overview, including receiving data from network: Bottom floor shows possible inputs for your API, you can either obtain data from the network with OLink or MQTT or use local implementation. The top floor shows feature qmlpugin for qml oriented applications.",src:"/img/features/featuresApp.png"}),"\n",(0,s.jsx)(o.A,{caption:"Features overview, including publishing data through network: Topmost floor shows your options for using your local implementation (bottom floor): you can use it in your local app and/or use method of sharing the data with clients in the network.",src:"/img/features/featuresServer.png"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"You may also use the OLink/Mqtt service side with Qml, you just need to provide implementation of IApiFactory, which will allow OLink/Mqtt Services Adapters use the network endpoints and the services implementation."})}),"\n",(0,s.jsxs)(t.p,{children:["There is also an ",(0,s.jsx)(t.em,{children:"internal"})," feature ",(0,s.jsx)(t.code,{children:"apigear"}),", which is generated for the ",(0,s.jsx)(t.em,{children:"extended"})," features and is explained with them.\nEach feature can be selected using the solution file or via command line tool."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["*Features are case sensitive, make sure to always ",(0,s.jsx)(t.strong,{children:"use lower-case."})," *"]})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"meta"})," feature ",(0,s.jsx)(t.code,{children:"all"})," enables all specified features of the template. If you want to see the full extent of the generated code ",(0,s.jsx)(t.code,{children:"all"})," is easiest solution.\nPlease note, ",(0,s.jsx)(t.code,{children:"all"})," is part of the code generator and not explicitly used within templates."]})}),"\n",(0,s.jsx)(t.h2,{id:"folder-structure",children:"Folder structure"}),"\n",(0,s.jsxs)(t.p,{children:["This graph shows the full folder structure which is generated for ",(0,s.jsx)(t.code,{children:"all"})," features enabled. Generated features are encapsulated in separate folders inside the module folder, here ",(0,s.jsx)(t.code,{children:"io_world"})," or for the common features like ",(0,s.jsx)(t.code,{children:"examples"})," and the internal helper feature ",(0,s.jsx)(t.code,{children:"apigear"}),", a level above, in the ",(0,s.jsx)(t.code,{children:"generation layer"})," level, here ",(0,s.jsx)(t.code,{children:"qt_hello_world"}),". For more details visit the documentation for each feature.\nA ",(0,s.jsx)(t.code,{children:"thirdparty"})," folder is contains Qt Promise (up to 5.x.x Qt version)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcdchelloworld.solution.yaml\n \u2503 \u2517 \ud83d\udcdchelloworld.module.yaml\n \u2523 \ud83d\udcc2qt_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2503 \u2523 \ud83d\udcc2olinkclient\n \u2503 \u2503 \u2523 \ud83d\udcc2olinkserver\n \u2503 \u2503 \u2523 \ud83d\udcc2qml\n # highlight-next-line\n \u2503 \u2523 \ud83d\udcc2io_world\n \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2523 \ud83d\udcc2implementation\n \u2503 \u2503 \u2523 \ud83d\udcc2monitor\n \u2503 \u2503 \u2523 \ud83d\udcc2olink\n \u2503 \u2503 \u2517 \ud83d\udcc2plugin\n \u2503 \u2523 \ud83d\udcc2thirdparty\n \u2503 \u2517 \ud83d\udcdcCMakeLists.txt\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},37632:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(86025),i=n(74848);function r(e){let{src:t,caption:n}=e;return(0,i.jsxs)("figure",{style:{padding:0},children:[(0,i.jsx)("img",{src:(0,s.A)(t),alt:n}),(0,i.jsx)("figcaption",{children:`Figure: ${n}`})]})}},64214:(e,t,n)=>{n.d(t,{A:()=>s});const s='schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'}}]);
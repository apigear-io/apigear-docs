"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[5969],{2497:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=s(4848),r=s(8453),a=s(1432),i=s(2486),o=s(8144);const l={},d="Features",c={id:"features/features",title:"Features",description:"This guide explains how to use the generated code, what are the available features and their benefits.",source:"@site/template-docs/template-cpp17/docs/docs/features/features.md",sourceDirName:"features",slug:"/features/",permalink:"/template-cpp17/docs/features/",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/template-cpp17/edit/main/docs/docs/features/features.md",tags:[],version:"current",lastUpdatedAt:1733388614e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Quick-Start",permalink:"/template-cpp17/docs/quickstart/"},next:{title:"API Feature",permalink:"/template-cpp17/docs/features/api"}},h={},u=[{value:"Get started",id:"get-started",level:2},{value:"Code generation",id:"code-generation",level:3},{value:"Example API",id:"example-api",level:3},{value:"Features",id:"features-1",level:2},{value:"Core Features",id:"core-features",level:3},{value:"Extended Features",id:"extended-features",level:3},{value:"Folder structure",id:"folder-structure",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"features",children:"Features"})}),"\n",(0,n.jsx)(t.p,{children:"This guide explains how to use the generated code, what are the available features and their benefits."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["A feature is a part of the template that generates a specific aspect of the code. For example, the ",(0,n.jsx)(t.code,{children:"api"})," feature generates the core API interfaces and the ",(0,n.jsx)(t.code,{children:"stubs"})," feature generates a stub implementation for the API."]})}),"\n",(0,n.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,n.jsx)(t.p,{children:"This template generates code for pure c++ projects. In order to successfully compile and use the code, you need to have a working c++ compiler toolchain installed."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Basic c++ knowledge is necessary."})}),"\n",(0,n.jsx)(t.h3,{id:"code-generation",children:"Code generation"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the documentation for the ",(0,n.jsx)(t.a,{href:"/docs/guide/intro",children:"code generation"})," in general and ",(0,n.jsx)(t.a,{href:"/docs/tools/cli/generate",children:"CLI"})," or the ",(0,n.jsx)(t.a,{href:"/docs/tools/studio/intro",children:"Studio"})," tools.\nOr try first the ",(0,n.jsx)(t.a,{href:"/template-cpp17/docs/quickstart/",children:"quick start guide"})," which shows how to prepare api and generate code out of it."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For questions regarding the template please go to our ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/apigear-io/discussions",children:"discussions page"}),". For feature requests or bug reports please use our ",(0,n.jsx)(t.a,{href:"https://github.com/apigear-io/template-cpp17/issues",children:"issue tracker"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"example-api",children:"Example API"}),"\n",(0,n.jsxs)(t.p,{children:["The following code snippet contains the ",(0,n.jsx)(t.em,{children:"API"})," definition which is used throughout this guide to demonstrate the generated code and its usage."]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Hello World API (click to expand)"}),(0,n.jsx)(a.A,{language:"yaml",showLineNumbers:!0,children:i.A})]}),"\n",(0,n.jsx)(t.h2,{id:"features-1",children:"Features"}),"\n",(0,n.jsx)(t.h3,{id:"core-features",children:"Core Features"}),"\n",(0,n.jsxs)(t.p,{children:["Features generate a view model for the ",(0,n.jsx)(t.em,{children:"API"})," definition. This can be used to implement a working ",(0,n.jsx)(t.em,{children:"C++"})," service and directly use it in your project."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/api",children:"api"})," - generates compilable base pure interfaces for your ",(0,n.jsx)(t.em,{children:"API"}),", as also a basic implementation for data types and subscriber/publisher as abstract classes that describe the notification system for users of your interfaces."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/stubs",children:"stubs"})," - adds a basic stub implementation for the ",(0,n.jsx)(t.em,{children:"API"}),", you'll get classes that can actually be instantiated with a ready to use publishers, this is a good starting point for your implementation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/conan",children:"conan"})," - build and packaging support for your project."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"extended-features",children:"Extended Features"}),"\n",(0,n.jsxs)(t.p,{children:["Features can be used in combination with ",(0,n.jsx)(t.em,{children:"API"})," and add more functionality on top, like simulation support (see ",(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/olink#simulation",children:"olink"}),")"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/olink",children:"olink"})," - provides a client and server adapters for each interface, that can be connected to any of the other technology templates with support for ",(0,n.jsx)(t.a,{href:"/docs/advanced/protocols/objectlink/intro",children:"ObjectLink"}),". Use this feature to connect with ApiGear simulation tools."]}),"\n",(0,n.jsxs)(t.li,{children:["examples_olink - examples of generated code for the olink feature. Contains:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"olinkserver"})," shows use of your interfaces as an olink services."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"olinkclient"})," shows use of your interfaces as an olink clients."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/monitor",children:"monitor"})," - generates a middle-ware layer which logs all API events to the ",(0,n.jsx)(t.a,{href:"/docs/tools/cli/intro",children:"CLI"})," or the ",(0,n.jsx)(t.a,{href:"/docs/tools/studio/intro",children:"Studio"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/mqtt",children:"MQTT"})," ",(0,n.jsx)(t.em,{children:"experimental"})," - provides minimal working adapters for MQTT client and service side for each interfaces. Check also MQTT in other technology templates that supports it."]}),"\n",(0,n.jsxs)(t.li,{children:["examples_mqtt - examples of generated code for the olink feature. Contains:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"mqttserver"})," shows use of your interfaces with mqtt adapted for your services."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"mqttclient"})," shows use of your interfaces as a mqtt adapted for your services users."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["examples of generated code for basic features:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"app"})," simple example with stubs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"appthreadsafe"})," simple example with stubs wrapped with thread safe decorator. See ",(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/stubs#core",children:"thread safe decorator from core features"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.A,{caption:"Overview of features for user application, including receiving data from network: Bottom floor shows possible inputs for your API, you can either obtain data from the network with OLink or MQTT or use local (thread safe if necessary) implementation.",src:"/img/features/featuresApp.png"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Theoretically you can use the Thread Safe Decorator with other features that implements API: OLinkClient and MQTT Client, but they, already provide thread safety on at least the same level as the Thread Safe Decorator."})}),"\n",(0,n.jsx)(o.A,{caption:"Overview of features for user application, including publishing data through network: Topmost floor shows your options for using your local implementation (bottom floor): you can use it in your local app and/or use method of sharing the data with clients in the network. Consider then using thread safe version of your implementation.",src:"/img/features/featuresServer.png"}),"\n",(0,n.jsxs)(t.p,{children:["There are also an ",(0,n.jsx)(t.em,{children:"internal"})," features:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"apigear"}),", which is generated for the ",(0,n.jsx)(t.em,{children:"extended"})," features and is explained with them."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"core"}),", which is generated for the stubs and the ",(0,n.jsx)(t.em,{children:"extended"})," features. For the explanation see ",(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/stubs#core",children:"core documentation"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each feature can be selected using the solution file or via command line tool."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["_Features are case sensitive, make sure to always ",(0,n.jsx)(t.strong,{children:"use lower-case."})," _"]})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"meta"})," feature ",(0,n.jsx)(t.code,{children:"all"})," enables all specified features of the template. If you want to see the full extent of the generated code ",(0,n.jsx)(t.code,{children:"all"})," is easiest solution.\nPlease note, ",(0,n.jsx)(t.code,{children:"all"})," is part of the code generator and not explicitly used within templates."]})}),"\n",(0,n.jsx)(t.h2,{id:"folder-structure",children:"Folder structure"}),"\n",(0,n.jsxs)(t.p,{children:["This graph shows the full folder structure which is generated for ",(0,n.jsx)(t.code,{children:"all"})," features enabled, but skips the ",(0,n.jsx)(t.a,{href:"/template-cpp17/docs/features/conan",children:"conan"})," files. Generated features are encapsulated in separate folders for each module or for the common features like ",(0,n.jsx)(t.code,{children:"examples"})," and the internal helper feature ",(0,n.jsx)(t.code,{children:"apigear"}),", a level above, in the ",(0,n.jsx)(t.code,{children:"generation target"})," level, here ",(0,n.jsx)(t.code,{children:"cpp_hello_world"}),". For more details visit the documentation for each feature."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcdchelloworld.solution.yaml\n \u2503 \u2517 \ud83d\udcdchelloworld.module.yaml\n \u2523 \ud83d\udcc2cpp_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2523 \ud83d\udcc2modules\n \u2503 \u2503 \u2517 \ud83d\udcc2io_world\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2conan\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2generated\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2core\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2monitor\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2mqtt\n \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcc2olink\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2implementation\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcIo_worldConfig.cmake.in\n \u2503 \u2517 \ud83d\udcdcCMakeLists.txt\n"})})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8144:(e,t,s)=>{s.d(t,{A:()=>a});s(6540);var n=s(6025),r=s(4848);function a(e){let{src:t,caption:s}=e;return(0,r.jsxs)("figure",{style:{padding:0},children:[(0,r.jsx)("img",{src:(0,n.Ay)(t),alt:s}),(0,r.jsx)("figcaption",{children:`Figure: ${s}`})]})}},2486:(e,t,s)=>{s.d(t,{A:()=>n});const n='schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'}}]);
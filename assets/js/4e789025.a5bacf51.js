"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[3175],{19158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(74848),r=n(28453),a=n(21432),i=n(78529);const o={},l="Features",d={id:"features/features",title:"Features",description:"This guide explains how to use the generated code, what are the available features and  their benefits.",source:"@site/template-docs/template-python/docs/docs/features/features.md",sourceDirName:"features",slug:"/features/",permalink:"/template-python/docs/features/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Quick-Start",permalink:"/template-python/docs/quickstart/"},next:{title:"MQTT",permalink:"/template-python/docs/features/mqtt"}},h={},c=[{value:"Get started",id:"get-started",level:2},{value:"Code generation",id:"code-generation",level:3},{value:"Example API",id:"example-api",level:3},{value:"Features",id:"features-1",level:2},{value:"Core",id:"core",level:3},{value:"Extended",id:"extended",level:3},{value:"Folder structure",id:"folder-structure",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"features",children:"Features"}),"\n",(0,s.jsx)(t.p,{children:"This guide explains how to use the generated code, what are the available features and  their benefits."}),"\n",(0,s.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsxs)(t.p,{children:["This template generates code for ",(0,s.jsx)(t.a,{href:"https://www.python.org/",children:(0,s.jsx)(t.em,{children:"Python"})})," projects. In order to successfully compile and use the code, you need to have the ",(0,s.jsx)(t.em,{children:"Python"})," installed (at least 3.12). Check ",(0,s.jsx)(t.a,{href:"https://www.python.org/downloads/",children:"the Python website"})," for downloads.\nBasic understanding of ",(0,s.jsx)(t.em,{children:"Python"})," is required."]}),"\n",(0,s.jsx)(t.h3,{id:"code-generation",children:"Code generation"}),"\n",(0,s.jsxs)(t.p,{children:["Follow the documentation for the ",(0,s.jsx)(t.a,{href:"/docs/start/first_steps",children:"code generation"})," in general and ",(0,s.jsx)(t.a,{href:"/docs/cli/generate",children:"CLI"})," or the ",(0,s.jsx)(t.a,{href:"/docs/studio/intro",children:"Studio"})," tools.\nOr try first the ",(0,s.jsx)(t.a,{href:"/template-python/docs/quickstart/",children:"quick start guide"})," which shows how to prepare api and generate code out of it."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For questions regarding this template please go to our ",(0,s.jsx)(t.a,{href:"https://github.com/orgs/apigear-io/discussions",children:"discussions page"}),". For feature requests or bug reports please use the ",(0,s.jsx)(t.a,{href:"https://github.com/apigear-io/template-python/issues",children:"issue tracker"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"example-api",children:"Example API"}),"\n",(0,s.jsxs)(t.p,{children:["The following code snippet contains the ",(0,s.jsx)(t.em,{children:"API"})," which is used throughout this guide to demonstrate the generated code and its usage in ",(0,s.jsx)(t.em,{children:"Python"}),"."]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Hello World API (click to expand)"}),(0,s.jsx)(a.A,{language:"yaml",showLineNumbers:!0,children:i.A})]}),"\n",(0,s.jsx)(t.h2,{id:"features-1",children:"Features"}),"\n",(0,s.jsx)(t.h3,{id:"core",children:"Core"}),"\n",(0,s.jsxs)(t.p,{children:["Features generate a view model for the ",(0,s.jsx)(t.code,{children:"api"}),". This can be used to implement a working service and directly use it in your UI project."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"[api] TBD - generates abstract base interface and a basic implementation for data types"}),"\n",(0,s.jsxs)(t.li,{children:["[stubs] TBD - adds a basic stubs for the ",(0,s.jsx)(t.code,{children:"api"}),", you'll get classes that can be instantiated and have some default behavior."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"extended",children:"Extended"}),"\n",(0,s.jsxs)(t.p,{children:["Features can be used in combination with ",(0,s.jsx)(t.code,{children:"api"})," and add more functionality on top, like the simulation"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["[olink] TBD - provides a client and server adapters for each interface, that can be connected to any of the other technology templates with support for ",(0,s.jsx)(t.a,{href:"/docs/advanced/objectlink/intro",children:"ObjectLink"}),". Use this feature to connect with ApiGear simulation tools."]}),"\n",(0,s.jsxs)(t.li,{children:["[MQTT] TBD - provides minimal working adapters for MQTT client and service side for each interfaces. Check also MQTT in other technology templates that supports it. Also examples are provided:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"examples/mqtt/server.py"})," that shows usage of your services in mqtt server adapter."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"examples/mqtt/client.py"})," that shows usage of your interfaces in mqtt client adapter."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["There is also an ",(0,s.jsx)(t.em,{children:"internal"})," feature ",(0,s.jsx)(t.code,{children:"apigear"}),", which is generated for the ",(0,s.jsx)(t.em,{children:"extended"})," features, its usage is explained with the extended features.\nEach feature can be selected using the solution file or via command line tool."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["*Features are case sensitive, make sure to always ",(0,s.jsx)(t.strong,{children:"use lower-case."})," *"]})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"meta"})," feature ",(0,s.jsx)(t.code,{children:"all"})," enables all specified features of the template. If you want to see the full extent of the generated code ",(0,s.jsx)(t.code,{children:"all"})," is easiest solution.\nPlease note, ",(0,s.jsx)(t.code,{children:"all"})," is part of the code generator and not explicitly used within templates."]})}),"\n",(0,s.jsx)(t.h2,{id:"folder-structure",children:"Folder structure"}),"\n",(0,s.jsxs)(t.p,{children:["This graph shows the full folder structure which is generated for ",(0,s.jsx)(t.code,{children:"all"})," features enabled.\nGenerated features are encapsulated in separate folders inside the module folder, here ",(0,s.jsx)(t.code,{children:"io_world"})," or for the common features like ",(0,s.jsx)(t.code,{children:"examples"})," and the internal helper feature ",(0,s.jsx)(t.code,{children:"apigear"}),", a level above, in the ",(0,s.jsx)(t.code,{children:"generation layer"})," level, here ",(0,s.jsx)(t.code,{children:"qt_hello_world"}),". For more details visit the documentation for each feature."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcdchelloworld.solution.yaml\n \u2503 \u2517 \ud83d\udcdchelloworld.module.yaml\n \u2523 \ud83d\udcc2py_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2503 \u2523 \ud83d\udcc2mqtt\n \u2503 \u2503 \u2517 \ud83d\udcc2olink\n # highlight-next-line\n \u2503 \u2523 \ud83d\udcc2io_world\n \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2523 \ud83d\udcc2impl\n \u2503 \u2503 \u2523 \ud83d\udcc2mqtt\n \u2503 \u2503 \u2517 \ud83d\udcc2olink\n \u2503 \u2523 \ud83d\udcc2utlis\n \u2503 \u2517 \ud83d\udcdcrequirements.txt\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},78529:(e,t,n)=>{n.d(t,{A:()=>s});const s='schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'}}]);
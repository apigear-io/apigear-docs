"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[8327],{822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=n(4848),a=n(8453),i=n(1432),r=n(4214);const o={sidebar_position:2},l="Stubs",d={id:"features/stubs",title:"Stubs",description:"The feature stubs adds:",source:"@site/template-docs/template-qt6/docs/docs/features/stubs.md",sourceDirName:"features",slug:"/features/stubs",permalink:"/template-qt6/docs/features/stubs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"API",permalink:"/template-qt6/docs/features/api"},next:{title:"MQTT",permalink:"/template-qt6/docs/features/mqtt"}},c={},h=[{value:"File overview for module",id:"file-overview-for-module",level:3},{value:"The Stub",id:"the-stub",level:3},{value:"Factory",id:"factory",level:3},{value:"Test",id:"test",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"stubs",children:"Stubs"})}),"\n",(0,s.jsxs)(t.p,{children:["The feature ",(0,s.jsx)(t.code,{children:"stubs"})," adds:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a semi-featured starting point for your implementation a instantiable classes for your Interfaces."}),"\n",(0,s.jsx)(t.li,{children:"the factory, that produces this implementation stubs (for QMLWrapper)"}),"\n",(0,s.jsx)(t.li,{children:"a setup for tests."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"file-overview-for-module",children:"File overview for module"}),"\n",(0,s.jsx)(t.p,{children:"With an example API"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Hello World API (click to expand)"}),(0,s.jsx)(i.A,{language:"yaml",showLineNumbers:!0,children:r.A})]}),"\n",(0,s.jsx)(t.p,{children:"the following file structure will be generated. The purpose and content of each file is explained below."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:"{8}",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2523 \ud83d\udcc2qt_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2523 \ud83d\udcc2io_world\n \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2523 \ud83d\udcc2implementation\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2tests\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdctest_hello.cpp\n \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdctest_hello.h\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcfactory.cpp\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcfactory.h\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.cpp\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdchello.h\n ...\n"})}),"\n",(0,s.jsx)(t.h3,{id:"the-stub",children:"The Stub"}),"\n",(0,s.jsxs)(t.p,{children:["Files ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.h"})," and ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.cpp"})," contain the implementation of the ",(0,s.jsx)(t.code,{children:"AbstractHello"}),".\nThe class skeleton:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["adds the properties of the interface as a private class members - here ",(0,s.jsx)(t.code,{children:"Message m_last"})]}),"\n",(0,s.jsx)(t.li,{children:"initializes them with default values in ctor."}),"\n",(0,s.jsx)(t.li,{children:"defines getters and setters for each property"}),"\n",(0,s.jsx)(t.li,{children:"provides empty implementation of operation to implement the business logic."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["We generate the import/export statements - here IO_WORLD_IMPL_EXPORT - for all the classes and structs that have an implementation in a ",(0,s.jsx)(t.em,{children:"cpp"})," file and may be used outside of the library."]})}),"\n",(0,s.jsx)(t.h3,{id:"factory",children:"Factory"}),"\n",(0,s.jsxs)(t.p,{children:["Factory of stub is defined in ",(0,s.jsx)(t.code,{children:"\ud83d\udcdcfactory.h"})," and ",(0,s.jsx)(t.code,{children:"\ud83d\udcdcfactory.cpp"}),"\nThis factory is necessary, when you want to provide this stub implementation to the QML Wrapper.\nSee ",(0,s.jsx)(t.a,{href:"qmlplugin#providing-backend-to-qml-wrapper",children:"this"})," api section for full information."]}),"\n",(0,s.jsx)(t.p,{children:'Also have in mind, that using this version of provided pair "factory - stub", you will not have any handle to interact with a created stub from code. Only changes and interaction will be possible from QML. You could create your version of a factory which also registers the objects to some kind of global registry, which you\'re able to reach from code.'}),"\n",(0,s.jsx)(t.h3,{id:"test",children:"Test"}),"\n",(0,s.jsxs)(t.p,{children:["For each interface we provide a template for your tests: pair of ",(0,s.jsx)(t.code,{children:"\ud83d\udcdctest_hello.h"})," and ",(0,s.jsx)(t.code,{children:"\ud83d\udcdctest_hello.cpp"})," files with a test class for the interface.\nIt contains 3 kinds of init methods: before each test cases is executed, before first test case is executed and one to create a global data table for tests; For clean up there are 2 methods: one called after each test and one called after last test case is called.\nThere are also slots - initial dummy tests, one for each operation and property."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4214:(e,t,n)=>{n.d(t,{A:()=>s});const s='schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'}}]);
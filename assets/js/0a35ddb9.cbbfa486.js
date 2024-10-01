"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[6825],{3418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(4848),r=n(8453),a=n(1432),i=n(2295);const o={sidebar_position:2},l="Stubs",d={id:"features/stubs",title:"Stubs",description:"The feature stubs adds:",source:"@site/template-docs/template-cpp14/docs/docs/features/stubs.md",sourceDirName:"features",slug:"/features/stubs",permalink:"/template-cpp14/docs/features/stubs",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/template-cpp14/edit/main/docs/docs/features/stubs.md",tags:[],version:"current",lastUpdatedAt:1712845509e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"API Feature",permalink:"/template-cpp14/docs/features/api"},next:{title:"MQTT",permalink:"/template-cpp14/docs/features/mqtt"}},h={},c=[{value:"File overview for module",id:"file-overview-for-module",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Core",id:"core",level:3},{value:"Publisher",id:"publisher",level:4},{value:"Data",id:"data",level:4},{value:"Thread Safe Decorator",id:"thread-safe-decorator",level:4},{value:"Json adapters",id:"json-adapters",level:4},{value:"Tests",id:"tests",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"stubs",children:"Stubs"})}),"\n",(0,s.jsxs)(t.p,{children:["The feature ",(0,s.jsx)(t.code,{children:"stubs"})," adds:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a semi-featured starting point for your implementation and instantiable interfaces classes"}),"\n",(0,s.jsx)(t.li,{children:"an implementation for publishers"}),"\n",(0,s.jsx)(t.li,{children:"a setup for tests"}),"\n",(0,s.jsx)(t.li,{children:"a thread safe decorator for your interfaces"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["With the stub feature you'll get an additional ",(0,s.jsx)(t.code,{children:"core"})," folder generated, it contains common functionality used also by other features: Olink or Mqtt.\nIts content will be explained below."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["For the basic skeleton implementation you'll find in ",(0,s.jsx)(t.code,{children:"\ud83d\udcc2hello-world\\cpp_hello_world\\modules\\io_world\\implementation"}),"\nthe bear minimum classes are the ",(0,s.jsx)(t.a,{href:"stubs#publisher",children:"publisher"})," and ",(0,s.jsx)(t.a,{href:"stubs#data",children:"data"})," from ",(0,s.jsx)(t.code,{children:"core"})," features. For the start focus on them and then explore more functionality."]})}),"\n",(0,s.jsx)(t.h3,{id:"file-overview-for-module",children:"File overview for module"}),"\n",(0,s.jsx)(t.p,{children:"With our example API definition"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Hello World API (click to expand)"}),(0,s.jsx)(a.A,{language:"yaml",showLineNumbers:!0,children:i.A})]}),"\n",(0,s.jsx)(t.p,{children:"the following file structure will be generated. The purpose and content of each file is explained below."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:"{12,23}",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2523 \ud83d\udcc2cpp_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2523 \ud83d\udcc2modules\n \u2503 \u2503 \u2517 \ud83d\udcc2io_world\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2generated\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2core\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.data.h\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.publisher.cpp\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.publisher.h\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.threadsafedecorator.cpp\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.threadsafedecorator.h\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcio_world.json.adapter.cpp\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcio_world.json.adapter.h\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcio_world.test.cpp\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2implementation\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.cpp\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.h\n \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdchello.test.cpp\n ...\n"})}),"\n",(0,s.jsx)(t.h3,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsxs)(t.p,{children:["Files ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.h"})," and ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.cpp"})," contain the implementation of the ",(0,s.jsx)(t.code,{children:"IHello"}),".\nThe class skeleton:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["adds the properties of the interface as a private class members - with a ",(0,s.jsx)(t.a,{href:"stubs#data",children:"HelloData structure"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"implements getters and setters for each property"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["owns a ",(0,s.jsx)(t.a,{href:"stubs#publisher",children:"publisher"})," and shares it through the ",(0,s.jsx)(t.code,{children:"_getPublisher"})," method implementation"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"provides empty implementation of operation for you to fill the business logic."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"When adding a logic don't forget to use the publisher each time you want the property change to be shared or the signal to be emitted."})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["We generate the import/export statements, here HELLO_WORLD_EXAMPLE_IO_WORLD_EXPORT, for all the classes and structs that have an implementation in a ",(0,s.jsx)(t.em,{children:"cpp"})," file and may be used outside of the library."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"core",children:"Core"}),"\n",(0,s.jsx)(t.h4,{id:"publisher",children:"Publisher"}),"\n",(0,s.jsxs)(t.p,{children:["Files ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.publisher.cpp"})," and ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.publisher.h"})," provide an implementation of a IHelloPublisher (api.md#Publisher).\nIt stores clients of the Hello (either the ",(0,s.jsx)(t.code,{children:"IHelloSubscriber"}),"s or callbacks for specific change). When a call of the appropriate publish function is executed on the publisher instance, it informs all of interested clients about the change."]}),"\n",(0,s.jsxs)(t.p,{children:["This class is thread safe in a way that adding and removing subscribers (both for full interface or specific notifications) is thread safe.\nIf you use publisher from many threads for notification you need to make sure that ",(0,s.jsx)(t.code,{children:"ISubscriber"})," or the callbacks are thread safe or modify the publisher to use them in thread-safe way. You may also want to take a look at generated ",(0,s.jsx)(t.a,{href:"stubs#thread-safe-decorator",children:"IHello thread safe decorator"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.data.h"})," contains the helper structure for implementations of Hello. It stores all the properties that an interface has and initializes them to default values."]}),"\n",(0,s.jsx)(t.h4,{id:"thread-safe-decorator",children:"Thread Safe Decorator"}),"\n",(0,s.jsxs)(t.p,{children:["Files ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.threadsafedecorator.cpp"})," and ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.threadsafedecorator.h"})," provide a wrapper for your ",(0,s.jsx)(t.code,{children:"IHello"})," implementation which can be used to make property access thread safe."]}),"\n",(0,s.jsx)(t.p,{children:"For each property it allows multiple get operations at the same time but only one set. The properties are guarded one by one - so at one time you can write to different properties."}),"\n",(0,s.jsx)(t.p,{children:"Operations are not guarded by default - the implementation may either be thread safe by design (const, re-entrant) or too complex to simply lock it."}),"\n",(0,s.jsx)(t.p,{children:"So depending on the logic in your methods you can decide to leave them without any mutexes, add same mechanism as for properties in the implementation file of the Hello interface, or try different solutions like introducing an event queue."}),"\n",(0,s.jsx)(t.h4,{id:"json-adapters",children:"Json adapters"}),"\n",(0,s.jsxs)(t.p,{children:["Files ",(0,s.jsx)(t.code,{children:"\ud83d\udcdcio_world.json.adapter.cpp"})," and ",(0,s.jsx)(t.code,{children:"\ud83d\udcdcio_world.json.adapter.h"})," are generated per whole module.\nThey prepare adapters for structs to easy convert to and from ",(0,s.jsx)(t.code,{children:"nlohmann::json"}),". This is currently used by our implemented protocols for the data packing.\nWith this implementation you use the structures as below"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Message message = json.get<Message>();\nnlohmann::json message = message;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"tests",children:"Tests"}),"\n",(0,s.jsxs)(t.p,{children:["For each interface we provide a template for your tests: ",(0,s.jsx)(t.code,{children:"\ud83d\udcdchello.test.cpp"}),". We used ",(0,s.jsx)(t.a,{href:"https://github.com/catchorg/Catch2",children:"Catch2"})," for setting up a test skeleton.\nYou can find there instantiating the interface, section with executing methods (no checks) and section with setting a property with check that it actually happen.\nThat is a starting point for your tests."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["In case you'll need mocks, ",(0,s.jsx)(t.code,{children:"Catch2"})," goes well along with ",(0,s.jsx)(t.a,{href:"https://github.com/rollbear/trompeloeil",children:"trompeloeil"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2295:(e,t,n)=>{n.d(t,{A:()=>s});const s='schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'}}]);
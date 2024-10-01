"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[7465],{4569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=t(4848),o=t(8453),a=t(1432),i=t(2295);const l={sidebar_position:4},s="Monitor",c={id:"features/monitor",title:"Monitor",description:"Use the monitor feature to examine the interface calls, state and signals during runtime. With this feature you obtain a monitor client and a monitored version of your interfaces. The monitoring server is embedded into the ApiGear Studio and CLI version.",source:"@site/template-docs/template-cpp14/docs/docs/features/monitor.md",sourceDirName:"features",slug:"/features/monitor",permalink:"/template-cpp14/docs/features/monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/template-cpp14/edit/main/docs/docs/features/monitor.md",tags:[],version:"current",lastUpdatedAt:1727808043e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Olink",permalink:"/template-cpp14/docs/features/olink"},next:{title:"Conan package manager",permalink:"/template-cpp14/docs/features/conan"}},d={},h=[{value:"File overview for module",id:"file-overview-for-module",level:2},{value:"Interface Independent Trace Client",id:"interface-independent-trace-client",level:3},{value:"Monitor",id:"monitor-1",level:3},{value:"Tracing example",id:"tracing-example",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"monitor",children:"Monitor"})}),"\n",(0,r.jsxs)(n.p,{children:["Use the monitor feature to examine the interface calls, state and signals during runtime. With this feature you obtain a monitor client and a monitored version of your interfaces. The monitoring server is embedded into the ",(0,r.jsx)(n.a,{href:"/docs/tools/studio/intro",children:"ApiGear Studio"})," and ",(0,r.jsx)(n.a,{href:"/docs/tools/cli/intro",children:"CLI version"}),".\nMore details on ",(0,r.jsx)(n.a,{href:"/docs/advanced/monitor/intro",children:"monitoring"})]}),"\n",(0,r.jsx)(n.h2,{id:"file-overview-for-module",children:"File overview for module"}),"\n",(0,r.jsx)(n.p,{children:"With our example API definition"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Hello World API (click to expand)"}),(0,r.jsx)(a.A,{language:"yaml",showLineNumbers:!0,children:i.A})]}),"\n",(0,r.jsx)(n.p,{children:"the following file structure will be generated. The purpose and content of each file is explained below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"{7,18}",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 ...\n \u2523 \ud83d\udcc2cpp_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2503 ...\n \u2503 \u2503 \u2523 \ud83d\udcc2tracer\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdctracer.cpp\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdctracer.h\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdctracer.test.cpp\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2523 \ud83d\udcc2modules\n \u2503 \u2503 \u2517 \ud83d\udcc2io_world\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2generated\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2monitor\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.tracedecorator.cpp\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.tracedecorator.h\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchello.tracer.cpp\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdchello.tracer.h\n ...\n"})}),"\n",(0,r.jsx)(n.h3,{id:"interface-independent-trace-client",children:"Interface Independent Trace Client"}),"\n",(0,r.jsxs)(n.p,{children:["When generating the monitor feature (or olink feature) you'll get an additional folder in the top most directory:",(0,r.jsx)(n.code,{children:"\ud83d\udcc2hello-world/apigear"}),". The ",(0,r.jsx)(n.code,{children:"\ud83d\udcc2tracer"})," subfolder contains a client for logging, with a network layer (based on the ",(0,r.jsx)(n.a,{href:"https://docs.pocoproject.org/current/Poco.Net.html",children:"POCO"})," library).\nThe class connects to the ",(0,r.jsx)(n.code,{children:"Apigear Trace Server"})," and takes care of formatting and sending the traces."]}),"\n",(0,r.jsx)(n.h3,{id:"monitor-1",children:"Monitor"}),"\n",(0,r.jsxs)(n.p,{children:["Files ",(0,r.jsx)(n.code,{children:"\ud83d\udcdchello.tracedecorator.h"})," and ",(0,r.jsx)(n.code,{children:"\ud83d\udcdchello.tracedecorator.cpp"})," contain the trace wrapper for the ",(0,r.jsx)(n.code,{children:"Hello"})," interface. The wrapper will be generated for each interface inside the API definition."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class HELLO_WORLD_EXAMPLE_IO_WORLD_EXPORT HelloTraceDecorator : public IHello, public IHelloSubscriber\n{\n    explicit HelloTraceDecorator(IHello& impl, ApiGear::PocoImpl::Tracer& tracer)\n\n...\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The tracer uses the implementation of ",(0,r.jsx)(n.code,{children:"IHello"})," - wraps each interface operation call and the notifications of property changed and signal emitted with a lgo to a monitor tool.\nThe other calls are just forwarded to your implementation - so you can use the ",(0,r.jsx)(n.code,{children:"HelloTraceDecorator"})," as a ",(0,r.jsx)(n.code,{children:"Hello"})," object."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The wrapped object ",(0,r.jsx)(n.code,{children:"IHello& impl"})," is just the object that fulfills the ",(0,r.jsx)(n.code,{children:"IHello"})," interface, so the implementation can be e.g. the ",(0,r.jsx)(n.a,{href:"/template-cpp14/docs/features/olink",children:(0,r.jsx)(n.code,{children:"OlinkClient"})})," version of ",(0,r.jsx)(n.code,{children:"Hello"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"\ud83d\udcdchello.tracer.h"})," and ",(0,r.jsx)(n.code,{children:"\ud83d\udcdchello.tracer.cpp"})," files contain helper to prepare interface specific trace data for the general tracing ",(0,r.jsx)(n.a,{href:"monitor#tracing-example",children:"TraceClient"})]}),"\n",(0,r.jsx)(n.h3,{id:"tracing-example",children:"Tracing example"}),"\n",(0,r.jsx)(n.p,{children:"Prepare an application (generate for both examples and monitor features) that uses the tracer:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'\nint main(){\n    ApiGear::PocoImpl::Tracer tracer;\n    tracer.connect("http://localhost:8182", "testExampleApp");\n    std::unique_ptr<IoWorld::IHello> helloImplementation = std::make_unique<IoWorld::Hello>();\n    std::unique_ptr<IoWorld::IHello> tracedHello = IoWorld::HelloTraceDecorator::connect(*helloImplementation, tracer);\n\n    // use your tracedHello as it was Hello implementation, all property changes, and signals and method execution and function calls will be traced.\n    auto lastMessage = tracedHello->getLast();\n    tracedHello->say(lastMessage, IoWorld::WhenEnum::Soon);\n    IoWorld::Message someMessage("the new content");\n    tracedHello->setLast(someMessage);\n    tracedHello->_getPublisher().publishJustSaid(someMessage);\n    return 0;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Make sure that you are using the same port for sending and receiving traces.\nFor sending: check yor setting for ",(0,r.jsx)(n.code,{children:"ApiGear::PocoImpl::Tracer"}),".\nFor receiver: go to the ApiGear Studio settings and set correct port number.\nBy default the address is set to ",(0,r.jsx)(n.code,{children:"ws://localhost:8182/ws"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},2295:(e,n,t)=>{t.d(n,{A:()=>r});const r='schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'}}]);
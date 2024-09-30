"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[4588],{929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(4848),a=t(8453);const i={sidebar_position:2},r="Monitoring Protocol",s={id:"advanced/monitor/protocol",title:"Monitoring Protocol",description:"The API Monitor protocol is a simple HTTP post call to a dedicated http server instance embedded in the ApiGear Studio / CLI.",source:"@site/docs/advanced/monitor/protocol.md",sourceDirName:"advanced/monitor",slug:"/advanced/monitor/protocol",permalink:"/docs/advanced/monitor/protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/monitor/protocol.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/advanced/monitor/intro"},next:{title:"Introduction",permalink:"/docs/advanced/simulation/intro"}},c={},l=[{value:"HTTP Tracing",id:"http-tracing",level:2},{value:"Tracing operation calls",id:"tracing-operation-calls",level:3},{value:"Tracing property changes",id:"tracing-property-changes",level:3},{value:"Reporting a signal notification",id:"reporting-a-signal-notification",level:3},{value:"Websocket Tracing",id:"websocket-tracing",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"monitoring-protocol",children:"Monitoring Protocol"})}),"\n",(0,o.jsx)(n.p,{children:"The API Monitor protocol is a simple HTTP post call to a dedicated http server instance embedded in the ApiGear Studio / CLI."}),"\n",(0,o.jsx)(n.p,{children:"The protocol allows to send property changes, operation calls and signals to the monitoring server."}),"\n",(0,o.jsx)(n.p,{children:"The message is typically a JSON message send to an HTTP endpoint depending if an operation call, state change or a signal is reported."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"An extended version of the monitoring protocol is planned to provide detailed API analytics information our upcoming cloud API analytics solution for devices."})}),"\n",(0,o.jsx)(n.h2,{id:"http-tracing",children:"HTTP Tracing"}),"\n",(0,o.jsx)(n.p,{children:"The http tracing endpoint can be looked up under ApiGear Studio settings page."}),"\n",(0,o.jsx)(n.p,{children:"All HTTP traces work in batch mode. You need to send an array of traces to the server. The oldest trace should be the first element in the array. This should normally be the order you recieve the traces from a FIFO queue."}),"\n",(0,o.jsx)(n.p,{children:"In case no ID was transferred we generate a running ID based on the current timestamp."}),"\n",(0,o.jsx)(n.h3,{id:"tracing-operation-calls",children:"Tracing operation calls"}),"\n",(0,o.jsx)(n.p,{children:"For an method call the message looks like this:"}),"\n",(0,o.jsxs)(n.p,{children:["An API call occurs when the client calls an method. The uri is the module name, joined with the interface name. A URI fragment (",(0,o.jsx)(n.code,{children:"#"}),") is added for the interface methods."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "type": "call",\n  "symbol": "${module}.${interface}/${method}",\n  "data": "${params}"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"tracing-property-changes",children:"Tracing property changes"}),"\n",(0,o.jsx)(n.p,{children:"A state change can be an partial update or a full update of all interface properties. The state is always an JSON object."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "type": "state",\n  "symbol": "${module}.${interface}",\n  "data": "${state}"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"reporting-a-signal-notification",children:"Reporting a signal notification"}),"\n",(0,o.jsx)(n.p,{children:"For an interface signal the message looks like this"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "type": "signal",\n  "symbol": "${module}.${interface}/${signal}",\n  "data": "${params}"\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"websocket-tracing",children:"Websocket Tracing"}),"\n",(0,o.jsx)(n.p,{children:"Tracing over web sockets uses the JSON-RPC protocol. The protocol is mostly the same as the http protocol."}),"\n",(0,o.jsxs)(n.p,{children:["The JSON RPC method is called ",(0,o.jsx)(n.code,{children:"trace"})," and uses the same endpoint as the simulation server for ApiGear Studio.\nWhere in the HTTP trace protocol the source as part of the endpoint, in the websocket protocol it is part of the message."]}),"\n",(0,o.jsxs)(n.p,{children:["Otherwise all parameters, especially also the ",(0,o.jsx)(n.code,{children:"type"})," are the same."]}),"\n",(0,o.jsx)(n.p,{children:"The websocket tracing endpoint can be looked up under ApiGear Studio settings page."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "trace",\n  "params": {\n    "id": "1000230240",\n    "source": "local-device",\n    "type": "call",\n    "symbol": "count.Counter/increment",\n    "data": {}\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(6540);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
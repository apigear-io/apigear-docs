"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[6975],{7991:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=n(4848),s=n(8453);const r={sidebar_position:5},a="Property Synchronization",i={id:"advanced/protocols/objectlink/properties",title:"Property Synchronization",description:"An object can contain a set of properties, which describe the data associated with the object. When a property changes, either locally or remote all linked objecta re notified about the changes and updated.",source:"@site/docs/advanced/protocols/objectlink/properties.md",sourceDirName:"advanced/protocols/objectlink",slug:"/advanced/protocols/objectlink/properties",permalink:"/docs/advanced/protocols/objectlink/properties",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/protocols/objectlink/properties.md",tags:[],version:"current",lastUpdatedAt:1727808477e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Method Invokation",permalink:"/docs/advanced/protocols/objectlink/methods"},next:{title:"Server Side Signals",permalink:"/docs/advanced/protocols/objectlink/signals"}},c={},l=[{value:"ApiGear Object Model",id:"apigear-object-model",level:2},{value:"Protocol Flow",id:"protocol-flow",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2}];function d(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"property-synchronization",children:"Property Synchronization"})}),"\n",(0,t.jsx)(o.p,{children:"An object can contain a set of properties, which describe the data associated with the object. When a property changes, either locally or remote all linked objecta re notified about the changes and updated."}),"\n",(0,t.jsx)(o.p,{children:"This allows to distribute data across all linked objects easily and share state between local and remote objects."}),"\n",(0,t.jsx)(o.h2,{id:"apigear-object-model",children:"ApiGear Object Model"}),"\n",(0,t.jsx)(o.p,{children:"In ApiGear properties are described as properties inside an interface."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:"name: org.demos\n\ninterfaces:\n  - name: Echo\n    properties:\n      - name: message\n        type: string\n"})}),"\n",(0,t.jsx)(o.p,{children:"The resulting simplified typescript code could look like this."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:'// org.demos.js\nclass Echo {\n  message: string = ""\n}\nconst echo = new Echo()\necho.message = "foo"\n'})}),"\n",(0,t.jsx)(o.h2,{id:"protocol-flow",children:"Protocol Flow"}),"\n",(0,t.jsx)(o.p,{children:"First the local object needs to be linked to a remote object."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:'--\x3e [ LINK, "org.demos.Echo"]\n'})}),"\n",(0,t.jsx)(o.p,{children:"Now the local object receive initial property list, which is automatically send after the link message."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"<-- [ INIT, 'org.demos.Echo', { message: \"hello\" } ]\n"})}),"\n",(0,t.jsx)(o.p,{children:"After the init message out local object is fully populated and all properties have valid values."}),"\n",(0,t.jsxs)(o.p,{children:['When a property is changed on the local object, for example from "hello" to "foo", a ',(0,t.jsx)(o.code,{children:"SET_PROPERTY"})," message is send."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:'--\x3e [ SET_PROPERTY, "org.demos.Echo/message", "foo"]\n'})}),"\n",(0,t.jsxs)(o.p,{children:["The remote object will then set the property and notify all linked objects about the changes using a ",(0,t.jsx)(o.code,{children:"PROPERTY_CHANGE"})," message, including the original sender."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:'<-- [ PROPERTY_CHANGE, "org.demos.Echo/message", "foo"]\n'})}),"\n",(0,t.jsx)(o.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,t.jsx)(o.p,{children:"After an object is linked propertie will be synced across all linked clients."}),"\n",(0,t.jsx)(o.mermaid,{value:"sequenceDiagram\nSink->Source: [SET_PROPERTY:int, PropertyId:string, Value:json]\nSource->Sink: [PROPERTY_CHANGED:int, PropertyId:string, Value:json]"})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>i});var t=n(6540);const s={},r=t.createContext(s);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);
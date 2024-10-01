"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[414],{1440:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const a={sidebar_position:2},r="API Foundation",o={id:"objectapi/core",title:"API Foundation",description:"ObjectAPI is defined in terms of modules inside a system. Each module is described as an ObjectAPI document.",source:"@site/docs/objectapi/core.md",sourceDirName:"objectapi",slug:"/objectapi/core",permalink:"/docs/objectapi/core",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/objectapi/core.md",tags:[],version:"current",lastUpdatedAt:1727808477e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/objectapi/intro"},next:{title:"API Modules",permalink:"/docs/objectapi/modules"}},c={},d=[{value:"Format",id:"format",level:2},{value:"Managing Documents",id:"managing-documents",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Primitives",id:"primitives",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Complex Types",id:"complex-types",level:2},{value:"Rich Text Formatting",id:"rich-text-formatting",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"api-foundation",children:"API Foundation"})}),"\n",(0,t.jsx)(n.p,{children:"ObjectAPI is defined in terms of modules inside a system. Each module is described as an ObjectAPI document."}),"\n",(0,t.jsx)(n.p,{children:"ObjectAPI is a YAML based specification to describe objects as interfaces."}),"\n",(0,t.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,t.jsx)(n.p,{children:"ObjectAPI is described as an open specification format using JSON Schema. Every ObjectAPI document must conform to this JSON schema definition."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"While the the API is described in JSON, other formats like YAML can be used as input formats and are automatically converted to JSON by the ObjectAPI tooling."})}),"\n",(0,t.jsx)(n.p,{children:"Unless otherwise noted all file names in this specification are case sensitive."}),"\n",(0,t.jsx)(n.h2,{id:"managing-documents",children:"Managing Documents"}),"\n",(0,t.jsx)(n.p,{children:"The ObjectAPI documents are simple files on the file system. Several files can be processed together and form a system. It is convention that the file name matches the module name."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"*.module.yaml"})," | ",(0,t.jsx)(n.code,{children:"*.module.json"})," - ObjectAPI document"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Other files can be added which contain meta information for the API modules. They allow to inject additional information which is not relevant or available during API definitions."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"*.module.meta.yaml"})," | ",(0,t.jsx)(n.code,{children:"*.module.meta.json"})," - ObjectAPI meta information injected into the relevant APIs."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["So if a module is name ",(0,t.jsx)(n.code,{children:"org.example"})," the ObjectAPI document should be called ",(0,t.jsx)(n.code,{children:"org.example.module.yaml"})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Outside of the ObjectAPI specification a solution document format is described which binds several modules together and links them to a code template for code generation."})}),"\n",(0,t.jsx)(n.h2,{id:"data-types",children:"Data Types"}),"\n",(0,t.jsx)(n.p,{children:"In the ObjectAPI specification data types are used in many locations. State, Method return types and parameters, signal parameters or structures."}),"\n",(0,t.jsx)(n.p,{children:"Data fields are added at the same level to describe the data name and type. For example for the interface properties, these are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"properties:\n  - name: count\n    type: int\n"})}),"\n",(0,t.jsx)(n.p,{children:"The general types available to ObjectAPI are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Primitive Types: ",(0,t.jsx)(n.code,{children:"bool"}),", ",(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"int32"}),", ",(0,t.jsx)(n.code,{children:"int64"}),", ",(0,t.jsx)(n.code,{children:"float"}),", ",(0,t.jsx)(n.code,{children:"float32"}),", ",(0,t.jsx)(n.code,{children:"float64"}),", ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:["Container Types: ",(0,t.jsx)(n.code,{children:"arrays"})]}),"\n",(0,t.jsxs)(n.li,{children:["Complex Types : ",(0,t.jsx)(n.code,{children:"structures"}),", ",(0,t.jsx)(n.code,{children:"enumerations"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"primitives",children:"Primitives"}),"\n",(0,t.jsx)(n.p,{children:"Data types can be re-presented in different forms in different programming languages. They all need to be convertible to JSON data types on request."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bool"})," - A simple boolean value (true or false)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"int32"}),", ",(0,t.jsx)(n.code,{children:"int64"})," - A signed integer value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"float"}),", ",(0,t.jsx)(n.code,{children:"float32"}),", ",(0,t.jsx)(n.code,{children:"float64"})," - A floating point value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"string"})," - A string value"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"arrays",children:"Arrays"}),"\n",(0,t.jsx)(n.p,{children:"An array is an index based list of primitive or complex data types. Further nesting of containers are not supported but can be achieved using structs as array items. A data type is converted into a container by setting the type to array and specifying the containing type in the items key."}),"\n",(0,t.jsx)(n.p,{children:"For example an integer array can be noted like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"properties:\n  - name: names\n    type: string\n    array: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"If an array does contain a symbol as containing type, then the symbol name can be used in the items key."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"properties:\n  - name: messages\n    type: Message\n    array: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Primitive types are always start with a lower case character and symbols always with an upper case character."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The code templates will change the casing based on the target language preferences."})}),"\n",(0,t.jsx)(n.h2,{id:"complex-types",children:"Complex Types"}),"\n",(0,t.jsx)(n.p,{children:"A symbol is a named element inside a module. This can be either an interface, struct or enum/flag symbol."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"structs:\n  - name: Message\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Inside the same module the type can be referenced by the name of the symbol using a ",(0,t.jsx)(n.code,{children:"ref"}),". This holds true for all symbols."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"properties:\n  - name: msg1\n    type: Message\n  - name: msg2\n    type: Message\n    array: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Outside the module, the module itself needs to be imported and the type needs to be used with its fully qualified name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"imports:\n  - org.example\n\ninterfaces:\n  - name: Interface1\n    properties:\n      - name: msg1\n        type: org.example.Message\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"org.example.Message"})," - external symbol"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note: Not every language profile does support importing."}),"\n",(0,t.jsx)(n.h2,{id:"rich-text-formatting",children:"Rich Text Formatting"}),"\n",(0,t.jsxs)(n.p,{children:["Throughout the specification ",(0,t.jsx)(n.code,{children:"description"})," support the markdown syntax."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
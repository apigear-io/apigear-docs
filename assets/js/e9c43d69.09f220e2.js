"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[4342],{5970:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(4848),i=r(8453);const s={sidebar_position:5},l="Symbol Reference",a={id:"advanced/maker/symbols",title:"Symbol Reference",description:"When developing technology templates it is vital to understand what each symbol traversing has to offer on properties. ObjectAPI is structured based on the idea of modules, interfaces, structures and enumerations.",source:"@site/docs/advanced/maker/symbols.md",sourceDirName:"advanced/maker",slug:"/advanced/maker/symbols",permalink:"/docs/advanced/maker/symbols",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/maker/symbols.md",tags:[],version:"current",lastUpdatedAt:1675172564e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Filter Reference",permalink:"/docs/advanced/maker/filters"},next:{title:"Rules Document",permalink:"/docs/advanced/maker/rules"}},o={},d=[{value:"Named Element",id:"named-element",level:2},{value:"Typed Element",id:"typed-element",level:2},{value:"Module",id:"module",level:2},{value:"Information",id:"information",level:3},{value:"Interface",id:"interface",level:2},{value:"Property",id:"property",level:3},{value:"Operation",id:"operation",level:3},{value:"Signal",id:"signal",level:3},{value:"Structure",id:"structure",level:2},{value:"Field",id:"field",level:3},{value:"Enumeration",id:"enumeration",level:2},{value:"Member",id:"member",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"symbol-reference",children:"Symbol Reference"})}),"\n",(0,t.jsx)(n.p,{children:"When developing technology templates it is vital to understand what each symbol traversing has to offer on properties. ObjectAPI is structured based on the idea of modules, interfaces, structures and enumerations."}),"\n",(0,t.jsx)(n.p,{children:"And an interface contains properties, operations and signals and structures contain fields and enumerations contain members."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type System struct {\n    Name string\n    Modules []Module\n}\n\ntype Module struct {\n    Name string\n    Interfaces []Interface\n    Structures []Structure\n    Enumerations []Enumeration\n}\n\ntype Interface struct {\n    Name string\n    Properties []TypedElement\n    Operations []Operation\n    Signals []Signal\n}\n\ntype TypedElement struct {\n    Name string\n    Type Type\n}\n\ntype Operation struct {\n    Name string\n    Params []TypedElement\n    Return Type\n}\n\ntype Signal struct {\n    Name string\n    Params []TypedElement\n}\n\ntype Structure struct {\n    Name string\n    Fields []TypedElement\n}\n\ntype Enumeration struct {\n    Name string\n    Members []ValueElement\n}\n\ntype ValueElement struct {\n    Name string\n    Value string\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each symbol you can iterate over is either element or an element with additional type information."}),"\n",(0,t.jsx)(n.h2,{id:"named-element",children:"Named Element"}),"\n",(0,t.jsx)(n.p,{children:"Named element is the base element for all symbols. It contains the following properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": string","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"name of the element"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": string","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"test to describe the element"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Meta"}),": object","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"free form data, evaluated by the technology template"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": string","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"one of [module, interface, struct, enum, property, operation, signal]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"typed-element",children:"Typed Element"}),"\n",(0,t.jsx)(n.p,{children:"Typed element is a named element with additional properties for typing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"})," type information","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"one of [bool, int, float, string] or reference to interface, struct, enum"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Array"}),": true if the type is an array"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IsPrimitive"}),": primitive type","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"type is one of [bool, int, float, string]"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IsSymbol"}),": is reference to type","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"type is one of struct, enum, interface"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IsPrimitiveArray"}),": array with items of primitive type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IsSymbolArray"}),": array with item of reference to type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IsArray"}),": true if the type is an array"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"module",children:"Module"}),"\n",(0,t.jsx)(n.p,{children:"The module is an element with additional version and an information object. Additional it contains a list of interfaces, structures and enumerations"}),"\n",(0,t.jsx)(n.p,{children:"All information from the element plus"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Version"}),": string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Info"}),": information object"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Interfaces"}),": array of interface elements"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Structs"}),": array of struct elements"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enums"}),": array of enum elements"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"information",children:"Information"}),"\n",(0,t.jsx)(n.p,{children:"The information object allows customers to provide additional information about the API."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Title"}),": string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"TermsOfService"}),": string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact"}),": is an object consisting of ",(0,t.jsx)(n.strong,{children:"name"}),", ",(0,t.jsx)(n.strong,{children:"url"})," and ",(0,t.jsx)(n.strong,{children:"email"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"License"}),": is an object containing of ",(0,t.jsx)(n.strong,{children:"name"})," and ",(0,t.jsx)(n.strong,{children:"url"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.p,{children:"The interface is an container element for properties, operations and signals."}),"\n",(0,t.jsx)(n.p,{children:"All information from the element plus"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Properties"}),": array of property elements"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Operations"}),": array of operation elements"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Signals"}),": array of signal elements"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,t.jsx)(n.p,{children:"Property is a typed element."}),"\n",(0,t.jsx)(n.p,{children:"All information from the typed element."}),"\n",(0,t.jsx)(n.h3,{id:"operation",children:"Operation"}),"\n",(0,t.jsx)(n.p,{children:"Operation is a named element with an additional list of typed parameters. The return element defines the return type."}),"\n",(0,t.jsx)(n.p,{children:"All information from the typed element plus"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Params"}),": array of typed elements"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Return"}),": type information"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"signal",children:"Signal"}),"\n",(0,t.jsx)(n.p,{children:"Signal is a typed element and has the same signature as operation, besides the return type information is ignored."}),"\n",(0,t.jsx)(n.p,{children:"All information from the typed element plus"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Params"}),": array of typed elements"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(n.p,{children:"Structure is an element and act as a container for fields."}),"\n",(0,t.jsx)(n.p,{children:"All information from the element, plus"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fields"}),": array of typed elements"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"field",children:"Field"}),"\n",(0,t.jsx)(n.p,{children:"Field is a typed element."}),"\n",(0,t.jsx)(n.p,{children:"All information from the typed element"}),"\n",(0,t.jsx)(n.h2,{id:"enumeration",children:"Enumeration"}),"\n",(0,t.jsx)(n.p,{children:"Enumeration is an element and act as a container for members."}),"\n",(0,t.jsx)(n.p,{children:"All information from the element, plus"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Members"}),": array of member"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member",children:"Member"}),"\n",(0,t.jsx)(n.p,{children:"Member is a element with an additional value."}),"\n",(0,t.jsx)(n.p,{children:"All information from the named element, plus"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Value"}),": the value of the member"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
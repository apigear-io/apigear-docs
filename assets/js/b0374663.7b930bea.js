"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[7577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(n),p=r,f=s["".concat(u,".").concat(p)]||s[p]||d[p]||l;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:6},i="Rules Document",o={unversionedId:"advanced/maker/rules",id:"advanced/maker/rules",title:"Rules Document",description:"The rules document defines the context for each document to be transformed.",source:"@site/docs/advanced/maker/rules.md",sourceDirName:"advanced/maker",slug:"/advanced/maker/rules",permalink:"/docs/advanced/maker/rules",draft:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/maker/rules.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Symbol Reference",permalink:"/docs/advanced/maker/symbols"},next:{title:"API Monitoring",permalink:"/docs/category/api-monitoring"}},u={},c=[{value:"Features",id:"features",level:2},{value:"Feature dependencies",id:"feature-dependencies",level:3},{value:"Scopes",id:"scopes",level:2},{value:"Match logic",id:"match-logic",level:3},{value:"Documents",id:"documents",level:2}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rules-document"},"Rules Document"),(0,r.kt)("p",null,"The rules document defines the context for each document to be transformed."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Features are an isolated part of the code generator. When running the code generator features can be enabled and disable."),(0,r.kt)("p",null,"A feature is declared by name inside the features root tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n  - name: feature1\n  - name: feature2\n")),(0,r.kt)("p",null,"A feature can contain a prefix target path as also a scope for documents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n  - name: feature1\n    prefix: {{module.name}}/\n")),(0,r.kt)("p",null,"Typical features are ",(0,r.kt)("inlineCode",{parentName:"p"},"api"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scaffold")," but also protocols like ",(0,r.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wamp"),"."),(0,r.kt)("p",null,"A feature can have these properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"needs"),": defines feature flag which other features need to be enabled"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix"),": defines a prefix output path"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope"),": defines a scope for documents with a match expression (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"system"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"module"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"interface"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"struct"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"enum"),")")),(0,r.kt)("h3",{id:"feature-dependencies"},"Feature dependencies"),(0,r.kt)("p",null,"Needs allows to define a dependency between features. For example the ",(0,r.kt)("inlineCode",{parentName:"p"},"scaffold")," feature needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," feature to be enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n  - name: api\n  - name: scaffold\n    needs:\n      - api\n")),(0,r.kt)("h2",{id:"scopes"},"Scopes"),(0,r.kt)("p",null,"A scope defined the context for the template for language for the defined documents. The context defines the available objects available inside the template language. For example a module scope will always have defined ",(0,r.kt)("inlineCode",{parentName:"p"},"features"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"system")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," in the template document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n  - name: feature1\n    scopes:\n      - match: system\n        documents:\n          - { source: system.go, target: system.go }\n      - match: module\n        documents:\n          - { source: module.go, target: module.go }\n      - match: interface\n        documents:\n          - { source: interface.go, target: interface.go }\n      - match: struct\n        documents:\n          - { source: struct.go, target: struct.go }\n      - match: enum\n        documents:\n          - { source: enum.go, target: enum.go }\n")),(0,r.kt)("p",null,"A scope with the match ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," iterates over all interfaces in all modules and has defined a context with ",(0,r.kt)("inlineCode",{parentName:"p"},"features"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"system")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," and the current ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," in it."),(0,r.kt)("h3",{id:"match-logic"},"Match logic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"match: ",(0,r.kt)("inlineCode",{parentName:"li"},"system"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"called once for the system"),(0,r.kt)("li",{parentName:"ul"},"context => ",(0,r.kt)("inlineCode",{parentName:"li"},"{ features, system }")))),(0,r.kt)("li",{parentName:"ul"},"match: ",(0,r.kt)("inlineCode",{parentName:"li"},"module"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"called for each module"),(0,r.kt)("li",{parentName:"ul"},"context => ",(0,r.kt)("inlineCode",{parentName:"li"},"{ features, system, module }")))),(0,r.kt)("li",{parentName:"ul"},"match: ",(0,r.kt)("inlineCode",{parentName:"li"},"interface"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"called once per interface in all modules"),(0,r.kt)("li",{parentName:"ul"},"context => ",(0,r.kt)("inlineCode",{parentName:"li"},"{ features, system, module, interface }")))),(0,r.kt)("li",{parentName:"ul"},"match: ",(0,r.kt)("inlineCode",{parentName:"li"},"struct"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"called once per struct in all modules"),(0,r.kt)("li",{parentName:"ul"},"context => ",(0,r.kt)("inlineCode",{parentName:"li"},"{ features, system, module, struct }")))),(0,r.kt)("li",{parentName:"ul"},"match: ",(0,r.kt)("inlineCode",{parentName:"li"},"enum"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"called once per enum in all modules"),(0,r.kt)("li",{parentName:"ul"},"context => ",(0,r.kt)("inlineCode",{parentName:"li"},"{ features, system, module, enum }"))))),(0,r.kt)("h2",{id:"documents"},"Documents"),(0,r.kt)("p",null,"A document defines the source template and the target where to write the document."),(0,r.kt)("p",null,"The document define the source, target and some additional flags for writing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source"),": source path inside the templates directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target"),": target template string inside the output directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"force"),": if true, the document will be forced to be overwritten when re-generated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raw"),": if true, document will be just copied and not treated as template. Raw if off by default.")))}s.isMDXComponent=!0}}]);
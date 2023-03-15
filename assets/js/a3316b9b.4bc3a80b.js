"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[2464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},l="Golang SDK Template",s={unversionedId:"sdk/go-sdk",id:"sdk/go-sdk",title:"Golang SDK Template",description:"The Go template generates a Golang module based on the module name and exposes clean interfaces based on the module interface. A core API which contain the single source of truth and a module code which is created as scaffolding code. For each interface a test file is also created.",source:"@site/docs/sdk/go-sdk.md",sourceDirName:"sdk",slug:"/sdk/go-sdk",permalink:"/docs/sdk/go-sdk",draft:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/sdk/go-sdk.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Python SDK Template",permalink:"/docs/sdk/python-sdk"},next:{title:"Typescript SDK Template",permalink:"/docs/sdk/typescript-sdk"}},i={},c=[{value:"Interfaces",id:"interfaces",level:2},{value:"Data Structures",id:"data-structures",level:2},{value:"Enumerations",id:"enumerations",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"golang-sdk-template"},"Golang SDK Template"),(0,r.kt)("p",null,"The Go template generates a Golang module based on the module name and exposes clean interfaces based on the module interface. A core API which contain the single source of truth and a module code which is created as scaffolding code. For each interface a test file is also created."),(0,r.kt)("p",null,"The Go module allows to be extended and implemented based on the API core and the scaffolding files."),(0,r.kt)("p",null,"Following template feature switches are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API - Only creates the interface files for you"),(0,r.kt)("li",{parentName:"ul"},"Scaffold - Creates a full project with reference implementation and build system support.")),(0,r.kt)("p",null,"In the generated source code you will find a ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," which explain in great detail how to build and use the code."),(0,r.kt)("h1",{id:"api"},"API"),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"An interface like this counter will be directly transformed to an abstract C++ class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"interfaces:\n  - name: Counter\n    properties:\n      - name: count\n        type: int\n    operations:\n      - name: increment\n")),(0,r.kt)("p",null,"The class will then later be used to be implemented by the customer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Counter interface {\n    GetCount() int\n    SetCount(count int)\n    Increment()\n}\n")),(0,r.kt)("h2",{id:"data-structures"},"Data Structures"),(0,r.kt)("p",null,"A data structure like this message which contains one field, called text is transformed into a C++ class with public fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"structs:\n  - name: Message\n    fields:\n      - name: text\n        type: string\n")),(0,r.kt)("p",null,"A data structure is transformed to a Go struct type. As these API structs shall be able to be used outside of the module the fields are public."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Message struct {\n    Text string = ""\n}\n')),(0,r.kt)("h2",{id:"enumerations"},"Enumerations"),(0,r.kt)("p",null,"A enumeration will be transformed to a set of constants."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"enums:\n  - name: Direction\n    members:\n      - name: Up\n      - name: Down\n      - name: Left\n      - name: Right\n")),(0,r.kt)("p",null,"This is transformed to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Direction int\n\nconst (\n  Up = 1\n  Down = 2\n  Left = 3\n  Right = 4\n)\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[7266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4},i="Method Invokation",c={unversionedId:"advanced/objectlink/methods",id:"advanced/objectlink/methods",title:"Method Invokation",description:"A remote invokation invokes asynchronously a method on a remote object and returns the result.",source:"@site/docs/advanced/objectlink/methods.md",sourceDirName:"advanced/objectlink",slug:"/advanced/objectlink/methods",permalink:"/docs/advanced/objectlink/methods",draft:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/objectlink/methods.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Lifecycle",permalink:"/docs/advanced/objectlink/lifecycle"},next:{title:"Property Synchronization",permalink:"/docs/advanced/objectlink/properties"}},l={},s=[{value:"ApiGear Object Model",id:"apigear-object-model",level:2},{value:"Protocol Flow",id:"protocol-flow",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"method-invokation"},"Method Invokation"),(0,r.kt)("p",null,"A remote invokation invokes asynchronously a method on a remote object and returns the result."),(0,r.kt)("h2",{id:"apigear-object-model"},"ApiGear Object Model"),(0,r.kt)("p",null,"To model methods in ApiGear you define an interface with operations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: org.demos\n\ninterfaces:\n  - name: Echo\n    operations:\n      - name: say\n        params:\n        - name: msg\n          type: string\n        type: string\n")),(0,r.kt)("p",null,"The operations will be generated as methods of the object. This will look simplified like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// org.demos.js\nclass Echo {\n  async say(msg: string): string\n}\n\nconst echo = new Echo()\nconsole.log(echo.say("hello"))\n$> hello\n')),(0,r.kt)("h2",{id:"protocol-flow"},"Protocol Flow"),(0,r.kt)("p",null,"To invoke remote method an method name and the method arguments must be specified. The reply can only have on value, which can have any complexity."),(0,r.kt)("p",null,"The local object sends an ",(0,r.kt)("inlineCode",{parentName:"p"},"INVOKE")," message to the remote object using a request id, the method name and method arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'--\x3e [ INVOKE, 1, "org.demos.Echo/say", ["echo"]]\n')),(0,r.kt)("p",null,"The remote object executes the method and returns the reply or an error message in case of failure. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<-- [ INVOKE_REPLY, 1, "echo"]\n')),(0,r.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,r.kt)("p",null,"After an object is linked remote methods can be called."),(0,r.kt)("mermaid",{value:"sequenceDiagram\nSink->Source: [INVOKE:int, RequestId:int, MethodId:string, Args:jsonArray]\nSource->Sink: [INVOKE_REPLY:int, RequestId:int, MethodId:string, Value:Json]"}))}p.isMDXComponent=!0}}]);
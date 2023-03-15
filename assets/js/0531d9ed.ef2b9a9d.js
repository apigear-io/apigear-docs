"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[9129],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:6},i="Server Side Signals",l={unversionedId:"advanced/objectlink/signals",id:"advanced/objectlink/signals",title:"Server Side Signals",description:"Signals re used to  notify the local object about changes on the remote object.",source:"@site/docs/advanced/objectlink/signals.md",sourceDirName:"advanced/objectlink",slug:"/advanced/objectlink/signals",permalink:"/docs/advanced/objectlink/signals",draft:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/objectlink/signals.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Property Synchronization",permalink:"/docs/advanced/objectlink/properties"},next:{title:"Error Messages",permalink:"/docs/advanced/objectlink/errors"}},c={},s=[{value:"ApiGear Object Model",id:"apigear-object-model",level:2},{value:"Protocol Flow",id:"protocol-flow",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"server-side-signals"},"Server Side Signals"),(0,o.kt)("p",null,"Signals re used to  notify the local object about changes on the remote object."),(0,o.kt)("h2",{id:"apigear-object-model"},"ApiGear Object Model"),(0,o.kt)("p",null,"Signals can be modeled using ApiGear as signals of an interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: org.demos\n\ninterfaces:\n  - name: Echo\n    signals:\n      - name: shutdown\n        params:\n        - name: timeout\n          type: int\n")),(0,o.kt)("p",null,"The resulting code will look somehow like this and most often will require a lambda function to be used for the notification.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// org.demos.js\nclass Echo {\n  onShutdown(callback)  \n}\nconst echo = new Echo()\necho.onShutdown( (timeout) => {\n    console.log('timeout: ', timeout);\n})\n")),(0,o.kt)("h2",{id:"protocol-flow"},"Protocol Flow"),(0,o.kt)("p",null,"To receive signals the local object needs to be linked to the remote object first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'--\x3e [ LINK, "org.demos.Echo"]\n')),(0,o.kt)("p",null,"Then the remote object can send at any time signals to the linked client objects and notify them on changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<-- [ SIGNAL, "org.demos.Echo/shutdown", [10]]\n')),(0,o.kt)("p",null,"To stop receiving signals, just unlink the remote object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'--\x3e [ UNLINK, "org.demos.Echo"]\n')),(0,o.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,o.kt)("p",null,"After an object is linked server side signals will be send."),(0,o.kt)("mermaid",{value:"sequenceDiagram\nSource->Sink: [SIGNAL:int, SignalId:string, Args:jsonArray]"}))}p.isMDXComponent=!0}}]);
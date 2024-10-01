"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[6811],{4309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(4848),i=t(8453);const o={sidebar_position:3},s="Actions Reference",r={id:"advanced/simulation/actions",title:"Actions Reference",description:"An action is a command for the simulation engine to change a value or to communicate a change. The action is an object with a key of the action command and a object value as the action arguments. Actions are part of scenario documents.",source:"@site/docs/advanced/simulation/actions.md",sourceDirName:"advanced/simulation",slug:"/advanced/simulation/actions",permalink:"/docs/advanced/simulation/actions",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/simulation/actions.md",tags:[],version:"current",lastUpdatedAt:1694166994e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Scenario Documents",permalink:"/docs/advanced/simulation/scenario"},next:{title:"Network Protocol",permalink:"/docs/advanced/simulation/protocols"}},c={},l=[{value:"<code>$set</code>",id:"set",level:2},{value:"<code>$update</code>",id:"update",level:2},{value:"<code>$signal</code>",id:"signal",level:2},{value:"<code>$return</code>",id:"return",level:2},{value:"<code>$change</code>",id:"change",level:2},{value:"<code>$call</code>",id:"call",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"actions-reference",children:"Actions Reference"})}),"\n",(0,a.jsx)(n.p,{children:"An action is a command for the simulation engine to change a value or to communicate a change. The action is an object with a key of the action command and a object value as the action arguments. Actions are part of scenario documents."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"$command: { options }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set",children:(0,a.jsx)(n.code,{children:"$set"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"$set"})," action sets a value of a property. The default case it sets the value of the default interface. The value can be a primitive or a object."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# set the property `count` to `0`\n$set: { count: 0 }\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or using an object"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# set the property `position` to `{ x: 10, y: 20 }`\n$set: { position: { x: 10, y: 20 } }\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The set command will change the property value and also emit a property change signal. The change signal is emitted automatically when a property is changed using the ",(0,a.jsx)(n.code,{children:"$set"})," action."]}),"\n",(0,a.jsx)(n.h2,{id:"update",children:(0,a.jsx)(n.code,{children:"$update"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"$update"})," action updates a partial value of a property. The default case it updates the value of the default interface. The value can be a primitive or a object. Different from ",(0,a.jsx)(n.code,{children:"$set"})," the value is merged with the existing value."]}),"\n",(0,a.jsx)(n.p,{children:"This is useful when the value is an object and only a part of the object needs to be changed."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# set the property `position` to `{ x: 10, y: 20 }`\n- $set { position: { x: 10, y: 20 } }\n# partially update the property `position` property to `{ x: 30, y: 20 }`\n- $update { position: { x: 30 } }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"signal",children:(0,a.jsx)(n.code,{children:"$signal"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"$signal"})," action emits a signal from the simulation. The default case it emits the signal from the default interface. The value is an array of arguments, which are the arguments of the signal, as defined in the API."]}),"\n",(0,a.jsxs)(n.p,{children:["For example a signal ",(0,a.jsx)(n.code,{children:"shutdown"})," with an argument ",(0,a.jsx)(n.code,{children:"timeout"})," can be emitted like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# emit the signal `shutdown` with the argument `timeout` set to `5`\n$signal: { shutdown: [ 5 ] }  x\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["To directly emit a signal from the client it is possible to use invoke operation, but with a ",(0,a.jsx)(n.code,{children:"$signal."})," prefix of the signal name. For example to emit the ",(0,a.jsx)(n.code,{children:"shutdown"})," signal from the client it can be done like this:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'client.invoke("$signal.shutdown", [ 5 ])\n'})}),(0,a.jsx)(n.p,{children:"This will send the invoke message to the simulation and the simulation will emit the signal. There is no return value from the invoke operation."})]}),"\n",(0,a.jsx)(n.h2,{id:"return",children:(0,a.jsx)(n.code,{children:"$return"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"$return"})," action returns a result from an operation. The default case it returns the result from the default interface. The value to return is given in the result key of the action object."]}),"\n",(0,a.jsxs)(n.p,{children:["For example a result ",(0,a.jsx)(n.code,{children:"1"})," from an operation it can be returned like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# returns the result `1` from the operation\n$return: { result: 1 }\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To return an object as result, use the ",(0,a.jsx)(n.code,{children:"result"})," key:"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"If several return commands are used in a step, only the last one is returned."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# will return the result `{ x: 10, y: 20 }` from the operation\n$return: { result: { x: 10, y: 20 } }\n"})}),"\n",(0,a.jsx)(n.p,{children:"The receiving client must know the type of the result to be able to parse it."}),"\n",(0,a.jsx)(n.h2,{id:"change",children:(0,a.jsx)(n.code,{children:"$change"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"$change"})," action emits a property change signal from the simulation. The default case it emits the signal from the default interface. The value is property name and the new value."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# emits the property change signal `count` with value `1`\n$change: { count: 1 }\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The change command will not change the property. It is used to simulate a property change from the outside. The change signal is emitted automatically when a property is changed using the ",(0,a.jsx)(n.code,{children:"$set"})," action."]}),"\n",(0,a.jsx)(n.p,{children:"It is also possible to change several properties at once:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# emits the property change signal `count` and 'position' with their values\n$change: { count: 1, position: { x: 10, y: 20 } }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"call",children:(0,a.jsx)(n.code,{children:"$call"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"$call"})," action calls an operation from the simulation. The default case it calls the operation from the default interface. The value is the operation name and the arguments."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# calls the operation `increment` with the argument `1` inside the simulation\n$call: { increment: [1] }\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"You need to make sure you do not recurse into an infinite loop, by calling an operation that calls the same operation again."})}),"\n",(0,a.jsx)(n.p,{children:"You can also call several operations at once. We can currently not guarantee the order of operations. The last operation result is returned. If an error occurs, the error is returned and no result."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# will call the operation `increment` with the argument `1`\n# and then call the operation `decrement` with the argument `1`\n$call: { increment: [1], decrement: [1] }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(6540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
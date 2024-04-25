"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[343],{70137:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(74848),l=t(28453);const i={sidebar_position:5},s="SDK Templates",o={id:"cli/template",title:"SDK Templates",description:"The CLI allows you to fully manage the SDK templates. You can install, update and remove templates. The templates are stored in a local folder on your drive. The default location is ~/.apigear/templates. You can change the location using the APIGEAR_TEMPLATES environment variable.",source:"@site/docs/cli/template.md",sourceDirName:"cli",slug:"/cli/template",permalink:"/docs/cli/template",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/cli/template.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"API Simulation",permalink:"/docs/cli/simulate"},next:{title:"Project Management",permalink:"/docs/cli/project"}},r={},c=[{value:"Search Templates",id:"search-templates",level:2},{value:"Install a Template",id:"install-a-template",level:2},{value:"Remove a Template",id:"remove-a-template",level:2},{value:"List Installed Templates",id:"list-installed-templates",level:2}];function m(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"sdk-templates",children:"SDK Templates"}),"\n",(0,n.jsxs)(a.p,{children:["The CLI allows you to fully manage the SDK templates. You can install, update and remove templates. The templates are stored in a local folder on your drive. The default location is ",(0,n.jsx)(a.code,{children:"~/.apigear/templates"}),". You can change the location using the ",(0,n.jsx)(a.code,{children:"APIGEAR_TEMPLATES"})," environment variable."]}),"\n",(0,n.jsx)(a.h2,{id:"search-templates",children:"Search Templates"}),"\n",(0,n.jsxs)(a.p,{children:["You can search for templates using the ",(0,n.jsx)(a.code,{children:"apigear template search"})," command. The command will search for templates in the cloud and print the result."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"apigear template search <name>\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"name"})," argument is optional. If you specify a name the command will search for templates with a matching name. If you omit the name the command will search for all templates."]}),"\n",(0,n.jsx)(a.h2,{id:"install-a-template",children:"Install a Template"}),"\n",(0,n.jsxs)(a.p,{children:["To install a template you need to know the name of the template. The name is the same as the name of the template in the ",(0,n.jsx)(a.a,{href:"https://github.com/apigear-io/registry",children:"ApiGear Registry"}),". You can find the name in the template details page."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"apigear template install <name>\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"name"})," argument is the name of the template. The command will install the template in the local template folder. The default location is ",(0,n.jsx)(a.code,{children:"~/.apigear/templates"}),". You can change the location using the ",(0,n.jsx)(a.code,{children:"APIGEAR_TEMPLATES"})," environment variable."]}),"\n",(0,n.jsx)(a.h1,{id:"template-info",children:"Template Info"}),"\n",(0,n.jsxs)(a.p,{children:["You can get information about a template using the ",(0,n.jsx)(a.code,{children:"apigear template info"})," command. The command will print the details of the template."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"apigear template info <name>\n"})}),"\n",(0,n.jsx)(a.p,{children:"The information includes the name, version, description and features of the template."}),"\n",(0,n.jsx)(a.h1,{id:"update-a-template",children:"Update a Template"}),"\n",(0,n.jsx)(a.p,{children:"To update a template you need to know the name of the template. The name is the same as the name of the template in the ApiGear Registry. You can find the name in the template details page."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"apigear template update <name>\n"})}),"\n",(0,n.jsx)(a.p,{children:"The update will update to the latest version by default but it's also possible to specify a version."}),"\n",(0,n.jsx)(a.h2,{id:"remove-a-template",children:"Remove a Template"}),"\n",(0,n.jsxs)(a.p,{children:["You can remove a template by name. The name can be found using the ",(0,n.jsx)(a.code,{children:"list"})," command."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"apigear template remove <name>\n"})}),"\n",(0,n.jsx)(a.h2,{id:"list-installed-templates",children:"List Installed Templates"}),"\n",(0,n.jsxs)(a.p,{children:["You can list all installed templates using the ",(0,n.jsx)(a.code,{children:"apigear template list"})," command. The command will print the name and version of all installed templates."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"apigear template list\n"})})]})}function d(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var n=t(96540);const l={},i=n.createContext(l);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[4148],{72542:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=c(74848),r=c(28453);const o={},a="Project Management",i={id:"cli/project",title:"Project Management",description:"The project command allows you to manage your projects. Projects are a collection of APIs and SDKs. You can create, list, delete and switch between projects.",source:"@site/docs/cli/project.md",sourceDirName:"cli",slug:"/cli/project",permalink:"/docs/cli/project",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/cli/project.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"SDK Templates",permalink:"/docs/cli/template"},next:{title:"Introduction",permalink:"/docs/sdk/intro"}},s={},l=[{value:"Create a new project",id:"create-a-new-project",level:2},{value:"List recent projects",id:"list-recent-projects",level:2},{value:"Delete a project",id:"delete-a-project",level:2},{value:"Switch between projects",id:"switch-between-projects",level:2},{value:"Project configuration",id:"project-configuration",level:2},{value:"Create documents in the project folder",id:"create-documents-in-the-project-folder",level:2},{value:"Pack a Project",id:"pack-a-project",level:2},{value:"Share a Project",id:"share-a-project",level:2},{value:"Import a Project",id:"import-a-project",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"project-management",children:"Project Management"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"project"})," command allows you to manage your projects. Projects are a collection of APIs and SDKs. You can create, list, delete and switch between projects."]}),"\n",(0,n.jsx)(t.h2,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,n.jsxs)(t.p,{children:["To create a project use the ",(0,n.jsx)(t.code,{children:"new"})," command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apigear project new <project-name>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"list-recent-projects",children:"List recent projects"}),"\n",(0,n.jsxs)(t.p,{children:["To list all projects use the ",(0,n.jsx)(t.code,{children:"list"})," command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apigear project list\n"})}),"\n",(0,n.jsx)(t.p,{children:"It will show the recently used projects first."}),"\n",(0,n.jsx)(t.h2,{id:"delete-a-project",children:"Delete a project"}),"\n",(0,n.jsxs)(t.p,{children:["To delete a project use the ",(0,n.jsx)(t.code,{children:"delete"})," command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apigear project delete <project-name>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"switch-between-projects",children:"Switch between projects"}),"\n",(0,n.jsxs)(t.p,{children:["To switch between projects use the ",(0,n.jsx)(t.code,{children:"switch"})," command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apigear project switch <project-name>\n"})}),"\n",(0,n.jsx)(t.p,{children:"It will switch the current project to the specified project."}),"\n",(0,n.jsx)(t.h2,{id:"project-configuration",children:"Project configuration"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"project"})," command stores the project configuration in the ",(0,n.jsx)(t.code,{children:"<project>/.apigear"})," file. The configuration file contains the following information."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'# .apigear\n{\n    "folder": "apigear",\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"folder"})," property specifies the folder where the project configuration is stored. The default value is ",(0,n.jsx)(t.code,{children:"apigear"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"create-documents-in-the-project-folder",children:"Create documents in the project folder"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"create"})," command allows you to create documents in the project folder. The following documents can be created: API Modules, API Solutions and API Scenarios."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apigear create <document-type> <document-name>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The document will be created in the ",(0,n.jsx)(t.code,{children:"apigear"})," folder of the current project. The ",(0,n.jsx)(t.code,{children:"document-type"})," can be one of the following values: ",(0,n.jsx)(t.code,{children:"module"}),", ",(0,n.jsx)(t.code,{children:"solution"})," or ",(0,n.jsx)(t.code,{children:"scenario"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"pack-a-project",children:"Pack a Project"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"pack"})," command allows you to pack a project. It will create a zip file containing all project documents."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apigear project pack <project-name>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"share-a-project",children:"Share a Project"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"share"})," command allows you to share a project. It will create a zip file containing all project documents and upload it to the ApiGear platform."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apigear project share <project-name>\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"This feature is currently not available and will be added in a future release."})}),"\n",(0,n.jsx)(t.h2,{id:"import-a-project",children:"Import a Project"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"import"})," command allows you to import a project. It will download a zip file containing all project documents from the ApiGear platform and unpack it."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apigear project import <project-name>\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"This feature is currently not available and will be added in a future release."})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,c)=>{c.d(t,{R:()=>a,x:()=>i});var n=c(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[8653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},i="First Steps",l={unversionedId:"start/first_steps",id:"start/first_steps",title:"First Steps",description:"ObjectAPI and the ApiGear tooling are an open source project to improve the current way of integrating software.",source:"@site/docs/start/first_steps.md",sourceDirName:"start",slug:"/start/first_steps",permalink:"/docs/start/first_steps",draft:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/start/first_steps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/docs/start/install"},next:{title:"Guide",permalink:"/docs/category/guide"}},s={},p=[{value:"Using the Studio",id:"using-the-studio",level:2},{value:"First Project",id:"first-project",level:2},{value:"Install Code Templates",id:"install-code-templates",level:2},{value:"Create a Solution",id:"create-a-solution",level:2},{value:"Code generation",id:"code-generation",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-steps"},"First Steps"),(0,a.kt)("p",null,"ObjectAPI and the ApiGear tooling are an open source project to improve the current way of integrating software.\nObjectAPI allows teams to create a description of their software interfaces and generate a ready to use integration SDK.\nThe SDK comes already pre-configured with support for monitoring, logging, and tracing and simulation of interface calls."),(0,a.kt)("p",null,"To get started you first need to download the ApiGear Studio."),(0,a.kt)("h2",{id:"using-the-studio"},"Using the Studio"),(0,a.kt)("p",null,"When you run the Studio for the first time you need to accept our TOS once. This is a requirement to get the Studio working."),(0,a.kt)("h2",{id:"first-project"},"First Project"),(0,a.kt)("p",null,"APIs are collected inside a project. A project is a folder with an ",(0,a.kt)("inlineCode",{parentName:"p"},"apigear")," folder inside. The folder contains the API description and other documents to help you with the project."),(0,a.kt)("p",null,"To create the first project you click ",(0,a.kt)("inlineCode",{parentName:"p"},"New Project")," project overview. A dialog does open to select a folder for your new project. Ideally you create an empty folder before or you create one in this dialog. When you click ",(0,a.kt)("inlineCode",{parentName:"p"},"OK")," the project will be created and an ",(0,a.kt)("inlineCode",{parentName:"p"},"apigear")," folder will be created inside the selected folder."),(0,a.kt)("p",null,"Now you have an empty project without any APIs. You can add APIs to the project by clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"New -> API Module")," documents overview. The dialog will open to name your new API. When clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"OK")," the API will be created and a new document will be shown n the overview."),(0,a.kt)("p",null,"The view has now changed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Api Modules")," view. Here you see all your API modules and actions to manage them. To edit and API you can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," icon. It will open the API editor, which is normally Visual Studio Code."),(0,a.kt)("p",null,"You can now edit and save the API Module. API modules structure and meaning is defined in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/objectapi/intro"},"ObjectAPI Specification"),"."),(0,a.kt)("h2",{id:"install-code-templates"},"Install Code Templates"),(0,a.kt)("p",null,"To create your first SDK from API modules we need to have Code Templates installed and a configuration file, called solution."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Templates")," view you see all templates available from the ApiGear cloud. You can install templates by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Install")," button. The templates are installed in a local folder on you drive."),(0,a.kt)("p",null,"The name of a template will be used later for creating a SDK from the API modules."),(0,a.kt)("h2",{id:"create-a-solution"},"Create a Solution"),(0,a.kt)("p",null,"A solution binds API modules with an SDK. It can contain several layers of code generation. For example you can generate a C++ SDK from the API modules, as also a Python SDK. All templates have also different features for example ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"olink")," support. Which features are supported is different for each template."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In the ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/objectapi/mapping"},"ObjectAPI Mapping")," is a description how different APIs are mapped to different transports and protocols.")),(0,a.kt)("p",null,"A solution is a document and can be created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"New -> Solution")," action. The dialog allows you to name the solution. When clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"OK"),' the solution will be created and a new document will be shown. Also the view has changed to the "Solution" view.'),(0,a.kt)("p",null,"To edit the solution click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," icon. The solution will be opened in the editor."),(0,a.kt)("p",null,"Now you can add our inputs to the solution. Inputs can be API modules in the form of the YAML of IDL format. As also the template we installed earlier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'layers:\n  - name: "C++"\n    inputs:\n      - <name>.module.yaml\n    output: "../output"\n    template: <template-name>\n')),(0,a.kt)("p",null,"Make sure you also have added an output folder where the SDK will be generated. The output folder is relative to the solution document."),(0,a.kt)("p",null,"A solution can have several layers and each layer can have many modules. This is how you can create even complex solutions with one run."),(0,a.kt)("h2",{id:"code-generation"},"Code generation"),(0,a.kt)("p",null,'The code generator is driven by the solution. It will generate the code based on the solution content.\nTo run the solution we need to be in the "Solution" view and click ',(0,a.kt)("inlineCode",{parentName:"p"},"Run")," next to one of the solutions."),(0,a.kt)("p",null,"A dialog will appear and you see the code generation progress. At the end a short summary will be printed."),(0,a.kt)("p",null,"You code is now generated in the output folder. In case you want to see the generated code you can open the output folder in your favorite file explorer."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In case an error appears the generation will be stopped and the error will be displayed.")))}c.isMDXComponent=!0}}]);
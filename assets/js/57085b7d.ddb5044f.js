"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[3103],{2974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(4848),l=n(8453),i=n(3386);const r={sidebar_position:2},o="Quick-Start",s={id:"quickstart/index",title:"Quick-Start",description:"The Quick-Start guide explains how to, in few steps, get from an API to a functional Python plugin.",source:"@site/template-docs/template-python/docs/docs/quickstart/index.md",sourceDirName:"quickstart",slug:"/quickstart/",permalink:"/template-python/docs/quickstart/",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/template-python/edit/main/docs/docs/quickstart/index.md",tags:[],version:"current",lastUpdatedAt:1727808082e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Template Python",permalink:"/template-python/docs/intro"},next:{title:"Features",permalink:"/template-python/docs/features/"}},c={},d=[...i.RM,{value:"5. Use the generated Python project",id:"5-use-the-generated-python-project",level:2},{value:"Project folder structure",id:"project-folder-structure",level:3},{value:"Create and run an example",id:"create-and-run-an-example",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"quick-start",children:"Quick-Start"})}),"\n",(0,a.jsxs)(t.p,{children:["The Quick-Start guide explains how to, in few steps, get from an API to a functional ",(0,a.jsx)(t.em,{children:"Python"})," plugin.\nSteps 1 and 3 are universal for other technologies. In the step 2 you will choose a concrete ",(0,a.jsx)(t.em,{children:"Python"})," template.\nFor more general information about first steps with ApiGear ",(0,a.jsx)(t.a,{href:"/docs/guide/intro",children:"First Steps"})]}),"\n",(0,a.jsxs)(t.p,{children:["The quick start enables only basic features: the api(TBD) generation and simple stub(TBD) implementation.\nFor all available features check the ",(0,a.jsx)(t.a,{href:"/template-python/docs/features/",children:"overview"}),"."]}),"\n",(0,a.jsx)(i.Ay,{}),"\n",(0,a.jsx)(t.h2,{id:"5-use-the-generated-python-project",children:"5. Use the generated Python project"}),"\n",(0,a.jsx)(t.h3,{id:"project-folder-structure",children:"Project folder structure"}),"\n",(0,a.jsxs)(t.p,{children:["With the output directory set as in example, both ",(0,a.jsx)(t.em,{children:"ApiGear"})," files reside in an ",(0,a.jsx)(t.code,{children:"apigear"})," subfolder next to the generated files.\nIn this case the folder structure should look similar to this"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcdchelloworld.solution.yaml\n \u2503 \u2517 \ud83d\udcdchelloworld.module.yaml\n \u2523 \ud83d\udcc2py_hello_world\n # highlight-next-line\n \u2503 \u2523 \ud83d\udcc2io_world\n \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2517 \ud83d\udcc2implementation\n \u2503 \u2517 \ud83d\udcdcCMakeLists.txt\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Using the solution file from the previous paragraph the code will be generated in the ",(0,a.jsx)(t.code,{children:"py_hello_world"})," folder.\nWith subfolder for each module, here ",(0,a.jsx)(t.code,{children:"io_world"})," as the name of module (defined in line 2 of ",(0,a.jsx)(t.code,{children:"helloworld.module.yaml"}),").\nIt contains both features generated: a basic api and a stub implementation."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Make sure you have ",(0,a.jsx)(t.em,{children:"Python"})," in at least 3.11 version and pip package installer for python."]})}),"\n",(0,a.jsxs)(t.p,{children:["The generated code provides ",(0,a.jsx)(t.em,{children:"Python"})," implementations. The following paragraphs show how you can use it.\nStart with installing all the requirements in ",(0,a.jsx)(t.code,{children:"requirements.txt"})," file in top level directory with command\n",(0,a.jsx)(t.code,{children:"pip install --upgrade -r requirements.txt"})]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"It is recommended to install the dependencies in a virtual environment(venv)."})}),"\n",(0,a.jsx)(t.p,{children:"The 'api.py' contains all definitions of the enums and structs for your module, as well as the abstract base classes for your Interfaces.\nFrom now on you can simply import the api or the stub implementation modules and use it.\nFor more details on generated features please check api(TBD), stubs (TBD)."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Check the extended features to see how to use your API over the network."})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["For the simulation check the olink feature(TBD) which provides middle layer on your code side and the ",(0,a.jsx)(t.a,{href:"/docs/advanced/simulation/intro",children:"simulation"})," explained."]})}),"\n",(0,a.jsx)(t.h3,{id:"create-and-run-an-example",children:"Create and run an example"}),"\n",(0,a.jsxs)(t.p,{children:["Prepare an ",(0,a.jsx)(t.code,{children:"examples"})," folder in the ",(0,a.jsx)(t.code,{children:"hello-world/py_hello_world"})," directory with a main. like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import asyncio\nimport os\nimport sys\n\n#add context - path to modules\nsys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), \'../\')))\n\nimport io_world.api\nimport io_world.impl\n\ndef main():\n    myHelloInstance = io_world.impl.Hello()\n\n    # Try out properties: subscribe for changes\n    def handle_last_changed(message):\n         print("last property changed ")\n         print(message)\n    myHelloInstance.on_last_changed += handle_last_changed\n    \n    # and ask for change.\n    messageForProperty = io_world.api.Message()\n    messageForProperty.content = "New message";\n    myHelloInstance.set_last(messageForProperty);\n\n    # Check the signals with subscribing for its change\n    def handle_just_said(message):\n         print("justSaid signal emitted ")\n         print(message)\n    myHelloInstance.on_just_said += handle_just_said\n\n    # and emit one.\n    messageForSignal = io_world.api.Message()\n    messageForSignal.content = "Message from signal";\n    myHelloInstance._just_said(messageForSignal);\n\n    # Play around executing operations, maybe they emit signals? or change the properties?\n    method_result = myHelloInstance.say(io_world.api.Message(), io_world.api.When.NOW);\n    print("Method result")\n    print(method_result)\n    myHelloInstance.on_last_changed -= handle_last_changed\n    myHelloInstance.on_just_said -= handle_just_said\n\nif __name__ == \'__main__\':\n    main()\n\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can run it e.g from console. Open a terminal, navigate to generated code (",(0,a.jsx)(t.code,{children:"py_hello_world"}),") and run the example with command ",(0,a.jsx)(t.code,{children:"python examples/example.py"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3386:(e,t,n)=>{n.d(t,{Ay:()=>u,RM:()=>h});var a=n(4848),l=n(8453),i=n(1470),r=n(9365),o=(n(6540),n(8774));const s={buttons:"buttons_3CQa"};function c(e){let{link:t,message:n}=e;return(0,a.jsx)("div",{className:s.buttons,children:(0,a.jsx)(o.A,{className:"button button--primary button--lg",to:t,children:n})})}var d=n(7242);const h=[{value:"1. Install the Code Generator",id:"1-install-the-code-generator",level:2},{value:"Install ApiGear Studio",id:"install-apigear-studio",level:3},{value:"Install ApiGear CLI",id:"install-apigear-cli",level:3},{value:"2. Obtain the Template",id:"2-obtain-the-template",level:2},{value:"Installation via CLI",id:"installation-via-cli",level:3},{value:"Installation via Studio",id:"installation-via-studio",level:3},{value:"Cloning from GitHub",id:"cloning-from-github",level:3},{value:"3. Set Up the Project",id:"3-set-up-the-project",level:2},{value:"Solution File",id:"solution-file",level:3},{value:"API Module File",id:"api-module-file",level:3},{value:"4. Generate Code",id:"4-generate-code",level:2},{value:"Generate via CLI",id:"generate-via-cli",level:3},{value:"Generate via Studio",id:"generate-via-studio",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"1-install-the-code-generator",children:"1. Install the Code Generator"}),"\n",(0,a.jsx)(t.p,{children:"ApiGear provides two powerful tools: a Studio and a Command Line Interface (CLI). The Studio is a graphical tool for creating, editing API modules and projects, while the CLI is a command-line tool for generating code from API modules. Both offer comprehensive functionality, including SDK template management, API project creation, code generation, API monitoring, and API simulation."}),"\n",(0,a.jsx)("div",{class:"container",children:(0,a.jsxs)("div",{class:"row",children:[(0,a.jsx)("div",{class:"col col--6",children:(0,a.jsx)(c,{message:"Download Studio",link:"https://github.com/apigear-io/studio/releases/latest"})}),(0,a.jsx)("div",{class:"col col--6",children:(0,a.jsx)(c,{message:"Download CLI",link:"https://github.com/apigear-io/cli/releases/latest"})})]})}),"\n",(0,a.jsx)(t.h3,{id:"install-apigear-studio",children:"Install ApiGear Studio"}),"\n",(0,a.jsxs)(t.p,{children:["ApiGear Studio is available for macOS, Windows, and Linux. You can download it from the ",(0,a.jsx)(t.a,{href:"https://github.com/apigear-io/studio/releases/latest",children:"ApiGear Studio GitHub releases page"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For more detailed information on ApiGear Studio, refer to the dedicated ",(0,a.jsx)(t.a,{href:"/docs/tools/studio/intro",children:"studio documentation"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"install-apigear-cli",children:"Install ApiGear CLI"}),"\n",(0,a.jsxs)(t.p,{children:["The ApiGear CLI is a versatile command-line tool for generating code from API modules. It's available for macOS, Windows, and Linux. Download the latest version from the ",(0,a.jsx)(t.a,{href:"https://github.com/apigear-io/cli/releases/latest",children:"ApiGear CLI GitHub releases page"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The CLI offers all the features available in the Studio."}),"\n",(0,a.jsxs)(t.p,{children:["For more detailed information on the ApiGear CLI, consult the dedicated ",(0,a.jsx)(t.a,{href:"/docs/tools/cli/intro",children:"CLI documentation"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"2-obtain-the-template",children:"2. Obtain the Template"}),"\n",(0,a.jsx)(t.p,{children:"There are several methods to obtain the template: installation via the Studio, installation via the CLI, or cloning/downloading from GitHub."}),"\n",(0,a.jsx)(t.admonition,{title:"This step is optional",type:"tip",children:(0,a.jsxs)(t.p,{children:["The ApiGear Studio and the CLI detect the specified template in the ",(0,a.jsx)(t.a,{href:"#solution-file",children:"solution document"})," and install it automatically."]})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Optional steps (click to expand)"}),(0,a.jsx)(t.h3,{id:"installation-via-cli",children:"Installation via CLI"}),(0,a.jsxs)(t.p,{children:["When using the CLI, only the highlighted line needs to be executed. You can verify the successful installation using the ",(0,a.jsx)(t.code,{children:"template cache"})," command."]}),(0,a.jsxs)(i.A,{groupId:"current-template",queryString:!0,children:[(0,a.jsx)(r.A,{value:"template-unreal",label:"Unreal Engine",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# highlight-next-line\n$ apigear template install apigear-io/template-unreal@v3.2.2\n$ apigear template cache\nlist of templates from the local cache\n\nsource                            | url                                               | installed | latest\napigear-io/template-unreal@v3.2.2 | https://github.com/apigear-io/template-unreal.git | <sha1>    | v3.2.2\n...\n"})})}),(0,a.jsx)(r.A,{value:"template-cpp14",label:"C++14",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# highlight-next-line\n$ apigear template install apigear-io/template-cpp14@v3.6.0\n$ apigear template cache\nlist of templates from the local cache\n\nsource                            | url                                               | installed | latest\napigear-io/template-cpp14@v3.6.0  | https://github.com/apigear-io/template-cpp14.git  | <sha1>    | v3.6.0\n...\n"})})}),(0,a.jsx)(r.A,{value:"template-qtcpp",label:"Qt6",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# highlight-next-line\n$ apigear template install apigear-io/template-qtcpp@v0.4.0\n$ apigear template cache\nlist of templates from the local cache\n\nsource                            | url                                               | installed | latest\napigear-io/template-qtcpp@v0.4.0  | https://github.com/apigear-io/template-qtcpp.git  | <sha1>    | v0.4.0\n...\n"})})}),(0,a.jsx)(r.A,{value:"template-python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# highlight-next-line\n$ apigear template install apigear-io/template-python@v1.0.0\n$ apigear template cache\nlist of templates from the local cache\n\nsource                            | url                                               | installed | latest\napigear-io/template-python@v1.0.0 | https://github.com/apigear-io/template-python.git | <sha1>    | v1.0.0\n...\n"})})})]}),(0,a.jsx)(t.h3,{id:"installation-via-studio",children:"Installation via Studio"}),(0,a.jsx)(t.p,{children:"Installing the template through the Studio is straightforward:"}),(0,a.jsxs)(i.A,{groupId:"current-template",queryString:!0,children:[(0,a.jsx)(r.A,{value:"template-unreal",label:"Unreal Engine",children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Open an existing project or create a new one"}),"\n",(0,a.jsxs)(t.li,{children:["Navigate to the ",(0,a.jsx)(t.code,{children:"Templates"})," tab"]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.code,{children:"Install"})," on the ",(0,a.jsx)(t.code,{children:"apigear-io/template-unreal"})," entry"]}),"\n"]})}),(0,a.jsx)(r.A,{value:"template-cpp14",label:"C++14",children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Open an existing project or create a new one"}),"\n",(0,a.jsxs)(t.li,{children:["Navigate to the ",(0,a.jsx)(t.code,{children:"Templates"})," tab"]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.code,{children:"Install"})," on the ",(0,a.jsx)(t.code,{children:"apigear-io/template-cpp14"})," entry"]}),"\n"]})}),(0,a.jsx)(r.A,{value:"template-qtcpp",label:"Qt6",children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Open an existing project or create a new one"}),"\n",(0,a.jsxs)(t.li,{children:["Navigate to the ",(0,a.jsx)(t.code,{children:"Templates"})," tab"]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.code,{children:"Install"})," on the ",(0,a.jsx)(t.code,{children:"apigear-io/template-qtcpp"})," entry"]}),"\n"]})}),(0,a.jsx)(r.A,{value:"template-python",label:"Python",children:(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Open an existing project or create a new one"}),"\n",(0,a.jsxs)(t.li,{children:["Navigate to the ",(0,a.jsx)(t.code,{children:"Templates"})," tab"]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.code,{children:"Install"})," on the ",(0,a.jsx)(t.code,{children:"apigear-io/template-python"})," entry"]}),"\n"]})})]}),(0,a.jsx)(d.A,{caption:"Installing the template",src:"/img/apigear-studio-install-unreal-template.png"}),(0,a.jsx)(t.h3,{id:"cloning-from-github",children:"Cloning from GitHub"}),(0,a.jsx)(t.p,{children:"If you need to inspect or modify the template's source code, cloning or downloading the repository is recommended. The repository doesn't need to be part of your project and can be stored anywhere on your computer."}),(0,a.jsxs)(i.A,{groupId:"current-template",queryString:!0,children:[(0,a.jsx)(r.A,{value:"template-unreal",label:"Unreal Engine",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ git clone https://github.com/apigear-io/template-unreal.git\n"})})}),(0,a.jsx)(r.A,{value:"template-cpp14",label:"C++14",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ git clone https://github.com/apigear-io/template-cpp14.git\n"})})}),(0,a.jsx)(r.A,{value:"template-qtcpp",label:"Qt6",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ git clone https://github.com/apigear-io/template-qtcpp.git\n"})})}),(0,a.jsx)(r.A,{value:"template-python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ git clone https://github.com/apigear-io/template-python.git\n"})})})]}),(0,a.jsx)(t.p,{children:"You can then configure the solution file to use your template by providing the relative path from the solution file to the template directory."})]}),"\n",(0,a.jsx)(t.h2,{id:"3-set-up-the-project",children:"3. Set Up the Project"}),"\n",(0,a.jsxs)(t.p,{children:["A typical project requires two files: a solution file specifying the APIs and the template to use, and at least one API module file. Ideally, both should be placed in a folder named ",(0,a.jsx)(t.code,{children:"apigear"}),", adjacent to each other."]}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, you can use the Studio to create a new project and modify the two example files provided."}),"\n",(0,a.jsx)(t.h3,{id:"solution-file",children:"Solution File"}),"\n",(0,a.jsxs)(t.p,{children:["Create a ",(0,a.jsx)(t.a,{href:"/docs/guide/intro#creating-a-solution",children:"solution"})," file.\nThe example below specifies:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Module files in ",(0,a.jsx)(t.em,{children:"line 8"}),", here the ",(0,a.jsx)(t.code,{children:"helloworld.module.yaml"})," module with the ",(0,a.jsx)(t.code,{children:"Hello"})," API"]}),"\n",(0,a.jsxs)(t.li,{children:["The output directory for generated files in ",(0,a.jsx)(t.em,{children:"line 9"})]}),"\n",(0,a.jsxs)(t.li,{children:["The template used to generate the code in ",(0,a.jsx)(t.em,{children:"line 10"})," (this can also be a path to a local copy of the template)"]}),"\n",(0,a.jsxs)(t.li,{children:["The enabled features of the template in ",(0,a.jsx)(t.em,{children:"line 13"}),", here the ",(0,a.jsx)(t.code,{children:"stubs"})," feature, which provides a simple implementation of interfaces."]}),"\n"]}),"\n",(0,a.jsxs)(i.A,{groupId:"current-template",queryString:!0,children:[(0,a.jsx)(r.A,{value:"template-unreal",label:"Unreal Engine",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="helloworld.solution.yaml" showLineNumbers',children:'schema: "apigear.solution/1.0"\nname: hello_world_example\nversion: "0.1.0"\n\ntargets:\n  - name: ue_docs\n    inputs:\n      - helloworld.module.yaml\n    output: ../ue_docs\n    template: apigear-io/template-unreal@v3.2.2\n    force: true\n    features:\n      - stubs\n'})})}),(0,a.jsx)(r.A,{value:"template-cpp14",label:"C++14",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="helloworld.solution.yaml" showLineNumbers',children:'schema: "apigear.solution/1.0"\nname: hello_world_example\nversion: "0.1.0"\n\ntargets:\n  - name: cpp_hello_world\n    inputs:\n      - helloworld.module.yaml\n    output: ../cpp_hello_world\n    template: apigear-io/template-cpp14@v3.6.0\n    force: true\n    features:\n      - stubs\n'})})}),(0,a.jsx)(r.A,{value:"template-qtcpp",label:"Qt6",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="helloworld.solution.yaml" showLineNumbers',children:'schema: "apigear.solution/1.0"\nname: hello_world_example\nversion: "0.1.0"\n\ntargets:\n  - name: qt_hello_world\n    inputs:\n      - helloworld.module.yaml\n    output: ../qt_hello_world\n    template: apigear-io/template-qtcpp@v0.4.0\n    force: true\n    features:\n      - stubs\n'})})}),(0,a.jsx)(r.A,{value:"template-python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="helloworld.solution.yaml" showLineNumbers',children:'schema: "apigear.solution/1.0"\nname: hello_world_example\nversion: "0.1.0"\n\ntargets:\n  - name: hello_world\n    inputs:\n      - helloworld.module.yaml\n    output: ../py_hello_world\n    template: apigear-io/template-python@v1.0.0\n    force: true\n    features:\n      - stubs\n'})})})]}),"\n",(0,a.jsx)(t.admonition,{title:"Targets",type:"tip",children:(0,a.jsxs)(t.p,{children:["You can extend this solution file with additional targets, each for a different technology with a different template. The ",(0,a.jsx)(t.code,{children:"module.yaml"})," file is technology-independent and can be used with any template."]})}),"\n",(0,a.jsx)(t.admonition,{title:"Template Version",type:"tip",children:(0,a.jsx)(t.p,{children:"We highly recommend specifying the exact version of the template. Otherwise, a newer version will be automatically downloaded and used for code generation. This can lead to unexpected behavior if file structures or code changes in the template."})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Set the ",(0,a.jsx)(t.code,{children:"force"})," parameter to ",(0,a.jsx)(t.code,{children:"true"})," if you want to always override all generated files. When set to ",(0,a.jsx)(t.code,{children:"false"}),", some files, such as implementations (stub feature), won't be updated. API files are always updated regardless of this setting."]})}),"\n",(0,a.jsx)(t.h3,{id:"api-module-file",children:"API Module File"}),"\n",(0,a.jsxs)(t.p,{children:["Use your preferred text editor to create the ",(0,a.jsx)(t.code,{children:"helloworld.module.yaml"})," file with the following example content:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="helloworld.module.yaml" showLineNumbers',children:'schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'})}),"\n",(0,a.jsx)(t.h2,{id:"4-generate-code",children:"4. Generate Code"}),"\n",(0,a.jsx)(t.h3,{id:"generate-via-cli",children:"Generate via CLI"}),"\n",(0,a.jsx)(t.p,{children:"The following snippet demonstrates how to run the CLI and provides an example output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ apigear generate solution apigear/helloworld.solution.yaml\n10:52:20 INF generated 21 files in 30ms. (20 write, 0 skip, 1 copy) topic=gen\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"generate"})," command instructs the CLI to generate code"]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"solution"})," parameter specifies that we want to process a solution file"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"generate-via-studio",children:"Generate via Studio"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Open the project"}),"\n",(0,a.jsxs)(t.li,{children:["Navigate to the ",(0,a.jsx)(t.code,{children:"Solutions"})," tab"]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.code,{children:"Run"})," on the ",(0,a.jsx)(t.code,{children:"helloworld.solution.yaml"})," entry"]}),"\n"]}),"\n",(0,a.jsx)(d.A,{caption:"Generating code",src:"/img/apigear-studio-generate-code.png"})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164);const l={tabItem:"tabItem_Ymn6"};var i=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,r),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),l=n(4164),i=n(3104),r=n(6347),o=n(205),s=n(7485),c=n(1682),d=n(679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,i=p(e),[r,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,h]=m({queryString:n,groupId:l}),[g,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,i]=(0,d.Dv)(n);return[l,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:l}),j=(()=>{const e=c??g;return u({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&s(j)}),[j]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),l=o[n].value;l!==a&&(c(t),r(l))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:h,onClick:d,...i,className:(0,l.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function b(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(y,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,f.jsx)(b,{...e,children:h(e.children)},String(t))}},7242:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(6025),l=n(4848);function i(e){let{src:t,caption:n}=e;return(0,l.jsxs)("figure",{style:{padding:0},children:[(0,l.jsx)("img",{src:(0,a.Ay)(t),alt:n}),(0,l.jsx)("figcaption",{children:`Figure: ${n}`})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const l={},i=a.createContext(l);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
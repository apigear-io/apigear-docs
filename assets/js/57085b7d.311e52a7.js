"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[3103],{64519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(74848),l=t(28453);const a={sidebar_position:2},o="Quick-Start",s={id:"quickstart/index",title:"Quick-Start",description:"The Quick-Start guide explains how to, in few steps, get from an API to a functional Python plugin.",source:"@site/template-docs/template-python/docs/docs/quickstart/index.md",sourceDirName:"quickstart",slug:"/quickstart/",permalink:"/template-python/docs/quickstart/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Template Python",permalink:"/template-python/docs/intro"},next:{title:"Features",permalink:"/template-python/docs/features/"}},r={},d=[{value:"1. Install the code generator",id:"1-install-the-code-generator",level:2},{value:"2. Get the template",id:"2-get-the-template",level:2},{value:"Installation via CLI",id:"installation-via-cli",level:3},{value:"Installation via Studio",id:"installation-via-studio",level:3},{value:"Clone from github",id:"clone-from-github",level:3},{value:"3. Set up project",id:"3-set-up-project",level:2},{value:"Solution file",id:"solution-file",level:3},{value:"API module file",id:"api-module-file",level:3},{value:"4. Generate code",id:"4-generate-code",level:2},{value:"Generate via CLI",id:"generate-via-cli",level:3},{value:"Generate via Studio",id:"generate-via-studio",level:3},{value:"5. Use the generated Python project.",id:"5-use-the-generated-python-project",level:2},{value:"Create and run an example",id:"create-and-run-an-example",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quick-start",children:"Quick-Start"}),"\n",(0,i.jsxs)(n.p,{children:["The Quick-Start guide explains how to, in few steps, get from an API to a functional ",(0,i.jsx)(n.em,{children:"Python"})," plugin.\nSteps 1 and 3 are universal for other technologies. In the step 2 you will choose a concrete ",(0,i.jsx)(n.em,{children:"Python"})," template.\nFor more general information about first steps with ApiGear ",(0,i.jsx)(n.a,{href:"/docs/start/first_steps",children:"First Steps"})]}),"\n",(0,i.jsxs)(n.p,{children:["The quick start enables only basic features: the api(TBD) generation and simple stub(TBD) implementation.\nFor all available features check the ",(0,i.jsx)(n.a,{href:"/template-python/docs/features/",children:"overview"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"1-install-the-code-generator",children:"1. Install the code generator"}),"\n",(0,i.jsxs)(n.p,{children:["Get the ",(0,i.jsx)(n.a,{href:"https://github.com/apigear-io/studio/releases",children:"ApiGear Studio"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/apigear-io/cli/releases",children:"ApiGear CLI"}),". For more information check the ",(0,i.jsx)(n.a,{href:"/docs/start/install",children:"ApiGear documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"2-get-the-template",children:"2. Get the template"}),"\n",(0,i.jsxs)(n.p,{children:["There are several options to get the template. Installation via the ",(0,i.jsx)(n.em,{children:"Studio"})," or the ",(0,i.jsx)(n.em,{children:"CLI"}),". Alternatively it is possible to clone or download from github."]}),"\n",(0,i.jsx)(n.h3,{id:"installation-via-cli",children:"Installation via CLI"}),"\n",(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.em,{children:"CLI"})," only the highlighted line is imported. You can always check whether the installation was successful via the ",(0,i.jsx)(n.code,{children:"template list"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ apigear template list\nlist of templates from registry and cache\nname                       | installed | registry | url\napigear-io/template-python | false     | true     | https://github.com/apigear-io/template-python.git\n...\n# highlight-next-line\n$ apigear template install apigear-io/template-python\n$ apigear template list\nlist of templates from registry and cache\nname                       | installed | registry | url\napigear-io/template-python | true      | true     | https://github.com/apigear-io/template-python.git\n...\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation-via-studio",children:"Installation via Studio"}),"\n",(0,i.jsx)(n.p,{children:"From within the studio the installation is really simple."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open an existing project or create an new one"}),"\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.code,{children:"Templates"})," tab"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Install"})," on the ",(0,i.jsx)(n.code,{children:"apigear-io/template-python"})," entry"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"clone-from-github",children:"Clone from github"}),"\n",(0,i.jsx)(n.p,{children:"In case you want to check or modify the source code of the template, it is easier to clone or download the repository. The repository does not need to be part of the project, but can be stored anywhere on the computer."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ git clone https://github.com/apigear-io/template-python.git\n"})}),"\n",(0,i.jsx)(n.h2,{id:"3-set-up-project",children:"3. Set up project"}),"\n",(0,i.jsxs)(n.p,{children:["For a project we usually need two files. The solution which specifies what ",(0,i.jsx)(n.code,{children:"APIs"})," and which template to use for it. And at least one ",(0,i.jsx)(n.code,{children:"API"})," module file.\nBoth should ideally be in a folder called ",(0,i.jsx)(n.code,{children:"apigear"})," next to each other."]}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can also use the ",(0,i.jsx)(n.em,{children:"Studio"})," to create a new project and modify the two example files."]}),"\n",(0,i.jsx)(n.h3,{id:"solution-file",children:"Solution file"}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.a,{href:"/docs/start/first_steps#create-a-solution",children:"solution"})," file.\nThe example below specifies"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["module files in ",(0,i.jsx)(n.em,{children:"line 8"}),", here the ",(0,i.jsx)(n.code,{children:"helloworld.module.yaml"})," module with ",(0,i.jsx)(n.code,{children:"Hello"})," API"]}),"\n",(0,i.jsxs)(n.li,{children:["the output directory for generated files in ",(0,i.jsx)(n.em,{children:"line 9"})]}),"\n",(0,i.jsxs)(n.li,{children:["a template used to generate the code in ",(0,i.jsx)(n.em,{children:"line 10"}),", here the ",(0,i.jsx)(n.code,{children:"apigear-ui/template-python"})," template. This can also be a path to a local copy of the template."]}),"\n",(0,i.jsxs)(n.li,{children:["the enabled features of the template in ",(0,i.jsx)(n.em,{children:"line 13"}),", here the ",(0,i.jsx)(n.code,{children:"stubs"})," feature, a simple implementation of interfaces. For all available features check the ",(0,i.jsx)(n.a,{href:"/template-python/docs/features/",children:"overview"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="helloworld.solution.yaml" showLineNumbers',children:'schema: "apigear.solution/1.0"\nname: hello_world_example\nversion: "0.1.0"\n\ntargets:\n  - name: hello_world\n    inputs:\n      - helloworld.module.yaml\n    output: ../py_hello_world\n    template: apigear-io/template-python\n    force: true\n    features:\n      - stubs\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Targets",type:"tip",children:(0,i.jsx)(n.p,{children:"You can extend this solution file with other targets, each for the different technology with  different template. The module.yaml is technology independent and may be used for any template."})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Set the force parameter to true if you want to always override all the generated files. With option set to false some files, like implementation (stub feature) won't be updated. All the API files are always updated."})}),"\n",(0,i.jsx)(n.h3,{id:"api-module-file",children:"API module file"}),"\n",(0,i.jsxs)(n.p,{children:["Use your favorite text editor to create the ",(0,i.jsx)(n.code,{children:"helloworld.module.yaml"})," with the example content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="helloworld.module.yaml" showLineNumbers',children:'schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"4-generate-code",children:"4. Generate code"}),"\n",(0,i.jsxs)(n.p,{children:["With the output directory set as in example, both ",(0,i.jsx)(n.em,{children:"ApiGear"})," files reside in an ",(0,i.jsx)(n.code,{children:"apigear"})," subfolder next to the generated files.\nIn this case the folder structure should look similar to this"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 \u2523 \ud83d\udcdchelloworld.solution.yaml\n \u2503 \u2517 \ud83d\udcdchelloworld.module.yaml\n \u2523 \ud83d\udcc2py_hello_world\n # highlight-next-line\n \u2503 \u2523 \ud83d\udcc2io_world\n \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2517 \ud83d\udcc2implementation\n \u2503 \u2517 \ud83d\udcdcCMakeLists.txt\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Using the solution file from the previous paragraph the code will be generated in the ",(0,i.jsx)(n.code,{children:"py_hello_world"})," folder.\nWith subfolder for each module, here ",(0,i.jsx)(n.code,{children:"io_world"})," as the name of module (defined in line 2 of ",(0,i.jsx)(n.code,{children:"helloworld.module.yaml"}),").\nIt contains both features generated: a basic api and a stub implementation."]}),"\n",(0,i.jsx)(n.h3,{id:"generate-via-cli",children:"Generate via CLI"}),"\n",(0,i.jsx)(n.p,{children:"The following snippet shows how the CLI can be run."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ apigear generate solution apigear/helloworld.solution.yaml \n10:52:20 INF generated 38 files in 65ms. (22 write, 0 skip, 16 copy) topic=gen\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"generate"})," tells the CLI that it should generate code"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"solution"})," specifies that we want to run a solution file"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"generate-via-studio",children:"Generate via Studio"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open the project"}),"\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.code,{children:"Solutions"})," tab"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Run"})," on the ",(0,i.jsx)(n.code,{children:"helloworld.solution.yaml"})," entry"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-use-the-generated-python-project",children:"5. Use the generated Python project."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Make sure you have ",(0,i.jsx)(n.em,{children:"Python"})," in at least 3.11 version and pip package installer for python."]})}),"\n",(0,i.jsxs)(n.p,{children:["The generated code provides ",(0,i.jsx)(n.em,{children:"Python"})," implementations. The following paragraphs show how you can use it.\nStart with installing all the requirements in ",(0,i.jsx)(n.code,{children:"requirements.txt"})," file in top level directory with command\n",(0,i.jsx)(n.code,{children:"pip install --upgrade -r requirements.txt"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"It is recommended to install the dependencies in a virtual environment(venv)."})}),"\n",(0,i.jsx)(n.p,{children:"The 'api.py' contains all definitions of the enums and structs for your module, as well as the abstract base classes for your Interfaces.\nFrom now on you can simply import the api or the stub implementation modules and use it.\nFor more details on generated features please check api(TBD), stubs (TBD)."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Check the extended features to see how to use your API over the network."})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For the simulation check the olink feature(TBD) which provides middle layer on your code side and the ",(0,i.jsx)(n.a,{href:"/docs/advanced/simulation/intro",children:"simulation"})," explained."]})}),"\n",(0,i.jsx)(n.h3,{id:"create-and-run-an-example",children:"Create and run an example"}),"\n",(0,i.jsxs)(n.p,{children:["Prepare an ",(0,i.jsx)(n.code,{children:"examples"})," folder in the ",(0,i.jsx)(n.code,{children:"hello-world/py_hello_world"})," directory with a main. like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import asyncio\nimport os\nimport sys\n\n#add context - path to modules\nsys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), \'../\')))\n\nimport io_world.api\nimport io_world.impl\n\ndef main():\n    myHelloInstance = io_world.impl.Hello()\n\n    # Try out properties: subscribe for changes\n    def handle_last_changed(message):\n         print("last property changed ")\n         print(message)\n    myHelloInstance.on_last_changed += handle_last_changed\n    \n    # and ask for change.\n    messageForProperty = io_world.api.Message()\n    messageForProperty.content = "New message";\n    myHelloInstance.set_last(messageForProperty);\n\n    # Check the signals with subscribing for its change\n    def handle_just_said(message):\n         print("justSaid signal emitted ")\n         print(message)\n    myHelloInstance.on_just_said += handle_just_said\n\n    # and emit one.\n    messageForSignal = io_world.api.Message()\n    messageForSignal.content = "Message from signal";\n    myHelloInstance._just_said(messageForSignal);\n\n    # Play around executing operations, maybe they emit signals? or change the properties?\n    method_result = myHelloInstance.say(io_world.api.Message(), io_world.api.When.NOW);\n    print("Method result")\n    print(method_result)\n    myHelloInstance.on_last_changed -= handle_last_changed\n    myHelloInstance.on_just_said -= handle_just_said\n\nif __name__ == \'__main__\':\n    main()\n\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can run it e.g from console. Open a terminal, navigate to generated code (",(0,i.jsx)(n.code,{children:"py_hello_world"}),") and run the example with command ",(0,i.jsx)(n.code,{children:"python examples/example.py"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const l={},a=i.createContext(l);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
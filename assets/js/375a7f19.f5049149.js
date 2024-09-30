"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[3554],{2704:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var s=r(4848),t=r(8453);const a={sidebar_position:4},l="Filter Reference",i={id:"advanced/maker/filters",title:"Filter Reference",description:"Template Filters",source:"@site/docs/advanced/maker/filters.md",sourceDirName:"advanced/maker",slug:"/advanced/maker/filters",permalink:"/docs/advanced/maker/filters",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/maker/filters.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Template Primer",permalink:"/docs/advanced/maker/template"},next:{title:"Symbol Reference",permalink:"/docs/advanced/maker/symbols"}},d={},o=[{value:"Template Filters",id:"template-filters",level:2},{value:"String Filter",id:"string-filter",level:2},{value:"<strong>snake</strong>, <strong>Snake</strong>, <strong>SNAKE</strong>",id:"snake-snake-snake",level:3},{value:"<strong>camel</strong>, <strong>Camel</strong>, <strong>CAMEL</strong>",id:"camel-camel-camel",level:3},{value:"<strong>dot</strong>, <strong>Dot</strong>, <strong>DOT</strong>",id:"dot-dot-dot",level:3},{value:"<strong>kebap</strong>, <strong>Kebap</strong>, <strong>KEBAP</strong>",id:"kebap-kebap-kebap",level:3},{value:"<strong>path</strong>, <strong>Path</strong>, <strong>PATH</strong>",id:"path-path-path",level:3},{value:"<strong>lower</strong>",id:"lower",level:3},{value:"<em>upper</em>*",id:"upper",level:3},{value:"<strong>upperFirst</strong>",id:"upperfirst",level:3},{value:"<strong>lowerFirst</strong>",id:"lowerfirst",level:3},{value:"<strong>first</strong>, <strong>First</strong>, <strong>FIRST</strong>",id:"first-first-first",level:3},{value:"<strong>join</strong>",id:"join",level:3},{value:"<strong>trimPrefix</strong>",id:"trimprefix",level:3},{value:"<strong>trimSuffix</strong>",id:"trimsuffix",level:3},{value:"<strong>replace</strong>",id:"replace",level:3},{value:"<strong>int2word</strong>, <strong>Int2Word</strong>, <strong>INT2WORD</strong>",id:"int2word-int2word-int2word",level:3},{value:"<strong>plural</strong>",id:"plural",level:3},{value:"<strong>nl</strong>",id:"nl",level:3},{value:"<strong>version</strong>",id:"version",level:3},{value:"Language Filters",id:"language-filters",level:2},{value:"<strong>{lang}Return</strong>",id:"langreturn",level:3},{value:"<strong>{lang}Param</strong>",id:"langparam",level:3},{value:"<strong>{lang}Params</strong>",id:"langparams",level:3},{value:"<strong>{lang}Default</strong>",id:"langdefault",level:3},{value:"<strong>{lang}Vars</strong>",id:"langvars",level:3},{value:"<strong>{lang}Var</strong>",id:"langvar",level:3},{value:"<strong>{lang}Type</strong>",id:"langtype",level:3},{value:"C++14 Filters",id:"c14-filters",level:2},{value:"Go Filters",id:"go-filters",level:2},{value:"TypeScript Filters",id:"typescript-filters",level:2},{value:"QtC++ Filters",id:"qtc-filters",level:2},{value:"Python Filters",id:"python-filters",level:2},{value:"Unreal Engine Filters",id:"unreal-engine-filters",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"filter-reference",children:"Filter Reference"})}),"\n",(0,s.jsx)(n.h2,{id:"template-filters",children:"Template Filters"}),"\n",(0,s.jsx)(n.p,{children:"String filters are used inside templates to transform text in different formats."}),"\n",(0,s.jsx)(n.p,{children:"A typical usage would use the filter name followed by a string reference to the value to be transformed. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{ snake .Module.Name }}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"."})," is the current context and ",(0,s.jsx)(n.code,{children:".Module"})," is the module object from the current context and ",(0,s.jsx)(n.code,{children:".Name"})," is the name property of the module object. The context can change for example inside a range loop."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{ range .Module.Interfaces }}\n  {{ snake .Name }}\n{{ end }}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where the current context if the interface object inside the range loop."}),"\n",(0,s.jsx)(n.h2,{id:"string-filter",children:"String Filter"}),"\n",(0,s.jsx)(n.p,{children:"The list of the common string filters are listed here"}),"\n",(0,s.jsxs)(n.h3,{id:"snake-snake-snake",children:[(0,s.jsx)(n.strong,{children:"snake"}),", ",(0,s.jsx)(n.strong,{children:"Snake"}),", ",(0,s.jsx)(n.strong,{children:"SNAKE"})]}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to snake case - (lower, title, upper) case with underscores"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'  {{snake "org.demo"}} => org_demo\n  {{Snake "org.demo"}} => Org_Demo\n  {{SNAKE "org.demo"}} => ORG_DEMO\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"camel-camel-camel",children:[(0,s.jsx)(n.strong,{children:"camel"}),", ",(0,s.jsx)(n.strong,{children:"Camel"}),", ",(0,s.jsx)(n.strong,{children:"CAMEL"})]}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to camel case - (lower, title, upper) case with first letter lower case"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{camel "org.demo"}} => orgDemo\n{{Camel "org.demo"}} => OrgDemo\n{{CAMEL "org.demo"}} => ORGDEMO\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"dot-dot-dot",children:[(0,s.jsx)(n.strong,{children:"dot"}),", ",(0,s.jsx)(n.strong,{children:"Dot"}),", ",(0,s.jsx)(n.strong,{children:"DOT"})]}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to dot case - (lower, title, upper) case with dots"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{dot "org.demo"}} => org.demo\n{{Dot "org.demo"}} => Org.Demo\n{{DOT "org.demo"}} => ORG.DEMO\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"kebap-kebap-kebap",children:[(0,s.jsx)(n.strong,{children:"kebap"}),", ",(0,s.jsx)(n.strong,{children:"Kebap"}),", ",(0,s.jsx)(n.strong,{children:"KEBAP"})]}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to kebap case - (lower, title, upper) case with dashes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{kebap "org.demo"}} => org-demo\n{{Kebap "org.demo"}} => Org-Demo\n{{KEBAP "org.demo"}} => ORG-DEMO\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"path-path-path",children:[(0,s.jsx)(n.strong,{children:"path"}),", ",(0,s.jsx)(n.strong,{children:"Path"}),", ",(0,s.jsx)(n.strong,{children:"PATH"})]}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to path case - (lower, title, upper) case with slashes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{path "org.demo"}} => org/demo\n{{Path "org.demo"}} => Org/Demo\n{{PATH "org.demo"}} => ORG/DEMO\n'})}),"\n",(0,s.jsx)(n.h3,{id:"lower",children:(0,s.jsx)(n.strong,{children:"lower"})}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to lower case"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{lower "org.demo"}} => org.demo\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"upper",children:[(0,s.jsx)(n.em,{children:"upper"}),"*"]}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to upper case"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{upper "org.demo"}} => ORG.DEMO\n'})}),"\n",(0,s.jsx)(n.h3,{id:"upperfirst",children:(0,s.jsx)(n.strong,{children:"upperFirst"})}),"\n",(0,s.jsx)(n.p,{children:"Converts the first letter of a string to upper case"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{upper1 "org.demo"}} => Org.demo\n'})}),"\n",(0,s.jsx)(n.h3,{id:"lowerfirst",children:(0,s.jsx)(n.strong,{children:"lowerFirst"})}),"\n",(0,s.jsx)(n.p,{children:"Converts the first letter of a string to lower case"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{lower1 "org.demo"}} => org.demo\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"first-first-first",children:[(0,s.jsx)(n.strong,{children:"first"}),", ",(0,s.jsx)(n.strong,{children:"First"}),", ",(0,s.jsx)(n.strong,{children:"FIRST"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the first character of a string as lower, unchanged, upper case"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{first "org.demo"}} => o\n{{First "org.demo"}} => o\n{{FIRST "org.demo"}} => O\n'})}),"\n",(0,s.jsx)(n.h3,{id:"join",children:(0,s.jsx)(n.strong,{children:"join"})}),"\n",(0,s.jsx)(n.p,{children:"joins a list of strings with a separator"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{join .Module.Interfaces ", "}} => org.demo.Interface1, org.demo.Interface2\n'})}),"\n",(0,s.jsx)(n.h3,{id:"trimprefix",children:(0,s.jsx)(n.strong,{children:"trimPrefix"})}),"\n",(0,s.jsx)(n.p,{children:"Trims a prefix from a string"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{trimPrefix "org.demo" "org."}} => demo\n'})}),"\n",(0,s.jsx)(n.h3,{id:"trimsuffix",children:(0,s.jsx)(n.strong,{children:"trimSuffix"})}),"\n",(0,s.jsx)(n.p,{children:"Trims a suffix from a string"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{trimSuffix "org.demo" ".demo"}} => org\n'})}),"\n",(0,s.jsx)(n.h3,{id:"replace",children:(0,s.jsx)(n.strong,{children:"replace"})}),"\n",(0,s.jsx)(n.p,{children:"Replaces a string with another string"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{replace "org.demo" "org" "com"}} => com.demo\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"int2word-int2word-int2word",children:[(0,s.jsx)(n.strong,{children:"int2word"}),", ",(0,s.jsx)(n.strong,{children:"Int2Word"}),", ",(0,s.jsx)(n.strong,{children:"INT2WORD"})]}),"\n",(0,s.jsx)(n.p,{children:"Converts an integer to words (lower, title and upper case)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{int2word 1}} => one\n{{Int2Word 1}} => One\n{{INT2WORD 1}} => ONE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"plural",children:(0,s.jsx)(n.strong,{children:"plural"})}),"\n",(0,s.jsx)(n.p,{children:"pluralizes a string"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{plural "org.demo"}} => org.demos\n'})}),"\n",(0,s.jsx)(n.h3,{id:"nl",children:(0,s.jsx)(n.strong,{children:"nl"})}),"\n",(0,s.jsx)(n.p,{children:"prints a new line"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{nl}}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"version",children:(0,s.jsx)(n.strong,{children:"version"})}),"\n",(0,s.jsx)(n.p,{children:"extracts major, minor, build version from a version string"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{$v := version "1.2.3"}}\n{{$v}} => 1.2.3\n{{$v.Major}} => 1\n{{$v.Minor}} => 2\n{{$v.Build}} => 3\n'})}),"\n",(0,s.jsx)(n.h2,{id:"language-filters",children:"Language Filters"}),"\n",(0,s.jsxs)(n.p,{children:["All programming languages share a common set of filters which then are adapted to the specifics of the language.\nThese are ",(0,s.jsx)(n.code,{children:"return"}),", ",(0,s.jsx)(n.code,{children:"param"}),", ",(0,s.jsx)(n.code,{children:"params"}),", ",(0,s.jsx)(n.code,{children:"vars"}),", ",(0,s.jsx)(n.code,{children:"names"})," and the ",(0,s.jsx)(n.code,{children:"default"})," filter."]}),"\n",(0,s.jsxs)(n.p,{children:["For example for the C++ programming language you would use the ",(0,s.jsx)(n.code,{children:"return"})," and ",(0,s.jsx)(n.code,{children:"params"})," filter named ",(0,s.jsx)(n.code,{children:"cpp14Return"})," and ",(0,s.jsx)(n.code,{children:"cpp14Params"})," during operation declaration."]}),"\n",(0,s.jsx)(n.p,{children:"A typical usage could look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{ range .Operations }}\n  {{ cppReturn "" .Return }} {{ camel .Name }}({{ cppParams "" .Params }});\n{{ end }}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here the ",(0,s.jsx)(n.code,{children:"cppReturn"})," and ",(0,s.jsx)(n.code,{children:"cppParams"})," are the language specific filters for the C++ programming language. The ",(0,s.jsx)(n.code,{children:'""'})," is the a prefix applied to the return type and the parameters. This is used to add a namespace to the return type and the parameters. All language specific filters have the same signature."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:['We might offer a "2" version of a language filter in the future (e.g. ',(0,s.jsx)(n.code,{children:"cppReturn"})," and ",(0,s.jsx)(n.code,{children:"cppReturn2"}),") where the second version will support the prefix syntax."]})}),"\n",(0,s.jsx)(n.p,{children:"These are the common filters for all languages"}),"\n",(0,s.jsx)(n.h3,{id:"langreturn",children:(0,s.jsx)(n.strong,{children:"{lang}Return"})}),"\n",(0,s.jsx)(n.p,{children:"Takes and typed element and returns the type declaration of the type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{ range .Module.Interfaces }}\n{{ range .Operations }}\n  {{ cppReturn "" .Return }} {{ camel .Name }}({{ cppParams "" .Params }});\n{{ end }}\n{{ end }}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"langparam",children:(0,s.jsx)(n.strong,{children:"{lang}Param"})}),"\n",(0,s.jsx)(n.p,{children:"Takes a typed element and returns the function parameter declaration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{ range .Module.Interfaces }}\n{{ range .Operations }}\n  {{ cppReturn "" .Return }} {{ camel .Name }}(\n    {{ range $i, $p := .Params }}\n      {{ if $i }}, {{ end }}\n    {{ cppParam "" $p }}\n    {{ end }});\n{{ end }}\n{{ end }}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"langparams",children:(0,s.jsx)(n.strong,{children:"{lang}Params"})}),"\n",(0,s.jsx)(n.p,{children:"Takes an operation and return the lists of function parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{ range .Module.Interfaces }}\n{{ range .Operations }}\n  {{ cppReturn "" .Return }} {{ camel .Name }}({{ cppParams "" .Params }});\n{{ end }}\n{{ end }}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"langdefault",children:(0,s.jsx)(n.strong,{children:"{lang}Default"})}),"\n",(0,s.jsx)(n.p,{children:"Takes a typed element and returns default value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{ range .Module.Interfaces }}\n{{ $class := .Name }}\n{{ range .Operations }}\n  {{ cppReturn "" .Return }} {{$class}}::{{ camel .Name }}({{ cppParams "" .Params }}) {\n    return {{ cppDefault "" .Return }};\n  }\n{{ end }}\n{{ end }}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"langvars",children:(0,s.jsx)(n.strong,{children:"{lang}Vars"})}),"\n",(0,s.jsx)(n.p,{children:"Takes a list of types and creates variable names for them"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{ cppVars "" .Properties }}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"langvar",children:(0,s.jsx)(n.strong,{children:"{lang}Var"})}),"\n",(0,s.jsx)(n.p,{children:"Takes a typed element and creates a variable name for it"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{ cppVar "" .Property }}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"langtype",children:(0,s.jsx)(n.strong,{children:"{lang}Type"})}),"\n",(0,s.jsx)(n.p,{children:"Takes a typed element and returns the type declaration of the type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{{ cppType "" .Property }}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"c14-filters",children:"C++14 Filters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppReturn"}),": takes a typed element and returns the type declaration of the type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppParam"}),": takes a typed element and returns the function parameter declaration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppParams"}),": takes an operation and return the lists of function parameters"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppDefault"}),": takes a typed element and returns default value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppVars"}),": takes a list of types and creates variable names for them"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppVar"}),": takes a typed element and creates a variable name for it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppType"}),": takes a typed element and returns the type declaration of the type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppConstType"}),": takes a typed element and returns the type declaration of the type with const qualifier"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppNs"}),": takes a symbol and returns the namespace declaration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppNsOpen"}),": takes a symbol and returns the namespace opening"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppNsClose"}),": takes a symbol and returns the namespace closing"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cppGpl"}),": takes a symbol and returns the GPL license header"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"go-filters",children:"Go Filters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"goReturn"}),": takes a typed element and returns the type declaration of the type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"goParam"}),": takes a typed element and returns the function parameter declaration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"goParams"}),": takes an operation and return the lists of function parameters"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"goDefault"}),": takes a typed element and returns default value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"goVars"}),": takes a list of types and creates variable names for them"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"goVar"}),": takes a typed element and creates a variable name for it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"goType"}),": takes a typed element and returns the type declaration of the type"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"typescript-filters",children:"TypeScript Filters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tsReturn"}),": takes a typed element and returns the type declaration of the type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tsParam"}),": takes a typed element and returns the function parameter declaration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tsParams"}),": takes an operation and return the lists of function parameters"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tsDefault"}),": takes a typed element and returns default value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tsVars"}),": takes a list of types and creates variable names for them"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tsVar"}),": takes a typed element and creates a variable name for it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tsType"}),": takes a typed element and returns the type declaration of the type"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"qtc-filters",children:"QtC++ Filters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"qtReturn"}),": takes a typed element and returns the type declaration of the type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"qtParam"}),": takes a typed element and returns the function parameter declaration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"qtParams"}),": takes an operation and return the lists of function parameters"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"qtDefault"}),": takes a typed element and returns default value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"qtVars"}),": takes a list of types and creates variable names for them"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"qtVar"}),": takes a typed element and creates a variable name for it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"qtType"}),": takes a typed element and returns the type declaration of the type"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"python-filters",children:"Python Filters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pyReturn"}),": takes a typed element and returns the type declaration of the type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pyParam"}),": takes a typed element and returns the function parameter declaration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pyParams"}),": takes an operation and return the lists of function parameters"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pyDefault"}),": takes a typed element and returns default value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pyVars"}),": takes a list of types and creates variable names for them"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pyVar"}),": takes a typed element and creates a variable name for it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pyType"}),": takes a typed element and returns the type declaration of the type"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"unreal-engine-filters",children:"Unreal Engine Filters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ueReturn"}),": takes a typed element and returns the type declaration of the type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ueParam"}),": takes a typed element and returns the function parameter declaration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ueParams"}),": takes an operation and return the lists of function parameters"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ueDefault"}),": takes a typed element and returns default value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ueVars"}),": takes a list of types and creates variable names for them"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ueVar"}),": takes a typed element and creates a variable name for it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ueType"}),": takes a typed element and returns the type declaration of the type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ueConstType"}),": takes a typed element and returns the type declaration of the type with const qualifier"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(6540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
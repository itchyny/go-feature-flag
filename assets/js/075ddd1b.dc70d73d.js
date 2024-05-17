"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[53109],{84450:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=o(85893),n=o(11151);const a={sidebar_position:5},i="Log Exporter",l={id:"go_module/data_collection/log",title:"Log Exporter",description:"The log exporter is here mostly for backward compatibility (originally every variation were logged, but it can be a lot of data for a default configuration).",source:"@site/versioned_docs/version-v1.24.0/go_module/data_collection/log.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/log",permalink:"/docs/v1.24.0/go_module/data_collection/log",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.24.0/go_module/data_collection/log.md",tags:[],version:"v1.24.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Webhook Exporter",permalink:"/docs/v1.24.0/go_module/data_collection/webhook"},next:{title:"Kafka Exporter",permalink:"/docs/v1.24.0/go_module/data_collection/kafka"}},s={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"log-exporter",children:"Log Exporter"}),"\n",(0,r.jsxs)(t.p,{children:["The log exporter is here mostly for backward compatibility ",(0,r.jsx)(t.em,{children:"(originally every variation were logged, but it can be a lot of data for a default configuration)"}),".",(0,r.jsx)(t.br,{}),"\n","It will use your logger ",(0,r.jsx)(t.code,{children:"ffclient.Config.Logger"})," to log every variation changes."]}),"\n",(0,r.jsxs)(t.p,{children:["You can configure your output log with the ",(0,r.jsx)(t.code,{children:"Format"})," field.",(0,r.jsx)(t.br,{}),"\n","It uses a ",(0,r.jsx)(t.a,{href:"https://golang.org/pkg/text/template/",children:"go template"})," format."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'ffclient.Config{\n    // ...\n   DataExporter: ffclient.DataExporter{\n        Exporter: &logsexporter.Exporter{\n            LogFormat: "[{{ .FormattedDate}}] user=\\"{{ .UserKey}}\\", flag=\\"{{ .Key}}\\", value=\\"{{ .Value}}\\"",\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"LogFormat"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"LogFormat is the ",(0,r.jsx)(t.a,{href:"https://golang.org/pkg/text/template/",children:"template"})," configuration of the output format of your log.",(0,r.jsx)("br",{}),"You can use all the key from the ",(0,r.jsx)(t.code,{children:"exporter.FeatureEvent"})," + a key called ",(0,r.jsx)(t.code,{children:"FormattedDate"})," that represents the date with the ",(0,r.jsx)(t.strong,{children:"RFC 3339"})," Format.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.strong,{children:["Default: ",(0,r.jsx)(t.code,{children:'[{{ .FormattedDate}}] user="{{ .UserKey}}", flag="{{ .Key}}", value="{{ .Value}}"'})]})]})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["Check the ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/logsexporter",children:"godoc for full details"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>i});var r=o(67294);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
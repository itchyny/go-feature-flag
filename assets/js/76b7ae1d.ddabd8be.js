"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[55217],{84250:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=i(85893),r=i(11151);const s={sidebar_position:7},o="Redis",d={id:"go_module/store_file/redis",title:"Redis",description:"The redisRetriever will use the redis database to get your flags.",source:"@site/docs/go_module/store_file/redis.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/redis",permalink:"/docs/next/go_module/store_file/redis",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/go_module/store_file/redis.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/docs/next/go_module/store_file/mongodb"},next:{title:"File",permalink:"/docs/next/go_module/store_file/file"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Expected format",id:"expected-format",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"redis",children:"Redis"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"redisRetriever"})," will use the redis database to get your flags."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n\t  Retriever: &redisRetriver.Retriever{\n        Prefix: "goff:",\n\t\t    Options: &redis.Options{\n            Addr: "127.0.0.1:6379",\n        },\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,n.jsx)(t.h2,{id:"expected-format",children:"Expected format"}),"\n",(0,n.jsx)(t.p,{children:"If you use Redis to store your flags, you need a specific format to store your flags."}),"\n",(0,n.jsxs)(t.p,{children:["We expect the flag to be stored as a ",(0,n.jsx)(t.code,{children:"string:string"})," format where the key if the flag key (with or without a prefix)\nand the value is a string representing the flag in JSON."]}),"\n",(0,n.jsxs)(t.p,{children:["The retriever will ",(0,n.jsx)(t.code,{children:"Scan"})," redis filtering with the ",(0,n.jsx)(t.code,{children:"Prefix"})," and will parse the value as a JSON object.\n`"]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsx)(t.p,{children:"To configure your redis retriever:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Options"})})}),(0,n.jsxs)(t.td,{children:["A ",(0,n.jsx)(t.code,{children:"redis.Options"})," object containing the connection information to the redis instance."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Prefix"})})}),(0,n.jsx)(t.td,{children:"(optional) Key prefix to filter on the key names."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>o});var n=i(67294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
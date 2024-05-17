"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[23615],{66825:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(85893),i=t(11151);const a={title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},r=void 0,l={id:"index",title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",source:"@site/versioned_docs/version-v1.24.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.24.0/",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.24.0/index.md",tags:[],version:"v1.24.0",sidebarPosition:1,frontMatter:{title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/v1.24.0/category/getting-started"}},s={},c=[{value:"What is GO Feature Flag?",id:"what-is-go-feature-flag",level:2},{value:"What can I do with GO Feature Flag?",id:"what-can-i-do-with-go-feature-flag",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"250",height:"238",src:"/img/logo/logo.png",alt:"go-feature-flag logo"})}),"\n",(0,n.jsx)(o.h2,{id:"what-is-go-feature-flag",children:"What is GO Feature Flag?"}),"\n",(0,n.jsx)(o.p,{children:"GO Feature Flag is a completely open-source, simple and lightweight feature flag solution."}),"\n",(0,n.jsx)(o.p,{children:"The solution has been built for application of feature flags in your code without the need of any vendor."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"GO Feature Flag"})," was initially developed for the GO language, but with the new standardisation of feature flags by ",(0,n.jsx)(o.a,{href:"https://openfeature.dev/",children:"Openfeature"})," project, it now supports multiple languages ",(0,n.jsxs)(o.em,{children:["(",(0,n.jsx)(o.code,{children:"JAVA"}),", ",(0,n.jsx)(o.code,{children:"typescript"}),", ",(0,n.jsx)(o.code,{children:"javascript"}),", ...)"]})," with a simple server to host."]}),"\n",(0,n.jsxs)(o.admonition,{type:"info",children:[(0,n.jsxs)(o.p,{children:["If you are not familiar with feature flags, also called feature toggles, you can read this ",(0,n.jsx)(o.a,{href:"https://www.martinfowler.com/articles/feature-toggles.html",children:"article from Martin Fowler"}),"\nwhere he explains why this is a great pattern."]}),(0,n.jsxs)(o.p,{children:["I've also written an ",(0,n.jsx)(o.a,{href:"https://medium.com/better-programming/feature-flags-and-how-to-iterate-quickly-7e3371b9986",children:"article"})," which explains why feature flags can accelerate your iteration cycle."]})]}),"\n",(0,n.jsx)(o.h2,{id:"what-can-i-do-with-go-feature-flag",children:"What can I do with GO Feature Flag?"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Storing your configuration flags file on various locations (",(0,n.jsx)(o.code,{children:"HTTP"}),", ",(0,n.jsx)(o.code,{children:"S3"}),", ",(0,n.jsx)(o.code,{children:"Kubernetes"}),", ",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/configure_flag/store_your_flags",children:(0,n.jsx)(o.em,{children:"see full list"})}),")."]}),"\n",(0,n.jsxs)(o.li,{children:["Configuring your flags in various ",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/configure_flag/flag_format",children:"format"})," (",(0,n.jsx)(o.code,{children:"JSON"}),", ",(0,n.jsx)(o.code,{children:"TOML"})," and ",(0,n.jsx)(o.code,{children:"YAML"}),")."]}),"\n",(0,n.jsxs)(o.li,{children:["Adding complex ",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/configure_flag/flag_format#rule-format",children:"rules"})," to target your users."]}),"\n",(0,n.jsxs)(o.li,{children:["Use complex rollout strategy for your flags :","\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"/docs/v1.24.0/configure_flag/rollout/experimentation",children:"Run A/B testing experimentation"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"/docs/v1.24.0/configure_flag/rollout/progressive",children:"Progressively rollout a feature"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"/docs/v1.24.0/configure_flag/rollout/scheduled",children:"Schedule your flag updates"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["Exporting your flags usage data (",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/go_module/data_collection/s3",children:(0,n.jsx)(o.code,{children:"s3"})}),", ",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/go_module/data_collection/log",children:(0,n.jsx)(o.code,{children:"log"})}),", ",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/go_module/data_collection/file",children:(0,n.jsx)(o.code,{children:"file"})}),", ",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/configure_flag/export_flags_usage",children:(0,n.jsx)(o.em,{children:"see full list"})}),")."]}),"\n",(0,n.jsxs)(o.li,{children:["Getting notified when a flag has been changed (",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/go_module/notifier/webhook",children:(0,n.jsx)(o.code,{children:"webhook"})})," and ",(0,n.jsx)(o.a,{href:"/docs/v1.24.0/go_module/notifier/slack",children:(0,n.jsx)(o.code,{children:"slack"})}),")."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Cross-Language Support:"})," Available for use across several programming languages."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>r});var n=t(67294);const i={},a=n.createContext(i);function r(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);
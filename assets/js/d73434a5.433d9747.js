"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[76308],{82121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=r(85893),n=r(11151),o=r(52991);const s={sidebar_position:1},a="Retrieve your feature flags configuration",l={id:"go_module/store_file/index",title:"Retrieve your feature flags configuration",description:"The module supports different ways of retrieving the flag file.",source:"@site/versioned_docs/version-v1.28.0/go_module/store_file/index.mdx",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/",permalink:"/docs/go_module/store_file/",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.28.0/go_module/store_file/index.mdx",tags:[],version:"v1.28.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Performing flag evaluations",permalink:"/docs/go_module/target_user"},next:{title:"HTTP endpoint",permalink:"/docs/go_module/store_file/http"}},c={},d=[{value:"Available retrievers",id:"available-retrievers",level:2},{value:"Explicitly call the retrievers",id:"explicitly-call-the-retrievers",level:2}];function u(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"retrieve-your-feature-flags-configuration",children:"Retrieve your feature flags configuration"}),"\n",(0,i.jsx)(t.p,{children:"The module supports different ways of retrieving the flag file."}),"\n",(0,i.jsx)(t.h2,{id:"available-retrievers",children:"Available retrievers"}),"\n",(0,i.jsx)(o.Z,{}),"\n",(0,i.jsxs)(t.p,{children:["To retrieve a file you need to provide a ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever",children:"retriever"})," in your ",(0,i.jsx)(t.code,{children:"ffclient.Config{}"})," during the initialization.",(0,i.jsx)(t.br,{}),"\n","If the existing retriever does not work with your system you can extend the system and use a ",(0,i.jsx)(t.a,{href:"/docs/go_module/store_file/custom",children:"custom retriever"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"explicitly-call-the-retrievers",children:"Explicitly call the retrievers"}),"\n",(0,i.jsx)(t.p,{children:"By default, the retrievers are called regularly to refresh the configuration based on the polling interval."}),"\n",(0,i.jsxs)(t.p,{children:["But there are use cases where you want to refresh the configuration explicitly ",(0,i.jsx)(t.em,{children:"(for example, during the CI process\nafter you have changed your configuration file)"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To do that, you can call the ",(0,i.jsx)(t.code,{children:"ForceRefresh"})," method on the client."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Init ffclient with a file retriever.\n\tgoff, _ := ffclient.New(ffclient.Config{\n\t\tPollingInterval: 10 * time.Minute,\n\t\tRetriever: &fileretriever.Retriever{\n\t\t\tPath: "xxxx.yaml",\n\t\t},\n\t})\n\n\t// ...\n\tgoff.ForceRefresh()\n\t// ...\n'})})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>x});r(67294);var i=r(36905),n=r(53438),o=r(39960),s=r(13919),a=r(95999),l=r(92503);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(85893);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",c.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:n,description:o}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,i.Z)("text--truncate",c.cardTitle),title:n,children:[r," ",n]}),o&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",c.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const r=(0,n.LM)(t);return r?(0,d.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const r=(0,n.jA)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(p,{...e});const o=(0,n.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",r),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var i=r(67294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
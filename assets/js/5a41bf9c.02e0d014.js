"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[70751],{67091:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(85893),r=t(11151);const i={sidebar_position:2},l="Google Cloud Storage Exporter",a={id:"go_module/data_collection/google_cloud_storage",title:"Google Cloud Storage Exporter",description:"The Google Cloud Storage exporter will collect the data and create a new file in a specific folder everytime we send the data.",source:"@site/versioned_docs/version-v1.31.2/go_module/data_collection/google_cloud_storage.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/google_cloud_storage",permalink:"/docs/v1.31.2/go_module/data_collection/google_cloud_storage",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.31.2/go_module/data_collection/google_cloud_storage.md",tags:[],version:"v1.31.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"S3 Exporter",permalink:"/docs/v1.31.2/go_module/data_collection/s3"},next:{title:"File Exporter",permalink:"/docs/v1.31.2/go_module/data_collection/file"}},s={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"google-cloud-storage-exporter",children:"Google Cloud Storage Exporter"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.strong,{children:"Google Cloud Storage exporter"})," will collect the data and create a new file in a specific folder everytime we send the data."]}),"\n",(0,n.jsxs)(o.p,{children:["Everytime the ",(0,n.jsx)(o.code,{children:"FlushInterval"})," or ",(0,n.jsx)(o.code,{children:"MaxEventInMemory"})," is reached, a new file will be added to Google Cloud Storage."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["If for some reason the Google Cloud Storage upload failed, we will keep the data in memory and retry to add it the next time we reach ",(0,n.jsx)(o.code,{children:"FlushInterval"})," or ",(0,n.jsx)(o.code,{children:"MaxEventInMemory"}),"."]})}),"\n",(0,n.jsxs)(o.p,{children:["Check this ",(0,n.jsx)(o.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/data_export_googlecloudstorage",children:"complete example"})," to see how to export the data in S3."]}),"\n",(0,n.jsx)(o.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",metastring:"showLineNumbers",children:'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &gcstorageexporter.Exporter{\n            Bucket:   "test-goff",\n            Format:   "json",\n            Path:     "yourPath",\n            Filename: "flag-variation-{{ .Timestamp}}.{{ .Format}}",\n            Options:  []option.ClientOption{}, // Your google cloud SDK options\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,n.jsx)(o.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Field"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"Bucket "})}),(0,n.jsx)(o.td,{children:"Name of your Google Cloud Storage Bucket."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"CsvTemplate"})}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.em,{children:"(optional)"})," CsvTemplate is used if your output format is CSV. This field will be ignored if you are using format other than CSV. You can decide which fields you want in your CSV line with a go-template syntax, please check ",(0,n.jsx)(o.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/internal/exporter/feature_event.go",children:"internal/exporter/feature_event.go"})," to see what are the fields available.",(0,n.jsx)("br",{}),(0,n.jsx)(o.strong,{children:"Default:"})," ",(0,n.jsx)(o.code,{children:"{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}};{{ .Source}}\\n"})]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"Filename"})}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.em,{children:"(optional)"})," Filename is the name of your output file. You can use a templated config to define the name of your exported files.",(0,n.jsx)("br",{}),"Available replacements are ",(0,n.jsx)(o.code,{children:"{{ .Hostname}}"}),", ",(0,n.jsx)(o.code,{children:"{{ .Timestamp}"}),"} and ",(0,n.jsx)(o.code,{children:"{{ .Format}}"}),(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(o.code,{children:"flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}"})]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"Format"})}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.em,{children:"(optional)"})," Format is the output format you want in your exported file. Available formats are ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.code,{children:"JSON"})}),", ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.code,{children:"CSV"})}),", ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.code,{children:"Parquet"})}),". ",(0,n.jsxs)(o.em,{children:["(Default: ",(0,n.jsx)(o.code,{children:"JSON"}),")"]})]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"Options"})}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.em,{children:"(optional)"})," An instance of ",(0,n.jsx)(o.code,{children:"option.ClientOption"})," that configures your access to Google Cloud. ",(0,n.jsx)("br",{})," Check ",(0,n.jsx)(o.a,{href:"https://cloud.google.com/docs/authentication",children:"this documentation for more info"}),"."]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"Path "})}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.em,{children:"(optional)"})," The location of the directory in your bucket."]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"ParquetCompressionCodec"})}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.em,{children:"(optional)"})," ParquetCompressionCodec is the parquet compression codec for better space efficiency. ",(0,n.jsx)(o.a,{href:"https://github.com/apache/parquet-format/blob/master/Compression.md",children:"Available options"})," ",(0,n.jsxs)(o.em,{children:["(Default: ",(0,n.jsx)(o.code,{children:"SNAPPY"}),")"]})]})]})]})]}),"\n",(0,n.jsxs)(o.p,{children:["Check the ",(0,n.jsx)(o.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/gcstorageexporter",children:"godoc for full details"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>l});var n=t(67294);const r={},i=n.createContext(r);function l(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);
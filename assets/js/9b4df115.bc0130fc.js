"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65555],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),o=t(86010),a=t(67294),i=t(16550),c=t(48334);function s(e){let{title:r,url:t,description:s,command:l}=e;const{pathname:m}=(0,i.TH)(),d=m.replace(/\/v\d+/,""),p=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":d.startsWith("/excel"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(c.Z,{className:"ml-auto mr-4"})),s?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},17327:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const i={},c="Companies House",s={unversionedId:"terminal/reference/alt/companieshouse/index",id:"terminal/reference/alt/companieshouse/index",title:"Companies House",description:"Commands",source:"@site/content/terminal/reference/alt/companieshouse/index.mdx",sourceDirName:"terminal/reference/alt/companieshouse",slug:"/terminal/reference/alt/companieshouse/",permalink:"/terminal/reference/alt/companieshouse/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/alt/companieshouse/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"townsales",permalink:"/terminal/reference/alt/realestate/townsales"},next:{title:"charges",permalink:"/terminal/reference/alt/companieshouse/charges"}},l={},m=[{value:"Commands",id:"commands",level:3}],d={toc:m},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"companies-house"},"Companies House"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Charges",description:"Select the company number to retrieve officers for. [Source: UK Companies House]",url:"/terminal/reference/alt/companieshouse/charges",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Filingdocument",description:"Select the company number and transaction ID to retrieve filling history for. [Source: UK Companies House]",url:"/terminal/reference/alt/companieshouse/filingdocument",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Filings",description:"Select the company number to retrieve filling history for. [Source: UK Companies House]",url:"/terminal/reference/alt/companieshouse/filings",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Load",description:"Select the company number to get detailed info on. [Source: UK Companies House]",url:"/terminal/reference/alt/companieshouse/load",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Officers",description:"Select the company number to retrieve officers for. [Source: UK Companies House]",url:"/terminal/reference/alt/companieshouse/officers",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Search",description:"Select the company name to search for. [Source: UK Companies House]",url:"/terminal/reference/alt/companieshouse/search",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Signifcontrol",description:"Select the company number to retrieve persons with significant control of company. [Source: UK Companies House]",url:"/terminal/reference/alt/companieshouse/signifcontrol",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
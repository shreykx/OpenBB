"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(r),f=n,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||s;return r?o.createElement(u,a(a({ref:t},l),{},{components:r})):o.createElement(u,a({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,a[1]=i;for(var d=2;d<s;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(39960),n=r(86010),s=r(67294),a=r(16550),i=r(48334);function c(e){let{title:t,url:r,description:c,command:d}=e;const{pathname:l}=(0,a.TH)(),m=l.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return s.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},s.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),s.createElement("div",{className:"flex items-center"},s.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&s.createElement(i.Z,{className:"ml-auto mr-4"})),c?s.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},62140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),s=r(26515);const a={},i="Darkpool Shorts",c={unversionedId:"terminal/reference/stocks/dps/index",id:"terminal/reference/stocks/dps/index",title:"Darkpool Shorts",description:"Commands",source:"@site/content/terminal/reference/stocks/dps/index.mdx",sourceDirName:"terminal/reference/stocks/dps",slug:"/terminal/reference/stocks/dps/",permalink:"/terminal/reference/stocks/dps/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/dps/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"wsb",permalink:"/terminal/reference/stocks/ba/wsb"},next:{title:"ctb",permalink:"/terminal/reference/stocks/dps/ctb"}},d={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"darkpool-shorts"},"Darkpool Shorts"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(s.Z,{title:"Ctb",description:"Show cost to borrow of stocks. [Source: Stocksera/Interactive Broker]",url:"/terminal/reference/stocks/dps/ctb",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Dpotc",description:"Display barchart of dark pool (ATS) and OTC (Non ATS) data. [Source: FINRA]",url:"/terminal/reference/stocks/dps/dpotc",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Ftd",description:"Prints latest fails-to-deliver data. [Source: SEC]",url:"/terminal/reference/stocks/dps/ftd",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Hsi",description:"Print top stocks being more heavily shorted. HighShortInterest.com provides a convenient sorted database of...",url:"/terminal/reference/stocks/dps/hsi",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/stocks/dps/load",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Pos",description:"Get dark pool short positions. [Source: Stockgrid]",url:"/terminal/reference/stocks/dps/pos",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Prom",description:"Display dark pool (ATS) data of tickers with growing trades activity using linear regression.",url:"/terminal/reference/stocks/dps/prom",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Psi",description:"Shows price vs short interest volume. [Source: Quandl/Stockgrid]",url:"/terminal/reference/stocks/dps/psi",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Shorted",description:"Print up to 25 top ticker most shorted. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/dps/shorted",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Sidtc",description:"Print short interest and days to cover. [Source: Stockgrid]",url:"/terminal/reference/stocks/dps/sidtc",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(s.Z,{title:"Spos",description:"Shows Net Short Vol. vs Position. [Source: Stockgrid]",url:"/terminal/reference/stocks/dps/spos",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),i=r(86010),a=r(67294),o=r(16550),c=r(48334);function s(e){let{title:t,url:r,description:s,command:l}=e;const{pathname:d}=(0,o.TH)(),u=d.replace(/\/v\d+/,""),p=!u.includes("/reference")&&!u.includes("/widgets-library/")&&!u.includes("/data_models");return a.createElement(n.Z,{className:(0,i.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":u.startsWith("/terminal")||u.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":u.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":u.startsWith("/sdk")||u.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":u.startsWith("/excel"),header_docs:!(u.startsWith("/terminal")||u.startsWith("/pro")||u.startsWith("/excel")||u.startsWith("/sdk")||u.startsWith("/platform")||u.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&a.createElement(c.Z,{className:"ml-auto mr-4"})),s?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},90554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),i=(r(67294),r(3905)),a=r(26515);const o={},c="equity",s={unversionedId:"excel/reference/equity/index",id:"excel/reference/equity/index",title:"equity",description:"Menus",source:"@site/content/excel/reference/equity/index.mdx",sourceDirName:"excel/reference/equity",slug:"/excel/reference/equity/",permalink:"/excel/reference/equity/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705332260,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"market",permalink:"/excel/reference/index/market"},next:{title:"discovery",permalink:"/excel/reference/equity/discovery/"}},l={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],u={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"equity"},"equity"),(0,i.kt)("h3",{id:"menus"},"Menus"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(a.Z,{title:"discovery",description:"filings",url:"equity/discovery",mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"ownership",description:"insider_trading, institutional, major_holders, share_statistics",url:"equity/ownership",mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"fundamental",description:"reported_financials, filings, multiples, revenue_per_geography, cash_growth, latest_attributes,...",url:"equity/fundamental",mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"price",description:"quote, historical, nbbo, performance",url:"equity/price",mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"calendar",description:"earnings, splits, ipo, dividend",url:"equity/calendar",mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"shorts",description:"fails_to_deliver",url:"equity/shorts",mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"estimates",description:"consensus, historical, price_target",url:"equity/estimates",mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"compare",description:"peers",url:"equity/compare",mdxType:"ReferenceCard"})),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(a.Z,{title:"search",description:"Equity Search. Search for a company or stock ticker.",url:"equity/search",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"screener",description:"Equity Screen. Screen for companies meeting various criteria.",url:"equity/screener",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"market_snapshots",description:"Get a current, complete, market snapshot.",url:"equity/market_snapshots",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"profile",description:"Equity Info. Get general price and performance metrics of a stock.",url:"equity/profile",command:!0,mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);
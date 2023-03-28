"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var d=n.createContext({}),a=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=a(r),u=s,f=l["".concat(d,".").concat(u)]||l[u]||m[u]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[l]="string"==typeof e?e:s,c[1]=i;for(var a=2;a<o;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(39960),s=r(67294),o=r(86010),c=r(16550);function i(e){let{title:t,url:r,description:i,command:d}=e;const{pathname:a}=(0,c.TH)();return s.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:a.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":a.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":a.startsWith("/bot"),header_docs:!a.startsWith("/terminal")&&!a.startsWith("/sdk")&&!a.startsWith("/bot")}),to:r},s.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),s.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?s.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},6883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=r(87462),s=(r(67294),r(3905)),o=r(62872);const c={},i="dps",d={unversionedId:"sdk/reference/stocks/dps/index",id:"sdk/reference/stocks/dps/index",title:"dps",description:"<ReferenceCard",source:"@site/content/sdk/reference/stocks/dps/index.mdx",sourceDirName:"sdk/reference/stocks/dps",slug:"/sdk/reference/stocks/dps/",permalink:"/sdk/reference/stocks/dps/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/dps/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"upcoming",permalink:"/sdk/reference/stocks/disc/upcoming"},next:{title:"ctb",permalink:"/sdk/reference/stocks/dps/ctb"}},a={},p=[],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dps"},"dps"),(0,s.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,s.kt)(o.Z,{title:"ctb",description:"Get stocks with highest cost to borrow [Source: Interactive Broker]",url:"/sdk/reference/stocks/dps/ctb",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"dpotc",description:"Get all FINRA data associated with a ticker",url:"/sdk/reference/stocks/dps/dpotc",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"ftd",description:"Display fails-to-deliver data for a given ticker. [Source: SEC]",url:"/sdk/reference/stocks/dps/ftd",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"hsi",description:"Returns a high short interest DataFrame",url:"/sdk/reference/stocks/dps/hsi",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"pos",description:"Get dark pool short positions. [Source: Stockgrid]",url:"/sdk/reference/stocks/dps/pos",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"prom",description:"Get all FINRA ATS data, and parse most promising tickers based on linear regression",url:"/sdk/reference/stocks/dps/prom",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"psi_q",description:"Plots the short interest of a stock. This corresponds to the",url:"/sdk/reference/stocks/dps/psi_q",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"psi_sg",description:"Get price vs short interest volume. [Source: Stockgrid]",url:"/sdk/reference/stocks/dps/psi_sg",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"shorted",description:"Get most shorted stock screener [Source: Yahoo Finance]",url:"/sdk/reference/stocks/dps/shorted",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"sidtc",description:"Get short interest and days to cover. [Source: Stockgrid]",url:"/sdk/reference/stocks/dps/sidtc",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"spos",description:"Get net short position. [Source: Stockgrid]",url:"/sdk/reference/stocks/dps/spos",command:"true",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
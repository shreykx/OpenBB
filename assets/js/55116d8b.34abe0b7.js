"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97846],{3905:(e,r,t)=>{t.d(r,{Zo:()=>a,kt:()=>m});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),l=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},a=function(e){var r=l(e.components);return i.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},f=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=n,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?i.createElement(m,d(d({ref:r},a),{},{components:t})):i.createElement(m,d({ref:r},a))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,d=new Array(o);d[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:n,d[1]=c;for(var l=2;l<o;l++)d[l]=t[l];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>c});var i=t(39960),n=t(67294),o=t(86010),d=t(16550);function c(e){let{title:r,url:t,description:c,command:s}=e;const{pathname:l}=(0,d.TH)();return n.createElement(i.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!l.startsWith("/terminal")&&!l.startsWith("/sdk")&&!l.startsWith("/bot")}),to:t},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),c?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},99729:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>a});var i=t(87462),n=(t(67294),t(3905)),o=t(62872);const d={},c="duedilligence",s={unversionedId:"bot/reference/discord/duedilligence/index",id:"bot/reference/discord/duedilligence/index",title:"duedilligence",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/duedilligence/index.mdx",sourceDirName:"bot/reference/discord/duedilligence",slug:"/bot/reference/discord/duedilligence/",permalink:"/bot/reference/discord/duedilligence/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/duedilligence/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"wsb",permalink:"/bot/reference/discord/discovery/wsb"},next:{title:"ah",permalink:"/bot/reference/discord/duedilligence/ah"}},l={},a=[],p={toc:a},u="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,i.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"duedilligence"},"duedilligence"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(o.Z,{title:"ah",description:"Displays afterhours data for a given stock ticker",url:"/bot/reference/discord/duedilligence/ah",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"analyst",description:"Displays analyst recommendations.",url:"/bot/reference/discord/duedilligence/analyst",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"bio",description:"Displays a Stock's Company Info.",url:"/bot/reference/discord/duedilligence/bio",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"customer",description:"Displays customers of the company.",url:"/bot/reference/discord/duedilligence/customer",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"divinfo",description:"Displays dividend information for a stock.",url:"/bot/reference/discord/duedilligence/divinfo",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"earnings",description:"Display Earnings that are expected to occur in the next business days. (Sorted by market cap)",url:"/bot/reference/discord/duedilligence/earnings",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"ermove",description:"Display implied move for a stock based on option prices.",url:"/bot/reference/discord/duedilligence/ermove",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"est",description:"Displays earning estimates.",url:"/bot/reference/discord/duedilligence/est",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"financials",description:"Gives Total Assets, Cash, Debt, Liabilities, Rev for Company.",url:"/bot/reference/discord/duedilligence/financials",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"insiders",description:"Displays 15 latest insider transactions for given stock",url:"/bot/reference/discord/duedilligence/insiders",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"instholdings",description:"Displays top 15 Institutional Holdings for given stock",url:"/bot/reference/discord/duedilligence/instholdings",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"nexter",description:"Returns next Earnings Date for a stock.",url:"/bot/reference/discord/duedilligence/nexter",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"pm",description:"Displays premarket data for a given stock ticker",url:"/bot/reference/discord/duedilligence/pm",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"pt",description:"Displays chart with price targets.",url:"/bot/reference/discord/duedilligence/pt",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"sec",description:"Displays recent SEC filings.",url:"/bot/reference/discord/duedilligence/sec",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"splits",description:"List of recent Stock splits for all tickers or for a given ticker.",url:"/bot/reference/discord/duedilligence/splits",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"supplier",description:"Displays suppliers of the company.",url:"/bot/reference/discord/duedilligence/supplier",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"ytd",description:"Displays Period Performance for a stock.",url:"/bot/reference/discord/duedilligence/ytd",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);
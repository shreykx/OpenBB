"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},86425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const o={title:"sec",description:"The sec documentation page details how to use a feature for retrieving the latest SEC filings related to a specific ticker symbol. Information available includes company financials, registration statements, and periodic reports such as 10-Ks, 8-Ks, and 10-Qs. Useful for investors and analysts needing current data on a company's financial performance or other corporate documents.",keywords:["sec command","retrieve SEC filings","financial performance","corporate documents","stock ticker","company financials","10-Ks","8-Ks","10-Qs","registration statements","investors","analysts","periodic reports"]},s=void 0,c={unversionedId:"bot/reference/discord/duedilligence/sec",id:"bot/reference/discord/duedilligence/sec",title:"sec",description:"The sec documentation page details how to use a feature for retrieving the latest SEC filings related to a specific ticker symbol. Information available includes company financials, registration statements, and periodic reports such as 10-Ks, 8-Ks, and 10-Qs. Useful for investors and analysts needing current data on a company's financial performance or other corporate documents.",source:"@site/content/bot/reference/discord/duedilligence/sec.md",sourceDirName:"bot/reference/discord/duedilligence",slug:"/bot/reference/discord/duedilligence/sec",permalink:"/bot/reference/discord/duedilligence/sec",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/duedilligence/sec.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705332260,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{title:"sec",description:"The sec documentation page details how to use a feature for retrieving the latest SEC filings related to a specific ticker symbol. Information available includes company financials, registration statements, and periodic reports such as 10-Ks, 8-Ks, and 10-Qs. Useful for investors and analysts needing current data on a company's financial performance or other corporate documents.",keywords:["sec command","retrieve SEC filings","financial performance","corporate documents","stock ticker","company financials","10-Ks","8-Ks","10-Qs","registration statements","investors","analysts","periodic reports"]},sidebar:"tutorialSidebar",previous:{title:"pt",permalink:"/bot/reference/discord/duedilligence/pt"},next:{title:"splits",permalink:"/bot/reference/discord/duedilligence/splits"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"duedilligence: sec - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve the most recent SEC filings related to the specified ticker symbol. The filings can include company financials, registration statements, and periodic reports such as 10-Ks, 8-Ks, and 10-Qs. This command is especially useful for investors and analysts who need up-to-date information on a company's financial performance or other corporate documents."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/dd sec ticker\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/dd sec ticker:AMD\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);
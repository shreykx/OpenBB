"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13467],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(r),f=a,s=c["".concat(p,".").concat(f)]||c[f]||u[f]||l;return r?n.createElement(s,o(o({ref:t},d),{},{components:r})):n.createElement(s,o({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={title:"holdings_performance",description:"Get the ETF holdings performance using the `obb.etf.holdings_performance` function in Python. This function returns a variety of performance metrics for ETF holdings, including one-day return, week-to-date return, one-week return, month-to-date return, and more. Analyze and chart the performance of ETF holdings with this comprehensive function.",keywords:["ETF holdings performance","etf holdings performance python","etf holdings performance function","etf performance data","etf returns","etf performance metrics","etf performance analysis","etf performance statistics","etf performance calculation","etf performance chart"]},o=void 0,i={unversionedId:"excel/reference/etf/holdings_performance",id:"excel/reference/etf/holdings_performance",title:"holdings_performance",description:"Get the ETF holdings performance using the `obb.etf.holdings_performance` function in Python. This function returns a variety of performance metrics for ETF holdings, including one-day return, week-to-date return, one-week return, month-to-date return, and more. Analyze and chart the performance of ETF holdings with this comprehensive function.",source:"@site/content/excel/reference/etf/holdings_performance.md",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/holdings_performance",permalink:"/excel/reference/etf/holdings_performance",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/etf/holdings_performance.md",tags:[],version:"current",frontMatter:{title:"holdings_performance",description:"Get the ETF holdings performance using the `obb.etf.holdings_performance` function in Python. This function returns a variety of performance metrics for ETF holdings, including one-day return, week-to-date return, one-week return, month-to-date return, and more. Analyze and chart the performance of ETF holdings with this comprehensive function.",keywords:["ETF holdings performance","etf holdings performance python","etf holdings performance function","etf performance data","etf returns","etf performance metrics","etf performance analysis","etf performance statistics","etf performance calculation","etf performance chart"]},sidebar:"tutorialSidebar",previous:{title:"holdings_date",permalink:"/excel/reference/etf/holdings_date"},next:{title:"info",permalink:"/excel/reference/etf/info"}},p={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],d={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get the ETF holdings performance."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.ETF.HOLDINGS_PERFORMANCE(symbol;[provider])\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.ETF.HOLDINGS_PERFORMANCE("SPY")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"symbol")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Text")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"False"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return-data"},"Return Data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_day"),(0,a.kt)("td",{parentName:"tr",align:null},"One-day return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wtd"),(0,a.kt)("td",{parentName:"tr",align:null},"Week to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_week"),(0,a.kt)("td",{parentName:"tr",align:null},"One-week return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mtd"),(0,a.kt)("td",{parentName:"tr",align:null},"Month to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_month"),(0,a.kt)("td",{parentName:"tr",align:null},"One-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"qtd"),(0,a.kt)("td",{parentName:"tr",align:null},"Quarter to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"three_month"),(0,a.kt)("td",{parentName:"tr",align:null},"Three-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"six_month"),(0,a.kt)("td",{parentName:"tr",align:null},"Six-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ytd"),(0,a.kt)("td",{parentName:"tr",align:null},"Year to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_year"),(0,a.kt)("td",{parentName:"tr",align:null},"One-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"three_year"),(0,a.kt)("td",{parentName:"tr",align:null},"Three-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"five_year"),(0,a.kt)("td",{parentName:"tr",align:null},"Five-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ten_year"),(0,a.kt)("td",{parentName:"tr",align:null},"Ten-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max"),(0,a.kt)("td",{parentName:"tr",align:null},"Return from the beginning of the time series.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"The ticker symbol. (provider: fmp)")))))}u.isMDXComponent=!0}}]);
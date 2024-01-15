"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61119],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),s=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=s(r),m=n,y=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return r?a.createElement(y,i(i({ref:e},d),{},{components:r})):a.createElement(y,i({ref:e},d))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61999:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"transcript",description:"Learn how to retrieve earnings call transcripts for a given company using Python obb.equity.fundamental.transcript. Understand the data parameters, returns, symbol, year, quarter, and metadata associated with the transcripts.",keywords:["earnings call transcript","python obb.equity.fundamental.transcript","data parameters","returns","symbols","year","quar","content","metadata","provider"]},i=void 0,p={unversionedId:"excel/reference/equity/fundamental/transcript",id:"excel/reference/equity/fundamental/transcript",title:"transcript",description:"Learn how to retrieve earnings call transcripts for a given company using Python obb.equity.fundamental.transcript. Understand the data parameters, returns, symbol, year, quarter, and metadata associated with the transcripts.",source:"@site/content/excel/reference/equity/fundamental/transcript.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/transcript",permalink:"/excel/reference/equity/fundamental/transcript",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/transcript.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705332260,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{title:"transcript",description:"Learn how to retrieve earnings call transcripts for a given company using Python obb.equity.fundamental.transcript. Understand the data parameters, returns, symbol, year, quarter, and metadata associated with the transcripts.",keywords:["earnings call transcript","python obb.equity.fundamental.transcript","data parameters","returns","symbols","year","quar","content","metadata","provider"]},sidebar:"tutorialSidebar",previous:{title:"trailing_dividend_yield",permalink:"/excel/reference/equity/fundamental/trailing_dividend_yield"},next:{title:"price",permalink:"/excel/reference/equity/price/"}},o={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],d={toc:s},c="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Earnings Call Transcript. Earnings call transcript for a given company."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.TRANSCRIPT(symbol;year;[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.FUNDAMENTAL.TRANSCRIPT("AAPL";2022)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"year")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Year of the earnings call transcript.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quarter"),(0,n.kt)("td",{parentName:"tr",align:null},"Quarter of the earnings call transcript.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year"),(0,n.kt)("td",{parentName:"tr",align:null},"Year of the earnings call transcript.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"content"),(0,n.kt)("td",{parentName:"tr",align:null},"Content of the earnings call transcript.")))))}u.isMDXComponent=!0}}]);
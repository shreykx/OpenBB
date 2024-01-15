"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33167],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(67294),a=n(35742);function o(t){let{title:e}=t;return r.createElement(a.Z,null,r.createElement("title",null,e))}},47117:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const l={title:"topbuys",description:"Explore top buys for government trading. Discover how to use the 'topbuys' feature, including parameter selection for congress, senate and house, past transactions, and more for optimized use. Enhance your trading strategies today with quiverquant.",keywords:["government trading","topbuys","congress","senate","house","past transactions","quiverquant"]},i=void 0,s={unversionedId:"terminal/reference/stocks/gov/topbuys",id:"terminal/reference/stocks/gov/topbuys",title:"topbuys",description:"Explore top buys for government trading. Discover how to use the 'topbuys' feature, including parameter selection for congress, senate and house, past transactions, and more for optimized use. Enhance your trading strategies today with quiverquant.",source:"@site/content/terminal/reference/stocks/gov/topbuys.md",sourceDirName:"terminal/reference/stocks/gov",slug:"/terminal/reference/stocks/gov/topbuys",permalink:"/terminal/reference/stocks/gov/topbuys",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/gov/topbuys.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705332260,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{title:"topbuys",description:"Explore top buys for government trading. Discover how to use the 'topbuys' feature, including parameter selection for congress, senate and house, past transactions, and more for optimized use. Enhance your trading strategies today with quiverquant.",keywords:["government trading","topbuys","congress","senate","house","past transactions","quiverquant"]},sidebar:"tutorialSidebar",previous:{title:"qtrcontracts",permalink:"/terminal/reference/stocks/gov/qtrcontracts"},next:{title:"toplobbying",permalink:"/terminal/reference/stocks/gov/toplobbying"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:u},m="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks /gov/topbuys - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Top buys for government trading. ","[Source: www.quiverquant.com]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"topbuys [-g {congress,senate,house}] [-p PAST_TRANSACTIONS_MONTHS] [-l LIMIT] [--raw]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gov"),(0,a.kt)("td",{parentName:"tr",align:null},"-g  --govtype"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"congress"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"congress, senate, house")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"Past transaction months"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of top tickers to display"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"--raw"),(0,a.kt)("td",{parentName:"tr",align:null},"Print raw data."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154266344-944b0c5b-f7b0-4fdb-a020-a93565f6c13c.png",alt:"topbuys"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
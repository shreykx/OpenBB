"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99358],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Version 1.0.7",version:"1.0.7",date:new Date("2022-09-12T00:00:00.000Z"),description:"Version 1.0.7",sidebar_position:2},i=void 0,l={unversionedId:"bot/changelog/version1_0_7",id:"bot/changelog/version1_0_7",title:"Version 1.0.7",description:"Version 1.0.7",source:"@site/content/bot/changelog/version1_0_7.mdx",sourceDirName:"bot/changelog",slug:"/bot/changelog/version1_0_7",permalink:"/bot/changelog/version1_0_7",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/changelog/version1_0_7.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Version 1.0.7",version:"1.0.7",date:"2022-09-12T00:00:00.000Z",description:"Version 1.0.7",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Version 1.0.8",permalink:"/bot/changelog/version1_0_8"},next:{title:"Version 1.0.6",permalink:"/bot/changelog/version1_0_6"}},c={},p=[{value:"Added",id:"added",level:2},{value:"Stocks:",id:"stocks",level:3},{value:"Crypto:",id:"crypto",level:3},{value:"NFT:",id:"nft",level:3},{value:"Changed",id:"changed",level:2},{value:"Fixed",id:"fixed",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"added"},"Added"),(0,o.kt)("p",null,"Commands:"),(0,o.kt)("h3",{id:"stocks"},"Stocks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/markets - Provides a nice overview of the market with adv / decliners relative to change and 50d/200d MA"),(0,o.kt)("li",{parentName:"ul"},"/scr pm_all - Displays all available pre-market screeners"),(0,o.kt)("li",{parentName:"ul"},"/scr ah_all - Displays all available after-hours screeners")),(0,o.kt)("h3",{id:"crypto"},"Crypto:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/crypto tvl - Get protocols historical TVL."),(0,o.kt)("li",{parentName:"ul"},"/crypto defi table - Get top DeFi protocols"),(0,o.kt)("li",{parentName:"ul"},"/crypto defi chart - Chart of top 20 defi protocols by TVL"),(0,o.kt)("li",{parentName:"ul"},"/crypto top - Get top cryptos and info"),(0,o.kt)("li",{parentName:"ul"},"/crypto bio - Get fundamental information about a crypto."),(0,o.kt)("li",{parentName:"ul"},"/crypto fees - Fees on a certain date of top crypto protocols"),(0,o.kt)("li",{parentName:"ul"},"/crypto compfees - Get protocol fees over time."),(0,o.kt)("li",{parentName:"ul"},"/crypto ir - Returns a table of issuance rate of top crypto protocols.")),(0,o.kt)("h3",{id:"nft"},"NFT:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"/nft top - Get Top NFT Collections from Ethereum Chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"/nft collection - Get NFT collection data from Ethereum network for the specified slug.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"/nft chart - Returns NFT chart for floor price and sales on the specified slug.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"REMOVE:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"/fidelity - They made this so you have to be logged in now :("))),(0,o.kt)("h2",{id:"changed"},"Changed"),(0,o.kt)("p",null,"No changes"),(0,o.kt)("h2",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed small bug when saving watchlist"),(0,o.kt)("li",{parentName:"ul"},"Adjusted some tickers sizing on charts")))}d.isMDXComponent=!0}}]);
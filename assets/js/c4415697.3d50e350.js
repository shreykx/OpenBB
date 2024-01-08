"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60116],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||s;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(35742);function s(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},98201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),s=r(88828);const a={title:"trendingst",description:"The documentation page elaborates on /trendingst command usage for tracking top 15 trending stocks in real-time based on discussions on StockTwits platform.",keywords:["trending stocks","stocktwits","/trendingst command","real-time tracking","most discussed stocks","stock market","most popular stocks"]},i=void 0,c={unversionedId:"bot/reference/telegram/discovery/trendingst",id:"bot/reference/telegram/discovery/trendingst",title:"trendingst",description:"The documentation page elaborates on /trendingst command usage for tracking top 15 trending stocks in real-time based on discussions on StockTwits platform.",source:"@site/content/bot/reference/telegram/discovery/trendingst.md",sourceDirName:"bot/reference/telegram/discovery",slug:"/bot/reference/telegram/discovery/trendingst",permalink:"/bot/reference/telegram/discovery/trendingst",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/discovery/trendingst.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"trendingst",description:"The documentation page elaborates on /trendingst command usage for tracking top 15 trending stocks in real-time based on discussions on StockTwits platform.",keywords:["trending stocks","stocktwits","/trendingst command","real-time tracking","most discussed stocks","stock market","most popular stocks"]},sidebar:"tutorialSidebar",previous:{title:"pop",permalink:"/bot/reference/telegram/discovery/pop"},next:{title:"wsb",permalink:"/bot/reference/telegram/discovery/wsb"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{title:"discovery: trendingst - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the top 15 trending stocks from StockTwits according to the most recent discussions. The stocks are displayed in order of most trending, as determined by the most discussed stocks in the StockTwits community. This command is an efficient way to stay up to date on the most popular stocks in the market."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/trendingst\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/trendingst\n")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);
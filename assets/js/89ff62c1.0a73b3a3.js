"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},96753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"stoch",description:"The page provides detailed information about the Stochastic Oscillator trading tool. It describes the principles of operation, situations of overbought and oversold conditions, and offers instructions for its usage. It also specifies parameters and their functionality, including time periods of fastk, slowd, and slowk moving averages.",keywords:["Stochastic Oscillator","Overbought condition","Oversold condition","Fast %D","Slow %D","Buy signal","Sell signal","Raw %K","Trading range","N_fastkperiod","N_slowdperiod","N_slowkperiod","Fastk moving average","Slowk moving average","Slowd moving average"]},l=void 0,s={unversionedId:"terminal/reference/forex/ta/stoch",id:"terminal/reference/forex/ta/stoch",title:"stoch",description:"The page provides detailed information about the Stochastic Oscillator trading tool. It describes the principles of operation, situations of overbought and oversold conditions, and offers instructions for its usage. It also specifies parameters and their functionality, including time periods of fastk, slowd, and slowk moving averages.",source:"@site/content/terminal/reference/forex/ta/stoch.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/stoch",permalink:"/terminal/reference/forex/ta/stoch",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/ta/stoch.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"stoch",description:"The page provides detailed information about the Stochastic Oscillator trading tool. It describes the principles of operation, situations of overbought and oversold conditions, and offers instructions for its usage. It also specifies parameters and their functionality, including time periods of fastk, slowd, and slowk moving averages.",keywords:["Stochastic Oscillator","Overbought condition","Oversold condition","Fast %D","Slow %D","Buy signal","Sell signal","Raw %K","Trading range","N_fastkperiod","N_slowdperiod","N_slowkperiod","Fastk moving average","Slowk moving average","Slowd moving average"]},sidebar:"tutorialSidebar",previous:{title:"sma",permalink:"/terminal/reference/forex/ta/sma"},next:{title:"zlma",permalink:"/terminal/reference/forex/ta/zlma"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"forex /ta/stoch - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The Stochastic Oscillator measures where the close is in relation to the recent trading range. The values range from zero to 100. %D values over 75 indicate an overbought condition; values under 25 indicate an oversold condition. When the Fast %D crosses above the Slow %D, it is a buy signal; when it crosses below, it is a sell signal. The Raw %K is generally considered too erratic to use for crossover signals."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"stoch [-k N_FASTKPERIOD] [-d N_SLOWDPERIOD] [--slowkperiod N_SLOWKPERIOD]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_fastkperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"-k  --fastkperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"The time period of the fastk moving average"),(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_slowdperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --slowdperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"The time period of the slowd moving average"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_slowkperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"--slowkperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"The time period of the slowk moving average"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154311913-d58e58bb-d116-44dd-ae4b-44e59c25f22a.png",alt:"stoch"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);
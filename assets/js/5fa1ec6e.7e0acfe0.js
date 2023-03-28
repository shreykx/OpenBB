"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=o.createContext({}),d=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(a.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(r),m=i,u=l["".concat(a,".").concat(m)]||l[m]||f[m]||n;return r?o.createElement(u,s(s({ref:t},p),{},{components:r})):o.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[l]="string"==typeof e?e:i,s[1]=c;for(var d=2;d<n;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(39960),i=r(67294),n=r(86010),s=r(16550);function c(e){let{title:t,url:r,description:c,command:a}=e;const{pathname:d}=(0,s.TH)();return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!d.startsWith("/terminal")&&!d.startsWith("/sdk")&&!d.startsWith("/bot")}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},8224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=r(87462),i=(r(67294),r(3905)),n=r(62872);const s={},c="options",a={unversionedId:"bot/reference/discord/options/index",id:"bot/reference/discord/options/index",title:"options",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/options/index.mdx",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/",permalink:"/bot/reference/discord/options/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/options/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"top",permalink:"/bot/reference/discord/nft/top"},next:{title:"chains",permalink:"/bot/reference/discord/options/chains"}},d={},p=[],l={toc:p},f="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"options"},"options"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(n.Z,{title:"chains",description:"Displays Options Chain by Expiry.",url:"/bot/reference/discord/options/chains",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"equitypc",description:"Displays the Equity Put/Call Volume Ratio - from market-harmonics.com",url:"/bot/reference/discord/options/equitypc",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"gamma",description:"Displays Options Gamma Levels for a Stock.",url:"/bot/reference/discord/options/gamma",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"highiv",description:"Top 15 Highest IV30 Equity stocks.",url:"/bot/reference/discord/options/highiv",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"hist",description:"Displays Options Price History in a chart.",url:"/bot/reference/discord/options/hist",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"indexpc",description:"Displays the Index Put/Call Ratio for the market - from market-harmonics.com",url:"/bot/reference/discord/options/indexpc",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"info",description:"Displays option information (volatility, IV rank etc).",url:"/bot/reference/discord/options/info",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"itm",description:"Displays In-the-Money options by expiry for a stock.",url:"/bot/reference/discord/options/itm",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"maxpain",description:"Displays the Max Pain on expiration date for a given stock.",url:"/bot/reference/discord/options/maxpain",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"oi",description:"Displays OI and call/put ratio for given stock - can add EXP date too for bigger breakdown",url:"/bot/reference/discord/options/oi",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"oichart",description:"Charts Total Open Interest by Strike Price.",url:"/bot/reference/discord/options/oichart",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"smile",description:"Displays Options Volatility Smile.",url:"/bot/reference/discord/options/smile",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"stats",description:"Displays Options Statistics for a stock.",url:"/bot/reference/discord/options/stats",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topoi",description:"Displays Top Open Interest",url:"/bot/reference/discord/options/topoi",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topoichange",description:"Displays Top 15 stocks with highest OI Change.",url:"/bot/reference/discord/options/topoichange",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topstrikevol",description:"Displays Options Strike Volume can add EXP date for bigger breakdown",url:"/bot/reference/discord/options/topstrikevol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topvol",description:"Top 15 Highest options volume.",url:"/bot/reference/discord/options/topvol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topvoletf",description:"Top 15 Highest options volume ETFs.",url:"/bot/reference/discord/options/topvoletf",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"unu",description:"Shows Unusual Options",url:"/bot/reference/discord/options/unu",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"uoastock",description:"Display Top 20day Average Options Volume by ticker.",url:"/bot/reference/discord/options/uoastock",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"vol",description:"Displays Options Strike Volume can add EXP date for bigger breakdown",url:"/bot/reference/discord/options/vol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"vsurf",description:"Display Options Volatility Surface.",url:"/bot/reference/discord/options/vsurf",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);
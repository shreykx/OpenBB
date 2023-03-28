"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5971],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),s=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return o.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||a;return t?o.createElement(u,l(l({ref:r},p),{},{components:t})):o.createElement(u,l({ref:r},p))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(39960),n=t(67294),a=t(86010),l=t(16550);function i(e){let{title:r,url:t,description:i,command:c}=e;const{pathname:s}=(0,l.TH)();return n.createElement(o.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:s.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":s.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":s.startsWith("/bot"),header_docs:!s.startsWith("/terminal")&&!s.startsWith("/sdk")&&!s.startsWith("/bot")}),to:t},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),i?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},98818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=t(87462),n=(t(67294),t(3905)),a=t(62872);const l={},i="darkpool",c={unversionedId:"bot/reference/telegram/darkpool/index",id:"bot/reference/telegram/darkpool/index",title:"darkpool",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/darkpool/index.mdx",sourceDirName:"bot/reference/telegram/darkpool",slug:"/bot/reference/telegram/darkpool/",permalink:"/bot/reference/telegram/darkpool/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/darkpool/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tvl",permalink:"/bot/reference/telegram/crypto/tvl"},next:{title:"allblocks",permalink:"/bot/reference/telegram/darkpool/allblocks"}},s={},p=[],d={toc:p},m="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"darkpool"},"darkpool"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"allblocks",description:"Last 15 Block Trades.",url:"/bot/reference/telegram/darkpool/allblocks",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"alldp",description:"Last 15 Darkpool Trades",url:"/bot/reference/telegram/darkpool/alldp",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"allprints",description:"Last 15 Combination of Dark Pool and Blocks.",url:"/bot/reference/telegram/darkpool/allprints",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"bigprintsdp",description:"Combination of Dark Pool and Blocks - Largest over x amount of days.",url:"/bot/reference/telegram/darkpool/bigprintsdp",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"levels",description:"Biggest Levels for All Prints over last X days.",url:"/bot/reference/telegram/darkpool/levels",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"sectors",description:"Summary of all prints by % of MarketCap by Sector",url:"/bot/reference/telegram/darkpool/sectors",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"summary",description:"Summary of all prints by % of MarketCap",url:"/bot/reference/telegram/darkpool/summary",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"topsum",description:"Top Total Block & Dark Pool data.",url:"/bot/reference/telegram/darkpool/topsum",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);
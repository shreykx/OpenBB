"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(39960),n=r(86010),a=r(67294),i=r(16550);function c(e){let{title:t,url:r,description:c,command:l}=e;const{pathname:s}=(0,i.TH)(),d=s.replace(/\/v\d+/,"");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},41951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905)),a=r(62872);const i={},c="economy",l={unversionedId:"bot/reference/telegram/economy/index",id:"bot/reference/telegram/economy/index",title:"economy",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/economy/index.mdx",sourceDirName:"bot/reference/telegram/economy",slug:"/bot/reference/telegram/economy/",permalink:"/bot/reference/telegram/economy/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/economy/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705332260,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ytd",permalink:"/bot/reference/telegram/duediligence/ytd"},next:{title:"bonds",permalink:"/bot/reference/telegram/economy/bonds"}},s={},d=[],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"economy"},"economy"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"bonds",description:"This command allows the user to retrieve an overview of Global or US bonds. It includes information about the...",url:"/bot/reference/telegram/economy/bonds",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"calendar",description:"This command allows the user to retrieve an Economic Calendar for the day, which displays the upcoming economic...",url:"/bot/reference/telegram/economy/calendar",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"commodities",description:"This command allows users to quickly and easily retrieve an overview of Futures and commodities. It provides the...",url:"/bot/reference/telegram/economy/commodities",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"currencies",description:"This command allows the user to retrieve an overview of all available currencies. It will provide the user with...",url:"/bot/reference/telegram/economy/currencies",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"fedrates",description:"This command allows users to quickly and easily retrieve upcoming Federal Rate decision dates and chances. It is...",url:"/bot/reference/telegram/economy/fedrates",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"indices",description:"This command provides a real-time overview of the major US stock indices, such as the Dow Jones Industrial...",url:"/bot/reference/telegram/economy/indices",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"revrepo",description:"This command allows the user to retrieve Reverse Repo data for a default period of 35 days. This data includes...",url:"/bot/reference/telegram/economy/revrepo",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"yieldcurve",description:"This command allows the user to retrieve the US Bonds yield curve. The yield curve is a graph that plots the...",url:"/bot/reference/telegram/economy/yieldcurve",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87374],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),s=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return o.createElement(d.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(t),u=n,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return t?o.createElement(f,c(c({ref:r},l),{},{components:t})):o.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=u;var a={};for(var d in r)hasOwnProperty.call(r,d)&&(a[d]=r[d]);a.originalType=e,a[m]="string"==typeof e?e:n,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(39960),n=t(86010),i=t(67294),c=t(16550);function a(e){let{title:r,url:t,description:a,command:d}=e;const{pathname:s}=(0,c.TH)(),l=s.replace(/\/v\d+/,"");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),a?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},a):null)}},44852:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var o=t(87462),n=(t(67294),t(3905)),i=t(62872);const c={},a="economy",d={unversionedId:"bot/reference/discord/economy/index",id:"bot/reference/discord/economy/index",title:"economy",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/economy/index.mdx",sourceDirName:"bot/reference/discord/economy",slug:"/bot/reference/discord/economy/",permalink:"/bot/reference/discord/economy/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/economy/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ytd",permalink:"/bot/reference/discord/duedilligence/ytd"},next:{title:"calendar",permalink:"/bot/reference/discord/economy/calendar"}},s={},l=[],m={toc:l},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"economy"},"economy"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"calendar",description:"This command allows the user to retrieve an Economic Calendar for the day, which displays the upcoming economic...",url:"/bot/reference/discord/economy/calendar",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"commodities",description:"This command allows users to quickly and easily retrieve an overview of Futures and commodities. It provides the...",url:"/bot/reference/discord/economy/commodities",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"currencies",description:"This command allows the user to retrieve an overview of all available currencies. It will provide the user with...",url:"/bot/reference/discord/economy/currencies",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"fedrates",description:"This command allows users to quickly and easily retrieve upcoming Federal Rate decision dates and chances. It is...",url:"/bot/reference/discord/economy/fedrates",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"glbonds",description:"This command allows the user to retrieve an overview of global bonds. It includes information about the type of...",url:"/bot/reference/discord/economy/glbonds",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"indices",description:"This command provides a real-time overview of the major US stock indices, such as the Dow Jones Industrial...",url:"/bot/reference/discord/economy/indices",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"revrepo",description:"This command allows the user to retrieve Reverse Repo data for a default period of 35 days. This data includes...",url:"/bot/reference/discord/economy/revrepo",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"usbonds",description:"This command retrieves an overview of US bonds from the 1-Month to 30-Year bonds, providing the user with a list...",url:"/bot/reference/discord/economy/usbonds",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"yieldcurve",description:"This command allows the user to retrieve the US Bonds yield curve. The yield curve is a graph that plots the...",url:"/bot/reference/discord/economy/yieldcurve",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
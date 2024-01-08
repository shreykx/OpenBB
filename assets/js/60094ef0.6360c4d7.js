"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return r?o.createElement(f,s(s({ref:t},d),{},{components:r})):o.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(39960),n=r(86010),a=r(67294),s=r(16550),i=r(48334);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:d}=(0,s.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&a.createElement(i.Z,{className:"ml-auto mr-4"})),l?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},52998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905)),a=r(26515);const s={},i="shorts",l={unversionedId:"platform/reference/equity/shorts/index",id:"platform/reference/equity/shorts/index",title:"shorts",description:"Commands",source:"@site/content/platform/reference/equity/shorts/index.mdx",sourceDirName:"platform/reference/equity/shorts",slug:"/platform/reference/equity/shorts/",permalink:"/platform/reference/equity/shorts/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/shorts/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"splits",permalink:"/platform/reference/equity/calendar/splits"},next:{title:"fails_to_deliver",permalink:"/platform/reference/equity/shorts/fails_to_deliver"}},c={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shorts"},"shorts"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"Fails To Deliver",description:"Get reported Fail-to-deliver (FTD) data",url:"/platform/reference/equity/shorts/fails_to_deliver",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Short Interest",description:"Get reported Short Volume and Days to Cover data",url:"/platform/reference/equity/shorts/short_interest",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Short Volume",description:"Get reported Fail-to-deliver (FTD) data",url:"/platform/reference/equity/shorts/short_volume",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
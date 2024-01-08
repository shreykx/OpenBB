"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66737],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),p=a,u=m["".concat(d,".").concat(p)]||m[p]||f[p]||o;return t?n.createElement(u,i(i({ref:r},l),{},{components:t})):n.createElement(u,i({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),c=t(48334);function d(e){let{title:r,url:t,description:d,command:s}=e;const{pathname:l}=(0,i.TH)(),m=l.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&o.createElement(c.Z,{className:"ml-auto mr-4"})),d?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},d):null)}},36176:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},c="rate",d={unversionedId:"excel/reference/fixedincome/rate/index",id:"excel/reference/fixedincome/rate/index",title:"rate",description:"Commands",source:"@site/content/excel/reference/fixedincome/rate/index.mdx",sourceDirName:"excel/reference/fixedincome/rate",slug:"/excel/reference/fixedincome/rate/",permalink:"/excel/reference/fixedincome/rate/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/fixedincome/rate/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fixedincome",permalink:"/excel/reference/fixedincome/"},next:{title:"ameribor",permalink:"/excel/reference/fixedincome/rate/ameribor"}},s={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rate"},"rate"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"ameribor",description:"Ameribor. Ameribor (short for the American interbank offered rate) is a benchmark interest rate...",url:"rate/ameribor",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"effr_forecast",description:"Fed Funds Rate Projections. The projections for the federal funds rate are the value of the...",url:"rate/effr_forecast",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"dpcredit",description:"Discount Window Primary Credit Rate. A bank rate is the interest rate a nation's central bank...",url:"rate/dpcredit",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"estr",description:"Euro Short-Term Rate. The euro short-term rate (\u20acSTR) reflects the wholesale euro unsecured...",url:"rate/estr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"sonia",description:"Sterling Overnight Index Average. SONIA (Sterling Overnight Index Average) is an important...",url:"rate/sonia",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"iorb",description:"Interest on Reserve Balances. Get Interest Rate on Reserve Balances data A bank rate is the...",url:"rate/iorb",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"effr",description:"Fed Funds Rate. Get Effective Federal Funds Rate data. A bank rate is the interest rate a...",url:"rate/effr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"ecb",description:"European Central Bank Interest Rates. The Governing Council of the ECB sets the key interest...",url:"rate/ecb",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
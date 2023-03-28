"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96489],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,u=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(u,d(d({ref:r},l),{},{components:t})):n.createElement(u,d({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[f]="string"==typeof e?e:o,d[1]=c;for(var s=2;s<a;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),o=t(67294),a=t(86010),d=t(16550);function c(e){let{title:r,url:t,description:c,command:i}=e;const{pathname:s}=(0,d.TH)();return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:s.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":s.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":s.startsWith("/bot"),header_docs:!s.startsWith("/terminal")&&!s.startsWith("/sdk")&&!s.startsWith("/bot")}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),c?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},42493:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905)),a=t(62872);const d={},c="oanda",i={unversionedId:"sdk/reference/forex/oanda/index",id:"sdk/reference/forex/oanda/index",title:"oanda",description:"<ReferenceCard",source:"@site/content/sdk/reference/forex/oanda/index.mdx",sourceDirName:"sdk/reference/forex/oanda",slug:"/sdk/reference/forex/oanda/",permalink:"/sdk/reference/forex/oanda/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forex/oanda/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/sdk/reference/forex/load"},next:{title:"calendar",permalink:"/sdk/reference/forex/oanda/calendar"}},s={},l=[],f={toc:l},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oanda"},"oanda"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"calendar",description:"Request data of significant events calendar.",url:"/sdk/reference/forex/oanda/calendar",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"cancel",description:"Request cancellation of a pending order.",url:"/sdk/reference/forex/oanda/cancel",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"candles",description:"Request data for candle chart.",url:"/sdk/reference/forex/oanda/candles",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"close",description:"Close a trade.",url:"/sdk/reference/forex/oanda/close",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"listorders",description:"Request the orders list from Oanda.",url:"/sdk/reference/forex/oanda/listorders",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"openpositions",description:"Request information on open positions.",url:"/sdk/reference/forex/oanda/openpositions",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"opentrades",description:"Request open trades data.",url:"/sdk/reference/forex/oanda/opentrades",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"order",description:"Request creation of buy/sell trade order.",url:"/sdk/reference/forex/oanda/order",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"orderbook",description:"Request order book data for plotting.",url:"/sdk/reference/forex/oanda/orderbook",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"pending",description:"Request information on pending orders.",url:"/sdk/reference/forex/oanda/pending",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"positionbook",description:"Request position book data for plotting.",url:"/sdk/reference/forex/oanda/positionbook",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"price",description:"Request price for a forex pair.",url:"/sdk/reference/forex/oanda/price",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"summary",description:"Request Oanda account summary.",url:"/sdk/reference/forex/oanda/summary",command:"true",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);
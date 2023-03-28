"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(u,l(l({ref:t},f),{},{components:r})):n.createElement(u,l({ref:t},f))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),o=r(67294),a=r(86010),l=r(16550);function c(e){let{title:t,url:r,description:c,command:i}=e;const{pathname:s}=(0,l.TH)();return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:s.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":s.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":s.startsWith("/bot"),header_docs:!s.startsWith("/terminal")&&!s.startsWith("/sdk")&&!s.startsWith("/bot")}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},79563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>f});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const l={},c="nft",i={unversionedId:"bot/reference/telegram/nft/index",id:"bot/reference/telegram/nft/index",title:"nft",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/nft/index.mdx",sourceDirName:"bot/reference/telegram/nft",slug:"/bot/reference/telegram/nft/",permalink:"/bot/reference/telegram/nft/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/nft/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"help",permalink:"/bot/reference/telegram/info/start"},next:{title:"nftcollection",permalink:"/bot/reference/telegram/nft/nftcollection"}},s={},f=[],p={toc:f},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nft"},"nft"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"nftcollection",description:"Get NFT Collection Data",url:"/bot/reference/telegram/nft/nftcollection",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"nfttop",description:"Get Top NFT Collections from Ethereum",url:"/bot/reference/telegram/nft/nfttop",mdxType:"ReferenceCard"})))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80497],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,m=p["".concat(i,".").concat(u)]||p[u]||f[u]||s;return t?n.createElement(m,c(c({ref:r},d),{},{components:t})):n.createElement(m,c({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=u;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<s;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(39960),o=t(67294),s=t(86010),c=t(16550);function a(e){let{title:r,url:t,description:a,command:i}=e;const{pathname:l}=(0,c.TH)();return o.createElement(n.Z,{className:(0,s.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!l.startsWith("/terminal")&&!l.startsWith("/sdk")&&!l.startsWith("/bot")}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),a?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},a):null)}},92492:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=t(87462),o=(t(67294),t(3905)),s=t(62872);const c={},a="screeners",i={unversionedId:"bot/reference/discord/screeners/index",id:"bot/reference/discord/screeners/index",title:"screeners",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/screeners/index.mdx",sourceDirName:"bot/reference/discord/screeners",slug:"/bot/reference/discord/screeners/",permalink:"/bot/reference/discord/screeners/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/screeners/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1hr",permalink:"/bot/reference/discord/pop/1hr"},next:{title:"ah",permalink:"/bot/reference/discord/screeners/ah"}},l={},d=[],p={toc:d},f="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"screeners"},"screeners"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(s.Z,{title:"ah",description:"Displays After-Hours stocks according to chosen screener.",url:"/bot/reference/discord/screeners/ah",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"ah_all",description:"Displays all available after-hours screeners",url:"/bot/reference/discord/screeners/ah_all",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"all",description:"Displays all available screeners",url:"/bot/reference/discord/screeners/all",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"pm",description:"Displays Pre-Market stocks according to chosen screener.",url:"/bot/reference/discord/screeners/pm",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"pm_all",description:"Displays all available pre-market screeners",url:"/bot/reference/discord/screeners/pm_all",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"technical",description:"Displays stock screener results according to chosen signal.",url:"/bot/reference/discord/screeners/technical",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
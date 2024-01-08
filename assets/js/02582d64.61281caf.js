"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80497],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,f=p["".concat(i,".").concat(u)]||p[u]||m[u]||s;return t?n.createElement(f,a(a({ref:r},d),{},{components:t})):n.createElement(f,a({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),o=t(86010),s=t(67294),a=t(16550);function c(e){let{title:r,url:t,description:c,command:i}=e;const{pathname:l}=(0,a.TH)(),d=l.replace(/\/v\d+/,"");return s.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},s.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),s.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),c?s.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},92492:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(87462),o=(t(67294),t(3905)),s=t(62872);const a={},c="screeners",i={unversionedId:"bot/reference/discord/screeners/index",id:"bot/reference/discord/screeners/index",title:"screeners",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/screeners/index.mdx",sourceDirName:"bot/reference/discord/screeners",slug:"/bot/reference/discord/screeners/",permalink:"/bot/reference/discord/screeners/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/screeners/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1hr",permalink:"/bot/reference/discord/pop/1hr"},next:{title:"ah",permalink:"/bot/reference/discord/screeners/ah"}},l={},d=[],p={toc:d},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"screeners"},"screeners"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(s.Z,{title:"ah",description:"This command allows the user to retrieve After-Hours stock movers according to a chosen screener.",url:"/bot/reference/discord/screeners/ah",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"ah_all",description:"This command retrieves all available after-hours screeners (gainers, losers, and most active). It is helpful for...",url:"/bot/reference/discord/screeners/ah_all",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"all",description:"This command allows the user to view all available screeners during market hours. The results can then be used to...",url:"/bot/reference/discord/screeners/all",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"pm",description:"This command offers the user the ability to view the top pre-market gainers, losers, and most active, giving the...",url:"/bot/reference/discord/screeners/pm",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"pm_all",description:"This command allows the user to retrieve all available pre-market screeners.",url:"/bot/reference/discord/screeners/pm_all",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"technical",description:"This command allows the user to retrieve stock screener results according to the chosen technical signal.",url:"/bot/reference/discord/screeners/technical",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);
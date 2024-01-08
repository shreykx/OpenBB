"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},25294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"alswe",description:"A documentation page for the 'alswe' tool providing allocation insights for a Swedish fund. Includes parameters for focus on country, sector, or holding levels.",keywords:["allocation","swedish fund","alswe","fund exposure","fund allocation","sector","country","holding"]},i=void 0,s={unversionedId:"terminal/reference/funds/alswe",id:"terminal/reference/funds/alswe",title:"alswe",description:"A documentation page for the 'alswe' tool providing allocation insights for a Swedish fund. Includes parameters for focus on country, sector, or holding levels.",source:"@site/content/terminal/reference/funds/alswe.md",sourceDirName:"terminal/reference/funds",slug:"/terminal/reference/funds/alswe",permalink:"/terminal/reference/funds/alswe",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/funds/alswe.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"alswe",description:"A documentation page for the 'alswe' tool providing allocation insights for a Swedish fund. Includes parameters for focus on country, sector, or holding levels.",keywords:["allocation","swedish fund","alswe","fund exposure","fund allocation","sector","country","holding"]},sidebar:"tutorialSidebar",previous:{title:"Mutual Funds",permalink:"/terminal/reference/funds/"},next:{title:"carbon",permalink:"/terminal/reference/funds/carbon"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"funds /alswe - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Show allocation of a swedish fund. To get a list of available funds, check the file ",(0,a.kt)("inlineCode",{parentName:"p"},"avanza_fund_ID.csv"),"."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"alswe [--focus {all,country,sector,holding}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"focus"),(0,a.kt)("td",{parentName:"tr",align:null},"--focus"),(0,a.kt)("td",{parentName:"tr",align:null},"The focus of the funds exposure/allocation"),(0,a.kt)("td",{parentName:"tr",align:null},"all"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"all, country, sector, holding")))),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);
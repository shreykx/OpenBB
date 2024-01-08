"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},33800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"cusum",description:"Learn to use the Cumulative Sum Algorithm (CUSUM) to effortlessly detect abrupt changes in your data. Understand parameters like threshold and drift to improve your data analysis.",keywords:["cumulative sum algorithm","CUSUM","abrupt changes detection","data analysis","threshold","drift"]},i=void 0,s={unversionedId:"terminal/reference/stocks/qa/cusum",id:"terminal/reference/stocks/qa/cusum",title:"cusum",description:"Learn to use the Cumulative Sum Algorithm (CUSUM) to effortlessly detect abrupt changes in your data. Understand parameters like threshold and drift to improve your data analysis.",source:"@site/content/terminal/reference/stocks/qa/cusum.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/cusum",permalink:"/terminal/reference/stocks/qa/cusum",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/qa/cusum.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"cusum",description:"Learn to use the Cumulative Sum Algorithm (CUSUM) to effortlessly detect abrupt changes in your data. Understand parameters like threshold and drift to improve your data analysis.",keywords:["cumulative sum algorithm","CUSUM","abrupt changes detection","data analysis","threshold","drift"]},sidebar:"tutorialSidebar",previous:{title:"cdf",permalink:"/terminal/reference/stocks/qa/cdf"},next:{title:"decompose",permalink:"/terminal/reference/stocks/qa/decompose"}},u={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks /qa/cusum - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Cumulative sum algorithm (CUSUM) to detect abrupt changes in data"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"cusum [-t THRESHOLD] [-d DRIFT]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0036913554908371894"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"drift"),(0,n.kt)("td",{parentName:"tr",align:null},"-d  --drift"),(0,n.kt)("td",{parentName:"tr",align:null},"drift"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0018456777454185947"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154306207-d68f53f4-2f9a-4c1a-8e0e-b83d49938759.png",alt:"cusum"})),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);
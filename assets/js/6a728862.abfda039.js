"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||s[d]||l;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},75546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const o={title:"cusum",description:"This page provides a detailed explanation on the usage, parameters and functionality of the Cumulative Sum Algorithm (CUSUM) used for detecting abrupt changes in data.",keywords:["cusum","cumulative sum algorithm","data change detection","threshold","drift"]},i=void 0,u={unversionedId:"terminal/reference/economy/qa/cusum",id:"terminal/reference/economy/qa/cusum",title:"cusum",description:"This page provides a detailed explanation on the usage, parameters and functionality of the Cumulative Sum Algorithm (CUSUM) used for detecting abrupt changes in data.",source:"@site/content/terminal/reference/economy/qa/cusum.md",sourceDirName:"terminal/reference/economy/qa",slug:"/terminal/reference/economy/qa/cusum",permalink:"/terminal/reference/economy/qa/cusum",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/qa/cusum.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"cusum",description:"This page provides a detailed explanation on the usage, parameters and functionality of the Cumulative Sum Algorithm (CUSUM) used for detecting abrupt changes in data.",keywords:["cusum","cumulative sum algorithm","data change detection","threshold","drift"]},sidebar:"tutorialSidebar",previous:{title:"cdf",permalink:"/terminal/reference/economy/qa/cdf"},next:{title:"decompose",permalink:"/terminal/reference/economy/qa/decompose"}},c={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:m},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"economy /qa/cusum - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Cumulative sum algorithm (CUSUM) to detect abrupt changes in data"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"cusum [-t THRESHOLD] [-d DRIFT]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"1.8177606395615018"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"drift"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --drift"),(0,a.kt)("td",{parentName:"tr",align:null},"drift"),(0,a.kt)("td",{parentName:"tr",align:null},"0.9088803197807509"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154306207-d68f53f4-2f9a-4c1a-8e0e-b83d49938759.png",alt:"cusum"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
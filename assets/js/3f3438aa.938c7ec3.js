"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52658],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),p=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,s=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(r),m=n,y=u["".concat(i,".").concat(m)]||u[m]||c[m]||s;return r?a.createElement(y,o(o({ref:e},d),{},{components:r})):a.createElement(y,o({ref:e},d))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[u]="string"==typeof t?t:n,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>s});var a=r(67294),n=r(35742);function s(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},43744:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),s=r(88828);const o={title:"rossidx",description:"This page provides detailed instructions on how to use the rossidx command in Python to sort and display information about startups from the Ross Index. Users can sort by various criteria (e.g. GitHub Stars, Company, Country), display charts, and set the chart type to 'stars' or 'forks'.",keywords:["rossidx","startups","chart","stars","forks","sorting","growth chart","GitHub","company","country","city","founded","raised money"]},l=void 0,i={unversionedId:"terminal/reference/alt/oss/rossidx",id:"terminal/reference/alt/oss/rossidx",title:"rossidx",description:"This page provides detailed instructions on how to use the rossidx command in Python to sort and display information about startups from the Ross Index. Users can sort by various criteria (e.g. GitHub Stars, Company, Country), display charts, and set the chart type to 'stars' or 'forks'.",source:"@site/content/terminal/reference/alt/oss/rossidx.md",sourceDirName:"terminal/reference/alt/oss",slug:"/terminal/reference/alt/oss/rossidx",permalink:"/terminal/reference/alt/oss/rossidx",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/alt/oss/rossidx.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"rossidx",description:"This page provides detailed instructions on how to use the rossidx command in Python to sort and display information about startups from the Ross Index. Users can sort by various criteria (e.g. GitHub Stars, Company, Country), display charts, and set the chart type to 'stars' or 'forks'.",keywords:["rossidx","startups","chart","stars","forks","sorting","growth chart","GitHub","company","country","city","founded","raised money"]},sidebar:"tutorialSidebar",previous:{title:"Oss",permalink:"/terminal/reference/alt/oss/"},next:{title:"rs",permalink:"/terminal/reference/alt/oss/rs"}},p={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:d},c="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{title:"alt /oss/rossidx - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Display list of startups from ross index ","[Source: https://runacap.com/]"," Use --chart to display chart and -t {stars,forks} to set chart type"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"rossidx [-s SORTBY [SORTBY ...]] [-r] [-c] [-g] [-t {stars,forks}]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort startups by column"),(0,n.kt)("td",{parentName:"tr",align:null},"Stars AGR ","[%]"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"GitHub, Company, Country, City, Founded, Raised ","[$M]",", Stars, Forks, Stars AGR ","[%]",", Forks AGR ","[%]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reverse"),(0,n.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,n.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"show_chart"),(0,n.kt)("td",{parentName:"tr",align:null},"-c  --chart"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show chart"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"show_growth"),(0,n.kt)("td",{parentName:"tr",align:null},"-g  --growth"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show growth chart"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"chart_type"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --chart-type"),(0,n.kt)("td",{parentName:"tr",align:null},"Chart type: {stars, forks}"),(0,n.kt)("td",{parentName:"tr",align:null},"stars"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"stars, forks")))),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);
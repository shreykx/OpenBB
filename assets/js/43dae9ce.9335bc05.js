"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:a,l[1]=d;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"us_yield_curve",description:"Learn about the US Yield Curve and how to retrieve United States yield curve data using the OBB.fixedincome.government.us_yield_curve function. Explore parameters like date, inflation adjustment, and provider. Understand the returned results, including the chart, metadata, and warnings. Discover the data structure, including maturity and rate.",keywords:["US Yield Curve","United States yield curve","yield curve","government bonds","fixed income","rates","inflation adjusted","FRED provider","data","maturity","treasury rate","rate"]},l=void 0,d={unversionedId:"excel/reference/fixedincome/government/us_yield_curve",id:"excel/reference/fixedincome/government/us_yield_curve",title:"us_yield_curve",description:"Learn about the US Yield Curve and how to retrieve United States yield curve data using the OBB.fixedincome.government.us_yield_curve function. Explore parameters like date, inflation adjustment, and provider. Understand the returned results, including the chart, metadata, and warnings. Discover the data structure, including maturity and rate.",source:"@site/content/excel/reference/fixedincome/government/us_yield_curve.md",sourceDirName:"excel/reference/fixedincome/government",slug:"/excel/reference/fixedincome/government/us_yield_curve",permalink:"/excel/reference/fixedincome/government/us_yield_curve",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/fixedincome/government/us_yield_curve.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705332260,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{title:"us_yield_curve",description:"Learn about the US Yield Curve and how to retrieve United States yield curve data using the OBB.fixedincome.government.us_yield_curve function. Explore parameters like date, inflation adjustment, and provider. Understand the returned results, including the chart, metadata, and warnings. Discover the data structure, including maturity and rate.",keywords:["US Yield Curve","United States yield curve","yield curve","government bonds","fixed income","rates","inflation adjusted","FRED provider","data","maturity","treasury rate","rate"]},sidebar:"tutorialSidebar",previous:{title:"treasury_rates",permalink:"/excel/reference/fixedincome/government/treasury_rates"},next:{title:"spreads",permalink:"/excel/reference/fixedincome/spreads/"}},o={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],c={toc:u},s="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"US Yield Curve. Get United States yield curve."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.FIXEDINCOME.GOVERNMENT.US_YIELD_CURVE([date];[inflation_adjusted];[provider])\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.FIXEDINCOME.GOVERNMENT.US_YIELD_CURVE()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"A specific date to get data for. Defaults to the most recent FRED entry."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inflation_adjusted"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Get inflation adjusted rates."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Options: fred, defaults to fred."),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return-data"},"Return Data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maturity"),(0,a.kt)("td",{parentName:"tr",align:null},"Maturity of the treasury rate in years.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rate"),(0,a.kt)("td",{parentName:"tr",align:null},"Associated rate given in decimal form (0.05 is 5%)")))))}p.isMDXComponent=!0}}]);
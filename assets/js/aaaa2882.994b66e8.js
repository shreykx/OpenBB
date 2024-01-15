"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32866],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),s=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return r?a.createElement(f,l(l({ref:e},d),{},{components:r})):a.createElement(f,l({ref:e},d))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[c]="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(t){let{children:e,hidden:r,className:l}=t;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},e)}},88828:(t,e,r)=>{r.d(e,{Z:()=>o});var a=r(67294),n=r(35742);function o(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},31792:(t,e,r)=>{r.d(e,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),u=r(91980),s=r(67392),d=r(50012);function c(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:a,default:n}}=t;return{value:e,label:r,attributes:a,default:n}}))}function p(t){const{values:e,children:r}=t;return(0,n.useMemo)((()=>{const t=e??c(r);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function m(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function f(t){let{queryString:e=!1,groupId:r}=t;const a=(0,i.k6)(),o=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((t=>{if(!o)return;const e=new URLSearchParams(a.location.search);e.set(o,t),a.replace({...a.location,search:e.toString()})}),[o,a])]}function b(t){const{defaultValue:e,queryString:r=!1,groupId:a}=t,o=p(t),[l,i]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=r.find((t=>t.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:o}))),[u,s]=f({queryString:r,groupId:a}),[c,b]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,o]=(0,d.Nk)(r);return[a,(0,n.useCallback)((t=>{r&&o.set(t)}),[r,o])]}({groupId:a}),h=(()=>{const t=u??c;return m({value:t,tabValues:o})?t:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((t=>{if(!m({value:t,tabValues:o}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),b(t)}),[s,b,o]),tabValues:o}}var h=r(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(t){let{className:e,block:r,selectedValue:u,selectValue:s,tabValues:d}=t;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),{pathname:m}=(0,i.TH)(),f=t=>{const e=t.currentTarget,r=c.indexOf(e),a=d[r].value;a!==u&&(p(e),s(a))},b=t=>{let e=null;switch(t.key){case"Enter":f(t);break;case"ArrowRight":{const r=c.indexOf(t.currentTarget)+1;e=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(t.currentTarget)-1;e=c[r]??c[c.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},d.map((t=>{let{value:e,label:r,attributes:l}=t;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>c.push(t),onKeyDown:b,onClick:f},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,l?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&m.startsWith("/terminal")})}),r??e)})))}function v(t){let{lazy:e,children:r,selectedValue:a}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===a));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function k(t){const e=b(t);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(y,(0,a.Z)({},t,e)),n.createElement(v,(0,a.Z)({},t,e)))}function w(t){const e=(0,h.Z)();return n.createElement(k,(0,a.Z)({key:String(e)},t))}},5264:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(88828),l=r(31792),i=r(85162);const u={title:"sortino_ratio",description:"Learn how to calculate and use the Sortino Ratio in Python. Understand the methodology, terminology, and parameters involved. Compare Sortino ratio to Sharpe ratio and adjust it accordingly. Enhance your risk management strategies with Sortino ratio.",keywords:["Sortino Ratio","Sortino method","Sortino terminology","Sortino ratio calculation","Sortino ratio parameters","Sortino ratio target return","Sortino ratio window size","Sortino ratio adjusted","Sortino ratio vs Sharpe ratio","Sortino ratio Python"]},s=void 0,d={unversionedId:"platform/reference/quantitative/sortino_ratio",id:"platform/reference/quantitative/sortino_ratio",title:"sortino_ratio",description:"Learn how to calculate and use the Sortino Ratio in Python. Understand the methodology, terminology, and parameters involved. Compare Sortino ratio to Sharpe ratio and adjust it accordingly. Enhance your risk management strategies with Sortino ratio.",source:"@site/content/platform/reference/quantitative/sortino_ratio.md",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/sortino_ratio",permalink:"/platform/reference/quantitative/sortino_ratio",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/sortino_ratio.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705332260,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{title:"sortino_ratio",description:"Learn how to calculate and use the Sortino Ratio in Python. Understand the methodology, terminology, and parameters involved. Compare Sortino ratio to Sharpe ratio and adjust it accordingly. Enhance your risk management strategies with Sortino ratio.",keywords:["Sortino Ratio","Sortino method","Sortino terminology","Sortino ratio calculation","Sortino ratio parameters","Sortino ratio target return","Sortino ratio window size","Sortino ratio adjusted","Sortino ratio vs Sharpe ratio","Sortino ratio Python"]},sidebar:"tutorialSidebar",previous:{title:"skewness",permalink:"/platform/reference/quantitative/skewness"},next:{title:"summary",permalink:"/platform/reference/quantitative/summary"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],m={toc:p},f="wrapper";function b(t){let{components:e,...r}=t;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"quantitative /sortino_ratio - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get Sortino Ratio."),(0,n.kt)("p",null,"For method & terminology see:\n",(0,n.kt)("a",{parentName:"p",href:"http://www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf"},"http://www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"obb.quantitative.sortino_ratio(data: Union[list, dict, pd.DataFrame, List[pd.DataFrame], pd.Series, List[pd.Series], numpy.ndarray, Data, List[Data]], target: str, target_return: float = 0.0, window: int = 252, adjusted: bool = False)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"List","[Data]"),(0,n.kt)("td",{parentName:"tr",align:null},"Time series data."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Target column name."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target_return"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Target return, by default 0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"window"),(0,n.kt)("td",{parentName:"tr",align:null},"PositiveInt"),(0,n.kt)("td",{parentName:"tr",align:null},"Window size, by default 252"),(0,n.kt)("td",{parentName:"tr",align:null},"252"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adjusted"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Adjust sortino ratio to compare it to sharpe ratio, by default False"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"Sortino ratio.\n")),(0,n.kt)("hr",null))}b.isMDXComponent=!0}}]);
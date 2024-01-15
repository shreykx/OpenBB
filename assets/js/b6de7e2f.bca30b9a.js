"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,m=c["".concat(i,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(86010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,l),hidden:n},t)}},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(35742);function a(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},31792:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),o=n(67294),a=n(86010),l=n(12466),p=n(16550),i=n(91980),s=n(67392),u=n(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,p.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[l,p]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,s]=m({queryString:n,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=i??c;return f({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{g&&p(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),b(e)}),[s,b,a]),tabValues:a}}var g=n(72389);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),{pathname:f}=(0,p.TH)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),s(r))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:m},l,{className:(0,a.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",h.tabItem,l?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&f.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&f.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&f.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&f.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&f.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&f.startsWith("/terminal")})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=b(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},o.createElement(y,(0,r.Z)({},e,t)),o.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return o.createElement(N,(0,r.Z)({key:String(t)},e))}},31670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=n(88828),l=n(31792),p=n(85162);const i={title:"plot",description:"This documentation page outlines the functions related to plotting and charting an investment portfolio using the OpenBB's po module. The page provides examples of different chart types such as pie, hist, dd, and rc. It includes necessary parameters for the functions and discusses the usage of a portfolio engine.",keywords:["plot","tab","po","chart","portfolio","example","pie","hist","dd","rc","engine","type","category","parameters","returns"]},s=void 0,u={unversionedId:"sdk/reference/portfolio/po/plot",id:"sdk/reference/portfolio/po/plot",title:"plot",description:"This documentation page outlines the functions related to plotting and charting an investment portfolio using the OpenBB's po module. The page provides examples of different chart types such as pie, hist, dd, and rc. It includes necessary parameters for the functions and discusses the usage of a portfolio engine.",source:"@site/content/sdk/reference/portfolio/po/plot.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/plot",permalink:"/sdk/reference/portfolio/po/plot",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/plot.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705332260,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{title:"plot",description:"This documentation page outlines the functions related to plotting and charting an investment portfolio using the OpenBB's po module. The page provides examples of different chart types such as pie, hist, dd, and rc. It includes necessary parameters for the functions and discusses the usage of a portfolio engine.",keywords:["plot","tab","po","chart","portfolio","example","pie","hist","dd","rc","engine","type","category","parameters","returns"]},sidebar:"tutorialSidebar",previous:{title:"nco",permalink:"/sdk/reference/portfolio/po/nco"},next:{title:"relriskparity",permalink:"/sdk/reference/portfolio/po/relriskparity"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],f={toc:d},m="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"portfolio.po.plot - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Display efficient frontier"),(0,o.kt)("p",null,"Source Code: [",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_view.py#L252"},"link"),"]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.portfolio.po.plot(portfolio_engine: Optional[portfolio_optimization.po_engine.PoEngine] = None, chart_type: str = "pie", kwargs: Any)\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,o.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine, by default None",(0,o.kt)("br",null),"Use ",(0,o.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"True")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chart_type"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},'Chart type, by default "pie"',(0,o.kt)("br",null),'Options are "pie", "hist", "dd" or "rc"'),(0,o.kt)("td",{parentName:"tr",align:null},"pie"),(0,o.kt)("td",{parentName:"tr",align:null},"True")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"This function does not return anything"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nd = {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"SECTOR": {\n                "AAPL": "INFORMATION TECHNOLOGY",\n                "MSFT": "INFORMATION TECHNOLOGY",\n                "AMZN": "CONSUMER DISCRETIONARY",\n            },\n            "CURRENT_INVESTED_AMOUNT": {\n                "AAPL": "100000.0",\n                "MSFT": "200000.0",\n                "AMZN": "300000.0",\n            },\n            "CURRENCY": {\n                "AAPL": "USD",\n                "MSFT": "USD",\n                "AMZN": "USD",\n            },\n        }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"p = openbb.portfolio.po.load(symbols_categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"['SECTOR', 'CURRENCY']\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="heat")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"['ASSET_CLASS',\n 'SECTOR',\n 'INDUSTRY',\n 'COUNTRY',\n 'CURRENCY']\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="INDUSTRY", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="COUNTRY", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="heat")\n')),(0,o.kt)("hr",null)),(0,o.kt)(p.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,o.kt)("p",null,"Display efficient frontier"),(0,o.kt)("p",null,"Source Code: [",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_view.py#L252"},"link"),"]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.portfolio.po.plot_chart(portfolio_engine: Optional[portfolio_optimization.po_engine.PoEngine] = None, chart_type: str = "pie", kwargs: Any)\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,o.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine, by default None",(0,o.kt)("br",null),"Use ",(0,o.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"True")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chart_type"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},'Chart type, by default "pie"',(0,o.kt)("br",null),'Options are "pie", "hist", "dd" or "rc"'),(0,o.kt)("td",{parentName:"tr",align:null},"pie"),(0,o.kt)("td",{parentName:"tr",align:null},"True")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,"This function does not return anything"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples-1"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nd = {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"SECTOR": {\n                "AAPL": "INFORMATION TECHNOLOGY",\n                "MSFT": "INFORMATION TECHNOLOGY",\n                "AMZN": "CONSUMER DISCRETIONARY",\n            },\n            "CURRENT_INVESTED_AMOUNT": {\n                "AAPL": "100000.0",\n                "MSFT": "200000.0",\n                "AMZN": "300000.0",\n            },\n            "CURRENCY": {\n                "AAPL": "USD",\n                "MSFT": "USD",\n                "AMZN": "USD",\n            },\n        }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"p = openbb.portfolio.po.load(symbols_categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"['SECTOR', 'CURRENCY']\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="heat")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"['ASSET_CLASS',\n 'SECTOR',\n 'INDUSTRY',\n 'COUNTRY',\n 'CURRENCY']\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="INDUSTRY", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="COUNTRY", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="heat")\n')),(0,o.kt)("hr",null))))}b.isMDXComponent=!0}}]);
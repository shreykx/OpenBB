"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),o=r(67294),a=r(86010),i=r(16550);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:l}=(0,i.TH)();return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!l.startsWith("/terminal")&&!l.startsWith("/sdk")&&!l.startsWith("/bot")}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},38732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const i={},s="Behavioural Analysis",c={unversionedId:"terminal/reference/stocks/ba/index",id:"terminal/reference/stocks/ba/index",title:"Behavioural Analysis",description:"<ReferenceCard",source:"@site/content/terminal/reference/stocks/ba/index.mdx",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/",permalink:"/terminal/reference/stocks/ba/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stocks",permalink:"/terminal/reference/stocks/"},next:{title:"bullbear",permalink:"/terminal/reference/stocks/ba/bullbear"}},l={},d=[],m={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"behavioural-analysis"},"Behavioural Analysis"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"bullbear",description:"Print bullbear sentiment based on last 30 messages on the board. Also prints the watchlist_count. [Source:...",url:"/terminal/reference/stocks/ba/bullbear",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"getdd",description:"Print top stock's due diligence from other users. [Source: Reddit]",url:"/terminal/reference/stocks/ba/getdd",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"headlines",description:"FinBrain collects the news headlines from 15+ major financial news sources on a daily basis and analyzes them to...",url:"/terminal/reference/stocks/ba/headlines",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"infer",description:"Print quick sentiment inference from last tweets that contain the ticker. This model splits the text into...",url:"/terminal/reference/stocks/ba/infer",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"interest",description:"Plot interest over time of words/sentences versus stock price. [Source: Google]",url:"/terminal/reference/stocks/ba/interest",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/stocks/ba/load",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"mentions",description:"Plot weekly bars of stock's interest over time. other users watchlist. [Source: Google]",url:"/terminal/reference/stocks/ba/mentions",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"messages",description:"Print up to 30 of the last messages on the board. [Source: Stocktwits]",url:"/terminal/reference/stocks/ba/messages",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"popular",description:"Print latest popular tickers. [Source: Reddit]",url:"/terminal/reference/stocks/ba/popular",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"queries",description:"Print top related queries with this stock's query. [Source: Google]",url:"/terminal/reference/stocks/ba/queries",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"redditsent",description:"Determine general Reddit sentiment about a ticker. [Source: Reddit]",url:"/terminal/reference/stocks/ba/redditsent",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"regions",description:"Plot bars of regions based on stock's interest. [Source: Google]",url:"/terminal/reference/stocks/ba/regions",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"rise",description:"Print top rising related queries with this stock's query. [Source: Google]",url:"/terminal/reference/stocks/ba/rise",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"sentiment",description:"Plot in-depth sentiment predicted from tweets from last days that contain pre-defined ticker. [Source: Twitter]",url:"/terminal/reference/stocks/ba/sentiment",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"snews",description:"Display stock price and headlines sentiment using VADER model over time. [Source: Finnhub]",url:"/terminal/reference/stocks/ba/snews",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"spacc",description:"Print other users SPACs announcement under subreddit 'SPACs'. [Source: Reddit]",url:"/terminal/reference/stocks/ba/spacc",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"stalker",description:"Print up to the last 30 messages of a user. [Source: Stocktwits]",url:"/terminal/reference/stocks/ba/stalker",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"trending",description:"Stocks trending. [Source: Stocktwits]",url:"/terminal/reference/stocks/ba/trending",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"wsb",description:"Print what WSB gang are up to in subreddit wallstreetbets. [Source: Reddit]",url:"/terminal/reference/stocks/ba/wsb",command:"true",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);
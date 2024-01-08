"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Current - v3.2.4",version:"3.2.4",date:new Date("2023-11-09T00:00:00.000Z"),description:"Current - v3.2.4",sidebar_position:92},i=void 0,l={unversionedId:"terminal/changelog/version3_2_4",id:"terminal/changelog/version3_2_4",title:"Current - v3.2.4",description:"Current - v3.2.4",source:"@site/content/terminal/changelog/version3_2_4.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version3_2_4",permalink:"/terminal/changelog/version3_2_4",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version3_2_4.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:92,frontMatter:{title:"Current - v3.2.4",version:"3.2.4",date:"2023-11-09T00:00:00.000Z",description:"Current - v3.2.4",sidebar_position:92},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/terminal/changelog/"},next:{title:"v3.2.3",permalink:"/terminal/changelog/version3_2_3"}},s={},p=[{value:"Thank you and welcome to our new contributors \ud83d\udd25",id:"thank-you-and-welcome-to-our-new-contributors-",level:2},{value:"What&#39;s new \ud83c\udf89",id:"whats-new-",level:2},{value:"What&#39;s changed \ud83d\ude80",id:"whats-changed-",level:2},{value:"Links \ud83e\udd8b",id:"links-",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"thank-you-and-welcome-to-our-new-contributors-"},"Thank you and welcome to our new contributors \ud83d\udd25"),(0,a.kt)("p",null,"@AdiSai, @AdwaitSalankar, @FarukhS52, @abhishek-amar, @bimbolimbo, @fadilparves, @joshuabuildsthings, @maxxsh, @polooner, @professssor, @ramazanguvenc and @ssahaxd"),(0,a.kt)("h2",{id:"whats-new-"},"What's new \ud83c\udf89"),(0,a.kt)("p",null,"We have been pushing away at the OpenBB Platform for our V4 release.  This 3.2 patch comes with some terminal bug fixes and a dependency pin for pip installation/"),(0,a.kt)("h2",{id:"whats-changed-"},"What's changed \ud83d\ude80"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"improved market cap value extraction (#5169) @bimbolimbo"),(0,a.kt)("li",{parentName:"ul"},"Clarified stocks/ta empty recom object message (#5468) @polooner"),(0,a.kt)("li",{parentName:"ul"},"Pin openai (#5685) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"hotfix/stock-screener-sort:  Fix for #5671 - sort by ",(0,a.kt)("inlineCode",{parentName:"li"},"fwdp/e")," in Stock Screener (#5675) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"hotfix/fix-gov-histcont: Fix #5650 - /stocks/gov/histcont (#5676) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Hotfix/reports model render report sanitize inputs (#5669) @joshuabuildsthings"),(0,a.kt)("li",{parentName:"ul"},"#5633 adding comma every 1000 (#5652) @ramazanguvenc"),(0,a.kt)("li",{parentName:"ul"},"improve docs structure for V4 (#5586) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"fix front matter (#5667) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Update settings.md (#5665) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Improve Pro documentation further (#5641) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Fix the redirect for intro to the correct url for docs (#5658) @fadilparves"),(0,a.kt)("li",{parentName:"ul"},"fix docs (#5646) @andrewkenreich"),(0,a.kt)("li",{parentName:"ul"},"Add light blue banner, blue when clicking sidebar + fix link in docusaurus.config.js (#5627) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Docs/terminalpro and improvement (#5622) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Patch 1 (#5604) @maxxsh"),(0,a.kt)("li",{parentName:"ul"},"Fix typo errors in CONTRIBUTING.md (#5623) @FarukhS52"),(0,a.kt)("li",{parentName:"ul"},"Change Ultima paragraph (#5624) @hjoaquim"),(0,a.kt)("li",{parentName:"ul"},"FIX #5600 Updated the Twitter logo to X logo (#5601) @professssor"),(0,a.kt)("li",{parentName:"ul"},"Hotfix/econometrics export filename fix (#5508) @ssahaxd"),(0,a.kt)("li",{parentName:"ul"},"Update README.md with new demo (#5598) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"fix: A value is trying to be set on a copy of a slice from a DataFrame (#5591) @abhishek-amar"),(0,a.kt)("li",{parentName:"ul"},"Updating Ultima urls (#5587) @hjoaquim"),(0,a.kt)("li",{parentName:"ul"},"Add columns to ",(0,a.kt)("inlineCode",{parentName:"li"},"stocks/search")," (#5565) @AdwaitSalankar"),(0,a.kt)("li",{parentName:"ul"},"added platform API integration test to Nightly build (#5571) @luqmanbello"),(0,a.kt)("li",{parentName:"ul"},"fix: Modify 'load' behavior to append data to existing sheet (#5503) @ssahaxd"),(0,a.kt)("li",{parentName:"ul"},"Hotfix/ultima improvements (#5553) @AdiSai"),(0,a.kt)("li",{parentName:"ul"},"add new bot command autopost docs (#5530) @andrewkenreich"),(0,a.kt)("li",{parentName:"ul"},"Updating showcase page (#5543) @hjoaquim"),(0,a.kt)("li",{parentName:"ul"},"Ultima Insights description update (#5541) @hjoaquim"),(0,a.kt)("li",{parentName:"ul"},"Add the v4 tests to default branch (#5536) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Release/3.2.3 (#5529) @jmaslek")),(0,a.kt)("p",null,"We are proud of our community contributors and staunch supporters of open-source ecosystems.\nHelp us promote our community by tagging ",(0,a.kt)("inlineCode",{parentName:"p"},"@openbb_finance")," on Twitter with a link to your pull request,\nand join our Discord server to chat about your contribution! We want to hear about your experience!"),(0,a.kt)("h3",{id:"links-"},"Links \ud83e\udd8b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/"},"Website"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/openbb_finance"},"Twitter"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/openbb-finance"},"Linkedin"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.instagram.com/openbb.finance/"},"Instagram"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/openbb/"},"Reddit"),", ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/xPHTuHCmuV"},"Discord")))}m.isMDXComponent=!0}}]);
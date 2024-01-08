"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40259],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88828:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(35742);function r(e){let{title:n}=e;return a.createElement(o.Z,null,a.createElement("title",null,n))}},63628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(87462),o=(t(67294),t(3905)),r=t(88828);const l={title:"FAQs",sidebar_position:5,description:"This page offers information about OpenBB Bot, covering topics such as linking your OpenBB Bot account, trying an OpenBB Bot plan, automatic plan renewals, refunds, access on different platforms, individual and server plans, and troubleshooting issues with slash commands.",keywords:["OpenBB Bot","OpenBB Bot account","OpenBB plan","billing cycle","OpenBB Discord","server settings","integrations","refunds","subscription","individual plan","server plan","slash commands"]},s=void 0,i={unversionedId:"bot/faqs",id:"bot/faqs",title:"FAQs",description:"This page offers information about OpenBB Bot, covering topics such as linking your OpenBB Bot account, trying an OpenBB Bot plan, automatic plan renewals, refunds, access on different platforms, individual and server plans, and troubleshooting issues with slash commands.",source:"@site/content/bot/faqs.md",sourceDirName:"bot",slug:"/bot/faqs",permalink:"/bot/faqs",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/faqs.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704714785,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:5,frontMatter:{title:"FAQs",sidebar_position:5,description:"This page offers information about OpenBB Bot, covering topics such as linking your OpenBB Bot account, trying an OpenBB Bot plan, automatic plan renewals, refunds, access on different platforms, individual and server plans, and troubleshooting issues with slash commands.",keywords:["OpenBB Bot","OpenBB Bot account","OpenBB plan","billing cycle","OpenBB Discord","server settings","integrations","refunds","subscription","individual plan","server plan","slash commands"]},sidebar:"tutorialSidebar",previous:{title:"v1.0.0",permalink:"/bot/changelog/version1_0_0"},next:{title:"Introduction",permalink:"/sdk/"}},c={},u=[],p={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{title:"FAQs | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How Do I Link My OpenBB Bot Account?"),(0,o.kt)("p",null,"After you signup for an OpenBB Bot plan you can link your accounts from ",(0,o.kt)("a",{href:"https://my.openbb.co/app/bot",class:"_hyper-link"},"here"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Can I try an OpenBB Bot plan?"),(0,o.kt)("p",null,"You can try a preview of any plan by just running commands on a server that has OpenBB Bot, like ",(0,o.kt)("a",{href:"https://my.openbb.co/discord",class:"_hyper-link"},"OpenBB Discord"),". We offer a limited amount of daily commands.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Will my OpenBB Bot plan renew at the end of the billing cycle?"),(0,o.kt)("p",null,"Yes, plans renew automatically at the end of the monthly and yearly billing cycles. You can cancel your plan at any time, before the end of the billing cycle, and it will not auto-renew anymore.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Can I get a refund on my OpenBB Bot?"),(0,o.kt)("p",null,"Since we offer a free command tier to try commands we don't offer refunds as you have had ample time to try the service and make a decision.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"If I sign up for OpenBB Bot do I get access on all platforms?"),(0,o.kt)("p",null,"Yes! You will have access on Discord, and other platforms as we add support.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"If I cancel OpenBB Bot subscription do I still have access?"),(0,o.kt)("p",null,"No, you will lose your access but you get a credit on your account of the prorated amount until the end of your current billing cycle.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What's the difference between an individual plan and server plan on OpenBB Bot?"),(0,o.kt)("p",null,"An individual plan gives your account access to OpenBB Bot while a server plan gives the whole server access. An individual plan carries more perks with it than a server plan, which you can find by clicking on the plan.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I added the bot but still don't see slash commands, what do I do?"),(0,o.kt)("img",{class:"mb-8",src:"https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/625ddbedd330d37960463537_Untitled.png"}),(0,o.kt)("p",null,"Just head to ",(0,o.kt)("b",null,"Server Settings \u2192 Integrations")," and then ",(0,o.kt)("b",null,"click \u2018Manage\u2019 next to an app"),", where you will behold a new, shiny, and dare we say ",(0,o.kt)("i",null,"dazzling"),", new surface."),(0,o.kt)("ul",{class:"list-disc my-4 ml-4"},(0,o.kt)("li",null,"Use toggles to modify which members can use commands"),(0,o.kt)("li",null,"Use toggles to modify which channels allow commands")),(0,o.kt)("p",null,"There\u2019s also a command-specific list, where you can make customized permissions for each command."),(0,o.kt)("ul",{class:"list-disc my-4 ml-4"},(0,o.kt)("li",null,"By default, these are all synced to the command permission at the top."),(0,o.kt)("li",null,"You can unsync an individual command to make further customizations.")),(0,o.kt)("p",null,"For more information click ",(0,o.kt)("a",{rel:"noreferrer noopener",target:"_blank",href:"https://discord.com/blog/slash-commands-permissions-discord-apps-bots",class:"_hyper-link"},"here"),".")))}m.isMDXComponent=!0}}]);
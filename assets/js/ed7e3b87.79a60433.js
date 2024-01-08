"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49570],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=a,N=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return n?r.createElement(N,i(i({ref:e},m),{},{components:n})):r.createElement(N,i({ref:e},m))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7583:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"balance",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",keywords:["balance sheet statement","balance sheet function","python function","financial statement function","balance sheet data parameters","balance sheet data returns","balance sheet data types"]},i=void 0,o={unversionedId:"excel/reference/equity/fundamental/balance",id:"excel/reference/equity/fundamental/balance",title:"balance",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",source:"@site/content/excel/reference/equity/fundamental/balance.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/balance",permalink:"/excel/reference/equity/fundamental/balance",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/balance.md",tags:[],version:"current",frontMatter:{title:"balance",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",keywords:["balance sheet statement","balance sheet function","python function","financial statement function","balance sheet data parameters","balance sheet data returns","balance sheet data types"]},sidebar:"tutorialSidebar",previous:{title:"fundamental",permalink:"/excel/reference/equity/fundamental/"},next:{title:"balance_growth",permalink:"/excel/reference/equity/fundamental/balance_growth"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:d},u="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Balance Sheet. Balance sheet statement."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.BALANCE(symbol;[provider];[period];[limit];[fiscal_year];[filing_date];[filing_date_lt];[filing_date_lte];[filing_date_gt];[filing_date_gte];[period_of_report_date];[period_of_report_date_lt];[period_of_report_date_lte];[period_of_report_date_gt];[period_of_report_date_gte];[include_sources];[order];[sort])\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.FUNDAMENTAL.BALANCE("AAPL")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"symbol")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Text")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"False"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, polygon, defaults to fmp."),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"The specific fiscal year.  Reports do not go beyond 2008. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date of the financial statement. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date_lt"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date less than the given date. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date_lte"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date less than or equal to the given date. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date_gt"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date greater than the given date. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date_gte"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date greater than or equal to the given date. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period_of_report_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Period of report date of the financial statement. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period_of_report_date_lt"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Period of report date less than the given date. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period_of_report_date_lte"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Period of report date less than or equal to the given date. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period_of_report_date_gt"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Period of report date greater than the given date. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period_of_report_date_gte"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Period of report date greater than or equal to the given date. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"include_sources"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to include the sources of the financial statement. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"order"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Order of the financial statement. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort of the financial statement. (provider: polygon)"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return-data"},"Return Data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,a.kt)("td",{parentName:"tr",align:null},"The end date of the reporting period.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,a.kt)("td",{parentName:"tr",align:null},"The fiscal period of the report.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,a.kt)("td",{parentName:"tr",align:null},"The fiscal year of the fiscal period.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filingDate"),(0,a.kt)("td",{parentName:"tr",align:null},"The date when the filing was made. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"acceptedDate"),(0,a.kt)("td",{parentName:"tr",align:null},"The date and time when the filing was accepted. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reported_currency"),(0,a.kt)("td",{parentName:"tr",align:null},"The currency in which the balance sheet was reported. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cash_and_cash_equivalents"),(0,a.kt)("td",{parentName:"tr",align:null},"Cash and cash equivalents. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"short_term_investments"),(0,a.kt)("td",{parentName:"tr",align:null},"Short term investments. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cashAndShortTermInvestments"),(0,a.kt)("td",{parentName:"tr",align:null},"Cash and short term investments. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"netReceivables"),(0,a.kt)("td",{parentName:"tr",align:null},"Net receivables. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inventory"),(0,a.kt)("td",{parentName:"tr",align:null},"Inventory. (provider: fmp, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"other_current_assets"),(0,a.kt)("td",{parentName:"tr",align:null},"Other current assets. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_current_assets"),(0,a.kt)("td",{parentName:"tr",align:null},"Total current assets. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plant_property_equipment_net"),(0,a.kt)("td",{parentName:"tr",align:null},"Plant property equipment net. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"goodwill"),(0,a.kt)("td",{parentName:"tr",align:null},"Goodwill. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"intangible_assets"),(0,a.kt)("td",{parentName:"tr",align:null},"Intangible assets. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"goodwillAndIntangibleAssets"),(0,a.kt)("td",{parentName:"tr",align:null},"Goodwill and intangible assets. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"long_term_investments"),(0,a.kt)("td",{parentName:"tr",align:null},"Long term investments. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"taxAssets"),(0,a.kt)("td",{parentName:"tr",align:null},"Tax assets. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"other_non_current_assets"),(0,a.kt)("td",{parentName:"tr",align:null},"Other non current assets. (provider: fmp, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonCurrentAssets"),(0,a.kt)("td",{parentName:"tr",align:null},"Total non current assets. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"other_assets"),(0,a.kt)("td",{parentName:"tr",align:null},"Other assets. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_assets"),(0,a.kt)("td",{parentName:"tr",align:null},"Total assets. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accounts_payable"),(0,a.kt)("td",{parentName:"tr",align:null},"Accounts payable. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"short_term_debt"),(0,a.kt)("td",{parentName:"tr",align:null},"Short term debt. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"taxPayables"),(0,a.kt)("td",{parentName:"tr",align:null},"Tax payables. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"current_deferred_revenue"),(0,a.kt)("td",{parentName:"tr",align:null},"Current deferred revenue. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"other_current_liabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Other current liabilities. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_current_liabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Total current liabilities. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"long_term_debt"),(0,a.kt)("td",{parentName:"tr",align:null},"Long term debt. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deferredRevenueNonCurrent"),(0,a.kt)("td",{parentName:"tr",align:null},"Non current deferred revenue. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deferredTaxLiabilitiesNonCurrent"),(0,a.kt)("td",{parentName:"tr",align:null},"Deferred tax liabilities non current. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"other_non_current_liabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Other non current liabilities. (provider: fmp, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_non_current_liabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Total non current liabilities. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Other liabilities. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"capital_lease_obligations"),(0,a.kt)("td",{parentName:"tr",align:null},"Capital lease obligations. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_liabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Total liabilities. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"preferred_stock"),(0,a.kt)("td",{parentName:"tr",align:null},"Preferred stock. (provider: fmp, intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common_stock"),(0,a.kt)("td",{parentName:"tr",align:null},"Common stock. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retained_earnings"),(0,a.kt)("td",{parentName:"tr",align:null},"Retained earnings. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accumulated_other_comprehensive_income"),(0,a.kt)("td",{parentName:"tr",align:null},"Accumulated other comprehensive income (loss). (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherShareholdersEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Other shareholders equity. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherTotalShareholdersEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Other total shareholders equity. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_common_equity"),(0,a.kt)("td",{parentName:"tr",align:null},"Total common equity. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_equity_non_controlling_interests"),(0,a.kt)("td",{parentName:"tr",align:null},"Total equity non controlling interests. (provider: fmp, intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalLiabilitiesAndShareholdersEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Total liabilities and shareholders equity. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minority_interest"),(0,a.kt)("td",{parentName:"tr",align:null},"Minority interest. (provider: fmp, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalLiabilitiesAndTotalEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Total liabilities and total equity. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalInvestments"),(0,a.kt)("td",{parentName:"tr",align:null},"Total investments. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalDebt"),(0,a.kt)("td",{parentName:"tr",align:null},"Total debt. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"netDebt"),(0,a.kt)("td",{parentName:"tr",align:null},"Net debt. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"link"),(0,a.kt)("td",{parentName:"tr",align:null},"Link to the filing. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"finalLink"),(0,a.kt)("td",{parentName:"tr",align:null},"Link to the filing document. (provider: fmp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cash_and_due_from_banks"),(0,a.kt)("td",{parentName:"tr",align:null},"Cash and due from banks. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"restrictedCash"),(0,a.kt)("td",{parentName:"tr",align:null},"Restricted cash. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"federalFundsSold"),(0,a.kt)("td",{parentName:"tr",align:null},"Federal funds sold. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accounts_receivable"),(0,a.kt)("td",{parentName:"tr",align:null},"Accounts receivable. (provider: intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"noteAndLeaseReceivable"),(0,a.kt)("td",{parentName:"tr",align:null},"Note and lease receivable. (Vendor non-trade receivables) (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inventories"),(0,a.kt)("td",{parentName:"tr",align:null},"Net Inventories. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"customerAndOtherReceivables"),(0,a.kt)("td",{parentName:"tr",align:null},"Customer and other receivables. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interestBearingDepositsAtOtherBanks"),(0,a.kt)("td",{parentName:"tr",align:null},"Interest bearing deposits at other banks. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timeDepositsPlacedAndOtherShortTermInvestments"),(0,a.kt)("td",{parentName:"tr",align:null},"Time deposits placed and other short term investments. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tradingAccountSecurities"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading account securities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"loansAndLeases"),(0,a.kt)("td",{parentName:"tr",align:null},"Loans and leases. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allowanceForLoanAndLeaseLosses"),(0,a.kt)("td",{parentName:"tr",align:null},"Allowance for loan and lease losses. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currentDeferredRefundableIncomeTaxes"),(0,a.kt)("td",{parentName:"tr",align:null},"Current deferred refundable income taxes. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"loansAndLeasesNetOfAllowance"),(0,a.kt)("td",{parentName:"tr",align:null},"Loans and leases net of allowance. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accruedInvestmentIncome"),(0,a.kt)("td",{parentName:"tr",align:null},"Accrued investment income. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherCurrentNonOperatingAssets"),(0,a.kt)("td",{parentName:"tr",align:null},"Other current non-operating assets. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"loansHeldForSale"),(0,a.kt)("td",{parentName:"tr",align:null},"Loans held for sale. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prepaid_expenses"),(0,a.kt)("td",{parentName:"tr",align:null},"Prepaid expenses. (provider: intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plantPropertyEquipmentGross"),(0,a.kt)("td",{parentName:"tr",align:null},"Plant property equipment gross. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accumulatedDepreciation"),(0,a.kt)("td",{parentName:"tr",align:null},"Accumulated depreciation. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"premisesAndEquipmentNet"),(0,a.kt)("td",{parentName:"tr",align:null},"Net premises and equipment. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mortgageServicingRights"),(0,a.kt)("td",{parentName:"tr",align:null},"Mortgage servicing rights. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"unearnedPremiumsAsset"),(0,a.kt)("td",{parentName:"tr",align:null},"Unearned premiums asset. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonCurrentNoteLeaseReceivables"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-current note lease receivables. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deferredAcquisitionCost"),(0,a.kt)("td",{parentName:"tr",align:null},"Deferred acquisition cost. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"separateAccountBusinessAssets"),(0,a.kt)("td",{parentName:"tr",align:null},"Separate account business assets. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonCurrentDeferredRefundableIncomeTaxes"),(0,a.kt)("td",{parentName:"tr",align:null},"Noncurrent deferred refundable income taxes. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"employeeBenefitAssets"),(0,a.kt)("td",{parentName:"tr",align:null},"Employee benefit assets. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherNonCurrentOperatingAssets"),(0,a.kt)("td",{parentName:"tr",align:null},"Other noncurrent operating assets. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherNonCurrentNonOperatingAssets"),(0,a.kt)("td",{parentName:"tr",align:null},"Other noncurrent non-operating assets. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interestBearingDeposits"),(0,a.kt)("td",{parentName:"tr",align:null},"Interest bearing deposits. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_non_current_assets"),(0,a.kt)("td",{parentName:"tr",align:null},"Total noncurrent assets. (provider: intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonInterestBearingDeposits"),(0,a.kt)("td",{parentName:"tr",align:null},"Non interest bearing deposits. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"federalFundsPurchasedAndSecuritiesSold"),(0,a.kt)("td",{parentName:"tr",align:null},"Federal funds purchased and securities sold. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bankers_acceptance_outstanding"),(0,a.kt)("td",{parentName:"tr",align:null},"Bankers acceptance outstanding. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currentDeferredPayableIncomeTaxLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Current deferred payable income tax liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accruedInterestPayable"),(0,a.kt)("td",{parentName:"tr",align:null},"Accrued interest payable. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accruedExpenses"),(0,a.kt)("td",{parentName:"tr",align:null},"Accrued expenses. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherShortTermPayables"),(0,a.kt)("td",{parentName:"tr",align:null},"Other short term payables. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"customerDeposits"),(0,a.kt)("td",{parentName:"tr",align:null},"Customer deposits. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dividendsPayable"),(0,a.kt)("td",{parentName:"tr",align:null},"Dividends payable. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"claimsAndClaimExpense"),(0,a.kt)("td",{parentName:"tr",align:null},"Claims and claim expense. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"futurePolicyBenefits"),(0,a.kt)("td",{parentName:"tr",align:null},"Future policy benefits. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currentEmployeeBenefitLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Current employee benefit liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"unearnedPremiumsLiability"),(0,a.kt)("td",{parentName:"tr",align:null},"Unearned premiums liability. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherTaxesPayable"),(0,a.kt)("td",{parentName:"tr",align:null},"Other taxes payable. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"policyHolderFunds"),(0,a.kt)("td",{parentName:"tr",align:null},"Policy holder funds. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherCurrentNonOperatingLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Other current non-operating liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"separateAccountBusinessLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Separate account business liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherLongTermLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Other long term liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonCurrentDeferredRevenue"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-current deferred revenue. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonCurrentDeferredPayableIncomeTaxLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-current deferred payable income tax liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonCurrentEmployeeBenefitLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-current employee benefit liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherNonCurrentOperatingLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Other non-current operating liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherNonCurrentNonOperatingLiabilities"),(0,a.kt)("td",{parentName:"tr",align:null},"Other non-current, non-operating liabilities. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"assetRetirementReserveLitigationObligation"),(0,a.kt)("td",{parentName:"tr",align:null},"Asset retirement reserve litigation obligation. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"commitmentsContingencies"),(0,a.kt)("td",{parentName:"tr",align:null},"Commitments contingencies. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redeemable_non_controlling_interest"),(0,a.kt)("td",{parentName:"tr",align:null},"Redeemable non-controlling interest. (provider: intrinio, polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"treasuryStock"),(0,a.kt)("td",{parentName:"tr",align:null},"Treasury stock. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"participatingPolicyHolderEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Participating policy holder equity. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"otherEquityAdjustments"),(0,a.kt)("td",{parentName:"tr",align:null},"Other equity adjustments. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalPreferredCommonEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Total preferred common equity. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonControllingInterest"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-controlling interest. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalLiabilitiesShareholdersEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Total liabilities and shareholders equity. (provider: intrinio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"marketableSecurities"),(0,a.kt)("td",{parentName:"tr",align:null},"Marketable securities (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"propertyPlantEquipmentNet"),(0,a.kt)("td",{parentName:"tr",align:null},"Property plant and equipment net (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"employeeWages"),(0,a.kt)("td",{parentName:"tr",align:null},"Employee wages (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"temporary_equity_attributable_to_parent"),(0,a.kt)("td",{parentName:"tr",align:null},"Temporary equity attributable to parent (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"equity_attributable_to_parent"),(0,a.kt)("td",{parentName:"tr",align:null},"Equity attributable to parent (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"temporary_equity"),(0,a.kt)("td",{parentName:"tr",align:null},"Temporary equity (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redeemableNonControllingInterestOther"),(0,a.kt)("td",{parentName:"tr",align:null},"Redeemable non-controlling interest other (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalStockHoldersEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Total stock holders equity (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalLiabilitiesAndStockHoldersEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Total liabilities and stockholders equity (provider: polygon)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalEquity"),(0,a.kt)("td",{parentName:"tr",align:null},"Total equity (provider: polygon)")))))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84047],{3905:(D,R,U)=>{U.d(R,{Zo:()=>G,kt:()=>r});var P=U(67294);function S(D,R,U){return R in D?Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[R]=U,D}function A(D,R){var U=Object.keys(D);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(D);R&&(P=P.filter((function(R){return Object.getOwnPropertyDescriptor(D,R).enumerable}))),U.push.apply(U,P)}return U}function B(D){for(var R=1;R<arguments.length;R++){var U=null!=arguments[R]?arguments[R]:{};R%2?A(Object(U),!0).forEach((function(R){S(D,R,U[R])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):A(Object(U)).forEach((function(R){Object.defineProperty(D,R,Object.getOwnPropertyDescriptor(U,R))}))}return D}function K(D,R){if(null==D)return{};var U,P,S=function(D,R){if(null==D)return{};var U,P,S={},A=Object.keys(D);for(P=0;P<A.length;P++)U=A[P],R.indexOf(U)>=0||(S[U]=D[U]);return S}(D,R);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(D);for(P=0;P<A.length;P++)U=A[P],R.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(D,U)&&(S[U]=D[U])}return S}var N=P.createContext({}),e=function(D){var R=P.useContext(N),U=R;return D&&(U="function"==typeof D?D(R):B(B({},R),D)),U},G=function(D){var R=e(D.components);return P.createElement(N.Provider,{value:R},D.children)},t="mdxType",E={inlineCode:"code",wrapper:function(D){var R=D.children;return P.createElement(P.Fragment,{},R)}},n=P.forwardRef((function(D,R){var U=D.components,S=D.mdxType,A=D.originalType,N=D.parentName,G=K(D,["components","mdxType","originalType","parentName"]),t=e(U),n=S,r=t["".concat(N,".").concat(n)]||t[n]||E[n]||A;return U?P.createElement(r,B(B({ref:R},G),{},{components:U})):P.createElement(r,B({ref:R},G))}));function r(D,R){var U=arguments,S=R&&R.mdxType;if("string"==typeof D||S){var A=U.length,B=new Array(A);B[0]=n;var K={};for(var N in R)hasOwnProperty.call(R,N)&&(K[N]=R[N]);K.originalType=D,K[t]="string"==typeof D?D:S,B[1]=K;for(var e=2;e<A;e++)B[e]=U[e];return P.createElement.apply(null,B)}return P.createElement.apply(null,U)}n.displayName="MDXCreateElement"},64561:(D,R,U)=>{U.r(R),U.d(R,{assets:()=>N,contentTitle:()=>B,default:()=>E,frontMatter:()=>A,metadata:()=>K,toc:()=>e});var P=U(87462),S=(U(67294),U(3905));const A={title:"load",description:"OpenBB Terminal Function"},B="load",K={unversionedId:"terminal/reference/forex/load",id:"terminal/reference/forex/load",title:"load",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/forex/load.md",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/load",permalink:"/terminal/reference/forex/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/load.md",tags:[],version:"current",frontMatter:{title:"load",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/reference/forex/fwd"},next:{title:"Oanda",permalink:"/terminal/reference/forex/oanda/"}},N={},e=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],G={toc:e},t="wrapper";function E(D){let{components:R,...U}=D;return(0,S.kt)(t,(0,P.Z)({},G,U,{components:R,mdxType:"MDXLayout"}),(0,S.kt)("h1",{id:"load"},"load"),(0,S.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,S.kt)("h3",{id:"usage"},"Usage"),(0,S.kt)("pre",null,(0,S.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE] [-e END]\n")),(0,S.kt)("hr",null),(0,S.kt)("h2",{id:"parameters"},"Parameters"),(0,S.kt)("table",null,(0,S.kt)("thead",{parentName:"table"},(0,S.kt)("tr",{parentName:"thead"},(0,S.kt)("th",{parentName:"tr",align:null},"Name"),(0,S.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,S.kt)("th",{parentName:"tr",align:null},"Description"),(0,S.kt)("th",{parentName:"tr",align:null},"Default"),(0,S.kt)("th",{parentName:"tr",align:null},"Optional"),(0,S.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,S.kt)("tbody",{parentName:"table"},(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,S.kt)("td",{parentName:"tr",align:null},"None"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"HRKPLN, XAGARS, AUDLTL, TWDIDR, CHFJPY, UGXGBP, GYDUSD, TMTUSD, CHFAUD, NZDAUD, GBPBAM, ARSXAU, GBPLAK, COPEUR, OSOCHF, USDBSD, EURGBP, BWPEUR, MYRINR, LKRZAR, PKRGBP, NSOUSD, HKDPLN, KHREUR, PLNAUD, BAMUSD, ILSAUD, HKDSGD, JPYUSD, AUDCZK, SEKCZK, OMRGBP, RUBEUR, USDTWD, BOBGBP, EURUYU, HKDTWD, INRTWD, MXNARS, GBPAFN, JODAED, JPYTHB, RUBZAR, HKDMYR, ZARNOK, AWGUSD, GBPLSL, XAUZAR, ISKUSD, EGPJPY, VNDCAD, CADZAR, INRCAD, GBPIDR, USDNPR, PKRBHD, XAUCNY, GBPPYG, EURJPY, BSDUSD, KWDEUR, NZDHUF, AEDUSD, FJDEUR, KRUUSD, CADXAG, GBPAED, NGNUSD, GBPNGN, EURDJF, KZTEUR, CNYINR, EURBTN, CHFZAR, IDRAUD, SEKHKD, JPYCAD, USDCLP, AUDBRL, CHFNOK, USDMUR, PLNCZK, NADUSD, HKDKRW, JPYPKR, DJFUSD, USDCZK, MYRCAD, JPYNZD, GBPJOD, ZARXAG, BOBEUR, THBINR, USDMXN, PENARS, USDXAG, SEKEUR, JPYMYR, USDARS, CZKGBP, USDNIO, SZLGBP, GBPMDL, CHFNZD, DKKNZD, AEDINR, HKDCNY, CADINR, EURKES, NZDHKD, IDRTHB, RONGBP, HUFPLN, BRICHF, KRWSGD, SEKSGD, INRMYR, CHFFRN, MYREUR, COPZAR, IDRTWD, USDTHB, HUFGBP, TZSUSD, USDSCR, EURRSD, MMKGBP, MXNCZK, DKKAED, GHSZAR, KRWAUD, ZARGHS, AEDEUR, SLLUSD, USDJPY, EURTND, UYUUSD, NSOCHF, EURDKK, PHPZAR, PKRQAR, GBPCZK, MXNRUB, EURXAU, HKDJPY, CZKUSD, USDCAD, EURIDR, EURCNH, EURKWD, SEKILS, AEDNOK, IDRSGD, XAGKRW, GBPNPR, HRKUSD, CZKEUR, EURBWP, EURPLN, JODUSD, ARSEUR, INRXAU, GBPDOP, BRLKRW, CNYHKD, MURUSD, SEKZAR, EURBMD, CADAED, KWDSAR, CLPGBP, TWDDKK, GBPSLL, THBPKR, KRWCNY, GBPOMR, MXNGBP, MADUSD, CADHUF, JPYGBP, PKRTHB, AUDPGK, HKDBRL, UAHGBP, GBPKHR, KESGBP, TWDGBP, PKRDKK, JODGBP, KRUCHF, INRUSD, KRWIDR, SEKCAD, MYRZAR, XPTEUR, BHDUSD, USDGNF, HUFJPY, GBPPEN, USDJOD, INRCNY, EURAFN, CHFBRI, USDCNY, USDUZS, NOKNZD, SVCGBP, ARSCOP, PLNZAR, EURLRD, ILSEUR, KRWBRL, USDINR, ILSAED, KWDAED, XAUBRL, HKDTHB, QARZAR, AUDCNH, CHFNSO, IDRMYR, EURAED, USDCOP, USDSZL, TRYDKK, EURMXN, ZARCHF, BTNGBP, BIFEUR, ZARPKR, DZDUSD, DKKZAR, GBPUYU, DKKINR, CHFDKK, GBPMUR, XAUUSD, BMDCAD, CZKSEK, SZLUSD, KRWSEK, CHFSZL, GBPTTD, CLPARS, JPYSAR, DKKCOP, AUDXAG, PLNHKD, EGPPKR, LTLAUD, CUPGBP, NZDTWD, EURTTD, ARSCHF, MYRTHB, GBPHKD, MOPUSD, KRWEUR, BWPCHF, INREUR, USDBBD, AEDJPY, USDTMT, XPDEUR, SGDMXN, USDNSO, MVRGBP, GBPPHP, AUDHUF, SLLGBP, MWKZAR, TNDUSD, CHFMYR, EURPKR, MXNUSD, NZDNOK, ISKGBP, CZKMXN, GBPTHB, JMDGBP, NZDTHB, BRLCLP, ZARTRY, USDLRD, BHDPKR, EURALL, VNDGBP, PHPUSD, SDGEUR, BRLCAD, EURTRY, USDBWP, USDKES, USDTRY, MYRPKR, ZARRUB, ARSJPY, MOPEUR, BIFUSD, ZARAED, ARSMXN, PHPEUR, AEDOMR, USDDZD, GBPXCD, GBPKYD, VNDUSD, GBPALL, JPYNGN, MYRKRW, NZDDKK, IDRGBP, GBPFJD, GBPGHS, GBPHNL, USDTZS, GBPXPD, CZKNZD, BZDUSD, EURBDT, EURETB, ARSZAR, SGDEUR, EURXPD, GBPMGA, NZDMXN, CVEUSD, CHFNBL, PKRSAR, CADBMD, PGKEUR, EURPGK, MXNEUR, JPYDKK, JPYHUF, SEKJPY, PLNSEK, AEDPKR, NZDSEK, ZARHUF, ALLGBP, MXNPLN, AUDNZD, NZDTRY, XAGEUR, UYUGBP, AUDXAU, HKDXAU, PENBRL, CNYMYR, USDEGP, BGNCAD, HKDNZD, USDILS, EURBZD, BGNDKK, GBPBDT, IDRHKD, USDDOE, IDRCAD, SCRUSD, MGAUSD, USDPLN, PKRAED, EURSZL, JPYXAU, HKDCAD, AUDCNY, PLNHRK, BNDEUR, XAGBRL, DKKUSD, GBPBWP, TRYXAG, PLNTRY, RUBSEK, TWDHKD, EURBND, CADMYR, GBPIQD, USDMYR, AUDMXN, GBPMAD, EURUSD, EURBBD, AUDPKR, CHFTHB, KRWHKD, USDLYD, EURMUR, GHSGBP, EURUZS, CNYEUR, TTDGBP, PYGGBP, XAURUB, EURMDL, IDRJPY, JPYBDT, TWDZAR, NZDGBP, AUDNOK, PKRMYR, INRDKK, MXNCOP, EURNAD, CHFIDR, EURCAD, SGDKRW, USDJMD, EURCNY, USDZAR, PABEUR, CZKDKK, AEDSGD, DZDEUR, EURPAB, MDLUSD, GBPSAR, SEKBRL, CZKJPY, GBPCNH, EURJMD, EURPYG, ZARBWP, EURMYR, NZDEUR, ZARILS, USDUAH, ILSJPY, DKKEUR, LRDGBP, ARSGBP, ISKEUR, PENMXN, USDPYG, SGDTHB, LSLUSD, XAGTRY, XAGAUD, RUBMXN, CLPBRL, HTGUSD, HKDARS, THBJPY, MXNCAD, ISKDKK, JPYMXN, USDRON, CADIDR, DKKSGD, THBZAR, AUDMYR, USDMGA, AEDGBP, INRAED, CNYBGN, KZTUSD, USDHNL, PLNCHF, SEKAUD, QARUSD, GBPKES, ZARNAD, USDOSO, EURIQD, THBIDR, TTDEUR, ZMWZAR, MXNZAR, HRKCAD, SGDBRL, USDSLL, CNYXAG, USDKWD, ILSCHF, CADILS, EURGYD, IQDGBP, CADEUR, JPYXAG, NPRUSD, THBDKK, EURRWF, SGDHKD, USDXPT, HUFZAR, DKKCHF, GBPMKD, ZARCNY, MYRUSD, CADARS, TWDMYR, USDBGN, USDRUB, GBPTWD, ZARGBP, KRWJPY, GBPLBP, BZDEUR, GBPGTQ, OSOUSD, ZARTWD, SGDNOK, THBKRW, NOKILS, SARJPY, NPREUR, EURCZK, AUDPLN, XAUTRY, ILSPLN, GBPPGK, EURSLL, GHSUSD, INRCHF, CNYAUD, CADSGD, DKKUAH, ZARTND, DKKNOK, NOKDKK, CYPZAR, GBPXPF, USDNBL, CNYTWD, BNDGBP, NZDSGD, MXNDKK, MXNXAG, EURSCR, ZAREGP, CHFEUR, AUDCHF, XAUMXN, RUBNOK, EURILS, MXNAUD, GBPEGP, AUDDKK, EURBRL, ZARRON, MXNCLP, EURZAR, LRDUSD, KMFUSD, JPYRUB, EURXPT, UZSEUR, GBPHRK, GBPBBD, MWKEUR, GNFGBP, XAGZAR, PKRAUD, PLNJPY, KRWMYR, EURMGA, UZSUSD, BMDKYD, BRLPEN, BRLZAR, AFNGBP, HUFNZD, CADPEN, CHFMAL, ARSUSD, RONZAR, JPYEGP, BNDUSD, NOKAUD, NIOGBP, EURTJS, GBPUSD, GBPMVR, MWKUSD, GTQEUR, USDAUD, KRWUSD, USDOMR, EURFJD, AUDGBP, EURPEN, ZARMYR, SGDZAR, TWDKRW, NGNGBP, TRYPLN, XPTUSD, IQDEUR, KYDGBP, SGDPKR, OMRUSD, USDNOK, USDCDF, AUDSGD, BBDGBP, ZAROMR, CNYNZD, EURNIO, SEKGBP, USDMWK, DKKCZK, AUDMAD, GBPVND, NBLUSD, EURMOP, SARGBP, PLNDKK, YERUSD, EURMKD, DKKTHB, USDGBP, IDRCHF, NOKRUB, XAUCAD, ZARDKK, AUDFJD, TZSZAR, EURSGD, NIOEUR, AEDCAD, NZDCAD, USDXPD, HKDUSD, THBAUD, USDMMK, CHFMXN, USDNAD, ARSAUD, ILSJOD, NGNZAR, BAMGBP, ILSSEK, BRLXAU, GBPJPY, GBPLYD, AMDEUR, XAUTHB, RWFEUR, ZARCAD, BGNAUD, KRWNZD, PHPDKK, CHFAED, ARECHF, THBMYR, BRLAUD, THBCNY, DJFEUR, JPYNOK, RUBKRW, EURCLP, XAGRUB, ARSXAG, HRKGBP, THBUSD, QARAED, GBPCAD, TWDUSD, SCREUR, COPGBP, BWPGBP, ZARHKD, GBPPAB, AEDAUD, JPYHKD, DKKMXN, USDDOP, KWDGBP, CADKRW, EGPZAR, USDEUR, BHDEUR, USDBRI, CHFVRN, LYDUSD, NZDJPY, ZARKRW, TWDTHB, ZARSEK, USDMKD, EURBOB, JPYRSD, KRWXAU, GBPMOP, DKKSEK, XAUGBP, USDCNH, USDMOP, INRZAR, EURKZT, CLPEUR, LBPEUR, DKKPLN, PLNNOK, KRWRUB, GBPCOP, GBPRSD, USDDJF, GBPSOS, MYRDKK, CNHAUD, LRDEUR, PKRZAR, MKDEUR, HTGGBP, DJFGBP, KESUSD, GBPCLP, DKKHKD, CHFRUB, KHRGBP, USDUYU, AEDILS, CADBRL, KRWTWD, COPUSD, USDPGK, ETBEUR, NPRGBP, AEDJOD, NZDIDR, USDLAK, PKREUR, EURPHP, TWDCHF, GBPLRD, XCDGBP, RONCHF, GTQUSD, BSDEUR, CNYJPY, USDIQD, COPDKK, GBPILS, EURLAK, XAGJPY, INRIDR, CHFKRU, CHFHUF, TWDCAD, TWDPKR, CHFSEK, MADEUR, MYRGBP, CADVND, GBPCDF, CNHUSD, ILSZAR, KRWGBP, ZARQAR, GNFEUR, USDHKD, TWDJPY, EURSDG, CADMXN, GHSEUR, PENGBP, USDXAU, JODEUR, SZLEUR, KRWCAD, DOPGBP, GBPKZT, RSDGBP, COPMXN, SOSEUR, CADTHB, BDTGBP, SEKNZD, ZARKES, EGPEUR, COPARS, XPFUSD, BRLMXN, JMDEUR, TRYSGD, NOKEUR, EURZMW, USDNZD, ZARBRL, IDRCNY, AUNUSD, USDMAL, HUFEUR, USDKZT, CDFGBP, GBPSEK, AEDNZD, SGDUSD, EURTWD, NZDAED, CHFSGD, INRNOK, GBPUGX, PLNGBP, PLNHUF, NOKPLN, INRJPY, HRKAUD, ZARRWF, MDLEUR, USDTTD, CADNZD, GNFUSD, DKKJPY, PHPAUD, EURBSD, USDTND, BDTJPY, TRYNZD, EURAUD, SARAED, EUREGP, USDPEN, AUDUSD, EURKHR, GBPEUR, AEDSEK, ILSGBP, SVCUSD, AUDCAD, ISKCHF, GBPMYR, UGXEUR, CADHKD, KRWCHF, EURSOS, SARXAU, USDHTG, JMDUSD, GBPHTG, HTGEUR, RUBAUD, CHFILS, VNDEUR, CADTWD, USDMAD, GBPDJF, YERGBP, LSLGBP, MXNPEN, PYGUSD, ZARXAU, ARSCAD, JPYCZK, ZARPLN, GBPBIF, CNYGBP, USDKRW, GBPSGD, AEDSAR, GBPRUB, GBPZAR, RWFUSD, PENUSD, NOKINR, USDCUP, PLNSGD, NZDINR, ZARLKR, EGPGBP, AUDJPY, DZDGBP, CHFARS, TZSEUR, THBNZD, RUBPLN, HUFDKK, UAHEUR, DOPUSD, ZARCOP, BRIUSD, EURKYD, BIFGBP, MYRCNY, SOSUSD, SGDTWD, EURQAR, TRYAUD, XAGSAR, BWPUSD, SLLEUR, JPYPLN, UAHUSD, NZDZAR, ZARUSD, SEKUSD, CADXAU, DKKBGN, MXNNZD, EURLBP, GBPMWK, GBPBTN, TRYCHF, PKRHKD, MVREUR, AUDAED, LKRGBP, USDPAB, AEDZAR, CHFINR, INRTHB, USDSEK, RSDJPY, PABUSD, NZDUSD, IQDUSD, ARSCLP, DOPEUR, ZARMWK, EURUGX, AUDTRY, GBPCUP, KYDBMD, GBPPKR, EURMVR, EURBHD, EURMZN, JPYCLP, PENCLP, LKREUR, USDGHS, BHDGBP, NOKAED, CADJPY, ZARAUD, CHFISK, INRKRW, JPYIDR, PKRNZD, AEDBHD, USDETB, AUDTHB, ILSUSD, PLNILS, HUFAUD, EURJOD, CADGBP, IDRUSD, EURHRK, PKREGP, PGKAUD, INRAUD, DKKHUF, ZARNZD, CHFKRW, CADDKK, GBPRWF, TNDGBP, USDZMW, IDRNZD, USDCVE, HRKEUR, MXNXAU, SGDDKK, MZNEUR, USDLBP, LKRUSD, JPYEUR, EURRUB, BRLUSD, KRWINR, FRNCHF, GBPAWG, USDHUF, NZDCZK, SCRGBP, USDBAM, MYRHKD, CHFUSD, EURDOP, UGXZAR, GBPSZL, INRSGD, PABGBP, MKDGBP, XPDGBP, MUREUR, THBEUR, TRYGBP, AEDKWD, JPYSEK, DOEUSD, SEKDKK, AUDSEK, HKDCHF, ZARIDR, CHFVRL, DKKGBP, CDFEUR, CNHEUR, EUROMR, EURNOK, CNYTHB, SDGUSD, EURTZS, GBPXAG, LAKEUR, DKKTWD, KYDCAD, VRNCHF, INRNZD, NGNEUR, NGNJPY, RUBDKK, GBPXPT, CZKAUD, XPDUSD, PKRJPY, EURARS, NOKCHF, USDFJD, USDGTQ, GBPRON, HKDGBP, ETBUSD, CNHGBP, JPYSGD, AEDQAR, ZARARS, AUDZAR, SEKINR, CHFBWP, HKDSEK, MALCHF, NZDKRW, SGDTRY, BDTEUR, CZKPLN, USDLSL, GBPKWD, EURHUF, KRWZAR, MWKGBP, ZARUGX, OMRZAR, CLPJPY, CADAUD, GBPMXN, EURSAR, GBPBND, RSDBRL, HKDAUD, DKKAUD, BGNUSD, UAHDKK, TWDNZD, USDMVR, MXNBRL, GBPJMD, ALLUSD, SEKKRW, GBPETB, SGDAUD, TJSUSD, CADBGN, DKKPHP, AFNEUR, USDGYD, THBGBP, MGAGBP, EURLSL, JPYILS, PKRKWD, PLNRUB, AUDBGN, UYUEUR, GBPBZD, PKRTWD, GBPAMD, JODILS, EURBIF, ARSPEN, EURTHB, TWDAUD, USDNGN, CHFBRL, NZDPKR, AUDILS, AUDRUB, EURCHF, CLPMXN, MYRTWD, GBPAUD, SZLZAR, MYRIDR, CHFGBP, COPPEN, MALUSD, QARPKR, MDLGBP, RONEUR, EURNZD, GBPXAU, GBPDZD, EURGTQ, GBPHUF, AUDHKD, ILSNOK, MXNJPY, SAREUR, MXNSGD, NBLCHF, THBSGD, SGDIDR, ZARINR, GBPBHD, MOPGBP, ARSSGD, EURHNL, GBPDKK, JPYCNY, BBDEUR, JPYTRY, MMKUSD, RSDEUR, XAUHKD, KYDEUR, USDYER, EURCOP, DKKTRY, NADZAR, PLNNZD, BGNCNY, KHRUSD, ZARZMW, DOECHF, ZARMXN, XAUSAR, USDSHP, CADKYD, XAGINR, PENCAD, ALLEUR, HKDINR, AUDEUR, USDAWG, CHFPLN, CHFRON, XPTGBP, FJDAUD, SEKTWD, DKKRUB, THBTWD, ZARJPY, BZDGBP, BMDEUR, BMDBBD, NIOUSD, MADAUD, AUDCLP, CADHRK, XAGGBP, GBPLKR, KESEUR, ZARTZS, GBPNOK, CNYIDR, MKDUSD, XPFGBP, ZMWUSD, GBPBMD, EURNGN, ETBGBP, USDRWF, SEKRUB, USDUGX, HUFCHF, IDREUR, USDKMF, TWDSGD, USDKRU, SEKPLN, OMREUR, JPYKRW, XAUEUR, HUFUSD, JPYAED, SGDARS, EURBGN, PKRSGD, NOKJPY, USDSOS, PGKGBP, EURRON, ZARCYP, SGDCHF, COPBRL, EURCUP, RUBCHF, XAUJPY, GBPSVC, SGDNZD, EURMWK, XAUAUD, RONUSD, LSLEUR, GBPBOB, PHPGBP, BGNGBP, ZARMAD, LBPUSD, DKKISK, EURMMK, EURLKR, EURHTG, CHFDOE, TTDUSD, BRLSEK, GYDGBP, LYDEUR, GBPINR, BOBUSD, DKKCNY, BSDGBP, KWDUSD, MADGBP, CHFAUN, USDBZD, USDKHR, JPYAUD, GBPSCR, CDFUSD, ZAREUR, USDVND, LAKUSD, GBPGYD, GBPYER, ARSHKD, PLNMXN, JPYTWD, KRWXAG, SGDINR, EURHKD, CHFARE, TRYZAR, GYDEUR, PKRUSD, DKKPKR, ILSCAD, AUDTWD, SGDGBP, ZARNGN, CUPUSD, VNDJPY, CNYKRW, USDSDG, MMKEUR, FJDUSD, USDALL, JPYVND, EURDZD, USDQAR, IDRZAR, CNYDKK, INRXAG, XAGHKD, RUBUSD, BTNEUR, IDRINR, TRYJPY, ARSBRL, KZTGBP, MXNHKD, XAGCAD, BRLEUR, MYRSGD, CADUSD, NZDMYR, USDSAR, TJSEUR, TNDZAR, CHFTWD, EURNPR, TNDEUR, QAREUR, MADZAR, CNYXAU, SGDPLN, TWDEUR, EURAMD, DKKMYR, MYRAUD, ZARSZL, BRLJPY, SGDSEK, HKDXAG, USDHRK, SEKNOK, GBPTND, RWFGBP, GBPGNF, CHFHKD, CNYZAR, AUDPHP, CLPUSD, CUPEUR, RUBJPY, USDMDL, BRLCHF, EURKRW, XAGUSD, AUDHRK, HNLEUR, ZARSGD, LAKGBP, GBPTRY, EURGHS, EGPUSD, XAGCNY, TWDINR, AUDIDR, MYRCHF, JPYCHF, USDPHP, MURGBP, GBPISK, KRWTHB, USDBIF, ZARCZK, FJDGBP, THBCAD, CHFOSO, GTQGBP, HKDPKR, CLPAUD, EURISK, NOKSGD, AUDINR, ZARTHB, KMFGBP, JPYPHP, CNYUSD, JPYZAR, USDBHD, INRSEK, EURLYD, SOSGBP, GBPKRW, KWDPKR, CNYSGD, PGKUSD, ZARPHP, AEDCHF, BRLCOP, GBPKMF, RUBGBP, BRLGBP, SGDMYR, PHPJPY, XAUINR, NZDCHF, EURCDF, NOKUSD, TWDCNY, LBPGBP, BMDGBP, GBPBRL, SGDCNY, EURGNF, SARXAG, SZLCHF, THBHKD, XAGMXN, JPYBRL, USDBND, HNLUSD, EURMAD, CLPPEN, YEREUR, USDPKR, USDAUN, USDDKK, SEKAED, NZDCNY, EURXAG, BGNEUR, CHFTRY, SGDJPY, JPYARS, USDISK, GBPPLN, THBCHF, SEKCHF, GBPBSD, IDRKRW, HKDZAR, VRLCHF, SARKWD, AUDKRW, XAUARS, USDLKR, AMDGBP, SGDCAD, AEDDKK, GBPQAR, PENEUR, USDBDT, USDBOB, TRYUSD, BRLHKD, BRLXAG, GBPBGN, SHPUSD, EURVND, BBDUSD, AUDARS, RUBXAU, BWPZAR, SGDAED, MXNCHF, LYDGBP, INRGBP, PENCOP, QARGBP, AUNCHF, GBPCNY, RWFZAR, USDCHF, INRHKD, HUFCAD, JPYINR, THBXAU, BRLARS, TRYEUR, NOKSEK, HKDIDR, GBPUAH, NADEUR, USDKYD, PLNUSD, USDTJS, PYGEUR, BHDAED, NOKZAR, MVRUSD, RUBXAG, GBPNIO, RSDUSD, NZDPLN, DKKCAD, EURINR, EURUAH, SARUSD, HNLGBP, KYDUSD, GBPCHF, GBPNZD, USDBRL, HKDMXN, BBDBMD, SARPKR, AWGGBP, USDSVC, UGXUSD, MYRJPY, CADSEK, USDXPF, BDTUSD, BRLRSD, TRYXAU, USDRSD, XAUKRW, TWDSEK, GBPMMK, HKDDKK, KESZAR, NOKGBP, GBPARS, MYRNZD, EURYER, BRLSGD, MGAEUR, PLNEUR, ZMWEUR, EURSEK, USDSGD, CZKZAR, HKDEUR, OMRAED, USDIDR, USDAED")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"-r  --resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,S.kt)("td",{parentName:"tr",align:null},"d"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"interval"),(0,S.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,S.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,S.kt)("td",{parentName:"tr",align:null},"1day"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"start_date"),(0,S.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,S.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"datetime.now() - timedelta(days=365)"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"end"),(0,S.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,S.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"2023-03-28"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")))),(0,S.kt)("hr",null))}E.isMDXComponent=!0}}]);
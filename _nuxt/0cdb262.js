(window.webpackJsonp=window.webpackJsonp||[]).push([[86,53,66,68,69,70,71,72,73,74,75],{384:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(269),n(93);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},400:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_TAB"},417:function(t,e,n){"use strict";n(21),n(28),n(33),n(37);var o=n(6),r=(n(93),n(26),n(35),n(63),n(255),n(17),n(34),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(38),n(44),n(14),n(69),n(270),n(0)),l=n(169),c=n(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=m.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),x=m.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(x)};function _(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var C=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=C.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=_(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),C.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},450:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("140e3200",content,!0,{sourceMap:!1})},461:function(t,e,n){"use strict";n(450)},462:function(t,e,n){var o=n(31)(!1);o.push([t.i,".PageHeader[data-v-0f4a591c]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-0f4a591c]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-0f4a591c]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-0f4a591c]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-0f4a591c]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-0f4a591c]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-0f4a591c]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-0f4a591c]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=o},466:function(t,e,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("5a537a67",content,!0,{sourceMap:!1})},467:function(t,e,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("3a64b7ad",content,!0,{sourceMap:!1})},468:function(t){t.exports=JSON.parse('{"date":"2021/6/22 18:15","data":{"専門家3行コメント":[{"@ja":"新規陽性者数の増加比は上昇しており、今後100％を超えることが強く懸念される。","@en":"The 7-day moving average of new positive cases is rising, and there is strong concern that it will surpass that of the previous week."},{"@ja":"人流増加の抑制、感染防止対策を徹底し、感染の再拡大を防止しなければならない。","@en":"The increase in the movement of people must be curbed and infection prevention measures must be thoroughly implemented to prevent a resurgence in infections."},{"@ja":"重症患者数が再び増加に転じれば、医療提供体制の逼迫を招く。","@en":"If the number of severe patients starts to grow again, it will lead to a strain on the system for the provision of health care."}],"(1)新規陽性者数":405.9,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":62.7,"(3)新規陽性者における接触歴等不明者（人数）":257,"(3)新規陽性者における接触歴等不明者（増加比）":106.6,"(4)PCR・抗原検査（陽性率）":4.5,"(4)PCR・抗原検査（検査人数）":6744.9,"(5)救急医療の東京ルールの適用件数":40,"(6)入院患者数":1285,"(6)入院患者確保病床数":5594,"(7)重症患者数":45,"(7)重症患者確保病床数":373,"総括コメント-感染状況":{"date":"2021-03-04","level":4,"display":{"@ja":"感染の再拡大の危険性が高いと思われる","@en":"There is a high risk of a resurgence of the virus."}},"総括コメント-医療提供体制":{"date":"2021-03-04","level":4,"display":{"@ja":"通常の医療が大きく制限されていると思われる","@en":"The provision of non-COVID health care is under pressure."}}}}')},469:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(384),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),d=Object(o.a)(1);return{"(1)新規陽性者数":{value:d(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:d(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:d(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:d(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:d(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:d(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:d(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},470:function(t,e,n){"use strict";var o=n(1);var r={inserted:function(t,e){var n=(e.modifiers||{}).self,r=void 0!==n&&n,l=e.value,c="object"===Object(o.a)(l)&&l.options||{passive:!0},d="function"==typeof l||"handleEvent"in l?l:l.handler,f=r?t:e.arg?document.querySelector(e.arg):window;f&&(f.addEventListener("scroll",d,c),t._onScroll={handler:d,options:c,target:r?void 0:f})},unbind:function(t){if(t._onScroll){var e=t._onScroll,n=e.handler,o=e.options,r=e.target;(void 0===r?t:r).removeEventListener("scroll",n,o),delete t._onScroll}}};e.a=r},484:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(131),l=o.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(r.c)(t)}}}),c=(n(461),n(12)),d=n(62),f=n.n(d),m=n(367),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"0f4a591c",null);e.default=component.exports;f()(component,{VIcon:m.a})},491:function(t,e,n){var content=n(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("e4c59e2c",content,!0,{sourceMap:!1})},492:function(t,e,n){var content=n(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("321d351a",content,!0,{sourceMap:!1})},493:function(t,e,n){var content=n(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("4a26bf7f",content,!0,{sourceMap:!1})},494:function(t,e,n){var content=n(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("58dac523",content,!0,{sourceMap:!1})},495:function(t,e,n){var content=n(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("2aeac9dd",content,!0,{sourceMap:!1})},505:function(t,e,n){"use strict";n(466)},506:function(t,e,n){var o=n(31)(!1);o.push([t.i,".StaticInfo{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;font-size:1.2rem}.StaticInfo-Text{white-space:pre-wrap;font-size:1.2rem;font-weight:600}.StaticInfo-Button{flex:1 0 auto;text-align:right;display:inline-block}.StaticInfo-Button>a{text-decoration:none;color:#008830!important;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#008830;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=o},507:function(t,e,n){"use strict";n(26),n(21),n(28),n(33),n(14),n(37);var o=n(6),r=n(416),l=n(171),c=n(412),d=n(86),f=n(19);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(r.a,l.a).extend({name:"VLazy",directives:{intersect:c.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(f.p)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},508:function(t,e,n){"use strict";n(467)},509:function(t,e,n){var o=n(31)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-5d74f5a5]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-5d74f5a5]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-5d74f5a5]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},556:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),c=(n(505),n(12)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("h3",{staticClass:"StaticInfo-Text"},[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo-Link",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},557:function(t,e,n){"use strict";n.r(e);n(93);var o=n(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(508),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.comment))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"5d74f5a5",null);e.default=component.exports},558:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{images:function(){return this.monitoringCommentImage.data.images},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=n(12),l=n(62),c=n.n(l),d=n(918),f=n(936),m=n(544),v=n(637),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{cycle:"",width:"240",height:"180","hide-delimiter-background":""}},t._l(t.images,(function(image,i){return n("v-carousel-item",{key:i},[n("v-sheet",{attrs:{height:"100%",color:"#fff"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-3"},[n("a",{attrs:{target:"_blank",href:image.href}},[n("img",{attrs:{width:"240",height:"180",src:image.src,alt:image.alt}})])])])],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCarousel:d.a,VCarouselItem:f.a,VRow:m.a,VSheet:v.a})},577:function(t,e,n){var content=n(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("547eeb28",content,!0,{sourceMap:!1})},584:function(t,e,n){"use strict";n(491)},585:function(t,e,n){var o=n(31)(!1);o.push([t.i,".Consultation[data-v-68743a4c]{padding:3px 18px;min-height:5.5em}",""]),t.exports=o},586:function(t,e,n){"use strict";n(492)},587:function(t,e,n){var o=n(31)(!1);o.push([t.i,".InfectionMedicalCareProvisionStatus[data-v-1bbbe12b]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:8px 18px;margin-bottom:10px}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-heading[data-v-1bbbe12b]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-heading .InfectionMedicalCareProvisionStatus-title[data-v-1bbbe12b]{display:flex;align-items:center;padding:0 0 4px;font-size:1.9rem;color:#4d4d4d;font-weight:600;font-size:1.4rem}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box[data-v-1bbbe12b]{overflow:hidden}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-Headline[data-v-1bbbe12b]{float:left;text-align:center;width:10em;border:1px solid #000;margin:0 4px 1px 0;color:#707070;font-size:1.2rem}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-description[data-v-1bbbe12b]{font-size:1.2rem;padding:3px 0 0;margin:0}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-description>em[data-v-1bbbe12b]{color:#008830;font-style:normal}",""]),t.exports=o},588:function(t,e,n){"use strict";n(493)},589:function(t,e,n){var o=n(31)(!1);o.push([t.i,".MonitoringComment{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 12px 10px;margin:0 0 10px}.MonitoringComment .MonitoringComment-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.MonitoringComment .MonitoringComment-heading .MonitoringComment-title{display:flex;align-items:center;padding:8px 6px;font-size:1.9rem;color:#4d4d4d;font-weight:600}.MonitoringComment .MonitoringComment-comments{margin:0 10px;padding:2px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col{float:left;clear:both;padding:3px;min-width:300px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringComment-summary{font-size:1.2rem}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringCommentFrame-title{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringComment .MonitoringComment-description{padding:6px;text-align:center;font-size:1.4rem}.MonitoringComment .MonitoringComment-description>a{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.MonitoringComment .MonitoringComment-description>a:hover{text-decoration:underline}",""]),t.exports=o},590:function(t,e,n){"use strict";n(494)},591:function(t,e,n){var o=n(31)(!1);o.push([t.i,".StayingPopulation[data-v-5f9ce98b]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:3px;min-height:5em;display:flex;align-items:center}.StayingPopulation .StayingPopulation-title[data-v-5f9ce98b]{padding:2px 15px;text-align:left;font-size:1.9rem;color:#4d4d4d;font-weight:600}.StayingPopulation .StayingPopulation-title .StayingPopulation-heading[data-v-5f9ce98b],.StayingPopulation .StayingPopulation-title .StayingPopulation-link[data-v-5f9ce98b]{font-size:1.2rem;font-weight:600}.StayingPopulation .StayingPopulation-place[data-v-5f9ce98b]{padding:5px;margin:2px 5px 2px 10px;background-color:#008830;color:#fff;vertical-align:middle;text-align:center;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;font-weight:600;font-size:1.2rem}.StayingPopulation .StayingPopulation-state[data-v-5f9ce98b]{flex:1;padding:2px;margin:2px 5px;border:2px solid #008830;text-align:center;vertical-align:middle;min-width:15em;font-size:1.1rem}",""]),t.exports=o},592:function(t,e,n){"use strict";n(495)},593:function(t,e,n){var o=n(31)(!1);o.push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 18px;margin-bottom:10px}.WhatsNew .WhatsNew-heading{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:8px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;margin:8px 12px 8px 0;font-size:1.9rem;color:#4d4d4d;font-weight:600}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;list-style:none;padding:0}@media screen and (max-width:768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton{margin:8px 12px 8px 0;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover{background-color:#008830;color:#fff}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover>i{color:#fff!important}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-inner{display:inline-flex;align-items:center}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-icon{width:1em;height:1em;margin-right:4px}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-v-icon{color:currentColor;margin-right:4px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{text-decoration:none;margin:5px;font-size:1.4rem}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:1.4rem;color:#006ca8!important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=o},622:function(t,e,n){"use strict";n.r(e);var o=n(50),r=n(0),l=n(85),c=n(177),d=n(12),f=Object(d.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({staticClass:"vaccine_svg__svg-inline--fa vaccine_svg__fa-syringe vaccine_svg__fa-w-16",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},t.$listeners),[n("path",{attrs:{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"}})])}),[],!1,null,null,null).exports,m=n(131),v=r.default.extend({components:{AppLink:l.default,VaccineIcon:f,CovidIcon:c.a},props:{items:{type:Array,required:!0}},data:function(){return{mdiClipboardText:o.g,mdiInformation:o.k}},methods:{formattedDate:function(t){return Object(m.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),h=(n(592),n(62)),x=n.n(h),w=n(367),_=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-linkGroup"},[n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronavaccine/index.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("vaccine-icon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("ワクチン情報"))+"\n          ")],1)])],1),t._v(" "),n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/screening.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("covid-icon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("変異株情報"))+"\n          ")],1)])],1),t._v(" "),n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/kensa/index.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("v-icon",{staticClass:"WhatsNew-linkButton-v-icon",attrs:{size:"1em"}},[t._v("\n              "+t._s(t.mdiClipboardText)+"\n            ")]),t._v("\n            "+t._s(t.$t("検査情報"))+"\n          ")],1)])],1)])]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("app-link",{staticClass:"WhatsNew-list-item-anchor",attrs:{to:e.url}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n        ")])])],1)})),0)])}),[],!1,null,null,null);e.default=_.exports;x()(_,{VIcon:w.a})},623:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(556),l=o.default.extend({components:{StaticInfo:r.default}}),c=(n(584),n(12)),d=n(62),f=n.n(d),m=n(417),v=n(507),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-lazy",[n("static-info",{staticClass:"Consultation",attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html",text:t.$t("自分や家族の症状に不安や心配があれば\nまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)],1)}),[],!1,null,"68743a4c",null);e.default=component.exports;f()(component,{VCol:m.a,VLazy:v.a})},624:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=o.default.extend({components:{AppLink:r.default},computed:{statuses:function(){return this.infectionMedicalCareProvisionStatus.data},date:function(){return new Date(this.infectionMedicalCareProvisionStatus.date)},statisticDate:function(){return this.infectionMedicalCareProvisionStatus.data["検査統計日時"]},infectionMedicalCareProvisionStatus:function(){return this.$store.state.infectionMedicalCareProvisionStatus}},methods:{formatDate:function(t){return this.$d(t,"date")}}}),c=(n(586),n(12)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"InfectionMedicalCareProvisionStatus"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-heading"},[n("h3",{staticClass:"InfectionMedicalCareProvisionStatus-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制（サマリ） {date}時点",{date:t.formatDate(t.date)}))+"\n    ")])]),t._v(" "),n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Box"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Headline"},[n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/hodo/saishin/hassei.html"}},[t._v("\n        "+t._s(t.$t("感染状況"))+"\n      ")])],1),t._v(" "),n("i18n",{staticClass:"InfectionMedicalCareProvisionStatus-description",attrs:{tag:"p",path:"新規陽性者{newPositiveCases}人 / 検査数{tests}件（{statisticDate}参考値 （3日間移動平均））、うち65歳以上の高齢者数{older65}人、死亡者数{deaths}人、都外からの持込検体による陽性数{samplesFromOutside}"},scopedSlots:t._u([{key:"newPositiveCases",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["新規陽性者"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"tests",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["検査数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"statisticDate",fn:function(){return[t._v("\n        "+t._s(t.formatDate(t.statisticDate))+"\n      ")]},proxy:!0},{key:"older65",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち65歳以上の高齢者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"deaths",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["死亡者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"samplesFromOutside",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["都外からの持込検体による陽性数"].toLocaleString())+"\n        ")])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Box"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Headline"},[n("app-link",{attrs:{to:"https://stopcovid19.metro.tokyo.lg.jp/cards/details-of-confirmed-cases/"}},[t._v("\n        "+t._s(t.$t("医療提供体制"))+"\n      ")])],1),t._v(" "),n("i18n",{staticClass:"InfectionMedicalCareProvisionStatus-description",attrs:{tag:"p",path:"入院数{hospitalized}人（確保病床数{bedsSecured}床）、うち重症者数{severeCases}人（うち重症病床数{bedsSevereSymptoms}床）"},scopedSlots:t._u([{key:"hospitalized",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["入院数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"bedsSecured",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["確保病床数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"severeCases",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち重症者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"bedsSevereSymptoms",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち重症病床数"].toLocaleString())+"\n        ")])]},proxy:!0}])})],1)])}),[],!1,null,"1bbbe12b",null);e.default=component.exports},625:function(t,e,n){"use strict";n.r(e);n(44),n(24);var o=n(50),r=n(0),l=n(85),c=n(557),d=n(558),f=n(468),m=n(469),v=r.default.extend({components:{AppLink:l.default,Frame:c.default,ImageSwipe:d.default},data:function(){return{monitoringComment:Object(m.a)(f.data),mdiChevronRight:o.e}},computed:{translatedMonitoringSummarizedComments:function(){var t=f.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]}}}),h=(n(588),n(12)),x=n(62),w=n.n(x),_=n(417),C=n(367),y=n(544),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MonitoringComment"},[n("div",{staticClass:"MonitoringComment-heading"},[n("h3",{staticClass:"MonitoringComment-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制の分析"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"MonitoringComment-comments"},[n("v-row",{staticClass:"MonitoringComment-row"},[n("v-col",{staticClass:"MonitoringComment-col"},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"MonitoringComment-summary"},t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("span",{key:i},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1)],1),t._v(" "),n("v-col",{staticClass:"MonitoringComment-col"},[n("div",{staticClass:"MonitoringComment-description"},[n("image-swipe"),t._v(" "),n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"}},[t._v("\n            "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n          ")])],1)])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;w()(component,{VCol:_.a,VIcon:C.a,VRow:y.a})},626:function(t,e,n){"use strict";n.r(e);n(44),n(24),n(16);var o=n(50),r=n(0),l=n(85),c=r.default.extend({components:{AppLink:l.default},data:function(){return{mdiChevronRight:o.e}},computed:{date:function(){return this.$d(new Date(this.stayingPopulationData.date),"date")},enddate:function(){var t=new Date(this.stayingPopulationData.date);return t.setDate(t.getDate()+6),this.$d(t,"dateWithoutYear")},placeName:function(){var t=this.stayingPopulationData.place.display;return["ja","ja-basic"].includes(this.$i18n.locale)?t.ja:t.en},formattedData:function(){var t=this;return this.stayingPopulationDatasets.map((function(e){var n=e.referenceDate,o=e.increaseRate,r=t.$d(n,"dateWithoutDay"),l="0";0!==o&&(l="".concat(o>0?"↑":"↓").concat(Math.abs(o)," %"));return{formattedMonth:r,increaseRateWithArrow:l}}))},stayingPopulationDatasets:function(){return this.stayingPopulationData.data},stayingPopulationData:function(){return this.stayingPopulation.data},stayingPopulation:function(){return this.$store.state.stayingPopulation}}}),d=(n(590),n(12)),f=n(62),m=n.n(f),v=n(417),h=n(367),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"StayingPopulation"},[n("div",{staticClass:"StayingPopulation-title"},[n("h3",{staticClass:"StayingPopulation-heading"},[t._v("\n        "+t._s(t.$t("都内の滞在人口の増減状況（毎週月曜日更新）"))+"\n      ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-link"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#top"}},[t._v(t._s(t.$t("詳細はこちら"))+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"StayingPopulation-place"},[t._v("\n      "+t._s(t.placeName)+"\n    ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-state"},[t._v("\n      [ "+t._s(t.$t("{date}〜{enddate}",{date:t.date,enddate:t.enddate}))+" ]"),n("br"),t._v(" "),t._l(t.formattedData,(function(e,o){return n("span",{key:o},[t._v("\n        "+t._s(t.$t("{month}比 {rateWithArrow}",{month:e.formattedMonth,rateWithArrow:e.increaseRateWithArrow}))),n("br")])}))],2)])])}),[],!1,null,"5f9ce98b",null);e.default=component.exports;m()(component,{VCol:v.a,VIcon:h.a})},629:function(t,e,n){"use strict";n(577)},630:function(t,e,n){var o=n(31)(!1);o.push([t.i,".v-slide-group__content{border-bottom:1px solid #4d4d4d;background:#f8f9fa}.v-tab{top:1px;margin:0 8px;border-style:solid;border-radius:4px 4px 0 0;font-weight:600!important;font-size:1.6rem!important}.v-tab:focus{outline:1px dotted #707070}.v-tab--active{color:#4d4d4d!important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa;border-width:1px 1px 2px}.v-tab--active:before{background-color:transparent}.v-tab:not(.v-tab--active){color:#008830!important;background:#fff;border-color:#008830 #008830 #4d4d4d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important;background:#008830}.v-tab:not(.v-tab--active) .TabIcon{color:inherit!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:768px){.v-slide-group__content,.v-tab{width:100%}.v-tab{font-size:2.0833333333vw!important;font-weight:400!important;flex:1 1 auto;padding:0 8px!important}}@media screen and (max-width:600px){.v-tab{font-size:3.3333333333vw!important;padding:0 4px!important}.TabIcon{font-size:4vw!important}}",""]),t.exports=o},748:function(t,e,n){"use strict";n.r(e);n(17),n(34),n(38);var o=n(50),r=n(0),l=n(400),c=function(){return n.e(116).then(n.bind(null,911))},d=function(){return n.e(117).then(n.bind(null,912))},f=r.default.extend({components:{CardsMonitoring:c,CardsReference:d},data:function(){return{tab:null,items:[{label:this.$t("モニタリング項目"),component:c},{label:this.$t("その他 参考指標"),component:d}],mdiChartTimelineVariant:o.c}},methods:{change:function(){l.a.$emit(l.b)}}}),m=(n(629),n(12)),v=n(62),h=n.n(v),x=n(367),w=n(916),_=n(917),C=n(935),y=n(758),S=n(421),k=n.n(S),M=n(429),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{"hide-slider":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.items,(function(e,i){return n("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{href:"#tab-"+i},on:{click:t.change}},[n("v-icon",{staticClass:"TabIcon"},[t._v(t._s(t.mdiChartTimelineVariant))]),t._v("\n    "+t._s(e.label)+"\n  ")],1)})),t._v(" "),n("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(t,i){return n("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[n(t.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VIcon:x.a,VTab:w.a,VTabItem:_.a,VTabs:C.a,VTabsItems:y.a}),k()(component,{Ripple:M.a})},749:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(623),l=n(624),c=n(625),d=n(626),f=n(622),m=o.default.extend({components:{WhatsNew:f.default,InfectionMedicalCareProvisionStatus:l.default,MonitoringCommentCard:c.default,Consultation:r.default,StayingPopulation:d.default},computed:{newsItems:function(){return this.news.newsItems},news:function(){return this.$store.state.news}}}),v=n(12),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteTopUpper"},[n("whats-new",{attrs:{items:t.newsItems}}),t._v(" "),n("infection-medical-care-provision-status"),t._v(" "),n("monitoring-comment-card"),t._v(" "),n("div",{staticClass:"row mb-4"},[n("staying-population"),t._v(" "),n("consultation")],1)],1)}),[],!1,null,null,null);e.default=component.exports},929:function(t,e,n){"use strict";n.r(e);var o=n(50),r=n(484),l=n(748),c=n(749),d={components:{CardsTab:l.default,PageHeader:r.default,SiteTopUpper:c.default},data:function(){return{headerItem:{iconPath:o.c,title:this.$t("都内の最新感染動向")},showCardsTab:!1}},methods:{onScroll:function(){this.showCardsTab=!0}},computed:{lastUpdateAsString:function(){return this.data.lastUpdate},data:function(){return this.$store.state.data}},head:function(){return{title:this.$t("都内の最新感染動向")}}},f=n(12),m=n(421),v=n.n(m),h=n(470),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}]},[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath,title:t.headerItem.title,"updated-at":t.lastUpdateAsString}}),t._v(" "),n("site-top-upper"),t._v(" "),t.$vuetify.breakpoint.smAndUp||t.showCardsTab?n("cards-tab"):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Scroll:h.a})}}]);
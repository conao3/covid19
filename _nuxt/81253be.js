(window.webpackJsonp=window.webpackJsonp||[]).push([[66,68,69,70,71,72,73,74],{392:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(277),n(94);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},425:function(t,e,n){"use strict";n(21),n(29),n(35),n(37);var o=n(6),r=(n(94),n(25),n(34),n(69),n(263),n(17),n(36),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(38),n(45),n(11),n(70),n(278),n(0)),l=n(173),c=n(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],h=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=m.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),x=m.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(h),offset:Object.keys(v),order:Object.keys(x)};function C(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=y.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=C(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},474:function(t,e,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5a537a67",content,!0,{sourceMap:!1})},475:function(t,e,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("3a64b7ad",content,!0,{sourceMap:!1})},476:function(t){t.exports=JSON.parse('{"date":"2021/7/26 18:45","data":{"専門家3行コメント":[{"@ja":"新規陽性者数の増加比は、6月から継続して上昇している。","@en":"The increase rate of new positive cases has been continuously rising since June."},{"@ja":"増加比がさらに上昇すると、2週間を待たずに第3波を遥かに超える危機的な感染状況になる。　","@en":"If the increase rate rises further, in less than two weeks, we will face a critical situation with the number of infections far exceeding that of the third wave. "},{"@ja":"入院医療、宿泊及び自宅療養の危機管理体制の準備が急務である。","@en":"There is an urgent need to prepare crisis management systems for hospital care, as well as for designated hotels for recovery and at-home recovery."}],"(1)新規陽性者数":1553.9,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":113.6,"(3)新規陽性者における接触歴等不明者（人数）":977.3,"(3)新規陽性者における接触歴等不明者（増加比）":144.3,"(4)PCR・抗原検査（陽性率）":14.5,"(4)PCR・抗原検査（検査人数）":7413.1,"(5)救急医療の東京ルールの適用件数":85.7,"(6)入院患者数":2717,"(6)入院患者確保病床数":5967,"(7)重症患者数":78,"(7)重症患者確保病床数":392,"総括コメント-感染状況":{"date":"2021-03-04","level":4,"display":{"@ja":"感染が拡大していると思われる","@en":"There is a high risk of a resurgence of the virus."}},"総括コメント-医療提供体制":{"date":"2021-03-04","level":4,"display":{"@ja":"通常の医療が大きく制限されていると思われる","@en":"The provision of non-COVID health care is under pressure."}}}}')},477:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(392),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),d=Object(o.a)(1);return{"(1)新規陽性者数":{value:d(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:d(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:d(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:d(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:d(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:d(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:d(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},498:function(t,e,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("e4c59e2c",content,!0,{sourceMap:!1})},499:function(t,e,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("321d351a",content,!0,{sourceMap:!1})},500:function(t,e,n){var content=n(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("4a26bf7f",content,!0,{sourceMap:!1})},501:function(t,e,n){var content=n(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("58dac523",content,!0,{sourceMap:!1})},502:function(t,e,n){var content=n(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("2aeac9dd",content,!0,{sourceMap:!1})},512:function(t,e,n){"use strict";n(474)},513:function(t,e,n){var o=n(32)(!1);o.push([t.i,".StaticInfo{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;font-size:1.2rem}.StaticInfo-Text{white-space:pre-wrap;font-size:1.2rem;font-weight:600}.StaticInfo-Button{flex:1 0 auto;text-align:right;display:inline-block}.StaticInfo-Button>a{text-decoration:none;color:#008830!important;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#008830;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=o},514:function(t,e,n){"use strict";n(25),n(21),n(29),n(35),n(11),n(37);var o=n(6),r=n(424),l=n(175),c=n(420),d=n(86),f=n(19);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(r.a,l.a).extend({name:"VLazy",directives:{intersect:c.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(f.p)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},515:function(t,e,n){"use strict";n(475)},516:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-5d74f5a5]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-5d74f5a5]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-5d74f5a5]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},563:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),c=(n(512),n(14)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("h3",{staticClass:"StaticInfo-Text"},[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo-Link",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},564:function(t,e,n){"use strict";n.r(e);n(94);var o=n(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(515),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.comment))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"5d74f5a5",null);e.default=component.exports},565:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{images:function(){return this.monitoringCommentImage.data.images},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=n(14),l=n(63),c=n.n(l),d=n(923),f=n(941),m=n(551),h=n(642),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{cycle:"",width:"240",height:"180","hide-delimiter-background":""}},t._l(t.images,(function(image,i){return n("v-carousel-item",{key:i},[n("v-sheet",{attrs:{height:"100%",color:"#fff"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-3"},[n("a",{attrs:{target:"_blank",href:image.href}},[n("img",{attrs:{width:"240",height:"180",src:image.src,alt:image.alt}})])])])],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCarousel:d.a,VCarouselItem:f.a,VRow:m.a,VSheet:h.a})},591:function(t,e,n){"use strict";n(498)},592:function(t,e,n){var o=n(32)(!1);o.push([t.i,".Consultation[data-v-68743a4c]{padding:3px 18px;min-height:5.5em}",""]),t.exports=o},593:function(t,e,n){"use strict";n(499)},594:function(t,e,n){var o=n(32)(!1);o.push([t.i,".InfectionMedicalCareProvisionStatus[data-v-1bbbe12b]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:8px 18px;margin-bottom:10px}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-heading[data-v-1bbbe12b]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-heading .InfectionMedicalCareProvisionStatus-title[data-v-1bbbe12b]{display:flex;align-items:center;padding:0 0 4px;font-size:1.9rem;color:#4d4d4d;font-weight:600;font-size:1.4rem}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box[data-v-1bbbe12b]{overflow:hidden}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-Headline[data-v-1bbbe12b]{float:left;text-align:center;width:10em;border:1px solid #000;margin:0 4px 1px 0;color:#707070;font-size:1.2rem}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-description[data-v-1bbbe12b]{font-size:1.2rem;padding:3px 0 0;margin:0}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-description>em[data-v-1bbbe12b]{color:#008830;font-style:normal}",""]),t.exports=o},595:function(t,e,n){"use strict";n(500)},596:function(t,e,n){var o=n(32)(!1);o.push([t.i,".MonitoringComment{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 12px 10px;margin:0 0 10px}.MonitoringComment .MonitoringComment-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.MonitoringComment .MonitoringComment-heading .MonitoringComment-title{display:flex;align-items:center;padding:8px 6px;font-size:1.9rem;color:#4d4d4d;font-weight:600}.MonitoringComment .MonitoringComment-comments{margin:0 10px;padding:2px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col{float:left;clear:both;padding:3px;min-width:300px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringComment-summary{font-size:1.2rem}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringCommentFrame-title{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringComment .MonitoringComment-description{padding:6px;text-align:center;font-size:1.4rem}.MonitoringComment .MonitoringComment-description>a{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.MonitoringComment .MonitoringComment-description>a:hover{text-decoration:underline}",""]),t.exports=o},597:function(t,e,n){"use strict";n(501)},598:function(t,e,n){var o=n(32)(!1);o.push([t.i,".StayingPopulation[data-v-5f9ce98b]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:3px;min-height:5em;display:flex;align-items:center}.StayingPopulation .StayingPopulation-title[data-v-5f9ce98b]{padding:2px 15px;text-align:left;font-size:1.9rem;color:#4d4d4d;font-weight:600}.StayingPopulation .StayingPopulation-title .StayingPopulation-heading[data-v-5f9ce98b],.StayingPopulation .StayingPopulation-title .StayingPopulation-link[data-v-5f9ce98b]{font-size:1.2rem;font-weight:600}.StayingPopulation .StayingPopulation-place[data-v-5f9ce98b]{padding:5px;margin:2px 5px 2px 10px;background-color:#008830;color:#fff;vertical-align:middle;text-align:center;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;font-weight:600;font-size:1.2rem}.StayingPopulation .StayingPopulation-state[data-v-5f9ce98b]{flex:1;padding:2px;margin:2px 5px;border:2px solid #008830;text-align:center;vertical-align:middle;min-width:15em;font-size:1.1rem}",""]),t.exports=o},599:function(t,e,n){"use strict";n(502)},600:function(t,e,n){var o=n(32)(!1);o.push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 18px;margin-bottom:10px}.WhatsNew .WhatsNew-heading{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:8px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;margin:8px 12px 8px 0;font-size:1.9rem;color:#4d4d4d;font-weight:600}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;list-style:none;padding:0}@media screen and (max-width:768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton{margin:8px 12px 8px 0;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover{background-color:#008830;color:#fff}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover>i{color:#fff!important}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-inner{display:inline-flex;align-items:center}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-icon{width:1em;height:1em;margin-right:4px}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-v-icon{color:currentColor;margin-right:4px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item{margin:0 5px;font-size:1.4rem}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item{display:flex;flex-wrap:wrap}}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor{flex:0 1 auto}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor{padding-left:8px}}.WhatsNew .WhatsNew-list-item-anchor-link{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}.WhatsNew .WhatsNew-list-item-anchor .ExternalLinkIcon{margin-left:2px;color:#707070!important}",""]),t.exports=o},627:function(t,e,n){"use strict";n.r(e);var o=n(44),r=n(0),l=n(85),c=n(181),d=n(14),f=Object(d.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({staticClass:"vaccine_svg__svg-inline--fa vaccine_svg__fa-syringe vaccine_svg__fa-w-16",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},t.$listeners),[n("path",{attrs:{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"}})])}),[],!1,null,null,null).exports,m=n(134),h=r.default.extend({components:{AppLink:l.default,VaccineIcon:f,CovidIcon:c.a},props:{items:{type:Array,required:!0}},data:function(){return{mdiClipboardText:o.h,mdiInformation:o.l}},methods:{formattedDate:function(t){return Object(m.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),v=(n(599),n(63)),x=n.n(v),w=n(375),C=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-linkGroup"},[n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronavaccine/index.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("vaccine-icon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("ワクチン情報"))+"\n          ")],1)])],1),t._v(" "),n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/screening.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("covid-icon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("変異株情報"))+"\n          ")],1)])],1),t._v(" "),n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/kensa/index.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("v-icon",{staticClass:"WhatsNew-linkButton-v-icon",attrs:{size:"1em"}},[t._v("\n              "+t._s(t.mdiClipboardText)+"\n            ")]),t._v("\n            "+t._s(t.$t("検査情報"))+"\n          ")],1)])],1)])]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("span",{staticClass:"WhatsNew-list-item-time px-2"},[n("time",{attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")])]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor"},[n("app-link",{staticClass:"WhatsNew-list-item-anchor-link",attrs:{to:e.url}},[t._v("\n          "+t._s(e.text)+"\n        ")])],1)])})),0)])}),[],!1,null,null,null);e.default=C.exports;x()(C,{VIcon:w.a})},628:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(563),l=o.default.extend({components:{StaticInfo:r.default}}),c=(n(591),n(14)),d=n(63),f=n.n(d),m=n(425),h=n(514),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-lazy",[n("static-info",{staticClass:"Consultation",attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html",text:t.$t("自分や家族の症状に不安や心配があれば\nまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)],1)}),[],!1,null,"68743a4c",null);e.default=component.exports;f()(component,{VCol:m.a,VLazy:h.a})},629:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=o.default.extend({components:{AppLink:r.default},computed:{statuses:function(){return this.infectionMedicalCareProvisionStatus.data},date:function(){return new Date(this.infectionMedicalCareProvisionStatus.date)},statisticDate:function(){return this.infectionMedicalCareProvisionStatus.data["検査統計日時"]},infectionMedicalCareProvisionStatus:function(){return this.$store.state.infectionMedicalCareProvisionStatus}},methods:{formatDate:function(t){return this.$d(t,"date")}}}),c=(n(593),n(14)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"InfectionMedicalCareProvisionStatus"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-heading"},[n("h3",{staticClass:"InfectionMedicalCareProvisionStatus-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制（サマリ） {date}時点",{date:t.formatDate(t.date)}))+"\n    ")])]),t._v(" "),n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Box"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Headline"},[n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/hodo/saishin/hassei.html"}},[t._v("\n        "+t._s(t.$t("感染状況"))+"\n      ")])],1),t._v(" "),n("i18n",{staticClass:"InfectionMedicalCareProvisionStatus-description",attrs:{tag:"p",path:"新規陽性者{newPositiveCases}人 / 検査数{tests}件（{statisticDate}参考値 （3日間移動平均））、うち65歳以上の高齢者数{older65}人、死亡者数{deaths}人、都外からの持込検体による陽性数{samplesFromOutside}"},scopedSlots:t._u([{key:"newPositiveCases",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["新規陽性者"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"tests",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["検査数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"statisticDate",fn:function(){return[t._v("\n        "+t._s(t.formatDate(t.statisticDate))+"\n      ")]},proxy:!0},{key:"older65",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち65歳以上の高齢者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"deaths",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["死亡者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"samplesFromOutside",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["都外からの持込検体による陽性数"].toLocaleString())+"\n        ")])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Box"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Headline"},[n("app-link",{attrs:{to:"https://stopcovid19.metro.tokyo.lg.jp/cards/details-of-confirmed-cases/"}},[t._v("\n        "+t._s(t.$t("医療提供体制"))+"\n      ")])],1),t._v(" "),n("i18n",{staticClass:"InfectionMedicalCareProvisionStatus-description",attrs:{tag:"p",path:"入院数{hospitalized}人（確保病床数{bedsSecured}床）、うち重症者数{severeCases}人（うち重症病床数{bedsSevereSymptoms}床）"},scopedSlots:t._u([{key:"hospitalized",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["入院数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"bedsSecured",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["確保病床数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"severeCases",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち重症者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"bedsSevereSymptoms",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち重症病床数"].toLocaleString())+"\n        ")])]},proxy:!0}])})],1)])}),[],!1,null,"1bbbe12b",null);e.default=component.exports},630:function(t,e,n){"use strict";n.r(e);n(45),n(20);var o=n(44),r=n(0),l=n(85),c=n(564),d=n(565),f=n(476),m=n(477),h=r.default.extend({components:{AppLink:l.default,Frame:c.default,ImageSwipe:d.default},data:function(){return{monitoringComment:Object(m.a)(f.data),mdiChevronRight:o.f}},computed:{translatedMonitoringSummarizedComments:function(){var t=f.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]}}}),v=(n(595),n(14)),x=n(63),w=n.n(x),C=n(425),y=n(375),_=n(551),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MonitoringComment"},[n("div",{staticClass:"MonitoringComment-heading"},[n("h3",{staticClass:"MonitoringComment-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制の分析"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"MonitoringComment-comments"},[n("v-row",{staticClass:"MonitoringComment-row"},[n("v-col",{staticClass:"MonitoringComment-col"},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"MonitoringComment-summary"},t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("span",{key:i},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1)],1),t._v(" "),n("v-col",{staticClass:"MonitoringComment-col"},[n("div",{staticClass:"MonitoringComment-description"},[n("image-swipe"),t._v(" "),n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"}},[t._v("\n            "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n          ")])],1)])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;w()(component,{VCol:C.a,VIcon:y.a,VRow:_.a})},631:function(t,e,n){"use strict";n.r(e);n(45),n(20),n(16);var o=n(44),r=n(0),l=n(85),c=r.default.extend({components:{AppLink:l.default},data:function(){return{mdiChevronRight:o.f}},computed:{date:function(){return this.$d(new Date(this.stayingPopulationData.date),"date")},enddate:function(){var t=new Date(this.stayingPopulationData.date);return t.setDate(t.getDate()+6),this.$d(t,"dateWithoutYear")},placeName:function(){var t=this.stayingPopulationData.place.display;return["ja","ja-basic"].includes(this.$i18n.locale)?t.ja:t.en},formattedData:function(){var t=this;return this.stayingPopulationDatasets.map((function(e){var n=e.referenceDate,o=e.increaseRate,r=t.$d(n,"dateWithoutDay"),l="0";0!==o&&(l="".concat(o>0?"↑":"↓").concat(Math.abs(o)," %"));return{formattedMonth:r,increaseRateWithArrow:l}}))},stayingPopulationDatasets:function(){return this.stayingPopulationData.data},stayingPopulationData:function(){return this.stayingPopulation.data},stayingPopulation:function(){return this.$store.state.stayingPopulation}}}),d=(n(597),n(14)),f=n(63),m=n.n(f),h=n(425),v=n(375),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"StayingPopulation"},[n("div",{staticClass:"StayingPopulation-title"},[n("h3",{staticClass:"StayingPopulation-heading"},[t._v("\n        "+t._s(t.$t("都内の滞在人口の増減状況（毎週月曜日更新）"))+"\n      ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-link"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#top"}},[t._v(t._s(t.$t("詳細はこちら"))+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"StayingPopulation-place"},[t._v("\n      "+t._s(t.placeName)+"\n    ")]),t._v(" "),n("div",{staticClass:"StayingPopulation-state"},[t._v("\n      [ "+t._s(t.$t("{date}〜{enddate}",{date:t.date,enddate:t.enddate}))+" ]"),n("br"),t._v(" "),t._l(t.formattedData,(function(e,o){return n("span",{key:o},[t._v("\n        "+t._s(t.$t("{month}比 {rateWithArrow}",{month:e.formattedMonth,rateWithArrow:e.increaseRateWithArrow}))),n("br")])}))],2)])])}),[],!1,null,"5f9ce98b",null);e.default=component.exports;m()(component,{VCol:h.a,VIcon:v.a})},754:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(628),l=n(629),c=n(630),d=n(631),f=n(627),m=o.default.extend({components:{WhatsNew:f.default,InfectionMedicalCareProvisionStatus:l.default,MonitoringCommentCard:c.default,Consultation:r.default,StayingPopulation:d.default},computed:{newsItems:function(){return this.news.newsItems},news:function(){return this.$store.state.news}}}),h=n(14),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteTopUpper"},[n("whats-new",{attrs:{items:t.newsItems}}),t._v(" "),n("infection-medical-care-provision-status"),t._v(" "),n("monitoring-comment-card"),t._v(" "),n("div",{staticClass:"row mb-4"},[n("staying-population"),t._v(" "),n("consultation")],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
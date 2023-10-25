!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../shared"),require("vue"));else if("function"==typeof define&&define.amd)define(["../shared","vue"],t);else{var r="object"==typeof exports?t(require("../shared"),require("vue")):t(e["../shared"],e.vue);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,((e,t)=>(()=>{"use strict";var r={4212:t=>{t.exports=e},748:e=>{e.exports=t}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,s),n.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{s.r(n),s.d(n,{default:()=>i});var e=s(4212),t=s(748);const r=function(e,r){var o=r.attrs,s=r.slots,n=o.width,c=o.percent,a=o.strokeWidth,i=o.color,l=o.strokeLinecap,p=o.theme,d=o.type,u=o.bgColor,f=o.titleStyle,h=a||6,y=n||126,b={width:"number"==typeof y?"".concat(y,"px"):y,height:"number"==typeof y?"".concat(y,"px"):y,fontSize:"".concat(.15*y+6,"px")},v=50-h/2,x="dashboard"===d,g=2*Math.PI*v,m=x?.75:1,P="".concat(-1*g*(1-m)/2,"px"),k={strokeDasharray:"".concat(g*m,"px, ").concat(g,"px"),strokeDashoffset:P},T={strokeDasharray:"".concat(g*m*(c/100),"px, ").concat(g,"px"),strokeDashoffset:P,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"},j="\n    M 50 50\n    m 0 ".concat(x?"":"-").concat(v,"\n    a ").concat(v," ").concat(v," 0 1 1 0 ").concat(x?"-":"").concat(2*v,"\n    a ").concat(v," ").concat(v," 0 1 1 0 ").concat(x?"":"-").concat(2*v,"\n  "),N={d:j,stroke:u||"#f5f5f5","stroke-linecap":l,"stroke-width":h,"fill-opacity":"0",class:"process-circle-trail",style:k},V={d:j,stroke:i||"#13ce66","stroke-linecap":l,"stroke-width":c>0&&h||0,"fill-opacity":"0",class:"process-circle-path bk-".concat(p,"-circle-trail"),style:T};return(0,t.createVNode)("div",{class:"progress-outer-circle",style:b},[(0,t.createVNode)("svg",{viewBox:"0 0 100 100"},[(0,t.createVNode)("path",N,null),(0,t.createVNode)("path",V,null)]),(0,t.createVNode)("span",{class:"progress-circle-text",style:f},[null==s?void 0:s.default()])])},o=function(e,r){var o,s,n=r.attrs,c=r.slots,a=n.percent,i=n.strokeWidth,l=n.size,p=n.color,d=n.titleStyle,u=n.showText,f=n.textInside,h=n.theme,y={height:"".concat(i,"px"),lineHeight:"".concat(i,"px")},b={width:"".concat(a,"%"),background:p,animationDuration:"3s"},v=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return(u||c.default)&&(e&&f||!e&&!f)?null==c?void 0:c.default():null};return(0,t.createVNode)("div",{class:"progress-outer"},[(0,t.createVNode)("div",{class:"bk-progress-".concat(l||"normal"," progress-bar"),style:y},[(0,t.createVNode)("div",{style:b,class:(o={"progress-inner":!0},s="bk-".concat(h),!0,s in o?Object.defineProperty(o,s,{value:true,enumerable:!0,configurable:!0,writable:!0}):o[s]=true,o)},[(0,t.createVNode)("div",{class:"inner-text",style:d},[v()])])]),v(!1)])};function c(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,t.isVNode)(e)}const a=(0,t.defineComponent)({name:"Progress",props:{extCls:e.PropTypes.string,type:e.PropTypes.string.validate((function(e){return["line","circle","dashboard"].includes(e)})).def("line"),percent:e.PropTypes.number.def(0),theme:e.PropTypes.theme().def(e.ThemeEnum.PRIMARY),size:e.PropTypes.size(),width:e.PropTypes.number.def(126),strokeWidth:e.PropTypes.number,strokeLinecap:e.PropTypes.string.def("round"),textInside:e.PropTypes.bool.def(!1),showText:e.PropTypes.bool.def(!0),color:e.PropTypes.string,bgColor:e.PropTypes.string,fixed:e.PropTypes.number.validate((function(e){return e>=0&&e<=20})).def(0),format:e.PropTypes.func.def((function(e){return"".concat(e,"%")})),titleStyle:e.PropTypes.object.def({fontSize:"16px",verticalAlign:"middle"})},setup:function(){return{}},methods:{validPercent:function(e){return!e||e<0?0:e>100?100:e},renderProcessInfo:function(){var e,r=this.$props,o=r.showText,s=r.format,n=r.percent,c=r.textInside,a=r.titleStyle,i=r.fixed,l=s(null===(e=this.validPercent(n))||void 0===e?void 0:e.toFixed(i));return(o||this.$slots.default)&&c?this.$slots.default?this.$slots.default():(0,t.createVNode)("span",null,[l]):!o||c?null:(0,t.createVNode)("span",{class:"progress-text",style:"string"==typeof l?a:void 0},[this.$slots.default?this.$slots.default():l])}},render:function(){var s=this.renderProcessInfo(),n=Object.assign(Object.assign({},this.$props),{percent:this.validPercent(this.percent)}),a=(0,t.createVNode)(o,n,c(s)?s:{default:function(){return[s]}});"circle"!==this.type&&"dashboard"!==this.type||(a=(0,t.createVNode)(r,n,c(s)?s:{default:function(){return[s]}}));var i={class:(0,e.classes)({extCls:!!this.extCls},"bk-progress bk-progress-".concat(this.type))};return(0,t.createVNode)("div",i,[a])}}),i=(0,e.withInstall)(a)})(),n})()));
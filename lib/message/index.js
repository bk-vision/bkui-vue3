!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"),require("../shared"),require("vue-types"),require("../icon"));else if("function"==typeof define&&define.amd)define(["vue","../shared","vue-types","../icon"],t);else{var o="object"==typeof exports?t(require("vue"),require("../shared"),require("vue-types"),require("../icon")):t(e.vue,e["../shared"],e["vue-types"],e["../icon"]);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,((e,t,o,r)=>(()=>{"use strict";var n={6870:e=>{e.exports=r},4212:e=>{e.exports=t},748:t=>{t.exports=e},210:e=>{e.exports=o}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>p});var e=i(748),t=i(4212),o={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},r=1;var n,s=i(210),u=i(6870);!function(e){e.PRIMARY="primary",e.WARNING="warning",e.SUCCESS="success",e.ERROR="error"}(n||(n={}));var c={id:t.PropTypes.string.def(""),message:t.PropTypes.string.def(""),theme:(0,s.toType)("messageTheme",{}).def(n.PRIMARY),delay:t.PropTypes.number.def(3e3),dismissable:t.PropTypes.bool.def(!0),offsetY:t.PropTypes.number.def(30),spacing:t.PropTypes.number.def(10),extCls:t.PropTypes.string.def(""),onClose:t.PropTypes.func,getContainer:t.PropTypes.instanceOf(HTMLElement)};const l=(0,e.defineComponent)({name:"Message",props:c,emits:["destroy"],setup:function(o,r){var n=r.emit,s=(0,e.computed)((function(){return["bk-message","bk-message-".concat(o.theme),"".concat(o.extCls)]})),i=t.bkZIndexManager.getMessageNextIndex(),a=(0,e.computed)((function(){return o.getContainer&&(0,t.isElement)(o.getContainer)})),u=(0,e.computed)((function(){return{top:"".concat(o.offsetY,"px"),zIndex:i,position:a.value?"absolute":"fixed"}})),c=(0,e.ref)(!1),l=null;return(0,e.onMounted)((function(){o.delay&&(l=setTimeout((function(){c.value=!1}),o.delay)),c.value=!0})),(0,e.onUnmounted)((function(){clearTimeout(l)})),(0,e.watch)(c,(function(){c.value||n("destroy",o.id)})),{classNames:s,styles:u,visible:c,close:function(e){e.preventDefault(),e.stopPropagation(),c.value=!1}}},render:function(){var t=this;return(0,e.createVNode)(e.Transition,{name:"bk-message-fade"},{default:function(){return[(0,e.withDirectives)((0,e.createVNode)("div",{class:t.classNames,style:t.styles},[(0,e.createVNode)("div",{class:"bk-message-content"},[(0,e.createVNode)("div",{class:"bk-message-icon"},[{primary:(0,e.createVNode)(u.Info,null,null),warning:(0,e.createVNode)(u.Warn,null,null),success:(0,e.createVNode)(u.Success,null,null),error:(0,e.createVNode)(u.Close,null,null)}[t.theme]]),t.message]),t.dismissable&&(0,e.createVNode)(u.Error,{class:"bk-message-close",onClick:t.close},null)]),[[e.vShow,t.visible]])]}})}}),p=function(n){!function(n,s){var i=s,a=i.position||"top-right";"string"==typeof s&&(i={message:s});var u=s.onClose,c=i.offsetX||10,l=i.offsetY||30,p=i.spacing,f=void 0===p?10:p;o[a].forEach((function(e){l+=(e.el.offsetHeight||0)+f}));var d="message_".concat(r+=1);i=Object.assign(Object.assign({},i),{offsetX:c,offsetY:l,id:d});var m=document.createElement("div"),v=(0,e.createVNode)(n,i);v.props.onDestroy=function(t){!function(e,t,r,n){null==n||n();var s=t.startsWith("top")?"top":"bottom",i=-1;o[t].forEach((function(t,o){t.props.id===e&&(i=o)}));for(var a=o[t][i].el.offsetHeight,u=o[t].length,c=i;c<u;c++){var l=parseInt(o[t][c].el.style[s],10)-a-r;o[t][c].component.props.offsetY=l}o[t].splice(i,1)}(t,a,f,u),(0,e.render)(null,m)},(0,e.render)(v,m),o[a].push(v),(v.props.getContainer&&(0,t.isElement)(v.props.getContainer)?v.props.getContainer:document.body).appendChild(m.firstElementChild)}(l,n)}})(),a})()));
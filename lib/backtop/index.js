!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../shared"),require("vue"),require("lodash"),require("../icon"));else if("function"==typeof define&&define.amd)define(["../shared","vue","lodash","../icon"],t);else{var o="object"==typeof exports?t(require("../shared"),require("vue"),require("lodash"),require("../icon")):t(e["../shared"],e.vue,e.lodash,e["../icon"]);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,((e,t,o,r)=>(()=>{"use strict";var n={6870:e=>{e.exports=r},4212:t=>{t.exports=e},467:e=>{e.exports=o},748:e=>{e.exports=t}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return n[e](o,o.exports,l),o.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{l.r(u),l.d(u,{default:()=>a});var e=l(4212),t=l(748),o=l(467),r=l(6870);const n=(0,t.defineComponent)({name:"Backtop",props:{visibilityHeight:e.PropTypes.number.def(200),target:e.PropTypes.string.def(""),right:e.PropTypes.number.def(40),bottom:e.PropTypes.number.def(40),extCls:e.PropTypes.string.def("")},setup:function(n,a){var l=a.slots,u=(0,t.ref)(null),i=(0,t.ref)(null),s=(0,t.ref)(!1),d=(0,t.ref)(e.bkZIndexManager.getModalNextIndex()),c="".concat(n.bottom,"px"),f="".concat(n.right,"px"),p=(0,o.throttle)((function(){s.value=i.value.scrollTop>=n.visibilityHeight}),30),v=function(){i.value.scrollTo({top:0,behavior:"smooth"})};return(0,t.watch)((function(){return s}),(function(){d.value=e.bkZIndexManager.getModalNextIndex()})),(0,t.onMounted)((function(){if(u.value=document,i.value=document.documentElement,n.target){if(i.value=document.querySelector(n.target),!i.value)throw new Error("target does not exist");u.value=i.value}u.value.addEventListener("scroll",p)})),(0,t.onBeforeUnmount)((function(){u.value.removeEventListener("scroll",p)})),function(){var e,o;return(0,t.createVNode)(t.Transition,{name:"bk-fade"},{default:function(){return[s.value?(0,t.createVNode)("div",{class:"bk-backtop ".concat(n.extCls),style:{right:f,bottom:c,zIndex:d.value},onClick:v},[null!==(o=null===(e=l.default)||void 0===e?void 0:e.call(l))&&void 0!==o?o:(0,t.createVNode)(r.AngleUp,{class:"bk-backtop-icon"},null)]):""]}})}}}),a=(0,e.withInstall)(n)})(),u})()));
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../shared"),require("vue"));else if("function"==typeof define&&define.amd)define(["../shared","vue"],t);else{var o="object"==typeof exports?t(require("../shared"),require("vue")):t(e["../shared"],e.vue);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,((e,t)=>(()=>{"use strict";var o={4212:t=>{t.exports=e},748:e=>{e.exports=t}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.r(i),n.d(i,{default:()=>r});var e=n(4212),t=n(748);const o=(0,t.defineComponent)({name:"FixedNavbar",props:{navItems:e.PropTypes.array.def([]),extCls:e.PropTypes.string.def(""),position:e.PropTypes.oneOf(["middle","top","bottom"]).def("middle"),modelValue:e.PropTypes.bool.def(!0)},emits:["update:modelValue","click"],setup:function(o,r){var n=this,i=r.emit,a=o.navItems.map((function(e){return Object.assign({tooltip:{disabled:!0},action:function(){},icon:"",text:""},e)})),s=e.bkZIndexManager.getModalNextIndex(),d=function(e){i("click",e),e.action()};return function(){return o.modelValue&&(0,t.createVNode)("div",{class:"bk-fixed-navbar ".concat(o.extCls," ").concat(o.position),style:{zIndex:s}},[a.map((function(e){return(0,t.createVNode)("div",{class:"fixed-navbar-item",onClick:d.bind(n,e)},[e.icon?(0,t.createVNode)("i",{class:"".concat(e.icon," icon")},null):"",e.text?(0,t.createVNode)("span",{class:"text"},[e.text]):""])}))])}}}),r=(0,e.withInstall)(o)})(),i})()));
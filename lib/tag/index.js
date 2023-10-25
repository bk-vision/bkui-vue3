!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../shared"),require("vue"),require("vue-types"),require("../icon"));else if("function"==typeof define&&define.amd)define(["../shared","vue","vue-types","../icon"],t);else{var r="object"==typeof exports?t(require("../shared"),require("vue"),require("vue-types"),require("../icon")):t(e["../shared"],e.vue,e["vue-types"],e["../icon"]);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,((e,t,r,o)=>(()=>{"use strict";var s={6870:e=>{e.exports=o},4212:t=>{t.exports=e},748:e=>{e.exports=t},210:e=>{e.exports=r}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return s[e](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{n.r(l),n.d(l,{default:()=>i});var e=n(4212);function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var r,o=n(748),s=n(210),a=n(6870);!function(e){e.UNKNOWN="",e.FILLED="filled",e.STROKE="stroke"}(r||(r={}));const c=(0,o.defineComponent)({name:"Tag",props:{theme:(0,e.TagThemeType)(),closable:e.PropTypes.bool.def(!1),type:(0,s.toType)("tagStorkeType",{}).def(r.UNKNOWN),checkable:e.PropTypes.bool.def(!1),checked:e.PropTypes.bool.def(!1),radius:e.PropTypes.string.def("2px"),extCls:e.PropTypes.string.def("")},emits:["change","close"],slots:["icon"],setup:function(r,s){var a=s.emit;return{wrapperCls:(0,o.computed)((function(){var o;return(0,e.classes)((t(o={"bk-tag-closable":r.closable,"bk-tag-checkable":r.checkable,"bk-tag-check":r.checked},"bk-tag-".concat(r.type),r.type),t(o,"bk-tag-".concat(r.theme),r.theme),t(o,r.extCls,!!r.extCls),o),"bk-tag")})),wrapperStyle:(0,o.computed)((function(){return{borderRadius:r.radius}})),handleClose:function(e){e.preventDefault(),e.stopPropagation(),a("close",e)},handleClick:function(e){e.preventDefault(),e.stopPropagation(),r.checkable&&a("change",!r.checked)}}},render:function(){var e,t;return(0,o.createVNode)("div",{class:this.wrapperCls,style:this.wrapperStyle,onClick:this.handleClick},[this.$slots.icon?(0,o.createVNode)("span",{class:"bk-tag-icon"},[this.$slots.icon()]):"",(0,o.createVNode)("span",{class:"bk-tag-text"},[null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e)]),this.closable?(0,o.createVNode)(a.Error,{class:"bk-tag-close",onClick:this.handleClose},null):""])}}),i=(0,e.withInstall)(c)})(),l})()));
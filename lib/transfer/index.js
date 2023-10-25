!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../shared"),require("vue"),require("../config-provider"),require("../icon/"),require("../input"));else if("function"==typeof define&&define.amd)define(["../shared","vue","../config-provider","../icon/","../input"],t);else{var r="object"==typeof exports?t(require("../shared"),require("vue"),require("../config-provider"),require("../icon/"),require("../input")):t(e["../shared"],e.vue,e["../config-provider"],e["../icon/"],e["../input"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,((e,t,r,n,o)=>(()=>{"use strict";var a={2717:e=>{e.exports=r},7685:e=>{e.exports=n},8133:e=>{e.exports=o},4212:t=>{t.exports=e},748:e=>{e.exports=t}},i={};function u(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e](r,r.exports,u),r.exports}u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{u.r(l),u.d(l,{default:()=>p});var e=u(4212);function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n,o=u(748),a=u(2717),i=u(7685),s=u(8133),c=u.n(s);!function(e){e.OBJECT_ARRAY="objectArray",e.BASE_ARRAY="baseArray",e.NOT_ARRAY="notArray"}(n||(n={}));var d={title:e.PropTypes.arrayOf(e.PropTypes.string).def([]),extCls:e.PropTypes.string.def(""),searchPlaceholder:e.PropTypes.string.def(""),settingKey:e.PropTypes.string.def("id"),displayKey:e.PropTypes.string.def("value"),sortKey:e.PropTypes.string.def("value"),showOverflowTips:e.PropTypes.bool.def(!1),searchable:e.PropTypes.bool.def(!1),sortable:e.PropTypes.bool.def(!1),sourceList:e.PropTypes.arrayOf(e.PropTypes.any).def([]),targetList:e.PropTypes.arrayOf(e.PropTypes.any).def([]),emptyContent:e.PropTypes.arrayOf(e.PropTypes.string).def([])};const f=(0,o.defineComponent)({name:"Transfer",props:d,emits:["change","update:targetList"],setup:function(e,t){var i=t.emit,u=(0,a.useLocale)("transfer"),l=(0,o.computed)((function(){return Array.isArray(e.sourceList)?e.sourceList.every((function(e){return e.toString().includes("[object Object]")}))?n.OBJECT_ARRAY:n.BASE_ARRAY:n.NOT_ARRAY})),s=(0,o.computed)((function(){return l.value===n.BASE_ARRAY?"value":e.settingKey})),c=(0,o.computed)((function(){return l.value===n.BASE_ARRAY?"value":e.displayKey})),d=(0,o.computed)((function(){return e.sortKey||c.value})),f=(0,o.computed)((function(){switch(l.value){case n.BASE_ARRAY:return r(new Set(e.sourceList)).map((function(e){return{value:e}}));case n.OBJECT_ARRAY:return r(e.sourceList);default:return[]}})),p=(0,o.toRefs)(e).targetList,v=function(e,t,r){var n=(0,o.ref)([]),a=(0,o.ref)([]),i=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(n.value=[],a.value=[]),e.value.forEach((function(e){var o=e[r.value];t.value.includes(o)?a.value.push(e):n.value.push(e)}))};return i(),(0,o.watch)((function(){return[e,t,r]}),(function(){i(!0)}),{deep:!0}),{selectList:n,selectedList:a}}(f,p,s),y=v.selectList,h=v.selectedList,m=function(e,t){var r=(0,o.ref)(""),n=(0,o.computed)((function(){return e.value.filter((function(e){var n=e[t.value];return!(n instanceof Object)&&n.toString().includes(r.value)}))}));return{selectSearchQuery:r,selectListSearch:n}}(y,c),g=m.selectSearchQuery,A=m.selectListSearch,b=(0,o.computed)((function(){return r(A.value).sort((function(e,t){return e[d.value]>t[d.value]?1:-1}))})),S=(0,o.computed)((function(){return r(h.value).sort((function(e,t){return e[d.value]>t[d.value]?1:-1}))}));(0,o.watch)((function(){return[y,h]}),(function(){R()}),{deep:!0});var T=function(e,t){var r=s.value;return e.some((function(e){return e[r]===t[r]}))&&t.disabled},R=function(){var e=y.value.map((function(e){return e[s.value]})),t=h.value.map((function(e){return e[s.value]}));i("update:targetList",t),i("change",l.value===n.BASE_ARRAY?e:y.value.map((function(e){return(0,o.toRaw)(e)})),l.value===n.BASE_ARRAY?t:h.value.map((function(e){return(0,o.toRaw)(e)})),t)};return{selectSearchQuery:g,selectListSearch:A,selectedList:h,selectListSort:b,selectedListSort:S,settingCode:s,displayCode:c,allToRight:function(){y.value=r(f.value.filter((function(e){return T(y.value,e)}))),h.value=r(f.value.filter((function(e){return!T(y.value,e)}))),R()},allToLeft:function(){y.value=r(f.value.filter((function(e){return!T(h.value,e)}))),h.value=r(f.value.filter((function(e){return T(h.value,e)}))),R()},handleItemClick:function(e,t){var n;if(!e.disabled){var o=e[s.value],a=t?y:h,i=t?h:y,u=a.value.findIndex((function(e){return e[s.value]===o}));(n=i.value).push.apply(n,r(a.value.splice(u,1))),R()}},t:u}},render:function(){var e=this,t=this.sortable?this.selectListSort:this.selectListSearch,r=this.sortable?this.selectedListSort:this.selectedList,n=function(n){var a,i,u="left-header"===n,l="".concat(u?null!==(a=e.title[0])&&void 0!==a?a:e.t.sourceList:null!==(i=e.title[1])&&void 0!==i?i:e.t.targetList),s=u?!t.length:!r.length;return e.$slots[n]?(0,o.createVNode)("div",{class:"slot-header"},[e.$slots[n]()]):(0,o.createVNode)("div",{class:"header"},["".concat(l,"（").concat(u?t.length:r.length,"）"),(0,o.createVNode)("span",{class:{disabled:s},onClick:function(){s||(u?e.allToRight():e.allToLeft())}},[u?e.t.selectAll:e.t.removeAll])])},a=function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(0,o.createVNode)("div",{class:["item-content",{"is-disabled":t.disabled}]},[(0,o.createVNode)("span",{class:"content-text",title:t[e.displayCode]},[t[e.displayCode]]),(0,o.createVNode)("span",{class:"icon-wrapper"},[r?(0,o.createVNode)(i.ArrowsRight,{class:"bk-icon icon-move"},null):(0,o.createVNode)(i.Error,{class:"bk-icon icon-delete"},null)])])},u=function(n){var i="left"===n,u=i?t:r,l=i?"source-option":"target-option",s=i?"left-empty-content":"right-empty-content";return u.length?(0,o.createVNode)("ul",{class:["content",e.searchable&&i?"is-search":""]},[u.map((function(t){var r,n,u;return(0,o.createVNode)("li",{key:t[e.settingCode],class:[e.$slots[l]?"custom-item":""],onClick:function(){return e.handleItemClick(t,i)}},[null!==(u=null===(n=(r=e.$slots)[l])||void 0===n?void 0:n.call(r,t))&&void 0!==u?u:a(t,i)])}))]):function(t){var r,n="left-empty-content"===t,a=null!==(r=n?e.emptyContent[0]:e.emptyContent[1])&&void 0!==r?r:n?e.t.noData:e.t.noSelected;return e.$slots[t]?(0,o.createVNode)("div",null,[e.$slots[t]()]):(0,o.createVNode)("div",{class:"empty"},[a])}(s)};return(0,o.createVNode)("div",{class:["bk-transfer",this.extCls]},[(0,o.createVNode)("div",{class:"source-list"},[n("left-header"),this.searchable&&(0,o.createVNode)(c(),{modelValue:e.selectSearchQuery,"onUpdate:modelValue":function(t){return e.selectSearchQuery=t},class:"transfer-search-input",clearable:!0,placeholder:this.searchPlaceholder||this.t.search},{prefix:function(){return(0,o.createVNode)(i.Search,{class:"icon-search"},null)}}),u("left")]),(0,o.createVNode)(i.Transfer,{class:"transfer"},null),(0,o.createVNode)("div",{class:"target-list"},[n("right-header"),u("right")])])}}),p=(0,e.withInstall)(f)})(),l})()));
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../shared"),require("vue-types"),require("vue"),require("../icon/"));else if("function"==typeof define&&define.amd)define(["../shared","vue-types","vue","../icon/"],t);else{var a="object"==typeof exports?t(require("../shared"),require("vue-types"),require("vue"),require("../icon/")):t(e["../shared"],e["vue-types"],e.vue,e["../icon/"]);for(var r in a)("object"==typeof exports?exports:e)[r]=a[r]}}(self,((e,t,a,r)=>(()=>{"use strict";var n={7685:e=>{e.exports=r},4212:t=>{t.exports=e},748:e=>{e.exports=a},210:e=>{e.exports=t}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return n[e](a,a.exports,l),a.exports}l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{l.r(s),l.d(s,{BkTab:()=>m,BkTabPanel:()=>g,PositionEnum:()=>t,SortTypeEnum:()=>n,default:()=>T});var e,t,a=l(4212),r=l(210);!function(e){e.CARD="card",e.BORDER_CARD="border-card",e.UNBORDER_CARD="unborder-card",e.CARD_TAB="card-tab",e.CARD_GRID="card-grid"}(e||(e={})),function(e){e.LEFT="left",e.RIGHT="right",e.TOP="top"}(t||(t={}));var n,o=(0,r.toType)("position",{}).def(t.TOP);!function(e){e.REPLACE="replace",e.INSERT="insert"}(n||(n={}));var i=(0,r.toType)("sortType",{}).def(n.REPLACE),c={tabAdd:{type:Function,default:function(){return{}}},tabChange:{type:Function,default:function(e){return e}},tabRemove:{type:Function,default:function(e){return e}},tabSort:{type:Function,default:function(){return{}}},tabDrag:{type:Function,default:function(){return{}}}},u={active:a.PropTypes.oneOfType([a.PropTypes.number,a.PropTypes.string]).def(""),type:(0,r.toType)("type",{}).def(e.BORDER_CARD),tabPosition:o,closable:Boolean,addable:Boolean,sortable:Boolean,sortType:i,labelHeight:a.PropTypes.number.def(50),scrollStep:a.PropTypes.number.def(200),extCls:a.PropTypes.string.def(""),validateActive:a.PropTypes.bool.def(!0),showHeader:a.PropTypes.bool.def(!0),changeOnHover:a.PropTypes.bool.def(!1),changeOnHoverDelay:a.PropTypes.number.def(1e3),activeBarSize:a.PropTypes.number.def(2),activeBarColor:a.PropTypes.string.def("#3a84ff")},p=Object.assign({active:a.PropTypes.oneOfType([a.PropTypes.number,a.PropTypes.string]).def(""),type:(0,r.toType)("type",{}).def(e.BORDER_CARD),activeBarColor:a.PropTypes.string.def("#3a84ff"),activeBarSize:a.PropTypes.number.def(2),panels:{type:Array,default:function(){return[]}},tabPosition:o,closable:Boolean,addable:Boolean,sortable:Boolean,sortType:i,labelHeight:a.PropTypes.number.def(50),scrollStep:a.PropTypes.number.def(200),validateActive:a.PropTypes.bool.def(!0),changeOnHover:a.PropTypes.bool.def(!1),changeOnHoverDelay:a.PropTypes.number.def(1e3)},c),d={name:a.PropTypes.oneOfType([a.PropTypes.number,a.PropTypes.string]).def(""),label:a.PropTypes.string||a.PropTypes.func,closable:a.PropTypes.bool,visible:a.PropTypes.bool.def(!0),disabled:a.PropTypes.bool,sortable:a.PropTypes.bool,renderDirective:(0,a.renderDirectiveType)(),panel:a.PropTypes.string||a.PropTypes.func};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var v=l(748),b=l(7685);const y=(0,v.defineComponent)({name:"TabNav",props:p,setup:function(a){var r=(0,v.ref)(null),n=(0,v.computed)((function(){var n={width:0,height:0,bottom:0,left:0};if(!r.value)return n;if([t.LEFT,t.RIGHT].includes(a.tabPosition)){var o=r.value,l=o.clientHeight,s=o.offsetTop,i={width:"".concat(a.activeBarSize,"px"),height:"".concat(l,"px"),top:"".concat(s,"px"),background:a.activeBarColor};return a.tabPosition===t.LEFT?i.right=0:i.left=0,i}if(a.type===e.UNBORDER_CARD){var c=r.value,u=c.clientWidth,p=c.offsetLeft;return{width:"".concat(u,"px"),height:"".concat(a.activeBarSize,"px"),left:"".concat(p,"px"),bottom:0,background:a.activeBarColor}}return n})),o=(0,v.computed)((function(){if(!Array.isArray(a.panels)||!a.panels.length)return[];var e=[],t=!1;return a.panels.filter((function(r,n){if(!r.props)return null;var o=r.props,l=o.name,s=o.label,i=o.closable,c=o.visible,u=o.disabled,p=o.sortable;return!!c&&(a.active===l&&(t=!0),e.push({name:l,closable:i,visible:c,disabled:u,sortable:p,tabLabel:function(e){return r.slots.label?(0,v.h)(r.slots.label):[void 0,""].includes(e)?"选项卡".concat(n+1):"string"==typeof e?e:"function"==typeof e?(0,v.h)(e):e}(s)}),!0)})),!t&&a.validateActive&&a.panels[0].props&&a.tabChange(a.panels[0].props.name),e})),l=(0,v.ref)(-1),s=(0,v.ref)(-1),i=(0,v.ref)(""),c=function(e,t){return e===t},u={handleTabAdd:function(e){a.tabAdd(e)},dragstart:function(e,t){s.value=e,i.value=a.guid,Object.assign(t.dataTransfer,{effectAllowed:"move"}),a.tabDrag(e,t)},dragenter:function(e){c(i.value,a.guid)&&(l.value=e)},dragend:function(){l.value=-1,s.value=-1,i.value=null},drop:function(e,t){if(!c(i.value,a.guid))return!1;a.tabSort(s.value,e,t)},handleTabChange:function(e){a.tabChange(e)},handleTabRemove:function(e,t){a.tabRemove(e,t)}};return Object.assign(Object.assign({},u),{activeRef:r,activeBarStyle:n,navs:o,dragenterIndex:l,dragStartIndex:s,draggingEle:i,guid:Math.random().toString(16).substr(4)+Math.random().toString(16).substr(4)})},render:function(){var t,r,n,o=this,l=this.active,s=this.closable,i=this.addable,c=this.sortable,u=this.sortType,p=this.labelHeight,d=this.dragstart,f=this.dragenter,y=this.dragend,h=this.drop,g="function"==typeof this.$slots.setting?(0,v.createVNode)("div",{class:(0,a.resolveClassName)("tab-header-setting")},[this.$slots.setting()]):null,m=(n=[],"function"==typeof o.$slots.add?n.push(null===(r=(t=o.$slots).add)||void 0===r?void 0:r.call(t,v.h)):i&&n.push((0,v.createVNode)("div",{onClick:o.handleTabAdd},[(0,v.createVNode)(b.Plus,{style:"display:flex;",width:26,height:26},null)])),n.length?(0,v.createVNode)("div",{class:(0,a.resolveClassName)("tab-header-operation")},[n.map((function(e,t){return(0,v.createVNode)("div",{class:(0,a.resolveClassName)("tab-header-item"),key:t},[e])}))]):null);return(0,v.createVNode)("div",{style:{lineHeight:"".concat(p,"px")},class:(0,a.resolveClassName)("tab-header")},[(0,v.createVNode)("div",{class:[(0,a.resolveClassName)("tab-header-nav"),m||g?"tab-header-auto":""]},[o.type===e.UNBORDER_CARD?(0,v.createVNode)("div",{style:o.activeBarStyle,class:(0,a.resolveClassName)("tab-header-active-bar")},null):"",o.navs.map((function(e,t){if(!e)return null;var r,n=e.name,i=e.disabled,p=e.tabLabel,g=function(e,t){return e||t};return(0,v.createVNode)("div",{key:n,onClick:function(){return o.handleTabChange(n)},draggable:g(e.sortable,c),onDragstart:function(e){return d(t,e)},ref:l===n?"activeRef":"",onDragenter:function(e){e.preventDefault(),f(t)},onDragleave:function(e){e.preventDefault()},onDragover:function(e){e.preventDefault()},onDragend:function(e){e.preventDefault(),y()},onDrop:function(e){e.preventDefault(),h(t,u)},class:(r=[(0,a.resolveClassName)("tab-header-item")],i&&r.push((0,a.resolveClassName)("tab-header--disabled")),l===n&&r.push((0,a.resolveClassName)("tab-header--active")),r.join(" "))},[(0,v.createVNode)("div",null,[p]),g(e.closable,s)?(0,v.createVNode)("span",{class:(0,a.resolveClassName)("tab-header--close"),onClick:function(){return o.handleTabRemove(t,e)}},[(0,v.createVNode)(b.Close,null,null)]):""])}))]),m,g])}}),h=(0,v.defineComponent)({name:"Tab",components:{TabNav:y},props:u,emits:["add-panel","tab-change","remove-panel","sort-change","on-drag-tab","add","change","remove","update:active","sort","drag"],setup:function(e,t){var a=t.slots,r=t.emit,o=(0,v.ref)(!1),l=(0,v.ref)([]),s=(0,v.getCurrentInstance)(),i=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t.children;return(r||[]).forEach((function(t){var r=t.type;"TabPanel"===(r=r.name||r)&&t.component?a.push(t.component):r!==v.Fragment&&"template"!==r||e(t,a)})),a},c=function(){if(a.default){var e=s.subTree.children[1].children;if(!e)return;var t=e[0],r=i(t);r.length!==l.value.length&&(l.value=r)}};(0,v.onMounted)((function(){c(),o.value=!0})),(0,v.onUpdated)((function(){c()}));var u={tabAdd:function(e){r("add",{e}),r("add-panel",{e})},tabChange:function(e){r("change",e),r("tab-change",e),r("update:active",e)},tabRemove:function(e,t){r("remove",e,t),r("remove-panel",e,t)},tabSort:function(e,t,a){var o,s=l.value;if(a===n.INSERT)if(e<t)s.splice(t+1,0,l[e]),s.splice(e,1);else{if(!(e>t))return!1;s.splice(t,0,l[e]),s.splice(e+1,1)}else{var i=s[t];s[t]=s[e],s[e]=i}l.value=function(e){if(Array.isArray(e))return f(e)}(o=s)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r("sort",e,t,a),r("sort-change",e,t,a)},tabDrag:function(e,t){r("drag",e,t),r("on-drag-tab",e,t)}};return Object.assign(Object.assign({},u),{isMounted:o,panels:l})},render:function(){var r,n,o,l,s,i=this;return(0,v.createVNode)("div",{class:(s=[(0,a.resolveClassName)("tab"),i.extCls],i.tabPosition===t.TOP?s.push((0,a.resolveClassName)("tab--".concat(i.tabPosition)),(0,a.resolveClassName)("tab--".concat(i.type))):(s.push((0,a.resolveClassName)("tab--".concat(i.tabPosition))),i.type===e.CARD_TAB&&s.push((0,a.resolveClassName)("tab--vertical-tab"))),s)},[(o=i.panels,l={panels:o,active:i.active,type:i.type,closable:i.closable,addable:i.addable,sortable:i.sortable,sortType:i.sortType,labelHeight:i.labelHeight,scrollStep:i.scrollStep,validateActive:i.validateActive,changeOnHover:i.changeOnHover,changeOnHoverDelay:i.changeOnHoverDelay,tabPosition:i.tabPosition,activeBarSize:i.activeBarSize,activeBarColor:i.activeBarColor,tabAdd:i.tabAdd,tabChange:i.tabChange,tabRemove:i.tabRemove,tabSort:i.tabSort,tabDrag:i.tabDrag},o&&Array.isArray(o)?(0,v.createVNode)(y,l,i.$slots):null),(0,v.createVNode)("div",{class:(0,a.resolveClassName)("tab-content")},[null===(n=(r=this.$slots).default)||void 0===n?void 0:n.call(r)])])}}),g=(0,v.defineComponent)({name:"TabPanel",props:d,render:function(){var e=this,t=this.name===this.$parent.active;return(0,v.withDirectives)((0,v.createVNode)("div",{ref:"content",class:(0,a.resolveClassName)("tab-panel")},[!e.visible||"if"===e.renderDirective&&!t?null:"function"==typeof e.panel?e.panel(v.h):"function"==typeof e.$slots.default?e.$slots.default(null):"function"==typeof e.$slots.panel?e.$slots.panel(null):null]),[[v.vShow,t]])}});var m=(0,a.withInstallProps)(h,{TabPanel:g});const T=m})(),s})()));
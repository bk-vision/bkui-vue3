!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../shared"),require("vue"),require("../icon/"));else if("function"==typeof define&&define.amd)define(["../shared","vue","../icon/"],t);else{var n="object"==typeof exports?t(require("../shared"),require("vue"),require("../icon/")):t(e["../shared"],e.vue,e["../icon/"]);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,((e,t,n)=>(()=>{"use strict";var o={7685:e=>{e.exports=n},4212:t=>{t.exports=e},748:e=>{e.exports=t}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{a.r(l),a.d(l,{BkMenu:()=>x,BkMenuGroup:()=>y,BkMenuItem:()=>m,BkSubmenu:()=>b,default:()=>S});var e=a(4212);function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=a(748),r=Symbol("MENU_PROVIDER_KEY"),i=Symbol("MENU_PROVIDER_KEY_PATH"),u=function(){return(0,o.inject)(r)},c=function(){var e,t=(0,o.getCurrentInstance)(),n=t.parent?t.parent.provides:null===(e=t.vnode.appContext)||void 0===e?void 0:e.provides;return n&&i in n?(0,o.inject)(i):{parentInfo:void 0,parentKeys:(0,o.ref)([])}},s=function(e){return(e||"").split(" ").filter((function(e){return!!e.trim()}))};function d(e,t){if(e&&t){var o=s(t),r=e.getAttribute("class")||"";if(e.classList){var a;(a=e.classList).remove.apply(a,n(o))}else{o.forEach((function(e){r=r.replace(" ".concat(e," ")," ")}));var l=s(r).join(" ");e.setAttribute("class",l)}}}function v(e,t){if(e){var o,r=e.getAttribute("class")||"",a=s(r),l=(t||"").split(" ").filter((function(e){return!a.includes(e)&&!!e.trim()}));e.classList?(o=e.classList).add.apply(o,n(l)):(r+=" ".concat(l.join(" ")),e.setAttribute("class",r))}}var p={activeKey:String,collapse:Boolean,openedKeys:{type:Array},mode:{type:String,default:"vertical"},uniqueOpen:{type:Boolean,default:!0}};const f=(0,o.defineComponent)({name:"Menu",props:p,emits:["update:activeKey","update:openKeys","click","openChange"],setup:function(e,t){var a,l=t.slots,i=t.emit,u=t.expose,c=(0,o.ref)(""),s=(0,o.ref)([]),d=(0,o.ref)({}),v=(0,o.computed)((function(){return e.mode})),p=(0,o.ref)(e.collapse),f=(0,o.ref)([]);return(0,o.watchEffect)((function(){void 0!==e.activeKey&&(c.value=e.activeKey)})),(0,o.watch)((function(){return e.collapse}),(function(){p.value=e.collapse;var t=n(f.value),o=n(s.value);s.value=p.value?[]:t,f.value=p.value?o:[]}),{immediate:!0}),(0,o.watch)((function(){return e.openedKeys}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.value;s.value=e}),{immediate:!0}),a={activeKey:c,menuStore:d,registerMenuInfo:function(e,t){d.value=Object.assign(Object.assign({},d.value),function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))},unregisterMenuInfo:function(e){delete d.value[e],d.value=Object.assign({},d.value)},mode:v.value,openedKeys:s,collapse:p,handleOpenChange:function(t,o){o?e.uniqueOpen?s.value=[t]:s.value.push(t):s.value=s.value.filter((function(e){return e!==t})),i("openChange",o,d.value[t]),i("update:openKeys",n(s.value))},handleActiveChange:function(e){c.value=e,i("click",d.value[e]),i("update:activeKey",e,d.value[e])}},(0,o.provide)(r,a),u({activeKey:c,openedKeys:s,menuStore:d}),function(){var e;return(0,o.createVNode)("div",{class:{"bk-menu":!0,"is-collapse":p.value}},[null===(e=l.default)||void 0===e?void 0:e.call(l)])}}}),y=(0,o.defineComponent)({name:"MenuGroup",props:{name:{type:String,default:""}},setup:function(e,t){var n=t.slots;return function(){var t;return(0,o.createVNode)("div",{class:"bk-menu-group"},[(0,o.createVNode)("div",{class:"group-name"},[e.name]),(0,o.createVNode)("ul",{class:"group-wrap"},[null===(t=n.default)||void 0===t?void 0:t.call(n)])])}}}),m=(0,o.defineComponent)({name:"MenuItem",props:{needIcon:{type:Boolean,default:!0}},emits:["click"],slots:["icon"],setup:function(e,t){var n,r,a=t.slots,l=t.emit,i=u(),s=i.registerMenuInfo,d=i.unregisterMenuInfo,v=i.activeKey,p=i.handleActiveChange,f=(0,o.getCurrentInstance)(),y=c().parentInfo,m=(null===(r=null===(n=f.vnode.key)||void 0===n?void 0:n.toString)||void 0===r?void 0:r.call(n))||String(f.uid),g=(0,o.computed)((function(){return v.value===m})),h=(0,o.computed)((function(){return e.needIcon}));s(m,{key:m,parentKey:null==y?void 0:y.key});var b=function(e){p(m),l("click",e)};return(0,o.onBeforeUnmount)((function(){return d(m)})),function(){var e,t;return(0,o.createVNode)("li",{class:{"bk-menu-item":!0,"is-active":g.value},onClick:b},[h.value&&(0,o.createVNode)("span",{class:"item-icon"},[(null===(e=null==a?void 0:a.icon)||void 0===e?void 0:e.call(a))||(0,o.createVNode)("i",{class:"default-icon"},null)]),(0,o.createVNode)("span",{class:"item-content"},[null===(t=a.default)||void 0===t?void 0:t.call(a)])])}}});var g=a(7685),h={title:{type:String,default:"title"}};const b=(0,o.defineComponent)({name:"Submenu",props:h,emits:["collapse"],slots:["icon"],setup:function(e,t){var r,a,l=t.slots,s=t.emit,p=u(),f=p.registerMenuInfo,y=p.unregisterMenuInfo,m=p.openedKeys,h=p.handleOpenChange,b=p.collapse,x=p.activeKey,S=p.menuStore,I=c().parentInfo,K=(0,o.getCurrentInstance)(),w=(null===(a=null===(r=K.vnode.key)||void 0===r?void 0:r.toString)||void 0===a?void 0:a.call(r))||String(K.uid),k=(0,o.ref)({css:!0,onBeforeEnter:function(e){v(e,"collapse-transition"),e.dataset||(e.dataset={}),e.style.height="0px",e.style.maxHeight="0px"},onEnter:function(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height="".concat(e.scrollHeight,"px"),e.style.maxHeight="".concat(e.scrollHeight,"px")):(e.style.height="0px",e.style.maxHeight="0px"),e.style.overflow="hidden"},onAfterEnter:function(e){e.style.height="",e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,d(e,"collapse-transition")},onBeforeLeave:function(e){e.dataset||(e.dataset={}),e.dataset.oldOverflow=e.style.overflow,e.style.height="".concat(e.scrollHeight,"px"),e.style.maxHeight="".concat(e.scrollHeight,"px"),e.style.overflow="hidden"},onLeave:function(e){0!==e.scrollHeight&&(v(e,"collapse-transition"),e.style.transitionProperty="height",e.style.height="0px",e.style.maxHeight="0px")},onAfterLeave:function(e){d(e,"collapse-transition"),e.style.height="",e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow}}),O=(0,o.computed)((function(){return m.value.includes(w)})),j=(0,o.computed)((function(){var e,t,n=null===(t=null===(e=S.value)||void 0===e?void 0:e[x.value])||void 0===t?void 0:t.parentKey;return b.value&&n===w&&O}));!function(e){var t=c(),r=t.parentKeys,a=t.parentInfo,l=(0,o.computed)((function(){return[].concat(n(r.value),[e])}));(0,o.provide)(i,{parentInfo:{key:e,parentKey:null==a?void 0:a.key},parentKeys:l})}(w),f(w,{key:w,parentKey:null==I?void 0:I.key}),(0,o.onBeforeUnmount)((function(){return y(w)}));var A=function(){h(w,!O.value),s("collapse",!O.value,K)};return function(){var t,n;return(0,o.createVNode)("li",{class:{"bk-menu-submenu":!0,"is-opened":O.value}},[(0,o.createVNode)("div",{class:{"submenu-header":!0,"is-collapse":j.value},onClick:A},[(0,o.createVNode)("span",{class:"submenu-header-icon"},[(null===(t=l.icon)||void 0===t?void 0:t.call(l))||(0,o.createVNode)(g.TreeApplicationShape,{class:"menu-icon"},null)]),(0,o.createVNode)("span",{class:"submenu-header-content"},[e.title]),(0,o.createVNode)(g.AngleDown,{class:{"submenu-header-collapse":!0,"is-collapse":m.value.includes(w)}},null)]),(0,o.createVNode)(o.Transition,k.value,{default:function(){return[(0,o.withDirectives)((0,o.createVNode)("ul",{class:"submenu-list"},[null===(n=l.default)||void 0===n?void 0:n.call(l)]),[[o.vShow,O.value]])]}})])}}});var x=(0,e.withInstallProps)(f,{Item:m,Submenu:b,Group:y});const S=x})(),l})()));
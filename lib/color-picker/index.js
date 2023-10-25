!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../shared"),require("vue"),require("vue-types"),require("../directives"),require("../icon"));else if("function"==typeof define&&define.amd)define(["../shared","vue","vue-types","../directives","../icon"],t);else{var r="object"==typeof exports?t(require("../shared"),require("vue"),require("vue-types"),require("../directives"),require("../icon")):t(e["../shared"],e.vue,e["vue-types"],e["../directives"],e["../icon"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,((e,t,r,n,o)=>(()=>{var a={8621:(e,t,r)=>{var n;!function(o){var a=/^\s+/,i=/\s+$/,c=0,l=o.round,s=o.min,u=o.max,f=o.random;function d(e,t){if(t=t||{},(e=e||"")instanceof d)return e;if(!(this instanceof d))return new d(e,t);var r=function(e){var t,r,n,c={r:0,g:0,b:0},l=1,f=null,d=null,h=null,p=!1,v=!1;return"string"==typeof e&&(e=function(e){e=e.replace(a,"").replace(i,"").toLowerCase();var t,r=!1;if(C[e])e=C[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=U.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=U.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=U.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=U.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=U.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=U.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=U.hex8.exec(e))?{r:H(t[1]),g:H(t[2]),b:H(t[3]),a:E(t[4]),format:r?"name":"hex8"}:(t=U.hex6.exec(e))?{r:H(t[1]),g:H(t[2]),b:H(t[3]),format:r?"name":"hex"}:(t=U.hex4.exec(e))?{r:H(t[1]+""+t[1]),g:H(t[2]+""+t[2]),b:H(t[3]+""+t[3]),a:E(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=U.hex3.exec(e))&&{r:H(t[1]+""+t[1]),g:H(t[2]+""+t[2]),b:H(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==typeof e&&(z(e.r)&&z(e.g)&&z(e.b)?(t=e.r,r=e.g,n=e.b,c={r:255*F(t,255),g:255*F(r,255),b:255*F(n,255)},p=!0,v="%"===String(e.r).substr(-1)?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(f=D(e.s),d=D(e.v),c=function(e,t,r){e=6*F(e,360),t=F(t,100),r=F(r,100);var n=o.floor(e),a=e-n,i=r*(1-t),c=r*(1-a*t),l=r*(1-(1-a)*t),s=n%6;return{r:255*[r,c,i,i,l,r][s],g:255*[l,r,r,c,i,i][s],b:255*[i,i,l,r,r,c][s]}}(e.h,f,d),p=!0,v="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(f=D(e.s),h=D(e.l),c=function(e,t,r){var n,o,a;function i(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=F(e,360),t=F(t,100),r=F(r,100),0===t)n=o=a=r;else{var c=r<.5?r*(1+t):r+t-r*t,l=2*r-c;n=i(l,c,e+1/3),o=i(l,c,e),a=i(l,c,e-1/3)}return{r:255*n,g:255*o,b:255*a}}(e.h,f,h),p=!0,v="hsl"),e.hasOwnProperty("a")&&(l=e.a)),l=P(l),{ok:p,format:e.format||v,r:s(255,u(c.r,0)),g:s(255,u(c.g,0)),b:s(255,u(c.b,0)),a:l}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=l(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=l(this._r)),this._g<1&&(this._g=l(this._g)),this._b<1&&(this._b=l(this._b)),this._ok=r.ok,this._tc_id=c++}function h(e,t,r){e=F(e,255),t=F(t,255),r=F(r,255);var n,o,a=u(e,t,r),i=s(e,t,r),c=(a+i)/2;if(a==i)n=o=0;else{var l=a-i;switch(o=c>.5?l/(2-a-i):l/(a+i),a){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4}n/=6}return{h:n,s:o,l:c}}function p(e,t,r){e=F(e,255),t=F(t,255),r=F(r,255);var n,o,a=u(e,t,r),i=s(e,t,r),c=a,l=a-i;if(o=0===a?0:l/a,a==i)n=0;else{switch(a){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4}n/=6}return{h:n,s:o,v:c}}function v(e,t,r,n){var o=[q(l(e).toString(16)),q(l(t).toString(16)),q(l(r).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function b(e,t,r,n){return[q(L(n)),q(l(e).toString(16)),q(l(t).toString(16)),q(l(r).toString(16))].join("")}function g(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s-=t/100,r.s=T(r.s),d(r)}function m(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s+=t/100,r.s=T(r.s),d(r)}function k(e){return d(e).desaturate(100)}function y(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l+=t/100,r.l=T(r.l),d(r)}function w(e,t){t=0===t?0:t||10;var r=d(e).toRgb();return r.r=u(0,s(255,r.r-l(-t/100*255))),r.g=u(0,s(255,r.g-l(-t/100*255))),r.b=u(0,s(255,r.b-l(-t/100*255))),d(r)}function _(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l-=t/100,r.l=T(r.l),d(r)}function x(e,t){var r=d(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,d(r)}function A(e){var t=d(e).toHsl();return t.h=(t.h+180)%360,d(t)}function S(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+120)%360,s:t.s,l:t.l}),d({h:(r+240)%360,s:t.s,l:t.l})]}function N(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+90)%360,s:t.s,l:t.l}),d({h:(r+180)%360,s:t.s,l:t.l}),d({h:(r+270)%360,s:t.s,l:t.l})]}function V(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+72)%360,s:t.s,l:t.l}),d({h:(r+216)%360,s:t.s,l:t.l})]}function O(e,t,r){t=t||6,r=r||30;var n=d(e).toHsl(),o=360/r,a=[d(e)];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,a.push(d(n));return a}function j(e,t){t=t||6;for(var r=d(e).toHsv(),n=r.h,o=r.s,a=r.v,i=[],c=1/t;t--;)i.push(d({h:n,s:o,v:a})),a=(a+c)%1;return i}d.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,t=n.g/255,r=n.b/255,.2126*(e<=.03928?e/12.92:o.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:o.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:o.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=P(e),this._roundA=l(100*this._a)/100,this},toHsv:function(){var e=p(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=p(this._r,this._g,this._b),t=l(360*e.h),r=l(100*e.s),n=l(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=h(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=h(this._r,this._g,this._b),t=l(360*e.h),r=l(100*e.s),n=l(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return v(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,o){var a=[q(l(e).toString(16)),q(l(t).toString(16)),q(l(r).toString(16)),q(L(n))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:l(this._r),g:l(this._g),b:l(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+l(this._r)+", "+l(this._g)+", "+l(this._b)+")":"rgba("+l(this._r)+", "+l(this._g)+", "+l(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:l(100*F(this._r,255))+"%",g:l(100*F(this._g,255))+"%",b:l(100*F(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+l(100*F(this._r,255))+"%, "+l(100*F(this._g,255))+"%, "+l(100*F(this._b,255))+"%)":"rgba("+l(100*F(this._r,255))+"%, "+l(100*F(this._g,255))+"%, "+l(100*F(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(R[v(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+b(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=d(e);r="#"+b(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return d(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(y,arguments)},brighten:function(){return this._applyModification(w,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(g,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(k,arguments)},spin:function(){return this._applyModification(x,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(O,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(j,arguments)},splitcomplement:function(){return this._applyCombination(V,arguments)},triad:function(){return this._applyCombination(S,arguments)},tetrad:function(){return this._applyCombination(N,arguments)}},d.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:D(e[n]));e=r}return d(e,t)},d.equals=function(e,t){return!(!e||!t)&&d(e).toRgbString()==d(t).toRgbString()},d.random=function(){return d.fromRatio({r:f(),g:f(),b:f()})},d.mix=function(e,t,r){r=0===r?0:r||50;var n=d(e).toRgb(),o=d(t).toRgb(),a=r/100;return d({r:(o.r-n.r)*a+n.r,g:(o.g-n.g)*a+n.g,b:(o.b-n.b)*a+n.b,a:(o.a-n.a)*a+n.a})},d.readability=function(e,t){var r=d(e),n=d(t);return(o.max(r.getLuminance(),n.getLuminance())+.05)/(o.min(r.getLuminance(),n.getLuminance())+.05)},d.isReadable=function(e,t,r){var n,o,a,i,c,l=d.readability(e,t);switch(o=!1,(a=r,"AA"!==(i=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==i&&(i="AA"),"small"!==(c=(a.size||"small").toLowerCase())&&"large"!==c&&(c="small"),n={level:i,size:c}).level+n.size){case"AAsmall":case"AAAlarge":o=l>=4.5;break;case"AAlarge":o=l>=3;break;case"AAAsmall":o=l>=7}return o},d.mostReadable=function(e,t,r){var n,o,a,i,c=null,l=0;o=(r=r||{}).includeFallbackColors,a=r.level,i=r.size;for(var s=0;s<t.length;s++)(n=d.readability(e,t[s]))>l&&(l=n,c=d(t[s]));return d.isReadable(e,c,{level:a,size:i})||!o?c:(r.includeFallbackColors=!1,d.mostReadable(e,["#fff","#000"],r))};var C=d.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},R=d.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(C);function P(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function F(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=s(t,u(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),o.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function T(e){return s(1,u(0,e))}function H(e){return parseInt(e,16)}function q(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function L(e){return o.round(255*parseFloat(e)).toString(16)}function E(e){return H(e)/255}var M,I,B,U=(I="[\\s|\\(]+("+(M="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",B="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",{CSS_UNIT:new RegExp(M),rgb:new RegExp("rgb"+I),rgba:new RegExp("rgba"+B),hsl:new RegExp("hsl"+I),hsla:new RegExp("hsla"+B),hsv:new RegExp("hsv"+I),hsva:new RegExp("hsva"+B),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function z(e){return!!U.CSS_UNIT.exec(e)}e.exports?e.exports=d:void 0===(n=function(){return d}.call(t,r,t,e))||(e.exports=n)}(Math)},4061:e=>{"use strict";e.exports=n},6870:e=>{"use strict";e.exports=o},4212:t=>{"use strict";t.exports=e},748:e=>{"use strict";e.exports=t},210:e=>{"use strict";e.exports=r}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e](r,r.exports,c),r.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";c.r(l),c.d(l,{default:()=>C});var e=c(4212);function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var r=c(748),n=c(8621),o=c.n(n),a=c(210),i=c(4061),s=c(6870),u={placement:{type:String,default:"bottom-start",validator:function(e){return!(["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"].indexOf(e)<0&&(console.error("placement property is not valid: '".concat(e,"'")),1))}},className:{type:String},extPopoverCls:{type:String},appendToBody:{type:Boolean},triggerRef:{type:Object},onClick:Function};const f=(0,r.defineComponent)({props:u,emits:["changeVisible"],setup:function(t,n){var o=n.emit,a=Object.create(null),i=(0,r.ref)(null);(0,r.onMounted)((function(){l()})),(0,r.onBeforeUnmount)((function(){c()}));var c=function(){if(a&&0!==Object.keys(a).length){var e=a;e.isShow&&e.hide(),e.destroy(),a=null,o("changeVisible",!1)}},l=function(){a&&0!==Object.keys(a).length?(0,r.nextTick)((function(){a.update()})):(0,r.nextTick)((function(){a=new e.BKPopover(t.triggerRef,i.value,{placement:t.placement,trigger:"manual",modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{name:"offset",options:{offset:[0,4]}}]})}))},s=(0,r.computed)((function(){var r={};return t.appendToBody&&(r["z-index"]=1060+e.bkZIndexManager.getModalNextIndex()),r})),u=(0,r.reactive)({styles:s});return Object.assign(Object.assign({},(0,r.toRefs)(u)),{refContentRef:i,forceUpdate:function(){var e;a&&(null===(e=null==a?void 0:a.forceUpdate)||void 0===e||e.call(a))},updateDropdown:l,destoryDropdown:c})},render:function(){var t,n,o;return(0,r.createVNode)("div",{ref:"refContentRef",class:[(0,e.resolveClassName)("date-picker-dropdown"),this.className,this.extPopoverCls],style:this.styles,onClick:this.onClick},[null!==(o=null===(n=(t=this.$slots).default)||void 0===n?void 0:n.call(t))&&void 0!==o?o:""])}});var d={info:e.PropTypes.object.isRequired};const h=(0,r.defineComponent)({props:d,emits:["tab","input"],setup:function(t,n){var o=n.emit,a=function(e){"a"===t.info.key&&o("tab",e)},i=function(e){var r=t.info.key,n=e.target.value;o("input",r,n)},c=(0,r.computed)((function(){return(0,e.classes)({error:t.info.error},"bk-color-picker-input-value")}));return function(){return(0,r.createVNode)("div",{class:"bk-color-picker-input-part"},[(0,r.createVNode)("input",{type:"HEX"===t.info.name?"text":"number",class:c.value,value:t.info.value,onKeydown:a,onInput:i},null),(0,r.createVNode)("span",{class:"bk-color-picker-input-text"},[t.info.name])])}}});var p={colorObj:e.PropTypes.object.isRequired};const v=(0,r.defineComponent)({name:"ColorPicker",props:p,emits:["change","tab"],setup:function(e,t){var n=t.emit,a=(0,r.reactive)({key:"hex",name:"HEX",value:e.colorObj.hex,error:!1}),i=(0,r.reactive)({key:"r",name:"R",value:e.colorObj.rgba.r.toString(),error:!1}),c=(0,r.reactive)({key:"g",name:"G",value:e.colorObj.rgba.g.toString(),error:!1}),l=(0,r.reactive)({key:"b",name:"B",value:e.colorObj.rgba.b.toString(),error:!1}),s=(0,r.reactive)({key:"a",name:"Alpha",value:e.colorObj.rgba.a.toString(),error:!1});(0,r.watch)((function(){return e.colorObj}),(function(e){o()(e.hex).toString()!==o()(a.value).toString()&&(a.value=e.hex),i.value=e.rgba.r.toString(),c.value=e.rgba.g.toString(),l.value=e.rgba.b.toString(),s.value=e.rgba.a.toString(),d()}),{deep:!0});var u=function(e){n("tab",e)},f=function(e,t){if({r:i,g:c,b:l,a:s,hex:a}[e].value=t,d()){var r="hex"===e?a.value:"rgba(".concat(i.value,", ").concat(c.value,", ").concat(l.value,", ").concat(s.value,")");n("change",r)}},d=function(){var e=!0;!a.value.startsWith("#")||4!==a.value.length&&7!==a.value.length||a.value.slice(1).match(/[^0-9a-fA-F]/)?(a.error=!0,e=!1):a.error=!1,""!==s.value&&s.value>=0&&s.value<=1?s.error=!1:(s.error=!0,e=!1);for(var t=0,r=[i,c,l];t<r.length;t++){var n=r[t],o=n.value;""!==o&&o>=0&&o<=255?n.error=!1:(n.error=!0,e=!1)}return e};return function(){return(0,r.createVNode)("div",{class:"bk-color-picker-input"},[(0,r.createVNode)("div",{class:"bk-color-picker-input-hex"},[(0,r.createVNode)(h,{info:a,onInput:f},null)]),(0,r.createVNode)("div",{class:"bk-color-picker-input-rgba"},[(0,r.createVNode)(h,{info:i,onInput:f},null),(0,r.createVNode)(h,{info:c,onInput:f},null),(0,r.createVNode)(h,{info:l,onInput:f},null),(0,r.createVNode)(h,{info:s,onInput:f,onTab:u},null)])])}}});var b=function(e){var t=e;""===e&&(t="#FFFFFF");var r=o()(e),n=r.toHsl(),a=r.toHsv();return 0===n.s&&(n.h=t.h||0,a.h=t.h||0),a.v<.0164&&(a.h=t.h||0,a.s=t.s||0),n.l<.01&&(n.h=t.h||0,n.s=t.s||0),{hsl:n,hsv:a,hex:r.toHexString().toUpperCase(),rgba:r.toRgb()}},g=function(e,t,r){return e<t?t:e>r?r:e},m=function(e,t){return e.touches?e.touches[0][t]:0},k=function(e){var t=e.r,r=e.g,n=e.b,o=e.a;return"rgba(".concat([t,r,n,o].join(","),")")},y={colorObj:e.PropTypes.object.isRequired};const w=(0,r.defineComponent)({name:"ColorPicker",props:y,emits:["change"],setup:function(e,t){var n=t.emit,o=(0,r.ref)(null),a=(0,r.computed)((function(){return{left:"".concat(e.colorObj.hsv.h/360*100,"%")}})),i=function(t){var r=o.value.clientWidth,n=e.colorObj.hsv.h/360*r;switch(t.code){case"ArrowLeft":t.preventDefault(),n=g(n-2,0,r);break;case"ArrowRight":t.preventDefault(),n=g(n+2,0,r);break;case"ArrowUp":t.preventDefault(),n=g(n-10,0,r);break;case"ArrowDown":t.preventDefault(),n=g(n+10,0,r);break;default:return}l(null,n)},c=function e(){window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",e)},l=function(e,t){var r=o.value.clientWidth,n=void 0!==t?t:s(e);u(n/r)},s=function(e){var t=o.value.getBoundingClientRect().left+window.pageXOffset,r=e.pageX||m(e,"PageX");return g(r-t,0,o.value.clientWidth)},u=function(t){var r=e.colorObj.hsl,o=r.h,a=r.s,i=r.l,c=r.a,l=360*t;o!==l&&n("change",{h:l,s:a,l:i,a:c})};return function(){return(0,r.createVNode)("div",{ref:o,tabindex:"0",class:"bk-color-picker-hue",onKeydown:i,onMousedown:function(e){e.stopPropagation(),e.preventDefault(),function(e){o.value.focus(),l(e),window.addEventListener("mousemove",l,{passive:!0}),window.addEventListener("mouseup",c)}(e)}},[(0,r.createVNode)("div",{class:"bk-color-picker-hue-pointer",style:a.value},[(0,r.createVNode)("div",{class:"bk-color-picker-hue-rectangle"},null)])])}}});var _={colorObj:e.PropTypes.object.isRequired,recommend:e.PropTypes.oneOfType([e.PropTypes.array.def((function(){return[]})),e.PropTypes.bool.def(!0)]).isRequired};const x=(0,r.defineComponent)({props:_,emits:["change","tab"],setup:function(t,n){var a=n.emit,i=(0,r.ref)(!1),c=(0,r.ref)(-1),l=(0,r.ref)(null);(0,r.watch)((function(){return t.colorObj}),(function(){c.value=-1,l.value=null}),{deep:!0});var s=(0,r.computed)((function(){return h(t.recommend)})),u=function(t,r){return(0,e.classes)({"bk-color-picker-empty":""===t,"bk-color-picker-recommend-selected-color":i.value&&c.value===r},"bk-color-picker-recommend-color")},f=function(e){if("Tab"===e.code)a("tab",e);else{var t=0,r=s.value.length-1;switch(e.code){case"ArrowLeft":e.preventDefault(),t=g(c.value-1,0,r);break;case"ArrowRight":e.preventDefault(),t=g(c.value+1,0,r);break;case"ArrowUp":e.preventDefault(),t=g(c.value-10,0,r);break;case"ArrowDown":e.preventDefault(),t=g(c.value+10,0,r);break;default:return}d(t)}},d=function(e){var t=s.value[e];a("change",t),(0,r.nextTick)((function(){c.value=e,l.value=t}))},h=function(e){return!0===e?["","#ff4500","#ff8c00","#ffd700","#90ee90","#ddffff","#00ced1","#3a84ff","#a933f5","#db7093","#000000","#494949","#9B9B9B","#ffffff"]:Array.isArray(e)?e.map((function(e){return o()(e).isValid()?e:""})):void 0};return function(){return(0,r.createVNode)("div",{tabindex:"0",class:"bk-color-picker-recommend",onFocus:function(){return i.value=!0},onBlur:function(){return i.value=!1},onKeydown:f},[s.value.map((function(e,t){return(0,r.createVNode)("div",{style:"background: ".concat(e||"#fff"),class:u(e,t),onClick:function(){return d(t)}},[c.value===t?(0,r.createVNode)("div",{class:"bk-color-picker-pointer"},[(0,r.createVNode)("div",{class:"bk-color-picker-circle"},null)]):void 0])}))])}}});var A={colorObj:e.PropTypes.object.isRequired};const S=(0,r.defineComponent)({props:A,emits:["change"],setup:function(e,t){var n=t.emit,o=(0,r.ref)(null),a=(0,r.computed)((function(){return{background:"hsl(".concat(e.colorObj.hsv.h,", 100%, 50%)")}})),i=(0,r.computed)((function(){return{top:"".concat(100*(1-e.colorObj.hsv.v),"%"),left:"".concat(100*e.colorObj.hsv.s,"%")}})),c=function e(){window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",e)},l=function(t){var r=o.value,n=r.clientWidth,a=r.clientHeight,i=e.colorObj.hsv.s*n,c=(1-e.colorObj.hsv.v)*a;switch(t.code){case"ArrowLeft":t.preventDefault(),i=g(i-10,0,n);break;case"ArrowRight":t.preventDefault(),i=g(i+10,0,n);break;case"ArrowUp":t.preventDefault(),c=g(c-10,0,a);break;case"ArrowDown":t.preventDefault(),c=g(c+10,0,a);break;default:return}s(null,i,c)},s=function(t,r,n){var a=o.value,i=a.clientWidth,c=a.clientHeight,l=(void 0!==r?r:u(t))/i,s=1-(void 0!==n?n:f(t))/c;d(e.colorObj.hsv.h,l,s,e.colorObj.hsv.a)},u=function(e){var t=o.value.getBoundingClientRect().left+window.pageXOffset,r=e.pageX||m(e,"PageX");return g(r-t,0,o.value.clientWidth)},f=function(e){var t=o.value.getBoundingClientRect().top+window.pageYOffset,r=e.pageY||m(e,"PageY");return g(r-t,0,o.value.clientHeight)},d=function(e,t,r,o){n("change",{h:e,s:t,v:r,a:o})};return function(){return(0,r.createVNode)("div",{ref:o,tabindex:"0",class:"bk-color-picker-saturation",style:a.value,onKeydown:l,onMousedown:function(e){e.stopPropagation(),function(e){o.value.focus(),s(e),window.addEventListener("mousemove",s,{passive:!0}),window.addEventListener("mouseup",c)}(e)}},[(0,r.createVNode)("div",{class:"bk-color-picker-saturation-white"},null),(0,r.createVNode)("div",{class:"bk-color-picker-saturation-black"},null),(0,r.createVNode)("div",{class:"bk-color-picker-pointer",style:i.value},[(0,r.createVNode)("div",{class:"bk-color-picker-circle"},null)])])}}});var N;!function(e){e.UNKNOWN="",e.SMALL="small",e.LARGE="large"}(N||(N={}));var V={modelValue:e.PropTypes.string.def(""),disabled:e.PropTypes.bool.def(!1),readonly:e.PropTypes.bool.def(!1),transfer:e.PropTypes.bool.def(!1),size:(0,a.toType)("colorPickSize",{}).def(N.UNKNOWN),showValue:e.PropTypes.bool.def(!0),recommend:e.PropTypes.oneOfType([e.PropTypes.array.def((function(){return[]})),e.PropTypes.bool.def(!0)]).def(!0),extCls:e.PropTypes.string.def(""),withValidate:e.PropTypes.bool.def(!0)},O=b("#FFFFFF");const j=(0,r.defineComponent)({name:"ColorPicker",directives:{clickoutside:i.clickoutside},props:V,emits:["update:modelValue","change"],setup:function(n,a){var i=a.emit,c=(0,e.useFormItem)(),l=(0,r.ref)(!1),u=(0,r.ref)(""),d=(0,r.reactive)(JSON.parse(JSON.stringify(O))),h=(0,r.ref)(null),p=(0,r.ref)(null),g=(0,r.ref)(null),m=(0,r.computed)((function(){var r;return(0,e.classes)((t(r={},"bk-color-picker-".concat(n.size),n.size),t(r,"bk-color-picker-show-dropdown",l.value),t(r,"bk-color-picker-show-value",n.showValue),t(r,"bk-color-picker-disabled",n.disabled||n.readonly),r),"bk-color-picker ".concat(n.extCls))})),y=(0,r.computed)((function(){return Boolean(!0===n.recommend||Array.isArray(n.recommend)&&n.recommend.length)}));(0,r.onBeforeMount)((function(){P({isCreated:!0})})),(0,r.watch)((function(){return n.modelValue}),(function(){var e;P(),n.withValidate&&(null===(e=null==c?void 0:c.validate)||void 0===e||e.call(c,"change"))}));var _=function(e){"Enter"===e.code||"NumpadEnter"===e.code?N():"Escape"===e.code&&R()},A=function(e){n.transfer&&_(e)},N=function(){n.disabled||n.readonly||(l.value?R():C())},V=function(e){y.value||(e.preventDefault(),p.value.$el.focus())},j=function(e){e.preventDefault(),p.value.$el.focus()},C=function(){var e;l.value=!0,null===(e=h.value)||void 0===e||e.updateDropdown(),setTimeout((function(){h.value.$el.querySelector(".bk-color-picker-input-hex .bk-color-picker-input-value").select()}),100)},R=function(){var e;l.value&&((0,r.nextTick)((function(){return g.value.focus()})),l.value=!1,null===(e=h.value)||void 0===e||e.destoryDropdown(),P())},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isCreated,r=void 0!==t&&t;if(""!==n.modelValue){var a=b(n.modelValue),c=1===a.rgba.a?a.hex:k(a.rgba);if(c!==u.value){var l=o()(n.modelValue).isValid();r?l?(u.value=c.toLowerCase()===n.modelValue.toLowerCase()?n.modelValue:c,Object.assign(d,a)):(Object.assign(d,O),i("change","")):l?c.toLowerCase()!==u.value.toLowerCase()&&(Object.assign(d,a),u.value=c):(u.value="",Object.assign(d,O))}}else""!==u.value&&(u.value="",Object.assign(d,O),i("update:modelValue",u.value))},F=function(e){if(""===e)return u.value="",Object.assign(d,O),i("update:modelValue",""),void i("change","");var t=b(e),r=1===t.rgba.a?t.hex:k(t.rgba);u.value=r,Object.assign(d,t),i("update:modelValue",u.value),i("change",r)},T=function(){l.value=!1};return function(){return(0,r.withDirectives)((0,r.createVNode)("div",{ref:g,tabindex:"0",class:m.value,onKeydown:_,onClick:N},[(0,r.createVNode)("div",{class:"bk-color-picker-color"},[(0,r.createVNode)("span",{class:"bk-color-picker-color-square ".concat(!u.value&&"bk-color-picker-empty"),style:"background: ".concat(u.value||"#FFF")},null)]),n.showValue?(0,r.createVNode)("div",{class:"bk-color-picker-text"},[(0,r.createVNode)("span",null,[u.value])]):void 0,(0,r.createVNode)("div",{class:"bk-color-picker-icon"},[(0,r.createVNode)(s.AngleUp,{class:"icon-angle-down"},null)]),(0,r.createVNode)(r.Transition,{name:"bk-fade-down-transition"},{default:function(){return[(0,r.withDirectives)((0,r.createVNode)(f,{ref:h,triggerRef:g.value},{default:function(){return[(0,r.createVNode)("div",{class:"bk-color-dropdown-container"},[(0,r.createVNode)("div",{class:"bk-color-picker-dropdown",onClick:function(e){e.stopPropagation()},onMousedown:function(e){e.stopPropagation()},onKeydown:A},[(0,r.createVNode)(S,{ref:p,colorObj:d,onChange:F},null),(0,r.createVNode)(w,{colorObj:d,onChange:F},null),(0,r.createVNode)(v,{colorObj:d,onTab:V,onChange:F},null),y.value?(0,r.createVNode)("div",{class:"bk-color-picker-recommend-container"},[(0,r.createVNode)(x,{colorObj:d,recommend:n.recommend,onTab:j,onChange:F},null)]):void 0])])]}}),[[r.vShow,l.value]])]}})]),[[(0,r.resolveDirective)("clickoutside"),T]])}}}),C=(0,e.withInstall)(j)})(),l})()));
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e){e.exports=JSON.parse('{"name":"loos-rb/restricted-block","title":"Restricted Block","category":"loos-rb-category","keywords":["restricted","user","role"],"supports":{"className":false,"html":false},"attributes":{"administrator":{"type":"boolean","default":true},"editor":{"type":"boolean","default":true},"author":{"type":"boolean","default":true},"contributor":{"type":"boolean","default":true},"subscriber":{"type":"boolean","default":true},"nonLoggedin":{"type":"boolean","default":false},"userID":{"type":"number","default":0}},"editorScript":"file:../../build/index.js","textdomain":"loos-restricted-block"}')},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),c=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([o]).join("\n")}var i,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var r=n(8),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1};r(o,c);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],l=t.base?c[0]+t.base:c[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var c=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function b(e,t,n){var r=n.css,o=n.media,c=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var c=h++;n=p||(p=s(t)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else n=s(t),r=b.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=l(e,t),s=0;s<n.length;s++){var u=a(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r)()(!1);o.push([e.i,'.block-editor-writing-flow [data-type="loos-rb/restricted-block"]{padding:8px}.block-editor-writing-flow [data-type="loos-rb/restricted-block"]:not(.is-selected){border:1px dashed #fde6b3}.loos-rb-controls .components-base-control{margin-bottom:8px}.loos-rb-controls.-off{opacity:0.5;pointer-events:none}\n',""]),t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),c=n(5),i=n(4),a=Object(r.createElement)("svg",{x:"0px",y:"0px",viewBox:"0 0 256 256"},Object(r.createElement)("path",{d:"M191.7,36h-49.3c-2.2,0-4,1.8-4,4v49.3L191.7,36z"}),Object(r.createElement)("path",{d:"M165.5,118.8H228c2.2,0,4-1.8,4-4V52.3L165.5,118.8z"}),Object(r.createElement)("path",{d:"M239.7,27.6L27.6,239.7c-1.6,1.6-4.1,1.6-5.7,0l-5.7-5.7c-1.6-1.6-1.6-4.1,0-5.7L228.4,16.3c1.6-1.6,4.1-1.6,5.7,0l5.7,5.7 C241.3,23.5,241.3,26,239.7,27.6z"}),Object(r.createElement)("path",{d:"M228,137.2h-80.9l-8.7,8.7V216c0,2.2,1.8,4,4,4H228c2.2,0,4-1.8,4-4v-74.8C232,139,230.2,137.2,228,137.2z"}),Object(r.createElement)("path",{d:"M90.5,137.2H28c-2.2,0-4,1.8-4,4v62.5L90.5,137.2z"}),Object(r.createElement)("path",{d:"M64.3,220h49.3c2.2,0,4-1.8,4-4v-49.3L64.3,220z"}),Object(r.createElement)("path",{d:"M28,118.8h80.9l8.7-8.7V40c0-2.2-1.8-4-4-4H28c-2.2,0-4,1.8-4,4v74.8C24,117,25.8,118.8,28,118.8z"})),l=n(2),s="loos-restricted-block",u=function(e){var t=e.attributes,n=e.setAttributes,c=t.administrator,i=t.editor,a=t.author,u=t.contributor,d=t.subscriber,f=t.nonLoggedin;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.PanelBody,{title:Object(o.__)("Display restrictions",s),initialOpen:!0},Object(r.createElement)("div",{className:"u-mb-10"},Object(o.__)("Who can see this content",s)),Object(r.createElement)(l.ToggleControl,{label:Object(o.__)("Non-logged-in User",s),checked:f,onChange:function(e){return n({nonLoggedin:e})}}),Object(r.createElement)("div",{className:f?"loos-rb-controls -off":"loos-rb-controls"},Object(r.createElement)(l.CheckboxControl,{label:Object(o.__)("administrator",s),checked:c,onChange:function(e){return n({administrator:e})}}),Object(r.createElement)(l.CheckboxControl,{label:Object(o.__)("editor",s),checked:i,onChange:function(e){return n({editor:e})}}),Object(r.createElement)(l.CheckboxControl,{label:Object(o.__)("author",s),checked:a,onChange:function(e){return n({author:e})}}),Object(r.createElement)(l.CheckboxControl,{label:Object(o.__)("contributor",s),checked:u,onChange:function(e){return n({contributor:e})}}),Object(r.createElement)(l.CheckboxControl,{label:Object(o.__)("subscriber",s),checked:d,onChange:function(e){return n({subscriber:e})}}))))},d=(n(7),n(3));Object(c.registerBlockType)("loos-rb/restricted-block",{title:Object(o.__)("Restricted Block","loos-restricted-block"),icon:{foreground:"#fac44f",src:a},keywords:d.keywords,category:d.category,supports:d.supports,attributes:d.attributes,edit:function(e){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.InspectorControls,null,Object(r.createElement)(u,e)),Object(r.createElement)(i.InnerBlocks,null))},save:function(){return Object(r.createElement)(i.InnerBlocks.Content,null)}})}]);
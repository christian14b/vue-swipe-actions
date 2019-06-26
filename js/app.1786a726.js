(function(e){function t(t){for(var n,r,a=t[0],l=t[1],c=t[2],u=0,v=[];u<a.length;u++)r=a[u],s[r]&&v.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,a=1;a<i.length;a++){var l=i[a];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},s={app:0},o=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-swipe-actions/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=l;o.push(["0e00","chunk-vendors"]),i()})({"036a":function(e,t,i){"use strict";var n=i("7b20"),s=i.n(n);s.a},"0e00":function(e,t,i){"use strict";i.r(t);var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("swipe-list",{ref:"list",staticClass:"card",attrs:{disabled:!e.enabled,items:e.mockSwipeList[e.page],"item-key":"id",revealed:e.revealed,"item-disabled":function(e){var t=e.disabled;return t}},on:{"update:revealed":function(t){e.revealed=t},closed:function(t){return e.setLastEvent("closed",t)},leftRevealed:function(t){return e.setLastEvent("leftRevealed",t)},rightRevealed:function(t){return e.setLastEvent("rightRevealed",t)}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item,s=t.index,o=(t.revealLeft,t.revealRight,t.close,t.revealed);return[i("div",{ref:"content",staticClass:"card-content",nativeOn:{click:function(t){return e.itemClick(n)}}},[i("h2",[e._v(e._s(n.title))]),i("p",[i("b",[e._v("id:")]),e._v(" "+e._s(n.id)+" "),i("b",[e._v("description:")]),e._v(" "+e._s(n.description)+" "),i("b",[e._v("revealed:")]),e._v(" "+e._s(o||"flase"))]),i("b",[e._v("index:")]),i("span",[e._v(" "+e._s(s))]),i("input",{directives:[{name:"model",rawName:"v-model",value:n.disabled,expression:"item.disabled"}],attrs:{id:s+"disabled",type:"checkbox"},domProps:{checked:Array.isArray(n.disabled)?e._i(n.disabled,null)>-1:n.disabled},on:{change:function(t){var i=n.disabled,s=t.target,o=!!s.checked;if(Array.isArray(i)){var r=null,a=e._i(i,r);s.checked?a<0&&e.$set(n,"disabled",i.concat([r])):a>-1&&e.$set(n,"disabled",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(n,"disabled",o)}}}),i("label",{attrs:{for:s+"disabled"}},[e._v("Disabled")])])]}},{key:"left",fn:function(t){var n=t.item,s=t.close;t.index;return[i("div",{staticClass:"swipeout-action red",attrs:{title:"remove"},on:{click:function(t){return e.remove(n)}}},[i("i",{staticClass:"fa fa-trash"})]),i("div",{staticClass:"swipeout-action purple",on:{click:s}},[i("i",{staticClass:"fa fa-close"})])]}},{key:"right",fn:function(e){e.item;return[i("div",{staticClass:"swipeout-action blue"},[i("i",{staticClass:"fa fa-heart"})]),i("div",{staticClass:"swipeout-action green"},[i("i",{staticClass:"fa fa-heart"})])]}},{key:"empty",fn:function(){return[i("div",[e._v("\n\t\t\t\tlist is empty ( filtered or just empty )\n\t\t\t")])]},proxy:!0}])}),i("div",{staticClass:"toolbar"},[i("div",{staticClass:"toolbar-section"},[i("p",[i("button",{on:{click:e.revealFirstLeft}},[e._v("\n\t\t\t\t\treveal 1st left\n\t\t\t\t")]),i("button",{on:{click:e.revealFirstRight}},[e._v("\n\t\t\t\t\treveal 1st right\n\t\t\t\t")]),i("button",{on:{click:e.closeFirst}},[e._v("\n\t\t\t\t\tclose 1st\n\t\t\t\t")]),i("button",{on:{click:e.closeAll}},[e._v("\n\t\t\t\t\tclose all\n\t\t\t\t")]),i("button",{on:{click:function(t){e.page=Math.max(e.page-1,0)}}},[e._v("\n\t\t\t\t\tprev\n\t\t\t\t")]),i("button",{on:{click:function(t){e.page=Math.min(e.page+1,1)}}},[e._v("\n\t\t\t\t\tnext\n\t\t\t\t")])])]),i("div",{staticClass:"toolbar-section--center"}),i("div",{staticClass:"toolbar-section"},[i("small",[e._v("revealed: "+e._s(Object.entries(e.revealed).map(function(e){var t=e[0],i=e[1];return t+": "+i}).join(", ")))])]),i("div",{staticClass:"toolbar-section--center"}),i("div",{staticClass:"toolbar-section"},[i("small",[e._v("last event: "),e.lastEventDescription?[e._v("["),i("b",[e._v(e._s(e.lastEventDescription.name))]),e._v("] index: "+e._s(e.lastEventDescription.index)+" id: "+e._s(e.lastEventDescription.id))]:i("span",[e._v("none")])],2)])]),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("small",[i("i",[e._v("Press and hold [shift] to select text")])])])}],r={};function a(e){return 0===e.button}function l(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]&&(e=e.changedTouches[0]),{top:e.clientY,left:e.clientX}}Object.defineProperty(r,"passive",{configurable:!0,get:function(){var e;try{var t=Object.defineProperty({},"passive",{get:function(){e={passive:!0}}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch(i){}return r.passive=e,e},set:function(e){Object.defineProperty(this,"passive",{value:e})}});function c(e,t,i){var n=t.target;i.touchTargetObserver=new MutationObserver(function(){!1===e.contains(n)&&i.end(t)}),i.touchTargetObserver.observe(e,{childList:!0,subtree:!0})}function d(e){void 0!==e.touchTargetObserver&&(e.touchTargetObserver.disconnect(),e.touchTargetObserver=void 0)}function u(e){var t=!0!==e.horizontal&&!0!==e.vertical,i={all:!0===t||!0===e.horizontal&&!0===e.vertical};return!0!==e.horizontal&&!0!==t||(i.horizontal=!0),!0!==e.vertical&&!0!==t||(i.vertical=!0),i}function v(e,t,i){var n,s=l(e),o=s.left-t.event.x,r=s.top-t.event.y,a=Math.abs(o),c=Math.abs(r);return n=t.direction.horizontal&&!t.direction.vertical?o<0?"left":"right":!t.direction.horizontal&&t.direction.vertical?r<0?"up":"down":a>=c?o<0?"left":"right":r<0?"up":"down",{evt:e,position:s,direction:n,isFirst:t.event.isFirst,isFinal:!0===i,isMouse:t.event.mouse,duration:(new Date).getTime()-t.event.time,distance:{x:a,y:c},offset:{x:o,y:r},delta:{x:s.left-t.event.lastX,y:s.top-t.event.lastY}}}function f(e,t){return!(!e.direction.horizontal||!e.direction.vertical)||(e.direction.horizontal&&!e.direction.vertical?Math.abs(t.delta.x)>0:!e.direction.horizontal&&e.direction.vertical?Math.abs(t.delta.y)>0:void 0)}var h={name:"touch-pan",bind:function(e,t){var i=!0===t.modifiers.mouse,n=!0!==t.modifiers.mouseMightPrevent&&!0!==t.modifiers.mousePrevent,s=void 0===r.passive||{passive:n,capture:!0},o=!0!==t.modifiers.mightPrevent&&!0!==t.modifiers.prevent,h=o?r.passive:null;function m(e,n){i&&n?(t.modifiers.mouseStop&&e.stopPropagation(),t.modifiers.mousePrevent&&e.preventDefault()):(t.modifiers.stop&&e.stopPropagation(),t.modifiers.prevent&&e.preventDefault())}var p={handler:t.value,direction:u(t.modifiers),mouseStart:function(e){a(e)&&(document.addEventListener("mousemove",p.move,s),document.addEventListener("mouseup",p.mouseEnd,s),p.start(e,!0))},mouseEnd:function(e){document.removeEventListener("mousemove",p.move,s),document.removeEventListener("mouseup",p.mouseEnd,s),p.end(e)},start:function(t,i){d(p),!0!==i&&c(e,t,p);var n=l(t);p.event={x:n.left,y:n.top,time:(new Date).getTime(),mouse:!0===i,detected:!1,abort:!1,isFirst:!0,isFinal:!1,lastX:n.left,lastY:n.top}},move:function(e){if(!0!==p.event.abort)if(!0!==p.event.detected){var i=l(e),n=Math.abs(i.left-p.event.x),s=Math.abs(i.top-p.event.y);n!==s&&(p.event.detected=!0,!1!==p.direction.all||!1!==p.event.mouse&&!0===t.modifiers.mouseAllDir||(p.event.abort=p.direction.vertical?n>s:n<s),!0!==p.event.abort&&(document.documentElement.style.cursor="grabbing",document.body.classList.add("swipeout-no-pointer-events"),document.body.classList.add("swipeout-non-selectable")),p.move(e))}else{m(e,p.event.mouse);var o=v(e,p,!1);f(p,o)&&(p.handler(o),p.event.lastX=o.position.left,p.event.lastY=o.position.top,p.event.isFirst=!1)}},end:function(e){!0!==p.event.mouse&&d(p),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable"),!0!==p.event.abort&&!0===p.event.detected&&!0!==p.event.isFirst&&(m(e,p.event.mouse),p.handler(v(e,p,!0)))}};e.__qtouchpan&&(e.__qtouchpan_old=e.__qtouchpan),e.__qtouchpan=p,!0===i&&e.addEventListener("mousedown",p.mouseStart,s),e.addEventListener("touchstart",p.start,h),e.addEventListener("touchmove",p.move,h),e.addEventListener("touchcancel",p.end,h),e.addEventListener("touchend",p.end,h)},update:function(e,t){var i=t.oldValue,n=t.value,s=t.modifiers,o=e.__qtouchpan;i!==n&&(o.handler=n),s.horizontal===o.direction.horizontal&&s.vertical===o.direction.vertical||(o.direction=u(s))},unbind:function(e,t){var i=e.__qtouchpan_old||e.__qtouchpan;if(void 0!==i){d(i),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable");var n=!0===t.modifiers.mouse,s=!0!==t.modifiers.mouseMightPrevent&&!0!==t.modifiers.mousePrevent,o=void 0===r.passive||{passive:s,capture:!0},a=!0!==t.modifiers.mightPrevent&&!0!==t.modifiers.prevent,l=a?r.passive:null;!0===n&&(e.removeEventListener("mousedown",i.mouseStart,o),document.removeEventListener("mousemove",i.move,o),document.removeEventListener("mouseup",i.mouseEnd,o)),e.removeEventListener("touchstart",i.start,l),e.removeEventListener("touchmove",i.move,l),e.removeEventListener("touchcancel",i.end,l),e.removeEventListener("touchend",i.end,l),delete e[e.__qtouchpan_old?"__qtouchpan_old":"__qtouchpan"]}}};function m(e){return 0===e?"":"translate3d(".concat(e,"px, 0, 0)")}function p(e){return e?e.clientWidth:0}var b={name:"SwipeOut",directives:{touchPan:h},props:{threshold:{type:Number,default:45},revealed:{type:[String,Boolean]},disabled:{type:Boolean,default:!1}},watch:{revealed:function(e){this.innerRevealed!==e&&this._reveal(e,!0)}},data:function(){return{innerRevealed:this.revealed||!1}},methods:{closeActions:function(){this.close()},close:function(){this._isActive||this._reveal(!1,!0)},revealLeft:function(){!this._isActive&&this.$refs.left&&this._reveal("left",!0)},revealRight:function(){!this._isActive&&this.$refs.right&&this._reveal("right",!0)},_distanceSwiped:function(){var e=this.$refs.content.getBoundingClientRect(),t=this.$el.getBoundingClientRect();return e.left-t.left-this.$el.clientLeft},_onPan:function(e){return this.disabled?null:e.isFirst?this._startListener(e):this._isActive?e.isFinal?this._stopListener(e):this._swipeListener(e):null},_startListener:function(e){var t=e.distance;this.$el.classList.add("swipeout--no-transition"),t.y<=5&&(this._leftActionsWidth=this.$refs.left?this.$refs.left.clientWidth:0,this._rightActionsWidth=this.$refs.right?this.$refs.right.clientWidth:0,this._startLeft=this._distanceSwiped(),this._isActive=!0,this.$emit("active",!0),clearTimeout(this._timer))},_swipeListener:function(e){var t=e.offset,i=t.x+this._startLeft;return!this.$scopedSlots.left&&i>0?this._animateSlide(0):!this.$scopedSlots.right&&i<0?this._animateSlide(0):this._animateSlide(t.x+this._startLeft)},_stopListener:function(e){var t=e.offset,i=e.distance;this.$el.classList.remove("swipeout--no-transition"),this._isActive=!1,this.$emit("active",!1);var n=this._startLeft+t.x;return 0===this._startLeft&&Math.abs(n)<=this.threshold||i.x>=this.threshold&&(this._startLeft>0&&i.x<this._leftActionsWidth||this._startLeft<0&&i.x<this._rightActionsWidth)?this._reveal(!1):this._reveal(n>0?"left":"right")},_reveal:function(e,t){if(!this._isActive){if(this.innerRevealed=e,this.$emit("update:revealed",e),!e)return this._animateSlide(0),void this.$emit("closed");if("left"===e)return this._leftActionsWidth=t?p(this.$refs.left):this._leftActionsWidth,this._animateSlide(this._leftActionsWidth),this.$emit("revealed",{side:"left",close:this.closeActions}),void this.$emit("leftRevealed",{close:this.closeActions});this._rightActionsWidth=t?p(this.$refs.right):this._rightActionsWidth,this._animateSlide(-this._rightActionsWidth),this.$emit("revealed",{side:"right",close:this.closeActions}),this.$emit("rightRevealed",{close:this.closeActions})}},_shiftLeftActions:function(e){if(this.$scopedSlots.left){e<0&&(e=0);for(var t=this.$refs.left,i=this._leftActionsWidth,n=1-Math.min(e/i,1),s=Math.min(e,i),o=t.children,r=o.length,a=0;a<r;a++){var l=o[a],c=i-l.offsetLeft-l.offsetWidth;l.style.transform=m(s+c*n),r>1&&(l.style.zIndex="".concat(r-a))}}},_shiftRightActions:function(e){if(this.$scopedSlots.right){e>0&&(e=0);for(var t=this.$refs.right,i=this._rightActionsWidth,n=1+Math.max(e/i,-1),s=Math.max(e,-i),o=t.children,r=0;r<o.length;r++){var a=o[r];a.style.transform=m(s-a.offsetLeft*n)}}},_animateSlide:function(e){var t=this;cancelAnimationFrame(this._frame),this._frame=requestAnimationFrame(function(){t.$refs.content.style.transform=m(e),t._shiftLeftActions(e),t._shiftRightActions(e)})}},render:function(e){var t=[],i=this.$scopedSlots,n=i.left,s=i.right,o=i.default;return n&&t.push(e("div",{ref:"left",staticClass:"swipeout-left"},n({close:this.closeActions}))),s&&t.push(e("div",{ref:"right",staticClass:"swipeout-right"},s({close:this.closeActions}))),t.push(e("div",{ref:"content",staticClass:"swipeout-content",directives:this.disabled||!n&&!s?null:[{name:"touch-pan",value:this._onPan,modifiers:{horizontal:!0,mouse:!0,prevent:!0,mousePrevent:!0}}]},o?o({revealLeft:this.revealLeft,revealRight:this.revealRight,close:this.closeActions,revealed:this.innerRevealed}):null)),e("div",{staticClass:"swipeout",class:{"swipeout--disabled":this.disabled}},t)},beforeDestroy:function(){clearTimeout(this._timer),cancelAnimationFrame(this._frame)}};function _(e){return _="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){if(null==e)return{};var i,n,s=g(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}function g(e,t){if(null==e)return{};var i,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}function w(e){var t=L(e,"string");return"symbol"===_(t)?t:String(t)}function L(e,t){if("object"!==_(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function S(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){$(e,t,i[t])})}return e}function $(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var A={name:"SwipeList",props:{items:{type:Array,required:!0},itemKey:{type:String},transitionKey:{type:String},threshold:{type:Number,default:45},revealed:{type:Object},disabled:{type:Boolean,default:!1},itemDisabled:{type:Function,default:function(){return!1}}},data:function(){return{innerRevealed:this.revealed||{},rev:this.items.map(function(){return null})}},watch:{revealed:function(e){this.innerRevealed=e},items:function(){this._emitRevealed({})}},methods:{revealRight:function(e){this.$refs.items[e]&&this.$refs.items[e].revealRight()},revealLeft:function(e){this.$refs.items[e]&&this.$refs.items[e].revealLeft()},close:function(e){if(this.$refs.items){if(void 0===e)return this.$refs.items.forEach(function(e){return e.close()});if(this.$refs.items[e])return this.$refs.items[e].close()}},isRevealed:function(e){return this.innerRevealed[e]||!1},closeActions:function(e){this.close(e)},_onReveal:function(e,t,i){this.$emit("revealed",{index:t,item:e,side:i.side,close:i.close}),this._emitRevealed(S({},this.innerRevealed,$({},t,i.side)))},_onClose:function(e,t){this.$emit("closed",{index:t,item:e});var i=this.innerRevealed,n=(i[t],y(i,[t].map(w)));this._emitRevealed(n)},_getItemKey:function(e,t){var i=this.itemKey||this.transitionKey;return void 0!==i?e[this.itemKey||this.transitionKey]:t},_emitRevealed:function(e){void 0===this.revealed?this.innerRevealed=e:this.$emit("update:revealed",e)},__renderItem:function(e,t,i){var n=this,s=this.$scopedSlots,o=s.left,r=s.right,a=s.default,l={};return o&&(l.left=function(e){var n=e.close;return o({item:t,close:n,index:i})}),r&&(l.right=function(e){var n=e.close;return r({item:t,close:n,index:i})}),l.default=function(e){var n=e.close,s=e.revealLeft,o=e.revealRight,r=e.revealed;return a({item:t,index:i,close:n,revealed:r,revealLeft:s,revealRight:o})},e(b,{key:i,ref:"items",refInFor:!0,staticClass:"swipeout-list-item",props:{disabled:this.disabled||this.itemDisabled(t),threshold:this.threshold,revealed:this.innerRevealed[i]},on:{revealed:function(e){return n._onReveal(t,i,e)},leftRevealed:function(e){return n.$emit("leftRevealed",{index:i,item:t,close:e.close})},rightRevealed:function(e){return n.$emit("rightRevealed",{index:i,item:t,close:e.close})},closed:function(e){return n._onClose(t,i,e)},active:function(e){return n.$emit("active",e)}},scopedSlots:l})}},render:function(e){var t=this;return e("div",{staticClass:"swipeout-list",class:{"swipeout--disabled":this.disabled}},this.items.map(function(i,n){return t.__renderItem(e,i,n)}))}},x=(i("c778"),{name:"App",components:{SwipeOut:b,SwipeList:A},data:function(){return{enabled:!0,page:0,revealed:{},lastEventDescription:"",mockSwipeList:[[{id:"a",title:"Some title",description:"some description",disabled:!1},{id:"b",title:"Some title",description:"some description",disabled:!1},{id:"c",title:"Some title",description:"some description",disabled:!1}],[{id:"d",title:"Some title",description:"some description",disabled:!1},{id:"e",title:"Some title",description:"some description",disabled:!1},{id:"f",title:"Some title",description:"some description",disabled:!1}]]}},mounted:function(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)},methods:{dd:function(e){console.log(e.target)},revealFirstRight:function(){this.$refs.list.revealRight(0)},revealFirstLeft:function(){this.$refs.list.revealLeft(0)},closeFirst:function(){this.$refs.list.closeActions(0)},closeAll:function(){this.$refs.list.closeActions()},remove:function(e){this.$set(this.mockSwipeList,this.page,this.mockSwipeList[this.page].filter(function(t){return t!==e}))},setLastEvent:function(e,t){var i=t.item,n=t.index;this.lastEventDescription={name:e,index:n,id:i.id}},itemClick:function(e){console.log(e,"item click")},fbClick:function(e){console.log(e,"First Button Click")},sbClick:function(e){console.log(e,"Second Button Click")},onKeyDown:function(e){16===e.keyCode&&(this.enabled=!1)},onKeyUp:function(e){16===e.keyCode&&(this.enabled=!0)}}}),E=x,R=(i("036a"),i("2877")),k=Object(R["a"])(E,s,o,!1,null,null,null),O=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(O)}}).$mount("#app")},"7b20":function(e,t,i){},c778:function(e,t,i){}});
//# sourceMappingURL=app.1786a726.js.map
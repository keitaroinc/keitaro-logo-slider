(window.webpackJsonp_keitaro_logo_slider=window.webpackJsonp_keitaro_logo_slider||[]).push([[1],{12:function(e,t,n){}}]),function(e){function t(t){for(var r,s,l=t[0],a=t[1],c=t[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={0:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp_keitaro_logo_slider=window.webpackJsonp_keitaro_logo_slider||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=a;i.push([22,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){!function(e){"use strict";const t=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},n=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0},r=e=>{e.dispatchEvent(new Event("transitionend"))},o=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),i=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?i(e.parentNode):null},s=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,l=[],a=e=>{"loading"===document.readyState?(l.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of l)e()}),l.push(e)):e()},c=e=>{"function"==typeof e&&e()};e.defineJQueryPlugin=e=>{a(()=>{const t=s();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},e.execute=c,e.executeAfterTransition=(e,t,o=!0)=>{if(!o)return void c(e);const i=n(t)+5;let s=!1;const l=({target:n})=>{n===t&&(s=!0,t.removeEventListener("transitionend",l),c(e))};t.addEventListener("transitionend",l),setTimeout(()=>{s||r(t)},i)},e.findShadowRoot=i,e.getElement=e=>o(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,e.getElementFromSelector=e=>{const n=t(e);return n?document.querySelector(n):null},e.getNextActiveElement=(e,t,n,r)=>{const o=e.length;let i=e.indexOf(t);return-1===i?!n&&r?e[o-1]:e[0]:(i+=n?1:-1,r&&(i=(i+o)%o),e[Math.max(0,Math.min(i,o-1))])},e.getSelectorFromElement=e=>{const n=t(e);return n&&document.querySelector(n)?n:null},e.getTransitionDurationFromElement=n,e.getUID=e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e},e.getjQuery=s,e.isDisabled=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),e.isElement=o,e.isRTL=()=>"rtl"===document.documentElement.dir,e.isVisible=e=>{if(!o(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},e.noop=()=>{},e.onDOMContentLoaded=a,e.reflow=e=>{e.offsetHeight},e.toType=e=>null==e?""+e:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),e.triggerTransitionEnd=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}(t)},function(e,t,n){e.exports=function(e){"use strict";const t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={};let i=1;const s={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function a(e,t){return t&&`${t}::${i++}`||e.uidEvent||i++}function c(e){const t=a(e);return e.uidEvent=t,o[t]=o[t]||{},o[t]}function u(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function d(e,t,n){const r="string"==typeof t,o=r?n:t||n;let i=m(e);return l.has(i)||(i=e),[r,o,i]}function f(e,n,r,o,i){if("string"!=typeof n||!e)return;let[l,f,p]=d(n,r,o);n in s&&(f=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(f));const h=c(e),m=h[p]||(h[p]={}),_=u(m,f,l?r:null);if(_)return void(_.oneOff=_.oneOff&&i);const v=a(f,n.replace(t,"")),y=l?function(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(const l of i)if(l===s)return b(o,{delegateTarget:s}),r.oneOff&&g.off(e,o.type,t,n),n.apply(s,[o])}}(e,r,f):function(e,t){return function n(r){return b(r,{delegateTarget:e}),n.oneOff&&g.off(e,r.type,t),t.apply(e,[r])}}(e,f);y.delegationSelector=l?r:null,y.callable=f,y.oneOff=i,y.uidEvent=v,m[v]=y,e.addEventListener(p,y,l)}function p(e,t,n,r,o){const i=u(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function h(e,t,n,r){const o=t[n]||{};for(const i of Object.keys(o))if(i.includes(r)){const r=o[i];p(e,t,n,r.callable,r.delegationSelector)}}function m(e){return e=e.replace(n,""),s[e]||e}const g={on(e,t,n,r){f(e,t,n,r,!1)},one(e,t,n,r){f(e,t,n,r,!0)},off(e,t,n,o){if("string"!=typeof t||!e)return;const[i,s,l]=d(t,n,o),a=l!==t,u=c(e),f=u[l]||{},m=t.startsWith(".");if(void 0===s){if(m)for(const n of Object.keys(u))h(e,u,n,t.slice(1));for(const n of Object.keys(f)){const o=n.replace(r,"");if(!a||t.includes(o)){const t=f[n];p(e,u,l,t.callable,t.delegationSelector)}}}else{if(!Object.keys(f).length)return;p(e,u,l,s,i?n:null)}},trigger(t,n,r){if("string"!=typeof n||!t)return null;const o=e.getjQuery();let i=null,s=!0,l=!0,a=!1;n!==m(n)&&o&&(i=o.Event(n,r),o(t).trigger(i),s=!i.isPropagationStopped(),l=!i.isImmediatePropagationStopped(),a=i.isDefaultPrevented());let c=new Event(n,{bubbles:s,cancelable:!0});return c=b(c,r),a&&c.preventDefault(),l&&t.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function b(e,t){for(const[n,r]of Object.entries(t||{}))try{e[n]=r}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}return g}(n(4))},function(e,t,n){e.exports=function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}return{setDataAttribute(e,n,r){e.setAttribute("data-bs-"+t(n),r)},removeDataAttribute(e,n){e.removeAttribute("data-bs-"+t(n))},getDataAttributes(t){if(!t)return{};const n={},r=Object.keys(t.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(const o of r){let r=o.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),n[r]=e(t.dataset[o])}return n},getDataAttribute:(n,r)=>e(n.getAttribute("data-bs-"+t(r)))}}()},function(e,t,n){e.exports=function(e,t){"use strict";const n=(e=>e&&"object"==typeof e&&"default"in e?e:{default:e})(t);return class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(t,r){const o=e.isElement(r)?n.default.getDataAttribute(r,"config"):{};return{...this.constructor.Default,..."object"==typeof o?o:{},...e.isElement(r)?n.default.getDataAttributes(r):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const r of Object.keys(n)){const o=n[r],i=t[r],s=e.isElement(i)?"element":e.toType(i);if(!new RegExp(o).test(s))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${o}".`)}}}}(n(4),n(6))},function(e,t,n){},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wp.blocks},function(e,t,n){var r=n(18),o=n(19),i=n(20),s=n(21);e.exports=function(e){return r(e)||o(e)||i(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},,function(e,t,n){e.exports=function(e,t,n,r,o,i){"use strict";const s=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},l=s(t),a=s(n),c=s(r),u=s(o),d=s(i),f={ArrowLeft:"right",ArrowRight:"left"},p={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},h={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class m extends d.default{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=c.default.findOne(".carousel-indicators",this._element),this._addEventListeners(),"carousel"===this._config.ride&&this.cycle()}static get Default(){return p}static get DefaultType(){return h}static get NAME(){return"carousel"}next(){this._slide("next")}nextWhenVisible(){!document.hidden&&e.isVisible(this._element)&&this.next()}prev(){this._slide("prev")}pause(){this._isSliding&&e.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?l.default.one(this._element,"slid.bs.carousel",()=>this.cycle()):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void l.default.one(this._element,"slid.bs.carousel",()=>this.to(e));const n=this._getItemIndex(this._getActive());if(n===e)return;const r=e>n?"next":"prev";this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&l.default.on(this._element,"keydown.bs.carousel",e=>this._keydown(e)),"hover"===this._config.pause&&(l.default.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),l.default.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&u.default.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of c.default.find(".carousel-item img",this._element))l.default.on(e,"dragstart.bs.carousel",e=>e.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder("left")),rightCallback:()=>this._slide(this._directionToOrder("right")),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new u.default(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=f[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=c.default.findOne(".active",this._indicatorsElement);t.classList.remove("active"),t.removeAttribute("aria-current");const n=c.default.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add("active"),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const r=this._getActive(),o="next"===t,i=n||e.getNextActiveElement(this._getItems(),r,o,this._config.wrap);if(i===r)return;const s=this._getItemIndex(i),a=e=>l.default.trigger(this._element,e,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:s});if(a("slide.bs.carousel").defaultPrevented)return;if(!r||!i)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const u=o?"carousel-item-start":"carousel-item-end",d=o?"carousel-item-next":"carousel-item-prev";i.classList.add(d),e.reflow(i),r.classList.add(u),i.classList.add(u),this._queueCallback(()=>{i.classList.remove(u,d),i.classList.add("active"),r.classList.remove("active",d,u),this._isSliding=!1,a("slid.bs.carousel")},r,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return c.default.findOne(".active.carousel-item",this._element)}_getItems(){return c.default.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return e.isRTL()?"left"===t?"prev":"next":"left"===t?"next":"prev"}_orderToDirection(t){return e.isRTL()?"prev"===t?"left":"right":"prev"===t?"right":"left"}static jQueryInterface(e){return this.each((function(){const t=m.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}return l.default.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const n=e.getElementFromSelector(this);if(!n||!n.classList.contains("carousel"))return;t.preventDefault();const r=m.getOrCreateInstance(n),o=this.getAttribute("data-bs-slide-to");return o?(r.to(o),void r._maybeEnableCycle()):"next"===a.default.getDataAttribute(this,"slide")?(r.next(),void r._maybeEnableCycle()):(r.prev(),void r._maybeEnableCycle())})),l.default.on(window,"load.bs.carousel.data-api",()=>{const e=c.default.find('[data-bs-ride="carousel"]');for(const t of e)m.getOrCreateInstance(t)}),e.defineJQueryPlugin(m),m}(n(4),n(5),n(6),n(14),n(15),n(16))},function(e,t,n){e.exports=function(e){"use strict";return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(",");return this.find(n,t).filter(t=>!e.isDisabled(t)&&e.isVisible(t))}}}(n(4))},function(e,t,n){e.exports=function(e,t,n){"use strict";const r=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},o=r(e),i=r(t),s={endCallback:null,leftCallback:null,rightCallback:null},l={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class a extends o.default{constructor(e,t){super(),this._element=e,e&&a.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return s}static get DefaultType(){return l}static get NAME(){return"swipe"}dispose(){i.default.off(this._element,".bs.swipe")}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),n.execute(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const t=e/this._deltaX;this._deltaX=0,t&&n.execute(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(i.default.on(this._element,"pointerdown.bs.swipe",e=>this._start(e)),i.default.on(this._element,"pointerup.bs.swipe",e=>this._end(e)),this._element.classList.add("pointer-event")):(i.default.on(this._element,"touchstart.bs.swipe",e=>this._start(e)),i.default.on(this._element,"touchmove.bs.swipe",e=>this._move(e)),i.default.on(this._element,"touchend.bs.swipe",e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return a}(n(7),n(5),n(4))},function(e,t,n){e.exports=function(e,t,n,r){"use strict";const o=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},i=o(e),s=o(n),l=o(r);class a extends l.default{constructor(e,n){super(),(e=t.getElement(e))&&(this._element=e,this._config=this._getConfig(n),i.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.default.remove(this._element,this.constructor.DATA_KEY),s.default.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,r=!0){t.executeAfterTransition(e,n,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return i.default.get(t.getElement(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}static eventName(e){return`${e}${this.EVENT_KEY}`}}return a}(n(17),n(4),n(5),n(7))},function(e,t,n){e.exports=function(){"use strict";const e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}}}()},function(e,t,n){var r=n(9);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(9);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n.r(t);var r=n(10),o=n(1),i=(n(12),n(13),n(0)),s=n(2),l=n(3),a=(n(8),n(11)),c=n.n(a);function u(e){var t=e.attributes;return Object(i.createElement)("div",{id:"logosControls-".concat(t.sliderId),className:"carousel ".concat(t.sliderEffect),style:{background:t.sliderBackground},"data-bs-ride":"carousel"},Object(i.createElement)("div",{className:"carousel-inner"},t.logos?function(e,t){var n=Math.max(e.length/t),r=[];if(e.length<=t)return r.push(e),r;var o=[];o.push.apply(o,c()(e));for(var i=0;i<n;i++)r.push(o.splice(0,t));return r}(t.logos,t.numberOfImagesPerSlide).map((function(e,n){return Object(i.createElement)("div",{key:n,className:"carousel-item ".concat(n<1?"active":"")},e.map((function(e,n){return Object(i.createElement)("img",{key:n,className:"logo",id:e.id,src:e.url,alt:e.alt,style:{maxWidth:"".concat(t.widthOfImages).concat(t.typeOfProperties),maxHeight:"".concat(t.heightOfImages).concat(t.typeOfProperties)}})})))})):Object(i.createElement)("p",null,"Upload images")),Object(i.createElement)("button",{className:"carousel-control-prev","data-bs-target":"#logosControls-".concat(t.sliderId),"data-bs-slide":"prev",type:"button"},Object(i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:30,height:30,fill:t?t.arrowColor:"#ffff"},Object(i.createElement)("path",{d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})),Object(i.createElement)("span",{className:"visually-hidden"},Object(o.__)("Previous","keitaro-logo-slider"))),Object(i.createElement)("button",{className:"carousel-control-next","data-bs-target":"#logosControls-".concat(t.sliderId),"data-bs-slide":"next",type:"button"},Object(i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:t?t.arrowColor:"#ffff",width:30,height:30},Object(i.createElement)("path",{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})),Object(i.createElement)("span",{className:"visually-hidden"},Object(o.__)("Next","keitaro-logo-slider"))))}var d=["image"];Object(r.registerBlockType)("keitaro/logo-slider",{title:Object(o.__)("Logo Slider by Keitaro","keitaro-logo-slider"),description:Object(o.__)("Easy to use logo slider for your WordPress website.","keitaro-logo-slider"),category:"media",icon:"image-flip-horizontal",supports:{align:!0},attributes:{title:{type:"string",source:"html",selector:".title",default:Object(o.__)("Trusted by","keitaro-logo-slider")},titleStatus:{type:"string",default:"on"},titleMarginTop:{type:"number",default:"-4"},titleMarginBottom:{type:"number",default:2.5},numberOfImagesPerSlide:{type:"number",default:3,minimum:1},widthOfImages:{type:"number",default:50,minimum:1},heightOfImages:{type:"number",default:50,minimum:1},typeOfProperties:{type:"string",default:"px"},sliderId:{type:"string",default:null},sliderBackground:{type:"string",default:"#ffff"},arrowColor:{type:"string",default:"#ffff"},sliderEffect:{type:"string",default:"slide"},logos:{type:"array",source:"query",selector:"img",query:{id:{type:"string",source:"attribute",attribute:"id"},url:{type:"string",source:"attribute",attribute:"src"},alt:{type:"string",source:"attribute",attribute:"alt"}}}},edit:function(e){var t=e.className,n=e.attributes,r=e.setAttributes;React.useEffect((function(){if(null===n.sliderId){var e=(Math.random()+1).toString(36).substring(7);r({sliderId:e})}}));var a=Object(i.createElement)(u,{attributes:n});return Object(i.createElement)("div",{className:t},Object(i.createElement)(l.InspectorControls,null,Object(i.createElement)(s.PanelBody,{title:Object(o.__)("Slide options")},Object(i.createElement)(s.RadioControl,{label:"Slider Title",selected:n.titleStatus,onChange:function(e){return r({titleStatus:e})},options:[{label:"On",value:"on"},{label:"Off",value:"off"}]}),Object(i.createElement)(s.RangeControl,{label:"Margin bottom on slider title",value:parseInt(n.titleMarginTop),onChange:function(e){return r({titleMarginTop:e})},min:-100,max:100}),Object(i.createElement)(s.RangeControl,{label:"Margin top on slider title",value:parseInt(n.titleMarginBottom),onChange:function(e){return r({titleMarginBottom:e})},min:-100,max:100}),Object(i.createElement)(s.RangeControl,{label:"Number of logos per slide",value:parseInt(n.numberOfImagesPerSlide),onChange:function(e){return r({numberOfImagesPerSlide:e})},min:1,max:n.logos?n.logos.length:10}),Object(i.createElement)(s.RangeControl,{label:"Maximum Logo Width",value:parseInt(n.widthOfImages),onChange:function(e){return r({widthOfImages:e})},min:1,max:200}),Object(i.createElement)(s.RangeControl,{label:"Maximum Logo Height",value:parseInt(n.heightOfImages),onChange:function(e){return r({heightOfImages:e})},min:1,max:200}),Object(i.createElement)(s.SelectControl,{label:"Slider Effect",value:n.sliderEffect,options:[{label:"Slide",value:"slide"},{label:"Fade",value:"carousel-fade"}],onChange:function(e){return r({sliderEffect:e})},__nextHasNoMarginBottom:!0}),Object(i.createElement)(s.RadioControl,{label:"Image Size Unit",help:"The unit that's going to be used while calculating the image size",selected:n.typeOfProperties,onChange:function(e){return r({typeOfProperties:e})},options:[{label:"Pixels (px)",value:"px"},{label:"Font size of the parent element (em)",value:"em"},{label:"Font size of the root element (rem)",value:"rem"}]}),Object(i.createElement)("label",{className:"label-background"},"Slider Background"),Object(i.createElement)(s.ColorPicker,{color:n.sliderBackground,onChange:function(e){return r({sliderBackground:e})},enableAlpha:!0,defaultValue:"#ffff"}),Object(i.createElement)("label",{className:"label-background"},"Arrow Color"),Object(i.createElement)(s.ColorPicker,{color:n.arrowColor,onChange:function(e){return r({arrowColor:e})},enableAlpha:!0,defaultValue:"#ffff"}))),n.logos&&"on"===n.titleStatus&&Object(i.createElement)(l.RichText,{tagName:"h2",className:"title",value:n.title,onChange:function(e){return r({title:e})},placeholder:Object(o.__)("Catchy title goes here...","keitaro-logo-slider"),style:{marginTop:"".concat(n.titleMarginTop,"rem"),marginBottom:"".concat(n.titleMarginBottom,"rem")}}),Object(i.createElement)(l.MediaUploadCheck,null,Object(i.createElement)(l.MediaPlaceholder,{onSelect:function(e){r({logos:e.map((function(e){return{url:e.url,id:e.id,alt:e.alt}}))})},isAppender:!0,className:t,icon:"format-gallery",allowedTypes:d,multiple:!0,value:n.logos,labels:{title:Object(o.__)("Logos","keitaro-logo-slider")},mediaPreview:a})))},save:function(e){var t=e.attributes;return Object(i.createElement)("div",{className:"slide-number-".concat(t.numberOfImagesPerSlide),count:t.numberOfImagesPerSlide},t&&"on"===t.titleStatus?Object(i.createElement)(l.RichText.Content,{tagName:"h2",className:"title",value:t.title}):null,Object(i.createElement)(u,{attributes:t}))}})}]);
(window.webpackJsonp_keitaro_logo_slider=window.webpackJsonp_keitaro_logo_slider||[]).push([[1],{12:function(e,t,n){}}]),function(e){function t(t){for(var r,l,s=t[0],a=t[1],c=t[2],d=0,f=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={0:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackJsonp_keitaro_logo_slider=window.webpackJsonp_keitaro_logo_slider||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=a;o.push([22,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){!function(e){"use strict";const t=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},n=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0},r=e=>{e.dispatchEvent(new Event("transitionend"))},i=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),o=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?o(e.parentNode):null},l=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,s=[],a=e=>{"loading"===document.readyState?(s.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of s)e()}),s.push(e)):e()},c=e=>{"function"==typeof e&&e()};e.defineJQueryPlugin=e=>{a(()=>{const t=l();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},e.execute=c,e.executeAfterTransition=(e,t,i=!0)=>{if(!i)return void c(e);const o=n(t)+5;let l=!1;const s=({target:n})=>{n===t&&(l=!0,t.removeEventListener("transitionend",s),c(e))};t.addEventListener("transitionend",s),setTimeout(()=>{l||r(t)},o)},e.findShadowRoot=o,e.getElement=e=>i(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,e.getElementFromSelector=e=>{const n=t(e);return n?document.querySelector(n):null},e.getNextActiveElement=(e,t,n,r)=>{const i=e.length;let o=e.indexOf(t);return-1===o?!n&&r?e[i-1]:e[0]:(o+=n?1:-1,r&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))])},e.getSelectorFromElement=e=>{const n=t(e);return n&&document.querySelector(n)?n:null},e.getTransitionDurationFromElement=n,e.getUID=e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e},e.getjQuery=l,e.isDisabled=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),e.isElement=i,e.isRTL=()=>"rtl"===document.documentElement.dir,e.isVisible=e=>{if(!i(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},e.noop=()=>{},e.onDOMContentLoaded=a,e.reflow=e=>{e.offsetHeight},e.toType=e=>null==e?""+e:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),e.triggerTransitionEnd=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}(t)},function(e,t,n){e.exports=function(e){"use strict";const t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,i={};let o=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},s=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function a(e,t){return t&&`${t}::${o++}`||e.uidEvent||o++}function c(e){const t=a(e);return e.uidEvent=t,i[t]=i[t]||{},i[t]}function u(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function d(e,t,n){const r="string"==typeof t,i=r?n:t||n;let o=g(e);return s.has(o)||(o=e),[r,i,o]}function f(e,n,r,i,o){if("string"!=typeof n||!e)return;let[s,f,p]=d(n,r,i);n in l&&(f=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(f));const h=c(e),g=h[p]||(h[p]={}),_=u(g,f,s?r:null);if(_)return void(_.oneOff=_.oneOff&&o);const v=a(f,n.replace(t,"")),y=s?function(e,t,n){return function r(i){const o=e.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const s of o)if(s===l)return b(i,{delegateTarget:l}),r.oneOff&&m.off(e,i.type,t,n),n.apply(l,[i])}}(e,r,f):function(e,t){return function n(r){return b(r,{delegateTarget:e}),n.oneOff&&m.off(e,r.type,t),t.apply(e,[r])}}(e,f);y.delegationSelector=s?r:null,y.callable=f,y.oneOff=o,y.uidEvent=v,g[v]=y,e.addEventListener(p,y,s)}function p(e,t,n,r,i){const o=u(t[n],r,i);o&&(e.removeEventListener(n,o,Boolean(i)),delete t[n][o.uidEvent])}function h(e,t,n,r){const i=t[n]||{};for(const o of Object.keys(i))if(o.includes(r)){const r=i[o];p(e,t,n,r.callable,r.delegationSelector)}}function g(e){return e=e.replace(n,""),l[e]||e}const m={on(e,t,n,r){f(e,t,n,r,!1)},one(e,t,n,r){f(e,t,n,r,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[o,l,s]=d(t,n,i),a=s!==t,u=c(e),f=u[s]||{},g=t.startsWith(".");if(void 0===l){if(g)for(const n of Object.keys(u))h(e,u,n,t.slice(1));for(const n of Object.keys(f)){const i=n.replace(r,"");if(!a||t.includes(i)){const t=f[n];p(e,u,s,t.callable,t.delegationSelector)}}}else{if(!Object.keys(f).length)return;p(e,u,s,l,o?n:null)}},trigger(t,n,r){if("string"!=typeof n||!t)return null;const i=e.getjQuery();let o=null,l=!0,s=!0,a=!1;n!==g(n)&&i&&(o=i.Event(n,r),i(t).trigger(o),l=!o.isPropagationStopped(),s=!o.isImmediatePropagationStopped(),a=o.isDefaultPrevented());let c=new Event(n,{bubbles:l,cancelable:!0});return c=b(c,r),a&&c.preventDefault(),s&&t.dispatchEvent(c),c.defaultPrevented&&o&&o.preventDefault(),c}};function b(e,t){for(const[n,r]of Object.entries(t||{}))try{e[n]=r}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}return m}(n(4))},function(e,t,n){e.exports=function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}return{setDataAttribute(e,n,r){e.setAttribute("data-bs-"+t(n),r)},removeDataAttribute(e,n){e.removeAttribute("data-bs-"+t(n))},getDataAttributes(t){if(!t)return{};const n={},r=Object.keys(t.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(const i of r){let r=i.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),n[r]=e(t.dataset[i])}return n},getDataAttribute:(n,r)=>e(n.getAttribute("data-bs-"+t(r)))}}()},function(e,t,n){e.exports=function(e,t){"use strict";const n=(e=>e&&"object"==typeof e&&"default"in e?e:{default:e})(t);return class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(t,r){const i=e.isElement(r)?n.default.getDataAttribute(r,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...e.isElement(r)?n.default.getDataAttributes(r):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const r of Object.keys(n)){const i=n[r],o=t[r],l=e.isElement(o)?"element":e.toType(o);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${l}" but expected type "${i}".`)}}}}(n(4),n(6))},function(e,t,n){},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wp.blocks},function(e,t,n){var r=n(18),i=n(19),o=n(20),l=n(21);e.exports=function(e){return r(e)||i(e)||o(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},,function(e,t,n){e.exports=function(e,t,n,r,i,o){"use strict";const l=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},s=l(t),a=l(n),c=l(r),u=l(i),d=l(o),f={ArrowLeft:"right",ArrowRight:"left"},p={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},h={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class g extends d.default{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=c.default.findOne(".carousel-indicators",this._element),this._addEventListeners(),"carousel"===this._config.ride&&this.cycle()}static get Default(){return p}static get DefaultType(){return h}static get NAME(){return"carousel"}next(){this._slide("next")}nextWhenVisible(){!document.hidden&&e.isVisible(this._element)&&this.next()}prev(){this._slide("prev")}pause(){this._isSliding&&e.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?s.default.one(this._element,"slid.bs.carousel",()=>this.cycle()):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void s.default.one(this._element,"slid.bs.carousel",()=>this.to(e));const n=this._getItemIndex(this._getActive());if(n===e)return;const r=e>n?"next":"prev";this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&s.default.on(this._element,"keydown.bs.carousel",e=>this._keydown(e)),"hover"===this._config.pause&&(s.default.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),s.default.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&u.default.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of c.default.find(".carousel-item img",this._element))s.default.on(e,"dragstart.bs.carousel",e=>e.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder("left")),rightCallback:()=>this._slide(this._directionToOrder("right")),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new u.default(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=f[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=c.default.findOne(".active",this._indicatorsElement);t.classList.remove("active"),t.removeAttribute("aria-current");const n=c.default.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add("active"),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const r=this._getActive(),i="next"===t,o=n||e.getNextActiveElement(this._getItems(),r,i,this._config.wrap);if(o===r)return;const l=this._getItemIndex(o),a=e=>s.default.trigger(this._element,e,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:l});if(a("slide.bs.carousel").defaultPrevented)return;if(!r||!o)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=o;const u=i?"carousel-item-start":"carousel-item-end",d=i?"carousel-item-next":"carousel-item-prev";o.classList.add(d),e.reflow(o),r.classList.add(u),o.classList.add(u),this._queueCallback(()=>{o.classList.remove(u,d),o.classList.add("active"),r.classList.remove("active",d,u),this._isSliding=!1,a("slid.bs.carousel")},r,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return c.default.findOne(".active.carousel-item",this._element)}_getItems(){return c.default.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return e.isRTL()?"left"===t?"prev":"next":"left"===t?"next":"prev"}_orderToDirection(t){return e.isRTL()?"prev"===t?"left":"right":"prev"===t?"right":"left"}static jQueryInterface(e){return this.each((function(){const t=g.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}return s.default.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const n=e.getElementFromSelector(this);if(!n||!n.classList.contains("carousel"))return;t.preventDefault();const r=g.getOrCreateInstance(n),i=this.getAttribute("data-bs-slide-to");return i?(r.to(i),void r._maybeEnableCycle()):"next"===a.default.getDataAttribute(this,"slide")?(r.next(),void r._maybeEnableCycle()):(r.prev(),void r._maybeEnableCycle())})),s.default.on(window,"load.bs.carousel.data-api",()=>{const e=c.default.find('[data-bs-ride="carousel"]');for(const t of e)g.getOrCreateInstance(t)}),e.defineJQueryPlugin(g),g}(n(4),n(5),n(6),n(14),n(15),n(16))},function(e,t,n){e.exports=function(e){"use strict";return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(",");return this.find(n,t).filter(t=>!e.isDisabled(t)&&e.isVisible(t))}}}(n(4))},function(e,t,n){e.exports=function(e,t,n){"use strict";const r=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},i=r(e),o=r(t),l={endCallback:null,leftCallback:null,rightCallback:null},s={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class a extends i.default{constructor(e,t){super(),this._element=e,e&&a.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return l}static get DefaultType(){return s}static get NAME(){return"swipe"}dispose(){o.default.off(this._element,".bs.swipe")}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),n.execute(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const t=e/this._deltaX;this._deltaX=0,t&&n.execute(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(o.default.on(this._element,"pointerdown.bs.swipe",e=>this._start(e)),o.default.on(this._element,"pointerup.bs.swipe",e=>this._end(e)),this._element.classList.add("pointer-event")):(o.default.on(this._element,"touchstart.bs.swipe",e=>this._start(e)),o.default.on(this._element,"touchmove.bs.swipe",e=>this._move(e)),o.default.on(this._element,"touchend.bs.swipe",e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return a}(n(7),n(5),n(4))},function(e,t,n){e.exports=function(e,t,n,r){"use strict";const i=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},o=i(e),l=i(n),s=i(r);class a extends s.default{constructor(e,n){super(),(e=t.getElement(e))&&(this._element=e,this._config=this._getConfig(n),o.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.default.remove(this._element,this.constructor.DATA_KEY),l.default.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,r=!0){t.executeAfterTransition(e,n,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return o.default.get(t.getElement(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}static eventName(e){return`${e}${this.EVENT_KEY}`}}return a}(n(17),n(4),n(5),n(7))},function(e,t,n){e.exports=function(){"use strict";const e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);const i=e.get(t);i.has(n)||0===i.size?i.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}}}()},function(e,t,n){var r=n(9);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(9);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n.r(t);var r=n(10),i=n(2),o=(n(12),n(13),n(0)),l=n(1),s=n(3),a=(n(8),n(11)),c=n.n(a);function u(e){var t=e.attributes;return Object(o.createElement)("div",{id:"logosControls-".concat(t.sliderId),className:"carousel ".concat(t.sliderEffect),style:{background:t.sliderBackground},"data-bs-ride":"carousel"},Object(o.createElement)("div",{className:"carousel-inner"},t.logos?function(e,t){var n=Math.max(e.length/t),r=[];if(e.length<=t)return r.push(e),r;var i=[];i.push.apply(i,c()(e));for(var o=0;o<n;o++)r.push(i.splice(0,t));return r}(t.logos,t.numberOfImagesPerSlide).map((function(e,n){return Object(o.createElement)("div",{key:n,className:"carousel-item ".concat(n<1?"active":"")},e.map((function(e,n){return Object(o.createElement)("img",{key:n,className:"logo",id:e.id,src:e.url,alt:e.alt,style:{maxWidth:"".concat(t.widthOfImages).concat(t.typeOfProperties),maxHeight:"".concat(t.heightOfImages).concat(t.typeOfProperties)}})})))})):Object(o.createElement)("p",null,"Upload images")),Object(o.createElement)("button",{className:"carousel-control-prev","data-bs-target":"#logosControls-".concat(t.sliderId),"data-bs-slide":"prev",type:"button"},Object(o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:30,height:30,fill:t?t.arrowColor:"#ffff"},Object(o.createElement)("path",{d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})),Object(o.createElement)("span",{className:"visually-hidden"},Object(i.__)("Previous","keitaro-logo-slider"))),Object(o.createElement)("button",{className:"carousel-control-next","data-bs-target":"#logosControls-".concat(t.sliderId),"data-bs-slide":"next",type:"button"},Object(o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:t?t.arrowColor:"#ffff",width:30,height:30},Object(o.createElement)("path",{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})),Object(o.createElement)("span",{className:"visually-hidden"},Object(i.__)("Next","keitaro-logo-slider"))))}var d=["image"];Object(r.registerBlockType)("keitaro/logo-slider",{title:Object(i.__)("Logo Slider by Keitaro","keitaro-logo-slider"),description:Object(i.__)("Easy to use logo slider for your WordPress website.","keitaro-logo-slider"),category:"media",icon:"image-flip-horizontal",supports:{align:!0},attributes:{title:{type:"string",source:"html",selector:".title",default:Object(i.__)("Trusted by","keitaro-logo-slider")},titleStatus:{type:"string",default:"on"},titleMarginTop:{type:"number",default:"-4"},titleMarginBottom:{type:"number",default:2.5},titleMarginUnit:{type:"string",default:"rem"},numberOfImagesPerSlide:{type:"number",default:3,minimum:1},widthOfImages:{type:"number",default:50,minimum:1},heightOfImages:{type:"number",default:50,minimum:1},typeOfProperties:{type:"string",default:"px"},sliderId:{type:"string",default:null},sliderBackground:{type:"string",default:"#ffff"},arrowColor:{type:"string",default:"#ffff"},sliderEffect:{type:"string",default:"slide"},logos:{type:"array",source:"query",selector:"img",query:{id:{type:"string",source:"attribute",attribute:"id"},url:{type:"string",source:"attribute",attribute:"src"},alt:{type:"string",source:"attribute",attribute:"alt"}}}},edit:function(e){var t=e.className,n=e.attributes,r=e.setAttributes;React.useEffect((function(){if(null===n.sliderId){var e=(Math.random()+1).toString(36).substring(7);r({sliderId:e})}}));var a=Object(o.createElement)(u,{attributes:n});return Object(o.createElement)("div",{className:t},Object(o.createElement)(s.InspectorControls,null,Object(o.createElement)(l.PanelBody,{title:Object(i.__)("Slide options")},Object(o.createElement)(l.RadioControl,{label:"Slider Title",selected:n.titleStatus,onChange:function(e){return r({titleStatus:e})},options:[{label:"On",value:"on"},{label:"Off",value:"off"}]}),"on"===n.titleStatus&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.RangeControl,{label:"Top margin of slider title",value:parseInt(n.titleMarginBottom),onChange:function(e){return r({titleMarginBottom:e})},min:-100,max:100,step:"px"!==n.titleMarginUnit?.1:1}),Object(o.createElement)(l.RangeControl,{label:"Bottom margin of slider title",value:parseInt(n.titleMarginTop),onChange:function(e){return r({titleMarginTop:e})},min:-100,max:100,step:"px"!==n.titleMarginUnit?.1:1}),Object(o.createElement)(l.RadioControl,{label:"Margin Title Unit",help:"The unit that's going to be used while calculating the title margin",selected:n.titleMarginUnit,onChange:function(e){return r({titleMarginUnit:e})},options:[{label:"Pixels (px)",value:"px"},{label:"Font size of the parent element (em)",value:"em"},{label:"Font size of the root element (rem)",value:"rem"}]})),Object(o.createElement)(l.RangeControl,{label:"Number of logos per slide",value:parseInt(n.numberOfImagesPerSlide),onChange:function(e){return r({numberOfImagesPerSlide:e})},min:1,max:n.logos?n.logos.length:10}),Object(o.createElement)(l.RangeControl,{label:"Maximum Logo Width",value:parseInt(n.widthOfImages),onChange:function(e){return r({widthOfImages:e})},min:1,max:200}),Object(o.createElement)(l.RangeControl,{label:"Maximum Logo Height",value:parseInt(n.heightOfImages),onChange:function(e){return r({heightOfImages:e})},min:1,max:200}),Object(o.createElement)(l.RadioControl,{label:"Image Size Unit",help:"The unit that's going to be used while calculating the image size",selected:n.typeOfProperties,onChange:function(e){return r({typeOfProperties:e})},options:[{label:"Pixels (px)",value:"px"},{label:"Font size of the parent element (em)",value:"em"},{label:"Font size of the root element (rem)",value:"rem"}]}),Object(o.createElement)(l.SelectControl,{label:"Slider Effect",value:n.sliderEffect,options:[{label:"Slide",value:"slide"},{label:"Fade",value:"carousel-fade"}],onChange:function(e){return r({sliderEffect:e})},__nextHasNoMarginBottom:!0}),Object(o.createElement)("label",{className:"label-background"},"Slider Background"),Object(o.createElement)(l.ColorPicker,{color:n.sliderBackground,onChange:function(e){return r({sliderBackground:e})},enableAlpha:!0,defaultValue:"#ffff"}),Object(o.createElement)("label",{className:"label-background"},"Arrow Color"),Object(o.createElement)(l.ColorPicker,{color:n.arrowColor,onChange:function(e){return r({arrowColor:e})},enableAlpha:!0,defaultValue:"#ffff"}))),n.logos&&"on"===n.titleStatus&&Object(o.createElement)(s.RichText,{tagName:"h2",className:"title",value:n.title,onChange:function(e){return r({title:e})},placeholder:Object(i.__)("Catchy title goes here...","keitaro-logo-slider"),style:{marginTop:"".concat(n.titleMarginTop).concat(n.titleMarginUnit),marginBottom:"".concat(n.titleMarginBottom).concat(n.titleMarginUnit)}}),Object(o.createElement)(s.MediaUploadCheck,null,Object(o.createElement)(s.MediaPlaceholder,{onSelect:function(e){r({logos:e.map((function(e){return{url:e.url,id:e.id,alt:e.alt}}))})},isAppender:!0,className:t,icon:"format-gallery",allowedTypes:d,multiple:!0,value:n.logos,labels:{title:Object(i.__)("Logos","keitaro-logo-slider")},mediaPreview:a})))},save:function(e){var t=e.attributes;return Object(o.createElement)("div",{className:"slide-number-".concat(t.numberOfImagesPerSlide),count:t.numberOfImagesPerSlide},t&&"on"===t.titleStatus?Object(o.createElement)(s.RichText.Content,{tagName:"h2",className:"title",value:t.title,style:{marginTop:"".concat(t.titleMarginTop).concat(t.titleMarginUnit),marginBottom:"".concat(t.titleMarginBottom).concat(t.titleMarginUnit)}}):null,Object(o.createElement)(u,{attributes:t}))}})}]);
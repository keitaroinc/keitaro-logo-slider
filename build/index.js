(window.webpackJsonp_keitaro_logo_slider=window.webpackJsonp_keitaro_logo_slider||[]).push([[1],{10:function(e,t,n){}}]),function(e){function t(t){for(var i,l,o=t[0],s=t[1],u=t[2],d=0,f=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(c&&c(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},r={0:0},a=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp_keitaro_logo_slider=window.webpackJsonp_keitaro_logo_slider||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=s;a.push([17,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.jQuery},function(e,t,n){e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);var i={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=n.default(e).css("transition-duration"),i=n.default(e).css("transition-delay"),r=parseFloat(t),a=parseFloat(i);return r||a?(t=t.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(t)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){n.default(e).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var a=n[r],l=t[r],o=l&&i.isElement(l)?"element":null==(s=l)?""+s:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(a).test(o))throw new Error(e.toUpperCase()+': Option "'+r+'" provided type "'+o+'" but expected type "'+a+'".')}var s},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?i.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if(void 0===n.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=n.default.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};return i.jQueryDetection(),n.default.fn.emulateTransitionEnd=function(e){var t=this,r=!1;return n.default(this).one(i.TRANSITION_END,(function(){r=!0})),setTimeout((function(){r||i.triggerTransitionEnd(t)}),e),this},n.default.event.special[i.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(e){if(n.default(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},i}(n(4))},function(e,t,n){},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wp.blocks},function(e,t,n){var i=n(13),r=n(14),a=n(15),l=n(16);e.exports=function(e){return i(e)||r(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},,function(e,t,n){e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),r=n(t);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o="carousel",s="bs.carousel",u=i.default.fn[o],c={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},d={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},f={TOUCH:"touch",PEN:"pen"},h=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t,n,u=e.prototype;return u.next=function(){this._isSliding||this._slide("next")},u.nextWhenVisible=function(){var e=i.default(this._element);!document.hidden&&e.is(":visible")&&"hidden"!==e.css("visibility")&&this.next()},u.prev=function(){this._isSliding||this._slide("prev")},u.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(r.default.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},u.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},u.to=function(e){var t=this;this._activeElement=this._element.querySelector(".active.carousel-item");var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)i.default(this._element).one("slid.bs.carousel",(function(){return t.to(e)}));else{if(n===e)return this.pause(),void this.cycle();var r=e>n?"next":"prev";this._slide(r,this._items[e])}},u.dispose=function(){i.default(this._element).off(".bs.carousel"),i.default.removeData(this._element,s),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},u._getConfig=function(e){return e=l({},c,e),r.default.typeCheckConfig(o,e,d),e},u._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;this.touchDeltaX=0,t>0&&this.prev(),t<0&&this.next()}},u._addEventListeners=function(){var e=this;this._config.keyboard&&i.default(this._element).on("keydown.bs.carousel",(function(t){return e._keydown(t)})),"hover"===this._config.pause&&i.default(this._element).on("mouseenter.bs.carousel",(function(t){return e.pause(t)})).on("mouseleave.bs.carousel",(function(t){return e.cycle(t)})),this._config.touch&&this._addTouchEventListeners()},u._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var t=function(t){e._pointerEvent&&f[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},n=function(t){e._pointerEvent&&f[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout((function(t){return e.cycle(t)}),500+e._config.interval))};i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(e){return e.preventDefault()})),this._pointerEvent?(i.default(this._element).on("pointerdown.bs.carousel",(function(e){return t(e)})),i.default(this._element).on("pointerup.bs.carousel",(function(e){return n(e)})),this._element.classList.add("pointer-event")):(i.default(this._element).on("touchstart.bs.carousel",(function(e){return t(e)})),i.default(this._element).on("touchmove.bs.carousel",(function(t){return function(t){e.touchDeltaX=t.originalEvent.touches&&t.originalEvent.touches.length>1?0:t.originalEvent.touches[0].clientX-e.touchStartX}(t)})),i.default(this._element).on("touchend.bs.carousel",(function(e){return n(e)})))}},u._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},u._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(e)},u._getItemByDirection=function(e,t){var n="next"===e,i="prev"===e,r=this._getItemIndex(t),a=this._items.length-1;if((i&&0===r||n&&r===a)&&!this._config.wrap)return t;var l=(r+("prev"===e?-1:1))%this._items.length;return-1===l?this._items[this._items.length-1]:this._items[l]},u._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),r=this._getItemIndex(this._element.querySelector(".active.carousel-item")),a=i.default.Event("slide.bs.carousel",{relatedTarget:e,direction:t,from:r,to:n});return i.default(this._element).trigger(a),a},u._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));i.default(t).removeClass("active");var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&i.default(n).addClass("active")}},u._updateInterval=function(){var e=this._activeElement||this._element.querySelector(".active.carousel-item");if(e){var t=parseInt(e.getAttribute("data-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}},u._slide=function(e,t){var n,a,l,o=this,s=this._element.querySelector(".active.carousel-item"),u=this._getItemIndex(s),c=t||s&&this._getItemByDirection(e,s),d=this._getItemIndex(c),f=Boolean(this._interval);if("next"===e?(n="carousel-item-left",a="carousel-item-next",l="left"):(n="carousel-item-right",a="carousel-item-prev",l="right"),c&&i.default(c).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(c,l).isDefaultPrevented()&&s&&c){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(c),this._activeElement=c;var h=i.default.Event("slid.bs.carousel",{relatedTarget:c,direction:l,from:u,to:d});if(i.default(this._element).hasClass("slide")){i.default(c).addClass(a),r.default.reflow(c),i.default(s).addClass(n),i.default(c).addClass(n);var p=r.default.getTransitionDurationFromElement(s);i.default(s).one(r.default.TRANSITION_END,(function(){i.default(c).removeClass(n+" "+a).addClass("active"),i.default(s).removeClass("active "+a+" "+n),o._isSliding=!1,setTimeout((function(){return i.default(o._element).trigger(h)}),0)})).emulateTransitionEnd(p)}else i.default(s).removeClass("active"),i.default(c).addClass("active"),this._isSliding=!1,i.default(this._element).trigger(h);f&&this.cycle()}},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this).data(s),r=l({},c,i.default(this).data());"object"==typeof t&&(r=l({},r,t));var a="string"==typeof t?t:r.slide;if(n||(n=new e(this,r),i.default(this).data(s,n)),"number"==typeof t)n.to(t);else if("string"==typeof a){if(void 0===n[a])throw new TypeError('No method named "'+a+'"');n[a]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}))},e._dataApiClickHandler=function(t){var n=r.default.getSelectorFromElement(this);if(n){var a=i.default(n)[0];if(a&&i.default(a).hasClass("carousel")){var o=l({},i.default(a).data(),i.default(this).data()),u=this.getAttribute("data-slide-to");u&&(o.interval=!1),e._jQueryInterface.call(i.default(a),o),u&&i.default(a).data(s).to(u),t.preventDefault()}}},t=e,n=[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return c}}],null&&a(t.prototype,null),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();return i.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",h._dataApiClickHandler),i.default(window).on("load.bs.carousel.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),t=0,n=e.length;t<n;t++){var r=i.default(e[t]);h._jQueryInterface.call(r,r.data())}})),i.default.fn[o]=h._jQueryInterface,i.default.fn[o].Constructor=h,i.default.fn[o].noConflict=function(){return i.default.fn[o]=u,h._jQueryInterface},h}(n(4),n(5))},function(e,t,n){e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),r=n(t);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o="collapse",s="bs.collapse",u=i.default.fn[o],c={toggle:!0,parent:""},d={toggle:"boolean",parent:"(string|element)"},f=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,a=n.length;i<a;i++){var l=n[i],o=r.default.getSelectorFromElement(l),s=[].slice.call(document.querySelectorAll(o)).filter((function(t){return t===e}));null!==o&&s.length>0&&(this._selector=o,this._triggerArray.push(l))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t,n,u=e.prototype;return u.toggle=function(){i.default(this._element).hasClass("show")?this.hide():this.show()},u.show=function(){var t,n,a=this;if(!(this._isTransitioning||i.default(this._element).hasClass("show")||(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e){return"string"==typeof a._config.parent?e.getAttribute("data-parent")===a._config.parent:e.classList.contains("collapse")}))).length&&(t=null),t&&(n=i.default(t).not(this._selector).data(s))&&n._isTransitioning))){var l=i.default.Event("show.bs.collapse");if(i.default(this._element).trigger(l),!l.isDefaultPrevented()){t&&(e._jQueryInterface.call(i.default(t).not(this._selector),"hide"),n||i.default(t).data(s,null));var o=this._getDimension();i.default(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[o]=0,this._triggerArray.length&&i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var u="scroll"+(o[0].toUpperCase()+o.slice(1)),c=r.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(r.default.TRANSITION_END,(function(){i.default(a._element).removeClass("collapsing").addClass("collapse show"),a._element.style[o]="",a.setTransitioning(!1),i.default(a._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(c),this._element.style[o]=this._element[u]+"px"}}},u.hide=function(){var e=this;if(!this._isTransitioning&&i.default(this._element).hasClass("show")){var t=i.default.Event("hide.bs.collapse");if(i.default(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",r.default.reflow(this._element),i.default(this._element).addClass("collapsing").removeClass("collapse show");var a=this._triggerArray.length;if(a>0)for(var l=0;l<a;l++){var o=this._triggerArray[l],s=r.default.getSelectorFromElement(o);null!==s&&(i.default([].slice.call(document.querySelectorAll(s))).hasClass("show")||i.default(o).addClass("collapsed").attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var u=r.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(r.default.TRANSITION_END,(function(){e.setTransitioning(!1),i.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(u)}}},u.setTransitioning=function(e){this._isTransitioning=e},u.dispose=function(){i.default.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},u._getConfig=function(e){return(e=l({},c,e)).toggle=Boolean(e.toggle),r.default.typeCheckConfig(o,e,d),e},u._getDimension=function(){return i.default(this._element).hasClass("width")?"width":"height"},u._getParent=function(){var t,n=this;r.default.isElement(this._config.parent)?(t=this._config.parent,void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var a='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',l=[].slice.call(t.querySelectorAll(a));return i.default(l).each((function(t,i){n._addAriaAndCollapsedClass(e._getTargetFromElement(i),[i])})),t},u._addAriaAndCollapsedClass=function(e,t){var n=i.default(e).hasClass("show");t.length&&i.default(t).toggleClass("collapsed",!n).attr("aria-expanded",n)},e._getTargetFromElement=function(e){var t=r.default.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),r=n.data(s),a=l({},c,n.data(),"object"==typeof t&&t?t:{});if(!r&&a.toggle&&"string"==typeof t&&/show|hide/.test(t)&&(a.toggle=!1),r||(r=new e(this,a),n.data(s,r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t]()}}))},t=e,n=[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return c}}],null&&a(t.prototype,null),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();return i.default(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var t=i.default(this),n=r.default.getSelectorFromElement(this),a=[].slice.call(document.querySelectorAll(n));i.default(a).each((function(){var e=i.default(this),n=e.data(s)?"toggle":t.data();f._jQueryInterface.call(e,n)}))})),i.default.fn[o]=f._jQueryInterface,i.default.fn[o].Constructor=f,i.default.fn[o].noConflict=function(){return i.default.fn[o]=u,f._jQueryInterface},f}(n(4),n(5))},function(e,t,n){var i=n(7);e.exports=function(e){if(Array.isArray(e))return i(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var i=n(7);e.exports=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n.r(t);var i=n(8),r=n(1),a=(n(10),n(11),n(12),n(5),n(0)),l=n(3),o=n(2),s=(n(6),n(9)),u=n.n(s);function c(e){var t=e.attributes;return Object(a.createElement)("div",{id:"logosControls".concat(t.sliderId),className:"carousel slide","data-ride":"carousel"},Object(a.createElement)("div",{className:"carousel-inner"},t.logos?function(e,t){var n=Math.max(e.length/t),i=[];if(e.length<=t)return i.push(e),i;var r=[];r.push.apply(r,u()(e));for(var a=0;a<n;a++)i.push(r.splice(0,t));return i}(t.logos,t.numberOfImagesPerSlide).map((function(e,n){return Object(a.createElement)("div",{key:n,className:"carousel-item ".concat(n<1?"active":"")},e.map((function(e,n){return Object(a.createElement)("img",{key:n,className:"logo",id:e.id,src:e.url,alt:e.alt,style:{maxWidth:"".concat(t.widthOfImages).concat(t.typeOfProperties),maxHeight:"".concat(t.heightOfImages).concat(t.typeOfProperties)}})})))})):Object(a.createElement)("p",null,"Upload images")),Object(a.createElement)("button",{className:"carousel-control-prev","data-target":"#logosControls".concat(t.sliderId),type:"button","data-slide":"prev"},Object(a.createElement)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(a.createElement)("span",{className:"sr-only"},Object(r.__)("Previous","keitaro-logo-slider"))),Object(a.createElement)("button",{className:"carousel-control-next","data-target":"#logosControls".concat(t.sliderId),type:"button","data-slide":"next"},Object(a.createElement)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(a.createElement)("span",{className:"sr-only"},Object(r.__)("Next","keitaro-logo-slider"))))}var d=["image"];Object(i.registerBlockType)("keitaro/logo-slider",{title:Object(r.__)("Logo Slider by Keitaro","keitaro-logo-slider"),description:Object(r.__)("Easy to use logo slider for your WordPress website.","keitaro-logo-slider"),category:"media",icon:"image-flip-horizontal",supports:{align:!0},attributes:{title:{type:"string",source:"html",selector:".title",default:Object(r.__)("Trusted by","keitaro-logo-slider")},numberOfImagesPerSlide:{type:"number",default:1,minimum:1},widthOfImages:{type:"number",default:50,minimum:1},heightOfImages:{type:"number",default:50,minimum:1},typeOfProperties:{type:"string",default:"px"},sliderId:{type:"number",default:1},logos:{type:"array",source:"query",selector:"img",query:{id:{type:"string",source:"attribute",attribute:"id"},url:{type:"string",source:"attribute",attribute:"src"},alt:{type:"string",source:"attribute",attribute:"alt"}}}},edit:function(e){var t=e.className,n=e.attributes,i=e.setAttributes;React.useEffect((function(){if(1==n.sliderId){var e=Math.floor(100*Math.random()+1);i({sliderId:e})}}));var s=Object(a.createElement)(c,{attributes:n});return Object(a.createElement)("div",{className:t},Object(a.createElement)(o.InspectorControls,null,Object(a.createElement)(l.PanelBody,{title:Object(r.__)("Slide options")},Object(a.createElement)(l.RangeControl,{label:"Number of logos per slide",value:parseInt(n.numberOfImagesPerSlide),onChange:function(e){return i({numberOfImagesPerSlide:e})},min:1,max:n.logos?n.logos.length:10}),Object(a.createElement)(l.RangeControl,{label:"Maximum Logo Width",value:parseInt(n.widthOfImages),onChange:function(e){return i({widthOfImages:e})},min:1,max:200}),Object(a.createElement)(l.RangeControl,{label:"Maximum Logo Height",value:parseInt(n.heightOfImages),onChange:function(e){return i({heightOfImages:e})},min:1,max:200}),Object(a.createElement)(l.RadioControl,{label:"Image Size Unit",help:"The unit that's going to be used while calculating the image size",selected:n.typeOfProperties,onChange:function(e){return i({typeOfProperties:e})},options:[{label:"Pixels (px)",value:"px"},{label:"Font size of the parent element (em)",value:"em"},{label:"Font size of the root element (rem)",value:"rem"}]}))),n.logos&&Object(a.createElement)(o.RichText,{tagName:"h2",className:"title",value:n.title,onChange:function(e){return i({title:e})},placeholder:Object(r.__)("Catchy title goes here...","keitaro-logo-slider")}),Object(a.createElement)(o.MediaUploadCheck,null,Object(a.createElement)(o.MediaPlaceholder,{onSelect:function(e){i({logos:e.map((function(e){return{url:e.url,id:e.id,alt:e.alt}}))})},isAppender:!0,className:t,icon:"format-gallery",allowedTypes:d,multiple:!0,value:n.logos,labels:{title:Object(r.__)("Logos","keitaro-logo-slider")},mediaPreview:s})))},save:function(e){var t=e.attributes;return Object(a.createElement)("div",{className:"slide-number-".concat(t.numberOfImagesPerSlide),count:t.numberOfImagesPerSlide},Object(a.createElement)(o.RichText.Content,{tagName:"h2",className:"title",value:t.title}),Object(a.createElement)(c,{attributes:t}))}})}]);
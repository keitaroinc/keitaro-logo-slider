(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5:function(e,t,r){}}]),function(e){function t(t){for(var o,a,i=t[0],c=t[1],s=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(t);m.length;)m.shift()();return l.push.apply(l,s||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],o=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(o=!1)}o&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={0:0},l=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;l.push([7,1]),r()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blocks}()},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=r(4),n=r(1),l=(r(5),r(0)),a=r(3),i=r(2),c=(r(6),["image"]);Object(o.registerBlockType)("keitaro/logo-slider",{title:Object(n.__)("Logo Slider by Keitaro","keitaro-logo-slider"),description:Object(n.__)("Easy to use logo slider for your WordPress website.","keitaro-logo-slider"),category:"media",icon:"image-flip-horizontal",supports:{align:!0},attributes:{title:{type:"string",source:"html",selector:".title",default:Object(n.__)("Trusted by","keitaro-logo-slider")},numberOfSlides:{type:"number",default:1,minimum:1},logos:{type:"array",source:"query",selector:"img",query:{id:{type:"string",source:"attribute",attribute:"id"},url:{type:"string",source:"attribute",attribute:"src"},alt:{type:"string",source:"attribute",attribute:"alt"}}}},edit:function(e){var t=e.className,r=e.attributes,o=e.setAttributes,s=r.logos&&r.logos.map((function(e,t){return Object(l.createElement)("img",{key:t,src:e.url,className:"logo",alt:e.alt})}));return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(i.InspectorControls,null,Object(l.createElement)(a.PanelBody,{title:Object(n.__)("Slide options")},Object(l.createElement)(a.RangeControl,{label:"Number of slides",value:parseInt(r.numberOfSlides),onChange:function(e){return o({numberOfSlides:e})},min:1,max:10}))),r.logos&&Object(l.createElement)("div",{className:t},Object(l.createElement)(i.RichText,{tagName:"h2",className:"title",value:r.title,onChange:function(e){return o({title:e})},placeholder:Object(n.__)("Catchy title goes here...","keitaro-logo-slider")})),Object(l.createElement)("div",{className:"img-edit-before"},Object(l.createElement)(i.MediaUploadCheck,null,Object(l.createElement)(i.MediaPlaceholder,{onSelect:function(e){o({logos:e.map((function(e){return{url:e.url,id:e.id,alt:e.alt}}))})},isAppender:!0,className:t,icon:"format-gallery",allowedTypes:c,multiple:!0,value:r.logos,mediaPreview:s,labels:{title:Object(n.__)("Logos","keitaro-logo-slider")}}))))},save:function(e){var t=e.attributes;return Object(l.createElement)("div",{className:"slide-number-".concat(t.numberOfSlides),count:t.numberOfSlides},Object(l.createElement)(i.RichText.Content,{tagName:"h2",className:"title",value:t.title}),Object(l.createElement)("div",{id:"logosControls",className:"carousel slide","data-ride":"carousel"},Object(l.createElement)("div",{className:"carousel-inner"},function(e,t){for(var r=Math.max(e.length/t,1),o=[],n=0;n<t;n++)r*(n+1)<=e.length&&o.push(e.slice(r*n,r*(n+1)));return o}(t.logos,t.numberOfSlides).map((function(e,t){return Object(l.createElement)("div",{key:t,className:"carousel-item ".concat(t<1?"active":"")},e.map((function(e,t){return Object(l.createElement)("img",{key:t,className:"logo",id:e.id,src:e.url,alt:e.alt})})))}))),Object(l.createElement)("a",{className:"carousel-control-prev",href:"#logosControls",role:"button","data-slide":"prev"},Object(l.createElement)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(l.createElement)("span",{className:"sr-only"},Object(n.__)("Previous","keitaro-logo-slider"))),Object(l.createElement)("a",{className:"carousel-control-next",href:"#logosControls",role:"button","data-slide":"next"},Object(l.createElement)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(l.createElement)("span",{className:"sr-only"},Object(n.__)("Next","keitaro-logo-slider")))))}})}]);
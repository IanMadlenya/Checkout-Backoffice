!function(){if("ontouchstart"in window){var t,e,i,n,s,o,r={};t=function(t,e){return Math.abs(t[0]-e[0])>5||Math.abs(t[1]-e[1])>5},e=function(t){this.startXY=[t.touches[0].clientX,t.touches[0].clientY],this.threshold=!1},i=function(e){return this.threshold?!1:void(this.threshold=t(this.startXY,[e.touches[0].clientX,e.touches[0].clientY]))},n=function(e){if(!this.threshold&&!t(this.startXY,[e.changedTouches[0].clientX,e.changedTouches[0].clientY])){var i=e.changedTouches[0],n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.simulated=!0,e.target.dispatchEvent(n)}},s=function(t){var e=Date.now(),i=e-r.time,n=t.clientX,s=t.clientY,a=[Math.abs(r.x-n),Math.abs(r.y-s)],l=o(t.target,"A")||t.target,c=l.nodeName,h="A"===c,u=window.navigator.standalone&&h&&t.target.getAttribute("href");return r.time=e,r.x=n,r.y=s,(!t.simulated&&(500>i||1500>i&&a[0]<50&&a[1]<50)||u)&&(t.preventDefault(),t.stopPropagation(),!u)?!1:(u&&(window.location=l.getAttribute("href")),void(l&&l.classList&&(l.classList.add("energize-focus"),window.setTimeout(function(){l.classList.remove("energize-focus")},150))))},o=function(t,e){for(var i=t;i!==document.body;){if(!i||i.nodeName===e)return i;i=i.parentNode}return null},document.addEventListener("touchstart",e,!1),document.addEventListener("touchmove",i,!1),document.addEventListener("touchend",n,!1),document.addEventListener("click",s,!0)}}(),/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(t,e,i,n){if(3===t.nodeType){var s=t.data.match(e);if(s){var o=document.createElement(i||"span");o.className=n||"highlight";var r=t.splitText(s.index);r.splitText(s[0].length);var a=r.cloneNode(!0);return o.appendChild(a),r.parentNode.replaceChild(o,r),1}}else if(1===t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName)&&(t.tagName!==i.toUpperCase()||t.className!==n))for(var l=0;l<t.childNodes.length;l++)l+=jQuery.highlight(t.childNodes[l],e,i,n);return 0}}),jQuery.fn.unhighlight=function(t){var e={className:"highlight",element:"span"};return jQuery.extend(e,t),this.find(e.element+"."+e.className).each(function(){var t=this.parentNode;t.replaceChild(this.firstChild,this),t.normalize()}).end()},jQuery.fn.highlight=function(t,e){var i={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(i,e),t.constructor===String&&(t=[t]),t=jQuery.grep(t,function(t){return""!=t}),t=jQuery.map(t,function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==t.length)return this;var n=i.caseSensitive?"":"i",s="("+t.join("|")+")";i.wordsOnly&&(s="\\b"+s+"\\b");var o=new RegExp(s,n);return this.each(function(){jQuery.highlight(this,o,i.element,i.className)})},/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function(t,e){var i=0,n=Array.prototype.slice,s=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(o){}s(e)},t.widget=function(i,n,s){var o,r,a,l,c={},h=i.split(".")[0];i=i.split(".")[1],o=h+"-"+i,s||(s=n,n=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[h]=t[h]||{},r=t[h][i],a=t[h][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new a(t,i)},t.extend(a,r,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),l=new n,l.options=t.widget.extend({},l.options),t.each(s,function(i,s){return t.isFunction(s)?(c[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=s.apply(this,arguments),this._super=n,this._superApply=o,i}}(),e):(c[i]=s,e)}),a.prototype=t.widget.extend(l,{widgetEventPrefix:r?l.widgetEventPrefix:i},c,{constructor:a,namespace:h,widgetName:i,widgetFullName:o}),r?(t.each(r._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete r._childConstructors):n._childConstructors.push(a),t.widget.bridge(i,a)},t.widget.extend=function(i){for(var s,o,r=n.call(arguments,1),a=0,l=r.length;l>a;a++)for(s in r[a])o=r[a][s],r[a].hasOwnProperty(s)&&o!==e&&(i[s]=t.isPlainObject(o)?t.isPlainObject(i[s])?t.widget.extend({},i[s],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,s){var o=s.prototype.widgetFullName||i;t.fn[i]=function(r){var a="string"==typeof r,l=n.call(arguments,1),c=this;return r=!a&&l.length?t.widget.extend.apply(null,[r].concat(l)):r,this.each(a?function(){var n,s=t.data(this,o);return s?t.isFunction(s[r])&&"_"!==r.charAt(0)?(n=s[r].apply(s,l),n!==s&&n!==e?(c=n&&n.jquery?c.pushStack(n.get()):n,!1):e):t.error("no such method '"+r+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}:function(){var e=t.data(this,o);e?e.option(r||{})._init():t.data(this,o,new s(r,this))}),c}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var s,o,r,a=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(a={},s=i.split("."),i=s.shift(),s.length){for(o=a[i]=t.widget.extend({},this.options[i]),r=0;s.length-1>r;r++)o[s[r]]=o[s[r]]||{},o=o[s[r]];if(i=s.pop(),n===e)return o[i]===e?null:o[i];o[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,s){var o,r=this;"boolean"!=typeof i&&(s=n,n=i,i=!1),s?(n=o=t(n),this.bindings=this.bindings.add(n)):(s=n,n=this.element,o=this.widget()),t.each(s,function(s,a){function l(){return i||r.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?r[a]:a).apply(r,arguments):e}"string"!=typeof a&&(l.guid=a.guid=a.guid||l.guid||t.guid++);var c=s.match(/^(\w+)\s*(.*)$/),h=c[1]+r.eventNamespace,u=c[2];u?o.delegate(u,h,l):n.bind(h,l)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,o,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var r,a=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),r=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),r&&t.effects&&t.effects.effect[a]?n[e](s):a!==e&&n[a]?n[a](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(t){"use strict";t(window.jQuery,window,document)}(function(t,e,i,n){"use strict";var s="tocify",o="tocify-focus",r="tocify-hover",a="tocify-hide",l="tocify-header",c="."+l,h="tocify-subheader",u="."+h,d="tocify-item",f="."+d,p="tocify-extend-page",g="."+p;t.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=t(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var t in e)if(t&&-1!==t.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),t(e).load(function(){i._setActiveElement(!0),t("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var e,i,n=this,o=n.options.ignoreSelector;return e=t(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),e.length?(n.element.addClass(s),void e.each(function(e){t(this).is(o)||(i=t("<ul/>",{id:l+e,"class":l}).append(n._nestElements(t(this),e)),n.element.append(i),t(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===t(this).find(n.options.selectors).length?t(this).filter(n.options.selectors).each(function(){t(this).is(o)||n._appendSubheaders.call(this,n,i)}):t(this).find(n.options.selectors).each(function(){t(this).is(o)||n._appendSubheaders.call(this,n,i)})}))})):void n.element.addClass(a)},_setActiveElement:function(t){var i=this,n=e.location.hash.substring(1),s=i.element.find("li[data-unique='"+n+"']");return n.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),s.addClass(i.focusClass),i.options.showAndHide&&s.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!n.length&&t&&i.options.highlightDefault&&i.element.find(f).first().addClass(i.focusClass)),i},_nestElements:function(e,i){var n,s,o;return n=t.grep(this.items,function(t){return t===e.text()}),this.items.push(n.length?e.text()+i:e.text()),o=this._generateHashValue(n,e,i),s=t("<li/>",{"class":d,"data-unique":o}).append(t("<a/>",{text:e.text()})),e.before(t("<div/>",{name:o,"data-unique":o})),s},_generateHashValue:function(t,e,i){var n="",s=this.options.hashGenerator;if("pretty"===s){for(n=e.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof s?s(e.text(),e):e.text().replace(/\s/g,"");return t.length&&(n+=""+i),n},_appendSubheaders:function(e,i){var n=t(this).index(e.options.selectors),s=t(e.options.selectors).eq(n-1),o=+t(this).prop("tagName").charAt(1),r=+s.prop("tagName").charAt(1);r>o?e.element.find(u+"[data-tag="+o+"]").last().append(e._nestElements(t(this),n)):o===r?i.find(f).last().after(e._nestElements(t(this),n)):i.find(f).last().after(t("<ul/>",{"class":h,"data-tag":o})).next(u).append(e._nestElements(t(this),n))},_setEventHandlers:function(){var s=this;this.element.on("click.tocify","li",function(){if(s.options.history&&(e.location.hash=t(this).attr("data-unique")),s.element.find("."+s.focusClass).removeClass(s.focusClass),t(this).addClass(s.focusClass),s.options.showAndHide){var i=t('li[data-unique="'+t(this).attr("data-unique")+'"]');s._triggerShow(i)}s._scrollTo(t(this))}),this.element.find("li").on({"mouseenter.tocify":function(){t(this).addClass(s.hoverClass),t(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==s.options.theme&&t(this).removeClass(s.hoverClass)}}),t(e).on("resize",function(){s.calculateHeights()}),t(e).on("scroll.tocify",function(){t("html, body").promise().done(function(){var o,r,a,l,c=t(e).scrollTop(),h=t(e).height(),u=t(i).height(),d=t("body")[0].scrollHeight;if(s.options.extendPage&&(s.webkit&&c>=d-h-s.options.extendPageOffset||!s.webkit&&h+c>u-s.options.extendPageOffset)&&!t(g).length){if(r=t('div[data-unique="'+t(f).last().attr("data-unique")+'"]'),!r.length)return;a=r.offset().top,t(s.options.context).append(t("<div />",{"class":p,height:Math.abs(a-c)+"px","data-unique":p})),s.extendPageScroll&&(l=s.element.find("li.active"),s._scrollTo(t("div[data-unique="+l.attr("data-unique")+"]")))}setTimeout(function(){var r,a=null;0==s.cachedHeights.length&&s.calculateHeights();var l=t(e).scrollTop();if(s.cachedAnchors.each(function(t){return s.cachedHeights[t]-l<0?void(a=t):!1}),r=t(s.cachedAnchors[a]).attr("data-unique"),o=t('li[data-unique="'+r+'"]'),s.options.highlightOnScroll&&o.length&&!o.hasClass(s.focusClass)){s.element.find("."+s.focusClass).removeClass(s.focusClass),o.addClass(s.focusClass);var c=s.tocifyWrapper,h=t(o).closest(".tocify-header"),u=h.offset().top,d=c.offset().top,f=u-d;if(f>=t(e).height()){var p=f+c.scrollTop();c.scrollTop(p)}else 0>f&&c.scrollTop(0)}s.options.scrollHistory&&e.location.hash!=="#"+r&&r!==n&&(history.replaceState?history.replaceState({},"","#"+r):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+r,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),s.options.showAndHideOnScroll&&s.options.showAndHide&&s._triggerShow(o,!0)},0)})})},calculateHeights:function(){var e=this;e.cachedHeights=[],e.cachedAnchors=[];var i=t(e.options.context).find("div[data-unique]");i.each(function(i){var n=(t(this).next().length?t(this).next():t(this)).offset().top-e.options.highlightOffset;e.cachedHeights[i]=n}),e.cachedAnchors=i},show:function(e){var i=this;if(!e.is(":visible"))switch(e.find(u).length||e.parent().is(c)||e.parent().is(":visible")?e.children(u).length||e.parent().is(c)||(e=e.closest(u)):e=e.parents(u).add(e),i.options.showEffect){case"none":e.show();break;case"show":e.show(i.options.showEffectSpeed);break;case"slideDown":e.slideDown(i.options.showEffectSpeed);break;case"fadeIn":e.fadeIn(i.options.showEffectSpeed);break;default:e.show()}return i.hide(t(u).not(e.parent().is(c)?e:e.closest(c).find(u).not(e.siblings()))),i},hide:function(t){var e=this;switch(e.options.hideEffect){case"none":t.hide();break;case"hide":t.hide(e.options.hideEffectSpeed);break;case"slideUp":t.slideUp(e.options.hideEffectSpeed);break;case"fadeOut":t.fadeOut(e.options.hideEffectSpeed);break;default:t.hide()}return e},_triggerShow:function(t,e){var i=this;return t.parent().is(c)||t.next().is(u)?i.show(t.next(u),e):t.parent().is(u)&&i.show(t.parent(),e),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(c+","+u).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=r),this},setOption:function(){t.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){t.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(e){var i=this,n=i.options.smoothScroll||0,s=i.options.scrollTo;return t("html, body").promise().done(function(){t("html, body").animate({scrollTop:t('div[data-unique="'+e.attr("data-unique")+'"]').next().offset().top-(t.isFunction(s)?s.call():s)+"px"},{duration:n})}),i}})}),/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
function(t){function e(e){if(e&&""!==e){$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+e+"']").addClass("active");for(var i=0;i<s.length;i++)$(".highlight."+s[i]).parent().hide();$(".highlight."+e).parent().show(),t.toc.calculateHeights(),$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)}}function i(t){if(history){var e=window.location.hash;e&&(e=e.replace(/^#+/,"")),history.pushState({},"","?"+t+"#"+e),localStorage.setItem("language",t)}}function n(t){var i=(t[0],localStorage.getItem("language"));s=t,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),s)?(e(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):e(null!==i&&-1!=jQuery.inArray(i,s)?i:s[0])}var s=[];t.setupLanguages=n,t.activateLanguage=e,$(function(){$(".lang-selector a").on("click",function(){var t=$(this).data("language-name");return i(t),e(t),!1}),window.onpopstate=function(){e(window.location.search.substr(1))}})}(window),function(t){function e(){setTimeout(function(){toc.setOption("showEffectSpeed",180)},50)}var i=function(){$(".tocify-wrapper").removeClass("open"),$("#nav-button").removeClass("open")},n=function(){t.toc=$("#toc").tocify({selectors:"h1, h2",extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-1,scrollHistory:!0,hashGenerator:function(t,e){return e.prop("id")}}).data("toc-tocify"),$("#nav-button").click(function(){return $(".tocify-wrapper").toggleClass("open"),$("#nav-button").toggleClass("open"),!1}),$(".page-wrapper").click(i),$(".tocify-item").click(i)};$(n),$(e)}(window);
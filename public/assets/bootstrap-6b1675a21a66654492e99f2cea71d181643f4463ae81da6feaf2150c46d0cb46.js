!function(e){"use strict";e(function(){var t;e.support.transition=(t=function(){var t,e=document.createElement("bootstrap"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in i)if(e.style[t]!==undefined)return i[t]}())&&{end:t}})}(window.jQuery),function(o){"use strict";var e='[data-dismiss="alert"]',n=function(t){o(t).on("click",e,this.close)};n.prototype.close=function(t){function e(){i.trigger("closed").remove()}var i,n=o(this),s=n.attr("data-target");s||(s=(s=n.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,"")),i=o(s),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=o.Event("close")),t.isDefaultPrevented()||(i.removeClass("in"),o.support.transition&&i.hasClass("fade")?i.on(o.support.transition.end,e):e())};var t=o.fn.alert;o.fn.alert=function(i){return this.each(function(){var t=o(this),e=t.data("alert");e||t.data("alert",e=new n(this)),"string"==typeof i&&e[i].call(t)})},o.fn.alert.Constructor=n,o.fn.alert.noConflict=function(){return o.fn.alert=t,this},o(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),function(s){"use strict";var o=function(t,e){this.$element=s(t),this.options=s.extend({},s.fn.button.defaults,e)};o.prototype.setState=function(t){var e="disabled",i=this.$element,n=i.data(),s=i.is("input")?"val":"html";t+="Text",n.resetText||i.data("resetText",i[s]()),i[s](n[t]||this.options[t]),setTimeout(function(){"loadingText"==t?i.addClass(e).attr(e,e):i.removeClass(e).removeAttr(e)},0)},o.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=function(n){return this.each(function(){var t=s(this),e=t.data("button"),i="object"==typeof n&&n;e||t.data("button",e=new o(this,i)),"toggle"==n?e.toggle():n&&e.setState(n)})},s.fn.button.defaults={loadingText:"loading..."},s.fn.button.Constructor=o,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.button.data-api","[data-toggle^=button]",function(t){var e=s(t.target);e.hasClass("btn")||(e=e.closest(".btn")),e.button("toggle")})}(window.jQuery),function(l){"use strict";var o=function(t,e){this.$element=l(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,"hover"==this.options.pause&&this.$element.on("mouseenter",l.proxy(this.pause,this)).on("mouseleave",l.proxy(this.cycle,this))};o.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(l.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var e=this.getActiveIndex(),i=this;if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid",function(){i.to(t)}):e==t?this.pause().cycle():this.slide(e<t?"next":"prev",l(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&l.support.transition.end&&(this.$element.trigger(l.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(t,e){var i,n=this.$element.find(".item.active"),s=e||n[t](),o=this.interval,a="next"==t?"left":"right",r="next"==t?"first":"last",h=this;if(this.sliding=!0,o&&this.pause(),s=s.length?s:this.$element.find(".item")[r](),i=l.Event("slide",{relatedTarget:s[0],direction:a}),!s.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=l(h.$indicators.children()[h.getActiveIndex()]);t&&t.addClass("active")})),l.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(i),i.isDefaultPrevented())return;s.addClass(t),s[0].offsetWidth,n.addClass(a),s.addClass(a),this.$element.one(l.support.transition.end,function(){s.removeClass([t,a].join(" ")).addClass("active"),n.removeClass(["active",a].join(" ")),h.sliding=!1,setTimeout(function(){h.$element.trigger("slid")},0)})}else{if(this.$element.trigger(i),i.isDefaultPrevented())return;n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return o&&this.cycle(),this}}};var t=l.fn.carousel;l.fn.carousel=function(s){return this.each(function(){var t=l(this),e=t.data("carousel"),i=l.extend({},l.fn.carousel.defaults,"object"==typeof s&&s),n="string"==typeof s?s:i.slide;e||t.data("carousel",e=new o(this,i)),"number"==typeof s?e.to(s):n?e[n]():i.interval&&e.pause().cycle()})},l.fn.carousel.defaults={interval:5e3,pause:"hover"},l.fn.carousel.Constructor=o,l.fn.carousel.noConflict=function(){return l.fn.carousel=t,this},l(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var e,i,n=l(this),s=l(n.attr("data-target")||(e=n.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")),o=l.extend({},s.data(),n.data());s.carousel(o),(i=n.attr("data-slide-to"))&&s.data("carousel").pause().to(i).cycle(),t.preventDefault()})}(window.jQuery),function(o){"use strict";var s=function(t,e){this.$element=o(t),this.options=o.extend({},o.fn.collapse.defaults,e),this.options.parent&&(this.$parent=o(this.options.parent)),this.options.toggle&&this.toggle()};s.prototype={constructor:s,dimension:function(){return this.$element.hasClass("width")?"width":"height"},show:function(){var t,e,i,n;if(!this.transitioning&&!this.$element.hasClass("in")){if(t=this.dimension(),e=o.camelCase(["scroll",t].join("-")),(i=this.$parent&&this.$parent.find("> .accordion-group > .in"))&&i.length){if((n=i.data("collapse"))&&n.transitioning)return;i.collapse("hide"),n||i.data("collapse",null)}this.$element[t](0),this.transition("addClass",o.Event("show"),"shown"),o.support.transition&&this.$element[t](this.$element[0][e])}},hide:function(){var t;!this.transitioning&&this.$element.hasClass("in")&&(t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",o.Event("hide"),"hidden"),this.$element[t](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(t,e,i){var n=this,s=function(){"show"==e.type&&n.reset(),n.transitioning=0,n.$element.trigger(i)};this.$element.trigger(e),e.isDefaultPrevented()||(this.transitioning=1,this.$element[t]("in"),o.support.transition&&this.$element.hasClass("collapse")?this.$element.one(o.support.transition.end,s):s())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var t=o.fn.collapse;o.fn.collapse=function(n){return this.each(function(){var t=o(this),e=t.data("collapse"),i=o.extend({},o.fn.collapse.defaults,t.data(),"object"==typeof n&&n);e||t.data("collapse",e=new s(this,i)),"string"==typeof n&&e[n]()})},o.fn.collapse.defaults={toggle:!0},o.fn.collapse.Constructor=s,o.fn.collapse.noConflict=function(){return o.fn.collapse=t,this},o(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var e,i=o(this),n=i.attr("data-target")||t.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),s=o(n).data("collapse")?"toggle":i.data();i[o(n).hasClass("in")?"addClass":"removeClass"]("collapsed"),o(n).collapse(s)})}(window.jQuery),function(a){"use strict";function n(){a(".dropdown-backdrop").remove(),a(h).each(function(){r(a(this)).removeClass("open")})}function r(t){var e,i=t.attr("data-target");return i||(i=(i=t.attr("href"))&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),(e=i&&a(i))&&e.length||(e=t.parent()),e}var h="[data-toggle=dropdown]",s=function(t){var e=a(t).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){e.parent().removeClass("open")})};s.prototype={constructor:s,toggle:function(){var t,e,i=a(this);if(!i.is(".disabled, :disabled"))return e=(t=r(i)).hasClass("open"),n(),e||("ontouchstart"in document.documentElement&&a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click",n),t.toggleClass("open")),i.focus(),!1},keydown:function(t){var e,i,n,s,o;if(/(38|40|27)/.test(t.keyCode)&&(e=a(this),t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled"))){if(!(s=(n=r(e)).hasClass("open"))||s&&27==t.keyCode)return 27==t.which&&n.find(h).focus(),e.click();(i=a("[role=menu] li:not(.divider):visible a",n)).length&&(o=i.index(i.filter(":focus")),38==t.keyCode&&0<o&&o--,40==t.keyCode&&o<i.length-1&&o++,~o||(o=0),i.eq(o).focus())}}};var t=a.fn.dropdown;a.fn.dropdown=function(i){return this.each(function(){var t=a(this),e=t.data("dropdown");e||t.data("dropdown",e=new s(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=s,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.dropdown.data-api",n).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown.data-api",h,s.prototype.toggle).on("keydown.dropdown.data-api",h+", [role=menu]",s.prototype.keydown)}(window.jQuery),function(o){"use strict";var s=function(t,e){this.options=e,this.$element=o(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",o.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};s.prototype={constructor:s,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,t=o.Event("show");this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var t=o.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),t&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),t?e.$element.one(o.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(t){t&&t.preventDefault();t=o.Event("hide"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),o(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),o.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;o(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){27==t.which&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,e=setTimeout(function(){t.$element.off(o.support.transition.end),t.hideModal()},500);this.$element.one(o.support.transition.end,function(){clearTimeout(e),t.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=o.support.transition&&e;if(this.$backdrop=o('<div class="modal-backdrop '+e+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?o.proxy(this.$element[0].focus,this.$element[0]):o.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;i?this.$backdrop.one(o.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),o.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(o.support.transition.end,t):t()):t&&t()}};var t=o.fn.modal;o.fn.modal=function(n){return this.each(function(){var t=o(this),e=t.data("modal"),i=o.extend({},o.fn.modal.defaults,t.data(),"object"==typeof n&&n);e||t.data("modal",e=new s(this,i)),"string"==typeof n?e[n]():i.show&&e.show()})},o.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},o.fn.modal.Constructor=s,o.fn.modal.noConflict=function(){return o.fn.modal=t,this},o(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var e=o(this),i=e.attr("href"),n=o(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("modal")?"toggle":o.extend({remote:!/#/.test(i)&&i},n.data(),e.data());t.preventDefault(),n.modal(s).one("hide",function(){e.focus()})})}(window.jQuery),function(h){"use strict";var s=function(t,e){this.init("tooltip",t,e)};s.prototype={constructor:s,init:function(t,e,i){var n,s,o,a,r;for(this.type=t,this.$element=h(e),this.options=this.getOptions(i),this.enabled=!0,r=(o=this.options.trigger.split(" ")).length;r--;)"click"==(a=o[r])?this.$element.on("click."+this.type,this.options.selector,h.proxy(this.toggle,this)):"manual"!=a&&(n="hover"==a?"mouseenter":"focus",s="hover"==a?"mouseleave":"blur",this.$element.on(n+"."+this.type,this.options.selector,h.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,h.proxy(this.leave,this)));this.options.selector?this._options=h.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return(t=h.extend({},h.fn[this.type].defaults,this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var e,i=h.fn[this.type].defaults,n={};if(this._options&&h.each(this._options,function(t,e){i[t]!=e&&(n[t]=e)},this),!(e=h(t.currentTarget)[this.type](n).data(this.type)).options.delay||!e.options.delay.show)return e.show();clearTimeout(this.timeout),e.hoverState="in",this.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)},leave:function(t){var e=h(t.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!e.options.delay||!e.options.delay.hide)return e.hide();e.hoverState="out",this.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)},show:function(){var t,e,i,n,s,o,a=h.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),e=this.getPosition(),i=t[0].offsetWidth,n=t[0].offsetHeight,s){case"bottom":o={top:e.top+e.height,left:e.left+e.width/2-i/2};break;case"top":o={top:e.top-n,left:e.left+e.width/2-i/2};break;case"left":o={top:e.top+e.height/2-n/2,left:e.left-i};break;case"right":o={top:e.top+e.height/2-n/2,left:e.left+e.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(t,e){var i,n,s,o,a=this.tip(),r=a[0].offsetWidth,h=a[0].offsetHeight;a.offset(t).addClass(e).addClass("in"),i=a[0].offsetWidth,n=a[0].offsetHeight,"top"==e&&n!=h&&(t.top=t.top+h-n,o=!0),"bottom"==e||"top"==e?(s=0,t.left<0&&(s=-2*t.left,t.left=0,a.offset(t),i=a[0].offsetWidth,n=a[0].offsetHeight),this.replaceArrow(s-r+i,i,"left")):this.replaceArrow(n-h,n,"top"),o&&a.offset(t)},replaceArrow:function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function t(){var t=setTimeout(function(){e.off(h.support.transition.end).detach()},500);e.one(h.support.transition.end,function(){clearTimeout(t),e.detach()})}var e=this.tip(),i=h.Event("hide");if(this.$element.trigger(i),!i.isDefaultPrevented())return e.removeClass("in"),h.support.transition&&this.$tip.hasClass("fade")?t():e.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return h.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},tip:function(){return this.$tip=this.$tip||h(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var e=t?h(t.currentTarget)[this.type](this._options).data(this.type):this;e.tip().hasClass("in")?e.hide():e.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var t=h.fn.tooltip;h.fn.tooltip=function(n){return this.each(function(){var t=h(this),e=t.data("tooltip"),i="object"==typeof n&&n;e||t.data("tooltip",e=new s(this,i)),"string"==typeof n&&e[n]()})},h.fn.tooltip.Constructor=s,h.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},h.fn.tooltip.noConflict=function(){return h.fn.tooltip=t,this}}(window.jQuery),function(s){"use strict";var o=function(t,e){this.init("popover",t,e)};o.prototype=s.extend({},s.fn.tooltip.Constructor.prototype,{constructor:o,setContent:function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](i),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t=this.$element,e=this.options;return("function"==typeof e.content?e.content.call(t[0]):e.content)||t.attr("data-content")},tip:function(){return this.$tip||(this.$tip=s(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var t=s.fn.popover;s.fn.popover=function(n){return this.each(function(){var t=s(this),e=t.data("popover"),i="object"==typeof n&&n;e||t.data("popover",e=new o(this,i)),"string"==typeof n&&e[n]()})},s.fn.popover.Constructor=o,s.fn.popover.defaults=s.extend({},s.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),s.fn.popover.noConflict=function(){return s.fn.popover=t,this}}(window.jQuery),function(o){"use strict";function s(t,e){var i,n=o.proxy(this.process,this),s=o(t).is("body")?o(window):o(t);this.options=o.extend({},o.fn.scrollspy.defaults,e),this.$scrollElement=s.on("scroll.scroll-spy.data-api",n),this.selector=(this.options.target||(i=o(t).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=o("body"),this.refresh(),this.process()}s.prototype={constructor:s,refresh:function(){var n=this;this.offsets=o([]),this.targets=o([]),this.$body.find(this.selector).map(function(){var t=o(this),e=t.data("target")||t.attr("href"),i=/^#\w/.test(e)&&o(e);return i&&i.length&&[[i.position().top+(!o.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=(this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight)-this.$scrollElement.height(),n=this.offsets,s=this.targets,o=this.activeTarget;if(i<=e)return o!=(t=s.last()[0])&&this.activate(t);for(t=n.length;t--;)o!=s[t]&&e>=n[t]&&(!n[t+1]||e<=n[t+1])&&this.activate(s[t])},activate:function(t){var e,i;this.activeTarget=t,o(this.selector).parent(".active").removeClass("active"),i=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',(e=o(i).parent("li").addClass("active")).parent(".dropdown-menu").length&&(e=e.closest("li.dropdown").addClass("active")),e.trigger("activate")}};var t=o.fn.scrollspy;o.fn.scrollspy=function(n){return this.each(function(){var t=o(this),e=t.data("scrollspy"),i="object"==typeof n&&n;e||t.data("scrollspy",e=new s(this,i)),"string"==typeof n&&e[n]()})},o.fn.scrollspy.Constructor=s,o.fn.scrollspy.defaults={offset:10},o.fn.scrollspy.noConflict=function(){return o.fn.scrollspy=t,this},o(window).on("load",function(){o('[data-spy="scroll"]').each(function(){var t=o(this);t.scrollspy(t.data())})})}(window.jQuery),function(a){"use strict";var n=function(t){this.element=a(t)};n.prototype={constructor:n,show:function(){var t,e,i,n=this.element,s=n.closest("ul:not(.dropdown-menu)"),o=n.attr("data-target");o||(o=(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]*$)/,"")),n.parent("li").hasClass("active")||(t=s.find(".active:last a")[0],i=a.Event("show",{relatedTarget:t}),n.trigger(i),i.isDefaultPrevented()||(e=a(o),this.activate(n.parent("li"),s),this.activate(e,e.parent(),function(){n.trigger({type:"shown",relatedTarget:t})})))},activate:function(t,e,i){function n(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),o?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),i&&i()}var s=e.find("> .active"),o=i&&a.support.transition&&s.hasClass("fade");o?s.one(a.support.transition.end,n):n(),s.removeClass("in")}};var t=a.fn.tab;a.fn.tab=function(i){return this.each(function(){var t=a(this),e=t.data("tab");e||t.data("tab",e=new n(this)),"string"==typeof i&&e[i]()})},a.fn.tab.Constructor=n,a.fn.tab.noConflict=function(){return a.fn.tab=t,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),a(this).tab("show")})}(window.jQuery),function(s){"use strict";var o=function(t,e){this.$element=s(t),this.options=s.extend({},s.fn.typeahead.defaults,e),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=s(this.options.menu),this.shown=!1,this.listen()};o.prototype={constructor:o,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var t=s.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var t;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(t=s.isFunction(this.source)?this.source(this.query,s.proxy(this.process,this)):this.source)?this.process(t):this},process:function(t){var e=this;return t=s.grep(t,function(t){return e.matcher(t)}),(t=this.sorter(t)).length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,i=[],n=[],s=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?n.push(e):s.push(e):i.push(e);return i.concat(n,s)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(t){var i=this;return(t=s(t).map(function(t,e){return(t=s(i.options.item).attr("data-value",e)).find("a").html(i.highlighter(e)),t[0]})).first().addClass("active"),this.$menu.html(t),this},next:function(){var t=this.$menu.find(".active").removeClass("active").next();t.length||(t=s(this.$menu.find("li")[0])),t.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active").prev();t.length||(t=this.$menu.find("li").last()),t.addClass("active")},listen:function(){this.$element.on("focus",s.proxy(this.focus,this)).on("blur",s.proxy(this.blur,this)).on("keypress",s.proxy(this.keypress,this)).on("keyup",s.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",s.proxy(this.keydown,this)),this.$menu.on("click",s.proxy(this.click,this)).on("mouseenter","li",s.proxy(this.mouseenter,this)).on("mouseleave","li",s.proxy(this.mouseleave,this))},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(t){this.suppressKeyPressRepeat=~s.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},focus:function(){this.focused=!0},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(t){t.stopPropagation(),t.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),s(t.currentTarget).addClass("active")},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var t=s.fn.typeahead;s.fn.typeahead=function(n){return this.each(function(){var t=s(this),e=t.data("typeahead"),i="object"==typeof n&&n;e||t.data("typeahead",e=new o(this,i)),"string"==typeof n&&e[n]()})},s.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},s.fn.typeahead.Constructor=o,s.fn.typeahead.noConflict=function(){return s.fn.typeahead=t,this},s(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var t=s(this);t.data("typeahead")||t.typeahead(t.data())})}(window.jQuery),function(h){"use strict";var s=function(t,e){this.options=h.extend({},h.fn.affix.defaults,e),this.$window=h(window).on("scroll.affix.data-api",h.proxy(this.checkPosition,this)).on("click.affix.data-api",h.proxy(function(){setTimeout(h.proxy(this.checkPosition,this),1)},this)),this.$element=h(t),this.checkPosition()};s.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t,e=h(document).height(),i=this.$window.scrollTop(),n=this.$element.offset(),s=this.options.offset,o=s.bottom,a=s.top,r="affix affix-top affix-bottom";"object"!=typeof s&&(o=a=s),"function"==typeof a&&(a=s.top()),"function"==typeof o&&(o=s.bottom()),t=!(null!=this.unpin&&i+this.unpin<=n.top)&&(null!=o&&n.top+this.$element.height()>=e-o?"bottom":null!=a&&i<=a&&"top"),this.affixed!==t&&(this.affixed=t,this.unpin="bottom"==t?n.top-i:null,this.$element.removeClass(r).addClass("affix"+(t?"-"+t:"")))}};var t=h.fn.affix;h.fn.affix=function(n){return this.each(function(){var t=h(this),e=t.data("affix"),i="object"==typeof n&&n;e||t.data("affix",e=new s(this,i)),"string"==typeof n&&e[n]()})},h.fn.affix.Constructor=s,h.fn.affix.defaults={offset:0},h.fn.affix.noConflict=function(){return h.fn.affix=t,this},h(window).on("load",function(){h('[data-spy="affix"]').each(function(){var t=h(this),e=t.data();e.offset=e.offset||{},e.offsetBottom&&(e.offset.bottom=e.offsetBottom),e.offsetTop&&(e.offset.top=e.offsetTop),t.affix(e)})})}(window.jQuery);
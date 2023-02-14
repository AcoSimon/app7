(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var v=e.$,$=(e.Template7,e.utils),a=(e.device,e.support,e.Class),s=(e.Modal,e.ConstructorMethods),r=(e.ModalMethods,function(b){function e(e,t){void 0===t&&(t={}),b.call(this,t,[e]);var a=this,s={top:!1,topOffset:0,bottomOffset:0,attachments:[],renderAttachments:void 0,renderAttachment:void 0,maxHeight:null,resizePage:!0};a.useModulesParams(s),a.params=$.extend(s,t);var r=v(a.params.el);if(0===r.length)return a;if(r[0].f7Messagebar)return r[0].f7Messagebar;r[0].f7Messagebar=a;var n,i=r.parents(".page").eq(0),o=i.find(".page-content").eq(0),l=r.find(".messagebar-area");n=a.params.textareaEl?v(a.params.textareaEl):r.find("textarea");var h=r.find(".messagebar-attachments"),c=r.find(".messagebar-sheet");function m(){a.params.resizePage&&a.resizePage()}function g(e){e.preventDefault()}function p(e){var t=v(this).index();v(e.target).closest(".messagebar-attachment-delete").length?(v(this).trigger("messagebar:attachmentdelete",t),a.emit("local::attachmentDelete messagebarAttachmentDelete",a,this,t)):(v(this).trigger("messagebar:attachmentclick",t),a.emit("local::attachmentClick messagebarAttachmentClick",a,this,t))}function u(){a.checkEmptyState(),a.$el.trigger("messagebar:change"),a.emit("local::change messagebarChange",a)}function f(){a.sheetHide(),a.$el.addClass("messagebar-focused"),a.$el.trigger("messagebar:focus"),a.emit("local::focus messagebarFocus",a)}function d(){a.$el.removeClass("messagebar-focused"),a.$el.trigger("messagebar:blur"),a.emit("local::blur messagebarBlur",a)}return a.params.top&&r.addClass("messagebar-top"),$.extend(a,{$el:r,el:r[0],$areaEl:l,areaEl:l[0],$textareaEl:n,textareaEl:n[0],$attachmentsEl:h,attachmentsEl:h[0],attachmentsVisible:h.hasClass("messagebar-attachments-visible"),$sheetEl:c,sheetEl:c[0],sheetVisible:c.hasClass("messagebar-sheet-visible"),$pageEl:i,pageEl:i[0],$pageContentEl:o,pageContentEl:o,top:r.hasClass("messagebar-top")||a.params.top,attachments:[]}),a.attachEvents=function(){r.on("textarea:resize",m),r.on("submit",g),r.on("click",".messagebar-attachment",p),n.on("change input",u),n.on("focus",f),n.on("blur",d),e.on("resize",m)},a.detachEvents=function(){r.off("textarea:resize",m),r.off("submit",g),r.off("click",".messagebar-attachment",p),n.off("change input",u),n.off("focus",f),n.off("blur",d),e.off("resize",m)},a.useModules(),a.init(),a}return b&&(e.__proto__=b),((e.prototype=Object.create(b&&b.prototype)).constructor=e).prototype.focus=function(){return this.$textareaEl.focus(),this},e.prototype.blur=function(){return this.$textareaEl.blur(),this},e.prototype.clear=function(){return this.$textareaEl.val("").trigger("change"),this},e.prototype.getValue=function(){return this.$textareaEl.val().trim()},e.prototype.setValue=function(e){return this.$textareaEl.val(e).trigger("change"),this},e.prototype.setPlaceholder=function(e){return this.$textareaEl.attr("placeholder",e),this},e.prototype.resizePage=function(){var e=this,t=e.params,a=e.$el,s=e.top,r=e.$pageEl,n=e.$pageContentEl,i=e.$areaEl,o=e.$textareaEl,l=e.$sheetEl,h=e.$attachmentsEl,c=a[0].offsetHeight,m=t.maxHeight;if(s);else{var g=parseInt(n.css("padding-bottom"),10),p=c+t.bottomOffset;if(p!==g&&n.length){var u=parseInt(n.css("padding-top"),10),f=n[0].scrollHeight,d=n[0].offsetHeight,b=n[0].scrollTop===f-d;m||(m=r[0].offsetHeight-u-l.outerHeight()-h.outerHeight()-parseInt(i.css("margin-top"),10)-parseInt(i.css("margin-bottom"),10)),o.css("max-height",m+"px"),n.css("padding-bottom",p+"px"),b&&n.scrollTop(n[0].scrollHeight-d),a.trigger("messagebar:resizepage"),e.emit("local::resizePage messagebarResizePage",e)}}},e.prototype.checkEmptyState=function(){var e=this.$el,t=this.$textareaEl.val().trim();t&&t.length?e.addClass("messagebar-with-value"):e.removeClass("messagebar-with-value")},e.prototype.attachmentsCreate=function(e){void 0===e&&(e="");var t=v('<div class="messagebar-attachments">'+e+"</div>");return t.insertBefore(this.$textareaEl),$.extend(this,{$attachmentsEl:t,attachmentsEl:t[0]}),this},e.prototype.attachmentsShow=function(e){void 0===e&&(e="");var t=this;return t.$attachmentsEl=t.$el.find(".messagebar-attachments"),0===t.$attachmentsEl.length&&t.attachmentsCreate(e),t.$el.addClass("messagebar-attachments-visible"),t.attachmentsVisible=!0,t.params.resizePage&&t.resizePage(),t},e.prototype.attachmentsHide=function(){var e=this;return e.$el.removeClass("messagebar-attachments-visible"),e.attachmentsVisible=!1,e.params.resizePage&&e.resizePage(),e},e.prototype.attachmentsToggle=function(){return this.attachmentsVisible?this.attachmentsHide():this.attachmentsShow(),this},e.prototype.renderAttachment=function(e){return this.params.renderAttachment?this.params.renderAttachment.call(this,e):'\n      <div class="messagebar-attachment">\n        <img src="'+e+'">\n        <span class="messagebar-attachment-delete"></span>\n      </div>\n    '},e.prototype.renderAttachments=function(){var e,t=this;e=t.params.renderAttachments?t.params.renderAttachments.call(t,t.attachments):""+t.attachments.map(function(e){return t.renderAttachment(e)}).join(""),0===t.$attachmentsEl.length?t.attachmentsCreate(e):t.$attachmentsEl.html(e)},e.prototype.sheetCreate=function(e){void 0===e&&(e="");var t=v('<div class="messagebar-sheet">'+e+"</div>");return this.$el.append(t),$.extend(this,{$sheetEl:t,sheetEl:t[0]}),this},e.prototype.sheetShow=function(e){void 0===e&&(e="");var t=this;return t.$sheetEl=t.$el.find(".messagebar-sheet"),0===t.$sheetEl.length&&t.sheetCreate(e),t.$el.addClass("messagebar-sheet-visible"),t.sheetVisible=!0,t.params.resizePage&&t.resizePage(),t},e.prototype.sheetHide=function(){var e=this;return e.$el.removeClass("messagebar-sheet-visible"),e.sheetVisible=!1,e.params.resizePage&&e.resizePage(),e},e.prototype.sheetToggle=function(){return this.sheetVisible?this.sheetHide():this.sheetShow(),this},e.prototype.init=function(){return this.attachEvents(),this.checkEmptyState(),this},e.prototype.destroy=function(){var e=this;e.emit("local::beforeDestroy messagebarBeforeDestroy",e),e.$el.trigger("messagebar:beforedestroy",e),e.detachEvents(),e.$el[0]&&(e.$el[0].f7Messagebar=null,delete e.$el[0].f7Messagebar),$.deleteProps(e)},e}(a)),n={name:"messagebar",static:{Messagebar:r},create:function(){this.messagebar=s({defaultSelector:".messagebar",constructor:r,app:this,domProp:"f7Messagebar",addMethods:"clear getValue setValue setPlaceholder resizePage focus blur attachmentsCreate attachmentsShow attachmentsHide attachmentsToggle renderAttachments sheetCreate sheetShow sheetHide sheetToggle".split(" ")})},on:{tabBeforeRemove:function(e){var a=this;v(e).find(".messagebar-init").each(function(e,t){a.messagebar.destroy(t)})},tabMounted:function(e){var a=this;v(e).find(".messagebar-init").each(function(e,t){a.messagebar.create($.extend({el:t},v(t).dataset()))})},pageBeforeRemove:function(e){var a=this;e.$el.find(".messagebar-init").each(function(e,t){a.messagebar.destroy(t)})},pageInit:function(e){var a=this;e.$el.find(".messagebar-init").each(function(e,t){a.messagebar.create($.extend({el:t},v(t).dataset()))})}},vnode:{"messagebar-init":{insert:function(e){var t=e.elm;this.messagebar.create($.extend({el:t},v(t).dataset()))},destroy:function(e){var t=e.elm;this.messagebar.destroy(t)}}}};if(t){if(e.prototype.modules&&e.prototype.modules[n.name])return;e.use(n),e.instance&&(e.instance.useModuleParams(n,e.instance.params),e.instance.useModule(n))}return n}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
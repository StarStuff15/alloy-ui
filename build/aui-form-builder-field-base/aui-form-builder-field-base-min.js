YUI.add("aui-form-builder-field-base",function(e,t){var n=e.getClassName("form","builder","field"),r=e.getClassName("form","builder","field","content"),i=e.getClassName("form","builder","field","content","footer"),s=e.getClassName("form","builder","field","content","toolbar"),o=e.getClassName("form","builder","field","footer","content"),u=e.getClassName("form","builder","field","move","button"),a=e.getClassName("form","builder","field","move","target"),f=e.getClassName("form","builder","field","nested"),l=e.getClassName("form","builder","field","overlay"),c=e.getClassName("form","builder","field","settings","panel"),h=e.getClassName("form","builder","field","settings","panel","advanced"),p=e.getClassName("form","builder","field","settings","panel","advanced","content"),d=e.getClassName("form","builder","field","settings","panel","content"),v=e.getClassName("form","builder","field","settings","panel","toggler","advanced"),m=e.getClassName("form","builder","field","toolbar","container"),g=e.getClassName("hide");e.FormBuilderFieldBase=function(){},e.FormBuilderFieldBase.prototype={TPL_FIELD:'<div class="'+n+' form-field" tabindex="9">'+'<div class="'+s+'">'+'<div class="'+r+' form-field-content"></div>'+'<div class="'+u+' layout-builder-move-cut-button"></div>'+'<div class="'+m+'"></div></div>'+'<div class="'+f+' form-field-nested"></div>'+'<div class="'+l+'"></div>'+'<div class="'+i+'"></div>'+"</div>",TPL_FIELD_MOVE_TARGET:'<button type="button" class="'+a+' layout-builder-move-target layout-builder-move-col-target btn btn-default">'+"{subquestion}</button>",TPL_FIELD_SETTINGS_PANEL:'<div class="'+c+' clearfix">'+'<div class="'+d+'">'+"</div>"+'<div class="'+h+'">'+'<a class="'+v+'" href="javascript:void(0)">{advancedOptions}</a>'+'<div class="'+p+'"></div>'+"</div>"+"</div>",TPL_FIELD_FOOTER_CONTENT:'<div class="'+o+'"></div>',initializer:function(){var t,n;this._fieldSettingsPanel=e.Node.create(e.Lang.sub(this.TPL_FIELD_SETTINGS_PANEL,{advancedOptions:this.get("strings").advancedOptions})),t=this._getAdvancedSettings();for(n=0;n<t.length;n++)t[n].footerLabel&&this.after(t[n].attrName+"Change",this._afterAdvancedSettingsChange);this._updateAdvancedSettingsChange()},collapseModalContent:function(){this._advancedSettingsToggler.set("expanded",!1)},renderAdvancedSettings:function(){var e=this._getAdvancedSettings(),t,n;if(e.length){t=this._fieldSettingsPanel.one("."+p);for(n=0;n<e.length;n++)this.renderSetting(e[n],t)}else this._fieldSettingsPanel.one("."+h).addClass(g)},renderBasicSettings:function(){var e=this._fieldSettingsPanel.one("."+d),t,n=this._getSettings();for(t=0;t<n.length;t++)this.renderSetting(n[t],e)},renderSetting:function(e,t){var n=this.get(e.attrName);e.editor.get("node").removeClass("has-error"),e.editor.set("originalValue",n),e.editor.set("editedValue",n),t.append(e.editor.get("node"))},renderSettingsPanel:function(e){this.renderBasicSettings(),this.renderAdvancedSettings(),e.setHTML(this._fieldSettingsPanel),this._advancedSettingsToggler||this._createAdvancedSettingsToggler()},saveSettings:function(){var e=this._getAdvancedSettings(),t,n=this._getSettings();for(t=0;t<n.length;t++)this.set(n[t].attrName,n[t].editor.get("editedValue"));for(t=0;t<e.length;t++)this.set(e[t].attrName,e[t].editor.get("editedValue"))},validateSettings:function(){var e,t=!0,n=this._getSettings();for(e=0;e<n.length;e++)n[e].editor.isValid()||(n[e].editor.get("node").addClass("has-error"),t=!1);return t},_afterAdvancedSettingsChange:function(){this._updateAdvancedSettingsChange()},_afterExpandedChange:function(e){this._toggleVisibilityOfModalContent(e.newVal)},_createAdvancedSettingsToggler:function(){this._advancedSettingsToggler=new e.Toggler({animated:!0,content:"."+p,header:"."+v,expanded:this.get("content").one("."+i).hasChildNodes(),toggleEvent:"click"}),this._advancedSettingsToggler.after("expandedChange",e.bind(this._afterExpandedChange,this))},_createMoveTarget:function(t){var n;return n=e.Node.create(e.Lang.sub(this.TPL_FIELD_MOVE_TARGET,{subquestion:this.get("strings").subquestion})),n.setData("nested-field-index",t),n.setData("nested-field-parent",this),n},_getAdvancedSettings:function(){return this._advancedSettings||(this._advancedSettings=[],this._fillAdvancedSettings&&this._fillAdvancedSettings()),this._advancedSettings},_getSettings:function(){return this._settings||(this._settings=[{attrName:"title",editor:new e.TextDataEditor({label:"Question",placeholder:"Type your question here",required:!0})},{attrName:"help",editor:new e.TextDataEditor({label:"Help text"})}],this._fillSettings&&this._fillSettings()),this._settings},_updateAdvancedSettingsChange:function(){var t=this._getAdvancedSettings(),n,r;this.get("content").one("."+i).empty();for(r=0;r<t.length;r++)t[r].footerLabel&&this.get(t[r].attrName)&&(n=e.Node.create(this.TPL_FIELD_FOOTER_CONTENT),n.set("text",t[r].footerLabel+": "+this.get(t[r].attrName)),this.get("content").one("."+i).append(n))},_toggleVisibilityOfModalContent:function(){this.fire("contentToggle")},_uiSetNestedFields:function(t){var n=this,r=this.get("content").one("."+f);r.empty(),r.append(this._createMoveTarget(0)),e.Array.each(t,function(e,t){r.append(e.get("content")),r.append(n._createMoveTarget(t+1))})}},e.FormBuilderFieldBase.ATTRS={strings:{value:{advancedOptions:"Advanced options",subquestion:"Paste as subquestion"},writeOnce:!0}}},"3.0.2-deprecated.1",{requires:["aui-classnamemanager","aui-node-base","aui-text-data-editor","aui-toggler","base","node-base"],skinnable:!0});

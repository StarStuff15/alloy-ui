YUI.add("aui-widget-toolbars",function(e,t){var n=e.WidgetStdMod,r=function(){};r.ATTRS={toolbars:{},toolbarPosition:{value:{body:n.AFTER,footer:n.AFTER,header:n.BEFORE}},toolbarCssClass:{value:{body:"",footer:"",header:""}}},r.prototype={toolbars:null,initializer:function(){var t=this;t.toolbars={},e.after(t._syncUIToolbars,t,"syncUI"),t.after("toolbarsChange",t._afterToolbarsChange)},addToolbar:function(t,n){var r=this;return n=r.getToolbarSection(n),r.removeToolbar(n),e.instanceOf(t,e.Toolbar)||(t=new e.Toolbar({cssClass:this.get("toolbarCssClass."+n)||"",children:t,render:r.getStdModNode(n,!0)})),t.addTarget(r),r.toolbars[n]=t,r.setStdModContent(n,t.get("boundingBox"),r.get("toolbarPosition."+n)),r._syncPrimaryButtonUI(),t},getToolbar:function(e){var t=this;return t.toolbars[t.getToolbarSection(e)]},getToolbarSection:function(e){return e||n.FOOTER},removeToolbar:function(e){var t=this,n=t.toolbars[t.getToolbarSection(e)];return n&&n.destroy(),n},_syncPrimaryButtonUI:function(){var t=this,n=t.get("boundingBox").one("."+e.ButtonCore.CLASS_NAMES.PRIMARY);n&&n.focus().focus()},_syncUIToolbars:function(){var e=this;e._uiSetToolbars(this.get("toolbars"))},_uiSetToolbars:function(t){var n=this;e.each(t,e.bind(n.addToolbar,n))}},e.WidgetToolbars=r},"3.0.3-deprecated.45",{requires:["widget-stdmod","aui-toolbar"]});

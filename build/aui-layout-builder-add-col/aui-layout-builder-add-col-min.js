YUI.add("aui-layout-builder-add-col",function(e,t){var n="addColumn",r=e.getClassName("layout","builder","add","col","draggable"),i=e.getClassName("layout","builder","add","col","handle"),s=e.getClassName("layout","builder","resize","col","draggable"),o=e.getClassName("layout","builder","resize","col","draggable","border"),u=e.getClassName("layout","builder","resize","col","draggable","handle"),a=e.getClassName("expand","left"),f=e.getClassName("expand","right"),l=".layout-row";e.LayoutBuilderAddCol=function(){},e.LayoutBuilderAddCol.prototype={TPL_RESIZE_ADD_COL:'<div data-layout-action="'+n+'" class="'+s+" "+r+'">'+'<div class="'+o+'"></div>'+'<div class="'+u+'" tabindex="8">'+'<span class="'+i+'"></span></div></div>',initializer:function(){this._eventHandles.push(this.after("enableAddColsChange",this._afterEnableAddColsChange),this.after("enableResizeColsChange",this._afterEnableAddColsChange),this.after("layout:isColumnModeChange",e.bind(this._afterAddColIsColumnModeChange,this))),this._uiSetEnableAddCols(this.get("enableAddCols"))},destructor:function(){this._unbindAddColEvents()},_afterAddColIsColumnModeChange:function(){this._uiSetEnableAddCols(this.get("enableAddCols"))},_afterAddColLayoutColsChange:function(e){var t=e.target.get("node").one(l);this._appendAddColButtonToSingleRow(t)},_afterAddColRowsChange:function(){this._removeAddColButton(),this._appendAddColButtonToRows()},_afterEnableAddColsChange:function(){this._uiSetEnableAddCols(this.get("enableAddCols"))},_appendAddColButtonToRows:function(){var e=this,t=this._layoutContainer.all(l);t.each(function(t){e._appendAddColButtonToSingleRow(t)})},_appendAddColButtonToSingleRow:function(t){var n,r=t.getData("layout-row"),s,o;n=r.get("cols"),n.length<r.get("maximumCols")&&(s=e.Node.create(this.TPL_RESIZE_ADD_COL),o=e.Node.create(this.TPL_RESIZE_ADD_COL),s.one("."+u).addClass(a),s.one("."+i).addClass(this.get("addButtonLeftClass")),s.setStyle("left","0%"),s.setData("layout-position",0),s.setData("layout-col2",n[0]),o.one("."+u).addClass(f),o.one("."+i).addClass(this.get("addButtonRightClass")),o.setStyle("left","100%"),o.setData("layout-position",r.get("maximumCols")),o.setData("layout-col1",n[n.length-1]),t.append(s),t.append(o))},_bindAddColEvents:function(){this._addColsEventHandles=[this.after("layout-row:colsChange",this._afterAddColLayoutColsChange),this.after("layout:rowsChange",this._afterAddColRowsChange)]},_removeAddColButton:function(){this._layoutContainer.all("."+r).remove()},_uiSetEnableAddCols:function(e){e&&this.get("layout").get("isColumnMode")&&this.get("enableResizeCols")?(this._appendAddColButtonToRows(),this._bindAddColEvents()):(this._removeAddColButton(),this._unbindAddColEvents())},_unbindAddColEvents:function(){this._addColsEventHandles&&(new e.EventHandle(this._addColsEventHandles)).detach()}},e.LayoutBuilderAddCol.ATTRS={addButtonLeftClass:{validator:e.Lang.isString,value:"glyphicon glyphicon-hand-right"},addButtonRightClass:{validator:e.Lang.isString,value:"glyphicon glyphicon-hand-left"},enableAddCols:{validator:e.Lang.isBoolean,value:!0}}},"3.0.2-deprecated.1",{requires:["event-key","node-base"],skinnable:!0});

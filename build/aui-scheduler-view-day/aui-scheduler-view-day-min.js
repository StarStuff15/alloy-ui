YUI.add("aui-scheduler-view-day",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isFunction,s=n.isNumber,o=n.isObject,u=e.DataType.DateMath,a=e.WidgetStdMod,f=function(e,t){return function(n){var r=n.all(e);return r.size()>=t?r:null}},l=function(e,t){return Math.round(e/t)*t},c=function(e){return parseFloat(e)||0},h=e.getClassName,p=h("scheduler-view","table","data"),d=h("scheduler-event"),v=h("scheduler-event","disabled"),m=h("scheduler-event","intersecting"),g=h("scheduler-event","proxy"),y=h("scheduler","today"),b=h("scheduler","today","hd"),w=h("scheduler-view","scrollable"),E=h("scheduler-view","coldata"),S=h("scheduler-view","colgrid"),x=h("scheduler-view","day","current","time"),T=h("scheduler-view","grid"),N=h("scheduler-view","grid","container"),C=h("scheduler-view","day","header","col"),k=h("scheduler-view","day","header","day"),L=h("scheduler-view","day","header","day","first"),A=h("scheduler-view","day","header","day","number"),O=h("scheduler-view","day","header","day","weekday"),M=h("scheduler-view","day","header","table"),_=h("scheduler-view","day","header","view","label"),D=h("scheduler-view","icon","grip","horizontal"),P=h("scheduler-view","marker","division"),H=h("scheduler-view","markercell"),B=h("scheduler-view","markers"),j=h("scheduler-view","day","resizer"),F=h("scheduler-view","day","resizer","icon"),I=h("scheduler-view","day","table"),q=h("scheduler-view","day","table","col"),R=h("scheduler-view","day","table","col","shim"),U=h("scheduler-view","day","table","colblank"),z=h("scheduler-view","day","table","colday"),W=h("scheduler-view","day","table","coltime"),X=h("scheduler-view","day","table","time"),V='<div class="'+x+'"></div>',$='<div class="'+j+'">'+'<div class="'+[D,F].join(" ")+'"></div>'+"</div>",J='<div class="'+H+'">'+'<div class="'+P+'"></div>'+"</div>",K='<span class="'+_+'">{label}</span>',Q='<table cellspacing="0" cellpadding="0" class="'+I+'">'+"<tbody>"+'<tr class="'+S+'" height="1">'+'<td height="0" class="'+[q,U].join(" ")+'"></td>'+'<td class="'+N+'" colspan="1">'+'<div class="'+T+'">'+'<div class="'+B+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+E+'">'+'<td class="'+[q,W].join(" ")+'"></td>'+"</tr>"+"</tbody>"+"</table>",G='<td class="'+[q,z].join(" ")+'" data-colnumber="{colNumber}">'+'<div class="'+R+'">&nbsp;</div>'+"</td>",Y='<div class="'+X+'">{hour}</div>',Z='<table cellspacing="0" cellpadding="0" class="'+M+'">'+"<tbody>"+'<tr class="'+C+'"></tr>'+"</tbody>"+"</table>",et='<th class="'+k+'" data-colnumber="{colNumber}"><a href="#">&nbsp;</a></th>',tt='<span class="'+O+'">%a</span> <span class="'+A+'">%d</span>',nt='<td class="'+[k,L].join(" ")+'"></td>',rt=e.Component.create({NAME:"scheduler-view-day",ATTRS:{bodyContent:{value:""},currentTimeNode:{valueFn:function(){return e.Node.create(V)}},days:{value:1,validator:s},delegateConfig:{value:{},setter:function(t){var n=this;return e.merge({dragConfig:{useShim:!1},bubbleTargets:n,container:n.get("boundingBox"),nodes:"."+d,invalid:"input, select, button, a, textarea, ."+v},t||{})},validator:o},eventWidth:{value:95,validator:s},filterFn:{value:function(e){return e.get("visible")&&e.getHoursDuration()<=24&&!e.get("allDay")}},headerDateFormatter:{value:function(t){var n=this,r=n.get("scheduler");return e.DataType.Date.format(t,{format:tt,locale:r.get("locale")})},validator:i},headerView:{value:!0,validator:r},headerViewConfig:{setter:function(t){return e.merge({displayDaysInterval:1,displayRows:6,filterFn:function(e){return e.getHoursDuration()>24||e.get("allDay")},height:"auto",visible:!0},t||{})},value:{}},hourHeight:{value:52,validator:s},name:{value:"day"},navigationDateFormatter:{value:function(t){var n=this,r=n.get("scheduler");return e.DataType.Date.format(t,{format:"%A, %B %d, %Y",locale:r.get("locale")})},validator:i},strings:{value:{allDay:"All day"}},headerTableNode:{valueFn:function(){return e.Node.create(Z)}},headerViewLabelNode:{valueFn:function(){var t=this,r=t.get("strings");return e.Node.create(n.sub(K,{label:r.allDay}))}},resizerNode:{valueFn:function(){return e.Node.create($)}},tableNode:{valueFn:function(){return e.Node.create(Q)}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colDaysNode:f("."+z,1),colHeaderDaysNode:f("."+k,2),currentTimeNode:"."+x,headerTableNode:"."+M,headerViewLabelNode:"."+_,markercellsNode:f("."+H,24),resizerNode:"."+j,tableNode:"."+I,timesNode:f("."+X,24)},EXTENDS:e.SchedulerView,prototype:{initializer:function(){var t=this;t.colDaysNode=t.get("colDaysNode"),t.colHeaderDaysNode=t.get("colHeaderDaysNode"),t.currentTimeNode=t.get("currentTimeNode"),t.headerTableNode=t.get("headerTableNode"),t.markercellsNode=t.get("markercellsNode"),t.resizerNode=t.get("resizerNode"),t.tableNode=t.get("tableNode"),t.timesNode=t.get("timesNode"),t.activeColumn=null,t.columnData=t.tableNode.one("."+E),t.columnDayHeader=t.headerTableNode.one("."+C),t.columnShims=t.colDaysNode.all("."+R),t.columnTime=t.tableNode.one("."+W),t.gridContainer=t.tableNode.one("."+N),t.markersNode=t.tableNode.one("."+B),t.get("headerView")&&(t.headerView=new e.SchedulerTableView(t.get("headerViewConfig")))},destructor:function(){this._eventHandles&&(new e.EventHandle(this._eventHandles)).detach(),clearInterval(this._currentTimeInterval)},renderUI:function(){var e=this;e.columnTime.setContent(e.timesNode),e.markersNode.setContent(e.markercellsNode),e.colDaysNode.appendTo(e.columnData),e.colHeaderDaysNode.appendTo(e.columnDayHeader),e.headerView&&(e.headerView.set("scheduler",e.get("scheduler")),e.headerView.render())},bindUI:function(){var t=this;t.headerTableNode.delegate("click",e.bind(t._onClickDaysHeader,t),"."+k),this._bindMouseEvents(),this._bindCurrentTimeInterval(),t.on("drag:end",t._onEventDragEnd),t.on("drag:start",t._onEventDragStart),t.on("drag:tickAlignY",t._dragTickAlignY),t.on("schedulerChange",t._onSchedulerChange),t.after("drag:align"
,t._afterDragAlign)},syncUI:function(){var e=this;rt.superclass.syncUI.apply(this,arguments),e.gridContainer.attr("colspan",e.get("days")),e.syncCurrentTimeUI(),e._setupDragDrop()},syncStdContent:function(){var t=this;t.setStdModContent(a.BODY,t.tableNode.getDOM());var n=e.NodeList.create(t.headerTableNode);t.headerView&&(n.push(t.headerView.get("boundingBox")),n.push(t.get("headerViewLabelNode"))),t.setStdModContent(a.HEADER,n)},calculateEventHeight:function(e){var t=this,n=t.get("hourHeight");return Math.max(e*(n/60),n/2)},calculateTop:function(e){var t=this;return(e.getHours()*60+e.getMinutes()+e.getSeconds()/60)*(t.get("hourHeight")/60)},getNextDate:function(){var e=this,t=e.get("scheduler").get("viewDate");return u.toLastHour(u.add(t,u.DAY,1))},getPrevDate:function(){var e=this,t=e.get("scheduler").get("viewDate");return u.toMidnight(u.subtract(t,u.DAY,1))},getColumnByDate:function(e){var t=this;return t.colDaysNode.item(t.getDateDaysOffset(e))},getColumnShimByDate:function(e){var t=this;return t.columnShims.item(t.getDateDaysOffset(e))},getDateByColumn:function(e){var t=this,n=u.safeClearTime(t.get("scheduler").get("viewDate"));return u.add(n,u.DAY,e)},getDateDaysOffset:function(e){var t=this,n=u.safeClearTime(t.get("scheduler").get("viewDate"));return u.countDays(u.safeClearTime(e),n)},getYCoordTime:function(e){var t=this,n=t.get("hourHeight"),r=c((e/n).toFixed(2)),i=Math.floor(r*100%100*.6),s=Math.floor(r);return[s,i,0]},plotEvent:function(e){var t=this,n=e.get("node");n.size()<2&&e.addPaddingNode();var r=e.get("node").item(0),i=e.get("node").item(1),s=t.getColumnShimByDate(e.get("endDate")),o=t.getColumnShimByDate(e.get("startDate"));o?(o.append(r),e.get("visible")&&r.show()):r.hide(),s?s.compareTo(o)||e.isDayBoundaryEvent()?i.hide():(s.append(i),e.get("visible")&&i.show()):i.hide(),e.syncUI(),t.syncEventTopUI(e),t.syncEventHeightUI(e)},plotEvents:function(){var t=this,n=t.get("scheduler"),r=t.get("filterFn");t.get("scheduler").flushEvents(),t.columnShims.each(function(i,s){var o=n.getEventsByDay(t.getDateByColumn(s),!0),u=[];i.empty(),e.Array.each(o,function(e){r.apply(t,[e])&&(t.plotEvent(e),u.push(e))}),t.syncEventsIntersectionUI(u)}),t.syncHeaderViewUI(),t.syncCurrentTimeUI()},scrollToDate:function(e){var t=this.get("boundingBox").one("."+w);this.get("scrollable")&&t&&t.set("scrollTop",this.calculateTop(e))},syncColumnsUI:function(){var e=this,t=e.get("scheduler").get("todayDate");e.colDaysNode.each(function(n,r){var i=e.getDateByColumn(r);n.toggleClass(y,!u.isDayOverlap(i,t))}),this.syncCurrentTimeUI()},syncCurrentTimeUI:function(){var t=this,n=t.get("scheduler"),r=n.get("currentTimeFn");r(e.bind(t._moveCurrentTimeNode,t))},syncDaysHeaderUI:function(){var e=this,t=e.get("scheduler").get("viewDate"),n=e.get("headerDateFormatter"),r=e.get("scheduler").get("todayDate");e.colHeaderDaysNode.all("a").each(function(i,s){var o=u.add(t,u.DAY,s);i.toggleClass(b,!u.isDayOverlap(o,r)),i.html(n.call(e,o))})},syncEventsIntersectionUI:function(t){var n=this,r=[],i=n.get("eventWidth");e.Array.each(t,function(s){var o=n.findEventIntersections(s,t),u=0,a=o.length,f=i/a;e.Array.each(o,function(t){var n=t.get("clientId"),s=e.Array.indexOf(r,n);if(s===-1){s=0,t._filtered&&(s=1);var o=t.get("node").item(s),l=f*u,c=f*1.7;u===a-1&&(c=i-l),o.setStyle("width",c+"%"),o.setStyle("left",l+"%"),a>1?o.addClass(m):o.removeClass(m);var h=o.get("parentNode");h&&h.insert(o,u),t._filtered=!0,r.push(n),u+=1}})})},syncEventHeightUI:function(e){var t=this,n=e.get("endDate"),r=e.get("startDate"),i=u.clone(r);i.setHours(24,0,0);var s=u.getMinutesOffset(t.limitDate(n,i),r);e.get("node").item(0).set("offsetHeight",t.calculateEventHeight(s));var o=e.get("node").item(1);if(o.inDoc()){var a=u.getMinutesOffset(n,u.toMidnight(e.getClearEndDate()));o.set("offsetHeight",t.calculateEventHeight(a))}},syncEventTopUI:function(e){var t=this;e.get("node").item(0).setStyle("top",t.calculateTop(e.get("startDate"))+"px"),e.get("node").item(1).setStyle("top",0)},syncHeaderViewUI:function(){var e=this;if(e.get("headerView")){var t=e.headerView;t.plotEvents();var n=e.headerNode;n&&n.setStyle("overflowY","scroll");var r=t.get("boundingBox"),i=r.one("."+p),s=Math.max(i.get("offsetHeight"),40);t.set("height",s),e._fillHeight()}},calculateYDelta:function(e,t){var n=this;return(t[1]-e[1])/(n.get("hourHeight")/2)*30},findEventIntersections:function(t,n){var r=[];return e.Array.each(n,function(e){e.get("visible")&&t.intersects(e)&&r.push(e)}),r},getXYDelta:function(t){var n=t.currentTarget.getXY(),r=[t.pageX,t.pageY];return e.Array.map(n,function(e,t){return r[t]-e})},getTickY:function(){var e=this;return l(Math.ceil(e.get("hourHeight")/2),10)},roundToNearestHour:function(e,t){var n=this;e.setHours(t[0],l(t[1],n.getTickY()),t[2])},_afterDragAlign:function(e){var t=this,n=e.target;t.startXY||(t.startXY=n.actXY),n.actXY[0]=null},_bindMouseEvents:function(){this.columnData.delegate("gesturemovestart",e.bind(this._onGestureMoveStartTableCol,this),"."+q),this.columnData.delegate("mouseenter",e.bind(this._onMouseEnterEvent,this),"."+d),this.columnData.delegate("mouseleave",e.bind(this._onMouseLeaveEvent,this),"."+d),this.columnData.delegate("gesturemove",e.bind(this._onGestureMoveTableCol,this),"."+z,{standAlone:!0}),this.columnData.delegate("gesturemoveend",e.bind(this._onGestureMoveEndTableCol,this),"."+q)},_afterVisibleChange:function(){clearInterval(this._currentTimeInterval),this.get("visible")&&this._bindCurrentTimeInterval()},_bindCurrentTimeInterval:function(){this._currentTimeInterval=setInterval(e.bind(this.syncCurrentTimeUI,this),6e4)},_dragTickAlignX:function(e){var t=this,n=t.draggingEvent;if(n&&!t.resizing){var r=t.eventPlaceholder,i=c(e.attr("data-colnumber"))-t.startColNumber;t.draggingEventStartDate=u.add(n.get("startDate"),u.DAY,i);var s=u.clone(t.draggingEventStartDate);u.copyHours(s,r.get("startDate")),r.move(s,{silent:!0}),t.plotEvent(r)}},_dragTickAlignY:function(e){var t=this,n=t.draggingEvent;if(n){var r=e.target.get("host")
,i=t.eventPlaceholder,s=t.calculateYDelta(t.startXY,r.actXY);if(t.resizing){var o=u.add(t.draggingEventEndDate,u.MINUTES,s);if(u.getMinutesOffset(o,t.draggingEventStartDate)<30)return;i.set("endDate",o,{silent:!0})}else i.move(u.add(t.draggingEventStartDate,u.MINUTES,s),{silent:!0});t.plotEvent(i)}},_findActiveColumn:function(e){return e.currentTarget},_moveCurrentTimeNode:function(e){var t=this,n=t.get("currentTimeNode"),r=t.colDaysNode.get("parentNode").one("."+y);r?(r.one("."+R).append(n),n.setStyle("top",t.calculateTop(e)+"px")):n.remove()},_setupDragDrop:function(){var t=this,n=t.eventPlaceholder;if(!n){var r=t.get("scheduler");n=new r.eventModel({scheduler:r}),n.removeTarget(r),n.get("node").addClass(g),n.set("visible",!1,{silent:!0}),t.eventPlaceholder=n}t.delegate||(t.delegate=new e.DD.Delegate(t.get("delegateConfig")));var i=t.delegate.dd;i.unplug(e.Plugin.DDConstrained),i.unplug(e.Plugin.DDNodeScroll);var s=t.bodyNode.get("region");s.bottom=Infinity,s.top=-Infinity,i.plug(e.Plugin.DDConstrained,{bubbleTargets:t,constrain:s,stickY:!0,tickY:t.get("hourHeight")/2}),i.plug(e.Plugin.DDNodeScroll,{node:t.bodyNode,scrollDelay:150})},_uiSetDate:function(){var e=this;e.syncColumnsUI(),e.syncDaysHeaderUI()},_onClickDaysHeader:function(e){var t=this,n=t.get("scheduler");if(e.target.test("a, a span")){var r=n.getViewByName("day");if(r){var i=c(e.currentTarget.attr("data-colnumber"));n.set("date",t.getDateByColumn(i)),n.set("activeView",r)}}e.preventDefault()},_onEventDragEnd:function(){var e=this,t=e.draggingEvent;if(t){var n=e.eventPlaceholder;n.set("visible",!1,{silent:!0}),t.set("visible",!0,{silent:!0}),t.copyDates(n),e.get("scheduler").syncEventsUI()}e.startXY=null,e.draggingEvent=null},_onEventDragStart:function(){var e=this,t=e.draggingEvent=e.delegate.dd.get("node").getData("scheduler-event");if(t){var n=e.eventPlaceholder;n.copyPropagateAttrValues(t,null,{silent:!0}),e.plotEvent(n),t.set("visible",!1,{silent:!0}),e.draggingEventStartDate=u.clone(t.get("startDate")),e.draggingEventEndDate=u.clone(t.get("endDate"));var r=e.getColumnByDate(t.get("startDate"));e.startColNumber=r?c(r.attr("data-colnumber")):0}},_onGestureMoveEndTableCol:function(){var e=this,t=e.get("scheduler"),n=t.get("eventRecorder");if(n&&!t.get("disabled")){if(!e.recorderPlotted){var r=n.get("startDate"),i=n.get("duration"),s=u.add(r,u.MINUTES,i);n.set("endDate",s,{silent:!0})}e.creationStartDate&&(e.plotEvent(n),n.showPopover())}e.creationStartDate=null,e.recorderPlotted=!1,e.resizing=!1,e.startXY=null,e._removeResizer(),e.get("boundingBox").selectable()},_onGestureMoveStartTableCol:function(e){var t=this,n=e.target,r=t.get("scheduler"),i=r.get("eventRecorder");i&&!r.get("disabled")&&(i.hidePopover(),n.test("."+R)?this._prepareEventCreation(e,30):n.test(["."+j,"."+F].join(","))&&(t.resizing=!0)),t.get("boundingBox").unselectable()},_onGestureMoveTableCol:function(e){var t=this,n=this._findActiveColumn(e),r=t.get("scheduler").get("eventRecorder");t.activeColumn!==n&&(t.activeColumn=n,t._dragTickAlignX(t.activeColumn));var i=t.creationStartDate;if(i){var s=l(t.calculateYDelta(t.startXY,[e.pageX,e.pageY]),t.getTickY()),o=s>=t._delta;if(t._delta!==s){if(s>0){var a=o?Math.max(s,r.get("duration")):s;r.set("endDate",u.add(i,u.MINUTES,a),{silent:!0})}else r.set("startDate",u.add(i,u.MINUTES,s),{silent:!0});t.plotEvent(r),t.recorderPlotted=!0,t._delta=s}}},_onMouseEnterEvent:function(e){var t=this,n=e.currentTarget,r=n.getData("scheduler-event");r&&!r.get("disabled")&&t.resizerNode.appendTo(n)},_onMouseLeaveEvent:function(){var e=this;e.resizing||e._removeResizer()},_onSchedulerChange:function(e){var t=this;t.headerView&&t.headerView.set("scheduler",e.newVal)},_prepareEventCreation:function(e,t){var n=this.getXYDelta(e),r=c(e.currentTarget.attr("data-colnumber")),i,s=this.getDateByColumn(r),o=this.get("scheduler").get("eventRecorder");this.startXY=[e.pageX,e.pageY],this.roundToNearestHour(s,this.getYCoordTime(n[1])),t||(t=o.get("duration")),i=u.add(s,u.MINUTES,t),o.move(s,{silent:!0}),o.setAttrs({allDay:!1,endDate:i},{silent:!0}),this.creationStartDate=s,e.halt()},_removeResizer:function(){var e=this;e.resizerNode.remove()},_valueColDaysNode:function(){var t=this,n=t.get("days"),r=[],i=0;while(n--)r.push(e.Lang.sub(G,{colNumber:i++}));return e.NodeList.create(r.join(""))},_valueColHeaderDaysNode:function(){var t=this,n=t.get("days"),r=[],i=0;r.push(nt);while(n--)r.push(e.Lang.sub(et,{colNumber:i++}));return e.NodeList.create(r.join(""))},_valueMarkercellsNode:function(){var t=[],n;for(n=0;n<=23;n++)t.push(J);return e.NodeList.create(t.join(""))},_valueTimesNode:function(){var t=this,r=t.get("isoTime"),i=[],s;for(s=0;s<=23;s++)i.push(n.sub(Y,{hour:r?u.toIsoTimeString(s):u.toUsTimeString(s,!1,!0)}));return e.NodeList.create(i.join(""))}}});e.SchedulerDayView=rt},"3.1.0-deprecated.65",{requires:["dd-drag","dd-delegate","dd-drop","dd-constrain","aui-scheduler-view-table"],skinnable:!0});

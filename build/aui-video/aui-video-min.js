YUI.add("aui-video",function(e,t){var n=e.Lang,r=e.UA,i=e.getClassName,s=i("video","node"),o=e.config.doc,u='<video id="{id}" controls="controls" class="'+s+'"></video>',a=e.Component.create({NAME:"video",ATTRS:{fixedAttributes:{value:{}},ogvUrl:{value:""},poster:{value:""},render:{value:!0},role:{validator:n.isString,value:"application",writeOnce:"initOnly"},url:{value:""},useARIA:{validator:n.isBoolean,value:!0,writeOnce:"initOnly"}},BIND_UI_ATTRS:["url","poster","ogvUrl","fixedAttributes"],SYNC_UI_ATTRS:["url","poster","ogvUrl"],prototype:{destructor:function(){var t=this;(new e.EventHandle(t._eventHandles)).detach()},renderUI:function(){var t=this;t._renderVideoTask=e.debounce(t._renderVideo,1,t),t._renderVideo(!t.get("ogvUrl")),t._video.on("play",function(e){t.fire("play",{cropType:e.type})}),t._video.on("pause",function(e){t.fire("pause",{cropType:e.type})}),t._setResponsiveDimensions()},bindUI:function(){var t=this;t.publish("videoReady",{fireOnce:!0}),t.publish("play"),t.publish("pause"),t._eventHandles=[e.after("windowresize",e.bind("_afterWindowResize",t))]},syncUI:function(){var t=this;t.get("useARIA")&&t.plug(e.Plugin.Aria,{roleName:t.get("role"),roleNode:t.get("contentBox")})},load:function(){var e=this;e._video.hasMethod("load")&&e._video.invoke("load")},pause:function(){var e=this;e._video.hasMethod("pause")&&e._video.invoke("pause")},play:function(){var e=this;e._video.hasMethod("play")&&e._video.invoke("play")},_afterWindowResize:function(){var e=this;e._responsiveBoundingBox(),e._setResponsiveDimensions()},_createSource:function(t){var n=new e.Node(o.createElement("source"));return n.attr("type",t),n},_renderVideo:function(){var t,r,i,s,o,a;t=this,i=u,r=t.get("height"),a=t.get("width"),s=n.sub(i,{id:e.guid()}),o=e.Node.create(s),a&&o.width(a),r&&o.height(r),t.get("contentBox").append(o),t._video=o},_responsiveBoundingBox:function(){var e=this,t=e.get("boundingBox");t.setStyles({height:"",width:""})},_setResponsiveDimensions:function(){var t,n,r,i,s,o,u,a,f;t=this,s=t.get("height"),a=t.get("width"),n=s/a,o=s,u=a,f=e.one(window),r=f.get("innerHeight"),r<s&&(o=r,u=r/n),i=f.get("innerWidth"),i<a&&(o=i*n,u=i),t._video.width(u),t._video.height(o)},_uiSetOgvUrl:function(e){var t=this;if(r.gecko||r.opera){var n=t._video,i=t._usingVideo();if(!e&&i||e&&!i)n.remove(!0),t._renderVideoTask(!e);if(e){var s=t._sourceOgv;s||(s=t._createSource('video/ogg; codecs="theora, vorbis"'),n.append(s),t._sourceOgv=s),s.attr("src",e)}}},_uiSetPoster:function(e){var t=this,n=t._video;t._usingVideo()&&n.setAttribute("poster",e)},_uiSetUrl:function(e){var t=this,n=t.get("ogvUrl"),i=t._video,s=t._sourceMp4;if(r.gecko&&!t._usingVideo())s&&(s.remove(!0),t._sourceMp4=null);else if(i||!n)s||(s=t._createSource("video/mp4;"),i.append(s),t._sourceMp4=s),s.attr("src",e)},_usingVideo:function(){var e=this;return e._video.get("nodeName").toLowerCase()==="video"}}});e.Video=a},"3.1.0-deprecated.65",{requires:["event-resize","node-event-html5","querystring-stringify-simple","aui-aria","aui-node","aui-component","aui-debounce"],skinnable:!0});

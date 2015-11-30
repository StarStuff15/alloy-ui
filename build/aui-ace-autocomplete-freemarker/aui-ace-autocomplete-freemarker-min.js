YUI.add("aui-ace-autocomplete-freemarker",function(e,t){var n=e.Lang,r=0,i=1,s=e.Base.create("aui-ace-autocomplete-freemarker",e.AceEditor.TemplateProcessor,[],{getMatch:function(e){var t=this,n,s;return(s=e.lastIndexOf("<"))>=0?(e=e.substring(s),t.get("directivesMatcher").test(e)&&(n={content:e.substring(2),start:s,type:r})):(s=e.lastIndexOf("$"))>=0&&(e=e.substring(s),t.get("variablesMatcher").test(e)&&(n={content:e.substring(2),start:s,type:i})),n}},{NAME:"aui-ace-autocomplete-freemarker",NS:"aui-ace-autocomplete-freemarker",ATTRS:{directives:{validator:n.isArray,value:["assign","attempt","break","case","compress","default","else","elseif","escape","fallback","flush","ftl","function","global","if","import","include","list","local","lt","macro","nested","noescape","nt","recover","recurse","return","rt","setting","stop","switch","t","visit"]},directivesMatcher:{setter:"_setRegexValue",value:/<#[\w]*[^<#]*$/},host:{validator:n.isObject},variables:{validator:n.isObject},variablesMatcher:{setter:"_setRegexValue",value:/\${[\w., ()"]*(?:[^$]|\\\$)*$/}}});e.AceEditor.AutoCompleteFreemarker=s},"3.0.2-deprecated.1",{requires:["aui-ace-autocomplete-templateprocessor"]});

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/person_info/person_info"],{3363:function(e,n,t){"use strict";t.r(n);var a=t("fdb3"),o=t.n(a);for(var s in a)"default"!==s&&function(e){t.d(n,e,function(){return a[e]})}(s);n["default"]=o.a},4372:function(e,n,t){"use strict";var a=t("4bd5"),o=t.n(a);o.a},"4bd5":function(e,n,t){},"9ae3":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},fb97:function(e,n,t){"use strict";t.r(n);var a=t("9ae3"),o=t("3363");for(var s in o)"default"!==s&&function(e){t.d(n,e,function(){return o[e]})}(s);t("4372");var i=t("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"3412a6f8",null);n["default"]=u.exports},fdb3:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{avatar_url:"../../static/avatar.jpg",nickname:"陈先生",sex:"男",sex_list:["男","女"],date:"2000-01-01"}},methods:{changeAvatar:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){console.log(JSON.stringify(n.tempFilePaths)," at pages\\person_info\\person_info.vue:54"),e.uploadFile({url:"",filePath:n.tempFilePaths[0],name:"image",success:function(e){var n=JSON.parse(e.data);console.log(n.data.url," at pages\\person_info\\person_info.vue:61"),that.avatar_url=n.data.url}})}})},selectSex:function(){var n=this;e.showActionSheet({itemList:n.sex_list,success:function(e){n.sex=n.sex_list[e.tapIndex]},fail:function(e){console.log(e.errMsg," at pages\\person_info\\person_info.vue:76")}})},bindDateChange:function(e){this.date=e.target.value},toChangeName:function(){e.navigateTo({url:"/pages/change_name/change_name"})}},onLoad:function(){}};n.default=t}).call(this,t("6e42")["default"])}},[["1e64","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_collect/my_collect"],{"2a49":function(t,e,i){"use strict";i.r(e);var c=i("f994"),o=i("ca01");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("c8c6");var l=i("2877"),a=Object(l["a"])(o["default"],c["a"],c["b"],!1,null,"cff339d6",null);e["default"]=a.exports},"7d87":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{navbar:[{name:"视频"},{name:"音频"},{name:"课程"},{name:"资讯"}],currentTab:0,video_collect_list:[{id:1,src:"../../static/layer_img.jpg",title:"初级拉丁舞"},{id:2,src:"../../static/layer_img.jpg",title:"初级拉丁舞"},{id:3,src:"../../static/layer_img.jpg",title:"初级拉丁舞"},{id:4,src:"../../static/layer_img.jpg",title:"初级拉丁舞"}],audio_collect_list:[{id:1,poster:"../../static/poster.jpg",title:"来自天堂的魔鬼",person:"G.E.M.邓紫棋",info:"《新的心跳》",src:"http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3",iscollect:!0,isplaying:!1},{id:2,poster:"../../static/poster.jpg",title:"于是",person:"G.E.M.邓紫棋",info:"《新的心跳》",src:"http://www.170mv.com/kw/other.web.rg01.sycdn.kuwo.cn/resource/n2/46/52/3021082115.mp3",iscollect:!0,isplaying:!1}],lesson_collect_list:[{id:1,src:"../../static/layer_img.jpg",is_show:!0,title:"爵士舞",type:"3000元3节课",price:"888.88"},{id:2,src:"../../static/layer_img.jpg",is_show:!1,title:"爵士舞",type:"3000元3节课",price:"888.88"}],news_collect_list:[{id:1,src:"../../static/news_img1.jpg",title:"跳舞让一个女孩光芒万丈的出现在舞台",time:"2019.05.10 16:00",look:"2598"},{id:2,src:"../../static/news_img2.jpg",title:"跳舞让一个女孩光芒万丈的出现在舞台",time:"2019.05.10 16:00",look:"2598"}]}},methods:{navbarTap:function(t){console.log(t," at pages\\my_collect\\my_collect.vue:153"),this.currentTab=t},toDel:function(e){var i=this;t.showModal({content:"确定删除？",confirmColor:"#fbc800",success:function(t){t.confirm&&(i.currentTab,i.currentTab,i.currentTab,i.currentTab)},fail:function(t){console.log(t," at pages\\my_collect\\my_collect.vue:182")}})},allDelete:function(e){t.showModal({content:"确定删除全部？",confirmColor:"#fbc800",success:function(t){t.confirm},fail:function(t){console.log(t," at pages\\my_collect\\my_collect.vue:211")}})},toVideoDetail:function(e){t.navigateTo({url:"/pages/video_detail/video_detail?id="+e})},toAudioDetail:function(e,i){t.navigateTo({url:"/pages/audio_detail/audio_detail?id="+i})},toLessonDetail:function(e){t.navigateTo({url:"/pages/lesson_detail/lesson_detail?id="+e})},toNewsDetail:function(e){t.navigateTo({url:"/pages/news_detail/news_detail?id="+e})}},onLoad:function(){}};e.default=i}).call(this,i("6e42")["default"])},c8c6:function(t,e,i){"use strict";var c=i("d105"),o=i.n(c);o.a},ca01:function(t,e,i){"use strict";i.r(e);var c=i("7d87"),o=i.n(c);for(var n in c)"default"!==n&&function(t){i.d(e,t,function(){return c[t]})}(n);e["default"]=o.a},d105:function(t,e,i){},f994:function(t,e,i){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return c}),i.d(e,"b",function(){return o})}},[["bd65","common/runtime","common/vendor"]]]);
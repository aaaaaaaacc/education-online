(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packageB-pages-content-detail-content-detail"],{2201:function(t,i,a){"use strict";var e=a("7261"),n=a.n(e);n.a},2905:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"/* 倍速 */.course_image[data-v-3740145b]{width:100%}.video-control[data-v-3740145b]{background-color:rgba(0,0,0,.1);height:%?90?%;position:absolute;top:0;left:0;width:100%;z-index:9997}.video-wrap[data-v-3740145b]{position:relative}.multi-list.full-screen.vertical[data-v-3740145b]{height:100vh!important;padding:8vh 0}.multi-list.full-screen.horizontal[data-v-3740145b]{height:100vw!important;padding:8vw 0}.multi[data-v-3740145b]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:998;width:%?100?%;color:#fff;padding:%?10?% 0;text-align:center;transition:color ease .3s}.multi.rate[data-v-3740145b]{right:%?30?%}.multi-list[data-v-3740145b]{position:absolute;height:100%;width:0;background-color:rgba(0,0,0,.65);top:0;right:0;transition:width .3s ease;z-index:9997;box-sizing:border-box;padding:%?50?% 0}.multi-list.rate[data-v-3740145b]{padding:%?25?% 0}.multi-list.active[data-v-3740145b]{width:%?300?%}.multi-item[data-v-3740145b]{text-align:center;color:#fff;line-height:%?80?%;transition:color ease .3s}.multi-item.rate[data-v-3740145b]{line-height:%?70?%}.multi-item[data-v-3740145b]:hover,\n\t.multi[data-v-3740145b]:hover{color:#38daa6}.multi-item.active[data-v-3740145b]{color:#38daa6}\n\t/* 倍速结束 */.uni-list[data-v-3740145b]{height:%?60?%;padding:%?20?% 0;\n}.uni-list-cell-left[data-v-3740145b]{width:50%}.uni-label[data-v-3740145b]{height:100%}.uni-input[data-v-3740145b]{\n\t\t/* width: 70%; */height:%?30?%;margin:0 auto;border-radius:%?40?% 0 0 %?40?%;background-color:#f4f4f4}.course_tag_image[data-v-3740145b]{display:inline-block;width:%?140?%!important;height:%?30?%!important}.video-addtime[data-v-3740145b]{display:inline-block;margin-left:%?10?%;\nposition:relative;top:%?-6?%;\n}.page[data-v-3740145b]{width:100%}.button[data-v-3740145b]{margin-top:%?20?%;width:%?80?%;height:%?80?%}.mm[data-v-3740145b]{padding-left:%?20?%}.ss[data-v-3740145b]{padding-right:%?20?%}.hidden[data-v-3740145b]{position:fixed;z-index:-1;width:%?1?%;height:%?1?%}.slider-box[data-v-3740145b]{display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?26?%;color:#999}.slider[data-v-3740145b]{padding-left:%?20?%;padding-right:%?20?%;width:100%}.live-all-wrap[data-v-3740145b]{background-color:#f4f5f6}.video-wrap[data-v-3740145b]{text-align:center;width:100%;height:%?400?%;background-color:#000;position:relative}.controls-title[data-v-3740145b]{color:#f7f7f7;position:absolute;bottom:%?40?%}.video-wrap3[data-v-3740145b]{text-align:center;width:100%;height:%?550?%}.audio[data-v-3740145b]{width:92%;height:%?40?%;padding-left:%?10?%;padding-right:%?10?%}.cdetail-all-wrap[data-v-3740145b]{width:94%;margin:0 auto}.line[data-v-3740145b]{background-color:#f5f5f5;height:%?1?%;position:absolute;left:%?20?%;right:%?20?%;margin-top:%?-20?%}.content-title[data-v-3740145b]{height:%?40?%;font-weight:700;margin-left:%?20?%}.content-des[data-v-3740145b]{margin-top:%?20?%;margin-left:%?20?%;color:#969696;font-size:%?20?%}.content-time[data-v-3740145b]{margin-left:%?20?%;font-size:%?20?%;color:#969696;margin-top:%?10?%;margin-bottom:%?40?%}.content-wrap[data-v-3740145b]{margin:0 auto;overflow:hidden;width:92%}.switch-wrap[data-v-3740145b]{position:absolute;top:%?90?%}",""]),t.exports=i},3018:function(t,i,a){"use strict";a.r(i);var e=a("9aac"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"4d2a":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={imtAudio:a("c281").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"page"},[2==t.type?[a("v-uni-view",{staticClass:"video-wrap"},[a("v-uni-video",{staticClass:"video-wrap",attrs:{id:"myVideo",src:t.url,poster:t.thumb,controls:"true",autoplay:"true",muted:"false","danmu-list":t.danmuList,"enable-danmu":!0,playbackRate:!0},on:{fullscreenchange:function(i){arguments[0]=i=t.$handleEvent(i),t.fullchange.apply(void 0,arguments)},loadedmetadata:function(i){arguments[0]=i=t.$handleEvent(i),t.loadvideo.apply(void 0,arguments)}}},[a("v-uni-cover-view",{staticClass:"video-control"},[a("v-uni-cover-view",{staticClass:"multi rate",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showSwitchRate.apply(void 0,arguments)}}},[t._v("x "+t._s(t.currentRate))])],1),a("v-uni-cover-view",{staticClass:"multi-list rate",class:{active:t.rateShow}},t._l(["0.5","0.8","1.0","1.25","1.5"],(function(i,e){return a("v-uni-cover-view",{key:e,staticClass:"multi-item rate",class:{active:i==t.currentRate},attrs:{"data-rate":i},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchRate.apply(void 0,arguments)}}},[t._v(t._s(i))])})),1)],1)],1)]:3==t.type?[a("v-uni-view",{staticClass:"video-wrap3"},[a("v-uni-image",{staticClass:"video-wrap",attrs:{src:t.thumb}}),a("imt-audio",{staticClass:"imtaudio",attrs:{autoplay:!0,src:t.url}})],1)]:void 0,a("v-uni-view",{staticClass:"cdetail-all-wrap"},[a("v-uni-view",{staticClass:"content-title"},[t._v(t._s(t.name))]),a("v-uni-view",{staticClass:"content-des"},[t._v(t._s(t.des))]),a("v-uni-view",{staticClass:"content-time"},[t._v(t._s(t.adddtime))]),a("v-uni-view",{staticClass:"content-wrap"},[a("v-uni-rich-text",{staticClass:"content",attrs:{nodes:t.content}})],1)],1)],2)},o=[]},7261:function(t,i,a){var e=a("2905");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("55b201e0",e,!0,{sourceMap:!1,shadowMode:!1})},"9aac":function(t,i,a){"use strict";var e=a("4ea4");a("a9e3"),a("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("c281")),o=e(a("e0c6")),r=getApp(),d={components:{imtAudio:n.default,uniNavBar:o.default},data:function(){return{live_info:{},name:"",adddtime:"",content:"",des:"",url:"",type:"",thumb:"",duration:"",currentTime:0,videoContext:"",buttonimage:"",status:1,start:"",end:"",playCurrent:0,danmuList:[],videoDuration:0,rateShow:!1,currentRate:1,fullScreen:!1,switch_btn:{bj_color:"#FFFFFF",checked_bj_color:"#38E1AB"}}},onReady:function(){},onLoad:function(t){this.type=t.type,this.live_info=JSON.parse(decodeURIComponent(t.info)),this.name=this.live_info.name,this.content=this.live_info.content,this.des=this.live_info.des,this.thumb=t.thumb,this.adddtime=this.live_info.add_time,this.adddtime||(this.adddtime=t.addtime),1!=this.type&&(this.url=this.decypt(this.live_info.url),this.videoContext=uni.createVideoContext("myVideo"),this.getHorseLamp(),this.buttonimage="../../static/voice2.png")},methods:{showSwitchRate:function(t){var i=this;i.rateShow=!0},switchRate:function(t){var i=this,a=Number(t.currentTarget.dataset.rate);i.currentRate=a,i.rateShow=!1,this.videoContext.playbackRate(a)},loadvideo:function(t){this.videoDuration=t.detail.duration,this.getHorseLamp()},getHorseLamp:function(){for(var t=r.globalData.userinfo.user_login,i=this,a=parseInt(i.videoDuration),e=2;e<a;e+=18){var n={text:t,color:"#ED1C24",time:e};i.danmuList.push(n)}},decypt:function(t){for(var i="",a="1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp&",e=0;e<t.length;e++)for(var n=t[e],o=0;o<a.length;o++){var r=a[o];n==r&&(i+=0==o?a[a.length-1]:a[o-1])}return i},backCourseList:function(){uni.navigateBack({delta:1})},pause:function(){0==this.status?(this.status=1,this.videoContext.play(),this.buttonimage="../../static/voice2.png"):(this.status=0,this.videoContext.pause(),this.buttonimage="../../static/voice.png")},sliderChange:function(t){this.videoContext.seek(t.detail.value)},sliderChanging:function(t){this.currentTime=t.detail.value,this.start=this.calcTimer(t.detail.value)},calcTimer:function(t){if(0===t||"number"!==typeof t)return"00:00";var i=Math.floor(t/60),a=Math.floor(t%60);return i<10&&(i="0"+i),a<10&&(a="0"+a),i+":"+a}}};i.default=d},c91f:function(t,i,a){"use strict";a.r(i);var e=a("4d2a"),n=a("3018");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("2201");var r,d=a("f0c5"),s=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"3740145b",null,!1,e["a"],r);i["default"]=s.exports}}]);
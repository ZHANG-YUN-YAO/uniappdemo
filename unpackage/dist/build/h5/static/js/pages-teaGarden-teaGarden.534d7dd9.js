(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teaGarden-teaGarden"],{"0f67":function(t,i,a){"use strict";a.r(i);var e=a("9828"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},"3be7":function(t,i,a){t.exports=a.p+"static/img/swiper3.bed1683f.png"},4764:function(t,i,a){"use strict";var e=a("df66"),n=a.n(e);n.a},9190:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.teaGarden .uni-padding-wrap[data-v-5be39a22]{padding:%?28?%}.teaGarden .uni-padding-wrap .swiper[data-v-5be39a22]{width:%?694?%;height:%?361?%}.teaGarden .uni-padding-wrap .swiper .swiper-item uni-image[data-v-5be39a22]{width:100%}.teaGarden .uni-grid .uni-grid-item[data-v-5be39a22]{text-align:center}.teaGarden .uni-grid .uni-grid-item uni-image[data-v-5be39a22]{width:%?69?%;height:%?69?%;margin:0 auto}.teaGarden .uni-grid .uni-grid-item uni-text[data-v-5be39a22]{margin:%?15?% 0 0 0;font-size:%?18?%;font-family:FZLTZHUNHK;font-weight:400;color:#161e49}.teaGarden .goods .title[data-v-5be39a22]{font-size:%?32?%;padding-left:%?27?%;font-family:FZLTZHUNHK;font-weight:400;color:#161e49;line-height:%?27?%}.teaGarden .goods .goodslist[data-v-5be39a22]{padding-top:%?21?%}.teaGarden .goods .goodslist .img[data-v-5be39a22]{text-align:center;margin-top:%?21?%}.teaGarden .goods .goodslist .img uni-image[data-v-5be39a22]{width:%?694?%;height:%?333?%}.teaGarden .goods .desc[data-v-5be39a22]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;padding:%?28?%}.teaGarden .goods .desc .descdetail[data-v-5be39a22]{width:%?722?%;font-size:%?25?%;font-family:Microsoft YaHei;font-weight:400;color:#161e49;line-height:%?38?%}.teaGarden .goods .desc .price[data-v-5be39a22]{font-size:%?32?%;font-family:Microsoft YaHei;font-weight:400;display:block;padding-top:%?21?%;color:#ff2829;line-height:%?37?%}.teaGarden .goods .discuss[data-v-5be39a22]{padding:0 %?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.teaGarden .goods .discuss uni-text[data-v-5be39a22]{display:inline-block;font-size:%?21?%;font-weight:400;color:#999}.teaGarden .goods .tag ul[data-v-5be39a22]{padding-left:%?28?%}.teaGarden .goods .tag ul li[data-v-5be39a22]{padding:%?9?% %?21?%;background:rgba(40,82,242,.2);margin-right:%?21?%;display:inline-block;border-radius:%?19?%;font-size:%?21?%;font-family:Microsoft YaHei;font-weight:400;color:#161e49;line-height:%?27?%}.teaGarden .goods .author .info[data-v-5be39a22]{padding:%?21?% 0 0 %?28?%}.teaGarden .goods .author .info uni-image[data-v-5be39a22]{width:%?56?%;height:%?56?%;background:#2852f2;border-radius:50%;display:inline-block}.teaGarden .goods .author .info .authorname[data-v-5be39a22]{font-size:%?25?%;font-family:FZLTZHUNHK;font-weight:400;color:#161e49;line-height:%?13?%;margin-left:%?15?%;position:relative;top:%?-16?%}.teaGarden .goods .author .infodesc[data-v-5be39a22]{padding:0 %?28?%;font-size:%?21?%!important;font-family:FZLTZHUNHK;font-weight:400;color:#999;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.teaGarden .goods .author .infodesc .font-info[data-v-5be39a22]{font-size:%?21?%!important;font-family:FZLTZHUNHK;font-weight:400;color:#999}',""]),t.exports=i},9828:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/goodsList/goodsList"})},methods:{articledetail:function(){uni.navigateTo({url:"../gardenDetail/gardenDetail"})},changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}};i.default=e},"993c":function(t,i,a){t.exports=a.p+"static/img/01.b65b3eb6.png"},"9a33":function(t,i,a){"use strict";var e={"uni-grid":a("cb52").default,"uni-grid-item":a("fc36").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"teaGarden"},[e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"page-section swiper"},[e("v-uni-view",{staticClass:"page-section-spacing"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-image",{attrs:{src:a("ac56"),mode:"widthFix"}})],1),e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-image",{attrs:{src:a("d3cd"),mode:"widthFix"}})],1),e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-image",{attrs:{src:a("3be7"),mode:"widthFix"}})],1)],1)],1)],1)],1),e("uni-grid",{attrs:{column:5,showBorder:!1}},[e("uni-grid-item",[e("v-uni-image",{attrs:{src:a("ce09")}}),e("v-uni-text",[t._v("入门首选")])],1),e("uni-grid-item",[e("v-uni-image",{attrs:{src:a("ce09")}}),e("v-uni-text",[t._v("日饮级")])],1),e("uni-grid-item",[e("v-uni-image",{attrs:{src:a("ce09")}}),e("v-uni-text",[t._v("品鉴级")])],1),e("uni-grid-item",[e("v-uni-image",{attrs:{src:a("ce09")}}),e("v-uni-text",[t._v("珍藏级")])],1),e("uni-grid-item",[e("v-uni-image",{attrs:{src:a("ce09")}}),e("v-uni-text",[t._v("热销TOP10")])],1)],1),e("v-uni-view",{staticClass:"goods"},[e("v-uni-view",{staticClass:"title"},[t._v("精品推荐")]),e("v-uni-view",{staticClass:"goodslist",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.articledetail.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"img"},[e("v-uni-image",{attrs:{src:a("e42e"),mode:""}})],1),e("v-uni-view",{staticClass:"desc"},[e("v-uni-text",{staticClass:"descdetail"},[t._v("中茶牌 云南普洱茶 2019年冰岛铜庆台大树春茶生茶饼10饼箱...")]),e("v-uni-text",{staticClass:"price"},[t._v("￥168000.00")])],1),e("v-uni-view",{staticClass:"discuss"},[e("v-uni-text",[t._v("商品评价(568)")]),e("v-uni-text",[t._v("收藏(89)")])],1),e("v-uni-view",{staticClass:"tag"},[e("ul",[e("li",[t._v("糯干春润  丝丝顺滑")]),e("li",[t._v("口味纯正")])])]),e("v-uni-view",{staticClass:"author"},[e("v-uni-view",{staticClass:"info"},[e("v-uni-image",{attrs:{src:a("ed3e")}}),e("v-uni-text",{staticClass:"authorname"},[t._v("王鸥")])],1),e("v-uni-view",{staticClass:"infodesc font-info"},[t._v("茶汤气味香，色泽纯正，口感很好，而且很耐泡，回甘微甜，浓淡适中、清香怡人、 茶粒，肥壮圆结，干净无杂质，香气馥郁。不错，价格不")])],1)],1),e("v-uni-view",{staticClass:"goodslist",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.articledetail.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"img"},[e("v-uni-image",{attrs:{src:a("e42e"),mode:""}})],1),e("v-uni-view",{staticClass:"desc"},[e("v-uni-text",{staticClass:"descdetail"},[t._v("中茶牌 云南普洱茶 2019年冰岛铜庆台大树春茶生茶饼10饼箱...")]),e("v-uni-text",{staticClass:"price"},[t._v("￥168000.00")])],1),e("v-uni-view",{staticClass:"discuss"},[e("v-uni-text",[t._v("商品评价(568)")]),e("v-uni-text",[t._v("收藏(89)")])],1),e("v-uni-view",{staticClass:"tag"},[e("ul",[e("li",[t._v("糯干春润  丝丝顺滑")]),e("li",[t._v("口味纯正")])])]),e("v-uni-view",{staticClass:"author"},[e("v-uni-view",{staticClass:"info"},[e("v-uni-image",{attrs:{src:a("993c")}}),e("v-uni-text",{staticClass:"authorname"},[t._v("王鸥")])],1),e("v-uni-view",{staticClass:"infodesc font-info"},[t._v("茶汤气味香，色泽纯正，口感很好，而且很耐泡，回甘微甜，浓淡适中、清香怡人、 茶粒，肥壮圆结，干净无杂质，香气馥郁。不错，价格不")])],1)],1)],1)],1)],1)},s=[];a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}))},ac56:function(t,i,a){t.exports=a.p+"static/img/swiper.b4ea29d7.png"},adb8:function(t,i,a){"use strict";a.r(i);var e=a("9a33"),n=a("0f67");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("4764");var o,d=a("f0c5"),r=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"5be39a22",null,!1,e["a"],o);i["default"]=r.exports},ce09:function(t,i){t.exports="data:image/png;base64,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"},d3cd:function(t,i,a){t.exports=a.p+"static/img/swiper2.529801c1.png"},df66:function(t,i,a){var e=a("9190");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("1c90a704",e,!0,{sourceMap:!1,shadowMode:!1})},e42e:function(t,i,a){t.exports=a.p+"static/img/uihu.c3774d33.png"},ed3e:function(t,i,a){t.exports=a.p+"static/img/6.f93e90b5.png"}}]);
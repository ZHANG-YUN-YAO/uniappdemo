(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goodsList-goodsList"],{"0af2":function(t,i,e){var n=e("f920");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("66c8e9d8",n,!0,{sourceMap:!1,shadowMode:!1})},"57b9":function(t,i,e){"use strict";var n,o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"list_box"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-scroll-view",{style:{height:t.scrollHeight+"px"},attrs:{"scroll-y":"true"}},t._l(t.leftArray,(function(i,n){return e("v-uni-view",{key:n,staticClass:"item",class:{active:n==t.leftIndex},attrs:{"data-index":n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._v(t._s(i))])})),1)],1),e("v-uni-view",{staticClass:"main"},[e("v-uni-scroll-view",{style:{height:t.scrollHeight+"px"},attrs:{"scroll-y":"true","scroll-into-view":t.scrollInto,"scroll-with-animation":"true"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.mainScroll.apply(void 0,arguments)}}},[t._l(t.mainArray,(function(i,n){return e("v-uni-view",{key:n,staticClass:"item main-item",attrs:{id:"item-"+n}},t._l(i.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"goods",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goodsdetail.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"/static/images/aa.png",mode:""}}),e("v-uni-view",{staticClass:"goodsnav"},[e("v-uni-view",{staticClass:"describe"},[t._v("中粮中茶牌 云南普洱茶 2019年冰岛铜庆...")]),e("v-uni-view",{staticClass:"money"},[t._v("￥16800.00")]),e("v-uni-view",{staticClass:"sellnum"},[t._v("已售(26)")])],1)],1)})),1)})),e("v-uni-view",{staticClass:"fill-last",style:{height:t.fillHeight+"px"}})],2)],1)],1)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},"58d8":function(t,i,e){"use strict";e.r(i);var n=e("adc9"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"890d":function(t,i,e){"use strict";var n=e("0af2"),o=e.n(n);o.a},adc9:function(t,i,e){"use strict";e("d81d"),e("d3b7"),e("ac1f"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{scrollHeight:500,fillHeight:0,leftArray:[],mainArray:[],topArr:[],leftIndex:0,scrollInto:""}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(i){t.scrollHeight=i.windowHeight}})},mounted:function(){this.getListData()},methods:{goodsdetail:function(){uni.navigateTo({url:"../gardenDetail/gardenDetail"})},getListData:function(){var t=this;new Promise((function(t,i){uni.showLoading(),setTimeout((function(){for(var i=[],e=[],n=0;n<10;n++){i=["推荐","红茶","黑茶","普洱","乌龙","绿茶","白茶","黄茶","花茶","袋泡","茶具"];var o=[],a=Math.floor(10*Math.random());console.log(a),a=a<1?3:a,console.log(a);for(var l=0;l<a;l++)o.push(l);e.push({title:"第".concat(n+1,"类商品标题"),list:o})}t({left:i,main:e})}),1e3)})).then((function(i){console.log(i),uni.hideLoading(),t.leftArray=i.left,t.mainArray=i.main,t.$nextTick((function(){t.getElementTop()}))}))},getElementTop:function(){var t=this;new Promise((function(t,i){var e=uni.createSelectorQuery().selectAll(".main-item");e.boundingClientRect((function(i){t(i)})).exec()})).then((function(i){var e=i.map((function(t){return t.top}));t.topArr=e;var n=i[i.length-1].height;n-20<t.scrollHeight&&(t.fillHeight=t.scrollHeight-n+20)}))},mainScroll:function(t){for(var i=t.detail.scrollTop,e=0,n=this.topArr.length-1;n>=0;n--)if(i+2>=this.topArr[n]){e=n;break}this.leftIndex=e<0?0:e},leftTap:function(t){var i=t.currentTarget.dataset.index;this.scrollInto="item-".concat(i)}}};i.default=n},e6d1:function(t,i,e){"use strict";e.r(i);var n=e("57b9"),o=e("58d8");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("890d");var l,r=e("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"dd997b0a",null,!1,n["a"],l);i["default"]=s.exports},f920:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list_box[data-v-dd997b0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;font-size:%?28?%}.list_box .left[data-v-dd997b0a]{width:%?186?%;background-color:#f6f6f6;line-height:%?80?%;box-sizing:border-box;font-size:%?32?%;text-align:center}.list_box .left .item[data-v-dd997b0a]{padding-left:%?20?%;position:relative;width:%?144?%;height:%?47?%;line-height:%?47?%;border-radius:%?24?%;margin:%?51?% auto;padding-left:0;font-size:%?25?%;font-family:Microsoft YaHei;font-weight:400}.list_box .left .item[data-v-dd997b0a]:not(:first-child){margin-top:1px}.list_box .left .item[data-v-dd997b0a]:not(:first-child)::after{content:"";display:block;height:0;width:%?620?%;position:absolute;top:-1px;right:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)\n          /* 1px像素 */}.list_box .left .item.active[data-v-dd997b0a]{color:#fff;background-color:#2852f2}.list_box .left .fill-last[data-v-dd997b0a]{height:0;width:100%;background:none}.list_box .main[data-v-dd997b0a]{background-color:#fff;padding-left:%?21?%;padding-right:%?28?%;width:0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;box-sizing:border-box}.list_box .main .item[data-v-dd997b0a]{padding-bottom:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.list_box .main .goods[data-v-dd997b0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;margin-bottom:%?10?%;padding:%?7?%}.list_box .main .goods > uni-image[data-v-dd997b0a]{width:%?250?%;height:%?181?%;border-radius:%?11?%}.list_box .main .goods > .goodsnav[data-v-dd997b0a]{width:%?250?%}.list_box .main .goods .describe[data-v-dd997b0a]{font-size:%?22?%;font-family:Microsoft YaHei;font-weight:400;color:#161e49;line-height:%?31?%;padding:%?14?% %?4?% %?1?% %?4?%;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.list_box .main .goods .money[data-v-dd997b0a]{font-size:%?24?%;color:#ff2829;line-height:%?37?%}.list_box .main .goods .sellnum[data-v-dd997b0a]{font-size:%?19?%;font-family:FZLTZHUNHK;font-weight:400;color:#999;line-height:%?13?%}',""]),t.exports=i}}]);
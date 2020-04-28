<template>
	<view class="gardendetail">
		<view class="topvideo">
			<!-- <template v-if="item.video_path">
				<view class="goodsvideo">
				  <video id="myVideo" :src="item.video_path" @error="videoErrorCallback" show-center-play-btn ></video>
				</view>
			</template>	
			<view class="goodspic" v-else>
				<image :src="item.carousel_image[0]" mode=""></image>
			</view> -->
			<template>
				<view v-if="goodsinfo.video_path">
					<view class="uni-padding-wrap uni-common-mt">
						<view>
							<!-- :poster="poster" controls videosrc-->
							<video id="myVideo" :src="goodsinfo.video_path" @error="videoErrorCallback" show-center-play-btn ></video>
						</view>
					</view>
				</view>
				<view class="goodspic" v-else>
					<!-- <image :src="goodsinfo.carousel_image[0]" style="width: 750rpx;" mode=""></image> -->
				</view>
			</template>			
		</view>
		<view class="gardenname"> 
		{{goodsinfo.title}}
		</view>
		<view class="moneynum">
			<view class="money">￥{{goodsinfo.price?goodsinfo.price:0}}</view>
			<text class="line">|</text>
			<view class="num">库存{{goodsinfo.stock?goodsinfo.stock:0}}件</view>			
		</view>
		<view class="goodstalk">
			<view class="" style="display: flex;justify-content: space-between;">
				<view class="" style="font-size:31rpx;
					font-family:PingFang SC;font-weight:bold;
					color:rgba(22,30,73,1);">商品评价(12)</view>
				<view class="" style="font-size:26rpx;
					font-family:PingFang SC;font-weight:bold;color:rgba(22,30,73,1);
					line-height:21rpx;">查看更多></view>
			</view>
			<view class="" style="display: flex;justify-content: space-between;">
				<view class="">
					<view class="">
						<image style="display: inline-block;width: 51rpx;height: 51rpx;border-radius: 50%;margin-right:22rpx;position: relative;top:30rpx;" src="../../static/avatar.png" mode=""></image>
						<view class="" style="display: inline-flex;flex-direction: column;">
							<view style="font-size:25rpx;font-family:PingFang SC;
								font-weight:400;color:rgba(157,157,157,1);">项飞田</view>
							<view class="">
								<image style="width: 19rpx;height: 19rpx;display: inline-block;" src="../../static/images/stary.png" mode=""></image>
								<image style="width: 19rpx;height: 19rpx;display: inline-block;" src="../../static/images/stary.png" mode=""></image>
								<image style="width: 19rpx;height: 19rpx;display: inline-block;" src="../../static/images/stary.png" mode=""></image>
								<image style="width: 19rpx;height: 19rpx;display: inline-block;" src="../../static/images/stary.png" mode=""></image>
								<image style="width: 19rpx;height: 19rpx;display: inline-block;" src="../../static/images/stary.png" mode=""></image>
							</view>	
						</view>
					</view>
				</view>
				<view class="" style="font-size:22rpx;font-family:PingFang SC;
					font-weight:400;color:rgba(148,148,148,1);margin-top:30rpx">2018年09月12日</view>			
			</view>
			<view class="" style="width: 100%;height: 78rpx;overflow: hidden;text-overflow: ellipsis;
				display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;font-size:28rpx;
				font-family:PingFang SC;font-weight:400;color:rgba(79,79,79,1);">
				正在试喝曼岗，开汤后香味明显，汤色明亮澄黄，无涩
				味，生津迅速，三泡遍体微汗尤其是额头，后期还会...
			</view>
			<view class="" style="font-size:25rpx;padding-top:27rpx;padding-bottom:38rpx;
				font-family:PingFang SC;font-weight:100;color:rgba(101,101,102,1);">
				<text style="margin-left: 18rpx;">口感醇厚</text>
				<text style="margin-left: 53rpx;">茶香浓郁</text>
			</view>
			<view class="" style="display: flex;justify-content: space-between;">
				<image style="display: inline-block;width: 153rpx;height: 153rpx;" src="../../static/images/gard01.png" mode=""></image>
				<image style="display: inline-block;width: 153rpx;height: 153rpx;" src="../../static/images/gard02.png" mode=""></image>
				<image style="display: inline-block;width: 153rpx;height: 153rpx;" src="../../static/images/gard03.png" mode=""></image>
				<image style="display: inline-block;width: 153rpx;height: 153rpx;" src="../../static/images/gard04.png" mode=""></image>
			</view>
		</view>
		<view class="goodsdetail">
			<view class="" style="font-size:31rpx;
				font-family:PingFang SC;font-weight:bold;
				color:rgba(0,0,0,1);line-height:80rpx;text-align: left;">
				商品详情
			</view>
			<view class="infodetails" style="font-size:25rpx;font-family:PingFang SC;
				font-weight:400;color:rgba(101,101,101,1);line-height:21rpx;">
				<!-- <view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: space-between;">
					<view class="">叶底</view>
					<view class="">肥厚有活性，叶脉清晰</view>						
				</view>
				
				<view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: space-between;">
					<view class="">出品方</view>
					<view class="">昆明润喆茶业有限公司</view>						
				</view>
				
				<view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: space-between;">
					<view class="">鲜叶等级</view>
					<view class="">特级</view>						
				</view>
				
				<view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: space-between;">
					<view class="">使用场景</view>
					<view class="">任何场景</view>						
				</view>
				
				<view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: space-between;">
					<view class="">嫩度</view>
					<view class="">春茶成熟度</view>						
				</view>
				
				<view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: space-between;">
					<view class="">生产厂商</view>
					<view class="">云南岭南茶叶有限公司</view>						
				</view>
				
				<view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: space-between;">
					<view class="">条索</view>
					<view class="">茶条完整，白芽黑条均匀</view>						
				</view>
				
				<view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: space-between;">
					<view class="">产地</view>
					<view class="">云南</view>						
				</view>
				<view class="" style="height: 80rpx;line-height:80rpx;display: flex;justify-content: center;">
					查看更多作品属性			
				</view>
			 -->
			 <view class="detai" style="width: 750rpx;margin: 0 auto;margin-left:-28rpx;padding-bottom: 60rpx;" v-html="goodsinfo.description">
			 	
			 </view>
			</view>				
		</view>
		<!-- <view class="special">
			<view class="top">
				<view class="word">特点</view>
				<view class="word">/</view>							
				<view class="" >
					<view>冰糖韵明显，</view>
					<view>茶汤入口饱满,花香，蜜香，冰糖甜，略有苦韵。</view>
					<view>在整个冲泡过程中，滋味变化无穷。</view>
					<view>齿颊间余香有韵，口腔愉悦。</view>
				</view>
			</view>
			<view class="bottom">
				<view class="" >
					<image style="width: 360rpx;height: 360rpx;margin-right:4rpx" src="../../static/images/cat.png" mode=""></image>
				</view>
				<view class="" style="display: flex;width: 334rpx;height: 360rpx;flex-direction: column;">
					<image style="width: 332rpx;height: 176rpx;display: inline-block;" src="../../static/images/gard01.png" mode=""></image>
					<image style="width: 332rpx;height: 176rpx;display: inline-block;margin-top: 4rpx;" src="../../static/images/diss.png" mode=""></image>
				</view>
			</view>
		</view> -->
		<view class="btns">
			<view class="btnlef">客服</view>
			<view class="btnmid" @click="addcar(goodsinfo.sku_id)">加入购物车</view>
			<view class="btnrig">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		data() {
			return {
				goodsinfo:{},
				sku_id:''
			};
		},
		onLoad(option) {
			this.sku_id = option.sku_id;			
			this.goodsdetail(option.sku_id);
			if(uni.getStorageSync('token')){
				this.token = uni.getStorageSync('token');				
			}else{
				// uni.showToast({
				// 	icon:'none',
				// 	title:'请登录'
				// })
				// setTimeout(function() {
				// 	uni.navigateTo({
				// 		url:'../registerLogin/passwordLogin/passwordLogin'
				// 	})
				// }, 1000);
			}	
		},
		methods:{
			goodsdetail(val){
				uni.request({
				    url: this.global_api+'/api/goods/info',
				    data: {
							sku_id:val
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
							
						if(res.data.status==200){
							this.goodsinfo = res.data.result;
							// uni.showToast({
							// 	icon: 'none',
							// 	title: res.data.message
							// });												
						}else{
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});					
						}						
				   }
				});
			},
			addcar(val){
				uni.request({
				    url: this.global_api+'/api/cart/insert',
				    data: {
							sku_id:val,
							num:1
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
						if(res.data.status==200){
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});												
						}else{
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});					
						}						
				   }
				});
			},
			videoErrorCallback: function(e) {
				// uni.showModal({
				// 	content: e.target.errMsg,
				// 	showCancel: false
				// })
			},
		}
	}
</script>

<style lang="less">
	.gardendetail{
		uni-video {
				width: 100%!important;
				height: 225px;
				display: inline-block;
				line-height: 0;
				overflow: hidden;
				position: relative;
		}
		.gardenname{
			width: 694rpx;
			margin:0 auto;
			font-size:31rpx;
			font-family:MicrosoftYaHei;
			font-weight:bold;
			color:rgba(22,30,73,1);
			line-height:44rpx;
		}
		.moneynum{
			text-align: center;
			.money{
				display: inline-block;
				font-size:32rpx;
				font-family:MicrosoftYaHei;
				font-weight:400;
				color:rgba(255,40,41,1);
				line-height:37rpx;
			}
			.line{
				display: inline-block;
				margin-left:20rpx;
				font-size:25rpx;
				color:rgba(152,152,152,1);
			}
			.num{
				margin-left:20rpx;
				display: inline-block;
				font-size:25rpx;
				font-family:MicrosoftYaHei;
				font-weight:400;
				color:rgba(152,152,152,1);
				line-height:38px;
			}
		}
		.goodstalk{
			width: 694rpx;
			margin:0 auto;
			padding-bottom:28rpx;
		}
		.goodsdetail{
			width: 694rpx;
			margin:0 auto;
			padding-top: 28rpx;
		}
		.special{
			.top{
				text-align: center;
				margin-top:150rpx;
				font-size: 26rpx;
				color:rgba(101,101,101,.7);
				line-height:46rpx;
				.word{
					font-size: 40rpx;
					color:rgba(198,163,135,.6);
				}
			}
			.bottom{
				width:694rpx;
				margin: 50rpx auto;
				display: flex;
			}
		}
		.btns{
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 9;
			font-size:31rpx;
			font-family:MicrosoftYaHei;
			background:#fff;
			color:rgba(52,52,52,1);
			font-weight:bold;
			width: 750rpx;
			display: flex;
			height: 100rpx;
			line-height: 100rpx;
			.btnlef{
				width: 30%;
				text-align: center;
				border-right:2rpx solid #D5D5D5;
			}
			.btnmid{
				width: 40%;
				text-align: center;
			}
			.btnrig{
			  width: 30%;
				text-align: center;
				color:rgba(255,255,255,1);
				background:#F24646;
			}
		}
	}
</style>
                                                                                                
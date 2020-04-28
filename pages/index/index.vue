<template>
	<view class="content">
		<topSearch/>
		<view class="click-feedback">
			<image src="../../static/images/01.png"></image>
			<image src="../../static/images/02.png"></image>
			<image src="../../static/images/03.png"></image>
			<image src="../../static/images/04.png"></image>
		</view>
		<view class="drawer" >
			<view class="drawerback"></view>
			<view class="drawerimg">
				<image src="../../static/images/swiper.png" mode="widthFix"></image>
				<image class="pullbtn" src="../../static/images/10.png" mode="widthFix"></image>
			</view>			
		</view>
		<view class="star">
			<image src="../../static/images/starback.png" mode="widthFix"></image>
		</view>
		<view class="sayhi">
			<image src="../../static/images/sayhiback.png" style="width: 750rpx;height: 522rpx;position: relative;z-index: -1;" mode="widthFix"></image>
			<view class="saylist">
				<view class="sayli">
					<view class="avatar">
						<image class="avatarimg" src="../../static/images/hiavatar.png" mode="widthFix"></image>
						<view class="content">
							<view class="name">卡哇伊</view>								 
							<view class="desc">
								你现在不喜欢我，我告诉你，过了这个村，我在下个村等你！
							</view>
						</view>
					</view>
				</view>
				<view class="second">
					<view class="avatar">						
						<view class="content">
							<view class="name">卡哇伊</view>								 
							<view class="desc">
								你现在不喜欢我，我告诉你，过了这个村，我在下个村等你！
							</view>
						</view>
						<image class="avatarimg" src="../../static/images/hiavatar.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="sayli">
					<view class="avatar">
						<image class="avatarimg" src="../../static/images/hiavatar.png" mode="widthFix"></image>
						<view class="content">
							<view class="name">卡哇伊</view>								 
							<view class="desc">
								你现在不喜欢我，我告诉你，过了这个村，我在下个村等你！
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>		
		<view class="goodslist" v-for="(item,index) in list" :key="item.goods_id">
			<view class="goodsli" @click="goodsdetail(item.sku_id)">
				<template  v-if="item.video_path">
					<view class="goodsvideo">
					  <video id="myVideo" controls :poster="item.carousel_image[0]" :src="item.video_path" @error="videoErrorCallback" show-center-play-btn ></video>
					</view>					
				</template>	
				<view class="goodspic" v-else>
					<image :src="item.carousel_image[0]" mode=""></image>
				</view>
				<view class="goodsname">
					<text class="goodslook1"></text>
					<text class="nametext">{{item.title}}</text>
					<text class="goodslook">品鉴</text>
				</view>
			</view>
			
			
	<!-- 		<view class="goodsli" @click="goodsdetail()">
				<view class="goodspic">
					<image src="../../static/images/goods01.png" mode=""></image>
				</view>
				<view class="goodsname">
					<text class="goodslook1"></text>
					<text class="nametext">二十年陈年普洱</text>
					<text class="goodslook">品鉴</text>
				</view>
			</view>
			<view class="goodsli" @click="goodsdetail()">
				<view class="goodspic">
					<image src="../../static/images/goods02.png" mode=""></image>
				</view>
				<view class="goodsname namegoods2">
					<text class="goodslook1"></text>
					<text class="nametext">桂花普洱</text>
					<text class="goodslook">品鉴</text>
				</view>
			</view>
			<view class="goodsli" @click="goodsdetail()">
				<view class="goodspic">
					<image src="../../static/images/goods03.png" mode=""></image>
				</view>
				<view class="goodsname namegoods3">
					<text class="goodslook1"></text>
					<text class="nametext">二十年铁观音</text>
					<text class="goodslook">品鉴</text>
				</view>
			</view>
			<view class="goodsli" @click="goodsdetail()">
				<view class="goodspic">
					<image src="../../static/images/goods01.png" mode=""></image>
				</view>
				<view class="goodsname namegoods4">
					<text class="goodslook1"></text>
					<text class="nametext">藏茶</text>
					<text class="goodslook">品鉴</text>
				</view>
			</view>
			<view class="goodsli" @click="goodsdetail()">
				<view class="goodspic">
					<image src="../../static/images/goods05.png" mode=""></image>
				</view>
				<view class="goodsname namegoods5">
					<text class="goodslook1"></text>
					<text class="nametext">陈皮</text>
					<text class="goodslook">品鉴</text>
				</view>
			</view>
			<view class="goodsli" @click="goodsdetail()">
				<view class="goodspic">
					<image src="../../static/images/goods06.png" mode=""></image>
				</view>
				<view class="goodsname namegoods6">
					<text class="goodslook1"></text>
					<text class="nametext">更多铭品</text>
					<text class="goodslook">品鉴</text>
				</view>
			</view>
			<view class="goodsli" @click="goodsdetail()">
				<view class="goodspic">
					<template v-if="videosrc">
						<view>
						  <video id="myVideo" :src="videosrc" @error="videoErrorCallback" show-center-play-btn ></video>
						</view>
					</template>	
					<image v-else src="../../static/images/goods07.png" mode=""></image>
				</view>
				<view class="goodsname namegoods7">
					<text class="goodslook1"></text>
					<text class="nametext">茶艺</text>
					<text class="goodslook"></text>
				</view>
			</view>
			<view class="goodsli" @click="goodsdetail()">
				<view class="goodspic">
					<image src="../../static/images/goods08.png" mode=""></image>
				</view>
				<view class="goodsname namegoods8">
					<text class="goodslook1"></text>
					<text class="nametext">茶具</text>
					<text class="goodslook"></text>
				</view>
			</view> -->
		</view>
<!-- 		<refresh ref="refresh" @refresh='$refs.list.refresh()'>			
			<list class="goodslist" ref="list" :options="options" @success="$refs.refresh.endAfter()">
				<template v-slot="{list}">
					<view class="title">列表组件封装</view>
					<view class="item" v-for="(item, index) in list" :key="index">
						我是第{{index}}项
					</view>
				</template>
			</list>
		</refresh> -->
		<view class="bottom" style="width: 100%;height: 1340rpx;position: relative;z-index: 2;top: -56rpx;">
			<image style="width: 100%;height: 1340rpx;" src="../../static/indexbottom.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import topSearch from '../../components/topSearch.vue'
	import topTabbar from '../../components/topTabbar.vue'
	import chunleiVideo from '../../components/chunlei-video/chunlei-video.nvue'	

	export default {
		components:{
			topSearch,
			topTabbar,
			chunleiVideo
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				//扫码
			}else if(e.index==1){
				uni.navigateTo({
					url: '/pages/information/information'
				});
			}		
		},
		mounted() {
			// 调用组件的request方法开始获取数据
			// this.$refs.list.request()
			
		},
		computed: {			
			// 定义请求的配置，配置详情请查看文档说明
			options() {
				return {
					url:'/test',
					// url:this.global_api+'/api/goods/list',
					params: {
						
					}
				}
				
			}
			
		},
		data() {
			return {
				list:[],
				page:1,
				limit:5,
				category_id:'',
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				detail:{
					// title:"推荐",
					// subLable:"超划算",
					list:[
						{
							id:1,
							img:"../../static/images/4.png",
							name:"全部"
						},
						{
							id:2,
							img:"../../static/images/5.png",
							name:"红茶"
						},
						{
							id:3,
							img:"../../static/images/11.png",
							name:"黑茶"
						},
						{
							id:4,
							img:"../../static/images/2.png",
							name:"普洱"
						},
						{
							id:5,
							img:"../../static/images/4.png",
							name:"普洱"
						},
						{
							id:6,
							img:"../../static/images/5.png",
							name:"普洱"
						}
					]
				},
				config:{
					more:true,
					autoplay:false,
					multiple:4,
					shadow:true
				},
				videosrc:'../../static/videos/f2.mp4',  
				poster:'../../static/images/swiper2 .png',//封面图片
				title:"视频",
				gDuration:60,
				first:true,
				second:false,
			}
		},
		onReady: function(res) {
				// #ifndef MP-ALIPAY
				this.videoContext = uni.createVideoContext('myVideo')
				// #endif
		},
		onLoad() {
			this.getlist();
		},
		methods: {
			getlist(){
				uni.request({
				    url: this.global_api+'/api/goods/list',
				    data: {
							page:1,
							limit:5
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
						if(res.data.status==200){
							this.list = res.data.result.data
							// if(res.data.result){
							// 	this.objcart = res.data.result;
							// }														
						}else{
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});					
						}						
				   }
				});
			},
			handleChange(){},
			changeIndicatorDots(e) {
					this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
					this.autoplay = !this.autoplay
			},
			intervalChange(e) {
					this.interval = e.target.value
			},
			durationChange(e) {
					this.duration = e.target.value
			},
			swiperChange(current){
				console.log(current);
			},
			tapFun(e){
				console.log(e.type,e.id,e.index);
			},
			videoErrorCallback: function(e) {
			// 	uni.showModal({
			// 			content: e.target.errMsg,
			// 			showCancel: false
			// 	})
			},
			goodsdetail(val){
				uni.navigateTo({
					url:'../gardenDetail/gardenDetail?sku_id='+val
				})
			},
			togoodsdetail(val){
				uni.navigateTo({
					url:'../gardenDetail/gardenDetail?goods_id='+val
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	// .content {
		
		.click-feedback{
			display: flex;
			justify-content: space-around;
			padding: 27rpx 56rpx 55rpx 56rpx;
			background-color: #876F70;
			image{
				width: 83rpx;
				height:83rpx;
			}
		}	
		.drawer{
			width:100%;
			height:305rpx;
			position:relative;
			background: #876F70;
			display: flex;
			justify-content: center;
			.drawerback{
				position: absolute;
				z-index: 1;
				width: 639rpx;
				height: 305rpx;
				background:#8a4e53;
				display:block;
				border-radius: 30rpx;
				margin:0 auto;
			}
			.drawerimg{
				width:100%;
				position: absolute;
				z-index: 2;
				top: 30rpx;
				text-align: center;
				image{
					width: 694rpx;
					height: 325rpx;
					margin:0 auto;
				}
				.pullbtn{
					width: 40rpx;
					height: 40rpx;
					display: flex;
					justify-content: center;
					margin-top: -80rpx;
				}
			}
		}
		.star{
			width: 100%;
			position: relative;
			z-index: 3;
			top:-28rpx;
			image{
				width:100%;
			}
		}
		.sayhi{
			// padding-top: 16rpx;
			height: 522rpx;
			margin-top: -40rpx;
			// background:url(../../static/images/sayhiback.png) no-repeat;
			padding-right: 28rpx;
			.saylist{
				position: relative;
				top: -100%;
				.sayli{
					margin-bottom: 28rpx;
					.avatar{
						display: flex;
						justify-content: space-around;
						.avatarimg{
							width: 111rpx;
							height: 111rpx;
							border-radius:50%;
							display: inline-block;
							margin-right: -150rpx;
						}
						.content{
							display: inline-flex;
							flex-direction: column;
							width:614rpx;
							height:111rpx;
							background:rgba(59,68,115,1);
							border-radius:28rpx;
							padding-right:12rpx;
							box-sizing: border-box;
							.name{
								font-size:28rpx;
								font-family:PingFang SC;
								font-weight:400;
								margin-left:80rpx;
								color:rgba(254,254,254,1);
								line-height:64rpx;
							}
							.desc{
								font-size:19rpx;
								font-family:PingFang SC;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								font-weight:400;
								margin-left: 80rpx;						
								color:rgba(255,255,255,1);
								line-height:25rpx;
							}
						}
					}
				}
				.second{
					margin-bottom: 28rpx;
					.avatar{
						display: flex;
						justify-content: space-around;
						.avatarimg{
							width: 111rpx;
							height: 111rpx;
							border-radius:50%;
							display: inline-block;
							margin-left: -150rpx;
						}
						.content{
							display: inline-flex;
							flex-direction: column;
							width:614rpx;
							height:111rpx;
							background:rgba(59,68,115,1);
							border-radius:28rpx;
							padding-right:12rpx;
							box-sizing: border-box;
							text-align: right;
							.name{
								font-size:28rpx;
								font-family:PingFang SC;
								font-weight:400;
								margin-left: 20rpx;
								margin-right:80rpx;								
								color:rgba(254,254,254,1);
								line-height:64rpx;
							}
							.desc{
								font-size:19rpx;
								font-family:PingFang SC;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								font-weight:400;
								margin-right: 80rpx;						
								color:rgba(255,255,255,1);
								line-height:25rpx;
							}
						}
					}
				}
			}			
		}
		.goodslist{
			width: 100%;
			background: #876F70;
			position: relative;
			z-index: 9;
			top: -32rpx;
			padding-top: 33rpx;
			.goodsli{
				width: 100%;
				height: 576rpx;
				background: #876F70;
				padding-top: 28rpx;
				position: relative;
				z-index: 9;
				.goodsvideo{
					width:698rpx;
					// width: 100%;
					height:486rpx;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					#myVideo{
						width: 100%;
						height: 100%;
						border-radius: 12rpx;
					}
				}
				.goodspic{
					width:698rpx;
					height:486rpx;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					image{
						width: 100%;
					}
				}
				.goodsname{
					background: url(../../static/images/14.png) no-repeat ;					
					width: 750rpx;
					height: 90rpx;
					text-align: center;
					background-size:100% 100%;
					color: white;
					margin-top: -24rpx;
					font-family: 经典繁毛楷;	
					line-height: 110rpx;
					display: flex;
					.nametext{					
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
						flex:1;
					}
					.goodslook{					
						width: 78rpx;
						height: 36rpx;
						margin-right: 28rpx;
						position: relative;
						float: right;
						
					}
					.goodslook1{					
						width: 78rpx;
						height: 36rpx;
						margin-left: 28rpx;
						position: relative;
						float: left;
					}			
				}
				.namegoods2{
					background: url(../../static/images/14_6.png) no-repeat ;			
					background-size: 100% 100%;
				}
				.namegoods3{
					background: url(../../static/images/14_2.png) no-repeat ;			
					background-size: 100% 100%;
				}
				.namegoods4{
					background: url(../../static/images/14_5.png) no-repeat ;			
					background-size: 100% 100%;
				}
				.namegoods5{
					background: url(../../static/images/14_3.png) no-repeat ;			
					background-size: 100% 100%;
				}
				.namegoods6{
					background: url(../../static/images/14_1.png) no-repeat ;			
					background-size: 100% 100%;
				}
				.namegoods7{
					background: url(../../static/images/14_4.png) no-repeat ;			
					background-size: 100% 100%;
				}
				.namegoods8{
					background: url(../../static/images/14_7.png) no-repeat ;			
					background-size: 100% 100%;
				}
			}
		}
	// }
 
</style>

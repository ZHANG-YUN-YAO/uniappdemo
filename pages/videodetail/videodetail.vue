<template>
	<view class="videodetail">
		<view class="articletitle" style="width: 750rpx;height: 430rpx;margin-left:-28rpx;">
			<!-- <view> -->
				<!-- :poster="poster" controls videosrc-->
				<video style="width: 750rpx;height: 430rpx;" id="myVideo" src="video_path" @error="videoErrorCallback" show-center-play-btn ></video>
			<!-- </view> 			 -->
		</view>
		<view class="articlebody">
			<view class="bodyuser">
				<view class="left">
					<image class="avatar" src="../../static/images/hiavatar.png" mode=""></image>
					<view class="name">阳春白雪</view>
				</view>
				<view class="right">
					<!-- <image class="huo" src="../../static/images/hot.png" mode=""></image> -->
					<!-- <view class="number">2.1万</view> -->
				</view>
			</view>
			<view class="taeword1">
				冬日煮茶记
			</view>
			<!-- <image class="teapic" src="../../static/images/teaarticle.jpg" mode=""></image> -->
			<view class="teaword2">
				叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品
				种和制作方式以及产品外形分成六大类。依据季节采制可
				分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再
				加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用
				保健茶、茶食品、含茶饮料等。
			</view>
		</view>
		<view class="tobuy">
			<view class="buyimg">
				<image class="img" src="../../static/images/tobuy.png" mode=""></image>
			</view>
			<view class="desc">
				【利源隆】湖南安化黑茶正...
			</view>
			<view class="buybtn">
				去购买
			</view>			
		</view>		
		<view class="bottom">
			<view class="left">
				<image class="img" src="../../static/images/pingjia.png" mode=""></image>
				<view class="context">发表评价</view>
			</view>
			<view class="right">
				<view class="one">
					<image class="img" src="../../static/images/talk.png" mode=""></image>
					<view class="context">16</view>
				</view>
				<view class="two">
					<image class="img" src="../../static/images/heart.png" mode=""></image>
					<view class="context">23</view>
				</view>
				<view class="three">
					<image class="img" src="../../static/images/star.png" mode=""></image>
					<view class="context">63</view>
				</view>
			</view>
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
				video_path:''
			}
		},
		onNavigationBarButtonTap(e) {
			// 分享按钮
			// uni.navigateTo({
			//   url: '/pages/goodsList/goodsList'
			// });
		},
		methods: {
			videoErrorCallback: function(e) {
				// uni.showModal({
				// 	content: e.target.errMsg,
				// 	showCancel: false
				// })
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #15182A;
	}
	.videodetail{		
		height: 100%;
		padding: 42rpx 28rpx;
		padding-top: 0;
		background-color: #15182A;
		color: #fff;
		.articletitle{
			width:693rpx;
			font-size:35rpx;
			font-family:Microsoft YaHei;
			font-weight:400;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp:2;
		}
		.articlebody{
			.bodyuser{
				padding-bottom:14rpx;
				display: flex;
				justify-content: space-between;
				margin-top:44rpx;
				margin-bottom:28rpx;
				.left{
					width: 50%;
					display: flex;
					justify-content: flex-start;
					.avatar{
						width:69rpx;
						height:69rpx;
						border-radius:50%;
					}
					.name{
						font-size:28rpx;
						font-weight:400;
						color:rgba(255,255,255,1);
						margin-left: 14rpx;
						font-family:PingFang SC;
						margin-top: 14rpx;
					}
				}
				.right{
					width: 50%;
					display: flex;
					justify-content: flex-end;
					.huo{
						width: 20rpx;
						height: 20rpx;
						display: inline-block;
						position: relative;
						top:6rpx;
					}
					.number{
						font-size:21rpx;
						display: inline-block;
						font-family:FZLTZHUNHK;
						font-weight:normal;
						margin-left:10rpx;
						color:rgba(187,187,187,1);
					}
				}
			}
			.taeword1,.teaword2{
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,1);
			}
			.teaword2{
				margin-top: 35rpx;
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height: 50rpx;
			}
			.teapic{
				width:694rpx;
				height:349rpx;
			}
		}
		.tobuy{
			margin-top: 110rpx;
			width:638rpx;
			display: flex;
			justify-content: space-between;
			padding-left: 18rpx;
			padding-top:12rpx;
			height:72rpx;
			padding-right:30rpx;
			background:rgba(229,229,229,1);
			border-radius:14rpx;
			.desc{
				position: relative;
				left: -40rpx;
				top:10rpx;
				display: inline-block;
				width:351rpx;
				height:30rpx;
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(48,48,48,1);
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			.buybtn{
				margin-top:12rpx;
				font-size:24rpx;
				display: inline-block;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(48,48,48,1);
			}
			.buyimg{
				display: inline-block;
				position: relative;
				.img{
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
		.bottom{
			width:750rpx;
			// height:117rpx;
			display: flex;
			justify-content: space-between;
			padding: 28rpx 28rpx 44rpx 28rpx;
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 1;
			background:rgba(0,0,0,.8);
			.left{
				.img{
					width: 28rpx;
					height: 28rpx; 
					display: inline-block;
				}
				.context{
					display:inline-block;
					font-size:28rpx;
					margin-left: 8rpx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(255,255,255,1);
				}
			}
			.right{
				display: flex;
				justify-content: flex-end;
				margin-right:28rpx;
				padding-right:28rpx;
				.one,.two,.three{
					margin-left:55rpx;
					.img{
						width: 30rpx;
						height: 28rpx; 
						display: inline-block;
					}
					.context{
						display:inline-block;
						font-size:28rpx;
						margin-left: 8rpx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(255,255,255,1);
					}
				}
			}
		}
	}
</style>

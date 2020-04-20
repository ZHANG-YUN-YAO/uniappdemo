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
		<view class="goodslist">
			
		</view>
	</view>
</template>

<script>
	import topSearch from '../../components/topSearch.vue'
	import topTabbar from '../../components/topTabbar.vue'
	export default {
		components:{
			topSearch,
			topTabbar
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.content {
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
			height: 400rpx;
			background: #876F70;
			position: relative;
			z-index: -2;
			top: -32rpx;

		}
	}
 
</style>

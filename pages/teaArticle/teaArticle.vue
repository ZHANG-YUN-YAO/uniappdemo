<template>
	<view class="teaarticle">
		<view class="articletitle">
			春茶的制作工艺，宅在家不能出门享受美食，茶
			水煮饭包你食欲大开、格调满满！			 			
		</view>
		<view class="articlebody">
			<view class="bodyuser">
				<view class="left">
					<image class="avatar" src="../../static/images/hiavatar.png" mode=""></image>
					<view class="name">阳春白雪</view>
				</view>
				<view class="right">
					<image class="huo" src="../../static/images/hot.png" mode=""></image>
					<view class="number">2.1万</view>
				</view>
			</view>
			<view class="taeword1">
				普洱茶制作工艺之一“采茶”的起源，“采茶”原是中国一种民间歌舞体裁，流行于南方产茶区，用于表现种茶、采茶的欢乐情绪。
				
				采茶的发展历程：采茶的发展历史有很多阶段，如：单纯的“茶歌”，为茶农劳动时唱的歌。载歌载舞的“茶灯”，即茶农将劳动动作稍做加工，
				伴之以茶歌，边歌边舞。有简单情节的小戏。如赣南采茶戏，就是在采茶歌舞的基础上发展形成的板腔体音乐。
				等等还有其他就不细讲了。
				普洱春茶采摘过程是怎么样的，这就为你介绍以下几种采茶的方式!
				中国禅茶文化精神概括为“正、清、和、雅”。“茶禅一味”的禅茶文化，是中国传统文化史上的一种独特现象，也是中国对世界文明的一大贡茶...
				                            
			</view>
			<image class="teapic" src="../../static/images/teaarticle.jpg" mode=""></image>
			<view class="teaword2">
				普洱茶制作工艺之一“采茶”的起源，“采茶”原是中国一种民间歌舞体裁，流行于南方产茶区，用于表现种茶、采茶的欢乐情绪。
				
				采茶的发展历程：采茶的发展历史有很多阶段，如：单纯的“茶歌”，为茶农劳动时唱的歌。载歌载舞的“茶灯”，即茶农将劳动动作稍做加工，
				伴之以茶歌，边歌边舞。有简单情节的小戏。如赣南采茶戏，就是在采茶歌舞的基础上发展形成的板腔体音乐。
				等等还有其他就不细讲了。
				普洱春茶采摘过程是怎么样的，这就为你介绍以下几种采茶的方式!
				中国禅茶文化精神概括为“正、清、和、雅”。“茶禅一味”的禅茶文化，是中国传统文化史上的一种独特现象，也是中国对世界文明的一大贡茶...                            
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e) {
			// 分享按钮
			// uni.navigateTo({
			//   url: '/pages/goodsList/goodsList'
			// });
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.teaarticle{
		padding: 42rpx 28rpx;
		.articletitle{
			width:693rpx;
			font-size:35rpx;
			font-family:Microsoft YaHei;
			font-weight:400;
			color:rgba(22,30,73,1);
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp:2;
		}
		.articlebody{
			.bodyuser{
				border-bottom: 2rpx solid #DDDDDD;
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
						width:42rpx;
						height:42rpx;
						border-radius:50%;
					}
					.name{
						font-size:21rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(22,30,73,1);
						margin-left: 11rpx;
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
				font-size:25rpx;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(22,30,73,1);
				line-height:42rpx;
			}
			.teapic{
				width:694rpx;
				height:349rpx;
			}
		}
	}
</style>

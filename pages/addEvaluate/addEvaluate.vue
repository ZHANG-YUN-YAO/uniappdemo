<template>
	<view class="addevaluate">
		<view class="orderdetail">
			<image class="ordericon" src="../../static/images/timeicon.png" mode=""></image>
			<view class="orderidnum">订单编号：495793261844</view>
			<image class="ordericonrig" src="../../static/images/ordernum.png" mode=""></image>
		</view>
		<view class="goodsli">
			<view class="goods">
				<view class="goodspic">
					<image class="diss" src="../../static/images/diss.png" mode=""></image>
				</view>
				<view class="goodsnamnum">
					<view class="name">桂花普洱茶</view>
					<view class="number">
						<view class="">净含量：120克</view>				
						<view class="">x1</view>
					</view>				
					<view class="price">
						<view class="goodsclass">品鉴级</view>
						<view class="money">￥ 399.00</view>
					</view>
				</view>
			</view>
			<view class="aboutdesc">
				<view class="aboutif">
					描述相符
				</view>
				<view class="piclist">
					<image class="picli" src="../../static/images/stary.png" mode=""></image>
					<image class="picli" src="../../static/images/stary.png" mode=""></image>
					<image class="picli" src="../../static/images/stary.png" mode=""></image>
					<image class="picli" src="../../static/images/stary.png" mode=""></image>
					<image class="picli" src="../../static/images/starn.png" mode=""></image>
				</view>
			</view>			
			<view class="inpdesc">
				<textarea placeholder-style="width:100%;height:157rpx;color:#BABDCF;font-size:25rpx;;" 
				 placeholder="宝贝满意吗？说说它的优点和不足吧~" auto-height="true" maxlength="120" value=""/>
				<text class="inputnum">0/120</text>
			</view>
			<view class="picbox">
				<image class="picture" src="../../static/images/go01.png" mode=""></image>
				<image class="picture" src="../../static/images/go02.png" mode=""></image>
				<image class="picture" src="../../static/images/go03.png" mode=""></image>
				<image class="picturelast" src="../../static/images/go04.png" mode=""></image>
				<view class="camber">				
					<text>完成\n评价</text>
				</view>
			</view>
		</view>
		<view class="goodsli">
			<view class="goods">
				<view class="goodspic">
					<image class="diss" src="../../static/images/diss.png" mode=""></image>
				</view>
				<view class="goodsnamnum">
					<view class="name">桂花普洱茶</view>
					<view class="number">
						<view class="">净含量：120克</view>				
						<view class="">x1</view>
					</view>				
					<view class="price">
						<view class="goodsclass">品鉴级</view>
						<view class="money">￥ 399.00</view>
					</view>
				</view>
			</view>
			<view class="aboutdesc">
				<view class="aboutif">
					描述相符
				</view>
				<view class="piclist">
					<image class="picli" src="../../static/images/stary.png" mode=""></image>
					<image class="picli" src="../../static/images/stary.png" mode=""></image>
					<image class="picli" src="../../static/images/stary.png" mode=""></image>
					<image class="picli" src="../../static/images/stary.png" mode=""></image>
					<image class="picli" src="../../static/images/starn.png" mode=""></image>
				</view>
			</view>			
			<view class="inpdesc">
				<textarea placeholder-style="width:100%;height:157rpx;color:#BABDCF;font-size:25rpx;;" 
				 placeholder="宝贝满意吗？说说它的优点和不足吧~" auto-height="true" maxlength="120" value=""/>
				<text class="inputnum">0/120</text>
			</view>
			<view class="picbox">
				<image class="picture" src="../../static/images/go01.png" mode=""></image>
				<image class="picture" src="../../static/images/go02.png" mode=""></image>
				<image class="picture" src="../../static/images/go03.png" mode=""></image>
				<image class="picturelast" src="../../static/images/go04.png" mode=""></image>
				<!-- <view class="camber">				
					<text>完成\n评价</text>
				</view> -->
				<view class="camber2">
					<text>立即\n评价</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>
<style lang="scss">
	.addevaluate{
		padding:16rpx 28rpx 16rpx 28rpx;
		margin-top: 28rpx;
		background:rgba(244,244,244,1);
		.goodsli{
			margin-bottom: 67rpx;
		}
		.orderdetail{
			.ordericon{
				display: inline-block;
				width: 19rpx;
				height: 19rpx;
			}
			.orderidnum{
				margin-left:6rpx;
				margin-right: 10rpx;
				display: inline-block;
				font-size:25rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(186,189,207,1);
			}
			.ordericonrig{
				position: relative;
				top: 4rpx;
				display: inline-block;
				width: 28rpx;
				height: 28rpx;
			}
		}
		.goods{
			width:100%;
			display: flex;
			justify-content: flex-start;
			margin-top: 14rpx;
			.goodspic{
				.diss{
					width: 201rpx;
					height: 192rpx;
				}
			}
			.goodsnamnum{
				width: 100%;
				margin-left: 44rpx;
				display: flex;
				flex-direction: column;
				.name{
					font-size:35rpx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(22,30,73,1);
				}
				.number{
					display: flex;
					justify-content: space-between;
					font-size:25rpx;
					font-family:PingFang SC;
					margin-top:28rpx;
					color:rgba(186,189,207,1);
					font-weight:400;
				}
				.price{
					margin-top:33rpx;
					display: flex;
					justify-content: space-between;
					.goodsclass{
						width:139rpx;
						font-size:28rpx;
						font-family:经典繁毛楷;
						font-weight:400;
						color:rgba(255,255,255,1);
						height:56rpx;
						background:rgba(237,196,134,1);
						border-radius:28rpx;
						text-align: center;
						line-height: 56rpx;
					}
					.money{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(193,196,212,1);
					}
				}
			}
		}
		.aboutdesc{
			margin-top: 28rpx;
			.aboutif{
				display: inline-block;
			}
			.piclist{
				display: inline-block;
				margin-left: 19rpx;
				.picli{
					width: 32rpx;
					height: 32rpx;
					margin-left: 10rpx;
				}
			}
		}
		.inpdesc{
			width:694rpx;
			height:220rpx;
			position: relative;
			background:rgba(235,235,235,1);
			border-radius:14rpx;
			margin-top:26rpx;
			.inputnum{
				position: absolute;
				right: 28rpx;
				bottom:28rpx;
				font-size:25rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(186,189,207,1);
			}
		}
		.picbox{
			width:694rpx;
			height:112rpx;
			border-bottom:2rpx solid #BABDCF;
			padding: 42rpx 0;
			.picture{
				width: 111rpx;
				height: 111rpx;
				margin-right: 29rpx;
			}
			.picturelast{
				width: 128rpx;
				height: 110rpx;
				margin-right: 29rpx;
			}
			.camber{
				width:111rpx;
				display: inline-block;
				height:111rpx;
				border:2rpx solid rgba(186,189,207,1);
				font-size:29rpx;
				font-family:PingFang SC;
				font-weight:400;
				line-height: 50rpx;
				position: relative;
				top: -22rpx;
				color:rgba(186,189,207,1);
				border-radius:28rpx;
				text-align: center;
			}
			.camber2{
				width:111rpx;
				display: inline-block;
				height:111rpx;
				font-size:29rpx;
				font-family:PingFang SC;
				font-weight:400;
				line-height: 50rpx;
				position: relative;
				top: -22rpx;
				color:#FEFEFE;
				border-radius:28rpx;
				text-align: center;
				background: #EF2E5A;
				
			}
		}
		uni-textarea{
			width: 644rpx;
			padding-top: 28rpx;
			margin: 28rpx!important;
		}
		.uni-textarea-textarea{
			width: 644rpx!important;
		}
	}
</style>

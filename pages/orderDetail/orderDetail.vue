<template>
	<view class="orderdetail">
		<view class="top" style="
			font-size:42rpx;margin-top:74rpx
			font-family:Adobe Heiti Std;
			font-weight:normal;text-align: center;
			color:rgba(239,16,74,1);">
			<text>订单支付成功，</text>
			<view style="color:#161E49; margin-top:20rpx;">我们会尽快发货请您耐心等待~</view>
		</view>
		<view class="address" style="width:750rpx;display: flex;align-items: center;
			height:111rpx;background:rgba(246,246,246,1);margin-top:54rpx;">
			<view class="" style="display: inline-block;margin-left:38rpx">
				<image src="../../static/images/didian.png" style="width: 35rpx;height: 35rpx;" mode=""></image>
			</view>
			<view class="" style="margin-left:28rpx;display: inline-flex;flex-direction: column;font-size:28rpx;
				font-family:PingFang SC;font-weight:400;color:rgba(132,132,132,1);">
				<view class="top" >
					王先生  13689767809
				</view>
				<view class="bottom" style="width: 560rpx;margin-top:15rpx;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">
					北京市东城区中央大街十八号楼五十六单...
				</view>
			</view>
		</view>
		<view class="goods">
			<view class="ordernum">
				<view class="" style="display: inline-block;font-size:26rpx;padding-left:28rpx;
				font-family:PingFang SC;font-weight:400;color:rgba(117,117,117,1);">订单编号：203608874021231</view>
				<image style="display: inline-block;width: 22rpx;height:22rpx;margin-left:8rpx;" src="../../static/images/ordernum.png" mode=""></image>
			</view>
			<view class="goodslist">
				<view class="li">
					<view>
						<image class="left" src="../../static/images/83.png" mode=""></image>
					</view>
					<view class="right">
						<view class="one">桂花普洱茶</view>
						<view class="two">
							<view class="">净含量:120克</view>
							<view class="">x1</view>
						</view>
						<view class="three">
							<view class="lef">
								品鉴级
							</view>
							<view class="rig">￥399.00</view>
						</view>
					</view>
				</view>
				<view class="li">
					<view>
						<image class="left" src="../../static/images/83.png" mode=""></image>
					</view>
					<view class="right">
						<view class="one">桂花普洱茶</view>
						<view class="two">
							<view class="">净含量:120克</view>
							<view class="">x1</view>
						</view>
						<view class="three">
							<view class="lef">
								品鉴级
							</view>
							<view class="rig">￥399.00</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btns">
			<view class="btn1">
				退款
			</view>
			<view class="btn2">
				联系客服
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
	.orderdetail{
		.top{}
		.address{}
		.goods{
			margin-top:57rpx;
			.ordernum{}
			.goodslist{
				margin-top: 31rpx;
				.li{
					padding-bottom:42rpx;					
					border-bottom:1px solid #BABDCF;
					width: 694rpx;
					margin:0 auto;
					display: flex;
					justify-content: space-between;
					margin-bottom:56rpx;
					.left{						
						width:200rpx;
						height:192rpx;
						border-radius:21rpx;
					}
					.right{
						margin-left:45rpx;
						width:100%;
						display:flex; 
						flex-direction: column;
						.one{
							width:100%;
							font-size:35rpx;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(22,30,73,1);
						}
						.two{
							margin-top:28rpx;
							display:flex; 
							justify-content: space-between;
							font-size:25rpx;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(186,189,207,1);
						}
						.three{
							margin-top:33rpx;
							display:flex; 
							justify-content: space-between;
							.lef{
								width:139rpx;
								height:56rpx;
								font-size:28rpx;
								font-family:经典繁毛楷;
								font-weight:400;
								color:rgba(255,255,255,1);
								background:rgba(237,196,134,1);
								border-radius:28rpx;
								text-align: center;
								line-height: 56rpx;
							}
							.rig{
								font-size:42rpx;
								font-family:PingFang SC;
								font-weight:400;
								color:rgba(239,16,74,1);
							}
						}
					}
				}
			}
		}
		.btns{
			background:#fff;
			padding:24rpx 0;
			width:100%;
			display: flex;
			justify-content: flex-end;
			position: fixed;
			bottom:0rpx;
			.btn1{
				width:208rpx;
				height:69rpx;
				font-size:28rpx;
				font-family:PingFang SC;
				line-height: 69rpx;
				font-weight:400;
				text-align: center;
				color:rgba(149,149,149,1);
				border:1px solid rgba(186,189,207,1);
				border-radius:35rpx;
			}
			.btn2{
				width:250rpx;
				height:69rpx;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,1);
				text-align: center;
				line-height: 69rpx;
				background:rgba(186,189,207,1);
				border-radius:35rpx;
				margin:0 28rpx;
			}
		}
	}
</style>

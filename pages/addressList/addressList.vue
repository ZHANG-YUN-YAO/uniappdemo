<template>
	<view class="addresslist">
		<view class="address">
			<view class="name">
				王先生  13687653845
			</view>
			<view class="area">
				<view class="areastatus">
					北京市 海淀区 中关村南大街18号韦
					伯时代A座603北京市 海淀区 中关村南大街18号韦
					伯时代A座603
				</view>
				<view class="use">
					使用
				</view>
				<!-- <view class="use2">
					<image class="useok" src="../../static/images/ok.png" mode=""></image>
				</view> -->
			</view>			
			<view class="btns">
				<view class="btnfir">
					<radio value=""/>
					设为默认
				</view>
				<view class="btnrig">
					<view class="dele">
						删除
					</view>
					<view class="edit">
						修改
					</view>
				</view>
			</view>
		</view>
		<view class="address">
			<view class="name">
				王先生  13687653845
			</view>
			<view class="area">
				<view class="areastatus">
					北京市 海淀区 中关村南大街18号韦
					伯时代A座603北京市 海淀区 中关村南大街18号韦
					伯时代A座603
				</view>
				<!-- <view class="use">
					使用
				</view> -->
				<view class="use2">
					<image class="useok" src="../../static/images/ok.png" mode=""></image>
				</view>
			</view>			
			<view class="btns">
				<view class="btnfir">
					<radio value="" checked/>
					设为默认
				</view>
				<view class="btnrig">
					<view class="dele">
						删除
					</view>
					<view class="edit">
						修改
					</view>
				</view>
			</view>
		</view>
		<view class="addarea">
			<image class="addicon" src="../../static/images/add.png" mode=""></image>
			添加收货地址
		</view>
		<view class="addfrime" style="width: 100vw;height: 100vh;position: absolute;top: 0;z-index: 9;background: rgba(0,0,0,.7);">
			<view class=" " style="width:556rpx;
				height:625rpx;margin:0 auto;
				position: relative;top: 50%;margin-top:-312rpx;
				background:rgba(255,255,255,1);
				border-radius:14rpx;">		
				<view class="">
					<view class="" style="font-size:32rpx;
						font-family:PingFang SC;
						font-weight:400;text-align: center;
						color:rgba(22,30,73,1);
						line-height:13rpx;">
						添加收货地址
					</view>
					<image style="width: 18rpx;height: 18rpx;" src="../../static/images/close.png" mode=""></image>
				</view>
				<view class="writeinfo">
					<view class="" style="padding: 32rpx 28rpx;border-bottom:2rpx solid #D5D5D5;">
						<view class="" style="font-size:28rpx;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(120,120,120,1);
							line-height:13rpx;">
							收货人
						</view>			
						<input style="display: inline-block;font-size:28rpx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(186,189,207,1);
						line-height:13rpx;" type="text" value="" placeholder="收货人姓名"/>
					</view>
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

<style lang="less">
	.addresslist{
		.address{
			display: flex;
			flex-direction: column;
			padding: 42rpx 28rpx 23rpx 28rpx;
			.name{
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:400;
				margin-bottom: 30rpx;
				color:rgba(22,30,73,1);
				line-height:27rpx;
			}
			.area{
				display: flex;
				justify-content: space-between;
				.areastatus{
					font-size:32rpx;
					font-family:PingFang SC;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					width: 500rpx;
					font-weight:400;
					overflow: hidden;
					text-overflow: ellipsis;
					color:rgba(120,120,120,1);
				}
				.use{
					width:104rpx;
					height:47rpx;
					font-size:25rpx;
					font-family:PingFang SC;
					line-height: 47rpx;
					font-weight:400;
					text-align: center;
					color:rgba(191,194,210,1);
					border:2rpx solid rgba(186,189,207,1);
					border-radius:7rpx;
				}
				.use2{
					.useok{
						width: 34rpx;
						height: 22rpx;
					}
				}
			}
			.btns{
				display: flex;
				justify-content: space-between;
				width: 694rpx;
				padding: 40rpx  0 23rpx 0;
				border-bottom: 2rpx solid #BABDCF;
				.btnfir{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(186,189,207,1);
					line-height:13rpx;
				}
				.btnrig{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:400;
					display: flex;
					justify-content: flex-end;
					color:rgba(186,189,207,1);
					line-height:13rpx;
					.dele,.edit{
						margin-left: 55rpx;
					}
				}
			}
		}
		.addarea{
			width:556rpx;
			position: absolute;
			left:0;
			right:0;
			bottom: 22rpx;
			height:69rpx;
			text-align: center;
			line-height: 69rpx;
			background:rgba(239,16,74,1);
			margin:0 auto;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(255,255,255,1);
			border-radius:35rpx;
			.addicon{
				width: 28rpx;
				height: 28rpx;
				margin-right: 10rpx;
				position: relative;
				top:6rpx;
			}
		}
	}	
</style>

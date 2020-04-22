<template>
	<view class="waitsendgoodsorder">
		<view class="address">
			<view class="left">
				<view class="addicon">
					<image class="addressimg" src="../../static/images/didian.png" mode=""></image>
				</view>
				<view class="buyerinfo">
					<view class="namephone">
						王先生  13689767809
					</view>
					<view class="addressinfo">
						北京市东城区中央大街十八号楼五十六单...
					</view>
				</view>
			</view>
			<view class="right">
				<image class="arrowright" src="../../static/images/arrowright.png" mode=""></image>
			</view>
		</view>
		<view class="orderlist">
			<view class="orderli">
				<view class="timestatus">
					<view class="lef">						
						<text class="status">订单编号：495793261844</text>
						<image class="timeicon" src="../../static/images/ordernum.png" mode=""></image>
					</view>
					<view class="rig">待支付	</view>
				</view>
				<view class="goods">
					<view class="left">
						<image class="goodsimg" src="../../static/images/83.png" mode=""></image>
					</view>
					<view class="right">
						<view class="goodsname">桂花普洱茶</view>
						<view class="goodsweigh">
							<text>净含量：180克</text>
							<text>x1</text>
						</view>
						<view class="goodsprice">
							<view class="goodstype">珍藏版</view>
							<view class="goodsmoney">￥ 999.00</view>
						</view>
					</view>
				</view>
				<view class="goods">
					<view class="left">
						<image class="goodsimg" src="../../static/images/83.png" mode=""></image>
					</view>
					<view class="right">
						<view class="goodsname">桂花普洱茶</view>
						<view class="goodsweigh">
							<text>净含量：180克</text>
							<text>x1</text>
						</view>
						<view class="goodsprice">
							<view class="goodstype">珍藏版</view>
							<view class="goodsmoney">￥ 999.00</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<view class="orderdetail">
			<view class="detailtime">
				<view class="detailname">下单时间:</view>
				<view class="nametime">2020-04-18 13：38 </view>	
			</view>	
				<view class="detailtime">
					<view class="detailname">支付方式:</view>
					<view class="namepaytype">支付宝支付</view>	
				</view>	
				<view class="detailtime">
					<view class="detailname">支付时间:</view>
					<view class="namepaytime">2020-04-18 13：38 </view>	
				</view>	
			<view class="detailprice">
				<view class="detailname">商品金额:</view>
				<view class="nameprice">￥1398.00</view>	
			</view>	
			<view class="detailcarprice">
				<view class="detailname">运费:</view>
				<view class="namecar">+￥0.00</view>	
			</view>	
			<view class="detailrealmoney">
				<view class="detailname">实付:</view>
				<view class="namemoney">￥1398.00</view>	
			</view>	
		</view>
		<view class="pricebtn">
			<view class="realprice">
				<!-- 实付：￥1398.0 -->
			</view>
			<view class="btngroup">
				<view class="btn btn8">联系客服</view>	
				<view class="btn btn9">申请退款</view>	
				<view class="btn btn3">再次购买</view>	
												
				<!-- <view class="btn btn1">取消订单</view>
				<view class="btn btn2">去支付</view>								
				<view class="btn btn4">查看物流</view>
				<view class="btn btn5">确认收货</view>								
				<view class="btn btn6">删除订单</view>
				<view class="btn btn7">立即评价</view> -->
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
	.waitsendgoodsorder{
		.address{
			height: 112rpx;
			line-height: 112rpx;
			padding:40rpx 28rpx 44rpx 28rpx;
			display: flex;
			justify-content: space-between;
			.left{
				max-width:95%;
				width:95%;
				.addicon{
					display: inline-block;
					margin-right: 28rpx;
					.addressimg{
						width: 35rpx;
						height: 35rpx;
					}
				}
				.buyerinfo{
					display: inline-flex;
					flex-direction: column;
					font-size:28rpx;
					font-family:PingFang SC;
					position: relative;
					top: -24rpx;
					font-weight:400;
					height: 90rpx;
					line-height: 46rpx;
					color:rgba(132,132,132,1);
					.addressinfo{
						width: 546rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						
					}
				}
			}
			.right{
				.arrowright{
					width: 14rpx;
					height: 25rpx;
				}
			}
		}
		.orderlist{
			.orderli{
				background-color: #F4F4F4;
				.timestatus{
					padding:20rpx 28rpx 0rpx 28rpx;
					display: flex;
					justify-content: space-between;
					margin-bottom:-28rpx;
					.lef{
						.timeicon{
							width: 28rpx;
							height: 28rpx;
							position: relative;
							top: 4rpx;
						}
						.status{
							font-size:25rpx;
							font-family:PingFang SC;
							font-weight:400;
							margin-right:4rpx;
							color:rgba(186,189,207,1);
							line-height:13rpx;
						}
					}
					.rig{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(239,16,74,1);
						line-height:44rpx;
					}
				}
				.goods{
					width:694rpx;
					margin:0 auto;
					display: flex;
					padding-top: 0;
					padding-bottom:42rpx;
					border-bottom: 2rpx solid #BABDCF;
					margin-top: 56rpx;
					.left{
						.goodsimg{
							width:200rpx;
							height:191rpx;
							border-radius:21rpx;
						}
					}
					.right{
						width: 100%;
						margin-left: 45rpx;
						display: flex;
						flex-direction: column;
						.goodsname{
							font-size:35rpx;
							font-family:PingFang SC;
							font-weight:400;
							margin-top:18rpx;
							color:rgba(22,30,73,1);
							line-height:27rpx;
						}
						.goodsweigh{
							display: flex;
							justify-content: space-between;
							font-size:25rpx;
							font-family:PingFang SC;
							font-weight:400;
							margin-top:28rpx;
							color:rgba(186,189,207,1);
							line-height:13rpx;
						}
						.goodsprice{
							padding-top:33rpx;
							display: flex;
							justify-content: space-between;
							.goodstype{
								width:140rpx;
								height:56rpx;
								font-size:28rpx;
								font-family:经典繁毛楷;
								font-weight:400;
								color:rgba(255,255,255,1);
								line-height:56rpx;
								text-align: center;
								background:rgba(237,196,134,1);
								border-radius:28rpx;
							}
							.goodsmoney{
								font-size:28rpx;
								font-family:PingFang SC;
								font-weight:400;
								color:rgba(193,196,212,1);
								line-height:56rpx;
							}
						}
					}
				}
				
			}
		}
		.orderdetail{
			display: flex;
			flex-direction: column;
			padding: 0 28rpx;
			.detailtime,.detailprice,.detailcarprice,.detailrealmoney{
				display: flex;
				justify-content: space-between;
				.detailname{
					
				}				
				.nametime,.namepaytime,.namepaytype{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(193,196,212,1);
					line-height:56rpx;
				}
				.nameprice{
					font-size:28rpx;
				}
				.namemoney{
					font-size:28rpx;
				}
				.namecar{
					color:red;
					font-size:28rpx;
				}
			}
		}
		.pricebtn{
			padding:21rpx 28rpx;
			display: flex;
			justify-content: space-between;
			.realprice{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(22,30,73,1);
				line-height:56rpx;
			}
			.btngroup{
				display: flex;
				.btn{
					width:139rpx;
					height:56rpx;
					font-size:21rpx;
					font-family:PingFang SC;
					font-weight:400;			
					line-height:56rpx;
					text-align: center;			
					border-radius:28rpx;
					margin-left: 14rpx;
				}
				.btn1,.btn4,.btn6,.btn8,.btn9{
					color:rgba(188,191,209,1);
					border:2rpx solid rgba(193,196,212,1);
				}
				.btn2{
					color: #fff;
					background:rgba(239,16,74,1);
				}
				.btn5,.btn7,.btn3{
					color: #EF104A;
					border:2rpx solid rgba(239,16,74,1);
				}
			}
		}
	}
</style>
                
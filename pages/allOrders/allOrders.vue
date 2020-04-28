<template>
	<view class="allorders">
		<s-tabs effect @change="change" @render="render">
		  <s-tab title="全部">
				<!-- <view class="noinfo">
					<image class="noimg" src="../../static/images/noresult.png" mode=""></image>
				</view>	 -->		
				 <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
					@scroll="scroll">					
					<view class="orderlist">
						<view class="orderli">
							<view class="timestatus">
								<view class="lef">
									<image class="timeicon" src="../../static/images/timeicon.png" mode=""></image>
									<text class="status">2020-04-18 13：38</text>
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
							<view class="pricebtn">
								<view class="realprice">实付：￥1398.0</view>
								<view class="btngroup">
									<view class="btn btn1">取消订单</view>
									<view class="btn btn2">去支付</view>								
									<!-- <view class="btn btn3">再次购买</view>								
									<view class="btn btn4">查看物流</view>
									<view class="btn btn5">确认收货</view>								
									<view class="btn btn6">删除订单</view>
									<view class="btn btn7">立即评价</view> -->
								</view>
							</view>
						</view>
						<view class="orderli">
							<view class="timestatus">
								<view class="lef">
									<image class="timeicon" src="../../static/images/timeicon.png" mode=""></image>
									<text class="status">2020-04-18 13：38</text>
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
							<view class="pricebtn">
								<view class="realprice">实付：￥1398.0</view>
								<view class="btngroup">
									<view class="btn btn1">取消订单</view>
									<view class="btn btn2">去支付</view>								
									<!-- <view class="btn btn3">再次购买</view>								
									<view class="btn btn4">查看物流</view>
									<view class="btn btn5">确认收货</view>								
									<view class="btn btn6">删除订单</view>
									<view class="btn btn7">立即评价</view> -->
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</s-tab>
		  <s-tab title="待支付">
				<!-- <view class="noinfo">
					<image class="noimg" src="../../static/images/noresult.png" mode=""></image>
				</view>	 -->	
				<view class="orderlist">
					<view class="orderli">
						<view class="timestatus">
							<view class="lef">
								<image class="timeicon" src="../../static/images/timeicon.png" mode=""></image>
								<text class="status">2020-04-18 13：38</text>
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
						<view class="pricebtn">
							<view class="realprice">实付：￥1398.0</view>
							<view class="btngroup">
								<view class="btn btn1">取消订单</view>
								<view class="btn btn2">去支付</view>			
							</view>
						</view>
					</view>
				</view>
			</s-tab>
		  <s-tab title="待发货">
				<!-- <view class="noinfo">
					<image class="noimg" src="../../static/images/noresult.png" mode=""></image>
				</view>	 -->	
				<view class="orderlist">
					<view class="orderli">
						<view class="timestatus">
							<view class="lef">
								<image class="timeicon" src="../../static/images/timeicon.png" mode=""></image>
								<text class="status">2020-04-18 13：38</text>
							</view>
							<view class="rig">待发货	</view>
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
						<view class="pricebtn">
							<view class="realprice">实付：￥1398.0</view>
							<view class="btngroup">								
								<view class="btn btn3">再次购买</view>
							</view>
						</view>
					</view>
				</view>
			</s-tab>
			<s-tab title="待收货">
				<!-- <view class="noinfo">
					<image class="noimg" src="../../static/images/noresult.png" mode=""></image>
				</view>	 -->	
				<view class="orderlist">
					<view class="orderli">
						<view class="timestatus">
							<view class="lef">
								<image class="timeicon" src="../../static/images/timeicon.png" mode=""></image>
								<text class="status">2020-04-18 13：38</text>
							</view>
							<view class="rig">待收货	</view>
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
						<view class="pricebtn">
							<view class="realprice">实付：￥1398.0</view>
							<view class="btngroup">
								<view class="btn btn3">再次购买</view>
								<view class="btn btn4">查看物流</view>
								<view class="btn btn5">确认收货</view>	
								<!-- <view class="btn btn1">取消订单</view>
								<view class="btn btn2">去支付</view>																
								<view class="btn btn6">删除订单</view>
								<view class="btn btn7">立即评价</view> -->
							</view>
						</view>
					</view>
				</view>
			</s-tab>
			<s-tab title="待评价">
				<!-- <view class="noinfo">
					<image class="noimg" src="../../static/images/noresult.png" mode=""></image>
				</view>		 -->
				<view class="orderlist">
					<view class="orderli">
						<view class="timestatus">
							<view class="lef">
								<image class="timeicon" src="../../static/images/timeicon.png" mode=""></image>
								<text class="status">2020-04-18 13：38</text>
							</view>
							<view class="rig">待评价	</view>
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
						<view class="pricebtn">
							<view class="realprice">实付：￥1398.0</view>
							<view class="btngroup">
								<view class="btn btn6">删除订单</view>
								<view class="btn btn3">再次购买</view>
								<view class="btn btn7">立即评价</view>			
							</view>
						</view>
					</view>
				</view>
			</s-tab>
		</s-tabs>
	</view>
</template>

<script>
	import sTabs from '@/components/s-tabs';
	import sTab from '@/components/s-tab';
	export default {
		components:{
			sTabs,
			sTab
		},
		data() {
			return {
				 scrollTop: 0,
			}
		},
		methods: {
			upper: function(e) {
					console.log(e)
			},
			lower: function(e) {
					console.log(e)
			},
			scroll: function(e) {
					console.log(e)
					this.old.scrollTop = e.detail.scrollTop
			},
			handleChange(){},
			change (index) {
				console.log('change:', index);
			},
			render (index) {
				console.log('render:', index);
			}
		}
	}
</script>

<style lang="less">	
	.allorders{
		/deep/.s-tabs{	
			padding-left: 0;
			// background:rgba(22,30,73,1);
			background-color: #F4F4F4;
		}
		/deep/.s-tabs .s-tab-nav{
			border-radius:28rpx;		
			height: 56rpx;
			width: 139rpx;
			font-size:28rpx;
			font-family:Microsoft YaHei;
			font-weight:400;
			color:rgba(255,255,255,1)!important;		
		}
		/deep/.s-tabs .s-tab-nav.is-active{
			color:rgba(22,30,73,1)!important;
			background-color: #fff;
		}
		/deep/.s-tabs-nav-wrap{
			height: 40px;
			position: fixed;
			width: 750rpx;
			top: 44px;
			z-index: 99;
			background: rgb(22, 30, 73);
			padding-left: -28rpx;
			.s-tab-nav-view{
				padding-left:28rpx;
			}
		}
		.noinfo{
			margin-left: -28rpx;
			text-align: center;
			width: 100vw;
			height: 100vh;
			.noimg{
				width: 295rpx;
				height: 365rpx;
				top: 50%;
				margin-top: -365rpx;
			}
		}
		.orderlist{
			width:750rpx;
			margin-left: 0rpx;
			.orderli{
				width: 100%;
				background-color: #F4F4F4;
				.timestatus{
					padding:20rpx 28rpx 0rpx 28rpx;
					display: flex;
					justify-content: space-between;
					margin-bottom:-28rpx;
					.lef{
						.timeicon{
							width: 18rpx;
							height: 18rpx;
						}
						.status{
							font-size:25rpx;
							font-family:PingFang SC;
							font-weight:400;
							margin-left:4rpx;
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
						.btn1,.btn3,.btn4,.btn6{
							color:rgba(188,191,209,1);
							border:2rpx solid rgba(193,196,212,1);
						}
						.btn2{
							color: #fff;
							background:rgba(239,16,74,1);
						}
						.btn5,.btn7{
							color: #EF104A;
							border:2rpx solid rgba(239,16,74,1);
						}
					}
				}
			}
		}
	}
	
</style>

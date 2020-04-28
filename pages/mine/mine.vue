<template>
	<view class="mine">		
		<view class="topbtn">
			<view class="lef" @click="infopage">
				<image src="../../static/images/talk.png"mode=""></image>
			</view>
			<view class="rig">
				<image src="../../static/images/btncar.png" @click="tocar" mode=""></image>
				<image src="../../static/images/btnclo.png" mode=""></image>
			</view>
		</view>
		<view class="myhead">			
			<view class="headpic">
				<image class="picture" src="../../static/images/76.png" mode=""></image>
			</view>
			<view class="selfinfo">
				<view class="selfup">
					<text class="selfname">子然姐姐</text>
				</view>
				<view class="selfdown">
					<text class="des">关注</text>
					<text class="num">16</text>
					<text class="des2">粉丝</text>
					<text class="num">352</text>
				</view>
			</view>
		</view>		
		<view class="mybody myfoot">			
			<view class="foottitle">
				<text class="word">订单中心</text>
				<text class="word" @click="toall()">全部订单&nbsp;></text>
			</view>
			<view class="mybodyli">
				<uni-grid :showBorder="false" :column="4">
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/order1.png" mode=""></image>
							<text class="text">待付款</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/order2.png" mode=""></image>
							<text class="text">代发货</text>
						</view>						
					</uni-grid-item>
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/order3.png" mode=""></image>
							<text class="text">待收货</text>
						</view>						
					</uni-grid-item>	
					<uni-grid-item>
						<view class="item" @click="todiss()">
							<image class="tagimg" src="../../static/images/order4.png" mode=""></image>
							<text class="text">待评价</text>
						</view>						
					</uni-grid-item>	
				</uni-grid>		
			</view>
		</view>
		<view class="myfoot">
			<view class="foottitle">
				个人中心
			</view>
			<view class="">
				<uni-grid :showBorder="false" :column="3">
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/cen13.png" mode=""></image>
							<text class="text">圈子</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/cen14.png" mode=""></image>
							<text class="text">文章</text>
						</view>						
					</uni-grid-item>
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/cen11.png" mode=""></image>
							<text class="text">收藏</text>
						</view>						
					</uni-grid-item>					
				</uni-grid>
				<uni-grid :showBorder="false" :column="3">
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/cen9.png" mode=""></image>
							<text class="text">钱包</text>
						</view>						
					</uni-grid-item>
					<uni-grid-item>
						<view class="item" @click="toaddress()">
							<image class="tagimg" src="../../static/images/cen8.png" mode=""></image>
							<text class="text">收货地址</text>
						</view>						
					</uni-grid-item>
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/cen10.png" mode=""></image>
							<text class="text">退款管理</text>
						</view>
					</uni-grid-item>					
				</uni-grid>
				<uni-grid :showBorder="false" :column="3">
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/cen12.png" mode=""></image>
							<text class="text">客服帮助</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="item">
							<image class="tagimg" src="../../static/images/cen7.png" mode=""></image>
							<text class="text">意见反馈</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '../../components/uni-grid-item/uni-grid-item.vue'
	export default {
		components:{
			uniGrid
		},
		data() {
			return {
				token:''
			}
		},
		onShow() {
			if(uni.getStorageSync('token')){
				this.token = uni.getStorageSync('token');
				// this.getinfo()
			}else{
				uni.showToast({
					icon:'none',
					title:'请登录'
				})
				setTimeout(function() {
					uni.navigateTo({
						url:'../registerLogin/passwordLogin/passwordLogin'
					})
				}, 1000);
			}		
		},
		methods: {
			toaddress(){
				uni.navigateTo({
					url:'../addressList/addressList'
				})
			},
			todiss(){
				uni.navigateTo({
				  url: '/pages/waitEvaluateOrder/waitEvaluateOrder'
				});
			},
			toall(){
				uni.navigateTo({
				  url: '/pages/allOrders/allOrders'
				});
			},
			tocar(){
				uni.navigateTo({
				  url: '/pages/car/car'
				});
			},
			infopage(){
				uni.navigateTo({
				  url: '/pages/information/information'
				});
			}
		}
	}
</script>

<style lang="less">	
	.mine{
		padding: 28rpx;
		.topbtn{
			width: 100%;
			height: 40rpx;
			display: flex;
			background: #161E49;
			justify-content: space-between;
			margin: -28rpx;
			padding: 48rpx 28rpx 28rpx 28rpx;
			image{
				width: 47rpx;
				height: 39rpx;
			}
			.lef{
				
			}
			.rig{
				image:nth-child(1){
					margin-right: 42rpx;
				}
			}
		}
		.myhead{
			height: 331rpx;			
			margin: -28rpx;
			background-color: #161E49;
			padding: 28rpx;
			display: flex;
			.headpic{
				margin-top: 40rpx;
				.picture{
					width: 150rpx!important;
					height: 150rpx!important;
					border-radius: 50%;
				}
			}		
			.selfinfo{				
				margin-left: 28rpx;
				margin-top: 70rpx;
				display: flex;
				flex-direction: column;
				font-size:32rpx;
				font-family:MicrosoftYaHei;
				font-weight:400;				
				color:rgba(255,255,255,1);
				.selfup{
					.selfname{
						font-size:32rpx;
					}
				}
				.selfdown{
					line-height:24px;
					display: flex;
					.des{
						font-size:21rpx;						
					}
					.des2{
						font-size:21rpx;
						margin-left: 58rpx!important;
					}
				}
			}
		}
		.mybody{
			height:216rpx!important;
			margin-bottom:28rpx;
			margin-top: -134rpx;
			.foottitle{
				display: flex;
				justify-content: space-between;
				.word{
					font-size:25rpx;
					font-family:MicrosoftYaHei;
					font-weight:400;
					color:rgba(22,30,73,1);
					line-height:27rpx;
				}
				.word:nth-child(2){
					color:rgba(153,153,153,1)!important;
				}
			}
			.mybodyli{
				margin-top:-14rpx;
			}
		}
		.myfoot{
			width:694rpx;
			height:575rpx;
			background:rgba(255,255,255,1);
			border-left: 2rpx solid rgba(0, 0, 0, 0.05);
			border-right: 2rpx solid rgba(0, 0, 0, 0.05);
			box-shadow:0rpx 3rpx 6rpx 0rpx rgba(0, 0, 0, 0.15);
			border-radius:11rpx;
			.foottitle{
				font-size:25rpx;
				font-family:MicrosoftYaHei;
				font-weight:400;
				color:rgba(22,30,73,1);
				line-height:27rpx;
				padding: 28rpx;				
			}
			.uni-grid{
				.uni-grid-item{				
					height: 150rpx!important;
					text-align: center;
					.item{
						position: relative;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						margin: auto;
						.tagimg{
							width: 46rpx;
							height: 46rpx;
							margin: 0 auto;
						}
						.text{
							display: block;
							font-size:21rpx;
							font-family:MicrosoftYaHei;
							font-weight:400;
							color:rgba(153,153,153,1);
							line-height:13rpx;
							margin-top: 14rpx;
						}
					}					
				}
			}			
		}				
	}
</style>

<template>
	<view>
		<view class="teaGarden">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item class="swiper-item">
								<image src="../../static/images/swiper.png" mode="widthFix"></image>
							</swiper-item>
							<swiper-item class="swiper-item">								
								<image src="../../static/images/swiper2.png" mode="widthFix"></image>
							</swiper-item>
							<swiper-item class="swiper-item">
								<image src="../../static/images/swiper3.png" mode="widthFix"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<uni-grid :column="5" :showBorder="false">
			    <uni-grid-item>
			      <image src="../../static/images/blue.png"></image>
			      <text>入门首选</text>
			    </uni-grid-item>
			    <uni-grid-item>
			      <image src="../../static/images/blue.png"></image>
			      <text>日饮级</text>
			    </uni-grid-item>
			    <uni-grid-item>
			      <image src="../../static/images/blue.png"></image>
			      <text>品鉴级</text>
			    </uni-grid-item>
					<uni-grid-item>
					  <image src="../../static/images/blue.png"></image>
					  <text>珍藏级</text>
					</uni-grid-item>
					<uni-grid-item>
					  <image src="../../static/images/blue.png"></image>
					  <text>热销TOP10</text>
					</uni-grid-item>
			</uni-grid>
			<view class="goods">
				<view class="title">
					精品推荐
				</view>
				<view class="goodslist">
					<view class="img">
						<image src="../../static/images/uihu.png" mode=""></image>
					</view>
					<view class="desc">
						<text class="descdetail">中茶牌 云南普洱茶 2019年冰岛铜庆台大树春茶生茶饼10饼箱...</text>
						<text class="price">￥168000.00</text>
					</view>
					<view class="discuss">
						<text>商品评价(568)</text>
						<text>收藏(89)</text>
					</view>
					<view class="tag">
						<ul>
							<li>糯干春润  丝丝顺滑</li>
							<li>口味纯正</li>
						</ul>
					</view>
					<view class="author">
						<view class="info">
							<image src="../../static/images/6.png"></image>
							<text class="authorname">王鸥</text>
						</view>
						<view class="infodesc font-info">
							茶汤气味香，色泽纯正，口感很好，而且很耐泡，回甘微甜，浓淡适中、清香怡人、 茶粒，肥壮圆结，干净无杂质，香气馥郁。不错，价格不
							<!-- <text class="font-info" style="font-size:21rpx!important">茶汤气味香，色泽纯正，口感很好，而且很耐泡，回甘微甜，浓淡适中、清香怡人、 茶粒，肥壮圆结，干净无杂质，香气馥郁。不错，价格不</text> -->
						</view>
					</view>
				</view>
				<view class="goodslist">
					<view class="img">
						<image src="../../static/images/uihu.png" mode=""></image>
					</view>
					<view class="desc">
						<text class="descdetail">中茶牌 云南普洱茶 2019年冰岛铜庆台大树春茶生茶饼10饼箱...</text>
						<text class="price">￥168000.00</text>
					</view>
					<view class="discuss">
						<text>商品评价(568)</text>
						<text>收藏(89)</text>
					</view>
					<view class="tag">
						<ul>
							<li>糯干春润  丝丝顺滑</li>
							<li>口味纯正</li>
						</ul>
					</view>
					<view class="author">
						<view class="info">
							<image src="../../static/images/01.png"></image>
							<text class="authorname">王鸥</text>
						</view>
						<view class="infodesc font-info">
							茶汤气味香，色泽纯正，口感很好，而且很耐泡，回甘微甜，浓淡适中、清香怡人、 茶粒，肥壮圆结，干净无杂质，香气馥郁。不错，价格不
						</view>
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
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
			  url: '/pages/goodsList/goodsList'
			});
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots;
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay;
			},
			intervalChange(e) {
				this.interval = e.target.value;
			},
			durationChange(e) {
				this.duration = e.target.value;
			}
		}
	}
</script>

<style lang="less">
	.teaGarden{	
		.uni-padding-wrap{
			padding: 28rpx;		
			.swiper{
				width: 694rpx;
				height: 361rpx;			
				.swiper-item{
					image{
						width: 100%;
					}
				}
			}
		}
		.uni-grid{
			.uni-grid-item{
				text-align: center;
				image{
					width: 69rpx;					
					height:69rpx;
					margin:0 auto;
				}
				text{
					margin: 15rpx 0 0 0 ;
					font-size:18rpx;
					font-family:FZLTZHUNHK;
					font-weight:normal;
					color:rgba(22,30,73,1);
				}
			}
		}
		.goods{
			.title{
				font-size:32rpx;
				padding-left: 27rpx;
				font-family:FZLTZHUNHK;
				font-weight:normal;
				color:#161E49;
				line-height:27rpx;
			}
			.goodslist{
				padding-top: 21rpx;
				.img{
					text-align: center;
					margin-top: 21rpx;
					image{
						width:694rpx;
						height:333rpx;						
					}
				}
			}
			.desc{
				white-space: nowrap;
				text-overflow:ellipsis; 					
				overflow:hidden;
				padding: 28rpx;
				.descdetail{		
					width: 722rpx;
					font-size:25rpx;
					font-family:Microsoft YaHei;
					font-weight:400;
					color:rgba(22,30,73,1);
					line-height:38rpx;
				}
				.price{
					font-size:32rpx;
					font-family:Microsoft YaHei;
					font-weight:400;
					display: block;
					padding-top:21rpx;
					color:rgba(255,40,41,1);
					line-height:37rpx;
				}
			}
			.discuss{
				padding:0 28rpx;
				display: flex;
				justify-content: space-between;
				text{
					display: inline-block;
					font-size:21rpx;
					font-weight:normal;
					color:rgba(153,153,153,1);
				}
			}
			.tag{
				ul{
					padding-left: 28rpx;
					li{
						padding: 9rpx 21rpx;
						background:rgba(40,82,242,.2);
						margin-right: 21rpx;
						display: inline-block;
						border-radius:19rpx;
						font-size:21rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:#161E49;
						line-height:27rpx;
					}
				}
			}
			.author{
				.info{
					padding: 21rpx 0 0 28rpx;
					image{
						width:56rpx;
						height:56rpx;
						background:rgba(40,82,242,1);
						border-radius:50%;
						display: inline-block;
					}
					.authorname{
						font-size:25rpx;
						font-family:FZLTZHUNHK;
						font-weight:normal;
						color:rgba(22,30,73,1);
						line-height:13rpx;
						margin-left: 15rpx;
						position: relative;
						top: -16rpx;
					}
				}
				.infodesc{
					padding:0 28rpx;					
					font-size:21rpx!important;
					font-family:FZLTZHUNHK;
					font-weight:normal;
					color:rgba(153,153,153,1);
					// white-space: nowrap;
					text-overflow:ellipsis;
					overflow:hidden;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;					
					.font-info{
						font-size:21rpx!important;
						font-family:FZLTZHUNHK;
						font-weight:normal;
						color:rgba(153,153,153,1);						
					}
				}
			}
		}
	}
</style>

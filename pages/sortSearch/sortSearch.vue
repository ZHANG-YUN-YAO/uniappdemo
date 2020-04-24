<template>
	<view class="sortsearch">
		<view class="searchWapper">
			<view class="searchView">
				<icon type="search" size="16"></icon>
				<text style="padding-left: 22rpx;">请输入搜索关键字</text>
				<uni-icons class="closeempty" type="closeempty" size="18" color="#999999"></uni-icons>
			</view>
			<text class="reback" @click="reback">取消</text>
		</view>	
		<s-tabs effect @change="change" @render="render">
			<s-tab title="文章">
				<view class="tabarticle">
					<view class="article" @click="todetail()">
						<view class="left">
							<image class="artpic" src="../../static/images/aa.png" mode=""></image>
						</view>
						<view class="right">
							<view class="teaname">普洱茶</view>
							<view class="author">阳春白雪</view>	
							<view class="status">
								<view class="first">
									<image class="hot" src="../../static/images/hot.png" mode=""></image>
									1000
								</view>
								<view class="second">
									<image class="star" src="../../static/images/star.png" mode=""></image>
									965
								</view>
								<view class="third">
									<image class="heart" src="../../static/images/heart.png" mode=""></image>
									2836
								</view>
								<view class="fourth">
									<image class="talk" src="../../static/images/talk.png" mode=""></image>
									3693
								</view>
							</view>
						</view>
					</view>
					<view class="article" @click="todetail()">
						<view class="left">
							<image class="artpic" src="../../static/images/aa.png" mode=""></image>
						</view>
						<view class="right">
							<view class="teaname">普洱茶</view>
							<view class="author">阳春白雪</view>	
							<view class="status">
								<view class="first">
									<image class="hot" src="../../static/images/hot.png" mode=""></image>
									1000
								</view>
								<view class="second">
									<image class="star" src="../../static/images/star.png" mode=""></image>
									965
								</view>
								<view class="third">
									<image class="heart" src="../../static/images/heart.png" mode=""></image>
									2836
								</view>
								<view class="fourth">
									<image class="talk" src="../../static/images/talk.png" mode=""></image>
									3693
								</view>
							</view>
						</view>
					</view>
				</view>
			</s-tab>
			<s-tab title="视频">
				<view class="tabvideo">
					<view class="article">
						<view class="left">
							<image class="artpic" src="../../static/images/aa.png" mode=""></image>
						</view>
						<view class="right">
							<view class="teaname">普洱茶</view>
							<view class="author">白色的黑猫</view>	
							<view class="status">
								<view class="first">
									<image class="hot" src="../../static/images/hot.png" mode=""></image>
									1000
								</view>
								<view class="second">
									<image class="star" src="../../static/images/star.png" mode=""></image>
									965
								</view>
								<view class="third">
									<image class="heart" src="../../static/images/heart.png" mode=""></image>
									2836
								</view>
								<view class="fourth">
									<image class="talk" src="../../static/images/talk.png" mode=""></image>
									3693
								</view>
							</view>
						</view>
					</view>
				</view>
			</s-tab>
			<s-tab title="商品">
				<view class="tabgoods">			
					<view class="bodymiddle">
						<uni-grid :column="2" :showBorder="false">
							<uni-grid-item>
								<image src="../../static/images/83.png" mode="widthFix"></image>
								<view class="sortdesc">
									<text class="teaname">桂花普洱茶</text>
									<text class="tealine">/</text>
									<text class="tealook">品鉴</text>
								</view>						
							</uni-grid-item>
							<uni-grid-item>
								<image src="../../static/images/83.png" mode="widthFix"></image>
								<view class="sortdesc">
									<text class="teaname">二十年普洱茶</text>
									<text class="tealine">/</text>
									<text class="tealook">品鉴</text>
								</view>	
							</uni-grid-item>				   
						</uni-grid>
						<uni-grid :column="2" :showBorder="false">
							<uni-grid-item>
								<image src="../../static/images/83.png" mode="widthFix"></image>
								<view class="sortdesc">
									<text class="teaname">藏茶</text>
									<text class="tealine">/</text>
									<text class="tealook">品鉴</text>
								</view>	
							</uni-grid-item>
							<uni-grid-item>
								<image src="../../static/images/83.png" mode="widthFix"></image>
								<view class="sortdesc">
									<text class="teaname">铁观音</text>
									<text class="tealine">/</text>
									<text class="tealook">品鉴</text>
								</view>	
							</uni-grid-item>				   
						</uni-grid>
					</view>
				</view>
			</s-tab>
			<s-tab title="茶友">				
				<view class="tabfriends">
					<view class="friend">
						<view class="left">
							<image class="artpic" src="../../static/images/aa.png" mode=""></image>
						</view>
						<view class="right">
							<view class="teaname">
								<view class="">
									<text>普洱茶</text>
									<text class="nosele">香</text>
								</view>
								<view class="length">3.6km</view>							
							</view>
							<view class="author">
								<image class="sex" src="../../static/images/women.png" mode=""></image>
								<text class="old">28</text>
							</view>	
							<view class="status">
								<view class="first">
									<text>粉丝：</text>
									<text class="num">1000</text>
								</view>
								<view class="second">
									<text>文章：</text>
									<text class="num">965</text>
								</view>
								<view class="third">
									<text>藏品：</text>
									<text class="num">2836</text>
								</view>
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
				
			};
		},
		methods:{
			todetail(){
				uni.navigateTo({
					url:'../teaArticle/teaArticle'
				})
			},
			handleChange(){},
			change (index) {
				console.log('change:', index);
			},
			render (index) {
				console.log('render:', index);
			},
			reback(){
				uni.navigateTo({
				  url: '/pages/search/search'
				});
			}
		}
	}
</script>

<style lang="less">	
	.sortsearch{
		/deep/.s-tabs{
			width: 750rpx!important;
			// display:flex;
			padding-left: 0;
			justify-content: space-around;		
			// height:111rpx;
			height: 100%;
		}
		/deep/.s-tabs-nav-wrap{
			width: 100%;
			height: 100%!important;
			.s-tab-nav-view{
				padding: 28rpx;
				display: flex;
				background:rgba(22,30,73,1);
				justify-content: space-between;
			}
		}
		.s-tabs{
			padding: 0;
		}
		/deep/.s-tabs-content-wrap{
			padding-top: 28rpx;
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
		.searchWapper{
			background-color: #161E49;		
			padding: 28rpx;
			.reback{
				font-size:28rpx;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(255,255,255,1);
				display: inline-block;
				margin-left: 19rpx;
				position: relative;
				top: 12rpx;
			}
			.searchView{
				width:611rpx;
				height: 50rpx;
				background:#FFFFFF;
				border-radius:40rpx;
				font-size: 15px;
				color: #c0c0c0;
				display: inline-flex;
				align-items: center;
				padding: 0 20rpx;
				box-sizing: border-box;
				position: relative;
				.closeempty{
					position: absolute;
					right:10rpx;
				}
			}
		}
		.tabarticle{
			.article{
				width: 694rpx;
				padding: 0 28rpx  42rpx 28rpx;
				display: flex;
				justify-content: space-between;
				.left{
					margin-right: 31rpx;
					.artpic{
						width: 208rpx;
						height: 139rpx;
						border-radius:17rpx;
					}
				}
				.right{
					width:100%;
					display: flex;
					flex-direction: column;
					.teaname{
						font-size:28rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(40,82,242,1);
					}
					.author{
						font-size:21rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(153,153,153,1);
					}
					.status{
						display: flex;
						justify-content: space-between;
						margin-top:30rpx;
						.first,.second,.third,.fourth{
							font-size:18rpx;
							font-family:FZLTZHUNHK;
							font-weight:normal;
							color:rgba(153,153,153,1);
							.hot{
								width: 20rpx;
								height: 20rpx;
								margin-right: 10rpx;
							}
							.star{
								width: 28rpx;
								height: 28rpx;
								margin-right: 10rpx;
							}
							.heart{
								width: 30rpx;
								height: 28rpx;
								margin-right: 10rpx;
							}
							.talk{
								width: 28rpx;
								height: 22rpx;
								margin-right: 10rpx;
							}
						}
					}
				}
			}
		}
		.tabvideo{
			.article{
				width: 694rpx;
				padding: 0 28rpx  42rpx 28rpx;
				display: flex;
				justify-content: space-between;
				.left{
					margin-right: 31rpx;
					.artpic{
						width: 208rpx;
						height: 139rpx;
						border-radius:17rpx;
					}
				}
				.right{
					width:100%;
					display: flex;
					flex-direction: column;
					.teaname{
						font-size:28rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(40,82,242,1);
					}
					.author{
						font-size:21rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(153,153,153,1);
					}
					.status{
						display: flex;
						justify-content: space-between;
						margin-top:30rpx;
						.first,.second,.third,.fourth{
							font-size:18rpx;
							font-family:FZLTZHUNHK;
							font-weight:normal;
							color:rgba(153,153,153,1);
							.hot{
								width: 20rpx;
								height: 20rpx;
								margin-right: 10rpx;
							}
							.star{
								width: 28rpx;
								height: 28rpx;
								margin-right: 10rpx;
							}
							.heart{
								width: 30rpx;
								height: 28rpx;
								margin-right: 10rpx;
							}
							.talk{
								width: 28rpx;
								height: 22rpx;
								margin-right: 10rpx;
							}
						}
					}
				}
			}
		}
		.tabgoods{
			.bodymiddle{
				.uni-grid{
					.uni-grid-item{
						text-align: center;
						image{
							width: 333rpx;					
							height:319rpx;
							margin:0 auto;
						}
						.sortdesc{
							padding-right: 18rpx;
							background: #fff;
							width:278rpx;
							height:56rpx;
							border-radius:17rpx;
							line-height:50rpx;
							position: relative;
							top: -28rpx;
							margin: 0 auto;
							display: flex;
							justify-content: space-around;
							text{								
								font-size:25rpx;
								font-family:经典繁毛楷;
								font-weight:400;										
							}
							.teaname{
								width: 80%;
								color:rgba(22,30,73,1);	
								text-align: center;
							}
							.tealine{								
								width:14rpx;
								height:28rpx;
								color: #161E49;
							}
							.tealook{
								width: 20%;
								// width:44rpx;
								// height:24rpx;
								color:rgba(40,82,242,1);
							}
						}
					}
				}
			}
		}
		.tabfriends{
			.friend{
				width: 694rpx;
				padding: 0 28rpx  42rpx 28rpx;
				display: flex;
				justify-content: space-between;
				.left{
					margin-right: 31rpx;
					.artpic{
						width: 125rpx;
						height: 125rpx;
						border-radius: 50%;
					}
				}
				.right{
					width:100%;
					display: flex;
					flex-direction: column;
					.teaname{
						font-size:28rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(40,82,242,1);
						display: flex;
						justify-content: space-between;
						.length{
							font-size:18rpx;
							font-family:FZLTZHUNHK;
							font-weight:normal;
							color:rgba(153,153,153,1);
						}
						.nosele{
							color: #000000;
						}
					}
					.author{
						font-size:21rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(153,153,153,1);
						width:61rpx;
						height:26rpx;
						text-align: center;
						background:rgba(248,125,184,1);
						border-radius:18rpx;
						line-height: 28rpx;
						.sex{
							width: 14rpx;
							height: 20rpx;
						}
						.old{
							font-size:15rpx;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(255,255,255,1);
						}
					}
					.status{
						display: flex;
						justify-content: flex-start;
						margin-top:30rpx;
						.first,.second,.third{
							margin-right:48rpx;
							font-size:18rpx;
							font-family:FZLTZHUNHK;
							font-weight:normal;
							color:rgba(153,153,153,1);
							.num{
								color: black;
							}						
						}
					}
				}
			}
		}
	}
</style>

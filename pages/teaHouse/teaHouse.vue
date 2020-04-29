<template>
	<view class="teahouse">
		<ms-tabs style="background: #161E49;padding: 0 274rpx!important;" :list="list" v-model="active" itemColor="#fff" lineColor="#fff" :lineAnimated="false"></ms-tabs>
			<view class="first" v-if="first">
			
			</view>		
			
			<view class="second" v-if="second">
				<view class="top">
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
				</view>
				<view class="teabody">
					<view class="bodytop">
						<view class="cup">
							<text>我的圈子</text>
							<text class="num">发现更多></text>
						</view>
						<view class="actswiper">		
						  <view class="list">
								<view class="li">
									<view class="left">
										<view class="lef1" >
											<image class="img" src="../../static/images/mys.png" mode=""></image>
										</view>
										<view class="lef2">
											<view class="big">品茶圈</view>											
											<view class="small">388人参与</view>	
										</view>
									</view>
									<view class="right">
										新
									</view>
								</view>
								<view class="li">
									<view class="left">
										<view class="lef1" >
											<image class="img" src="../../static/images/mys02.png" mode=""></image>
										</view>
										<view class="lef2">
											<view class="big">藏茶圈</view>											
											<view class="small">6982人参与</view>	
										</view>
									</view>
									<view class="right">
										新
									</view>
								</view>
								<view class="li">
									<view class="left">
										<view class="lef1" >
											<image class="img" src="../../static/images/mys03.png" mode=""></image>
										</view>
										<view class="lef2">
											<view class="big">禅茶圈</view>											
											<view class="small">1.7万人参与</view>	
										</view>
									</view>
									<view class="right">
										新
									</view>
								</view>
						  </view>
						</view>
					</view>					
				</view>		
				<view class="friendactive">
					<view class="title">今日推荐</view>
					<view class="suggest">				
						<view class="actli">
							<view class="left">
								<view class="lefpic">
									<image class="avatar" src="../../static/avatar.png" mode=""></image>
								</view>
								<view class="lefinfo">
									<view class="name">王鸥</view>							
									<view class="desc">品茶圈主</view>
								</view>
							</view>
							<view class="right">
								<view class="notice">关注</view>						
								<view class="more">
									<image class="morepic" src="../../static/images/andmore.png" mode=""></image>
								</view>
							</view>
						</view>		
						<view class="actpic">
							<image class="lef" src="../../static/images/actpic.png" mode=""></image>
							<image class="rig" src="../../static/images/actpic.png" mode=""></image>
						</view>
						<view class="daliy">
							<view class="tag">#日签#</view>
							<view class="content">
								打卡第一天 还是给最爱的仿古如意，颜色就如诗人吴梅鼎在
								《阳羡茗壶》中写道：“有优秀而仓皇，激流黄玉葵路；暗飘金粟纸香；
								或黄白堆沙“有优秀而仓皇，激流黄玉葵路；暗飘金粟纸香；或黄白堆沙，
								激流黄玉葵路，激流...                            
							</view>	
							<view class="looknum">
								<view class="one">
									<image class="pic" src="../../static/images/heart.png" mode=""></image>
									<text class="num">2888</text>					
								</view>
								<view class="two">
									<image class="pic" src="../../static/images/talk.png" mode=""></image>
									<text class="num">3693</text>		
								</view>
								<view class="three">
									<image class="pic" src="../../static/images/share.png" mode=""></image>
									<text class="num">260</text>		
								</view>
							</view>						
						</view>
					</view>
					<view class="suggest">
						<view class="actli">
							<view class="left">
								<view class="lefpic">
									<image class="avatar" src="../../static/avatar.png" mode=""></image>
								</view>
								<view class="lefinfo">
									<view class="name">王鸥</view>							
									<view class="desc">品茶圈主</view>
								</view>
							</view>
							<view class="right">
								<view class="notice">关注</view>						
								<view class="more">
									<image class="morepic" src="../../static/images/andmore.png" mode=""></image>
								</view>
							</view>
						</view>		
						<view class="actpic">
							<image class="lef" src="../../static/images/actpic.png" mode=""></image>
							<image class="rig" src="../../static/images/actpic.png" mode=""></image>
						</view>
						<view class="daliy">
							<view class="tag">#日签#</view>
							<view class="content">
								打卡第一天 还是给最爱的仿古如意，颜色就如诗人吴梅鼎在
								《阳羡茗壶》中写道：“有优秀而仓皇，激流黄玉葵路；暗飘金粟纸香；
								或黄白堆沙“有优秀而仓皇，激流黄玉葵路；暗飘金粟纸香；或黄白堆沙，
								激流黄玉葵路，激流...                            
							</view>	
							<view class="looknum">
								<view class="one">
									<image class="pic" src="../../static/images/heart.png" mode=""></image>
									<text class="num">2888</text>					
								</view>
								<view class="two">
									<image class="pic" src="../../static/images/talk.png" mode=""></image>
									<text class="num">3693</text>		
								</view>
								<view class="three">
									<image class="pic" src="../../static/images/share.png" mode=""></image>
									<text class="num">260</text>		
								</view>
							</view>						
						</view>
					</view>
				</view>									
			</view>
		</view>
</template>

<script>
	import msTabs from '@/components/ms-tabs/ms-tabs.vue'
	// import sTabs from '@/components/s-tabs';
	// import sTab from '@/components/s-tab';
	export default {
		components:{
			// sTabs,
			// sTab,
			msTabs
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				first:false,
				second:true,
				list: [{
						title: '关注'
					}, {
						title: '推荐'
					}
				],
				type: [{
					title: '关注'
					}, {
					title: '推荐'
					}],
				active: 1,
				
				
				tabList: [1, 2, 3, 4, 5, 6, 7],
				activeTab: 3,
				// first:true,
				// second:false,
				// third:false,
				suggestList:[{
					name:'藏茶圈',
					img:'../../static/images/drink.png',
					number:'6982人参与'
				},
				{
					name:'北京普洱茶交流圈',
					img:'../../static/images/girl.png',
					number:'9668人参与'
				},
				{
					name:'禅茶圈',
					img:'../../static/images/drink.png',
					number:'6982人参与'
				}
					
				],
				imgList:[
					'../../static/images/girl.png',
					'../../static/images/girl.png',
					'../../static/images/girl.png',
					'../../static/images/girl.png',
					'../../static/images/girl.png'
				]
			}
		},
		methods: {
			handleChange(){},
			change (index) {
				console.log('change:', index);
			},
			render (index) {
				console.log('render:', index);
			}
		},
		watch:{
			active() {
				if(this.active=='0'){
					this.first=true;
					this.second=false;									
				}else{					
					this.first=false;	
					this.second=true;					
				}
			}
		}
	}
</script>

<style lang="scss">
	.teahouse{
		
		.second{
			.tab__item{
				text-align: left;
			}
			.top{
				background:#161E49;
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
			}
			.teabody{
				background:#161E49;
				.cup{
					padding: 0 28rpx;					
					line-height:27rpx;
					font-size:32rpx;
					font-family:FZLTZHUNHK;
					font-weight:normal;
					padding-top: 28rpx;
					color:rgba(255,255,255,1);
					display: flex;
					justify-content: space-between;
					.num{						
						font-size:22rpx;
						font-family:FZLTZHUNHK;
						font-weight:normal;
						color:rgba(255,255,255,1);
					}
				}
				.actswiper{
					padding: 28rpx;
					.list{
						position: relative;
						z-index: 9;
						margin-bottom: 44rpx;
						.li{
							box-sizing: border-box;
							width:694rpx;
							display: flex;
							justify-content: space-between;
							height:125rpx;
							margin-bottom:14rpx;
							background:rgba(255,255,255,.16);
							padding:0 20rpx;
							box-shadow:0px 4px 11px 0px rgba(22,30,73,0.2);
							border-radius:14rpx;
							.left{
								.lef1{
									display: inline-flex;
									margin-left:2rpx;
									margin-top:18rpx;
									.img{
										width:90rpx;
										height: 90rpx;
										border-radius: 5rpx;
									}
								}
								.lef2{
									margin-left:27rpx;
									display: inline-flex;
									flex-direction: column;
									position: relative;
									top:-58rpx;
									font-family:FZLTZHUNHK;
									font-weight:normal;
									.big{
										font-size:28rpx;
										color:rgba(255,255,255,1);
									}
									.small{
										font-size:22rpx;
										color:rgba(187,187,187,1);
										margin-top:20rpx;
									}
								}
							}
							.right{
								font-size:28rpx;
								font-family:FZLTZHUNHK;
								font-weight:normal;
								color:rgba(255,255,255,1);
								margin-top: 26rpx;
								margin-right:20rpx;
								position: relative;
							}
							.right:after{
								content: '';
								width:11rpx;
								height:11rpx;
								position: absolute;
								left:36rpx;
								top:-4rpx;
								background:rgba(255,40,41,1);
								border-radius:50%;
							}
						}
					}					
				}			
				.teamiddle{
					.cup{
						padding-left: 28rpx;
						font-size:32rpx;
						font-family:FZLTZHUNHK;
						font-weight:normal;
						color:rgba(22,30,73,1);
						line-height:27rpx;
					}
					.garden{
						width:694rpx;
						height:324rpx;
						padding: 42rpx 0;
						margin: 0 auto;
						margin-top: 15rpx;
						background:rgba(255,255,255,1);
						border:2rpx solid rgba(153, 153, 153, 1);
						border-radius:11rpx;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						.lef{
							margin-left: 42rpx;
							display: flex;
							flex-direction: column;
							.lefone{
								font-size:56rpx;
								font-family:AvantGarde;
								font-weight:normal;
								color:rgba(22,30,73,1);
								line-height:52rpx;
							}
							.leftwo{
								font-size:22rpx;
								font-family:MicrosoftYaHei;
								font-weight:400;
								margin-top: 12rpx;
								color:rgba(102,102,102,1);
							}
						}
						.rig{
							.rigtitle{
								width:139rpx;
								height:42rpx;
								font-size:25rpx;
								line-height: 42rpx;
								font-family:MicrosoftYaHei;
								font-weight:400;
								text-align: center;
								color:rgba(255,255,255,1);
								background:rgba(22,30,73,1);
								border-radius:21rpx;
							}
							.list{
								.li{
									padding:14rpx 14rpx 14rpx 0;
									display: flex;
									justify-content: flex-start;
									.licontent{
										width:18rpx;
										display:block;
										margin-right: 10rpx;
										height:18rpx;
										background:rgba(255,255,255,1);
										border:4rpx solid rgba(22, 30, 73, 1);
										border-radius:50%;
									}
									.lipub{
										font-size:22rpx;
										line-height: 24rpx;
										font-family:MicrosoftYaHei;
										font-weight:400;
										color:rgba(102,102,102,1);
									}
								}
							}
						}
					}
					.tabthree{					
						.imageContainer{
							padding-left: 28rpx!important;
							.swiperitemli{
								width:250rpx;
								text-align: center;
								height:278rpx;							
								box-sizing: border-box;
								// box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.2);
								border:1px solid rgba(0, 0, 0, 0.04);
								border-bottom:1px solid rgba(0, 0, 0, 0.07);
								border-radius:11rpx;
								margin-right: 14px;
								.swiperimg{
									width:254rpx;
									height:181rpx!important;
									// border-top-left-radius:11rpx;
									// border-top-right-radius:11rpx;
								}
								.swipernav{
									font-size:25rpx;
									font-family:MicrosoftYaHei;
									font-weight:400;
									margin-top:20rpx;
									color:rgba(22,30,73,1);
									line-height:13rpx;
								}
								.swipernum{
									font-size:21rpx;
									font-family:MicrosoftYaHei;
									font-weight:400;
									margin-top: 12rpx;
									color:rgba(102,102,102,1); 
								}
							}
						}
					}				
				}
			}
			.friendactive{
				border-radius:50rpx;
				position: relative;
				top: -40rpx;
				z-index: 3;
				box-sizing: border-box;
				width: 750rpx;
				padding:28rpx;
				margin:0 auto;
				background: #fff;
				// height: 300rpx;
				border: 1px soid black;
				.title{
					font-size:32rpx;
					font-family:FZLTZHUNHK;
					font-weight:normal;
					color:rgba(22,30,73,1);
					margin-bottom:30rpx;
				}
				.suggest{
					margin-bottom:42rpx;
				}
				.actli{
					display: flex;
					justify-content: space-between;
					.left{
						.lefpic{
							display: inline-block;
							.avatar{
								width: 56rpx;
								height: 56rpx;
								border-radius:50%;
							}
						}
						.lefinfo{
							position: relative;
							margin-left:14rpx;
							top: -24rpx;
							display: inline-flex;
							flex-direction: column;
							.name{
								font-size:26rpx;
								font-family:MicrosoftYaHei;
								font-weight:400;
								color:rgba(22,30,73,1);
							}
							.desc{
								font-size:21rpx;
								font-family:FZLTZHUNHK;
								font-weight:normal;
								color:rgba(153,153,153,1);
								line-height:13rpx;
								margin-top: 6rpx;
							}
						}
					}
					.right{
						display: inline-block;
						.notice{
							display: inline-block;
							width:96rpx;
							height:46rpx;
							background:rgba(255,255,255,1);
							text-align: center;
							border:4rpx solid rgba(22, 30, 73, 1);
							line-height:46rpx;
							border-radius:11rpx;
							font-size:21rpx;
							font-family:FZLTZHUNHK;
							font-weight:normal;
							color:rgba(22,30,73,1);
						}
						.more{
							display: inline-block;
							.morepic{
								width:7rpx;
								height: 31rpx;
								margin-left:38rpx;
							}
						}
					}
				}
				.actpic{
					display: flex;
					justify-content: space-between;
					.lef,.rig{
						display: inline-block;
						width:333rpx;
						height:319rpx;
						border-radius:21rpx;
					}
				}
				.daliy{
					.tag{
						font-size:26rpx;
						font-family:MicrosoftYaHei;
						font-weight:400;
						color:rgba(22,30,73,1);
						margin-top:28rpx;
						margin-bottom:25rpx;
					}
					.content{
						width: 100%;
						height: 90rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp:3;
						-webkit-box-orient: vertical;
						font-size:22rpx;
						font-family:MicrosoftYaHei;
						font-weight:400;
						color:#999999;
						line-height:31rpx;
					}
					.looknum{
						display: flex;
						justify-content: space-between;
						padding-bottom:20rpx;
						border-bottom: 2rpx solid rgba(22,30,73,.4);
						.one,.two,.three{
							.pic{
								width: 24rpx;
								height: 22rpx;
								margin-right: 10rpx;
							}
							.num{
								font-size:18rpx;
								font-family:MicrosoftYaHei;
								font-weight:400;
								color:rgba(153,153,153,1);
							}
						}
					}					
				}
			}
		}
	}
</style>

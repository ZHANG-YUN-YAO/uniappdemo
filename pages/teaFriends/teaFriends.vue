<template>
	<view class="teaFriend">
		<view class="top">
			<view class="friendinfo">
				<view class="left">
					<image class="leftimg" src="../../static/images/girl.png" mode=""></image>
				</view>
				<view class="right">
					<view class="name">
						子然姐姐
					</view>
					<view class="sex">
						<image src="../../static/images/women.png"mode="widthFix"></image>
						<text class="women">28</text>
					</view>
					<view class="status">
						<text class="meter">10.2km</text>
						<text>  / 5小时前活跃</text>
					</view>
					<view class="area">
						<text>北京市 / 房地产 / 21 / 165cm </text>
					</view>
				</view>
			</view>
			<view class="pencontent">
				个性签名：当心灵得以审视不朽的美的时候，爱就是心灵的意象。
			</view>
		</view>
		<view class="teabody">
			<view class="bodytop">
				<view class="cup">
					<text>相册</text>
					<text class="num">(10)</text>
				</view>
				<view class="actswiper">
					<swiper class="imageContainer" @change="handleChange" circular :autoplay="false" previous-margin="0" next-margin="">
						<block v-for="(item,index) in imgList" :key="index">
							<swiper-item class="swiperitem">	
								<view>
									<image class="lef" :src="item" mode=""></image>							
								</view>
							</swiper-item>
						</block>
					</swiper>						       
				</view>
			</view>
			<view class="teamiddle">
				<view class="cup">
					<text>茶园</text>
				</view>
				<view class="garden">
					<view class="lef">
						<view class="lefone">
							88%
						</view>
						<view class="leftwo">
							茶缘值
						</view>
					</view>
					<view class="rig">
						<view class="rigtitle">你们共同</view>					
							<view class="list">
								<view class="li">
									<view class="licontent">								
									</view>
									<view class="lipub">
										加入了《品茶圈》
									</view>
								</view>
								<view class="li">								
									<view class="licontent">
									</view>
									<view class="lipub">
										讨论了《普洱茶的前世今生》
									</view>
								</view>
								<view class="li">
									<view class="licontent">								
									</view>
									<view class="lipub">
										购买过《桂花普洱》
									</view>
								</view>
								<view class="li">								
									<view class="licontent">
									</view>
									<view class="lipub">
										经过“北京—海淀—中关村大厦”
									</view>
								</view>		
								<view class="li">
									<view class="licontent">								
									</view>
									<view class="lipub">
										同一时间打开APP
									</view>
								</view>		
							</view>					
					</view>
				</view>
				<view class="tabthree">				
					<view class="article">
					  <s-tabs effect @change="change" @render="render">
					    <s-tab title="推荐">
								<swiper class="imageContainer" @change="handleChange2"  :autoplay="false" previous-margin="0" next-margin="460rpx">
									<block v-for="(item,index) in suggestList" :key="index">
										<swiper-item class="swiperitemli">	
											<view class="">
												<image class="swiperimg" :src="item.img" mode=""></image>							
												<view class="swipernav">{{item.name}}</view>
												<view class="swipernum">{{item.number}}</view>
											</view>												
										</swiper-item>
									</block>
								</swiper>		
							</s-tab>
					    <s-tab title="圈子">2</s-tab>
					    <s-tab title="茶园">3</s-tab>
					  </s-tabs>
					</view>
				</view>
			</view>
		</view>		
		<view class="friendactive">
			<view class="title">动态</view>		
			<view class="actli">
				<view class="left">
					<view class="lefpic">
						<image class="avatar" src="../../static/avatar.png" mode=""></image>
					</view>
					<view class="lefinfo">
						<view class="name">子然姐姐</view>							
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
				<view class="sort">
					<s-tabs effect @change="change" @render="render">
					  <s-tab title="兴趣">
							<view class="intreast">						
								<view class="interone">普洱茶</view>
								<view class="intertwo">红茶</view>
								<view class="interthree">茶艺</view>	
							</view>
						</s-tab>
						<s-tab title="品茶"></s-tab>
						<s-tab title="阅读"></s-tab>
						<s-tab title="音乐"></s-tab>
						<s-tab title="艺术"></s-tab>
						<s-tab title="个人"></s-tab>
					</s-tabs>
				</view>
			</view>
			<view class="sayhi">
				打个招呼吧
			</view>
		</view>		
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
				tabList: [1, 2, 3, 4, 5, 6, 7],
				activeTab: 3,
				first:true,
				second:false,
				third:false,
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
		}
	}
</script>

<style lang="scss">
	.teaFriend{
		.tab__item{
			text-align: left;
		}
		.top{
			display: flex;
			flex-direction: column;
			padding:42rpx 28rpx 28rpx 28rpx;
			.friendinfo{
				display: flex;
				justify-content: flex-start;
				.leftimg{
					width: 150rpx;
					height: 150rpx;
					border-radius:50%;
				}
				.right{
					display: flex;
					flex-direction: column;
					margin-left: 28rpx;
					.name{
						font-size:32rpx;
						font-family:MicrosoftYaHei;
						font-weight:400;
						color:rgba(22,30,73,1);
					}
					.sex{
						width:61px;
						height:21px;
						text-align: center;
						line-height: 16px;
						background:rgba(248,125,184,1);
						border-radius:10px;
						image{
							width: 14rpx;
							height: 14rpx;
						}
						.women{
							width:17rpx;
							height:13rpx;
							font-size:15rpx;
							font-family:MicrosoftYaHei;
							font-weight:400;
							margin-left: 8rpx;
							color:rgba(255,255,255,1);
						}
					}
					.status{
						font-size:21rpx;
						font-family:Microsoft YaHei;
						color:rgba(51,51,51,1);
						.meter{
							font-weight:bold;
						}
					}
					.area{
						font-size:21rpx;
						font-family:MicrosoftYaHei;
						font-weight:400;
						color:rgba(102,102,102,1);
					}
				}
			}
			.pencontent{
				font-size:21rpx;
				padding-bottom:28rpx;
				font-family:MicrosoftYaHei;
				border-bottom:2rpx solid rgba(22,30,73,.4);
				font-weight:400;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color:rgba(102,102,102,1);
			} 
		}
		.teabody{
			.cup{
				padding-left: 28rpx;
				font-size:32rpx;
				font-family:FZLTZHUNHK;
				font-weight:normal;
				color:rgba(22,30,73,1);
				line-height:27rpx;
				.num{
					font-size:21rpx;
					font-family:MicrosoftYaHei;
					font-weight:400;
					color:rgba(102,102,102,1);
				}
			}
			.actswiper{
				padding: 28rpx;
				.imageContainer{
					.swiperitem{
						width: 278rpx!important;
						height: 222rpx!important;
						padding: 0rpx 8rpx;
						.lef{
							width:278rpx;
							height:222rpx;
							border-radius:11rpx;
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
			width: 694rpx;
			margin:0 auto;
			height: 300rpx;
			border: 1px soid black;
			.title{
				font-size:32rpx;
				font-family:FZLTZHUNHK;
				font-weight:normal;
				color:rgba(22,30,73,1);
				margin-bottom:30rpx;
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
					height: 92rpx;
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
				.sort{
					margin-left:-28rpx;				
					.intreast{
						padding-left:28rpx;
						.interone,.intertwo,.interthree{
							width:94rpx;
							height:41rpx;
							background:rgba(255,255,255,1);
							border:2rpx solid rgba(238, 238, 238, 1);
							display: inline-block;
							border-radius:8rpx;
							font-size:22rpx;
							line-height: 41rpx;
							text-align: center;
							font-family:MicrosoftYaHei;
							font-weight:400;
							margin-right:14rpx;
							color:rgba(22,30,73,1);
						}
					}
				}
			}
			.sayhi{
				width:278rpx;
				height:84rpx;
				text-align:center;
				line-height: 84rpx;
				background:#161E49;
				border-radius:42rpx;
				font-size:32rpx;
				font-family:MicrosoftYaHei;
				font-weight:400;
				color:rgba(255,255,255,1);
				margin:0 auto;
				margin-top:38rpx;
				margin-bottom: 24rpx;
			}
		}
	}
</style>

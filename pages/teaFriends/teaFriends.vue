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
								<view class="lef">
									<image style="width:278rpx;height:222rpx;border-radius:11rpx;" :src="item" mode=""></image>							
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
						<view class="rigtitle">
							你们共同
						</view>
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
				</view>
				<view class="tabthree">				
					<div class="article">
					  <s-tabs effect @change="change" @render="render">
					    <s-tab title="推荐">
								<swiper class="imageContainer" @change="handleChange2"  :autoplay="false" previous-margin="0" next-margin="460rpx">
									<block v-for="(item,index) in suggestList" :key="index">
										<swiper-item class="swiperitemli" style="width:250rpx;
							text-align: center;
							height:278rpx;
							box-sizing: border-box;
							background:rgba(255,255,255,1);
							display: flex;
							justify-content: center;
							box-shadow:0px 3rpx 6rpx 0px rgba(0, 0, 0, 0.2);
							border-radius:11rpx;
							margin-left: 14px;		">	
											<view class="" style="width: 100%;">
												<image class="swiperimg" style="height:181rpx" :src="item.img" mode=""></image>							
												<view class="swipernav" style="font-size:25rpx;
								font-family:MicrosoftYaHei;
								font-weight:400;
								margin-top:20rpx;
								color:rgba(22,30,73,1);
								line-height:13rpx;">{{item.name}}</view>
												<view class="swipernum" style="font-size:21rpx;
								font-family:MicrosoftYaHei;
								font-weight:400;
								margin-top: 12rpx;
								color:rgba(102,102,102,1);">{{item.number}}</view>
											</view>												
										</swiper-item>
									</block>
								</swiper>		
							</s-tab>
					    <s-tab title="圈子">2</s-tab>
					    <s-tab title="茶园">3</s-tab>
					  </s-tabs>
					</div>
				</view>
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

<style lang="less">
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
							background:rgba(255,255,255,1);
							display: flex;
							justify-content: center;
							box-shadow:0px 3rpx 6rpx 0px rgba(0, 0, 0, 0.2);
							border-radius:11rpx;
							margin-right: 14px;			
							.swiperimg{
								width:250rpx;
								height:181rpx!important;
								border-top-left-radius:11rpx;
								border-top-right-radius:11rpx;
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
	}
</style>

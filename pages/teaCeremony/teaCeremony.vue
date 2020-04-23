<template>
	<view class="teaCaremoney">
		<ms-tabs style="background: #161E49;padding: 0 274rpx!important;" :list="list" v-model="active" itemColor="#fff" lineColor="#fff" :lineAnimated="false"></ms-tabs>
		<!-- 茶界 -->
		<view class="first" v-if="first">
			<view class="topvideo">	
				<!-- <template>
					<div class="content">
						<chunlei-video :title="title" :poster="poster" :autoplay="true" :srcList="videosrc" class="video" ref="video" color="#c93756" :gDuration="gDuration">				
						</chunlei-video>
					</div>
				</template>	 -->
				<template>
				    <view>
				        <view class="uni-padding-wrap uni-common-mt">
				            <view>
											<!-- :poster="poster" controls videosrc-->
				              <video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4" @error="videoErrorCallback" show-center-play-btn ></video>
				            </view>
				            <!-- #ifndef MP-ALIPAY -->
				            <!-- <view class="uni-list uni-common-mt">
				                <view class="uni-list-cell">
				                    <view>
				                        <view class="uni-label">弹幕内容</view>
				                    </view>
				                    <view class="uni-list-cell-db">
				                        <input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
				                    </view>
				                </view>
				            </view>
				            <view class="uni-btn-v">
				                <button @click="sendDanmu" class="page-body-button">发送弹幕</button>
				            </view> -->
				            <!-- #endif -->
				        </view>
				    </view>
				</template>
			</view>			
			<view class="gardenbody">
				<view class="bodytop">
					<view class="cup">
						<text>茶界动态</text>
					</view>
					<view class="actswiper">
						<swiper class="imageContainer" @change="handleChange" previous-margin="50rpx" next-margin="50rpx" circular  :autoplay="false">
							<block v-for="(item,index) in imgList" :key="index">
								<swiper-item class="swiperitem">																		
									<view class="itembody">
										<view class="up">
											湖南“教授县长”直播卖茶成“网红”
										</view>
										<view class="down">
											<view class="lef">
												<image src="../../static/avatar.png" mode=""></image>
											</view>
											<view class="rig">
												<view class="rigtalk">
													晚上10点16分，陈灿平一边轻轻地哼唱着《风吹麦浪》，一边和直播间的“老铁”们话别：“谢谢大家，祝福大家，晚安，明天再见！” 
												</view>
												<view class="rignum">
													<view class="numli">
														<image src="../../static/images/hot.png" mode="widthFix"></image>
														<text class="textnum">2.1万</text>
													</view>
													<view class="numli">
														<image src="../../static/images/heart.png" mode="widthFix"></image>
														<text class="textnum">2888</text>
													</view>
												</view>
											</view>
										</view>
									</view>
								</swiper-item>
							</block>
						</swiper>						       
					</view>
				</view>
				<view class="bodymiddle">
					<view class="cup">
						<text>茶品分类</text>
					</view>
					<view class="page">
						<goodsSwiper :datas="detail" :config="config" @change="swiperChange" @tapFun="tapFun"></goodsSwiper>
					</view>
				</view> 
				<view class="bodybottom">
					<view class="bottomnav">
						<view class="navtop">
							<image src="../../static/images/water.png" mode="widthFix"></image>
						</view>
						<view class="navbody">
							<view class="navbody-desc">
								冲茶的温度可分高温、中温和低温三种，凡是茶叶颜...
							</view>
							<view class="navbody-dict">
								<view class="dict">
									<image src="../../static/images/hot.png" mode="widthFix"></image>
									<text class="textnum">2.1万</text>
								</view>
								<view class="dict">
									<image src="../../static/images/star.png" mode="widthFix"></image>
									<text class="textnum">1290</text>
								</view>
								<view class="dict">
									<image src="../../static/images/heart.png" mode="widthFix"></image>
									<text class="textnum">2888</text>
								</view>
								<view class="dict">
									<image src="../../static/images/talk.png" mode="widthFix"></image>
									<text class="textnum">3693</text>
								</view>							
							</view>
						</view>
					</view>
					<view class="bottomnav">
						<view class="navtop">
							<image src="../../static/images/water.png" mode="widthFix"></image>
						</view>
						<view class="navbody">
							<view class="navbody-desc">
								冲茶的温度可分高温、中温和低温三种，凡是茶叶颜...
							</view>
							<view class="navbody-dict">
								<view class="dict">
									<image src="../../static/images/hot.png" mode="widthFix"></image>
									<text class="textnum">2.1万</text>
								</view>
								<view class="dict">
									<image src="../../static/images/star.png" mode="widthFix"></image>
									<text class="textnum">1290</text>
								</view>
								<view class="dict">
									<image src="../../static/images/heart.png" mode="widthFix"></image>
									<text class="textnum">2888</text>
								</view>
								<view class="dict">
									<image src="../../static/images/talk.png" mode="widthFix"></image>
									<text class="textnum">3693</text>
								</view>							
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		<!-- 茶道 -->
		<view class="second" v-if="second">			
			<view class="topvideo">	
				<template>
					<div class="content">
						<chunlei-video :title="title" :poster="poster" :autoplay="true" :srcList="videosrc" class="video" ref="video" color="#c93756" :gDuration="gDuration">				
						</chunlei-video>
					</div>
				</template>	
			</view>
			<view class="desc">
				<text class="word">				
					禅是一种境界。讲求的“禅茶一味”，“禅”是心悟，“茶”是物质的灵芽，“一味”就是心与茶、心与心的相通。茶与禅的相通之处在于追求精神境界的提纯与升华。
					饮茶时注重平心静气品味，参禅则要静心息虑体味。中国禅茶文化精神概括为“正、清、和、雅”。“茶禅一味”的禅茶文化，是中国传统文化史上的一种独特现象，
					也是中国对世界文明的一大贡   
				</text>
				<view class="gostudy">学习</view>			
			</view>
			<view class="gardenbody">
				<view class="bodytop">
					<view class="cup">
						<text>茶具</text>
					</view>
					<uni-grid :column="2" :showBorder="false">
							<uni-grid-item>
								<image src="../../static/images/76.png"></image>
								<text>羊脂玉茶杯</text>
							</uni-grid-item>
							<uni-grid-item>
								<image src="../../static/images/77.png"></image>
								<text>陶瓷三才盖碗</text>
							</uni-grid-item>				   
					</uni-grid>
				</view>
				<view class="bodymiddle">
					<view class="cup">
						<text>茶品分类</text>
					</view>
					<view class="page">
						<goodsSwiper :datas="detail" :config="config" @change="swiperChange" @tapFun="tapFun"></goodsSwiper>
					</view>
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
				<view class="bodybottom">
					<view class="water">
						水
					</view>
					<view class="bottomnav">
						<view class="navtop">
							<image src="../../static/images/water.png" mode="widthFix"></image>
						</view>
						<view class="navbody">
							<view class="navbody-desc">
								冲茶的温度可分高温、中温和低温三种，凡是茶叶颜...
							</view>
							<view class="navbody-dict">
								<view class="dict">
									<image src="../../static/images/hot.png" mode="widthFix"></image>
									<text class="textnum">2.1万</text>
								</view>
								<view class="dict">
									<image src="../../static/images/star.png" mode="widthFix"></image>
									<text class="textnum">1290</text>
								</view>
								<view class="dict">
									<image src="../../static/images/heart.png" mode="widthFix"></image>
									<text class="textnum">2888</text>
								</view>
								<view class="dict">
									<image src="../../static/images/talk.png" mode="widthFix"></image>
									<text class="textnum">3693</text>
								</view>							
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
	import chunleiVideo from '../../components/chunlei-video/chunlei-video.nvue'	
	import goodsSwiper from "../../components/pyh-goodsSwiper/pyh-goodsSwiper.vue"
	export default {
		components:{
			chunleiVideo,
			goodsSwiper,
			msTabs
		},
		data() {
			return {
				currentIndex:'0',
				imgList:[
					'../../static/images/swiper.png',
					'../../static/images/swiper2.png',
					'../../static/images/swiper3.png',
					'../../static/images/swiper.png',
					'../../static/images/swiper2.png'],
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				detail:{
					// title:"推荐",
					// subLable:"超划算",
					list:[
						{
							id:1,
							img:"../../static/images/4.png",
							name:"全部"
						},
						{
							id:2,
							img:"../../static/images/5.png",
							name:"红茶"
						},
						{
							id:3,
							img:"../../static/images/11.png",
							name:"黑茶"
						},
						{
							id:4,
							img:"../../static/images/2.png",
							name:"普洱"
						},
						{
							id:5,
							img:"../../static/images/4.png",
							name:"普洱"
						},
						{
							id:6,
							img:"../../static/images/5.png",
							name:"普洱"
						}
					]
				},
				config:{
					more:true,
					autoplay:false,
					multiple:4,
					shadow:true
				},
				videosrc:'../../static/videos/f2.mp4',  
				poster:'../../static/images/swiper2 .png',//封面图片
				title:"视频",
				gDuration:60,
				first:true,
				second:false,
				list: [{
						title: '茶界'
					}, {
						title: '茶道'
					}
				],
				type: [{
					title: '茶界'
					}, {
					title: '茶道'
					}],
				active: 0
			}
		},
		onReady: function(res) {
				// #ifndef MP-ALIPAY
				this.videoContext = uni.createVideoContext('myVideo')
				// #endif
		},
		methods: {
			videoErrorCallback: function(e) {
					uni.showModal({
							content: e.target.errMsg,
							showCancel: false
					})
			},
			handleChange(){},
			changeIndicatorDots(e) {
					this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
					this.autoplay = !this.autoplay
			},
			intervalChange(e) {
					this.interval = e.target.value
			},
			durationChange(e) {
					this.duration = e.target.value
			},
			swiperChange(current){
				console.log(current);
			},
			tapFun(e){
				console.log(e.type,e.id,e.index);
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

<style lang="less">
	.teaCaremoney{	
		background-color: #161E49;
		uni-video {
				width: 100%!important;
				height: 225px;
				display: inline-block;
				line-height: 0;
				overflow: hidden;
				position: relative;
		}
		.tab__item-title{
			color:rgba(255,255,255,.4);		
		}
		.second{
			padding-left: 28rpx;
			padding-right: 28rpx;
		}
		.first,.second{
			// padding-left: 28rpx;
			// padding-right: 28rpx;
			.desc{
				width:694rpx;
				height:294rpx;	
				background:rgba(255,255,255,0.16);
				box-shadow:0rpx 4rpx 11rpx 0rpx rgba(22,30,73,0.2);
				margin: 0 auto;
				text-align: center;
				border-radius:14rpx;
				margin-top: 28rpx;		
				font-size:21rpx;
				font-family:FZLTZHUNHK;
				font-weight:normal;
				color: #BBBBBB;
				.word{
					width:638rpx;
					height:120rpx;
					padding:28rpx;
					font-size:21rpx;
					font-family:FZLTZHUNHK;
					font-weight:normal;
					color: #BBBBBB;
					line-height:31rpx;
					display: -webkit-box;
					-webkit-line-clamp: 5;
					word-wrap: break-word;
					word-break: break-all;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-box-orient: vertical;
					
				}
				.gostudy{
					width:139rpx;
					height:50rpx;
					background:rgba(255,255,255,1);
					border-radius:25rpx;
					line-height: 50rpx;
					text-align: center;
					float: right;
					margin-top: 28rpx;
					margin-right: 28rpx;
					font-size:25rpx;
					font-family:FZLTZHUNHK;
					font-weight:normal;
					color:rgba(22,30,73,1);
				}
			}
			.gardenbody{
				.bodytop{
					.cup{
						text{
							display: block;
							font-size:32rpx;
							font-family:FZLTZHUNHK;
							font-weight:normal;
							color:rgba(255,255,255,1);
							line-height:27rpx;
							margin-top:43rpx;
							margin-bottom:27rpx;
						}
					}
					.uni-grid{
						.uni-grid-item{
							text-align: center;
							image{
								width: 333rpx;					
								height:319rpx;
								margin:0 auto;
							}
							text{
								width:278rpx;
								height:56rpx;
								background:rgba(255,255,255,1);
								border-radius:17rpx;
								margin: 0 auto;
								font-size:25rpx;
								font-family:FZLTZHUNHK;
								font-weight:normal;
								color:rgba(22,30,73,1);
								line-height:56rpx;
								position: relative;
								top: -28rpx;
							}
						}
					}
				}
				.bodymiddle{
					.cup{					
						text{
							display: block;
							font-size:32rpx;
							font-family:FZLTZHUNHK;
							font-weight:normal;
							color:rgba(255,255,255,1);
							line-height:27rpx;
							margin-top:43rpx;
							margin-bottom:27rpx;
						}										
					}
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
				.bodybottom{
					width:750rpx;
					background:rgba(255,255,255,1);
					border-top-left-radius:49rpx;
					border-top-right-radius:49rpx;
					margin-left: -28rpx;
					padding-bottom:80rpx;
					.water{
						font-size:32rpx;
						font-family:FZLTZHUNHK;
						font-weight:normal;
						color:rgba(22,30,73,1);
						line-height:27rpx;
						padding: 28rpx;
					}
					.bottomnav{
						padding-top:25rpx;
						padding:0 28rpx;
						.navtop{
							image{
								width: 694rpx;
								height: 389rpx;
							}
						}		
						.navbody{
							border-bottom-left-radius:49rpx;
							border-bottom-right-radius:49rpx;
							background-color: #161E49;
							margin-top: -12rpx;						
							.navbody-desc{
								width:635rpx;
								height:28rpx;
								font-size:28rpx;
								font-family:FZLTZHUNHK;
								font-weight:normal;
								color:rgba(254,254,255,1);
								padding:30rpx 28rpx 0 28rpx;
								line-height:27rpx;							
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}						
							.navbody-dict{
								padding:0 28rpx;
								display: flex;
								justify-content: space-between;
								.dict{
									image{
										width: 21rpx;
										height: 21rpx;
									}
									.textnum{
										font-size:18rpx;
										font-family:FZLTZHUNHK;
										font-weight:normal;
										color:rgba(187,187,187,1);
										margin-left: 10rpx;
										line-height:13rpx;
									}
								}								
							}
						}
					}
				}
			}
		}
		.first{
			.topvideo,.bodymiddle,.bodybottom{
				padding-left:28rpx;
				padding-right: 28rpx;
			}
			.bodytop{				
				padding: 0!important;
				.cup{
					padding-left: 28rpx;
					padding-right: 28rpx;
				}
			}			
			.actswiper{				
				.swiperitem {
					width: 556rpx;
					// height: 291rpx;
					padding: 0rpx 20rpx;
					box-sizing: border-box;
					position: relative;
					.itembody{
						width:556rpx;
						background:rgba(255,255,255,0.16);						
						box-shadow:0px 4px 11px 0px rgba(22,30,73,0.2);
						border-radius:14rpx;
						padding: 28rpx;
						.up{
							font-size:28rpx;
							font-family:FZLTZHUNHK;
							font-weight:normal;
							color:#fff;
							line-height:13rpx;
						}
						.down{
							display: flex;
							justify-content: space-between;
							flex-direction: row;
							padding-top: 42rpx;
							.lef{
								image{
									width:139rpx;
									height: 167rpx;
								}
							}
							.rig{
								margin-left: 35rpx;
								display: flex;
								flex-direction: column;
								.rigtalk{
									width:388rpx;
									height:116rpx;
									font-size:21rpx;
									font-family:FZLTZHUNHK;
									font-weight:normal;
									color:rgba(187,187,187,1);
									line-height:28rpx;
									display: -webkit-box;
									-webkit-line-clamp:4;
									-webkit-box-orient: vertical;
									overflow: hidden;
									text-overflow: ellipsis;
								}
								.rignum{
									display: flex;
									flex-direction: row;
									.numli{										
										image{
											width: 21rpx;
											height: 21rpx;
										}
										.textnum{
											font-size:18rpx;
											font-family:FZLTZHUNHK;
											font-weight:normal;
											color:rgba(187,187,187,1);
											line-height:13rpx;
											margin-left: 10rpx;
										}
									}
									.numli:nth-child(2){
										margin-left: 94rpx;
									}
								}
							}
						}
					}
					.swiperText {
						display: flex;
						flex-direction: column;
						align-items: center;
						position: absolute;
						top: 56rpx;
						left: 51rpx;
						z-index: 998;
						width:162rpx;
						height:163rpx;
						background:rgba(255,255,255,1);
						border-radius:8rpx;
						padding:10rpx;
						.name {
							font-size:26rpx;
							font-weight:500;
							color:rgba(253,57,91,1);
							line-height:37rpx;
							margin-bottom: 10rpx;
						}
						.zq,.cz {
							font-size:20rpx;
							color:rgba(253,57,91,1);
							line-height:35rpx;
						}
						.addNl {
							width:120rpx;
							height:26rpx;
							background:rgba(253,57,91,1);
							border-radius:13rpx;
							font-size:20rpx;
							font-weight:500;
							color:rgba(255,255,255,1);
							text-align: center;
							line-height: 26rpx;
							margin-top: 10rpx;
						}
						
					}
				}				
				.itemImg {
					position: absolute;
					width: 95%;
					height: 255rpx;
					border-radius: 15rpx;
					z-index: 5;
					opacity: 0.7;
					top: 5%;
					box-shadow:0px 4rpx 15rpx 0px rgba(153,153,153,0.24);
				}				
				.swiperactive {
					width: 95%;
					opacity: 1;
					z-index: 10;
					height: 287rpx;
					top: 0%;
					transition: all .2s ease-in 0s;
				}				
				.zhankai{
					text-align: center;
					.iconfont{
						margin-left: 10rpx;
					}
				}
			}
			.bodybottom{
				.bottomnav{
					padding-top: 28rpx!important;
				}
			}
		}
	}
	
</style>

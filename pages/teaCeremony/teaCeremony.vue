<template>
	<view class="teaCaremoney">
		<view class="topvideo">	
			<ms-tabs style="background: #161E49;" :list="list" v-model="active" itemColor="#fff" lineColor="#fff" :lineAnimated="false"></ms-tabs>			
			<view v-if="first">
				<template>
					<div class="content">
						<chunlei-video :title="title" :poster="poster" :autoplay="true" :srcList="videosrc" class="video" ref="video" color="#c93756" :gDuration="gDuration">				
						</chunlei-video>
					</div>
				</template>	
			</view>
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
						<image src="../../static/images/83.png"></image>
						<text>桂花普洱茶</text>
					</uni-grid-item>
					<uni-grid-item>
						<image src="../../static/images/83.png"></image>
						<text>二十年普洱茶</text>
					</uni-grid-item>				   
				</uni-grid>
				<uni-grid :column="2" :showBorder="false">
					<uni-grid-item>
						<image src="../../static/images/83.png"></image>
						<text>藏茶</text>
					</uni-grid-item>
					<uni-grid-item>
						<image src="../../static/images/83.png"></image>
						<text>铁观音</text>
					</uni-grid-item>				   
				</uni-grid>
			</view>
		</view>
	</view>
</template>

<script>
	import chunleiVideo from '../../components/chunlei-video/chunlei-video.nvue'	
	import msTabs from '@/components/ms-tabs/ms-tabs.vue'
	import goodsSwiper from "../../components/pyh-goodsSwiper/pyh-goodsSwiper.vue"
	export default {
		components:{
			chunleiVideo,
			goodsSwiper
		},
		data() {
			return {
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
					autoplay:true,
					multiple:3,
					shadow:true
				},
				videosrc:'../../static/videos/f2.mp4',  
				poster:'../../static/images/01.png',//封面图片
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
		methods: {
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
		padding-left: 28rpx;
		padding-right: 28rpx;
		background-color: #161E49;
		page{background: #f8f8f8;}
		.tab__item-title{
			color:rgba(255,255,255,.4);		
		}
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
		}
	}
	
</style>

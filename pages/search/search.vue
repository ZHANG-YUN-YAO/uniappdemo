<template>
	<view class="search">
		<view class="searchWapper">
			<view class="searchView">
				<icon type="search" size="16"></icon>
				<text style="padding-left: 22rpx;">请输入搜索关键字</text>
				<uni-icons class="closeempty" type="closeempty" size="18" color="#999999"></uni-icons>
			</view>
			<text class="reback" @click="reback">取消</text>
		</view>	
		<view class="searchSort">
			<view class="searchSortlist">		
				<view class="sortHead">
					<text>搜索历史</text>
					<image src="../../static/images/dele.png" mode=""></image>
				</view>					
				<view class="sortBody">							
					<view class="bodylist">
						<ul>					
							<li>普洱</li>
							<li>禅</li>
							<li>桂花</li>
							<li>茶道表演</li>
						</ul>
					</view>
				</view>
			</view>
			<view class="searchSortlist" @click="tosort()">
				<view class="sortHead">
					<text>分类搜索</text>
					<!-- <image src="../../static/images/dele.png" mode=""></image> -->
				</view>					
				<view class="sortBody">							
					<view class="bodylist">
						<ul>					
							<li>文章</li>
							<li>视频</li>
							<li>商品</li>
							<li>茶友</li>
						</ul>
					</view>
				</view>
			</view>
			<view class="searchSortlist">
				<view class="sortHead">
					<text>热门搜索</text>
				</view>					
				<view class="sortBody">							
					<view class="bodylist">
						<ul>					
							<li>春茶</li>
							<li>绿茶</li>
							<li>西湖龙井</li>
						</ul>
					</view>
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
	import topSearch from '../../components/topSearch.vue'
	export default {
		components:{
			topSearch
		},	
		
		data() {
			return {
				
			};
		},
		methods:{
			tosort(){
				uni.navigateTo({
					url:'../sortSearch/sortSearch'
				})
			},
			reback(){
				uni.switchTab({
				  url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="scss">	
	.search{
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
		.searchSort{
			padding:42rpx 28rpx;
			.searchSortlist{
				padding: 42rpx 0;		
				.sortHead{
					display: flex;
					justify-content: space-between;
					text{
						font-size:28rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(22,30,73,1);
					}
					image{
						width: 26rpx;
						height: 26rpx;
					}
				}
				.sortBody{
					padding-top: 38rpx;
					.bodylist{
						ul{
							margin-left: -40px;
							li{
								display: inline-block;
								padding: 10rpx 21rpx;
								margin-right: 21rpx;
								font-size:25rpx;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:#333333;
								background:rgba(246,246,246,1);
								border-radius:23px;
							}
						}
					}
				}
			}
		}
	}
</style>

<template>
	<view>
		<view class="searchWapper">
			<view class="searchView" @click="cliSearch()">
				<icon type="search" size="16"></icon>
				<text style="padding-left: 22rpx;">初级禅茶教学</text>
				<uni-icons class="closeempty" type="closeempty" size="18" color="#999999"></uni-icons>
			</view>
			<!-- <uni-icons class="chat" @click="infopage" type="chat" size="18" color="#fff"></uni-icons> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			infopage(){
				uni.navigateTo({
				  url: '/pages/information/information'
				});
			},
			cliSearch(){
				uni.navigateTo({
				  url: '/pages/search/search'
				});
			}
		}
	}
</script>

<style lang="less">
	.searchWapper{		
		background-color: #876F70;		
		padding: 28rpx;
		.chat{
			display: inline-block;
			margin-left: 19rpx;
			position: relative;
			top: 16rpx;
		}
		.searchView{
			// width:611rpx;
			width:694rpx;
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
	
</style>

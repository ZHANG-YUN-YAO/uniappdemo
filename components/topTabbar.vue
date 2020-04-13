<template>
	<view class="topTabbar">
		<view class="tabItem" :class="activeIndex==index?'active':''" v-for="(item,index) of items" :key="index"  @tap="tabSwitch(index)">
			<text class="tabText">{{item}}</text>
			<view class="bottomline"></view>		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:['精选','推荐','导航','图书','百货'],
				activeIndex:0
			};
		},
		methods:{
			tabSwitch(index){
				this.activeIndex = index;
			}
		}
	}
</script>

<style lang="less">
	.topTabbar{
		display: flex;
		justify-content: space-around;
		.tabItem{
			display: flex;
			flex-direction: column;
			.tabText{
				color: #757575;
			}
		}
		.active{
			.tabText{
				color: black;
			}
			.bottomline{
				background-color: #ee4633;
				height: 8rpx;
				border-radius: 4rpx;
			}
		}
	}
</style>

<template>
	<view class="content">
		<topSearch/>
		<view class="click-feedback">
			<image src="../../static/images/01.png"></image>
			<image src="../../static/images/02.png"></image>
			<image src="../../static/images/03.png"></image>
			<image src="../../static/images/04.png"></image>
		</view>

	</view>
</template>

<script>
	import topSearch from '../../components/topSearch.vue'
	import topTabbar from '../../components/topTabbar.vue'
	export default {
		components:{
			topSearch,
			topTabbar
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.content {
		.click-feedback{
			display: flex;
			justify-content: space-around;
			padding: 27rpx 56rpx 55rpx 56rpx;
			background-color: #876F70;
			image{
				width: 83rpx;
				height:83rpx;
			}
		}		
	}
 
</style>

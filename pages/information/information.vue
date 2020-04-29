<template>
	<view class="information">		
		<uni-list>	
			<uni-list-item title="系统消息" thumb="../../static/images/info1.png" :showArrow="false">
				<template v-slot:right="">
					<text>新</text>
					<uni-badge text=" " size="small" type="error" :inverted="false"></uni-badge>
				</template>
			</uni-list-item>
			<uni-list-item title="交易物流" thumb="../../static/images/info2.png" :showArrow="false"></uni-list-item>
			<uni-list-item title="互动消息" thumb="../../static/images/info3.png" :showArrow="false"></uni-list-item>
		</uni-list>	
		<view class="second">		
			<uni-list>
				<uni-list-item title="收到的评论" thumb="../../static/images/info4.png" :showArrow="false">
					<template v-slot:right="">
						<text>新</text>
						<uni-badge text=" " size="small" type="error" :inverted="false"></uni-badge>
					</template>
				</uni-list-item>
				<uni-list-item title="获赞与收藏" thumb="../../static/images/info5.png" :showArrow="false"></uni-list-item>
				<uni-list-item title="我的粉丝" thumb="../../static/images/info6.png" :showArrow="false"></uni-list-item>
			</uni-list>	
		</view>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {uniList,uniListItem,uniBadge},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.uni-badge{
		padding: 0!important;
		width: 22rpx!important;
		height: 22rpx!important;
		margin-top: -14rpx!important;
		margin-left: 4rpx!important;
	}
	.second{
		border-top: 28rpx solid #EEEEEE;
	}
	.uni-list-item__icon-img{
		width: 44rpx!important;
		height: 42rpx!important;
	}
	.uni-badge--error{
		background-color: #FF2829;
	}
	.uni-list-item{
		margin-top: 15rpx;
	}
	.uni-list-item__extra{
		text{
			font-size:28rpx;
			font-family:FZLTZHUNHK;
			font-weight:normal;
			color:rgba(153,153,153,1);
			line-height:13rpx;
		}
	}
	

</style>

<template>
	<view>
		<s-tabs effect @change="change" @render="render">
		  <s-tab title="全部">
				<view class="orderlist">
					<view class="orderli">
						<view class="timestatus">
							<view class="lef">
								<image src="" mode=""></image>
								<text>2020-04-18 13：38</text>
							</view>
							<view class="rig">
								待支付
							</view>
						</view>
						<view class="goods">
							<view class="left">
								<image src="" mode=""></image>
							</view>
							<view class="right">
								<view class="">桂花普洱茶</view>
								<view class="">
									<text>净含量：180克</text>
									<text>x1</text>
								</view>
								<view class="">
									<view class="">珍藏版</view>
									<view class="">￥ 999.00</view>
								</view>
							</view>
						</view>
						<view class="pricebtn">
							<view class="price">实付：￥399.0</view>
							<view class="btngroup">
								<view class="">取消订单</view>
								<view class="">去支付</view>
								
								<view class="">再次购买</view>
								
								<view class="">查看物流</view>
								<view class="">确认收货</view>
								
								<view class="">删除订单</view>
								<view class="">立即评价</view>
							</view>
						</view>
					</view>
				</view>
			</s-tab>
		  <s-tab title="待支付">2</s-tab>
		  <s-tab title="待发货">3</s-tab>
			<s-tab title="待收货">4</s-tab>
			<s-tab title="待评价">5</s-tab>
		</s-tabs>
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

<style>

</style>

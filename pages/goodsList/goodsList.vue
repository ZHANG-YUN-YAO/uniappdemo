<template>
	<view class="list_box">
		<view class="left">
			<scroll-view scroll-y="true" :style="{ 'height':scrollHeight + 'px' }">
				<view class="item" 
					v-for="(item,index) in leftArray"
					:key="index" 
					:class="{ 'active':index==leftIndex }" 
					:data-index="index"
					@tap="leftTap"
				>{{item}}</view>
            </scroll-view>
		</view>
		<view class="main">
			<scroll-view  scroll-y="true" :style="{ 'height':scrollHeight + 'px' }" @scroll="mainScroll" :scroll-into-view="scrollInto" scroll-with-animation="true">
				<view class="item main-item" v-for="(item,index) in mainArray" :key="index" :id="'item-'+index">
					<view class="goods" v-for="(item2,index2) in item.list" :key="index2" @click="goodsdetail">
						<image src="/static/images/aa.png" mode=""></image>
						<view class="goodsnav">
							<view class="describe">中粮中茶牌 云南普洱茶 2019年冰岛铜庆...</view>
							<view class="money">￥16800.00</view>
							<view class="sellnum">已售(26)</view>
						</view>
					</view>
				</view>
				<view class="fill-last" :style="{ 'height':fillHeight + 'px' }"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight:500,
				fillHeight:0,	// 填充高度，用于最后一项低于滚动区域时使用
				leftArray:[],
				mainArray:[],
				topArr:[],
				leftIndex:0,
				scrollInto:''
			}
		},
		onLoad(){
			uni.getSystemInfo({
				success:(res)=>{
					/* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
					this.scrollHeight = res.windowHeight;
				}
			});
		},
		mounted(){
			this.getListData();
		},
		methods: {
			goodsdetail(){
				uni.navigateTo({
					// url:'../teaArticle/teaArticle'
					url:'../gardenDetail/gardenDetail'
				})
			},
			/* 获取列表数据 */
			getListData(){
				new Promise((resolve,reject)=>{
					uni.showLoading();
					setTimeout(()=>{
						let [left,main]=[[],[]];
						
						for(let i=0;i<10;i++){
							// left.push(`列表${i+1}`);	
							left=['推荐','红茶','黑茶','普洱','乌龙','绿茶','白茶','黄茶','花茶','袋泡','茶具'];
							let list=[];
							let r = Math.floor(Math.random()*10);
							console.log(r);
							r = r < 1 ? 3 : r;
							console.log(r);
							for(let j=0;j<r;j++){
								list.push(j);
							}
							main.push({
								title:`第${i+1}类商品标题`,
								list
							})
						}
						
						// 将请求接口返回的数据传递给 Promise 对象的 then 函数。
						resolve({left,main});
					},1000);
				}).then((res)=>{
					console.log(res);					
					uni.hideLoading();
					this.leftArray=res.left;
					this.mainArray=res.main;
					
					// DOM 挂载后 再调用 getElementTop 获取高度的方法。
					this.$nextTick(()=>{
						this.getElementTop();
					});
				});
			},
			/* 获取元素顶部信息 */
			getElementTop(){
				new Promise((resolve,reject)=>{
					let view = uni.createSelectorQuery().selectAll('.main-item');
					view.boundingClientRect(data => {
						resolve(data);
					}).exec();
				}).then((res)=>{
					let topArr = res.map((item)=>{
						return item.top;
					});
					this.topArr = topArr;
					
					/* 获取最后一项的高度，设置填充高度。判断和填充时做了 +-20 的操作，是为了滚动时更好的定位 */
					let last = res[res.length-1].height;					
					if(last - 20 < this.scrollHeight){
						this.fillHeight = this.scrollHeight - last + 20;
					}
				});
			},
			/* 主区域滚动监听 */
			mainScroll(e){
				let top =e.detail.scrollTop;
				let index=0;
				/* 查找当前滚动距离 */
				for(let i = (this.topArr.length-1);i>=0;i--){
					/* 在部分安卓设备上，因手机逻辑分辨率与rpx单位计算不是整数，滚动距离与有误差，增加2px来完善该问题 */
					if((top+2)>=this.topArr[i]){
						index = i;
						break;
					}
				}
				this.leftIndex=(index < 0 ? 0: index);
			},
			/* 左侧导航点击 */
			leftTap(e){
				let index=e.currentTarget.dataset.index;
				this.scrollInto=`item-${index}`;
			}
		}
	}
</script>

<style lang="scss">
.list_box{
	display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
		font-size: 28rpx;
	
	.left{
		width: 186rpx;
		background-color: #f6f6f6;
		line-height: 80rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		text-align: center;
		.item{
			padding-left: 20rpx;
			position: relative;
			width:144rpx;
			height:47rpx;
			line-height: 47rpx;
			border-radius:24rpx;
			margin: 51rpx auto;
			padding-left: 0;
			font-size:25rpx;
			font-family:Microsoft YaHei;
			font-weight:400;
			&:not(:first-child) {
				margin-top: 1px;			
				&::after {
					content: '';
					display: block;
					height: 0;
					// border-top: #d6d6d6 solid 1px;
					width: 620rpx;
					position: absolute;
					top: -1px;
					right: 0;
					transform:scaleY(0.5);	/* 1px像素 */
				}
			}
			
			&.active{
				color: #FFFFFF;
				background-color: #2852F2;
			}
		}
		
		.fill-last{
			height: 0;
			width: 100%;
			background: none;
		}
	}
	.main{
		background-color: #fff;
		padding-left: 21rpx;
		padding-right: 28rpx;
		width: 0;
		flex-grow: 1;
		box-sizing: border-box;	
		
		.item{
			padding-bottom: 10rpx;
			display: flex;
			justify-content: space-between;
		}
		
		.goods{
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			margin-bottom: 10rpx;
			padding:7rpx;
			
			&>image{
				width:250rpx;
				height:181rpx;
				border-radius:11rpx;
			}
			&>.goodsnav{
				width: 250rpx;
			}				
			
			.describe{
				font-size:22rpx;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(22,30,73,1);
				line-height:31rpx;
				padding: 14rpx 4rpx 1rpx 4rpx;
				text-overflow:ellipsis;
				overflow:hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;	
			}
			
			.money{
				font-size: 24rpx;
				color: #FF2829;
				line-height:37rpx;
			}
			.sellnum{
				font-size:19rpx;
				font-family:FZLTZHUNHK;
				font-weight:normal;
				color:rgba(153,153,153,1);
				line-height:13rpx;
			}
		}
	}
}
</style>
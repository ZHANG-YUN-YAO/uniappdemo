<!-- <template>
	<view class="video">
		<video source :src="videosrc" controls></video>
	</view>
</template>

<script>
	import chunleiVideo from '../../components/chunlei-video/chunlei-video.nvue'	
	
	export default {
		data() {
			return {
				video:'',
				videosrc:'../../static/videos/f2.mp4',
				poster:'../../static/images/swiper2 .png',//封面图片
				title:"视频",
				gDuration:60,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style> -->
<template>
	<view>
		<refresh ref="refresh" @refresh='$refs.list.refresh()'>
			<list ref="list" :options="options" @success="$refs.refresh.endAfter()">
				<template v-slot="{list}">
					<view class="title">列表组件封装</view>
					<!-- 循环数据 -->
					<view class="item" v-for="(item, index) in list" :key="index">我是第{{index}}项{{item}}</view>
				</template>
			</list>
		</refresh>
	</view>
</template>

<script>
	import list from '../../components/list/list.vue'
	import refresh from '../../components/refresh/refresh.vue'
	export default {
		components:{
			refresh,
			list
		},
		computed: {
			
			// 定义请求的配置，配置详情请查看文档说明
			options() {
				return {
					// url: '/test',
					url:this.global_api+'/api/goods/list',
					params: {
						
					}
				}
				
			}
			
		},
		methods:{
			onRefresh() {
				uni.showToast({
						icon: 'none',
						title: `开始刷新`
				})
				setTimeout(() => {
						uni.showToast({
								icon: 'none',
								title: `完成`
						})
						this.$refs.refresh.endAfter() //通知下拉刷新组件刷新已经完成
				}, 1000)
			}
		},
		mounted() {
			// 调用组件的request方法开始获取数据
			// 为什么不默认就请求？因为很多时候组件并不知道你的options是不是已经配置好了，所以还是手动请求比较靠谱点
			this.$refs.list.request()
		}
	}
</script>

<style>
	.title {
		padding: 20upx;
		background-color: #E5E5E5;
		text-align: center;
	}
	.item {
		padding: 50upx;
		margin: 10upx;
		border-bottom: 1px solid #E5E5E5;
		text-align: center;
		font-size: 30upx;
	}
</style>

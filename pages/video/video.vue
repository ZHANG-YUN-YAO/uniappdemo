<template>
	<view class="video">
		<video source :src="videosrc" controls></video>
		<!-- <div class="content">
			<chunlei-video :title="title" :poster="poster" :autoplay="true" :srcList="videosrc" class="video" ref="video" color="#c93756" :gDuration="gDuration">				
			</chunlei-video>
		</div> -->
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

</style>

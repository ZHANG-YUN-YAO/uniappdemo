<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	ul{
		list-style: none;
	}
	/* uni-radio { */
		.uni-radio-input{
			width: 28rpx!important;
			height: 28rpx!important;
		}
	/* } */
	.uni-radio-input-checked{
		background-color: #EF104A!important;
		border-color: #EF104A!important;
	}
	.uni-list-item__content-title{
		font-size:28rpx!important;
		font-family:FZLTZHUNHK;
		font-weight:normal;
		color:rgba(51,51,51,1)!important;
		/* line-height:13rpx!important; */
	}
	.gswSw{height: 160rpx!important;padding-bottom: 0rpx;}
	.gswGoods{width:111rpx!important;padding-left: 20rpx!important;font-weight: bold;}
	.goodsSwiperBox{width: 694rpx!important;margin: 0rpx!important;border-radius: 20rpx;background: #161E49!important;padding: 0 10rpx 0 0rpx!important;position: relative;box-sizing: border-box;}
	.gswGoods image{width: 111rpx;height: 111rpx;border-radius: 10rpx;display: block;}
	.gswGoods .goodsPrice{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;color: #FF3636;font-size: 30rpx;line-height: 42rpx;display: none;justify-content: center;}
	.gswGoods .goodsTxt{height: 46rpx!important;width:110rpx;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;font-size: 24rpx;line-height: 46rpx!important;text-align: center;font-family:FZLTZHUNHK!important;
		font-weight:normal!important;color:rgba(255,255,255,1)!important;}
	.shadowLeft{display:none;position: absolute;left: 0;top: 80rpx;width: 111rpx;height: 111rpx;background-image: linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,225,0));}
	.shadowRight{display:none;position: absolute;right: 0;top: 80rpx;width: 111x;height: 111rpx;background-image: linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,225,0));}
	.uni-video-container{
		background-color: #161E49!important;
	}
	.uni-list-item__container:after{
		background-color: #fff!important;
	}

</style>

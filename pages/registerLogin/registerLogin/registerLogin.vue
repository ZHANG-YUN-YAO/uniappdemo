<template>
	<view class="registerlogin">
		<view class="content">
			<image class="logo" src="../../../static/images/logo.png"></image>				
			<view class="btn-row">				
				<button id="button1" class="cu-btn bg-green block lg button button1" @tap="bindLogin">
						<image class="img" src="../../../static/images/weixin2.png" mode=""></image>
					微信登录
				</button>
				<button id="button2" class="cu-btn bg-green block lg button button2" @tap="phoneLogin">
					<image class="img" src="../../../static/images/phone2.png" mode=""></image>
					手机号登录
				</button>
			</view>
			<view class="action-row">
				<navigator url="../codeLogin/codeLogin">
					<image class="weiboimg" src="../../../static/images/weibo.png" mode=""></image>
					微博
				</navigator>
				<navigator url="../forgectPassword/forgectPassword">
					<image class="qqimg" src="../../../static/images/qq.png" mode=""></image>
						QQ
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
				active:false
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			phoneLogin(){
				uni.navigateTo({
					url:'../passwordLogin/passwordLogin'
				})
			},
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if(this.account.length > 5&&this.password.length >=6){
					document.getElementsByClassName('button')[0].style.backgroundColor='#161E49'
				}
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中				
				 */
				const data = {
					account: this.account,
					password: this.password
				};
				const validUser = service.getUsers().some(function(user) {
					return data.account === user.account && data.password === user.password;
				});
				if (validUser) {
					console.log(this.account)
					this.toMain(this.account);
					
				} else {
					uni.showToast({
						icon: 'none',
						title: '用户账号或密码不正确',
					});
				}
			},
			getUserInfo({
				detail
			}) {
				if (detail.userInfo) {
					this.toMain(detail.userInfo.nickName);
				} else {
					uni.showToast({
						icon: 'none',
						title: '登陆失败'
					});
				}
			},
			toMain(userName) {
				this.login(userName);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../main/main',
					});
				} else {
					uni.navigateBack();
				}

			}
		},
		onReady() {
			this.initPosition();
		}
	}
</script>

<style lang="less">
	.registerlogin{
		width: 100%;
		height: 100vh;
		background:#20223b;
		text-align: center;
		.toptitle{
			font-size:70rpx;
			font-family:经典繁毛楷;
			font-weight:400;
			text-align: center;
			color:rgba(22,30,73,1);
			padding-top: 94rpx;
			margin-bottom:115rpx;
		}
		.button1{
			background-color: #fff!important;
			color:rgba(32,34,60,1)!important;
			.img{
				width: 28rpx;
				height: 24rpx;
				margin-right: 18rpx;
			}
		}
		.button2{
			margin-top:35rpx!important;
			border-radius:40rpx!important;
			background:rgba(59,66,102,1)!important;
			.img{
				width: 22rpx;
				height: 28rpx;
				margin-right: 18rpx;
			}
		}
		.btn-row{
			width: 74%;
			margin: 0 auto;
			margin-top: 306rpx;
			uni-button{
				background:#CCCCCC;
				border: 0;
				border-radius:40rpx;
			}
			.cu-btn{
				font-size:28rpx;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(255,255,255,1);
			}
		}
		
		.zhuyi{
			font-size:21rpx;
			font-family:Microsoft YaHei;
			font-weight:400;
			margin-top:26rpx;
			color:rgba(22,30,73,1);
			.one{
				color: #161E49;
			}
			.two{
				color: #2443EA;
			}
		}
		.input-row{
			width: 74%;
			border-bottom: 2rpx solid #999999;
			margin: 0 auto;
			padding-bottom:15rpx;
			.inputimg{
				width: 22rpx;
				height: 26rpx;
			}
		}
		.action-row {
			margin-top: 255rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		  color: #39B54A;
		}
		
		.action-row navigator {
			font-size:25rpx;
			font-family:Microsoft YaHei;
			font-weight:400;
			color:rgba(153,153,153,1);
			.weiboimg{
				width: 30rpx;
				height: 24rpx;
				margin-right:10rpx;
			}
			.qqimg{
				width: 24rpx;
				height: 24rpx;
				margin-right:10rpx;
			}
		}				
		.logo {
		  width: 250upx;
		  height: 250upx;
		  margin: 50px auto 20px auto;
		}
	}
</style>

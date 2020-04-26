<template>
	<view class="passwordlogin">
		<view class="toptitle" >
			登录后更精彩
		</view>		
		<!-- <template> -->
			<view class="content">
		    <!-- <image class="logo" src="../../../static/images/logo.png"></image> -->
				<view class="input-group">
					<view class="input-row border">
						<image class="inputimg" src="../../../static/images/phone.png" mode=""></image>
						<!-- clearable -->
						<m-input class="m-input" minlength="11" maxlength="11" type="text" focus v-model="account" placeholder="输入手机号"></m-input>
					</view>
					<view class="input-row">
						<image class="inputimg" src="../../../static/images/lock.png" mode=""></image>
						<!-- displayable   眼睛-->
						<m-input type="password"  v-model="password" placeholder="输入密码"></m-input>
					</view>
				</view>
				<view class="zhuyi">
					<text class="one">登录注册代表同意</text>
					<text class="two">用户协议、隐私政策</text>
				</view>
				<view class="btn-row">
					<button id="button" v-if="notclick" class="cu-btn bg-green block lg button">同意协议并登录</button>
					<button id="button" v-else style="backgroundColor:#161E49" class="cu-btn bg-green block lg button" @tap="bindLogin">同意协议并登录</button>
				</view>
				<view class="action-row">
					<navigator url="../codeLogin/codeLogin">
						<image style="width: 30rpx;height: 24rpx;margin-right:10rpx;" src="../../../static/images/code.png" mode=""></image>
						验证码登录
					</navigator>
					<navigator url="../forgectPassword/forgectPassword">
						<image style="width: 24rpx;height: 24rpx;margin-right:10rpx;" src="../../../static/images/forgest.png" mode=""></image>
						忘记密码
					</navigator>
				</view>
			</view>
		<!-- </template>		 -->
	</view>
</template>

<script>
	// import service from '../../service.js';
	import urls from '../../../api.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		onShow() {
			// console.log(this.global_api)
			// console.log(this.url);			
		},
		data() {
			return {
				notclick:true,
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
		watch:{
			account(){				
				if(this.account.length == 11&&this.password.length >=6){
					// document.getElementsByClassName('button')[0].style.backgroundColor='#161E49'
					this.notclick=false
				}else{
					// document.getElementsByClassName('button')[0].style.backgroundColor='#ccc'
					this.notclick=true
				}
			},
			password(){
				if(this.account.length ==11&&this.password.length >=6){
					// document.getElementsByClassName('button')[0].style.backgroundColor='#161E49'
					this.notclick=false
				}else{
					// document.getElementsByClassName('button')[0].style.backgroundColor='#ccc'
					this.notclick=true
				}
			}
		},
		methods: {
			...mapMutations(['login']),
			
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!reg.test(this.account)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
					});
					return false;
				}
				
				uni.request({
				    url: this.global_api+'/api/login',
				    data: {
				      phone: this.account,
							password:this.password,
							login_type:2
				    },
				    method:'POST',
				    header: {
				      'content-type': 'application/json; charset=utf-8' //请求头信息
				    },
				    success: (res) => {
							if(res.data.status==200){
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});
								uni.setStorageSync('token',res.data.result.token);
							}else{
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});
								setTimeout(function(){
									//返回登录页
									uni.navigateTo({
										url:'../passwordLogin/passwordLogin'
									})
								},2000)							
							}						
				   }
				});
								
				if (this.account.length <11||this.account.length >11) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
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
				if(this.account.length ==11&&this.password.length >=6){
					// document.getElementsByClassName('button')[0].style.backgroundColor='#161E49'
					this.notclick=false
				}
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中				
				 */
				const data = {
					account: this.account,
					password: this.password
				};
				// const validUser = service.getUsers().some(function(user) {
				// 	return data.account === user.account && data.password === user.password;
				// });
				// if (validUser) {
				// 	console.log(this.account)
				// 	this.toMain(this.account);
					
				// } else {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '用户账号或密码不正确',
				// 	});
				// }
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
	.passwordlogin{
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
		}
				
		.logo {
		  width: 250upx;
		  height: 250upx;
		  // border-radius: 50%;
		  margin: 50px auto 20px auto;
		}
	}
</style>

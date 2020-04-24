<template>
	<view class="addresslist">
		<view class="address">
			<view class="name">
				王先生  13687653845
			</view>
			<view class="area">
				<view class="areastatus">
					北京市 海淀区 中关村南大街18号韦
					伯时代A座603北京市 海淀区 中关村南大街18号韦
					伯时代A座603
				</view>
				<view class="use" @click="touse()" v-if="ifuse">
					使用
				</view>
				<view class="use2" @click="nouse()" v-if="useok">
					<image class="useok" src="../../static/images/ok.png" mode=""></image>
				</view>
			</view>			
			<view class="btns">
				<view class="btnfir">
					<radio value=""/>
					设为默认
				</view>
				<view class="btnrig">
					<view class="dele">
						删除
					</view>
					<view class="edit">
						修改
					</view>
				</view>
			</view>
		</view>
		<view class="address">
			<view class="name">
				王先生  13687653845
			</view>
			<view class="area">
				<view class="areastatus">
					北京市 海淀区 中关村南大街18号韦
					伯时代A座603北京市 海淀区 中关村南大街18号韦
					伯时代A座603
				</view>
				<!-- <view class="use" @click="touse()" v-if="ifuse">
					使用
				</view> -->
				<view class="use2">
					<image class="useok" src="../../static/images/ok.png" mode=""></image>
				</view>
			</view>			
			<view class="btns">
				<view class="btnfir">
					<radio value="" checked/>
					设为默认
				</view>
				<view class="btnrig">
					<view class="dele">
						删除
					</view>
					<view class="edit">
						修改
					</view>
				</view>
			</view>
		</view>
		<view class="addarea" @click="addarea()">
			<image class="addicon" src="../../static/images/add.png" mode=""></image>
			添加收货地址
		</view>
		<view class="addfrime" v-if="add">
			<view class="whiteback">		
				<view class="writetop">
					<view class="toptitle">
						添加收货地址
					</view>
					<image class="closebtn" @click="closeadd()" src="../../static/images/close.png" mode=""></image>
				</view>
				<view class="writeinfo">
					<view class="infoli">
						<view class="uni-form-item uni-column">
								<view class="title">收货人</view>
								<input class="uni-input" maxlength="10" @input="receivename" placeholder="收货人姓名" />
						</view>
					</view>
					<view class="infoli">
						<view class="uni-form-item uni-column">
								<view class="title">手机号</view>
								<input class="uni-input" maxlength="11" @input="receivephone" placeholder="收货人手机号" />
						</view>
					</view>
					<view class="infoli">
						<view class="uni-form-item uni-column">
								<view class="title">选择地区</view>
								<button class="margin10px_0" type="" @tap="changeShow('QS_Picekr_city')">
									>
								</button>
								<text class="read">{{city}}</text>
								<QSpicker type="city" ref="QS_Picekr_city" mode="top" top="200px" pickerId="city_1" :dataSet="citySet" showReset @hideQSPicker="hideQSPicker($event)"
								 @showQSPicker="showQSPicker($event)" @confirm="confirm($event)" />
						</view>
					</view>
					<view class="infoli">
						<view class="uni-form-item uni-column">
								<view class="title">详细地址</view>
								<input class="uni-input" @input="receiveaddress" placeholder="如街道、门牌号、小区、乡镇、村等" />
						</view>
					</view>
				</view>
				<view class="save" @click="save()">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
	import QSpicker from '@/components/QuShe-picker/QuShe-picker.vue';
	export default {
		components: {
			QSpicker
		},
		data() {
			return {
				ifuse:true,
				useok:false,
				citySet: {
					defaultValue: [0, 0, 0]
				},
				add:false,
				name:'',
				phone:'',
				address:'',
				city:''
			};
		},
		methods:{
			receivename(e){				
				this.name = e.target.value;
			},
			receivephone(e){
				this.phone = e.target.value;
			},
			receiveaddress(e){
				this.address = e.target.value;
			},
			nouse(){
				this.useok = false;
				this.ifuse = true;
			},
			touse(){				
				this.useok = true;
				this.ifuse = false;
			},
			changeShow(name) {
				this.$refs[name].show();
			},
			showQSPicker(res) {
				console.log(`pickerId为${res.pickerId},类型为${res.type}的QS-picker显示了`);
			},
			hideQSPicker(res) {
				console.log(`pickerId为${res.pickerId},类型为${res.type}的QS-picker隐藏了了`);
			},
			confirm(res) {
				console.log(JSON.stringify(res));
				let selearea = JSON.stringify(res).data;
				this.city = JSON.parse(JSON.stringify(res)).data.label;
				
			},
			addarea(){
				this.add = true;
			},
			closeadd(){
				this.add = false;
			},
			save(){
				this.add = false;
				uni.request({
				    url: '',
				    data: {
				      name: this.name,
							phone:this.phone,
							city:this.city,
							address:this.address
				    },
				    header: {
				      'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
				      console.log(res.data);
				      this.text = 'request success';
				    }
				});
			}
		}
	}
</script>

<style lang="less">
	.addresslist{
		.uni-input-placeholder{
			color: #BABDCF;
			font-size:28rpx!important;
			font-family:PingFang SC;
			font-weight:400;
		}
		uni-button:after{
			border: 0;
		}
		.address{
			display: flex;
			flex-direction: column;
			padding: 42rpx 28rpx 23rpx 28rpx;
			.name{
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:400;
				margin-bottom: 30rpx;
				color:rgba(22,30,73,1);
				line-height:27rpx;
			}
			.area{
				display: flex;
				justify-content: space-between;
				.areastatus{
					font-size:32rpx;
					font-family:PingFang SC;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					width: 500rpx;
					font-weight:400;
					overflow: hidden;
					text-overflow: ellipsis;
					color:rgba(120,120,120,1);
				}
				.use{
					width:104rpx;
					height:47rpx;
					font-size:25rpx;
					font-family:PingFang SC;
					line-height: 47rpx;
					font-weight:400;
					text-align: center;
					color:rgba(191,194,210,1);
					border:2rpx solid rgba(186,189,207,1);
					border-radius:7rpx;
				}
				.use2{
					.useok{
						width: 34rpx;
						height: 22rpx;
					}
				}
			}
			.btns{
				display: flex;
				justify-content: space-between;
				width: 694rpx;
				padding: 40rpx  0 23rpx 0;
				border-bottom: 2rpx solid #BABDCF;
				.btnfir{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(186,189,207,1);
					line-height:13rpx;
				}
				.btnrig{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:400;
					display: flex;
					justify-content: flex-end;
					color:rgba(186,189,207,1);
					line-height:13rpx;
					.dele,.edit{
						margin-left: 55rpx;
					}
				}
			}
		}
		.addarea{
			width:556rpx;
			position: absolute;
			left:0;
			right:0;
			bottom: 22rpx;
			height:69rpx;
			text-align: center;
			line-height: 69rpx;
			background:rgba(239,16,74,1);
			margin:0 auto;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(255,255,255,1);
			border-radius:35rpx;
			.addicon{
				width: 28rpx;
				height: 28rpx;
				margin-right: 10rpx;
				position: relative;
				top:6rpx;
			}
		}
		.addfrime{
			width: 100vw;
			height: 100%;
			position: absolute;
			top: 0;
			z-index: 9;
			background: rgba(0,0,0,.7);
			.whiteback{
				width:556rpx;
				height:625rpx;
				margin:0 auto;
				position: relative;
				top: 50%;
				margin-top:-330rpx;
				padding-bottom: 34rpx;
				background:rgba(255,255,255,1);
				border-radius:14rpx;
				.writetop{
					padding-top: 28rpx;
					position: relative;
					.toptitle{
						font-size:32rpx;
						font-family:PingFang SC;	
						font-weight:400;
						text-align: center;
						color:rgba(22,30,73,1);
						line-height:31rpx;
					}
					.closebtn{
						display: inline-block;
						width: 18rpx;
						height: 18rpx;
						position: absolute;
						right: 28rpx;
						top:34rpx;
					}
				}
				.writeinfo{
					.infoli{
						padding: 32rpx 28rpx;
						border-bottom:2rpx solid #D5D5D5;
						.title{
							font-size:28rpx;
							font-family:PingFang SC;
							font-weight:400;display: inline-block;
							color:rgba(120,120,120,1);
							line-height:27rpx;
						}
						.read{
							font-size:28rpx;
							font-family:PingFang SC;
							font-weight:400;
							margin-left:-60rpx;
							color:rgba(120,120,120,1);
						}
						.margin10px_0{
							position: relative;
							top: 2rpx;
							color: #BABDCF;
							left: 67%;
							display: inline-block;
							line-height: 27rpx;
						}
						.uni-input{
							display: inline-block;
							font-size:28rpx;
							font-family:PingFang SC;
							top: 10rpx;
							left: 30rpx;
							font-weight:400;
							position: relative;
							color:rgba(186,189,207,1);    
							line-height:27rpx;
						}
					}
				}
				.save{
					width:417rpx;
					margin: 34rpx auto;
					height:69rpx;
					background:rgba(239,16,74,1);
					line-height:69rpx;
					border-radius:35rpx;
					font-size:28rpx;
					text-align: center;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(255,255,255,1);
				}
			}
		}
	}	
</style>

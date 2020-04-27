<template>
	<view class="toseleAddress">
		<radio-group @change="radioChange">
			<view class="address" v-for="(item, index) in list" :key="item.address_id">
				<view class="name">
					{{item.consignee}}  {{item.mobile}}
				</view>
				<view class="area">
					<view class="areastatus">
						{{item.province}}{{item.city}}{{item.district}}{{item.address}}
					</view>
					<!-- :class="ifuse==true?'use2':'use'" -->
					<view class="use2" @click="nouse(item,index)"  v-if="item.useok==true" >
						<image class="useok" src="../../static/images/ok.png" mode=""></image>
					</view>
					<view class="use"  @click="touse(item,index)" v-else>
						使用
					</view>				
				</view>			
				<view class="btns">
					<view class="btnfir">
							<radio :value="JSON.stringify(item.address_id)" :checked="item.is_default==1?true:false"/>
							设为默认
					</view>
					<view class="btnrig">
						<view class="dele" @click="dele(item.address_id)">
							删除
						</view>
						<view class="edit" @click="edit(item.address_id)">
							修改
						</view>
					</view>
				</view>
			</view>
		</radio-group>
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
						<view class="uni-form-item uni-column" @tap="changeShow('QS_Picekr_city')">
								<view class="title">选择地区</view>
								<button class="margin10px_0" type="">
									>
								</button>
								<text class="read">{{editcity}}</text>
								<QSpicker @showQSPicker="showQSPicker($event)" type="city" ref="QS_Picekr_city" mode="top" top="200px" pickerId="city_1" :dataSet="citySet" showReset @hideQSPicker="hideQSPicker($event)"
								 @confirm="confirm($event)" />
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
		<view class="editfrime" v-if="ifedit">
			<view class="whiteback">		
				<view class="writetop">
					<view class="toptitle">
						编辑收货地址
					</view>
					<image class="closebtn" @click="closeedit()" src="../../static/images/close.png" mode=""></image>
				</view>
				<view class="writeinfo">
					<view class="infoli">
						<view class="uni-form-item uni-column">
								<view class="title">收货人</view>
								<input class="uni-input" v-model="name" maxlength="10" @input="receivename" placeholder="收货人姓名" />
						</view>
					</view>
					<view class="infoli">
						<view class="uni-form-item uni-column">
								<view class="title">手机号</view>
								<input class="uni-input" v-model="phone" maxlength="11" @input="receivephone" placeholder="收货人手机号" />
						</view>
					</view>
					<view class="infoli">
						<view class="uni-form-item uni-column" @tap="changeShow('QS_Picekr_city')">
								<view class="title">选择地区</view>
								<button class="margin10px_0" type="">
									>
								</button>
								<text class="read">{{city}}</text>
								<!-- <text class="read">{{detailinfo.province_name}}{{detailinfo.district_name}}{{detailinfo.city_name}}</text> -->
								<QSpicker @showQSPicker="showQSPicker($event)" type="city" ref="QS_Picekr_city" mode="bottom" top="200px" pickerId="city_1" :dataSet="citySet" showReset @hideQSPicker="hideQSPicker($event)"
								 @confirm="confirm($event)" />
						</view>
					</view>
					<view class="infoli">
						<view class="uni-form-item uni-column">
								<view class="title">详细地址</view>
								<input class="uni-input" v-model="address" @input="receiveaddress" placeholder="如街道、门牌号、小区、乡镇、村等" />
						</view>
					</view>
				</view>
				<view class="save" @click="editsave()">保存</view>
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
		computed:{
			regionsName(){
				// 转为字符串
				return this.regions.map(item=>item.name).join(' ')
			}
		},
		data() {
			return {				
				regions:[],
				defaultRegions:['广东省','广州市','番禺区'],
				select:[],
				selename:'',
				defaultsele :'',//上页面穿的参数id
				is_default:'0',
				token:'',
				ifuse:true,
				useok:false,
				list:[],
				citySet: {
					defaultValue: [0, 0, 0]
				},
				add:false,
				ifedit:false,
				editid:'',
				name:'',
				phone:'',
				address:'',
				city:'',
				editcity:'北京-朝阳区-大悦城',
				detailinfo:{}
			};
		},
		onLoad(option) {
			this.defaultsele = option.addressid
			if(uni.getStorageSync('token')){
				this.token = uni.getStorageSync('token');
				this.getinfo()
			}			
		},
		methods:{
			radioChange(event){
				uni.request({
				    url: this.global_api+'/api/address/set_def',
				    data: {
				      address_id:event.detail.value
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
							if(res.data.status==200){		
								this.getinfo()
							}else{
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});					
							}						
				   }
				});							
			},
			// 获取选择的地区
			handleGetRegions(regions){
				console.log(regions)
				this.regions = regions
			},
			dele(val){
				uni.request({
				    url: this.global_api+'/api/address/del',
				    data: {
				      address_id:val
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
							if(res.data.status==200){								
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});
								this.getinfo()
							}else{
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});					
							}						
				   }
				});
			},
			edit(val){
				this.ifedit = true;
				this.editid = val;
				uni.request({
				    url: this.global_api+'/api/address/info',
				    data: {
				      address_id:val							
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
							if(res.data.status==200){								
								this.detailinfo = res.data.result;
								this.name = res.data.result.consignee;
								this.phone = res.data.result.mobile;								
								this.address = res.data.result.address;
								if(res.data.result.province){
									this.editcity = res.data.result.province
								}
								if(res.data.result.city){
									this.editcity = res.data.result.province+res.data.result.city
								}
								if(res.data.result.district){
									this.editcity = res.data.result.province+res.data.result.city+res.data.result.district
								}
							}else{
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});					
							}						
				   }
				});
			},
			addarea(){
				this.add = true;
			},
			getinfo(){
				let token = uni.getStorageSync('token');
				uni.request({
				    url: this.global_api+'/api/address/list',
				    data: {
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
							if(res.data.status==200){
								this.list = res.data.result;
								for(let i=0;i<this.list.length;i++){
									if(this.defaultsele == this.list[i].address_id){										
										this.list[i].ifuse = false;
										this.list[i].useok = true;
									}
								}
							}else{
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});					
							}						
				   }
				});
			},
			receivename(e){				
				this.name = e.target.value;
			},
			receivephone(e){
				this.phone = e.target.value;				
			},
			receiveaddress(e){
				this.address = e.target.value;
			},
			nouse(val,val2){
				for(let i=0;i<this.list.length;i++){
					if(val.address_id==this.list[i].address_id){
						this.list[i].ifuse = true;
						this.list[i].useok = false;
					}
				}
			},
			touse(val,val2){			
				for(let i=0;i<this.list.length;i++){
					if(val.address_id==this.list[i].address_id){
						this.list[i].ifuse = false;
						this.list[i].useok = true;
						uni.navigateTo({
							url:"../confirmOrder/confirmOrder?address_id="+val.address_id+"&&province="+val.province+"&&address="+val.address
						})
					}
				}
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
				let selearea = JSON.stringify(res).data;
				this.city = JSON.parse(JSON.stringify(res)).data.label;
				this.select = JSON.parse(JSON.stringify(res)).value;
				this.selename = JSON.parse(JSON.stringify(res)).data.label.split('-');
			},			
			closeadd(){
				this.add = false;
			},
			closeedit(){
				this.ifedit = false;
			},			
			editsave(){
				uni.request({
				    url: this.global_api+'/api/address/edit',
				    data: {
							consignee:this.name,
				      mobile:this.phone,
							// province:this.select[0],
							// city:this.select[1],
							// district:this.select[2],
							address:this.address,
							address_id:this.editid,
							province:this.selename[0],
							city:this.selename[1],							
							district:this.selename[2]
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
							if(res.data.status==200){								
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});
								this.ifedit = false;
								this.getinfo();
							}else{
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});					
							}						
						}
				});
			},
			save(){
				let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!reg.test(this.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
					});
					return false;
				}
				uni.request({
				    url: this.global_api+'/api/address/set_up',
				    data: {
							consignee:this.name,
				      mobile:this.phone,
							// province:this.select[0],
							// city:this.select[1],
							// district:this.select[2],
							address:this.address,
							province:this.selename[0],
							city:this.selename[1],							
							district:this.selename[2]
				    },
				    method:'POST',
				    header: {
				      'User-Token': this.token //请求头信息
				    },
				    success: (res) => {
							if(res.data.status==200){								
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});
								this.add = false;
								this.getinfo();
							}else{
								uni.showToast({
									icon: 'none',
									title: res.data.message
								});					
							}						
						}
				});
			}
		}
	}
</script>

<style lang="scss">
	.toseleAddress{
		display: none;
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
					cursor: pointer;
				}
				.use2{
					cursor: pointer;
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
			position: fixed;
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
							min-width:300rpx!important;
							height: 100%;
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
		.editfrime{
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
							min-width:300rpx!important;
							height: 100%;
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

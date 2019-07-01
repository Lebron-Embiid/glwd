<template>
	<view class="reserve_view">
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<view class="search_box">
			<common-search :isAndroid="isAndroid" :keywords="keywords" :placeholder="placeholder"></common-search>
		</view>
		<view class="mt100" :class="[isAndroid == true?'and':'']"></view>
		<image src="../../static/reserve_banner.jpg" mode="widthFix" class="reserve_banner"></image>
		<scroll-view scroll-y="true" class="reserve_box">
			<view class="reserve_title"><image src="../../static/circle.png" mode="widthFix"></image>预约体验课</view>
			<view class="reserve_city">
				<view class="rc_title">请选择城市</view>
				<view class="city_box">
					<view class="city_item" :class="[city_index == index?'active':'']" v-for="(item,index) in city_list" :key="index" @tap="selectCity(index)">{{item}}</view>
				</view>
			</view>
			<view class="reserve_item"><input type="text" placeholder="请输入姓名" placeholder-style="color: #a6a6a6;" v-model="name" :value="name" /></view>
			<view class="reserve_item"><input type="text" placeholder="请输入手机号码" placeholder-style="color: #a6a6a6;" v-model="phone" :value="phone" /></view>
			<view class="reserve_item" @tap="typeChange"><text>{{type}}</text><image src="../../static/down3.png" mode="widthFix"></image></view>
			<view class="reserve_item" @tap="schoolChange"><text>{{school}}</text><image src="../../static/down3.png" mode="widthFix"></image></view>
			<button class="reserve_now_btn" @tap="toReserve">立即预约</button>
		</scroll-view>
		<view class="ld_shadow" :class="[layerShow == true?'active':'']" @tap="hideLayer"></view>
		<view class="pay_success" :class="[reserve_ok == true?'active':'']">
			<image src="../../static/pay_ok.png" mode="widthFix"></image>
			<text>预约成功</text>
		</view>
		<view class="pay_fail" :class="[reserve_no == true?'active':'']">
			<image src="../../static/pay_no.png" mode="widthFix"></image>
			<text>选择错误</text>
		</view>
	</view>
</template>

<script>
	import commonSearch from "../../components/search.vue"
	export default{
		data(){
			return{
				placeholder: "搜索你想看的",
				keywords: "",
				name: "",
				phone: "",
				type: "请选择体验类型或舞种",
				type_list: ["无基础","有基础","少儿","成人"],
				school: "请选择校区",
				school_list: ["莲花山校区","景田校区","华强南校区","南头校区"],
				city_list: ["深圳市","广州市","惠州市","成都市"],
				city_index: "-1",
				layerShow: false,
				reserve_ok: false,
				reserve_no: false,
				isAndroid: getApp().globalData.isAndroid,
				isIpx: getApp().globalData.isIpx,
			}
		},
		methods:{
			hideLayer(){
				this.layerShow = false;
				this.reserve_ok = false;
				this.reserve_no = false;
			},
			typeChange(e){
				var that = this;
				uni.showActionSheet({
					itemList: that.type_list,
					success: function (res) {
						that.type = that.type_list[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			schoolChange(e){
				var that = this;
				uni.showActionSheet({
					itemList: that.school_list,
					success: function (res) {
						that.school = that.school_list[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			selectCity(e){
				this.city_index = e;
			},
			toReserve(e){
				var that = this;
				if(that.name == "" || that.phone == "" || that.type == "请选择体验类型或舞种" || that.school == "请选择校区" || that.city_index == "-1"){
					that.layerShow = true;
					that.reserve_no = true;
				}else{
					that.layerShow = true;
					that.reserve_ok = true;
				}
			}
		},
		components:{
			commonSearch
		},
		onLoad() {
			
		},
		onShow() {
			var that = this;
		}
	}
</script>

<style scoped lang="scss">
	.search_box{
		padding: 0 25upx;
		overflow: hidden;
		position: fixed;
		background: #fff;
		left: 0;
		top: 25px;
		width: 100%;
		z-index: 20;
		box-sizing: border-box;
	}
	.reserve_banner{
		display: block;
		width: 750upx;
		height: 300upx;
	}
	.reserve_box{
		width: 700upx;
		// height: 720upx;
		margin: 40upx auto 30upx;
		box-sizing: border-box;
		box-shadow: 0 0 20upx #F1F1F1;
		border-radius: 20upx;
		background: #fff;
		padding: 25upx 40upx;
		.reserve_title{
			color: #333;
			font-size: 32upx;
			margin-bottom: 15upx;
			font-weight: bold;
			image{
				display: inline-block;
				width: 24upx;
				height: 24upx;
				margin-right: 12upx;
				vertical-align: middle;
				margin-bottom: 3upx;
			}
		}
		.reserve_city{
			.rc_title{
				color: #a6a6a6;
				font-size: 28upx;
				margin-bottom: 15upx;
				font-weight: bold;
			}
			.city_box{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				margin-bottom: 5upx;
				.city_item{
					width: 190upx;
					height: 70upx;
					line-height: 70upx;
					margin-right: 20upx;
					text-align: center;
					color: #333;
					font-size: 24upx;
					background: #f3f3f3;
					border-radius: 10upx;
					margin-bottom: 30upx;
					&:nth-of-type(3n){
						margin-right: 0;
					}
					&.active{
						color: #fff;
						background: #fbc800;
					}
				}
			}
		}
		.reserve_item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 15upx;
			height: 80upx;
			box-sizing: border-box;
			border: 4upx solid #ededed;
			border-radius: 10upx;
			margin-bottom: 20upx;
			&:last-of-type{
				margin-bottom: 0;
			}
			text,input{
				color: #a6a6a6;
				font-size: 28upx;
			}
			input{
				display: block;
				width: 100%;
			}
			image{
				display: block;
				width: 40upx;
				height: 40upx;
			}
		}
		.reserve_now_btn{
			color: #fff;
			font-size: 32upx;
			border-radius: 50upx;
			margin-top: 40upx;
			background: linear-gradient(top,#ffe215,#fbc900);
			&:after{
				border: 0;
			}
		}
	}
</style>
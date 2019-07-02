<template>
	<view class="school_detail_view">
		<view class="sd_title">{{title}}</view>
		<image :src="src" class="sd_img" mode="widthFix"></image>
		<view class="sd_info">{{info}}</view>
		<view class="sd_dist">{{near}}</view>
		<view class="sd_fixed">
			<view class="sf_call" @tap="callPhone"><image src="../../static/phone.png" mode="widthFix"></image>电话</view>
			<view class="sf_call" @tap="toReserve"><image src="../../static/yuyue.png" mode="widthFix"></image>预约</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title: "莲花北校区",
				src: "../../static/school_banner.jpg",
				info: "深圳市福田区彩田路西、红荔路南中银花园裙楼 2号楼 L3 层05号铺",
				near: "169m",
				phone: "0755-256843"
			}
		},
		methods:{
			callPhone(){
				var that = this;
				uni.showModal({
					content: that.phone,
					confirmText: "拨打",
					confirmColor: "#fbc800",
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击拨打');
							uni.makePhoneCall({
								phoneNumber: that.phone
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			toReserve(){
				uni.reLaunch({
					url: "/pages/reserve/reserve"
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.school_detail_view{
		padding: 30upx 40upx 0;
		box-sizing: border-box;
		.sd_title{
			color: #333;
			font-size: 40upx;
			font-weight: bold;
		}
		.sd_img{
			display: block;
			width: 100%;
			height: 240upx;
			margin: 30upx 0 50upx;
			border-radius: 20upx;
		}
		.sd_info{
			color: #333;
			font-size: 30upx;
			margin-bottom: 20upx;
		}
		.sd_dist{
			color: #999;
			font-size: 24upx;
		}
		.sd_fixed{
			position: fixed;
			width: 100%;
			height: 90upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			left: 0;
			bottom: 60upx;
			.sf_call{
				background: linear-gradient(#fed027,#fdc618,#fbb801);
				border-radius: 50upx;
				width: 280upx;
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #fff;
				font-size: 32upx;
				image{
					display: inline-block;
					width: 51upx;
					height: 51upx;
					border-radius: 50%;
					margin-right: 20upx;
				}
			}
		}
	}
</style>
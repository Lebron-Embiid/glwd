<template>
	<view class="order_detail_view">
		<image src="../../static/lesson_detail_banner.jpg" class="order_banner" mode="widthFix"></image>
		<view class="order_detail">
			<view class="od_title">{{title}}</view>
			<view class="od_price">￥{{price}}</view>
			<view class="od_content">
				<view class="odc_item">姓名：{{name}}</view>
				<view class="odc_item">手机：{{phone}}</view>
				<view class="odc_item">地址：{{address}}</view>
				<view class="odc_item">下单时间：{{time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id: "",
				title: "初级拉丁舞课程",
				price: "256.00",
				name: "刘先生",
				phone: "16988886699",
				address: "广东省深圳市福田区",
				time: "2019.05.14 18:00"
			}
		},
		methods:{
			
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.order_detail_view{
		.order_banner{
			display: block;
			width: 750upx;
			height: 430upx;
		}
		.order_detail{
			width: 660upx;
			margin: -65upx auto 0;
			padding: 25upx 10upx 15upx;
			box-sizing: border-box;
			box-shadow: 0 0 20upx #EFEFEF;
			border-radius: 20upx;
			position: relative;
			z-index: 5;
			background: #fff;
			.od_title{
				color: #333;
				font-size: 28upx;
				text-align: center;
			}
			.od_price{
				color: #d3a800;
				font-size: 28upx;
				margin: 20upx 0 40upx;
				text-align: center;
			}
			.od_content{
				border-top: 1px solid #F9F9F9;
				padding: 20upx 20upx 0;
				.odc_item{
					color: #333;
					font-size: 22upx;
					margin-bottom: 20upx;
				}
			}
		}
	}
</style>
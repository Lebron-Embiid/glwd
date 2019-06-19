<template>
	<view class="account_view">
		<view class="account_box">
			<view class="account_item" v-for="(item,index) in account_list" :key="index">
				<view class="acc_left">
					<image :src="item.src" mode="widthFix"></image>
					<view class="acc_info">
						<view class="aci_title">{{item.title}}</view>
						<view class="aci_info">{{item.info}}</view>
					</view>
				</view>
				<text>X{{item.num}}</text>
			</view>
		</view>
		<view class="account_form">
			<view class="acc_form_item">
				<view class="af_left"><text>*</text>联系人</view>
				<view class="af_right"><input type="text" value="" /></view>
			</view>
			<view class="acc_form_item">
				<view class="af_left"><text>*</text>联系方式</view>
				<view class="af_right"><input type="text" value="" /></view>
			</view>
			<view class="acc_form_item">
				<view class="af_left"><text>*</text>地址</view>
				<view class="af_right"><input type="text" value="" /></view>
			</view>
		</view>
		<view class="fix_car_bottom">
			<view class="fix_car_info">
				<text>总计：￥{{all_price}}</text>
				<button @tap="toAccount">支付</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				account_list: [
					{
						id: 1,
						src: "../../static/car_img.jpg",
						title: "高级爵士舞",
						info: "3000元33节课",
						num: 1
					}
				],
				all_price: "888.88"
			}
		},
		methods:{
			
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.account_box{
		border-bottom: 10upx solid #f1f1f1;
		.account_item{
			padding: 25upx 45upx 25upx 35upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.acc_left{
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				image{
					display: block;
					width: 140upx;
					height: 140upx;
					border-radius: 5upx;
					margin-right: 40upx;
				}
				.acc_info{
					.aci_title{
						color: #333;
						font-size: 28upx;
						margin-bottom: 10upx;
					}
					.aci_info{
						color: #999;
						font-size: 24upx;
					}
				}
			}
			text{
				color: #333;
				font-size: 28upx;
			}
		}
	}
	.account_form{
		padding: 0 25upx;
		box-sizing: border-box;
		.acc_form_item{
			padding: 30upx 0;
			border-bottom: 1px solid #F4F4F4;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.af_left{
				color: #333;
				font-size: 28upx;
				text{
					color: #e83632;
				}
			}
			.af_right{
				width: 75%;
				input{
					display: block;
					width: 100%;
					color: #333;
					font-size: 28upx;
				}
			}
		}
	}
	.fix_car_bottom{
		justify-content: flex-end;
	}
</style>

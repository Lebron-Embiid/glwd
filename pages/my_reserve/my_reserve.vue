<template>
	<view class="my_reserve_view">
		<view class="my_reserve_item" v-for="(item,index) in my_reserve_list" :key="index" @tap="toReserveDetail(item.id)">
			<view class="my_res_left">
				<image :src="item.src" mode="widthFix"></image>
				<view class="my_res_info">
					<view class="mri_name">{{item.name}}<text>{{item.phone}}</text></view>
					<view class="mri_address">{{item.provice}} {{item.city}} {{item.area}}</view>
				</view>
			</view>
			<view class="my_res_time">{{item.time}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				my_reserve_list: [
					{
						id: 1,
						src: "../../static/layer_img.jpg",
						name: "陈小姐",
						phone: "16988886699",
						provice: "广东",
						city: "深圳",
						area: "福田区",
						time: "2019.05.14 11:00"
					},{
						id: 2,
						src: "../../static/layer_img.jpg",
						name: "陈小姐",
						phone: "16988886699",
						provice: "广东",
						city: "深圳",
						area: "福田区",
						time: "2019.05.14 11:00"
					}
				]
			}
		},
		methods:{
			toReserveDetail(e){
				uni.navigateTo({
					url: "/pages/reserve_detail/reserve_detail?id="+e
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.my_reserve_view{
		padding: 25upx;
		box-sizing: border-box;
		.my_reserve_item{
			padding: 30upx 30upx 20upx;
			box-sizing: border-box;
			box-shadow: 0 0 20upx #F0F0F0;
			border-radius: 10upx;
			margin-bottom: 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			.my_res_left{
				width: 70%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					display: block;
					width: 145upx;
					height: 132upx;
					margin-right: 30upx;
					border-radius: 10upx;
				}
				.my_res_info{
					width: 60%;
					.mri_name{
						color: #333;
						font-size: 28upx;
						margin-bottom: 25upx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						text{
							font-size: 24upx;
							margin-left: 5upx;
						}
					}
					.mri_address{
						color: #333;
						font-size: 24upx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
			.my_res_time{
				color: #999;
				font-size: 20upx;
			}
		}
	}
</style>
<template>
	<view class="my_order_view">
		<!-- 导航 -->
		<view class="index_nav">
			<view class="nav_box">
				<view class="nav_item" v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
			</view>
		</view>
		<view class="order_content">
			<view class="order_item" v-for="(item,index) in order_list" :key="index">
				<view class="order_top">
					<text>订单号：{{item.order_num}}</text>
					<view><image src="../../static/time2.png" mode="widthFix"></image>{{item.order_time}}</view>
				</view>
				<view class="order_center">
					<view class="oc_item" v-for="(list,idx) in item.list" :key="idx" @tap="toOrderDetail(list.idx)">
						<view class="oci_left">
							<image :src="list.src" mode="widthFix"></image>
							<view class="oci_info">
								<view class="oci_title">{{list.title}}</view>
								<view class="oci_type">规格：{{list.type}}</view>
							</view>
						</view>
						<view class="oci_price">￥{{list.price}}<text>X{{list.num}}</text></view>
					</view>
				</view>
				<view class="order_bottom">
					<block v-if="item.is_pay == 1">
						<button>取消订单</button>
						<button class="active" @tap="toPay">去支付</button>
					</block>
					<block v-if="item.is_finish == 1">
						<button class="active">已完成</button>
					</block>
					<block v-if="item.is_cancle == 1">
						<button>已取消</button>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				navbar: [{name:"全部"},{name:"待付款"},{name:"已完成"},{name:"已取消"}],
				currentTab: 0,
				order_list: [
					{
						id: 1,
						order_num: "256987412",
						order_time: "201.05.15 11:00",
						list: [
							{
								attr_id: 1,
								src: "../../static/layer_img.jpg",
								title: "初级拉丁舞课程",
								type: "3000元33节课",
								price: "256.00",
								num: "1"
							},{
								attr_id: 2,
								src: "../../static/layer_img.jpg",
								title: "初级拉丁舞课程",
								type: "3000元33节课",
								price: "256.00",
								num: "1"
							}
						],
						is_pay: 1,
						is_finish: 0,
						is_cancle: 0
					},{
						id: 2,
						order_num: "256987412",
						order_time: "201.05.15 11:00",
						list: [
							{
								attr_id: 1,
								src: "../../static/layer_img.jpg",
								title: "初级拉丁舞课程",
								type: "3000元33节课",
								price: "256.00",
								num: "1"
							}
						],
						is_pay: 0,
						is_finish: 1,
						is_cancle: 0
					},{
						id: 3,
						order_num: "256987412",
						order_time: "201.05.15 11:00",
						list: [
							{
								attr_id: 1,
								src: "../../static/layer_img.jpg",
								title: "初级拉丁舞课程",
								type: "3000元33节课",
								price: "256.00",
								num: "1"
							}
						],
						is_pay: 0,
						is_finish: 0,
						is_cancle: 1
					}
				]
			}
		},
		methods:{
			navbarTap(e){
				console.log(e)
				this.currentTab = e;
			},
			toOrderDetail(e){
				uni.navigateTo({
					url: "/pages/order_detail/order_detail?write=1&id="+e
				})
			},
			toPay(e){
				uni.navigateTo({
					url: "/pages/account/account"
				})
			}
		},
		onLoad(opt) {
			var that = this;
			that.currentTab = opt.id;
		}
	}
</script>

<style scoped lang="scss">
	.order_content{
		padding: 10upx 25upx;
		box-sizing: border-box;
		.order_item{
			background: #fff;
			box-shadow: 0 0 20upx #F2F2F2;
			border-radius: 10upx;
			margin-bottom: 20upx;
			padding: 25upx 20upx;
			box-sizing: border-box;
			.order_top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #666;
				font-size: 24upx;
				view{
					display: flex;
					align-items: center;
					color: #999;
					font-size: 20upx;
					image{
						display: inline-block;
						width: 26upx;
						height: 26upx;
						margin-right: 10upx;
					}
				}
			}
			.order_center{
				margin: 20upx 0;
				border-top: 1px solid #F7F7F7;
				border-bottom: 1px solid #F7F7F7;
				padding-top: 20upx;
				.oc_item{
					margin-bottom: 20upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.oci_left{
						width: 78%;
						display: flex;
						justify-content: flex-start;
						image{
							display: block;
							width: 145upx;
							height: 132upx;
							margin-right: 30upx;
							border-radius: 10upx;
						}
						.oci_info{
							display: flex;
							justify-content: flex-start;
							align-items: center;
							flex-wrap: wrap;
							width: 60%;
							.oci_title{
								color: #333;
								font-size: 28upx;
								margin-bottom: 25upx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.oci_type{
								color: #666;
								font-size: 24upx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}
					.oci_price{
						color: #d3a800;
						font-size: 26upx;
						text{
							color: #999;
							font-size: 20upx;
							margin-left: 5upx;
						}
					}
				}
			}
			.order_bottom{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				button{
					display: block;
					width: 140upx;
					height: 60upx;
					line-height: 60upx;
					margin: 0 0 0 25upx;
					padding: 0;
					color: #666;
					font-size: 24upx;
					background: #fff;
					border: 2upx solid #666666;
					border-radius: 10upx;
					&:after{
						border: 0;
					}
					&.active{
						color: #fbc800;
						border-color: #fbc800;
					}
				}
			}
		}
	}
</style>
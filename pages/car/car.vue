<template>
	<view class="car_view">
		<view class="car_list_box">
			<view class="car_item" v-for="(item,index) in cart_list" :key="index">
				<label class="radio" @tap="changeRadio(index)">
					<radio :value="item.value" color="#fbc800" :checked="item.current == 1"/>
				</label>
				<view class="car_info">
					<view class="ci_box">
						<image :src="item.src" class="ci_img" mode="widthFix"></image>
						<view class="c_info_box">
							<view class="cib_title">{{item.title}}</view>
							<view class="cib_info">{{item.info}}</view>
							<uni-number-box :min="0" :value="item.num" :max="99"></uni-number-box>
						</view>
					</view>
					<image src="../../static/delete1.jpg" @tap.stop="toDelCar(item.id)" class="ci_del" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="fix_car_bottom">
			<label class="radio" @tap="allRadio">
				<radio value="" color="#fbc800" :checked="isAll == 1" />全选
			</label>
			<view class="fix_car_info">
				<text>总计：￥888.88</text>
				<button @tap="toAccount">结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default{
		data(){
			return{
				cart_list: [
					{
						id: 1,
						current: 1,
						src: "../../static/car_img.jpg",
						title: "高级爵士舞",
						info: "3000元33节课",
						num: 1,
						value: "1"
					},{
						id: 2,
						current: 0,
						src: "../../static/car_img.jpg",
						title: "高级爵士舞",
						info: "3000元33节课",
						num: 2,
						value: "2"
					}
				],
				current: 0,
				isAll: 0
			}
		},
		components: {
			uniNumberBox
		},
		methods:{
			changeRadio(idx){
				var that = this;
				if(that.cart_list[idx].current == 1){
					that.cart_list[idx].current = 0;
					that.isAll = 0;
				}else{
					that.cart_list[idx].current = 1;
				}
				
				var num = 0;
				for(var i=0;i<that.cart_list.length;i++){
					if(that.cart_list[i].current == 1){
						num++
					}
				}
				
				if(num == that.cart_list.length){
					that.isAll = 1;
				}
			},
			allRadio(e){
				var that = this;
				if(that.isAll == 1){
					that.isAll = 0;
					for(let i in that.cart_list){
						that.cart_list[i].current = 0;
					}
				}else{
					that.isAll = 1;
					for(let i in that.cart_list){
						that.cart_list[i].current = 1;
					}
				}
			},
			toDelCar(e){
				uni.showModal({
					content: "确定删除该订单？",
					success: (res) => {
						if(res.confirm){
							
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			toAccount(e){
				uni.navigateTo({
					url: "/pages/account/account"
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.car_list_box{
		margin-bottom: 96upx;
		.car_item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30upx 25upx 40upx;
			box-sizing: border-box;
			border-bottom: 1px solid #F6F6F6;
			radio{
				transform: scale(.8);
				border-radius: 50%;
			}
			.car_info{
				width: 90%;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				.ci_box{
					width: 90%;
					display: flex;
					justify-content: flex-start;
					align-items: flex-start;
					.ci_img{
						display: block;
						width: 211upx;
						height: 211upx;
						border-radius: 5upx;
						margin-right: 30upx;
					}
					.cib_title{
						color: #333;
						font-size: 28upx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.cib_info{
						color: #999;
						font-size: 24upx;
						margin: 10upx 0 60upx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
				.ci_del{
					display: block;
					width: 23upx;
					height: 23upx;
				}
			}
		}
	}
</style>
<template>
	<view class="lesson_view">
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<view class="search_box">
			<common-search :isAndroid="isAndroid" :keywords="keywords" :placeholder="placeholder"></common-search>
		</view>
		<view class="mt100" :class="[isAndroid == true?'and':'']"></view>
		<!-- <view class="lesson_box">
			<view class="lesson_item" v-for="(item,index) in lesson_list" :key="item.id">
				<view class="li_img"><image :src="item.src" mode="aspectFill"></image><block v-if="item.hot == 1"><text>推荐课程</text></block></view>
				<view class="li_info"><text class="li_obj">{{item.lesson}}</text><text class="li_price">￥{{item.price}}</text></view>
			</view>
		</view> -->
		<commonLesson :list="lesson_list"></commonLesson>
		<view class="fix_car_btn" @tap="toCar">
			<view class="fcb_car"><image src="../../static/car.png" mode="widthFix"></image><text>1</text></view>
			购物车
		</view>
	</view>
</template>

<script>
	import commonSearch from "../../components/search.vue"
	import commonLesson from "../../components/lesson.vue"
	export default{
		data(){
			return{
				isAndroid: getApp().globalData.isAndroid,
				isIpx: getApp().globalData.isIpx,
				placeholder: "搜索你想看的",
				keywords: "",
				lesson_list: [
					{
						id: 1,
						src: "/static/lesson_img1.jpg",
						lesson: "初级拉丁舞课程",
						price: "256.00",
						hot: 1
					},{
						id: 2,
						src: "/static/lesson_img1.jpg",
						lesson: "爵士舞课程",
						price: "256.00",
						hot: 0
					},{
						id: 3,
						src: "/static/lesson_img1.jpg",
						lesson: "爵士舞课程",
						price: "256.00",
						hot: 0
					}
				]
			}
		},
		components:{
			commonSearch,
			commonLesson
		},
		methods:{
			toCar(){
				uni.navigateTo({
					url: "/pages/car/car"
				})
			}
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
	.lesson_view{
		padding: 0 25upx;
	}
</style>
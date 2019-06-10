<template>
	<view class="lesson_view">
		<commonSearch :keywords="keywords"></commonSearch>
		<!-- <view class="lesson_box">
			<view class="lesson_item" v-for="(item,index) in lesson_list" :key="item.id">
				<view class="li_img"><image :src="item.src" mode="aspectFill"></image><block v-if="item.hot == 1"><text>推荐课程</text></block></view>
				<view class="li_info"><text class="li_obj">{{item.lesson}}</text><text class="li_price">￥{{item.price}}</text></view>
			</view>
		</view> -->
		<commonLesson :list="lesson_list"></commonLesson>
	</view>
</template>

<script>
	import commonSearch from "../../components/search.vue"
	import commonLesson from "../../components/lesson.vue"
	export default{
		data(){
			return{
				keywords: "",
				lesson_list: [
					{
						id: 1,
						src: "../../static/lesson_img1.jpg",
						lesson: "初级拉丁舞课程",
						price: "256.00",
						hot: 1
					},{
						id: 2,
						src: "../../static/lesson_img2.jpg",
						lesson: "爵士舞课程",
						price: "256.00",
						hot: 0
					},{
						id: 3,
						src: "../../static/lesson_img3.jpg",
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
			
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.lesson_view{
		padding: 0 25upx;
	}
</style>
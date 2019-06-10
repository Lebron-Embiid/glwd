<template>
	<view class="lesson_box">
		<view class="lesson_item" v-for="(item,index) in list" :key="item.id" @tap="toLessonDetail(item.id)">
			<view class="li_img"><image :src="item.src" mode="aspectFill"></image><block v-if="item.hot == 1"><text>推荐课程</text></block></view>
			<view class="li_info"><text class="li_obj">{{item.lesson}}</text><text class="li_price">￥{{item.price}}</text></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			list: Array
		},
		methods:{
			toLessonDetail(e){
				uni.navigateTo({
					url: "/pages/lesson_detail/lesson_detail?id="+e
				})
			}
		}
	}
</script>

<style>
</style>

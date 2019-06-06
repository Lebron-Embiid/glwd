<template>
	<view class="lesson_view">
		<commonSearch :keywords="keywords"></commonSearch>
		<view class="lesson_box">
			<view class="lesson_item" v-for="(item,index) in lesson_list" :key="item.id">
				<view class="li_img"><image :src="item.src" mode="aspectFill"></image><block v-if="item.hot == 1"><text>推荐课程</text></block></view>
				<view class="li_info"><text class="li_obj">{{item.lesson}}</text><text class="li_price">￥{{item.price}}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonSearch from "../../components/search.vue"
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
			commonSearch
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
		.lesson_box{
			overflow: hidden;
			.lesson_item{
				margin-bottom: 30upx;
				.li_img{
					border-radius: 5upx;
					margin-bottom: 15upx;
					position: relative;
					image{
						display: block;
						width: 100%;
						max-height: 400upx;
					}
					text{
						display: inline-block;
						color: #fff;
						font-size: 20upx;
						background: #fbc800;
						border-radius: 5upx;
						padding: 4upx 10upx 7upx;
						position: absolute;
						right: 20upx;
						top: 20upx;
					}
				}
				.li_info{
					color: #333;
					font-size: 26upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 25upx 0 10upx;
					box-sizing: border-box;
					.li_price{
						color: #d3a800;
						font-size: 22upx;
					}
				}
			}
		}
	}
</style>
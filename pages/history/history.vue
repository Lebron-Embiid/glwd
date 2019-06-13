<template>
	<view class="history_view">
		<view class="history_item" v-for="(item,index) in history_list" :key="index">
			<image :src="item.src" mode="widthFix"></image>
			<view class="history_info">
				<view class="history_title">{{item.title}}</view>
				<view class="history_time">{{item.time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				history_list: [
					{
						id: 1,
						src: "../../static/layer_img.jpg",
						title: "拉丁舞视频",
						time: "2019.05.14"
					}
				]
			}
		},
		methods:{
			
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.history_view{
		padding: 25upx;
		box-sizing: border-box;
		.history_item{
			display: flex;
			justify-content: flex-start;
			align-items: stretch;
			margin-bottom: 20upx;
			image{
				display: block;
				width: 130upx;
				height: 130upx;
				border-radius: 10upx;
				margin-right: 30upx;
			}
			.history_info{
				width: 70%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				.history_title{
					width: 100%;
					color: #333;
					font-size: 32upx;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-wrap: break-word;
					word-break: break-all;
				}
				.history_time{
					width: 100%;
					color: #999;
					font-size: 24upx;
				}
			}
		}
	}
</style>
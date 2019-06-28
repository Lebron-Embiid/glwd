<template>
	<view class="series_view">
		<view class="series_item" v-for="(item,index) in series_list" :key="item.id">
			<text>{{index+1}}</text>
			<view class="series_content" @tap="toSeriesDetail(item.id)">
				<view class="sc_img">
					<image :src="item.src" mode="widthFix"></image>
					<view class="sc_word">
						<view class="sc_title">{{item.title}}</view>
						<view class="sc_person">{{item.person}}</view>
					</view>
				</view>
				<image src="../../static/play.png" class="sc_play" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				series_list: [
					{
						id: 1,
						src: "../../static/series_img1.jpg",
						title: "芭蕾舞",
						person: "港龙12届成员吴小姐"
					},{
						id: 2,
						src: "../../static/series_img1.jpg",
						title: "芭蕾舞",
						person: "港龙12届成员吴小姐"
					},{
						id: 3,
						src: "../../static/series_img1.jpg",
						title: "芭蕾舞",
						person: "港龙12届成员吴小姐"
					}
				]
			}
		},
		methods:{
			toSeriesDetail(e){
				uni.navigateTo({
					url: "/pages/video_detail/video_detail?id="+e
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.series_view{
		padding: 10upx 0 0 25upx;
		box-sizing: border-box;
		.series_item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			text{
				color: #000;
				font-size: 32upx;
			}
			.series_content{
				width: 90%;
				padding: 30upx 80upx 20upx 0;
				box-sizing: border-box;
				border-bottom: 1px solid #F0F0F0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.sc_img{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					image{
						display: block;
						width: 100upx;
						height: 100upx;
						border-radius: 10upx;
						margin-right: 20upx;
					}
					.sc_title{
						color: #000;
						font-size: 30upx;
						margin-bottom: 5upx;
					}
					.sc_person{
						color: #999;
						font-size: 24upx;
					}
				}
				.sc_play{
					display: block;
					width: 40upx;
					height: 28upx;
				}
			}
		}
	}
</style>
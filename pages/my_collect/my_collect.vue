<template>
	<view class="my_collect_view">
		<!-- 导航 -->
		<view class="index_nav">
			<view class="nav_box">
				<view class="nav_item" v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
			</view>
		</view>
		<view class="collect_content">
			<!-- 视频收藏 -->
			<view class="video_collect" v-show="currentTab == 0">
				<view class="v_collect_item" v-for="(item,index) in video_collect_list" :key="item.id">
					<image :src="item.src" class="v_collect_img" mode="widthFix"></image>
					<view class="v_collect_title">{{item.title}}<image src="../../static/delete.png" mode="widthFix"></image></view>
				</view>
			</view>
			<!-- 音频收藏 -->
			<view class="audio_collect" v-show="currentTab == 1">
				<view class="v_audio_item">
					<view class="v_audio_left">
						<image src="../../static/poster.jpg" mode="widthFix"></image>
						<view class="v_audio_box">
							<view class="vab_title">来自天堂的魔鬼</view>
							<view class="vab_person">G.E.M.邓紫棋</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 课程收藏 -->
			<view class="lesson_collect" v-show="currentTab == 2">
				
			</view>
			<!-- 资讯收藏 -->
			<view class="news_collect" v-show="currentTab == 3">
				
			</view>
		</view>
		<view class="fixed_del_box">
			<view class="fixed_del" @tap="allDelete(currentTab)"><image src="../../static/delete.png" mode="widthFix"></image>全部删除</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				navbar: [{name:"视频"},{name:"音频"},{name:"课程"},{name:"资讯"}],
				currentTab: 0,
				video_collect_list: [
					{
						id: 1,
						src: "../../static/layer_img.jpg",
						title: "初级拉丁舞"
					},{
						id: 2,
						src: "../../static/layer_img.jpg",
						title: "初级拉丁舞"
					},{
						id: 3,
						src: "../../static/layer_img.jpg",
						title: "初级拉丁舞"
					},{
						id: 4,
						src: "../../static/layer_img.jpg",
						title: "初级拉丁舞"
					}
				]
			}
		},
		methods:{
			navbarTap(e){
				console.log(e)
				this.currentTab = e;
			},
			allDelete(e){
				uni.showModal({
					content: "确定删除全部？",
					confirmColor: "#fbc800",
					success: (res) => {
						if(res.confirm){
							// 视频
							if(e==0){
								
							}
							// 音频
							if(e==1){
								
							}
							// 课程
							if(e==2){
								
							}
							// 资讯
							if(e==3){
								
							}
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.collect_content{
		padding: 25upx;
		box-sizing: border-box;
		margin-bottom: 100upx;
		.video_collect{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;
			.v_collect_item{
				width: 48%;
				.v_collect_img{
					display: block;
					width: 330upx;
					height: 330upx;
					border-radius: 20upx;
				}
				.v_collect_title{
					color: #333;
					font-size: 28upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 15upx 0 25upx;
					padding-left: 10upx;
					box-sizing: border-box;
					image{
						display: block;
						width: 34upx;
						height: 34upx;
					}
				}
			}
		}
		.audio_collect{
			
		}
	}
	.fixed_del_box{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		z-index: 10;
		border-top: 1px solid #EBEBEB;
		.fixed_del{
			color: #333;
			font-size: 28upx;
			height: 100upx;
			padding: 25upx;
			box-sizing: border-box;
			display: inline-flex;
			align-items: center;
			image{
				display: inline-block;
				vertical-align: middle;
				width: 34upx;
				height: 34upx;
				margin-right: 10upx;
			}
		}
	}
</style>
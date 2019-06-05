<template>
	<view class="index_view">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<!-- #endif -->
		<view class="search_box">
			<commonSearch :keywords="keywords"></commonSearch>
		</view>
		<!-- 导航 -->
		<view class="index_nav">
			<view class="nav_box">
				<view class="nav_item" v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
			</view>
			<scroll-view class="index_scroll_box" scroll-x="true" @scroll="scroll">
				<view :class="[typeDef==index ? 'active' : '']" v-for="(item,index) in navtype[currentTab]" :key="index" @click="navTypeTap(index)">{{item.name}}</view>
			</scroll-view>
		</view>
		<!-- 导航内容 -->
		<!-- 视频 -->
		<view class="nav_content">
			<view class="video_box" v-show="currentTab == 0">
				<view class="video_item" v-for="(item,index) in video_list" :key="item.id">
					<view class="vi_img" @tap="toVideoDetail(item.id)">
						<image :src="item.poster" class="vi_poster" mode="widthFix"></image>
						<view class="vi_layer">
							<block v-if="item.top == 1">
								<view class="vi_top"><image src="../../static/top.png" mode="widthFix"></image>置顶</view>
							</block>
							<block v-if="item.collect == 1">
								<view class="vi_collect"><text>合集</text></view>
							</block>
							<view class="vi_title">{{item.title}}</view>
							<image src="../../static/play_btn2.png" mode="widthFix" class="vi_play"></image>
							<view class="vi_info">
								<image src="../../static/look.png" class="vi_icon1" mode="widthFix"></image>{{item.num}}
								<image src="../../static/time.png" class="vi_icon2" mode="widthFix"></image>{{item.time}}
							</view>
						</view>
					</view>
					<view class="vi_share">
						<view class="vs_item" @tap="toVideoDetail(item.id)"><image src="../../static/detail_icon1.png" mode="widthFix"></image>详情</view>
						<view class="vs_item"><image src="../../static/detail_icon2.png" mode="widthFix"></image>收藏</view>
						<view class="vs_item"><image src="../../static/detail_icon3.png" mode="widthFix"></image>朋友圈</view>
						<view class="vs_item"><image src="../../static/detail_icon4.png" mode="widthFix"></image>微信</view>
					</view>
				</view>
			</view>
			<!-- 音频 -->
			<view class="audio_box" v-show="currentTab == 1">
				
			</view>
			<!-- 课程 -->
			<view class="lesson_box" v-show="currentTab == 2">
				
			</view>
			<!-- 资讯 -->
			<view class="news_box" v-show="currentTab == 3">
				
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
				navbar: [{name:"视频"},{name:"音频"},{name:"课程"},{name:"资讯"}],
				navtype: [
					[{name:"全部"},{name:"摇滚"},{name:"流行"},{name:"民谣"},{name:"古风"},{name:"伤感"},{name:"经典"}]
				],
				currentTab: 0,
				typeDef: 0,
				video_list: [
					{
						id: 1,
						title: "breaking街舞男孩,带你领略街舞的魅力",
						poster: "../../static/video_img1.jpg",
						num: "2598",
						time: "10:58",
						top: 1,
						collect: 0
					},
					{
						id: 2,
						title: "带你走进芭蕾舞的世界",
						poster: "../../static/video_img2.jpg",
						num: "2598",
						time: "10:58",
						top: 0,
						collect: 1
					}
				]
			}
		},
		components:{
			commonSearch
		},
		methods:{
			navbarTap(e){
				console.log(e)
				this.currentTab = e;
			},
			navTypeTap(e){
				console.log(e)
				this.typeDef = e;
			},
			toVideoDetail(e){
				uni.navigateTo({
					url: "/pages/video_detail/video_detail?id="+e
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.index_view{
		.search_box,.nav_content{
			padding: 0 25upx;
		}
		.index_nav{
			margin-bottom: 15upx;
			.nav_box{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 25upx;
				.nav_item{
					width: 25%;
					text-align: center;
					color: #999;
					font-size: 30upx;
					padding: 8upx 0;
					position: relative;
					&.active{
						color: #fbc800;
					}
					&.active:after{
						content: "";
						width: 40upx;
						height: 4upx;
						background: #fbc800;
						position: absolute;
						left: 50%;
						transform: translateX(-50%);
						bottom: 0;
						border-radius: 5upx;
					}
				}	
			}
			.index_scroll_box{
				white-space: nowrap;
				overflow-x: scroll;
				padding: 0 25upx;
				box-sizing: border-box;
				background: #f5f5f5;
				view{
					display: inline-block;
					height: 60upx;
					line-height: 60upx;
					padding: 0 25upx;
					color: #bebebe;
					font-size: 24upx;
					&.active{
						color: #333;
						font-size: 26upx;
					}
				}
			}
		}
		.video_box{
			.video_item{
				margin-bottom: 50upx;
				.vi_img{
					position: relative;
					.vi_poster{
						display: block;
						width: 100%;
						max-height: 500upx;
						border-radius: 20upx;
					}
					.vi_layer{
						position: absolute;
						width: 100%;
						height: 100%;
						background: rgba(0,0,0,.5);
						left: 0;
						top: 0;
						border-radius: 20upx;
						padding: 15upx 20upx;
						box-sizing: border-box;
						color: #fff;
						font-size: 32upx;
						.vi_top{
							display: flex;
							justify-content: flex-end;
							align-items: center;
							color: #fbc800;
							font-size: 18upx;
							image{
								display: inline-block;
								width: 14upx;
								height: 15upx;
								margin-right: 10upx;
							}
						}
						.vi_collect{
							text-align: right;
							text{
								display: inline-block;
								color: #fff;
								font-size: 18upx;
								background: #fbc800;
								padding: 5upx 15upx 8upx;
								border-radius: 5upx;
							}
						}
						.vi_title{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.vi_play{
							display: block;
							width: 49upx;
							height: 72upx;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%,-50%);
						}
						.vi_info{
							position: absolute;
							left: 20upx;
							bottom: 15upx;
							display: flex;
							align-items: center;
							justify-content: flex-start;
							font-size: 18upx;
							.vi_icon1{
								display: inline-block;
								max-width: 25upx;
								max-height: 18upx;
								margin: 0 5upx 0 0;
							}
							.vi_icon2{
								display: inline-block;
								width: 22upx;
								height: 22upx;
								margin: 0 5upx 0 15upx;
							}
						}
					}
				}
			}
		}
	}
</style>

<template>
	<view class="index_view">
		<view class="status_bar">  
			<!-- <view class="ipxHeight" v-if="isIpx == true"></view> -->
			<view class="top_view" :class="[isIpx == true?'ipx':'']"></view>  
		</view>  
		<view class="index_top_nav_box" :class="[isIpx == true?'ipx':'']">
			<view class="search_box">
				<common-search :isAndroid="isAndroid" :isIpx="isIpx" :keywords="keywords" :placeholder="placeholder"></common-search>
			</view>
			<!-- 导航 -->
			<view class="index_nav">
				<view class="nav_box">
					<view class="nav_item" v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
				</view>
				<view class="index_scroll_box" @scroll="scroll">
					<view :class="[typeDef==index ? 'active' : '']" v-for="(item,index) in navtype[currentTab]" :key="index" @click="navTypeTap(index)">{{item.name}}</view>
				</view>
			</view>
		</view>
		<!-- 导航内容 -->
		<!-- 视频 -->
		<view class="nav_content">
			<view class="video_box" v-if="currentTab == 0">
				<view class="height230" :class="[isAndroid == true?'and':'' || isIpx == true?'ipx':'']"></view>
				<view class="video_item" v-for="(item,index) in video_list" :key="item.id">
					<view class="vi_img" @tap="toVideoDetail(item.id,item.collect)">
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
						<view class="vs_item" @tap="toCollect(item.id)"><image src="../../static/detail_icon3.png" mode="widthFix"></image>收藏</view>
						<view class="vs_item" @tap="shareWxTimeline"><image src="../../static/detail_icon2.png" mode="widthFix"></image>朋友圈</view>
						<view class="vs_item" @tap="shareWxSession"><image src="../../static/detail_icon4.png" mode="widthFix"></image>微信</view>
					</view>
				</view>
			</view>
			<!-- 音频 -->
			<view class="audio_box" v-if="currentTab == 1">
				<view class="height200" :class="[isAndroid == true?'and':'' || isIpx == true?'ipx':'']"></view>
				<view class="audio_list_box">
					<view class="audio_item" v-for="(item,index) in audio_list" :key="item.id" @tap="toAudioDetail(item.id)"><image :src="item.src" mode="widthFix"></image><text>{{item.title}}</text></view>
				</view>
			</view>
			<!-- 课程 -->
			<view class="lesson_box" v-if="currentTab == 2">
				<view class="height200" :class="[isAndroid == true?'and':'' || isIpx == true?'ipx':'']"></view>
				<commonLesson :list="lesson_list"></commonLesson>
				<view class="fix_car_btn" @tap="toCar">
					<view class="fcb_car"><image src="../../static/car.png" mode="widthFix"></image><text>1</text></view>
					购物车
				</view>
			</view>
			<!-- 资讯 -->
			<view class="news_box" v-if="currentTab == 3">
				<view class="height200" :class="[isAndroid == true?'and':'' || isIpx == true?'ipx':'']"></view>
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="rgba(102,102,102,.5)" indicator-active-color="#666" circular="true">
					<swiper-item v-for="(item,index) in swiper_list" :key="index">
						<view class="swiper-item"><image :src="item" mode="widthFix"></image></view>
					</swiper-item>
				</swiper>
				<view class="news_list_box">
					<view class="news_item" v-for="(item,index) in news_list" :key="item.id" @tap="toNewsDetail(item.id)">
						<view class="ni_left">
							<view class="nl_title">{{item.title}}</view>
							<view class="nl_time">{{item.time}}</view>
							<view class="nl_num"><image src="../../static/eye.jpg" mode="widthFix"></image>{{item.num}}</view>
						</view>
						<view class="ni_right">
							<image :src="item.src" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
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
						poster: "../../static/video_img1.jpg",
						num: "2598",
						time: "10:58",
						top: 0,
						collect: 1
					}
				],
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 800,
				swiper_list: ["../../static/news_banner.jpg","../../static/news_banner.jpg","../../static/news_banner.jpg"],
				news_list: [
					{
						id: 1,
						title: "跳舞让一个女孩光芒万丈的出现在舞台",
						time: "2019.05.10 16:00",
						num: "2598",
						src: "../../static/news_img1.jpg"
					},{
						id: 2,
						title: "翩翩舞不停,2019国际舞蹈日“共享舞蹈多元之美”",
						time: "2019.05.10 16:00",
						num: "2598",
						src: "../../static/news_img1.jpg"
					}
				],
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
				],
				audio_list: [
					{
						id: 1,
						title: "摇滚",
						src: "../../static/audio_img1.jpg"
					},
					{
						id: 2,
						title: "古典",
						src: "../../static/audio_img1.jpg"
					},
					{
						id: 3,
						title: "轻音乐",
						src: "../../static/audio_img1.jpg"
					},
					{
						id: 4,
						title: "韩风",
						src: "../../static/audio_img1.jpg"
					},
					{
						id: 5,
						title: "最新",
						src: "../../static/audio_img1.jpg"
					}
				]
			}
		},
		components:{
			commonSearch,
			commonLesson
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
			toVideoDetail(e,collect){
				if(collect != 1){
					uni.navigateTo({
						url: "/pages/video_detail/video_detail?id="+e
					})
				}else{
					uni.navigateTo({
						url: "/pages/series/series"
					})
				}
			},
			toNewsDetail(e){
				uni.navigateTo({
					url: "/pages/news_detail/news_detail?id="+e
				})
			},
			toAudioDetail(e){
				uni.navigateTo({
					url: "/pages/audio_detail/audio_detail?type="+e
				})				
			},
			toCar(){
				uni.navigateTo({
					url: "/pages/car/car"
				})
			},
			toCollect(e){
				
			},
			// 分享到微信好友
			shareWxSession(e){
				var that = this;
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			// 分享到微信朋友圈
			shareWxTimeline(e){
				var that = this;
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		},
		onShow() {
			var that = this;
			console.log(that.isAndroid)
		}
	}
</script>

<style scoped lang="scss">
	.index_view{
		.search_box,.nav_content{
			padding: 0 25upx;
			box-sizing: border-box;
			overflow: hidden;
		}
		// .nav_content{
		// 	height: 70vh;
		// }
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
								width: 70upx;
								height: 40upx;
								line-height: 40upx;
								text-align: center;
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
	// 资讯
	.news_box{
		overflow: hidden;
	}
	.swiper{
		height: 260upx;
		border-radius: 10upx;
		margin-bottom: 10upx;
	}
	.swiper .swiper-item image{
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}
	.news_list_box{
		padding: 40upx 30upx;
		box-sizing: border-box;
		.news_item{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			margin-bottom: 40upx;
			.ni_left{
				width: 420upx;
				.nl_title{
					color: #333;
					font-size: 28upx;
					margin-top: 5upx;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-wrap: break-word;
					word-break: break-all;
				}
				.nl_time{
					color: #999;
					font-size: 20upx;
					margin: 10upx 0 20upx;
				}
				.nl_num{
					color: #d3a800;
					font-size: 20upx;
					display: flex;
					align-items: center;
					image{
						display: inline-block;
						width: 29upx;
						height: 20upx;
						margin-right: 10upx;
					}
				}
			}
			.ni_right{
				width: 210upx;
				display: flex;
				justify-content: flex-end;
				image{
					display: block;
					width: 202upx;
					height: 168upx;
				}
			}
		}
	}
	// 音频
	.audio_list_box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		// padding: 20 5upx;
		padding: 0 5upx;
		box-sizing: border-box;
		.audio_item{
			display: block;
			width: 49%;
			max-height: 140upx;
			position: relative;
			margin-bottom: 20upx;
			border-radius: 15upx;
			overflow: hidden;
			image{
				display: block;
				width: 100%;
				height: 100%;
			}
			text{
				position: absolute;
				left: 20upx;
				top: 15upx;
				color: #fff;
				font-size: 26upx;
			}
		}
	}
</style>

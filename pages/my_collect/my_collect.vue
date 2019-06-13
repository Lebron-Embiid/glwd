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
			<view class="video_collect" v-if="currentTab == 0">
				<view class="v_collect_item" v-for="(item,index) in video_collect_list" :key="item.id" @tap="toVideoDetail(item.id)">
					<image :src="item.src" class="v_collect_img" mode="widthFix"></image>
					<view class="v_collect_title"><text>{{item.title}}</text><image src="../../static/delete.png" mode="widthFix" @tap.stop="toDel(item.id)"></image></view>
				</view>
			</view>
			<!-- 音频收藏 -->
			<view class="audio_collect" v-if="currentTab == 1">
				<view class="v_audio_item" v-for="(item,index) in audio_collect_list" :key="item.id" @tap="toAudioDetail(index,item.id)">
					<view class="v_audio_left">
						<image :src="item.poster" mode="widthFix"></image>
						<view class="v_audio_box">
							<view class="vab_title">{{item.title}}</view>
							<view class="vab_person">{{item.person}}·{{item.info}}</view>
						</view>
					</view>
					<view class="v_audio_right">
						<image src="../../static/play.png" mode="widthFix" class="var_play"></image>
						<image src="../../static/delete.png" mode="widthFix" class="var_del" @tap.stop="toDel(item.id)"></image>
					</view>
				</view>
			</view>
			<!-- 课程收藏 -->
			<view class="lesson_collect" v-if="currentTab == 2">
				<view class="lesson_item" v-for="(item,index) in lesson_collect_list" :key="item.id" @tap="toLessonDetail(item.id)">
					<view class="lesson_left">
						<image :src="item.src" mode="widthFix"></image>
						<block v-if="item.is_show == true">
							<text>推荐课程</text>
						</block>
					</view>
					<view class="lesson_right">
						<view class="lesson_right_info">
							<view class="lri_title">{{item.title}}</view>
							<view class="lri_info">规格：{{item.type}}</view>
							<view class="lri_price">￥{{item.price}}</view>
						</view>
						<image src="../../static/delete.png" mode="widthFix" @tap.stop="toDel(item.id)"></image>
					</view>
				</view>
			</view>
			<!-- 资讯收藏 -->
			<view class="news_collect" v-if="currentTab == 3">
				<view class="news_item" v-for="(item,index) in news_collect_list" :key="item.id" @tap="toNewsDetail(item.id)">
					<image :src="item.src" mode="widthFix" class="news_img"></image>
					<view class="news_info_center">
						<view class="nic_title">{{item.title}}</view>
						<view class="nic_time">{{item.time}}</view>
						<view class="nic_look"><image src="../../static/eye.jpg" mode="widthFix"></image>{{item.look}}</view>
					</view>
					<image src="../../static/delete.png" mode="widthFix" class="news_del" @tap.stop="toDel(item.id)"></image>
				</view>
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
				],
				audio_collect_list: [
					{
						id: 1,
						poster: "../../static/poster.jpg",
						title: "来自天堂的魔鬼",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						src: "http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3",
						iscollect: true,
						isplaying: false
					},{
						id: 2,
						poster: "../../static/poster.jpg",
						title: "于是",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						src: "http://www.170mv.com/kw/other.web.rg01.sycdn.kuwo.cn/resource/n2/46/52/3021082115.mp3",
						iscollect: true,
						isplaying: false
					}
				],
				lesson_collect_list: [
					{
						id: 1,
						src: "../../static/layer_img.jpg",
						is_show: true,
						title: "爵士舞",
						type: "3000元3节课",
						price: "888.88"
					},{
						id: 2,
						src: "../../static/layer_img.jpg",
						is_show: false,
						title: "爵士舞",
						type: "3000元3节课",
						price: "888.88"
					}
				],
				news_collect_list: [
					{
						id: 1,
						src: "../../static/news_img1.jpg",
						title: "跳舞让一个女孩光芒万丈的出现在舞台",
						time: "2019.05.10 16:00",
						look: "2598"
					},{
						id: 2,
						src: "../../static/news_img2.jpg",
						title: "跳舞让一个女孩光芒万丈的出现在舞台",
						time: "2019.05.10 16:00",
						look: "2598"
					}
				]
			}
		},
		methods:{
			navbarTap(e){
				console.log(e)
				this.currentTab = e;
			},
			toDel(e){
				var that = this;
				uni.showModal({
					content: "确定删除？",
					confirmColor: "#fbc800",
					success: (res) => {
						if(res.confirm){
							// 视频
							if(that.currentTab==0){
								
							}
							// 音频
							if(that.currentTab==1){
								
							}
							// 课程
							if(that.currentTab==2){
								
							}
							// 资讯
							if(that.currentTab==3){
								
							}
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
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
			},
			toVideoDetail(e){
				uni.navigateTo({
					url: "/pages/video_detail/video_detail?id="+e
				})
			},
			toAudioDetail(e){
				uni.navigateTo({
					url: "/pages/audio_detail/audio_detail?id="+e
				})				
			},
			toLessonDetail(e){
				uni.navigateTo({
					url: "/pages/lesson_detail/lesson_detail?id="+e
				})				
			},
			toNewsDetail(e){
				uni.navigateTo({
					url: "/pages/news_detail/news_detail?id="+e
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
					text{
						display: block;
						width: 80%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					image{
						display: block;
						width: 34upx;
						height: 34upx;
					}
				}
			}
		}
		.audio_collect{
			.v_audio_item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 30upx;
				// padding: 15upx 0;
				// border-bottom: 1px solid #eee;
				// &:last-of-type{
				// 	border-bottom: 0;
				// }
				.v_audio_left{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					width: 70%;
					image{
						display: block;
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
						margin-right: 10upx;
					}
					.v_audio_box{
						width: 80%;
						padding: 5upx 0;
						.vab_title{
							color: #000;
							font-size: 30upx;
							margin-bottom: 5upx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.vab_person{
							color: #999;
							font-size: 24upx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
				.v_audio_right{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.var_play{
						display: block;
						width: 40upx;
						height: 28upx;
						margin-right: 30upx;
					}
					.var_del{
						display: block;
						width: 34upx;
						height: 34upx;
						margin-right: 30upx;
					}
				}
			}
		}
		.lesson_collect{
			.lesson_item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 40upx;
				.lesson_left{
					width: 220upx;
					height: 220upx;
					margin-right: 40upx;
					border-radius: 10upx;
					position: relative;
					image{
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 10upx;
					}
					text{
						display: inline-block;
						height: 36upx;
						line-height: 36upx;
						padding: 0 8upx;
						position: absolute;
						right: 10upx;
						top: 10upx;
						z-index: 3;
						color: #fff;
						font-size: 20upx;
						background: #fbc800;
						border-radius: 5upx;
						text-align: center;
					}
				}
				.lesson_right{
					width: 63%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-right: 20upx;
					box-sizing: border-box;
					.lesson_right_info{
						width: 85%;
						padding: 15upx 0;
						.lri_title{
							color: #333;
							font-size: 28upx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.lri_info{
							color: #999;
							font-size: 24upx;
							margin: 10upx 0 80upx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.lri_price{
							color: #d3a800;
							font-size: 30upx;
						}
					}
					image{
						display: block;
						width: 34upx;
						height: 34upx;
					}
				}
			}
		}
		.news_collect{
			.news_item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 40upx;
				.news_img{
					display: block;
					width: 202upx;
					height: 168upx;
					margin-right: 20upx;
					border-radius: 20upx;
				}
				.news_info_center{
					width: 55%;
					.nic_title{
						color: #333;
						font-size: 28upx;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						word-wrap: break-word;
						word-break: break-all;
					}
					.nic_time{
						color: #999;
						font-size: 20upx;
						margin: 10upx 0 15upx;
					}
					.nic_look{
						display: flex;
						align-items: center;
						color: #d3a800;
						font-size: 20upx;
						image{
							display: inline-block;
							width: 29upx;
							height: 20upx;
							margin-right: 8upx;
						}
					}
				}
				.news_del{
					display: block;
					width: 34upx;
					height: 34upx;
					margin: 0 20upx 0 30upx;
				}
			}
		}
	}
	.fixed_del_box{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		background: #fff;
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
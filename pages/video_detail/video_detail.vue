<template>
	<view class="video_detail_view">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<!-- #endif -->
		<video id="myVideo" :src="url" controls direction="-90" :poster="poster"></video>
		<!-- 视频详情信息 -->
		<view class="video_detail">
			<view class="vd_title">{{title}}</view>
			<view class="vd_info">{{info}}</view>
			<view class="vd_status">{{num}}人观看<text>{{time}}</text></view>
			<view class="vd_bottom">
				<view class="vd_share">
					<view class="vs_item"><image src="../../static/detail_icon2.png" mode="widthFix"></image>收藏</view>
					<view class="vs_item"><image src="../../static/detail_icon3.png" mode="widthFix"></image>朋友圈</view>
					<view class="vs_item"><image src="../../static/detail_icon4.png" mode="widthFix"></image>微信</view>
				</view>
				<button>免费预约</button>
			</view>
		</view>
		<!-- 相关推荐 -->
		<view class="recommend_box">
			<view class="recommend_title">相关推荐</view>
			<view class="rec_box">
				<view class="rec_item" @tap="toVideoDetail(item.id)" v-for="(item,index) in recommend_list" :key="item.id">
					<view class="rec_img">
						<image :src="item.src" class="rec_photo" mode="aspectFill"></image>
						<block v-if="item.hot == 1">
							<view class="rec_txt">推荐课程</view>
						</block>
						<image src="../../static/play_btn2.png" mode="widthFix" class="rec_play"></image>
						<view class="rec_status">
							<view><image src="../../static/look.png" mode="widthFix"></image>{{item.num}}</view>
							<text>{{item.time}}</text>
						</view>
					</view>
					<view class="rec_title"><text class="rt_title">{{title}}</text><text class="rt_price">￥{{item.price}}</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				url: "http://220.194.238.114/9/h/m/i/h/hmihhvftxhprygdmjwcxvzjbfwfeba/sh.yinyuetai.com/1C0F016444322A68BADFD8D1CFF5794B.mp4",
				poster: "../../static/video_img1.jpg",
				title: "breaking街舞男孩,带你领略街舞的魅力",
				info: "Breaking（又译Breakdance、b-boying，b-girl），是一种以个人风格为主的技巧性街舞舞种，也是北美街舞中最早的舞种。Breaking起源于美国70年代的布朗克斯区。比较值得注意的是，早期跳BREAKING的舞者多为西班牙语裔美国人，非裔美国人，然而他们当初偏好的音乐风格却大大影响至今的嘻哈和节奏蓝调音乐。",
				num: "2658",
				time: "2019.02.15 20:42",
				recommend_list: [
					{
						id: 1,
						src: "../../static/video_img1.jpg",
						num: "2598",
						time: "10:58",
						title: "初级班拉丁舞课程",
						price: "256.00",
						hot: 1
					},{
						id: 2,
						src: "../../static/video_img2.jpg",
						num: "2598",
						time: "10:58",
						title: "初级班拉丁舞课程",
						price: "256.00",
						hot: 0
					},{
						id: 3,
						src: "../../static/video_img1.jpg",
						num: "2598",
						time: "10:58",
						title: "初级班拉丁舞课程",
						price: "256.00",
						hot: 0
					},{
						id: 4,
						src: "../../static/video_img2.jpg",
						num: "2598",
						time: "10:58",
						title: "初级班拉丁舞课程",
						price: "256.00",
						hot: 0
					}
				]
			}
		},
		methods:{
			toVideoDetail(e){
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
	#myVideo{
		display: block;
		width: 100%;
		height: 500upx;
	}
	.video_detail{
		padding: 0 25upx;
		margin-bottom: 30upx;
		.vd_title{
			color: #000;
			font-size: 28upx;
			margin: 25upx 0 30upx;
		}
		.vd_info{
			color: #666;
			font-size: 22upx;
		}
		.vd_status{
			color: #999;
			font-size: 18upx;
			margin: 10upx 0;
			text{
				margin-left: 20upx;
			}
		}
		.vd_bottom{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.vd_share{
				justify-content: flex-start;
				.vs_item{
					margin-left: 0;
					margin-right: 25upx;
					&:nth-child(3){
						image{
							width: 36upx;
							height: 29upx;
						}
					}
				}
			}
			button{
				width: 145upx;
				height: 55upx;
				line-height: 55upx;
				padding: 0;
				color: #fff;
				font-size: 24upx;
				background: #fbc800;
				margin: 0;
				&:after{
					border: 0;
				}
			}
		}
	}
	.recommend_box{
		padding: 0 25upx;
		.recommend_title{
			color: #000;
			font-size: 26upx;
			padding-left: 15upx;
			position: relative;
			margin-bottom: 20upx;
			&:before{
				content: "";
				width: 4upx;
				height: 30upx;
				background: #fbc800;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		.rec_box{
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-wrap: wrap;
			padding-bottom: 20upx;
			.rec_item{
				width: 50%;
				margin-bottom: 25upx;
				.rec_img{
					position: relative;
					width: 330upx;
					height: 230upx;
					border-radius: 5upx;
					.rec_photo{
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 5upx;
					}
					.rec_txt{
						position: absolute;
						display: inline-block;
						padding: 6upx 15upx 8upx;
						background: #fbc800;
						color: #fff;
						font-size: 20upx;
						right: 20upx;
						top: 20upx;
						border-radius: 5upx;
					}
					.rec_play{
						position: absolute;
						display: block;
						width: 30upx;
						height: 45upx;
						left: 50%;
						top: 50%;
						transform: translate(-50%,-50%);
					}
					.rec_status{
						position: absolute;
						width: 100%;
						background: rgba(0,0,0,.3);
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 15upx 20upx;
						box-sizing: border-box;
						left: 0;
						bottom: 0;
						color: #fff;
						font-size: 16upx;
						image{
							display: inline-block;
							width: 25upx;
							height: 18upx;
							margin-right: 5upx;
						}
					}
				}
				.rec_title{
					width: 330upx;
					color: #333;
					font-size: 24upx;
					margin-top: 15upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.rt_title{
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						width: 60%;
					}
					.rt_price{
						color: #d3a800;
						font-size: 22upx;
					}
				}
			}
		}
	}
</style>

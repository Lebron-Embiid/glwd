<template>
	<view class="audio_detail_view">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<!-- #endif -->
		<image :src="banner" class="audio_banner" mode="widthFix"></image>
		<view class="audio_music_view">
			<view class="audio_music_move">
				<view class="audio_music_info">
					<view class="ami_title"><image src="../../static/gl_logo.jpg" mode="widthFix"></image>{{music_type}}</view>
					<view class="ami_info">{{music_info}}</view>
				</view>
			</view>
			<view class="music_play_title"><image src="../../static/audio_play.png" mode="widthFix"></image>全部播放<text>({{music_num}})</text></view>
			<view class="music_list">
				<view class="music_item" v-for="(item,index) in music_list" :key="item.id">
					<text>{{index+1}}</text>
					<view class="music_profile">
						<view class="mp_left">
							<view class="mpl_name">{{item.name}}</view>
							<view class="mpl_info">{{item.info}}</view>
						</view>
						<view class="mp_right">
							<image src="../../static/play.png" mode="widthFix" class="mpr_play"></image>
							<image src="../../static/collect.png" mode="widthFix" class="mpr_love"></image>
							<image src="../../static/share.png" mode="widthFix" class="mpr_share"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="fixed_music_bottom">
			<view class="fix_music_left">
				<image src="../../static/poster.jpg" mode="widthFix" class="fix_poster"></image>
				<view class="fix_music_info">
					<view class="fmi_title">来自天堂的魔鬼</view>
					<view class="fmi_name">G.E.M.邓紫棋</view>
				</view>
			</view>
			<view class="fix_music_right">
				<image src="../../static/audio_play.png" mode="widthFix" class="fix_play"></image>
				<image src="../../static/list.png" mode="widthFix" class="fix_list"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				banner: "../../static/audio_banner.jpg",
				music_type: "古典音乐",
				music_info: "古典音乐有广义、狭义之分。广义是指那些从西方中世纪开始至今的、在欧洲主流文化背景下创作的西方古典音乐，主要因其复杂多样的创作技术和所能承载的厚重内涵而有别于通俗音乐和民间音乐。",
				music_num: 10,
				music_list: [
					{
						id: 1,
						name: "来自天堂的魔鬼",
						info: "G.E.M.邓紫棋·《新的心跳》",
						src: "http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3"
					},{
						id: 2,
						name: "来自天堂的魔鬼",
						info: "G.E.M.邓紫棋·《新的心跳》",
						src: "http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3"
					},
					{
						id: 3,
						name: "来自天堂的魔鬼",
						info: "G.E.M.邓紫棋·《新的心跳》",
						src: "http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3"
					},
					{
						id: 4,
						name: "来自天堂的魔鬼",
						info: "G.E.M.邓紫棋·《新的心跳》",
						src: "http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3"
					},{
						id: 5,
						name: "来自天堂的魔鬼",
						info: "G.E.M.邓紫棋·《新的心跳》",
						src: "http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3"
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
	@keyframes _rotate{
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes _rotate{
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.audio_banner{
		display: block;
		width: 750upx;
		height: 500upx;
	}
	.audio_music_view{
		margin-top: -80upx;
		margin-bottom: 110upx;
		.audio_music_move{
			padding: 0 30upx;
			box-sizing: border-box;
			.audio_music_info{
				padding: 30upx 30upx 50upx;
				box-sizing: border-box;
				background: #fff;
				box-shadow: 0 0 20upx #F1F1F1;
				border-radius: 30upx;
				margin-bottom: 40upx;
				position: relative;
				z-index: 5;
				.ami_title{
					color: #000;
					font-size: 30upx;
					display: flex;
					align-items: center;
					margin-bottom: 15upx;
					image{
						display: inline-block;
						width: 70upx;
						height: 41upx;
						margin-right: 10upx;
					}
				}
				.ami_info{
					color: #999;
					font-size: 22upx;
				}
			}
		}
		.music_play_title{
			padding: 0 30upx 15upx;
			border-bottom: 1px solid #F1F1F1;
			color: #000;
			font-size: 30upx;
			display: flex;
			align-items: center;
			image{
				display: inline-block;
				width: 50upx;
				height: 50upx;
				margin-right: 15upx;
			}
			text{
				color: #999;
			}
		}
		.music_list{
			.music_item{
				padding: 0 0 0 25upx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
					color: #000;
					font-size: 32upx;
				}
				.music_profile{
					width: 90%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30upx 25upx 20upx 0;
					box-sizing: border-box;
					border-bottom: 1px solid #FAFAFA;
					.mp_left{
						width: 70%;
						.mpl_name{
							color: #000;
							font-size: 30upx;
							margin-bottom: 5upx;
						}
						.mpl_info{
							color: #999;
							font-size: 24upx;
						}
					}
					.mp_right{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						.mpr_play{
							display: block;
							width: 40upx;
							height: 28upx;
						}
						.mpr_love{
							display: block;
							width: 29upx;
							height: 27upx;
							margin-left: 20upx;
						}
						.mpr_share{
							display: block;
							width: 28upx;
							height: 27upx;
							margin-left: 20upx;
						}
					}
				}
			}
		}
	}
	.fixed_music_bottom{
		position: fixed;
		width: 100%;
		height: 110upx;
		left: 0;
		bottom: 0;
		background: #fff;
		z-index: 10;
		padding: 15upx 25upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #EFEFEF;
		.fix_music_left{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 50%;
			.fix_poster{
				display: block;
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
				margin-right: 20upx;
				&.play{
					transform-origin: 50%;
					animation: _rotate 6s linear infinite;	
				}
			}
			.fix_music_info{
				padding: 10upx 0;
				.fmi_title{
					color: #010101;
					font-size: 26upx;
					margin-bottom: 5upx;
				}
				.fmi_name{
					color: #bdbdbd;
					font-size: 22upx;
				}
			}
		}
		.fix_music_right{
			width: 50%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.fix_play{
				display: block;
				width: 64upx;
				height: 64upx;
				margin-right: 30upx;
			}
			.fix_list{
				display: block;
				width: 34upx;
				height: 31upx;
				margin-right: 25upx;
			}
		}
	}
</style>
<template>
	<view class="audio_detail_view">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<!-- #endif -->
		<image :src="banner" class="audio_banner" mode="widthFix"></image>
		<view class="audio_music_view" :class="[isPlay == true?'active':'']">
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
						<view class="mp_left" @tap="toPlay(index,isMusicList)">
							<view class="mpl_name">{{item.name}}
								<block v-if="item.isplaying == true">
									<image src="../../static/audio_process.png" mode="widthFix"></image>
								</block>
							</view>
							<view class="mpl_info">{{item.person}} · {{item.info}}</view>
						</view>
						<view class="mp_right">
							<image src="../../static/play.png" mode="widthFix" class="mpr_play" @tap="toPlay(index,isMusicList)"></image>
							<block v-if="item.iscollect == false">
								<image src="../../static/collect.png" @tap="toCollect(index)" mode="widthFix" class="mpr_love"></image>
							</block>
							<block v-else>
								<image src="../../static/collect_on.png" @tap="toNoCollect(index)" mode="widthFix" class="mpr_love"></image>
							</block>
							<image src="../../static/share.png" mode="widthFix" class="mpr_share" @tap="showShare"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部控制区域 -->
		<view class="fixed_music_bottom" :class="[isPlay == true || isPlay == 'true'?'active':'']">
			<view class="fix_music_left">
				<image :src="play_poster" mode="widthFix" class="fix_poster"></image>
				<view class="fix_music_info">
					<view class="fmi_title">{{play_name}}</view>
					<view class="fmi_name">{{play_person}}</view>
				</view>
			</view>
			<view class="fix_music_right">
				<block v-if="isStop != true">
					<image src="../../static/audio_play.png" mode="widthFix" class="fix_play" @tap="audio_pause"></image>
				</block>
				<block v-else>
					<image src="../../static/fix_stop.jpg" mode="widthFix" class="fix_play" @tap="audio_start"></image>
				</block>
				<image src="../../static/list.png" mode="widthFix" class="fix_list" @tap="showLayer"></image>
			</view>
		</view>
		<!-- 正在播放列表 -->
		<view class="fixed_shadow" :class="[layerShow == true?'active':'' || shareShow == true?'active':'']" @tap="hideLayer"></view>
		<view class="fixed_music_list" :class="[layerShow == true?'active':'']">
			<view class="fml_all_del" @tap="allDelete"><image src="../../static/delete.png" mode="widthFix"></image>全部清空</view>
			<scroll-view class="fml_list_view" scroll-y>
				<view class="flv_item" v-for="(item,index) in play_list" :key="item.id" @tap="toPlay(index,!isMusicList)">
					<view class="flv_left">
						<view class="flv_name" :class="[item.isplaying == true?'active':'']">{{item.name}}</view>
						<view class="flv_person" :class="[item.isplaying == true?'active':'']"> - {{item.person}}</view>
						<block v-if="item.isplaying == true">
							<image src="../../static/audio_process.png" mode="widthFix"></image>
						</block>
					</view>
					<image src="../../static/delete.png" mode="widthFix" class="flv_del" @tap.stop="toDelete"></image>
				</view>
			</scroll-view>
		</view>
		<view class="fixed_share_box" :class="[shareShow == true?'active':'']">
			<view class="fsb_title">分享至</view>
			<view class="fsb_share">
				<view class="share_item"><image src="../../static/share_pyq.png" mode="widthFix"></image><text>朋友圈</text></view>
				<view class="share_item"><image src="../../static/share_wx.png" mode="widthFix"></image><text>微信</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	const audioContext = uni.createInnerAudioContext();
	export default{
		data(){
			return{
				id: "",
				banner: "../../static/audio_banner.jpg",
				music_type: "古典音乐",
				music_info: "古典音乐有广义、狭义之分。广义是指那些从西方中世纪开始至今的、在欧洲主流文化背景下创作的西方古典音乐，主要因其复杂多样的创作技术和所能承载的厚重内涵而有别于通俗音乐和民间音乐。",
				music_num: 10,
				music_list: [
					{
						id: 1,
						name: "来自天堂的魔鬼",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3",
						iscollect: false,
						isplaying: false
					},{
						id: 2,
						name: "于是",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.170mv.com/kw/other.web.rg01.sycdn.kuwo.cn/resource/n2/46/52/3021082115.mp3",
						iscollect: false,
						isplaying: false
					},
					{
						id: 3,
						name: "盲点",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.170mv.com/kw/other.web.rg01.sycdn.kuwo.cn/resource/n1/45/73/2274438905.mp3",
						iscollect: false,
						isplaying: false
					},
					{
						id: 4,
						name: "新的心跳",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n2/96/21/2340671296.mp3",
						iscollect: false,
						isplaying: false
					},{
						id: 5,
						name: "查克靠近",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.ytmp3.cn/down/33632.mp3",
						iscollect: false,
						isplaying: false
					}
				],
				play_list: [
					{
						id: 1,
						name: "来自天堂的魔鬼",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.170mv.com/kw/other.web.nx01.sycdn.kuwo.cn/resource/n2/46/37/3654869655.mp3",
						isplaying: false
					},{
						id: 2,
						name: "于是",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.170mv.com/kw/other.web.rg01.sycdn.kuwo.cn/resource/n2/46/52/3021082115.mp3",
						isplaying: false
					},
					{
						id: 3,
						name: "盲点",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.170mv.com/kw/other.web.rg01.sycdn.kuwo.cn/resource/n1/45/73/2274438905.mp3",
						isplaying: false
					},{
						id: 4,
						name: "新的心跳",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n2/96/21/2340671296.mp3",
						isplaying: false
					},{
						id: 5,
						name: "查克靠近",
						person: "G.E.M.邓紫棋",
						info: "《新的心跳》",
						poster: "../../static/poster.jpg",
						src: "http://www.ytmp3.cn/down/33632.mp3",
						isplaying: false
					}
				],
				isMusicList: "true"?'0':'1',
				isPlay: false,
				isStop: true,
				isplaying: false,
				layerShow: false,
				shareShow: false,
				play_id: "",
				play_poster: "../../static/poster.jpg",
				play_name: "来自天堂的魔鬼",
				play_person: "G.E.M.邓紫棋",
				play_url: ""
			}
		},
		methods:{
			toPlay(e,isList){
				console.log(isList)
				var that = this;
				that.isPlay = true;
				that.isStop = true;
				for(var i=0;i<that.music_list.length;i++){
					that.music_list[i].isplaying = false;
					that.play_list[i].isplaying = false;
				}
				that.music_list[e].isplaying = true;
				that.play_list[e].isplaying = true;
				
				that.play_id = that.music_list[e].id;
				that.play_poster = that.music_list[e].poster;
				that.play_name = that.music_list[e].name;
				that.play_person = that.music_list[e].person;
				
				audioContext.src = that.music_list[e].src;
				audioContext.play();
			},
			audio_pause(e){
				this.isStop = true;
				
				audioContext.pause();
			},
			audio_start(e){
				this.isStop = false;
				
				audioContext.play();
			},
			showLayer(){
				this.layerShow = true;
			},
			hideLayer(){
				this.layerShow = false;
				this.shareShow = false;
			},
			showShare(){
				this.shareShow = true;
			},
			allDelete(){
				uni.showModal({
					content: "确认全部清空？",
					confirmColor: "#fbc800",
					success: (res) => {
						if(res.confirm){
							
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			// 喜欢
			toCollect(e){
				this.music_list[e].iscollect = true;
			},
			// 取消喜欢
			toNoCollect(e){
				this.music_list[e].iscollect = false;
			},
			toDelete(e){
				uni.showModal({
					content: "确认删除？",
					confirmColor: "#fbc800",
					success: (res) => {
						if(res.confirm){
							
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		onLoad(opt) {
			console.log(opt)
			var that = this;
			that.id = opt.id;
			for(var i in that.music_list){
				if(that.music_list[i].id == that.id){
					audioContext.src = that.music_list[i].src;
					audioContext.play();
				}
			}
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
		&.active{
			margin-bottom: 110upx;
		}
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
							height: 40upx;
							display: flex;
							align-items: center;
							image{
								display: inline-block;
								width: 28upx;
								height: 40upx;
								margin-left: 30upx;
							}
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
		display: none;
		&.active{
			display: flex;
		}
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
				&.active{
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
	.fixed_music_list{
		position: fixed;
		left: 0;
		bottom: -150%;
		width: 100%;
		height: 700upx;
		overflow: hidden;
		background: #fff;
		z-index: 30;
		padding: 20upx 0 0 40upx;
		box-sizing: border-box;
		transition: all .5s ease;
		&.active{
			bottom: 0;
		}
		.fml_all_del{
			display: flex;
			justify-content: flex-end;
			padding-right: 30upx;
			box-sizing: border-box;
			color: #999;
			font-size: 24upx;
			background: #fff;
			padding-bottom: 10upx;
			image{
				display: inline-block;
				vertical-align: middle;
				width: 34upx;
				height: 34upx;
			}
		}
		.fml_list_view{
			white-space: nowrap;
			height: 650upx;
			.flv_item{
				padding: 30upx 45upx 30upx 0;
				border-bottom: 1px solid #F4F4F4;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.flv_left{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					height: 40upx;
					.flv_name{
						color: #000;
						font-size: 30upx;
						margin-right: 6upx;
						&.active{
							color: #fbc800;
						}
					}
					.flv_person{
						color: #999;
						font-size: 24upx;
						margin-right: 60upx;
						&.active{
							color: #fbc800;
						}
					}
					image{
						display: inline-block;
						width: 28upx;
						height: 40upx;
					}
				}
				.flv_del{
					display: block;
					width: 34upx;
					height: 34upx;
				}
			}
		}
	}
	.fixed_shadow{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		left: 0;
		bottom: 0;
		display: none;
		z-index: 25;
		&.active{
			display: block;
		}
	}
	.fixed_share_box{
		position: fixed;
		width: 80%;
		left: 10%;
		top: 50%;
		transform: translateY(-50%);
		padding: 50upx 100upx 70upx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 20upx;
		z-index: 28;
		display: none;
		&.active{
			display: block;
		}
		.fsb_title{
			color: #333;
			font-size: 26upx;
			text-align: center;
			position: relative;
			margin-bottom: 30upx;
			&:before,&:after{
				content: "";
				display: block;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: 77upx;
				height: 1px;
				background: #333;
			}
			&:before{
				left: 30upx;
			}
			&:after{
				right: 30upx;
			}
		}
		.fsb_share{
			display: flex;
			justify-content: space-around;
			align-items: center;
			.share_item{
				color: #333;
				font-size: 22upx;
				text-align: center;
				image{
					display: block;
					width: 82upx;
					height: 82upx;
					margin: 0 auto 10upx;
				}
				&:last-of-type{
					image{
						width: 100upx;
					}
				}
			}
		}
	}
</style>
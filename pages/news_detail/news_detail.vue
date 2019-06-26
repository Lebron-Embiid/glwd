<template>
	<view class="news_detail_view">
		<!-- <view class="status_bar">  
			<view class="top_view"></view>  
		</view> -->
		<navbar></navbar>
		<image src="../../static/news_bg.jpg" mode="widthFix" class="news_bg"></image>
		<view class="news_content">
			<view class="news_top">
				<view class="nt_logo"><image src="../../static/gl_logo.jpg" mode="widthFix"></image><text>港龙资讯</text>{{time}}</view>
				<view class="nt_title">{{title}}</view>
				<view class="vi_share">
					<view class="vs_item" @tap="toCollect(id)"><image src="../../static/detail_icon3.png" mode="widthFix"></image>收藏</view>
					<view class="vs_item" @tap="shareWxSession"><image src="../../static/detail_icon2.png" mode="widthFix"></image>朋友圈</view>
					<view class="vs_item" @tap="shareWxTimeline"><image src="../../static/detail_icon4.png" mode="widthFix"></image>微信</view>
				</view>
			</view>
			<view class="news_info">
				{{content}}
			</view>
		</view>
		<view class="invite_box" @tap="toInviteDetail(id)"><image src="../../static/reserve.png" mode="widthFix"></image>预约</view>
	</view>
</template>

<script>
	import navbar from '../../components/navbar.vue'
	export default{
		data(){
			return{
				id: 1,
				time: "2019.05.10 16:00",
				title: "跳舞让一个女孩光芒万丈的出现在舞台",
				content: "我非常喜欢跳舞，从小妈妈就给我报名参加了舞蹈训练。每周都要去上课。我以前以为舞蹈只是跳舞，没想到还要练软功。我从小就怕疼，不想练软功，妈妈就和我说：：“没关系，只要你自己努力，我相信你一定能行！”我听了，也在心里给自己加油，就这样，一开始妈妈每天都要让我练软功，渐渐地我软功反面也有了很大的进步。我以前跳舞时也很胆小，有一节课，老师让我侧翻，我不敢。突然我想到了练软功的时候妈妈对我说的话，我一翻，没翻过去。但经过多次努力，我终于学会了侧翻。。我现在知道了，只要努力就一定能成功，所以我现在很努力的学习舞蹈， 舞蹈的所有基本动作我都已经熟练掌握。我还学过许多舞蹈，比如：我像蝴蝶飞飞飞，雨竹林、伞妹、孔雀飞来等等。我参加过比赛，还获得过许多奖项。也考过级，我现在已经7级了。我以后一定更加努力！！！"
			}
		},
		components: {
			navbar
		},
		methods:{
			toInviteDetail(e){
				uni.reLaunch({
					url: "/pages/reserve/reserve?id="+e
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
		onLoad(opt) {
			that.id = opt.id;			
		}
	}
</script>

<style scoped lang="scss">
	.news_bg{
		display: block;
		width: 750upx;
		height: 340upx;
	}
	.news_content{
		padding: 0 25upx;
		box-sizing: border-box;
		transform: translateY(-120upx);
		.news_top{
			border-radius: 20upx;
			box-shadow: 0 5upx 20upx #999;
			margin-bottom: 30upx;
			background: #fff;
			padding: 30upx;
			box-sizing: border-box;
			.nt_logo{
				display: flex;
				align-content: center;
				color: #999;
				font-size: 20upx;
				image{
					display: inline-block;					
					width: 70upx;
					height: 41upx;
				}
				text{
					color: #333;
					font-size: 24upx;
					margin: 0 10upx 0 20upx;
				}
			}
			.nt_title{
				color: #333;
				font-size: 28upx;
				margin: 30upx 0 40upx;
			}
		}
		.news_info{
			color: #333;
			font-size: 24upx;
			line-height: 1.7;
			padding-left: 30upx;
			box-sizing: border-box;
			image{
				display: block;
				max-width: 100% !important;
			}
		}
	}
	.invite_box{
		right: 20upx;
		bottom: 80upx;
	}
</style>
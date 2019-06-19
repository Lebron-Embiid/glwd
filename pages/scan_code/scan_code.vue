<template>
	<view class="scan_code_view">
		<view class="sc_title">扫描二维码进群</view>
		<view class="code_box">
			<view class="cb_title">{{title}}</view>
			<image :src="code" mode="widthFix" class="code_img"></image>
			<image src="../../static/code_icon.jpg" mode="widthFix" class="code_icon"></image>
			<view>1.扫码加群认识志同道合的朋友</view>
			<view>2.及时了解我们的动态</view>
		</view>
		<button class="save_photo" @tap="saveCode">保存图片到本地</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title: "港龙舞蹈培训",
				code: "../../static/code.png"
			}
		},
		methods:{
			saveCode(){
				uni.saveImageToPhotosAlbum({
					filePath: that.maters[e].cover_pic,
					success: function () { 
						uni.showToast({
							title: '图片已保存到本地',
							icon: 'none',
							duration: 1500
						})
					},
					fail: () => {
						uni.showToast({
							title: '保存图片失败',
							icon: 'none',
							duration: 1500
						})
					}
				});
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.scan_code_view{
		padding: 0 70upx;
		box-sizing: border-box;
		.sc_title{
			color: #fbc800;
			font-size: 30upx;
			text-align: center;
			padding: 20upx 0 40upx;
		}
		.code_box{
			color: #999;
			font-size: 30upx;
			text-align: center;
			padding: 30upx 0;
			box-sizing: border-box;
			box-shadow: 0 0 20upx #F1F1F1;
			.cb_title{
				color: #121922;
				font-size: 32upx;
			}
			.code_img{
				display: block;
				width: 452upx;
				height: 452upx;
				margin: 40upx auto;
			}
			.code_icon{
				display: block;
				width: 100%;
				height: 40upx;
			}
			view{
				margin-top: 5upx;
			}
		}
		.save_photo{
			position: fixed;
			width: 90%;
			height: 95upx;
			line-height: 95upx;
			background: #fbc800;
			border-radius: 50upx;
			color: #fff;
			font-size: 32upx;
			left: 5%;
			bottom: 30upx;
			&:after{
				border: 0;
			}
		}
	}
</style>
<template>
	<view class="person_info_view">
		<view class="info_item border">
			<text class="left_txt">头像</text>
			<view class="info_right">
				<image :src="avatar_url" class="avatar_img" mode="widthFix" @tap="changeAvatar"></image>
				<image src="../../static/next.png" class="next" mode="widthFix"></image>
			</view>
		</view>
		<view class="info_item">
			<text class="left_txt">昵称</text>
			<view class="info_right" @tap="toChangeName">
				<text>{{nickname}}</text>
				<image src="../../static/next.png" class="next" mode="widthFix"></image>
			</view>
		</view>
		<view class="info_item">
			<text class="left_txt">性别</text>
			<view class="info_right" @tap="selectSex">
				<text>{{sex}}</text>
				<image src="../../static/next.png" class="next" mode="widthFix"></image>
			</view>
		</view>
		<view class="info_item">
			<text class="left_txt">出生日期</text>
			<picker mode="date" :value="date" @change="bindDateChange">
				<view class="info_right">
					<text>{{date}}</text>
					<image src="../../static/next.png" class="next" mode="widthFix"></image>
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				avatar_url: "../../static/avatar.jpg",
				nickname: "陈先生",
				sex: "男",
				sex_list: ['男','女'],
				date: "2000-01-01"
			}
		},
		methods:{
			changeAvatar(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
						uni.uploadFile({
							url: '', //图片接口
							filePath: res.tempFilePaths[0],
							name: 'image',
							success: (uploadFileRes) => {
								var data = JSON.parse(uploadFileRes.data);
								console.log(data.data.url);
								that.avatar_url = data.data.url;
							}
						});
					}
				});
			},
			selectSex(){
				var that = this;
				uni.showActionSheet({
					itemList: that.sex_list,
					success: function (res) {
						that.sex = that.sex_list[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			bindDateChange(e){
				this.date = e.target.value;
			},
			toChangeName(){
				uni.navigateTo({
					url: "/pages/change_name/change_name"
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.person_info_view{
		.info_item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30upx 25upx;
			box-sizing: border-box;
			border-bottom: 1px solid #eee;
			&.border{
				border-bottom: 25upx solid #f5f5f5;
			}
			.left_txt{
				color: #333;
				font-size: 30upx;
			}
			.info_right{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				picker{
					display: flex;
					width: 100%;
					justify-content: flex-end;
					align-items: center;
				}
				text{
					color: #999;
					font-size: 28upx;
				}
				.avatar_img{
					display: block;
					width: 145upx;
					height: 145upx;
					border-radius: 50%;
				}
				.next{
					display: block;
					width: 14upx;
					height: 24upx;
					margin-left: 20upx;
				}
			}
		}
	}
</style>
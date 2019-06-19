<template>
	<view class="person_view">
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<view class="person_top">
			<image src="../../static/person_bg.png" mode="widthFix" class="person_bg"></image>
			<view class="person_layer">
				<view class="person_name">{{nickname}}</view>
				<view class="person_avatar"><image :src="avatar" mode="widthFix"></image></view>
			</view>
		</view>
		<view class="person_nav">
			<view v-for="(item,index) in orderList" :key="index" @tap="toMyOrder(index+1)" class="person_item"><image :src="item.icon" mode="widthFix"></image>{{item.title}}</view>
			<!-- <navigator url="/pages/my_order/my_order?id=2" class="person_item"><image src="../../static/person_nav1.png" mode="widthFix"></image>已完成</navigator> -->
			<!-- <navigator url="/pages/my_order/my_order?id=3" class="person_item"><image src="../../static/person_nav3.png" mode="widthFix"></image>已取消</navigator> -->
		</view>
		<view class="person_list">
			<view class="pl_item" v-for="(item,index) in nav_list" @tap="toDetail(item.url)" :key="index">
				<view><image :src="item.icon" mode="widthFix"></image>{{item.title}}</view>
				<image src="../../static/next.png" mode="widthFix" class="next"></image>
			</view>
			<!-- <navigator url="/pages/my_collect/my_collect" class="pl_item">
				<view><image src="../../static/person_icon2.png" mode="widthFix"></image>我的收藏</view>
				<image src="../../static/next.png" mode="widthFix" class="next"></image>
			</navigator>
			<navigator url="/pages/history/history" class="pl_item">
				<view><image src="../../static/person_icon3.png" mode="widthFix"></image>历史记录</view>
				<image src="../../static/next.png" mode="widthFix" class="next"></image>
			</navigator> -->
			<view class="pl_item">
				<view><image src="../../static/person_icon4.png" mode="widthFix"></image>官方客服</view>
				<text>4008529629</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				nickname: "刘小姐",
				avatar: "../../static/person_avatar.jpg",
				orderList: [
					{title: "待付款",icon: "../../static/person_nav2.png"},
					{title: "已完成",icon: "../../static/person_nav1.png"},
					{title: "已取消",icon: "../../static/person_nav3.png"}
				],
				nav_list: [
					{title: "我的预约",icon: "../../static/person_icon1.png",url: "/pages/my_reserve/my_reserve"},
					{title: "我的收藏",icon: "../../static/person_icon2.png",url: "/pages/my_collect/my_collect"},
					{title: "历史记录",icon: "../../static/person_icon3.png",url: "/pages/history/history"}
				]
			}
		},
		methods:{
			toMyOrder(e){
				uni.navigateTo({
					url: "/pages/my_order/my_order?id="+e
				})
			},
			toDetail(e){
				uni.navigateTo({
					url: e
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.person_top{
		position: relative;
		.person_bg{
			display: block;
			width: 750upx;
			height: 460upx;
		}
		.person_layer{
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 5;
			.person_name{
				color: #fff;
				font-size: 30upx;
				text-align: center;
				margin: 60upx 0 20upx;
			}
			.person_avatar{
				overflow: hidden;
				image{
					display: block;
					width: 170upx;
					height: 170upx !important;
					border: 5upx solid #fff;
					border-radius: 50%;
					box-sizing: border-box;
					margin: 0 auto;
				}
			}
		}
	}
	.person_nav{
		position: relative;
		width: 700upx;
		background: #fff;
		margin: -90upx auto 20upx;
		border-radius: 20upx;
		// box-shadow: 0 0 20upx #EAEAEA;
		box-shadow: 0 5upx 20upx #999;
		z-index: 5;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 30upx 40upx;
		box-sizing: border-box;
		.person_item{
			display: flex;
			align-items: center;
			color: #666;
			font-size: 30upx;
			position: relative;
			padding: 30upx 10upx;
			box-sizing: border-box;
			&:after{
				content: "";
				width: 1px;
				height: 30upx;
				background: #c8c8c8;
				position: absolute;
				top: 50%;
				right: -20upx;
				transform: translateY(-50%);
				z-index: 3;
			}
			&:last-of-type{
				&:after{
					display: none;
				}
			}
			image{
				display: inline-block;
				width: 60upx;
				height: 60upx;
				margin-right: 10upx;
			}
		}
	}
	.person_list{
		padding: 0 25upx;
		box-sizing: border-box;
		.pl_item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20upx 40upx 20upx 20upx;
			box-sizing: border-box;
			view{
				color: #666;
				font-size: 28upx;
				display: flex;
				align-items: center;
				image{
					display: inline-block;
					width: 40upx;
					height: 40upx;
					margin-right: 20upx;
				}
			}
			.next{
				display: block;
				width: 14upx;
				height: 24upx;
			}
			text{
				color: #333;
				font-size: 28upx;
			}
		}
	}
</style>
<template>
	<view class="school_view">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<!-- #endif -->
		<view class="page_bg"></view>
		<view class="address_txt" @tap="chooseLocation">{{address}}<image src="../../static/down.png" mode="widthFix"></image></view>
		<map id="map" :latitude="latitude" :longitude="longitude" :markers="covers" @regionchange="regionchange"></map>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				address: "深圳市",
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					callout: {
						content: "离我最近",
						color: "#fff",
						fontSize: 12,
						bgColor: "#848484",
						borderRadius: 5,
						display: 'ALWAYS'
					}
				}]
			}
		},
		methods:{
			chooseLocation(){
				var that = this;
				uni.chooseLocation({
					success: function (res) {
						that.address = res.name;
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});
			},
			regionchange(){
				
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.school_view{
		padding: 0 40upx;
		.address_txt{
			color: #333;
			font-size: 50upx;
			margin: 30upx 0;
			display: flex;
			align-items: center;
			image{
				display: inline-block;
				width: 14upx;
				height: 8upx;
				margin-left: 10upx;
			}
		}
	}
	#map{
		display: block;
		width: 100%;
		height: 240upx;
	}
</style>
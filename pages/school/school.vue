<template>
	<view class="school_view"> 
		<!-- <view class="status_bar">  
			<view class="top_view"></view>  
		</view>  -->
		<view class="fixed_top">
			<view class="address_txt">{{address}}<image src="../../static/down.png" mode="widthFix"></image></view>
			<view class="search_school">
				<view class="form_box">
					<image src="../../static/search1.png" mode="widthFix"></image>
					<input type="text" placeholder="搜校区" @tap="chooseLocation" disabled v-model="keywords" :value="keywords" placeholder-style="color:#fdcb05;" />
				</view>
			</view>
			<view class="map_box">
				<map id="map" @tap="toMap" @markertap="toMap" :latitude="latitude" :longitude="longitude" show-location="true" :markers="covers"></map>
			</view>
		</view>
		<scroll-view scroll-y="true" style="height: 640upx;" class="school_list_box">
			<view class="nearby_school">
				<view class="near_title">附近校区</view>
				<view class="near_item" @tap="toSchoolDetail(item.id)" v-for="(item,index) in school_list" v-if="item.isNear == 1" :key="item.id">
					<view>
						<view class="ni_title">{{item.title}}</view>
						<view class="ni_info">{{item.info}}</view>
					</view>
					<view>
						<!-- <button class="ni_btn" @tap.stop="toSchoolDetail(item.id)">详情</button> -->
						<view class="ni_dist">{{item.dist}}</view>
					</view>
				</view>
			</view>
			<view class="nearby_school noborder">
				<view class="near_title">校区列表</view>
				<view class="near_item" @tap="toSchoolDetail(item.id)" v-for="(item,index) in school_list" :key="item.id">
					<view>
						<view class="ni_title">{{item.title}}</view>
						<view class="ni_info">{{item.info}}</view>
					</view>
					<view>
						<!-- <button class="ni_btn" @tap.stop="toSchoolDetail(item.id)">详情</button> -->
						<view class="ni_dist">{{item.dist}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="invite_box" @tap="toReserve"><image src="../../static/reserve.png" mode="widthFix"></image>预约</view>
	</view>
</template>

<script>
	const mapContext = uni.createMapContext("map",this);
	export default{
		data(){
			return{
				address: "深圳市",
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: "/static/icon.png",
					width: 20,
					height: 20,
					callout: {
						content: "离我最近",
						color: "#fff",
						fontSize: 12,
						bgColor: "#848484",
						borderRadius: 5,
						display: 'ALWAYS'
					}
				}],
				keywords: "",
				school_list: [
					{
						id: 1,
						latitude: 39.909,
						longitude: 116.39742,
						title: "莲花山校区",
						info: "深圳市罗湖区建设路火车站大厦5楼",
						dist: "169m",
						isNear: 1
					},
					{
						id: 2,
						latitude: 39.909,
						longitude: 116.19743,
						title: "莲花山校区",
						info: "深圳市罗湖区建设路火车站大厦5楼",
						dist: "169m",
						isNear: 0
					},
					{
						id: 3,
						latitude: 39.909,
						longitude: 116.59744,
						title: "莲花山校区",
						info: "深圳市罗湖区建设路火车站大厦5楼",
						dist: "169m",
						isNear: 0
					},
					{
						id: 4,
						latitude: 39.909,
						longitude: 116.31345,
						title: "莲花山校区",
						info: "深圳市罗湖区建设路火车站大厦5楼",
						dist: "169m",
						isNear: 0
					}
				]
			}
		},
		methods:{
			toMap(){
				uni.navigateTo({
					url: "/pages/map/map"
				})
			},
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
			// 切换地图位置
			changeMap(e){
				var that = this;
				var latitude = "";
				var longitude = "";
				for(var i in that.school_list){
					if(that.school_list[i].id == e){
						latitude = that.school_list[i].latitude;
						longitude = that.school_list[i].longitude;
						console.log(latitude,longitude)
						that.latitude = latitude;
						that.longitude = longitude;
					}
				}
			},
			toSchoolDetail(e){
				uni.navigateTo({
					url: "/pages/school_detail/school_detail?id="+e
				})
			},
			toReserve(e){
				uni.reLaunch({
					url: "/pages/reserve/reserve"
				})
			},
			callouttap(e){
				console.log(e)
			}
		},
		onLoad() {
			this.covers[0].callout.content = "莲花山校区离我最近";
		},
		onReady() {
			var that = this;
			mapContext.moveToLocation(that.latitude,that.longitude);
		}
	}
</script>

<style scoped lang="scss">
	.school_view{
		.fixed_top{
			padding-bottom: 30upx;
			overflow: hidden;
			width: 100%;
			// height: 490upx;
			// position: fixed;
			box-sizing: border-box;
			// left: 0;
			// top: var(--status-bar-height);
			background: #fff;
			// box-shadow: 0 1upx 10upx #E9E9E9;
			z-index: 5;
		}
		.address_txt{
			color: #333;
			font-size: 50upx;
			margin: 0 0 30upx;
			padding: 0 40upx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			font-weight: bold;
			image{
				display: inline-block;
				width: 14upx;
				height: 8upx;
				margin-left: 10upx;
			}
		}
		.search_school{
			padding: 0 40upx;
			box-sizing: border-box;
			.form_box{
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #fff9df;
				border-radius: 10upx;
				margin-bottom: 40upx;
				image{
					display: inline-block;
					width: 34upx;
					height: 34upx;
					margin-right: 10upx;
				}
				input{
					display: block;
					width: 100upx;
					color: #fdcb05;
					font-size: 32upx;
				}
			}
		}
		.nearby_school{
			padding: 0 40upx;
			box-sizing: border-box;
			border-bottom: 8upx solid #f6f6f6;
			&.noborder{
				border-bottom: 0;
				margin-top: 30upx;
			}
			.near_title{
				color: #999;
				font-size: 26upx;
				margin: 0 0 20upx;
			}
			.near_item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 15upx;
				padding-bottom: 15upx;
				border-bottom: 1px solid #F8F8F8;
				&:last-of-type{
					border-bottom: 0;
				}
				.ni_title{
					color: #444;
					font-size: 34upx;
					margin-bottom: 10upx;
					font-weight: bold;
				}
				.ni_btn{
					margin: 0;
					display: inline-block;
					padding: 0 15upx;
					height: 45upx;
					line-height: 45upx;
					color: #fff;
					font-size: 22upx;
					background: #fdc618;
					border-radius: 0;
					&:after{
						border: 0;
					}
				}
				.ni_info,.ni_dist{
					color: #999;
					font-size: 24upx;
				}
			}
		}
	}
	.map_box{
		display: block;
		border-radius: 20upx;
		overflow: hidden;
		width: 670upx;
		height: 240upx;
		margin: 0 auto;
	}
	#map{
		display: block;
		width: 750upx;
		height: 240upx;
		// padding: 0 40upx;
		box-sizing: border-box;
	}
	.invite_box{
		right: 30upx;
		bottom: 30upx;
	}
</style>
<template>
	<view class="navbar_box" :class="[isAndroid == true?'and':'' || isIpx == true?'ipx':'']">
		<image src="../static/back1.png" @tap.stop="back" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isAndroid: getApp().globalData.isAndroid,
				isIpx: getApp().globalData.isIpx
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
</style>

<template>
	<view class="navbar_box">
		<image src="../static/back1.png" @tap="back" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
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

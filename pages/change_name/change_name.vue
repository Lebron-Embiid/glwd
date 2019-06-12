<template>
	<view class="change_name_view">
		<view class="change_name">
			<input type="text" placeholder="输入您的昵称" v-model="username" :value="username">
			<text>保存</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				username: ""
			}
		},
		methods:{
			
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.change_name{
		padding: 40upx 25upx 20upx;
		border-bottom: 1px solid #EFEFEF;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		input{
			color: #999;
			font-size: 30upx;
		}
		text{
			display: block;
			width: 120upx;
			height: 60upx;
			line-height: 60upx;
			text-align: center;
			color: #fff;
			font-size: 24upx;
			background: #fbc800;
			border-radius: 50upx;
		}
	}
</style>
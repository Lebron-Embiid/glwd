<template>
	<form class="common_search" :class="[isAndroid == true?'and':'' || isIpx == true?'ipx':'']" @submit="formSubmit">
		<image src="/static/search.png" mode="aspectFit"></image>
		<view class="input_box"><input type="text" v-model="keywords" :value="keywords" :placeholder="placeholder" /></view>
	</form>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			placeholder: String,
			keywords: String,
			isAndroid: Boolean,
			isIpx: Boolean
		},
		methods:{
			formSubmit(){
				console.log(this.keywords);
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>

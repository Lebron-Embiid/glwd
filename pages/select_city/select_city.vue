<template>
	<view class="city_view">
		<view class="page_bg"></view>
		<uni-select :navAttr="navAttr" :listAttr="listAttr" :quickPanelData="quickPanelData" :listData="listData" @chooseItem="chooseItem" @chooseItem1="chooseItem1"></uni-select>
	</view>
</template>

<script>
	import listData from '../../common/city.js'
	import uniSelect from '../../components/lee-select/lee-select.vue'
	export default{
		data(){
			return{
				listData: listData,
				quickPanelData:[
					{
					title:'当前定位',
					navName: '当前',
					data:['上海'],
					titleBackground: 'none',
					titleFontSize: 32,
					titleColor: '#333',
					itemFontSize: 28,
					itemColor: '#666',
					height: 150
				},
				{
					title:'热门城市',
					navName: '热门',
					data:['上海','北京','成都','昆明','西安'],
					titleBackground: 'none',
					titleFontSize: 32,
					titleColor: '#333',
					itemFontSize: 28,
					itemColor: '#666',
					height: 224
				}
				],
				listAttr: {
					listBackgroundColor:'none',
					titleFontSize: 32,
					titleColor: '#333',
					titleHeight: 60,
					titleBackground: 'none',
					titlePadding: 20,
					itemHeight: 80,
					itemFontSize: 28,
					itemBorderBottom: '1px solid rgba(0, 0, 0, 0.1)',
					itemColor: '#666'
				},
				navAttr: {
					enable: true,
					backgroundColor: 'rgba(0, 0, 0, 0)',
					color: '#fdcb05',
					activeColor: '#fdcb05',
					fontSize: 24,
					itemPadding:'10 0',
					borderRadius: 100,
					padding:'20 0'
				}				
			}
		},
		components:{
			uniSelect
		},
		methods:{
			chooseItem(item) {
				console.log(item)
				getApp().globalData.address = item;
				uni.reLaunch({
					url: "/pages/school/school?name="+item
				})
			},
			chooseItem1(item) {
				console.log(item)
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.city_view{
		height: 100vh;
	}
</style>
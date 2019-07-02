<template>
	<view class="select-page">
		<scroll-view class="scroll-list-panel" scroll-y="true" :scroll-into-view="scrollId" scroll-with-animation="true" @scroll="scroll">
			<view class="common_search_bg">
				<form class="common_search" @submit="formSubmit">
					<image src="/static/search.png" mode="aspectFit"></image>
					<view class="input_box"><input type="text" v-model="keywords" :value="keywords" :placeholder="placeholder" /></view>
				</form>
			</view>
			<view class="mt80"></view>
			<base-classes v-for="(item, index) in quickPanelData" :classesAttr="item" :id="'view'+ index" :curIndex="curIndex" :curIndex1="curIndex1" :cIndex="index" :key="index" @chooseItem="chooseItem"></base-classes>
			<view class="main-wrap">
				<view class="sort-wrap" v-for="(sort,index1) in listData" :key="index1" :id="'view'+ [index1+2]" :style="{backgroundColor:getListAttrListBackgroundColor}">
					<view class="title" :style="{fontSize:getListAttrTitleFontSize,color:getListAttrTitleColor,background:getListAttrTitleBackground}">{{sort.initial}}</view>
					<view class="list">
						<text :class="[curIndex == index1 && curIndex1 == index2 ? 'active':'']" v-for="(city, index2) in sort.list" :key="index2" :style="{height:getListAttrItemHeight,fontSize:getListAttrItemFontSize,borderBottom:getListAttrItemBorderBottom,color:getListAttrItemColor,background:getListAttrItemBackgroundColor}" @tap="chooseItem(city.name,index1,index2)">{{city.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="now-sort" :style="{fontSize:getListAttrTitleFontSize,color:getListAttrTitleColor,height:getListAttrTitleHeight}">{{navData[activeIndex]}}</view>
		<view :class="['now-letter', fadeFlag?'fadeIn':'']">{{navData[activeIndex]}}</view>
		<view class="letter-nav" v-if="navAttr.enable" :style="{backgroundColor:getNavAttrbackgroundColor,padding:getNavAttrPadding,borderRadius:getNavAttrBorderRadius}">
			<text :class="['item',index === activeIndex ? 'active': '']" v-for="(item,index) in navData" :key="index"
			 @click="scrollSelect(index)" :style="{fontSize:getNavAttrFontSize,color:index === activeIndex ? getNavAttrActiveColor : getNavAttrColor,padding:getNavAttrItemPadding}">{{item}}</text>
		</view>
	</view>
</template>

<script>
	import baseClasses from '../base-classes/base-classes.vue'
	export default {
		components: {
			baseClasses
		},
		data() {
			return {
				placeholder: "输入城市名",
				keywords: "",
				curIndex: "-1",
				curIndex1: "-1",
				navData:[], // 侧边导航栏数据
				toView: 'sort0',
				scrollId: "",
				scrollTop: 0,
				disArray: [0],
				activeIndex: 0,
				fadeFlag: false,
				Timer: null
			}
		},
		props: {
			listData: Array,
			quickPanelData:{
				type:Array,
				default: function() {
					return []
				}
			},
			navAttr: {
				type: Object,
				default: function(){
					return {}
				}
			},
			listAttr: {
				type: Object,
				default: function(){
					return {
						listBackgroundColor:'transport',
						titleFontSize: 28,
						titleColor: '#333',
						titleHeight: 60,
						titleBackground: '#ccc',
						titlePadding: 20,
						itemHeight: 80,
						itemFontSize: 28,
						itemBorderBottom: '1px solid rgba(0, 0, 0, 0.1)',
						itemColor: '#333',
						itemBackgroundColor: '',
						itemMargin: 20
					}
				}
			},
		},
		computed:{
			getNavData() {
				this.quickPanelData.forEach((item,index) => {
					const navItem = item.navName || item.title || '标题'
					this.navData.push(navItem)
				})
				console.log()
				this.listData.forEach((item,index) => {
					this.navData.push(item.initial)
				})
			},
			getListAttrListBackgroundColor() {
				return this.listAttr.listBackgroundColor || 'transport'
			},
			getListAttrTitleColor() {
				return this.listAttr.titleColor || '#333'
			},
			getListAttrTitleFontSize() {
				return uni.upx2px(this.listAttr.titleFontSize || 24) + 'px'
			},
			getListAttrTitleHeight() {
				return uni.upx2px(this.listAttr.titleHeight || 60) + 'px'
			},
			getListAttrTitleBackground() {
				return this.listAttr.titleBackground || '#ccc'
			},
			getListAttrTitlePadding() {
				return uni.upx2px(this.listAttr.titlePadding ||20) + 'px'
			},
			getListAttrItemHeight() {
				return uni.upx2px(this.listAttr.itemHeight || 80) + 'px'
			},
			getListAttrItemFontSize() {
				return uni.upx2px(this.listAttr.itemFontSize || 28) + 'px'
			},
			getListAttrItemColor() {
				return this.listAttr.itemColor || '#333'
			},
			getListAttrItemBackgroundColor() {
				return this.listAttr.itemBackgroundColor || ''
			},
			getListAttrItemBorderBottom() {
				return this.listAttr.itemBorderBottom || '1px solid rgba(0, 0, 0, 0.1)'
			},
			getListAttrItemMargin() {
				return 0 + ' ' + uni.upx2px(this.listAttr.itemFontSize || 20) + 'px'
			},
			// getListAttrItemMargin() {
			// 	return 0 + ' ' + uni.upx2px(this.listAttr.itemFontSize || 20) + 'px'
			// },
			getNavAttrbackgroundColor() {
				return this.navAttr.backgroundColor || 'rgba(0, 0, 0, 0.4)'
			}, 
			getNavAttrColor() {
				return this.navAttr.color || '#333'
			}, 
			getNavAttrActiveColor() {
				return this.navAttr.activeColor || '#333'
			},
			 getNavAttrFontSize() {
			 	return uni.upx2px(this.navAttr.fontSize || 28) + 'px'
			 },
			 getNavAttrItemPadding() {
				 if (this.navAttr.itemPadding) {
					let temp = ''
					 const arr = this.navAttr.itemPadding.split(' ')
					 arr.forEach((item,index)=> {
						 temp += uni.upx2px(item) + 'px' + ' '
					 })
					 return temp
				 } else {
					 return uni.upx2px(4) + 'px' + ' ' + uni.upx2px(8) + 'px'
				 }
			 },
			 getNavAttrBorderRadius() {
				 return uni.upx2px(this.navAttr.borderRadius || 100) + 'px'
			 },
			 getNavAttrPadding() {
				  if (this.navAttr.itemPadding) {
				 					let temp = ''
				 					 const arr = this.navAttr.padding.split(' ')
				 					 arr.forEach((item,index)=> {
				 						 temp += uni.upx2px(item) + 'px' + ' '
				 					 })
				 					 return temp
				 } else {
				 					 return uni.upx2px(0) + 'px' + ' ' + uni.upx2px(20) + 'px'
				 }
			 }
		},
		methods: {
			formSubmit(e){
				console.log(e);
			},
			scrollSelect(index) {
				this.scrollId = "view"+index;
				console.log(this.scrollId)
				// clearTimeout(this.Timer)
				// this.scrollTop = this.disArray[index]
				// console.log(this.scrollTop)
				this.activeIndex = index
				// this.fadeFlag = true
				// this.Timer = setTimeout(() => {
				// 	this.fadeFlag = false
				// }, 1000)
			},
			scroll(e) {
				// console.log(e)
				// const length = this.disArray.length
				// for (let i = 0; i < length; i++) {
				// 	if (this.disArray[i] < e.detail.scrollTop && this.disArray[i + 1] > e.detail.scrollTop) {
				// 		this.activeIndex = i
				// 		console.log(this.activeIndex)
				// 	}
				// }
			},
			getDisArray() {
				let dis = this.disArray[0]
				this.quickPanelData.forEach((item,index) => {
					dis = dis + uni.upx2px(item.height || 350)
					this.disArray.push(dis)
				})
				this.listData.forEach((item, index) => {
					const length = this.disArray.length -1
					dis = this.disArray[length] + (parseInt(this.getListAttrTitleHeight) + parseInt(this.getListAttrItemHeight) * item.list.length)
					this.disArray.push(dis)
				})
				console.log(this.disArray)
			},
			chooseItem(item,index,index1) {
				// index = index+2;
				// this.curIndex = index;
				// this.curIndex1 = index1;
				this.$emit('chooseItem',item)
			}
		},
		mounted() {
			this.getDisArray()
		}
	}
</script>

<style lang="scss" scoped>
	.common_search_bg{
		// position: fixed;
		// width: 100%;
		background: #f2f2f2;
		// left: 0;
		// top: 0;
		// z-index: 10;
		padding: 10upx 0 30upx;
		overflow: hidden;
		.common_search{
			box-sizing: border-box;
			width: 92%;
			padding: 0;
			background: #fff;
			margin: 0 auto;
		}
	}
	.mt80{
		// margin-top: 110upx;
	}
	.select-page {
		padding: 0 30upx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 20;
		height:100%;
			.scroll-list-panel {
				height:inherit;
				.title {
					display: flex;
					align-items: center;
					box-sizing: border-box;
				}

				.list {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					flex-wrap: wrap;
					box-sizing: border-box;
					padding-bottom: 30upx;
					margin-bottom: 30upx;
					box-sizing: border-box;
					border-bottom: 1px solid #DCDCDC;
					&:last-of-type{
						border-bottom: 0;
						margin-bottom: 0;
					}
					text {
						display: flex;
						align-items: center;
						box-sizing: border-box;
						padding: 0 50upx;
						width: auto !important;
						height: 68upx !important;
						line-height: 68upx !important;
						border-radius: 50upx !important;
						background: #fff !important;
						border: 0 !important;
						margin-right: 30upx !important;
						margin-top: 30upx !important;
						&.active{
							color: #fff !important;
							background: #fdcb05 !important;
						}
					}
				}
			}

			.now-sort {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				display: none;
			}

			.now-letter {
				font-size: 160upx;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate3d(-50%, -50%, 0);
				opacity: 0;

				&.fadeIn {
					animation: fade 1s linear 0ms;
				}
			}

			.letter-nav {
				position: fixed;
				top: 50%;
				transform: translateY(-50%);
				right: 25upx;
				display: flex;
				flex-direction: column;
				text-align: center;
				z-index:99999;
			}

	}

	@keyframes fade {
		0% {
			opacity: 0;
			display: block !important;
		}

		50% {
			opacity: 0.4;
		}

		100% {
			display: none;
			opacity: 0 !important;
		}
	}
</style>

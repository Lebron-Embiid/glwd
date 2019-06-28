<template>
	<view class="base-wrap" :class="[cIndex == 0?'first':'']">
		<view class="title" :style="{fontSize:getTitleFontSize,color:getTitleColor,background:getTitleBackground}">{{getTitle}}</view>
		<view class="panel">
			<text v-for="(item,index1) in getData" :key="index1" class="item" :class="[index_1 == cIndex && index_2 == index1 ? 'active':'' ]" :style="{width:getItemWidth,height:getItemHeight,fontSize:getItemFontSize,border:getItemBorder,borderRadius:getItemBorderRadius,marginTop:getItemMarginTop,color:getItemColor,background:getItemBackgroundColor}" @tap="chooseItem(item,cIndex,index1)">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				index_1: "",
				index_2: ""
			}
		},
		props: {
			cIndex: Number,
			curIndex: String,
			curIndex1: String,
			classesAttr: Object
		},
		computed: {
			getData() {
				return this.classesAttr.data || []
			},
			getTitle() {
				return this.classesAttr.title || '模块标题'
			},
			getTitleColor() {
				return this.classesAttr.titleColor || '#333'
			},
			getTitleFontSize() {
				return uni.upx2px(this.classesAttr.titleFontSize || 24) + 'px'
			},
			getTitleHeight() {
				return uni.upx2px(this.classesAttr.titleHeight || 60) + 'px'
			},
			getTitleBackground() {
				return this.classesAttr.titleBackground || '#ccc'
			},
			getTitlePadding() {
				return uni.upx2px(this.classesAttr.titlePadding ||20) + 'px'
			},
			getHeight() {
				return uni.upx2px(this.classesAttr.height || 350) + 'px'
			},
			getContentPadding() {
				return  0 + ' ' + uni.upx2px(this.classesAttr.contentPadding || 20) + 'px'
			},
			getItemWidth() {
				return uni.upx2px(this.classesAttr.itemWidth || 200) + 'px'
			},
			getItemHeight() {
				return uni.upx2px(this.classesAttr.itemHeight || 50) + 'px'
			},
			getItemFontSize() {
				return uni.upx2px(this.classesAttr.itemFontSize || 28) + 'px'
			},
			getItemColor() {
				return this.classesAttr.itemColor || '#333'
			},
			getItemBackgroundColor() {
				return this.classesAttr.itemBackgroundColor || ''
			},
			getItemBorder() {
				return this.classesAttr.itemBorder || '1px solid rgba(0, 0, 0, 0.1)'
			},
			getItemBorderRadius() {
				return uni.upx2px(this.classesAttr.itemBorderRadius || 20) + 'px'
			},
			getItemMarginTop() {
				return uni.upx2px(this.classesAttr.itemMarginTop || 20) + 'px'
			}
		},
		methods:{
			chooseItem(item,index,index1) {
				// this.index_1 = index;
				// this.index_2 = index1;
				// console.log(index,index1)
				// console.log(this.index_1,this.index_2)
				this.$emit('chooseItem',item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.base-wrap {
		overflow: hidden;
		padding-bottom: 30upx;
		margin-bottom: 30upx;
		box-sizing: border-box;
		border-bottom: 1px solid #DCDCDC;
		.title {
			display: flex;
			align-items: center;
			box-sizing: border-box;
		}

		.panel {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			text-align: justify;
			.item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				// width: 200upx;
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
			&::after {
				display: block;
				content: '';
				// width: 200upx;
				border: 1px solid transparent;
			}
		}
		&.first{
			display: flex;
			justify-content: space-between !important;
			.panel{
				.item{
					margin-top: 0 !important;
					margin-right: 20upx !important;
					position: relative;
					z-index: 5;
				}
			}
		}
	}
</style>

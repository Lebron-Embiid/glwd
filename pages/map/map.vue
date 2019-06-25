<template>
	<view class="map_view">
		<map :latitude="latitude" :longitude="longitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default{
		data(){
			return{
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
				}]
			}
		},
		onLoad() {
			this.covers[0].callout.content = "莲花山校区离我最近";
		}
	}
</script>

<style scoped lang="scss">
	map{
		position: fixed;
		left: 0;
		top: 0;
		display: block;
		width: 100%;
		height: 100%;
		z-index: 50;
	}
</style>

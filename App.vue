<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.page_bg{background: #f5f5f7 !important;min-height: 100%;position: fixed;width: 100%;z-index: -1;left: 0;top: 0;}
	.mt500{margin-top: 540upx;}
	.status_bar {  
		height: var(--status-bar-height);  
		width: 100%;  
		background-color: #F8F8F8;  
	}  
	.top_view {  
		height: var(--status-bar-height);  
		width: 100%;  
		position: fixed;  
		background-color: #F8F8F8;  
		top: 0;  
		z-index: 999;  
	}  
	
	// 分享按钮
	.vi_share,.vd_share{
		margin-top: 15upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.vs_item{
			display: flex;
			align-items: center;
			color: #333;
			font-size: 22upx;
			margin-left: 25upx;
			image{
				display: inline-block;
				width: 32upx;
				height: 32upx;
				margin-right: 10upx;
			}
			&:nth-child(3){
				image{
					width: 28upx;
					height: 30upx;
				}
			}
			&:nth-child(4){
				image{
					width: 36upx;
					height: 29upx;
				}
			}
		}
	}
	/* 搜索 */
	.common_search{
		display: block;
		// position: fixed;
		// left: 0;
		// top: var(--window-top);
		width: 100%;
		background: #f5f5f5;
		border-radius: 50upx;
		margin: 20upx 0;
		span{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 60upx;
			padding: 0 30upx;
			box-sizing: border-box;
		}
		image{
			display: block;
			margin: 0 10upx 0 0;
			width: 34upx;
			height: 34upx;
		}
		.input_box{
			display: inline-block;
			width: 80%;
			input{
				color: #b0b0b0;
				font-size: 24upx;
			}
		}
	}
</style>

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
	// 预约按钮
	.invite_box{
		position: fixed;
		right: 55upx;
		bottom: 130upx;
		width: 155upx;
		height: 75upx;
		color: #fff;
		font-size: 28upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(#fed027,#fdc618,#fbb801);
		border-radius: 50upx;
		z-index: 5;
		image{
			display: inline-block;
			width: 44upx;
			height: 44upx;
			margin-right: 10upx;
		}
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
		position: relative;
		image{
			position: absolute;
			left: 20upx;
			top: 50%;
			transform: translateY(-50%);
			width: 34upx;
			height: 34upx;
		}
		.input_box{
			width: 80%;
			padding-left: 70upx;
			display: flex;
			align-items: center;
			input{
				color: #b0b0b0;
				font-size: 24upx;
			}
		}
	}
	// 课程
	.lesson_box{
		overflow: hidden;
		.lesson_item{
			margin-bottom: 30upx;
			.li_img{
				border-radius: 5upx;
				margin-bottom: 15upx;
				position: relative;
				image{
					display: block;
					width: 100%;
					max-height: 400upx;
				}
				text{
					display: inline-block;
					color: #fff;
					font-size: 20upx;
					background: #fbc800;
					border-radius: 5upx;
					padding: 4upx 10upx 7upx;
					position: absolute;
					right: 20upx;
					top: 20upx;
				}
			}
			.li_info{
				color: #333;
				font-size: 26upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 25upx 0 10upx;
				box-sizing: border-box;
				.li_price{
					color: #d3a800;
					font-size: 22upx;
				}
			}
		}
	}
	// 首页导航
	.index_nav{
		margin-bottom: 15upx;
		.nav_box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 25upx;
			.nav_item{
				width: 25%;
				text-align: center;
				color: #999;
				font-size: 30upx;
				padding: 8upx 0;
				position: relative;
				&.active{
					color: #fbc800;
				}
				&.active:after{
					content: "";
					width: 40upx;
					height: 4upx;
					background: #fbc800;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: 0;
					border-radius: 5upx;
				}
			}	
		}
		.index_scroll_box{
			white-space: nowrap;
			overflow-x: scroll;
			padding: 0 25upx;
			box-sizing: border-box;
			background: #f5f5f5;
			view{
				display: inline-block;
				height: 60upx;
				line-height: 60upx;
				padding: 0 25upx;
				color: #bebebe;
				font-size: 24upx;
				&.active{
					color: #333;
					font-size: 26upx;
				}
			}
		}
	}
</style>

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
	uni-radio .uni-radio-input{margin-right: 0}
	
	.uni-picker .uni-picker-action.uni-picker-action-cancel,.uni-picker .uni-picker-action.uni-picker-action-confirm{color: #FBC800;}
	uni-picker .uni-picker-item{font-size: 28upx;}
	/*每个页面公共css */
	uni-page-head .uni-page-head__title{font-weight: normal;}
	.uni-actionsheet__action{margin-top: 0 !important;border-top: 1upx solid #F2F2F3;}
	.uni-actionsheet__action .uni-actionsheet__cell{color: #FBC800 !important;}
	
	uni-modal .uni-modal{width: 480upx;height: 220upx;border-radius: 15upx;}
	uni-modal .uni-modal__bd{color: #333;font-size: 36upx;padding: 1em 1.6em 1em;}
	uni-modal .uni-modal__btn_default{color: #333;font-size: 30upx;}
	uni-modal .uni-modal__btn_primary{font-size: 30upx;}
	uni-modal .uni-modal__btn:after,.uni-modal .uni-modal__ft:after{display: none;}
	uni-modal .uni-modal__btn:active{background: none;}
	*{font-family: PingFang SC Bold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}
	.page_bg{background: #f5f5f7 !important;min-height: 100%;position: fixed;width: 100%;z-index: -1;left: 0;top: 0;}
	.mt500{margin-top: 540upx;}
	.status_bar {  
		height: 25px;  
		width: 100%;  
		background-color: #fff;  
	}  
	.top_view {  
		height: 25px;  
		width: 100%;  
		position: fixed;  
		background-color: transparent;  
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
		width: 450upx;
		background: #f5f5f5;
		border-radius: 50upx;
		// margin: 20upx 0;
		margin: 0 0 20upx;
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
			height: 60upx;
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
					height: 36upx;
					line-height: 36upx;
					padding: 0 10upx;
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
					font-weight: bold;
				}
			}
		}
	}
	// 购物车按钮
	.fix_car_btn{
		position: fixed;
		width: 175upx;
		height: 70upx;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 30upx;
		// bottom: 120upx;
		bottom: 30upx;
		background: linear-gradient(top, #ffd42c,#fbb802);
		color: #fff;
		font-size: 28upx;
		border-radius: 50upx;
		z-index: 10;
		.fcb_car{
			position: relative;
			margin-right: 15upx;
			image{
				display: inline-block;
				width: 44upx;
				height: 40upx;
			}
			text{
				display: block;
				position: absolute;
				right: -15upx;
				top: -10upx;
				background: #fff;
				border-radius: 50%;
				color: #fbc800;
				font-size: 24upx;
				width: 30upx;
				height: 30upx;
				line-height: 30upx;
				text-align: center;
			}
		}
	}
	.fix_car_bottom{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 96upx;
		padding: 20upx 25upx;
		box-sizing: border-box;
		border-top: 1px solid #D4D4D4;
		background: #fff;
		z-index: 20;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.radio{
			color: #666;
			font-size: 30upx;
			display: flex;
			align-items: center;
			radio{
				transform: scale(.8);
			}
		}
		.fix_car_info{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			text{
				color: #e83632;
				font-size: 30upx;
				margin-right: 20upx;
			}
			button{
				padding: 0;
				margin: 0;
				width: 190upx;
				height: 60upx;
				line-height: 60upx;
				background: #e83632;
				color: #fff;
				font-size: 30upx;
				border-radius: 50upx;
			}
		}
	}
	// 轮播样式修改
	.swiper .uni-swiper-wrapper{
		overflow: visible;
	}
	.swiper .uni-swiper-dots-horizontal{
		bottom: -15px;
	}
	.swiper .uni-swiper-dots-horizontal .uni-swiper-dot{
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #999;
	}
	.swiper .uni-swiper-dots-horizontal .uni-swiper-dot-active{
		background: #666;
		width: 22px;
		border-radius: 10upx;
	}
	// 支付弹框样式
	.pay_success,.pay_fail{
		position: fixed;
		width: 350upx;
		height: 350upx;
		background: #fff;
		border-radius: 30upx;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		display: none;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 60upx 0;
		box-sizing: border-box;
		z-index: 30;
		&.active{
			display: flex;
		}
		image{
			display: block;
			width: 147upx;
			height: 172upx;
			margin: 0 auto 20upx;
		}
		text{
			color: #333;
			font-size: 30upx;
			display: block;
			width: 100%;
			text-align: center;
		}
	}
	.ld_shadow{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.3);
		left: 0;
		bottom: 0;
		display: none;
		z-index: 25;
		&.active{
			display: block;
		}
	}
	
	// 自定义返回按钮样式
	.navbar_box{
		position: fixed;
		width: 100%;
		top: 58upx;
		left: 28upx;
		z-index: 50;
		image{
			display: block;
			width: 20upx;
			height: 36upx;
		}
	}
</style>

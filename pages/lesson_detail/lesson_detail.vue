<template>
	<view class="lesson_detail_view">
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view>  
		<image src="../../static/lesson_detail_banner.jpg" mode="widthFix" class="ld_banner"></image>
		<!-- <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="rgba(102,102,102,.5)" indicator-active-color="#666" circular="true">
			<swiper-item v-for="(item,index) in swiper_list" :key="index">
				<view class="swiper-item"><image :src="item" mode="widthFix"></image></view>
			</swiper-item>
		</swiper> -->
		<view class="ld_info">
			<view class="ld_left">
				<view class="ldi_title">{{title}}</view>
				<view class="ldi_info">{{info}}</view>
				<view class="ldi_price">¥{{price}}<text>¥{{old_price}}</text></view>
			</view>
			<view class="ld_right">
				<button @tap="toScanCode"><image src="../../static/add_person.png" mode="widthFix"></image>加群</button>
			</view>
		</view>
		<view class="ld_format" @tap="showLayer">
			<text>选择：规格</text>
			<view>{{format_txt}}<image src="../../static/next.png" mode="widthFix"></image></view>
		</view>
		<view class="ld_content">
			<view class="lc_txt">课程介绍</view>
			<view class="lc_content">
				{{content}}
			</view>
		</view>
		<view class="fix_car_btn" @tap="toCar">
			<view class="fcb_car"><image src="../../static/car.png" mode="widthFix"></image><text>1</text></view>
			购物车
		</view>
		<view class="ld_shadow" :class="[layerShow == true?'active':'']" @tap="hideLayer"></view>
		<view class="ld_layer_box" :class="[layerShow == true?'active':'']">
			<view class="lb_close"><image src="../../static/close.png" mode="widthFix" @tap="hideLayer"></image></view>
			<view class="lb_lesson_info">
				<image :src="src" mode="widthFix"></image>
				<view class="li_box">
					<view class="li_title">{{title}}</view>
					<view class="li_price">￥{{price}}</view>
				</view>
			</view>
			<view class="layer_format">
				<view class="format_item" v-for="(format,index) in buy_format" :key="index">
					<view class="format_name">{{format.name}}</view>
					<view class="format_list">
						<button class="fl_item" :class="[format.current[0] == index && format.current[1] == idx?'active':''] || [item[idx].dis == true?'disable':'']" v-for="(item,idx) in format.list" :key="idx" @click="selectFormat(format.id,item.attr_id,index,idx)">{{item.attr_name}}</button>
					</view>
				</view>
			</view>
			<view class="layer_num">
				<view class="ln_txt">数量<text>(没人限购1件)</text></view>
				<uni-number-box :min="0" :max="1"></uni-number-box>
			</view>
			<view class="layer_info">
				<view class="li_item">
					<text>类型</text>
					<view @tap="selectType">{{type}}<image src="../../static/down2.png" mode="widthFix"></image></view>
				</view>
				<view class="li_item">
					<text>姓名</text>
					<view><input type="text" placeholder="请填写姓名" placeholder-style="color:#999;" value="" v-model="name" /></view>
				</view>
				<view class="li_item">
					<text>手机</text>
					<view><input type="text" placeholder="请填写手机" placeholder-style="color:#999;" value="" v-model="phone" /></view>
				</view>
				<view class="li_item">
					<text>地址</text>
					<view><input type="text" placeholder="请填写地址" placeholder-style="color:#999;" value="" v-model="address" /></view>
				</view>
			</view>
			<button class="submit_query" @tap="showPay">确定</button>
		</view>
		<view class="layer_pay_box" :class="[payShow == true?'active':'']">
			<view class="layer_pay_move">
				<view class="layer_pay">
					<view class="lp_top">
						<view class="lpt_title">{{title}}</view>
						<view class="lpt_price">￥{{price}}</view>
					</view>
					<view class="lp_center">
						<view class="lpc_item">规格：256元1节体验课</view>
						<view class="lpc_item">类型：无基础</view>
						<view class="lpc_item">姓名：刘先生</view>
						<view class="lpc_item">手机：16988886699</view>
						<view class="lpc_item">地址：广东省深圳市福田区</view>
						<view class="lpc_item">数量：1</view>
						<view class="lpc_item">备注：<input type="text" placeholder="请填写备注" value="" /></view>
					</view>
					<view class="lp_bottom">
						<label class="radio">
							<view>
								<image src="../../static/wexin.png" mode="widthFix"></image>
								<text>微信支付</text>
							</view>
							<radio value="" color="#e83632" checked />
						</label>
					</view>
				</view>
				<button class="lp_submit" @tap="toPay">支付{{price}}元</button>
				<view class="lp_txt">购买后客服将在1个工作日内与您联系</view>
			</view>
		</view>
		<view class="fixed_bottom">
			<view class="fb_collect" @tap="toCollect(id)"><image src="../../static/l_collect.png" mode="widthFix"></image><view>收藏</view></view>
			<view class="fb_share" @tap="toShare"><image src="../../static/l_share.png" mode="widthFix"></image><view>分享</view></view>
			<view class="fb_addcar" @tap="toAddCar"><button>加入购物车</button></view>
			<view class="fb_buy" @tap="toBuy"><button>立即购买</button></view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default{
		data(){
			return{
				id: "",
				title: "初级拉丁舞课程",
				info: "成人次卡3000元33节课，27家直营校区跨校通用",
				price: "256.00",
				src: "../../static/layer_img.jpg",
				old_price: "368.00",
				format_txt: "",
				content: "拉丁舞是体育竞技舞蹈，爆发力，极强的风格，技巧是它的特点，有很大的竞技体育舞蹈发挥空间，现在已经入亚运会正式比赛项目，拉丁舞2014年11月12日正式申请进入奥运会，现正在审批阶段，拉丁舞每年最高赛事WDSF协会会在世界各地成员国选择不同地点举行，对于世界上所有参与国际标准舞工作的人士而言，英国的黑池可谓是国际标准舞活动之首。WDC会在固定地点英国举办黑池舞蹈节，深受欧洲人民喜爱。",
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 800,
				swiper_list: ["../../static/lesson_detail_banner.jpg","../../static/lesson_detail_banner.jpg","../../static/lesson_detail_banner.jpg"],
				layerShow: false,
				payShow: false,
				buy_format: [
					{
						id: 1,
						name: "规格",
						current: [0,0],
						list: [
							{
								attr_id: 1,
								attr_name: "3000元33节课",
								dis: true
							},
							{
								attr_id: 2,
								attr_name: "256元1节体验课",
								dis: false
							}
						]
					}
				],
				attr: [],
				attr_id: [],
				type: "请选择类型",
				typeList: ['有基础', '无基础', '少儿','成人'],
				name: "",
				phone: "",
				address: "",
				shareList: ["分享到微信好友","分享到微信朋友圈"]
			}
		},
		components: {
			uniNumberBox
		},
		methods:{
			toScanCode(){
				uni.navigateTo({
					url: "/pages/scan_code/scan_code"
				})
			},
			showLayer(){
				this.layerShow = true;
			},
			hideLayer(){
				this.layerShow = false;				
			},
			showPay(){
				this.layerShow = false;
				this.payShow = true;
			},
			toCar(){
				uni.navigateTo({
					url: "/pages/car/car"
				})
			},
			toPay(){
				uni.showToast({
					title: "支付成功",
					image: "../../static/pay_ok.png"
				})
				uni.showToast({
					title: "支付失败",
					image: "../../static/pay_no.png"
				})
			},
			selectFormat: function(id,sid,index,idx){
				var that = this;
				let arr_id = [];
				that.attr[index] = {
					attr_group_id: that.buy_format[index].id,
					attr_group_name: that.buy_format[index].name,
					attr_id: that.buy_format[index].list[idx].attr_id,
					attr_name: that.buy_format[index].list[idx].attr_name,
				}
				that.attr_id[index] = that.attr[index].attr_id;
				that.buy_format[index].current = [index,idx];
				var len = that.buy_format.length;
				if(that.attr.length == len){
					that.is_format = 0;
				} 
				if(that.attr_id.length != that.buy_format.length || that.attr_id[0] == undefined){
				   return false;
				}
			},
			selectType(){
				var that = this;
				uni.showActionSheet({
					itemList: that.typeList,
					success: function (res) {
						that.type = that.typeList[res.tapIndex]
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			toCollect(e){
				uni.showToast({
					title: "收藏成功！",
					icon: "none"
				})
			},
			toShare(){
				var that = this;
				uni.showActionSheet({
					itemList: that.shareList,
					success: function (res) {
						if(res.tapIndex == 0){
							// 分享到微信好友
							uni.share({
								provider: "weixin",
								scene: "WXSceneSession",
								type: 0,
								href: "http://uniapp.dcloud.io/",
								title: "uni-app分享",
								summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
								imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
								success: function (res) {
									console.log("success:" + JSON.stringify(res));
								},
								fail: function (err) {
									console.log("fail:" + JSON.stringify(err));
								}
							});
						}else{
							// 分享到微信朋友圈
							uni.share({
								provider: "weixin",
								scene: "WXSenceTimeline",
								type: 0,
								href: "http://uniapp.dcloud.io/",
								title: "uni-app分享",
								summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
								imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
								success: function (res) {
									console.log("success:" + JSON.stringify(res));
								},
								fail: function (err) {
									console.log("fail:" + JSON.stringify(err));
								}
							});
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			toAddCar(){
				var that = this;
				if(that.layerShow == false){
					that.layerShow = true;
				}
			},
			toBuy(){
				var that = this;
				if(that.layerShow == false){
					that.layerShow = true;
				}
			}
		},
		onShow: function(){
			
		},
		onLoad(opt) {
			var that = this;
			that.id = opt.id;			
		}
	}
</script>

<style scoped lang="scss">
	.swiper{
		width: 750upx;
		height: 500upx;
	}
	.swiper .swiper-item image{
		display: block;
		width: 100%;
		height: 100%;
	}
	.ld_banner{
		width: 750upx;
		height: 500upx;
	}
	.ld_info{
		padding: 25upx;
		box-sizing: border-box;
		border-bottom: 10upx solid #ededed;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.ld_left{
			width: 70%;
			.ldi_title{
				font-size: 28upx;
			}
			.ldi_info{
				color: #999;
				font-size: 22upx;
				margin: 10upx 0 20upx;
			}
			.ldi_price{
				color: #d3a800;
				font-size: 28upx;
				text{
					color: #999;
					font-size: 20upx;
					margin-left: 20upx;
					text-decoration: line-through;
				}
			}
		}
		.ld_right{
			button{
				background: #fbc800;
				border-radius: 10upx;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 110upx;
				height: 55upx;
				padding: 0;
				margin: 0;
				color: #fff;
				font-size: 24upx;
				&:after{
					border: 0;
				}
				image{
					display: block;
					width: 39upx;
					height: 31upx;
					margin-right: 5upx;
				}
			}
		}
	}
	.ld_format{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #EFEFEF;
		padding: 30upx 25upx;
		box-sizing: border-box;
		color: #333;
		font-size: 24upx;
		text{
			padding-left: 15upx;
			position: relative;
			&:before{
				content: "";
				width: 4upx;
				height: 20upx;
				background: #fbc800;
				border-radius: 5upx;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		view{
			image{
				display: inline-block;
				width: 14upx;
				height: 24upx;
			}
		}
	}
	.ld_content{
		padding: 30upx 25upx;
		box-sizing: border-box;
		color: #333;
		font-size: 24upx;
		.lc_txt{
			padding-left: 15upx;
			position: relative;
			margin-bottom: 20upx;
			&:before{
				content: "";
				width: 4upx;
				height: 20upx;
				background: #fbc800;
				border-radius: 5upx;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		.lc_content{
			color: #666;
			font-size: 22upx;
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
	.ld_layer_box{
		position: fixed;
		left: 0;
		bottom: -150%;
		width: 100%;
		overflow: hidden;
		background: #fff;
		border-top-right-radius: 10upx;
		border-top-left-radius: 10upx;
		z-index: 30;
		padding: 20upx 25upx 40upx;
		box-sizing: border-box;
		transition: all .5s ease;
		&.active{
			bottom: 0;
		}
		.lb_close{
			display: flex;
			justify-content: flex-end;
			margin-bottom: 25upx;
			image{
				display: block;
				width: 26upx;
				height: 26upx;
			}
		}
		.lb_lesson_info{
			display: flex;
			justify-content: flex-start;
			align-items: stretch;
			margin-bottom: 30upx;
			image{
				display: block;
				width: 160upx;
				height: 160upx;
				border-radius: 10upx;
				margin-right: 20upx;
			}
			.li_box{
				width: 70%;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				.li_title{
					width: 100%;
					color: #333;
					font-size: 28upx;
				}
				.li_price{
					width: 100%;
					color: #d3a800;
					font-size: 26upx;
				}
			}
		}
		.layer_format{
			box-sizing: border-box;
			border-bottom: 1px solid #F7F7F7;
			.format_item{
				margin-bottom: 10upx;
				.format_name{
					font-size: 28upx;
					margin-bottom: 20upx;
				}
				.format_list{
					overflow: hidden;
					.fl_item{
						display: inline-block;
						padding: 10upx 30upx;
						line-height: 50upx;
						font-size: 28upx;
						text-align: center;
						background: #f3f3f3;
						border-radius: 10upx;
						margin: 0 20upx 20upx 0;
						color: #333;
						font-size: 24upx;
						&.active{
							color: #fff;
							background: #fbc800;
						}
						&.disable{
							color: #c1c1c1;
						}
						&:after{
							border: 0;
						}
					}
				}
			}
		}
		.layer_num{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30upx 0;
			border-bottom: 1px solid #F9F9F9;
			.ln_txt{
				color: #333;
				font-size: 24upx;
				text{
					color: #999;
					font-size: 18upx;
					margin-left: 10upx;
				}
			}
		}
		.layer_info{
			margin-bottom: 50upx;
			.li_item{
				margin-top: 30upx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				text{
					color: #333;
					font-size: 24upx;
					margin-right: 40upx;
				}
				view{
					color: #999;
					font-size: 24upx;
					image{
						display: inline-block;
						vertical-align: middle;
						margin: 0 0 5upx 15upx;
						width: 24upx;
						height: 14upx;
					}
					input{
						color: #999;
					}
				}
			}
		}
		.submit_query{
			display: block;
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			background: #fbc800;
			color: #fff;
			font-size: 32upx;
			&:after{
				border: 0;
			}
		}
	}
	.layer_pay_box{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background: #fff;
		z-index: 23;
		padding: 0 45upx 30upx;
		box-sizing: border-box;
		display: none;
		&.active{
			display: block;
		}
		.layer_pay_move{
			margin-top: -70upx;
			.layer_pay{
				background: #fff;
				// box-shadow: 0 0 20upx #eee;
				box-shadow: 0 5upx 20upx #999;
				border-radius: 30upx;
				padding: 30upx 15upx 20upx;
				box-sizing: border-box;
				margin-bottom: 40upx;
				.lp_top{
					text-align: center;
					font-size: 28upx;
					padding-bottom: 5upx;
					.lpt_title{
						color: #333;
					}
					.lpt_price{
						color: #d3a800;
						margin: 20upx 0 25upx;
					}
				}
				.lp_center{
					color: #333;
					font-size: 22upx;
					padding: 0 20upx 20upx;
					box-sizing: border-box;
					border-top: 1px solid #F3F3F3;
					border-bottom: 1px solid #F3F3F3;
					.lpc_item{
						margin-top: 30upx;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						&:last-of-type{
							margin-top: 20upx;
						}
					}
				}
				.lp_bottom{
					padding: 20upx 20upx 0;
					box-sizing: border-box;
					.radio{
						display: flex;
						justify-content: space-between;
						align-items: center;
						view{
							display: flex;
							align-items: center;
							color: #333;
							font-size: 24upx;
							image{
								display: inline-block;
								width: 50upx;
								height: 50upx;
								margin-right: 20upx;
							}
						}
						radio{
							border-radius: 50%;
							transform: scale(.8);
						}
					}
				}
			}
			.lp_submit{
				width: 85%;
				height: 85upx;
				line-height: 85upx;
				color: #fff;
				font-size: 36upx;
				background: #fbc800;
				border-radius: 50upx;
				margin-bottom: 15upx;
				&:after{
					border: 0;
				}
			}
			.lp_txt{
				color: #999;
				font-size: 20upx;
				text-align: center;
			}
		}
	}
	.fixed_bottom{
		position: fixed;
		width: 100%;
		height: 100upx;
		background: #fff;
		z-index: 20;
		left: 0;
		bottom: 0;
		padding: 10upx 25upx;
		border-top: 1px solid #E5E5E5;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.fb_collect,.fb_share{
			width: 70upx;
			margin-right: 20upx;
			text-align: center;
			image{
				display: block;
				width: 32upx;
				height: 32upx;
				margin: 0 auto 5upx;
			}
			view{
				color: #999;
				font-size: 18upx;
			}
		}
		.fb_collect image{
			height: 36upx !important;
		}
		.fb_addcar,.fb_buy{
			margin-left: 10upx;
			button{
				display: block;
				width: 250upx;
				height: 80upx;
				line-height: 80upx;
				background: #fbc800;
				color: #fff;
				font-size: 24upx;
				&:after{
					border: 0;
				}
			}
		}
		.fb_buy{
			button{
				background: #e83632;				
			}
		}
	}
</style>
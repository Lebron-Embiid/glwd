<template>
	<view class="order_detail_view">
		<image src="../../static/order_detail_banner.jpg" class="order_banner" mode="widthFix"></image>
		<view class="order_detail">
			<view class="od_title">{{title}}</view>
			<view class="od_price">￥{{price}}</view>
			<view class="od_content">
				<view class="odc_item">规格：{{type}}</view>
				<block v-if="is_write == 0">
					<view class="odc_item">类型：{{list}}</view>
				</block>
				<view class="odc_item">姓名：{{name}}</view>
				<view class="odc_item">手机：{{phone}}</view>
				<view class="odc_item">地址：{{address}}</view>
				<view class="odc_item">数量：{{num}}</view>
				<block v-if="is_write == 0">
					<view class="odc_item rmk">备注：<input type="text" placeholder="请填写备注" :value="write_remark" v-model="write_remark" /></view>
				</block>
				<block v-else>
					<view class="odc_item">备注：{{remark}}</view>
				</block>
				<block v-if="is_write != 0">
					<view class="odc_item">订单号：{{number}}</view>
					<view class="odc_item">下单时间：{{time}}</view>
				</block>
			</view>
			<block v-if="is_write == 0">
				<view class="lp_bottom">
					<label class="radio">
						<view>
							<image src="../../static/wexin.png" mode="widthFix"></image>
							<text>微信支付</text>
						</view>
						<radio value="" color="#e83632" checked />
					</label>
				</view>
			</block>
		</view>
		<block v-if="is_write == 0">
			<button class="lp_submit" @tap="toPay">支付{{price}}元</button>
			<view class="lp_txt">购买后客服将在1个工作日内与您联系</view>
		</block>
		
		<view class="ld_shadow" :class="[layerShow == true?'active':'']" @tap="hideLayer"></view>
		<view class="pay_success" :class="[payOk == true?'active':'']">
			<image src="../../static/pay_ok.png" mode="widthFix"></image>
			<text>支付成功</text>
		</view>
		<view class="pay_fail" :class="[payNo == true?'active':'']">
			<image src="../../static/pay_no.png" mode="widthFix"></image>
			<text>支付失败</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id: "",
				title: "初级拉丁舞课程",
				price: "256.00",
				type: "256元1节体验课",
				list: "无基础",
				name: "刘先生",
				phone: "16988886699",
				address: "广东省深圳市福田区",
				num: "1",
				write_remark: "",
				remark: "无备注",
				number: "256987412",
				time: "2019.05.14 18:00",
				is_write: 0,
				layerShow: false,
				payOk: false,
				payNo: false,
			}
		},
		methods:{
			showLayer(){
				this.layerShow = true;
			},
			hideLayer(){
				this.layerShow = false;
				this.payOk = false;
				this.payNo = false;
			},
			toPay(){
				var that = this;
				that.layerShow = true;
				// that.payOk = true;	//支付成功
				that.payNo = true;	//支付失败
			},
		},
		onLoad(opt) {
			var that = this;
			that.is_write = opt.write;
		}
	}
</script>

<style scoped lang="scss">
	.order_detail_view{
		.order_banner{
			display: block;
			width: 750upx;
			// height: 430upx;
		}
		.order_detail{
			width: 660upx;
			margin: -65upx auto 30upx;
			padding: 25upx 10upx 15upx;
			box-sizing: border-box;
			box-shadow: 0 5upx 20upx #999;
			border-radius: 20upx;
			position: relative;
			z-index: 5;
			background: #fff;
			.od_title{
				color: #333;
				font-size: 28upx;
				text-align: center;
			}
			.od_price{
				color: #d3a800;
				font-size: 28upx;
				margin: 20upx 0 40upx;
				text-align: center;
			}
			.od_content{
				border-top: 1px solid #F3F3F3;
				padding: 20upx;
				.odc_item{
					color: #333;
					font-size: 22upx;
					padding: 12upx 0;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					&.rmk{
						padding: 0;
					}
				}
			}
			.lp_bottom{
				padding: 20upx 20upx 0;
				box-sizing: border-box;
				border-top: 1px solid #F3F3F3;
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
						transform: scale(.7);
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
</style>
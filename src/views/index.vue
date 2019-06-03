<template>
	<div class='b'>
		<div class='i'>
			<div class='tab'>
				<p @click='login_type="zh"' :class='login_type=="zh"?"act":""'>账户登录</p>
				<p @click='login_type="code"' :class='login_type=="code"?"act":""'>扫码登录</p>
			</div>
			<div class='pd' v-show='login_type=="zh"'>
				<div :class='focusIndex ==0?"input act_i":error1&&error1.length>0?"input error_i":"input"'>
					<div class='img'>
						<i :class='focusIndex ==0?"n2":error1&&error1.length>0?"n3":"n1"'>

						</i>
					</div>
					<span v-show='focusIndex == 0 && name.length==0 && !isSupportPlaceholder' @click='getfocus(0)'>请输入手机号/用户名</span>
					<input 
						autofocus="autofocus"
						autocomplete="off"
						v-model='name' 
						:placeholder="isSupportPlaceholder?'请输入手机号/用户名':''"
						@focus="focus(0)"
						@blur="blur(0)"
						:class='error1&&error1.length>0?"red":name&&name.length>0?"blue":""'>
				</div>
				<p>{{error1}}</p>
				<div :class='focusIndex ==1?"input act_i":error2&&error2.length>0?"input error_i":"input"'>
					<div class='img'>
						<i :class='focusIndex ==1?"p2":error2&&error2.length>0?"p3":"p1"'>

						</i>
					</div>
					
					<span v-show='focusIndex == 1 && password.length==0 && !isSupportPlaceholder' @click='getfocus(1)'>请输入手机号/用户名</span>
					<input 
						autocomplete="off"
						v-model='password' 
						:placeholder="isSupportPlaceholder?'请输入手机号/用户名':''"
						@focus="focus(1)"
						@blur="blur(1)"
						type='password'
						:class='error2&&error2.length>0?"red":password&&password.length>0?"blue":""'>
				</div>
				<p>{{error2}}</p>
				<div :class='focusIndex ==2?"input act_i":error3&&error3.length>0?"input error_i":"input"'>
					<div class='img'>
						<i :class='focusIndex ==2?"c2":error3&&error3.length>0?"c3":"c1"'>

						</i>
					</div>
					
					<span v-show='focusIndex == 2 && code.length==0 && !isSupportPlaceholder' @click='getfocus(2)'>请输入手机号/用户名</span>
					<input 
						autocomplete="off"
						v-model='code' 
						:placeholder="isSupportPlaceholder?'请输入验证码':''"
						@focus="focus(2)"
						@blur="blur(2)"
						:class='error3&&error3.length>0?"red code_w":code&&code.length>0?"blue code_w":" code_w"'>
					<canvas @click="createCode" class='code' id='code'></canvas>
				</div>
				<p>{{error3}}</p>
				<div :class='!error1&&error1.length>0 || (error2&&error2.length>0) || 
					(error3&&error3.length>0) || !name || name.length ==0
					|| !password || password.length ==0
					|| !code || code.length ==0?"btn":"btn act_btn"'
					@click='login'>登录</div>
			</div>
			<div class='qrcode' v-show='login_type=="code"'>
				<img src="../../public/img/qrcode.png" alt="">
				<p>打开 <span>微信</span>扫描二维码</p>
				<p v-show='false'><span>扫描成功！</span>请在手机上确认登录</p>
				<div>
					<p>
						<img src="../../public/img/免输入.jpg" alt="">
					免输入
					</p>
					<p>
						<img src="../../public/img/更快捷.jpg" alt="">
					更快捷
					</p>
					<p>
						<img src="../../public/img/更安全.jpg" alt="">
					更安全
					</p>
				</div>
			</div>
			<div class='bottom'>
				<p>忘记密码？</p>
				<p>
					<img src="../../public/img/立即注册icon.jpg" alt="">
					立即注册
				</p>
			</div>
		</div>
		<div class='t'>
			<i></i>
			<h1>优越体验，尽在行列。</h1>
			<p>我们拥有专业的数据分析，快捷查询的同时更能精准定位您的需求。</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery'
export default {
	data() {
		return {
			login_type:'zh',
			isSupportPlaceholder:true,
			focusIndex:0,
			name:'',
			password:'',
			code:'',
			checkCode:'',
			error1:'',
			error2:'',
			error3:'',
		}
	},
	methods:{
		getfocus(index) {
            $('input')[index].focus()
        },
        focus(i) {
            this.focusIndex = i
            if(i ==0) {
                this.error1 = ''
            } else if(i==1){
                this.error2 = ''
            } else {
				this.error3 = ''
			}
		},
		blur(i) {
			this.focusIndex=-1
            if(i==0) {
                if(this.name.length>0) {
                    return
                } else {
                    this.error1 = '请输入账号/手机号'
                }
            } else if(i==1){
                if(this.password.length>0) {
                    return
                } else {
                    this.error2 = '请输入密码'
                }
            } else {
				if(this.code.length>0) {
                    return
                } else {
                    this.error3 = '请输入验证码'
                }
			}
            // this.focusIndex=0
		},		
		createCode(){
			let code = ""
			let rand = new Array();
			let x = new Array();
			let y = new Array();   
			var codeLength = 4;//验证码的长度   
			var nums = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
						'S','T','U','V','W','X','Y','Z');//随机数   
			const canvas = document.getElementById('code'); //获取HTML端画布
			let context = canvas.getContext("2d"); //获取画布2D上下文
			context.fillStyle = "#fff"; //画布填充色
			context.fillRect(0, 0, canvas.width, canvas.height);
			// 创建渐变
			let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
			gradient.addColorStop("0", "magenta");
			gradient.addColorStop("0.5", "blue");
			gradient.addColorStop("1.0", "red");
			//清空画布
			context.fillStyle = gradient; //设置字体颜色
			context.font = "80px Arial"; //设置字体
			// context.textAlign="center"
			for(var i = 0; i < codeLength; i++) {
				//循环操作   
				rand[i] = nums[Math.floor(Math.random() * nums.length)]
				x[i] = i * 50 + 40;
				// y[i] = Math.random() * 60 + 40;
				context.fillText(rand[i],x[i],100);
				code+=rand[i]
			}  
			this.checkCode = code;//把code值赋给验证码  
			console.log(this.checkCode)
		},
		login() {
			if(!this.check()) return 
			const res = this.$api.login({name:this.name,password:this.password})
			if(res.data&&res.data.token) {
				this.$store.commit('login/SET_TOKEN','res.data.token')
				this.$store.commit('login/SET_USER_INFO', res.data.user)
				sessionStorage.setItem('token', res.data.user.token)
				sessionStorage.setItem('user', JSON.stringify(res.data.user))
			}
			console.log(res)
		},
		check() {
            if(!this.name || this.name.length==0) {
                this.error1 = '请输入正确的账号/手机号'
                return false
            } else if(!this.password || this.password.length==0) {
                this.error2 = '请输入正确的密码'
                return false
            } else if(!this.code || this.code.length ==0) {
				this.error3 = '请输入验证码'
                return false
			} else  if(this.code != this.checkCode.toLowerCase()) {
				this.error3 = '验证码错误'
				this.createCode()
                return false
			}
            else {
                return true
            }
        }
	},
	mounted() {
		const input = $('input')[0]
		this.isSupportPlaceholder =  'placeholder' in input
		this.createCode()
	}
}
</script>

<style lang="stylus" scoped>
	input 
		border none
		outline 0
		appearance none
	.b 
		width 100%  
		height 640px
		margin-bottom 30px
		background url('../../public/img/a.jpg') no-repeat
		background-size 100% 100%
		position relative
	.i 
		width 360px
		height 400px
		background #fff
		position absolute
		top 50%  
		margin-top -200px
		right 20%
	.tab 
		padding 32px 0 36px 0
		color #666  
		font-size 18px
		display flex
		align-items center
		p 
			border-right 1px solid #E6E6E6
			width 50% 
			text-align center
			cursor pointer
		p+p 
			border-right none 
		.act 
			color #2E7BFF
			font-family MicrosoftYaHei-Bold
			font-weight 600
	.pd 
		padding 0 30px
		.input 
			display flex
			align-items center
			border 1px solid #D9D9D9
			position relative
			.img
				width 40px
				height 40px
				background #f4f4f4
				display flex
				align-items center
				justify-content center
				border-right 1px solid #D9D9D9
				flex-shrink 0
				i  
					display block
					width 50%
					height 50%
			.n1			
				background url('../../public/img/登陆1.jpg') no-repeat center
				background-size 100% 100%
			.n2 
				background url('../../public/img/登陆2.jpg') no-repeat center
				background-size 100% 100%
			.n3 
				background url('../../public/img/登陆3.jpg') no-repeat center
				background-size 100% 100%
			.p1			
				background url('../../public/img/密码1.jpg') no-repeat center
				background-size 100% 100%
			.p2 
				background url('../../public/img/密码2.jpg') no-repeat center
				background-size 100% 100%
			.p3 
				background url('../../public/img/密码3.jpg') no-repeat center
				background-size 100% 100%
			.c1			
				background url('../../public/img/验证码1.jpg') no-repeat center
				background-size 100% 100%
			.c2 
				background url('../../public/img/验证码2.jpg') no-repeat center
				background-size 100% 100%
			.c3 
				background url('../../public/img/验证码3.jpg') no-repeat center
				background-size 100% 100%
			span 
				color #A6A6A6
				font-size 14px
				position absolute
				left 50px
			input 
				margin-left 10px
				flex-shrink 1
			.code_w
				width 147px
		p 
			height 20px
			line-height 20px
			color #FF6868
			font-size 12px
		.act_i 
			border-color #2E7BFF
			.img 
				border-color #2E7BFF	
		.error_i 
			border-color #FF6868
			.img 
				border-color #FF6868	
		.code 
			width 100px
			height 40px
		.btn 
			width 100% 
			height 36px
			line-height 36px
			background #D9D9D9
			color #fff
			font-size 16px
			text-align center
			margin 20px 0 30px 0
		.act_btn 
			background linear-gradient(90deg,rgba(46,179,255,1) 0%,rgba(46,123,255,1) 100%)
			cursor pointer
		.act_btn:hover 
			background linear-gradient(90deg,rgba(103,200,255,1) 0%,rgba(78,143,255,1) 100%)
	.bottom 
		display flex
		height 50px
		width 100%
		background #f4f4f4
		align-items center
		p 
			width 50%   
			text-align center
			color #333   
			font-size 14px
			cursor pointer
			img  
				width 14px
				margin-right 5px
		p+p 
			color #2E7BFF
			display flex
			align-items center
			justify-content center
	.qrcode
		height 272px
		text-align center
		img
			width 170px
			height 170px
			margin-bottom 30px	
		p  
			font-size 12px
			color #666  
			text-align center
			span 
				color #2E7BFF
		div 
			display flex
			width 220px
			justify-content space-between
			margin 17px auto 0 auto
			p  
				display flex  
				align-items center
				color #A6A6A6
				img 
					width 26px
					height 26px
					margin 0 5px 0 0
	.t 
		position absolute
		color #fff
		top 200px 
		left 22%
		i   
			display block 
			width 32px
			height 4px
			background rgba(245,245,245,1)
			margin-bottom 19px
		h1 
			font-size 40px
			font-family MicrosoftYaHei-Bold
			font-weight bold
			margin-bottom 16px
		p
			font-size 14px
</style>	


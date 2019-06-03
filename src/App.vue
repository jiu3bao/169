<template>
	<div v-title data-title="行列咨询">
		<el-header class='header'>
			<img src='../public/img/logo.jpg'/>
			<p>
				欢迎登录
			</p>
		</el-header>
		<el-container style='flex-direction:column;overflow:auto'>
			<router-view></router-view>
		</el-container>
		<el-footer>				
			<p class='ba'>云南省工程建设标准定额管理网&nbsp;&nbsp;&nbsp;&nbsp;
			|&nbsp;&nbsp;&nbsp;&nbsp;中华人民共和国住房和城乡建设部
			&nbsp;&nbsp;&nbsp;&nbsp;
			|&nbsp;&nbsp;&nbsp;&nbsp;
			国家工程建设标准化信息网
			&nbsp;&nbsp;云南省住房与城乡建设厅
			&nbsp;&nbsp;&nbsp;&nbsp;|
			&nbsp;&nbsp;&nbsp;&nbsp;云南省建设工程造价信息网
			&nbsp;&nbsp;&nbsp;&nbsp;|
			&nbsp;&nbsp;&nbsp;&nbsp;云南省建设人才网
			&nbsp;&nbsp;&nbsp;&nbsp;|
			&nbsp;&nbsp;&nbsp;&nbsp;云南城市建设培训中心</p>
			<p class='ba'>滇公网安备 53011102000224  备案编号：滇ICP备16007176号  
			Copyright © 2004-2019 版权所有 © 昆明行列科技有限公司</p>
		</el-footer>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
        return {
            
        };
	},
	created() {
		
	},
	mounted() {
		
	},
	methods:{
		
	}
}
</script>

<style lang='stylus'>
	.header 
		height 68px
		max-width 1180px
		display flex
		align-items center
		margin 0 auto
		img 
			margin-right 36px
	
	.ba 
		color #333
		font-size 12px
		text-align center
	.ba+.ba 
		color #A6A6A6
		margin-top 22px
</style>

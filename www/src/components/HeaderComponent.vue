<template>
<div class="header">
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="javascript:;" @click="switchHome">惠装OA系统</a>
			</div>
			<ul class="nav navbar-nav" v-if="loginStatus">
				<router-link tag="li" active-class="active" :to="{name:'main'}"><a href="javascript:;">主页</a></router-link>
				<router-link tag="li" active-class="active" :to="{name:'contact'}"><a href="javascript:;">联系我们</a></router-link>
				<router-link tag="li" active-class="active" :to="{name:'feedback'}"><a href="javascript:;">反馈信息</a></router-link>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<router-link v-if="loginStatus" tag="li" active-class="active"  :to="{name:'userinfo',query:{id:loginUser.id}}"><a href="javascript:;" v-text="loginUser.username"></a></router-link>
				<li><a href="javascript:;" v-if="loginStatus" @click="logoutHandler">退出</a><a href="javascript:;" v-else>登录</a></li>
			</ul>
		</div>
	</nav>
</div>
</template>
<script>
	import {mapGetters} from "vuex";
	export default{
		computed:{
			...mapGetters({
				loginStatus:"getLoginStatus",
				loginUser:"getLoginUser"
			})
		},
		methods:{
			switchHome(){
				this.$router.push({
					name:"main"
				})
			},
			showUserHandler(user){
				
			},
			logoutHandler(){
				this.$store.dispatch("logoutAction")
				.then(()=>{
					if(this.loginStatus){
						console.log("logout fail")
					}else{
						this.$router.push({
							name:"login",
							query:{
								refer:this.$route.name
							}
						})
					}
				})
				.catch((error)=>{
					console.log(error)
				});
			}
		}
	}
</script>
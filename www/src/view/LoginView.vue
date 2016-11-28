<template>
<div class="jumbotron">
 <div class="container">
	<h1>惠装OA系统登录</h1>
	<p class="text-justify">惠装研发部内部wiki文档系统是一个在线文档编辑与展示的网站。通过它，你可以上天入地无所不能，前无古人后无来者，顶天立地无所畏惧，八仙归海众神归位，排山倒海浩浩荡荡，从此你再也不用担心吃药的时候没有勺子，也不用担心打字的时候没有墨鱼，一切尽在你的掌控之中。去吧比卡丘！让那些愚蠢的人类都亮瞎眼！！！</p>
	<div class="form-inline">
		<div class="form-group">
			<label class="sr-only">用户名</label>
			<input type="text" class="form-control" v-model="user.username" placeholder="用户名">
		</div>
		<div class="form-group">
			<label class="sr-only">密码</label>
			<input type="password" class="form-control" v-model="user.password"  placeholder="密码">
		</div>
		<button type="button" class="btn btn-primary" @click="loginHandler">登录系统</button>
	</div>
	</div>
</div>
</template>
<script>
	import {mapGetters, mapActions} from "vuex";
	export default{
		data(){
			return {
				user:{
					username:"",
					password:""
				}
			}
		},
		computed:{
			...mapGetters({
				loginStatus:"getLoginStatus"
			}),
		},
		created(){
			if(this.loginStatus){
				let refers = decodeURIComponent(this.$route.query.refer);
				let pathName = null;
				let pathParams = {};
				if(refers.indexOf("?")>0){
					pathName = refers.split("?")[0];
					let temp = refers.split("?")[1].split("&");
					if(temp !== null && temp.length !==0){
						for(let item of temp){
							item = item.split("=");
							Object.defineProperty(pathParams,item[0],{value:item[1]})
						}
					}
				}
				if(this.$route.query.hasOwnProperty("refer")){
					if(this.$route.query.refer !== '' && pathName !== null){
						this.$router.push({
							name:pathName,
							query:pathParams
						})
					}else{
						this.$router.push({
							name:"main"
						})
					}
				}else{
					this.$router.push({
						name:"main"
					})
				}
			}
		},
		methods:{
			loginHandler(){
				if(this.user.username.length === 0){
					return false;
				}
				if(this.user.password.length ===0){
					return false;
				}
				this.$store.dispatch("loginAction",this.user)
				.then(()=>{
					if(this.loginStatus){
						let refers = decodeURIComponent(this.$route.query.refer);
						let pathName = null;
						let pathParams = {};
						if(refers.indexOf("?")>0){
							pathName = refers.split("?")[0];
							let temp = refers.split("?")[1].split("&");
							if(temp !== null && temp.length !==0){
								for(let item of temp){
									item = item.split("=");
									Object.defineProperty(pathParams,item[0],{value:item[1]})
								}
							}
						}
						if(this.$route.query.hasOwnProperty("refer")){
							if(this.$route.query.refer !== '' && pathName !== null){
								this.$router.push({
									name:pathName,
									query:pathParams
								})
							}else{
								this.$router.push({
									name:"main"
								})
							}
						}
					}else{
						console.log("login failed")
					}
				})
				.catch((error)=>{
					console.log(error)
				});
			}
		}
	}
</script>
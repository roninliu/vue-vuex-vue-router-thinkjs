<template>
	<div>
		<h1>用户信息</h1>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from "vuex";
	
	export default{
		created(){
			let params = this.$route.query;
			console.log(params);
			this.$store.dispatch("userInfoAction",params.id)
			.then((result)=>{
				console.log(result);
			})
			.catch((error)=>{
				console.log(error)
			});
		}
	}
</script>
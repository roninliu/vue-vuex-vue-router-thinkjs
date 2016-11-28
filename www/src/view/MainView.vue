<!--主页-->
<template>
	<div>
		<h1>main page</h1>
		<p>id : {{loginUser.id}}</p>
		<p>username : {{loginUser.username}}</p>
		<p>token : {{loginUser.token}}</p>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from "vuex";

	export default{
		computed:{
			...mapGetters({
				loginUser:'getLoginUser',
				loginStatus : "getLoginStatus"
			})
		}
	}
</script>
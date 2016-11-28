<!--联系我们-->
<template>
	<div>
		<h1>联系我们</h1>
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
<template>
	<div class="container-fluid">
		<header-component></header-component>
		<section>
			<router-view></router-view>
		</section>
		<footer-component></footer-component>
	</div>
</template>
<script>
	import HeaderComponent from "./components/HeaderComponent.vue";
	import FooterComponent from "./components/FooterComponent.vue";

	export default{
		components:{
			HeaderComponent,
			FooterComponent,
		}
	}
</script>
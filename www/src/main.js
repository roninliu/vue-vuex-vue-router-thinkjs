/*
 * @Author: ronin
 * @Date:   2016-11-17 16:23:46
 * @Last Modified by:   ronin
 * @Last Modified time: 2016-11-28 15:04:47
 */

'use strict';

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/store";
import routerConfig from "./store/routers";


Vue.use(VueRouter);

const router = new VueRouter({
	routes: routerConfig
})

router.beforeEach((to, from, next) => {
	if (to.name !== "login" && !store.getters.getLoginStatus) {
		let refers = to.name;
		let params = to.fullPath;
		if (params.length !== 0) {
			refers = refers + params.substring(params.indexOf("?"), params.length);
		}
		debugger;
		router.push({
			name: "login",
			query: {
				refer: encodeURIComponent(refers)
			}
		});
	}
	next();
})

const app = new Vue({
	el: "#root",
	store,
	router,
	render: h => h(App)
})
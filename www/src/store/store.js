/*
 * @Author: ronin
 * @Date:   2016-11-22 17:00:05
 * @Last Modified by:   ronin
 * @Last Modified time: 2016-11-25 16:21:10
 */

'use strict';

import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import UserModel from "./modules/UserModel";



Vue.use(Vuex);
Vue.config.debug = true;

const debug = true;


export default new Vuex.Store({
	actions,
	getters,
	modules: {
		UserModel,
	},
	strict: debug,
})
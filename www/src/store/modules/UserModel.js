/*
 * @Author: ronin
 * @Date:   2016-11-24 11:14:25
 * @Last Modified by:   ronin
 * @Last Modified time: 2016-11-28 14:57:04
 */

'use strict';



import UserAPI from "../../api/UserAPI";
import * as types from "../mutation-types";


//state
const state = {
	loginUser: JSON.parse(sessionStorage.getItem("user")),
	user: {}
}


// getters
const getters = {
	getLoginUser: state => {
		return state.loginUser
	},
	getLoginStatus: state => {
		if (state.loginUser !== null) {
			if (state.loginUser.hasOwnProperty("token")) {
				if (state.loginUser.token !== "") {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	},
	getUser: state => {
		return state.user
	}
}

// actions
const actions = {
	loginAction({
		commit,
		state
	}, user) {
		return new Promise((resolve, reject) => {
			UserAPI.userLoginInterface(
				user,
				(success) => {
					commit(types.LOGIN_SUCCESS, {
						success
					});
					resolve();
				},
				(failure) => {
					commit(types.LOGIN_FAILURE, {
						failure
					})
					resolve();
				}
			)
		})
	},
	logoutAction({
		commit,
		state
	}) {
		return new Promise((resolve, reject) => {
			commit(types.LOGOUT);
			resolve();
		})
	},
	userInfoAction({
		commit,
		state
	}, userid) {
		return new Promise((resolve, reject) => {
			UserAPI.userInfoInterface(userid, (success) => {
				commit(types.USER_INFO_SUCCESS, {
					success
				});
				resolve();
			}, (failure) => {
				commit(types.USER_INFO_FAILURE, {
					failure
				});
				resolve();
			})
		})
	}
}


//mutations
const mutations = {
	[types.LOGIN_SUCCESS](state, {
		success
	}) {
		state.loginUser = Object.assign({}, state.loginUser, success)
		sessionStorage.setItem("user", JSON.stringify(state.loginUser));
	},
	[types.LOGIN_FAILURE](state, {
		failure
	}) {
		state.loginUser = Object.assign({}, {}, {})
	},
	[types.LOGOUT](state) {
		state.loginUser = Object.assign({}, {}, {})
		sessionStorage.clear();
	},
	[types.USER_INFO_FAILURE](state, {
		failure
	}) {
		console.log(failure)
	},
	[types.USER_INFO_SUCCESS](state, {
		success
	}) {
		console.log(success);
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
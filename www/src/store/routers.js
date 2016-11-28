/*
 * @Author: ronin
 * @Date:   2016-11-24 11:04:26
 * @Last Modified by:   ronin
 * @Last Modified time: 2016-11-28 11:08:07
 */



'use strict';

import MainView from "../view/MainView.vue";
import LoginView from "../view/LoginView.vue";
import ContactView from "../view/ContactView.vue";
import FeedbackView from "../view/FeedbackView.vue";
import UserInfoView from "../view/UserInfoView.vue";

export default [{
	path: "/",
	redirect: "/main",
	component: MainView
}, {
	path: "/main",
	name: "main",
	component: MainView
}, {
	path: "/login",
	name: "login",
	component: LoginView
}, {
	path: "/contact",
	name: "contact",
	component: ContactView
}, {
	path: "/feedback",
	name: "feedback",
	component: FeedbackView
}, {
	path: "/userinfo",
	name: "userinfo",
	component: UserInfoView
}]
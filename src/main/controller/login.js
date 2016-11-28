'use strict';

import Base from './base.js';

export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	indexAction() {

		//auto render template file index_index.html
		return this.display();
	}

	loginAction() {
		const user = {
			id: 100023,
			username: "admin",
			token: think.md5("admin")
		}
		if (this.param().username == "admin") {
			this.success(user)
		} else {
			this.fail("login failure");
		}
	}

	userinfoAction() {
		const user = {
			id: 100023,
			username: "admin",
			email: "admin@huizhuang.com",
			mobile: "1455555555",
			last_login: new Date()
		}
		if (this.param().id == user.id) {
			this.success(user)
		} else {
			this.fail("暂无用户 ");
		}
	}
}
/*
 * @Author: ronin
 * @Date:   2016-11-24 11:18:31
 * @Last Modified by:   ronin
 * @Last Modified time: 2016-11-28 15:12:16
 */

'use strict';

export default {
	async userLoginInterface(user, success, failure) {
			let respone = await fetch("/main/login/login", {
				method: "POST",
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json'
				},
			});
			let result = await respone.json();
			if (result.code === 0) {
				success(result.data);
			} else {
				failure(result.msg);
			}
		},
		async userInfoInterface(userid, success, failure) {
			let respone = await fetch("/main/login/userinfo", {
				method: "POST",
				body: JSON.stringify({
					id: userid
				}),
				headers: {
					'Content-Type': 'application/json'
				},
			});
			let result = await respone.json();
			if (result.code === 0) {
				success(result.data);
			} else {
				failure(result.msg);
			}
		}

}
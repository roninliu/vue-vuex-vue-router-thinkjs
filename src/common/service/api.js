'use strict';
import request from 'request';

export default class extends think.service.base {
	/**
	 * init
	 * @return {}         []
	 */
	init(...args) {
		super.init(...args);
	}

	/**
	 * [ServiceHandler 服务器接口调用]
	 * @param {string}    url  [接口地址]
	 * @param {object} data [参数]
	 */
	ServiceHandler(url, data) {
		if (think.isEmpty(url)) {
			console.log("[" + new Date() + "]", "异常：URL不能为空!")
		}
		if (think.isEmpty(data)) {
			let fn = think.promisify(request.get);
			return fn({
				url: url
			})
		} else {
			let fn = think.promisify(request.post);
			return fn({
				url: url,
				form: data
			})
		}
	}
}
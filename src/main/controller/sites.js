/*
 * @Author: ronin
 * @Date:   2016-11-23 10:44:30
 * @Last Modified by:   ronin
 * @Last Modified time: 2016-11-23 17:31:12
 */

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
}
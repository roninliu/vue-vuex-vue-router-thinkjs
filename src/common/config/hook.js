'use strict';

/**
 * hook config
 * https://thinkjs.org/doc/middleware.html#toc-df6
 */
export default {
	request_begin: ["prepend", "InitCommonParams"], //数据追加
}
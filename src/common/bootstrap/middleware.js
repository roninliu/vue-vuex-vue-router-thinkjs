/**
 * this file will be loaded before server started
 * you can register middleware
 * https://thinkjs.org/doc/middleware.html
 */



/**
 * [初始化基本参数]
 * @param  {[type]} http [description]
 * @return {[type]}      [description]
 */
think.middleware("InitCommonParams", async http => {
	let mac = await http.cookie("mac");
	let seq = await http.cookie("seq");
	let seqNum = await http.cookie("num");
	if (!think.isEmpty(mac)) {
		if (!think.isEmpty(seq)) {
			if (think.isEmpty(seqNum)) {
				http.cookie("num", "1", {
					timeout: 365 * 24 * 3600
				})
			}
		} else {
			let keySeq = think.md5(mac);
			http.cookie("seq", keySeq, {
				timeout: 365 * 24 * 3600
			})
			http.cookie("num", "1", {
				timeout: 365 * 24 * 3600
			})
		}
	} else {
		mac = think.uuid();
		http.cookie("mac", mac, {
			timeout: 365 * 24 * 3600
		});
		let keySeq = think.md5(mac);
		http.cookie("seq", keySeq, {
			timeout: 365 * 24 * 3600
		});
		http.cookie("num", "1", {
			timeout: 365 * 24 * 3600
		})
	};


	let platform = await getPlatForm(http.userAgent());
	let appid = await http.cookie("appid");

	if (!think.isEmpty(appid)) {
		http.cookie("appid", appid, {
			timeout: 365 * 24 * 3600
		})
	} else {
		let oldAppid = await http.cookie("appid");
		if (!think.isEmpty(oldAppid)) {
			appid = oldAppid;
		} else {
			http.cookie("appid", http.config().APPID, {
				timeout: 365 * 24 * 3600
			})
			appid = http.config().APPID;
		}
	}

	let version = await http.config().VERSION;
	let timestamp = new Date().valueOf();
	let skey = await http.config().SKEY;
	let token = think.md5(skey + timestamp).slice(3, 10);
	let channel = http.param("channel");

	if (!think.isEmpty(channel)) {
		http.cookie("channel", channel, {
			timeout: 365 * 24 * 3600
		})
	} else {
		let oldChannel = await http.cookie("channel");
		if (!think.isEmpty(oldChannel)) {
			channel = oldChannel;
		} else {
			http.cookie("channel", http.config().CHANNEL, {
				timeout: 365 * 24 * 3600
			})
			channel = http.config().CHANNEL;
		}
	}

	http.cookie("appid", appid, {
		timeout: 365 * 24 * 3600
	});
	http.cookie("version", version, {
		timeout: 365 * 24 * 3600
	});

	let params = await http.param();
	params.appid = appid;
	params.version = version;
	params.timestamp = timestamp;
	params.access_token = token;
	params.device = mac;
	params.platform = platform;
	params.channel = channel;
	params.mac = platform;
	params.terminal = platform;
	params.os = 99;
	http._post = params;
});
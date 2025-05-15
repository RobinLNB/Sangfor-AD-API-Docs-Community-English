var Reader = (function() {
	var emptyFun = function() {};
	var basePath = './json';
	var suffix = '.yaml';
	var toSuffix = '.js';
	window.SF = {};
	window.module = {};

	// 兼容IE8
	document.head = document.head || document.getElementsByTagName('head')[0];

	function getPath(path) {
		path = path.replace(suffix, toSuffix);
		if (path.indexOf(toSuffix) === -1) {
			path += toSuffix;
		}
		return path;
	}

	return {
		load: function(src, callback, save) {
			src = getPath(src);

			var script = document.createElement('script'),
				match = src && src.match(/\/([^\/]+?)\.js$/);
			if (!match) {
				console.error(src,'is a Error URL');
				return false;
			}
			var data = false;
			script.src = src;
			callback = callback || emptyFun;
			function loadEnd() {
				// 未加载完 或 已经加载完毕并执行函数 跳过
				if (!script || (script.readyState && ['loaded', 'complete'].indexOf(script.readyState) === -1)) {
					return;
				}
				var data = window.module.exports;
				if (save && Data) {
					Data.setDataByPath(src, data);
				}
				script.onload = script.onreadystatechange = null;
				document.head.removeChild(script);
				script = null;
				delete window.module.exports;
				callback(data);
			}

			script.onload = script.onreadystatechange = loadEnd;
			document.head.appendChild(script);

			// 在IE8下 加载本地JS是同步的
			if (module.exports) {
				loadEnd();
			}
			return true;
		},
		loads: function(arr, callback, async) {
			if(arr && arr.length) {
				var me = this,
					len = arr.length,
					count = 0,
					cb = false;
				callback = callback || emptyFun;
				if (async) {
					cb = function() {
						if ((++count) === len) {
							callback();
						}
					};
					for(var i = 0; i < len; i++) {
						if(!this.load(arr[i], cb)) {
							return false;
						}
					}
				} else {
					cb = function() {
						if ((++count) < len) {
							me.load(arr[count], cb);
						} else {
							callback();
						}
					}
					this.load(arr[count], cb);
				}
				return true;
			}
			return false;
		},
		save: function(src, cb) {
			return this.load(basePath + src, cb, true);
		}
	}
})();
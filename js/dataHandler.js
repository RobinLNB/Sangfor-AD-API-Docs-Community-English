var Data = (function () {
	var suffix = '\\.yaml',
		base = '\\/api',
		js_suffix = '\\.js',
		js_base = '\\.\\/json';
	var baseObject = {};
	function bindLeaf(data) {
		if(data.children || data.kids) {
			data.children = data.kids;
			var children = data.children;
			for(var i=0; i < children.length; i++) {
				bindLeaf(children[i]);
			}
			data.cls = data.cls || 'x-tree-node-parent';
			delete data.kids;
			return;
		};
		data.leaf = true;
	}

	function handlerName(name) {
		return name.replace(/<|>/g, function($0) {
			return $0 === '<' ? '&lt;' : '&gt;';
		});
	}

	function handlerParameters(arr, schemaBase, baseURL) {
		var key = '$ref',
			url = '',
			match = [],
			result = [],
			isObject = false;

		if (isClass(arr) === 'Object') {
			arr = [arr];
			isObject = true;
		}

		for(var i = 0; i < arr.length; i++) {
			var o = schemaBase || baseObject,
				data = arr[i];
			url = data[key] || '';
			// 没有$ref 就不用处理 直接使用原数据
			if (!url) {
				result.push(data);
				continue;
			}
			match = url.split('#');
			if (match[0]) {
				match[0] = disposeRefURL(match[0]);
				o = _getDataByPath(match[0], window.SF, function(json) {
					var object = data,
						dataURL = match[1];
					if (dataURL) {
						var _data = _getDataByPath(dataURL, json);
						// description 特定处理
						copyTo(_data, data, ['description']);
						assign(object, _data);
						// schema 可能基于上一级文件对象
						delete object[key];
						if (object.schema) {
							object.schema = handlerParameters(object.schema, json);
						}
					}
				});
				if (o === false) {
					result.push(data);
					continue;
				}
			}
			if (match[1]) {
				var sData = _getDataByPath(match[1], o);
				// schema 可能基于上一级文件对象
				if (sData.schema) {
					sData.schema = handlerParameters(sData.schema, o, match[0]);
				}
				sData.baseURL = match[0] || baseURL;
				// description 特定处理
				copyTo(sData, data, ['description']);
				result.push(sData);
			}
		}

		// result = result.map(function(o) {
		// 	if (!o.properties) {
		// 		return o;
		// 	}
 	// 		return handlerParameters(o.properties);
		// });

		return isObject ? result[0] : result;
	}

	function handlerResponses(rep) {
		var result = [],
			codeArr = [];
		for(var key in rep) {
			codeArr.push(key);
			result.push(rep[key]);
		}

		result = handlerParameters(result);

		for (var i = 0; i < codeArr.length; i++) {
			if(result[i]) {
				result[i].code = codeArr[i];
			}
		}

		return result;
	}

	function handlerSchema(object) {
		var arr = [
			['parameters', 'schema'],
			['responses', 'responses_schema']
		];

		function _handlerSchema(target, name) {
			var index = -1,
				target = target || [],
				schema = target.filter(function(o, i) {
					if (o.schema) {
						index = i;
						return true;
					}
					return false;
				});
			// 实体参数只是参数里的一个 所以schema只是一个对象
			// response有可能是多个状态的所以是一个数组
			if (schema.length > 0) {
				if (name === 'responses_schema') {
					for (var i = 0; i < schema.length; i++) {
						var _data = schema[i].schema;
						_data.code = schema[i].code;
						schema[i] = propertiesToArray(_data) || false;
					}
					object[name] = schema;
					return;
				}
				object[name] = propertiesToArray(schema[0].schema) || false;
				target.splice(index, 1);
				return;
			}
			object[name] = false;
		}

		for(var i = 0; i < arr.length; i++) {
			var variable = arr[i];
			_handlerSchema(object[variable[0]], variable[1]);
		}
	}

	function copyTo(tar, obj, arr) {
		arr.forEach(function(name) {
			if (obj[name]) {
				tar[name] = obj[name];
			}
		});
	}

	function isClass(o) {
	    return Object.prototype.toString.call(o).slice(8,-1);
	}

	function concat(target) {
		var argument = ([]).slice.call(arguments, 1);
		for (var i = 0; i < argument.length; i++) {
			target = target.concat(deepClone(argument[i]))
		}
		return target;
	}

	function propertiesToArray(obj, lay, layArr) {
		var result = [],
			key = 'properties',
			$key = '$ref',
			lay = lay || 0,
			layArr = layArr || [];
		if (obj.type === 'array' && obj.items) {
			var data = obj.items[$key] ? handlerParameters(obj.items, obj.baseURL && Data.getDataByPath(obj.baseURL)) : obj.items;
			if (data) {
				obj[key] = {
					'[type]': {
						type: data.type,
						description: data.description || '',
						properties: data.properties || false,
						baseURL: data.baseURL || ''
					}
				};
			} else {
				obj[key] = {
					'[type]': obj.items
				}
			}
			delete obj.items;
		}
		if (obj && obj[key]) {
			var value = obj[key],
				baseObj = obj.baseURL ? _getDataByPath(obj.baseURL, window.SF) : false;
			for (var k in value) {
				if (obj.baseURL) {
					value[k].baseURL = obj.baseURL;
				}
				if (value[k][$key]) {
					value[k] = handlerParameters(value[k], baseObj);
				}
				value[k].name = handlerName(k);
				if (lay > 0) {
					layArr.push(value[k]);
				}
				value[k] = propertiesToArray(value[k], lay + 1, layArr);
				if (layArr.length > 0 && lay === 0) {
					value[k][key] = layArr;
					layArr = [];
				}
				result.push(value[k]);
			}
			for (var i = 0; i < result.length; i++) {
				result[i].lay = lay;

				if (lay === 0) {
					result[i].properties = result[i].properties || [];
					result[i].cls = result[i].properties.length ? 'par' : '';
				}
			}
			obj[key] = result;
		}
		return obj;
	}

	function deWeight(arr, attr) {
		var a = [];
		for(var i = 0; i < arr.length; i++) {
			var v = arr[i][attr];
			if (a.indexOf(v) !== -1) {
				arr[i]._delete_ = true;
			}
			a.push(v);
		}
		return arr.filter(function(o) {
			return !o._delete_;
		});
	}

	function assign(target, origin) {
        var target = target || {};
        for (var prop in origin) {
            if (origin.hasOwnProperty(prop)) {
                target[prop] = origin[prop]
            }
        }
    }

	function deepClone(obj){
	    var result = false,
	    	oClass = isClass(obj);
	    if (oClass === "Object") {
	        result = {};
	    } else if (oClass === "Array")  {
	        result = [];
	    } else {
	        return obj;
	    }
	    for (var key in obj) {
	        var copy = obj[key];
	        if (isClass(copy) === "Object") {
	            result[key] = deepClone(copy);
	        } else if(isClass(copy)=="Array") {
	            result[key] = deepClone(copy);
	        } else {
	            result[key]=obj[key];
	        }
	    }
	    return result;
	}
	function _getDataByPath(url, obj, callback) {
		var arr = url.split('/'),
			_object = obj;
		arr = arr.filter(function(o) {
			return o;
		});
		if (arr.length === 0) {
			return false;
		}
		for (var i = 0; i < arr.length; i++) {
			if (!obj[arr[i]]) {
				obj = false;
				break;
			}
			obj = obj[arr[i]];
		}
		if (obj) {
			return deepClone(obj);
		} else {
            Reader.save(url, function(data) {
            	var query = url;
                data = Data.loadJson(data);
                if (query.indexOf('.yaml') === -1){
                	query += '.yaml';
                }
                Data.setDataByPath(query, data);
                if (callback) {
                	callback(_getDataByPath(url, _object));
                }
            });
            return false;
		}
	}

	function disposeRefURL(url) {
		return url.replace(new RegExp(base + '|' + suffix, 'g'), '');
	}

	function getDataByPath(url, callback) {
		url = url.replace(new RegExp(js_suffix + '|' + js_base, 'g'), '');
		return _getDataByPath(url, window.SF, callback);
	}

	function setDataByPath(src, obj) {
		src = src.replace(new RegExp(js_suffix + '|' + js_base, 'g'), '');
		var arr = src.split('/'),
			object = window.SF,
			name = '';
		arr = arr.filter(function(o) {
			return o;
		});
		if (arr.length > 0) {
			for(var i = 0; i < arr.length; i++) {
				name = arr[i];
				object[name] = object[name] || {};
				if (i === arr.length - 1) {
					object[name] = obj;
					return true;
				}
				object = object[name];
			}
		}
		return false;
	}

	return {
		loadTree: function(data) {
			if(data && data.length) {
				for(var i=0; i < data.length; i++) {
					data[i].cls = 'x-tree-node-base';
					data[i].base = true;
					bindLeaf(data[i]);
				}
			}
			return data;
		},
		loadJson: function(data) {
			var method = ['get', 'post', 'patch', 'delete', 'put'],
				path = 'paths',
				result = [];
			var object = data[path];
			if (object) {
				baseObject = data;
				for(var key in object) {
					var api = object[key];
					api.name = handlerName(key);
					api.parameters = handlerParameters(api.parameters || []);
					api.items = [];
					for(var i = 0; i < method.length; i++) {
						var mo = false;
						if (!(mo = api[method[i]])) {
							continue;
						}
						mo.parameters = handlerParameters(mo.parameters || []);
						mo.parameters = deWeight(concat([], api.parameters, mo.parameters), 'name');
						mo.responses = handlerResponses(mo.responses);
						handlerSchema(mo);
						mo.method = method[i].toUpperCase();
						mo.name = api.name;
						delete api[method[i]];
						api.items.push(mo);
					}
					delete api.parameters;
					result.push(api);
				}
			}
			return result;
		},
		setDataByPath: setDataByPath,
		getDataByPath: getDataByPath,
		disposeRefURL: disposeRefURL
	}
})();
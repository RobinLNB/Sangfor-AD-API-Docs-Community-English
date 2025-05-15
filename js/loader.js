var Loader = (function() {
	var colors = ['#fff8ee','#fff5e7','#fff2e0','#ffefd9','#ffecd2','#ffe9ca'];
	var template = [
		'<div class="content_right_inner">',
			'<tpl for=".">',
				'<div class="content_right_api">',
					'<div class="content_right_header">',
						'<span class="iconfont icon-cmd">&#xe80f;</span>',
						'{name}',
						'<span class="icon icon-xiala">&#xe679;</span>',
					'</div>',
					'<div class="content_right_box">',
						'<div class="content_right_box_inner">',
							'<tpl if="values.description">',
								'<div class="content_right_dir">{description}</div>',
							'</tpl>',
							'<tpl for="items">',
								'<div class="content_right_module">',
									'<h2>API地址</h2>',
									'<div class="content_right_address">',
										'<span class="method">{method}</span>{name}',
									'</div>',
								'</div>',
								'<tpl if="parameters.length">',
									'<div class="content_right_module">',
										'<h2>{method}参数</h2>',
										'<p>{values.description}</p>',
										'<div class="content_right_param">',
											'<table class="content_right_param_table">',
												'<thead>',
							                        '<tr>',
							                            '<th>参数</th>',
							                            '<th>位置</th>',
							                            '<th>描述</th>',
							                        '</tr>',
							                    '</thead>',
							                    '<tpl for="parameters">',
													'<tr>',
														'<td>',
															'<strong>{name}</strong>',
															'<em class="type">{type}<tpl if="values.enum">[{enum}]</tpl></em>',
														'</td>',
														'<td>',
															'<em class="pos">{in}</em>',
														'</td>',
														'<td class="desc">',
															'{description}',
														'</td>',
													'</tr>',
							                    '</tpl>',
											'</table>',
										'</div>',
									'</div>',
								'</tpl>',
								'<tpl if="schema">',
									'<div class="content_right_module">',
										'<h2>请求实体参数</h2>',
										'<ul class="content_right_schema">',
											'<tpl for="schema.properties">',
												'<li>',
													'<strong class="key">{name}</strong>',
													'<em class="type">{type}<tpl if="values.enum">[{enum}]</tpl></em>',
													'<span class="dir">{description}</span>',
													'<ul class="content_right_schema_ul">',
														'<tpl for="properties">',
															'<li style="margin-left:{lay*25}px" class="content_right_schema_lay">',
																'<strong class="key">{name}</strong>',
																'<em class="type">{type}<tpl if="values.enum">[{enum}]</tpl></em>',
																'<span class="dir">{description}</span>',
															'</li>',
														'</tpl>',
													'</ul>',
												'</li>',
											'</tpl>',
										'</ul>',
									'</div>',
								'</tpl>',
								'<tpl if="responses_schema">',
									'<div class="content_right_module">',
										'<h2>API返回数据</h2>',
										'<tpl for="responses_schema">',
											'<div>返回状态：{code}</div>',
											'<ul class="content_right_schema">',
												'<tpl for="properties">',
													'<li>',
														'<strong class="key">{name}</strong>',
														'<em class="type">{type}</em>',
														'<span class="dir">{description}</span>',
														'<ul class="content_right_schema_ul">',
															'<tpl for="properties">',
																'<li style="padding-left:{lay*25}px;}" class="content_right_schema_lay">',
																	'<strong class="key">{name}</strong>',
																	'<em class="type">{type}</em>',
																	'<span class="dir">{description}</span>',
																'</li>',
															'</tpl>',
														'</ul>',
													'</li>',
												'</tpl>',
											'</ul>',
										'</tpl>',
									'</div>',
								'</tpl>',
							'</tpl>',
						'</div>',
					'</div>',
				'</div>',
			'</tpl>',
		'</div>'
	].join('');

	return {
		inited: false,
		update: function(data) {
			if (!this.inited) {
				//console.log('Loader is no init!!');
				return false;
			}
			this.box.update(data);
			this.bindClick();
			//console.log('Loader update : ', data);
		},
		bindClick: function() {
			var arr = Ext.query('.content_right_header'),
				base = 'header';
			for(var i = 0; i < arr.length; i++) {
				var field = Ext.fly(arr[i], base + i);
				field.on('click', function() {
					this.parent().toggleClass('content_right_api_expend');
				});
				if (i === 0) {
					field.parent().addClass('content_right_api_expend');
				}
			}
		},
		init: function(box) {
			this.box = box;
			this.box.tpl = new Ext.XTemplate(template, {
				getColor: function (index) {
					return colors[index];
				}
			});
			this.inited = true;
		}
	}
})();
module.exports ={
	"swagger": "2.0",
	"info": {
		"$ref": "/api/{common}.yaml#/info"
	},
	"host": {
		"$ref": "/api/{common}.yaml#/host"
	},
	"basePath": {
		"$ref": "/api/{common}.yaml#/basePath"
	},
	"schemes": {
		"$ref": "/api/{common}.yaml#/schemes"
	},
	"consumes": {
		"$ref": "/api/{common}.yaml#/consumes"
	},
	"produces": {
		"$ref": "/api/{common}.yaml#/produces"
	},
	"securityDefinitions": {
		"basic_auth": {
			"$ref": "/api/{common}.yaml#/securityDefinitions/basic_auth"
		},
		"token_auth": {
			"$ref": "/api/{common}.yaml#/securityDefinitions/token_auth"
		}
	},
	"paths": {
		"/api/ad/v3/slb/pre-rule/http/": {
			"description": "新建、查看前置策略（HTTP）配置",
			"parameters": [
				{
					"$ref": "/api/{common}.yaml#/parameters/token"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/all_properties"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/select"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/netns"
				}
			],
			"get": {
				"tags": [
					"pre-rule"
				],
				"summary": "get all pre-rule",
				"description": "查看当前已有的前置策略（HTTP）配置信息",
				"operationId": "get_pre_rule_http_list",
				"parameters": [
					{
						"$ref": "/api/{common}.yaml#/parameters/select"
					},
					{
						"$ref": "/api/{common}.yaml#/parameters/skip"
					},
					{
						"$ref": "/api/{common}.yaml#/parameters/top"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_pre_rule_http_object"
					}
				}
			},
			"post": {
				"tags": [
					"pre-rule"
				],
				"summary": "create new pre-rule",
				"description": "新建一个前置策略（HTTP）配置",
				"operationId": "add_pre_rule_http_list",
				"parameters": [
					{
						"$ref": "#/parameters/PRE-RULE-HTTP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_pre_rule_http_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": " create slb pre-rule http http_rule1 http_request_uri_rule  { mode equal  case_sensitive enable  pattern /index.html } action sched-pool sched_pool pool1 sched_failure next-rule",
					"description": "新建HTTP前置策略http_rule1，匹配源地址范围类型为ALL，匹配http请求的uri地址等于/index.html，调度到节点池pool1，若匹配失败，继续匹配下一条规则"
				},
				{
					"command": "modify slb pre-rule http http_rule1 source_address { type ip-address address 192.168.1.0/24 }",
					"description": "修改HTTP前置策略http_rule1，源地址匹配条件修改匹配子网为192.168.1.0/24"
				},
				{
					"command": "list slb pre-rule http http_rule1",
					"description": "查看HTTP前置策略http_rule1的配置信息"
				}
			]
		},
		"/api/ad/v3/slb/pre-rule/http/{name}": {
			"description": "新建、查看、修改、删除指定的前置策略（HTTP）配置",
			"parameters": [
				{
					"$ref": "/api/{common}.yaml#/parameters/token"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/name"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/all_properties"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/select"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/netns"
				}
			],
			"get": {
				"tags": [
					"pre-rule"
				],
				"summary": "get specific pre-rule",
				"description": "",
				"operationId": "get_pre_rule_http",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_pre_rule_http_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"pre-rule"
				],
				"summary": "create new pre-rule",
				"description": "查看指定的前置策略（HTTP）配置",
				"operationId": "create_pre_rule_http",
				"parameters": [
					{
						"$ref": "#/parameters/PRE-RULE-HTTP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_pre_rule_http_object"
					}
				}
			},
			"put": {
				"tags": [
					"pre-rule"
				],
				"summary": "replace specific pre-rule",
				"description": "修改指定的前置策略（HTTP）配置",
				"operationId": "replace_pre_rule_http",
				"parameters": [
					{
						"$ref": "#/parameters/PRE-RULE-HTTP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_pre_rule_http_object"
					}
				}
			},
			"patch": {
				"tags": [
					"pre-rule"
				],
				"summary": "modify specific pre-rule",
				"description": "修改指定的前置策略（HTTP）配置",
				"operationId": "edit_pre_rule_http",
				"parameters": [
					{
						"$ref": "#/parameters/PRE-RULE-HTTP-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_pre_rule_http_object"
					}
				}
			},
			"delete": {
				"tags": [
					"pre-rule"
				],
				"summary": "delete specific pre-rule",
				"description": "删除指定的前置策略（HTTP）配置",
				"operationId": "delete_pre_rule_http",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_pre_rule_http_object"
					}
				}
			}
		}
	},
	"parameters": {
		"PRE-RULE-HTTP-CONFIG": {
			"name": "PRE-RULE-HTTP-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.pre_rule_http"
			}
		},
		"PRE-RULE-HTTP-PROPERTY": {
			"name": "PRE-RULE-HTTP-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.pre_rule_http"
			}
		}
	},
	"responses": {
		"operation_config_pre_rule_http_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.pre_rule_http_list"
			}
		},
		"operation_config_pre_rule_http_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.pre_rule_http"
			}
		}
	},
	"definitions": {
		"config.pre_rule_http_list": {
			"type": "object",
			"properties": {
				"maximum_items": {
					"description": "配置数量上限",
					"type": "integer",
					"example": 4000
				},
				"total_pages": {
					"description": "总页数",
					"type": "integer",
					"example": 5
				},
				"page_number": {
					"description": "当前页号",
					"type": "integer",
					"example": 5
				},
				"page_size": {
					"description": "每页列表长度",
					"type": "integer",
					"example": 10
				},
				"total_items": {
					"description": "项目总数",
					"type": "integer",
					"example": 48
				},
				"items_offset": {
					"description": "当前项目偏移量",
					"type": "integer",
					"example": 40
				},
				"items_length": {
					"description": "当前页项目数",
					"type": "integer",
					"example": 8
				},
				"items": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/config.pre_rule_http"
					}
				}
			}
		},
		"config.pre_rule_http": {
			"type": "object",
			"required": [
				"name",
				"action"
			],
			"properties": {
				"name": {
					"description": "必选参数；指定前置策略的名称, 在配置中必须唯一。",
					"type": "string",
					"example": "url-sched"
				},
				"description": {
					"type": "string",
					"description": "可选参数；用来对此配置增加额外的备注。"
				},
				"service": {
					"description": "必选参数；指定前置策略的类型；HTTP前置策略中，此字段设置为http。",
					"type": "string",
					"enum": [
						"HTTP"
					],
					"default": "HTTP"
				},
				"source_address": {
					"description": "可选参数; 指定前置策略匹配的源地址，默认为所有源地址。",
					"type": "object",
					"required": [
						"type"
					],
					"properties": {
						"type": {
							"description": "必选参数; 指定前置策略匹配的源地址类型，源IP范围的类型：all（所有IP）、ip-address（IP地址）、custom-address-group（用户地址集）、isp-address-group（ISP地址集），默认为all。",
							"type": "string",
							"enum": [
								"ALL",
								"IP-ADDRESS",
								"CUSTOM-ADDRESS-GROUP",
								"ISP-ADDRESS-GROUP"
							],
							"default": "ALL",
							"example": "ALL"
						},
						"address": {
							"description": "可选参数; 源地址类型为ip-address时，指定具体的地址或地址范围或子网。",
							"type": "string",
							"example": "192.168.1.1/24"
						},
						"ref_custom_address_group": {
							"description": "可选参数; 源地址类型为custom-address-group时，指定具体的用户地址集。",
							"type": "string",
							"example": "{custom_address_group}"
						},
						"ref_isp_address_group": {
							"description": "可选参数; 源地址类型为isp_address_group时，指定具体的isp地址段。",
							"type": "string",
							"example": "{isp_address_group}"
						}
					}
				},
				"http_request_method_rule": {
					"description": "可选参数; 指定该前置策略匹配的http协议method方法，可选的方法有：all（所有）、get、post，默认为all。",
					"type": "string",
					"enum": [
						"ALL",
						"GET",
						"POST"
					],
					"default": "ALL"
				},
				"http_request_version_rule": {
					"description": "可选参数; 指定该前置策略匹配的http协议version版本，可选的版本有：all（所有）、http/1.0、http/1.1，默认为all。",
					"type": "string",
					"enum": [
						"ALL",
						"HTTP/1.0",
						"HTTP/1.1"
					],
					"default": "ALL"
				},
				"http_request_uri_rule": {
					"description": "可选参数；http请求URI规则",
					"$ref": "/api/{common}.yaml#/definitions/config.str_match_component"
				},
				"http_request_header_rules": {
					"description": "可选参数；HTTP请求头部匹配规则列表",
					"type": "array",
					"items": {
						"description": "可选参数；单个Http header匹配条件",
						"$ref": "/api/{common}.yaml#/definitions/config.http_header_match_component1"
					},
					"maxItems": 4
				},
				"action": {
					"description": "可选参数；指定该前置策略匹配后的执行动作，可选的动作有：sched-pool（调度节点池）、sched-pool-and-rewrite（调度并改写）、tcp-fin（FIN关闭连接）、tcp-rst（RST关闭连接）、http-response（返回自定义内容）。",
					"type": "string",
					"enum": [
						"SCHED-POOL",
						"SCHED-POOL-AND-REWRITE",
						"TCP-FIN",
						"TCP-RST",
						"HTTP-RESPONSE",
						"URL-REDIRECT"
					],
					"example": "SCHED-POOL"
				},
				"url_location": {
					"description": "重定向的URL",
					"type": "string",
					"example": "http://index.html"
				},
				"http_response": {
					"description": "可选参数; 执行动作为http-response时，指定返回的自定义内容。",
					"type": "string",
					"example": "200_OK"
				},
				"sched_pool": {
					"description": "可选参数; 执行动作为sched-pool或sched-pool-and-rewrite时，指定调度的节点池。",
					"type": "string",
					"example": "web_oa_80_pool"
				},
				"sched_failure": {
					"description": "可选参数; 执行动作为sched-pool时，指定调度失败后的执行动作，可选的动作有：next-rule（匹配下一条）、tcp-fin（FIN关闭连接）、tcp-rst（RST关闭连接）、http-response（返回自定义内容），默认为继续匹配下一条策略。",
					"type": "string",
					"enum": [
						"NEXT-RULE",
						"TCP-FIN",
						"TCP-RST",
						"HTTP-RESPONSE"
					],
					"default": "NEXT-RULE"
				},
				"sched_failure_http_response": {
					"description": "可选参数; 执行动作为sched-pool，调度失败后的执行动作为http-response时，指定返回的具体自定义内容。",
					"type": "string",
					"example": "400_Not_Found"
				},
				"rewrite_requests": {
					"description": "可选参数; 执行动作为sched-pool-and-rewrite时，指定请求改写策略。",
					"type": "array",
					"items": {
						"description": "单个引用请求改写",
						"type": "string",
						"example": "{rewrite-request}"
					},
					"maxItems": 5
				},
				"rewrite_responses": {
					"description": "可选参数; 执行动作为sched-pool-and-rewrite时，指定应答改写策略。",
					"type": "array",
					"items": {
						"description": "单个引用应答改写",
						"type": "string",
						"example": "{rewrite-response}"
					},
					"maxItems": 5
				}
			}
		}
	}
}
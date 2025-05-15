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
		"/api/ad/v3/slb/service-monitor/http/": {
			"description": "新建、查看监视器（HTTP）配置",
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
					"service-monitor"
				],
				"summary": "get all service-monitor-http",
				"description": "查看当前已有的监视器（HTTP）配置信息",
				"operationId": "get_service_monitor_http_list",
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
						"$ref": "#/responses/operation_config_service_monitor_http_list"
					}
				}
			},
			"post": {
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-http",
				"description": "新建一个监视器（HTTP）配置",
				"operationId": "add_service_monitor_http_list",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-HTTP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_http_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create slb service-monitor http http1 description http监视器 host * port 443 http_request_url /index.html expect_status_code 302",
					"description": "新建http类型的监视器http1，期望状态码302"
				},
				{
					"command": "modify slb service-monitor http http1 host 1.1.1.1",
					"description": "修改http监视器http1的监视主机为1.1.1.1"
				},
				{
					"command": "list slb service-monitor http http1",
					"description": "查看http监视器http1的配置信息"
				}
			]
		},
		"/api/ad/v3/slb/service-monitor/http/{name}": {
			"description": "新建、查看、修改、删除指定的监视器（HTTP）配置",
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
					"service-monitor"
				],
				"summary": "get specific service-monitor-http",
				"description": "查看指定的监视器（HTTP）配置",
				"operationId": "get_service_monitor_http",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_http_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-http",
				"description": "新建指定的监视器（HTTP）配置",
				"operationId": "create_service_monitor_http",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-HTTP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_http_object"
					}
				}
			},
			"put": {
				"tags": [
					"service-monitor"
				],
				"summary": "replace specific service-monitor-http",
				"description": "修改指定的监视器（HTTP）配置",
				"operationId": "replace_service_monitor_http",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-HTTP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_http_object"
					}
				}
			},
			"patch": {
				"tags": [
					"service-monitor"
				],
				"summary": "modify specific service-monitor-http",
				"description": "修改指定的监视器（HTTP）配置",
				"operationId": "edit_service_monitor_http",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-HTTP-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_http_object"
					}
				}
			},
			"delete": {
				"tags": [
					"service-monitor"
				],
				"summary": "delete specific service-monitor-http",
				"description": "删除指定的监视器（HTTP）配置",
				"operationId": "delete_service_monitor_http",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_http_object"
					}
				}
			}
		}
	},
	"parameters": {
		"SERVICE-MONITOR-HTTP-CONFIG": {
			"name": "SERVICE-MONITOR-HTTP-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_http"
			}
		},
		"SERVICE-MONITOR-HTTP-PROPERTY": {
			"name": "SERVICE-MONITOR-HTTP-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_http"
			}
		}
	},
	"responses": {
		"operation_config_service_monitor_http_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_http_list"
			}
		},
		"operation_config_service_monitor_http_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_http"
			}
		}
	},
	"definitions": {
		"config.service_monitor_http_list": {
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
						"$ref": "#/definitions/config.service_monitor_http"
					}
				}
			}
		},
		"config.service_monitor_http": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"description": "监视器名称",
					"type": "string",
					"example": "http"
				},
				"description": {
					"type": "string",
					"description": "可选参数；用来对此配置增加额外的备注。"
				},
				"type": {
					"description": "监视器类型",
					"type": "string",
					"enum": [
						"HTTP"
					],
					"default": "HTTP"
				},
				"timeout": {
					"description": "监视器监视超时时间",
					"type": "integer",
					"default": 16,
					"minimum": 1,
					"maximum": 86400,
					"example": 16
				},
				"interval": {
					"description": "间隔时间",
					"type": "integer",
					"default": 5,
					"minimum": 1,
					"maximum": 86400,
					"example": 5
				},
				"host": {
					"description": "Format: * | {IP} | {DOMAIN} | {HOST}",
					"type": "string",
					"default": "*",
					"optionalEnum": [
						"*"
					],
					"example": "8.8.8.8"
				},
				"port": {
					"description": "监视器监视端口",
					"type": "integer",
					"default": 80,
					"maximum": 65535,
					"minimum": 0,
					"example": 80
				},
				"debug_mode": {
					"description": "是否开启调试模式",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"gateway_detect": {
					"description": "透明模式开关",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"http_request_method": {
					"description": "请求方法",
					"type": "string",
					"default": "GET",
					"enum": [
						"GET",
						"POST",
						"PUT",
						"DELETE",
						"CONNECT",
						"TRACE",
						"HEAD",
						"OPTIONS",
						"PATCH"
					],
					"example": "GET"
				},
				"http_request_url": {
					"description": "请求URL/URI",
					"type": "string",
					"default": "/",
					"minLength": 1,
					"maxLength": 1023,
					"example": "/app/index.html"
				},
				"expect_status_code": {
					"description": "响应状态码",
					"type": "string",
					"default": "200;302",
					"minLength": 3,
					"maxLength": 255,
					"example": "200;302"
				},
				"receive_content_match": {
					"description": "接收内容",
					"type": "string",
					"maxLength": 256,
					"example": "200"
				},
				"reverse_result": {
					"description": "接受内容结果判定是否取反",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"send_host": {
					"description": "发送host",
					"type": "string",
					"default": "${rs_ip}",
					"minLength": 0,
					"maxLength": 1023,
					"example": "www.sinfor.com"
				}
			}
		}
	}
}
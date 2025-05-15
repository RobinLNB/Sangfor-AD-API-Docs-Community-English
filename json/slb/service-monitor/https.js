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
		"/api/ad/v3/slb/service-monitor/https/": {
			"description": "新建、查看监视器（HTTPS）配置",
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
				"summary": "get all service-monitor-https",
				"description": "查看当前已有的监视器（HTTPS）配置信息",
				"operationId": "get_service_monitor_https_list",
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
						"$ref": "#/responses/operation_config_service_monitor_https_list"
					}
				}
			},
			"post": {
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-https",
				"description": "新建一个监视器（HTTPS）配置",
				"operationId": "add_service_monitor_https_list",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-HTTPS-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_https_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create slb service-monitor https https1 description https监视器 host * port 443 http_request_url /index.html client_certificate a expect_status_code 302 ssl_cipher AES256",
					"description": "新建https类型的监视器https1，使用客户端证书a，加密套件aes256，期望状态码302"
				},
				{
					"command": "modify slb service-monitor https https1 host 1.1.1.1",
					"description": "修改https监视器https1的监视主机为1.1.1.1"
				},
				{
					"command": "list slb service-monitor https https1",
					"description": "查看https监视器https1的配置信息"
				}
			]
		},
		"/api/ad/v3/slb/service-monitor/https/{name}": {
			"description": "新建、查看、修改、删除指定的监视器（HTTPS）配置",
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
				"summary": "get specific service-monitor-https",
				"description": "查看指定的监视器（HTTPS）配置",
				"operationId": "get_service_monitor_https",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_https_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-https",
				"description": "新建指定的监视器（HTTPS）配置",
				"operationId": "create_service_monitor_https",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-HTTPS-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_https_object"
					}
				}
			},
			"put": {
				"tags": [
					"service-monitor"
				],
				"summary": "replace specific service-monitor-https",
				"description": "修改指定的监视器（HTTPS）配置",
				"operationId": "replace_service_monitor_https",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-HTTPS-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_https_object"
					}
				}
			},
			"patch": {
				"tags": [
					"service-monitor"
				],
				"summary": "modify specific service-monitor-https",
				"description": "修改指定的监视器（HTTPS）配置",
				"operationId": "edit_service_monitor_https",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-HTTPS-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_https_object"
					}
				}
			},
			"delete": {
				"tags": [
					"service-monitor"
				],
				"summary": "delete specific service-monitor-https",
				"description": "删除指定的监视器（HTTPS）配置",
				"operationId": "delete_service_monitor_https",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_https_object"
					}
				}
			}
		}
	},
	"parameters": {
		"SERVICE-MONITOR-HTTPS-CONFIG": {
			"name": "SERVICE-MONITOR-HTTPS-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_https"
			}
		},
		"SERVICE-MONITOR-HTTPS-PROPERTY": {
			"name": "SERVICE-MONITOR-HTTPS-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_https"
			}
		}
	},
	"responses": {
		"operation_config_service_monitor_https_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_https_list"
			}
		},
		"operation_config_service_monitor_https_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_https"
			}
		}
	},
	"definitions": {
		"config.service_monitor_https_list": {
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
						"$ref": "#/definitions/config.service_monitor_https"
					}
				}
			}
		},
		"config.service_monitor_https": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"description": "指定监视器的名称, 在配置中必须唯一。",
					"type": "string",
					"example": "http"
				},
				"description": {
					"type": "string",
					"description": "用来对此配置增加额外的备注。"
				},
				"type": {
					"description": "监视器类型",
					"type": "string",
					"enum": [
						"HTTPS"
					],
					"default": "HTTPS"
				},
				"timeout": {
					"description": "设置监视超时时间。",
					"type": "integer",
					"default": 16,
					"minimum": 1,
					"maximum": 86400,
					"example": 16
				},
				"interval": {
					"description": "设置监视间隔时间。",
					"type": "integer",
					"default": 5,
					"minimum": 1,
					"maximum": 86400,
					"example": 5
				},
				"host": {
					"description": "支持ip地址和*;默认为*，表示监视节点池中的地址",
					"type": "string",
					"default": "*",
					"optionalEnum": [
						"*"
					],
					"example": "8.8.8.8"
				},
				"port": {
					"description": "表示使用节点池中节点的端口；取值范围[0,65535],默认为0",
					"type": "integer",
					"default": 443,
					"maximum": 65535,
					"minimum": 0,
					"example": 443
				},
				"debug_mode": {
					"description": "调试模式开关，disable表示禁用，enable表示启用；默认禁用",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"gateway_detect": {
					"description": "透明监控开关，disable表示禁用，enable表示启用；默认禁用",
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
					"description": "监视的URL，默认为'/'",
					"type": "string",
					"default": "/",
					"minLength": 1,
					"maxLength": 1023,
					"example": "/app/index.html"
				},
				"expect_status_code": {
					"description": "期望接收到的状态码，默认为'200;302'；多个状态码中间用';'分隔",
					"type": "string",
					"default": "200;302",
					"minLength": 3,
					"maxLength": 255,
					"example": "200;302"
				},
				"ssl_cipher": {
					"description": "指定使用的加密套件，默认为'DEFAULT:+SHA:+3DES:+kEDH'",
					"type": "string",
					"default": "DEFAULT:+SHA:+kEDH",
					"minLength": 1,
					"maxLength": 255,
					"example": "DEFAULT:+SHA:+kEDH"
				},
				"client_certificate": {
					"description": "指定客户端证书，默认为none，表示不携带证书；或者通过资源管理模块创建/导入证书",
					"type": "string",
					"default": "NONE",
					"optionalEnum": [
						"NONE"
					],
					"example": "NONE"
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
					"example": "www.baidu.com"
				}
			}
		}
	}
}
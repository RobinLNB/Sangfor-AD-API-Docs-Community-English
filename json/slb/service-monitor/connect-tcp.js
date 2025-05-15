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
		"/api/ad/v3/slb/service-monitor/connect-tcp/": {
			"description": "新建、查看监视器（CONNECT-TCP）配置",
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
				"summary": "get all service-monitor-connect-tcp",
				"description": "查看当前已有的监视器（CONNECT-TCP）配置信息",
				"operationId": "get_service_monitor_connect_tcp_list",
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
						"$ref": "#/responses/operation_config_service_monitor_connect_tcp_list"
					}
				}
			},
			"post": {
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-connect-tcp",
				"description": "新建一个监视器（CONNECT-TCP）配置",
				"operationId": "add_service_monitor_connect_tcp_list",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-CONNECT-TCP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_connect_tcp_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create slb service-monitor connect-tcp tcpmonitor description tcp监视器 host * port 553 debug_mode enable send_content xxxxx send_content_before_disconnect yyyyy receive_content_match bbbb",
					"description": "新建tcp类型的监视器tcpmonitor,监视端口为553,启用调试模式，发送内容为xxxxx,断开发送数据yyyyy，接收内容匹配bbbb"
				},
				{
					"command": "modify slb service-monitor connect-tcp tcpmonitor host 4.4.4.4",
					"description": "修改TCP监视器tcpmonitor的监视主机为4.4.4.4"
				},
				{
					"command": "list slb service-monitor connect-tcp tcpmonitor",
					"description": "查看tcp监视器tcpmonitor的配置信息"
				}
			]
		}
	},
	"/slb/service-monitor/connect-tcp/{name}": {
		"description": "新建、查看、修改、删除指定的监视器（CONNECT-TCP）配置",
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
			"summary": "get specific service-monitor-connect-tcp",
			"description": "查看指定的监视器（CONNECT-TCP）配置",
			"operationId": "get_service_monitor_connect_tcp",
			"responses": {
				"200": {
					"$ref": "#/responses/operation_config_service_monitor_connect_tcp_object"
				}
			}
		},
		"post": {
			"deprecated": true,
			"tags": [
				"service-monitor"
			],
			"summary": "create new service-monitor-connect-tcp",
			"description": "新建指定的监视器（CONNECT-TCP）配置",
			"operationId": "create_service_monitor_connect_tcp",
			"parameters": [
				{
					"$ref": "#/parameters/SERVICE-MONITOR-CONNECT-TCP-CONFIG"
				}
			],
			"responses": {
				"200": {
					"$ref": "#/responses/operation_config_service_monitor_connect_tcp_object"
				}
			}
		},
		"put": {
			"tags": [
				"service-monitor"
			],
			"summary": "replace specific service-monitor-connect-tcp",
			"description": "修改指定的监视器（CONNECT-TCP）配置",
			"operationId": "replace_service_monitor_connect_tcp",
			"parameters": [
				{
					"$ref": "#/parameters/SERVICE-MONITOR-CONNECT-TCP-CONFIG"
				}
			],
			"responses": {
				"200": {
					"$ref": "#/responses/operation_config_service_monitor_connect_tcp_object"
				}
			}
		},
		"patch": {
			"tags": [
				"service-monitor"
			],
			"summary": "modify specific service-monitor-connect-tcp",
			"description": "修改指定的监视器（CONNECT-TCP）配置",
			"operationId": "edit_service_monitor_connect_tcp",
			"parameters": [
				{
					"$ref": "#/parameters/SERVICE-MONITOR-CONNECT-TCP-PROPERTY"
				}
			],
			"responses": {
				"200": {
					"$ref": "#/responses/operation_config_service_monitor_connect_tcp_object"
				}
			}
		},
		"delete": {
			"tags": [
				"service-monitor"
			],
			"summary": "delete specific service-monitor-connect-tcp",
			"description": "删除指定的监视器（CONNECT-TCP）配置",
			"operationId": "delete_service_monitor_connect_tcp",
			"responses": {
				"200": {
					"$ref": "#/responses/operation_config_service_monitor_connect_tcp_object"
				}
			}
		}
	},
	"parameters": {
		"SERVICE-MONITOR-CONNECT-TCP-CONFIG": {
			"name": "SERVICE-MONITOR-CONNECT-TCP-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_connect_tcp"
			}
		},
		"SERVICE-MONITOR-CONNECT-TCP-PROPERTY": {
			"name": "SERVICE-MONITOR-CONNECT-TCP-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_connect_tcp"
			}
		}
	},
	"responses": {
		"operation_config_service_monitor_connect_tcp_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_connect_tcp_list"
			}
		},
		"operation_config_service_monitor_connect_tcp_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_connect_tcp"
			}
		}
	},
	"definitions": {
		"config.service_monitor_connect_tcp_list": {
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
						"$ref": "#/definitions/config.service_monitor_connect_tcp"
					}
				}
			}
		},
		"config.service_monitor_connect_tcp": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"description": "必选参数；指定监视器的名称, 在配置中必须唯一。",
					"type": "string",
					"example": "http"
				},
				"description": {
					"type": "string",
					"description": "可选参数；用来对此配置增加额外的备注。"
				},
				"type": {
					"description": "只读参数；监视器类型。",
					"type": "string",
					"enum": [
						"CONNECT-TCP"
					],
					"default": "CONNECT-TCP"
				},
				"timeout": {
					"description": "可选参数；设置监视超时时间。",
					"type": "integer",
					"default": 16,
					"maximum": 86400,
					"minimum": 1,
					"example": 16
				},
				"interval": {
					"description": "可选参数；设置监视间隔时间。",
					"type": "integer",
					"default": 5,
					"maximum": 86400,
					"minimum": 1,
					"example": 5
				},
				"host": {
					"description": "可选参数；支持ip地址和*;默认为*，表示监视节点池中的地址；当启用gateway_detect时必须指定ip地址",
					"type": "string",
					"default": "*",
					"optionalEnum": [
						"*"
					],
					"example": "8.8.8.8"
				},
				"port": {
					"description": "可选参数；指定监视端口；取值范围[0,65535]，默认为0，表示使用节点池中节点的端口",
					"type": "integer",
					"default": 0,
					"maximum": 65535,
					"minimum": 0,
					"example": 0
				},
				"debug_mode": {
					"description": "可选参数；调试模式开关，disable表示禁用，enable表示启用；默认禁用。",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"gateway_detect": {
					"description": "可选参数；透明监控开关，disable表示禁用，enable表示启用；默认禁用。",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"send_content": {
					"description": "可选参数；指定监视发送内容。",
					"type": "string",
					"maxLength": 2048,
					"example": "GET / HTTP/1.1"
				},
				"receive_cache_size": {
					"description": "可选参数；指定接收缓冲区大小。",
					"type": "integer",
					"default": 2048,
					"maximum": 4096,
					"minimum": 1,
					"example": 4096
				},
				"receive_content_match": {
					"description": "可选参数；指定接收匹配内容",
					"type": "string",
					"maxLength": 256,
					"example": "200"
				},
				"reverse_result": {
					"description": "可选参数；指定是否做反向匹配。enable表示反向匹配,disable表示正向匹配,默认disable。",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"send_content_before_disconnect": {
					"description": "可选参数；指定断开之前发送内容。",
					"type": "string",
					"maxLength": 256
				},
				"hexadecimal_mode": {
					"description": "可选参数; 十六进制模式开关,enable表示启用,disable表示禁用,默认为disable",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				}
			}
		}
	}
}